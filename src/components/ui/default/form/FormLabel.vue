<script setup lang="ts">
import { inject } from "vue";
import { Label, type LabelProps } from "radix-vue";
import { cn } from "@/lib/utils";

interface FormLabelProps extends LabelProps {
  error?: boolean;
}

const props = defineProps<FormLabelProps>();

const formFieldContext = inject("FormFieldContext", props);
</script>

<template>
  <Label
    v-bind="props"
    :class="
      cn(
        'block text-sm tracking-tight font-medium text-foreground text-left',
        $attrs.class,
        formFieldContext.error && 'text-destructive',
      )
    "
  >
    <slot />
  </Label>
</template>
