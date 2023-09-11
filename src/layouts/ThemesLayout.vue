<script setup lang="ts">
import { computed, watch, onMounted } from "vue";
import { useConfigStore, RADII } from "@/stores/config";
import { useClipboard } from "@vueuse/core";
import { useDark } from "@vueuse/core";
import { themes } from "@/components/ui/themes";
import { colors } from "@/components/ui/colors";
import RadixIconsCheck from "~icons/radix-icons/check";
import RadixIconsCopy from "~icons/radix-icons/copy";
import RadixIconsSun from "~icons/radix-icons/sun";
import RadixIconsMoon from "~icons/radix-icons/moon";
import MainLayout from "@/layouts/MainLayout.vue";
import { Button } from "@/components/ui/default/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/default/popover";
import { Label } from "@/components/ui/default/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/default/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/default/tooltip";
import { Paintbrush } from "lucide-vue-next";
import Code from "@/components/Code.vue";

const { copy, copied } = useClipboard();

type Color =
  | "zinc"
  | "slate"
  | "stone"
  | "gray"
  | "neutral"
  | "red"
  | "rose"
  | "orange"
  | "green"
  | "blue"
  | "yellow"
  | "violet";

// Create an array of color values
const allColors: Color[] = [
  "zinc",
  "rose",
  "blue",
  "green",
  "orange",
  "red",
  "slate",
  "stone",
  "gray",
  "neutral",
  "yellow",
  "violet",
];

const configStore = useConfigStore();

const setTheme = configStore.setTheme;

const setRadius = configStore.setRadius;

const radius = computed(() => configStore.radius);

const theme = computed(() => configStore.theme);

const isDark = useDark();

// Store an object called config in local storage with the theme and radius values
watch([theme, radius], ([theme, radius]) => {
  localStorage.setItem(
    "config",
    JSON.stringify({
      theme,
      radius,
    }),
  );
});

// If there is a config object in local storage, set the theme and radius values to the values in local storage
if (localStorage.getItem("config")) {
  const config = JSON.parse(localStorage.getItem("config")!);
  configStore.setTheme(config.theme);
  configStore.setRadius(config.radius);
}

const activeTheme = computed(() => {
  return themes.find((theme) => theme.name === configStore.theme);
});

const activeRadius = computed(() => {
  return RADII.find((radius) => radius === configStore.radius);
});

// Whenever the component is mounted, update the document class list
onMounted(() => {
  document.documentElement.style.setProperty("--radius", radius.value + "rem");
  document.documentElement.classList.add(`theme-${theme.value}`);
});

// Whenever the theme value changes, update the document class list
watch(theme, (theme) => {
  document.documentElement.classList.remove(
    ...allColors.map((color) => `theme-${color}`),
  );
  document.documentElement.classList.add(`theme-${theme}`);
});

// Whenever the radius value changes, update the document style
watch(radius, (radius) => {
  document.documentElement.style.setProperty("--radius", radius + "rem");
});

const code = computed(() => {
  return `@layer base {
    :root {
        --background: ${activeTheme.value?.cssVars.light.background};
        --foreground: ${activeTheme.value?.cssVars.light.foreground};
        --muted: ${activeTheme.value?.cssVars.light.muted};
        --muted-foreground: ${activeTheme.value?.cssVars.light[
          "muted-foreground"
        ]};
        --popover: ${activeTheme.value?.cssVars.light.popover};
        --popover-foreground: ${activeTheme.value?.cssVars.light[
          "popover-foreground"
        ]};
        --card: ${activeTheme.value?.cssVars.light.card};
        --card-foreground: ${activeTheme.value?.cssVars.light[
          "card-foreground"
        ]};
        --border: ${activeTheme.value?.cssVars.light.border};
        --input: ${activeTheme.value?.cssVars.light.input};
        --primary: ${activeTheme.value?.cssVars.light.primary};
        --primary-foreground: ${activeTheme.value?.cssVars.light[
          "primary-foreground"
        ]};
        --secondary: ${activeTheme.value?.cssVars.light.secondary};
        --secondary-foreground: ${activeTheme.value?.cssVars.light[
          "secondary-foreground"
        ]};
        --accent: ${activeTheme.value?.cssVars.light.accent};
        --accent-foreground: ${activeTheme.value?.cssVars.light[
          "accent-foreground"
        ]};
        --destructive: ${activeTheme.value?.cssVars.light.destructive};
        --destructive-foreground: ${activeTheme.value?.cssVars.light[
          "destructive-foreground"
        ]}:
        --ring: ${activeTheme.value?.cssVars.light.ring};
        --radius: ${activeRadius.value + "rem"};
    }

    .dark {
        --background: ${activeTheme.value?.cssVars.dark.background};
        --foreground: ${activeTheme.value?.cssVars.dark.foreground};
        --muted: ${activeTheme.value?.cssVars.dark.muted};
        --muted-foreground: ${activeTheme.value?.cssVars.dark[
          "muted-foreground"
        ]};
        --popover: ${activeTheme.value?.cssVars.dark.popover};
        --popover-foreground: ${activeTheme.value?.cssVars.dark[
          "popover-foreground"
        ]};
        --card: ${activeTheme.value?.cssVars.dark.card};
        --card-foreground: ${activeTheme.value?.cssVars.dark[
          "card-foreground"
        ]};
        --border: ${activeTheme.value?.cssVars.dark.border};
        --input: ${activeTheme.value?.cssVars.dark.input};
        --primary: ${activeTheme.value?.cssVars.dark.primary};
        --primary-foreground: ${activeTheme.value?.cssVars.dark[
          "primary-foreground"
        ]};
        --secondary: ${activeTheme.value?.cssVars.dark.secondary};
        --secondary-foreground: ${activeTheme.value?.cssVars.dark[
          "secondary-foreground"
        ]};
        --accent: ${activeTheme.value?.cssVars.dark.accent};
        --accent-foreground: ${activeTheme.value?.cssVars.dark[
          "accent-foreground"
        ]};
        --destructive: ${activeTheme.value?.cssVars.dark.destructive};
        --destructive-foreground: ${activeTheme.value?.cssVars.dark[
          "destructive-foreground"
        ]}:
        --ring: ${activeTheme.value?.cssVars.dark.ring};
        --radius: ${activeRadius.value + "rem"};
    }
}`;
});

const copyCode = () => {
  copy(code.value);
};
</script>

<template>
  <MainLayout>
    <div class="max-w-8xl w-full mx-auto flex pt-10 px-4 text-foreground">
      <div
        class="w-full relative flex flex-col items-start md:flex-row md:items-center"
      >
        <section class="space-y-2 mt-4">
          <h1
            class="text-6xl font-heading tracking-tight max-w-2xl font-extrabold"
          >
            Make it yours.
          </h1>
          <p class="text-muted-foreground max-w-[650px] text-lg">
            Handpicked themes that you can use as a starting point for your own
            projects.
          </p>
        </section>
        <div class="px-4 pb-8 md:ml-auto md:pb-0">
          <div class="flex items-center space-x-2">
            <div class="hidden md:flex">
              <div class="mr-4 hidden items-center space-x-1 lg:flex">
                <TooltipProvider
                  v-for="(color, index) in allColors.slice(0, 5)"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        class="flex h-9 w-9 items-center justify-center rounded-full border-2 border-border text-xs"
                        :key="index"
                        @click="setTheme(color)"
                        :class="
                          color === configStore.theme
                            ? 'border-foreground'
                            : 'border-transparent'
                        "
                      >
                        <span
                          class="flex h-6 w-6 items-center justify-center rounded-full"
                          :style="{ backgroundColor: colors[color][7].rgb }"
                        >
                          <RadixIconsCheck
                            v-if="color === configStore.theme"
                            class="h-4 w-4 text-white"
                          />
                        </span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      align="center"
                      :side-offset="1"
                      class="capitalize"
                    >
                      {{ allColors[index] }}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" class="h-9 rounded-[0.5rem]">
                    <Paintbrush class="w-4 h-4 mr-2" />
                    Customize
                  </Button>
                </PopoverTrigger>
                <PopoverContent :sideOffset="8" align="end" class="w-96">
                  <div class="p-4">
                    <div class="grid space-y-1">
                      <h1 class="text-md text-foreground font-semibold">
                        Customize
                      </h1>
                      <p class="text-xs text-muted-foreground">
                        Pick a style and color for your components.
                      </p>
                    </div>
                    <div class="space-y-1.5 pt-6">
                      <Label for="color" class="text-xs"> Color </Label>
                      <div class="grid grid-cols-3 gap-2 py-1.5">
                        <Button
                          v-for="(color, index) in allColors"
                          :key="index"
                          variant="outline"
                          class="h-8 justify-start px-3"
                          :class="
                            color === configStore.theme
                              ? 'border-foreground border-2'
                              : ''
                          "
                          @click="setTheme(color)"
                        >
                          <span
                            class="h-5 w-5 rounded-full flex items-center justify-center"
                            :style="{ backgroundColor: colors[color][7].rgb }"
                          >
                            <RadixIconsCheck
                              v-if="color === configStore.theme"
                              class="h-3 w-3 text-white"
                            />
                          </span>
                          <span class="ml-2 text-xs capitalize">
                            {{ color }}
                          </span>
                        </Button>
                      </div>
                    </div>
                    <div class="space-y-1.5 pt-6">
                      <Label for="radius" class="text-xs"> Radius </Label>
                      <div class="grid grid-cols-5 gap-2 py-1.5">
                        <Button
                          v-for="(radius, index) in RADII"
                          :key="index"
                          variant="outline"
                          class="h-8 justify-center px-3"
                          :class="
                            radius === configStore.radius
                              ? 'border-foreground border-2'
                              : ''
                          "
                          @click="setRadius(radius)"
                        >
                          <span class="text-xs">
                            {{ radius }}
                          </span>
                        </Button>
                      </div>
                    </div>
                    <div class="space-y-1.5 pt-6">
                      <Label for="theme" class="text-xs"> Theme </Label>

                      <div class="flex space-x-2 py-1.5">
                        <Button
                          class="h-8"
                          variant="outline"
                          @click="isDark = false"
                          :class="{ 'border-2 border-foreground': !isDark }"
                        >
                          <RadixIconsSun class="w-4 h-4 mr-2" />
                          <span class="text-xs">Light</span>
                        </Button>
                        <Button
                          class="h-8"
                          variant="outline"
                          @click="isDark = true"
                          :class="{ 'border-2 border-foreground': isDark }"
                        >
                          <RadixIconsMoon class="w-4 h-4 mr-2" />
                          <span class="text-xs">Dark</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Dialog>
                <DialogTrigger asChild>
                  <Button class="h-9 ml-2 rounded-[0.5rem]"> Copy code </Button>
                </DialogTrigger>
                <DialogContent class="sm:max-w-[625px]">
                  <DialogHeader>
                    <DialogTitle>Theme</DialogTitle>
                    <DialogDescription>
                      Copy and paste the following code into your CSS file.
                    </DialogDescription>
                  </DialogHeader>
                  <div class="relative">
                    <Code
                      :code="code"
                      language="css"
                      :showLineNumbers="false"
                    />
                    <div class="absolute top-2 right-4">
                      <Button variant="outline" class="h-8" @click="copyCode">
                        <component
                          :is="copied ? RadixIconsCheck : RadixIconsCopy"
                          class="w-3.5 h-3.5"
                        />
                        <span class="ml-2 text-xs">
                          {{ copied ? "Copied" : "Copy" }}
                        </span>
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-8xl w-full mx-auto flex flex-col py-12 px-4">
      <slot />
    </div>
  </MainLayout>
</template>
