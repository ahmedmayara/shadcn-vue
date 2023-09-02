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
      class="w-4 h-4 peer cursor-pointer shrink-0 relative checked:bg-primary appearance-none text-foreground border border-primary rounded"
    />

    <RadixIconsCheck
      class="absolute pointer-events-none hidden peer-checked:block w-4 h-3 text-background"
    />
  </div>
</template>
