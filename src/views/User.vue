<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <!-- UserProfileCardVue -->
      <UserProfileCardVue
        :user="user"
        :isFollowed="isFollowed"
        @afterToggleIsFollowed="handleToggleIsFollowed"
      ></UserProfileCardVue>

      <div class="row">
        <div class="col-md-4">
          <!-- UserFollowingsCard -->
          <UserFollowingsCard :userFollowings="user.Followings" />
          <br />
          <UserFollowerCard :UserFollowers="user.Followers" />
        </div>
        <div class="col-md-8">
          <!-- UserCommentsCard -->
          <UserCommentsCard :UserComments="user.Comments" />
          <br />
          <UserFavoritedRestaurantsCard
            :FavoritedRestaurants="user.FavoritedRestaurants"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCardVue from "../components/User/UserProfileCard.vue";
import UserFollowingsCard from "../components/User/UserFollowingsCard.vue";
import UserFollowerCard from "../components/User/UserFollowersCard";
import UserCommentsCard from "../components/User/UserCommentsCard";
import UserFavoritedRestaurantsCard from "../components/User/UserFavoritedRestaurantsCard.vue";

import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import usersAPI from "../apis/users";

export default {
  name: "user",
  components: {
    UserProfileCardVue,
    UserFollowingsCard,
    UserFollowerCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUserData(id);
  },
  beforeRouteUpdate(to, next) {
    const { id } = to.params;
    this.fetchUserData(id);
    next;
  },
  data() {
    return {
      user: {},
      isFollowed: false,
    };
  },
  methods: {
    async fetchUserData(userId) {
      try {
        console.log("userId: " + userId);
        const response = await usersAPI.get(userId);
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        const {
          id,
          name,
          email,
          image,
          Comments,
          FavoritedRestaurants,
          Followings,
          Followers,
        } = response.data.profile;
        this.user = {
          id,
          name,
          email,
          image,
          Comments: Comments ? Comments : [],
          FavoritedRestaurants: FavoritedRestaurants
            ? FavoritedRestaurants
            : [],
          Followings: Followings ? Followings : [],
          Followers: Followers ? Followers : [],
        };
        this.isFollowed = response.data.isFollowed;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試！",
        });
      }
    },
    handleToggleIsFollowed() {
      this.isFollowed = !this.isFollowed;
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>