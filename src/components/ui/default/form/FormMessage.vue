<script setup lang="ts">
import { inject, computed } from "vue";
import { v4 as uuid } from "uuid";
import { cn } from "@/lib/utils";

interface FormMessageProps {
  id: string;
  errors?: string[];
}

const props = withDefaults(defineProps<FormMessageProps>(), {
  id: uuid(),
});

const formFieldContext = inject("FormFieldContext", props);

const ariaDescribedBy = computed(() => {
  const ids = [];

  if (props.errors) ids.push(`${props.id}-error`);

  return ids.join(" ");
});
</script>

<template>
  <span
    class="block text-[13px] font-medium text-destructive text-left"
    :id="props.id"
    :aria-describedby="ariaDescribedBy"
    v-for="error in props.errors"
  >
    {{ error }}
  </span>
</template>
