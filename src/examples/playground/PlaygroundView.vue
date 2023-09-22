<script setup lang="ts">
import { ref } from "vue";
import ExamplesLayout from "@/layouts/ExamplesLayout.vue";
import { presets, models } from "./utils/data";
import { CommandIcon, MoreHorizontal, Copy } from "lucide-vue-next";
import { Textarea } from "@/components/ui/new-york/textarea";
import { Label } from "@/components/ui/new-york/label";
import { Input } from "@/components/ui/new-york/input";

import ModelSelector from "./components/ModelSelector.vue";

import { Button } from "@/components/ui/new-york/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/default/dialog";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/default/alert-dialog";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/default/hover-card";
import { Slider } from "@/components/ui/new-york/slider";
import { Switch } from "@/components/ui/new-york/switch";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/default/popover";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/default/dropdown-menu";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/new-york/tabs";
import { Separator } from "@/components/ui/default/separator";
import Code from "@/components/Code.vue";
import RadixIconsCounterClockwiseClock from "~icons/radix-icons/counter-clockwise-clock";
import CaretSortIcon from "~icons/radix-icons/caret-sort";
import CheckIcon from "~icons/radix-icons/check";
import {
  Command,
  CommandList,
  CommandInput,
  CommandGroup,
  CommandItem,
} from "@/components/ui/new-york/command";

const shareLink = ref(
  "https://platform.openai.com/playground/p/7bbKYQvsVkNmVb8NGcdUOLae?model=text-davinci-003",
);

const selectedPreset = ref("");
const selectedModel = ref(models[0].name);
const isSaveDialogOpen = ref(false);
const contentDialogOpen = ref(false);
const warningsSwitch = ref(true);
const isDeleteDialogOpen = ref(false);
const temperature = ref([0.56]);
const maximumTokens = ref([256]);
const topP = ref([0.92]);
const isPopoverOpen = ref(false);

const code = `import os
import openai
openai.api_key = os.getenv("OPENAI_API_KEY")
response = openai.Completion.create(
 model="davinci",
 prompt="",
 temperature=0.9,
 max_tokens=5,
 top_p=1,
 frequency_penalty=0,
 presence_penalty=0,
)`;

const selectPresetAndClosePopover = (preset: string) => {
  selectedPreset.value = preset;
  isPopoverOpen.value = false;
};
</script>

<template>
  <ExamplesLayout>
    <div class="flex flex-col justify-center rounded-xl border border-border">
      <div class="flex px-8">
        <div class="flex h-16 items-center">
          <div class="flex items-center space-x-2">
            <CommandIcon class="h-5 w-5 text-foreground" />
            <p class="font-semibold text-foreground">Acme Inc.</p>
          </div>
        </div>
        <div class="ml-auto flex items-center space-x-2">
          <Popover v-model:open="isPopoverOpen">
            <PopoverTrigger>
              <Button variant="outline" class="w-[300px] justify-start">
                <span v-if="!selectedPreset">Load a preset...</span>
                <span v-if="selectedPreset">{{ selectedPreset }}</span>
                <CaretSortIcon class="ml-auto h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Command>
                <CommandList class="max-h-max">
                  <CommandInput placeholder="Search presets..." />
                  <CommandGroup heading="Presets">
                    <CommandItem
                      v-for="preset in presets"
                      :key="preset.id"
                      :value="preset.name"
                      @select="selectPresetAndClosePopover(preset.name)"
                      class="py-2"
                    >
                      <span>{{ preset.name }}</span>
                      <CheckIcon
                        class="ml-auto h-4 w-4 shrink-0 text-foreground"
                        v-if="selectedPreset === preset.name"
                      />
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Dialog v-model:open="isSaveDialogOpen">
            <DialogTrigger>
              <Button variant="secondary"> Save </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Save preset</DialogTitle>
                <DialogDescription>
                  This will save the current playground state as a preset which
                  you can access later or share with others.
                </DialogDescription>
              </DialogHeader>
              <div class="grid gap-2 py-6">
                <div class="grid gap-2">
                  <Label for="name">Name</Label>
                  <Input placeholder="Name" id="name" />
                </div>
                <div class="grid gap-2">
                  <Label for="description">Description</Label>
                  <Textarea
                    placeholder="Description"
                    id="description"
                    class="resize-none"
                  />
                </div>
              </div>
              <DialogFooter>
                <div class="ml-auto flex items-center space-x-2">
                  <Button variant="outline" @click="isSaveDialogOpen = false">
                    Cancel
                  </Button>
                  <Button variant="primary" @click="isSaveDialogOpen = false">
                    Save
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <Button variant="secondary"> View code </Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>View code</DialogTitle>
                <DialogDescription>
                  You can use the following code to start integrating your
                  current prompt and settings into your application.
                </DialogDescription>
              </DialogHeader>

              <Code :code="code" language="python" :show-line-numbers="false" />

              <p class="text-sm text-muted-foreground">
                Your API Key can be found here. You should use environment
                variables or a secret management tool to expose your key to your
                applications.
              </p>
            </DialogContent>
          </Dialog>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary"> Share </Button>
            </PopoverTrigger>
            <PopoverContent align="end" class="w-full p-4">
              <div class="flex flex-col space-y-1.5 text-center sm:text-left">
                <h3 class="text-lg font-semibold text-foreground">
                  Share preset
                </h3>
                <p class="text-sm text-muted-foreground">
                  Anyone who has this link and an OpenAI account will be able to
                  view this.
                </p>
              </div>

              <div class="flex items-center space-x-2 pt-4">
                <div class="grid flex-1 gap-2">
                  <Input
                    placeholder="https://openai.com"
                    class="w-full"
                    v-model:value="shareLink"
                  />
                </div>
                <Button variant="primary">
                  <Copy class="h-4 w-4" />
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">
                <MoreHorizontal class="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem @click="contentDialogOpen = true">
                  Content Filter Preferences
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem @click="isDeleteDialogOpen = true">
                  <span class="text-red-500 dark:text-red-400">
                    Delete Preset
                  </span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Dialog v-model:open="contentDialogOpen">
            <DialogContent>
              <DialogHeader>
                <DialogTitle> Content Filter Preferences </DialogTitle>
                <DialogDescription>
                  The content filter flags text that may violate our usage
                  policies. It's powered by our moderation endpoint which is
                  free to use to moderate your OpenAI API traffic. Learn more.
                </DialogDescription>
              </DialogHeader>
              <div class="py-6">
                <h4 class="text-sm text-muted-foreground">
                  Playground Warnings
                </h4>
                <div class="flex items-start justify-between space-x-4 pt-3">
                  <Switch id="warnings" v-model:checked="warningsSwitch" />
                  <div class="grid gap-1">
                    <Label for="warnings">
                      Show a warning when content is flagged
                    </Label>
                    <span class="text-sm text-muted-foreground">
                      A warning will be shown when sexual, hateful, violent or
                      self-harm content is detected.
                    </span>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <div class="ml-auto flex items-center space-x-2">
                  <Button
                    variant="secondary"
                    @click="contentDialogOpen = false"
                  >
                    Close
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <AlertDialog v-model:open="isDeleteDialogOpen">
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle> Are you absolutely sure? </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This preset will no longer be
                  accessible by you or others you've shared it with.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel asChild>
                  <Button variant="outline" @click="isDeleteDialogOpen = false">
                    Cancel
                  </Button>
                </AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button
                    variant="destructive"
                    @click="isDeleteDialogOpen = false"
                  >
                    Delete
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      <Separator />

      <Tabs default-value="completion" class="mx-6 flex-1">
        <div class="container h-full py-6">
          <div class="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
            <div class="hidden flex-col space-y-4 sm:flex md:order-2">
              <div class="grid gap-2">
                <HoverCard :open-delay="200">
                  <HoverCardTrigger>
                    <Label for="mode">Mode</Label>
                  </HoverCardTrigger>
                  <HoverCardContent
                    align="start"
                    class="w-[300px] text-sm text-foreground"
                    side="left"
                    :side-offset="8"
                  >
                    Choose the interface that best suits your task. You can
                    provide: a system message and a user message to
                    <span
                      class="cursor-pointer font-medium text-green-600 decoration-green-600 hover:underline"
                    >
                      chat
                    </span>
                    or a simple prompt to
                    <span
                      class="cursor-pointer font-medium text-green-600 decoration-green-600 hover:underline"
                    >
                      complete.
                    </span>
                  </HoverCardContent>
                </HoverCard>
                <TabsList class="grid grid-cols-3">
                  <TabsTrigger value="completion">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="none"
                      class="h-5 w-5"
                    >
                      <rect
                        x="4"
                        y="3"
                        width="12"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="4"
                        y="7"
                        width="12"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="4"
                        y="11"
                        width="3"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="4"
                        y="15"
                        width="3"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="8.5"
                        y="11"
                        width="3"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="8.5"
                        y="15"
                        width="3"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="13"
                        y="11"
                        width="3"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                    </svg>
                  </TabsTrigger>
                  <TabsTrigger value="insert">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="none"
                      class="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.491 7.769a.888.888 0 0 1 .287.648.888.888 0 0 1-.287.648l-3.916 3.667a1.013 1.013 0 0 1-.692.268c-.26 0-.509-.097-.692-.268L5.275 9.065A.886.886 0 0 1 5 8.42a.889.889 0 0 1 .287-.64c.181-.17.427-.267.683-.269.257-.002.504.09.69.258L8.903 9.87V3.917c0-.243.103-.477.287-.649.183-.171.432-.268.692-.268.26 0 .509.097.692.268a.888.888 0 0 1 .287.649V9.87l2.245-2.102c.183-.172.432-.269.692-.269.26 0 .508.097.692.269Z"
                        fill="currentColor"
                      ></path>
                      <rect
                        x="4"
                        y="15"
                        width="3"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="8.5"
                        y="15"
                        width="3"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="13"
                        y="15"
                        width="3"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                    </svg>
                  </TabsTrigger>
                  <TabsTrigger value="edit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="none"
                      class="h-5 w-5"
                    >
                      <rect
                        x="4"
                        y="3"
                        width="12"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="4"
                        y="7"
                        width="12"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="4"
                        y="11"
                        width="3"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="4"
                        y="15"
                        width="4"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                      <rect
                        x="8.5"
                        y="11"
                        width="3"
                        height="2"
                        rx="1"
                        fill="currentColor"
                      ></rect>
                      <path
                        d="M17.154 11.346a1.182 1.182 0 0 0-1.671 0L11 15.829V17.5h1.671l4.483-4.483a1.182 1.182 0 0 0 0-1.671Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </TabsTrigger>
                </TabsList>
              </div>

              <ModelSelector />
              <div class="grid gap-4 pt-2">
                <HoverCard :open-delay="200">
                  <HoverCardTrigger asChild>
                    <div class="flex items-center justify-between">
                      <Label for="temperature">Temperature</Label>
                      <span
                        class="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border"
                      >
                        {{ temperature[0] }}
                      </span>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent
                    align="start"
                    class="w-[300px] text-sm text-foreground"
                    side="left"
                    :side-offset="8"
                  >
                    Controls randomness: lowering results in less random
                    completions. As the temperature approaches zero, the model
                    will become deterministic and repetitive.
                  </HoverCardContent>
                </HoverCard>
                <Slider v-model="temperature" :min="0" :max="1" :step="0.1" />
              </div>
              <div class="grid gap-4 pt-2">
                <HoverCard :open-delay="200">
                  <HoverCardTrigger asChild>
                    <div class="flex items-center justify-between">
                      <Label for="maximumTokens">Maximum Length</Label>
                      <span
                        class="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border"
                      >
                        {{ maximumTokens[0] }}
                      </span>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent
                    align="start"
                    class="w-[300px] text-sm text-foreground"
                    side="left"
                    :side-offset="8"
                  >
                    The maximum number of tokens to generate. Requests can use
                    up to 2,048 or 4,000 tokens, shared between prompt and
                    completion. The exact limit varies by model.
                  </HoverCardContent>
                </HoverCard>
                <Slider v-model="maximumTokens" :min="0" :max="4000" />
              </div>
              <div class="grid gap-4 pt-2">
                <HoverCard :open-delay="200">
                  <HoverCardTrigger asChild>
                    <div class="flex items-center justify-between">
                      <Label for="top_p">Top P</Label>
                      <span
                        class="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border"
                      >
                        {{ topP[0] }}
                      </span>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent
                    align="start"
                    class="w-[300px] text-sm text-foreground"
                    side="left"
                    :side-offset="8"
                  >
                    Control diversity via nucleus sampling: 0.5 means half of
                    all likelihood-weighted options are considered.
                  </HoverCardContent>
                </HoverCard>
                <Slider v-model="topP" :min="0" :max="1" :step="0.1" />
              </div>
            </div>
            <div class="md:order-1">
              <TabsContent value="completion" class="mt-0 border-0 p-0">
                <div class="flex h-full flex-col space-y-4">
                  <Textarea
                    placeholder="Write a tagline for an ice cream shop..."
                    class="min-h-[400px] flex-1 md:min-h-[700px] lg:min-h-[700px]"
                  />
                  <div class="flex items-center space-x-2">
                    <Button>Submit</Button>
                    <Button variant="secondary">
                      <span class="sr-only">Show history</span>
                      <RadixIconsCounterClockwiseClock class="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="insert" class="mt-0 border-0 p-0">
                <div class="flex flex-col space-y-4">
                  <div
                    class="grid grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1"
                  >
                    <Textarea
                      placeholder="We're writing to [inset]. Congrats from OpenAI!"
                      class="min-h-[400px] flex-1 md:min-h-[700px] lg:min-h-[700px]"
                    />
                    <div
                      class="rounded-md border border-border bg-accent dark:border-none"
                    ></div>
                  </div>
                  <div class="flex items-center space-x-2">
                    <Button>Submit</Button>
                    <Button variant="secondary">
                      <RadixIconsCounterClockwiseClock class="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="edit" class="mt-0 border-0 p-0">
                <div class="flex flex-col space-y-4">
                  <div class="grid h-full gap-6 lg:grid-cols-2">
                    <div class="flex flex-col space-y-4">
                      <div class="flex flex-1 flex-col space-y-2">
                        <Label for="input">Input</Label>
                        <Textarea
                          id="input"
                          placeholder="We is going to the market."
                          class="flex-1 lg:min-h-[580px]"
                        />
                      </div>
                      <div class="flex flex-col space-y-2">
                        <Label for="instructions">Instructions</Label>
                        <Textarea
                          id="instructions"
                          placeholder="Fix the grammar."
                          class="resize-none"
                        />
                      </div>
                    </div>
                    <div
                      class="mt-[25px] min-h-[400px] rounded-md border border-border bg-accent dark:border-none lg:min-h-[700px]"
                    />
                  </div>
                  <div class="flex items-center space-x-2">
                    <Button>Submit</Button>
                    <Button variant="secondary">
                      <RadixIconsCounterClockwiseClock class="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  </ExamplesLayout>
</template>
