<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav></AdminNav>

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin | showRole }}</td>
          <td>
            <template v-if="user.id !== currentUser.id">
              <button
                v-if="user.isAdmin"
                type="button"
                class="btn btn-link"
                @click="toggleUserRole(user.id)"
              >
                set as user
              </button>
              <button
                v-else
                type="button"
                class="btn btn-link"
                @click="toggleUserRole(user.id)"
              >
                set as admin
              </button>
            </template>
            <template v-else>
              <button class="btn btn-link">This is you</button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$r5sNq7DnH82Ly.n0/QjqgOczyBgR3sQ6Yk8NSrKpJtgcJ.Kl0n81K",
      isAdmin: true,
      image: null,
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$ytpYqtTVPkE.8liOUf/ov.KnNcUMf8WNQzMqmWsIXK7x1VevkaVHy",
      isAdmin: false,
      image: null,
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$haSnB7YRouloMuOkAR.svO8hrQoT6rfMsg1SZy2hOyfT36isvc8OK",
      isAdmin: false,
      image: null,
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-07T14:21:46.000Z",
    },
    {
      id: 7,
      name: "123",
      email: "123@123.com",
      password: "$2a$10$r1IFjg40/wSn6sqpt5ecs.nCdNmQbcPujIjIclI8i5JrXcY5xXlI6",
      isAdmin: false,
      image: null,
      createdAt: "2021-04-08T12:37:37.000Z",
      updatedAt: "2021-04-08T12:37:37.000Z",
    },
    {
      id: 17,
      name: "user4",
      email: "dexample@gmail.com",
      password: "$2a$10$0xrN4lOd5e0.UI4p.W9ug.Stlf4IEEdZ.vtkuJpVkQvER/htZKu.S",
      isAdmin: false,
      image: null,
      createdAt: "2021-04-09T15:26:17.000Z",
      updatedAt: "2021-04-09T15:26:17.000Z",
    },
  ],
};
const dummyUser = {
  profile: {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$r5sNq7DnH82Ly.n0/QjqgOczyBgR3sQ6Yk8NSrKpJtgcJ.Kl0n81K",
    isAdmin: true,
    image: null,
    createdAt: "2021-04-07T14:21:46.000Z",
    updatedAt: "2021-04-07T14:21:46.000Z",
    Comments: [
      {
        id: 2,
        text: "Eos sequi dolor eaque rerum nihil velit soluta vel.",
        UserId: 1,
        RestaurantId: 2,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 2,
          name: "Anabelle Konopelski",
          tel: "(083) 401-2986 x8952",
          address: "83077 Armstrong Parkway",
          opening_hours: "08:00",
          description:
            "Voluptatem iste est laudantium. Perferendis velit ab quas est placeat animi voluptas. Voluptatibus magni molestias quia atque autem praesentium. Ipsum doloremque laboriosam delectus fugiat vel in error.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=98.35824167883882",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 3,
        text: "Illo aliquam inventore sint veniam vitae incidunt dolores ea.",
        UserId: 1,
        RestaurantId: 3,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 3,
          name: "Miss Macey Thompson",
          tel: "(087) 965-0881 x3247",
          address: "6090 Queenie Rue",
          opening_hours: "08:00",
          description:
            "In molestias quos. Minima ipsa iusto a quo incidunt hic quibusdam. Assumenda rerum accusamus mollitia ut nisi. Consequuntur nihil ut fugit minus quos veniam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=78.52715597733697",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 5,
        text: "Illum fugiat praesentium ut iure doloribus laudantium.",
        UserId: 1,
        RestaurantId: 5,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 5,
          name: "Jonas Lehner Sr.",
          tel: "942-826-9150 x9741",
          address: "871 Pearlie Port",
          opening_hours: "08:00",
          description:
            "In illo deleniti sint suscipit animi dolore eum. Et praesentium consectetur et dolor laudantium dolores nihil. Dolore error non nisi aspernatur. Similique nobis nam et commodi odio culpa rem. Mollitia qui omnis repellat est asperiores. Voluptatem qui sit nihil deserunt sequi repudiandae totam tenetur maxime.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=81.73342136433659",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 9,
        text: "Accusamus a maxime molestiae autem enim quidem alias.",
        UserId: 1,
        RestaurantId: 9,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 9,
          name: "Elody Spencer",
          tel: "(262) 490-7212 x49783",
          address: "18267 Ryan Avenue",
          opening_hours: "08:00",
          description:
            "Est saepe ullam molestiae rerum iusto voluptatem magnam quis amet. Blanditiis fugit ut quo. Et dolor sapiente asperiores excepturi possimus et et aut. Voluptas omnis fugit aut rerum minus. Voluptates modi ut cumque et corrupti distinctio rerum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=54.55782683941975",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 14,
        text: "Tempora corrupti quaerat voluptatem architecto quia eaque.",
        UserId: 1,
        RestaurantId: 14,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 14,
          name: "Orin Kris PhD",
          tel: "1-809-572-7352 x67985",
          address: "6991 Palma Islands",
          opening_hours: "08:00",
          description: "Sed facilis nihil iste quis qui.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=3.0133447903702093",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 25,
        text: "Et ullam eum labore et occaecati.",
        UserId: 1,
        RestaurantId: 25,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 25,
          name: "Baron Grady",
          tel: "382.728.2533 x6820",
          address: "038 Genesis Plains",
          opening_hours: "08:00",
          description: "itaque atque voluptatum",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=61.90940630133672",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 34,
        text: "Ea officia sunt facere aut.",
        UserId: 1,
        RestaurantId: 34,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 34,
          name: "Isom Kilback",
          tel: "1-170-336-1393 x33493",
          address: "94760 Opal Plaza",
          opening_hours: "08:00",
          description:
            "Voluptatem voluptatem aut sunt accusamus reiciendis ut.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=33.712293851084006",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 39,
        text: "Temporibus optio perferendis quidem rem.",
        UserId: 1,
        RestaurantId: 39,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 39,
          name: "Pearlie Grant I",
          tel: "170.790.9217 x179",
          address: "948 Mante Burgs",
          opening_hours: "08:00",
          description: "occaecati",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=98.61313855493314",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 45,
        text: "Est sed vel placeat dolores in quibusdam totam nesciunt.",
        UserId: 1,
        RestaurantId: 45,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 53,
        text: "Voluptates nobis omnis.",
        UserId: 1,
        RestaurantId: 3,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 3,
          name: "Miss Macey Thompson",
          tel: "(087) 965-0881 x3247",
          address: "6090 Queenie Rue",
          opening_hours: "08:00",
          description:
            "In molestias quos. Minima ipsa iusto a quo incidunt hic quibusdam. Assumenda rerum accusamus mollitia ut nisi. Consequuntur nihil ut fugit minus quos veniam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=78.52715597733697",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 55,
        text: "Doloremque molestiae magnam non voluptatem animi vero.",
        UserId: 1,
        RestaurantId: 5,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 5,
          name: "Jonas Lehner Sr.",
          tel: "942-826-9150 x9741",
          address: "871 Pearlie Port",
          opening_hours: "08:00",
          description:
            "In illo deleniti sint suscipit animi dolore eum. Et praesentium consectetur et dolor laudantium dolores nihil. Dolore error non nisi aspernatur. Similique nobis nam et commodi odio culpa rem. Mollitia qui omnis repellat est asperiores. Voluptatem qui sit nihil deserunt sequi repudiandae totam tenetur maxime.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=81.73342136433659",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 59,
        text: "Fugit debitis eos consequatur expedita eum.",
        UserId: 1,
        RestaurantId: 9,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 9,
          name: "Elody Spencer",
          tel: "(262) 490-7212 x49783",
          address: "18267 Ryan Avenue",
          opening_hours: "08:00",
          description:
            "Est saepe ullam molestiae rerum iusto voluptatem magnam quis amet. Blanditiis fugit ut quo. Et dolor sapiente asperiores excepturi possimus et et aut. Voluptas omnis fugit aut rerum minus. Voluptates modi ut cumque et corrupti distinctio rerum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=54.55782683941975",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 60,
        text: "Fugit repellat molestiae sit in nam id aliquid similique.",
        UserId: 1,
        RestaurantId: 10,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 10,
          name: "Susana Cartwright",
          tel: "1-523-168-0689",
          address: "1402 Boehm Mission",
          opening_hours: "08:00",
          description: "Officiis in modi est sunt blanditiis voluptate.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=77.79104070717335",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 62,
        text:
          "Deleniti voluptate commodi neque qui officiis tempore voluptate magnam fugit.",
        UserId: 1,
        RestaurantId: 12,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 12,
          name: "Hildegard Kshlerin",
          tel: "984.024.2649 x9990",
          address: "7157 Alan Expressway",
          opening_hours: "08:00",
          description: "Quia necessitatibus expedita magnam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=60.88827387642861",
          viewCounts: 19,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-08T17:07:38.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 64,
        text: "Est ut consequatur accusamus magnam.",
        UserId: 1,
        RestaurantId: 14,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 14,
          name: "Orin Kris PhD",
          tel: "1-809-572-7352 x67985",
          address: "6991 Palma Islands",
          opening_hours: "08:00",
          description: "Sed facilis nihil iste quis qui.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=3.0133447903702093",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 67,
        text: "Voluptate quo rem omnis quam non.",
        UserId: 1,
        RestaurantId: 17,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 17,
          name: "Malika Schinner",
          tel: "149-724-7001 x994",
          address: "1142 Kane Ridges",
          opening_hours: "08:00",
          description:
            "Ipsa qui voluptatem. Omnis eos deserunt incidunt voluptas. Provident reiciendis impedit est. Et suscipit velit occaecati eaque qui eum. Beatae eum at sit eum.\n \rDignissimos mollitia officiis placeat aspernatur. Temporibus numquam vel ducimus voluptatibus voluptatibus doloribus. Qui voluptas vero.\n \rLibero ex voluptatem. Magnam consectetur alias earum nesciunt quia suscipit et. Quasi dolorum est tenetur neque omnis reiciendis sint. Odio culpa sint eius vel et molestiae voluptas fugit. Est fugit aut ut animi vel. Officia facere cumque est eligendi dolor at assumenda reiciendis esse.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=26.48541336534258",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 68,
        text: "Eveniet omnis esse ex aut.",
        UserId: 1,
        RestaurantId: 18,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 18,
          name: "Art Kulas",
          tel: "449-138-1622 x18644",
          address: "394 Marquardt Summit",
          opening_hours: "08:00",
          description: "est repellendus id",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=4.285237589776769",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 70,
        text:
          "Iste repudiandae in ut fugit veniam voluptatibus dolores dolorem.",
        UserId: 1,
        RestaurantId: 20,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 20,
          name: "Grant Daniel",
          tel: "775-789-1695 x2555",
          address: "4338 Wunsch Trace",
          opening_hours: "08:00",
          description:
            "Quam dolores illo. Rem voluptatibus blanditiis impedit itaque est repellat enim est ad. Odio quam perspiciatis voluptas accusamus alias velit at magni. Totam ducimus et consequuntur fugiat sit maxime tempore. Temporibus omnis cum non est quibusdam autem.\n \rQui voluptates veritatis. Et nihil facere aut. Quo dolorem aut deserunt delectus similique aut asperiores.\n \rSit dolorum quo. Ab enim dolorem enim est rerum hic. Perferendis maiores voluptate nemo molestiae magni. Autem illo reiciendis repellendus quo suscipit dolorum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=81.25599144143041",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 75,
        text: "Sapiente eos eos sit facere inventore saepe voluptatem.",
        UserId: 1,
        RestaurantId: 25,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 25,
          name: "Baron Grady",
          tel: "382.728.2533 x6820",
          address: "038 Genesis Plains",
          opening_hours: "08:00",
          description: "itaque atque voluptatum",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=61.90940630133672",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 76,
        text: "Nihil ullam quod possimus voluptas et eos est.",
        UserId: 1,
        RestaurantId: 26,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 26,
          name: "Mr. Berniece Green",
          tel: "1-613-101-8015 x359",
          address: "39007 Gerda Stravenue",
          opening_hours: "08:00",
          description: "Esse rem ut mollitia.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=96.75722365187094",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 78,
        text: "Non quo quae nulla.",
        UserId: 1,
        RestaurantId: 28,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 28,
          name: "Melvina Torphy",
          tel: "1-934-403-0415 x678",
          address: "65315 Delphia Squares",
          opening_hours: "08:00",
          description:
            "Perferendis voluptatem dignissimos aliquam aut aut esse velit. Deserunt qui autem. Illum quasi unde quis minima. Enim quo at quia. Distinctio sit quaerat iusto aliquam voluptates repudiandae aliquid quia. Nihil autem quas ducimus tenetur totam dolorem cumque ipsum.\n \rEarum ipsa aut. Est sit voluptatem. Rerum ducimus fugit totam et qui necessitatibus quis incidunt.\n \rCumque enim possimus fuga dolorem. Voluptatibus quo accusamus delectus excepturi est corporis. Neque voluptatum dolor temporibus ullam. Sapiente voluptate odit et. Dolorem sit nisi at ut quod officiis vero.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=26.522747474074304",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 83,
        text: "Ut ipsa voluptas molestias aut itaque consequatur voluptatem.",
        UserId: 1,
        RestaurantId: 33,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 33,
          name: "Lavinia Hoppe",
          tel: "1-023-312-1346",
          address: "6587 Strosin Inlet",
          opening_hours: "08:00",
          description: "eos",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=5.421541260421003",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 84,
        text: "Aspernatur et modi nihil quia illo esse quo et.",
        UserId: 1,
        RestaurantId: 34,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 34,
          name: "Isom Kilback",
          tel: "1-170-336-1393 x33493",
          address: "94760 Opal Plaza",
          opening_hours: "08:00",
          description:
            "Voluptatem voluptatem aut sunt accusamus reiciendis ut.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=33.712293851084006",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 85,
        text: "Omnis ducimus quis pariatur.",
        UserId: 1,
        RestaurantId: 35,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 35,
          name: "Maye Gibson",
          tel: "754-359-5847 x72353",
          address: "5168 Rogahn Forest",
          opening_hours: "08:00",
          description:
            "Temporibus eveniet tempore officia.\nEsse eos omnis fugit consequuntur deleniti blanditiis molestiae.\nLaborum pariatur aperiam adipisci ducimus.\nVero repellendus iusto.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=46.848682738404946",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 91,
        text: "Eaque velit mollitia vel dolorem voluptatum mollitia qui.",
        UserId: 1,
        RestaurantId: 41,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 41,
          name: "Hector Mraz",
          tel: "986.147.0682 x227",
          address: "988 Hyatt Hills",
          opening_hours: "08:00",
          description: "Nulla quidem maiores consequatur hic.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=82.15468272605857",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 93,
        text: "Quia aliquam impedit assumenda voluptas.",
        UserId: 1,
        RestaurantId: 43,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 43,
          name: "Jovany Beahan",
          tel: "(617) 640-1773",
          address: "8519 Lane Ports",
          opening_hours: "08:00",
          description:
            "Voluptate placeat perferendis labore eum temporibus ut ducimus exercitationem. Iusto quas eos voluptas qui nemo. Pariatur tenetur aut autem nam sint recusandae explicabo hic dolore. Sint amet ea eaque qui doloribus omnis ut rerum. Voluptas et delectus quisquam esse corporis ut. Ratione qui harum blanditiis fuga similique magni.\n \rNobis quas eligendi debitis exercitationem nesciunt nesciunt consequatur. Perspiciatis repudiandae blanditiis. Atque inventore ea architecto commodi eos nemo. Vel debitis atque sapiente praesentium vel facere et expedita. Neque voluptatem officia ullam et vel. Quos officia iusto explicabo est suscipit.\n \rEt blanditiis ea quisquam. Fugiat dolorum ducimus sapiente reiciendis sed dignissimos perferendis aut ut. Est corrupti pariatur vero. Rerum velit ut.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=81.77271271754287",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 94,
        text: "Dolorum id quam.",
        UserId: 1,
        RestaurantId: 44,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 44,
          name: "Lisa Kuphal",
          tel: "1-335-613-9224 x470",
          address: "9695 Koch Gardens",
          opening_hours: "08:00",
          description:
            "Hic atque et sit incidunt ratione unde tempore. Sunt voluptas debitis sed qui aperiam voluptatem deserunt eius. Sint architecto necessitatibus tempore voluptatum quisquam quia blanditiis excepturi. Dolor ut incidunt.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=40.92681081675933",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 96,
        text: "Libero nisi eos.",
        UserId: 1,
        RestaurantId: 46,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 46,
          name: "Virgil Lowe DDS",
          tel: "(233) 432-3602",
          address: "8490 Elvis Mall",
          opening_hours: "08:00",
          description:
            "Ea quae similique perferendis et explicabo reprehenderit illo amet. Sed ea iure aut sit nihil perspiciatis minima maxime delectus. Ipsa et porro qui magni maiores quae voluptatem. Expedita sed maxime. Doloremque praesentium exercitationem.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=82.69236559627441",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 97,
        text: "Placeat corrupti id exercitationem ex culpa.",
        UserId: 1,
        RestaurantId: 47,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 47,
          name: "Nellie Gusikowski",
          tel: "1-505-455-4384 x492",
          address: "56607 Dibbert Summit",
          opening_hours: "08:00",
          description:
            "Ut non modi qui et eligendi praesentium. Ducimus facilis esse vel iure debitis rerum recusandae. Quo dolor sapiente modi eum voluptas quis accusamus dolores. Enim id fugiat molestiae quia magni.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=11.183631636616731",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 101,
        text: "Vero laborum reprehenderit.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 1,
          name: "Jacey Huel II",
          tel: "233.190.8258 x432",
          address: "0410 Maybelle Manors",
          opening_hours: "08:00",
          description:
            "Nostrum consectetur odio ex ea. Officia aut ab et voluptates ullam eaque dolores. Et officiis odit voluptatem velit repellat accusamus ut veritatis. Ut ut dolor aliquid nisi. Molestiae autem a fuga debitis iure.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=47.867095179811315",
          viewCounts: 13,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-10T15:19:59.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 103,
        text:
          "Beatae autem distinctio molestiae aut incidunt est est deleniti.",
        UserId: 1,
        RestaurantId: 3,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 3,
          name: "Miss Macey Thompson",
          tel: "(087) 965-0881 x3247",
          address: "6090 Queenie Rue",
          opening_hours: "08:00",
          description:
            "In molestias quos. Minima ipsa iusto a quo incidunt hic quibusdam. Assumenda rerum accusamus mollitia ut nisi. Consequuntur nihil ut fugit minus quos veniam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=78.52715597733697",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 104,
        text: "Itaque nesciunt sit totam.",
        UserId: 1,
        RestaurantId: 4,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 4,
          name: "Justine Gislason",
          tel: "563-802-5980",
          address: "70758 Oberbrunner Rapid",
          opening_hours: "08:00",
          description: "eos",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=86.17694141676466",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 106,
        text: "Maxime cupiditate sit.",
        UserId: 1,
        RestaurantId: 6,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 6,
          name: "Dylan Sauer",
          tel: "1-575-370-1986 x109",
          address: "7394 Beier Hollow",
          opening_hours: "08:00",
          description: "earum",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=0.01821713067244879",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 108,
        text:
          "Voluptatum dolorem accusantium animi autem rerum temporibus autem.",
        UserId: 1,
        RestaurantId: 8,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 8,
          name: "Tyra Mayer",
          tel: "1-099-947-4391 x303",
          address: "852 Joseph Mountains",
          opening_hours: "08:00",
          description:
            "Dolore in temporibus illo odio.\nUt labore ea eligendi at quo quis ut aut.\nRerum iure vel temporibus repellendus.\nLaudantium pariatur quod sed et inventore quia.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=48.39765086654735",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 119,
        text: "Sunt illo voluptatibus et.",
        UserId: 1,
        RestaurantId: 19,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 19,
          name: "Aniya Stanton",
          tel: "453-418-4585 x0301",
          address: "65463 Medhurst Valleys",
          opening_hours: "08:00",
          description: "Earum veniam voluptas itaque magnam quidem.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=14.026033896197344",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 120,
        text: "Laboriosam odit culpa debitis est eos nulla dolorem.",
        UserId: 1,
        RestaurantId: 20,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 20,
          name: "Grant Daniel",
          tel: "775-789-1695 x2555",
          address: "4338 Wunsch Trace",
          opening_hours: "08:00",
          description:
            "Quam dolores illo. Rem voluptatibus blanditiis impedit itaque est repellat enim est ad. Odio quam perspiciatis voluptas accusamus alias velit at magni. Totam ducimus et consequuntur fugiat sit maxime tempore. Temporibus omnis cum non est quibusdam autem.\n \rQui voluptates veritatis. Et nihil facere aut. Quo dolorem aut deserunt delectus similique aut asperiores.\n \rSit dolorum quo. Ab enim dolorem enim est rerum hic. Perferendis maiores voluptate nemo molestiae magni. Autem illo reiciendis repellendus quo suscipit dolorum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=81.25599144143041",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 127,
        text: "Omnis praesentium dolor ex omnis ea assumenda.",
        UserId: 1,
        RestaurantId: 27,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 27,
          name: "Ebba Kilback",
          tel: "351.612.1554 x1266",
          address: "5336 Erick Loaf",
          opening_hours: "08:00",
          description: "voluptates fugit ut",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=23.335168145005557",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 128,
        text: "Voluptatum hic non earum at deserunt quisquam nihil commodi.",
        UserId: 1,
        RestaurantId: 28,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 28,
          name: "Melvina Torphy",
          tel: "1-934-403-0415 x678",
          address: "65315 Delphia Squares",
          opening_hours: "08:00",
          description:
            "Perferendis voluptatem dignissimos aliquam aut aut esse velit. Deserunt qui autem. Illum quasi unde quis minima. Enim quo at quia. Distinctio sit quaerat iusto aliquam voluptates repudiandae aliquid quia. Nihil autem quas ducimus tenetur totam dolorem cumque ipsum.\n \rEarum ipsa aut. Est sit voluptatem. Rerum ducimus fugit totam et qui necessitatibus quis incidunt.\n \rCumque enim possimus fuga dolorem. Voluptatibus quo accusamus delectus excepturi est corporis. Neque voluptatum dolor temporibus ullam. Sapiente voluptate odit et. Dolorem sit nisi at ut quod officiis vero.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=26.522747474074304",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 131,
        text: "Quia dolore accusamus quia ea.",
        UserId: 1,
        RestaurantId: 31,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 31,
          name: "Kyle Metz",
          tel: "1-696-668-9287 x93856",
          address: "5801 Corwin Branch",
          opening_hours: "08:00",
          description:
            "Libero nihil id eius incidunt repellat quas et. Magni est quam voluptate. Voluptatem exercitationem porro tenetur sint magni inventore.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=1.238319899277962",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 132,
        text:
          "Sunt odit architecto ut voluptatum culpa molestiae quis repellat.",
        UserId: 1,
        RestaurantId: 32,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 32,
          name: "Abdiel O'Conner",
          tel: "855.809.2771 x9672",
          address: "5732 Davonte Crossing",
          opening_hours: "08:00",
          description:
            "Reprehenderit recusandae magni enim laboriosam eos autem.\nMaiores dolores qui.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=9.818338629387657",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 135,
        text: "Ea qui occaecati praesentium rerum porro.",
        UserId: 1,
        RestaurantId: 35,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 35,
          name: "Maye Gibson",
          tel: "754-359-5847 x72353",
          address: "5168 Rogahn Forest",
          opening_hours: "08:00",
          description:
            "Temporibus eveniet tempore officia.\nEsse eos omnis fugit consequuntur deleniti blanditiis molestiae.\nLaborum pariatur aperiam adipisci ducimus.\nVero repellendus iusto.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=46.848682738404946",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 136,
        text: "Officiis repellendus commodi molestiae velit libero distinctio.",
        UserId: 1,
        RestaurantId: 36,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 36,
          name: "Mrs. Elian Turner",
          tel: "(662) 027-2573 x139",
          address: "2911 Purdy Mews",
          opening_hours: "08:00",
          description: "Nesciunt recusandae veniam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=23.304701450109345",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 138,
        text: "Assumenda eaque ut deleniti eos.",
        UserId: 1,
        RestaurantId: 38,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 38,
          name: "Janiya Paucek",
          tel: "1-952-190-6157",
          address: "2880 Willms Fork",
          opening_hours: "08:00",
          description: "Perspiciatis libero commodi quas aut ea.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=36.359976447981126",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 139,
        text: "Qui et alias itaque natus doloribus facilis et.",
        UserId: 1,
        RestaurantId: 39,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 39,
          name: "Pearlie Grant I",
          tel: "170.790.9217 x179",
          address: "948 Mante Burgs",
          opening_hours: "08:00",
          description: "occaecati",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=98.61313855493314",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 140,
        text: "Quos omnis voluptas sit esse dolorum error voluptas veniam.",
        UserId: 1,
        RestaurantId: 40,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 40,
          name: "Juana Gleason",
          tel: "(902) 043-4662 x0546",
          address: "6282 Carmela Forges",
          opening_hours: "08:00",
          description:
            "Fugit iusto sit nostrum commodi vel consequuntur perferendis accusamus optio. Rerum excepturi ut. Consequuntur blanditiis possimus amet ut est voluptatem ut explicabo. Aut repellat amet quasi consequatur qui. Magni sapiente atque dolor quia et corporis tempora accusamus. Voluptas occaecati tenetur molestiae quos dicta qui deserunt recusandae dicta.\n \rAdipisci consequatur eveniet ut perspiciatis possimus harum ratione pariatur non. Quis explicabo quae culpa dignissimos delectus quos. Dolorem minima doloremque at iusto quas temporibus et quis sed.\n \rQuidem harum corporis eos recusandae aut quam maiores dolores nostrum. Aspernatur incidunt id provident amet sunt accusamus culpa molestiae ipsa. Beatae facere quo eum corrupti qui et. Fuga ducimus et autem vitae incidunt. Officia maiores minima tempore repudiandae animi.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=43.29466922194041",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 147,
        text: "Dignissimos maxime corrupti.",
        UserId: 1,
        RestaurantId: 47,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 47,
          name: "Nellie Gusikowski",
          tel: "1-505-455-4384 x492",
          address: "56607 Dibbert Summit",
          opening_hours: "08:00",
          description:
            "Ut non modi qui et eligendi praesentium. Ducimus facilis esse vel iure debitis rerum recusandae. Quo dolor sapiente modi eum voluptas quis accusamus dolores. Enim id fugiat molestiae quia magni.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=11.183631636616731",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 149,
        text: "Neque ex voluptatem deleniti.",
        UserId: 1,
        RestaurantId: 49,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 49,
          name: "Lavern Stroman PhD",
          tel: "1-760-297-3854",
          address: "400 Rice Station",
          opening_hours: "08:00",
          description:
            "Omnis non cupiditate. Non qui architecto voluptate reprehenderit. Cupiditate et earum nobis qui qui. Voluptas unde explicabo cupiditate quidem aliquid commodi ut amet dicta. Voluptatibus quaerat similique dolorum ut tempora quis et. Qui nostrum a aspernatur corporis.\n \rNeque amet aliquid qui in quam omnis consequatur dolore. Repellat consequatur doloribus nostrum est debitis. Velit repudiandae aliquam nisi aliquid.\n \rDolores vel exercitationem enim. Voluptate sequi quis dolorem vel. Explicabo explicabo nisi similique occaecati vel. Nulla omnis omnis. Sapiente modi sit fuga porro quo. Incidunt omnis voluptate fugit deserunt est laboriosam eius tempore.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=84.11843942322581",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
    ],
    FavoritedRestaurants: [
      {
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
        Favorite: {
          UserId: 1,
          RestaurantId: 11,
          createdAt: "2021-04-08T15:41:56.000Z",
          updatedAt: "2021-04-08T15:41:56.000Z",
        },
      },
    ],
    Followers: [
      {
        id: 17,
        name: "user4",
        email: "dexample@gmail.com",
        password:
          "$2a$10$0xrN4lOd5e0.UI4p.W9ug.Stlf4IEEdZ.vtkuJpVkQvER/htZKu.S",
        isAdmin: false,
        image: null,
        createdAt: "2021-04-09T15:26:17.000Z",
        updatedAt: "2021-04-09T15:26:17.000Z",
        Followship: {
          followerId: 17,
          followingId: 1,
          createdAt: "2021-04-10T12:20:55.000Z",
          updatedAt: "2021-04-10T12:20:55.000Z",
        },
      },
    ],
    Followings: [],
  },
  isFollowed: false,
};

import AdminNav from "../components/AdminRestaurants/AdminNav";

export default {
  name: "AdminUsers",
  components: { AdminNav },
  created() {
    this.fetchUsers();
    this.fetchCurrentUser();
  },
  data() {
    return {
      users: [],
      currentUser: {},
    };
  },
  methods: {
    fetchUsers() {
      // Todo: call server for data via API
      this.users = dummyData.users;
    },
    fetchCurrentUser() {
      this.currentUser = dummyUser.profile;
    },
    toggleUserRole(id) {
      //Todo: call server to change data via API
      console.log("Call server to change data");
      this.users = this.users.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }
        return user;
      });
    },
  },
  filters: {
    showRole(isAdmin) {
      return isAdmin ? "admin" : "user";
    },
  },
};
</script>