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
        'flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class,
      ),
    ]"
  >
    <slot />
  </ContextMenuItem>
</template>
