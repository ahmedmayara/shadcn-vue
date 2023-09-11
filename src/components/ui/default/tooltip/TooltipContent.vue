<script setup lang="ts">
import {
  TooltipContent,
  TooltipPortal,
  type TooltipContentProps,
  type TooltipContentEmits,
} from "radix-vue";
import { cn } from "@/lib/utils";

// Define the props and emits for the TooltipContent component
const props = withDefaults(defineProps<TooltipContentProps>(), {
  sideOffset: 4,
});

// Define the emits for the TooltipContent component
const emits = defineEmits<TooltipContentEmits>();
</script>

<template>
  <TooltipPortal>
    <TooltipContent
      v-bind="props"
      :class="
        cn(
          'z-50 overflow-hidden rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          $attrs.class,
        )
      "
    >
      <slot />
    </TooltipContent>
  </TooltipPortal>
</template>
