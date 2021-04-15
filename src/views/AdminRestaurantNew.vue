<template>
  <div class="container py-5">
    <!-- 餐廳表單： AdminRestaurantForm -->
    <AdminRestaurantForm
      @after-submit="handleAfterSubmit"
      :isProcessing="isProcessing"
    ></AdminRestaurantForm>
  </div>
</template>

<script>
import AdminRestaurantForm from "../components/AdminRestaurants/AdminRestaurantForm";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminRestaurantNew",
  components: { AdminRestaurantForm },
  data() {
    return {
      isProcessing: false,
    };
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.restaurants.create({ formData });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "成功建立新餐廳！",
        });
        // 成功的話就轉址
        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法建立餐廳，請稍後再試！",
        });
      }
    },
  },
};
</script>