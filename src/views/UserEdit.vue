<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit($event)">
      <div class="form-group">
        <label for="name">name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          :src="user.image | emptyImageFilter"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        {{ isProcessing ? "Submit..." : "Submit" }}
      </button>
      <button class="btn btn-danger" @click="goBack">Back</button>
    </form>
  </div>
</template>

<script>
// import { Toast } from "../utils/helpers.js";
import { emptyImageFilter } from "../utils/mixins.js";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import usersAPI from "../apis/users";

export default {
  name: "UserEdit",
  mixins: [emptyImageFilter],
  created() {
    this.setUser(this.currentUser);
  },
  data() {
    return {
      user: {
        name: "",
        image: "",
      },

      isProcessing: false,
    };
  },
  methods: {
    setUser(newUserData) {
      const { id } = this.$route.params;
      if (id !== newUserData.id) {
        this.$router.push({ name: "not-found" });
      }
      this.user = newUserData;
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (!files.length) {
        return (this.user.image = "");
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    async handleSubmit(e) {
      if (!this.user.name) {
        Toast.fire({
          icon: "info",
          title: "尚未填寫姓名！",
        });
        return;
      }
      try {
        this.isProcessing = true;
        const id = this.currentUser.id;
        const form = e.target;
        const formData = new FormData(form);
        const { data } = await usersAPI.update(id, formData);
        console.log(data);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "更新資料成功！",
        });

        this.$router.push(`/users/${id}`);
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    goBack() {
      const { id } = this.currentUser;
      this.$router.push(`/users/${id}`);
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    currentUser(newValue) {
      this.setUser(newValue);
    },
  },
};
</script>