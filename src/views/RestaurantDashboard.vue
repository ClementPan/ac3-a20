<template>
  <Spinner v-if="isLoading"></Spinner>
  <div v-else class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import { Toast } from "../utils/helpers";
import restaurantsAPI from "../apis/restaurants";
import Spinner from "../components/Spinner";
export default {
  name: "restaurant-dashboard",
  created() {
    const { id } = this.$route.params;
    this.fetchData(id);
  },
  components: { Spinner },
  data() {
    return {
      restaurant: {
        id: undefined,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
      },
      isLoading: true,
    };
  },
  methods: {
    async fetchData(restaurantId) {
      try {
        this.isLoading = true;
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId });

        console.log(data);

        if (data.stauts !== "success") {
          throw new Error(data.message);
        }

        const { id, name, Category, Comments, viewCounts } = data.restaurant;
        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          categoryName: Category ? Category.name : "未分類",
          commentsLength: Comments.length,
          viewCounts,
        };
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍後再試！",
        });
      }
    },
  },
};
</script>