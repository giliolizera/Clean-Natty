<template>
   <div class="">
      <div class="lg:flex bg-gray-200 dark:bg-slate-900">
         <div class="lg:inline-flex justify-start">
            <router-link to="/">
               <button class="text-blue-600 bg-gray-200 dark:bg-slate-900 font-medium text-2xl flex p-4 justify-start">
                  Training WebSite
               </button>
            </router-link>
         </div>
         <div class="justify-end inline-flex">
            <router-link to="/radio" class="mt-3">
               <button class="dark:bg-slate-900 bg:gray-200 dark:text-gray-100 font-medium py-2 px-5 mb-2 rounded-xl">
                  Radio
               </button>
            </router-link>
            <router-link to="/select" class="mt-3">
               <button class="dark:bg-slate-900 bg:gray-200 dark:text-gray-100 font-medium py-2 px-5 mb-2 rounded-xl">
                  Select
               </button>
            </router-link>
            <router-link to="/disclosure" class="mt-3">
               <button class="dark:bg-slate-900 bg:gray-200 dark:text-gray-100 font-medium py-2 px-5 mb-2 rounded-xl">
                  Disclosure
               </button>
            </router-link>
            <router-link to="/menu" class="mt-3">
               <button class="dark:bg-slate-900 bg:gray-200 dark:text-gray-100 font-medium py-2 px-5 mb-2 rounded-xl">
                  Menu
               </button>
            </router-link>
            <router-link to="/combobox" class="mt-3">
               <button class="dark:bg-slate-900 bg:gray-200 dark:text-gray-100 font-medium py-2 px-5 mb-2 rounded-xl">
                  Combobox
               </button>
            </router-link>
            <router-link to="/tabs" class="mt-3">
               <button class="dark:bg-slate-900 bg:gray-200 dark:text-gray-100 font-medium py-2 px-5 mb-2 rounded-xl">
                  Tabs
               </button>
            </router-link>
            <router-link to="/popover" class="mt-3">
               <button class="dark:bg-slate-900 bg:gray-200 dark:text-gray-100 font-medium py-2 px-5 mb-2 rounded-xl">
                  Popover
               </button>
            </router-link>
            <router-link to="/dialog" class="mt-3">
               <button class="dark:bg-slate-900 bg:gray-200 dark:text-gray-100 font-medium py-2 px-5 mb-2 rounded-xl">
                  Dialog
               </button>
            </router-link>
            <div class="ml-2 mt-5">
               <Switch />
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Switch from './Switch.vue'
export default {
   components: {
      Switch
   },
}
</script>


