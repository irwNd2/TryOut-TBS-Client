<template>
  <div class="bg-white dark:bg-gray-700 w-screen h-screen">
    <Header />
    <Footer />
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

defineComponent({
  name: 'HomePage'
})
</script>
