<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ UserFollowers ? UserFollowers.length : 0 }}</strong> followers
      (追隨者)
    </div>
    <div class="card-body">
      <template v-if="UserFollowers">
        <div
          class="followerImage"
          v-for="UserFollower in UserFollowers"
          :key="UserFollower.id"
        >
          <img :src="UserFollower.image | emptyImageFilter" alt="" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../../utils/mixins";

export default {
  name: "UserFollowerCard",
  mixins: [emptyImageFilter],
  props: {
    UserFollowers: {
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

.followerImage {
  width: 60px;
  height: 60px;
}

.followerImage img {
  width: 100%;
}
</style>