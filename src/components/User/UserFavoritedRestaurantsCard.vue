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
          :src="FavoritedRestaurant.image"
          width="60"
          height="60"
          class="avatar"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFavoritedRestaurantsCard",
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