<template>
  <!-- <transition name="mobile"> -->
  <div class="absolute w-full h-2/3 rounded-t-2xl bg-gray-200 dark:bg-gray-800">
    <div class="p-4 flex flex-col justify-start">
      <MenuIcon
        icon="healthicons:i-exam-multiple-choice-outline"
        label="Try Out"
        class="cursor-pointer hover:-translate-y-1 w-[80px] transition ease-in-out delay-150"
        @click="() => router.push('/app/tryouts')"
      />
    </div>
  </div>
  <!-- </transition> -->
</template>

<script setup>
import { defineComponent, onMounted, ref } from 'vue'
import MenuIcon from '../MenuIcon.vue'
import { useRouter } from 'vue-router'

onMounted(() => {
  toggle.value = false
})

const router = useRouter()

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const toggle = ref(false)

defineComponent({
  name: 'MobileMenu'
})
</script>

<style>
.mobile-enter-active,
.mobile-leave-active {
  transition: all 0.5s ease;
}

.mobile-enter,
.mobile-leave-to {
  transform: translateY(100%);
}

.mobile-leave,
.mobile-enter-to {
  transform: translateY(0%);
}

.mobile-enter-active,
.mobile-leave-active {
  transition: all 0.5s ease;
}
</style>
