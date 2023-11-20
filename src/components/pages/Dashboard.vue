<template>
  <div class="hidden lg:block">
    <Upside />
  </div>
  <div class="lg:hidden">
    <UpSideMenu />
  </div>
  <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
    <div class="divide-x col-span-4 flex flex-wrap items-center divide-black dark:divide-neutral-300 justify-start px-10 mt-6 md:col-span-3">
      <div class="pr-6">
        <img src="../../../public/logosuco.png" class="w-20 h-20" />
      </div>
      <span class="block pl-6">
        <p class="text-2xl font-bold dark:text-neutral-300 md:text-3xl">
          Bem-vindo, Rodrigo Goes!
        </p>
        <span class="flex items-center space-x-2">
          <BuildingOffice2Icon class="h-5 text-gray-600" />
          <p class="font-thin  dark:text-neutral-300">
            Clean Suco
          </p>
        </span>
      </span>
    </div>
    <!-- SHADOWS ( SOMBRAS VER ) -->
    <!-- <div>
      <h2 class="text-lg font-semibold mt-10 px-10">Visão geral do sistema</h2>
    </div> -->
    <div class="grid lg:grid-cols-3 gap-8 p-8 mt-10 md:grid-cols-2 sm:grid-cols-1">
        <div class="bg-gray-100 shadow-xl rounded-md dark:bg-slate-700 font-medium">
          <p class="p-2 text-xl font-semibold">Serviços Realizados</p>
          <p class="p-4 text-3xl font-normal">{{ contaServiços() }}</p>
          <p class="mt-10"></p>
        </div>
        <div class="bg-gray-100 shadow-xl rounded-md dark:bg-slate-700 font-medium">
          <p class="p-2 text-xl font-semibold">Serviços em Andamento</p>
          <div v-for="(limpeza, index) in limpezas" :key="index">
            <div v-if="limpeza.status === 'Em Andamento'">
              <p class="p-4 font-normal">● {{ limpeza.ambiente }}</p>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 shadow-xl rounded-md dark:bg-slate-700 font-medium">
          <p class="p-2 text-xl font-semibold">Produtos em Falta</p>
          <div v-for="(produto, index) in produtos" :key="index">
            <div v-if="produto.quantidade < 1">
              <p class="p-4 font-normal">● {{ produto.nome }}</p>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 shadow-xl rounded-md dark:bg-slate-700 font-medium">
          <p class="p-2 text-xl font-semibold">Quantidade de Funcionários</p>
          <p class="p-4 text-3xl font-normal">{{ funcionarios.length }}</p>
        </div>
        <div class="bg-gray-100 shadow-xl rounded-md dark:bg-slate-700 font-medium">
          <p class="p-2 text-xl font-semibold">Quantidade de Ambientes</p>
          <p class="p-4 text-3xl font-normal">{{ ambientes.length }}</p>
        </div>
        <div class="bg-gray-100 shadow-xl rounded-md dark:bg-slate-700 font-medium">
          <p class="p-2 text-xl font-semibold">Quantidade de Limpezas</p> 
          <p class="p-4 text-3xl font-normal">{{ limpezas.length }}</p>
          <p class="mt-10"></p>
        </div>
    </div>
    <!-- <img src="@/assets/Screenshot_1.png" class="absolute mt-12 top-32 inset-0 w-full h-max max-w-xl transform overflow-hidden text-left shadow-xl p-4 space-y-2 items-center mx-auto z-50">  -->
  </div>
</template>

<script>
import axios from "axios";
import config from "@/components/config/config.js";

export default {
  data: () => ({
    exibir: true,
    ambientes: [],
    funcionarios: [],
    produtos: [],
    limpezas: [],
    components: {
      Upside,
      UpSideMenu,
    },
  }),
  created(){
    axios.get(`${config.API_URL}/ambientes`)
      .then((response) => {
        this.ambientes = response.data;
      })
      axios.get(`${config.API_URL}/funcionarios`)
      .then((response) => {
        this.funcionarios = response.data;
      })
      axios.get(`${config.API_URL}/produtos`)
      .then((response) => {
        this.produtos = response.data;
      })
      axios.get(`${config.API_URL}/limpezas`)
      .then((response) => {
        this.limpezas = response.data;
      })
  },
  methods: {
    contaServiços() {
      let cont = 0;
      for (var i = 0; i < this.limpezas.length; i++) {
        if (this.limpezas[i].status === 'Finalizado') {
          cont++;
        }
      }
      return cont;
    },
  },
};
</script>

<script setup>
  import Upside from "../usables/Upside.vue";
  import { BuildingOffice2Icon } from "@heroicons/vue/20/solid";
  import UpSideMenu from "../usables/UpSideMenu.vue";
  document.title = "Dashboard - Clean Natty";
</script>
