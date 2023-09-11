<script setup lang="ts">
import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-vue-next";

interface InputProps {
  id?: string;
  value?: string | number;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  helperText?: string;
}

const props = withDefaults(defineProps<InputProps>(), {
  id: "",
  value: "",
  type: "text",
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
  <div :class="cn('relative', $attrs.class)">
    <input
      :id="props.id"
      :value="props.value"
      :type="props.type"
      :required="props.required"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      @input="handleInput"
      :class="[
        props.invalid
          ? '!ring-destructive ring-2 placeholder:!text-destructive'
          : '',
        props.disabled ? 'cursor-not-allowed opacity-50' : '',
        cn(
          'flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          $attrs.class,
        ),
      ]"
    />
    <div
      class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
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
