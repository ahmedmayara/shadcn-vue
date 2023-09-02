<script setup lang="ts">
import { TabsContent } from "@/components/ui/tabs";
</script>

<template>
  <TabsContent value="preview">
    <div
      class="flex mt-6 w-full min-h-[450px] justify-center items-center flex-col rounded-lg p-8 border border-border"
    >
      <slot />
    </div>
  </TabsContent>
</template>
