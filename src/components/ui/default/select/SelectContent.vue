<script setup lang="ts">
import {
  SelectContent,
  SelectViewport,
  type SelectContentProps,
  SelectPortal,
} from "radix-vue";
import { cn } from "@/lib/utils";

const props = withDefaults(
  defineProps<SelectContentProps & { class?: string }>(),
  {
    position: "popper",
    sideOffset: 4,
    avoidCollisions: true,
  },
);
</script>

<template>
  <SelectPortal>
    <SelectContent
      v-bind="props"
      :class="
        cn(
          'relative z-50 min-w-[10rem] overflow-hidden rounded-md border border-border bg-background text-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          props.class,
        )
      "
    >
      <SelectViewport
        class="h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
      >
        <slot />
      </SelectViewport>
    </SelectContent>
  </SelectPortal>
</template>
