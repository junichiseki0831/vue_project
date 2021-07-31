<template>
  <div>
    <h3>Users</h3>
    <hr>
    <h1>User No. {{ id }}</h1>
    <router-link :to="{ name: users-id-profiles, params: { id: Number(id) + 1}, query: {lang: 'ja', page:2}, hash: '#next-user'}">次のユーザー</router-link>
    <div style="height: 1400px;"></div>
    <router-link id="next-user" :to="{ name: users-id-profiles, params: { id: Number(id) + 1}, query: {lang: 'ja', page:2}, hash: '#next-user'}">次のユーザー</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
}
</script>