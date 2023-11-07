<template>
    <div class=" text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
        <div class="flex justify-between bg-gray-200 dark:bg-slate-900">
         <router-link to="/dashboard">
            <button class="text-blue-600 bg-gray-200 dark:bg-slate-900 font-medium text-2xl flex p-4 justify-start">
               Clean Natty
            </button>
         </router-link>
         <button @click="exibir = !exibir">
            <EllipsisVerticalIcon class="h-6 w-6 mr-2" />
         </button>
      </div>
      <div class="flex justify-end bg-gray-200  dark:bg-slate-900 space-x-2" v-if="exibir">
         <p>Dark Mode</p>
         <Switch class="mt-1" />
      </div>
        <div class="grid grid-cols-1 gap-4 p-2 pl-2.5 lg:grid-cols-3 md:grid-cols-3">
         <div class="col-span-1 ml-4 mt-2 text-lg font-medium">
            <div class="bg-white dark:bg-slate-800">
               <div class="divide-y max-w-md bg-white dark:bg-slate-800">
                  <p class="font-medium text-xl pb-1">Editar Funcionário</p>
                  <p class="text-base font-thin py-2">Edite aqui os dados do funcionário como nome, cpf, email, número do telefone...</p>
               </div>
            </div>
         </div>
         <form class="col-span-2 grid lg:grid-cols-2 gap-4 pr-6 pl-6 mt-8">
            <div>
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  <p>Nome</p><p class="flex text-red-600">*</p>
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md mt-1 pl-3 p-2"
                  :value="dados.nome">
            </div>
            <div>
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  <p>Email</p><p class="flex text-red-600">*</p>
               </div>
               <input type="email"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 pl-3 mt-1"
                  :value="dados.email">
            </div>
            <div>
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  <p>Telefone</p><p class="flex text-red-600">*</p>
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 mt-1"
                  :value="dados.telefone" v-maska="'(##) #####-####'">
            </div>
            <div>
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  <p>CPF</p><p class="flex text-red-600">*</p>
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 mt-1"
                  :value="dados.cpf" v-maska="'###.###.###-##'">
            </div>
            <div>
               <div class="text-sm font-medium flex pl-1 mt-2">
                  Cidade
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 pl-3 mt-1"
                  :value="dados.cidade">
            </div>
            <div>
               <div class="text-sm font-medium flex pl-1 mt-2">
                  Endereço
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 pl-3 mt-1"
                  :value="dados.endereco">
            </div>
            <div class="lg:col-span-2">
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  Observação
               </div>
               <textarea type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 mt-1"
                  :value="dados.observation"></textarea>
            </div>
            <div class="flex justify-end lg:col-span-2">
               <div>
                  <button @click="trocarRota()" type="submit"
                     class="dark:bg-gray-200 bg-sky-600 text-white max-md:24 dark:text-gray-900 font-medium text-sm py-2 px-6 rounded mt-3">
                     ENVIAR
                  </button>
                  <Switch class="absolute bottom-0 hidden" />
               </div>
            </div>
         </form>
      </div>
   </div>
</template>

<script>

export default {
    name: 'Edit',
    data: () => ({
        dados: {},
        exibir: false
    }),
    methods: {
        getDados(){
            fetch(`http://localhost:3000/funcionarios/${this.$route.params.id}`)
            .then(response => response.json())
            .then(response => {
                this.dados = response
            })
        },    
        trocarRota(){
            this.$router.push('/funcionarios')
        },
    },
    created() {
        this.getDados()
    }
}

</script>

<script setup>
import { EllipsisVerticalIcon } from "@heroicons/vue/24/outline"
import Switch from "@/components/usables/Switch.vue"
</script>