<script setup lang="ts">
import {
  FlexRender,
  useVueTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  type SortingState,
  type ColumnDef,
} from "@tanstack/vue-table";
import { ref } from "vue";

import {
  Table,
  TableBody,
  TableHeader,
  TableHead,
  TableRow,
  TableCell,
  TableEmpty,
} from "@/components/ui/new-york/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
} from "@/components/ui/new-york/dropdown-menu";
import { Input } from "@/components/ui/new-york/input";
import { Button } from "@/components/ui/new-york/button";

import ChevronDownIcon from "~icons/radix-icons/chevron-down";
import CaretSortIcon from "~icons/radix-icons/caret-sort";
import CaretUpIcon from "~icons/radix-icons/caret-up";
import CaretDownIcon from "~icons/radix-icons/caret-down";

interface tableProps {
  data: any[];
  columns: ColumnDef<any>[];
}

const props = defineProps<tableProps>();

const sorting = ref<SortingState>([]);
const globalFilter = ref("");
const columnVisibility = ref({});
const rowSelection = ref({});

const table = useVueTable({
  data: props.data,
  columns: props.columns,
  state: {
    get sorting() {
      return sorting.value;
    },
    get globalFilter() {
      return globalFilter.value;
    },
    get columnVisibility() {
      return columnVisibility.value;
    },
    get rowSelection() {
      return rowSelection.value;
    },
  },
  onSortingChange: (updaterOrValue) => {
    sorting.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(sorting.value)
        : updaterOrValue;
  },
  onGlobalFilterChange: (updaterOrValue) => {
    globalFilter.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(globalFilter.value)
        : updaterOrValue;
  },
  onRowSelectionChange: (updaterOrValue) => {
    rowSelection.value =
      typeof updaterOrValue === "function"
        ? updaterOrValue(rowSelection.value)
        : updaterOrValue;
  },
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
});

function toggleColumnVisibility(column: any) {
  columnVisibility.value = {
    ...columnVisibility.value,
    [column.id]: !column.getIsVisible(),
  };
}
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex flex-1 items-center space-x-2">
      <div class="w-full max-w-[24rem]">
        <Input
          v-model:value="globalFilter"
          placeholder="Filter payements..."
          id="filter-payments"
        />
      </div>
    </div>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">
          <span class="text-sm">Columns</span>
          <ChevronDownIcon class="ml-1.5 h-4 w-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" class="w-40">
        <DropdownMenuGroup>
          <DropdownMenuCheckboxItem
            v-for="column in table
              .getAllColumns()
              .filter((column) => !column.getCanHide())"
            :key="column.id"
            :checked="column.getIsVisible()"
            @update:checked="toggleColumnVisibility(column)"
          >
            <span class="text-sm">{{ column.columnDef.header }}</span>
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>

  <Table class="mt-4 rounded-md border border-border">
    <TableHeader>
      <TableRow
        v-for="headerGroup in table.getHeaderGroups()"
        :key="headerGroup.id"
      >
        <TableHead
          class="h-10 px-2.5"
          v-for="header in headerGroup.headers"
          :key="header.id"
          :colSpan="header.colSpan"
        >
          <template v-if="!header.isPlaceholder">
            <div class="flex items-center space-x-2">
              <Button
                variant="ghost"
                class="-translate-x-3"
                @click="header.column.getToggleSortingHandler()?.($event)"
                v-if="header.column.getCanSort()"
              >
                <FlexRender
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
                <CaretSortIcon
                  v-if="
                    header.column.getCanSort() && !header.column.getIsSorted()
                  "
                  class="ml-1.5 h-3.5 w-3.5 text-muted-foreground"
                />
                <CaretUpIcon
                  class="ml-1.5 h-3.5 w-3.5 text-muted-foreground"
                  v-if="header.column.getIsSorted() === 'asc'"
                />
                <CaretDownIcon
                  class="ml-1.5 h-3.5 w-3.5 text-muted-foreground"
                  v-if="header.column.getIsSorted() === 'desc'"
                />
              </Button>
              <span
                v-else
                class="flex h-8 items-center justify-center text-muted-foreground"
              >
                <FlexRender
                  :render="header.column.columnDef.header"
                  :props="header.getContext()"
                />
              </span>
            </div>
          </template>
        </TableHead>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow
        v-for="row in table.getRowModel().rows"
        :key="row.id"
        :data-state="row.getIsSelected() ? 'selected' : ''"
      >
        <TableCell
          v-for="cell in row.getVisibleCells()"
          :key="cell.id"
          class="p-2.5"
        >
          <FlexRender
            :render="cell.column.columnDef.cell"
            :props="cell.getContext()"
          />
        </TableCell>
      </TableRow>

      <TableEmpty
        v-if="table.getRowModel().rows.length === 0"
        :colspan="table.getAllLeafColumns().length"
      >
        No data available.
      </TableEmpty>
    </TableBody>
  </Table>

  <div class="my-6 flex items-center justify-end px-2">
    <div class="flex-1 text-sm text-muted-foreground">
      <span>
        {{ table.getFilteredSelectedRowModel().rows.length }} of {{ " " }}
        {{ table.getFilteredRowModel().rows.length }} row(s) selected
      </span>
    </div>
    <div class="flex items-center space-x-6 lg:space-x-8">
      <div class="flex items-center space-x-2">
        <Button
          variant="outline"
          aria-label="Previous page"
          :disabled="!table.getCanPreviousPage()"
          @click="table.previousPage()"
        >
          <span class="text-muted-foreground">Previous</span>
        </Button>
        <Button
          variant="outline"
          aria-label="Next page"
          :disabled="!table.getCanNextPage()"
          @click="table.nextPage()"
        >
          <span class="text-muted-foreground">Next</span>
        </Button>
      </div>
    </div>
  </div>
</template>
