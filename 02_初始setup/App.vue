<template>
  <h1>我是App</h1>
  <button @click="hello">欢迎</button>
  <button @click="a">欢迎vue2打印vue3的数据方法</button>
  <button @click="an">欢迎vue3打印vue2的数据方法</button>
</template>

<script>
import { h } from 'vue'
export default {
  name: 'App',
  data() {
    return {
      msg: '123123'
    }
  },
  methods: {
    a() {
      console.log(this.name, this.age, this.hello);
    }
  },

  // 此处只是测试一下setup，暂时不考虑响应式的问题 
  setup() {
    let name = '穆家宝'
    let age = 22
    function hello() {
      console.log(this);
    }

    function an() {
      console.log(this.a, this.msg, name);
    }

    // 返回数据、方法、计算属性....（常用）
    return {
      name,
      age,
      hello,
      an
    }

    // 返回一个渲染函数（了解）
    // return () => h('h2', '尚硅谷')


  }
}
</script>

<style>
</style>
