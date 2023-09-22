<script setup lang="ts">
import { computed, ref } from "vue";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/default/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectValue,
  SelectItemText,
} from "@/components/ui/default/select";
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

const card = computed(() => {
  return components.find((component) => component.attributes.name === "Card");
});

const selectedFramework = ref<string>("");
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem> Components </BreadCrumbItem>
      <BreadCrumbItem path="/docs/components/card" lastItem>
        Card
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="text-4xl font-heading text-foreground">
        {{ card?.attributes.name }}
      </h1>
      <p class="text-muted-foreground text-lg max-w-xl">
        {{ card?.attributes.description }}
      </p>
    </div>

    <Example>
      <Preview>
        <Card class="w-full max-w-sm">
          <CardHeader>
            <CardTitle> Create a project </CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="grid gap-2 pt-4">
              <Label for="name"> Name </Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div class="grid gap-2 pt-4">
              <Label for="framework"> Framework </Label>
              <Select v-model="selectedFramework">
                <SelectTrigger>
                  <SelectValue placeholder="Select a framework..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="nuxt">
                      <SelectItemText>Nuxt.js</SelectItemText>
                    </SelectItem>
                    <SelectItem value="astro">
                      <SelectItemText>Astro</SelectItemText>
                    </SelectItem>
                    <SelectItem value="next.js">
                      <SelectItemText>Next.js</SelectItemText>
                    </SelectItem>
                    <SelectItem value="svelte-kit">
                      <SelectItemText>SvelteKit</SelectItemText>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter class="flex justify-between items-center">
            <Button variant="outline"> Cancel </Button>
            <Button> Create </Button>
          </CardFooter>
        </Card>
      </Preview>
      <Source>
        <Code :code="card?.attributes.code!" language="vue" />
      </Source>
    </Example>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Installation</h1>
      <Separator class="mt-2 mb-6" />

      <Code
        code="npx shadcn-vue add card"
        language="bash"
        :show-line-numbers="false"
      />
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Usage</h1>
      <Separator class="mt-2 mb-6" />

      <div class="space-y-6">
        <Code
          :code="card?.attributes.usageImportCode!"
          language="vue"
          :show-line-numbers="false"
        />

        <Code
          :code="card?.attributes.usageCode!"
          language="vue"
          :show-line-numbers="false"
        />
      </div>
    </div>

    <DocsPagination>
      <DocsPrevious
        title="Calendar"
        description="A component that allows you to display a simple calendar with events."
        to="/docs/components/calendar"
      />
      <DocsNext
        title="Checkbox"
        description="A control that allows the user to toggle between checked and not checked."
        to="/docs/components/checkbox"
      />
    </DocsPagination>
  </DocsLayout>
</template>
