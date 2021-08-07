import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';

Vue.config.productionTip = false

//URLにデフォルト値をつける
axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/vuejs-http-38403/databases/(default)/documents";

//全てのリクエストヘッダーにトークンを付与する
axios.defaults.headers.common['Authorization'] = "gdjhsgidkoikaehjhwukdhikuh";
//getリクエストのヘッダーにのみ値を付与する
axios.defaults.headers.get['Accept'] = "application/json";

new Vue({
  render: h => h(App)
}).$mount('#app');
