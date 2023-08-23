<script setup lang="ts">
interface Props {
  label?: string;
  icon?: any;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex items-center">
    <component :is="props.icon" class="w-4 h-4 mr-2 text-muted" />
    <span>{{ props.label }}</span>
  </div>
</template>
