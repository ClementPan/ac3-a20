import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    create(categoryName) {
      return apiHelper.post('/admin/categories', categoryName, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    put({ id, name }) {
      return apiHelper.put(`/admin/categories/${id}`, { name }, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })

    },
    delete(id) {
      return apiHelper.delete(`/admin/categories/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  },
  restaurants: {
    getDetail(id) { // get one restaurant
      return apiHelper.get(`/admin/restaurants/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    get() { // get all restaurants
      return apiHelper.get('/admin/restaurants', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    delete(id) {
      return apiHelper.delete(`/admin/restaurants/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    update({ id, formData }) { // edit and update one
      return apiHelper.put(`/admin/restaurants/${id}`, formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  }
}
