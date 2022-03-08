<template>
  <h2>当前求和为: {{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2 v-show="coord.x">x:{{ coord.x }}</h2>
  <h2 v-show="coord.y">y:{{ coord.y }}</h2>
</template>

<script>
import {
  ref
} from 'vue'
import usePoint from '../hooks/usePoint'
export default {
  name: 'Demo',
  setup() {
    let sum = ref(0)
    let coord = usePoint()

    return { sum, coord }
  },

}
</script>

<style>
</style>