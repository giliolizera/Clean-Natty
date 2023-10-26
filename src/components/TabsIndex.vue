<template>
    <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white">
      <div class="w-full px-4 pt-16">
        <div class="mx-auto w-full max-w-md rounded-2xl border border-gray-200 dark:border-none dark:bg-slate-900 bg-gray-200 p-2">
          <div class="grid grid-flow-col justify-stretch space-x-1">
            <button v-for="(tab, index) in tabs" :key="index" @click="active = tab.id" type="button"
              :class="['rounded-lg px-4 py-2 text-center text-sm dark:text-white font-medium dark:hover:bg-white/[0.12] hover:bg-gray-100 focus:outline-none', active === tab.id ? 'dark:bg-white dark:text-zinc-950 bg-gray-300' : 'dark:bg-slate-900 bg-gray-200']"
              @keydown.prevent.right="dir()" @keydown.prevent.left="esq()">
              {{ tab.descricao }}
            </button>
          </div>
        </div>
      </div>
      <div class="text-slate-800 bg-white rounded dark:bg-slate-800 dark:text-white w-full pt-2">
        <div class="mx-auto w-full max-w-md rounded-2xl dark:bg-white bg-gray-100 dark:border-none border border-gray-200 px-5 relative">
          <div v-if="active === 1">
            <button v-for="(recent, index) in Recent" :key="index">
              <div class="pt-5">
                <h3 class="mt-1 text-sm font-medium leading-5 text-black">{{ recent.title }}</h3>
                <ul class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                  <li>{{ recent.date }}</li>
                  <span aria-hidden="true"> &middot; </span>
                  <li>{{ recent.commentCount }} comments</li>
                  <span aria-hidden="true"> &middot; </span>
                  <li>{{ recent.shareCount }} shares</li>
                </ul>
              </div>
            </button>
            <div class="py-3.5"></div>
          </div>
          <div v-if="active === 2">
            <button v-for="(popular, index) in Popular" :key="index">
              <div class="pt-5">
                <h3 class="mt-1 text-sm font-medium leading-5 text-black">{{ popular.title }}</h3>
                <ul class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                  <li>{{ popular.date }}</li>
                  <span aria-hidden="true"> &middot; </span>
                  <li>{{ popular.commentCount }} comments</li>
                  <span aria-hidden="true"> &middot; </span>
                  <li>{{ popular.shareCount }} shares</li>
                </ul>
              </div>
            </button>
            <div class="py-3.5"></div>
          </div>
          <div v-if="active === 3">
            <button v-for="(trending, index) in Trending" :key="index">
              <div class="pt-5">
                <h3 class="mt-1 text-sm font-medium leading-5 text-black">{{ trending.title }}</h3>
                <ul class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                  <li>{{ trending.date }}</li>
                  <span aria-hidden="true"> &middot; </span>
                  <li>{{ trending.commentCount }} comments</li>
                  <span aria-hidden="true"> &middot; </span>
                  <li>{{ trending.shareCount }} shares</li>
                </ul>
              </div>
            </button>
            <div class="py-3.5"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>  
  export default {
    data() {
      return {
        tabs: [
          {
            id: 1,
            descricao: 'Recent'
          },
          {
            id: 2,
            descricao: 'Popular'
          },
          {
            id: 3,
            descricao: 'Trending'
          }
        ],
        Recent: [
          {
            id: 1,
            title: "Does GTX 1060 6GB can run in 2023?",
            date: "6h ago",
            commentCount: 5,
            shareCount: 2,
          },
          {
            id: 2,
            title: "So you've bought a GTX... now what?",
            date: "2h ago",
            commentCount: 3,
            shareCount: 2,
          },
        ],
        Popular: [
          {
            id: 1,
            title: "Is Graphics Card accompanies an Processor?",
            date: "Out 07",
            commentCount: 29,
            shareCount: 16,
          },
          {
            id: 2,
            title: "The most innovative things happening in Ryzen",
            date: "Mai 14",
            commentCount: 24,
            shareCount: 12,
          },
        ],
        Trending: [
          {
            id: 1,
            title: "Ask Me Anything: 10 answers to your questions about PC",
            date: "4d ago",
            commentCount: 9,
            shareCount: 5,
          },
          {
            id: 2,
            title: "The worst advice we've ever heard about Intel ARC GPU",
            date: "1d ago",
            commentCount: 1,
            shareCount: 2,
          },
        ],
        active: 1
      };
    },
    methods: {
      dir() {
        if (this.active === 1) {
          this.active = 2
        }
        else if (this.active === 2) {
          this.active = 3
        }
        else if (this.active === 3) {
          this.active = 1
        }
      },
      esq() {
        if (this.active === 3) {
          this.active = 2
        }
        else if (this.active === 2) {
          this.active = 1
        }
        else if (this.active === 1) {
          this.active = 3
        }
      }
    },
  }
  </script>
