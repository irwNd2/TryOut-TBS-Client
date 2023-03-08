<template>
  <div class="bg-[#D9E3FF] w-full h-screen flex flex-row">
    <div class="bg-white mt-12 ml-12 w-1/4 h-5/6 rounded-lg"></div>
    <div class="bg-white mt-12 ml-4 w-3/4 mr-12 h-5/6 rounded-lg">
      <div class="gap-6 w-full flex flex-row justify-end p-8">
        <button
          class="w-[132px] h-[48px] bg-[#253E80] text-white rounded-md flex items-center space-x-2 px-6 py-2 font-bold"
        >
          <Icon icon="icon-park-outline:add" class="text-white" width="24"></Icon>
          <span> Tambah </span>
        </button>
        <button
          class="w-[118px] h-[48px] bg-white border text-[#253E80] border-[#253E80] rounded-md flex items-center space-x-2 px-6 py-2 font-bold"
        >
          <Icon icon="icon-park-outline:download" class="text-[#253E80]" width="24"></Icon>
          <span> Unduh </span>
        </button>
      </div>
      <div class="flex flex-col gap-4 w-[600px] ml-[50px]">
        <div class="flex text-sm font-medium text-center text-black divide-gray-200 rounded-l mb-0">
          <div class="w-[150px]">
            <button
              class="inline-block w-full p-4 focus:outline-none hover:text-gray-700 text-[#253E80] font-bold bg-[#D9E3FF] rounded-t-xl"
            >
              DAPIL DPR RI
            </button>
            <hr class="w-[150px] h-1 my-[0px] bg-[#253E80] border-0 rounded" />
          </div>
          <div class="w-[200px]">
            <button
              class="inline-block w-full p-4 bg-white focus:outline-none hover:text-gray-700 text-[#253E80] font-bold"
            >
              DAPIL DPRD PROVINSI
            </button>
          </div>
          <div class="w-[250px]">
            <button
              class="inline-block w-full p-4 bg-white focus:outline-none hover:text-gray-700 text-[#253E80] font-bold"
            >
              DAPIL DPRD KABUPATEN/KOTA
            </button>
          </div>
        </div>
        <div>
          <hr class="h-px my-[-17px] bg-gray-200 border-0 w-[950px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'PracticePage'
})
</script>
