<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading"></Spinner>
    <template v-else>
      <h1 class="mt-5">美食達人</h1>
      <hr />
      <div class="row text-center">
        <div class="col-3" v-for="user in users" :key="user.id">
          <router-link :to="{ name: 'user', params: { id: user.id } }">
            <img
              :src="user.image | emptyImageFilter"
              width="140px"
              height="140px"
            />
          </router-link>
          <h2>{{ user.name }}</h2>
          <span class="badge badge-secondary"
            >追蹤人數：{{ user.followerCount ? user.followerCount : 0 }}</span
          >
          <p class="mt-3">
            <button
              v-if="user.isFollowed"
              type="button"
              class="btn btn-danger"
              @click="deleteFollowing(user.id)"
            >
              取消追蹤
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click="addFollowing(user.id)"
            >
              追蹤
            </button>
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import { emptyImageFilter } from "./../utils/mixins";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import Spinner from "../components/Spinner";
export default {
  name: "UsersTop",
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
    Spinner,
  },
  created() {
    this.fetchTopUsers();
  },
  data() {
    return {
      users: [],
      isLoading: true,
    };
  },
  methods: {
    async fetchTopUsers() {
      try {
        this.isLoading = true;
        const { data } = await usersAPI.getTopUsers();
        // console.log(data);
        this.users = data.users.map((user) => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount, // 主要用來改成小寫
          isFollowed: user.isFollowed,
        }));
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試！",
        });
      }
    },
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollow(userId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        // renew data
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isFollowed: true,
            };
          } else {
            return user;
          }
        });
        Toast.fire({
          icon: "error",
          title: "追蹤成功！",
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法追蹤，請稍後再試！",
        });
      }
    },
    async deleteFollowing(userId) {
      // Todo: tell serve to follow or unfollow this user via API
      try {
        const { data } = await usersAPI.deleteFollow(userId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        // renew data
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isFollowed: false,
            };
          } else {
            return user;
          }
        });
        Toast.fire({
          icon: "error",
          title: "已取消追蹤！",
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試！",
        });
      }
    },
  },
};
</script>

<style scoped>
</style>