<script setup lang="ts">
import { buttonVariants } from ".";
import { cn } from "@/lib/utils";

interface Props {
  /**
   * The variant of the button.
   @default "primary"
   */
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>["variant"];
  /**
   * The HTML element to render the button as.
   @default "button"
   */
  as?: string;
}

withDefaults(defineProps<Props>(), {
  as: "button",
});
</script>

<template>
  <component
    :is="as"
    :class="cn(buttonVariants({ variant }), $attrs.class ?? '')"
  >
    <slot />
  </component>
</template>
