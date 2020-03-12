import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from "./mock-data.js"

Vue.config.productionTip = false

let data = {
  cars: mock,
  compare: []
}

let methods = {
  addToCompare(car) {
    if (!this.compare.includes(car)) {
      this.compare.push(car)
    }
  },
  removeFromCompare(car) {
    this.compare.splice(this.compare.indexOf(car), 1);
  }
}

new Vue({
  router,
  data,
  methods,
  render: h => h(App)
}).$mount('#app')
