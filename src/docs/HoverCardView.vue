<script setup lang="ts">
import { computed } from "vue";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "src/components/ui/default/hover-card";
import components from "@/lib/data/components";
import DocsLayout from "@/layouts/DocsLayout.vue";
import TablerBrandRadixUi from "~icons/tabler/brand-radix-ui";
import { Badge } from "src/components/ui/default/badge";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import Code from "@/components/Code.vue";
import { Separator } from "src/components/ui/default/separator";
import DocsPagination from "@/components/docs-pagination/DocsPagination.vue";
import DocsPrevious from "@/components/docs-pagination/DocsPrevious.vue";
import DocsNext from "@/components/docs-pagination/DocsNext.vue";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/default/avatar";
import { Button } from "src/components/ui/default/button";
import { CalendarDays } from "lucide-vue-next";
import Example from "@/components/example/Example.vue";
import Preview from "@/components/example/Preview.vue";
import Source from "@/components/example/Source.vue";

const hoverCard = computed(() => {
  return components.find(
    (component) => component.attributes.name === "Hover Card",
  );
});
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem> Components </BreadCrumbItem>
      <BreadCrumbItem path="/docs/components/hover-card" lastItem>
        Hover Card
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="text-4xl font-heading text-foreground">
        {{ hoverCard?.attributes.name }}
      </h1>
      <p class="text-muted-foreground text-lg max-w-xl">
        {{ hoverCard?.attributes.description }}
      </p>
    </div>

    <div class="flex space-x-2 pt-4">
      <Badge
        variant="secondary"
        class="cursor-pointer"
        as="a"
        :href="hoverCard?.attributes.radixUrl"
        target="_blank"
      >
        <TablerBrandRadixUi class="w-3 h-3 mr-1" />
        Radix UI
      </Badge>
      <Badge
        variant="secondary"
        class="cursor-pointer"
        as="a"
        :href="hoverCard?.attributes.apiReference"
        target="_blank"
      >
        API Reference
      </Badge>
    </div>

    <Example>
      <Preview>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link"> @vuejs </Button>
          </HoverCardTrigger>
          <HoverCardContent class="w-80">
            <div class="flex justify-between space-x-4">
              <Avatar size="sm">
                <AvatarImage src="https://github.com/vuejs.png" />
                <AvatarFallback> VJ </AvatarFallback>
              </Avatar>
              <div class="space-y-1 text-sm">
                <h4 class="font-semibold">@vuejs</h4>
                <p class="text-muted-foreground">
                  The Progressive JavaScript Framework.
                </p>
                <div class="flex items-center pt-1">
                  <CalendarDays class="w-4 h-4 mr-2 opacity-70" />
                  <span class="text-muted-foreground text-xs">
                    Joined January 2014
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </Preview>
      <Source>
        <Code :code="hoverCard?.attributes.code!" language="vue" />
      </Source>
    </Example>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Installation</h1>
      <Separator class="mt-2 mb-6" />

      <Code
        code="npx shadcn-vue add hover-card"
        language="bash"
        :show-line-numbers="false"
      />
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Usage</h1>
      <Separator class="mt-2 mb-6" />

      <div class="space-y-6">
        <Code
          :code="hoverCard?.attributes.usageImportCode!"
          language="vue"
          :show-line-numbers="false"
        />

        <Code
          :code="hoverCard?.attributes.usageCode!"
          language="vue"
          :show-line-numbers="false"
        />
      </div>
    </div>

    <DocsPagination>
      <DocsPrevious
        title="Dropdown Menu"
        description="Displays a menu to the user such as a set of actions or functions triggered by a button."
        to="/docs/components/dropdown-menu"
      />
      <DocsNext
        title="Input"
        description="Displays a one-line text input field."
        to="/docs/components/input"
      />
    </DocsPagination>
  </DocsLayout>
</template>
