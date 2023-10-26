<template>
  <div class="hidden lg:block">
      <Upside/>
   </div>
   <div class="lg:hidden">
      <UpSideMenu/>
   </div>
  <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
    <div class="w-full px-4 pt-16">
      <div class="mx-auto w-full max-w-lg rounded-2xl bg-gray-100 p-2">
        <button 
        @click="exibir = !exibir" type="button"
        class="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-gray-200 focus:outline-none">
          What is your refund policy?
        </button>
        <transition 
          enter-active-class="transition duration-700 ease-out" 
          enter-from-class="opacity-0"
          enter-to-class="opacity-100" 
          leave-active-class="transition duration-500 ease-in" 
          leave-from-class="opacity-100"
          leave-to-class="opacity-0">
          <div v-if="exibir" class="px-4 pb-2 pt-4 text-sm text-gray-900">
            If you're unhappy with your purchase for any
            reason, email us within 90 days and we'll refund you in full, no questions asked.
          </div>
        </transition>
        <div class="mt-2">
          <button @click="exibir2 = !exibir2"
            class="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-sm font-medium text-slate-900 hover:bg-gray-200 focus:outline-none">
            Do you offer technical support?
          </button>
          <transition 
          enter-active-class="transition duration-500 ease-out" 
          enter-from-class="opacity-0"
          enter-to-class="opacity-100" 
          leave-active-class="transition duration-500 ease-in" 
          leave-from-class="opacity-100"
          leave-to-class="opacity-0">
            <div v-if="exibir2" class="px-4 pb-2 pt-4 text-sm text-gray-900">
              We have an policy in until 30 days, before the purchase. If this period is over, we can't refund you free, you have to pay for the service.
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
  <div>
    <DisclosureIndex/>
  </div>
</template>

<script>
import Upside from './Upside.vue'
import UpSideMenu from './UpSideMenu.vue';
import DisclosureIndex from './DisclosureIndex.vue';

export default {
  data: () => ({
    exibir: true,
    exibir2: true,
  }),
  components: {
    Upside, UpSideMenu, DisclosureIndex
  },
}
</script>

<script setup>
   document.title = "Disclosure - Training"
</script>
