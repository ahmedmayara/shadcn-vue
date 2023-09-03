<script setup lang="ts">
import { computed } from "vue";
import TablerBrandRadixUi from "~icons/tabler/brand-radix-ui";
import components from "@/lib/data/components";
import DocsLayout from "@/layouts/DocsLayout.vue";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import Code from "@/components/Code.vue";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import DocsPagination from "@/components/docs-pagination/DocsPagination.vue";
import DocsPrevious from "@/components/docs-pagination/DocsPrevious.vue";
import DocsNext from "@/components/docs-pagination/DocsNext.vue";
import Example from "@/components/example/Example.vue";
import Preview from "@/components/example/Preview.vue";
import Source from "@/components/example/Source.vue";

const alertDialog = computed(() => {
  return components.find(
    (component) => component.attributes.name === "Alert Dialog",
  );
});
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem> Components </BreadCrumbItem>
      <BreadCrumbItem path="/docs/components/alert-dialog" lastItem>
        Alert Dialog
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="text-4xl font-heading text-foreground">
        {{ alertDialog?.attributes.name }}
      </h1>
      <p class="text-muted-foreground text-lg max-w-xl">
        {{ alertDialog?.attributes.description }}
      </p>
    </div>

    <div class="flex space-x-2 pt-4">
      <Badge
        variant="secondary"
        class="cursor-pointer"
        as="a"
        :href="alertDialog?.attributes.radixUrl"
        target="_blank"
      >
        <TablerBrandRadixUi class="w-3 h-3 mr-1" />
        Radix UI
      </Badge>
      <Badge
        variant="secondary"
        class="cursor-pointer"
        as="a"
        :href="alertDialog?.attributes.apiReference"
        target="_blank"
      >
        API Reference
      </Badge>
    </div>

    <Example>
      <Preview>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline"> Open Dialog </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle> Are you absolutely sure? </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button variant="outline" class="h-9"> Cancel </Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button variant="destructive" class="h-9"> Delete </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Preview>
      <Source>
        <Code :code="alertDialog?.attributes.code!" language="vue" />
      </Source>
    </Example>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Installation</h1>
      <Separator class="mt-2 mb-6" />

      <Code
        code="npx shadcn-vue add alert-dialog"
        language="bash"
        :show-line-numbers="false"
      />
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Usage</h1>
      <Separator class="mt-2 mb-6" />

      <div class="space-y-6">
        <Code
          :code="alertDialog?.attributes.usageImportCode!"
          language="vue"
          :show-line-numbers="false"
        />

        <Code
          :code="alertDialog?.attributes.usageCode!"
          language="vue"
          :show-line-numbers="false"
        />
      </div>
    </div>

    <DocsPagination>
      <DocsPrevious
        title="Alert"
        description="Displays a short, important message in a way that attracts the users
          attention."
        to="/docs/components/alert"
      />
      <DocsNext
        title="Aspect Ratio"
        description="Displays content within a desired ratio."
        to="/docs/components/aspect-ratio"
      />
    </DocsPagination>
  </DocsLayout>
</template>
