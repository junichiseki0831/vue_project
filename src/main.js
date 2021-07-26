import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
//グローバル登録
Vue.component('LikeNumber', LikeNumber);
//グローバルフィルター登録
Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
});

new Vue({
  render: h => h(App)
}).$mount('#app');
