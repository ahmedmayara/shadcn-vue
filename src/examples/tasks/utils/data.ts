import RadixIconsArrowUp from "~icons/radix-icons/arrow-up";
import RadixIconsArrowRight from "~icons/radix-icons/arrow-right";
import RadixIconsArrowDown from "~icons/radix-icons/arrow-down";
import RadixIconsQuestionMarkCircled from "~icons/radix-icons/question-mark-circled";
import RadixIconsCircle from "~icons/radix-icons/circle";
import RadixIconsStopwatch from "~icons/radix-icons/stopwatch";
import RadixIconsCheckCircled from "~icons/radix-icons/check-circled";
import RadixIconsCrossCircled from "~icons/radix-icons/cross-circled";

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: RadixIconsArrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: RadixIconsArrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: RadixIconsArrowUp,
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: RadixIconsQuestionMarkCircled,
  },
  {
    value: "todo",
    label: "Todo",
    icon: RadixIconsCircle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: RadixIconsStopwatch,
  },
  {
    value: "done",
    label: "Done",
    icon: RadixIconsCheckCircled,
  },
  {
    value: "cancelled",
    label: "Cancelled",
    icon: RadixIconsCrossCircled,
  },
];

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];
