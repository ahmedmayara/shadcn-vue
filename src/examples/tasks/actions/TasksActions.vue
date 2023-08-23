<script setup lang="ts">
import type { Row } from "@tanstack/vue-table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { MoreHorizontal, ChevronRight } from "lucide-vue-next";

import { labels } from "../utils/data";

interface Task {
  id: string;
  title: string;
  status: string;
  label: string;
  priority: string;
}

interface Props {
  row: Row<Task>;
}

const props = defineProps<Props>();

const task = props.row.original;

function handleCopy() {
  navigator.clipboard.writeText(task.id);
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" class="p-1.5">
        <MoreHorizontal class="w-4 h-4 text-muted" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-[160px]">
      <DropdownMenuGroup>
        <DropdownMenuItem> Edit </DropdownMenuItem>
        <DropdownMenuItem @click="handleCopy"> Make a copy </DropdownMenuItem>
        <DropdownMenuItem> Favorite </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            Labels
            <ChevronRight class="w-4 h-4 ml-auto" />
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup v-model="task.label">
              <DropdownMenuRadioItem
                v-for="(label, index) in labels"
                :key="index"
                :value="label.value"
              >
                {{ label.label }}
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
