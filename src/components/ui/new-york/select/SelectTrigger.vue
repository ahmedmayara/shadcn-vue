<script setup lang="ts">
import { SelectTrigger, type SelectTriggerProps } from "radix-vue";
import { cn } from "@/lib/utils";
import ChevronDownIcon from "~icons/radix-icons/chevron-down";

const props = withDefaults(
  defineProps<SelectTriggerProps & { class?: string; invalid?: boolean }>(),
  {
    class: "",
    invalid: false,
  },
);
</script>

<template>
  <SelectTrigger
    v-bind="props"
    :class="[
      cn(
        'flex h-9 w-full items-center justify-between rounded-md border border-border bg-transparent px-3 py-2 text-sm text-foreground shadow-sm transition-colors duration-300 ease-in-out placeholder:text-muted hover:bg-accent focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      ),
      props.invalid
        ? 'ring-2 !ring-destructive placeholder:!text-destructive'
        : '',
    ]"
  >
    <slot />
    <ChevronDownIcon class="h-4 w-4 opacity-50" />
  </SelectTrigger>
</template>
