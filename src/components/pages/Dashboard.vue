<template>
  <div class="hidden lg:block">
    <Upside />
  </div>
  <div class="lg:hidden">
    <UpSideMenu />
  </div>
  <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
    <div class="col-span-4 flex flex-wrap items-center justify-start px-10 mt-6 md:col-span-3">
      <span class="block">
        <p class="text-2xl font-bold dark:text-neutral-300 md:text-3xl">
          Bem-vindo, Rodrigo!
        </p>
        <span class="flex items-center space-x-2">
          <BuildingOffice2Icon class="h-5 text-gray-600" />
          <p class="font-thin  dark:text-neutral-300">
            Clean Suco
          </p>
        </span>
      </span>
    </div>
    <!-- <img src="@/assets/Screenshot_1.png" class="absolute mt-12 top-32 inset-0 w-full h-max max-w-xl transform overflow-hidden text-left shadow-xl p-4 space-y-2 items-center mx-auto z-50">  -->
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
  import { BuildingOffice2Icon } from "@heroicons/vue/20/solid";
  import UpSideMenu from "../usables/UpSideMenu.vue";
  document.title = "Dashboard - Clean Natty";
</script>
