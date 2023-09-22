<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { TdHTMLAttributes } from "vue";

interface Props extends /* @vue-ignore */ TdHTMLAttributes {}

const props = defineProps<Props>();
</script>

<template>
  <td v-bind="props" :class="cn('p-2 align-middle', $attrs.class)">
    <slot />
  </td>
</template>
