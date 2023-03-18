<template>
  <div>
    <h2>Tryout Page</h2>
    <div class="hidden">
      {{ data.data }}
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import { useTryOuts } from './query'
import { useRoute } from 'vue-router'

defineComponent({
  name: 'TryOutsListPage'
})

const route = useRoute()

const { data } = useTryOuts({
  params: route
})
</script>
