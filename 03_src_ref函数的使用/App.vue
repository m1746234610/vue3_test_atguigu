<template>
  <h1>我是App</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>工作：{{ job.type }}</h2>
  <h2>薪水：{{ job.salary }}</h2>
  <button @click="changeInfo">修改个人信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    let name = ref('穆家宝')
    let age = ref(22)
    let job = ref({
      type: '前端工程师',
      salary: '6k'
    })

    function changeInfo() {
      name.value = '李四'
      age.value = 30
      job.value.type = '后端工程师'
      job.value.salary = '7k'
      console.log(name, age, job, job.value.type);
    }

    return {
      name,
      age,
      job,
      changeInfo
    }
  }
}
</script>

<style>
</style>
