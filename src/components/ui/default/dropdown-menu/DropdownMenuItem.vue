<script setup lang="ts">
import { DropdownMenuItem, type DropdownMenuItemProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<DropdownMenuItemProps & { class?: string }>();
</script>

<template>
  <DropdownMenuItem
    v-bind="props"
    :class="[
      cn(
        'flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class,
      ),
    ]"
  >
    <slot />
  </DropdownMenuItem>
</template>
