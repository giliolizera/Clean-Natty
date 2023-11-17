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
                <p class="font-medium text-xl pb-1">Limpezas</p>
              <p class="text-base font-thin py-2">Aqui você poderá consultar, filtrar e editar todas as limpezas já cadastradas.</p>
            </div>
            <div class="p-6">
                <button @click="exibirCreate = !exibirCreate" class="dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-gray-200 bg-white border border-gray-400 text-black dark:text-white text-sm font-medium py-2 px-7 rounded-md">
                  Cadastrar nova Limpeza
                </button>
              </div>
            </div>
          </div>
            <CreateLimpeza 
              v-if="exibirCreate"
              @criar="criarLimpeza"
              @trocarRota="exibirCreate = !exibirCreate"
            />
            <Edit 
              :limpeza="limpezas"
              :id="limpezaSelecionada"
              v-if="editar"
              @editar="editarLimpeza"
              @trocarRota="editar = !editar"
            ></Edit>  
        <div v-if="!exibirCreate" class="grid grid-cols-1 gap-4 p-2 pl-2.5 lg:grid-cols-3 md:grid-cols-3">
          <div v-if="!editar" class="col-span-3 grid border border-black dark:border-white p-2 mt-5 w-full overflow-auto">
            <table class="min-w-full divide-y divide-neutral-300" >
              <thead>
                <tr>
                  <th class="py-3 pr-5 text-left sm:pr-8">ID</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Funcionário</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Ambiente</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Data</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Horário</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Status</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Observação</th>
                  <th class="py-3 pr-5 text-center sm:pr-8">Ações</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-300 dark:divide-neutral-500">
              <tr v-if=" limpezas === ''">
                <td class="py-5 text-center" colspan="100%">
                  Não há limpezas cadastradas!
                </td>
              </tr>
              <tr v-for="(limpeza, index) in limpezas" :key="index">
                <td class="truncate py-3 pr-5 sm:pr-8">{{ limpeza.id }}</td>
                <td
                  class="max-w-[10rem] truncate py-3 pr-5 font-light text-neutral-700 dark:text-neutral-300 sm:max-w-xs sm:pr-8"
                >
                  {{ limpeza.funcionario }}
                </td>
                <td
                  class="max-w-[10rem] truncate py-3 pr-5 font-light text-neutral-700 dark:text-neutral-300 sm:max-w-xs sm:pr-8"
                >
                  {{ limpeza.ambiente }}
                </td>
                <td
                  class="truncate py-3 pr-5 text-sm font-light text-neutral-700 dark:text-neutral-300 sm:pr-8"
                >
                  {{ limpeza.data }}
                </td>        
                <td
                  class="truncate py-3 pr-5 text-sm font-light text-neutral-700 dark:text-neutral-300 sm:pr-8"
                >
                  {{ limpeza.horario }}
                </td>         
                <td
                  class="truncate py-3 pr-5 text-sm font-light text-neutral-700 dark:text-neutral-300 sm:max-w-xs sm:pr-8"
                >
                  <button v-if="limpeza.status === 'Finalizado'" class="rounded-xl bg-green-600/50 font-medium pl-2 pr-2 p-1 border border-slate-900">
                    {{ limpeza.status }}
                  </button>
                  <button v-if="limpeza.status === 'Em Andamento'" class="rounded-xl bg-yellow-600/50 font-medium pl-2 pr-2 p-1 border border-slate-900">
                    {{ limpeza.status }}
                  </button>
                  <button v-if="limpeza.status === 'Não Iniciado'" class="rounded-xl bg-gray-600/50 font-medium pl-2 pr-2 p-1 border border-slate-900">
                    {{ limpeza.status }}
                  </button>
                  <button v-if="limpeza.status === 'Cancelado'" class="rounded-xl bg-red-600/50 font-medium pl-2 pr-2 p-1 border border-slate-900">
                    {{ limpeza.status }}
                  </button>
                </td>
                <td
                  class="max-w-[10rem] truncate py-3 pr-5 text-sm font-light text-neutral-700 dark:text-neutral-300 sm:max-w-xs sm:pr-8"
                >
                  {{ limpeza.observation }}
                </td>
                <td
                  class="flex items-center justify-center space-x-2 truncate py-3 pr-5 text-sm font-light text-neutral-700 dark:text-neutral-300 sm:pr-8"
                >
                  <button @click="selecionado(limpeza), recarregar(), editar = !editar">
                    <PencilSquareIcon class="w-5 text-blue-600" />
                  </button>
                  <button @click="deletarLimpeza(limpeza)">
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
        limpeza: {
            type: Object,
            default: undefined
        },
        id: {
            type: Object,
            default: undefined
        }
    },
    data: () => ({
      limpezas: [],
      funcionarios: [],
      exibir: true,
      editar: false,
      exibirCreate: false,
      limpezaSelecionada: undefined,
      components: {
        Upside,
        UpSideMenu,
      },
    }),
    created(){
      axios.get(`${config.API_URL}/funcionarios`)
      .then((response) => {
        this.funcionarios = response.data;
        console.log(this.funcionarios)
      }),
      axios.get(`${config.API_URL}/limpezas`)
      .then((response) => {
        this.limpezas = response.data;
      })
    },
    methods: {
      criarLimpeza(limpeza) {
        axios.post(`${config.API_URL}/limpezas`, limpeza)
        .then((response) => {
          this.limpezas.push(response.data);
          this.exibirCreate = false
        })
      },
      deletarLimpeza(limpeza) {
        const confirmar = window.confirm(`Deseja deletar a limpeza?`)

        if(confirmar){
          axios.delete(`${config.API_URL}/limpezas/${limpeza.id}`)
              .then(response => {
                  const indice = this.limpezas.findIndex(f => f.id === limpeza.id)
                  this.limpezas.splice(indice, 1)
              })
        }
      },
      editarLimpeza(limpeza){
        console.log(limpeza)
        axios.put(`${config.API_URL}/limpezas/${limpeza.id}`, limpeza)
            .then(response => {
                const indice = this.limpezas.findIndex(f => f.id === limpeza.id)
                this.limpezas.splice(indice, 1, limpeza)
                this.exibirCreate = false
              })
      },
      selecionado(limpeza){
        this.limpezaSelecionada = limpeza.id -1
        console.log(this.limpezaSelecionada)
      },
      recarregar(){
        axios.get(`${config.API_URL}/limpezas`)
        .then((response) => {
          this.limpezas = response.data;
        })
      }
    },
  };
  </script>
  
  <script setup>
    import { PencilSquareIcon, TrashIcon } from "@heroicons/vue/24/outline";
    import CreateLimpeza from "../create/CreateLimpeza.vue";
    import Edit from "../edit/EditLimpeza.vue";
    import Upside from "../usables/Upside.vue";
    import UpSideMenu from "../usables/UpSideMenu.vue";
    document.title = "Limpezas - Clean Natty";
  </script>