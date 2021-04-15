<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ UserComments.length }}</strong> 已評論餐廳
    </div>

    <div class="card-body">
      <router-link
        v-for="UserComment in UserComments"
        :key="UserComment.id"
        :to="{
          name: 'restaurant',
          params: { id: UserComment.RestaurantId },
        }"
      >
        <img
          :src="UserComment.Restaurant.image | emptyImageFilter"
          width="60"
          height="60"
          class="avatar"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../../utils/mixins";
export default {
  name: "UserCommentsCard",
  mixins: [emptyImageFilter],
  props: {
    UserComments: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.avatar {
  margin-right: 3px;
}
</style>