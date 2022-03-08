<template>
  <div class="son">
    <h2>我是Son {{ name }}--{{ price }}</h2>
  </div>
</template>

<script>
import { toRefs, inject } from "vue"
export default {
  name: 'Son',
  setup() {
    // 所有后代都可以通过inject获取数据（数据是响应式的）
    let car = inject('car')
    return { ...toRefs(car) }
  }
}
</script>

<style>
.son {
  background: yellow;
  padding: 10px;
}
</style>