<script setup lang="ts">
import { sidebarItems } from "../utils/sidebar";

import { Button } from "@/components/ui/new-york/button";
</script>

<template>
  <div class="hidden border-r border-border pb-12 lg:block">
    <div class="space-y-4 py-4">
      <div class="px-3 py-2" v-for="item in sidebarItems" :key="item.header">
        <h3 class="px-4 text-lg font-semibold tracking-tight">
          {{ item.header }}
        </h3>
        <div
          class="mt-2 flex flex-col space-y-1.5"
          v-for="subItem in item.subItems"
          :key="subItem.title"
        >
          <Button
            class="justify-start"
            variant="ghost"
            :class="{ 'bg-secondary': subItem.selected }"
          >
            <component :is="subItem.icon" class="mr-2 h-4 w-4" />
            {{ subItem.title }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
