<script setup lang="ts">
import { ref } from "vue";
import * as z from "zod";
import RadixIconsCalendar from "~icons/radix-icons/calendar";
import RadixIconsCheck from "~icons/radix-icons/check";
import RadixIconsCaretSort from "~icons/radix-icons/caret-sort";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/new-york/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
  SelectLabel,
  SelectItemText,
} from "@/components/ui/default/select";
import { Calendar } from "@/components/ui/new-york/calendar";
import { Input } from "@/components/ui/new-york/input";
import { Label } from "@/components/ui/new-york/label";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/default/popover";

const languages = [
  { label: "English", value: "English" },
  { label: "French", value: "French" },
  { label: "German", value: "German" },
  { label: "Italian", value: "Italian" },
  { label: "Spanish", value: "Spanish" },
  { label: "Portuguese", value: "Portuguese" },
  { label: "Russian", value: "Russian" },
  { label: "Japanese", value: "Japanese" },
  { label: "Korean", value: "Korean" },
  { label: "Chinese", value: "Chinese" },
] as const;

const form = ref({
  name: "",
  dob: new Date(),
  language: "",
});

const formSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  dob: z.date({ required_error: "Date of birth is required" }),
  language: z.string().nonempty({ message: "Language is required" }),
});

type Form = z.infer<typeof formSchema>;
const errors = ref<z.ZodFormattedError<Form> | null>(null);

const onSubmit = () => {
  const result = formSchema.safeParse(form.value);
  if (result.success) {
    alert("Form submitted!");
  } else {
    errors.value = result.error.format();
    console.log(errors.value);
  }
};
</script>

<template>
  <form @submit.prevent="onSubmit" class="space-y-8">
    <div class="grid gap-2">
      <Label for="name">Name</Label>
      <Input
        v-model="form.name"
        id="name"
        placeholder="John Doe"
        :invalid="!!errors?.name"
      />
      <div v-if="errors?.name" class="text-destructive text-sm font-medium">
        <span v-for="error in errors.name._errors" :key="error">
          {{ error }}
        </span>
      </div>
    </div>

    <div class="grid gap-2">
      <Label for="dob">Date of Birth</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            class="w-[240px] h-9 text-left flex justify-start items-center space-x-2"
          >
            <RadixIconsCalendar class="w-4 h-4 opacity-60" />
            <p class="text-muted-foreground" v-if="!form.dob">Pick a date</p>

            <span class="text-foreground" v-if="form.dob">
              {{ format(form.dob, "MMM dd, yyyy") }}
            </span>
          </Button>
          <div class="text-destructive">
            <span v-for="error in errors?.dob?._errors" :key="error">
              {{ error }}
            </span>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar v-model="form.dob" />
        </PopoverContent>
      </Popover>
    </div>

    <div class="grid gap-2">
      <Label for="language">Language</Label>
      <Select v-model="form.language">
        <SelectTrigger class="w-[240px]">
          <SelectValue placeholder="Select a language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem
              v-for="language in languages"
              :key="language.value"
              :value="language.value"
            >
              <SelectItemText>{{ language.label }}</SelectItemText>
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div class="text-destructive text-sm font-medium">
        <span v-for="error in errors?.language?._errors" :key="error">
          {{ error }}
        </span>
      </div>
    </div>

    <Button type="submit"> Update account </Button>
  </form>
</template>
