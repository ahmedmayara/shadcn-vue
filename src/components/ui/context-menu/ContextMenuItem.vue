<script setup lang="ts">
import {
  ContextMenuItem,
  type ContextMenuItemProps,
  type ContextMenuItemEmits,
} from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<ContextMenuItemProps & { class?: string }>();

const emits = defineEmits<ContextMenuItemEmits>();
</script>

<template>
  <ContextMenuItem
    v-bind="props"
    @select="emits('select', $event)"
    :class="[
      cn(
        'flex items-center rounded-md transition-colors data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:bg-accent px-2 py-1.5 text-sm outline-none select-none cursor-default',
        props.class,
      ),
    ]"
  >
    <slot />
  </ContextMenuItem>
</template>
