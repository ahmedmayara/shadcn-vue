<script setup lang="ts">
import {
  SelectItem,
  type SelectItemProps,
  SelectItemIndicator,
} from "radix-vue";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-vue-next";

const props = defineProps<SelectItemProps & { class?: string }>();
</script>

<template>
  <div class="flex items-center justify-between">
    <SelectItem
      v-bind="props"
      :class="
        cn(
          'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          props.class,
        )
      "
    >
      <SelectItemIndicator>
        <CheckIcon
          class="absolute right-2 top-2 h-4 w-4 items-center justify-center"
        />
      </SelectItemIndicator>
      <slot />
    </SelectItem>
  </div>
</template>
