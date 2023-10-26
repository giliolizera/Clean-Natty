<template>
   <div class="hidden lg:block">
      <Upside/>
   </div>
   <div class="lg:hidden">
      <UpSideMenu/>
   </div>
   <div class="pt-10 flex justify-center text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
      <div class="relative inline-block text-left">
         <button @click="exibir = !exibir"
            class="inline-flex w-full justify-center rounded-md dark:bg-slate-900 px-4 py-2 text-sm font-medium dark:text-white bg-gray-200 hover:bg-gray-300">
            Options
            <ChevronDownIcon class="ml-2 -mr-1 h-5 w-5 dark:text-violet-200 text-slate-800 hover:text-violet-100" />
         </button>
         <TransitionGroup 
         enter-active-class="transition duration-500 ease-out" 
         enter-from-class="opacity-0"
         enter-to-class="opacity-100" 
         leave-active-class="transition duration-500 ease-in" 
         leave-from-class="opacity-100"
         leave-to-class="opacity-0"
         >
         <div v-if="exibir" class="rounded-lg">
            <ul
               class="absolute right-0 mt-2 w-48 md:w-56 lg:w-56 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-1 py-1 bg-white">
               <button @click="exibir = false" class="w-full inline-flex px-3 py-1.5 mt-0.5 hover:bg-slate-500 text-base rounded-md text-black">
                  <PencilIcon class="mt-0.5 text-gray-600 mr-2 h-5 w-5" />
                  Edit
               </button>
               <button @click="exibir = false, duplicate = true" class="w-full inline-flex px-3 py-1.5 hover:bg-slate-500 text-base rounded-md text-black">
                  <DocumentDuplicateIcon class="mt-0.5 text-gray-600 mr-2 h-5 w-5" />
                  Duplicate
               </button>
               <li class="px-1 py-1 divide-y divide-gray-800"></li>
               <button @click="exibir = false, duplicate = false" class="w-full inline-flex px-3 py-1.5 hover:bg-slate-500 text-base rounded-md text-black">
                  <ArchiveBoxIcon class="mt-0.5 text-gray-600 mr-2 h-5 w-5" />
                  Archive
               </button>
               <button @click="exibir = false" class="w-full inline-flex px-3 py-1.5 hover:bg-slate-500 text-base rounded-md text-black">
                  <ArrowTopRightOnSquareIcon class="mt-0.5 text-gray-600 mr-2 h-5 w-5" />
                  Move
               </button>
               <li class="px-1 py-1 divide-y divide-gray-800"></li>
               <button @click="exibir = false, remove = true" class="w-full inline-flex px-3 pt-1.5 pb-1.5 mb-0 hover:bg-slate-500 text-base rounded-md text-black">
                  <TrashIcon class="mt-0.5 text-gray-600 mr-2 h-5 w-5" />
                  Delete
               </button>
               <button @click="exibir = false, remove = false" class="w-full inline-flex px-3 pt-1.5 pb-1.5 mb-0 hover:bg-slate-500 text-base rounded-md text-black">
                  <ArrowUturnUpIcon class="mt-0.5 text-gray-600 mr-2 h-5 w-5" />
                  Restore
               </button>
            </ul>
         </div>
         </TransitionGroup>
      </div>
   </div>
   <div class="w-full px-4 mt-64">
      <div class="mx-auto w-full max-w-md rounded-2xl p-2">
         <div v-if="remove === false">
            <img src="../assets/Vue-js.png" alt="Vue" class="rounded-lg">
         </div>
         <div v-if="duplicate === true">
            <img src="../assets/Vue-js.png" alt="Vue" class="rounded-lg mt-4">
         </div>
      </div>
   </div>   
</template>

<script>

export default {
   data: () => ({
      exibir: false,
      remove: false,
      duplicate: false,
   }),
   components: {
      Upside, UpSideMenu
   },
}

</script>

<script setup>
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import { PencilIcon, TrashIcon } from "@heroicons/vue/24/outline";
import { DocumentDuplicateIcon } from "@heroicons/vue/24/outline";
import { ArchiveBoxIcon } from "@heroicons/vue/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
import { ArrowUturnUpIcon } from "@heroicons/vue/24/outline";
import UpSideMenu from "./UpSideMenu.vue";
import Upside from "./Upside.vue";
document.title="Menu - Training"
</script>
