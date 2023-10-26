<template>
  <div class="hidden lg:block">
    <Upside />
  </div>
  <div class="lg:hidden">
    <UpSideMenu />
  </div>
  <div
    class="h-screen text-slate-800 bg-gray-100 rounded dark:bg-slate-800 dark:text-white py-8"
  >
    <div
      class="grid grid-cols-1 gap-4 p-2 pl-2.5 text-center lg:grid-cols-3 md:grid-cols-2"
    >

      <div class="col-span- grid-cols-1">
        <p class="font-medium text-xl">CPU</p>
        <Cpu />
      </div>
      <div class="col-span- grid-cols-2">
        <p class="font-medium text-xl">GPU</p>
        <Gpu />
      </div>
      <div class="col-span- grid-cols-3">
        <p class="font-medium text-xl">RAM + SSD</p>
        <Memory />
      </div>
      <div class="col-span- grid-cols-1">
        <p class="font-medium text-xl">SOURCE</p>
        <Power />
      </div>
      <div class="col-span- grid-cols-1">
        <p class="font-medium text-xl">MOTHERBOARD</p>
        <Motherboard />
      </div>
      <div class="col-span- grid-cols-1">
        <p class="font-medium text-xl">CABINET</p>
        <Gabinete />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    plans: [
      {
        name: "Intel Core i5 3470 3.60GHz",
        ram: "8GB",
        cpus: "4/4 CPU",
        price: "139,99",
      },
      {
        name: "Intel Core i7 4770K 3.90GHz",
        ram: "8GB",
        cpus: "4/8 CPU",
        price: "359,99",
      },
      {
        name: "AMD Ryzen 5 5600G 4.40GHz",
        ram: "16GB",
        cpus: "6/12 CPU",
        price: "899,99",
      },
      {
        name: "AMD Ryzen 7 5700X 4.60GHz",
        ram: "32GB",
        cpus: "8/16 CPU",
        price: "1249,99",
      },
      {
        name: "Intel Core i5 13600KF 5.30GHz",
        ram: "64GB",
        cpus: "14/20 CPU",
        price: "1999,99",
      },
      {
        name: "Intel Core i9 13900KS 6.0GHz",
        ram: "64GB",
        cpus: "24/32 CPU",
        price: "4999,99",
      },
    ],
    active: -1,
  }),
  components: {
    Upside,
    UpSideMenu,
  },
};
</script>

<script setup>
import { CheckCircleIcon } from "@heroicons/vue/24/outline";
import Upside from "./Upside.vue";
import UpSideMenu from "./UpSideMenu.vue";
import Cpu from "./Cpu.vue";
import Gpu from "./Gpu.vue";
import Memory from "./Memory.vue";
import Power from "./Power.vue";
import Motherboard from "./Motherboard.vue";
import Gabinete from "./Gabinete.vue";
document.title = "Radio - Training";
</script>
