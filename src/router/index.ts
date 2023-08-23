import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "shadcn-vue",
      },
    },
    {
      path: "/docs",
      name: "docs",
      component: () => import("@/views/IntroductionView.vue"),
      meta: {
        title: "Introduction - shadcn-vue",
      },
    },
    {
      path: "/docs/installation",
      name: "installation",
      component: () => import("@/views/InstallationView.vue"),
      meta: {
        title: "Installation - shadcn-vue",
      },
    },
    {
      path: "/docs/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
      meta: {
        title: "About - shadcn-vue",
      },
    },
    {
      path: "/examples/dashboard",
      name: "dashboard",
      component: () => import("@/examples/dashboard/DashboardView.vue"),
      meta: {
        title: "Dashboard",
      },
    },
    {
      path: "/examples/tasks",
      name: "tasks",
      component: () => import("@/examples/tasks/TasksView.vue"),
      meta: {
        title: "Tasks",
      },
    },
    {
      path: "/examples/cards",
      name: "cards",
      component: () => import("@/examples/cards/CardsView.vue"),
      meta: {
        title: "Cards",
      },
    },
    {
      path: "/examples/playground",
      name: "playground",
      component: () => import("@/examples/playground/PlaygroundView.vue"),
      meta: {
        title: "Playground",
      },
    },
    {
      path: "/examples/authentication",
      name: "authentication",
      component: () =>
        import("@/examples/authentication/AuthenticationView.vue"),
      meta: {
        title: "Authentication",
      },
    },
    {
      path: "/docs/components/accordion",
      name: "accordion",
      component: () => import("@/docs/AccordionView.vue"),
      meta: {
        title: "Accordion - shadcn-vue",
      },
    },
    {
      path: "/docs/components/alert",
      name: "alert",
      component: () => import("@/docs/AlertView.vue"),
      meta: {
        title: "Alert - shadcn-vue",
      },
    },
    {
      path: "/docs/components/alert-dialog",
      name: "alert-dialog",
      component: () => import("@/docs/AlertDialogView.vue"),
      meta: {
        title: "Alert Dialog - shadcn-vue",
      },
    },
    {
      path: "/docs/components/aspect-ratio",
      name: "aspect-ratio",
      component: () => import("@/docs/AspectRatioView.vue"),
      meta: {
        title: "Aspect Ratio - shadcn-vue",
      },
    },
    {
      path: "/docs/components/avatar",
      name: "avatar",
      component: () => import("@/docs/AvatarView.vue"),
      meta: {
        title: "Avatar - shadcn-vue",
      },
    },
    {
      path: "/docs/components/badge",
      name: "badge",
      component: () => import("@/docs/BadgeView.vue"),
      meta: {
        title: "Badge - shadcn-vue",
      },
    },
    {
      path: "/docs/components/button",
      name: "button",
      component: () => import("@/docs/ButtonView.vue"),
      meta: {
        title: "Button - shadcn-vue",
      },
    },
    {
      path: "/docs/components/calendar",
      name: "calendar",
      component: () => import("@/docs/CalendarView.vue"),
      meta: {
        title: "Calendar - shadcn-vue",
      },
    },
    {
      path: "/docs/components/card",
      name: "card",
      component: () => import("@/docs/CardView.vue"),
      meta: {
        title: "Card - shadcn-vue",
      },
    },
    {
      path: "/docs/components/checkbox",
      name: "checkbox",
      component: () => import("@/docs/CheckboxView.vue"),
      meta: {
        title: "Checkbox - shadcn-vue",
      },
    },
    {
      path: "/docs/components/context-menu",
      name: "context-menu",
      component: () => import("@/docs/ContextMenuView.vue"),
      meta: {
        title: "Context Menu - shadcn-vue",
      },
    },
    {
      path: "/docs/components/data-table",
      name: "data-table-docs",
      component: () => import("@/docs/DataTableView.vue"),
      meta: {
        title: "Data Table - shadcn-vue",
      },
    },
    {
      path: "/docs/components/date-picker",
      name: "date-picker",
      component: () => import("@/docs/DatepickerView.vue"),
      meta: {
        title: "Date Picker - shadcn-vue",
      },
    },
    {
      path: "/docs/components/dropdown-menu",
      name: "dropdown-menu",
      component: () => import("@/docs/DropdownMenuView.vue"),
      meta: {
        title: "Dropdown Menu - shadcn-vue",
      },
    },
    {
      path: "/docs/components/hover-card",
      name: "hover-card",
      component: () => import("@/docs/HoverCardView.vue"),
      meta: {
        title: "Hover Card - shadcn-vue",
      },
    },
    {
      path: "/docs/components/table",
      name: "table",
      component: () => import("@/docs/TableView.vue"),
      meta: {
        title: "Table - shadcn-vue",
      },
    },
    {
      path: "/docs/components/tabs",
      name: "tabs",
      component: () => import("@/docs/TabsView.vue"),
      meta: {
        title: "Tabs - shadcn-vue",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
