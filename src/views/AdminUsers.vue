<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav></AdminNav>
    <Spinner v-if="isLoading"></Spinner>

    <table v-else class="table">
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
import AdminNav from "../components/AdminRestaurants/AdminNav";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import adminAPI from "../apis/admin";
import Spinner from "../components/Spinner";
export default {
  name: "AdminUsers",
  components: { AdminNav, Spinner },
  created() {
    this.fetchUsers();
    this.setUser(this.currentUser);
  },
  data() {
    return {
      users: [],
      user: {},
      isLoading: true,
    };
  },
  methods: {
    async fetchUsers() {
      try {
        this.isLoading = true;
        // Todo: call server for data via API
        const { data } = await adminAPI.users.getUsers();
        this.users = data.users;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資訊，請稍後再試！",
        });
      }
    },
    async setUser(newUserData) {
      this.user = newUserData;
    },
    async toggleUserRole(id) {
      try {
        const isAdmin = this.user.isAdmin;
        const { data } = await adminAPI.users.setUserRole(id, isAdmin);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // rename user role
        const newRole = this.renameUserRole(id);

        Toast.fire({
          icon: "success",
          title: `成功變更使用者身分為：${newRole}！`,
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    renameUserRole(id) {
      let newRole = "";
      this.users = this.users.map((user) => {
        if (user.id === id) {
          if (user.isAdmin === true) {
            newRole = "user";
          } else {
            newRole = "admin";
          }
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }
        return user;
      });
      return newRole;
    },
  },
  filters: {
    showRole(isAdmin) {
      return isAdmin ? "admin" : "user";
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    currentUser() {
      this.setUser(this.currentUser);
    },
  },
};
</script>