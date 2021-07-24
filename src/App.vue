<template>
  <div>
    <!-- ローカル登録した<LikeHeader>を使用する。 -->
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <!-- グローバル登録した<LikeNumber>を使用する。 -->
    <!-- :total-number="number" 親から取得した値を動的に描画する。 -->
    <!-- @my-click="$event"     子から取得した取得した値を$eventで取得し{{ number }}（data:number)に反映する。 -->
    <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
//./LikeHeader.vueをインポート
import LikeHeader from "./components/LikeHeader.vue"

export default {
  data() {
    return { 
      number: 14
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
