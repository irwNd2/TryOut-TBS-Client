<template>
  <div class="p-8 gap-8 flex">
    <p>{{ minutes }}:{{ seconds }}</p>
    <button @click="startTimer">Start</button>
    <button @click="resetTimer">Reset</button>
  </div>
</template>

<script setup>
import { defineComponent, computed, onMounted } from 'vue'
import { useTimerStore } from '@/stores/timer'

defineComponent({
  name: 'TimerPage'
})

const timerStore = useTimerStore()
const minutes = computed(() => timerStore.minutes)
const seconds = computed(() => timerStore.seconds)

const startTimer = () => {
  timerStore.startTimer()
}

const resetTimer = () => {
  timerStore.resetTimer()
}

onMounted(() => {
  timerStore.startTimer()
})
</script>
