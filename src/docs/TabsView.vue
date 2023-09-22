<script setup lang="ts">
import { computed } from "vue";
import {
  Tabs,
  TabsTrigger,
  TabsList,
  TabsContent,
} from "@/components/ui/default/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/default/card";
import components from "@/lib/data/components";
import DocsLayout from "@/layouts/DocsLayout.vue";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import Code from "@/components/Code.vue";
import { Separator } from "@/components/ui/default/separator";
import DocsPagination from "@/components/docs-pagination/DocsPagination.vue";
import DocsPrevious from "@/components/docs-pagination/DocsPrevious.vue";
import DocsNext from "@/components/docs-pagination/DocsNext.vue";
import { Button } from "@/components/ui/default/button";
import { Input } from "@/components/ui/default/input";
import { Label } from "@/components/ui/default/label";
import Example from "@/components/example/Example.vue";
import Preview from "@/components/example/Preview.vue";
import Source from "@/components/example/Source.vue";

const tabs = computed(() => {
  return components.find((component) => component.attributes.name === "Tabs");
});
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem> Components </BreadCrumbItem>
      <BreadCrumbItem path="/docs/components/tabs" lastItem>
        Tabs
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="text-4xl font-heading text-foreground">
        {{ tabs?.attributes.name }}
      </h1>
      <p class="text-muted-foreground text-lg max-w-xl">
        {{ tabs?.attributes.description }}
      </p>
    </div>

    <Example>
      <Preview>
        <Tabs default-value="account" class="w-[400px]">
          <TabsList class="grid w-full grid-cols-2">
            <TabsTrigger value="account"> Account </TabsTrigger>
            <TabsTrigger value="password"> Password </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle> Account </CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent class="space-y-4">
                <div class="space-y-2">
                  <Label for="name"> Name </Label>
                  <Input id="name" value="Pedro Duarte" />
                </div>
                <div class="space-y-2">
                  <Label for="username"> Username </Label>
                  <Input id="username" value="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button> Save changes </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle> Password </CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent class="space-y-4">
                <div class="space-y-2">
                  <Label for="current-password"> Current password </Label>
                  <Input id="current-password" type="password" />
                </div>
                <div class="space-y-2">
                  <Label for="new-password"> New password </Label>
                  <Input id="new-password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button> Save password </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </Preview>
      <Source>
        <Code :code="tabs?.attributes.code!" language="vue" />
      </Source>
    </Example>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Installation</h1>
      <Separator class="mt-2" />

      <Code
        code="npx shadcn-vue add tabs"
        language="bash"
        :show-line-numbers="false"
      />
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Usage</h1>
      <Separator class="mt-2" />

      <Code
        :code="tabs?.attributes.usageImportCode!"
        language="vue"
        :show-line-numbers="false"
      />

      <Code
        :code="tabs?.attributes.usageCode!"
        language="vue"
        :show-line-numbers="false"
      />
    </div>

    <DocsPagination>
      <DocsPrevious
        title="Table"
        description="A responsive table component."
        to="/docs/components/table"
      />
      <DocsNext
        title="Textarea"
        description="Displays a multi-line text input field."
        to="/docs/components/textarea"
      />
    </DocsPagination>
  </DocsLayout>
</template>
