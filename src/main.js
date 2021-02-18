import Vue from 'vue'
import App from './App.vue'
import VueValidate from 'vuelidate'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)
Vue.use(VueValidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
