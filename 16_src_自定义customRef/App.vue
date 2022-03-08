<template>
  <input type="text" v-model="keyValue" />
  <h2>{{ keyValue }}</h2>
</template>

<script>
import { ref, customRef } from 'vue'
export default {
  name: 'App',
  setup() {
    // let keyValue = ref('')

    // 使用自定义ref
    function myRef(value, delay) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            console.log('get被调用了');
            // 追踪数据
            track()
            return value
          },
          set(newValue) {
            console.log('set被调用了', newValue);

            // 增添防抖
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              // 重新编译模板
              trigger()
            }, delay);
          }
        }

      })
    }
    let keyValue = myRef('', 500)


    return { keyValue }
  }
}
</script>

<style>
</style>
