<script setup lang="ts">
import { ref, computed, watch } from "vue";
import ExamplesLayout from "@/layouts/ExamplesLayout.vue";
import { presets, models, textModels } from "./utils/data";
import { Command, Search, MoreHorizontal, Copy } from "lucide-vue-next";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Code from "@/components/Code.vue";
import RadixIconsCounterClockwiseClock from "~icons/radix-icons/counter-clockwise-clock";

const shareLink = ref(
  "https://platform.openai.com/playground/p/7bbKYQvsVkNmVb8NGcdUOLae?model=text-davinci-003",
);

const selectedPreset = ref("");
const selectedModel = ref(models[0].name);
const isSaveDialogOpen = ref(false);
const contentDialogOpen = ref(false);
const warningsSwitch = ref(true);
const isDeleteDialogOpen = ref(false);
const searchQuery = ref("");
const temperature = ref(0.56);
const maximumTokens = ref(256);
const topP = ref(0.9);

const filtredPresets = computed(() => {
  return presets.filter((preset) =>
    preset.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});

watch(selectedPreset, () => {
  searchQuery.value = "";
});

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
</script>

<template>
  <ExamplesLayout>
    <div class="flex justify-center flex-col border border-border rounded-xl">
      <div class="flex px-8">
        <div class="flex h-16 items-center">
          <div class="flex items-center space-x-2">
            <Command class="w-5 h-5 text-foreground" />
            <p class="text-foreground font-semibold">Acme Inc.</p>
          </div>
        </div>
        <div class="ml-auto flex items-center space-x-2">
          <Select v-model="selectedPreset">
            <SelectTrigger class="w-80">
              <SelectValue placeholder="Select a preset" />
            </SelectTrigger>
            <SelectContent class="w-80">
              <div class="relative">
                <input
                  v-model="searchQuery"
                  placeholder="Search presets..."
                  class="w-full pl-8 focus:ring-0 bg-transparent border-b border-border outline-none px-3 h-9 text-sm text-foreground placeholder:text-muted-foreground"
                />
                <div
                  class="absolute left-2.5 top-0 bottom-0 flex items-center pr-3"
                >
                  <Search class="w-3.5 h-3.5 text-muted-foreground" />
                </div>
              </div>
              <SelectGroup>
                <SelectLabel v-if="!searchQuery">Presets</SelectLabel>
                <SelectItem
                  v-for="preset in filtredPresets"
                  :value="preset.name"
                >
                  <div class="grid space-y-0.5">
                    <p class="text-foreground font-medium">
                      {{ preset.name }}
                    </p>
                    <span class="text-muted-foreground text-sm">
                      {{ preset.description }}
                    </span>
                  </div>
                </SelectItem>
                <div
                  v-if="!filtredPresets.length"
                  class="py-4 px-6 flex flex-col items-center space-y-2"
                >
                  <p class="text-foreground text-sm">No presets found.</p>
                </div>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Dialog v-model:open="isSaveDialogOpen">
            <DialogTrigger>
              <Button variant="secondary" class="h-9"> Save </Button>
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
                    :rows="4"
                  />
                </div>
              </div>
              <DialogFooter>
                <div class="ml-auto flex items-center space-x-2">
                  <Button
                    variant="outline"
                    class="h-9"
                    @click="isSaveDialogOpen = false"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    class="h-9"
                    @click="isSaveDialogOpen = false"
                  >
                    Save
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <Button variant="secondary" class="h-9"> View code </Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>View code</DialogTitle>
                <DialogDescription>
                  You can use the following code to start integrating your
                  current prompt and settings into your application.
                </DialogDescription>
              </DialogHeader>

              <div class="rounded-md bg-black p-6">
                <code
                  class="grid gap-1 text-sm text-muted-foreground [&_span]:h-4"
                >
                  <span> <span class="text-sky-300">import</span> os </span>
                  <span> <span class="text-sky-300">import</span> openai </span>
                  <span />
                  <span>
                    openai.api_key = os.getenv(
                    <span class="text-green-300">
                      &quot;OPENAI_API_KEY&quot;
                    </span>
                    )
                  </span>
                  <span />
                  <span>response = openai.Completion.create(</span>
                  <span>
                    {{ " " }}
                    model=
                    <span class="text-green-300">&quot;davinci&quot;</span>,
                  </span>
                  <span>
                    {{ " " }}
                    prompt=<span class="text-amber-300">&quot;&quot;</span>,
                  </span>
                  <span>
                    {{ " " }}
                    temperature=<span class="text-amber-300">0.9</span>,
                  </span>
                  <span>
                    {{ " " }}
                    max_tokens=<span class="text-amber-300">5</span>,
                  </span>
                  <span>
                    {{ " " }}
                    top_p=<span class="text-amber-300">1</span>,
                  </span>
                  <span>
                    {{ " " }}
                    frequency_penalty=<span class="text-amber-300">0</span>,
                  </span>
                  <span>
                    {{ " " }}
                    presence_penalty=<span class="text-green-300">0</span>,
                  </span>
                  <span>)</span>
                </code>
              </div>

              <p class="text-sm text-muted-foreground">
                Your API Key can be found here. You should use environment
                variables or a secret management tool to expose your key to your
                applications.
              </p>
            </DialogContent>
          </Dialog>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="secondary" class="h-9"> Share </Button>
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
                  <Copy class="w-4 h-4" />
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" class="h-9">
                <MoreHorizontal class="w-4 h-4" />
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
                    class="h-9"
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
                  <Button
                    variant="outline"
                    class="h-9"
                    @click="isDeleteDialogOpen = false"
                  >
                    Cancel
                  </Button>
                </AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button
                    variant="destructive"
                    class="h-9"
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

      <Tabs default-value="completion" class="flex-1 mx-6">
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
                      class="font-medium text-green-600 cursor-pointer hover:underline decoration-green-600"
                    >
                      chat
                    </span>
                    or a simple prompt to
                    <span
                      class="font-medium text-green-600 cursor-pointer hover:underline decoration-green-600"
                    >
                      complete.
                    </span>
                  </HoverCardContent>
                </HoverCard>
                <TabsList class="grid grid-cols-3 h-9">
                  <TabsTrigger value="completion" class="py-1">
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
                  <TabsTrigger value="insert" class="py-1">
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
                  <TabsTrigger value="edit" class="py-1">
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
              <div class="grid gap-2">
                <HoverCard :open-delay="200">
                  <HoverCardTrigger asChild>
                    <Label for="model">Model</Label>
                  </HoverCardTrigger>
                  <HoverCardContent
                    align="start"
                    class="w-[300px] text-sm text-foreground"
                    side="left"
                    :side-offset="8"
                  >
                    The model which will generate the completion. Some models
                    are suitable for natural language tasks, others specialize
                    in code.
                    <span
                      class="font-medium text-green-600 cursor-pointer hover:underline decoration-green-600"
                    >
                      Learn more.
                    </span>
                  </HoverCardContent>
                </HoverCard>
                <Select v-model="selectedModel">
                  <SelectTrigger>
                    {{ selectedModel || "Select a model" }}
                  </SelectTrigger>
                  <SelectContent class="w-[200px]">
                    <SelectGroup>
                      <SelectLabel> GPT-3.5 </SelectLabel>
                      <SelectItem
                        v-for="model in models"
                        :key="model.name"
                        :value="model.name"
                      >
                        {{ model.name }}
                      </SelectItem>
                    </SelectGroup>
                    <SelectSeparator />
                    <SelectGroup>
                      <SelectLabel> Text </SelectLabel>
                      <SelectItem
                        v-for="model in textModels"
                        :key="model.name"
                        :value="model.name"
                      >
                        {{ model.name }}
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div class="grid gap-4 pt-2">
                <HoverCard :open-delay="200">
                  <HoverCardTrigger asChild>
                    <div class="flex items-center justify-between">
                      <Label for="temperature">Temperature</Label>
                      <span
                        class="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border"
                      >
                        {{ temperature }}
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
                <Slider v-model="temperature" :min="0" :max="1" step="0.1" />
              </div>
              <div class="grid gap-4 pt-2">
                <HoverCard :open-delay="200">
                  <HoverCardTrigger asChild>
                    <div class="flex items-center justify-between">
                      <Label for="maximumTokens">Maximum Length</Label>
                      <span
                        class="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border"
                      >
                        {{ maximumTokens }}
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
                        {{ topP }}
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
                <Slider v-model="topP" :min="0" :max="1" step="0.1" />
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
                    <Button class="h-9">Submit</Button>
                    <Button variant="secondary" class="h-9">
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
                      class="rounded-md border border-border dark:border-none bg-accent"
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
                      class="mt-[25px] min-h-[400px] rounded-md border border-border dark:border-none bg-accent lg:min-h-[700px]"
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
