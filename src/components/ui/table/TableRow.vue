<script setup lang="ts">
import { cn } from "@/lib/utils";

const props = defineProps({
  class: String,
});
</script>

<template>
  <tr
    :class="
      cn(
        'border-b border-border transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted last:border-none',
        props.class,
      )
    "
  >
    <slot />
  </tr>
</template>
