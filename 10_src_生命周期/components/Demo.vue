<template>
  <h2>当前求和为: {{ sum }}</h2>
  <button @click="sum++">点我+1</button>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted
} from 'vue'
export default {
  name: 'Demo',
  setup() {
    // 数据
    let sum = ref(0)

    // 组合API形式的生命周期在执行顺序上比配置项形式的生命周期函数执行顺序上要快
    console.log('---setup---');
    onBeforeMount(() => {
      console.log('---onBeforeMount---');
    })
    onMounted(() => {
      console.log('---onMounted---');
    })
    onBeforeUpdate(() => {
      console.log('---onBeforeUpdate---');
    })
    onUpdated(() => {
      console.log('---onUpdated---');
    })
    onBeforeUnmount(() => {
      console.log('---onBeforeUnmount---');
    })
    onUnmounted(() => {
      console.log('---onUnmounted---');
    })

    return { sum }
  },

  //#region 
  /*beforeCreate() {
      console.log('---beforeCreate---');
    },
    created() {
      console.log('---created---');
    },
    beforeMount() {
      console.log('---beforeMount---');
    },
    mounted() {
      console.log('---mounted---');
    },
    beforeUpdate() {
      console.log('---beforeUpdate---');
    },
    updated() {
      console.log('---updated---');
    },
    beforeUnmount() {
      console.log('---beforeUnmount---');
    },
    unmounted() {
      console.log('---unmounted---');
    } */
    //#endregion
}
</script>

<style>
</style>