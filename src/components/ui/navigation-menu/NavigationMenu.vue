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
    :class="
      cn(
        'relative z-10 flex max-w-max flex-1 items-center justify-center',
        props.class,
      )
    "
  >
    <slot />
    <div class="absolute left-0 top-full flex justify-center">
      <NavigationMenuViewport
        :class="
          cn(
            'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border border-border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
            props.class,
          )
        "
      />
    </div>
  </NavigationMenuRoot>
</template>
