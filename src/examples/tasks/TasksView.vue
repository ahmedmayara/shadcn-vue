<script setup lang="ts">
import ExamplesLayout from "@/layouts/ExamplesLayout.vue";
import { faker } from "@faker-js/faker";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { columns } from "./columns/columns";
import { labels, statuses, priorities } from "./utils/data";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { DataTable } from "@/components/ui/data-table";

const tasks = Array.from({ length: 100 }, () => {
  return {
    id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
    title: faker.hacker.phrase().replace(/^./, (str) => str.toUpperCase()),
    status: faker.helpers.arrayElement(statuses).label,
    label: faker.helpers.arrayElement(labels).value,
    priority: faker.helpers.arrayElement(priorities).label,
  };
});
</script>

<template>
  <ExamplesLayout>
    <div
      class="flex justify-center flex-col border border-border p-8 rounded-xl"
    >
      <div class="flex items-center justify-between space-y-2 mb-6">
        <div>
          <h2 class="text-2xl font-bold text-foreground">Welcome back!</h2>
          <p class="text-muted-foreground">
            Here is a list of your most recent tasks.
          </p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar size="sm">
              <AvatarImage
                src="https://api.dicebear.com/6.x/lorelei/svg?seed=Buster"
              />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" class="w-[200px]" :side-offset="0">
            <DropdownMenuGroup>
              <DropdownMenuLabel>
                <span class="text-sm">ahmedmayara</span>
                <p class="text-xs font-normal text-muted-foreground">
                  ahmedmayara@example.com
                </p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Profile</span>
                <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Settings</span>
                <DropdownMenuShortcut>⌘,</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Logout</span>
                <DropdownMenuShortcut>⌘⌫L</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <DataTable :data="tasks" :columns="columns" />
    </div>
  </ExamplesLayout>
</template>
