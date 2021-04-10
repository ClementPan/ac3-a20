<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ UserFollowers.length }}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <div
        class="followerImage"
        v-for="UserFollower in UserFollowers"
        :key="UserFollower.id"
      >
        <img :src="UserFollower.image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFollowerCard",
  props: {
    UserFollowers: {
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

.followerImage {
  width: 60px;
  height: 60px;
}

.followerImage img {
  width: 100%;
}
</style>