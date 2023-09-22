<script setup lang="ts">
import { computed } from "vue";
import Code from "@/components/Code.vue";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import components from "@/lib/data/components";
import { Separator } from "@/components/ui/default/separator";
import DocsLayout from "@/layouts/DocsLayout.vue";

const steps = [
  {
    title: "Create a new Vue 3 app",
    description: "Start by creating a new Vue 3 app.",
    code: `npm init vue@latest my-app`,
    language: "bash",
    showLineNumbers: false,
  },
  {
    title: "Install Tailwind CSS",
    description: "Install Tailwind CSS and its peer-dependencies.",
    code: `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`,
    language: "bash",
    showLineNumbers: false,
  },
  {
    title: "Run the CLI",
    description: "Run the shadcn-vue init command to setup your app:",
    code: `npx shadcn-vue init`,
    language: "bash",
    showLineNumbers: false,
  },
  {
    title: "App structure",
    description:
      "This is how I structure my Vue 3 apps. Feel free to change it to your liking.",
    code: `src
├── components
│   ├── ui
│   │   ├── button
│   │   │   ├── Button.vue
│   │   │   └── index.ts
│   │   ├── input
│   │   │   ├── Input.vue
│   │   │   └── index.ts
│   │   ├── badge
│   │   │   ├── Badge.vue
│   │   │   └── index.ts
│   │   └── ...
│   ├── Navbar.vue
│   ├── Header.vue
│   └── ...
├── lib
│   └── utils.ts
├── assets
    └── main.css
├── layouts
├── router
├── views
├── App.vue
├── main.ts
├──.gitignore
├── env.d.ts
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── prettier.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
`,
    language: "markdown",
    showLineNumbers: false,
    highlights: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 18],
  },
  {
    title: "That's it!",
    description: "You're ready to start adding components to your project.",
    code: `npx shadcn-vue add button`,
    language: "bash",
    showLineNumbers: false,
  },
];

const button = computed(() => {
  return components.find((component) => component.attributes.name === "Button");
});
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem path="/docs/installation" lastItem>
        Installation
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="font-heading text-4xl text-foreground">Installation</h1>
      <p class="text-lg text-muted-foreground">
        How to install dependencies and setup your project.
      </p>
    </div>

    <Separator class="my-4" />

    <div class="pt-4">
      <ol class="relative border-l border-border">
        <li class="mb-10 ml-8" v-for="(step, index) in steps" :key="index">
          <span
            class="absolute -left-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-sm"
          >
            {{ index + 1 }}
          </span>
          <div class="space-y-2">
            <h3 class="text-xl font-semibold leading-tight text-foreground">
              {{ step.title }}
            </h3>
            <p class="text-sm text-foreground">
              {{ step.description }}
            </p>
          </div>

          <div class="mt-4">
            <Code
              :code="step.code"
              :language="step.language"
              :showLineNumbers="step.showLineNumbers"
              :highlights="step.highlights"
            />
          </div>

          <div v-if="step.title === 'App structure'" class="mt-6">
            <ul class="text-md list-inside list-disc leading-8 text-foreground">
              <li>
                I kepp the UI components in the
                <code
                  class="inline-flex rounded-md bg-accent px-1.5 py-0.5 text-sm"
                >
                  components/ui
                </code>
                folder.
              </li>
              <li>
                The rest of the components such as
                <code
                  class="inline-flex rounded-md bg-accent px-1.5 py-0.5 text-sm"
                  >Navbar</code
                >,
                <code
                  class="inline-flex rounded-md bg-accent px-1.5 py-0.5 text-sm"
                  >Header</code
                >, etc. are kept in the root of the components folder.
              </li>
              <li>
                The
                <code
                  class="inline-flex rounded-md bg-accent px-1.5 py-0.5 text-sm"
                >
                  lib
                </code>
                folder is used for utility functions. There is a file called
                <code
                  class="inline-flex rounded-md bg-accent px-1.5 py-0.5 text-sm"
                >
                  utils.ts
                </code>
                where I keep the
                <code
                  class="inline-flex rounded-md bg-accent px-1.5 py-0.5 text-sm"
                >
                  cn
                </code>
                helper function.
              </li>
              <li>
                The
                <code
                  class="inline-flex rounded-md bg-accent px-1.5 py-0.5 text-sm"
                >
                  assets
                </code>
                folder is used for global styles. I keep the
                <code
                  class="inline-flex rounded-md bg-accent px-1.5 py-0.5 text-sm"
                >
                  main.css
                </code>
                file there.
              </li>
            </ul>
          </div>

          <div v-if="step.title === 'That\'s it!'" class="mt-6">
            <p class="text-md text-foreground">
              The command above will add the
              <code
                class="inline-flex rounded-md bg-accent px-1.5 py-0.5 text-sm"
              >
                Button
              </code>
              component to your project. You can then import it like this :
            </p>

            <div class="mt-4">
              <Code
                :code="button?.attributes.code!"
                language="typescript"
                :showLineNumbers="true"
                :highlights="[2, 6]"
              />
            </div>
          </div>
        </li>
      </ol>
    </div>
  </DocsLayout>
</template>
