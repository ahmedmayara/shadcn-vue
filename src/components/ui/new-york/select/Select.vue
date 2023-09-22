<script setup lang="ts">
import {
  SelectRoot,
  type SelectRootProps,
  type SelectRootEmits,
} from "radix-vue";
import { useEmitAsProps } from "@/lib/utils";

const props = defineProps<SelectRootProps>();

const emits = defineEmits<SelectRootEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <SelectRoot v-bind="{ ...props, ...emitsAsProps }">
    <slot />
  </SelectRoot>
</template>
