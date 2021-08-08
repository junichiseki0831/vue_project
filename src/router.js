import Vue from 'vue';
import Router from 'vue-router';
import Comments from './views/Comments.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import store from './store';

Vue.use(Router);

export default new Router({
  made: 'history',
  routes: [
    {
      path: '/',
      component: Comments,
      //idTokenがあれば掲示板へ、なければログインページへ
      beforeEnter(to, from, next) {
        if(store.getters.idToken) {
          next();
        } else {
          next('/login');
        }
      }
    },
    {
      path: '/login',
      component: Login,
      beforeEnter(to, from, next) {
        if(store.getters.idToken) {
          next('/');
        } else {
          next();
        }
      }
    },
    {
      path: '/register',
      component: Register,
      beforeEnter(to, from, next) {
        if(store.getters.idToken) {
          next('/');
        } else {
          next();
        }
      }
    }
  ]
});