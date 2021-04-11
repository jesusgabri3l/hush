//GENERAL
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//CSS LIBRARY'S
import { BootstrapVue } from 'bootstrap-vue'

//CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
require('@/assets/styles/normalize.css')
//CSS - my styles
require('@/styles/css/styles.css')

//LIBRARIES
import VueCarousel from 'vue-carousel';


Vue.use(BootstrapVue)
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
