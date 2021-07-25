import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
//グローバル登録
Vue.component('LikeNumber', LikeNumber);
//カスタムディレクティブを定義
Vue.directive("border", {
  //フック関数（ラウフサイクル）定義
  //ディレクティブが初めて対象の要素に紐づいた時
  bind(el, binding, vnode) {},
  //親ノードに挿入された時。
  inserted(el, binding, vnode, oldVnode) {},
  //コンポーネントが更新されるたび。子コンポーネントが更新される前。
  update(el, binding, vnode, oldVnode) {},
  //コンポーネントが更新されるたび。子コンポーネントが更新された後。
  componentUpdated(el, binding, vnode) {},
  //ディレクティブが紐づいている要素から取り除かれたとき。
  unbind(el, binding, vnode) {},
});

new Vue({
  render: h => h(App),
}).$mount('#app')
