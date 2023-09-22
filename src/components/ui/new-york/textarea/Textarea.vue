<script setup lang="ts">
import { inject } from "vue";
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

const formFieldContext = inject("FormFieldContext", props);
</script>

<template>
  <div :class="cn('relative', $attrs.class)">
    <textarea
      :id="props.id"
      :value="props.value"
      :rows="props.rows"
      :required="formFieldContext.required"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      @input="handleInput"
      :class="[
        formFieldContext.invalid
          ? 'ring-2 !ring-destructive placeholder:!text-destructive'
          : '',
        cn(
          'min-h-[60px] w-full rounded-md border border-input bg-background p-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          $attrs.class,
        ),
      ]"
    />
    <div class="pointer-events-none absolute right-4 top-4 flex items-center">
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
