<template>
  <div class="container py-5">
    <NavTabs> </NavTabs>
    <Spinner v-if="isLoading"></Spinner>

    <template v-else>
      <h1 class="mt-5">最新動態</h1>
      <hr />

      <div class="row">
        <div class="col-md-6">
          <h3>最新餐廳</h3>
          <!-- 最新餐廳 NewestRestaurants -->
          <NewestRestaurants :restaurants="restaurants"></NewestRestaurants>
        </div>
        <div class="col-md-6">
          <!-- 最新評論 NewestComments-->
          <h3>最新評論</h3>
          <NewestComments :comments="comments"></NewestComments>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import NewestRestaurants from "../components/NewestRestaurants.vue";
import NewestComments from "../components/NewestComments.vue";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import Spinner from "../components/Spinner";

export default {
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchFeeds();
  },
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
    Spinner,
  },
  methods: {
    async fetchFeeds() {
      try {
        this.isLoading = true;
        const response = await restaurantsAPI.getFeeds();
        this.restaurants = response.data.restaurants;
        this.comments = response.data.comments.filter(
          (comment) => comment.Restaurant && comment.text
        );
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