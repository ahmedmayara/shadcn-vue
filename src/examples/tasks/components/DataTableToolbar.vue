<script setup lang="ts">
import { type Table } from "@tanstack/vue-table";
import { computed } from "vue";
import { type Task } from "../data/schema";

import xlxs, { type IJsonSheet } from "json-as-xlsx";

import { priorities, statuses } from "../data/data";
import DataTableFacetedFilter from "./DataTableFacetedFilter.vue";
import DataTableViewOptions from "./DataTableViewOptions.vue";

import Cross2Icon from "~icons/radix-icons/cross-2";
import DownloadIcon from "~icons/radix-icons/download";

import { Button } from "@/components/ui/new-york/button";
import { Input } from "@/components/ui/new-york/input";

interface DataTableToolbarProps {
  table: Table<Task>;
}

const props = defineProps<DataTableToolbarProps>();

const isFiltered = computed(
  () => props.table.getState().columnFilters.length > 0,
);

const searchValue = computed({
  get() {
    return props.table.getColumn("title")?.getFilterValue() as string;
  },
  set(value: string) {
    props.table.getColumn("title")?.setFilterValue(value);
  },
});

function exportToExcel() {
  const columns: IJsonSheet[] = [
    {
      sheet: "Tasks",
      columns: [
        {
          label: "ID",
          value: "id",
        },
        {
          label: "Title",
          value: "title",
        },
        {
          label: "Status",
          value: "status",
        },
        {
          label: "Label",
          value: "label",
        },
        {
          label: "Priority",
          value: "priority",
        },
      ],
      content: props.table
        .getFilteredRowModel()
        .rows.map((row) => row.original),
    },
  ];

  const settings = {
    fileName: "tasks",
    extraLength: 3,
    writeOptions: {},
  };

  xlxs(columns, settings);
}
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-1 items-center space-x-2">
      <Input
        placeholder="Filter tasks..."
        v-model:value="searchValue"
        class="h-8 w-[150px] lg:w-[250px]"
      />
      <DataTableFacetedFilter
        v-if="table.getColumn('status')"
        :column="table.getColumn('status')"
        title="Status"
        :options="statuses"
      />
      <DataTableFacetedFilter
        v-if="table.getColumn('priority')"
        :column="table.getColumn('priority')"
        title="Priority"
        :options="priorities"
      />

      <Button
        v-if="isFiltered"
        variant="ghost"
        class="h-8 px-2 text-xs lg:px-3"
        @click="table.resetColumnFilters()"
      >
        Reset
        <Cross2Icon class="ml-2 h-4 w-4" />
      </Button>
    </div>
    <Button
      variant="outline"
      class="mr-2 h-8 text-xs lg:px-3"
      @click="exportToExcel"
    >
      <DownloadIcon class="mr-2 h-4 w-4" />
      Export to Excel
    </Button>
    <DataTableViewOptions :table="table" />
  </div>
</template>
