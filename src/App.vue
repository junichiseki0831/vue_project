<template>
  <div>
    <!-- ローカル登録した<LikeHeader>を使用する。 -->
    <LikeHeader>
      <h1>トータルのいいね数</h1>
      <h2>{{ number }}</h2>
    </LikeHeader>
    <!-- グローバル登録した<LikeNumber>を使用する。 -->
    <!-- :total-number="number" 親から取得した値を動的に描画する。 -->
    <!-- @my-click="number = $eventt"     子から取得した取得した値を$eventで取得し{{ number }}（data:number)に反映する。 -->
    <!-- <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber> -->
    <!-- @my-click="incrementNumber" カスタムイベントを発火させて、自らのmethodsを作動させるやり方。 -->
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <!-- @my-click="$event"     子から取得した取得した値を$eventで取得し{{ number }}（data:number)に反映する。 -->
    <!-- <LikeNumber :total-number="number" @my-click="number = $event"></LikeNumber> -->
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
  },
  methods: {
    //引数にvalueを使用することにより、$emitで渡された子コンポーネントの値が渡される。
    incrementNumber(value) {
      this.number = value  
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
