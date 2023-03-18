<script setup>
import * as yup from 'yup'
import { ref, defineComponent } from 'vue'
import { Form } from 'vee-validate'
import InputText from '@/components/From/InputText.vue'
import { useDark, useToggle } from '@vueuse/core'
import { useAuthStore } from '@/stores/auth'

defineComponent({
  name: 'LoginPage'
})

const isDark = useDark()
const toggleDark = useToggle(isDark)

const form = ref({
  email: '',
  password: ''
})

const loader = ref(false)

const loginHandler = async () => {
  loader.value = true
  const { email, password } = form.value
  const { login } = useAuthStore()
  try {
    await login({ email, password })
  } catch (error) {
    console.log(error)
    loader.value = false
  } finally {
    loader.value = false
  }
}

const schema = yup.object({
  Email: yup.string().email().required(),
  'Kata Sandi': yup.string().required()
})
</script>

<template>
  <div
    class="bg-sky-300 dark:bg-gray-800 flex flex-col mx-auto max-w-screen-2xl w-screen h-screen md:h-[100vh]"
  >
    <div class="w-full flex justify-end">
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
    </div>
    <div class="mx-auto max-w-screen-xl px-4 py-16 md:py-6 sm:px-6 lg:px-8 dark:bg-gray-800">
      <div class="mx-auto max-w-lg md:w-min">
        <h1 class="text-center text-2xl font-bold sm:text-3xl text-black dark:text-white">
          TRYOUT TBS
        </h1>

        <p class="mx-auto mt-4 max-w-md text-center text-black dark:text-white">
          Selamat datang di website Tryout TBS
        </p>

        <Form
          :validation-schema="schema"
          @submit="loginHandler"
          class="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 dark:bg-gray-800 w-full md:w-min bg-white ring-1 ring-opacity-5 ring-black"
        >
          <p class="text-center text-lg font-medium dark:text-white">Masuk Ke Akun Anda</p>

          <InputText label="Email" type="email" placeholder="Masukkan email" v-model="form.email">
            <template v-slot:icon>
              <Icon
                icon="material-symbols:alternate-email"
                class="text-gray-600 dark:text-gray-300"
                width="16"
              >
              </Icon>
            </template>
          </InputText>
          <InputText
            label="Kata Sandi"
            type="password"
            placeholder="Masukkan kata sandi"
            v-model="form.password"
          >
            <template v-slot:icon>
              <Icon
                icon="mdi:password-outline"
                class="text-gray-600 dark:text-gray-300"
                width="16"
              ></Icon>
            </template>
          </InputText>
          <button
            type="submit"
            :disabled="loader"
            class="flex w-full rounded-lg bg-sky-900 px-5 py-3 text-sm font-medium text-white md:w-96 justify-center items-center text-center"
          >
            <Icon v-if="loader" icon="eos-icons:loading" color="white" width="24"> </Icon>
            <span v-if="!loader">Masuk</span>
          </button>

          <p class="text-center text-sm text-gray-500 dark:text-white">
            Belum punya akun?
            <a class="underline" href="">Daftar</a>
          </p>
        </Form>
      </div>
    </div>
    <div class="flex justify-center text-center mt-6">
      <h2 class="text-black dark:text-white">Made with 💕 by Irwansyah</h2>
    </div>
  </div>
</template>

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
</style>
