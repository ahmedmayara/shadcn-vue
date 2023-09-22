<script setup lang="ts">
import { computed, ref } from "vue";
import { ChevronRight } from "lucide-vue-next";
import TablerBrandRadixUi from "~icons/tabler/brand-radix-ui";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/default/context-menu";
import components from "@/lib/data/components";
import DocsLayout from "@/layouts/DocsLayout.vue";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/default/badge";
import Code from "@/components/Code.vue";
import { Separator } from "@/components/ui/default/separator";
import DocsPagination from "@/components/docs-pagination/DocsPagination.vue";
import DocsPrevious from "@/components/docs-pagination/DocsPrevious.vue";
import DocsNext from "@/components/docs-pagination/DocsNext.vue";
import Example from "@/components/example/Example.vue";
import Preview from "@/components/example/Preview.vue";
import Source from "@/components/example/Source.vue";

const contextMenu = computed(() => {
  return components.find(
    (component) => component.attributes.name === "Context Menu",
  );
});

const checkboxItemOne = ref(false);
const checkboxItemTwo = ref(true);
const radioItem = ref("colm");
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem> Components </BreadCrumbItem>
      <BreadCrumbItem path="/docs/components/context-menu" lastItem>
        Context Menu
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="font-heading text-4xl text-foreground">
        {{ contextMenu?.attributes.name }}
      </h1>
      <p class="max-w-xl text-lg text-muted-foreground">
        {{ contextMenu?.attributes.description }}
      </p>
    </div>

    <div class="flex space-x-2 pt-4">
      <Badge
        variant="secondary"
        class="cursor-pointer"
        as="a"
        :href="contextMenu?.attributes.radixUrl"
        target="_blank"
      >
        <TablerBrandRadixUi class="mr-1 h-3 w-3" />
        Radix UI
      </Badge>
      <Badge
        variant="secondary"
        class="cursor-pointer"
        as="a"
        :href="contextMenu?.attributes.apiReference"
        target="_blank"
      >
        API Reference
      </Badge>
    </div>

    <Example>
      <Preview>
        <ContextMenu>
          <ContextMenuTrigger
            class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-border text-sm"
          >
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent class="w-64">
            <ContextMenuItem>
              Back
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem disabled>
              Forward
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Reload
              <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger> More Tools </ContextMenuSubTrigger>
              <ContextMenuSubContent class="w-48">
                <ContextMenuItem>
                  Save Page As...
                  <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuItem>Name Window...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem v-model:checked="checkboxItemOne">
              Show Bookmarks Bar
              <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem v-model:checked="checkboxItemTwo">
              Show Full URLs
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup v-model="radioItem">
              <ContextMenuLabel>People</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuRadioItem value="pedro">
                Pedro Duarte
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="colm">
                Colm Tuite
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
      </Preview>
      <Source>
        <Code :code="contextMenu?.attributes.code!" language="vue" />
      </Source>
    </Example>

    <div class="pt-8">
      <h1 class="font-heading text-2xl text-foreground">Installation</h1>
      <Separator class="mb-6 mt-2" />

      <Code
        code="npx shadcn-vue add context-menu"
        language="bash"
        :show-line-numbers="false"
      />
    </div>

    <div class="pt-8">
      <h1 class="font-heading text-2xl text-foreground">Usage</h1>
      <Separator class="mb-6 mt-2" />

      <div class="space-y-6">
        <Code
          :code="contextMenu?.attributes.usageImportCode!"
          language="vue"
          :show-line-numbers="false"
        />

        <Code
          :code="contextMenu?.attributes.usageCode!"
          language="vue"
          :show-line-numbers="false"
        />
      </div>
    </div>

    <DocsPagination>
      <DocsPrevious
        title="Collapsible"
        description="An interactive component which expands/collapses a panel."
        to="/docs/components/collapsible"
      />
      <DocsNext
        title="Data Table"
        description="A supercharged version of the HTML table element that provides tools for searching, sorting, pagination and more."
        to="/docs/components/checkbox"
      />
    </DocsPagination>
  </DocsLayout>
</template>
