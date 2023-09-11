<script setup lang="ts">
import { computed, ref } from "vue";
import { Button } from "@/components/ui/default/button";
import components from "@/lib/data/components";
import DocsLayout from "@/layouts/DocsLayout.vue";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import {
  Tabs,
  TabsTrigger,
  TabsList,
  TabsContent,
} from "@/components/ui/default/tabs";
import { Mail, Loader2 } from "lucide-vue-next";
import Example from "@/components/example/Example.vue";
import Preview from "@/components/example/Preview.vue";
import Source from "@/components/example/Source.vue";
import Code from "@/components/Code.vue";
import { Separator } from "@/components/ui/default/separator";
import DocsPagination from "@/components/docs-pagination/DocsPagination.vue";
import DocsPrevious from "@/components/docs-pagination/DocsPrevious.vue";
import DocsNext from "@/components/docs-pagination/DocsNext.vue";

const button = computed(() => {
  return components.find((component) => component.attributes.name === "Button");
});

const isLoading = ref(true);
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem> Components </BreadCrumbItem>
      <BreadCrumbItem path="/docs/components/button" lastItem>
        Button
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="text-4xl font-heading text-foreground">
        {{ button?.attributes.name }}
      </h1>
      <p class="text-muted-foreground text-lg max-w-xl">
        {{ button?.attributes.description }}
      </p>
    </div>

    <Example>
      <Preview>
        <Button> Button </Button>
      </Preview>
      <Source>
        <Code :code="button?.attributes.code!" language="vue" />
      </Source>
    </Example>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Installation</h1>
      <Separator class="mt-2 mb-6" />

      <Code
        code="npx shadcn-vue add button"
        language="bash"
        :show-line-numbers="false"
      />
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Usage</h1>
      <Separator class="mt-2 mb-6" />

      <div class="space-y-6">
        <Code
          :code="button?.attributes.usageImportCode!"
          language="vue"
          :show-line-numbers="false"
        />

        <Code
          :code="button?.attributes.usageCode!"
          language="vue"
          :show-line-numbers="false"
        />
      </div>
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Examples</h1>
      <Separator class="mt-2" />

      <div v-for="example in button?.examples" :key="example.name" class="pt-8">
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
              <Button v-if="example.name === 'Primary'"> Primary </Button>
              <Button
                v-else-if="example.name === 'Secondary'"
                variant="secondary"
              >
                Secondary
              </Button>
              <Button v-else-if="example.name === 'Outline'" variant="outline">
                Outline
              </Button>
              <Button
                v-else-if="example.name === 'Destructive'"
                variant="destructive"
              >
                Destructive
              </Button>
              <Button v-else-if="example.name === 'Ghost'" variant="ghost">
                Ghost
              </Button>
              <Button v-else-if="example.name === 'Link'" variant="link">
                Link
              </Button>
              <Button v-if="example.name === 'With Icon'" variant="primary">
                <Mail class="w-4 h-4 mr-2" />
                Login with Email
              </Button>
              <Button
                :disabled="isLoading"
                v-if="example.name === 'Loading'"
                variant="primary"
              >
                <Loader2 class="w-4 h-4 mr-2 animate-spin" />
                Please wait
              </Button>
              <Button
                as="a"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                v-if="example.name === 'As Link'"
                variant="link"
              >
                Link to somewhere
              </Button>
            </div>
          </TabsContent>

          <TabsContent :value="`code-${example.name}`" class="mt-6">
            <Code :code="example.code" language="vue" />
          </TabsContent>
        </Tabs>
      </div>
    </div>

    <DocsPagination>
      <DocsPrevious
        title="Badge"
        description="Displays a small amount of information in a component that looks like a badge."
        to="/docs/components/badge"
      />
      <DocsNext
        title="Calendar"
        description="A component that allows you to display a simple calendar with events."
        to="/docs/components/calendar"
      />
    </DocsPagination>
  </DocsLayout>
</template>
