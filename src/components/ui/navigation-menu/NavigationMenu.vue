<script setup lang="ts">
import {
  NavigationMenuRoot,
  NavigationMenuViewport,
  type NavigationMenuRootProps,
  type NavigationMenuRootEmits,
} from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<NavigationMenuRootProps & { class?: string }>();

const emits = defineEmits<NavigationMenuRootEmits>();
</script>

<template>
  <NavigationMenuRoot
    @update:model-value="emits('update:modelValue', $event)"
    v-bind="props"
    :class="cn('relative z-10 flex w-full justify-center', props.class)"
  >
    <slot />
    <div class="absolute top-full left-0 flex w-full justify-center">
      <NavigationMenuViewport
        :class="
          cn(
            'data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden bg-background rounded-lg border border-border shadow-md transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]',
            props.class,
          )
        "
      />
    </div>
  </NavigationMenuRoot>
</template>
