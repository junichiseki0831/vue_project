import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';

// Routerを使用する宣言
Vue.use(Router);

// Routerをエクスポートする
export default new Router({
  mode: "history",
  //ルーティング先とコンポーネントをマッピングする
  routes: [{path: '/', component: Home}, {path: '/users', component: Users}]
});
