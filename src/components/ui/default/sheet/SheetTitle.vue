<script setup lang="ts">
import { cn } from "@/lib/utils";
import { DialogTitle, type DialogTitleProps } from "radix-vue";

const props = defineProps<DialogTitleProps>();
</script>

<template>
  <DialogTitle
    :class="cn('text-lg font-semibold text-foreground', $attrs.class)"
    v-bind="props"
  >
    <slot />
  </DialogTitle>
</template>
