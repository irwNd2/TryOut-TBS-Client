<template>
  <ul class="flex flex-col overflow-auto">
    <div class="gap-2 flex flex-col justify-center items-center p-2">
      <div class="border border-green-500 rounded-full w-[150px] h-[150px]"></div>
      <div>
        <h2 class="font-semibold dark:text-gray-50">{{ user.name }}</h2>
      </div>
    </div>
    <br />
    <hr class="h-[0.08px] w-full" />
    <div>
      <template v-for="(item, i) in menu" :key="item">
        <!-- <side-menu-item :item="item" :index="i"></side-menu-item> -->
        <SideMenuItem :item="item" :index="i" />
        <!-- <p>{{ item }}</p> -->
      </template>
    </div>
  </ul>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import SideMenuItem from './SideMenuItem.vue'
import { useAuthStore } from '@/stores/auth'

defineComponent({
  name: 'SideMenu'
})

const { user } = useAuthStore()

const menu = ref([
  {
    label: 'Pengaturan Akun',
    icon: 'ic:baseline-account-box',
    to: '/app/profile'
  },
  {
    label: 'Voucher Akun',
    icon: 'mdi:voucher',
    to: '/app/voucher-akun'
  }
])
</script>
