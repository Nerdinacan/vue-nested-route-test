import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SomeTool from './SomeTool'

// Try to configure a module and have it add on routes
// to the main router as part of its initialization
Vue.use(SomeTool, { router });

Vue.config.productionTip = false

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
