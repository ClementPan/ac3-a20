<template>
  <Spinner v-if="isLoading"></Spinner>
  <form v-else @submit.stop.prevent="handleSubmit($event)">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        id="name"
        v-model="restaurant.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select
        id="categoryId"
        class="form-control"
        v-model="restaurant.categoryId"
        name="categoryId"
        required
      >
        <option value="" selected disabled>--請選擇--</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        id="tel"
        v-model="restaurant.tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        id="address"
        v-model="restaurant.address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        id="opening-hours"
        v-model="restaurant.openingHours"
        type="time"
        class="form-control"
        name="opening_hours"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        id="description"
        v-model="restaurant.description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
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
        @change="handleFileChange($event)"
      />
    </div>
    <button type="submit" class="btn btn-primary" :disabled="isProcessing">
      {{ isProcessing ? "處理中" : "送出" }}
    </button>
  </form>
</template>

<script>
import adminAPI from "../../apis/admin";
import restaurants from "../../apis/restaurants";
import { Toast } from "../../utils/helpers";
import Spinner from "../Spinner";

export default {
  name: "AdminRestaurantForm",
  components: { Spinner },
  created() {
    this.fetchCategoriesData();
    this.restaurant = {
      ...this.restaurant,
      ...this.initialRestaurant,
    };
  },
  props: {
    initialRestaurant: {
      type: Object,
      default: () => ({
        name: "",
        tel: "",
        address: "",
        openingHours: "",
        description: "",
        image: "",
        categoryId: undefined,
      }),
    },
    isProcessing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      categories: [],
      restaurant: {
        ...this.initialRestaurant,
      },
      isLoading: true,
    };
  },
  watch: {
    // 監控屬性
    initialRestaurant(newValue) {
      // console.log(oldValue);
      this.restaurant = {
        ...restaurants,
        ...newValue,
      };
    },
  },
  methods: {
    async fetchCategoriesData() {
      try {
        const { data } = await adminAPI.categories.get();
        this.categories = data.categories;
        // 避免往素過慢的使用者沒有資料可以用，待載入完成再顯示
        this.isLoading = false;
      } catch {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳類別，請稍後再試！",
        });
      }
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (!files.length) {
        return (this.restaurant.image = "");
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        // 產生一個存在記憶體中的暫時連結: blob 檔案
        this.restaurant.image = imageURL;
      }
    },
    handleSubmit(e) {
      if (!this.restaurant.name) {
        Toast.fire({
          icon: "warning",
          title: "請填寫餐廳名稱！",
        });
        return;
      }
      if (!this.restaurant.categoryId) {
        Toast.fire({
          icon: "warning",
          title: "請選擇餐廳類別！",
        });
        return;
      }

      const form = e.target;
      const formData = new FormData(form);
      // 此表單可能是修改或新增，因此emit出去給父層處理傳送到後端
      this.$emit("after-submit", formData);
    },
  },
};
</script>