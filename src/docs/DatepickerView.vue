<script setup lang="ts">
import { computed, ref } from "vue";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/new-york/calendar";
import RadixIconsCalendar from "~icons/radix-icons/calendar";
import components from "@/lib/data/components";
import DocsLayout from "@/layouts/DocsLayout.vue";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import Code from "@/components/Code.vue";
import { Separator } from "@/components/ui/new-york/separator";
import DocsPagination from "@/components/docs-pagination/DocsPagination.vue";
import DocsPrevious from "@/components/docs-pagination/DocsPrevious.vue";
import DocsNext from "@/components/docs-pagination/DocsNext.vue";
import { Button } from "@/components/ui/new-york/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/default/popover";
import Example from "@/components/example/Example.vue";
import Preview from "@/components/example/Preview.vue";
import Source from "@/components/example/Source.vue";

const datePicker = computed(() => {
  return components.find(
    (component) => component.attributes.name === "Date Picker",
  );
});

const date = ref<Date>();

const steps = [
  {
    title: "Install the VCalendar library",
    description:
      "You need to install the VCalendar library for the Date Picker to work.",
    code: `npm install v-calendar@next @popperjs/core`,
    language: "bash",
    showLineNumbers: false,
  },
  {
    title:
      "Create a file called <code class='text-sm font-medium bg-secondary rounded-md inline-flex px-1.5 py-0.5'>externals.d.ts</code> in the root of your project",
    description:
      "This file will allow you to import the VCalendar library without TypeScript complaining about it.",
    code: `declare module "v-calendar"`,
    language: "typescript",
    showLineNumbers: false,
  },
  {
    title:
      "Include the <code class='text-sm bg-secondary font-medium rounded-md inline-flex px-1.5 py-0.5'>externals.d.ts</code> file in your <code class='text-sm font-medium bg-secondary rounded-md inline-flex px-1.5 py-0.5'>tsconfig.app.json</code> file",
    description:
      "This will allow TypeScript to find the VCalendar library when you import it.",
    code: `{
    "extends": "./tsconfig.json",
    "include": ["src/**/*", "externals.d.ts"],
    "exclude": ["src/**/__tests__/*"],
    "compilerOptions": {
      "composite": true
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    }  
}`,
    language: "json",
    showLineNumbers: true,
    highlightedLines: [3],
  },
  {
    title: "Install the Popover component",
    description:
      "The Date Picker component uses the Popover component to display the calendar.",
    code: `npx variance-ui add popover`,
    language: "bash",
    showLineNumbers: false,
  },
  {
    title: "Install the Date Picker component",
    description: "Finally, you can install the Date Picker component.",
    code: `npx shadcn-vue add date-picker`,
    language: "bash",
    showLineNumbers: false,
  },
];
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem> Components </BreadCrumbItem>
      <BreadCrumbItem path="/docs/components/date-picker" lastItem>
        Date Picker
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="font-heading text-4xl text-foreground">
        {{ datePicker?.attributes.name }}
      </h1>
      <p class="max-w-xl text-lg text-muted-foreground">
        {{ datePicker?.attributes.description }}
      </p>
    </div>

    <Example>
      <Preview>
        <Popover>
          <PopoverTrigger class="w-72">
            <Button
              variant="outline"
              class="flex w-full items-center justify-start space-x-2 text-left"
            >
              <RadixIconsCalendar class="h-4 w-4 opacity-60" />
              <p class="text-muted-foreground" v-if="!date">Pick a date</p>

              <span class="text-foreground" v-if="date">
                {{ format(date, "MMM dd, yyyy") }}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent class="p-2">
            <Calendar v-model="date" />
          </PopoverContent>
        </Popover>
      </Preview>
      <Source>
        <Code
          :code="datePicker?.attributes.code!"
          language="vue"
          :show-line-numbers="false"
        />
      </Source>
    </Example>

    <div class="pt-8">
      <h1 class="font-heading text-2xl text-foreground">Installation</h1>
      <Separator class="mt-2" />

      <p class="mt-4 leading-8 text-foreground">
        The Date Picker is built using a composition of the
        <a
          href="https://vcalendar.io/"
          target="_blank"
          class="font-bold underline"
        >
          VCalendar
        </a>
        library and the
        <code class="inline-flex rounded-md bg-secondary px-1.5 py-0.5 text-sm">
          Popover
        </code>
        component. Here are the steps to install the Date Picker component:
      </p>

      <div class="pt-4">
        <ol class="relative border-l border-border">
          <li class="mb-10 ml-8" v-for="(step, index) in steps" :key="index">
            <span
              class="absolute -left-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-sm"
            >
              {{ index + 1 }}
            </span>
            <div class="space-y-2">
              <h3
                class="text-xl font-semibold leading-tight text-foreground"
                v-html="step.title"
              ></h3>
              <p class="text-sm text-foreground">
                {{ step.description }}
              </p>
            </div>

            <div class="mt-4">
              <Code
                :code="step.code"
                :language="step.language"
                :show-line-numbers="step.showLineNumbers"
                :highlighted-lines="step.highlightedLines"
              />
            </div>
          </li>
        </ol>
      </div>
    </div>

    <div class="pt-8">
      <h1 class="font-heading text-2xl text-foreground">Usage</h1>
      <Separator class="mb-6 mt-2" />

      <div class="space-y-6">
        <Code
          :code="datePicker?.attributes.usageImportCode!"
          language="vue"
          :show-line-numbers="false"
        />

        <Code
          :code="datePicker?.attributes.usageCode!"
          language="vue"
          :show-line-numbers="false"
        />
      </div>
    </div>

    <DocsPagination>
      <DocsPrevious
        title="Data Table"
        description="A supercharged version of the HTML table element that provides tools for searching, sorting, pagination and more."
        to="/docs/components/data-table"
      />
      <DocsNext
        title="Dialog"
        description="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
        to="/docs/components/dialog"
      />
    </DocsPagination>
  </DocsLayout>
</template>
