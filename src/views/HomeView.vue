<script setup lang="ts">
import { ref } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
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
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
} from "@/components/ui/menubar";
import { ChevronRight } from "lucide-vue-next";

const menuBarCheckboxOne = ref(false);
const menuBarCheckboxTwo = ref(true);
const person = ref("Pedro Duarte");
const isDark = ref(false);
</script>

<template>
  <MainLayout>
    <Menubar class="mt-8">
      <MenubarMenu value="file">
        <MenubarTrigger> File </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut> ⌘T </MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut> ⌘N </MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled> New Incognito Window </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>
              <span>Share</span>
              <ChevronRight class="w-4 h-4 ml-auto" />
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email Link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut> ⌘P </MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="edit">
        <MenubarTrigger> Edit </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut> ⌘Z </MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut> ⌘Y </MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>
              <span>Find</span>
              <ChevronRight class="w-4 h-4 ml-auto" />
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem> Search the web... </MenubarItem>
              <MenubarSeparator />
              <MenubarItem> Find... </MenubarItem>
              <MenubarItem> Find next... </MenubarItem>
              <MenubarItem> Find previous... </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem disabled>Cut</MenubarItem>
          <MenubarItem disabled>Copy</MenubarItem>
          <MenubarItem disabled>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="view">
        <MenubarTrigger> View </MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem v-model:checked="menuBarCheckboxOne">
            Show Bookmarks <MenubarShortcut class="mr-2"> ⌘B </MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarCheckboxItem v-model:checked="menuBarCheckboxTwo">
            Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>
            Reload <MenubarShortcut> ⌘R </MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>
            Force Reload <MenubarShortcut> ⇧⌘R </MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem> Toggle Fullscreen </MenubarItem>
          <MenubarSeparator />
          <MenubarCheckboxItem v-model:checked="isDark">
            Dark Mode
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu value="profiles">
        <MenubarTrigger> Profiles </MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup v-model="person">
            <MenubarRadioItem value="Pedro Duarte">
              <span> Pedro Duarte </span>
            </MenubarRadioItem>
            <MenubarRadioItem value="Colm Tuite">
              <span> Colm Tuite </span>
            </MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem> Edit... </MenubarItem>
          <MenubarSeparator />
          <MenubarItem> Add Profile </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </MainLayout>
</template>
