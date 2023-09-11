<script setup lang="ts">
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
