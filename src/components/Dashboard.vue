<template>
  <div class="hidden lg:block">
    <Upside />
  </div>
  <div class="lg:hidden">
    <UpSideMenu />
  </div>
  <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
      <!-- <p class="text-3xl text-center font-semibold">Rodrigo Goes >>>> CBUM</p> -->
      <!-- <img src="../assets/Screenshot_1.png" class="w-screen h-screen"> -->
      <Calendar/>
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
import Upside from "./usables/Upside.vue";
import UpSideMenu from "./usables/UpSideMenu.vue";
import Calendar from "@/components/Calendar.vue";
document.title = "Dashboard - Clean Natty";
</script>
