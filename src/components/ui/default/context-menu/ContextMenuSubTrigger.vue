<script setup lang="ts">
import {
  ContextMenuSubTrigger,
  type ContextMenuSubTriggerProps,
} from "radix-vue";
import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-vue-next";

const props = defineProps<ContextMenuSubTriggerProps & { class?: string }>();
</script>

<template>
  <ContextMenuSubTrigger
    v-bind="props"
    :class="[
      cn(
        'flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[disabled]:opacity-50',
        props.class,
      ),
    ]"
  >
    <slot />
    <ChevronRightIcon class="ml-auto h-4 w-4" />
  </ContextMenuSubTrigger>
</template>
