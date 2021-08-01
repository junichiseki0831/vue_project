<template>
  <nav>
    <h2>HomeHeader</h2>
    <router-link to="/" active-class="link--active" exact>Home</router-link>
    <router-link to="/users" active-class="link--active" exact>User</router-link>
    <button @click='increment'>+1</button>
    <button @click='decrement'>-1</button>
  </nav>
</template>

<script>
// import { mapMutations } from "vuex";

export default {
  methods: {
    // ...mapMutations(["increment", "decrement"])
    increment() {
      this.$store.dispatch('increment', 2)   
    },
    decrement() {
      this.$store.dispatch('decrement', 2)   
    }
  }
}
</script>