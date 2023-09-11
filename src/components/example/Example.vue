<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/default/tabs";
</script>

<template>
  <div class="pt-8">
    <Tabs default-value="preview">
      <TabsList
        class="inline-flex h-9 items-center w-full justify-start rounded-none border-b border-border dark:bg-transparent bg-transparent p-0"
      >
        <TabsTrigger
          class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm focus-visible:outline-none data-[state=active]:border-b-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
          value="preview"
        >
          Preview
        </TabsTrigger>
        <TabsTrigger
          class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm focus-visible:outline-none data-[state=active]:border-b-foreground data-[state=active]:bg-transparent data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
          value="code"
        >
          Code
        </TabsTrigger>
      </TabsList>

      <slot />
    </Tabs>
  </div>
</template>
