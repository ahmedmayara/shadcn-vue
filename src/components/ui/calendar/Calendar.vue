<script setup lang="ts">
import { useDark } from "@vueuse/core";
import { Calendar } from "v-calendar";
import "v-calendar/style.css";

const isDark = useDark();
</script>

<template>
  <Calendar :is-dark="isDark" borderless trim-weeks expanded />
</template>

<style>
:root {
  --vc-font-family: "Inter", sans-serif;
  --vc-rounded-full: var(--radius);
  --vc-font-bold: 500;
  --vc-font-semibold: 600;
  --vc-text-lg: 14px;
}

.vc-light,
.vc-dark {
  --vc-bg: hsl(var(--background));
  --vc-border: hsl(var(--border));
  --vc-focus-ring: 0 0 0 3px hsl(var(--primary) / 30%);
  --vc-weekday-color: hsl(var(--muted-foreground));
  --vc-popover-content-color: hsl(var(--muted-foreground));
  --vc-popover-content-bg: hsl(var(--background));
  --vc-popover-content-border: hsl(var(--border));

  &.vc-attr,
  & .vc-attr {
    --vc-content-color: hsl(var(--primary));
    --vc-highlight-outline-bg: hsl(var(--primary));
    --vc-highlight-outline-border: hsl(var(--primary));
    --vc-highlight-outline-content-color: hsl(var(--primary-foreground));
    --vc-highlight-light-bg: var(
      --vc-accent-200
    ); /* Highlighted color between two dates */
    --vc-highlight-light-content-color: hsl(var(--secondary-foreground));
    --vc-highlight-solid-bg: hsl(var(--primary));
    --vc-highlight-solid-content-color: hsl(var(--primary-foreground));
    --vc-dot-bg: hsl(var(--primary));
    --vc-bar-bg: hsl(var(--primary));
  }
}

.vc-blue {
  --vc-accent-200: hsl(var(--primary) / 10%);
  --vc-accent-400: hsl(var(--primary));
  --vc-accent-500: hsl(var(--primary));
  --vc-accent-600: hsl(var(--primary));
}

.dark {
  .vc-blue {
    --vc-accent-200: hsl(var(--primary) / 10%);
    --vc-accent-400: hsl(var(--primary));
    --vc-accent-500: hsl(var(--primary));
  }
}
</style>
