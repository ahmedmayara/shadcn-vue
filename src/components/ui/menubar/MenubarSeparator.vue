<script setup lang="ts">
import { MenubarSeparator, type MenubarSeparatorProps } from "radix-vue";

const props = defineProps<MenubarSeparatorProps>();
</script>

<template>
  <MenubarSeparator class="-mx-1 my-1 h-px bg-border" v-bind="props" />
</template>
