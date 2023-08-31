import { cva } from "class-variance-authority";

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-foreground focus:bg-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent data-[state=open]:bg-accent",
);

export { default as NavigationMenu } from "./NavigationMenu.vue";
export { default as NavigationMenuList } from "./NavigationMenuList.vue";
export { default as NavigationMenuItem } from "./NavigationMenuItem.vue";
export { default as NavigationMenuTrigger } from "./NavigationMenuTrigger.vue";
export { default as NavigationMenuContent } from "./NavigationMenuContent.vue";
export { default as NavigationMenuLink } from "./NavigationMenuLink.vue";
export { default as NavigationMenuListItem } from "./NavigationMenuListItem.vue";

export { navigationMenuTriggerStyle };
