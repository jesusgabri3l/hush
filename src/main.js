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
import 'sweetalert2/dist/sweetalert2.min.css';

require('@/assets/styles/normalize.css')
//CSS - my styles
require('@/styles/css/styles.css')

//LIBRARIES
import VueCarousel from 'vue-carousel';
import VueSweetalert2 from 'vue-sweetalert2';

//OPTIONS FOR SWEET ALERT
const options = {
    confirmButtonColor: '#7a4a58',
    cancelButtonColor: '#ff7674',
};

Vue.use(BootstrapVue)
Vue.use(VueCarousel);
Vue.use(VueSweetalert2, options);


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
   this.$store.commit('initializeCart')
  }
}).$mount('#app')
