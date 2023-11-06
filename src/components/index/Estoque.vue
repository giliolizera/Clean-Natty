<template>
  <div class="hidden lg:block">
    <Upside />
  </div>
  <div class="lg:hidden">
    <UpSideMenu />
  </div>
  <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
    <div class="flex justify-between">
      <div class="divide-y max-w-md bg-white dark:bg-slate-800 p-4">
        <p class="font-medium text-xl pb-1">Estoque de Produtos</p>
        <p class="text-base font-thin py-2">Aqui você poderá consultar, filtrar e editar todos os produtos em estoque.</p>
      </div>
        <div class="p-6">
          <router-link to="cadastro-ambiente">
              <button class="dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-gray-200 bg-white border border-gray-400 text-black dark:text-white text-sm font-medium py-2 px-7 rounded-md">
                Cadastrar novo Produto
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
              <th class="py-3 pr-5 text-left sm:pr-8">Tipo</th>
              <th class="py-3 pr-5 text-left sm:pr-8">Medida</th>
              <th class="py-3 pr-5 text-left sm:pr-8">Quantidade</th>
              <th class="py-3 pr-5 text-left sm:pr-8">Observação</th>
              <th class="py-3 pr-5 text-center sm:pr-8">Ações</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-neutral-300 dark:divide-neutral-500">
          <tr v-if="products.id === 0">
            <td class="py-5 text-center" colspan="100%">
              Não há produtos cadastrados!
            </td>
          </tr>
          <tr v-for="(product, index) in products" :key="index">
            <td class="truncate py-3 pr-5 sm:pr-8">{{ product.id }}</td>
            <td
              class="max-w-[10rem] truncate py-3 pr-5 font-semibold dark:text-white sm:max-w-xs sm:pr-8"
            >
              <button>
                {{ product.name }}
              </button>
            </td>
            <td
              class="truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:pr-8"
            >
              {{ product.tipo }}
            </td>
            <td
              class="truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:pr-8"
            >
              {{ product.medida }}
            </td>        
            <td
              class="truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:pr-8"
            >
              {{ product.quantidade }}
            </td>         
            <td
              class="max-w-[10rem] truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:max-w-xs sm:pr-8"
            >
              {{ product.observation }}
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
</template>

<script>
  import Upside from "../usables/Upside.vue";
  import UpSideMenu from "../usables/UpSideMenu.vue";
  import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/outline";
export default {
  data: () => ({
    exibir: true,
    components: {
      Upside,
      UpSideMenu,
    },
    products: [
      { 
        id: "1",
        name: "Cerveja Heineken",
        codigo: "001",
        tipo: "Bebida",
        medida: "ML",
        quantidade: "12",
        observation: "Cerveja de 473ml"
      },
      {
        id: "2",
        name: "Mr. Músculo",
        codigo: "002",
        tipo: "Desingrachante",
        medida: "ML",
        quantidade: "6",
        observation: "Embalagem de 500ml"
      },
      {
        id: "3",
        name: "Desinfetante Pinho",
        codigo: "003",
        tipo: "Desinfetante",
        medida: "UN",
        quantidade: "24",
        observation: "Embalagem de 2L"
      },
      {
        id: "4",
        name: "Bucha Bombril",
        codigo: "004",
        tipo: "Esponja de aço",
        medida: "UN",
        quantidade: "12",
        observation: "Caixa com 3 unidades"
      },
      {
        id: "5",
        name: "Vassoura Condor",
        codigo: "005",
        tipo: "Vassoura",
        medida: "UN",
        quantidade: "20",
        observation: "Vassouras de 60cm"
      }
    ]
  }),
};
</script>

<script setup>
  document.title = "Estoque - Clean Natty";
</script>
