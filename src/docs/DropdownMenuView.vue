<script setup lang="ts">
import { computed, ref } from "vue";
import TablerBrandRadixUi from "~icons/tabler/brand-radix-ui";
import components from "@/lib/data/components";
import DocsLayout from "@/layouts/DocsLayout.vue";
import { Badge } from "@/components/ui/badge";
import { BreadCrumbItem, BreadCrumb } from "@/components/ui/breadcrumb";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Code from "@/components/Code.vue";
import { Separator } from "@/components/ui/separator";
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
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
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
      <h1 class="text-4xl font-heading text-foreground">
        {{ dropdownMenu?.attributes.name }}
      </h1>
      <p class="text-muted-foreground text-lg max-w-xl">
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
        <TablerBrandRadixUi class="w-3 h-3 mr-1" />
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
                <User class="w-4 h-4 mr-2" />
                Profile
                <DropdownMenuShortcut> ⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard class="w-4 h-4 mr-2" />
                Billing
                <DropdownMenuShortcut> ⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings class="w-4 h-4 mr-2" />
                Settings
                <DropdownMenuShortcut> ⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Keyboard class="w-4 h-4 mr-2" />
                Shortcuts
                <DropdownMenuShortcut> ⇧⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Users class="w-4 h-4 mr-2" />
                Team
                <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <UserPlus class="w-4 h-4 mr-2" />
                  Invite users
                  <ChevronRight class="w-4 h-4 ml-auto" />
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Mail class="w-4 h-4 mr-2" />
                      Mail
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageSquare class="w-4 h-4 mr-2" />
                      Message
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusCircle class="w-4 h-4 mr-2" />
                    More...
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <Plus class="w-4 h-4 mr-2" />
                New Team
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Github class="w-4 h-4 mr-2" />
                GitHub
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LifeBuoy class="w-4 h-4 mr-2" />
                Support
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <Cloud class="w-4 h-4 mr-2" />
                API
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut class="w-4 h-4 mr-2" />
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
      <h1 class="text-2xl font-heading text-foreground">Installation</h1>
      <Separator class="mt-2 mb-6" />

      <Code
        code="npx shadcn-vue add dropdown-menu"
        language="bash"
        :show-line-numbers="false"
      />
    </div>

    <div class="pt-8">
      <h1 class="text-2xl font-heading text-foreground">Usage</h1>
      <Separator class="mt-2 mb-6" />

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
      <h1 class="text-2xl font-heading text-foreground">Examples</h1>
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
            class="inline-flex h-9 items-center w-full justify-start rounded-none border-b border-border dark:bg-transparent bg-transparent p-0"
          >
            <TabsTrigger
              class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm focus-visible:outline-none data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
              :value="`preview-${example.name}`"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm focus-visible:outline-none data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
              :value="`code-${example.name}`"
            >
              Code
            </TabsTrigger>
          </TabsList>

          <TabsContent :value="`preview-${example.name}`">
            <div
              class="flex mt-8 w-full min-h-[450px] justify-center items-center flex-col rounded-lg p-8 border border-border"
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
