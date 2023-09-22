<script setup lang="ts">
import { computed } from "vue";
import { cva } from "class-variance-authority";
import { Button } from "../button";
import { X } from "lucide-vue-next";

interface AlertProps {
  variant?: "primary" | "success" | "warning" | "destructive" | "info";
  dismissible?: boolean;
  show?: boolean;
}

const props = withDefaults(defineProps<AlertProps>(), {
  variant: "primary",
  dismissible: false,
  show: true,
});

const alertClass = computed(() => {
  return cva(
    "relative w-full rounded-lg p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4",
    {
      variants: {
        variant: {
          primary: "border border-border text-foreground",
          success:
            "border dark:border-green-600 dark:text-green-600 text-green-500 border-green-500",
          warning:
            "border dark:border-yellow-600 dark:text-yellow-600 text-yellow-500 border-yellow-500",
          destructive: "border border-destructive text-destructive",
          info: "border dark:border-blue-600 dark:text-blue-600 text-blue-500 border-blue-500",
        },
      },
    },
  )({
    variant: props.variant,
  });
});

const emits = defineEmits<{
  (e: "update:show", value: boolean): void;
  (e: "close"): void;
}>();

const show = computed({
  get() {
    return props.show;
  },
  set(value) {
    emits("update:show", value);
  },
});
</script>

<template>
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-in duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div :class="alertClass" role="alert" v-if="show">
      <Button
        variant="neutral"
        v-if="props.dismissible"
        class="absolute -right-0.5 top-1.5"
        @click="emits('close')"
      >
        <X
          class="h-4 w-4 text-muted transition-colors duration-300 ease-in-out"
        />
      </Button>
      <slot />
    </div>
  </Transition>
</template>
