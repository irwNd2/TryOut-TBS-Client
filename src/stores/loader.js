import { defineStore } from 'pinia'

const useLoadingStore = defineStore('loading', {
  state: () => ({
    show: false
  }),
  actions: {
    showLoading() {
      this.show = true
    },
    hideLoading() {
      this.show = false
    }
  }
})

export { useLoadingStore }
