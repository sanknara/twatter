<template>
  <div class="home">
    <h1>HOME</h1>
    <div class="users-label">USERS:</div>
    <div class="users-list">
      <router-link
        v-for="(user, index) in users"
        :key="index"
        :to="{ name: 'UserProfile', params: { userId: user.id } }"
      >
        {{ user.username }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { users } from "../assets/users";
export default {
  name: "Home",
  data() {
    return {
      users,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 50px 5%;

  .users-label {
    font-weight: bold;
    margin-bottom: 10px;
  }
  .users-list {
    display: flex;
    flex-direction: column;
    color: dodgerblue;
    text-decoration: underline;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>
