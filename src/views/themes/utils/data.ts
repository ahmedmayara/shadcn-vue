import { h } from "vue";
import { faker } from "@faker-js/faker";
import PaymentsActions from "./actions/PaymentsAction.vue";
import type { ColumnDef } from "@tanstack/vue-table";
import { Checkbox } from "@/components/ui/default/checkbox";
import RiAppleFill from "~icons/ri/apple-fill";
import RiPaypalFill from "~icons/ri/paypal-fill";
import { CreditCard } from "lucide-vue-next";

export interface Payment {
  status: string;
  email: string;
  amount: number;
}

interface TeamMember {
  name: string;
  username: string;
  role: Role["name"];
  avatar: string;
  access: string;
}

interface Role {
  name: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Bob Smith",
    username: "@bobbysmith",
    role: "Owner",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=Bob",
    access: "Can edit",
  },
  {
    name: "Nala Sutanovac",
    username: "@nalasutanovac",
    role: "Developer",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=Nala",
    access: "Can view",
  },
  {
    name: "Jack Lynch",
    username: "@jacklynch",
    role: "Designer",
    avatar: "https://api.dicebear.com/6.x/lorelei/svg?seed=Jack",
    access: "Can view",
  },
];

export const roles: Role[] = [
  {
    name: "Owner",
    description: "Can manage all aspects of the account",
  },
  {
    name: "Developer",
    description: "Can deploy apps, manage databases, and manage users",
  },
  {
    name: "Designer",
    description: "Can deploy apps and manage databases",
  },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const years = [
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
  "2030",
];

interface Payments {
  name: string;
  icon: any;
}

export const payments: Payments[] = [
  {
    name: "Card",
    icon: CreditCard,
  },
  {
    name: "Paypal",
    icon: RiPaypalFill,
  },
  {
    name: "Apple",
    icon: RiAppleFill,
  },
];

export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const columns: ColumnDef<Payment>[] = [
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
    header: "Status",
    accessorKey: "status",
    enableHiding: false,
  },
  {
    header: "Email",
    accessorKey: "email",
    enableHiding: false,
  },
  {
    header: "Amount",
    accessorKey: "amount",
    enableHiding: false,
    cell: ({ row }) => currencyFormatter.format(row.original.amount),
  },
  {
    id: "actions",
    cell: ({ row }) => h(PaymentsActions, { row }),
    enableHiding: true,
    enableSorting: false,
  },
];

export const data = Array.from({ length: 5 }, () => {
  return {
    id: `PAYMENT-${faker.number.int({ min: 1000, max: 9999 })}`,
    status: faker.helpers.arrayElement(["Paid", "Pending", "Cancelled"]),
    email: faker.internet.email(),
    amount: faker.finance.amount(),
  };
});
