<template>
  <main class="min-h-screen">
    <AppHeader class="mb-8" title="Bookmarks" :description="description" />
    <ul class="space-y-2">
      <li v-for="bookmark in bookmarks" :key="bookmark.id">
        <a
          :href="bookmark.url"
          target="_blank"
          class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
        >
          <UAvatar
            :src="getThumbnail(bookmark.url)"
            :alt="bookmark.label"
            :ui="{ rounded: 'rounded-md' }"
          />
          <p class="truncate text-gray-700 dark:text-gray-200">
            {{ bookmark.label }}
          </p>
          <span class="flex-1"></span>
          <span class="text-xs font-medium text-gray-400 dark:text-gray-600">
            {{ getHost(bookmark.url) }}
          </span>
        </a>
      </li>
    </ul>
  </main>
</template>

<script setup>
// const description =
//   "Awesome things I've found on the internet. This page is still WIP, I want to add search like bmrks.com";
// useSeoMeta({
//   title: "Bookmarks | numselli",
//   description,
// });

// https://www.themindfulword.org/law-of-reverse-effect
// https://www.take-a-screenshot.org/
// https://inessential.com/2019/10/28/no_etas.html
// https://alexthunder.livejournal.com/309815.html

// https://free-for.dev/#/
// https://bunny.net/
// https://www.youtube.com/watch?app=desktop&v=rIENo7tAMxk
// https://statusbadges.me/

// https://discordlookup.com/
// https://biomejs.dev/recipes/continuous-integration/
// https://discordlookup.com/snowflake-distance
// https://njal.la/domains/
// https://js.wiki/

// https://architecturenotes.co/
// https://what3words.com/clip.apples.leap
const categories = {
  "h":[
    {
      id: 1,
      label: "Dont Ask to Ask",
      url: "https://dontasktoask.com",
    },
    {
      id: 2,
      label: "Try it and See",
      url: "https://tryitands.ee",
    },
    {
      id: 3,
      label: "No Hello",
      url: "https://nohello.net",
    }
  ]

}
const bookmarks = [
  {
    id: 1,
    label: "Adam Wathan - Tailwind CSS Best Practice Patterns",
    url: "https://www.youtube.com/watch?v=J_7_mnFSLDg",
  }
  // {
  //   id: 2,
  //   label: "Dicebear Awesome avatars",
  //   url: "https://www.dicebear.com/",
  // },
  // {
  //   id: 3,
  //   label: "Circuit design stock image",
  //   url: "https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2873&q=80",
  // },
  // {
  //   id: 5,
  //   label: "3D device mockups",
  //   url: "https://deviceframes.com/",
  // },
  // {
  //   id: 7,
  //   label: "Octupos Illustration",
  //   url: "https://refine.new/",
  // },
  // {
  //   id: 9,
  //   label: "Tines - Beautiful landing page",
  //   url: "https://www.tines.com/product",
  // },
  // {
  //   id: 12,
  //   label: "REQRES Mock apis for testing",
  //   url: "https://reqres.in/",
  // },
  // {
  //   id: 13,
  //   label: "Haikie - SVG background generator",
  //   url: "https://app.haikei.app/",
  // },
  // {
  //   id: 15,
  //   label: "Rakko Tools",
  //   url: "https://en.rakko.tools/",
  // },
];

function getHost(url) {
  const parsedUrl = new URL(url);
  let host = parsedUrl.host;
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  return host;
}

function getThumbnail(url) {
  const host = getHost(url);
  return `https://logo.clearbit.com/${host}`;
}
</script>
