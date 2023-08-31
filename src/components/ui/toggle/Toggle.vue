<script setup lang="ts">
import { Toggle, type ToggleProps, type ToggleEmits } from "radix-vue";
import { cn } from "@/lib/utils";
import { computed } from "vue";
import { cva } from "class-variance-authority";

interface ModifiedToggleProps extends ToggleProps {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  class?: string;
}

const props = withDefaults(defineProps<ModifiedToggleProps>(), {
  variant: "default",
  size: "default",
});

const emits = defineEmits<ToggleEmits>();

const toggleClass = computed(() => {
  return cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
    {
      variants: {
        variant: {
          default: "bg-transparent",
          outline:
            "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        },
        size: {
          default: "h-10 px-3",
          sm: "h-9 px-2.5",
          lg: "h-11 px-5",
        },
      },
    },
  )({
    variant: props.variant,
    size: props.size,
  });
});
</script>

<template>
  <Toggle
    v-bind="props"
    @update:pressed="emits('update:pressed', $event)"
    :class="cn(toggleClass, props.class)"
  >
    <slot />
  </Toggle>
</template>
