<template>
  <UContainer>

    <main class="min-h-screen">
      <AppHeader class="mb-8" title="Bookmarks" :description="description" />
      <ul class="space-y-2">
        <div v-for="category in Object.keys(categories)">
          {{ category }}
          <li v-for="bookmark in categories[category]" :key="bookmark.id">
            <a
              :href="bookmark.url"
              target="_blank"
              class="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-lg -m-2 text-sm min-w-0"
            >
              <UAvatar
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
        </div>
      </ul>
    </main>
  </UContainer>
</template>

<script setup>
useSeoMeta({
  description: "A collection of useful links.",
});

// https://www.themindfulword.org/law-of-reverse-effect

// https://biomejs.dev/recipes/continuous-integration/
// https://njal.la/domains/
// https://js.wiki/

// https://what3words.com/clip.apples.leap

const categories = {
  "Providing Chat Suport Resources":[
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
    },
    {
      id: 4,
      label: "take-a-screenshot",
      url: "https://www.take-a-screenshot.org",
    },
    {
      id: 5,
      label: "No ETAs",
      url: "https://inessential.com/2019/10/28/no_etas.html",
    }
  ],
  "Dev Resources":[
    {
      id: 1,
      label: "Free for Dev",
      url: "https://free-for.dev",
    },
    {
      id: 2,
      label: "Architecture Notes",
      url: "https://architecturenotes.co"
    },
    {
      id: 3,
      label: "Roadmap sh",
      url: "https://roadmap.sh"
    }
  ],
  "Discord Resources":[
    {
      id: 1,
      label: "Discord Lookup",
      url: "https://discordlookup.com",
    }
  ]
}

function getHost(url) {
  const parsedUrl = new URL(url);
  let host = parsedUrl.host;
  if (host.startsWith("www.")) {
    host = host.substring(4);
  }
  return host;
}
</script>
