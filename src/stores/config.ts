import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { type Theme } from "@/components/ui/themes";

type Config = {
  theme: Theme["name"];
  radius: number;
};

export const RADII = [0, 0.25, 0.5, 0.75, 1];

export const useConfigStore = defineStore("config", () => {
  const config = ref<Config>({
    theme: "zinc",
    radius: 0.5,
  });

  const themeClass = computed(() => `theme-${config.value.theme}`);

  const theme = computed(() => config.value.theme);

  const radius = computed(() => config.value.radius);

  function setTheme(theme: Theme["name"]) {
    config.value.theme = theme;
  }

  function setRadius(radius: number) {
    config.value.radius = radius;
  }

  return { config, theme, setTheme, radius, setRadius, themeClass };
});
