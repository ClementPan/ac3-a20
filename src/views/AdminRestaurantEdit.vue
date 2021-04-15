<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initialRestaurant="restaurant"
      :isProcessing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>


<script>
import AdminRestaurantForm from "../components/AdminRestaurants/AdminRestaurantForm";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  name: "AdminRestaurantEdit",
  components: {
    AdminRestaurantForm,
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  data() {
    return {
      restaurant: {
        id: undefined,
        name: "",
        tel: "",
        address: "",
        openingHours: "",
        description: "",
        image: "",
        categoryId: undefined,
      },
      isProcessing: false,
    };
  },
  beforeRouteUpdate(to, next) {
    const { id } = to.params;
    this.fetchRestaurant(id);
    next();
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const response = await adminAPI.restaurants.getDetail(restaurantId);
        if (response.status !== 200) {
          throw new Error(response.message);
        }
        const {
          id,
          name,
          address,
          opening_hours: openingHours,
          description,
          image,
          CategoryId: categoryId,
        } = response.data.restaurant;

        this.restaurant = {
          ...this.restaurant,
          id,
          name,
          address,
          openingHours,
          description,
          image,
          categoryId,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資訊，請稍後再試！",
        });
      }
    },
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.restaurants.update({
          id: this.restaurant.id,
          formData,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "admin-restaurants" });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法更新資料，請稍後再試！",
        });
      }

      // TOdo: 透過 API 把 FormData 往後端送
    },
  },
};
</script>