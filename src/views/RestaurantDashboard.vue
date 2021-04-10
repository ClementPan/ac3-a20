<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 11,
    name: "Destany Parisian",
    tel: "(200) 715-2492",
    address: "77930 Alisha Shore",
    opening_hours: "08:00",
    description:
      "Quam impedit ad et. Molestiae consequatur dolores consequatur quidem dolores asperiores culpa dignissimos. At dolor mollitia sapiente.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=50.19708396089371",
    viewCounts: 12,
    createdAt: "2021-04-07T14:21:46.000Z",
    updatedAt: "2021-04-08T16:47:05.000Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
    },
    Comments: [
      {
        id: 11,
        text: "Qui omnis fuga.",
        UserId: 3,
        RestaurantId: 11,
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
        id: 61,
        text: "Expedita omnis dignissimos veniam qui.",
        UserId: 2,
        RestaurantId: 11,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$ytpYqtTVPkE.8liOUf/ov.KnNcUMf8WNQzMqmWsIXK7x1VevkaVHy",
          isAdmin: false,
          image: null,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
        },
      },
      {
        id: 111,
        text: "Ut eum corporis.",
        UserId: 3,
        RestaurantId: 11,
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
    ],
  },
};

export default {
  name: "restaurant-dashboard",
  created() {
    const restaurantId = this.$route.params.id;
    console.log("resID: " + restaurantId);
    this.fetchData(restaurantId);
  },
  data() {
    return {
      restaurant: {
        id: undefined,
        name: "",
        categoryName: "",
        commentsLength: 0,
        viewCounts: 0,
      },
    };
  },
  methods: {
    fetchData(restaurantId) {
      console.log(`Getting data of restaurant-id:${restaurantId} via API...`);
      const { id, name, Category, Comments, viewCounts } = dummyData.restaurant;
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        categoryName: Category ? Category.name : "未分類",
        commentsLength: Comments.length,
        viewCounts,
      };
    },
  },
};
</script>