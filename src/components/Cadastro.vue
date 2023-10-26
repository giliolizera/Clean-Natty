<script>
   import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline"
   import Switch from '../components/Switch.vue'
   import { EllipsisVerticalIcon } from "@heroicons/vue/24/outline"

   export default {
      data: () => ({
         form: {
            nome: 'Guilherme',
            email: 'guilhermegilioli@gmail.com',
            telefone: '54 999741188',
            cpf: '85657895236',
            curso: 'Ciências da Computação',
            senha: 'segredo123',
            cidade: 'Passo Fundo',
            endereco: 'Rua Alfredo Chaves, 365',
            observation: 'Qual é o motivo da gente estar vivo?',
         },
         avançar: false,
         exibir: false,
         typePassword: true,
         // 365 1380 i5 3470
         // 385 1480 i5 3570 0.2ghz more than i5 3470
         // 380 1785 i5 8265u
      }),
      methods: {
         validar() {
            if (this.form.nome != '' && this.form.email.length > 10 && this.form.telefone.length > 13 && this.form.cpf.length > 13 && this.form.senha.length > 5) {
               this.avançar = true
            }
            else {
               this.avançar = false
            }
         },
         trocarRota() {
            if (this.avançar) {
               this.$router.push('/radio')
            }
            else {
               if (this.form.nome === '' && this.form.email.length < 10 && this.form.telefone.length < 13 && this.form.cpf.length < 13 && this.form.senha.length < 5) {
                  alert('Preencha todos os campos')
               }
               else if (this.form.nome === '') {
                  alert('Preencha o campo nome')
               }
               else if (this.form.email.length < 10) {
                  alert('Preencha o campo e-mail corretamente')
               }
               else if (this.form.telefone.length < 13) {
                  alert('Preencha o campo telefone corretamente')
               }
               else if (this.form.cpf.length < 13) {
                  alert('Preencha o campo cpf corretamente')
               }
               else if (this.form.senha.length < 5) {
                  alert('A senha deve conter no mínimo 6 caracteres')
               }
            }
         },
      },
      components: {
         Switch, EllipsisVerticalIcon, EyeIcon, EyeSlashIcon
      }
   }

</script>

<script setup>
   document.title = "Cadastro - Training"
</script>
                     
<template>
   <div class=" text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
      <div class="flex justify-between bg-gray-200 dark:bg-slate-900">
         <router-link to="/">
            <button class="text-blue-600 bg-gray-200 dark:bg-slate-900 font-medium text-2xl flex p-4 justify-start">
               Training WebSite
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
      <div class="grid grid-cols-1 gap-4 p-2 pl-2.5 text-center lg:grid-cols-3 md:grid-cols-3">
         <div class="col-span-1 mt-4 text-lg font-medium">
            Junte-se conosco e descubra as vantagens em utilizar o Traning para gerenciar seus negócios!
         </div>
         <form class="col-span-2 grid lg:grid-cols-2 gap-4 pr-6 pl-6">
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
                  <p>Email</p><p class="flex text-red-600">*</p>
               </div>
               <input type="email"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 pl-3 mt-1"
                  v-model="form.email">
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
                  <p>CPF</p><p class="flex text-red-600">*</p>
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 mt-1"
                  v-model="form.cpf" v-maska="'###.###.###-##'">
            </div>
            <div>
               <div class="text-sm font-medium flex pl-1 mt-2">
                  Cidade
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 pl-3 mt-1"
                  v-model="form.cidade">
            </div>
            <div>
               <div class="text-sm font-medium flex pl-1 mt-2">
                  Endereço
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 pl-3 mt-1"
                  v-model="form.endereco">
            </div>
            <div>
               <div class="text-sm font-medium flex pl-1 mt-2">
                  Curso
               </div>
               <input type="text"
                  class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 pl-3 mt-1"
                  v-model="form.curso">
            </div>
            <div>
               <div class="text-sm font-medium flex space-x-1 pl-1 mt-2">
                  <p>Senha</p><p class="flex text-red-600">*</p>
               </div>
               <div class="relative w-full">
                  <input :type="typePassword ? 'password' : 'text'"
                     class="w-full dark:text-gray-200 dark:border-blue-600 border-black border dark:bg-slate-700 bg-white rounded-md p-2 mt-1"
                     v-model="form.senha">
                  <button class="absolute inset-y-0 right-0 pt-1 pr-3" @click.prevent.stop="typePassword = !typePassword">
                     <EyeIcon v-if="typePassword" class="h-5 w-5 text-neutral-500" />
                     <EyeSlashIcon v-if="!typePassword" class="h-5 w-5 text-neutral-500" />
                  </button>
               </div>
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
                  <button @click="validar(), trocarRota()"
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
