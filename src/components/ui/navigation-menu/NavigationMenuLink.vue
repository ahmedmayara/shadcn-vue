<script setup lang="ts">
import {
  NavigationMenuLink,
  type NavigationMenuLinkProps,
  type NavigationMenuLinkEmits,
} from "radix-vue";

const props = defineProps<NavigationMenuLinkProps>();

const emits = defineEmits<NavigationMenuLinkEmits>();
</script>

<template>
  <NavigationMenuLink v-bind="props" @select="emits('select', $event)">
    <slot />
  </NavigationMenuLink>
</template>
