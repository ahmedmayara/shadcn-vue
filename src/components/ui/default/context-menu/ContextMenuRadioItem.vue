<script setup lang="ts">
import {
  ContextMenuRadioItem,
  type ContextMenuRadioItemProps,
  type ContextMenuRadioItemEmits,
  ContextMenuItemIndicator,
} from "radix-vue";
import { cn } from "@/lib/utils";
import RiCheckboxBlankCircleFill from "~icons/ri/checkbox-blank-circle-fill";

const props = defineProps<ContextMenuRadioItemProps & { class?: string }>();

const emits = defineEmits<ContextMenuRadioItemEmits>();
</script>

<template>
  <ContextMenuRadioItem
    v-bind="props"
    @select="emits('select', $event)"
    :class="[
      cn(
        'relative flex cursor-default select-none items-center rounded-md py-1.5 pl-7 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[disabled]:opacity-50',
        props.class,
      ),
    ]"
  >
    <ContextMenuItemIndicator
      class="absolute left-2.5 inline-flex h-2 w-2 items-center justify-center"
    >
      <RiCheckboxBlankCircleFill class="text-foreground" />
    </ContextMenuItemIndicator>
    <slot />
  </ContextMenuRadioItem>
</template>
