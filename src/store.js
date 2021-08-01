import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
  //全体で使用できる環境変数のようなもの
  state: {
    count: 2
  }
})