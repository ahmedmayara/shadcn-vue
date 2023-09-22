<script setup lang="ts">
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/new-york/dialog";
import { Button } from "@/components/ui/new-york/button";
import { Input } from "@/components/ui/new-york/input";
import { Label } from "@/components/ui/new-york/label";

import { Podcast } from "lucide-vue-next";
</script>

<template>
  <div
    class="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-dashed border-border"
  >
    <div
      class="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center"
    >
      <Podcast class="h-10 w-10 text-muted-foreground" />
      <h3 class="mt-4 text-lg font-semibold">No episodes added</h3>
      <p class="mb-4 mt-2 text-sm text-muted-foreground">
        You have not added any podcasts. Add one below.
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <Button class="h-8 text-xs"> Add Podcast </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle> Add Podcast </DialogTitle>
            <DialogDescription>
              Copy and paste the podcast feed URL to import.
            </DialogDescription>
          </DialogHeader>
          <div class="flex flex-col space-y-2 py-6">
            <Label for="url"> Podcast URL </Label>
            <Input id="url" placeholder="https://example.com/feed.xml" />
          </div>
          <DialogFooter>
            <Button> Import Podcast </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </div>
</template>
