<script setup lang="ts">
import {
  HoverCardPortal,
  HoverCardContent,
  type HoverCardContentProps,
} from "radix-vue";
import { cn } from "@/lib/utils";

const props = withDefaults(defineProps<HoverCardContentProps>(), {
  sideOffset: 4,
  avoidCollisions: true,
});
</script>

<template>
  <HoverCardPortal>
    <HoverCardContent
      v-bind="props"
      :class="
        cn(
          'z-50 w-64 rounded-md border border-border bg-background p-4 text-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          $attrs.class,
        )
      "
    >
      <slot />
    </HoverCardContent>
  </HoverCardPortal>
</template>
