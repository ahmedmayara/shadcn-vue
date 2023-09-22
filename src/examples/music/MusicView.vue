<script setup lang="ts">
import ExamplesLayout from "@/layouts/ExamplesLayout.vue";
import { listenNowAlbums, madeForYouAlbums } from "./utils/albums";

import AlbumArtwork from "./components/AlbumArtwork.vue";
import Menu from "./components/Menu.vue";
import Sidebar from "./components/Sidebar.vue";
import PodcastPlaceholder from "./components/PodcastPlaceholder.vue";

import PlusCircledIcon from "~icons/radix-icons/plus-circled";

import { Button } from "@/components/ui/new-york/button";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/new-york/tabs";
import { Separator } from "@/components/ui/new-york/separator";
import { ScrollBar, ScrollArea } from "@/components/ui/default/scroll-area";
</script>

<template>
  <ExamplesLayout>
    <div class="flex flex-col justify-center rounded-xl border border-border">
      <Menu />
      <div class="border-t border-border text-foreground">
        <div class="grid lg:grid-cols-5">
          <Sidebar />
          <div class="col-span-3 lg:col-span-4">
            <div class="h-full px-4 py-6 lg:px-8">
              <div class="h-full space-y-6">
                <Tabs default-value="music" class="h-full space-y-6">
                  <div class="space-between flex items-center">
                    <TabsList>
                      <TabsTrigger value="music"> Music </TabsTrigger>
                      <TabsTrigger value="podcasts"> Podcasts </TabsTrigger>
                      <TabsTrigger value="live" disabled> Live </TabsTrigger>
                    </TabsList>
                    <div class="ml-auto mr-4">
                      <Button>
                        <PlusCircledIcon class="mr-2 h-4 w-4" />
                        Add Music
                      </Button>
                    </div>
                  </div>
                  <TabsContent value="music">
                    <div class="flex items-center justify-between">
                      <div class="space-y-1">
                        <h2 class="text-2xl font-semibold tracking-tight">
                          Listen Now
                        </h2>
                        <p class="text-sm text-muted-foreground">
                          Top picks for you. Updated daily.
                        </p>
                      </div>
                    </div>
                    <Separator class="my-4" />
                    <div class="relative">
                      <ScrollArea>
                        <div class="flex space-x-4 pb-4">
                          <AlbumArtwork
                            v-for="album in listenNowAlbums"
                            :key="album.name"
                            :album="album"
                            class="w-[250px]"
                            aspect-ratio="portrait"
                            :width="250"
                            :height="330"
                          />
                        </div>
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                    </div>

                    <div class="mt-6 space-y-1">
                      <h2 class="text-2xl font-semibold tracking-tight">
                        Made for You
                      </h2>
                      <p class="text-sm text-muted-foreground">
                        Your personal playlists. Updated daily.
                      </p>
                    </div>
                    <Separator class="my-4" />

                    <div class="relative">
                      <ScrollArea>
                        <div class="flex space-x-4 pb-4">
                          <AlbumArtwork
                            v-for="album in madeForYouAlbums"
                            :key="album.name"
                            :album="album"
                            class="w-[150px]"
                            aspect-ratio="square"
                            :width="150"
                            :height="150"
                          />
                        </div>
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                    </div>
                  </TabsContent>
                  <TabsContent value="podcasts">
                    <div class="flex items-center justify-between pt-4">
                      <div class="space-y-1">
                        <h2 class="text-2xl font-semibold tracking-tight">
                          New Episodes
                        </h2>
                        <p class="text-sm text-muted-foreground">
                          Your favorite podcasts. Updated daily.
                        </p>
                      </div>
                    </div>
                    <Separator class="my-4" />
                    <PodcastPlaceholder />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ExamplesLayout>
</template>
