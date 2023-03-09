import axios from 'axios'
import { defineStore } from 'pinia'
import { Toast } from '../utilities/swal'
import router from '../router'

const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {}
  }),
  actions: {
    async login(payload) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: import.meta.env.VITE_BASE_CORE_URL + '/users/login',
          data: payload
        })
        console.log(data)
        localStorage.setItem('token', data.access_token)
        this.user = data
        router.push('/home')
      } catch (error) {
        Toast({
          icon: 'error',
          title: error.response.data.message
        })
      }
    }
  },
  persist: true
})

export { useAuthStore }
