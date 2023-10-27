<template>
  <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
    <div class="flex justify-between bg-gray-200 dark:bg-slate-900">
      <router-link to="/">
        <button class="text-blue-600 bg-gray-200 dark:bg-slate-900 font-medium text-2xl flex p-4 justify-start">
          Clean Natty
        </button>
      </router-link>
      <button @click="exibir = !exibir">
        <EllipsisVerticalIcon class="h-6 w-6 mr-2" />
      </button>
    </div>
    <div v-if="exibir" class="flex justify-end bg-gray-200 dark:bg-slate-900 space-x-2">
      <p>Dark Mode</p>
      <Switch class="mt-1" />
    </div>
    <div class="text-center justify-center max-w-md mx-auto">
      <div class="inline-flex text-center justify-center p-10 py-4">
        <div class="">
          <div class="text-center font-medium text-xl mt-6">
            Sistema de agendamentos de limpezas.
          </div>
          <!-- <div class="text-center font-medium mt-10">
            Para entrar anonimamente, <br />
            clique no botão abaixo
          </div> -->
          <div class="flex justify-center mt-2">
            <router-link to="/dashboard">
              <button class="dark:bg-gray-200 dark:hover:bg-gray-300 hover:bg-sky-600 bg-sky-600 text-white dark:text-gray-900 text-sm font-medium py-2 px-7 rounded">
                ENTRAR
              </button>
            </router-link>
          </div>
          <!-- <div class="text-center font-medium mt-6">
            Para cadastrar-se no sistema, <br />
            clique no botão abaixo
          </div> -->
          <div class="flex justify-center mt-2">
            <router-link to="/cadastro">
              <button class="dark:bg-gray-200 dark:hover:bg-gray-300 hover:bg-sky-600 bg-sky-600 text-white dark:text-gray-900 text-sm font-medium py-2 px-5 rounded">
                CADASTRAR
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Switch class="absolute bottom-0 hidden" />
  </div>
</template>

<script>
import Switch from "./Switch.vue";
import { EllipsisVerticalIcon } from "@heroicons/vue/24/outline";
export default {
  components: {
    Switch,
    EllipsisVerticalIcon,
   },
  data: () => ({
    exibir: false,
  }),
};
</script>

<!-- SÓ PARA O TITULO -->
<script setup>
document.title = "Home - Training";
</script>

<!-- SCROLLBAR  -->
<style>
::-webkit-scrollbar {
   width: 8px;
   height: 2px;
}

::-webkit-scrollbar-track {
   background: #000;
   padding: 2px;
}

::-webkit-scrollbar-thumb {
   background-color: #393939;
}
</style>