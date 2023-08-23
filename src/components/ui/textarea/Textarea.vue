<script setup lang="ts">
import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-vue-next";

interface InputProps {
  id?: string;
  value?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  helperText?: string;
  class?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  id: "",
  value: "",
  rows: 3,
  placeholder: "",
  required: false,
  disabled: false,
  invalid: false,
  helperText: "",
});

const emit = defineEmits(["update:value"]);

function handleInput(event: Event) {
  emit("update:value", (event.target as HTMLInputElement).value);
}
</script>

<template>
  <div :class="cn('relative', props.class)">
    <textarea
      :id="props.id"
      :value="props.value"
      :rows="props.rows"
      :required="props.required"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      @input="handleInput"
      :class="[
        props.invalid
          ? '!ring-destructive ring-2 placeholder:!text-destructive'
          : '',
        cn(
          'py-3 px-4 block bg-transparent outline-none focus:ring-2 focus:ring-accent w-full ring-1 ring-secondary placeholder:text-muted rounded-md text-sm text-foreground',
          props.class,
        ),
      ]"
    />
    <div
      class="absolute inset-y-0 right-0 bottom-6 flex items-center pr-3 pointer-events-none"
    >
      <AlertTriangle class="w-4 h-4 text-destructive" v-if="props.invalid" />
    </div>
  </div>
  <p
    v-if="props.helperText && !props.invalid"
    class="gap-1 leading-5 text-[13px] text-muted"
  >
    {{ props.helperText }}
  </p>
</template>
