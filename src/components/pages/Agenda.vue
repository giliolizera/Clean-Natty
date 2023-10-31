<template>
    <div class="hidden lg:block">
      <Upside />
    </div>
    <div class="lg:hidden">
      <UpSideMenu />
    </div>
    <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
      <div class="divide-y max-w-md bg-white dark:bg-slate-800 p-5">
        <p class="font-medium text-xl pb-1">Sistema de Agendamentos</p>
        <p class="text-base font-thin py-2">Confira aqui, a data das suas próximas limpezas, local, produtos que deverá levar...</p>
      </div>
      <div class="flex justify-start">
        <Calendar/> 
      </div>
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
  document.title = "Agenda - Clean Natty";
  </script>
  