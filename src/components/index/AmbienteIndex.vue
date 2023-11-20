<template>
    <div class="hidden lg:block">
      <Upside />
    </div>
    <div class="lg:hidden">
      <UpSideMenu />
    </div>
    <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
        <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
          <div v-if="!editar">
            <div v-if="!exibirCreate" class="flex justify-between">
              <div class="divide-y max-w-md bg-white dark:bg-slate-800 p-6">
                <p class="font-medium text-xl pb-1">Ambientes</p>
                <p class="text-base font-light py-2">Aqui você poderá consultar, filtrar e editar todos os ambientes já cadastrados.</p>
              </div>
              <div class="p-6">
                <button @click="exibirCreate = !exibirCreate" class="inline-flex dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-gray-200 bg-white border border-gray-400 text-black dark:text-white text-sm font-medium py-2 px-4 rounded-md">
                  <PlusIcon class="h-5 w-5" />
                  <p class="px-2">Cadastrar novo Ambiente</p>
                </button>
              </div>
            </div>
        </div>
        <CreateAmbiente 
          v-if="exibirCreate"
          @criar="criarAmbiente"
          @trocarRota="exibirCreate = !exibirCreate"
        />
        <Edit 
          :ambiente="ambientes"
          :id="ambienteSelecionado"
          v-if="editar"
          @editar="editarAmbiente"
          @trocarRota="editar = !editar"
        />
        <div v-if="!exibirCreate" class="grid grid-cols-1 gap-4 p-2 pl-2.5 lg:grid-cols-3 md:grid-cols-3">
          <div v-if="!editar" class="col-span-3 grid border border-black dark:border-white p-2 mt-5 w-full overflow-auto">
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
              <tr v-if=" ambientes === ''">
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
                  class="truncate py-3 pr-5 text-sm font-light text-black dark:text-neutral-300 sm:pr-8"
                >
                  {{ ambiente.estabelecimento }}
                </td>
                <td
                  class="truncate py-3 pr-5 text-sm font-light text-black dark:text-neutral-300 sm:pr-8"
                >
                  {{ ambiente.andar }}
                </td>        
                <td
                  class="truncate py-3 pr-5 text-sm font-light text-black dark:text-neutral-300 sm:pr-8"
                >
                  {{ ambiente.tipo }}
                </td>         
                <td
                  class="max-w-[10rem] truncate py-3 pr-5 text-sm font-light text-black dark:text-neutral-300 sm:max-w-xs sm:pr-8"
                >
                  {{ ambiente.cidade }}
                </td>
                <td
                  class="max-w-[10rem] truncate py-3 pr-5 text-sm font-light text-black dark:text-neutral-300 sm:max-w-xs sm:pr-8"
                >
                  {{ ambiente.endereco }}
                </td>
                <td
                  class="max-w-[10rem] truncate py-3 pr-5 text-sm font-light text-black dark:text-neutral-300 sm:max-w-xs sm:pr-8"
                >
                  {{ ambiente.observation }}
                </td>
                <td
                  class="flex items-center justify-center space-x-2 truncate py-3 pr-5 text-sm font-light text-black dark:text-neutral-300 sm:pr-8"
                >
                  <button @click="selecionado(ambiente), recarregar(), editar = !editar">
                    <PencilSquareIcon class="w-5 text-blue-600" />
                  </button>
                  <button @click="deletarAmbiente(ambiente)">
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
    props: {
      ambiente: {
        type: Object,
        default: undefined,
      },
      id: {
        type: Object,
        default: undefined,
      }
    },
    data: () => ({
      ambientes: [],
      exibir: true,
      editar: false,
      exibirCreate: false,
      ambienteSelecionado: undefined,
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
    },
    methods: {
      criarAmbiente(ambiente) {
        axios.post(`${config.API_URL}/ambientes`, ambiente)
        .then((response) => {
          this.ambientes.push(response.data);
          this.exibirCreate = false
        })
      },
      deletarAmbiente(ambiente){
        const confirmar = window.confirm(`Deseja deletar o ambiente "${ambiente.nome}"?`)

        if(confirmar){
          axios.delete(`${config.API_URL}/ambientes/${ambiente.id}`)
              .then(response => {
                  const indice = this.ambientes.findIndex(f => f.id === ambiente.id)
                  this.ambientes.splice(indice, 1)
              })
        }
      },
      editarAmbiente(ambiente){
        axios.put(`${config.API_URL}/ambientes/${ambiente.id}`, ambiente)
            .then(response => {
                const indice = this.ambientes.findIndex(f => f.id === ambiente.id)
                this.ambientes.splice(indice, 1, ambiente)
                this.exibirCreate = false
              })
      },
      selecionado(ambiente){
        this.ambienteSelecionado = ambiente.id -1
      },
      recarregar(){
        axios.get(`${config.API_URL}/ambientes`)
        .then((response) => {
          this.ambientes = response.data;
        })
      }
    }
  };
  </script>
  
  <script setup>
    import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/outline";
    import { PlusIcon } from "@heroicons/vue/24/outline";
    import CreateAmbiente from "../create/CreateAmbiente.vue";
    import Edit from "@/components/edit/EditAmbinete.vue";
    import Upside from "../usables/Upside.vue";
    import UpSideMenu from "../usables/UpSideMenu.vue";
    document.title = "Ambientes - Clean Natty";
  </script>
  