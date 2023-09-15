<script setup lang="ts">
import { computed, provide } from "vue";
import { v4 as uuid } from "uuid";

interface FormFieldProps {
  id?: string;
  label?: string;
  required?: boolean;
  error?: string;
  helper?: string;
}

const props = withDefaults(defineProps<FormFieldProps>(), {
  id: uuid(),
});

const ariaDescribedBy = computed(() => {
  const ids = [];

  if (props.error) ids.push(`${props.id}-error`);
  if (props.helper) ids.push(`${props.id}-helper`);

  return ids.join(" ");
});

provide(
  "FormFieldContext",
  computed(() => {
    return {
      ...props,
      invalid: !!props.error,
      ariaDescribedBy: ariaDescribedBy.value,
    };
  }),
);
</script>

<template>
  <slot />
</template>
