<script setup lang="ts">
import { computed } from "vue";
import type { Row } from "@tanstack/vue-table";
import { type Payment } from "../data";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/default/dropdown-menu";
import { Button } from "@/components/ui/default/button";

import DotsHorizontalIcon from "~icons/radix-icons/dots-horizontal";

interface PaymentsDataTableRowActionsProps {
  row: Row<Payment>;
}

const props = defineProps<PaymentsDataTableRowActionsProps>();

const payment = computed(() => props.row.original);
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        variant="ghost"
        class="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
      >
        <DotsHorizontalIcon class="h-4 w-4" />
        <span class="sr-only">Open menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuGroup>
        <DropdownMenuLabel> Actions </DropdownMenuLabel>

        <DropdownMenuItem> Copy payment ID </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem> View customer </DropdownMenuItem>
        <DropdownMenuItem> View payment details </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
