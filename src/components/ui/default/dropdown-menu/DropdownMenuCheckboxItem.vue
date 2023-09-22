<script setup lang="ts">
import {
  DropdownMenuCheckboxItem,
  type DropdownMenuCheckboxItemProps,
  type DropdownMenuCheckboxItemEmits,
  DropdownMenuItemIndicator,
} from "radix-vue";
import { cn, useEmitAsProps } from "@/lib/utils";
import { CheckIcon } from "lucide-vue-next";

const props = defineProps<DropdownMenuCheckboxItemProps & { class?: string }>();

const emits = defineEmits<DropdownMenuCheckboxItemEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <DropdownMenuCheckboxItem
    v-bind="{ ...props, ...emitsAsProps }"
    :class="[
      cn(
        'relative flex cursor-default select-none items-center rounded-md py-1.5 pl-7 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[disabled]:opacity-50',
        props.class,
      ),
    ]"
  >
    <DropdownMenuItemIndicator
      class="absolute left-2 inline-flex h-3.5 w-3.5 items-center justify-center"
    >
      <CheckIcon />
    </DropdownMenuItemIndicator>
    <slot />
  </DropdownMenuCheckboxItem>
</template>
