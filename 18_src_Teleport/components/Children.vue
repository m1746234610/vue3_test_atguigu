<template>
  <div class="children">
    <h2>我是Children</h2>
    <Son />
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  name: 'Children',
  components: { Son },
}
</script>

<style>
.children {
  background: skyblue;
  padding: 10px;
}
</style>