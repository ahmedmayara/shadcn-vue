<script setup lang="ts">
import { ref } from "vue";
import { format } from "date-fns";
import ExamplesLayout from "@/layouts/ExamplesLayout.vue";
import { series, options, customers } from "./utils/data";
import RadixIconsCalendar from "~icons/radix-icons/calendar";
import { DollarSign, Package, CreditCard, Users } from "lucide-vue-next";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/default/avatar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/default/popover";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/new-york/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/new-york/tabs";
import { Button } from "@/components/ui/new-york/button";
import TeamSwitcher from "./components/TeamSwitcher.vue";
import MainNav from "./components/MainNav.vue";
import UserNav from "./components/UserNav.vue";
import Search from "./components/Search.vue";
import DateRangePicker from "./components/DateRangePicker.vue";

const range = ref({
  start: new Date(2023, 0, 20),
  end: new Date(2023, 1, 9),
});
</script>

<template>
  <ExamplesLayout>
    <div class="flex justify-center flex-col border border-border rounded-xl">
      <div class="border-b border-border">
        <div class="flex h-16 items-center px-4">
          <TeamSwitcher />
          <MainNav class="mx-6" />
          <div class="ml-auto flex items-center space-x-4">
            <Search />
            <UserNav />
          </div>
        </div>
      </div>

      <div class="flex-1 space-y-4 px-6 pt-6">
        <div class="flex items-center justify-between space-y-2">
          <h3 class="text-3xl font-bold tracking-tight text-foreground">
            Dashboard
          </h3>
          <div class="flex items-center space-x-2">
            <DateRangePicker />
            <Button> Download </Button>
          </div>
        </div>

        <Tabs default-value="overview">
          <TabsList>
            <TabsTrigger value="overview"> Overview </TabsTrigger>
            <TabsTrigger disabled value="analytics"> Analytics </TabsTrigger>
            <TabsTrigger disabled value="products"> Reports </TabsTrigger>
            <TabsTrigger disabled value="tasks"> Notifications </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
              <Card>
                <CardHeader
                  class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
                >
                  <CardTitle class="text-sm"> Total Revenue </CardTitle>
                  <DollarSign class="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p class="text-2xl font-bold tracking-tight text-foreground">
                    $ 1,250,000
                  </p>
                  <span class="text-xs text-muted-foreground">
                    +25.7% since last month
                  </span>
                </CardContent>
              </Card>

              <Card>
                <CardHeader
                  class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
                >
                  <CardTitle class="text-sm"> Sales </CardTitle>
                  <CreditCard class="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p class="text-2xl font-bold tracking-tight text-foreground">
                    +14,000
                  </p>
                  <span class="text-xs text-muted-foreground">
                    +5.7% since last month
                  </span>
                </CardContent>
              </Card>

              <Card>
                <CardHeader
                  class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
                >
                  <CardTitle class="text-sm"> Customers </CardTitle>
                  <Users class="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p class="text-2xl font-bold tracking-tight text-foreground">
                    +2340
                  </p>
                  <span class="text-xs text-muted-foreground">
                    +3.85% since last month
                  </span>
                </CardContent>
              </Card>

              <Card>
                <CardHeader
                  class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
                >
                  <CardTitle class="text-sm"> Orders </CardTitle>
                  <Package class="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p class="text-2xl font-bold tracking-tight text-foreground">
                    +6340
                  </p>
                  <span class="text-xs text-muted-foreground">
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
                          <span class="text-xs text-muted-foreground">
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

<style>
.apexcharts-text.apexcharts-xaxis-label {
  fill: hsl(var(--muted-foreground)) !important;
}

.apexcharts-text.apexcharts-yaxis-label {
  fill: hsl(var(--muted-foreground)) !important;
}
</style>
