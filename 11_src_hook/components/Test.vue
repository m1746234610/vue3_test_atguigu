<template>
  <h1>我是Test</h1>
  <h2 v-show="coord.x">x:{{ coord.x }}</h2>
  <h2 v-show="coord.y">y:{{ coord.y }}</h2>
</template>

<script>
import usePoint from '../hooks/usePoint'
export default {
  name: 'Test',
  setup() {
    let coord = usePoint()
    return { coord }
  }
}
</script>

<style>
</style>