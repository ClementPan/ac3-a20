import { apiHelper } from './../utils/helpers'

export default {
  getCurrentUser() {
    return apiHelper.get('/get_current_user')
  },
  get(id) {
    return apiHelper.get(`/users/${id}`)
  },
  update(id, formData) {
    return apiHelper.put(`users/${id}`, formData)
  },
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  getTopUsers() {
    return apiHelper.get('/users/top')
  },
  addFollow(userId) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  deleteFollow(userId) {
    return apiHelper.delete(`/following/${userId}`)
  },
}