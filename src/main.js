import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
//グローバル登録
Vue.component('LikeNumber', LikeNumber);
//カスタムディレクティブを定義（bindとupdateの省略記法）
Vue.directive("border", function(el, binding) {

});

new Vue({
  render: h => h(App),
}).$mount('#app')
