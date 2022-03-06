<template>
  <Demo @hello="lll" msg="666" val="123">
    <template v-slot:qwe>
      <span>啦啦啦</span>
    </template>
    <template v-slot:asd>
      <span>啦啦啦!!!</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
  name: 'App',
  components: { Demo },
  setup() {
    function lll(value) {
      console.log(123123, value);
    }

    return {
      lll
    }
  }
}
</script>

<style>
</style>
