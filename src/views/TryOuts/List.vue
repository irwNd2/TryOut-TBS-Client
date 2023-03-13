<template>
  <div>
    <h2>Tryout Page</h2>
  </div>
</template>

<script setup>
import { defineComponent, ref, onMounted } from 'vue'
import { useTryOuts } from './query'

defineComponent({
  name: 'TryOutsListPage'
})

onMounted(() => {
  fetchTryOuts()
})

const tryOutsList = ref([])
const fetchTryOuts = async () => {
  const { data } = await useTryOuts({})
  tryOutsList.value = data
}
</script>
