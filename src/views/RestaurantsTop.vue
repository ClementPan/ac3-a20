<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div class="card mb-3" style="max-width: 540px; margin: auto">
      <div
        class="row no-gutters"
        v-for="restaurant in initialRestaurants"
        :key="restaurant.id"
      >
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <router-link
              :to="{
                name: 'restaurant-dashboard',
                params: { id: restaurant.id },
              }"
              class="btn btn-primary mr-2"
              >Dashboard</router-link
            >

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click="toggleFavorite(restaurant)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click="toggleFavorite(restaurant)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 11,
      name: "Destany Parisian",
      tel: "(200) 715-2492",
      address: "77930 Alisha Shore",
      opening_hours: "08:00",
      description: "Quam impedit ad et. Molestiae consequatur dolores ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.19708396089371",
      viewCounts: 12,
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-08T16:47:05.000Z",
      CategoryId: 3,
      FavoritedUsers: [
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$r5sNq7DnH82Ly.n0/QjqgOczyBgR3sQ6Yk8NSrKpJtgcJ.Kl0n81K",
          isAdmin: true,
          image: null,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          Favorite: {
            UserId: 1,
            RestaurantId: 11,
            createdAt: "2021-04-08T15:41:56.000Z",
            updatedAt: "2021-04-08T15:41:56.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 1,
    },
    {
      id: 50,
      name: "Mr. Kelvin Barrows",
      tel: "491.463.2940",
      address: "532 Kutch Junction",
      opening_hours: "08:00",
      description: "Aliquam facere quas ab voluptates beatae modi.\nOmn",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.90376762560324",
      viewCounts: 0,
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: true,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Lavern Stroman PhD",
      tel: "1-760-297-3854",
      address: "400 Rice Station",
      opening_hours: "08:00",
      description: "Omnis non cupiditate. Non qui architecto voluptate",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=84.11843942322581",
      viewCounts: 0,
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Ms. Myriam Renner",
      tel: "1-187-026-1139 x6461",
      address: "6080 Hoppe Village",
      opening_hours: "08:00",
      description: "Molestiae ipsa voluptas optio modi pariatur sit ad",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.11464794833842",
      viewCounts: 0,
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Nellie Gusikowski",
      tel: "1-505-455-4384 x492",
      address: "56607 Dibbert Summit",
      opening_hours: "08:00",
      description: "Ut non modi qui et eligendi praesentium. Ducimus f",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.183631636616731",
      viewCounts: 0,
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Virgil Lowe DDS",
      tel: "(233) 432-3602",
      address: "8490 Elvis Mall",
      opening_hours: "08:00",
      description: "Ea quae similique perferendis et explicabo reprehe",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=82.69236559627441",
      viewCounts: 0,
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Kiara Lemke",
      tel: "436.695.7214 x268",
      address: "33828 Denesik Glens",
      opening_hours: "08:00",
      description: "Ullam aut beatae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.61542017655447",
      viewCounts: 0,
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Lisa Kuphal",
      tel: "1-335-613-9224 x470",
      address: "9695 Koch Gardens",
      opening_hours: "08:00",
      description: "Hic atque et sit incidunt ratione unde tempore. Su",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.92681081675933",
      viewCounts: 0,
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Jovany Beahan",
      tel: "(617) 640-1773",
      address: "8519 Lane Ports",
      opening_hours: "08:00",
      description: "Voluptate placeat perferendis labore eum temporibu",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=81.77271271754287",
      viewCounts: 0,
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Eveline Bergnaum",
      tel: "1-210-759-6894 x13840",
      address: "890 Eduardo Estates",
      opening_hours: "08:00",
      description: "Sint commodi cum nihil architecto et quis et quae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.30605969917284",
      viewCounts: 0,
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

import NavTabs from "../components/NavTabs.vue";

export default {
  name: "RestaurantsTop",
  components: {
    NavTabs,
  },
  data() {
    return {
      initialRestaurants: dummyData.restaurants,
    };
  },
  methods: {
    toggleFavorite(restaurant) {
      restaurant.isFavorited = !restaurant.isFavorited;
    },
  },
};
</script>