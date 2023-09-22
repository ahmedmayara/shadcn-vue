<script setup lang="ts">
import {
  DropdownMenuItemIndicator,
  DropdownMenuRadioItem,
  type DropdownMenuRadioItemEmits,
  type DropdownMenuRadioItemProps,
} from "radix-vue";
import DotFilledIcon from "~icons/radix-icons/dot-filled";
import { cn, useEmitAsProps } from "@/lib/utils";

const props = defineProps<DropdownMenuRadioItemProps & { class?: string }>();

const emits = defineEmits<DropdownMenuRadioItemEmits>();
</script>

<template>
  <DropdownMenuRadioItem
    v-bind="{ ...props, ...useEmitAsProps(emits) }"
    :class="
      cn(
        'relative flex cursor-default select-none items-center rounded-md py-1.5 pl-7 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[disabled]:opacity-50',
        props.class,
      )
    "
  >
    <span
      className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
    >
      <DropdownMenuItemIndicator>
        <DotFilledIcon class="h-4 w-4 fill-current" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuRadioItem>
</template>
