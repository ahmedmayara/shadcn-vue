<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next";

interface BreadCrumbItemProps {
  path?: string;
  lastItem?: boolean;
  as?: string | object;
}

const props = withDefaults(defineProps<BreadCrumbItemProps>(), {
  as: "span",
});
</script>

<template>
  <li class="text-sm text-muted-foreground">
    <component
      :is="props.as"
      :to="props.path"
      class="flex items-center"
      :class="{
        '!font-semibold !text-foreground': $route.path === props.path,
      }"
    >
      <slot />
      <ChevronRight
        class="flex-shrink-0 h-3 w-3 text-muted-foreground mx-2"
        v-if="!props.lastItem"
      />
    </component>
  </li>
</template>
