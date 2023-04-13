<template>
  <div class="bg-white dark:bg-gray-800 w-screen h-screen md:h-[100vh]">
    <Header />
    <div class="flex flex-row w-[100hw]">
      <div class="bg-white dark:bg-gray-700 h-full w-[10%]"></div>

      <div class="w-[80%] flex flex-col gap-2">
        <div class="mt-2 mb-6">
          <h2 class="font-semibold text-3xl dark:text-gray-50">{{ checkTitle() }}</h2>
          <p class="dark:text-gray-50">{{ checkDescription() }}</p>
        </div>
        <div class="flex flex-row gap-3">
          <div class="w-1/4 border-gray-200 border rounded-md">
            <SideMenu />
          </div>
          <div class="w-3/4 border-red-300 border rounded-md">
            <div class="p-4">
              <form @submit="photoHandler">
                <InputFile v-model="form.image" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white dark:bg-gray-700 h-full w-[10%]"></div>
    </div>
    <Footer class="md:hidden" />
  </div>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SideMenu from '@/layout/SideMenu.vue'
import InputFile from '@/components/From/InputFile.vue'
import { useRoute } from 'vue-router'
import { useUpdatePhoto } from './query'

defineComponent({
  name: 'ProfilePage'
})

const route = useRoute()
const { mutate } = useUpdatePhoto()

const form = ref({
  image: ''
})

const checkTitle = () => {
  if (route.fullPath.match('profile')) return 'Pengaturan Akun'
}
const checkDescription = () => {
  const title = checkTitle()
  if (title === 'Pengaturan Akun') return 'Berisi informasi akun, profil dan ubah password.'
}

// const photoHandler = () => {
//   console.log('submit')
//   const formData = new FormData()
//   const blob = new Blob([form.value.image], { type: 'image/jpeg' })
//   console.log('selected file:', blob)

//   formData.append('photo', blob, 'image.jpg')
//   mutate(formData, {
//     onSuccess: () => {
//       console.log('success')
//     },
//     onError: () => {
//       console.log('error')
//     }
//   })
// }
const photoHandler = () => {
  console.log('submit')
  const formData = new FormData()
  formData.append('photo', form.value.image) // append the Blob directly to the FormData object
  mutate(formData, {
    onSuccess: () => {
      console.log('success')
    },
    onError: () => {
      console.log('error')
    }
  })
}
</script>
