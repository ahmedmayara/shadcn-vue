<script setup lang="ts">
import { cn } from "@/lib/utils";
import { type TableHTMLAttributes } from "vue";

interface Props extends /* @vue-ignore */ TableHTMLAttributes {}

const props = defineProps<Props>();
</script>

<template>
  <div :class="cn('w-full overflow-auto', $attrs.class)">
    <table class="w-full caption-bottom text-sm" v-bind="props">
      <slot />
    </table>
  </div>
</template>
