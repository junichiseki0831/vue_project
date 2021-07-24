<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  export default {
    //親コンポーネント(App.vue)から子コンポーネント(LikeNumber)へデータを渡す
    //propsにバリデーションをかける
    props: {
      totalNumber: {
        type: Number,
        default: 5
        //defaultにオブジェクトで指定する場合↓
        // default: function() {
        //   return {
        //     number: 5
        //   }
        // }
      }
    },
    computed: {
      halfNumber() {
        return this.totalNumber / 2
      }
    },
    methods: {
      increment() {
        //$emitでカスタムイベント作成と子コンポーネントの値を親コンポーネントに渡す
        this.$emit("my-click", this.totalNumber + 1)
      }
    }
  }
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>
