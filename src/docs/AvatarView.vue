<script setup lang="ts">
import { computed } from "vue";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/default/avatar";
import TablerBrandRadixUi from "~icons/tabler/brand-radix-ui";
import components from "@/lib/data/components";
import DocsLayout from "@/layouts/DocsLayout.vue";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import { Badge } from "src/components/ui/default/badge";
import Code from "@/components/Code.vue";
import { Separator } from "src/components/ui/default/separator";
import DocsPagination from "@/components/docs-pagination/DocsPagination.vue";
import DocsPrevious from "@/components/docs-pagination/DocsPrevious.vue";
import DocsNext from "@/components/docs-pagination/DocsNext.vue";
import Example from "@/components/example/Example.vue";
import Preview from "@/components/example/Preview.vue";
import Source from "@/components/example/Source.vue";

const avatar = computed(() => {
  return components.find((component) => component.attributes.name === "Avatar");
});
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem> Components </BreadCrumbItem>
      <BreadCrumbItem path="/docs/components/avatar" lastItem>
        Avatar
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="text-4xl font-heading text-foreground">
        {{ avatar?.attributes.name }}
      </h1>
      <p class="text-muted-foreground text-lg max-w-xl">
        {{ avatar?.attributes.description }}
      </p>
    </div>

    <div class="flex space-x-2 pt-4">
      <Badge
        variant="secondary"
        class="cursor-pointer"
        as="a"
        :href="avatar?.attributes.radixUrl"
        target="_blank"
      >
        <TablerBrandRadixUi class="w-3 h-3 mr-1" />
        Radix UI
      </Badge>
      <Badge
        variant="secondary"
        class="cursor-pointer"
        as="a"
        :href="avatar?.attributes.apiReference"
        target="_blank"
      >
        API Reference
      </Badge>
    </div>

    <Example>
      <Preview>
        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/99325011?v=4"
          />
          <AvatarFallback> AM </AvatarFallback>
        </Avatar>
      </Preview>
      <Source>
        <Code :code="avatar?.attributes.code!" language="vue" />
      </Source>
    </Example>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Installation</h1>
      <Separator class="mt-2 mb-6" />

      <Code
        code="npx shadcn-vue add avatar"
        language="bash"
        :show-line-numbers="false"
      />
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Usage</h1>
      <Separator class="mt-2 mb-6" />

      <div class="space-y-6">
        <Code
          :code="avatar?.attributes.usageImportCode!"
          language="vue"
          :show-line-numbers="false"
        />

        <Code
          :code="avatar?.attributes.usageCode!"
          language="vue"
          :show-line-numbers="false"
        />
      </div>
    </div>

    <DocsPagination>
      <DocsPrevious
        title="Aspect Ratio"
        description="Displays content within a desired ratio."
        to="/docs/components/aspect-ratio"
      />
      <DocsNext
        title="Badge"
        description="Displays a small amount of information in a component that looks like a badge."
        to="/docs/components/badge"
      />
    </DocsPagination>
  </DocsLayout>
</template>
