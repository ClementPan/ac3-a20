<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ FavoritedRestaurants.length }}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="FavoritedRestaurant in FavoritedRestaurants"
        :key="FavoritedRestaurant.id"
        :to="{ name: 'restaurant', params: { id: FavoritedRestaurant.id } }"
      >
        <img
          :src="FavoritedRestaurant.image | emptyImageFilter"
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
  name: "UserFavoritedRestaurantsCard",
  mixins: [emptyImageFilter],
  props: {
    FavoritedRestaurants: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style scoped>
.avatar {
  margin-right: 3px;
}
</style>