<template>
  <div class="app">
    <h2>我是App组件</h2>
    <Suspense>
      <template v-slot:default>
        <Children />
      </template>
      <template v-slot:fallback>
        <h3>稍后，加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Children from './components/Children.vue' // 静态引入组件
import { defineAsyncComponent } from 'vue'
const Children = defineAsyncComponent(() => import('./components/Children.vue')) // 异步引入组件

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
