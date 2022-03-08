<template>
  <div class="app">
    <h2>我是App组件 {{ name }}--{{ price }}--{{ car.age }}</h2>
    <Children msg="父传子(该数据不是响应式数据)" @head="fu" />
  </div>
</template>

<script>
import Children from './components/Children.vue'
import { toRefs, reactive, provide, defineProps } from 'vue'
export default {
  name: 'App',
  components: {
    Children
  },
  setup() {
    let car = reactive({
      name: '保时捷',
      price: '40w'
    })

    const fu = (num) => {
      car.age = num
    }

    // let a = defineProps(['emitTest'])
    // console.log(a);

    // 通过provide传入数据，后代组件都可以获取到
    provide('car', car)

    return { car, ...toRefs(car),fu }
  }
}
</script>

<style>
.app {
  background: gray;
  padding: 10px;
}
</style>
