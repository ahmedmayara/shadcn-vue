<script setup lang="ts">
import {
  DropdownMenuPortal,
  DropdownMenuSubContent,
  type DropdownMenuSubContentProps,
  type DropdownMenuSubContentEmits,
} from "radix-vue";
import { cn, useEmitAsProps } from "@/lib/utils";

const props = withDefaults(defineProps<DropdownMenuSubContentProps>(), {
  avoidCollisions: true,
});

const emits = defineEmits<DropdownMenuSubContentEmits>();

const emitsAsProps = useEmitAsProps(emits);
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuSubContent
      v-bind="{ ...props, ...emitsAsProps }"
      :class="
        cn(
          'z-50 min-w-[10rem] rounded-md border border-border bg-background p-1 text-foreground shadow-md outline-none focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          $attrs.class,
        )
      "
    >
      <slot />
    </DropdownMenuSubContent>
  </DropdownMenuPortal>
</template>
