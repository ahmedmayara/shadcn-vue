<script setup lang="ts">
import { ScrollArea } from "@/components/ui/scroll-area";
import MainLayout from "./MainLayout.vue";
import components from "@/lib/data/components";

interface Documentation {
  name: string;
  href: string;
}

const docs: Documentation[] = [
  {
    name: "Introduction",
    href: "/docs",
  },
  {
    name: "Installation",
    href: "/docs/installation",
  },
  {
    name: "Theming",
    href: "/docs/theming",
  },
  {
    name: "Dark Mode",
    href: "/docs/dark-mode",
  },
  {
    name: "CLI",
    href: "/docs/cli",
  },
  {
    name: "About",
    href: "/docs/about",
  },
];
</script>

<template>
  <MainLayout>
    <div class="flex w-full max-w-8xl mx-auto px-4 gap-10">
      <div
        class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 md:sticky md:block"
      >
        <ScrollArea class="py-6 h-full pr-6 lg:py-8">
          <div class="w-full">
            <div class="pb-4">
              <h4
                class="mb-1 rounded-md py-1 text-sm font-semibold text-foreground"
              >
                Getting Started
              </h4>

              <div
                class="grid grid-flow-row auto-rows-max text-sm"
                v-for="doc in docs"
              >
                <RouterLink
                  :to="doc.href"
                  class="text-muted hover:underline py-1.5 font-medium transition-colors"
                  :class="{
                    '!font-semibold !text-foreground': $route.path === doc.href,
                  }"
                >
                  {{ doc.name }}
                </RouterLink>
              </div>
            </div>

            <div class="pb-4">
              <h4
                class="mb-1 rounded-md py-1 text-sm font-semibold text-foreground"
              >
                Components
              </h4>

              <div
                class="grid grid-flow-row auto-rows-max text-sm"
                v-for="component in components"
                :key="component.attributes.slug"
              >
                <RouterLink
                  :to="`/docs/components/${component.attributes.slug}`"
                  class="text-muted hover:underline py-1.5 font-medium transition-colors"
                  :class="{
                    '!font-semibold !text-foreground':
                      $route.path ===
                      `/docs/components/${component.attributes.slug}`,
                  }"
                >
                  {{ component.attributes.name }}
                </RouterLink>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>

      <main class="relative flex-grow py-6 lg:gap-10 lg:py-7 w-full max-w-3xl">
        <slot />
      </main>
    </div>
  </MainLayout>
</template>
