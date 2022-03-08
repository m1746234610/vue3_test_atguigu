<template>
  <h1>我是App</h1>
  <h2>
    姓：
    <input type="text" v-model="data.sur" />
  </h2>
  <h2>
    名：
    <input type="text" v-model="data.name" />
  </h2>
  <h2>全名：{{ data.fullName }}</h2>

  <h2>全名：<input type="text" v-model="data.fullName"></h2>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'Demo',
  setup() {
    let data = reactive({
      sur: '穆',
      name: '家宝'
    })

    // 计算属性--简写(无法修改)
    // data.fullName = computed(() => { 
    //   return data.sur + '-' + data.name
    // })

    // 计算属性--完整写法(可以读/改)
    data.fullName = computed({
      get() {
        return data.sur + '-' + data.name
      },
      set(value) {
        let name = value.split('-')
        data.sur = name[0]
        data.name = name[1]
      }
    })

    return {
      data
    }
  }
}
</script>

<style>
</style>