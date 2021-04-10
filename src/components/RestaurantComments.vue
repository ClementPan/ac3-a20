<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in RestaurantComments" :key="comment.id">
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
const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    isAdmin: true,
  },
  isAuthenticated: true,
};

// import moment from "moment";
import { fromNowFilter } from "../utils/fromNowFilter.js";
export default {
  name: "RestaurantComments",
  mixins: [fromNowFilter],
  props: {
    RestaurantComments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentUser: dummyUser.currentUser,
    };
  },
  // filters: {},
  methods: {
    handleDeleteButtonClick(commentId) {
      console.log(commentId);
      // Todo：透過API請求伺服器刪除該Comment
      this.$emit("after_comment_delete", commentId);
    },
  },
};
</script>