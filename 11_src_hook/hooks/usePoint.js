import {
  reactive,
  onBeforeMount,
  onBeforeUnmount
} from 'vue'

export default function () {
  // 记录左边相关的"数据"
  let coord = reactive({
    x: null,
    y: null
  })

  // 记录左边相关的"方法"
  function savePoint(e) {
    coord.x = e.pageX
    coord.y = e.pageY
    console.log(e.pageX, e.pageY);
  }

  // 记录左边相关的"生命周期钩子"
  onBeforeMount(() => {
    window.addEventListener('click', savePoint)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoint)
  })

  return coord
}