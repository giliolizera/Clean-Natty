<template>
    <div class="text-slate-800 bg-gray-100 rounded dark:bg-slate-800 dark:text-white">
        <div class="mx-auto w-full max-w-md py-8">
          <div class="mx-auto w-full grid rounded-md">
            <button
              v-for="(plan, index) in plans"
              :key="index"
              @click="active = plan.name"
            >
              <div
                :class="[
                  active === plan.name
                    ? 'dark:bg-slate-900 bg-gray-500 ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-600 text-white relative'
                    : 'bg-white text-black',
                  'mx-auto w-full max-w-md rounded-md border border-black dark:border-none px-5 py-4 mt-3',
                ]"
              >
                <ul class="justify-between flex">
                  <li class="text-left text-sm font-medium">
                    {{ plan.name }}
                  </li>
                  <button v-if="active === plan.name" class="flex space-between">
                    <CheckCircleIcon
                      class="h-8 w-8 mt-1 text-black-500"
                    />
                  </button>
                </ul>
                <ul>
                  <li
                    :class="[
                      active === plan.name
                        ? 'static text-left text-sm text-gray'
                        : 'static text-left text-sm text-gray-600',
                    ]"
                  >
                    {{ plan.ram }} {{ plan.cpus }}
                    <span aria-hidden="true"> &middot; </span>
                    {{ plan.price }} R$
                  </li>
                </ul>
              </div>
            </button>
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
          name: "AMD Ryzen 5 5500 4.20GHz",
          ram: "16GB",
          cpus: "6/12 CPU",
          price: "599,99",
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
  </script>
  