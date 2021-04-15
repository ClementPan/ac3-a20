<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit($event)">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          required
          autofocus
          v-model="name"
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
          v-model="email"
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
          v-model="password"
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
          v-model="passwordCheck"
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        {{ isProcessing ? "註冊中..." : "Submit" }}
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin"> Sign In </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "../utils/helpers";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit(e) {
      // front-end check
      if (this.name === "") {
        Toast.fire({
          icon: "error",
          title: "請輸入名稱！",
        });
        return;
      }
      if (this.email === "") {
        Toast.fire({
          icon: "error",
          title: "請輸入信箱！",
        });
        return;
      }
      if (this.password === "") {
        Toast.fire({
          icon: "error",
          title: "請輸入密碼！",
        });
        return;
      }
      if (this.passwordCheck === "") {
        Toast.fire({
          icon: "error",
          title: "請確認密碼！",
        });
        return;
      }
      if (this.passwordCheck !== this.password) {
        Toast.fire({
          icon: "error",
          title: "密碼和確認密碼不同！",
        });
        return;
      }
      // post 給後端
      try {
        this.isProcessing = true;
        const form = e.target;
        const formData = new FormData(form);
        const response = await authorizationAPI.signUp({ formData });
        console.log(response);
        // blocked by CORS

        Toast.fire({
          icon: "success",
          title: "註冊成功!",
        });

        // 儲存 token

        // 跳轉頁面
        this.$route.push("/restaurants");
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
  },
};
</script>