<script setup lang="ts">
import ExamplesLayout from "@/layouts/ExamplesLayout.vue";
import tasks from "./data/tasks.json";
import DataTable from "./components/DataTable.vue";
import UserNav from "./components/UserNav.vue";
import { columns } from "./components/columns";
</script>

<template>
  <ExamplesLayout>
    <div
      class="hidden h-full flex-1 flex-col space-y-8 rounded-xl border border-border p-8 md:flex"
    >
      <div class="flex items-center justify-between space-y-2">
        <div>
          <h2 class="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p class="text-muted-foreground">
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
        <div class="flex items-center space-x-2">
          <UserNav />
        </div>
      </div>
      <DataTable :data="tasks" :columns="columns" />
    </div>
  </ExamplesLayout>
</template>
