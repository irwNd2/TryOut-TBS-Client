<template>
  <header aria-label="Site Header" class="bg-white dark:bg-gray-800 sticky top-0 w-screen mb-4">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <a class="block text-teal-600" href="/">
            <span class="sr-only">Home</span>
            <h2>Logo Here</h2>
          </a>
        </div>
        <div class="md:flex md:items-center md:gap-12">
          <!-- <nav aria-label="Site Nav" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Blog </a>
              </li>
            </ul>
          </nav> -->
          <div class="flex items-center gap-4">
            <div class="flex sm:gap-2">
              <div
                class="mt-2 mr-2 w-[58px] h-[30px] bg-gray-200 dark:bg-gray-500 rounded-2xl shadow-lg cursor-pointer"
                @click="toggleDark()"
              >
                <div class="w-full flex justify-between">
                  <div>
                    <transition name="light">
                      <div
                        class="w-[28px] h-[28px] rounded-2xl bg-slate-300 mt-[1.2px] ml-[1px]"
                        v-if="!isDark"
                      >
                        <Icon
                          icon="ic:twotone-light-mode"
                          class="text-yellow-600 cursor-pointer ml-[1px] mt-[1px]"
                          width="25"
                        >
                        </Icon>
                      </div>
                    </transition>
                  </div>
                  <div>
                    <transition name="dark">
                      <div
                        class="w-[28px] h-[28px] rounded-2xl bg-gray-600 mr-[1px] mt-[1px]"
                        v-if="isDark"
                      >
                        <Icon
                          icon="ic:twotone-dark-mode"
                          class="text-black cursor-pointer ml-[1.5px] mt-[1px]"
                          width="25"
                        >
                        </Icon>
                      </div>
                    </transition>
                  </div>
                </div>
              </div>
              <div class="mr-4 mt-2">
                <Icon
                  icon="mdi:bell-notification-outline"
                  class="text-black dark:text-white cursor-pointer"
                  width="28"
                >
                </Icon>
              </div>

              <div
                class="hidden sm:flex sm:mt-2 w-[96px] h-[30px]"
                @click="toggleModalMenu()"
                ref="ignoreElRef"
              >
                <h2 class="dark:text-white cursor-pointer">{{ nameFinal() }}</h2>
                <span>
                  <Icon
                    icon="material-symbols:keyboard-arrow-down"
                    class="text-black dark:text-gray-100 cursor-pointer"
                    width="25"
                    v-if="!modalMenu"
                  >
                  </Icon>
                  <Icon
                    icon="material-symbols:keyboard-arrow-up"
                    class="text-gray-500 cursor-pointer"
                    width="25"
                    v-if="modalMenu"
                  ></Icon>
                </span>

                <div class="absolute right-0 p-1 mt-4 origin-top-right mr-36">
                  <transition name="modalMenu">
                    <ModalMenu v-if="modalMenu" v-on-click-outside="onClickOutsideHandler" />
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { vOnClickOutside } from '@vueuse/components'
import { useAuthStore } from '@/stores/auth'
import ModalMenu from './ModalMenu.vue'

defineComponent({
  name: 'HeaderComponent'
})

const modalMenu = ref(false)

const toggleModalMenu = () => {
  modalMenu.value = !modalMenu.value
}

const ignoreElRef = ref()
const onClickOutsideHandler = [
  (ev) => {
    console.log(ev)
    modalMenu.value = false
  },
  { ignore: [ignoreElRef] }
]

const { user } = useAuthStore()
const splittedName = user?.name.split(' ')
const nameFinal = () => {
  if (splittedName.length > 1) {
    return splittedName[splittedName.length - 1]
  } else {
    return splittedName[0]
  }
}

const isDark = useDark()
const toggleDark = useToggle(isDark)

defineProps({
  name: {
    type: String,
    default: 'Irwansyah'
  }
})
</script>

<style>
.dark-leave-from {
  opacity: 1;
}

.dark-leave-to {
  opacity: 0.6;
  transform: translateX(-20px);
}

.dark-leave-active {
  transition: all 0.2s ease-out;
}

.light-leave-from {
  opacity: 1;
}

.light-leave-to {
  opacity: 0.6;
  transform: translateX(20px);
}

.light-leave-active {
  transition: all 0.2s ease-out;
}

.modalMenu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.modalMenu-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.modalMenu-enter-active {
  transition: all 0.2s ease-out;
}

.modalMenu-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.modalMenu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.modalMenu-leave-active {
  transition: all 0.2s ease-out;
}
</style>
