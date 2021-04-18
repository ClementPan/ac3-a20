<template>
  <Spinner v-if="isLoading"></Spinner>
  <table v-else class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >

          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: { id: restaurant.id },
            }"
            class="btn btn-link"
            >Edit</router-link
          >

          <button
            type="button"
            class="btn btn-link"
            @click="deleteRestaurant(restaurant.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import adminAPI from "../../apis/admin";
import { Toast } from "../../utils/helpers";
import Spinner from "../Spinner";

export default {
  name: "AdminRestaurantsTable",
  components: {
    Spinner,
  },
  data() {
    return {
      restaurants: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    async fetchRestaurants() {
      try {
        this.isLoading = true;
        const response = await adminAPI.restaurants.get();
        this.restaurants = response.data.restaurants;
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        this.isLoading = false;
      } catch {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試！",
        });
      }
    },
    async deleteRestaurant(restaurantId) {
      try {
        const response = await adminAPI.restaurants.delete(restaurantId);

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        this.restaurants = this.restaurants.filter(
          (res) => res.id !== restaurantId
        );
        Toast.fire({
          icon: "success",
          title: "成功刪除餐廳資料！",
        });
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法刪除餐廳，請稍後再試！",
        });
      }
    },
  },
};
</script>