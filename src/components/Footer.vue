<template>
  <footer aria-label="Site Footer" class="bg-white dark:bg-gray-700 md:hidden">
    <div class="flex justify-between px-8 fixed inset-x-0 bottom-0 p-2">
      <div class="flex flex-col items-center">
        <Icon icon="ic:baseline-home" class="text-black dark:text-white" width="30"></Icon>
        <h2 class="text-black dark:text-white">Home</h2>
      </div>
      <div class="flex flex-col items-center">
        <Icon
          icon="fluent:learning-app-24-filled"
          class="text-black dark:text-white"
          width="30"
        ></Icon>
        <h2 class="text-black dark:text-white">Try Out</h2>
      </div>
      <div class="flex flex-col items-center">
        <Icon icon="mdi:chat-help" class="text-black dark:text-white" width="30"></Icon>
        <h2 class="text-black dark:text-white">Bantuan</h2>
      </div>
      <div class="flex flex-col items-center">
        <Icon
          icon="material-symbols:account-circle"
          class="text-black dark:text-white"
          width="30"
        ></Icon>
        <h2 class="text-black dark:text-white">Account</h2>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'FooterComponent'
})
</script>
