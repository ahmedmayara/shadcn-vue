<script setup lang="ts">
import DocsLayout from "@/layouts/DocsLayout.vue";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem>Docs</BreadCrumbItem>
      <BreadCrumbItem path="/docs/about" lastItem> About </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="font-heading text-4xl text-foreground">About</h1>
      <p class="text-lg text-muted-foreground">
        Powered by amazing open source projects.
      </p>
    </div>
  </DocsLayout>
</template>
