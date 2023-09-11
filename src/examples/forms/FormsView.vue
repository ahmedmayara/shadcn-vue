<script setup lang="ts">
import ExamplesLayout from "@/layouts/ExamplesLayout.vue";
import AccountFormVue from "./components/AccountForm.vue";
import { Separator } from "@/components/ui/new-york/separator";
</script>

<template>
  <ExamplesLayout>
    <div class="flex justify-center flex-col border border-border rounded-xl">
      <div class="space-y-6">
        <div>
          <h3 class="text-lg font-medium">Account</h3>
          <p class="text-sm text-muted-foreground">
            Update your account settings. Set your preferred language and
            timezone.
          </p>
        </div>
        <Separator />
        <AccountFormVue />
      </div>
    </div>
  </ExamplesLayout>
</template>
