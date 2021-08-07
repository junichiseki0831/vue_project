<template>
  <div id="app">
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム：</label>
    <input id="name" type="text" v-model="name">
    <br><br>
    <label for="comment">コメント：</label>
    <textarea id="comment" v-model="comment"></textarea>
    <br><br>
    <button @click="createComment">コメントをサーバーに送る</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key= "post.name">
      <br>
      <div>名前：{{post.fields.name.stringValue}}</div>
      <div>コメント：{{post.fields.comment.stringValue}}</div>
    </div>
  </div>
</template>

<script>
//axiosのインポート
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: []
    }
  },
  //created時にgetでデータを取得する
  created() {
    axios.get(
       "https://firestore.googleapis.com/v1/projects/vuejs-http-38403/databases/(default)/documents/comments"
    )
    //成功
    .then(response => {
      //dataのpostsに取得データを格納する
      this.posts = response.data.documents;
    });
  },
  methods: {
    //axiosにpostでデータを送信するメソッド
    createComment() {
      axios.post(
        "https://firestore.googleapis.com/v1/projects/vuejs-http-38403/databases/(default)/documents/comments",
        {
          fields: {
            name: {
              stringValue: this.name
            },
            comment: {
              stringValue: this.comment
            }
          }
        }
      )
      //post後、dataは空にしておく
      this.name = "";
      this.comment = "";
    }
  }
}
</script>

<style scoped>
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

</style>