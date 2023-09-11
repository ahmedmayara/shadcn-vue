<script setup lang="ts">
import { ref } from "vue";
import ExamplesLayout from "@/layouts/ExamplesLayout.vue";
import { listenNowAlbums, madeForYouAlbums } from "./utils/albums";
import { sidebarItems } from "./utils/sidebar";
import AlbumArtwork from "./components/AlbumArtwork.vue";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioItem,
  MenubarRadioGroup,
  MenubarSeparator,
  MenubarSub,
  MenubarLabel,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
} from "@/components/ui/default/menubar";
import { Button } from "@/components/ui/new-york/button";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/new-york/tabs";
import { Separator } from "@/components/ui/default/separator";
import { ScrollBar, ScrollArea } from "@/components/ui/default/scroll-area";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/default/dialog";
import { Input } from "@/components/ui/new-york/input";
import { Label } from "@/components/ui/new-york/label";

import {
  ChevronRight,
  Globe,
  Mic2,
  PlusCircle,
  Podcast,
} from "lucide-vue-next";

const checkboxItemOne = ref(false);
const checkboxItemTwo = ref(true);
const radioItem = ref("vincent");
</script>

<template>
  <ExamplesLayout>
    <div class="flex justify-center flex-col border border-border rounded-xl">
      <Menubar class="border-none mx-4">
        <MenubarMenu value="music">
          <MenubarTrigger class="font-semibold">Music</MenubarTrigger>
          <MenubarContent>
            <MenubarItem> About Music </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Preferences <MenubarShortcut>⌘,</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Hide Music <MenubarShortcut>⌘H</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Hide Others <MenubarShortcut>⇧⌘H</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Quit Music <MenubarShortcut>⌘Q</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu value="file">
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>
                New
                <ChevronRight class="w-4 h-4 ml-auto" />
              </MenubarSubTrigger>
              <MenubarSubContent class="w-[230px]">
                <MenubarItem>
                  Playlist <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>
                  Playlist From Selection <MenubarShortcut>⇧⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Smart Playlist... <MenubarShortcut>⌥⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem> Playlist Folder </MenubarItem>
                <MenubarItem disabled> Genius Playlist </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>
              Open Stream URL... <MenubarShortcut>⌘U</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Close Window <MenubarShortcut>⌘W</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>
                Library
                <ChevronRight class="w-4 h-4 ml-auto" />
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem> Update Cloud Library </MenubarItem>
                <MenubarItem> Update Genius </MenubarItem>
                <MenubarSeparator />
                <MenubarItem> Organize Library... </MenubarItem>
                <MenubarItem> Organize Library... </MenubarItem>
                <MenubarSeparator />
                <MenubarItem> Import Playlist... </MenubarItem>
                <MenubarItem disabled> Export Playlist... </MenubarItem>
                <MenubarItem> Show Duplicate Items </MenubarItem>
                <MenubarSeparator />
                <MenubarItem> Get Album Artwork </MenubarItem>
                <MenubarItem disabled> Get Track Names </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>
              Import... <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled> Burn Playlist To Disc... </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Show In Finder... <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem> Convert </MenubarItem>
            <MenubarSeparator />
            <MenubarItem> Page Setup... </MenubarItem>
            <MenubarItem disabled>
              Print... <MenubarShortcut>⌘P</MenubarShortcut></MenubarItem
            >
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu value="edit">
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem disabled>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem disabled>
              Cut <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Copy <MenubarShortcut>⌘C</MenubarShortcut></MenubarItem
            >
            <MenubarItem disabled>
              Paste <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Select All <MenubarShortcut>⌘A</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Deselect All <MenubarShortcut>⇧⌘A</MenubarShortcut></MenubarItem
            >
            <MenubarSeparator />
            <MenubarItem>
              Smart Dictation...
              <Mic2 class="h-4 w-4 ml-auto opacity-60" />
            </MenubarItem>
            <MenubarItem>
              Emojis & Symbols
              <Globe class="h-4 w-4 ml-auto opacity-60" />
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu value="view">
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem v-model:checked="checkboxItemOne">
              Show Playing Next
            </MenubarCheckboxItem>
            <MenubarCheckboxItem v-model:checked="checkboxItemTwo">
              Show Lyrics
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem disabled> Show Status Bar </MenubarItem>
            <MenubarSeparator />
            <MenubarItem> Hide Sidebar </MenubarItem>
            <MenubarItem disabled>
              Enter Fullscreen <MenubarShortcut>⇧⌘F</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu value="account">
          <MenubarTrigger>Account</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel inset> Switch Account </MenubarLabel>
            <MenubarSeparator />
            <MenubarRadioGroup v-model="radioItem">
              <MenubarRadioItem value="vincent">
                <span>Vincent</span>
              </MenubarRadioItem>
              <MenubarRadioItem value="craig">
                <span>Craig</span>
              </MenubarRadioItem>
              <MenubarRadioItem value="maria">
                <span>Maria</span>
              </MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem class="pl-7"> Manage Family... </MenubarItem>
            <MenubarSeparator />
            <MenubarItem class="pl-7"> Add Account </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <div class="border-t border-border text-foreground">
        <div class="grid lg:grid-cols-5">
          <div class="pb-12 hidden lg:block border-r border-border">
            <div class="space-y-4 py-4">
              <div
                class="px-3 py-2"
                v-for="item in sidebarItems"
                :key="item.header"
              >
                <h3 class="text-lg font-semibold px-4 tracking-tight">
                  {{ item.header }}
                </h3>
                <div
                  class="flex flex-col space-y-1.5 mt-2"
                  v-for="subItem in item.subItems"
                  :key="subItem.title"
                >
                  <Button
                    class="justify-start"
                    variant="ghost"
                    :class="{ 'bg-secondary': subItem.selected }"
                  >
                    <component :is="subItem.icon" class="w-4 h-4 mr-2" />
                    {{ subItem.title }}
                  </Button>
                </div>
              </div>
            </div>
          </div>
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
                        <PlusCircle class="w-4 h-4 mr-2" />
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
                    <div
                      class="flex h-[450px] shrink-0 items-center justify-center rounded-md border border-border border-dashed"
                    >
                      <div
                        class="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center"
                      >
                        <Podcast class="h-10 w-10 text-muted-foreground" />
                        <h3 class="mt-4 text-lg font-semibold">
                          No episodes added
                        </h3>
                        <p class="mb-4 mt-2 text-sm text-muted-foreground">
                          You have not added any podcasts. Add one below.
                        </p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button class="text-xs h-8"> Add Podcast </Button>
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
                              <Input
                                id="url"
                                placeholder="https://example.com/feed.xml"
                              />
                            </div>
                            <DialogFooter>
                              <Button> Import Podcast </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
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
