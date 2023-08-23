<script setup lang="ts">
import { ArrowLeft } from "lucide-vue-next";

interface DocsPreviousProps {
  title: string;
  description: string;
  to: string;
}

const props = defineProps<DocsPreviousProps>();
</script>

<template>
  <RouterLink
    class="group rounded-lg border border-border p-4 text-left transition-colors hover:border-primary lg:p-6"
    :to="props.to"
  >
    <div
      class="flex h-10 w-10 items-center justify-center rounded-full border border-border transition group-hover:border-primary group-hover:bg-primary"
    >
      <ArrowLeft
        class="w-5 h-5 text-foreground group-hover:text-background transition"
      />
    </div>

    <p class="mt-5 font-semibold">
      {{ props.title }}
    </p>
    <span class="mt-1 text-sm text-muted">
      {{ props.description }}
    </span>
  </RouterLink>
</template>
