<script setup lang="ts">
import { cn } from "@/lib/utils";
</script>

<template>
  <th
    :class="
      cn(
        'h-12 whitespace-nowrap px-4 text-left align-middle text-sm font-medium text-muted-foreground',
        $attrs.class,
      )
    "
  >
    <slot />
  </th>
</template>
