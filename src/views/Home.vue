<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersへ</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      //vuexによって$storeにアクセスすることが可能になる
      return this.$store.state.count;
    }
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