import Vue from 'vue'
import App from './App'
import fly from './utils/http'

Vue.config.productionTip = false
Vue.prototype.$http = fly
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
Vue.prototype.global = getApp().globalData // 什么作用？
