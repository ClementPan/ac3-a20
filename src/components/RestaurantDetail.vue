<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image | emptyImageFilter"
        style="width: 250px; margin-bottom: 25px"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openginHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{
          name: 'restaurant-dashboard',
          params: { id: this.$route.params.id },
        }"
        >Dashboard</router-link
      >

      <button
        v-if="restaurant.isFavorited"
        type="button"
        class="btn btn-danger btn-border mr-2"
        @click="deleteFavorited(restaurant.id)"
      >
        移除最愛
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary btn-border mr-2"
        @click="addFavorited(restaurant.id)"
      >
        加到最愛
      </button>
      <button
        v-if="restaurant.isLiked"
        type="button"
        class="btn btn-danger like mr-2"
        @click="deleteLike(restaurant.id)"
      >
        Unlike
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary like mr-2"
        @click="addLike(restaurant.id)"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
import { Toast } from "../utils/helpers";
import usersAPI from "../apis/users";

export default {
  name: "RestaurantDetail",
  mixins: [emptyImageFilter],
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.restaurant = this.initialRestaurant;
  },
  data() {
    return {
      restaurant: {},
    };
  },
  methods: {
    async addFavorited(restaurantId) {
      try {
        // to add Favorite
        const { data } = await usersAPI.addFavorite({ restaurantId });
        console.log(data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: "已加入最愛！",
        });

        // $Emit to Restaurant.vue to renew data
        this.$emit("after_toggle_isFavorited");
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法執行動作，請稍後再試！",
        });
      }
    },
    async deleteFavorited(restaurantId) {
      try {
        // to remove Favorite
        const { data } = await usersAPI.deleteFavorite({ restaurantId });
        console.log(data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: "已移除最愛！",
        });

        // $Emit to Restaurant.vue to renew data
        this.$emit("after_toggle_isFavorited");
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法執行動作，請稍後再試！",
        });
      }
    },
    async addLike(restaurantId) {
      try {
        // Todo: send API to serve to toggle isLiked
        const { data } = await usersAPI.addLike({ restaurantId });
        console.log(data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: "已按讚！",
        });

        // $Emit to Restaurant.vue to renew data
        this.$emit("after_toggle_isLiked");
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法執行動作，請稍後再試！",
        });
      }
    },
    async deleteLike(restaurantId) {
      try {
        // Todo: send API to serve to toggle isLiked
        const { data } = await usersAPI.deleteLike({ restaurantId });
        console.log(data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: "已收回讚！",
        });

        // $Emit to Restaurant.vue to renew data
        this.$emit("after_toggle_isLiked");
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法執行動作，請稍後再試！",
        });
      }
    },
  },
  watch: {
    initialRestaurant: {
      handler: function (newValue) {
        this.restaurant = {
          ...this.restaurant,
          ...newValue,
        };
      },
      deep: true,
    },
  },
};
</script>