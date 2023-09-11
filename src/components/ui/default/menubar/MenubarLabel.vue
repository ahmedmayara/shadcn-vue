<script setup lang="ts">
import { MenubarLabel, type MenubarLabelProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<MenubarLabelProps & { inset?: boolean }>();
</script>

<template>
  <div class="px-2 py-1" :class="{ 'pl-7': props.inset }">
    <MenubarLabel
      v-bind="props"
      :class="cn('text-sm font-semibold text-foreground', $attrs.class)"
    >
      <slot />
    </MenubarLabel>
  </div>
</template>
