<script setup lang="ts">
import RadixIconsCheck from "~icons/radix-icons/check";

interface CheckBoxProps {
  id?: string;
  /**
   * The value of the checkbox.
   * @default false
   * @type boolean
   */
  modelValue?: boolean;
  /**
   * Whether the checkbox is required.
   * @default false
   * @type boolean
   */
  required?: boolean;
  /**
   * Whether the checkbox is disabled.
   * @default false
   * @type boolean
   */
  disabled?: boolean;
  /**
   * Whether the checkbox is invalid.
   * @default false
   * @type boolean
   */
  invalid?: boolean;
  /**
   * Whether the checkbox is checked.
   * @default false
   * @type boolean
   */
  checked?: boolean;
}

const props = defineProps<CheckBoxProps>();

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex items-center">
    <input
      type="checkbox"
      :id="props.id"
      :value="props.modelValue"
      @input="
        ($event) =>
          emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
      :required="props.required"
      :disabled="props.disabled"
      :class="{
        'ring-destructive-light dark:ring-destructive': props.invalid,
        '!cursor-not-allowed opacity-50': props.disabled,
      }"
      :checked="props.checked"
      class="peer relative h-4 w-4 shrink-0 cursor-pointer appearance-none rounded border border-primary text-foreground transition-all checked:bg-primary"
    />

    <RadixIconsCheck
      class="pointer-events-none absolute hidden h-3 w-4 text-background transition-all peer-checked:block"
    />
  </div>
</template>
