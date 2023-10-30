<template>
    <div class="hidden lg:block">
      <Upside />
    </div>
    <div class="lg:hidden">
      <UpSideMenu />
    </div>
    <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
        <p>Estoque</p>
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
  document.title = "Estoque - Clean Natty";
  </script>
  