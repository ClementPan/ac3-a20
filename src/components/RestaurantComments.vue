<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-right"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
        >
          Delete
        </button>
        <h3>
          <router-link :to="{ name: 'user', params: { id: comment.User.id } }">
            {{ comment.User.name }}
          </router-link>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import restaurantsAPI from "../apis/restaurants";
import { Toast } from "../utils/helpers";

// import moment from "moment";
import { fromNowFilter } from "../utils/mixins.js";
export default {
  name: "RestaurantComments",
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
  // filters: {},
  methods: {
    async handleDeleteButtonClick(commentId) {
      try {
        const { data } = await restaurantsAPI.deleteComment(commentId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        console.log(data);
        this.$emit("after_comment_delete", commentId);

        Toast.fire({
          icon: "success",
          title: "成功刪除評論！",
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法刪除評論，請稍後再試！",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>