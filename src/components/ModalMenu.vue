<template>
  <div
    class="bg-white dark:bg-gray-700 rounded-lg relative w-[230px] my-6 mx-auto flex flex-col justify-start gap-1 p-1 mr-4 shadow-lg ring-1 ring-black ring-opacity-5"
  >
    <div
      class="bg-white dark:bg-gray-700 hover:bg-sky-100 dark:hover:bg-gray-600 rounded-md w-[220px] py-2 flex flex-row px-2 cursor-pointer"
    >
      <span>
        <Icon icon="ic:baseline-account-circle" class="text-black dark:text-white" width="25">
        </Icon>
      </span>
      <h2 class="px-2 text-black dark:text-white">Akun Saya</h2>
    </div>
    <div
      class="bg-white dark:bg-gray-700 hover:bg-sky-100 dark:hover:bg-gray-600 rounded-md w-[220px] py-2 flex flex-row px-2 cursor-pointer"
    >
      <span>
        <Icon
          icon="material-symbols:logout"
          class="text-black dark:text-white hover:text-red-700"
          width="25"
        >
        </Icon>
      </span>
      <h2 class="px-2 text-black dark:text-white">Akun Saya</h2>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'ModalMenu'
})
</script>
