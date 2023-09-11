import { h } from "vue";
import type { Task } from "./../utils/types";
import { TitleColumn, StatusColumn, PriorityColumn } from ".";
import { labels, priorities, statuses } from "../utils/data";
import { TasksActions } from "../actions";
import type { ColumnDef } from "@tanstack/vue-table";
import { Checkbox } from "@/components/ui/default/checkbox";

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => {
      return h(Checkbox, {
        checked: table.getIsAllPageRowsSelected(),
        onChange: (e: any) => table.toggleAllPageRowsSelected(e.target.checked),
      });
    },
    cell: ({ row }) => {
      return h(Checkbox, {
        checked: row.getIsSelected(),
        disabled: !row.getCanSelect(),
        onChange: row.getToggleSelectedHandler(),
      });
    },
  },
  {
    header: "Task",
    accessorKey: "id",
    enableSorting: false,
  },
  {
    id: "title",
    header: "Title",
    accessorKey: "title",
    enableHiding: false,
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label);
      return h(TitleColumn, {
        title: row.original.title,
        label: label?.label,
      });
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    enableHiding: false,
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.label === row.original.status,
      );
      return h(StatusColumn, {
        icon: status?.icon,
        label: status?.label,
      });
    },
  },
  {
    header: "Priority",
    accessorKey: "priority",
    enableHiding: false,
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.label === row.original.priority,
      );
      return h(PriorityColumn, {
        icon: priority?.icon,
        label: priority?.label,
      });
    },
  },
  {
    id: "actions",
    cell: ({ row }) => h(TasksActions, { row }),
    enableHiding: true,
    enableSorting: false,
  },
];
