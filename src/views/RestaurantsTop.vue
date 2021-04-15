<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div class="card mb-3" style="max-width: 540px; margin: auto">
      <div
        class="row no-gutters"
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image | emptyImageFilter" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{
                name: 'restaurant-dashboard',
                params: { id: restaurant.id },
              }"
              class="btn btn-primary mr-2"
              >Dashboard</router-link
            >

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import { emptyImageFilter } from "./../utils/mixins";
import restaurantAPI from "./../apis/restaurants";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "RestaurantsTop",
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
  },
  created() {
    this.getRestaurantsTopData();
  },
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    async getRestaurantsTopData() {
      try {
        const response = await restaurantAPI.getTopRestaurants();
        if (response.status !== 200) {
          throw new Error(response.message);
        }
        this.restaurants = response.data.restaurants;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "不知道怎麼了？",
        });
      }
    },
    async addFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite({ restaurantId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurant.id === restaurantId) {
            return {
              ...restaurant,
              isFavorited: true,
            };
          } else {
            return restaurant;
          }
        });
        Toast.fire({
          icon: "success",
          title: "已將餐廳加入最愛！",
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "發生錯誤，請稍後再試！",
        });
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurant.id === restaurantId) {
            return {
              ...restaurant,
              isFavorited: false,
            };
          } else {
            return restaurant;
          }
        });
        Toast.fire({
          icon: "success",
          title: "已將餐廳移除最愛！",
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "發生錯誤，請稍後再試！",
        });
      }
    },
  },
};
</script>