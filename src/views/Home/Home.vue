<template>
  <div class="bg-white dark:bg-gray-800 w-screen h-screen md:h-[100vh]">
    <Header />
    <div class="flex flex-row w-[100hw]">
      <div class="bg-white dark:bg-gray-700 h-full w-[10%]"></div>

      <div class="w-[80%] flex flex-col gap-2">
        <div>
          <h2 class="font-semibold text-md md:text-xl dark:text-white mb-2">Spotlight</h2>
          <Spotlight class="w-full md:h-[260px] h-[120px]" />
        </div>
        <div>
          <h2 class="font-semibold text-md md:text-xl dark:text-white mb-2">Menu Belajar</h2>
          <div class="w-full rounded-md h-auto bg-gray-300 dark:bg-gray-600">
            <div class="md:p-8 p-4 flex flex-col justify-start">
              <MenuIcon
                icon="healthicons:i-exam-multiple-choice-outline"
                label="Try Out"
                class="cursor-pointer hover:-translate-y-1 w-[80px] transition ease-in-out delay-150"
                @click="() => router.push('/app/tryouts')"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-700 h-full w-[10%]"></div>
    </div>
    <Footer :clickBelajar="clickBelajarMenu" />
    <MobileMenu :isOpen="mobileMenuOpen" v-if="mobileMenuOpen" v-on-click-outside="clickOutside" />
  </div>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Spotlight from '@/components/Spotlight.vue'
import MenuIcon from '@/components/MenuIcon.vue'
import { useRouter } from 'vue-router'
import MobileMenu from '@/components/UI/MobileMenu.vue'
import { vOnClickOutside } from '@vueuse/components'

defineComponent({
  name: 'HomePage'
})

const router = useRouter()

const mobileMenuOpen = ref(false)

const clickBelajarMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const clickOutside = () => {
  mobileMenuOpen.value = false
}
</script>
