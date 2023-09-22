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
          ? 'ring-2 !ring-destructive placeholder:!text-destructive'
          : '',
        cn(
          'w-full rounded-md border border-input bg-background p-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          props.class,
        ),
      ]"
    />
    <div class="pointer-events-none absolute right-4 top-4 flex items-center">
      <AlertTriangle class="h-4 w-4 text-destructive" v-if="props.invalid" />
    </div>
  </div>
  <p
    v-if="props.helperText && !props.invalid"
    class="gap-1 text-[13px] leading-5 text-muted"
  >
    {{ props.helperText }}
  </p>
</template>
