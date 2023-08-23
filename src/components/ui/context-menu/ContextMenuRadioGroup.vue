<script setup lang="ts">
import {
  ContextMenuRadioGroup,
  type ContextMenuRadioGroupProps,
  type ContextMenuRadioGroupEmits,
} from "radix-vue";

const props = defineProps<ContextMenuRadioGroupProps>();

const emits = defineEmits<ContextMenuRadioGroupEmits>();
</script>

<template>
  <ContextMenuRadioGroup
    v-bind="props"
    @update:model-value="emits('update:modelValue', $event)"
  >
    <slot />
  </ContextMenuRadioGroup>
</template>
