import { apiHelper } from './../utils/helpers'

export default {
  getRestaurant(restaurantId) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds')
  },
  getTopRestaurants() {
    return apiHelper.get('/restaurants/top')
  },
  createNewComment(newComment) {
    return apiHelper.post('/comments', newComment)
  },
  deleteComment(commentId) {
    return apiHelper.delete(`/comments/${commentId}`)
  },
}