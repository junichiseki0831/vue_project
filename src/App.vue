<template>
  <div>
    <!-- ローカル登録した<LikeHeader>を使用する。 -->
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <!-- グローバル登録した<LikeNumber>を使用する。 -->
    <!-- 親から取得した値を動的に描画する。 -->
    <LikeNumber :number="number"></LikeNumber>
    <LikeNumber :number="number"></LikeNumber>
  </div>
</template>

<script>
//./LikeHeader.vueをインポート
import LikeHeader from "./components/LikeHeader.vue"

export default {
  data() {
    return { 
      number: 10
    }
  },
  //ローカルに<LikeHeader>コンポーネントを登録する。
  components: {
    LikeHeader
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
