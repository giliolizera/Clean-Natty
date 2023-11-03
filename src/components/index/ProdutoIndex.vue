<template>
    <div class="hidden lg:block">
      <Upside />
    </div>
    <div class="lg:hidden">
      <UpSideMenu />
    </div>
    <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
        Produtos Index
        <router-link to="cadastro-produto">
            <button class="dark:bg-gray-200 dark:hover:bg-gray-300 hover:bg-sky-600 bg-sky-600 text-white dark:text-gray-900 text-sm font-medium py-2 px-7 rounded-md">
                Produto
            </button>
        </router-link>
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
    document.title = "Produtos - Clean Natty";
  </script>