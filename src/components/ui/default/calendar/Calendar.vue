<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import type { Calendar } from "v-calendar";
import { DatePicker } from "v-calendar";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import { computed, nextTick, onMounted, ref } from "vue";
import { buttonVariants } from "../button";
import { cn } from "@/lib/utils";

const props = withDefaults(
  defineProps<{
    modelValue?:
      | string
      | number
      | Date
      | Partial<{
          start: Date;
          end: Date;
        }>;
    modelModifiers?: object;
    columns?: number;
    type?: "single" | "range";
  }>(),
  {
    type: "single",
    columns: 1,
  },
);
const emits = defineEmits<{
  (e: "update:modelValue", payload: typeof props.modelValue): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
});

const datePicker = ref<InstanceType<typeof DatePicker>>();
const calendarRef = computed<InstanceType<typeof Calendar>>(
  () => datePicker.value.calendarRef,
);

function handleNav(direction: "prev" | "next") {
  if (!calendarRef.value) return;

  if (direction === "prev") calendarRef.value.movePrev();
  else calendarRef.value.moveNext();
}

onMounted(async () => {
  await nextTick();
  await nextTick();
  if (modelValue.value instanceof Date && calendarRef.value)
    calendarRef.value.focusDate(modelValue.value);
});
</script>

<template>
  <div class="relative">
    <div class="absolute top-3 flex w-full justify-between px-4">
      <button
        :class="
          cn(
            buttonVariants({ variant: 'outline' }),
            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          )
        "
        @click="handleNav('prev')"
      >
        <ChevronLeft class="h-4 w-4" />
      </button>
      <button
        :class="
          cn(
            buttonVariants({ variant: 'outline' }),
            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          )
        "
        @click="handleNav('next')"
      >
        <ChevronRight class="h-4 w-4" />
      </button>
    </div>

    <DatePicker
      ref="datePicker"
      v-model="modelValue"
      :model-modifiers="modelModifiers"
      class="calendar"
      trim-weeks
      :transition="'none'"
      :columns="columns"
    />
  </div>
</template>

<style lang="postcss">
.calendar {
  @apply p-3 text-center;
}
.calendar .vc-pane-layout {
  @apply grid gap-4;
}
.calendar .vc-title {
  @apply pointer-events-none text-sm font-medium;
}
.calendar .vc-pane-header-wrapper {
  @apply hidden;
}
.calendar .vc-weeks {
  @apply mt-4;
}
.calendar .vc-weekdays {
  @apply flex;
}
.calendar .vc-weekday {
  @apply w-9 rounded-md text-[0.8rem] font-normal text-muted-foreground;
}
.calendar .vc-weeks {
  @apply flex w-full flex-col space-y-2 [&>_div]:grid [&>_div]:grid-cols-7;
}
.calendar .vc-day:has(.vc-highlights) {
  @apply overflow-hidden bg-accent first:rounded-l-md last:rounded-r-md;
}
.calendar .vc-day-content {
  @apply relative inline-flex h-9 w-9 select-none items-center justify-center p-0 text-center text-sm font-normal ring-offset-background transition-colors focus-within:relative focus-within:z-20 hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-ring focus-visible:ring-offset-2 aria-selected:opacity-100;
}
.calendar .vc-day-content:not(.vc-highlight-content-light) {
  @apply rounded-md;
}
.calendar
  .is-not-in-month:not(:has(.vc-highlight-content-solid)):not(
    :has(.vc-highlight-content-light)
  ):not(:has(.vc-highlight-content-outline)),
.calendar .vc-disabled {
  @apply text-muted-foreground opacity-50;
}
.calendar .vc-highlight-content-solid,
.calendar .vc-highlight-content-outline {
  @apply bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground;
}
.calendar .vc-highlight-content-light {
  @apply bg-accent text-accent-foreground;
}
</style>
