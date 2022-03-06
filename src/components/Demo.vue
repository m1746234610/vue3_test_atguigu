<template>
  <h2>当前求和为: {{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>当前的信息为: {{ msg }}</h2>
  <button @click="msg += '!'">修改事件</button>
  <hr />
  <h2>姓名:{{ person.name }}</h2>
  <h2>年龄:{{ person.age }}</h2>
  <h2>薪资:{{ person.job.j1.salary }}k</h2>
  <button @click="person.name += '!'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.j1.salary++">修改薪资</button>
</template>

<script>
import { ref, reactive, watch } from 'vue'
export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)
    let msg = ref('你好')
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    // 情况一: 监视ref所定义的一个响应式数据
    // watch(sum, (newValue, oldValue) => {
    //   console.log('sum变了', newValue, oldValue);
    // }, { immediate: true })

    // 情况二: 监视ref所定义的多个响应式数据
    // watch([sum, msg], (newValue, oldValue) => {
    //   console.log('sum或变了', newValue, oldValue);
    // },{immediate:true})
    // watch(msg, (newValue, oldValue) => {
    //   console.log('msg变了', newValue, oldValue);
    // })

    /* 
      情况三: 监视reative所定义的一个响应式数据的全部属性 
          1. 注意: 此处无法正确的获取oldValue（如果真的需要oldValue，目前解决方法是将用到oldValue的数据单独拿出去，使用ref函数）
          2. 注意: 强制开启深度监视（deep配置无效）
    */
    // watch(person, (newValue, oldValue) => {
    //   console.log('person变了', newValue, oldValue);
    // },{deep:true}) // 此处的deep配置无法生效

    // 情况四: 监视reative所定义的一个响应式数据的某一个属性
    // watch(() => person.age, (newValue, oldValue) => {
    //   console.log('person变了', newValue, oldValue);
    // })

    // 情况五: 监视reative所定义的一个响应式数据的某些属性
    // watch([() => person.name, () => person.age], (newValue, oldValue) => {
    //   console.log('person变了', newValue, oldValue);
    // })

    // 特殊情况
    /*  
      watch(person.job, (newValue, oldValue) => {
        console.log('person变了', newValue, oldValue);
      })  === watch(()=>person.job, (newValue, oldValue) => {
        console.log('person变了', newValue, oldValue);
      },{deep:true}) // 此处的deep配置又可以生效
    */


    return {
      sum,
      msg,
      person
    }
  }
}
</script>

<style>
</style>