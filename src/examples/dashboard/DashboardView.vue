<script setup lang="ts">
import { ref } from "vue";
import { format } from "date-fns";
import ExamplesLayout from "@/layouts/ExamplesLayout.vue";
import { series, options, customers } from "./utils/data";
import RadixIconsCalendar from "~icons/radix-icons/calendar";
import {
  Command,
  Search,
  DollarSign,
  Package,
  CreditCard,
  Users,
} from "lucide-vue-next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { DatePicker } from "@/components/ui/date-picker";
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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";

const range = ref({
  start: new Date(2023, 0, 20),
  end: new Date(2023, 1, 9),
});
</script>

<template>
  <ExamplesLayout>
    <div
      class="flex justify-center flex-col border border-border p-8 rounded-xl"
    >
      <div class="border-b flex border-border mx-6">
        <div class="flex h-16 items-center">
          <div class="flex items-center space-x-2">
            <Command class="w-5 h-5 text-foreground" />
            <p class="text-foreground font-semibold">Acme Inc.</p>
          </div>
        </div>
        <div class="ml-auto flex items-center space-x-4">
          <Button
            variant="outline"
            class="w-72 h-9 hidden md:flex md:justify-between md:items-center"
          >
            <div class="flex items-center">
              <Search class="w-4 h-4 mr-2 text-muted" />
              <span class="text-muted">Search for anything...</span>
            </div>
            <div class="flex items-center gap-x-1">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </div>
          </Button>
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
                  <p class="text-xs font-normal text-muted">
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
      </div>

      <div class="flex-1 space-y-4 px-6 pt-6">
        <div class="flex items-center justify-between space-y-2">
          <h3 class="text-3xl font-bold tracking-tight text-foreground">
            Dashboard
          </h3>
          <div class="flex items-center space-x-2">
            <div class="grid gap-2">
              <Popover>
                <PopoverTrigger class="w-72">
                  <Button
                    variant="outline"
                    class="w-full h-9 text-left flex justify-start items-center space-x-2"
                  >
                    <span class="text-muted" v-if="!range"> Pick a date </span>
                    <RadixIconsCalendar class="w-4 h-4 opacity-60" />

                    <span class="text-foreground" v-if="range">
                      {{ format(range.start, "MMM dd, yyyy") }} -
                      {{ format(range.end, "MMM dd, yyyy") }}
                    </span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent class="w-auto p-2" align="end">
                  <DatePicker v-model.range="range" :columns="2" />
                </PopoverContent>
              </Popover>
            </div>
            <Button class="h-9"> Download </Button>
          </div>
        </div>

        <Tabs default-value="overview">
          <TabsList>
            <TabsTrigger value="overview"> Overview </TabsTrigger>
            <TabsTrigger disabled value="analytics"> Analytics </TabsTrigger>
            <TabsTrigger disabled value="products"> Products </TabsTrigger>
            <TabsTrigger disabled value="tasks"> Tasks </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
              <Card>
                <CardHeader
                  class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
                >
                  <CardTitle class="text-sm"> Total Revenue </CardTitle>
                  <DollarSign class="w-4 h-4 text-muted" />
                </CardHeader>
                <CardContent>
                  <p class="text-2xl font-bold tracking-tight text-foreground">
                    $ 1,250,000
                  </p>
                  <span class="text-xs text-muted">
                    +25.7% since last month
                  </span>
                </CardContent>
              </Card>

              <Card>
                <CardHeader
                  class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
                >
                  <CardTitle class="text-sm"> Sales </CardTitle>
                  <CreditCard class="w-4 h-4 text-muted" />
                </CardHeader>
                <CardContent>
                  <p class="text-2xl font-bold tracking-tight text-foreground">
                    +14,000
                  </p>
                  <span class="text-xs text-muted">
                    +5.7% since last month
                  </span>
                </CardContent>
              </Card>

              <Card>
                <CardHeader
                  class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
                >
                  <CardTitle class="text-sm"> Customers </CardTitle>
                  <Users class="w-4 h-4 text-muted" />
                </CardHeader>
                <CardContent>
                  <p class="text-2xl font-bold tracking-tight text-foreground">
                    +2340
                  </p>
                  <span class="text-xs text-muted">
                    +3.85% since last month
                  </span>
                </CardContent>
              </Card>

              <Card>
                <CardHeader
                  class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
                >
                  <CardTitle class="text-sm"> Orders </CardTitle>
                  <Package class="w-4 h-4 text-muted" />
                </CardHeader>
                <CardContent>
                  <p class="text-2xl font-bold tracking-tight text-foreground">
                    +6340
                  </p>
                  <span class="text-xs text-muted">
                    +17.85% since last month
                  </span>
                </CardContent>
              </Card>
            </div>

            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7 pt-6">
              <Card class="col-span-4">
                <CardHeader>
                  <CardTitle class="text-lg">Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <apexchart type="bar" :options="options" :series="series" />
                </CardContent>
              </Card>

              <Card class="col-span-4 lg:col-span-3">
                <CardHeader>
                  <CardTitle class="text-lg"> Top Customers </CardTitle>
                  <CardDescription>
                    Here is the list of top customers for this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul>
                    <li
                      class="py-3 sm:py-4"
                      v-for="customer in customers"
                      :key="customer.id"
                    >
                      <div class="flex items-center space-x-4">
                        <div class="flex-shrink-0">
                          <Avatar size="sm">
                            <AvatarImage :src="customer.avatar" />
                            <AvatarFallback>
                              {{ customer.name[0] }}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div class="flex-1 min-w-0">
                          <p
                            class="text-sm font-medium text-foreground truncate"
                          >
                            {{ customer.name }}
                          </p>
                          <span class="text-xs text-muted">
                            {{ customer.email }}
                          </span>
                        </div>
                        <div
                          class="inline-flex items-center font-semibold text-foreground"
                        >
                          {{ customer.price }}
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  </ExamplesLayout>
</template>
