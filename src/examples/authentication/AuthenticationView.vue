<script setup lang="ts">
import { ref } from "vue";
import ExamplesLayout from "@/layouts/ExamplesLayout.vue";
import { Github } from "lucide-vue-next";
import TablerBrandX from "~icons/tabler/brand-x";
import SvgSpinners270Ring from "~icons/svg-spinners/270-ring";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const isLoading = ref(false);

const onSubmit = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>

<template>
  <ExamplesLayout>
    <div
      class="flex flex-col md:flex-row-reverse md:h-screen border border-border rounded-xl overflow-hidden"
    >
      <section class="justify-center w-full flex p-8 md:p-0">
        <div class="w-full py-4 mx-auto my-auto min-w-min md:py-9 md:w-7/12">
          <h2
            class="text-xl font-bold tracking-tight text-foreground md:text-2xl"
          >
            Create an account
          </h2>

          <p class="text-muted-foreground mt-1 text-sm">
            Enter your information below to create an account.
          </p>

          <div class="my-4">
            <div class="mb-3 space-y-2">
              <Label for="email"> Email address </Label>
              <Input id="email" type="email" placeholder="name@example.com" />
            </div>

            <div class="mb-3 space-y-2">
              <Label for="password"> Password </Label>
              <Input id="password" type="password" placeholder="•••••••••" />
            </div>

            <div class="mb-3 space-y-2">
              <Label for="password_confirmation"> Password Confirmation </Label>
              <Input
                id="password_confirmation"
                type="password"
                placeholder="•••••••••"
              />
            </div>

            <div class="flex justify-between text-xs mb-4">
              <p class="text-muted-foreground">
                Already have an account?
                <a href="#" class="text-foreground font-medium hover:underline">
                  Sign in
                </a>
              </p>
            </div>

            <Button class="w-full" :disabled="isLoading" @click="onSubmit">
              <SvgSpinners270Ring class="w-4 h-4 mr-2" v-if="isLoading" />
              Sign up
            </Button>
          </div>

          <div class="relative mt-4">
            <div class="absolute inset-0 flex items-center">
              <span class="w-full border-t border-border"></span>
            </div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2 pt-4">
            <Button variant="outline" class="w-full" :disabled="isLoading">
              <Github class="w-4 h-4 mr-2" />
              Github
            </Button>
            <Button variant="outline" class="w-full" :disabled="isLoading">
              <TablerBrandX class="w-4 h-4 mr-2" />
              X
            </Button>
          </div>

          <p class="text-muted-foreground mt-4 text-xs">
            By signing up, you agree to our
            <a href="#" class="text-foreground font-medium hover:underline">
              Terms of Service
            </a>
            and
            <a href="#" class="text-foreground font-medium hover:underline">
              Privacy Policy.
            </a>
          </p>
        </div>
      </section>
      <section class="items-start w-full bg-secondary hidden md:flex">
        <img
          src="https://images.unsplash.com/photo-1486551937199-baf066858de7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2133&q=80"
          class="object-cover w-full h-full"
          alt="Auth background"
        />
      </section>
    </div>
  </ExamplesLayout>
</template>
