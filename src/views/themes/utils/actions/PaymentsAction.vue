<script setup lang="ts">
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

import { MoreHorizontal } from "lucide-vue-next";

interface Props {
  row: Row<Payment>;
}

const props = defineProps<Props>();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" class="p-1.5">
        <MoreHorizontal class="w-4 h-4 text-muted-foreground" />
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
