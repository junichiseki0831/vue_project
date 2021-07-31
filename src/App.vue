<template>
  <div>
    <nav>
      <router-link to="/" active-class="link--active" exact>Home</router-link>
      <router-link to="/users" active-class="link--active" exact>User</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .link--active {
    font-size: 20px;
  }
</style>