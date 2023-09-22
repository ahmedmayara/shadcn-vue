<script setup lang="ts">
import { cn } from "@/lib/utils";
</script>

<template>
  <tbody :class="cn('[&_tr:last-child]:border-0', $attrs.class)">
    <slot />
  </tbody>
</template>
