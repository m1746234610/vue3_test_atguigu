<template>
  <h2>人:{{ person }}</h2>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}k</h2>
  <button @click="name += '!'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">修改薪资</button>
  <hr />
  <!-- <h2>x:{{ x }}</h2> -->
  <!-- <button @click="x++">点我x+1</button> -->
  <h2>x.y:{{ x.y }}</h2>
  <button @click="x = { y: 888 }">点我替换x</button>
</template>

<script>
import { ref, reactive, toRefs, shallowReactive, shallowRef } from 'vue'
export default {
  name: 'Demo',
  setup() {
    // 数据
    // let person = shallowReactive({ // 只处理第一层数据的响应式
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    // let x = ref(0) === let x = shallowRef(0)
    let x = shallowRef({
      y: 0
    })

    return {
      x,
      person,
      ...toRefs(person)
    }
  }
}
</script>