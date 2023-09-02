<script setup lang="ts">
import { cn } from "@/lib/utils";
import { DialogDescription, type DialogDescriptionProps } from "radix-vue";

const props = defineProps<DialogDescriptionProps>();
</script>

<template>
  <DialogDescription
    :class="cn('text-sm text-muted-foreground', $attrs.class)"
    v-bind="props"
  >
    <slot />
  </DialogDescription>
</template>
