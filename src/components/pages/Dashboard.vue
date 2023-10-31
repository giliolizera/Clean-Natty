<template>
  <div class="hidden lg:block">
    <Upside />
  </div>
  <div class="lg:hidden">
    <UpSideMenu />
  </div>
  <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
    <div class="divide-y max-w-lg bg-white dark:bg-slate-800 p-4">
      <p class="font-medium text-xl pb-1">Seja Bem-vindo Rodrigo</p>
    </div>
    <img src="@/assets/Screenshot_1.png" class="absolute mt-12 top-32 inset-0 w-full h-max max-w-xl transform overflow-hidden text-left shadow-xl p-4 space-y-2 items-center mx-auto z-50">
    <!-- <Calendar/> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    exibir: true,
    components: {
      Upside,
      UpSideMenu,
    },
  }),
};
</script>

<script setup>
import Upside from "../usables/Upside.vue";
import UpSideMenu from "../usables/UpSideMenu.vue";
import Calendar from "@/components/usables/Calendar.vue";
document.title = "Dashboard - Clean Natty";
</script>
