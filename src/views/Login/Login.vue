<script setup>
import * as yup from 'yup'
import { ref, defineComponent } from 'vue'
import { Form } from 'vee-validate'
import InputText from '../../components/From/InputText.vue'
import { useDark, useToggle } from '@vueuse/core'

defineComponent({
  name: 'LoginPage'
})

const isDark = useDark()
const toggleDark = useToggle(isDark)

const form = ref({
  email: '',
  password: ''
})

const schema = yup.object({
  Email: yup.string().email().required(),
  'Kata Sandi': yup.string().required()
})
</script>

<template>
  <div class="bg-sky-900">
    <div class="flex justify-end dark:bg-gray-700">
      <button @click="toggleDark()">Dark Mode</button>
    </div>
    <div
      class="mx-auto max-w-screen-xl px-4 py-16 md:py-6 sm:px-6 lg:px-8 dark:bg-gray-700 h-screen"
    >
      <div class="mx-auto max-w-lg md:w-min">
        <h1 class="text-center text-2xl font-bold sm:text-3xl">Get started today</h1>

        <p class="mx-auto mt-4 max-w-md text-center text-black dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti
          inventore quaerat mollitia?
        </p>

        <Form
          :validation-schema="schema"
          class="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 dark:bg-gray-800 w-full md:w-min bg-white"
        >
          <p class="text-center text-lg font-medium dark:text-white">Masuk ke akun anda</p>

          <InputText label="Email:" type="email" placeholder="Masukkan email" v-model="form.email">
            <template v-slot:icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </template>
          </InputText>
          <InputText
            label="Kata Sandi:"
            type="password"
            placeholder="Masukkan kata sandi"
            v-model="form.password"
          >
            <template v-slot:icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </template>
          </InputText>
          <button
            type="submit"
            class="block w-full rounded-lg bg-sky-900 px-5 py-3 text-sm font-medium text-white md:w-96"
          >
            Masuk
          </button>

          <p class="text-center text-sm text-gray-500 dark:text-white">
            Belum punya akun?
            <a class="underline" href="">Daftar</a>
          </p>
        </Form>
      </div>
    </div>
  </div>
</template>
