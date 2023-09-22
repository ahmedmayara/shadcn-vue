<script setup lang="ts">
import {
  AccordionTrigger,
  type AccordionTriggerProps,
  AccordionHeader,
} from "radix-vue";
import { ChevronDown } from "lucide-vue-next";
import { cn } from "@/lib/utils";

const props = defineProps<AccordionTriggerProps & { class?: string }>();
</script>

<template>
  <AccordionHeader class="flex" as="div">
    <AccordionTrigger
      v-bind="props"
      :class="
        cn(
          'group flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline',
          props.class,
        )
      "
    >
      <slot />
      <ChevronDown
        class="h-4 w-4 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
      />
    </AccordionTrigger>
  </AccordionHeader>
</template>
