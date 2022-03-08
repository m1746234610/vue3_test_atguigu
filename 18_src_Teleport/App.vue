<template>
  <div class="app">
    <h2>我是App组件</h2>
    <Children />
  </div>
</template>

<script>
import Children from './components/Children.vue'
export default {
  name: 'App',
  components: {
    Children
  }
}
</script>

<style>
.app {
  background: gray;
  padding: 10px;
}
</style>
