<script setup lang="ts">
import type { Ref } from 'vue-demi'
import { computed, toRef } from 'vue-demi'
import Fuse from 'fuse.js'
import { useEventListener, useUrlSearchParams } from '@vueuse/core'
import { categoryNames, functions, allCategories } from '../../../../packages/metadata/metadata'

const coreCategories = categoryNames.filter(i => !i.startsWith('@'))
const addonCategories = categoryNames.filter(i => i.startsWith('@'))
const sortMethods = ['category', 'name', 'updated']

// 分类详细说明
const categoryDetail = allCategories

useEventListener('click', (e) => {
  // @ts-expect-error cast
  if (e.target.tagName === 'A')
    window.dispatchEvent(new Event('hashchange'))
})

const query = useUrlSearchParams('hash-params', { removeFalsyValues: true })
const search = toRef(query, 'search') as Ref<string | null>
const category = toRef(query, 'category') as Ref<string | null>
const hasComponent = toRef(query, 'component') as any as Ref<boolean>
const hasDirective = toRef(query, 'directive') as any as Ref<boolean>
const sortMethod = toRef(query, 'sort') as Ref<'category' | 'name' | 'updated' | null>

const showCategory = computed(() => !search.value && (!sortMethod.value || sortMethod.value === 'category'))

// 全部的 hook 列表
const items = computed(() => {
  let fn = functions.filter(i => !i.internal)
  if (hasComponent.value) fn = fn.filter(i => i.component)
  if (hasDirective.value) fn = fn.filter(i => i.directive)
  if (!category.value) return fn
  return fn.filter(item => item.category === category.value)
})

// 搜索结果
const fuse = computed(() => new Fuse(items.value, {
  keys: ['name', 'description'],
}))

// 将搜索结果排序后生成展示的列表
const result = computed(() => {
  if (search.value) {
    return fuse.value.search(search.value).map(i => i.item)
  } else {
    const fns = [...items.value]
    if (sortMethod.value === 'updated') {
      fns.sort((a, b) => (b.lastUpdated) || 0 - (a.lastUpdated || 0))
    } else if (sortMethod.value === 'name') {
      fns.sort((a, b) => a.name.localeCompare(b.name))
    } else {
      fns.sort((a, b) => categoryNames.indexOf(a.category || '') - categoryNames.indexOf(b.category || ''))
    }
    return fns
  }
})

const hasFilters = computed(() => Boolean(search.value || category.value || hasComponent.value || sortMethod.value))

function resetFilters() {
  sortMethod.value = null
  category.value = null
  hasComponent.value = false
  search.value = null
}

function toggleCategory(cate: string) {
  category.value = category.value === cate ? null : cate
}

function toggleSort(method: string) {
  sortMethod.value = method as any
}
</script>

<template>
  <div class="function-list">

    <!-- 操作列表 -->
    <div class="action">
      <div class="sub-action">
        <div>Core</div>
        <div>
          <button v-for="cate of coreCategories" :key="cate" class="select-button"
            :class="{ active: category === cate }" @click="toggleCategory(cate)">
            {{ cate }}
          </button>
        </div>
      </div>
      <div class="sub-action">
        <div>Add-ons</div>
        <div>
          <button v-for="cate of addonCategories" :key="cate" class="select-button"
            :class="{ active: category === cate }" @click="toggleCategory(cate)">
            {{ cate.slice(1) }}
          </button>
        </div>
      </div>
      <div class="sub-action">
        <div>Sort by</div>
        <div>
          <button v-if="search" class="select-button active">
            Search
          </button>
          <button v-for="method of sortMethods" :key="method" class="select-button capitalize" :class="{
            active: method === (sortMethod || 'category'),
            disabled: search,
          }" @click="toggleSort(method)">
            {{ method }}
          </button>
        </div>
      </div>
    </div>

    <!-- 搜索框 -->
    <div class="line" style="margin-top: 20px" />
    <div class="search">
      <input v-model="search" type="text" placeholder="Search...">
    </div>
    <div class="line" style="margin-bottom: 20px" />

    <div class="relative">
      <!-- 清除手动搜索值 -->
      <div v-if="hasFilters" class="clear">
        <button class="select-button" @click="resetFilters()">
          Clear Filters
        </button>
      </div>

      <!-- 搜索结果 -->
      <template v-for="(fn, idx) of result" :key="fn.name">
        <h3 v-if="showCategory && fn.category !== result[idx - 1]?.category" class="category">
          {{ fn.category }}
          <h5>{{ categoryDetail[fn.category!] }}</h5>
        </h3>
        <FunctionBadge :fn="fn" />
      </template>

      <!-- 无结果 -->
      <div v-if="!result.length" class="no-result">没有搜索结果</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.function-list {
  padding-top: 50px;
  font-size: 14px;

  .select-button {
    border-radius: 6px;
    padding: 1px 5px;
    margin-right: 6px;
    background-color: #9ca3af0d;
  }

  .select-button:hover {
    background-color: #4245480d;
  }

  .select-button.active:not(.disabled) {
    background-color: #3eaf7c0d;
    color: rgba(62, 175, 124)
  }

  .select-button.disabled {
    opacity: 0.5;
    color: #213547;
  }

  .action {
    .sub-action {
      display: flex;
      margin-bottom: 16px;

      &>div:first-child {
        width: 80px;
      }
    }
  }

  .line {
    height: 1px;
    background-color: rgba(60, 60, 60, .12)
  }

  .search {
    padding: 8px 0;

    &>input {
      width: 100%;
    }
  }

  .relative {
    position: relative;
    padding-top: 10px;

    .clear {
      position: absolute;
      right: 0;
      top: -12px;
      z-index: 10;
      opacity: 0.5;
    }

    .no-result {
      text-align: center;
      padding-top: 60px;
      opacity: 0.5;
    }

    .category {
      padding-bottom: 20px;
      opacity: 0.6;

      &>h5 {
        font-size: 16px;
        margin-top: 6px;
        line-height: 18px;
        color: #666;
      }
    }
  }
}
</style>
