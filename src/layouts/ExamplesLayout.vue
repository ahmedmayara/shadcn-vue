<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
import { ArrowRight } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

interface Example {
  label: string;
  href: string;
}

const examples: Example[] = [
  {
    label: "Dashboard",
    href: "/examples/dashboard",
  },
  {
    label: "Cards",
    href: "/examples/cards",
  },
  {
    label: "Tasks",
    href: "/examples/tasks",
  },
  {
    label: "Playground",
    href: "/examples/playground",
  },
  {
    label: "Forms",
    href: "/examples/forms",
  },
  {
    label: "Music",
    href: "/examples/music",
  },
  {
    label: "Authentication",
    href: "/examples/authentication",
  },
];
</script>

<template>
  <MainLayout>
    <div class="max-w-8xl w-full mx-auto flex pt-10 px-4">
      <div>
        <h1
          class="text-6xl font-heading tracking-tight max-w-2xl font-extrabold my-4 text-foreground"
        >
          Explore the possibilities with shadcn-vue
        </h1>
        <p class="max-w-[650px] text-muted text-lg mt-4">
          Dashboard, forms, authentication, cards and more, all built with
          shadcn-vue. You can use these examples as a starting point for your
          own projects.
        </p>

        <div class="flex items-center space-x-2">
          <Button variant="primary" class="mt-6 h-9" as="RouterLink" to="/docs">
            Documentation
          </Button>
          <Button
            variant="outline"
            class="mt-6 h-9"
            as="RouterLink"
            to="/docs/components/accordion"
          >
            Components
          </Button>
        </div>
      </div>
    </div>

    <div class="max-w-8xl w-full mx-auto flex flex-col py-12 px-4">
      <div
        class="flex items-center justify-between mb-6 overflow-auto whitespace-nowrap"
      >
        <div class="space-x-8">
          <RouterLink
            :to="example.href"
            v-for="example in examples"
            :key="example.href"
            :class="
              $route.path === example.href
                ? 'font-semibold text-foreground border-b-2 border-primary'
                : 'font-medium text-muted'
            "
          >
            {{ example.label }}
          </RouterLink>
        </div>

        <Button variant="ghost" class="h-9" as="a" href="" target="_blank">
          View on GitHub
          <ArrowRight class="w-4 h-4 ml-2" />
        </Button>
      </div>
      <slot />
    </div>
  </MainLayout>
</template>
