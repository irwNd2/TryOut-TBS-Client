<template>
  <li>
    <a
      tabindex="0"
      class="flex justify-between select-none px-2 items-center"
      @click="handler(item)"
    >
      <div class="flex gap-2 items-center">
        <Icon :icon="item?.icon" width="35" class="text-indigo-500"></Icon>
        <span
          class="cursor-pointer font-bold dark:text-gray-50"
          :class="{
            'text-red-900 dark:text-red-900': `${currentPath}` == item.to
          }"
          >{{ item.label }}
        </span>
      </div>
    </a>
  </li>
</template>

<script setup>
import { defineComponent, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

defineComponent({
  name: 'SideMenuItem'
})

defineProps({
  item: {
    type: Object,
    default: () => {}
  },
  index: {
    type: Number,
    default: 0
  }
})

const router = useRouter()
const route = useRoute()
// const emits = defineEmits(['click'])

const currentPath = computed(() => {
  const link = route.fullPath.split('?')[0]
  return link
})

const handler = (item) => {
  const { to } = item
  // if (emit) return emits('click')
  if (to) router.push(to)
}
</script>
