import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'
import store from './store'
import BaseModel from '@/models/Base'
Vue.use(BootstrapVue)
Vue.config.productionTip = true

BaseModel.httpClient = axios
BaseModel.baseURL = '/api'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
