<script setup lang="ts">
import { cn } from "@/lib/utils";
</script>

<template>
  <tr
    :class="
      cn(
        'border-b border-border transition-colors last:border-none hover:bg-muted/50 data-[state=selected]:bg-muted',
        $attrs.class,
      )
    "
  >
    <slot />
  </tr>
</template>
