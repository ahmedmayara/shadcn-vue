<script setup lang="ts">
import { MenubarRoot, type MenubarRootProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<MenubarRootProps & { class?: string }>();
</script>

<template>
  <MenubarRoot
    v-bind="props"
    :class="
      cn(
        'flex h-10 items-center space-x-1 rounded-md border border-border p-1',
        props.class,
      )
    "
  >
    <slot />
  </MenubarRoot>
</template>
