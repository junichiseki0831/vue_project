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
    //自動ログイン処理
    async autoLogin({ commit, dispatch }) {
      //localStorageにトークンがあるか確認
      const idToken = localStorage.getItem('idToken');
      //無ければ終了
      if (!idToken) return;
      //トークンの有効期限確認
      const now = new Date();
      const expiryTimeMs = localStorage.getItem('expiryTimeMs');
      const isExpired = now.getTime() >= expiryTimeMs;

      const refreshToken = localStorage.getItem('refreshToken');
      //有効期限切れていたらリフレッシュトークン
      if(isExpired) {
        await dispatch('refreshToken', refreshToken);
      //有効期限切れていたら更新
      } else {
        const expiresInMs = expiryTimeMs - now.getTime();
        //どのくらいの有効期限が残っているのか確認
        setTimeout(() => {
          dispatch('refreshToken', refreshToken);
        }, expiresInMs);
        commit('updateIdToken', idToken);
      }
    },
    login({ dispatch }, authData) {
      axios.post(
        //firebaseのログイン用URL
        '/accounts:signInWithPassword?key=AIzaSyDj85gVn62w18mQYwvuGV9Ve3vLwHyKoO4',
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      ).then(response =>{
        dispatch('setAuthData', {
          idToken: response.data.idToken,
          expiresIn: response.data.expiresIn,
          refreshIdToken: response.data.refreshIdToken,
        });
        //ログイン後掲示板にリダイレクト
        router.push('/');
      });
    },
    //ログアウトメソッド
    logout({ commit }) {
      commit('updateIdToken', null);
      //localStorageのデータを削除
      localStorage.removeItem('idToken');
      localStorage.removeItem('expiryTimeMs');
      localStorage.removeItem('refreshToken');
      //ログインページへ遷移
      router.replace('/login');
    },
    async refreshIdToken({ dispatch }, refreshToken) {
      await axiosRefresh.post(
        '/token?key=AIzaSyDj85gVn62w18mQYwvuGV9Ve3vLwHyKoO4',
        {
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        }
      ).then(response => {
        dispatch('setAuthData', {
          idToken: response.data.id_token,
          expiresIn: response.data.expires_in,
          refreshIdToken: response.data.refresh_token,
        });
      });
    },
    register({ dispatch }, authData) {
      axios.post(
        '/accounts:signUp?key=AIzaSyDj85gVn62w18mQYwvuGV9Ve3vLwHyKoO4',
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      ).then(response =>{
        dispatch('setAuthData', {
          idToken: response.data.idToken,
          expiresIn: response.data.expiresIn,
          refreshIdToken: response.data.refreshIdToken,
        });
        //登録後掲示板にリダイレクト
        router.push('/');
      });
    },
    setAuthData({ commit, dispatch }, authData) {
      const now = new Date();
      const expiryTimeMs = now.getTime() + authData.expiresIn * 1000;
      commit('updateIdToken', authData.idToken);
      localStorage.setItem('idToken', authData.idToken);
      localStorage.setItem('expiryTimeMs', expiryTimeMs);
      localStorage.setItem('refreshToken', authData.refreshToken);
      setTimeout(() => {
        dispatch('refreshToken', authData.refreshToken);
      }, authData.expiresIn * 1000);
    }
  }
});