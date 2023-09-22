<script setup lang="ts">
import { Badge } from "@/components/ui/new-york/badge";

interface Props {
  label?: string;
  title?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div className="flex space-x-2">
    <Badge variant="outline"> {{ props.label }} </Badge>
    <span className="max-w-[500px] truncate font-medium">
      {{ props.title }}
    </span>
  </div>
</template>
