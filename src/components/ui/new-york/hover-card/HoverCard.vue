<script setup lang="ts">
import {
  HoverCardRoot,
  type HoverCardRootProps,
  type HoverCardRootEmits,
} from "radix-vue";
import { useEmitAsProps } from "@/lib/utils";

const props = defineProps<HoverCardRootProps>();

const emits = defineEmits<HoverCardRootEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <HoverCardRoot v-bind="{ ...props, ...emitsAsProps }">
    <slot />
  </HoverCardRoot>
</template>
