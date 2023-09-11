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
        'flex relative items-center rounded-md transition-colors data-[disabled]:opacity-50 data-[disabled]:pointer-events-none data-[highlighted]:bg-accent pl-7 py-1.5 text-sm outline-none select-none cursor-default',
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
