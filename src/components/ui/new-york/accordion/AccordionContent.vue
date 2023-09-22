<script setup lang="ts">
import { AccordionContent, type AccordionContentProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<AccordionContentProps & { class?: string }>();
</script>

<template>
  <AccordionContent
    v-bind="props"
    :class="
      cn(
        'overflow-hidden text-sm data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown',
        props.class,
      )
    "
  >
    <div class="pb-4 pt-0">
      <slot />
    </div>
  </AccordionContent>
</template>
