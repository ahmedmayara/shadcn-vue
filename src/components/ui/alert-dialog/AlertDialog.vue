<script setup lang="ts">
import {
  AlertDialogRoot,
  type AlertDialogProps,
  type AlertDialogEmits,
} from "radix-vue";
import { useEmitAsProps } from "@/lib/utils";

const props = defineProps<AlertDialogProps>();

const emits = defineEmits<AlertDialogEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <AlertDialogRoot v-bind="{ ...props, ...emitsAsProps }">
    <slot />
  </AlertDialogRoot>
</template>
