<script setup lang="ts">
import { computed } from "vue";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "primary" | "secondary" | "outline" | "destructive";
  as?: string;
  class?: string;
}

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: "primary",
  as: "span",
});

const badgeClass = computed(() => {
  return cva(
    "inline-flex items-center cursor-default text-xs font-semibold px-2.5 py-0.5 rounded-full transition-colors ease-in-out duration-300",
    {
      variants: {
        variant: {
          primary: "bg-primary text-primary-foreground",
          secondary: "bg-secondary text-foreground",
          outline: "border border-border text-foreground shadow-sm",
          destructive: "bg-destructive text-destructive-foreground",
        },
      },
    },
  )({
    variant: props.variant,
  });
});
</script>

<template>
  <component :is="props.as" :class="cn(badgeClass, props.class)">
    <slot />
  </component>
</template>
