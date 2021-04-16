import { apiHelper } from './../utils/helpers'

export default {
  signIn({ email, password }) {
    return apiHelper.post('/signin', {
      email, password
    })
  },
  signUp(payload) {
    return apiHelper.post('signup', payload)
  }
}