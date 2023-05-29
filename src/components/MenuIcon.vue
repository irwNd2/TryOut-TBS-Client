<template>
  <div class="flex flex-col">
    <Icon
      :icon="icon"
      class="text-black dark:text-white md:w-[80px] md:h-[80px] w-[40px] h-[40px] ml-2 md:ml-0"
    ></Icon>
    <span>
      <h2 class="dark:text-white text-base md:text-lg font-medium md:ml-2">{{ label }}</h2>
    </span>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'MenuIconComponent'
})

defineProps({
  icon: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  }
})
</script>
