<template>
  <div>
    <h2>ログイン</h2>
    <label for="Email">Email：</label>
    <input id="email" type="email" v-model="email">
    <br><br>
    <label for="password">パスワード：</label>
    <input id="password" type="password" v-model="password">
    <br><br>
    <button @click="login">送信</button>
  </div>
</template>

<script>
//認証用のカスタムインスタンス読み込み
import axios from "../axios-auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios.post(
        //firebaseのログイン用URL
        '/accounts:signInWithPassword?key=AIzaSyDj85gVn62w18mQYwvuGV9Ve3vLwHyKoO4',
        {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        }
      ).then(response =>{
        console.log(response);
      });
    this.email = '';
    this.password = '';
    }
  }
}
</script>