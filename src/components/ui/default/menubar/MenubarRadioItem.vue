<script setup lang="ts">
import {
  MenubarItemIndicator,
  MenubarRadioItem,
  type MenubarRadioItemEmits,
  type MenubarRadioItemProps,
} from "radix-vue";
import { cn } from "@/lib/utils";
import RiCheckboxBlankCircleFill from "~icons/ri/checkbox-blank-circle-fill";

const props = defineProps<MenubarRadioItemProps & { class?: string }>();

const emits = defineEmits<MenubarRadioItemEmits>();
</script>

<template>
  <MenubarRadioItem
    v-bind="props"
    :class="[
      cn(
        'relative flex cursor-default select-none items-center rounded-md py-1.5 pl-7 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[disabled]:opacity-50',
        props.class,
      ),
    ]"
    @select="emits('select', $event)"
  >
    <MenubarItemIndicator
      class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
    >
      <RiCheckboxBlankCircleFill class="h-2 w-2 fill-current" />
    </MenubarItemIndicator>

    <slot />
  </MenubarRadioItem>
</template>
