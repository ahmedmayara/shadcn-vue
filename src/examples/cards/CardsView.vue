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
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
      class="border border-border items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3"
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
                <Github class="w-4 h-4 mr-2" />
                Github
              </Button>
              <Button variant="outline">
                <TablerBrandGoogle class="w-4 h-4 mr-2" />
                Google
              </Button>
            </div>
            <div class="relative mt-4">
              <div class="absolute inset-0 flex items-center">
                <span class="w-full border-t border-border"></span>
              </div>
              <div class="relative flex justify-center text-xs uppercase">
                <span class="bg-background px-2 text-muted"> Or </span>
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
            <ul class="space-y-5 my-7">
              <li class="flex space-x-3 items-center">
                <CheckCircle class="w-5 h-5" />
                <span class="text-foreground"> Unlimited projects </span>
              </li>
              <li class="flex space-x-3 items-center">
                <CheckCircle class="w-5 h-5" />
                <span class="text-foreground"> Unlimited collaborators </span>
              </li>
              <li class="flex space-x-3 items-center">
                <CheckCircle class="w-5 h-5" />
                <span class="text-foreground"> Unlimited Cloud storage </span>
              </li>
              <li class="flex space-x-3 items-center">
                <CheckCircle class="w-5 h-5" />
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
            <CardTitle class="text-lg"> Connect wallet </CardTitle>
            <CardDescription>
              Connect with one of our available wallet providers or create a new
              one.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul class="my-4 space-y-3">
              <li>
                <Button variant="outline" class="w-full flex justify-start">
                  <CreditCard class="w-4 h-4 mr-2" />
                  Credit Card
                </Button>
              </li>
              <li>
                <Button variant="outline" class="w-full flex justify-start">
                  <RiPaypalFill class="w-4 h-4 mr-2" />
                  Paypal
                </Button>
              </li>
              <li>
                <Button variant="outline" class="w-full flex justify-start">
                  <RiAppleFill class="w-4 h-4 mr-2" />
                  Apple Pay
                </Button>
              </li>
              <li>
                <Button variant="outline" class="w-full flex justify-start">
                  <RiOperaFill class="w-4 h-4 mr-2" />
                  Opera Wallet
                </Button>
              </li>
            </ul>

            <div class="flex items-center space-x-2">
              <ShieldQuestion class="w-3.5 h-3.5 text-muted" />
              <span class="text-muted text-xs hover:underline cursor-pointer">
                Why connect my wallet?
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="text-xl"> Team members </CardTitle>
            <CardDescription>
              Invite your team members to collaborate.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div
              class="flex justify-between items-center"
              v-for="teamMember in team"
            >
              <div class="flex items-center space-x-3 my-2">
                <Avatar size="sm">
                  <AvatarImage :src="teamMember.avatar" />
                  <AvatarFallback>
                    {{ teamMember.name.slice(0, 1) }}
                  </AvatarFallback>
                </Avatar>

                <div class="flex flex-col">
                  <p class="text-foreground text-md font-semibold">
                    {{ teamMember.name }}
                  </p>
                  <p class="text-muted text-sm">
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
                        <span class="text-muted font-normal">
                          Manage team member permissions
                        </span>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem v-for="role in teamRoles">
                      <div class="grid space-y-0.5">
                        <span class="text-foreground font-semibold">
                          {{ role.name }}
                        </span>
                        <span class="text-muted text-sm">
                          {{ role.description }}
                        </span>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
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
              class="flex-col pt-6 grid grid-cols-[1fr_110px] items-start gap-4 space-y-0"
            >
              <div class="space-y-1">
                <h3 class="text-md font-semibold">shadcn-vue</h3>
                <p class="text-muted text-sm">Vue port of shadcn/ui.</p>
              </div>
              <div class="flex items-center space-x-1 rounded-md bg-secondary">
                <Button
                  variant="secondary"
                  class="h-9 px-3 enabled:hover:bg-secondary"
                >
                  <Star class="w-4 h-4 mr-2" />
                  Star
                </Button>
                <Separator
                  orientation="vertical"
                  class="!h-[20px] bg-gray-300 dark:bg-gray-700"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      class="h-9 px-3 enabled:hover:bg-secondary"
                    >
                      <ChevronDown class="w-3.5 h-3.5" />
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
                        <PlusCircle class="w-4 h-4 mr-2" />
                        Create List
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div class="flex space-x-4 text-sm text-muted">
              <div class="flex items-center">
                <span class="rounded-full bg-blue-500 w-2.5 h-2.5 mr-2" />
                <span> Typescript </span>
              </div>
              <div class="flex items-center">
                <span> Updated July 2023 </span>
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
              <div class="flex justify-between items-center space-x-2">
                <Label for="email_notifications" class="flex flex-col">
                  Email notifications
                  <span class="text-muted mt-1 text-sm max-w-[18rem]">
                    These notifications can be sent to your email address.
                  </span>
                </Label>
                <Switch
                  id="email_notifications"
                  v-model:checked="emailNotificationsSwitch"
                />
              </div>
              <div class="flex justify-between items-center space-x-2">
                <Label for="web_notifications" class="flex flex-col">
                  Web push notifications
                  <span class="text-muted mt-1 text-sm max-w-[18rem]">
                    These notifications will be sent to your browser or mobile
                    device.
                  </span>
                </Label>
                <Switch
                  id="web_notifications"
                  v-model:checked="pushNotificationsSwitch"
                />
              </div>
              <div class="flex justify-between items-center space-x-2">
                <Label for="sms_notifications" class="flex flex-col">
                  SMS notifications
                  <span class="text-muted mt-1 text-sm max-w-[18rem]">
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
                class="flex flex-col justify-center items-center p-4 rounded-lg cursor-pointer transition-colors ease-in-out duration-200"
                v-for="payment in payments"
                :key="payment.name"
                :class="[
                  selectedPayment.name === payment.name
                    ? 'border-2 border-primary'
                    : 'border border-secondary hover:bg-outline-hover',
                ]"
                @click="switchPayment(payment)"
              >
                <component :is="payment.icon" class="w-8 h-8" />
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
                <Label for="expires_month">Expires month</Label>
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
                <Label for="expires_year">Expires year</Label>
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
    </div>
  </ExamplesLayout>
</template>
