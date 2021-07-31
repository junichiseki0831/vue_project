<template>
  <div>
    <h3>Users</h3>
    <hr>
    <h1>User No. {{ id }}</h1>
    <router-link :to="{ name: users-id-profiles, params: { id: Number(id) + 1}}">次のユーザー</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
}
</script>