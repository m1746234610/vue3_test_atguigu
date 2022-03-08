<template>
  <div class="children">
    <h2>我是Children</h2>
    <h3>{{ sum }}</h3>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Children',
  async setup() {
    let sum = ref(0)

    /*  return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ sum })
          }, 3000);
        }) */

    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ sum })
      }, 3000);
    })
    return await p

  }
}
</script>

<style>
.children {
  background: skyblue;
  padding: 10px;
}
</style>