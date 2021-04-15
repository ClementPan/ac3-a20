<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ initialRestaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ initialRestaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="initialRestaurant.image | emptyImageFilter"
        style="width: 250px; margin-bottom: 25px"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ initialRestaurant.openginHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ initialRestaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ initialRestaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ initialRestaurant.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{
          name: 'restaurant-dashboard',
          params: { id: this.$route.params.id },
        }"
        >Dashboard</router-link
      >

      <button
        v-if="initialRestaurant.isFavorited"
        type="button"
        class="btn btn-danger btn-border mr-2"
        @click="toggleFavorited"
      >
        移除最愛
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary btn-border mr-2"
        @click="toggleFavorited"
      >
        加到最愛
      </button>
      <button
        v-if="initialRestaurant.isLiked"
        type="button"
        class="btn btn-danger like mr-2"
        @click="toggleLiked"
      >
        Unlike
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary like mr-2"
        @click="toggleLiked"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";

export default {
  name: "RestaurantDetail",
  mixins: [emptyImageFilter],
  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  },
  created() {
    this.initialRestaurant = this.restaurant;
  },
  data() {
    return {
      initialRestaurant: {},
    };
  },
  methods: {
    toggleFavorited() {
      // Todo: send API to serve to toggle isFavorite

      // $Emit to Restaurant.vue to renew data
      this.$emit("after_toggle_isFavorited");
    },
    toggleLiked() {
      // Todo: send API to serve to toggle isLiked

      // $Emit to Restaurant.vue to renew data
      this.$emit("after_toggle_isLiked");
    },
  },
};
</script>