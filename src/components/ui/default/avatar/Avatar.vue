<script setup lang="ts">
import { AvatarRoot } from "radix-vue";
import { avatarVariant } from "./index";
import { cn } from "@/lib/utils";

interface AvatarRootProps {
  /**
   * The size of the avatar.
   * @default "sm"
   */
  size?: NonNullable<Parameters<typeof avatarVariant>[0]>["size"];
  /**
   * The shape of the avatar.
   * @default "circle"
   */
  shape?: NonNullable<Parameters<typeof avatarVariant>[0]>["shape"];
}

const props = withDefaults(defineProps<AvatarRootProps>(), {
  size: "sm",
  shape: "circle",
});
</script>

<template>
  <AvatarRoot
    :class="
      cn(avatarVariant({ size: props.size, shape: props.shape }), $attrs.class)
    "
  >
    <slot />
  </AvatarRoot>
</template>
