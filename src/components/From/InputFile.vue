<template>
  <div class="mb-3 w-96">
    <label for="formFile" class="mb-2 inline-block text-neutral-700 dark:text-neutral-200">{{
      props.label
    }}</label>
    <input
      class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
      type="file"
      id="formFile"
      @change="onChangeFile"
    />

    <input type="text" v-model="model" class="hidden" />
  </div>
</template>

<script setup>
import { defineComponent, computed } from 'vue'
import { useField } from 'vee-validate'

defineComponent({
  name: 'InputFileComponent'
})

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: 'Upload Foto Profil'
  }
})

const emit = defineEmits(['update:modelValue', 'onChange'])
// const model = (event) => {
//   const file = event.target.files[0]
//   //   const reader = new FileReader()
//   //   reader.readAsDataURL(file)
//   //   reader.onload = () => {
//   emit('update:modelValue', file)
//   //   }
// }

const { errorMessage, setValue } = useField(props.label)
const model = computed({
  get: () => props.modelValue,
  set: (v) => {
    setValue(v)
    emit('update:modelValue', v)
  }
})

console.log(errorMessage)

const onChangeFile = (event) => {
  const file = event.target.files[0]
  console.log(file)
  setValue(file.name)
  emit('onChange', file)
}
</script>
