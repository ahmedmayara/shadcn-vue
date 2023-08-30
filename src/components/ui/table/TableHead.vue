<script setup lang="ts">
import { cn } from "@/lib/utils";

const props = defineProps({
  class: String,
});
</script>

<template>
  <th
    :class="
      cn(
        'h-12 px-4 text-left align-middle font-medium whitespace-nowrap text-sm text-muted-foreground',
        props.class,
      )
    "
  >
    <slot />
  </th>
</template>
