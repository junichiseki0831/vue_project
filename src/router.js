import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import UsersPosts from './views/UsersPosts.vue';
import UsersProfile from './views/UsersProfile.vue';

// Routerを使用する宣言
Vue.use(Router);

// Routerをエクスポートする
export default new Router({
  //hashからhistoryモードへ変更
  mode: "history",
  //ルーティング先とコンポーネントをマッピングする
  routes: [
    {path: '/', component: Home}, 
    { path: '/users/:id',
      component: Users,
      props: true,
      children: [
        {path: "posts", component: UsersPosts},
        {path: "profile", component: UsersProfile, name: "users-id-profile"},
      ]
    }
  ]
});

