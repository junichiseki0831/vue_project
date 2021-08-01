import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
//グローバル登録
Vue.component('LikeNumber', LikeNumber);
//グローバルフィルター登録
Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
});

new Vue({
  //インポートしたrouterを登録
  router,
  store,
  render: h => h(App)
}).$mount('#app');
