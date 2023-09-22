<script setup lang="ts">
import { cn } from "@/lib/utils";
</script>

<template>
  <tfoot
    :class="cn('bg-primary font-medium text-primary-foreground', $attrs.class)"
  >
    <slot />
  </tfoot>
</template>
