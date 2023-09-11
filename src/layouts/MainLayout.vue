<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useConfigStore } from "@/stores/config";
import { RouterLink } from "vue-router";
import { useDark, useToggle } from "@vueuse/core";
import { Button } from "@/components/ui/default/button";
import { Kbd } from "@/components/ui/default/kbd";
import RadixIconsGithubLogo from "~icons/radix-icons/github-logo";
import TablerBrandX from "~icons/tabler/brand-x";
import RadixIconsMoon from "~icons/radix-icons/moon";
import RadixIconsSun from "~icons/radix-icons/sun";
import LucidePanelRightOpen from "~icons/lucide/panel-right-open";
import LucideSearch from "~icons/lucide/search";

const configStore = useConfigStore();

const radius = computed(() => configStore.radius);

const theme = computed(() => configStore.theme);

const isDark = useDark();

// Whenever the component is mounted, update the document class list
onMounted(() => {
  document.documentElement.style.setProperty("--radius", radius.value + "rem");
  document.documentElement.classList.add(`theme-${theme.value}`);
});

if (localStorage.getItem("config")) {
  const config = JSON.parse(localStorage.getItem("config")!);
  configStore.setTheme(config.theme);
  configStore.setRadius(config.radius);
}

const toggleDark = useToggle(isDark);

const routes = [
  {
    name: "Documentation",
    path: "/docs",
  },
  {
    name: "Components",
    path: "/docs/components/accordion",
  },
  {
    name: "Themes",
    path: "/themes",
  },
  {
    name: "Examples",
    path: "/examples/dashboard",
  },
];

const pages = [
  {
    name: "Introduction",
    path: "/docs",
    group: "Getting Started",
  },
  {
    name: "Installation",
    path: "/docs/installation",
    group: "Getting Started",
  },
  {
    name: "CLI",
    path: "/docs/cli",
    group: "Getting Started",
  },
];

const links = [
  {
    name: "GitHub",
    href: "https://github.com/ahmedmayara",
    icon: RadixIconsGithubLogo,
  },
  {
    name: "X",
    href: "https://x.com/ahmeedmayara",
    icon: TablerBrandX,
  },
];
</script>
<template>
  <div class="flex min-h-screen flex-col bg-background">
    <header class="sticky z-40 top-0 bg-background border-b border-border">
      <div
        class="max-w-8xl flex h-[58px] items-center justify-between p-4 mx-auto"
      >
        <div class="flex gap-6 md:gap-8">
          <RouterLink to="/" class="text-md font-bold"> shadcn-vue </RouterLink>

          <nav
            class="hidden gap-6 md:flex justify-center items-center"
            v-for="route in routes"
            :key="route.name"
          >
            <RouterLink
              :to="route.path"
              class="text-muted-foreground text-sm font-medium dark:hover:text-gray-300 transition-colors"
              :class="{
                'font-semibold !text-foreground': $route.path === route.path,
              }"
            >
              {{ route.name }}
            </RouterLink>
          </nav>
          <nav class="hidden gap-6 md:flex justify-center items-center">
            <a
              href="https://github.com/ahmedmayara/shadcn-vue"
              target="_blank"
              class="text-muted-foreground text-sm font-medium dark:hover:text-gray-300 transition-colors"
            >
              Github
            </a>
          </nav>
        </div>

        <div class="md:flex flex-1 items-center justify-end space-x-4 hidden">
          <Button
            variant="outline"
            class="w-72 h-8 px-3 hidden lg:flex lg:justify-between lg:items-center"
          >
            <div class="flex items-center">
              <LucideSearch class="w-4 h-4 mr-2 text-muted-foreground" />
              <span class="text-muted-foreground">
                Search for anything...
              </span>
            </div>
            <div class="flex items-center gap-x-1">
              <Kbd> <span>⌘</span>K </Kbd>
            </div>
          </Button>

          <div
            class="flex items-center space-x-1"
            v-for="link in links"
            :key="link.name"
          >
            <a :href="link.href" target="_blank" class="text-foreground">
              <component :is="link.icon" class="w-5 h-5" />
            </a>
          </div>

          <button
            class="flex items-center justify-center"
            aria-label="Toggle dark mode"
            @click="toggleDark()"
          >
            <component
              :is="isDark ? RadixIconsSun : RadixIconsMoon"
              class="w-5 h-5 text-foreground"
            />
          </button>

          <button class="flex md:hidden items-center justify-center">
            <LucidePanelRightOpen class="w-5 h-5 text-foreground" />
          </button>
        </div>
        <button class="flex md:hidden items-center justify-center">
          <LucidePanelRightOpen class="w-5 h-5 text-foreground" />
        </button>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="bg-background z-40 border-t border-border text-foreground">
      <div class="max-w-8xl h-20 flex items-center justify-between p-4 mx-auto">
        <div class="flex justify-center items-center">
          <span class="text-sm">
            Built and designed by {{ " " }}
            <a
              href="https://twitter.com/shadcn"
              target="_blank"
              class="underline underline-offset-4 font-bold decoration-foreground"
            >
              shadcn
            </a>
          </span>
          <span class="text-sm ml-0.5"> . </span>
          <span class="text-sm ml-2">
            Ported to Vue by {{ " " }}
            <a
              href="https://twitter.com/ahmeedmayara"
              target="_blank"
              class="underline underline-offset-4 font-bold decoration-foreground"
            >
              ahmedmayara
            </a>
          </span>
          <span class="text-sm ml-0.5"> . </span>
          <span class="text-sm ml-2">
            The code source is available on {{ " " }}
            <a
              href="https://github.com/ahmedmayara/shadcn-vue"
              target="_blank"
              class="underline underline-offset-4 font-bold decoration-foreground"
            >
              GitHub
            </a>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>
