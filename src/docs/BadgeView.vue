<script setup lang="ts">
import { computed } from "vue";
import { Badge } from "@/components/ui/badge";
import components from "@/lib/data/components";
import DocsLayout from "@/layouts/DocsLayout.vue";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Code from "@/components/Code.vue";
import { Separator } from "@/components/ui/separator";
import DocsPagination from "@/components/docs-pagination/DocsPagination.vue";
import DocsPrevious from "@/components/docs-pagination/DocsPrevious.vue";
import DocsNext from "@/components/docs-pagination/DocsNext.vue";
import Example from "@/components/example/Example.vue";
import Preview from "@/components/example/Preview.vue";
import Source from "@/components/example/Source.vue";

const badge = computed(() => {
  return components.find((component) => component.attributes.name === "Badge");
});
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem> Components </BreadCrumbItem>
      <BreadCrumbItem path="/docs/components/badge" lastItem>
        Badge
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="text-4xl font-heading text-foreground">
        {{ badge?.attributes.name }}
      </h1>
      <p class="text-muted text-lg max-w-xl">
        {{ badge?.attributes.description }}
      </p>
    </div>

    <Example>
      <Preview>
        <Badge> Badge </Badge>
      </Preview>
      <Source>
        <Code :code="badge?.attributes.code!" language="vue" />
      </Source>
    </Example>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Installation</h1>
      <Separator class="mt-2" />

      <Code
        code="npx shadcn-vue add badge"
        language="bash"
        :show-line-numbers="false"
      />
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Usage</h1>
      <Separator class="mt-2" />

      <Code
        :code="badge?.attributes.usageImportCode!"
        language="vue"
        :show-line-numbers="false"
      />

      <Code
        :code="badge?.attributes.usageCode!"
        language="vue"
        :show-line-numbers="false"
      />
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Examples</h1>
      <Separator class="mt-2" />

      <div v-for="example in badge?.examples" :key="example.name" class="pt-8">
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
              <Badge v-if="example.name === 'Primary'"> Primary </Badge>
              <Badge
                v-else-if="example.name === 'Secondary'"
                variant="secondary"
              >
                Secondary
              </Badge>
              <Badge v-else-if="example.name === 'Outline'" variant="outline">
                Outline
              </Badge>
              <Badge
                v-else-if="example.name === 'Destructive'"
                variant="destructive"
              >
                Destructive
              </Badge>
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
        title="Avatar"
        description="An image element with a fallback for representing the user."
        to="/docs/components/avatar"
      />
      <DocsNext
        title="Button"
        description="Displays a component that triggers an event or action that looks like a button."
        to="/docs/components/button"
      />
    </DocsPagination>
  </DocsLayout>
</template>
