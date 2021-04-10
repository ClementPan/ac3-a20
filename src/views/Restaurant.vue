<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail
      :restaurant="restaurant"
      @after_toggle_isFavorited="afterToggleFavorited"
      @after_toggle_isLiked="afterToggleLiked"
    ></RestaurantDetail>
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :RestaurantComments="restaurantComments"
      @after_comment_delete="afterCommentDelete"
    ></RestaurantComments
    >>
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurantId="restaurant.id"
      @after-create-comment="afterCreatComment"
    ></CreateComment>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 1,
    name: "Jacey Huel II",
    tel: "233.190.8258 x432",
    address: "0410 Maybelle Manors",
    opening_hours: "08:00",
    description:
      "Nostrum consectetur odio ex ea. Officia aut ab et voluptates ullam eaque dolores. Et officiis odit voluptatem velit repellat accusamus ut veritatis. Ut ut dolor aliquid nisi. Molestiae autem a fuga debitis iure.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=47.867095179811315",
    viewCounts: 2,
    createdAt: "2021-04-07T14:21:46.000Z",
    updatedAt: "2021-04-08T07:50:17.452Z",
    CategoryId: 5,
    Category: {
      id: 5,
      name: "素食料理",
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 1,
        text: "Voluptate iure tenetur cumque nemo eum cum eos consequatur nam.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$haSnB7YRouloMuOkAR.svO8hrQoT6rfMsg1SZy2hOyfT36isvc8OK",
          isAdmin: false,
          image: null,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
        },
      },
      {
        id: 51,
        text: "Harum eos occaecati nam amet unde quis exercitationem ut.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$haSnB7YRouloMuOkAR.svO8hrQoT6rfMsg1SZy2hOyfT36isvc8OK",
          isAdmin: false,
          image: null,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
        },
      },
      {
        id: 101,
        text: "Vero laborum reprehenderit.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$r5sNq7DnH82Ly.n0/QjqgOczyBgR3sQ6Yk8NSrKpJtgcJ.Kl0n81K",
          isAdmin: true,
          image: null,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
        },
      },
    ],
  },
  isFavorited: true,
  isLiked: false,
};

const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: null,
    isAdmin: true,
  },
  isAuthenticated: true,
};

import RestaurantDetail from "../components/RestaurantDetail.vue";
import RestaurantComments from "../components/RestaurantComments";
import CreateComment from "../components/CreateComment.vue";

export default {
  name: "Restaurant",
  created() {
    this.fetchRestaurant(this.$route.params.id);
  },
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: undefined,
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
      currentUser: dummyUser.currentUser,
    };
  },
  methods: {
    fetchRestaurant(RestaurantId) {
      console.log("id: " + RestaurantId);
      const { restaurant, isFavorited, isLiked } = dummyData;
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
    },
    afterCommentDelete(commmentId) {
      console.log(commmentId);
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commmentId
      );
    },
    afterCreatComment(payload) {
      // payload: 一包資料的概念
      const { commmentId, RestaurantId, text } = payload;
      this.restaurantComments.push({
        id: commmentId,
        RestaurantId: RestaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(), //js 內建方法
      });
    },
    afterToggleFavorited() {
      this.restaurant.isFavorited = !this.restaurant.isFavorited
    },
    afterToggleLiked() {
      this.restaurant.isLiked = !this.restaurant.isLiked
    },
  },
};
</script>