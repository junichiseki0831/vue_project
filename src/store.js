import Vue from 'vue';
import Vuex from 'vuex';
//認証用のカスタムインスタンス読み込み
import axios from "./axios-auth";
import router from "./router";
import axiosRefresh from "./axios-refresh";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null
  },
  getters: {
    idToken: state => state.idToken
  },
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    }
  },
  actions: {
    login({ commit, dispatch }, authData) {
      axios.post(
        //firebaseのログイン用URL
        '/accounts:signInWithPassword?key=AIzaSyDj85gVn62w18mQYwvuGV9Ve3vLwHyKoO4',
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      ).then(response =>{
        commit('updateIdToken', response.data.idToken);
        setTimeout(() => {
          dispatch('refreshToken', response.data.refreshToken);
        }, response.data.expiresIn * 1000);
        //ログイン後掲示板にリダイレクト
        router.push('/');
      });
    },
    refreshIdToken({ commit, dispatch }, refreshToken) {
      axiosRefresh.post(
        '/token?key=AIzaSyDj85gVn62w18mQYwvuGV9Ve3vLwHyKoO4',
        {
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        }
      ).then(response => {
        commit("updateIdToken", response.data.id_token);
        setTimeout(() => {
            dispatch('refreshIdToken', response.data.refresh_token);
        }, response.data.expires_in * 1000);
      });
    },
    register({ commit }, authData) {
      axios.post(
        '/accounts:signUp?key=AIzaSyDj85gVn62w18mQYwvuGV9Ve3vLwHyKoO4',
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      ).then(response =>{
        commit('updateIdToken', response.data.idToken);
        //登録後掲示板にリダイレクト
        router.push('/');
      });
    }
  }
});