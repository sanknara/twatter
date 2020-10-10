<template>
  <div class="user-profile">
    <div class="user-profile__sidebar">
      <div class="user-profile__user-panel">
        <h1 class="user-profile__username">@{{ user.username }}</h1>
        <!-- <h2>{{ userId }}</h2> -->
        <div
          class="user-profile__admin-badge"
          v-if="user.isAdmin || followers > 10"
        >
          Admin
        </div>
        <div class="user-profile__follower-count">
          <strong> Followers: </strong> {{ followers }}
        </div>
      </div>
      <CreateTwaatPanel @add-twaat="addTwaat" />
    </div>
    <div class="user-profile__twaats-wrapper">
      <TwaatItem
        v-for="twaat in user.twaats"
        :key="twaat.id"
        :username="user.username"
        :twaat="twaat"
        @twaat-click="toggleClick"
      />
    </div>
  </div>
</template>
<script>
import TwaatItem from "@/components/TwaatItem";
import CreateTwaatPanel from "@/components/CreateTwaatPanel";
import { users } from "../assets/users";
import { useRoute } from "vue-router";
export default {
  name: "UserProfile",
  components: { TwaatItem, CreateTwaatPanel },
  $route: useRoute(),
  data() {
    return {
      followers: 0,
      user: users[this.$route.params.userId - 1],
    };
  },
  // computed: {
  //   userId() {
  //     return this.$route.params.userId;
  //   },
  // },
  methods: {
    toggleClick(id) {
      console.log("favourite twaat click #" + id);
    },

    addTwaat(twaatContent) {
      this.user.twaats.unshift({
        id: this.user.twaats.length + 1,
        content: twaatContent,
      });

      //if userid exists fetch corresponding user :
    },
  },
};
</script>
<style lang="scss" scoped>
.user-profile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 50px;
  padding: 50px 5%;

  .user-profile__user-panel {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #dfe3e8;
    margin-bottom: auto;

    h1 {
      margin: 0;
    }

    .user-profile__admin-badge {
      background: rebeccapurple;
      color: white;
      border-radius: 5px;
      margin-right: auto;
      padding: 0 10px;
      font-weight: bold;
    }
  }

  .user-profile__twaats-wrapper {
    display: grid;
    grid-gap: 10px;
    margin-bottom: auto;
  }
}
</style>