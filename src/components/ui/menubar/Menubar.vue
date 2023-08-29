<script setup lang="ts">
import {
  MenubarRoot,
  type MenubarRootProps,
  type MenubarRootEmits,
} from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<MenubarRootProps & { class?: string }>();

const emits = defineEmits<MenubarRootEmits>();
</script>

<template>
  <MenubarRoot
    v-bind="props"
    @update:model-value="emits('update:modelValue', $event)"
    :class="
      cn(
        'flex h-10 items-center space-x-1 rounded-md border border-border p-1',
        props.class,
      )
    "
  >
    <slot />
  </MenubarRoot>
</template>
