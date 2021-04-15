<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit($event)">
      <div class="form-group">
        <label for="name">name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          :src="user.image | emptyImageFilter"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins.js";
const dummyData = {
  profile: {
    id: 2,
    name: "user1",
    email: "user1@example.com",
    password: "$2a$10$ytpYqtTVPkE.8liOUf/ov.KnNcUMf8WNQzMqmWsIXK7x1VevkaVHy",
    isAdmin: false,
    image: null,
    createdAt: "2021-04-07T14:21:46.000Z",
    updatedAt: "2021-04-07T14:21:46.000Z",
    Comments: [
      {
        id: 6,
        text: "Architecto ad dolores numquam illum sint voluptas veniam aut.",
        UserId: 2,
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
        id: 8,
        text:
          "Corrupti officiis qui quia temporibus iste et dolores natus quo.",
        UserId: 2,
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
        id: 13,
        text: "Sunt aut iusto nobis et voluptatem minima et.",
        UserId: 2,
        RestaurantId: 13,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 13,
          name: "Hazle Kemmer",
          tel: "797.120.4906 x16944",
          address: "444 Salvador Fords",
          opening_hours: "08:00",
          description:
            "Consequatur adipisci enim et doloribus totam et laudantium alias exercitationem. Et ut repudiandae odit consectetur blanditiis porro impedit. Reprehenderit aliquam quos veniam sunt officia maxime modi excepturi. Culpa perspiciatis ea nemo exercitationem repellat molestias omnis. Qui et ea molestias quis velit.\n \rDeleniti vitae laboriosam inventore eveniet aspernatur voluptatem. Autem ut rerum occaecati sint eveniet numquam nostrum qui. Ipsam ipsum asperiores a qui aliquam. Qui perferendis consequatur eveniet nobis enim ut et dolores. Minus laborum occaecati eos vitae occaecati tenetur nulla.\n \rQuis rem qui saepe labore similique. Consequatur quidem qui ut. In enim ducimus hic earum. Eos harum sapiente deserunt magnam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=32.329244584704206",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 16,
        text: "Qui repudiandae ipsum alias perspiciatis.",
        UserId: 2,
        RestaurantId: 16,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 16,
          name: "Dr. Berenice Kessler",
          tel: "1-661-877-1917 x19621",
          address: "0646 Buckridge Spring",
          opening_hours: "08:00",
          description: "nostrum",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=85.50356229130959",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 17,
        text: "Ut in et rem quos odit alias.",
        UserId: 2,
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
        id: 20,
        text: "Corporis quod nobis expedita eum dicta id.",
        UserId: 2,
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
        id: 26,
        text: "Est culpa tempora fugiat.",
        UserId: 2,
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
        id: 29,
        text:
          "Iste dignissimos veritatis qui repellat omnis quae laboriosam laborum.",
        UserId: 2,
        RestaurantId: 29,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 29,
          name: "Dr. Madaline Beatty",
          tel: "(960) 332-7562 x231",
          address: "0205 Conn Mission",
          opening_hours: "08:00",
          description:
            "Id tempora repudiandae temporibus deleniti voluptatem quo.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=39.522196270502064",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 31,
        text: "Magnam est delectus dicta voluptas quia quasi.",
        UserId: 2,
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
        id: 32,
        text: "Labore et ut exercitationem quo illum sequi et.",
        UserId: 2,
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
        id: 36,
        text: "Aut sed expedita laudantium quae vel accusantium veritatis.",
        UserId: 2,
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
        id: 38,
        text: "Explicabo maiores aliquam facilis quisquam quis ut autem.",
        UserId: 2,
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
        id: 40,
        text: "Repellat ut tenetur autem.",
        UserId: 2,
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
        id: 41,
        text: "Sunt aut ullam voluptates laboriosam neque libero.",
        UserId: 2,
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
        id: 42,
        text: "Fugiat nemo ad et eos laborum.",
        UserId: 2,
        RestaurantId: 42,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 42,
          name: "Eveline Bergnaum",
          tel: "1-210-759-6894 x13840",
          address: "890 Eduardo Estates",
          opening_hours: "08:00",
          description:
            "Sint commodi cum nihil architecto et quis et quae. Debitis quibusdam et corrupti vel adipisci voluptatibus magni voluptates qui. Et voluptatem saepe sint. Aut sed inventore ullam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=7.30605969917284",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 44,
        text: "Eaque et cumque optio dolorem id sit aut nulla.",
        UserId: 2,
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
        id: 50,
        text: "Vero eos illo non.",
        UserId: 2,
        RestaurantId: 50,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 50,
          name: "Mr. Kelvin Barrows",
          tel: "491.463.2940",
          address: "532 Kutch Junction",
          opening_hours: "08:00",
          description:
            "Aliquam facere quas ab voluptates beatae modi.\nOmnis dolores dolorem at quas.\nRerum nihil est ut sit nesciunt ipsam illo dolores suscipit.\nRepellat autem distinctio nemo iste sequi quos quis sed.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=70.90376762560324",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 52,
        text: "Incidunt nostrum culpa eos ea corrupti sint.",
        UserId: 2,
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
        id: 54,
        text:
          "Eos aut laudantium impedit consequatur repellat repudiandae sint eos.",
        UserId: 2,
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
        id: 56,
        text: "Quaerat quasi quod velit eum enim.",
        UserId: 2,
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
        id: 57,
        text: "Dolores ut veritatis qui aut.",
        UserId: 2,
        RestaurantId: 7,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 7,
          name: "Vernie Cassin",
          tel: "633.366.7511 x585",
          address: "36433 Reinger Creek",
          opening_hours: "08:00",
          description: "Recusandae possimus veritatis ut ut quo.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=70.75252255654509",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 58,
        text: "Commodi et id voluptatem vel neque nobis.",
        UserId: 2,
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
        id: 61,
        text: "Expedita omnis dignissimos veniam qui.",
        UserId: 2,
        RestaurantId: 11,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
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
        },
      },
      {
        id: 66,
        text: "Qui ut possimus quis laboriosam odio optio adipisci.",
        UserId: 2,
        RestaurantId: 16,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 16,
          name: "Dr. Berenice Kessler",
          tel: "1-661-877-1917 x19621",
          address: "0646 Buckridge Spring",
          opening_hours: "08:00",
          description: "nostrum",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=85.50356229130959",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 69,
        text:
          "Consequatur perspiciatis molestiae sed vel quia vel rerum assumenda.",
        UserId: 2,
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
        id: 72,
        text: "Voluptatem veritatis et expedita voluptates assumenda.",
        UserId: 2,
        RestaurantId: 22,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 22,
          name: "Alvah Schulist",
          tel: "1-073-155-3213 x3878",
          address: "099 Lilian Radial",
          opening_hours: "08:00",
          description: "voluptatem",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=29.695764446424498",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 73,
        text: "Dignissimos voluptatibus rerum et.",
        UserId: 2,
        RestaurantId: 23,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 23,
          name: "Jaylan Schiller",
          tel: "1-720-812-0156 x4548",
          address: "82510 Mertz Center",
          opening_hours: "08:00",
          description:
            "Vel repellat ut placeat quia accusamus.\nQui dolorem neque dolores ipsam.\nRatione ipsam sed fugit qui in.\nVoluptates non omnis distinctio sint ea aut quo perferendis natus.\nIusto quae quo est atque ut libero.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=76.10919405626902",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 74,
        text: "Sint sit occaecati itaque quod ad sit atque laudantium iure.",
        UserId: 2,
        RestaurantId: 24,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 24,
          name: "Raquel Metz",
          tel: "418-761-3762 x5137",
          address: "78799 Bartell Turnpike",
          opening_hours: "08:00",
          description: "Sint voluptates omnis placeat.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=75.15223262484906",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 77,
        text: "Autem quas eum ut qui ut id in libero.",
        UserId: 2,
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
        id: 79,
        text: "Temporibus sed fugiat quo quia atque molestiae repudiandae.",
        UserId: 2,
        RestaurantId: 29,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 29,
          name: "Dr. Madaline Beatty",
          tel: "(960) 332-7562 x231",
          address: "0205 Conn Mission",
          opening_hours: "08:00",
          description:
            "Id tempora repudiandae temporibus deleniti voluptatem quo.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=39.522196270502064",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 80,
        text: "Ad quidem nisi quod sed dignissimos id aperiam quibusdam.",
        UserId: 2,
        RestaurantId: 30,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 30,
          name: "Mrs. Bradly Anderson",
          tel: "1-957-421-9334 x2880",
          address: "44172 Gleason Divide",
          opening_hours: "08:00",
          description:
            "Pariatur eum eos consectetur qui ex facilis quo.\nDolor nam quia consequatur.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=97.69267318226757",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 86,
        text: "Nihil quo repudiandae possimus voluptas dolore fuga.",
        UserId: 2,
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
        id: 87,
        text:
          "Voluptatum praesentium quisquam similique molestiae quisquam exercitationem vel.",
        UserId: 2,
        RestaurantId: 37,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 37,
          name: "Uriel D'Amore",
          tel: "1-013-405-2838 x19556",
          address: "67469 Sally Mountain",
          opening_hours: "08:00",
          description:
            "Ut odit beatae excepturi rerum dolores nemo. Consequatur voluptas voluptas accusamus sed quis incidunt. Aut consequatur molestias fuga totam nulla sint quia autem adipisci. Nihil ipsum qui quidem laboriosam. Sint omnis enim. Quo voluptas eum odio laboriosam exercitationem.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=70.18235792306493",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 88,
        text: "Architecto iusto iste molestiae nam autem.",
        UserId: 2,
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
        id: 89,
        text: "Vero molestiae dignissimos id autem eum.",
        UserId: 2,
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
        id: 90,
        text: "Quis et impedit.",
        UserId: 2,
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
        id: 92,
        text: "Et est fugit nostrum ipsam omnis est temporibus.",
        UserId: 2,
        RestaurantId: 42,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 42,
          name: "Eveline Bergnaum",
          tel: "1-210-759-6894 x13840",
          address: "890 Eduardo Estates",
          opening_hours: "08:00",
          description:
            "Sint commodi cum nihil architecto et quis et quae. Debitis quibusdam et corrupti vel adipisci voluptatibus magni voluptates qui. Et voluptatem saepe sint. Aut sed inventore ullam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=7.30605969917284",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 95,
        text: "Rerum qui aperiam consequatur illo ad quas.",
        UserId: 2,
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
        id: 98,
        text: "Voluptatem quam iure eum veniam ut.",
        UserId: 2,
        RestaurantId: 48,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 48,
          name: "Ms. Myriam Renner",
          tel: "1-187-026-1139 x6461",
          address: "6080 Hoppe Village",
          opening_hours: "08:00",
          description:
            "Molestiae ipsa voluptas optio modi pariatur sit adipisci aspernatur quia.\nQui et deserunt.\nAdipisci itaque inventore asperiores eos.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=95.11464794833842",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 107,
        text: "Recusandae omnis quibusdam unde.",
        UserId: 2,
        RestaurantId: 7,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 7,
          name: "Vernie Cassin",
          tel: "633.366.7511 x585",
          address: "36433 Reinger Creek",
          opening_hours: "08:00",
          description: "Recusandae possimus veritatis ut ut quo.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=70.75252255654509",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 109,
        text: "Molestiae enim nemo.",
        UserId: 2,
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
        id: 113,
        text:
          "Molestiae beatae temporibus quia aliquid sint esse dolores quia impedit.",
        UserId: 2,
        RestaurantId: 13,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 13,
          name: "Hazle Kemmer",
          tel: "797.120.4906 x16944",
          address: "444 Salvador Fords",
          opening_hours: "08:00",
          description:
            "Consequatur adipisci enim et doloribus totam et laudantium alias exercitationem. Et ut repudiandae odit consectetur blanditiis porro impedit. Reprehenderit aliquam quos veniam sunt officia maxime modi excepturi. Culpa perspiciatis ea nemo exercitationem repellat molestias omnis. Qui et ea molestias quis velit.\n \rDeleniti vitae laboriosam inventore eveniet aspernatur voluptatem. Autem ut rerum occaecati sint eveniet numquam nostrum qui. Ipsam ipsum asperiores a qui aliquam. Qui perferendis consequatur eveniet nobis enim ut et dolores. Minus laborum occaecati eos vitae occaecati tenetur nulla.\n \rQuis rem qui saepe labore similique. Consequatur quidem qui ut. In enim ducimus hic earum. Eos harum sapiente deserunt magnam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=32.329244584704206",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 114,
        text: "Consectetur officiis officia aut.",
        UserId: 2,
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
        id: 115,
        text: "Facere est non ut iure hic ipsam.",
        UserId: 2,
        RestaurantId: 15,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 15,
          name: "Dustin Raynor",
          tel: "172-822-6892",
          address: "0041 Brandt Bypass",
          opening_hours: "08:00",
          description:
            "Quaerat qui voluptate quae quisquam numquam pariatur minima quisquam magnam. Aut omnis quis. Totam aut assumenda aliquid vel asperiores.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=88.92429617922018",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 124,
        text:
          "Repellat ut temporibus totam culpa ducimus quia placeat commodi.",
        UserId: 2,
        RestaurantId: 24,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 24,
          name: "Raquel Metz",
          tel: "418-761-3762 x5137",
          address: "78799 Bartell Turnpike",
          opening_hours: "08:00",
          description: "Sint voluptates omnis placeat.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=75.15223262484906",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 125,
        text: "Autem ullam et saepe.",
        UserId: 2,
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
        id: 133,
        text: "Porro ratione soluta tempora delectus qui ea non.",
        UserId: 2,
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
        id: 141,
        text: "Minima est at dolores totam.",
        UserId: 2,
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
        id: 144,
        text: "Iusto quam excepturi ipsum omnis esse non quo ex non.",
        UserId: 2,
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
        id: 146,
        text: "Nesciunt aut sunt omnis.",
        UserId: 2,
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
        id: 148,
        text: "Dolore expedita quia fugit molestiae.",
        UserId: 2,
        RestaurantId: 48,
        createdAt: "2021-04-07T14:21:46.000Z",
        updatedAt: "2021-04-07T14:21:46.000Z",
        Restaurant: {
          id: 48,
          name: "Ms. Myriam Renner",
          tel: "1-187-026-1139 x6461",
          address: "6080 Hoppe Village",
          opening_hours: "08:00",
          description:
            "Molestiae ipsa voluptas optio modi pariatur sit adipisci aspernatur quia.\nQui et deserunt.\nAdipisci itaque inventore asperiores eos.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=95.11464794833842",
          viewCounts: 0,
          createdAt: "2021-04-07T14:21:46.000Z",
          updatedAt: "2021-04-07T14:21:46.000Z",
          CategoryId: 1,
        },
      },
    ],
    FavoritedRestaurants: [],
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
          followingId: 2,
          createdAt: "2021-04-09T16:45:24.000Z",
          updatedAt: "2021-04-09T16:45:24.000Z",
        },
      },
    ],
    Followings: [],
  },
  isFollowed: false,
};

export default {
  name: "UserEdit",
  mixins: [emptyImageFilter],
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  data() {
    return {
      user: {
        name: "",
        image: "",
      },
    };
  },
  methods: {
    fetchUser(id) {
      console.log("Fetch userData with ID: " + id);
      //Todo: call API to get User Data with ID
      const { name, image } = dummyData.profile;
      this.user = {
        ...this.user,
        name,
        image,
      };
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (!files.length) {
        return (this.user.image = "");
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    handleSubmit(e) {
      // send formdata to server
      const form = e.target;
      const formData = new FormData(form);
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>