<template>
  <div class="children">
    <h2>我是Children {{ msg }}</h2>
    <button @click="child">子传父</button>
    <Son />
  </div>
</template>

<script>
import Son from './Son.vue'
export default {
  name: 'Children',
  components: { Son },
  props: {
    msg: String
  },
  setup({ msg }, { emit }) {
    function child() {
      emit('head', 5)
    }

    return { msg, child }
  }
}
</script>

<style>
.children {
  background: skyblue;
  padding: 10px;
}
</style>