<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ userFollowings.length }}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <div
        class="followingImage"
        v-for="userFollowing in userFollowings"
        :key="userFollowing.id"
      >
        <img :src="userFollowing.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFollowingsCard",
  props: {
    userFollowings: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-body {
  display: flex;
}

.followingImage {
  width: 60px;
  height: 60px;
}

.followingImage img {
  width: 100%;
}
</style>