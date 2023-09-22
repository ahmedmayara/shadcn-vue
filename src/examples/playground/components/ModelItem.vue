<script setup lang="ts">
import { ref } from "vue";
import { useMutationObserver } from "@vueuse/core";
import { type Model } from "../utils/data";

import { CommandItem } from "@/components/ui/default/command";

import CheckIcon from "~icons/radix-icons/check";
import { cn } from "@/lib/utils";

interface ModelItemProps {
  model: Model;
  isSelected: boolean;
  onSelect: () => void;
  onPeek: (model: Model) => void;
}

const props = defineProps<ModelItemProps>();

const modelItemRef = ref<HTMLDivElement | null>(null);

useMutationObserver(modelItemRef, (mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === "attributes") {
      if (mutation.attributeName === "aria-selected") {
        props.onPeek(props.model);
      }
    }
  }
});
</script>

<template>
  <CommandItem
    :key="model.id"
    @select="onSelect"
    class="aria-selected:bg-primary aria-selected:text-primary-foreground"
    :value="model.name"
  >
    {{ model.name }}

    <CheckIcon
      v-if="isSelected"
      :class="cn('ml-auto w-4 h-4', isSelected ? 'opacity-100' : 'opacity-0')"
    />
  </CommandItem>
</template>
