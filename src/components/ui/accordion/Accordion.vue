<script setup lang="ts">
import {
  AccordionRoot,
  type AccordionRootProps,
  type AccordionRootEmits,
} from "radix-vue";
import { useEmitAsProps } from "@/lib/utils";

const props = defineProps<AccordionRootProps>();

const emits = defineEmits<AccordionRootEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <AccordionRoot v-bind="{ ...props, ...emitsAsProps }">
    <slot />
  </AccordionRoot>
</template>
