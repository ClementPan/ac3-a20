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
              <strong>{{ user.Comments ? user.Comments.length : 0 }}</strong>
              已評論餐廳
            </li>
            <li>
              <strong>{{
                user.FavoritedRestaurants ? user.FavoritedRestaurants.length : 0
              }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{
                user.Followings ? user.Followings.length : 0
              }}</strong>
              followings (追蹤者)
            </li>
            <li>
              <strong>{{ user.Followers ? user.Followers.length : 0 }}</strong>
              followers (追隨者)
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
                @click="deleteFollowing(user.id)"
              >
                取消追蹤
              </button>
              <button
                v-else
                class="btn btn-info"
                @click="addFollowing(user.id)"
              >
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
import { mapState } from "vuex";
import { Toast } from "../../utils/helpers";
import usersAPI from "../../apis/users";

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
    return {};
  },
  methods: {
    async addFollowing(userId) {
      try {
        // 透過API跟後端說要修改 isFollowed 的資料
        const { data } = await usersAPI.addFollow(userId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "已追蹤！",
        });

        // $emit 跟父層說要修感 isFollowed 的資料
        this.$emit("afterToggleIsFollowed");
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法追蹤，請稍後再試！",
        });
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollow(userId);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        Toast.fire({
          icon: "success",
          title: "已取消追蹤！",
        });
        this.$emit("afterToggleIsFollowed");
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤，請稍後再試！",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    isFollowed(newValue) {
      this.isFollowed = newValue;
    },
  },
};
</script>