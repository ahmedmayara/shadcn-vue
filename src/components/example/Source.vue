<script setup lang="ts">
import { TabsContent } from "@/components/ui/default/tabs";
</script>

<template>
  <TabsContent value="code" class="mt-6">
    <slot />
  </TabsContent>
</template>
