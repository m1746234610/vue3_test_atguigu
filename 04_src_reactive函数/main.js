// 引入的不是Vue构造函数了，引入的是一个名为createApp的工厂函数
/* 
  工厂函数和构造函数的区别: 
      1.首字母不大写 
      2.调用的时候不用通过new关键字
*/
import { createApp } from 'vue'
import App from './App.vue'

// 创建一个工厂实例对象——app(类似与Vue2中的vm，但比vm更"轻")
const app = createApp(App)

// 挂载
app.mount('#app')


// const vm = new Vue({ render: h => h(App) })
// vm.$mount('#app')