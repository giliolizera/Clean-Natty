<template>
    <div class="hidden lg:block">
      <Upside />
    </div>
    <div class="lg:hidden">
      <UpSideMenu />
    </div>
    <!-- TODO: FAZER UM INDEX MAIS CAPRICHADO, ESSE É SO UM TESTE -->
    <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
        <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
          <div class="flex justify-between">
            <div class="divide-y max-w-md bg-white dark:bg-slate-800 p-6">
              <p class="font-medium text-xl pb-1">Ambientes</p>
              <p class="text-base font-thin py-2">Aqui você poderá consultar, filtrar e editar todos os ambientes já cadastrados.</p>
            </div>
            <div class="p-6">
              <router-link to="cadastro-ambiente">
                  <button class="dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-gray-200 bg-white border border-gray-400 text-black dark:text-white text-sm font-medium py-2 px-7 rounded-md">
                    Cadastrar novo Ambiente
                  </button>
              </router-link>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-4 p-2 pl-2.5 lg:grid-cols-3 md:grid-cols-3">
          <div class="col-span-3 grid border border-black dark:border-white p-2 mt-5 w-full overflow-auto">
            <table class="min-w-full divide-y divide-neutral-300" >
              <thead>
                <tr>
                  <th class="py-3 pr-5 text-left sm:pr-8">ID</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Nome</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Estabelecimento</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Andar</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Tipo</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Cidade</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Endereço</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Observação</th>
                  <th class="py-3 pr-5 text-center sm:pr-8">Ações</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-300 dark:divide-neutral-500">
              <tr v-if=" ambientes.id === 0">
                <td class="py-5 text-center" colspan="100%">
                  Não há ambientes cadastrados!
                </td>
              </tr>
              <tr v-for="(ambiente, index) in ambientes" :key="index">
                <td class="truncate py-3 pr-5 sm:pr-8">{{ ambiente.id }}</td>
                <td
                  class="max-w-[10rem] truncate py-3 pr-5 font-semibold dark:text-white sm:max-w-xs sm:pr-8"
                >
                  <button>
                    {{ ambiente.nome }}
                  </button>
                </td>
                <td
                  class="truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:pr-8"
                >
                  {{ ambiente.estabelecimento }}
                </td>
                <td
                  class="truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:pr-8"
                >
                  {{ ambiente.andar }}
                </td>        
                <td
                  class="truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:pr-8"
                >
                  {{ ambiente.tipo }}
                </td>         
                <td
                  class="max-w-[10rem] truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:max-w-xs sm:pr-8"
                >
                  {{ ambiente.cidade }}
                </td>
                <td
                  class="max-w-[10rem] truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:max-w-xs sm:pr-8"
                >
                  {{ ambiente.endereco }}
                </td>
                <td
                  class="max-w-[10rem] truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:max-w-xs sm:pr-8"
                >
                  {{ ambiente.observation }}
                </td>
                <td
                  class="flex items-center justify-center space-x-2 truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:pr-8"
                >
                  <button
                  >
                    <PencilSquareIcon class="w-5" />
                  </button>
                  <button
                  >
                    <TrashIcon class="w-5 text-rose-600" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  import config from "@/components/config/config";
  import axios from "axios";
  
  export default {
    data: () => ({
      ambientes: {},
      exibir: true,
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
    }
  };
  </script>
  
  <script setup>
    import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/outline";
    import Upside from "../usables/Upside.vue";
    import UpSideMenu from "../usables/UpSideMenu.vue";
    document.title = "Ambientes - Clean Natty";
  </script>
  