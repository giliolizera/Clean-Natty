<template>
   <div class="hidden lg:block">
      <Upside/>
   </div>
   <div class="lg:hidden">
      <UpSideMenu/>
   </div>
   <div class="fixed inset-0 w-screen h-screen bg-neutral-500/50 z-40" @click.stop="exibir = false" v-show="exibir"></div>
   <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white pt-36">
      <div class="rounded-md flex items-center justify-center">
         <TransitionGroup enter-active-class="transition duration-500 ease-out" enter-from-class="opacity-0"
            enter-to-class="opacity-100">             
            <button @click="exibir = true"
               class="rounded-md bg-black bg-opacity-40 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30">
               Open Dialog
            </button>
         </TransitionGroup>
      </div>
      <TransitionGroup enter-active-class="transition duration-1000 ease-out" enter-from-class="opacity-0"
         enter-to-class="opacity-100" leave-active-class="transition duration-500 ease-in" leave-from-class="opacity-100"
         leave-to-class="opacity-0">
         <div v-if="exibir"
            class="absolute top-32 inset-0 w-full h-max max-w-md transform overflow-hidden rounded-2xl text-left shadow-xl transition-all bg-white p-4 space-y-2 items-center mx-auto z-50">
            <p class="pl-1 font-medium text-black">Payment Successful</p>
            <p class="pl-1 text-sm text-gray-500">Your payment has been successfully submitted. We`ve sent you an email
               with all of the details of your order.</p>
            <button @click="exibir = false"
               class="inline-flex justify-center rounded-md border border-transparent bg-slate-200 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-300">
               Got it, thanks!
            </button>
         </div>
      </TransitionGroup>
   </div>
</template>

<script>
import Upside from './Upside.vue';
import UpSideMenu from './UpSideMenu.vue';

export default {
   data: () => ({
      exibir: false,
   }),
   watch: {
      exibir: function (val) {
         if (val) {
            document.body.style.overflow = 'hidden';
         }
         else {
            document.body.style.overflow = 'auto';
         }
      },
   },
   components: { Upside, UpSideMenu }
}
</script>

<script setup>
   document.title = "Dialog - Training"
</script>
