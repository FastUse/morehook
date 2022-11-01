<template>
  <div>
    <p>当前网络状态:</p>
    <p>在线与不在线最后改变时间: {{ state.since }}</p>
    <p>网络是否为在线: {{ state.online }}</p>
    <p>当前连接下评估的往返时延: {{ state.rtt }}</p>
    <p>设备使用与所述网络进行通信的连接的类型: {{ state.type }}</p>
    <p>有效带宽估算（单位：兆比特/秒）: {{ state.downlink }}</p>
    <p>最大下行速度（单位：兆比特/秒）: {{ state.downlinkMax }}</p>
    <p>用户代理是否设置了减少数据使用的选项: {{ state.saveData }}</p>
    <p>网络连接的类型: {{ state.effectiveType }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useNetwork } from '@morehook/core'

const state = useNetwork()
</script>
