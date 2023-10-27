<template>
  <div class="hidden lg:block">
    <Upside />
  </div>
  <div class="lg:hidden">
    <UpSideMenu />
  </div>
  <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
    <p class="mt-80 text-3xl text-center font-semibold">Rodrigo Goes >>>> CBUM</p>
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
import Upside from "./Upside.vue";
import UpSideMenu from "./UpSideMenu.vue";
document.title = "Dashboard - Clean Natty";
</script>
