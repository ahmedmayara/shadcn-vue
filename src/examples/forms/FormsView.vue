<script setup lang="ts">
import { ref } from "vue";
import * as z from "zod";
import RadixIconsCalendar from "~icons/radix-icons/calendar";
import CheckIcon from "~icons/radix-icons/check";
import CaretSortIcon from "~icons/radix-icons/caret-sort";
import format from "date-fns/format";
import ExamplesLayout from "@/layouts/ExamplesLayout.vue";
import { Separator } from "@/components/ui/new-york/separator";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/default/form";
import { Input } from "@/components/ui/default/input";
import { Button } from "@/components/ui/new-york/button";
import { Calendar } from "@/components/ui/new-york/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/default/popover";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
  SelectItemText,
} from "@/components/ui/default/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/default/command";
import ProfileForm from "./components/ProfileForm.vue";

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
  dob: "",
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
    console.log("Form submitted successfully!");
    errors.value = null;
  } else {
    errors.value = result.error.format();
    console.log(errors.value);
  }
};
</script>

<template>
  <ExamplesLayout>
    <div
      class="flex flex-col justify-center rounded-xl border border-border p-8"
    >
      <ProfileForm />
    </div>
  </ExamplesLayout>
</template>
