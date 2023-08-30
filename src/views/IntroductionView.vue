<script setup lang="ts">
import { ref } from "vue";
import DocsLayout from "@/layouts/DocsLayout.vue";
import { BreadCrumb, BreadCrumbItem } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion";
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem>Docs</BreadCrumbItem>
      <BreadCrumbItem path="/docs" lastItem> Introduction </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="text-4xl font-heading text-foreground">Introduction</h1>
      <p class="text-muted-foreground text-lg">
        Collection of accessible Vue components built with Tailwind CSS and
        Radix UI.
      </p>
    </div>

    <Separator class="my-4" />

    <div class="grid space-y-6 text-foreground text-md">
      <p>
        <span class="font-bold">This is not a UI kit.</span> It is a collection
        of fully accessible Vue components built with Tailwind CSS and Radix UI,
        ready to use in your projects. They are designed to be as generic and
        reusable as possible.
      </p>

      <p>
        Customizing the components is easy. You can use the Tailwind CSS config
        file to customize the look and feel of the components.
      </p>

      <p>
        This collection is not distributed or published as an npm package. You
        can use the
        <RouterLink to="docs/cli" class="underline font-bold"> CLI </RouterLink>
        to install the components in your project.
      </p>

      <p>Pick any component from the collection and use it in your project.</p>

      <p>
        <span class="font-semibold">
          You can use the components in this collection as a starting point to
          build your own components.
        </span>
      </p>
    </div>

    <h2 class="text-3xl uppercase font-heading text-foreground pt-10">Faq</h2>

    <Separator class="my-4" />

    <Accordion collapsible type="multiple">
      <AccordionItem value="faq1">
        <AccordionTrigger class="text-sm">
          Why copy/paste and not packaged as a dependency?
        </AccordionTrigger>
        <AccordionContent>
          <p class="leading-7 [&:not(:first-child)]:mt-6">
            The idea behind this is to give you ownership and control over the
            code, allowing you to decide how the components are built and
            styled.
          </p>
          <p class="leading-7 [&:not(:first-child)]:mt-6">
            Start with some sensible defaults, then customize the components to
            your needs.
          </p>
          <p class="leading-7 [&:not(:first-child)]:mt-6">
            One of the drawback of packaging the components in an npm package is
            that the style is coupled with the implementation. The design of
            your components should be separate from their implementation.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq2">
        <AccordionTrigger class="text-sm">
          Can I use this in my commercial projects?
        </AccordionTrigger>
        <AccordionContent>
          <p class="leading-7 [&:not(:first-child)]:mt-6">
            Yes, you can use the components in your commercial projects.
          </p>
          <p class="leading-7 [&:not(:first-child)]:mt-6">
            You can use them in your personal projects as well. You can use them
            in any project you want.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq3">
        <AccordionTrigger class="text-sm">
          Which frameworks are supported?
        </AccordionTrigger>
        <AccordionContent>
          <p class="leading-7 [&:not(:first-child)]:mt-6">
            The components are completely compatible with Vue 3 and Nuxt 3.
          </p>

          <p class="leading-7 [&:not(:first-child)]:mt-6">
            You can create your project using the Vue CLI or the Nuxt CLI.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq4">
        <AccordionTrigger class="text-sm"> Why is it free? </AccordionTrigger>
        <AccordionContent>
          <p class="leading-7 [&:not(:first-child)]:mt-6">
            I believe that the best way to learn is by doing. I also believe
            that the best way to learn is by teaching.
          </p>

          <p class="leading-7 [&:not(:first-child)]:mt-6">
            I am learning a lot by building this collection and I am learning a
            lot by teaching you how to use it.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </DocsLayout>
</template>
