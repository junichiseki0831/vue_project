<template>
  <div>
    <!-- bindingにオブジェクトでデータを渡す -->
    <!-- 引数(solid)・修飾子(round.shadow)を指定 -->
    <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">Home</p>
    <!-- フィルターを使った表示 -->
    <h2>{{ title | lowerCase }}</h2>
    <p>{{ subTitle | upperCase }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Welcome to Tokyo",
      subTitle: "Tokyo is a great city"
    };
  },
  //ローカルfilter登録
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  },
  // カスタムディレクティブのローカル登録
  directives: {
    border(el, binding) {
      // オブジェクトで渡されたデータを反映する
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      //引数を取得
      el.style.borderStyle = binding.arg;
      // 修飾子にroundがある場合
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      // 修飾子にshadowがある場合
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.26)";
      }
    }
  }
}
</script>