<template>
  <div class="container py-5">
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-model="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          />
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="createCategory"
            :disabled="isCreating"
          >
            {{ isCreating ? "新增中.." : "新增" }}
          </button>
        </div>
      </div>
    </form>

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />
            <span
              v-show="category.isEditing"
              class="cancel"
              @click.prevent.stop="handleCancel(category.id)"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.prevent.stop="toggleIsEditing(category.id)"
              :disabled="isProcessing"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.prevent.stop="
                updateCategory({ id: category.id, name: category.name })
              "
              :disabled="isProcessing"
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
              :disabled="isProcessing"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminRestaurants/AdminNav";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminCategories",
  components: {
    AdminNav,
  },
  // 3. 定義 Vue 中使用的 data 資料
  data() {
    return {
      categories: [],
      newCategoryName: "",
      isCreating: false,
      isProcessing: false,
    };
  },
  // 5. 調用 `fetchCategories` 方法
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get();
        this.categories = data.categories.map((category) => {
          return {
            ...category,
            isEditing: false,
            nameCached: "", // 用來純存編輯前的原 name 名稱
          };
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳類別資料，請稍後再試！",
        });
      }
    },
    async createCategory() {
      if (!this.newCategoryName.trim()) {
        Toast.fire({
          icon: "info",
          title: "請輸入餐廳類別！",
        });
        return;
      }
      try {
        this.isCreating = true;
        const categoryName = this.newCategoryName.trim();
        const { data } = await adminAPI.categories.create({
          name: categoryName,
        });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        // renew data
        this.categories.push({
          id: data.categoryId,
          name: categoryName,
          createdAt: new Date(),
        });
        this.newCategoryName = "";

        Toast.fire({
          icon: "success",
          title: "成功建立新餐廳類別！",
        });
        this.isCreating = false;
      } catch (error) {
        this.isCreating = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "發生錯誤，請稍後再試！",
        });
      }
    },
    async deleteCategory(id) {
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.categories.delete(id);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.categories = this.categories.filter(
          (category) => category.id !== id
        );
        Toast.fire({
          icon: "success",
          title: "成功刪除餐廳類別！",
        });
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法刪除餐廳類別，請稍後再試！",
        });
      }
    },
    toggleIsEditing(id) {
      this.categories = this.categories.map((category) => {
        if (category.id === id) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name,
          };
        }
        return category;
      });
    },
    async updateCategory({ id, name }) {
      try {
        this.isProcessing = true;
        const { data } = await adminAPI.categories.put({ id, name });
        console.log(data);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "成功修改餐廳類別！",
        });
        this.toggleIsEditing(id);
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法修改餐廳類別，請稍後再試！",
        });
      }
    },
    handleCancel(id) {
      this.categories = this.categories.map((category) => {
        if (id === category.id) {
          return {
            ...category,
            name: category.nameCached,
            nameCached: "",
          };
        }
        return category;
      });
      this.toggleIsEditing(id);
    },
  },
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>