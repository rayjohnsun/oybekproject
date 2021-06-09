import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './plugins/filters'
import './plugins/directives'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import './assets/_custom.scss'

Vue.config.productionTip = false

// Vue.mixin({
// 	created() {
// 		console.log('ggggggggggggggggggg')
// 	}
// })

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
