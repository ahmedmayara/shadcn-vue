<script setup lang="ts">
import { computed } from "vue";
import TablerBrandRadixUi from "~icons/tabler/brand-radix-ui";
import components from "@/lib/data/components";
import DocsLayout from "@/layouts/DocsLayout.vue";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "src/components/ui/default/tabs";

const datatable = computed(() => {
  return components.find(
    (component) => component.attributes.name === "Data Table",
  );
});
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem> Components </BreadCrumbItem>
      <BreadCrumbItem path="/docs/components/data-table" lastItem>
        Data Table
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="text-4xl font-heading text-foreground">
        {{ datatable?.attributes.name }}
      </h1>
      <p class="text-muted-foreground text-lg max-w-xl">
        {{ datatable?.attributes.description }}
      </p>
    </div>
  </DocsLayout>
</template>
