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
      class="flex justify-center flex-col border border-border rounded-xl p-8"
    >
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-medium">Account</h3>
          <p class="text-sm text-muted-foreground">
            Update your account settings. Set your preferred language and
            timezone.
          </p>
        </div>
        <Separator />

        <Form :onSubmit="onSubmit" :validation-schema="formSchema">
          <FormItem>
            <FormField :error="errors?.name?._errors[0]">
              <FormLabel for="name"> Name </FormLabel>
              <Input
                v-model:value="form.name"
                placeholder="Your name"
                id="name"
              />
              <FormDescription>
                This is the name that will be displayed in the dashboard.
              </FormDescription>
              <FormMessage id="name" :errors="errors?.name?._errors" />
            </FormField>
          </FormItem>

          <FormItem>
            <FormField :error="errors?.dob?._errors[0]">
              <FormLabel for="dob"> Date of birth </FormLabel>
              <Popover>
                <PopoverTrigger asChild id="dob">
                  <Button
                    variant="outline"
                    class="w-[280px] h-9 text-left flex justify-start items-center space-x-2"
                  >
                    <RadixIconsCalendar class="w-4 h-4 opacity-60" />
                    <p class="text-muted-foreground" v-if="!form.dob">
                      Pick a date
                    </p>

                    <span class="text-foreground" v-if="form.dob">
                      {{ format(new Date(form.dob), "MMM dd, yyyy") }}
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar v-model="form.dob" />
                </PopoverContent>
              </Popover>
              <FormMessage id="dob" :errors="errors?.dob?._errors" />
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>
            </FormField>
          </FormItem>

          <FormItem>
            <FormField :error="errors?.language?._errors[0]">
              <FormLabel for="language"> Language </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" class="justify-start w-[200px]">
                    <span class="text-muted-foreground" v-if="!form.language">
                      Select a language
                    </span>
                    <span class="text-foreground" v-if="form.language">
                      {{ form.language }}
                    </span>
                    <CaretSortIcon
                      class="ml-auto h-4 w-4 shrink-0 opacity-50"
                    />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Command>
                    <CommandList class="max-h-max">
                      <CommandInput
                        placeholder="Search languages"
                        class="h-9"
                      />
                      <CommandEmpty> No languages found </CommandEmpty>
                      <CommandGroup>
                        <CommandItem
                          v-for="language in languages"
                          :key="language.value"
                          :value="language.value"
                          @select="form.language = language.value"
                        >
                          <span>
                            {{ language.label }}
                          </span>
                          <CheckIcon
                            v-if="form.language === language.value"
                            class="w-4 h-4 ml-auto text-foreground"
                          />
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage id="language" :errors="errors?.language?._errors" />
              <FormDescription>
                This is the language that will be used in the dashboard.
              </FormDescription>
            </FormField>
          </FormItem>

          <Button type="submit">Save changes</Button>
        </Form>
      </div>
    </div>
  </ExamplesLayout>
</template>
