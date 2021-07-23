<template>
  <div>
    <!-- ローカル登録した<LikeHeader>を使用する。 -->
    <LikeHeader></LikeHeader>
    <!-- グローバル登録した<LikeNumber>を使用する。 -->
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
//./LikeHeader.vueをインポート
import LikeHeader from "./LikeHeader.vue"

export default {
  //ローカルに<LikeHeader>コンポーネントを登録する。
  components: {
    LikeHeader
  }
}
</script>