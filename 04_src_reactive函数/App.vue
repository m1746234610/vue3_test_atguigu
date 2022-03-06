<template>
  <h1>我是App</h1>
  <h2 v-show="person.name">姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2 v-show="person.sex">性别：{{ person.sex }}</h2>
  <h2>工作：{{ person.job.type }}</h2>
  <h2>薪水：{{ person.job.salary }}</h2>
  <h2>爱好：{{ person.hobby }}</h2>
  <h2>测试b：{{ person.a.b }}</h2>
  <button @click="changeInfo">修改个人信息</button>
  <button @click="addInfo">添加个人信息</button>
  <button @click="delInfo">删除个人信息</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据
    let person = reactive({
      name: '穆家宝',
      age: 22,
      job: {
        type: '前端工程师',
        salary: '6k',
      },
      a: {
        b: 120
      },
      hobby: ['抽烟', '喝酒', '烫头']
    })


    // 方法
    function changeInfo() {
      person.name = '李四'
      person.age = 30
      person.job.type = '后端工程师'
      person.job.salary = '7k'
      person.hobby[0] = '学习'
      person.a.b = 210
    }

    function addInfo() {
      person.sex = '男'
    }

    function delInfo() {
      delete person.name
    }

    return {
      person,
      changeInfo,
      addInfo,
      delInfo
    }
  }
}
</script>

<style>
</style>
