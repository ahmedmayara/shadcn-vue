<script setup lang="ts">
import { computed } from "vue";
import TablerBrandRadixUi from "~icons/tabler/brand-radix-ui";
import components from "@/lib/data/components";
import DocsLayout from "@/layouts/DocsLayout.vue";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/default/tabs";
import Code from "@/components/Code.vue";
import { Separator } from "@/components/ui/default/separator";
import { Badge } from "@/components/ui/default/badge";
import { AspectRatio } from "@/components/ui/default/aspect-ratio";
import DocsPagination from "@/components/docs-pagination/DocsPagination.vue";
import DocsPrevious from "@/components/docs-pagination/DocsPrevious.vue";
import DocsNext from "@/components/docs-pagination/DocsNext.vue";

const aspectRatio = computed(() => {
  return components.find(
    (component) => component.attributes.name === "Aspect Ratio",
  );
});
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem> Components </BreadCrumbItem>
      <BreadCrumbItem path="/docs/components/aspect-ratio" lastItem>
        Aspect Ratio
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="text-4xl font-heading text-foreground">
        {{ aspectRatio?.attributes.name }}
      </h1>
      <p class="text-muted-foreground text-lg max-w-xl">
        {{ aspectRatio?.attributes.description }}
      </p>
    </div>

    <div class="flex space-x-2 pt-4">
      <Badge
        variant="secondary"
        class="cursor-pointer"
        as="a"
        :href="aspectRatio?.attributes.radixUrl"
        target="_blank"
      >
        <TablerBrandRadixUi class="w-3 h-3 mr-1" />
        Radix UI
      </Badge>
      <Badge
        variant="secondary"
        class="cursor-pointer"
        as="a"
        :href="aspectRatio?.attributes.apiReference"
        target="_blank"
      >
        API Reference
      </Badge>
    </div>

    <div class="pt-8">
      <Tabs default-value="preview">
        <TabsList
          class="inline-flex h-9 items-center w-full justify-start rounded-none border-b border-border dark:bg-transparent bg-transparent p-0"
        >
          <TabsTrigger
            class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm focus-visible:outline-none data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
            value="preview"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm focus-visible:outline-none data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
            value="code"
          >
            Code
          </TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <div
            class="flex mt-8 w-full min-h-[450px] justify-center items-center flex-col rounded-lg p-8 border border-border"
          >
            <div class="w-full sm:w-[450px]">
              <AspectRatio :ratio="16 / 9">
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Photo by Drew Beamer"
                  class="rounded-md object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="code">
          <Code :code="aspectRatio?.attributes.code!" language="vue" />
        </TabsContent>
      </Tabs>
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Installation</h1>
      <Separator class="mt-2" />

      <Code
        code="npx shadcn-vue add aspect-ratio"
        language="bash"
        :show-line-numbers="false"
      />
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Usage</h1>
      <Separator class="mt-2" />

      <Code
        :code="aspectRatio?.attributes.usageImportCode!"
        language="vue"
        :show-line-numbers="false"
      />

      <Code
        :code="aspectRatio?.attributes.usageCode!"
        language="vue"
        :show-line-numbers="false"
      />
    </div>

    <DocsPagination>
      <DocsPrevious
        title="Alert Dialog"
        description="A modal dialog that interrupts the user with important content and expects a response."
        to="/docs/components/alert-dialog"
      />
      <DocsNext
        title="Avatar"
        description="An image element with a fallback for representing the user."
        to="/docs/components/avatar"
      />
    </DocsPagination>
  </DocsLayout>
</template>
