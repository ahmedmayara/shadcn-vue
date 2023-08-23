<script setup lang="ts">
import { computed, ref } from "vue";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import components from "@/lib/data/components";
import DocsLayout from "@/layouts/DocsLayout.vue";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Example from "@/components/example/Example.vue";
import Preview from "@/components/example/Preview.vue";
import Source from "@/components/example/Source.vue";
import Code from "@/components/Code.vue";
import { Separator } from "@/components/ui/separator";
import DocsPagination from "@/components/docs-pagination/DocsPagination.vue";
import DocsPrevious from "@/components/docs-pagination/DocsPrevious.vue";
import DocsNext from "@/components/docs-pagination/DocsNext.vue";

const checkbox = computed(() => {
  return components.find(
    (component) => component.attributes.name === "Checkbox",
  );
});

const terms = ref(false);
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem> Components </BreadCrumbItem>
      <BreadCrumbItem path="/docs/components/checkbox" lastItem>
        Checkbox
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="text-4xl font-heading text-foreground">
        {{ checkbox?.attributes.name }}
      </h1>
      <p class="text-muted text-lg max-w-xl">
        {{ checkbox?.attributes.description }}
      </p>
    </div>

    <Example>
      <Preview>
        <div class="flex items-center space-x-2">
          <Checkbox id="terms" v-model="terms" />
          <Label for="terms" class="text-foreground">
            Accept terms and conditions
          </Label>
        </div>
      </Preview>
      <Source>
        <Code :code="checkbox?.attributes.code!" language="vue" />
      </Source>
    </Example>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Installation</h1>
      <Separator class="mt-2" />

      <Code
        code="npx shadcn-vue add checkbox"
        language="bash"
        :showLineNumbers="false"
      />
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Usage</h1>
      <Separator class="mt-2" />

      <Code
        :code="checkbox?.attributes.usageImportCode!"
        language="vue"
        :showLineNumbers="false"
      />
      <Code
        :code="checkbox?.attributes.usageCode!"
        language="vue"
        :showLineNumbers="false"
      />
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Examples</h1>
      <Separator class="mt-2" />

      <div
        v-for="example in checkbox?.examples"
        :key="example.name"
        class="pt-8"
      >
        <h2 class="text-xl font-semibold text-foreground">
          {{ example.name }}
        </h2>
        <Tabs class="pt-4" :default-value="`preview-${example.name}`">
          <TabsList
            class="inline-flex h-9 items-center w-full justify-start rounded-none border-b border-border dark:bg-transparent bg-transparent p-0"
          >
            <TabsTrigger
              class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm focus-visible:outline-none data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
              :value="`preview-${example.name}`"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm focus-visible:outline-none data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
              :value="`code-${example.name}`"
            >
              Code
            </TabsTrigger>
          </TabsList>

          <TabsContent :value="`preview-${example.name}`">
            <div
              class="flex mt-8 w-full min-h-[450px] justify-center items-center flex-col rounded-lg p-8 border border-border"
            >
              <div class="space-y-1.5" v-if="example.name === 'With Text'">
                <div class="flex items-center space-x-2">
                  <Checkbox id="terms1" />
                  <Label for="terms1"> Accept terms and conditions </Label>
                </div>
                <p class="text-sm text-muted">
                  You agree to our Terms of Service and Privacy Policy.
                </p>
              </div>

              <div
                class="flex items-center space-x-2"
                v-if="example.name === 'Disabled'"
              >
                <Checkbox id="terms2" disabled />
                <Label for="terms2" class="opacity-50">
                  Accept terms and conditions
                </Label>
              </div>
            </div>
          </TabsContent>

          <TabsContent :value="`code-${example.name}`">
            <Code :code="example.code" language="vue" />
          </TabsContent>
        </Tabs>
      </div>
    </div>

    <DocsPagination>
      <DocsPrevious
        title="Card"
        description="Displays a card with header, content, and footer."
        to="/docs/components/card"
      />
      <DocsNext
        title="Collapsible"
        description="An interactive component which expands/collapses a panel."
        to="/docs/components/collapsible"
      />
    </DocsPagination>
  </DocsLayout>
</template>
