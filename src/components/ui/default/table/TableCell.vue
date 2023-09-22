<script setup lang="ts">
import { cn } from "@/lib/utils";
</script>

<template>
  <td
    :class="
      cn(
        'whitespace-nowrap p-4 align-middle text-sm text-foreground',
        $attrs.class,
      )
    "
  >
    <slot />
  </td>
</template>
