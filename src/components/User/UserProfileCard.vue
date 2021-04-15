<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          :src="user.image | emptyImageFilter"
          width="300px"
          height="300px"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ user.name }}</h5>
          <p class="card-text">{{ user.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ user.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.FavoritedRestaurants.length }}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{ user.Followings.length }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ user.Followers.length }}</strong> followers (追隨者)
            </li>
          </ul>
          <p>
            <router-link
              v-if="user.id === currentUser.id"
              :to="{ name: 'user-edit', params: { id: currentUser.id } }"
            >
              <button type="submit" class="btn btn-primary">edit</button>
            </router-link>

            <template v-else>
              <button
                v-if="isFollowed"
                class="btn btn-danger"
                @click="toggleIsFollowed"
              >
                取消追蹤
              </button>
              <button v-else class="btn btn-info" @click="toggleIsFollowed">
                追蹤
              </button>
            </template>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../../utils/mixins";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  name: "UserProfileCard",
  mixins: [emptyImageFilter],
  props: {
    user: {
      type: Object,
      required: true,
    },
    isFollowed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      currentUser: {
        id: undefined,
        name: "",
        email: "",
        image: "",
        isAdmin: false,
      },
      isAuthenticated: false,
    };
  },
  created() {
    this.getCurrentUser();
  },
  methods: {
    getCurrentUser() {
      // get currentUser info via server
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser,
      };
    },
    // addFollowing() {},
    // deleteFollowing() {},
    toggleIsFollowed() {
      // 透過API跟後端說要修改 isFollowed 的資料

      // $emit 跟父層說要修感 isFollowed 的資料
      this.$emit("afterToggleIsFollowed");
    },
  },
};
</script>