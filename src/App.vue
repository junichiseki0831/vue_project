<template>
  <div>
    <!-- ローカル登録した<LikeHeader>を使用する。 -->
    <!-- v-slotで子コンポーネントにhtmlを分割して渡す。 -->
    <LikeHeader>
      <template v-slot:title>
        <h1>トータルのいいね数</h1>
      </template>
      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template>
    </LikeHeader>
    <button @click="currentComponent = 'Home'">Home</button>
    <button @click="currentComponent = 'About'">About</button>
    <!-- componentタグとis属性で表示するコンポーネントを動的に変更する。 -->
    <!-- keep-aliveは動的コンポーネントで切り替えのたびにインスタンス削除されることを防ぐ。 -->
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
    
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
import Home from "./components/Home.vue"
import About from "./components/About.vue"

export default {
  data() {
    return { 
      number: 14,
      currentComponent: Home
    }
  },
  //ローカルに<LikeHeader>コンポーネントを登録する。
  components: {
    LikeHeader,
    Home,
    About
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
