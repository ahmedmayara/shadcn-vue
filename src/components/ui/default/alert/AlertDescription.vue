<script setup lang="ts">
import { cn } from "@/lib/utils";

const props = defineProps({
  class: String,
});
</script>

<template>
  <div :class="cn('text-left text-sm leading-relaxed', props.class)">
    <slot />
  </div>
</template>
