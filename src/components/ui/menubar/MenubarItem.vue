<script setup lang="ts">
import {
  MenubarItem,
  type MenubarItemProps,
  type MenubarItemEmits,
} from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<MenubarItemProps & { class?: string }>();

const emits = defineEmits<MenubarItemEmits>();
</script>

<template>
  <MenubarItem
    v-bind="props"
    @select="emits('select', $event)"
    :class="[
      cn(
        'flex items-center rounded-md transition-colors data-[disabled]:opacity-50 data-[disabled]:pointer-events-none focus:bg-outline-hover px-2 py-1.5 text-sm outline-none select-none cursor-default',
        props.class,
      ),
    ]"
  >
    <slot />
  </MenubarItem>
</template>
