<template>
  <button @click="isShow = !isShow">显示/隐藏Demo组件</button>
  <Demo v-if="isShow" />
  <hr>
  <Test />
</template>

<script>
import Demo from './components/Demo.vue'
import Test from './components/Test.vue'
import { ref } from 'vue'
export default {
  name: 'App',
  components: { Demo, Test },
  setup() {
    let isShow = ref(true)

    return { isShow }
  }
}
</script>

<style>
</style>
