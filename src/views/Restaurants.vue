<template>
  <div class="container py-5">
    <nav-tabs></nav-tabs>
    <!-- RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories"></RestaurantsNavPills>

    <Spinner v-if="isLoading"></Spinner>
    <template v-else>
      <div class="row">
        <!-- RestaurantsCards -->
        <RestaurantCard
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          :initialRestaurant="restaurant"
        ></RestaurantCard>
      </div>

      <!-- RestaurantsPagination -->
      <RestaurantsPagination
        v-if="totalPage.length > 1"
        :currentPage="currentPage"
        :totalPage="totalPage"
        :previousPage="previousPage"
        :nextPage="nextPage"
        :categoryId="categoryId"
      ></RestaurantsPagination>

      <div v-if="restaurants.length < 1">此類別目前無餐廳資料！</div>
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from "../components/RestaurantsNavPills.vue";
import RestaurantsPagination from "../components/RestaurantsPagination.vue";
// restaurantsAPI
import restaurantsAPI from "./../apis/restaurants";
// Toast
import { Toast } from "./../utils/helpers";
import Spinner from "../components/Spinner";
export default {
  name: "Restaurants",
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
    Spinner,
  },
  created() {
    const { page = "", categoryId = "" } = this.$route.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
  },
  beforeRouteUpdate(to, from, next) {
    // 須帶入預設值，以避免是 undefined 的狀態
    const { page = "", categoryId = "" } = to.query;
    // 再送出新的 request 到後端
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
    next();
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: undefined,
      currentPage: 1,
      totalPage: [],
      previousPage: undefined,
      nextPage: undefined,
      isLoading: true,
    };
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        this.isLoading = true;
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });

        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next,
        } = response.data;

        this.restaurants = restaurants;
        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.totalPage = totalPage;
        this.previousPage = prev;
        this.nextPage = next;
        this.isLoading = false;
      } catch {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試！",
        });
      }
    },
  },
};
</script>