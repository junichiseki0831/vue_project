import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import store from './store';

Vue.config.productionTip = false

//URLにデフォルト値をつける
axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/vuejs-http-38403/databases/(default)/documents";

//全てのリクエストヘッダーにトークンを付与する
//axios.defaults.headers.common['Authorization'] = "gdjhsgidkoikaehjhwukdhikuh";
//getリクエストのヘッダーにのみ値を付与する
//axios.defaults.headers.get['Accept'] = "application/json";

//サーバーへrequest前に前処理を行う
axios.interceptors.request.use(
  //リクエストが成功した場合
  config => {
    return config;
  },
  //リクエストが失敗した場合
  error => {
    //return errorだとthenに行くため、cathに行くように記述する必要がある
    return Promise.reject(error);
  }
);
//responseを返す直前に前処理を行う
axios.interceptors.response.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//上に記述したinterceptors処理を打ち消す（引数は各interceptorsのナンバリング）
axios.interceptors.request.eject(0);
axios.interceptors.response.eject(0);

//オートログイン実行
store.dispatch('autoLogin');
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
