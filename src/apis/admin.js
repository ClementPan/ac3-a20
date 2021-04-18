import { apiHelper } from './../utils/helpers'

export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories',)
    },
    create(categoryName) {
      return apiHelper.post('/admin/categories', categoryName,)
    },
    put({ id, name }) {
      return apiHelper.put(`/admin/categories/${id}`, { name },)

    },
    delete(id) {
      return apiHelper.delete(`/admin/categories/${id}`,)
    }
  },
  restaurants: {
    getDetail(id) { // get one restaurant
      return apiHelper.get(`/admin/restaurants/${id}`,)
    },
    get() { // get all restaurants
      return apiHelper.get('/admin/restaurants',)
    },
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData,)
    },
    delete(id) {
      return apiHelper.delete(`/admin/restaurants/${id}`,)
    },
    update({ id, formData }) { // edit and update one
      return apiHelper.put(`/admin/restaurants/${id}`, formData,)
    }
  },
  users: {
    getUsers() {
      return apiHelper.get('/admin/users')
    },
    setUserRole(UserId, isAdmin) {
      return apiHelper.put(`/admin/users/${UserId}`, isAdmin)
    }
  }
}
