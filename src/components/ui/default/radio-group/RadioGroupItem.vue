<script setup lang="ts">
import {
  RadioGroupItem,
  type RadioGroupItemProps,
  RadioGroupIndicator,
} from "radix-vue";
import { cn } from "@/lib/utils";
import RiCheckboxBlankCircleFill from "~icons/ri/checkbox-blank-circle-fill";

const props = defineProps<RadioGroupItemProps & { class?: string }>();
</script>

<template>
  <RadioGroupItem
    v-bind="props"
    :class="
      cn(
        'flex aspect-square h-4 w-4 cursor-pointer items-center justify-center rounded-full border border-primary disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
  >
    <RadioGroupIndicator
      :class="cn('flex items-center justify-center', props.class)"
    >
      <RiCheckboxBlankCircleFill class="h-2.5 w-2.5 text-foreground" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
