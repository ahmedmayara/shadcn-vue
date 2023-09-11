<script setup lang="ts">
import type { Album } from "../utils/albums";
import { playlists } from "../utils/playlists";
import { PlusCircle, ListMusic, ChevronRight } from "lucide-vue-next";
import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/default/context-menu";

interface AlbumArtworkProps {
  album: Album;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}
withDefaults(defineProps<AlbumArtworkProps>(), {
  aspectRatio: "portrait",
});
</script>

<template>
  <div :class="cn('space-y-3', $attrs.class ?? '')">
    <ContextMenu>
      <ContextMenuTrigger>
        <div class="overflow-hidden rounded-md">
          <img
            :src="album.cover"
            :alt="album.name"
            :width="width"
            :height="height"
            :class="
              cn(
                'h-auto w-auto object-cover transition-all hover:scale-105',
                aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square',
              )
            "
          />
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent class="w-40">
        <ContextMenuItem>Add to Library</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            Add to Playlist
            <ChevronRight class="ml-auto h-4 w-4" />
          </ContextMenuSubTrigger>
          <ContextMenuSubContent class="w-48">
            <ContextMenuItem>
              <PlusCircle class="mr-2 h-4 w-4" />
              New Playlist
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem v-for="playlist in playlists" :key="playlist">
              <ListMusic class="mr-2 h-4 w-4" />
              {{ playlist }}
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>Play Next</ContextMenuItem>
        <ContextMenuItem>Play Later</ContextMenuItem>
        <ContextMenuItem>Create Station</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Like</ContextMenuItem>
        <ContextMenuItem>Share</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
    <div class="space-y-1 text-sm">
      <h3 class="font-medium leading-none">
        {{ album.name }}
      </h3>
      <p class="text-xs text-muted-foreground">
        {{ album.artist }}
      </p>
    </div>
  </div>
</template>
