<script setup lang="ts">
import { computed } from "vue";
import components from "@/lib/data/components";
import DocsLayout from "@/layouts/DocsLayout.vue";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/new-york/table";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import Code from "@/components/Code.vue";
import { Separator } from "@/components/ui/default/separator";
import DocsPagination from "@/components/docs-pagination/DocsPagination.vue";
import DocsPrevious from "@/components/docs-pagination/DocsPrevious.vue";
import DocsNext from "@/components/docs-pagination/DocsNext.vue";
import Example from "@/components/example/Example.vue";
import Preview from "@/components/example/Preview.vue";
import Source from "@/components/example/Source.vue";

const table = computed(() => {
  return components.find((component) => component.attributes.name === "Table");
});

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem> Components </BreadCrumbItem>
      <BreadCrumbItem path="/docs/components/table" lastItem>
        Table
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="text-4xl font-heading text-foreground">
        {{ table?.attributes.name }}
      </h1>
      <p class="text-muted-foreground text-lg max-w-xl">
        {{ table?.attributes.description }}
      </p>
    </div>

    <Example>
      <Preview>
        <Table>
          <TableCaption> A list of your recent invoices. </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[100px]"> Invoice </TableHead>
              <TableHead> Status </TableHead>
              <TableHead> Method </TableHead>
              <TableHead class="text-right"> Amount </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="(invoice, index) in invoices" :key="index">
              <TableCell class="font-medium">
                {{ invoice.invoice }}
              </TableCell>
              <TableCell> {{ invoice.paymentStatus }} </TableCell>
              <TableCell> {{ invoice.paymentMethod }} </TableCell>
              <TableCell class="text-right">
                {{ invoice.totalAmount }}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Preview>
      <Source>
        <Code :code="table?.attributes.code!" language="vue" />
      </Source>
    </Example>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Installation</h1>
      <Separator class="mt-2" />

      <Code
        code="npx shadcn-vue add table"
        language="bash"
        :show-line-numbers="false"
      />
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Usage</h1>
      <Separator class="mt-2" />

      <Code
        :code="table?.attributes.usageImportCode!"
        language="vue"
        :show-line-numbers="false"
      />

      <Code
        :code="table?.attributes.usageCode!"
        language="vue"
        :show-line-numbers="false"
      />
    </div>

    <DocsPagination>
      <DocsPrevious
        title="Switch"
        description="A control that allows the user to toggle between checked and not checked."
        to="/docs/components/switch"
      />
      <DocsNext
        title="Tabs"
        description="A set of layered sections of content known as tab panels that are displayed one
at a time."
        to="/docs/components/tabs"
      />
    </DocsPagination>
  </DocsLayout>
</template>
