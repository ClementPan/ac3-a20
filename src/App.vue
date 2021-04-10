<!-- ./src/App.vue -->
<template>
  <div id="restaurant-forum">
    <Navbar />

    <main class="mt-5 bg-white"><router-view /></main>
  </div>
</template>

<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>