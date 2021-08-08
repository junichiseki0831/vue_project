import Vue from 'vue';
import Vuex from 'vuex';
//認証用のカスタムインスタンス読み込み
import axios from "./axios-auth";

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
    login({ commit }, authData) {
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
      });
    }
  }
});