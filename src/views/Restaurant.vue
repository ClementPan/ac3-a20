<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail
      :initialRestaurant="restaurant"
      @after_toggle_isFavorited="afterToggleFavorited"
      @after_toggle_isLiked="afterToggleLiked"
    ></RestaurantDetail>
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurantComments="restaurantComments"
      @after_comment_delete="afterCommentDelete"
    ></RestaurantComments>
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurantId="restaurant.id"
      :currentUser="currentUser"
      @after-create-comment="afterCreatComment"
    ></CreateComment>
  </div>
</template>

<script>
import RestaurantDetail from "../components/RestaurantDetail.vue";
import RestaurantComments from "../components/RestaurantComments";
import CreateComment from "../components/CreateComment.vue";
import restaurantsAPI from "../apis/restaurants";
import { Toast } from ".././utils/helpers";
import { mapState } from "vuex";

export default {
  name: "Restaurant",
  created() {
    this.fetchRestaurant(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchRestaurant(to.params.id);
    next();
  },
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openginHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
    };
  },
  methods: {
    async fetchRestaurant(RestaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant(RestaurantId);
        const { restaurant, isFavorited, isLiked } = data;
        const {
          id,
          name,
          Category,
          image,
          opening_hours: openginHours,
          tel,
          address,
          description,
          Comments,
        } = restaurant;

        this.restaurant = {
          id,
          name,
          categoryName: Category ? Category.name : "未分類",
          image,
          openginHours,
          tel,
          address,
          description,
          isFavorited,
          isLiked,
        };

        this.restaurantComments = Comments;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試！",
        });
      }
    },
    afterCommentDelete(commmentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commmentId
      );
    },
    afterCreatComment(payload) {
      // payload: 一包資料的概念
      const { commentId, RestaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId,
        User: {
          createdAt: new Date(),
          email: this.currentUser.email,
          id: this.currentUser.id,
          name: this.currentUser.name,
          updatedAt: new Date(),
        },
        text,
        UserId: this.currentUser.id,
        createdAt: new Date(),
      });
    },
    afterToggleFavorited() {
      this.restaurant.isFavorited = !this.restaurant.isFavorited;
    },
    afterToggleLiked() {
      this.restaurant.isLiked = !this.restaurant.isLiked;
    },
  },
  computed: {
    // 將 vuex 的資料取出，保存在本 component
    ...mapState(["currentUser"]),
  },
};
</script>