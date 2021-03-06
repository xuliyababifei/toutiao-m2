import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局样式文件
import '@/styles/index.less'
// 引入vant核心组件库
import Vant from 'vant'
// 加载全局vant样式
import 'vant/lib/index.css'
// 执行amfe-flexible模块
import 'amfe-flexible'

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
