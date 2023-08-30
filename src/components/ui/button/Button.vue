<script setup lang="ts">
import { computed } from "vue";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface ButtonProps {
  class?: string;
  variant?:
    | "primary"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"
    | "neutral";
  disabled?: boolean | undefined;
  as?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: "primary",
  disabled: false,
  as: "button",
});

const buttonClass = computed(() => {
  return cva(
    "inline-flex items-center justify-center text-sm px-4 py-2.5 rounded-md font-medium transition-colors ease-in-out duration-300",
    {
      variants: {
        variant: {
          primary:
            "bg-primary text-primary-foreground enabled:hover:bg-primary/90",
          secondary:
            "bg-secondary text-secondary-foreground enabled:hover:bg-secondary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
          neutral: "",
        },
        disabled: {
          true: "!opacity-50 !cursor-not-allowed",
        },
      },
    },
  )({
    variant: props.variant,
    disabled: props.disabled,
  });
});
</script>

<template>
  <component
    :class="cn(buttonClass, props.class)"
    :disabled="props.disabled"
    :is="props.as"
  >
    <slot />
  </component>
</template>
