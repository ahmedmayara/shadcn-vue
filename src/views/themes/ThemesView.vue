<script setup lang="ts">
import { ref } from "vue";
import ThemesLayout from "@/layouts/ThemesLayout.vue";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/new-york/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/new-york/avatar";
import { Button } from "@/components/ui/new-york/button";
import { Textarea } from "@/components/ui/new-york/textarea";
import { Calendar } from "@/components/ui/new-york/calendar";
import { Separator } from "@/components/ui/new-york/separator";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/default/dropdown-menu";
import { Label } from "@/components/ui/new-york/label";
import { Switch } from "@/components/ui/new-york/switch";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectValue,
  SelectItem,
} from "@/components/ui/default/select";
import { Input } from "@/components/ui/new-york/input";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/new-york/tooltip";
import { ChevronDown, Plus, Send, Minus } from "lucide-vue-next";
import RadixIconsGithubLogo from "~icons/radix-icons/github-logo";
import RiGoogleLine from "~icons/ri/google-line";
import {
  totalRevenueChartSeries,
  totalRevenueChartOptions,
  subscriptionsChartSeries,
  subscriptionsChartOptions,
  goalsMinutesChartSeries,
  goalsMinutesChartOptions,
} from "./utils/charts";
import {
  teamMembers,
  roles,
  months,
  years,
  payments,
  columns,
  data,
} from "./utils/data";
import { addDays, startOfToday } from "date-fns";
import PaymentsDataTable from "@/components/data-tables/PaymentsDataTable.vue";

const strictlyNecessarySwitch = ref<boolean>(true);
const functionalCookiesSwitch = ref<boolean>(false);
const performanceCookiesSwitch = ref<boolean>(false);
const selectedArea = ref("Billing");
const selectedSecurity = ref("Medium");
const selectedMonth = ref<string | null>(months[0]);
const selectedYear = ref<string | null>(years[0]);
const selectedPayment = ref(payments[0]);
const goal = ref(350);

const switchPayment = (payment: any) => {
  selectedPayment.value = payment;
};

const range = ref({
  start: new Date(2023, 5, 5),
  end: addDays(new Date(2023, 5, 5), 8),
});
</script>

<template>
  <ThemesLayout>
    <div
      class="items-start justify-center gap-6 rounded-lg md:grids-col-2 grid md:gap-4 lg:grid-cols-10 xl:grid-cols-11 xl:gap-4"
    >
      <div class="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
        <div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-lg"> Total Revenue </CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">$15,231.89</div>
              <p class="text-xs text-muted-foreground">
                +20.1% from last month
              </p>

              <div class="h-24">
                <apexchart
                  class="mt-8 mb-0 pb-0"
                  :series="totalRevenueChartSeries"
                  :options="totalRevenueChartOptions"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader class="pb-2">
              <CardTitle class="text-lg"> Subscriptions </CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-2xl font-bold">+2,350</div>
              <p class="text-xs text-muted-foreground">
                +54.8% from last month
              </p>

              <div class="h-24">
                <apexchart
                  height="100%"
                  class="mt-8 mb-0 pb-0"
                  :series="subscriptionsChartSeries"
                  :options="subscriptionsChartOptions"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div class="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle> Team Members </CardTitle>
                <CardDescription>
                  Invite your team members to collaborate.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  class="flex justify-between items-center"
                  v-for="teamMember in teamMembers"
                >
                  <div class="flex items-center space-x-3 my-4">
                    <Avatar size="sm">
                      <AvatarImage :src="teamMember.avatar" />
                      <AvatarFallback>
                        {{ teamMember.name.slice(0, 2) }}
                      </AvatarFallback>
                    </Avatar>

                    <div class="flex flex-col">
                      <p class="text-foreground text-sm font-semibold">
                        {{ teamMember.name }}
                      </p>
                      <p class="text-muted-foreground text-sm">
                        {{ teamMember.username }}
                      </p>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button variant="outline" class="h-9">
                        {{ teamMember.role }}
                        <ChevronDown class="w-3 h-3 ml-2" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent class="w-[280px]" align="end">
                      <DropdownMenuGroup>
                        <DropdownMenuLabel>
                          <div class="grid">
                            <span class="text-foreground font-semibold">
                              Actions
                            </span>
                            <span
                              class="text-muted-foreground text-sm font-normal"
                            >
                              Manage team member permissions
                            </span>
                          </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem v-for="role in roles">
                          <div class="grid space-y-0.5">
                            <span class="text-foreground font-semibold">
                              {{ role.name }}
                            </span>
                            <span class="text-muted-foreground text-sm">
                              {{ role.description }}
                            </span>
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle> Cookies Settings </CardTitle>
                <CardDescription>
                  Manage your cookies preferences.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="grid grid-rows-3 gap-y-5">
                  <div class="flex justify-between items-center space-x-2">
                    <Label for="strictly_necessary" class="flex flex-col">
                      Strictly Necessary
                      <span
                        class="text-muted-foreground mt-1 text-xs max-w-[18rem]"
                      >
                        These cookies are essential in order to use the website
                        and use its features.
                      </span>
                    </Label>
                    <Switch
                      id="strictly_necessary"
                      v-model:checked="strictlyNecessarySwitch"
                    />
                  </div>
                  <div class="flex justify-between items-center space-x-2">
                    <Label for="functional_cookies" class="flex flex-col">
                      Functional Cookies
                      <span
                        class="text-muted-foreground text-xs mt-1 max-w-[18rem]"
                      >
                        These cookies enable the website to provide enhanced
                        functionality and personalization.
                      </span>
                    </Label>
                    <Switch
                      id="functional_cookies"
                      v-model:checked="functionalCookiesSwitch"
                    />
                  </div>
                  <div class="flex justify-between items-center space-x-2">
                    <Label for="performance_cookies" class="flex flex-col">
                      Performance Cookies
                      <span
                        class="text-muted-foreground text-xs mt-1 max-w-[18rem]"
                      >
                        These cookies are used to collect information about how
                        you use our website.
                      </span>
                    </Label>
                    <Switch
                      id="performance_cookies"
                      v-model:checked="performanceCookiesSwitch"
                    />
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="outline" class="w-full">
                  Save Preferences
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle class="text-lg">Payment Method</CardTitle>
                <CardDescription>
                  Add a new payment method or update your existing payment
                  method.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="grid grid-cols-3 gap-x-4">
                  <div
                    class="flex flex-col justify-center items-center p-4 rounded-lg cursor-pointer transition-colors ease-in-out duration-200"
                    v-for="payment in payments"
                    :key="payment.name"
                    :class="[
                      selectedPayment.name === payment.name
                        ? 'border-2 border-primary'
                        : 'border border-border hover:bg-accent',
                    ]"
                    @click="switchPayment(payment)"
                  >
                    <component :is="payment.icon" class="w-6 h-6" />
                    <span class="text-foreground text-sm font-medium mt-1.5">
                      {{ payment.name }}
                    </span>
                  </div>
                </div>
                <div class="grid gap-2 pt-4">
                  <Label for="name" class="text-sm"> Name </Label>
                  <Input id="name" placeholder="Name" />
                </div>
                <div class="grid gap-2 pt-4">
                  <Label for="card_number" class="text-sm"> Card number </Label>
                  <Input id="card_number" placeholder="4242 4242 4242 4242" />
                </div>

                <div class="grid grid-cols-3 gap-4 pt-4">
                  <div class="flex flex-col space-y-1.5">
                    <Label for="expires_month">Month</Label>
                    <Select v-model="selectedMonth">
                      <SelectTrigger>
                        <SelectValue placeholder="Month" />
                      </SelectTrigger>
                      <SelectContent side="top">
                        <SelectGroup>
                          <SelectItem
                            v-for="month in months"
                            :key="month"
                            :value="month"
                          >
                            {{ month }}
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div class="flex flex-col space-y-1.5">
                    <Label for="expires_year"> Year </Label>
                    <Select v-model="selectedYear">
                      <SelectTrigger>
                        <SelectValue placeholder="Year" />
                      </SelectTrigger>
                      <SelectContent side="top">
                        <SelectGroup>
                          <SelectItem
                            v-for="year in years"
                            :key="year"
                            :value="year"
                          >
                            {{ year }}
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div class="flex flex-col space-y-1.5">
                    <Label for="cvc">CVC</Label>
                    <Input id="cvc" placeholder="123" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button class="w-full"> Continue </Button>
              </CardFooter>
            </Card>
          </div>

          <div class="space-y-4">
            <Card>
              <CardHeader class="flex flex-row items-center justify-between">
                <div class="flex items-center space-x-3 my-2">
                  <Avatar size="sm">
                    <AvatarImage
                      src="https://api.dicebear.com/6.x/lorelei/svg?seed=Bear"
                    />
                    <AvatarFallback>B</AvatarFallback>
                  </Avatar>

                  <div class="flex flex-col">
                    <p class="text-foreground text-sm font-semibold">
                      Bear Brown
                    </p>
                    <p class="text-muted-foreground text-sm">
                      bear@example.com
                    </p>
                  </div>
                </div>
                <TooltipProvider>
                  <Tooltip :delayDuration="200">
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        class="rounded-full p-2.5 flex items-center justify-center"
                      >
                        <Plus class="w-4 h-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent :side-offset="10">
                      New message
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </CardHeader>
              <CardContent>
                <div class="space-y-4">
                  <div
                    class="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-secondary"
                  >
                    <p class="text-foreground">
                      Hi There!, I'm Bear, the founder of Bear Studios. I'm here
                      to help you with anything you need.
                    </p>
                  </div>
                  <div
                    class="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground"
                  >
                    <p>Hey, I'm having trouble with my account.</p>
                  </div>
                  <div
                    class="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-secondary"
                  >
                    <p class="text-foreground">
                      Sure, I can help you with that. What seems to be the
                      problem?
                    </p>
                  </div>
                  <div
                    class="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground"
                  >
                    <p>I can't log in.</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div class="flex w-full space-x-2 items-center">
                  <Input
                    placeholder="Type a message..."
                    class="flex-1"
                    id="message"
                  />
                  <Button class="p-2.5 flex items-center justify-center">
                    <Send class="w-4 h-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>
                  Enter your details below to create your account.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="grid grid-cols-2 gap-6">
                  <Button variant="outline">
                    <RiGoogleLine class="w-4 h-4 mr-2" />
                    Google
                  </Button>
                  <Button variant="outline">
                    <RadixIconsGithubLogo class="w-4 h-4 mr-2" />
                    Github
                  </Button>
                </div>
                <div class="relative mt-4">
                  <div class="absolute inset-0 flex items-center">
                    <span class="w-full border-t border-border"></span>
                  </div>
                  <div class="relative flex justify-center text-xs uppercase">
                    <span class="bg-card text-muted-foreground px-2"> Or </span>
                  </div>
                </div>
                <div class="grid gap-2 pt-4">
                  <Label for="email">Email</Label>
                  <Input id="email" placeholder="name@example.com" />
                </div>
                <div class="grid gap-2 pt-4">
                  <Label for="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
              </CardContent>
              <CardFooter>
                <Button class="w-full"> Create account </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle> Report an issue </CardTitle>
                <CardDescription>
                  What area are you having problems with?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div class="grid gap-4 sm:grid-cols-2">
                  <div class="grid gap-2">
                    <Label for="area">Area</Label>
                    <Select v-model="selectedArea">
                      <SelectTrigger>
                        {{ selectedArea || "Area" }}
                      </SelectTrigger>
                      <SelectContent class="w-[139px]">
                        <SelectGroup>
                          <SelectItem value="Team">Team</SelectItem>
                          <SelectItem value="Billing">Billing</SelectItem>
                          <SelectItem value="Account">Account</SelectItem>
                          <SelectItem value="Deployment">Deployment</SelectItem>
                          <SelectItem value="Support">Support</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div class="grid gap-2">
                    <Label for="security">Security Level</Label>
                    <Select v-model="selectedSecurity">
                      <SelectTrigger>
                        <SelectValue placeholder="Medium" />
                      </SelectTrigger>
                      <SelectContent class="w-[139px]">
                        <SelectGroup>
                          <SelectItem value="Low">Low</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="High">High</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div class="grid gap-2 py-4">
                  <Label for="subject">Subject</Label>
                  <Input id="subject" placeholder="I need help with..." />
                </div>

                <div class="grid gap-2">
                  <Label for="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your issue..."
                  />
                </div>
              </CardContent>

              <CardFooter class="flex justify-between items-center">
                <Button variant="outline"> Cancel </Button>
                <Button> Submit </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <div class="space-y-4 lg:col-span-6 xl:col-span-5 xl:space-y-4">
        <div class="hidden gap-1 sm:grid-cols-[280px_1fr] md:grid">
          <Card class="max-w-[280px]">
            <Calendar v-model.range="range" />
          </Card>

          <div class="pt-3 sm:pl-2 sm:pt-0 xl:pl-3">
            <Card>
              <CardHeader>
                <CardTitle class="text-md"> Move Goal </CardTitle>
                <CardDescription>
                  Set your daily activity goal.
                </CardDescription>
              </CardHeader>
              <CardContent class="pb-2">
                <div class="flex items-center justify-center space-x-2">
                  <Button
                    variant="outline"
                    class="w-8 h-8 rounded-full p-0"
                    @click="goal -= 10"
                    :disabled="goal <= 200"
                  >
                    <Minus class="w-4 h-4" />
                  </Button>
                  <div class="flex-1 text-center">
                    <p
                      class="text-foreground text-5xl font-bold tracking-tight"
                    >
                      {{ goal }}
                    </p>
                    <span class="text-muted-foreground text-[11px] uppercase">
                      Calories/day
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    class="w-8 h-8 rounded-full p-0"
                    @click="goal += 10"
                    :disabled="goal >= 500"
                  >
                    <Plus class="w-4 h-4" />
                  </Button>
                </div>

                <div class="my-2">
                  <apexchart
                    :series="[
                      {
                        name: 'Calories',
                        data: [
                          38, 20, 18, 22, 32, 35, 30, 36, 16, 15, 19, 26, 28,
                        ],
                      },
                    ]"
                    height="25%"
                    :options="subscriptionsChartOptions"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button class="w-full"> Set Goal </Button>
              </CardFooter>
            </Card>
          </div>
          <div class="pt-3 sm:col-span-2 xl:pt-3">
            <Card>
              <CardHeader>
                <CardTitle> Exercise Minutes </CardTitle>
                <CardDescription>
                  Your exercise minutes are ahead of where you normally are.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <apexchart
                  height="120%"
                  class="mt-8 mb-0 pb-0"
                  :series="goalsMinutesChartSeries"
                  :options="goalsMinutesChartOptions"
                />
              </CardContent>
            </Card>
          </div>
          <div class="pt-3 sm:col-span-2 xl:pt-3">
            <Card>
              <CardHeader>
                <CardTitle> Payments </CardTitle>
                <CardDescription>
                  Manage your payment methods and view your billing history.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PaymentsDataTable :columns="columns" :data="data" />
              </CardContent>
            </Card>
          </div>

          <div class="pt-3 sm:col-span-2 xl:pt-3">
            <Card>
              <CardHeader>
                <CardTitle> Share this document </CardTitle>
                <CardDescription>
                  Anyone with this link will be able to view this document.
                </CardDescription>

                <div class="flex space-x-2 items-center pt-2.5">
                  <Input
                    class="flex-1"
                    placeholder="http://..."
                    value="http://example.com/link/to/document"
                  />
                  <Button variant="secondary"> Copy Link </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Separator />
                <Label class="mt-4"> People with access </Label>

                <div
                  class="flex justify-between items-center"
                  v-for="teamMember in teamMembers"
                >
                  <div class="flex items-center space-x-3 my-4">
                    <Avatar size="sm">
                      <AvatarImage :src="teamMember.avatar" />
                      <AvatarFallback>
                        {{ teamMember.name.slice(0, 2) }}
                      </AvatarFallback>
                    </Avatar>

                    <div class="flex flex-col">
                      <p class="text-foreground text-sm font-medium">
                        {{ teamMember.name }}
                      </p>
                      <p class="text-muted-foreground text-sm">
                        {{ teamMember.username }}
                      </p>
                    </div>
                  </div>

                  <Select v-model="teamMember.access">
                    <SelectTrigger class="w-28">
                      <SelectValue :placeholder="teamMember.access" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="Can edit"> Can edit </SelectItem>
                        <SelectItem value="Can view"> Can view </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </ThemesLayout>
</template>
