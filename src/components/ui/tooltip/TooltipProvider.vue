<script setup lang="ts">
import { TooltipProvider, type TooltipProviderProps } from "radix-vue";

// Define the props for the TooltipProvider component
const props = defineProps<TooltipProviderProps>();
</script>

<template>
  <TooltipProvider v-bind="props">
    <slot />
  </TooltipProvider>
</template>
