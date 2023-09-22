<script setup lang="ts">
import { computed, ref } from "vue";
import TablerBrandRadixUi from "~icons/tabler/brand-radix-ui";
import components from "@/lib/data/components";
import DocsLayout from "@/layouts/DocsLayout.vue";
import { Badge } from "@/components/ui/default/badge";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/default/tabs";
import Code from "@/components/Code.vue";
import { Separator } from "@/components/ui/default/separator";
import DocsPagination from "@/components/docs-pagination/DocsPagination.vue";
import DocsPrevious from "@/components/docs-pagination/DocsPrevious.vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/default/dropdown-menu";
import { Button } from "@/components/ui/default/button";
import {
  User,
  Users,
  CreditCard,
  Settings,
  Keyboard,
  UserPlus,
  Plus,
  Github,
  Mail,
  MessageSquare,
  PlusCircle,
  LifeBuoy,
  Cloud,
  LogOut,
  X,
} from "lucide-vue-next";
import DocsNext from "@/components/docs-pagination/DocsNext.vue";
import Example from "@/components/example/Example.vue";
import Preview from "@/components/example/Preview.vue";
import Source from "@/components/example/Source.vue";

const dropdownMenu = computed(() => {
  return components.find(
    (component) => component.attributes.name === "Dropdown Menu",
  );
});

const showStatusBar = ref(true);
const showActivityBar = ref(false);
const showSideBar = ref(false);

const position = ref("bottom");
</script>

<template>
  <DocsLayout>
    <BreadCrumb>
      <BreadCrumbItem> Docs </BreadCrumbItem>
      <BreadCrumbItem> Components </BreadCrumbItem>
      <BreadCrumbItem path="/docs/components/dropdown-menu" lastItem>
        Dropdown Menu
      </BreadCrumbItem>
    </BreadCrumb>

    <div class="grid space-y-1 pt-6">
      <h1 class="font-heading text-4xl text-foreground">
        {{ dropdownMenu?.attributes.name }}
      </h1>
      <p class="max-w-xl text-lg text-muted-foreground">
        {{ dropdownMenu?.attributes.description }}
      </p>
    </div>

    <div class="flex space-x-2 pt-4">
      <Badge
        variant="secondary"
        class="cursor-pointer"
        as="a"
        :href="dropdownMenu?.attributes.radixUrl"
        target="_blank"
      >
        <TablerBrandRadixUi class="mr-1 h-3 w-3" />
        Radix UI
      </Badge>
      <Badge
        variant="secondary"
        class="cursor-pointer"
        as="a"
        :href="dropdownMenu?.attributes.apiReference"
        target="_blank"
      >
        API Reference
      </Badge>
    </div>

    <Example>
      <Preview>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline"> Open </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-56">
            <DropdownMenuLabel> My Account </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User class="mr-2 h-4 w-4" />
                Profile
                <DropdownMenuShortcut> ⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard class="mr-2 h-4 w-4" />
                Billing
                <DropdownMenuShortcut> ⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings class="mr-2 h-4 w-4" />
                Settings
                <DropdownMenuShortcut> ⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Keyboard class="mr-2 h-4 w-4" />
                Shortcuts
                <DropdownMenuShortcut> ⇧⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Users class="mr-2 h-4 w-4" />
                Team
                <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <UserPlus class="mr-2 h-4 w-4" />
                  Invite users
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Mail class="mr-2 h-4 w-4" />
                      Mail
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageSquare class="mr-2 h-4 w-4" />
                      Message
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusCircle class="mr-2 h-4 w-4" />
                    More...
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <Plus class="mr-2 h-4 w-4" />
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Github class="mr-2 h-4 w-4" />
                GitHub
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LifeBuoy class="mr-2 h-4 w-4" />
                Support
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <Cloud class="mr-2 h-4 w-4" />
                API
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut class="mr-2 h-4 w-4" />
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Preview>

      <Source>
        <Code :code="dropdownMenu?.attributes.code!" language="vue" />
      </Source>
    </Example>

    <div class="pt-8">
      <h1 class="font-heading text-2xl text-foreground">Installation</h1>
      <Separator class="mb-6 mt-2" />

      <Code
        code="npx shadcn-vue add dropdown-menu"
        language="bash"
        :show-line-numbers="false"
      />
    </div>

    <div class="pt-8">
      <h1 class="font-heading text-2xl text-foreground">Usage</h1>
      <Separator class="mb-6 mt-2" />

      <div class="space-y-6">
        <Code
          :code="dropdownMenu?.attributes.usageImportCode!"
          language="vue"
          :show-line-numbers="false"
        />

        <Code
          :code="dropdownMenu?.attributes.usageCode!"
          language="vue"
          :show-line-numbers="false"
        />
      </div>
    </div>

    <div class="pt-8">
      <h1 class="font-heading text-2xl text-foreground">Examples</h1>
      <Separator class="mt-2" />

      <div
        v-for="example in dropdownMenu?.examples"
        :key="example.name"
        class="pt-8"
      >
        <h2 class="text-xl font-semibold text-foreground">
          {{ example.name }}
        </h2>
        <Tabs class="pt-4" :default-value="`preview-${example.name}`">
          <TabsList
            class="inline-flex h-9 w-full items-center justify-start rounded-none border-b border-border bg-transparent p-0 dark:bg-transparent"
          >
            <TabsTrigger
              class="relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-1 pb-3 pt-2 text-sm font-semibold shadow-none transition-none focus-visible:outline-none data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
              :value="`preview-${example.name}`"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              class="relative inline-flex h-9 items-center justify-center whitespace-nowrap rounded-none border-b-2 border-b-transparent bg-transparent px-4 py-1 pb-3 pt-2 text-sm font-semibold shadow-none transition-none focus-visible:outline-none data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none"
              :value="`code-${example.name}`"
            >
              Code
            </TabsTrigger>
          </TabsList>

          <TabsContent :value="`preview-${example.name}`">
            <div
              class="mt-8 flex min-h-[450px] w-full flex-col items-center justify-center rounded-lg border border-border p-8"
            >
              <div v-if="example.name === 'Checkboxes'">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline"> Open</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent class="w-64" align="center">
                    <DropdownMenuLabel> Appearance</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuCheckboxItem v-model:checked="showStatusBar">
                        Status Bar
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        v-model:checked="showActivityBar"
                        disabled
                      >
                        Activity Bar
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem v-model:checked="showSideBar">
                        Side Bar
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div v-if="example.name === 'Radio Group'">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline"> Open</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent class="w-64" align="center">
                    <DropdownMenuLabel> Panel Position</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuRadioGroup v-model="position">
                        <DropdownMenuRadioItem value="top">
                          Top
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="bottom">
                          Bottom
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="right">
                          Right
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </TabsContent>

          <TabsContent :value="`code-${example.name}`" class="mt-6">
            <Code :code="example.code" language="vue" />
          </TabsContent>
        </Tabs>
      </div>
    </div>

    <DocsPagination>
      <DocsPrevious
        title="Dialog"
        description="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
        to="/docs/components/dialog"
      />
      <DocsNext
        title="Hover Card"
        description="For sighted users to preview content available behind a link."
        to="/docs/components/hover-card"
      />
    </DocsPagination>
  </DocsLayout>
</template>
