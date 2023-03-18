<template>
  <div>
    <h2>Tryout Page</h2>
  </div>
</template>

<script setup>
import { defineComponent, ref, onMounted } from 'vue'
import { useTryOuts } from './query'
import { useRoute } from 'vue-router'

defineComponent({
  name: 'TryOutsListPage'
})

onMounted(() => {
  useTryOuts({
    params: route
  })
})

const route = useRoute()

const tryOutsList = ref([])
const { data } = useTryOuts({
  params: route
})
if (data.value) {
  tryOutsList.value = data.value
}
</script>
