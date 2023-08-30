<script setup lang="ts">
import { computed } from "vue";
import TablerBrandRadixUi from "~icons/tabler/brand-radix-ui";
import components from "@/lib/data/components";
import DocsLayout from "@/layouts/DocsLayout.vue";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion";
import Code from "@/components/Code.vue";
import { Separator } from "@/components/ui/separator";
import DocsPagination from "@/components/docs-pagination/DocsPagination.vue";
import DocsPrevious from "@/components/docs-pagination/DocsPrevious.vue";
import DocsNext from "@/components/docs-pagination/DocsNext.vue";
import Example from "@/components/example/Example.vue";
import Preview from "@/components/example/Preview.vue";
import Source from "@/components/example/Source.vue";

const accordion = computed(() => {
  return components.find(
    (component) => component.attributes.name === "Accordion",
  );
});
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem> Components </BreadCrumbItem>
      <BreadCrumbItem path="/docs/components/accordion" lastItem>
        Accordion
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="text-4xl font-heading text-foreground">
        {{ accordion?.attributes.name }}
      </h1>
      <p class="text-muted-foreground text-lg max-w-xl">
        {{ accordion?.attributes.description }}
      </p>
    </div>

    <div class="flex space-x-2 pt-4">
      <Badge
        variant="secondary"
        class="cursor-pointer"
        as="a"
        :href="accordion?.attributes.radixUrl"
        target="_blank"
      >
        <TablerBrandRadixUi class="w-3 h-3 mr-1" />
        Radix UI
      </Badge>
      <Badge
        variant="secondary"
        class="cursor-pointer"
        as="a"
        :href="accordion?.attributes.apiReference"
        target="_blank"
      >
        API Reference
      </Badge>
    </div>

    <Example>
      <Preview>
        <Accordion type="single" collapsible class="w-full max-w-lg">
          <AccordionItem value="item-1">
            <AccordionTrigger> Is it accessible? </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger> Is it styled? </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components' aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger> Is it animated? </AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Preview>

      <Source>
        <Code :code="accordion?.attributes.code!" language="vue" />
      </Source>
    </Example>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Installation</h1>
      <Separator class="mt-2" />

      <Code
        code="npx shadcn-vue add accordion"
        language="bash"
        :show-line-numbers="false"
      />
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Usage</h1>
      <Separator class="mt-2" />

      <Code
        :code="accordion?.attributes.usageImportCode!"
        language="vue"
        :show-line-numbers="false"
      />

      <Code
        :code="accordion?.attributes.usageCode!"
        language="vue"
        :show-line-numbers="false"
      />
    </div>

    <DocsPagination>
      <DocsPrevious
        title="CLI"
        description="Learn how to use the CLI to add components to your project."
        to="/docs/cli"
      />
      <DocsNext
        title="Alert"
        description="Displays a short, important message in a way that attracts the users
          attention."
        to="/docs/components/alert"
      />
    </DocsPagination>
  </DocsLayout>
</template>
