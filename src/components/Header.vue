<template>
  <header aria-label="Site Header" class="bg-white dark:bg-gray-700">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-12">
          <a class="block text-teal-600" href="/">
            <span class="sr-only">Home</span>
            <h2>Logo Here</h2>
          </a>
        </div>
        <div class="md:flex md:items-center md:gap-12">
          <nav aria-label="Site Nav" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <a class="text-gray-500 transition hover:text-gray-500/75" href="/"> Blog </a>
              </li>
            </ul>
          </nav>

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

              <div class="hidden sm:flex sm:mt-2">
                <h2 class="dark:text-white">{{ name }}</h2>
                <span>
                  <Icon
                    icon="material-symbols:keyboard-arrow-down"
                    class="text-gray-500 cursor-pointer"
                    width="25"
                  >
                  </Icon>
                </span>
              </div>
            </div>

            <div class="block md:hidden">
              <button
                class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { defineComponent } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

defineComponent({
  name: 'HeaderComponent'
})

const isDark = useDark()
const toggleDark = useToggle(isDark)

defineProps({
  name: {
    type: String,
    default: 'Irwansyah'
  }
})
</script>
