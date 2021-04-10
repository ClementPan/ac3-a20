<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'user', params: { id: user.id } }">
          <img :src="user.image" width="140px" height="140px" />
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.FollowerCount }}</span
        >
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click="toggleFollow(user)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click="toggleFollow(user)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$r5sNq7DnH82Ly.n0/QjqgOczyBgR3sQ6Yk8NSrKpJtgcJ.Kl0n81K",
      isAdmin: true,
      image: null,
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$ytpYqtTVPkE.8liOUf/ov.KnNcUMf8WNQzMqmWsIXK7x1VevkaVHy",
      isAdmin: false,
      image: null,
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$haSnB7YRouloMuOkAR.svO8hrQoT6rfMsg1SZy2hOyfT36isvc8OK",
      isAdmin: false,
      image: null,
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  name: "UsersTop",
  components: {
    NavTabs,
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    fetchData() {
      this.users = dummyData.users;
    },
    toggleFollow(user) {
      // Todo: tell serve to follow or unfollow this user via API

      // renew data
      user.isFollowed = !user.isFollowed;
    },
  },
};
</script>

<style scoped>
</style>