import axios from 'axios'
import { defineStore } from 'pinia'
import { Toast } from '@/utilities/swal'
import router from '@/router'

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
        localStorage.setItem('token', data.access_token)
        this.user = data
        router.push('/app')
        Toast({
          icon: 'success',
          title: 'Login berhasil'
        })
      } catch (error) {
        Toast({
          icon: 'error',
          title: error.response.data.message
        })
      }
    },

    async logout() {
      localStorage.removeItem('token')
      this.user = {}
      router.push('/login')
      Toast({
        icon: 'success',
        title: 'Logout berhasil'
      })
    },

    async upload(file) {
      const url = import.meta.env.VITE_BASE_CORE_URL + '/users/profile/photo'
      const token = localStorage.getItem('token')
      const { data } = await axios.post(url, file, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })
      router.push('/app/profile')
      console.log(data)
    }
  },
  persist: true
})

export { useAuthStore }
