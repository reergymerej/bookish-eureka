import Vue from 'vue'
// import default from App.vue
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // render the default, mounted to #app
  render: h => h(App),
}).$mount('#app')
