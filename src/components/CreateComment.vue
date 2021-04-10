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
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "CreateComment",
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    handleSubmit() {
      if (!this.text.trim()) {
        this.text = "";
        return alert("尚未輸入內容!");
      }

      // Todo: as server to create new comment via API
      this.$emit("after-create-comment", {
        commentId: uuidv4(), // temporary, dunno the ID created by server
        restaurantId: this.restaurantId,
        text: this.text,
      });

      this.text = "";
    },
  },
};
</script>