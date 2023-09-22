<script setup lang="ts">
import { ref } from "vue";

import GlobeIcon from "~icons/radix-icons/globe";
import { Mic2Icon } from "lucide-vue-next";

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
} from "@/components/ui/new-york/menubar";

const checkboxItemOne = ref(false);
const checkboxItemTwo = ref(true);
const radioItem = ref("vincent");
</script>

<template>
  <Menubar class="mx-4 border-none">
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
          <MenubarSubTrigger> New </MenubarSubTrigger>
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
          <MenubarSubTrigger> Library </MenubarSubTrigger>
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
          <Mic2Icon class="ml-auto h-4 w-4 opacity-60" />
        </MenubarItem>
        <MenubarItem>
          Emojis & Symbols
          <GlobeIcon class="ml-auto h-4 w-4 opacity-60" />
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
</template>
