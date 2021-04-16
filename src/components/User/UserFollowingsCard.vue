<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ userFollowings ? userFollowings.length : 0 }}</strong>
      followings (追蹤者)
    </div>
    <div class="card-body">
      <template v-if="userFollowings">
        <div
          class="followingImage"
          v-for="userFollowing in userFollowings"
          :key="userFollowing.id"
        >
          <img :src="userFollowing.image | emptyImageFilter" alt="" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../../utils/mixins";

export default {
  name: "UserFollowingsCard",
  mixins: [emptyImageFilter],
  props: {
    userFollowings: {
      type: Array,
      default: () => [],
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