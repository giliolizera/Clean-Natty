<script>
   import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline"
   import Switch from '@/components/usables/Switch.vue'
   import { EllipsisVerticalIcon } from "@heroicons/vue/24/outline"

   export default {
      data: () => ({
         form: {
            id: '',
            nome: '',
            cnpj: '',
            telefone: '',
            cpf: '',
            valor: '',
            endereco: '',
            observation: '',
         },
         avançar: false,
         exibir: false,
         typePassword: true,
      }),
      methods: {
         // validar() {
         //    if (this.form.nome != '' && this.form.email.length > 10 && this.form.telefone.length > 13 && this.form.cpf.length > 13 && this.form.senha.length > 5) {
         //       this.avançar = true
         //    }
         //    else {
         //       this.avançar = false
         //    }
         // },
         trocarRota() {
            // if (this.avançar) {
            this.$router.push('/estoque')
            // }
            // else {
            //    if (this.form.nome === '' && this.form.email.length < 10 && this.form.telefone.length < 13 && this.form.cpf.length < 13 && this.form.senha.length < 5) {
            //       alert('Preencha todos os campos')
            //    }
            //    else if (this.form.nome === '') {
            //       alert('Preencha o campo nome')
            //    }
            //    else if (this.form.email.length < 10) {
            //       alert('Preencha o campo e-mail corretamente')
            //    }
            //    else if (this.form.telefone.length < 13) {
            //       alert('Preencha o campo telefone corretamente')
            //    }
            //    else if (this.form.cpf.length < 13) {
            //       alert('Preencha o campo cpf corretamente')
            //    }
            //    else if (this.form.senha.length < 5) {
            //       alert('A senha deve conter no mínimo 6 caracteres')
            //    }
            // }
         },
      },
      components: {
         Switch, EllipsisVerticalIcon, EyeIcon, EyeSlashIcon
      }
   }

</script>

<script setup>
   document.title = "Compra de Produtos - Clean Natty"
</script>
                     
<template>
   <div class=" text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
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
      <div class="flex justify-end bg-gray-200  dark:bg-slate-900 space-x-2" v-if="exibir">
         <p>Dark Mode</p>
         <Switch class="mt-1" />
      </div>
      <div class="grid grid-cols-1 gap-4 p-2 pl-2.5 lg:grid-cols-3 md:grid-cols-3">
         <div class="col-span-1 ml-4 mt-2 text-lg font-medium">
            <div class="bg-white dark:bg-slate-800">
               <div class="divide-y max-w-md bg-white dark:bg-slate-800">
                  <p class="font-medium text-xl pb-1">Compra de Produtos</p>
                  <p class="text-base font-thin py-2">Insira os dados do produto como o nome, CNPJ do fornecedor, detalhamento do frete...</p>
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
                  v-model="form.nome">
            </div>
            <div>
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  <p>CNPJ</p><p class="flex text-red-600">*</p>
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 pl-3 mt-1"
                  v-model="form.cnpj" v-maska="'##.###.###/####-##'">
            </div>
            <div>
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  <p>Telefone</p><p class="flex text-red-600">*</p>
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 mt-1"
                  v-model="form.telefone" v-maska="'(##) #####-####'">
            </div>
            <div>
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  <p>CEP</p><p class="flex text-red-600">*</p>
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 mt-1"
                  v-model="form.cpf" v-maska="'#####-###'">
            </div>
            <div>
               <div class="text-sm font-medium flex pl-1 mt-2">
                  Valor Frete
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 pl-3 mt-1"
                  v-model="form.valor">
            </div>
            <!-- TODO: Criar um componente de select para o tipo de produto -->
            <div>
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  <p>Lista de Produtos</p><p class="flex text-red-600">*</p>
               </div>
               <select
                  placeholder="Selecione os produtos"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 pl-3 mt-1"
                  v-model="form.produtos"
               >
                  <option disabled>Selecione</option>
                  <option :value="1">Desinfetante</option>
                  <option :value="2">Mr. Músculo</option>
               </select>
            </div>
            <div class="lg:col-span-2">
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  Observação
               </div>
               <textarea type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 mt-1"
                  v-model="form.observation"></textarea>
            </div>
            <div class="flex justify-end lg:col-span-2">
               <div>
                  <button @click="trocarRota()"
                     class="dark:bg-gray-200 bg-sky-600 text-white max-md:24 dark:text-gray-900 font-medium text-sm py-2 px-6 rounded mt-3">
                     ENTRAR
                  </button>
                  <Switch class="absolute bottom-0 hidden" />
               </div>
            </div>
         </form>
      </div>
   </div>
</template>
