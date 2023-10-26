<template>
    <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
      <div class="w-full px-4 pt-16">
        <div class="mx-auto w-full max-w-lg rounded-2xl bg-gray-100 p-2">
          <button 
          @click="exibir = !exibir" type="button"
          class="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-gray-200 focus:outline-none">
            About streaming services?
          </button>
          <transition 
            enter-active-class="transition duration-700 ease-out" 
            enter-from-class="opacity-0"
            enter-to-class="opacity-100" 
            leave-active-class="transition duration-500 ease-in" 
            leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <div v-if="exibir" class="px-4 pb-2 pt-4 text-sm text-gray-900">
                If you're unhappy with your streaming service, email us within 30 days and we'll cancel your subscription, no questions asked.
            </div>
          </transition>
          <div class="mt-2">
            <button @click="exibir2 = !exibir2"
              class="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-gray-200 focus:outline-none">
              Do you offer adults channels?
            </button>
            <transition 
            enter-active-class="transition duration-500 ease-out" 
            enter-from-class="opacity-0"
            enter-to-class="opacity-100" 
            leave-active-class="transition duration-500 ease-in" 
            leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <div v-if="exibir2" class="px-4 pb-2 pt-4 text-sm text-gray-900">
                No, grow up man, you're wife need you... If you're alone and if you don't care, pay for it.
            </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      exibir: true,
      exibir2: true,
    }),
  }
  </script>

  