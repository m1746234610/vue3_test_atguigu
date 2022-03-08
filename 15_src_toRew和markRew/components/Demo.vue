<template>
  <h2>当前求和为: {{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr />
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}k</h2>
  <h2 v-show="person.car">车:{{ person.car }}</h2>
  <button @click="name += '!'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">修改薪资</button>
  <button @click="changeToRew">变成普通数据</button>
  <button @click="changeMarkRew">添加车</button>
  <button @click="person.car.name += '!'">改车名</button>
  <button @click="addPrice">改车价格</button>
</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw } from 'vue'
export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    // toRew: 将响应式reative数据变成普通数据
    function changeToRew() {
      person = toRaw(person)
      console.log(person);
    }

    // markRew: 将数据标记成普通数据，永远不能成为响应式数据
    function changeMarkRew() {
      let car = { name: '保时捷', price: 100 }
      // person.car = car
      person.car = markRaw(car)
      console.log(person);
    }

    function addPrice(){
      person.car.price++
      console.log(person.car.price);
    }

    return {
      sum,
      person,
      ...toRefs(person),
      addPrice,
      changeToRew,
      changeMarkRew
    }
  }
}
</script>