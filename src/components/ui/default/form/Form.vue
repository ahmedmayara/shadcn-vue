<script setup lang="ts">
import type { FormHTMLAttributes } from "vue";
import * as z from "zod";
import { cn } from "@/lib/utils";

interface FormProps extends /* @vue-ignore */ FormHTMLAttributes {
  onSubmit?: () => void;
  validationSchema?: z.ZodObject<any>;
}

const props = defineProps<FormProps>();
</script>

<template>
  <form
    v-bind="props"
    :class="cn('space-y-6', $attrs.class)"
    @submit.prevent="props.onSubmit"
  >
    <slot />
  </form>
</template>
