import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
//グローバル登録
Vue.component('LikeNumber', LikeNumber);
//カスタムディレクティブを定義（bindとupdateの省略記法）
Vue.directive("border", function(el, binding) {
  // el.style.border = "solid black 2px";
  // オブジェクトで渡されたデータを反映する
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
  //引数を取得
  el.style.borderStyle = binding.arg;
  // 修飾子にroundがある場合
  if (binding.modifiers.round) {
    el.style.borderRadius = "0.5rem";
  }
  // 修飾子にshadowがある場合
  if (binding.modifiers.shadow) {
    el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
  }
});

new Vue({
  render: h => h(App)
}).$mount('#app');
