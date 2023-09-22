<script setup lang="ts">
import { ref } from "vue";
import * as z from "zod";

import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/default/form";
import { Input } from "@/components/ui/new-york/input";
import { Textarea } from "@/components/ui/new-york/textarea";
import { Button } from "@/components/ui/new-york/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/new-york/avatar";

import { UserCircle } from "lucide-vue-next";

const profileForm = ref({
  username: "",
  about: "",
  photo: "",
});

const profileFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" }),
  about: z
    .string()
    .min(10, { message: "About must be at least 10 characters" })
    .max(100, { message: "About must be at most 100 characters" }),
  photo: z.string().url({ message: "Photo must be a valid URL" }),
});

type ProfileForm = z.infer<typeof profileFormSchema>;
const errors = ref<z.ZodFormattedError<ProfileForm> | null>(null);

const onSubmit = () => {
  const result = profileFormSchema.safeParse(profileForm.value);
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
  <Form :onSubmit="onSubmit">
    <div class="space-y-12">
      <div class="border-b border-border pb-12">
        <h2 class="text-xl font-semibold leading-7 text-foreground">Profile</h2>
        <p class="mt-1 text-sm leading-6 text-muted-foreground">
          This information will be displayed publicly so be careful what you
          share.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <FormItem>
              <FormField :error="errors?.username?._errors[0]">
                <FormLabel for="username"> Username </FormLabel>
                <Input
                  v-model:value="profileForm.username"
                  placeholder="Your username"
                  id="username"
                />
                <FormMessage
                  id="username"
                  :errors="errors?.username?._errors"
                />
              </FormField>
            </FormItem>
          </div>

          <div class="col-span-full">
            <FormItem>
              <FormField :error="errors?.about?._errors[0]">
                <FormLabel for="about"> About </FormLabel>
                <Textarea
                  v-model:value="profileForm.about"
                  placeholder="Brief description for your profile. URLs are hyperlinked."
                  id="about"
                />
                <FormDescription>
                  Brief description for your profile. URLs are hyperlinked.
                </FormDescription>
                <FormMessage id="about" :errors="errors?.about?._errors" />
              </FormField>
            </FormItem>
          </div>

          <div class="col-span-full">
            <FormItem>
              <FormField :error="errors?.photo?._errors[0]">
                <FormLabel for="photo"> Photo URL </FormLabel>
                <div class="mt-2 flex items-center gap-x-3">
                  <Avatar>
                    <AvatarImage
                      :src="profileForm.photo"
                      :alt="profileForm.username"
                    />
                    <AvatarFallback>
                      <UserCircle
                        :stroke-width="1.5"
                        class="h-10 w-10 text-muted-foreground"
                      />
                    </AvatarFallback>
                  </Avatar>
                  <Button variant="outline" type="button"> Change </Button>
                </div>
                <FormMessage id="photo" :errors="errors?.photo?._errors" />
              </FormField>
            </FormItem>
          </div>

          <div class="col-span-full">
            <div class="flex justify-end">
              <Button variant="outline" type="submit"> Save </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Form>
</template>
