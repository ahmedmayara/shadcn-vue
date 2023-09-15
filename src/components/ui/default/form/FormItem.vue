<script setup lang="ts">
import { cn } from "@/lib/utils";
</script>

<template>
  <div :class="cn('grid gap-2', $attrs.class)">
    <slot />
  </div>
</template>
