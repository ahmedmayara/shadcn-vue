<script setup lang="ts">
import { ref } from "vue";

import CaretSortIcon from "~icons/radix-icons/caret-sort";

import { Button } from "@/components/ui/new-york/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
  CommandGroup,
} from "@/components/ui/new-york/command";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/new-york/hover-card";
import { Label } from "@/components/ui/new-york/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/default/popover";

import { models, type Model, type ModelType, types } from "../utils/data";
import type { PopoverRootProps } from "radix-vue";
import ModelItem from "./ModelItem.vue";

interface ModelSelectorProps extends PopoverRootProps {
  types: ModelType[];
  models: Model[];
}

const open = ref<boolean>(false);
const selectedModel = ref<Model | null>(models[0]);
const peekedModel = ref<Model | null>(models[0]);
</script>

<template>
  <div class="grid gap-2">
    <HoverCard :openDelay="200">
      <HoverCardTrigger asChild>
        <Label for="model"> Model </Label>
      </HoverCardTrigger>
      <HoverCardContent align="start" class="w-[260px] text-sm" side="left">
        The model which will generate the completion. Some models are suitable
        for natural language tasks, others specialize in code. Learn more.
      </HoverCardContent>
    </HoverCard>

    <Popover v-model:open="open">
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded="{open}"
          aria-label="Select a model"
          class="w-full justify-between"
        >
          {{ selectedModel ? selectedModel.name : "Select a model..." }}
          <CaretSortIcon class="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" class="w-[250px] p-0">
        <HoverCard>
          <HoverCardContent side="left" align="start" class="min-h-[280px]">
            <div class="grid gap-2">
              <h4 class="font-medium leading-none">
                {{ peekedModel?.name }}
              </h4>
              <div class="text-sm text-muted-foreground">
                {{ peekedModel?.description }}
              </div>
              <template v-if="peekedModel?.strengths">
                <div class="mt-4 grid gap-2">
                  <h5 class="text-sm font-medium leading-none">Strengths</h5>
                  <ul class="text-sm text-muted-foreground">
                    {{
                      peekedModel.strengths
                    }}
                  </ul>
                </div>
              </template>
            </div>
          </HoverCardContent>
          <Command>
            <CommandList class="h-[var(--cmdk-list-height)] max-h-[400px]">
              <CommandInput placeholder="Search Models..." />
              <CommandEmpty>No models found.</CommandEmpty>
              <HoverCardTrigger />
              <CommandGroup v-for="t in types" :key="t" :heading="t">
                <ModelItem
                  v-for="model in models.filter((model) => model.type === t)"
                  :key="model.id"
                  :model="model"
                  :isSelected="model.id === selectedModel?.id"
                  :onPeek="() => (peekedModel = model)"
                  :onSelect="
                    () => {
                      selectedModel = model;
                      open = false;
                    }
                  "
                />
              </CommandGroup>
            </CommandList>
          </Command>
        </HoverCard>
      </PopoverContent>
    </Popover>
  </div>
</template>
