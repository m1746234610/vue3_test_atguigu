<template>
  <h2>人:{{ person }}</h2>
  <h2>姓名:{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <h2>薪资:{{ job.j1.salary }}k</h2>
  <button @click="name += '!'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.j1.salary++">修改薪资</button>
</template>

<script>
import { reactive, ref, toRef,toRefs } from 'vue'
export default {
  name: 'Demo',
  setup() {
    // 数据
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    let x = toRefs(person)

    return {
      // name, 如果重名，后者会覆盖前者
      /*name: toRef(person, 'name'),
      age: toRef(person, 'age'),
      salary: toRef(person.job.j1, 'salary'), */
      person,
      ...x
    }
  }
}
</script>