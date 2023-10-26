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
              'mx-auto w-full border border-black dark:border-none max-w-md rounded-md px-5 py-4 mt-3',
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
        name: "H310M Asus",
        specs: "Socket LGA1155",
        price: "199,00",
      },
      {
        name: "H510M Asus",
        specs: "Socket LGA1200",
        price: "399,00",
      },
      {
        name: "A520M PRO Gigabyte",
        specs: "Socket AM4",
        price: "429,00",
      },
      {
        name: "H610M Mancer",
        specs: "Socket LGA1250",
        price: "499,00",
      },
      {
        name: "B550M Aorus Elite",
        specs: "Socket AM4",
        price: "899,00",
      },
      {
        name: "B760M Aorus Elite",
        specs: "Socket LGA 1700",
        price: "1299,00",
      },
    ],
    active: -1,
  }),
};
</script>

<script setup>
import { CheckCircleIcon } from "@heroicons/vue/24/outline";
</script>
