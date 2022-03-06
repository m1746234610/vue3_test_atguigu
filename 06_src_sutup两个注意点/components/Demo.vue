<template>
  <h1>我是App</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>msg：{{ person.msg }}</h2>
  <slot name="qwe"></slot>
  <slot name="asd"></slot>
  <button @click="test">测试触发一下</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'Demo',
  // beforeCreate(){
  //   console.log('beforCreate-----');
  // },

  // 在这里需要通过props接收一下父组件传递的数据，否则vue会警告
  props: ['msg', 'val'],
  emits:['hello'],
  setup(props, context) {
    // console.log('setup-----',this);
    // console.log('setup-----', props);
    // console.log('setup-----', context.attrs); // 子组件未通过props接收的数据
    // console.log('setup-----', context.emit); // 触发自定义事件
    console.log('setup-----', context.slots); // 插槽


    // 数据
    let person = reactive({
      name: '穆家宝',
      age: 22,
      msg: props.msg
    })

    function test(){
      context.emit('hello',666)
    }

    return {
      person,
      test
    }
  }
}
</script>

<style>

</style>