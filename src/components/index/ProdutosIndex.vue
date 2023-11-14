<template>
  <div class="hidden lg:block">
    <Upside />
  </div>
  <div class="lg:hidden">
    <UpSideMenu />
  </div>
  <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
    <div v-if="!editar">
      <div v-if="!exibirCreate" class="flex justify-between">
        <div class="divide-y max-w-md bg-white dark:bg-slate-800 p-6">
          <p class="font-medium text-xl pb-1">Estoque de Produtos</p>
          <p class="text-base font-thin py-2">Aqui você poderá consultar, filtrar e editar todos os produtos em estoque.</p>
        </div>
        <div class="p-6">
            <button @click="exibirCreate = !exibirCreate" class="dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-gray-200 bg-white border border-gray-400 text-black dark:text-white text-sm font-medium py-2 px-7 rounded-md">
              Cadastrar novo Produto
            </button>
        </div>
      </div>
    </div>
    <CreateProduto 
      v-if="exibirCreate"
      @criar="criarProduto"
      @trocarRota="exibirCreate = !exibirCreate"
    />
    <Edit 
      :produto="produtos"
      :id="produtoSelecionado"
      v-if="editar"
      @editar="editarProduto"
      @trocarRota="editar = !editar"
    />
    <div v-if="!exibirCreate" class="grid grid-cols-1 gap-4 p-2 pl-2.5 lg:grid-cols-3 md:grid-cols-3">
      <div v-if="!editar" class="col-span-3 grid border border-black dark:border-white p-2 mt-5 w-full overflow-auto">
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
          <tr v-if="produtos === ''">
            <td class="py-5 text-center" colspan="100%">
              Não há produtos cadastrados!
            </td>
          </tr>
          <tr v-for="(produto, index) in produtos" :key="index">
            <td class="truncate py-3 pr-5 sm:pr-8">{{ produto.id }}</td>
            <td
              class="max-w-[10rem] truncate py-3 pr-5 font-semibold dark:text-white sm:max-w-xs sm:pr-8"
            >
              <button>
                {{ produto.nome }}
              </button>
            </td>
            <td
              class="truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:pr-8"
            >
              {{ produto.tipo }}
            </td>
            <td
              class="truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:pr-8"
            >
              {{ produto.medida }}
            </td>        
            <td
              class="truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:pr-8"
            >
              {{ produto.quantidade }}
            </td>         
            <td
              class="max-w-[10rem] truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:max-w-xs sm:pr-8"
            >
              {{ produto.observation }}
            </td>
            <td
              class="flex items-center justify-center space-x-2 truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:pr-8"
            >
              <button @click="selecionado(produto), recarregar(), editar = !editar">
                <PencilSquareIcon class="w-5 text-blue-600" />
              </button>
              <button @click="deletarProduto(produto)">
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
  import CreateProduto from "../create/CreateProduto.vue";
  import Upside from "../usables/Upside.vue";
  import UpSideMenu from "../usables/UpSideMenu.vue";
  import Edit from "../edit/EditProduto.vue";
  import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/outline";
  import config from "@/components/config/config";
  import axios from "axios";

  export default {
    props: {
      produto: {
        type: Object,
        default: undefined,
      },
      id: {
        type: Object,
        default: undefined,
      },
    },
    data: () => ({
      produtos: {},
      exibir: true,
      editar: false,
      exibirCreate: false, 
      produtoSelecionado: undefined,
      components: {
        Upside,
        UpSideMenu,
      },
    }),
    created(){
      axios.get(`${config.API_URL}/produtos`)
      .then((response) => {
        this.produtos = response.data;
      })
    },
    methods: {
      criarProduto(produto) {
        axios.post(`${config.API_URL}/produtos`, produto)
        .then((response) => {
          this.produtos.push(response.data);
        })
      },
      deletarProduto(produto) {
        const confirmar = window.confirm(`Deseja deletar o produto "${produto.nome}"?`)

        if(confirmar){
          const indice = this.produtos.findIndex(f => f.id === produto.id)
          axios.delete(`${config.API_URL}/produtos/${produto.id}`)
              .then(response => {
                  this.produtos.splice(indice, 1)
              })
        }
      },
      editarProduto(produto){
        console.log(produto)
        axios.put(`${config.API_URL}/produtos/${produto.id}`, produto)
            .then(response => {
                const indice = this.produtos.findIndex(f => f.id === produto.id)
                this.produtos.splice(indice, 1, produto)
                this.exibirCreate = false
              })
      },
      selecionado(produto){
        this.produtoSelecionado = produto.id -1
        console.log(this.produtoSelecionado)
      },
      recarregar(){
        axios.get(`${config.API_URL}/produtos`)
        .then((response) => {
          this.produtos = response.data;
        })
      }
    }
  };
</script>

<script setup>
  document.title = "Produtos - Clean Natty";
</script>
