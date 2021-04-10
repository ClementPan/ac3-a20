<template>
  <div class="container py-5">
    <nav-tabs></nav-tabs>
    <!-- RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories"></RestaurantsNavPills>

    <div class="row">
      <!-- RestaurantsCards -->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initialRestaurant="restaurant"
      ></RestaurantCard>
    </div>

    <!-- RestaurantsPagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :currentPage="currentPage"
      :totalPage="totalPage"
      :previousPage="previousPage"
      :nextPage="nextPage"
      :categoryId="categoryId"
    ></RestaurantsPagination>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import RestaurantCard from "../components/RestaurantCard.vue";
import RestaurantsNavPills from "../components/RestaurantsNavPills.vue";
import RestaurantsPagination from "../components/RestaurantsPagination.vue";

const dummyData = {
  restaurants: [
    {
      id: 2,
      name: "Kali Swift",
      tel: "565.517.9558",
      address: "64851 Destin Coves",
      opening_hours: "08:00",
      description: "aut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=48.772796055085756",
      viewCounts: 78,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-04-01T16:26:43.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-03-08T12:49:12.000Z",
        updatedAt: "2021-03-08T12:49:12.000Z",
      },
      isFavorited: true,
      isLiked: true,
    },
    {
      id: 3,
      name: "Mrs. Janis Langworth",
      tel: "916.419.3453 x4967",
      address: "72191 Josue Extension",
      opening_hours: "08:00",
      description: "Odit accusamus suscipit expedita beatae quidem min",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=9.115894391627965",
      viewCounts: 37,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-25T13:22:35.000Z",
      CategoryId: 1,
      Category: null,
      isFavorited: false,
      isLiked: true,
    },
    {
      id: 4,
      name: "Casper Schuppe",
      tel: "1-715-543-5358 x0843",
      address: "591 Kiehn Neck",
      opening_hours: "08:00",
      description: "Consequatur architecto non non et temporibus eveni",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=3.762794837575689",
      viewCounts: 44,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-04-01T08:42:07.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "日式料理",
        createdAt: "2021-03-08T12:49:12.000Z",
        updatedAt: "2021-03-24T13:59:43.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Jacklyn Zboncak",
      tel: "467.187.2522",
      address: "91082 Narciso Summit",
      opening_hours: "08:00",
      description: "Est nulla ut voluptas placeat. Aperiam incidunt au",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=56.561828198471574",
      viewCounts: 13,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-25T13:15:01.000Z",
      CategoryId: 2,
      Category: null,
      isFavorited: true,
      isLiked: true,
    },
    {
      id: 6,
      name: "Helga Leuschke",
      tel: "018.353.3738",
      address: "9669 Adeline Prairie",
      opening_hours: "08:00",
      description: "Molestias ut laborum quisquam quia. Aspernatur cul",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=5.223329699039492",
      viewCounts: 4,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-26T15:29:02.000Z",
      CategoryId: 1,
      Category: null,
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Magali Bartell",
      tel: "1-189-644-2173 x99673",
      address: "3527 Pauline Overpass",
      opening_hours: "08:00",
      description: "debitis quae officia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.967159546194445",
      viewCounts: 2,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-25T13:08:06.000Z",
      CategoryId: 1,
      Category: null,
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Abdul Von",
      tel: "1-767-733-8981 x5562",
      address: "14170 Nina Crest",
      opening_hours: "08:00",
      description: "Qui vitae voluptas dicta explicabo.\nDolores pariat",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.36642342635744",
      viewCounts: 7,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-04-01T06:13:01.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2021-03-08T12:49:12.000Z",
        updatedAt: "2021-03-08T12:49:12.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Celine Emard",
      tel: "086-920-8919 x545",
      address: "0572 Nayeli Parks",
      opening_hours: "08:00",
      description: "Voluptatem rerum expedita. Illum id illum architec",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.241151674478257",
      viewCounts: 18,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-25T13:27:15.000Z",
      CategoryId: 2,
      Category: null,
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Lavon Swaniawski",
      tel: "307-906-4558 x462",
      address: "03907 Murazik Burgs",
      opening_hours: "08:00",
      description: "Ut amet repudiandae rem aut soluta sit aliquam. Ve",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.10116468300554",
      viewCounts: 2,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-04-01T06:13:14.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "日式料理",
        createdAt: "2021-03-08T12:49:12.000Z",
        updatedAt: "2021-03-24T13:59:43.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 11,
      name: "Dr. Deven Kshlerin",
      tel: "(464) 878-5975 x4582",
      address: "491 Maritza Lodge",
      opening_hours: "08:00",
      description: "Vitae quidem ut. Alias cupiditate ut vero aperiam ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=38.983915783092506",
      viewCounts: 1,
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-04-01T06:13:07.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "日式料理",
        createdAt: "2021-03-08T12:49:12.000Z",
        updatedAt: "2021-03-24T13:59:43.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 3,
      name: "日式料理",
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-24T13:59:43.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-08T12:49:12.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-08T12:49:12.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-08T12:49:12.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2021-03-08T12:49:12.000Z",
      updatedAt: "2021-03-08T12:49:12.000Z",
    },
    {
      id: 47,
      name: "中式餐廳",
      createdAt: "2021-03-24T13:14:31.000Z",
      updatedAt: "2021-03-24T13:14:31.000Z",
    },
    {
      id: 57,
      name: "西式料理",
      createdAt: "2021-03-24T13:21:54.000Z",
      updatedAt: "2021-03-24T13:21:54.000Z",
    },
    {
      id: 67,
      name: "西藏料理",
      createdAt: "2021-03-24T13:24:05.000Z",
      updatedAt: "2021-03-24T13:24:05.000Z",
    },
    {
      id: 77,
      name: "雲南料理",
      createdAt: "2021-03-24T13:25:28.000Z",
      updatedAt: "2021-03-24T13:25:28.000Z",
    },
    {
      id: 87,
      name: "西班牙料理",
      createdAt: "2021-03-24T13:30:08.000Z",
      updatedAt: "2021-03-24T13:30:08.000Z",
    },
    {
      id: 97,
      name: "印度料理",
      createdAt: "2021-03-24T13:35:11.000Z",
      updatedAt: "2021-03-24T13:35:11.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  name: "Restaurants",
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  created() {
    this.fetchRestaurants();
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: undefined,
      currentPage: 1,
      totalPage: undefined,
      previousPage: undefined,
      nextPage: undefined,
    };
  },
  methods: {
    fetchRestaurants() {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next,
      } = dummyData;
      this.restaurants = restaurants;
      this.categories = categories;
      this.categoryId = categoryId;
      this.currentPage = page;
      this.totalPage = totalPage;
      this.previousPage = prev;
      this.nextPage = next;
    },
  },
};
</script>