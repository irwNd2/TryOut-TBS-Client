<template>
  <div>
    <label class="block text-sm text-gray-700">{{ props.label }}</label>
    <div class="relative">
      <input
        :type="props.type"
        class="w-full rounded-lg p-4 pr-12 text-sm shadow-sm"
        :placeholder="props.placeholder"
        v-model="model"
        :class="{ 'border-red-500': errorMessage, 'border-gray-200': !errorMessage }"
      />
      <span class="absolute inset-y-0 right-0 grid place-content-center px-4">
        <slot name="icon"></slot>
      </span>
      <div class="text-xs text-red-500">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, computed, useAttrs } from 'vue'
import { useField } from 'vee-validate'

defineComponent({
  name: 'InputText'
})

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const attr = useAttrs()

const { errorMessage, setValue } = useField(attr?.name ?? props.label)
const emit = defineEmits(['update:modelValue'])
const model = computed({
  get: () => props.modelValue,
  set: (value) => {
    setValue(value)
    emit('update:modelValue', value)
  }
})
</script>
