<template>
  <div>
    <!-- bindingにオブジェクトでデータを渡す -->
    <!-- 引数(solid)・修飾子(round.shadow)を指定 -->
    <p v-border:solid.round.shadow="{width: '5px', color: 'red'}">Home</p>
  </div>
</template>