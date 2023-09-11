<script setup lang="ts">
import { computed } from "vue";
import { Terminal } from "lucide-vue-next";
import components from "@/lib/data/components";
import DocsLayout from "@/layouts/DocsLayout.vue";
import { Alert, AlertTitle, AlertDescription } from "src/components/ui/default/alert";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import Code from "@/components/Code.vue";
import { Separator } from "src/components/ui/default/separator";
import DocsPagination from "@/components/docs-pagination/DocsPagination.vue";
import DocsPrevious from "@/components/docs-pagination/DocsPrevious.vue";
import DocsNext from "@/components/docs-pagination/DocsNext.vue";
import Example from "@/components/example/Example.vue";
import Preview from "@/components/example/Preview.vue";
import Source from "@/components/example/Source.vue";

const alert = computed(() => {
  return components.find((component) => component.attributes.name === "Alert");
});
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem> Components </BreadCrumbItem>
      <BreadCrumbItem path="/docs/components/alert" lastItem>
        Alert
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="text-4xl font-heading text-foreground">
        {{ alert?.attributes.name }}
      </h1>
      <p class="text-muted-foreground text-lg max-w-xl">
        {{ alert?.attributes.description }}
      </p>
    </div>

    <Example>
      <Preview>
        <Alert>
          <Terminal class="h-4 w-4" />
          <AlertTitle> Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the CLI.
          </AlertDescription>
        </Alert>
      </Preview>
      <Source>
        <Code :code="alert?.attributes.code!" language="vue" />
      </Source>
    </Example>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Installation</h1>
      <Separator class="mt-2" />

      <Code
        code="npx shadcn-vue add alert"
        language="bash"
        :show-line-numbers="false"
      />
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Usage</h1>
      <Separator class="mt-2" />

      <Code
        :code="alert?.attributes.usageImportCode!"
        language="vue"
        :show-line-numbers="false"
      />

      <Code
        :code="alert?.attributes.usageCode!"
        language="vue"
        :show-line-numbers="false"
      />
    </div>

    <DocsPagination>
      <DocsPrevious
        title="Accordion"
        description="A vertically stacked set of interactive headings that each reveal an
          associated section of content."
        to="/docs/components/accordion"
      />
      <DocsNext
        title="Alert Dialog"
        description="A modal dialog that interrupts the user with important content and expects a response."
        to="/docs/components/alert-dialog"
      />
    </DocsPagination>
  </DocsLayout>
</template>
