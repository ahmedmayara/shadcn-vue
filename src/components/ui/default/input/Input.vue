<script setup lang="ts">
import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-vue-next";
import { inject } from "vue";

interface InputProps {
  id?: string;
  value?: string | number;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  helperText?: string;
  class?: string;
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

const formFieldContext = inject("FormFieldContext", props);
</script>

<template>
  <div :class="cn('relative', props.class)">
    <input
      :id="props.id"
      :value="props.value"
      :type="props.type"
      :required="formFieldContext.required"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      @input="handleInput"
      :class="[
        formFieldContext.invalid
          ? 'ring-2 !ring-destructive placeholder:!text-destructive'
          : '',
        props.disabled ? 'cursor-not-allowed opacity-50' : '',
        cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          props.class,
        ),
      ]"
    />
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
    >
      <AlertTriangle
        class="h-4 w-4 text-destructive"
        v-if="formFieldContext.invalid"
      />
    </div>
  </div>
  <p
    v-if="props.helperText && !props.invalid"
    class="gap-1 text-[13px] leading-5 text-muted"
  >
    {{ props.helperText }}
  </p>
</template>
