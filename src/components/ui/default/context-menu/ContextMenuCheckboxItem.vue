<script setup lang="ts">
import {
  ContextMenuCheckboxItem,
  type ContextMenuCheckboxItemProps,
  type ContextMenuCheckboxItemEmits,
  ContextMenuItemIndicator,
} from "radix-vue";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-vue-next";

const props = defineProps<ContextMenuCheckboxItemProps & { class?: string }>();

const emits = defineEmits<ContextMenuCheckboxItemEmits>();
</script>

<template>
  <ContextMenuCheckboxItem
    @update:checked="emits('update:checked', $event)"
    v-bind="props"
    :class="[
      cn(
        'relative flex cursor-default select-none items-center rounded-md py-1.5 pl-7 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[disabled]:opacity-50',
        props.class,
      ),
    ]"
  >
    <ContextMenuItemIndicator
      class="absolute left-2 inline-flex h-3.5 w-3.5 items-center justify-center"
    >
      <CheckIcon />
    </ContextMenuItemIndicator>
    <slot />
  </ContextMenuCheckboxItem>
</template>
