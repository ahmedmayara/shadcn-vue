<script setup lang="ts">
import {
  TooltipRoot,
  type TooltipRootProps,
  type TooltipRootEmits,
} from "radix-vue";

// Define the props and emits for the TooltipRoot component
const props = defineProps<TooltipRootProps>();

const emits = defineEmits<TooltipRootEmits>();
</script>

<template>
  <TooltipRoot v-bind="props">
    <slot />
  </TooltipRoot>
</template>
