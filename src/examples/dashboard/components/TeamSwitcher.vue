<script setup lang="ts">
import { ref } from "vue";
import CaretSortIcon from "~icons/radix-icons/caret-sort";
import PlusCircledIcon from "~icons/radix-icons/plus-circled";

import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/new-york/avatar";
import { Button } from "@/components/ui/new-york/button";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/new-york/dialog";
import { Input } from "@/components/ui/new-york/input";
import { Label } from "@/components/ui/new-york/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/default/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/new-york/select";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/default/command";

const groups = [
  {
    label: "Personal Account",
    teams: [
      {
        label: "Alicia Koch",
        value: "personal",
      },
    ],
  },
  {
    label: "Teams",
    teams: [
      {
        label: "Acme Inc.",
        value: "acme-inc",
      },
      {
        label: "Monsters Inc.",
        value: "monsters-inc",
      },
    ],
  },
];

type Team = (typeof groups)[number]["teams"][number];

const open = ref(false);
const showNewTeamDialog = ref(false);
const selectedTeam = ref<Team>(groups[0].teams[0]);

const showNewTeamAndClose = () => {
  showNewTeamDialog.value = true;
  open.value = false;
};
</script>

<template>
  <Dialog v-model:open="showNewTeamDialog">
    <Popover v-model:open="open">
      <PopoverTrigger as-child>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded="open"
          aria-label="Select a team"
          :class="cn('w-[200px] justify-between', $attrs.class ?? '')"
        >
          <Avatar class="mr-2 h-5 w-5">
            <AvatarImage
              :src="`https://avatar.vercel.sh/${selectedTeam.value}.png`"
              :alt="selectedTeam.label"
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          {{ selectedTeam.label }}
          <CaretSortIcon class="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search team..." />
            <CommandEmpty>No team found.</CommandEmpty>

            <CommandGroup
              v-for="group in groups"
              :key="group.label"
              :heading="group.label"
            >
              <CommandItem
                v-for="team in group.teams"
                :key="team.value"
                :value="team.value"
                @select="selectedTeam = team"
              >
                <Avatar class="mr-2 h-5 w-5">
                  <AvatarImage
                    :src="`https://avatar.vercel.sh/${team.value}.png`"
                    :alt="team.label"
                  />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <span>{{ team.label }}</span>
              </CommandItem>
            </CommandGroup>

            <CommandSeparator />

            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem @select="showNewTeamAndClose" value="new-team">
                    <PlusCircledIcon class="mr-2 h-5 w-5" />
                    Create Team
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create team</DialogTitle>
        <DialogDescription>
          Add a new team to manage products and customers.
        </DialogDescription>
      </DialogHeader>
      <div>
        <div class="space-y-4 py-2 pb-4">
          <div class="space-y-2">
            <Label for="name">Team name</Label>
            <Input id="name" placeholder="Acme Inc." />
          </div>
          <div class="space-y-2">
            <Label for="plan">Subscription plan</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="free">
                  <SelectItemText>
                    <span class="font-medium">Free</span> -
                    <span class="text-muted-foreground">
                      Trial for two weeks
                    </span>
                  </SelectItemText>
                </SelectItem>
                <SelectItem value="pro">
                  <SelectItemText>
                    <span class="font-medium">Pro</span> -
                    <span class="text-muted-foreground">
                      $9/month per user
                    </span>
                  </SelectItemText>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <DialogFooter>
        <Button variant="outline" @click="showNewTeamDialog = false">
          Cancel
        </Button>
        <Button type="submit"> Continue </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
