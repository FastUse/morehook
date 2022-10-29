<script setup lang="ts">
import { computed } from 'vue'
import type { VueUseFunction } from '../../../metadata/types'
import { renderMarkdown } from '../utils'

const props = defineProps<{ fn: VueUseFunction }>()

function styledName(name: string) {
  if (name.startsWith('use'))
    return `<span style="opacity: 0.7;">use</span>${name.slice(3)}`
  if (name.startsWith('try'))
    return `<span style="opacity: 0.7;">try</span>${name.slice(3)}`
  if (name.startsWith('on'))
    return `<span style="opacity: 0.7;">on</span>${name.slice(2)}`
  return name
}

const link = computed(() => {
  if (props.fn.external) {
    return {
      href: props.fn.external,
      target: '_blank',
    }
  }
  return { href: `/${props.fn.package}/${props.fn.name}/` }
})
</script>

<template>
  <div class="function-badge">
    <a v-bind="link">
      <span v-html="styledName(fn.name)" />
      <i v-if="fn.external" class="external" />
    </a>
    <span class="line">-</span>
    <span v-html="renderMarkdown(fn.description)" />
  </div>
</template>

<style scoped lang="scss">
.function-badge {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 6px;

  a {
    border-radius: 6px;
    padding: 0 4px;
    background-color: #9ca3af0d;

    .external {
      opacity: 0.8;
    }
  }

  .line {
    opacity: 0.6;
    padding: 0 6px;
  }
}
</style>
