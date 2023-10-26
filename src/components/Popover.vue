<template>
  <div class="hidden lg:block">
    <Upside />
  </div>
  <div class="lg:hidden">
    <UpSideMenu />
  </div>
  <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
    <div class="pt-10 flex justify-center">
      <button @click="exibir = !exibir"
        class="relative inline-flex rounded-md dark:bg-slate-900 bg-black bg-opacity-40 text-white px-4 py-2 text-sm font-medium hover:bg-opacity-50">
        Options
        <ChevronDownIcon class="ml-2 -mr-1 h-5 w-5 text-white" />
      </button>
    </div>
    <div class="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0">
      <div v-if="exibir" class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
        <div class="relative grid gap-8 bg-white p-7">
          <a v-for="item in solutions" :key="item.name" :href="item.href"
            class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
              <div v-html="item.icon"></div>
            </div>
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-900">
                {{ item.name }}
              </p>
              <p class="text-sm text-gray-500">
                {{ item.description }}
              </p>
            </div>
          </a>
        </div>
        <div class="bg-gray-200 p-4">
          <a href="#"
            class="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50">
            <span class="flex items-center">
              <span class="text-sm font-medium text-gray-900">
                Documentation
              </span>
            </span>
            <span class="block text-sm text-gray-500">
              Start integrating products and tools
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    exibir: true,

    solutions: [
      {
        name: 'Insights',
        description: 'Measure actions your users take',
        href: '#',
        icon: `
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#D3D3D3" />
        <path
          d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
          stroke="#000"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
          stroke="#000"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
          stroke="#000"
          stroke-width="2"
        />
      </svg>
    `,
      },
      {
        name: 'Automations',
        description: 'Create your own targeted content',
        href: '#',
        icon: `
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#D3D3D3" />
        <path
          d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
          stroke="#000"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
          stroke="#000"
          stroke-width="2"
        />
      </svg>
    `,
      },
      {
        name: 'Reports',
        description: 'Keep track of your growth',
        href: '#',
        icon: `
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#D3D3D3" />
        <rect x="13" y="32" width="2" height="4" fill="#000" />
        <rect x="17" y="28" width="2" height="8" fill="#000" />
        <rect x="21" y="24" width="2" height="12" fill="#000" />
        <rect x="25" y="20" width="2" height="16" fill="#000" />
        <rect x="29" y="16" width="2" height="20" fill="#000" />
        <rect x="33" y="12" width="2" height="24" fill="#000" />
      </svg>
    `,
      },
    ]
  }),
  components: {
    Upside, UpSideMenu
  },
}
</script>

<script setup>
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import Upside from "./Upside.vue";
import UpSideMenu from "./UpSideMenu.vue";
document.title = "Popover - Training"
</script>

  