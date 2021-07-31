<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersへ</button>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      //router経由で画面の切り替え
      this.$router.push('users');
    }
  }
}
</script>