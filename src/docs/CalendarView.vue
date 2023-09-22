<script setup lang="ts">
import { computed, ref } from "vue";
import { Calendar } from "@/components/ui/default/calendar";
import components from "@/lib/data/components";
import DocsLayout from "@/layouts/DocsLayout.vue";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import Example from "@/components/example/Example.vue";
import Preview from "@/components/example/Preview.vue";
import Source from "@/components/example/Source.vue";
import { startOfToday } from "date-fns";
import Code from "@/components/Code.vue";
import { Separator } from "@/components/ui/default/separator";
import DocsPagination from "@/components/docs-pagination/DocsPagination.vue";
import DocsPrevious from "@/components/docs-pagination/DocsPrevious.vue";
import DocsNext from "@/components/docs-pagination/DocsNext.vue";

const calendar = computed(() => {
  return components.find(
    (component) => component.attributes.name === "Calendar",
  );
});

const steps = [
  {
    title: "Install the VCalendar library",
    description:
      "You need to install the VCalendar library for the Calendar component to work.",
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
    title: "Install the Calendar component",
    description: "Finally, you can install the Calendar component.",
    code: `npx shadcn-vue add calendar`,
    language: "bash",
    showLineNumbers: false,
  },
];

const date = ref(startOfToday());
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem> Components </BreadCrumbItem>
      <BreadCrumbItem path="/docs/components/calendar" lastItem>
        Calendar
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="text-4xl font-heading text-foreground">
        {{ calendar?.attributes.name }}
      </h1>
      <p class="text-muted-foreground text-lg max-w-xl">
        {{ calendar?.attributes.description }}
      </p>
    </div>

    <Example>
      <Preview>
        <div class="p-2 border border-border rounded-xl w-full max-w-[350px]">
          <Calendar v-model="date" />
        </div>
      </Preview>
      <Source>
        <Code :code="calendar?.attributes.code!" language="vue" />
      </Source>
    </Example>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Installation</h1>
      <Separator class="mt-2" />

      <p class="text-foreground leading-8 mt-4">
        The Calendar component is built on top of the
        <a
          href="https://vcalendar.io/"
          target="_blank"
          class="underline font-bold"
        >
          VCalendar
        </a>
        library. Here are the steps to install the Calendar component:
      </p>

      <div class="pt-4">
        <ol class="relative border-l border-border">
          <li class="mb-10 ml-8" v-for="(step, index) in steps" :key="index">
            <span
              class="absolute flex text-sm items-center justify-center w-7 h-7 rounded-full -left-3.5 bg-accent"
            >
              {{ index + 1 }}
            </span>
            <div class="space-y-2">
              <h3
                class="font-semibold text-xl leading-tight text-foreground"
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
                :showLineNumbers="step.showLineNumbers"
                :highlights="step.highlightedLines"
              />
            </div>
          </li>
        </ol>
      </div>
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Usage</h1>
      <Separator class="mt-2 mb-6" />

      <div class="space-y-6">
        <Code
          :code="calendar?.attributes.usageImportCode!"
          language="vue"
          :show-line-numbers="false"
        />

        <Code
          :code="calendar?.attributes.usageCode!"
          language="vue"
          :show-line-numbers="false"
        />
      </div>

      <p class="text-foreground leading-8 mt-4">
        You can see the
        <a
          href="https://vcalendar.io/"
          class="underline font-bold underline-offset-4"
          target="_blank"
        >
          VCalendar
        </a>
        documentation for more information on how to use the Calendar component.
      </p>
    </div>

    <DocsPagination>
      <DocsPrevious
        title="Button"
        description="Displays a component that triggers an event or action that looks like a button."
        to="/docs/components/button"
      />
      <DocsNext
        title="Card"
        description="Displays a card with header, content, and footer."
        to="/docs/components/card"
      />
    </DocsPagination>
  </DocsLayout>
</template>
