<script setup lang="ts">
import { ref } from "vue";
import ExamplesLayout from "@/layouts/ExamplesLayout.vue";
import {
  CheckCircle,
  Github,
  CreditCard,
  ShieldQuestion,
  ChevronDown,
  PlusCircle,
  Star,
} from "lucide-vue-next";
import TablerBrandGoogle from "~icons/tabler/brand-google";
import RiAppleFill from "~icons/ri/apple-fill";
import RiPaypalFill from "~icons/ri/paypal-fill";
import RiOperaFill from "~icons/ri/opera-fill";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/new-york/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/new-york/dropdown-menu";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
  SelectItemText,
} from "@/components/ui/new-york/select";
import { Label } from "@/components/ui/new-york/label";
import { Input } from "@/components/ui/new-york/input";
import { Button } from "@/components/ui/new-york/button";
import { Separator } from "@/components/ui/new-york/separator";
import { Switch } from "@/components/ui/new-york/switch";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/new-york/avatar";
import { Badge } from "@/components/ui/new-york/badge";
import { getMonth } from "date-fns";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/new-york/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/default/command";
import { roles } from "@/views/themes/utils/data";

const team = [
  {
    name: "Bob Smith",
    username: "@bobbysmith",
    role: "Owner",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=Bob",
  },
  {
    name: "Nala Sutanovac",
    username: "@nalasutanovac",
    role: "Developer",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=Nala",
  },
];

const teamRoles = [
  {
    name: "Owner",
    description: "Can manage all team settings.",
  },
  {
    name: "Viewer",
    description: "Can view all team settings.",
  },
  {
    name: "Developer",
    description: "Can manage team projects.",
  },
  {
    name: "Reporter",
    description: "Can view team projects.",
  },
];

interface Payment {
  name: string;
  icon: any;
}

const payments: Payment[] = [
  {
    name: "Card",
    icon: CreditCard,
  },
  {
    name: "Paypal",
    icon: RiPaypalFill,
  },
  {
    name: "Apple",
    icon: RiAppleFill,
  },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = ["2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"];

const checkboxItemListOne = ref(true);
const checkboxItemListTwo = ref(false);
const checkboxItemListThree = ref(false);

const emailNotificationsSwitch = ref(true);
const pushNotificationsSwitch = ref(false);
const smsNotificationsSwitch = ref(false);

const selectedPayment = ref(payments[0]);
const selectedMonth = ref("");
const selectedYear = ref("");

const switchPayment = (payment: Payment) => {
  selectedPayment.value = payment;
};
</script>

<template>
  <ExamplesLayout>
    <div
      class="items-start justify-center gap-6 rounded-lg border border-border p-8 md:grid lg:grid-cols-2 xl:grid-cols-3"
    >
      <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
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
                <Github class="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline">
                <TablerBrandGoogle class="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
            <div class="relative mt-4">
              <div class="absolute inset-0 flex items-center">
                <span class="w-full border-t border-border"></span>
              </div>
              <div class="relative flex justify-center text-xs uppercase">
                <span class="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>
            <div class="grid gap-2 pt-4">
              <Label for="email"> Email </Label>
              <Input id="email" placeholder="name@example.com" />
            </div>
            <div class="grid gap-2 pt-4">
              <Label for="password"> Password </Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>
          </CardContent>
          <CardFooter>
            <Button class="w-full"> Create account </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="text-3xl">Pro Plan</CardTitle>
            <CardDescription>
              Pay for the pro plan and get access to all features.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="flex items-baseline text-foreground">
              <span class="text-4xl font-bold">$</span>
              <span class="text-6xl font-bold">70</span>
              <span class="text-xl">/mo</span>
            </div>
            <ul class="my-7 space-y-5">
              <li class="flex items-center space-x-3">
                <CheckCircle class="h-5 w-5" />
                <span class="text-foreground"> Unlimited projects </span>
              </li>
              <li class="flex items-center space-x-3">
                <CheckCircle class="h-5 w-5" />
                <span class="text-foreground"> Unlimited collaborators </span>
              </li>
              <li class="flex items-center space-x-3">
                <CheckCircle class="h-5 w-5" />
                <span class="text-foreground"> Unlimited Cloud storage </span>
              </li>
              <li class="flex items-center space-x-3">
                <CheckCircle class="h-5 w-5" />
                <span class="text-foreground"> Complete Documentation </span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button class="w-full"> Get started </Button>
          </CardFooter>
        </Card>
      </div>

      <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle> Connect wallet </CardTitle>
            <CardDescription>
              Connect with one of our available wallet providers or create a new
              one.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul class="my-4 space-y-3">
              <li>
                <Button variant="outline" class="flex w-full justify-start">
                  <CreditCard class="mr-2 h-4 w-4" />
                  Credit Card
                </Button>
              </li>
              <li>
                <Button variant="outline" class="flex w-full justify-start">
                  <RiPaypalFill class="mr-2 h-4 w-4" />
                  Paypal
                </Button>
              </li>
              <li>
                <Button variant="outline" class="flex w-full justify-start">
                  <RiAppleFill class="mr-2 h-4 w-4" />
                  Apple Pay
                </Button>
              </li>
              <li>
                <Button variant="outline" class="flex w-full justify-start">
                  <RiOperaFill class="mr-2 h-4 w-4" />
                  Opera Wallet
                </Button>
              </li>
            </ul>

            <div class="flex items-center space-x-2">
              <ShieldQuestion class="h-3.5 w-3.5 text-muted-foreground" />
              <span
                class="cursor-pointer text-xs text-muted-foreground hover:underline"
              >
                Why connect my wallet?
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle> Team members </CardTitle>
            <CardDescription>
              Invite your team members to collaborate.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div
              class="flex items-center justify-between"
              v-for="teamMember in team"
            >
              <div class="my-2 flex items-center space-x-3">
                <Avatar size="sm">
                  <AvatarImage :src="teamMember.avatar" />
                  <AvatarFallback>
                    {{ teamMember.name.slice(0, 1) }}
                  </AvatarFallback>
                </Avatar>

                <div class="flex flex-col">
                  <p class="text-md font-semibold text-foreground">
                    {{ teamMember.name }}
                  </p>
                  <p class="text-sm text-muted-foreground">
                    {{ teamMember.username }}
                  </p>
                </div>
              </div>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    {{ teamMember.role }}
                    <ChevronDown class="ml-2 h-3 w-3" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent class="w-[300px] p-0" align="end">
                  <Command>
                    <CommandList>
                      <CommandInput placeholder="Select new role..." />
                      <CommandEmpty>No role found.</CommandEmpty>
                      <CommandGroup>
                        <CommandItem
                          v-for="role in roles"
                          :key="role.name"
                          :value="role.name"
                          class="p-2.5"
                        >
                          <div class="grid gap-y-1">
                            <h1 class="text-md font-semibold">
                              {{ role.name }}
                            </h1>
                            <span class="text-sm text-muted-foreground">
                              {{ role.description }}
                            </span>
                          </div>
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>

          <CardFooter>
            <Button variant="outline" class="w-full">
              Invite a new member
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardContent>
            <div
              class="grid grid-cols-[1fr_110px] flex-col items-start gap-4 space-y-0 pt-6"
            >
              <div class="space-y-1">
                <div class="inline-flex items-center justify-center space-x-2">
                  <h3 class="text-md font-semibold">shadcn-vue</h3>
                  <Badge variant="outline"> Public </Badge>
                </div>
                <p class="text-sm text-muted-foreground">
                  Vue port of shadcn/ui.
                </p>
              </div>
              <div class="flex items-center space-x-1 rounded-md bg-secondary">
                <Button
                  variant="secondary"
                  class="h-9 px-3 enabled:hover:bg-secondary"
                >
                  <Star class="mr-2 h-4 w-4" />
                  Star
                </Button>
                <Separator
                  orientation="vertical"
                  class="!h-[20px] bg-muted-foreground/20"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      class="h-9 px-3 enabled:hover:bg-secondary"
                    >
                      <ChevronDown class="h-3.5 w-3.5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" class="w-[200px]">
                    <DropdownMenuLabel> Suggested Lists </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuCheckboxItem
                        v-model:checked="checkboxItemListOne"
                      >
                        Future Ideas
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        v-model:checked="checkboxItemListTwo"
                      >
                        My Stack
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        v-model:checked="checkboxItemListThree"
                      >
                        Inspiration
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <PlusCircle class="mr-2 h-4 w-4" />
                        Create List
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div class="flex space-x-4 text-sm text-muted-foreground">
              <div class="flex items-center">
                <span class="mr-2 h-2.5 w-2.5 rounded-full bg-green-500" />
                <span> Vue </span>
              </div>
              <div class="flex items-center">
                <Star class="mr-1 h-3 w-3" />
                <span> 1.2k </span>
              </div>
              <div class="flex items-center">
                <span> Updated {{ getMonth(new Date()) }} days ago </span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>

      <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle class="text-lg"> Notifications Settings </CardTitle>
            <CardDescription>
              Manage your notification preferences.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="grid grid-rows-3 gap-y-5">
              <div class="flex items-center justify-between space-x-2">
                <Label for="email_notifications" class="flex flex-col">
                  Email notifications
                  <span
                    class="mt-1 max-w-[18rem] text-sm text-muted-foreground"
                  >
                    These notifications can be sent to your email address.
                  </span>
                </Label>
                <Switch
                  id="email_notifications"
                  v-model:checked="emailNotificationsSwitch"
                />
              </div>
              <div class="flex items-center justify-between space-x-2">
                <Label for="web_notifications" class="flex flex-col">
                  Web push notifications
                  <span
                    class="mt-1 max-w-[18rem] text-sm text-muted-foreground"
                  >
                    These notifications will be sent to your browser or mobile
                    device.
                  </span>
                </Label>
                <Switch
                  id="web_notifications"
                  v-model:checked="pushNotificationsSwitch"
                />
              </div>
              <div class="flex items-center justify-between space-x-2">
                <Label for="sms_notifications" class="flex flex-col">
                  SMS notifications
                  <span
                    class="mt-1 max-w-[18rem] text-sm text-muted-foreground"
                  >
                    These notifications can be sent to your mobile phone.
                  </span>
                </Label>
                <Switch
                  id="sms_notifications"
                  v-model:checked="smsNotificationsSwitch"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" class="w-full"> Save changes </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="text-lg">Payment Method</CardTitle>
            <CardDescription>
              Add a new payment method or update your existing payment method.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-3 gap-x-4">
              <div
                class="flex cursor-pointer flex-col items-center justify-center rounded-lg p-4 transition-colors duration-200 ease-in-out"
                v-for="payment in payments"
                :key="payment.name"
                :class="[
                  selectedPayment.name === payment.name
                    ? 'border-2 border-primary'
                    : 'border border-border hover:bg-accent',
                ]"
                @click="switchPayment(payment)"
              >
                <component :is="payment.icon" class="h-8 w-8" />
                <span class="mt-1.5 text-sm font-medium text-foreground">
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
                <Label for="expires_month">Expires month</Label>
                <Select v-model="selectedMonth">
                  <SelectTrigger>
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem
                        v-for="month in months"
                        :key="month"
                        :value="month"
                      >
                        <SelectItemText>{{ month }}</SelectItemText>
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div class="flex flex-col space-y-1.5">
                <Label for="expires_year">Expires year</Label>
                <Select v-model="selectedYear">
                  <SelectTrigger>
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem
                        v-for="year in years"
                        :key="year"
                        :value="year"
                      >
                        <SelectItemText>{{ year }}</SelectItemText>
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
    </div>
  </ExamplesLayout>
</template>
