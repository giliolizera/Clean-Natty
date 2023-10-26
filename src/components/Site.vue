   <template>
      <div
         class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white"
      >
         <div class="flex justify-between bg-gray-200 dark:bg-slate-900">
            <router-link to="/">
            <button
               class="text-blue-600 bg-gray-200 dark:bg-slate-900 font-medium text-2xl flex p-4 justify-start"
            >
               Training WebSite
            </button>
            </router-link>
            <button @click="exibir = !exibir">
            <EllipsisVerticalIcon class="h-6 w-6 mr-2" />
            </button>
         </div>
         <div
            v-if="exibir"
            class="flex justify-end bg-gray-200 dark:bg-slate-900 space-x-2"
         >
            <p>Dark Mode</p>
            <Switch class="mt-1" />
         </div>
         <div class="text-center justify-center max-w-md mx-auto">
            <div class="inline-flex text-center justify-center p-10 py-4">
            <div class="">
               <div class="text-center font-medium text-xl mt-6">
                  O objetivo deste projeto é apenas treinar para aprender a usar o
                  TailwindCSS e o Vue.JS
               </div>
               <div class="text-center font-medium mt-10">
                  Para entrar anonimamente, <br />
                  clique no botão abaixo
               </div>
               <div class="flex justify-center mt-2">
                  <router-link to="/radio">
                  <button
                     class="dark:bg-gray-200 dark:hover:bg-gray-300 hover:bg-sky-600 bg-sky-600 text-white dark:text-gray-900 text-sm font-medium py-2 px-7 rounded"
                  >
                     ENTRAR
                  </button>
                  </router-link>
               </div>
               <div class="text-center font-medium mt-6">
                  Para cadastrar-se no sistema, <br />
                  clique no botão abaixo
               </div>
               <div class="flex justify-center mt-2">
                  <router-link to="/cadastro">
                  <button
                     class="dark:bg-gray-200 dark:hover:bg-gray-300 hover:bg-sky-600 bg-sky-600 text-white dark:text-gray-900 text-sm font-medium py-2 px-5 rounded"
                  >
                     CADASTRAR
                  </button>
                  </router-link>
               </div>
            </div>
            </div>

            <div class="flex justify-center text-xl mb-5 font-medium mt-6">
            Tecnologias utilizadas no projeto
            </div>
            <div class="font-medium flex justify-center mt-0">
            <div class="inline-flex space-x-2">
               <img
                  src="../assets/logo.png"
                  @click="vue"
                  class="sm:w-16 sm:h-16 lg:w-40 lg:h-40 md:w-24 md:h-24 h-16 w-16"
               />
            </div>
            </div>
         </div>
         <div>
            <img
            src="../assets/tillll.png"
            @click="tail"
            class="w-screen dark:opacity-10 mt-4"
            />
         </div>
      </div>
      <Switch class="absolute bottom-0 hidden" />
   </template>

   <style>
   ::-webkit-scrollbar {
   width: 8px;
   height: 2px;
   }

   ::-webkit-scrollbar-track {
   background: #000;
   padding: 2px;
   }

   ::-webkit-scrollbar-thumb {
   background-color: #393939;
   }
   </style>

<script>
import Switch from "./Switch.vue";
import { EllipsisVerticalIcon } from "@heroicons/vue/24/outline";
export default {
  components: {
    Switch,
    EllipsisVerticalIcon,
  },
  data: () => ({
    exibir: false,
  }),
};
</script>

<script setup>
document.title = "Home - Training";

function vue() {
  window.open("https://vuejs.org/", "_blank");
}
function tail() {
  window.open("https://tailwindcss.com/", "_blank");
}
</script>
