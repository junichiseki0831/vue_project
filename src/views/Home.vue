<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersへ</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
//mapGettersをインポート
import { mapGetters } from "vuex";

export default {
  computed: {
    //まとめて書くことができる
    //...はオブジェクトを記述するためのES6スプレッド演算子
    ...mapGetters(["doubleCount", "tripleCount"]),
  },
  methods: {
    toUsers() {
      //router経由で画面の切り替え
      this.$router.push({
        name: "users-id-profile",
        params: {id: 1}
      });
    }
  }
}
</script>