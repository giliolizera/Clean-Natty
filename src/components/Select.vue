<template>
  <div class="hidden lg:block">
      <Upside/>
   </div>
   <div class="lg:hidden">
      <UpSideMenu/>
   </div>
   <div class="bg-gray-100 dark:bg-slate-800">
     <div class="p-10 divide-y max-w-lg bg-gray-100 dark:bg-slate-800">
       <p class="font-medium text-xl pb-1">Select People</p>
       <p class="text-base py-2">Select a People who you like to married with.</p>
      </div>
    </div>
  <div class="bg-gray-100 h-full rounded dark:bg-slate-800">
    <div class="mx-auto w-72 rounded-md">
      <div class="inline-flex bg-white text-black w-72 rounded-md">
        <button @click="exibir = !exibir" @keypress="!exibir" @keydown.prevent.esc="escape()"
          @keydown.prevent.down="baixo()" @keydown.prevent.up="cima()" @keydown.prevent.enter="enter()"
          class="w-full inline-flex justify-between pl-4 p-1 px-1 py-1 rounded-md text-left focus:outline-none" type="text">
          {{ selected }}
          <ChevronUpDownIcon class="h-5 zw-5 mt-0.5 text-gray-500" />
        </button>
      </div>
      <div class="mt-2 text-black">
        <ul v-if="!exibir" class="bg-white grid rounded-md">
          <button @mouseenter="active = index" @mouseleave="active = -1" @click="selected = people.name, exibir = true"
            :class="[active === index
              ? 'bg-slate-400 rounded-md'
              : '', 'inline-flex py-1.5']" v-for="(people, index) in peoples" :key="index">
            <div v-if="selected === people.name" class="pl-2 inline-flex">
              <CheckIcon class="h-5 w-5 mt-0.5 text-blue-500" />
              <div class="pl-3">
                {{ people.name }}
              </div>
            </div>
            <div v-if="selected != people.name" class="pl-10">
              {{ people.name }}
            </div>
          </button>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
import Upside from './Upside.vue'
import UpSideMenu from './UpSideMenu.vue';
import { ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import { CheckIcon } from "@heroicons/vue/24/outline";

export default {
  data: () => ({
    peoples: [
      { name: 'Guilherme Gilioli' },
      { name: 'Jimmy de Santa' },
      { name: 'Bartolomeu Krautch' },
      { name: 'Tom Riddle' },
      { name: 'Taina Bitches' },
      { name: 'Hellen Childs' },
      { name: 'Maik Sanaiott'},
      { name: 'Rillary Clinton'},
      { name: 'Francis Pigdey'},
      { name: 'Michel Nigris'},
    ],
    active: -1,
    selected: 'Guilherme Gilioli',
    exibir: false,
  }),
  components: {
    ChevronUpDownIcon,
    CheckIcon,
    Upside, UpSideMenu
  },
  methods: {
    baixo() {
      this.active++;
      if (this.active > this.peoples.length - 1) {
        this.active = 0;
      }
    },
    cima() {
      this.active--;
      if (this.active < 0) {
        this.active = this.peoples.length - 1;
      }
    },
    escape() {
      this.exibir = true
    },
    enter() {
      this.exibir = true
      this.selected = this.peoples[this.active].name
    }
  }
}
</script>

<script setup>
   document.title = "Select - Training"
</script>
