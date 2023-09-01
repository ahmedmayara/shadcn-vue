<script setup lang="ts">
import { MenubarMenu, type MenubarMenuProps } from "radix-vue";

const props = defineProps<MenubarMenuProps>();
</script>

<template>
  <MenubarMenu>
    <slot />
  </MenubarMenu>
</template>
