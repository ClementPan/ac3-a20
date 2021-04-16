<template>
  <form @submit.prevent.stop="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea class="form-control" rows="3" name="text" v-model="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
        :disabled="isProcessing"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import { Toast } from "../utils/helpers";
import restaurantsAPI from "../apis/restaurants";

export default {
  name: "CreateComment",
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
    currentUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      text: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.text.trim()) {
          this.text = "";
          Toast.fire({
            icon: "info",
            title: "尚未輸入內容！",
          });
          return;
        }

        this.isProcessing = true;

        const newComment = {
          text: this.text,
          userId: this.currentUser.id,
          restaurantId: this.restaurantId,
        };

        const { data } = await restaurantsAPI.createNewComment(newComment);
        console.log(data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$emit("after-create-comment", {
          text: this.text,
          commentId: data.commentId,
          restaurantId: this.restaurantId,
        });

        this.text = "";

        Toast.fire({
          icon: "success",
          title: "已建立新評論！",
        });
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.error(error);
        Toast.fire({
          icon: "error",
          title: "無法建立新評論，請稍後再試！",
        });
      }
    },
  },
};
</script>