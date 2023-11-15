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
                <p class="font-medium text-xl pb-1">Funcionários</p>
              <p class="text-base font-thin py-2">Aqui você poderá consultar, filtrar e editar todos os funcionários já cadastrados.</p>
            </div>
            <div class="p-6">
                <button @click="exibirCreate = !exibirCreate" class="dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-gray-200 bg-white border border-gray-400 text-black dark:text-white text-sm font-medium py-2 px-7 rounded-md">
                  Cadastrar novo Funcionário
                </button>
              </div>
            </div>
          </div>
            <CreateLimpeza 
              v-if="exibirCreate"
              @criar="criarFuncionario"
              @trocarRota="exibirCreate = !exibirCreate"
            />
            <Edit 
              :funcionario="funcionarios"
              :id="funcionarioSelecionado"
              v-if="editar"
              @editar="editarFuncionario"
              @trocarRota="editar = !editar"
            ></Edit>  
        <div v-if="!exibirCreate" class="grid grid-cols-1 gap-4 p-2 pl-2.5 lg:grid-cols-3 md:grid-cols-3">
          <div v-if="!editar" class="col-span-3 grid border border-black dark:border-white p-2 mt-5 w-full overflow-auto">
            <table class="min-w-full divide-y divide-neutral-300" >
              <thead>
                <tr>
                  <th class="py-3 pr-5 text-left sm:pr-8">ID</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Nome</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Email</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Telefone</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">CPF</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Cidade</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Endereço</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Gestor</th>
                  <th class="py-3 pr-5 text-left sm:pr-8">Observação</th>
                  <th class="py-3 pr-5 text-center sm:pr-8">Ações</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-neutral-300 dark:divide-neutral-500">
              <tr v-if=" funcionarios === ''">
                <td class="py-5 text-center" colspan="100%">
                  Não há funcionários cadastrados!
                </td>
              </tr>
              <tr v-for="(funcionario, index) in funcionarios" :key="index">
                <td class="truncate py-3 pr-5 sm:pr-8">{{ funcionario.id }}</td>
                <td
                  class="max-w-[10rem] truncate py-3 pr-5 font-semibold dark:text-white sm:max-w-xs sm:pr-8"
                >
                  <button>
                    {{ funcionario.nome }}
                  </button>
                </td>
                <td
                  class="truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:pr-8"
                >
                  {{ funcionario.email }}
                </td>
                <td
                  class="truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:pr-8"
                >
                  {{ funcionario.telefone }}
                </td>        
                <td
                  class="truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:pr-8"
                >
                  {{ funcionario.cpf }}
                </td>         
                <td
                  class="truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:max-w-xs sm:pr-8"
                >
                  {{ funcionario.cidade }}
                </td>
                <td
                  class="truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:max-w-xs sm:pr-8"
                >
                  {{ funcionario.endereco }}
                </td>
                <td
                  class="truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:max-w-xs sm:pr-8"
                >
                  {{ funcionario.gestor }}
                </td>
                <td
                  class="max-w-[10rem] truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:max-w-xs sm:pr-8"
                >
                  {{ funcionario.observation }}
                </td>
                <td
                  class="flex items-center justify-center space-x-2 truncate py-3 pr-5 text-sm font-extralight text-neutral-700 dark:text-neutral-300 sm:pr-8"
                >
                  <button @click="selecionado(funcionario), recarregar(), editar = !editar">
                    <PencilSquareIcon class="w-5 text-blue-600" />
                  </button>
                  <button @click="deletarFuncionario(funcionario)">
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
        funcionario: {
            type: Object,
            default: undefined
        },
        id: {
            type: Object,
            default: undefined
        }
    },
    data: () => ({
      funcionarios: [],
      exibir: true,
      editar: false,
      exibirCreate: false,
      funcionarioSelecionado: undefined,
      components: {
        Upside,
        UpSideMenu,
      },
    }),
    created(){
      axios.get(`${config.API_URL}/funcionarios`)
      .then((response) => {
        this.funcionarios = response.data;
      })
    },
    methods: {
      criarFuncionario(funcionario) {
        axios.post(`${config.API_URL}/funcionarios`, funcionario)
        .then((response) => {
          this.funcionarios.push(response.data);
          this.exibirCreate = false
        })
      },
      deletarFuncionario(funcionario) {
        const confirmar = window.confirm(`Deseja deletar o funcionário "${funcionario.nome}"?`)

        if(confirmar){
          axios.delete(`${config.API_URL}/funcionarios/${funcionario.id}`)
              .then(response => {
                  const indice = this.funcionarios.findIndex(f => f.id === funcionario.id)
                  this.funcionarios.splice(indice, 1)
              })
        }
      },
      editarFuncionario(funcionario){
        console.log(funcionario)
        axios.put(`${config.API_URL}/funcionarios/${funcionario.id}`, funcionario)
            .then(response => {
                const indice = this.funcionarios.findIndex(f => f.id === funcionario.id)
                this.funcionarios.splice(indice, 1, funcionario)
                this.exibirCreate = false
              })
      },
      selecionado(funcionario){
        this.funcionarioSelecionado = funcionario.id -1
        console.log(this.funcionarioSelecionado)
      },
      recarregar(){
        axios.get(`${config.API_URL}/funcionarios`)
        .then((response) => {
          this.funcionarios = response.data;
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
    document.title = "Funcionários - Clean Natty";
  </script>