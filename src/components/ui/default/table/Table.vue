<script setup lang="ts">
import { cn } from "@/lib/utils";
</script>

<template>
  <div :class="cn('w-full overflow-auto', $attrs.class)">
    <table class="w-full caption-bottom">
      <slot />
    </table>
  </div>
</template>
