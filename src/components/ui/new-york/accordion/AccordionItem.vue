<script setup lang="ts">
import { AccordionItem, type AccordionItemProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<AccordionItemProps>();
</script>

<template>
  <AccordionItem
    v-bind="props"
    :class="cn('border-b border-border', $attrs.class)"
  >
    <slot />
  </AccordionItem>
</template>
