<template>
  <nav>
    <h2>HomeHeader</h2>
    <router-link to="/" active-class="link--active" exact>Home</router-link>
    <router-link to="/users" active-class="link--active" exact>User</router-link>
    <button @click='increment(2)'>+1</button>
    <button @click='decrement(2)'>-1</button>
  </nav>
</template>

<script>
// import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  methods: {
    // ...mapMutations(["increment", "decrement"])
    ...mapActions(["increment", "decrement"])
    // increment() {
    //   this.$store.dispatch('increment', 2)   
    // },
    // decrement() {
    //   this.$store.dispatch('decrement', 2)   
    // }
  }
}
</script>