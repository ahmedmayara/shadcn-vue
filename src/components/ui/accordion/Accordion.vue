<script setup lang="ts">
import {
  AccordionRoot,
  type AccordionRootProps,
  type AccordionRootEmits,
} from "radix-vue";

const props = defineProps<AccordionRootProps>();
</script>

<template>
  <AccordionRoot v-bind="props">
    <slot />
  </AccordionRoot>
</template>
