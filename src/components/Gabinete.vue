<template>
  <div
    class="text-slate-800 bg-gray-100 rounded dark:bg-slate-800 dark:text-white"
  >
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
              'mx-auto w-full max-w-md border border-black dark:border-none rounded-md px-5 py-4 mt-3',
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
                {{ plan.specs }}
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
        name: "Gabinete Lenovo Black",
        specs: "Mid Tower ATX",
        price: "49,00",
      },
      {
        name: "Gabinete Ninja Gamer",
        specs: "Mid Tower Micro ATX",
        price: "149,00",
      },
      {
        name: "Gabinete Rise Mode GLASSx06",
        specs: "Mid Tower ATX",
        price: "199,00",
      },
      {
        name: "Gabinete Rise Mode GLASSx06 Fans",
        specs: "Mid Tower ATX",
        price: "449,00",
      },
      {
        name: "Gabinete Rise Mode Galaxy Glass",
        specs: "Mid Tower ATX",
        price: "599,00",
      },
      {
        name: "Gabinete Lian LO Aquarium",
        specs: "Big Tower ATX",
        price: "899,00",
      },
    ],
    active: -1,
  }),
};
</script>

<script setup>
import { CheckCircleIcon } from "@heroicons/vue/24/outline";
</script>
