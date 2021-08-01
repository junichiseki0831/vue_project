<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersへ</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    doubleCount() {
      //vuexによって$storeにアクセスすることが可能になる
      return this.$store.getters.doubleCount;
    },
    tripleCount() {
      return this.$store.getters.tripleCount;
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