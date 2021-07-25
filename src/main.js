import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
//グローバル登録
Vue.component('LikeNumber', LikeNumber);
//カスタムディレクティブを定義（bindとupdateの省略記法）
Vue.directive("border", function(el, binding) {
  el.style.border = "solid black 2px";
  // オブゲクトで渡されたデータを反映する
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
});

new Vue({
  render: h => h(App)
}).$mount('#app');
