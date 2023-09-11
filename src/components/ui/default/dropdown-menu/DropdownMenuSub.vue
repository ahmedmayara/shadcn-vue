<script setup lang="ts">
import {
  DropdownMenuSub,
  type DropdownMenuSubProps,
  type DropdownMenuSubEmits,
} from "radix-vue";

const props = defineProps<DropdownMenuSubProps>();

const emits = defineEmits<DropdownMenuSubEmits>();
</script>

<template>
  <DropdownMenuSub v-bind="props" @update:open="emits('update:open', $event)">
    <slot />
  </DropdownMenuSub>
</template>
