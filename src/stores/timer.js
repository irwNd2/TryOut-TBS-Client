import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', {
  state: () => ({
    duration: 25 * 60,
    remainingTime: 0,
    intervalId: null
  }),

  actions: {
    decrementTimer() {
      this.remainingTime--
      localStorage.setItem('remainingTime', this.remainingTime) // save the remaining time to localStorage
      if (this.remainingTime === 0) {
        clearInterval(this.intervalId)
      }
    },
    startTimer() {
      if (this.remainingTime === 0) {
        this.remainingTime = this.duration
      }

      this.intervalId = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--
        } else {
          this.stopTimer()
        }
      }, 1000)
    },

    stopTimer() {
      clearInterval(this.intervalId)
      this.intervalId = null
      this.remainingTime = 0
    },

    resetTimer() {
      this.stopTimer()
      this.remainingTime = this.duration
      localStorage.removeItem('remainingTime') // remove the remaining time from localStorage
    },

    initializeTimer() {
      const storedRemainingTime = localStorage.getItem('remainingTime')
      if (storedRemainingTime !== null) {
        this.remainingTime = parseInt(storedRemainingTime)
      } else {
        this.remainingTime = this.duration
      }
    }
  },

  watch: {
    remainingTime(value) {
      localStorage.setItem('remainingTime', value)
    }
  }
})
