<script setup lang="ts">
import {
  DropdownMenuRoot,
  type DropdownMenuRootProps,
  type DropdownMenuRootEmits,
} from "radix-vue";
import { useEmitAsProps } from "@/lib/utils";

const props = defineProps<DropdownMenuRootProps>();

const emits = defineEmits<DropdownMenuRootEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <DropdownMenuRoot v-bind="{ ...props, ...emitsAsProps }">
    <slot />
  </DropdownMenuRoot>
</template>
