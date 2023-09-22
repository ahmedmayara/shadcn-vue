<script setup lang="ts">
import { cn } from "@/lib/utils";
</script>

<template>
  <th
    :class="
      cn(
        'h-10 whitespace-nowrap px-2 text-left align-middle text-sm font-medium text-muted-foreground',
        $attrs.class,
      )
    "
  >
    <slot />
  </th>
</template>
