import { cva } from "class-variance-authority";

export { default as Button } from "./Button.vue";

export const buttonVariants = cva(
  "inline-flex items-center justify-center text-sm px-4 py-2.5 rounded-md font-medium transition-colors ease-in-out duration-300",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground enabled:hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground enabled:hover:bg-secondary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neutral: "",
      },
      disabled: {
        true: "!opacity-50 !cursor-not-allowed !pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      disabled: false,
    },
  },
);
