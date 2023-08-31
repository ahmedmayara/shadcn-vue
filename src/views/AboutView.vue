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
      <h1 class="text-4xl font-heading text-foreground">About</h1>
      <p class="text-muted-foreground text-lg">
        Powered by amazing open source projects.
      </p>
    </div>
  </DocsLayout>
</template>
