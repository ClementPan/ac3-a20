<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
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
          autocomplete="current-password"
          required
          v-model="password"
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        {{ isProcessing ? "驗證中..." : "Submit" }}
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup"> Sign Up </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // 前端驗證
        if (!this.email || !this.password) {
          Toast.fire({
            icon: "warning",
            title: "請輸入帳號密碼！",
          });
          return;
        }
        // isProcessing
        this.isProcessing = true;

        //  向後端驗證使用者登入資訊是否合法
        const response = await authorizationAPI.signIn({
          email: this.email,
          password: this.password,
        });

        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }

        // 將 token 存入 localStorage
        localStorage.setItem("token", response.data.token);

        // 透過 setCurrentUser 把使用者資料存到 Vuex 的 state 中
        this.$store.commit("setCurrentUser", response.data.user);

        // 轉址
        this.$router.push("/restaurants");
      } catch (error) {
        this.isProcessing = false;

        this.email = "";
        this.password = "";

        console.error(error);
        Toast.fire({
          icon: "warning",
          title: "輸入的帳號密碼有誤！",
        });
      }
    },
  },
};
</script>

