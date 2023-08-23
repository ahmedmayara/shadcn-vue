const components = [
  {
    id: 1,
    attributes: {
      name: "Accordion",
      slug: "accordion",
      description:
        "A vertically stacked set of interactive headings that each reveal an associated section of content.",
      code:
        '<script setup lang="ts">\n' +
        "import {\n" +
        "  Accordion,\n" +
        "  AccordionItem,\n" +
        "  AccordionTrigger,\n" +
        "  AccordionContent,\n" +
        '} from "@/components/ui/accordion";\n' +
        "</script>\n" +
        "<template>\n" +
        "  <Accordion\n" +
        '      type="single"\n' +
        "      collapsible\n" +
        '      class="w-full"\n' +
        "  >\n" +
        '    <AccordionItem value="item-1">\n' +
        "      <AccordionTrigger> Is it accessible? </AccordionTrigger>\n" +
        "      <AccordionContent>\n" +
        "        Yes. It adheres to the WAI-ARIA design pattern.\n" +
        "      </AccordionContent>\n" +
        "    </AccordionItem>\n" +
        '    <AccordionItem value="item-2">\n' +
        "      <AccordionTrigger> Is it styled? </AccordionTrigger>\n" +
        "      <AccordionContent>\n" +
        "        Yes. It comes with default styles that matches the other\n" +
        "        components' aesthetic.\n" +
        "      </AccordionContent>\n" +
        "    </AccordionItem>\n" +
        '    <AccordionItem value="item-3">\n' +
        "      <AccordionTrigger> Is it animated? </AccordionTrigger>\n" +
        "      <AccordionContent>\n" +
        "        Yes. It's animated by default, but you can disable it \n" +
        "        if you prefer.\n" +
        "      </AccordionContent>\n" +
        "    </AccordionItem>\n" +
        "  </Accordion>\n" +
        "</template>",
      radixUrl: "https://www.radix-vue.com/components/accordion.html",
      apiReference:
        "https://www.radix-vue.com/components/accordion.html#api-reference",
      usageImportCode:
        '<script setup lang="ts">\nimport {\nAccordion,\nAccordionItem,\nAccordionTrigger,\nAccordionContent\n} from "@/components/ui/accordion";\n</script>',
      usageCode:
        '<template>\n <Accordion type="single" collapsible>\n   <AccordionItem value="item-1">\n     <AccordionTrigger> Is it accessible? </AccordionTrigger>\n     <AccordionContent>\n       Yes. It adheres to the WAI-ARIA design pattern.\n     </AccordionContent>\n   </AccordionItem>\n </Accordion>\n</template>',
    },
  },
  {
    id: 2,
    attributes: {
      name: "Alert",
      slug: "alert",
      description:
        "Displays a short, important message in a way that attracts the users attention.",
      code:
        '<script setup lang="ts">\n' +
        'import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";\n' +
        'import { Terminal } from "lucide-vue-next";\n' +
        "</script>\n" +
        "\n" +
        "<template>\n" +
        "  <Alert>\n" +
        '    <Terminal class="h-4 w-4" />\n' +
        "    <AlertTitle> Heads up! </AlertTitle>\n" +
        "    <AlertDescription> \n" +
        "      You can add components to your app using the CLI.\n" +
        "    </AlertDescription>\n" +
        "  </Alert>\n" +
        "</template>",
      usageImportCode:
        '<script setup lang="ts">\n' +
        'import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";\n' +
        'import { Terminal } from "lucide-vue-next";\n' +
        "</script>",
      usageCode:
        "<template>\n" +
        "  <Alert>\n" +
        '    <Terminal class="h-4 w-4" />\n' +
        "    <AlertTitle> Heads up! </AlertTitle>\n" +
        "    <AlertDescription> \n" +
        "      You can add components to your app using the CLI.\n" +
        "    </AlertDescription>\n" +
        "  </Alert>\n" +
        "</template>",
    },
  },
  {
    id: 3,
    attributes: {
      name: "Alert Dialog",
      slug: "alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
      code:
        '<script setup lang="ts">\n' +
        "import {\n" +
        "  AlertDialog,\n" +
        "  AlertDialogTrigger,\n" +
        "  AlertDialogContent,\n" +
        "  AlertDialogHeader,\n" +
        "  AlertDialogTitle,\n" +
        "  AlertDialogDescription,\n" +
        "  AlertDialogFooter,\n" +
        "  AlertDialogCancel,\n" +
        "  AlertDialogAction,\n" +
        '} from "@/components/ui/alert-dialog";\n' +
        'import { Button } from "@/components/ui/button";\n' +
        "</script>\n" +
        "\n" +
        "<template>\n" +
        "  <AlertDialog>\n" +
        "    <AlertDialogTrigger asChild>\n" +
        '      <Button variant="outline"> Open Dialog </Button>\n' +
        "    </AlertDialogTrigger>\n" +
        "    <AlertDialogContent>\n" +
        "      <AlertDialogHeader>\n" +
        "        <AlertDialogTitle> Are you absolutely sure? </AlertDialogTitle>\n" +
        "        <AlertDialogDescription>\n" +
        "          This action cannot be undone. This will permanently \n" +
        "          delete your account and remove your data from our servers.\n" +
        "        </AlertDialogDescription>\n" +
        "      </AlertDialogHeader>\n" +
        "      <AlertDialogFooter>\n" +
        "        <AlertDialogCancel asChild>\n" +
        '          <Button variant="outline"> Cancel </Button>\n' +
        "        </AlertDialogCancel>\n" +
        "        <AlertDialogAction asChild>\n" +
        '          <Button variant="destructive"> Delete </Button>\n' +
        "        </AlertDialogAction>\n" +
        "      </AlertDialogFooter>\n" +
        "    </AlertDialogContent>\n" +
        "  </AlertDialog>\n" +
        "</template>\n",
      radixUrl: "https://www.radix-vue.com/components/alert-dialog.html",
      apiReference:
        "https://www.radix-vue.com/components/alert-dialog.html#api-reference",
      usageImportCode:
        '<script setup lang="ts">\n' +
        "import {\n" +
        "  AlertDialog,\n" +
        "  AlertDialogTrigger,\n" +
        "  AlertDialogContent,\n" +
        "  AlertDialogHeader,\n" +
        "  AlertDialogTitle,\n" +
        "  AlertDialogDescription,\n" +
        "  AlertDialogFooter,\n" +
        "  AlertDialogCancel,\n" +
        "  AlertDialogAction,\n" +
        '} from "@/components/ui/alert-dialog";\n' +
        "</script>",
      usageCode:
        "<template>\n" +
        "  <AlertDialog>\n" +
        "    <AlertDialogTrigger> Open </AlertDialogTrigger>\n" +
        "    <AlertDialogContent>\n" +
        "      <AlertDialogHeader>\n" +
        "        <AlertDialogTitle> Are you absolutely sure? </AlertDialogTitle>\n" +
        "        <AlertDialogDescription>\n" +
        "          This action cannot be undone. This will permanently delete\n" +
        "          your account and remove your data from our servers.\n" +
        "        </AlertDialogDescription>\n" +
        "      </AlertDialogHeader>\n" +
        "      <AlertDialogFooter>\n" +
        "        <AlertDialogCancel> Cancel </AlertDialogCancel>\n" +
        "        <AlertDialogAction> Continue </AlertDialogAction>\n" +
        "      </AlertDialogFooter>\n" +
        "    </AlertDialogContent>\n" +
        "  </AlertDialog>\n" +
        "</template>",
    },
  },
  {
    id: 4,
    attributes: {
      name: "Aspect Ratio",
      slug: "aspect-ratio",
      description: "Displays content within a desired ratio.",
      code:
        '<script setup lang="ts">\n' +
        'import { AspectRatio } from "@/components/ui/aspect-ratio";\n' +
        "</script>\n" +
        "\n" +
        "<template>\n" +
        '  <div class="w-full sm:w-[450px]">\n' +
        '    <AspectRatio :ratio="16 / 9">\n' +
        "      <img\n" +
        '        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"\n' +
        '        alt="Photo by Drew Beamer"\n' +
        '        class="rounded-md object-cover"\n' +
        "      />\n" +
        "    </AspectRatio>\n" +
        "  </div>\n" +
        "</template>\n",
      radixUrl: "https://www.radix-vue.com/components/aspect-ratio.html",
      apiReference:
        "https://www.radix-vue.com/components/aspect-ratio.html#api-reference",
      usageImportCode:
        '<script setup lang="ts">\n' +
        "import { AspectRatio } from '@/components/ui/aspect-ratio';\n" +
        "</script>",
      usageCode:
        "<template>\n" +
        '  <div class="w-[450px]">\n' +
        '   <AspectRatio :ratio="16 / 9">\n' +
        '     <img src="..." alt="Image" class="rounded-md object-cover" />\n' +
        "   </AspectRatio>\n" +
        "  </div>\n" +
        "</template>",
    },
  },
  {
    id: 5,
    attributes: {
      name: "Avatar",
      slug: "avatar",
      description:
        "An image element with a fallback for representing the user.",
      code:
        '<script setup lang="ts">\n' +
        'import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";\n' +
        "</script>\n" +
        "\n" +
        "<template>\n" +
        '  <Avatar size="lg">\n' +
        "    <AvatarImage\n" +
        '      src="https://api.dicebear.com/6.x/lorelei/svg?seed=Salem"\n' +
        "    />\n" +
        "    <AvatarFallback> SL </AvatarFallback>\n" +
        "  </Avatar>\n" +
        "</template>\n",
      radixUrl: "https://www.radix-vue.com/components/avatar.html",
      apiReference:
        "https://www.radix-vue.com/components/avatar.html#api-reference",
      usageImportCode:
        '<script setup lang="ts">\n' +
        'import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";\n' +
        "</script>",
      usageCode:
        "<template>\n" +
        "  <Avatar>\n" +
        "    <AvatarImage\n" +
        '      src="https://api.dicebear.com/6.x/lorelei/svg?seed=Salem"\n' +
        "    />\n" +
        "    <AvatarFallback> SL </AvatarFallback>\n" +
        "  </Avatar>\n" +
        "</template>",
    },
  },
  {
    id: 6,
    attributes: {
      name: "Badge",
      slug: "badge",
      description:
        "Displays a small amount of information in a component that looks like a badge.",
      code:
        '<script setup lang="ts">\n' +
        'import { Badge } from "@/components/ui/badge";\n' +
        "</script>\n" +
        "\n" +
        "<template>\n" +
        "  <Badge> Badge </Badge>\n" +
        "</template>\n",
      usageImportCode:
        '<script setup lang="ts">\n' +
        'import { Badge } from "@/components/ui/badge";\n' +
        "</script>",
      usageCode: "<template>\n" + "  <Badge> Badge </Badge>\n" + "</template>",
    },
    examples: [
      {
        id: 1,
        name: "Primary",
        code:
          '<script setup lang="ts">\n' +
          'import { Badge } from "@/components/ui/badge";\n' +
          "</script>\n" +
          "\n" +
          "<template>\n" +
          '  <Badge variant="primary"> Badge </Badge>\n' +
          "</template>\n",
      },
      {
        id: 2,
        name: "Secondary",
        code:
          '<script setup lang="ts">\n' +
          'import { Badge } from "@/components/ui/badge";\n' +
          "</script>\n" +
          "\n" +
          "<template>\n" +
          '  <Badge variant="secondary"> Badge </Badge>\n' +
          "</template>\n",
      },
      {
        id: 3,
        name: "Outline",
        code:
          '<script setup lang="ts">\n' +
          'import { Badge } from "@/components/ui/badge";\n' +
          "</script>\n" +
          "\n" +
          "<template>\n" +
          '  <Badge variant="outline"> Badge </Badge>\n' +
          "</template>\n",
      },
      {
        id: 4,
        name: "Destructive",
        code:
          '<script setup lang="ts">\n' +
          'import { Badge } from "@/components/ui/badge";\n' +
          "</script>\n" +
          "\n" +
          "<template>\n" +
          '  <Badge variant="destructive"> Badge </Badge>\n' +
          "</template>\n",
      },
    ],
  },
  {
    id: 7,
    attributes: {
      name: "Button",
      slug: "button",
      description:
        "Displays a component that triggers an event or action that looks like a button.",
      code: '<script setup lang="ts">\nimport { Button } from "@/components/ui/button";\n</script>\n\n<template>\n  <Button> Button </Button>\n</template>',
      radixUrl: null,
      apiReference: null,
      usageImportCode:
        '<script setup lang="ts">\nimport { Button } from "@/components/ui/button";\n</script>',
      usageCode: "<template>\n  <Button> Button </Button>\n</template>",
    },
    examples: [
      {
        id: 1,
        name: "Primary",
        code: '<script setup lang="ts">\nimport { Button } from "@/components/ui/button";\n</script>\n\n<template>\n  <Button> Button </Button>\n</template>',
      },
      {
        id: 2,
        name: "Secondary",
        code: '<script setup lang="ts">\nimport { Button } from "@/components/ui/button";\n</script>\n\n<template>\n  <Button variant="secondary"> Button </Button>\n</template>',
      },
      {
        id: 3,
        name: "Destructive",
        code: '<script setup lang="ts">\nimport { Button } from "@/components/ui/button";\n</script>\n\n<template>\n  <Button variant="destructive"> Button </Button>\n</template>',
      },
      {
        id: 4,
        name: "Outline",
        code: '<script setup lang="ts">\nimport { Button } from "@/components/ui/button";\n</script>\n\n<template>\n  <Button variant="outline"> Button </Button>\n</template>',
      },
      {
        id: 5,
        name: "Ghost",
        code: '<script setup lang="ts">\nimport { Button } from "@/components/ui/button";\n</script>\n\n<template>\n  <Button variant="ghost"> Button </Button>\n</template>',
        createdAt: "2023-08-09T13:02:42.928Z",
        updatedAt: "2023-08-09T13:04:19.329Z",
      },
      {
        id: 6,
        name: "Link",
        code: '<script setup lang="ts">\nimport { Button } from "@/components/ui/button";\n</script>\n\n<template>\n  <Button variant="link"> Button </Button>\n</template>',
      },
      {
        id: 7,
        name: "With Icon",
        code:
          '<script setup lang="ts">\n' +
          'import { Button } from "@/components/ui/button";\n' +
          'import { Mail } from "lucide-vue-next";\n' +
          "</script>\n" +
          "\n" +
          "<template>\n" +
          "  <Button>\n" +
          '    <Mail class="w-4 h-4 mr-2" />\n' +
          "    Login with Email\n" +
          "  </Button>\n" +
          "</template>\n",
      },
      {
        id: 8,
        name: "Loading",
        code:
          '<script setup lang="ts">\n' +
          'import { ref } from "vue";\n' +
          'import { Button } from "@/components/ui/button";\n' +
          'import SvgSpinners270Ring from "~icons/svg-spinners/270-ring";\n' +
          "\n" +
          "const isLoading = ref(true);\n" +
          "</script>\n" +
          "\n" +
          "<template>\n" +
          '  <Button :disabled="isLoading">\n' +
          "    <SvgSpinners270Ring\n" +
          '      v-if="isLoading"\n' +
          '      class="w-4 h-4 mr-2"\n' +
          "    />\n" +
          "    Please wait\n" +
          "  </Button>\n" +
          "</template>\n",
      },
      {
        id: 9,
        name: "As Link",
        code:
          '<script setup lang="ts">\n' +
          'import { Button } from "@/components/ui/button";\n' +
          "</script>\n" +
          "\n" +
          "<template>\n" +
          "  <Button\n" +
          '    variant="link"\n' +
          '    as="a"\n' +
          '    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"\n' +
          '    target="_blank"\n' +
          "  >\n" +
          "    Link to somewhere\n" +
          "  </Button>\n" +
          "</template>\n",
      },
    ],
  },
  {
    id: 8,
    attributes: {
      name: "Calendar",
      slug: "calendar",
      description:
        "A component that allows you to display a simple calendar with events.",
      code:
        '<script setup lang="ts">\n' +
        'import { ref } from "vue";\n' +
        'import { Calendar } from "@/components/ui/calendar";\n' +
        'import { startOfToday, addDays } from "date-fns";\n' +
        "\n" +
        "const attributes = ref([\n" +
        "  {\n" +
        '    highlight: "blue",\n' +
        "    popover: {\n" +
        '      label: "Prepare for presentation",\n' +
        "    },\n" +
        "    dates: {\n" +
        "      start: startOfToday().toString(),\n" +
        "      end: addDays(startOfToday(), 5).toString(),\n" +
        "    },\n" +
        "  },\n" +
        "]);\n" +
        "</script>\n" +
        "\n" +
        "<template>\n" +
        '  <div class="p-2 border border-border rounded-xl w-full max-w-sm">\n' +
        '    <Calendar :attributes="attributes" />\n' +
        "  </div>\n" +
        "</template>\n",
      usageImportCode:
        '<script setup lang="ts">\n' +
        'import { Calendar } from "@/components/ui/calendar";\n' +
        "</script>\n",
      usageCode: "<template>\n" + "  <Calendar />\n" + "</template>\n",
    },
  },
  {
    id: 9,
    attributes: {
      name: "Card",
      slug: "card",
      description: "Displays a card with header, content, and footer.",
      code: '<script setup lang="ts">\nimport { ref } from "vue";\nimport {\n  Card,\n  CardContent,\n  CardDescription,\n  CardHeader,\n  CardTitle,\n  CardFooter,\n} from "@/components/ui/card";\nimport { Button } from "@/components/ui/button";\nimport { Label } from "@/components/ui/label";\nimport { Input } from "@/components/ui/input";\nimport {\n  Select,\n  SelectTrigger,\n  SelectContent,\n  SelectGroup,\n  SelectLabel,\n  SelectItem,\n} from "@/components/ui/select";\n\nconst selectedFramework = ref<string | null>(null);\n</script>\n\n<template>\n  <Card class="w-full max-w-sm">\n    <CardHeader>\n      <CardTitle> Create a project </CardTitle>\n      <CardDescription> Deploy your new project in one-click. </CardDescription>\n    </CardHeader>\n    <CardContent>\n      <div class="grid gap-2 pt-4">\n        <Label for="name"> Name </Label>\n        <Input\n          id="name"\n          placeholder="Name of your project"\n        />\n      </div>\n      <div class="grid gap-2 pt-4">\n        <Label for="framework"> Framework </Label>\n        <Select v-model="selectedFramework">\n          <SelectTrigger>\n            {{ selectedFramework || "Select a framework" }}\n          </SelectTrigger>\n          <SelectContent class="w-[335px]">\n            <SelectGroup>\n              <SelectLabel> Frameworks </SelectLabel>\n              <SelectItem value="Vue"> Vue </SelectItem>\n              <SelectItem value="Next.js"> Next.js </SelectItem>\n              <SelectItem value="Svelte"> Svelte </SelectItem>\n            </SelectGroup>\n          </SelectContent>\n        </Select>\n      </div>\n    </CardContent>\n    <CardFooter class="flex justify-between items-center">\n      <Button> variant="outline"> Cancel </Button>\n      <Button> Create </Button>\n    </CardFooter>\n  </Card>\n</template>',
      usageImportCode:
        '<script setup lang="ts">\nimport {\n  Card,\n  CardContent,\n  CardDescription,\n  CardHeader,\n  CardTitle,\n  CardFooter,\n} from "@/components/ui/card";\n</script>',
      usageCode:
        "<template>\n  <Card>\n    <CardHeader>\n      <CardTitle> Card Title </CardTitle>\n      <CardDescription> Card Description </CardDescription>\n    </CardHeader>\n    <CardContent>\n      <p> Card Content </p>\n    </CardContent>\n    <CardFooter>\n      <p> Card Footer </p>\n    </CardFooter>\n  </Card>\n</template>",
    },
    examples: [
      {
        id: 1,
        name: "Basic",
        code:
          '<script setup lang="ts">\n' +
          'import { ref } from "vue";\n' +
          "import {\n" +
          "  Card,\n" +
          "  CardHeader,\n" +
          "  CardTitle,\n" +
          "  CardDescription,\n" +
          "  CardContent,\n" +
          "  CardFooter,\n" +
          '} from "@/components/ui/card";\n' +
          'import { Button } from "@/components/ui/button";\n' +
          'import { Label } from "@/components/ui/label";\n' +
          'import { Switch } from "@/components/ui/switch";\n' +
          "\n" +
          "const emailNotificationsSwitch = ref<boolean>(true);\n" +
          "const pushNotificationsSwitch = ref<boolean>(false);\n" +
          "const smsNotificationsSwitch = ref<boolean>(true);\n" +
          "</script>\n" +
          "\n" +
          "<template>\n" +
          "  <Card>\n" +
          "    <CardHeader>\n" +
          '      <CardTitle class="text-lg"> Notifications Settings </CardTitle>\n' +
          "      <CardDescription> Manage your notification preferences. </CardDescription>\n" +
          "    </CardHeader>\n" +
          "    <CardContent>\n" +
          '      <div class="grid grid-rows-3 gap-y-5">\n' +
          '        <div class="flex justify-between items-center space-x-2">\n' +
          "          <Label\n" +
          '            for="email_notifications"\n' +
          '            class="flex flex-col"\n' +
          "          >\n" +
          "            Email notifications\n" +
          '            <span class="text-muted mt-1 text-sm max-w-[18rem]">\n' +
          "              These notifications can be sent to your email address.\n" +
          "            </span>\n" +
          "          </Label>\n" +
          "          <Switch\n" +
          '            id="email_notifications"\n' +
          '            v-model:open="emailNotificationsSwitch"\n' +
          "          />\n" +
          "        </div>\n" +
          '        <div class="flex justify-between items-center space-x-2">\n' +
          "          <Label\n" +
          '            for="web_notifications"\n' +
          '            class="flex flex-col"\n' +
          "          >\n" +
          "            Web push notifications\n" +
          '            <span class="text-muted mt-1 text-sm max-w-[18rem]">\n' +
          "              These notifications will be sent to your browser or mobile device.\n" +
          "            </span>\n" +
          "          </Label>\n" +
          "          <Switch\n" +
          '            id="web_notifications"\n' +
          '            v-model:open="pushNotificationsSwitch"\n' +
          "          />\n" +
          "        </div>\n" +
          '        <div class="flex justify-between items-center space-x-2">\n' +
          "          <Label\n" +
          '            for="sms_notifications"\n' +
          '            class="flex flex-col"\n' +
          "          >\n" +
          "            SMS notifications\n" +
          '            <span class="text-muted mt-1 text-sm max-w-[18rem]">\n' +
          "              These notifications can be sent to your mobile phone.\n" +
          "            </span>\n" +
          "          </Label>\n" +
          "          <Switch\n" +
          '            id="sms_notifications"\n' +
          '            v-model:open="smsNotificationsSwitch"\n' +
          "          />\n" +
          "        </div>\n" +
          "      </div>\n" +
          "    </CardContent>\n" +
          "    <CardFooter>\n" +
          "      <Button\n" +
          '        variant="outline"\n' +
          '        class="w-full"\n' +
          "      >\n" +
          "        Save changes\n" +
          "      </Button>\n" +
          "    </CardFooter>\n" +
          "  </Card>\n" +
          "</template>\n",
      },
    ],
  },
  {
    id: 10,
    attributes: {
      name: "Checkbox",
      slug: "checkbox",
      description:
        "A control that allows the user to toggle between checked and not checked.",
      code:
        '<script setup lang="ts">\n' +
        'import { ref } from "vue";\n' +
        'import { Checkbox } from "@/components/ui/checkbox";\n' +
        'import { Label } from "@/components/ui/label";\n' +
        "\n" +
        "const terms = ref(false);\n" +
        "</script>\n" +
        "\n" +
        "<template>\n" +
        '  <div class="flex items-center space-x-2">\n' +
        "    <Checkbox\n" +
        '      id="terms"\n' +
        '      v-model="terms"\n' +
        "    />\n" +
        '    <Label for="terms"> Accept terms and conditions </Label>\n' +
        "  </div>\n" +
        "</template>\n",
      usageImportCode:
        '<script setup lang="ts">\n' +
        'import { Checkbox } from "@/components/ui/checkbox";\n' +
        "</script>\n",
      usageCode: "<Checkbox />\n",
    },
    examples: [
      {
        id: 1,
        name: "With Text",
        code:
          '<script setup lang="ts">\n' +
          'import { Checkbox } from "@/components/ui/checkbox";\n' +
          'import { Label } from "@/components/ui/label";\n' +
          "</script>\n" +
          "\n" +
          "<template>\n" +
          '  <div class="space-y-1.5">\n' +
          '    <div class="flex items-center space-x-2">\n' +
          '      <Checkbox id="terms1" />\n' +
          '      <Label for="terms1"> Accept terms and conditions </Label>\n' +
          "    </div>\n" +
          '    <p class="text-sm text-muted">\n' +
          "      You agree to our Terms of Service and Privacy Policy.\n" +
          "    </p>\n" +
          "  </div>\n" +
          "</template>\n",
      },
      {
        id: 2,
        name: "Disabled",
        code:
          '<script setup lang="ts">\n' +
          'import { Checkbox } from "@/components/ui/checkbox";\n' +
          'import { Label } from "@/components/ui/label";\n' +
          "</script>\n" +
          "\n" +
          "<template>\n" +
          '  <div class="flex items-center space-x-2">\n' +
          "    <Checkbox\n" +
          '      id="terms2"\n' +
          "      disabled\n" +
          "    />\n" +
          "    <Label\n" +
          '      for="terms2"\n' +
          '      class="opacity-50"\n' +
          "    >\n" +
          "      Accept terms and conditions\n" +
          "    </Label>\n" +
          "  </div>\n" +
          "</template>\n",
      },
    ],
  },
  {
    id: 11,
    attributes: {
      name: "Collapsible",
      slug: "collapsible",
      description: "An interactive component which expands/collapses a panel.",
      code: null,
    },
  },
  {
    id: 12,
    attributes: {
      name: "Context Menu",
      slug: "context-menu",
      description:
        "Displays a menu located at the pointer, triggered by a right-click or a long-press.",
      code:
        '<script setup lang="ts">\n' +
        'import { ref } from "vue";\n' +
        "import {\n" +
        "  ContextMenu,\n" +
        "  ContextMenuCheckboxItem,\n" +
        "  ContextMenuContent,\n" +
        "  ContextMenuItem,\n" +
        "  ContextMenuLabel,\n" +
        "  ContextMenuRadioGroup,\n" +
        "  ContextMenuRadioItem,\n" +
        "  ContextMenuSeparator,\n" +
        "  ContextMenuShortcut,\n" +
        "  ContextMenuSub,\n" +
        "  ContextMenuSubContent,\n" +
        "  ContextMenuSubTrigger,\n" +
        "  ContextMenuTrigger,\n" +
        '} from "@/components/ui/context-menu";\n' +
        'import { ChevronRight } from "lucide-vue-next";\n' +
        "\n" +
        "const checkboxItemOne = ref(false);\n" +
        "const checkboxItemTwo = ref(true);\n" +
        'const radioItem = ref("colm");\n' +
        "</script>\n" +
        "\n" +
        "<template>\n" +
        "  <ContextMenu>\n" +
        "    <ContextMenuTrigger\n" +
        '      class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-border border-dashed text-sm"\n' +
        "    >\n" +
        "      Right click here\n" +
        "    </ContextMenuTrigger>\n" +
        '    <ContextMenuContent class="w-64">\n' +
        "      <ContextMenuItem>\n" +
        "        Back\n" +
        "        <ContextMenuShortcut> ⌘[ </ContextMenuShortcut>\n" +
        "      </ContextMenuItem>\n" +
        "      <ContextMenuItem disabled>\n" +
        "        Forward\n" +
        "        <ContextMenuShortcut> ⌘] </ContextMenuShortcut>\n" +
        "      </ContextMenuItem>\n" +
        "      <ContextMenuItem>\n" +
        "        Reload\n" +
        "        <ContextMenuShortcut> ⌘R </ContextMenuShortcut>\n" +
        "      </ContextMenuItem>\n" +
        "      <ContextMenuSub>\n" +
        "        <ContextMenuSubTrigger>\n" +
        "          More Tools\n" +
        '          <ChevronRight class="w-4 h-4 ml-auto" />\n' +
        "        </ContextMenuSubTrigger>\n" +
        '        <ContextMenuSubContent class="w-48">\n' +
        "          <ContextMenuItem>\n" +
        "            Save Page As...\n" +
        "            <ContextMenuShortcut> ⇧⌘S </ContextMenuShortcut>\n" +
        "          </ContextMenuItem>\n" +
        "          <ContextMenuItem> Create Shortcut... </ContextMenuItem>\n" +
        "          <ContextMenuItem> Name Window... </ContextMenuItem>\n" +
        "          <ContextMenuSeparator />\n" +
        "          <ContextMenuItem> Developer Tools </ContextMenuItem>\n" +
        "        </ContextMenuSubContent>\n" +
        "      </ContextMenuSub>\n" +
        "      <ContextMenuSeparator />\n" +
        '      <ContextMenuCheckboxItem v-model:checked="checkboxItemOne">\n' +
        "        Show Bookmarks Bar\n" +
        "        <ContextMenuShortcut> ⌘⇧B </ContextMenuShortcut>\n" +
        "      </ContextMenuCheckboxItem>\n" +
        '      <ContextMenuCheckboxItem v-model:checked="checkboxItemTwo">\n' +
        "        Show Full URLs\n" +
        "      </ContextMenuCheckboxItem>\n" +
        "      <ContextMenuSeparator />\n" +
        '      <ContextMenuRadioGroup v-model="radioItem">\n' +
        "        <ContextMenuLabel> People </ContextMenuLabel>\n" +
        "        <ContextMenuSeparator />\n" +
        '        <ContextMenuRadioItem value="pedro"> Pedro Duarte </ContextMenuRadioItem>\n' +
        '        <ContextMenuRadioItem value="colm"> Colm Tuite </ContextMenuRadioItem>\n' +
        "      </ContextMenuRadioGroup>\n" +
        "    </ContextMenuContent>\n" +
        "  </ContextMenu>\n" +
        "</template>\n",
      usageImportCode:
        '<script setup lang="ts">\n' +
        "import {\n" +
        "  ContextMenu,\n" +
        "  ContextMenuContent,\n" +
        "  ContextMenuItem,\n" +
        "  ContextMenuTrigger,\n" +
        '} from "@/components/ui/context-menu";\n' +
        "</script>\n",
      usageCode:
        "<template>\n" +
        " <ContextMenu>\n" +
        "   <ContextMenuTrigger> Right click </ContextMenuTrigger>\n" +
        "   <ContextMenuContent>\n" +
        "     <ContextMenuItem> Profile </ContextMenuItem>\n" +
        "     <ContextMenuItem> Billing </ContextMenuItem>\n" +
        "     <ContextMenuItem> Team </ContextMenuItem>\n" +
        "     <ContextMenuItem> Subscription </ContextMenuItem>\n" +
        "   </ContextMenuContent>\n" +
        " </ContextMenu>\n" +
        "</template>\n",
      radixUrl: "https://www.radix-vue.com/components/context-menu.html",
      apiReference:
        "https://www.radix-vue.com/components/context-menu.html#api-reference",
    },
  },
  {
    id: 13,
    attributes: {
      name: "Data Table",
      slug: "data-table",
      description:
        "A supercharged version of the HTML table element that provides tools for searching, sorting, pagination and more.",
      code: null,
    },
  },
  {
    id: 14,
    attributes: {
      name: "Date Picker",
      slug: "date-picker",
      description: "A component that allows you to select a date.",
      code:
        '<script setup lang="ts">\n' +
        'import { computed, ref } from "vue";\n' +
        'import { format } from "date-fns";\n' +
        'import { DatePicker } from "@/components/ui/date-picker";\n' +
        'import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";\n' +
        'import { Button } from "@/components/ui/button";\n' +
        'import RadixIconsCalendar from "~icons/radix-icons/calendar";\n' +
        "\n" +
        "const date = ref(new Date());\n" +
        "\n" +
        "const formattedDate = computed(() => {\n" +
        '  return format(date.value, "MMM dd, yyyy");\n' +
        "});\n" +
        "</script>\n" +
        "\n" +
        "<template>\n" +
        "  <Popover>\n" +
        '    <PopoverTrigger class="w-72">\n' +
        "      <Button\n" +
        '        variant="outline"\n' +
        '        class="w-full h-9 text-left flex justify-start items-center space-x-2"\n' +
        "      >\n" +
        "        <span\n" +
        '          class="text-muted"\n' +
        '          v-if="!date"\n' +
        "        >\n" +
        "          Pick a date\n" +
        "        </span>\n" +
        '        <RadixIconsCalendar class="w-4 h-4 opacity-60" />\n' +
        "\n" +
        "        <span\n" +
        '          class="text-foreground"\n' +
        '          v-if="date"\n' +
        "        >\n" +
        "          {{ formattedDate }}\n" +
        "        </span>\n" +
        "      </Button>\n" +
        "    </PopoverTrigger>\n" +
        '    <PopoverContent class="w-auto p-2">\n' +
        '      <DatePicker v-model="date" />\n' +
        "    </PopoverContent>\n" +
        "  </Popover>\n" +
        "</template>\n",
      usageImportCode:
        '<script setup lang="ts">\n' +
        'import { ref } from "vue";\n' +
        'import { DatePicker } from "@/components/ui/date-picker";\n' +
        "\n" +
        "const date = ref(new Date());\n" +
        "</script>\n",
      usageCode:
        "<template>\n" + '  <DatePicker v-model="date" />\n' + "</template>\n",
    },
  },
  {
    id: 15,
    attributes: {
      name: "Dialog",
      slug: "dialog",
      description:
        "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
      code: null,
    },
  },
  {
    id: 16,
    attributes: {
      name: "Dropdown Menu",
      slug: "dropdown-menu",
      description:
        "Displays a menu to the user such as a set of actions or functions triggered by a button.",
      code:
        '<script setup lang="ts">\n' +
        "import {\n" +
        "  DropdownMenu,\n" +
        "  DropdownMenuContent,\n" +
        "  DropdownMenuGroup,\n" +
        "  DropdownMenuItem,\n" +
        "  DropdownMenuLabel,\n" +
        "  DropdownMenuSeparator,\n" +
        "  DropdownMenuShortcut,\n" +
        "  DropdownMenuSub,\n" +
        "  DropdownMenuSubContent,\n" +
        "  DropdownMenuSubTrigger,\n" +
        "  DropdownMenuTrigger,\n" +
        '} from "@/components/ui/dropdown-menu";\n' +
        'import { Button } from "@/components/ui/button";\n' +
        "import {\n" +
        "  ChevronRight,\n" +
        "  ChevronsUpDown,\n" +
        "  User,\n" +
        "  Users,\n" +
        "  CreditCard,\n" +
        "  Settings,\n" +
        "  Keyboard,\n" +
        "  UserPlus,\n" +
        "  Plus,\n" +
        "  Github,\n" +
        "  Mail,\n" +
        "  MessageSquare,\n" +
        "  PlusCircle,\n" +
        "  LifeBuoy,\n" +
        "  Cloud,\n" +
        "  LogOut,\n" +
        "  X,\n" +
        '} from "lucide-vue-next";\n' +
        "</script>\n" +
        "\n" +
        "<template>\n" +
        "  <DropdownMenu>\n" +
        "    <DropdownMenuTrigger asChild>\n" +
        '      <Button variant="outline"> Open </Button>\n' +
        "    </DropdownMenuTrigger>\n" +
        '    <DropdownMenuContent class="w-56">\n' +
        "      <DropdownMenuLabel> My Account </DropdownMenuLabel>\n" +
        "      <DropdownMenuSeparator />\n" +
        "      <DropdownMenuGroup>\n" +
        "        <DropdownMenuItem>\n" +
        '          <User class="w-4 h-4 mr-2" />\n' +
        "          Profile\n" +
        "          <DropdownMenuShortcut> ⇧⌘P </DropdownMenuShortcut>\n" +
        "        </DropdownMenuItem>\n" +
        "        <DropdownMenuItem>\n" +
        '          <CreditCard class="w-4 h-4 mr-2" />\n' +
        "          Billing\n" +
        "          <DropdownMenuShortcut> ⌘B </DropdownMenuShortcut>\n" +
        "        </DropdownMenuItem>\n" +
        "        <DropdownMenuItem>\n" +
        '          <Settings class="w-4 h-4 mr-2" />\n' +
        "          Settings\n" +
        "          <DropdownMenuShortcut> ⌘S </DropdownMenuShortcut>\n" +
        "        </DropdownMenuItem>\n" +
        "        <DropdownMenuItem>\n" +
        '          <Keyboard class="w-4 h-4 mr-2" />\n' +
        "          Shortcuts\n" +
        "          <DropdownMenuShortcut> ⇧⌘K </DropdownMenuShortcut>\n" +
        "        </DropdownMenuItem>\n" +
        "      </DropdownMenuGroup>\n" +
        "      <DropdownMenuSeparator />\n" +
        "      <DropdownMenuGroup>\n" +
        "        <DropdownMenuItem>\n" +
        '          <Users class="w-4 h-4 mr-2" />\n' +
        "          Team\n" +
        "          <DropdownMenuShortcut> ⌘T </DropdownMenuShortcut>\n" +
        "        </DropdownMenuItem>\n" +
        "        <DropdownMenuSub>\n" +
        "          <DropdownMenuSubTrigger>\n" +
        '            <UserPlus class="w-4 h-4 mr-2" />\n' +
        "            Invite users\n" +
        '            <ChevronRight class="w-4 h-4 ml-auto" />\n' +
        "          </DropdownMenuSubTrigger>\n" +
        "          <DropdownMenuSubContent>\n" +
        "            <DropdownMenuGroup>\n" +
        "              <DropdownMenuItem>\n" +
        '                <Mail class="w-4 h-4 mr-2" />\n' +
        "                Mail\n" +
        "              </DropdownMenuItem>\n" +
        "              <DropdownMenuItem>\n" +
        '                <MessageSquare class="w-4 h-4 mr-2" />\n' +
        "                Message\n" +
        "              </DropdownMenuItem>\n" +
        "            </DropdownMenuGroup>\n" +
        "            <DropdownMenuSeparator />\n" +
        "            <DropdownMenuItem>\n" +
        '              <PlusCircle class="w-4 h-4 mr-2" />\n' +
        "              More...\n" +
        "            </DropdownMenuItem>\n" +
        "          </DropdownMenuSubContent>\n" +
        "        </DropdownMenuSub>\n" +
        "        <DropdownMenuItem>\n" +
        '          <Plus class="w-4 h-4 mr-2" />\n' +
        "          New Team\n" +
        "          <DropdownMenuShortcut> ⌘+T </DropdownMenuShortcut>\n" +
        "        </DropdownMenuItem>\n" +
        "      </DropdownMenuGroup>\n" +
        "      <DropdownMenuSeparator />\n" +
        "      <DropdownMenuGroup>\n" +
        "        <DropdownMenuItem>\n" +
        '          <Github class="w-4 h-4 mr-2" />\n' +
        "          GitHub\n" +
        "        </DropdownMenuItem>\n" +
        "        <DropdownMenuItem>\n" +
        '          <LifeBuoy class="w-4 h-4 mr-2" />\n' +
        "          Support\n" +
        "        </DropdownMenuItem>\n" +
        "        <DropdownMenuItem disabled>\n" +
        '          <Cloud class="w-4 h-4 mr-2" />\n' +
        "          API\n" +
        "        </DropdownMenuItem>\n" +
        "      </DropdownMenuGroup>\n" +
        "      <DropdownMenuSeparator />\n" +
        "      <DropdownMenuItem>\n" +
        '        <LogOut class="w-4 h-4 mr-2" />\n' +
        "        Log out\n" +
        "        <DropdownMenuShortcut> ⇧⌘Q </DropdownMenuShortcut>\n" +
        "      </DropdownMenuItem>\n" +
        "    </DropdownMenuContent>\n" +
        "  </DropdownMenu>\n" +
        "</template>\n",
      usageImportCode:
        '<script setup lang="ts">\n' +
        "import {\n" +
        "  DropdownMenu,\n" +
        "  DropdownMenuContent,\n" +
        "  DropdownMenuItem,\n" +
        "  DropdownMenuLabel,\n" +
        "  DropdownMenuSeparator,\n" +
        "  DropdownMenuTrigger,\n" +
        '} from "@/components/ui/dropdown-menu";\n' +
        "</script>\n",
      usageCode:
        "<template>\n" +
        "  <DropdownMenu>\n" +
        "    <DropdownMenuTrigger> Open </DropdownMenuTrigger>\n" +
        "    <DropdownMenuContent>\n" +
        "      <DropdownMenuLabel> My Account </DropdownMenuLabel>\n" +
        "      <DropdownMenuSeparator />\n" +
        "      <DropdownMenuItem> Profile </DropdownMenuItem>\n" +
        "      <DropdownMenuItem> Billing </DropdownMenuItem>\n" +
        "      <DropdownMenuItem> Team </DropdownMenuItem>\n" +
        "      <DropdownMenuItem> Subscription </DropdownMenuItem>\n" +
        "    </DropdownMenuContent>\n" +
        "  </DropdownMenu>\n" +
        "</template>",
      radixUrl: "https://www.radix-vue.com/components/dropdown-menu.html",
      apiReference:
        "https://www.radix-vue.com/components/dropdown-menu.html#api-reference",
    },
    examples: [
      {
        id: 1,
        name: "Checkboxes",
        code:
          '<script setup lang="ts">\n' +
          'import { ref } from "vue";\n' +
          "import {\n" +
          "  DropdownMenu,\n" +
          "  DropdownMenuCheckboxItem,\n" +
          "  DropdownMenuContent,\n" +
          "  DropdownMenuGroup,\n" +
          "  DropdownMenuLabel,\n" +
          "  DropdownMenuSeparator,\n" +
          "  DropdownMenuTrigger,\n" +
          '} from "@/components/ui/dropdown-menu";\n' +
          'import { Button } from "@/components/ui/button";\n' +
          "\n" +
          "const showStatusBar = ref(true);\n" +
          "const showActivityBar = ref(false);\n" +
          "const showSideBar = ref(false);\n" +
          "</script>\n" +
          "\n" +
          "<template>\n" +
          "  <DropdownMenu>\n" +
          "    <DropdownMenuTrigger asChild>\n" +
          '      <Button variant="outline"> Open </Button>\n' +
          "    </DropdownMenuTrigger>\n" +
          "    <DropdownMenuContent\n" +
          '      class="w-64"\n' +
          '      align="center"\n' +
          "    >\n" +
          "      <DropdownMenuLabel> Appearance </DropdownMenuLabel>\n" +
          "      <DropdownMenuSeparator />\n" +
          "      <DropdownMenuGroup>\n" +
          '        <DropdownMenuCheckboxItem v-model:checked="showStatusBar">\n' +
          "          Status Bar\n" +
          "        </DropdownMenuCheckboxItem>\n" +
          "        <DropdownMenuCheckboxItem\n" +
          '          v-model:checked="showActivityBar"\n' +
          "          disabled\n" +
          "        >\n" +
          "          Activity Bar\n" +
          "        </DropdownMenuCheckboxItem>\n" +
          '        <DropdownMenuCheckboxItem v-model:checked="showSideBar">\n' +
          "          Side Bar\n" +
          "        </DropdownMenuCheckboxItem>\n" +
          "      </DropdownMenuGroup>\n" +
          "    </DropdownMenuContent>\n" +
          "  </DropdownMenu>\n" +
          "</template>\n",
      },
      {
        id: 2,
        name: "Radio Group",
        code:
          '<script setup lang="ts">\n' +
          'import { ref } from "vue";\n' +
          "import {\n" +
          "  DropdownMenu,\n" +
          "  DropdownMenuContent,\n" +
          "  DropdownMenuGroup,\n" +
          "  DropdownMenuLabel,\n" +
          "  DropdownMenuRadioGroup,\n" +
          "  DropdownMenuRadioItem,\n" +
          "  DropdownMenuSeparator,\n" +
          "  DropdownMenuTrigger,\n" +
          '} from "@/components/ui/dropdown-menu";\n' +
          'import { Button } from "@/components/ui/button";\n' +
          "\n" +
          'const position = ref("bottom");\n' +
          "</script>\n" +
          "\n" +
          "<template>\n" +
          "  <DropdownMenu>\n" +
          "    <DropdownMenuTrigger asChild>\n" +
          '      <Button variant="outline"> Open </Button>\n' +
          "    </DropdownMenuTrigger>\n" +
          "    <DropdownMenuContent\n" +
          '      class="w-64"\n' +
          '      align="center"\n' +
          "    >\n" +
          "      <DropdownMenuLabel> Panel Position </DropdownMenuLabel>\n" +
          "      <DropdownMenuSeparator />\n" +
          "      <DropdownMenuGroup>\n" +
          '        <DropdownMenuRadioGroup v-model="position">\n' +
          '          <DropdownMenuRadioItem value="top"> Top </DropdownMenuRadioItem>\n' +
          '          <DropdownMenuRadioItem value="bottom"> Bottom </DropdownMenuRadioItem>\n' +
          '          <DropdownMenuRadioItem value="right"> Right </DropdownMenuRadioItem>\n' +
          "        </DropdownMenuRadioGroup>\n" +
          "      </DropdownMenuGroup>\n" +
          "    </DropdownMenuContent>\n" +
          "  </DropdownMenu>\n" +
          "</template>\n",
      },
    ],
  },
  {
    id: 17,
    attributes: {
      name: "Hover Card",
      slug: "hover-card",
      description:
        "For sighted users to preview content available behind a link.",
      code:
        '<script setup lang="ts">\n' +
        "import {\n" +
        "  HoverCard,\n" +
        "  HoverCardTrigger,\n" +
        "  HoverCardContent,\n" +
        '} from "@/components/ui/hover-card";\n' +
        'import { Button } from "@/components/ui/button";\n' +
        'import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";\n' +
        'import { CalendarDays } from "lucide-vue-next";\n' +
        "</script>\n" +
        "\n" +
        "<template>\n" +
        "  <HoverCard>\n" +
        "    <HoverCardTrigger asChild>\n" +
        '      <Button variant="link"> @vuejs </Button>\n' +
        "    </HoverCardTrigger>\n" +
        '    <HoverCardContent class="w-80">\n' +
        '      <div class="flex justify-between space-x-4">\n' +
        '        <Avatar size="sm">\n' +
        "          <AvatarImage\n" +
        '            src="../assets/logo.png"\n' +
        "          />\n" +
        "          <AvatarFallback> VJ </AvatarFallback>\n" +
        "        </Avatar>\n" +
        '        <div class="space-y-1 text-sm">\n' +
        '          <h4 class="font-semibold">@vuejs</h4>\n' +
        '            <p class="text-muted">\n' +
        "              The Progressive JavaScript Framework.\n" +
        "            </p>\n" +
        '            <div class="flex items-center pt-1">\n' +
        '              <CalendarDays class="w-4 h-4 mr-2 opacity-70" />\n' +
        '              <span class="text-muted text-xs">\n' +
        "                Joined January 2014\n" +
        "              </span>\n" +
        "            </div>\n" +
        "         </div>\n" +
        "       </div>\n" +
        "     </HoverCardContent>\n" +
        "  </HoverCard>\n" +
        "</template>",
      usageImportCode:
        "<script setup>\n" +
        "import {\n" +
        "  HoverCard,\n" +
        "  HoverCardTrigger,\n" +
        "  HoverCardContent,\n" +
        '} from "@/components/ui/hover-card";\n' +
        "</script>",
      usageCode:
        "<template>\n" +
        "  <HoverCard>\n" +
        "    <HoverCardTrigger> Hover </HoverCardTrigger>\n" +
        "    <HoverCardContent> Content </HoverCardContent>\n" +
        "  </HoverCard>\n" +
        "</template>",
      radixUrl: "https://www.radix-vue.com/components/hover-card.html",
      apiReference:
        "https://www.radix-vue.com/components/hover-card.html#api-reference",
    },
  },
  {
    id: 18,
    attributes: {
      name: "Input",
      slug: "input",
      description: "Displays a one-line text input field.",
      code: null,
    },
  },
  {
    id: 19,
    attributes: {
      name: "Label",
      slug: "label",
      description: "Renders an accessible label associated with controls.",
      code: null,
    },
  },
  {
    id: 20,
    attributes: {
      name: "Menubar",
      slug: "menubar",
      description:
        "A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.",
      code: null,
    },
  },
  {
    id: 21,
    attributes: {
      name: "Navigation Menu",
      slug: "navigation-menu",
      description: "A collection of links for navigating websites.",
      code: null,
    },
  },
  {
    id: 22,
    attributes: {
      name: "Popover",
      slug: "popover",
      description: "Displays rich content in a portal, triggered by a button.",
      code: null,
    },
  },
  {
    id: 23,
    attributes: {
      name: "Progress",
      slug: "progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      code: null,
    },
  },
  {
    id: 24,
    attributes: {
      name: "Radio Group",
      slug: "radio-group",
      description:
        "A set of checkable buttons known as radio buttons where no more than one of the buttons can be checked at a time.",
      code: null,
    },
  },
  {
    id: 25,
    attributes: {
      name: "Scroll Area",
      slug: "scroll-area",
      description:
        "Augments native scroll functionality for custom, cross-browser styling.",
      code: null,
    },
  },
  {
    id: 26,
    attributes: {
      name: "Select",
      slug: "select",
      description:
        "Displays a list of options for the user to pick from triggered by a button.",
      code: null,
    },
  },
  {
    id: 27,
    attributes: {
      name: "Separator",
      slug: "separator",
      description: "Visually or semantically separates content.",
      code: null,
    },
  },
  {
    id: 28,
    attributes: {
      name: "Skeleton",
      slug: "skeleton",
      description: "Used to show a placeholder while content is loading.",
      code: null,
    },
  },
  {
    id: 29,
    attributes: {
      name: "Sheet",
      slug: "sheet",
      description:
        "A component that allows you to display a panel on the side of the screen.",
      code: null,
    },
  },
  {
    id: 30,
    attributes: {
      name: "Slider",
      slug: "slider",
      description:
        "An input where the user selects a value from within a given range.",
      code: null,
    },
  },
  {
    id: 31,
    attributes: {
      name: "Switch",
      slug: "switch",
      description:
        "A control that allows the user to toggle between checked and not checked.",
      code: null,
    },
  },
  {
    id: 32,
    attributes: {
      name: "Table",
      slug: "table",
      description: "A responsive table component.",
      code:
        '<script setup lang="ts">\n' +
        "import {\n" +
        "  Table,\n" +
        "  TableBody,\n" +
        "  TableCaption,\n" +
        "  TableCell,\n" +
        "  TableHead,\n" +
        "  TableHeader,\n" +
        "  TableRow,\n" +
        '} from "@/components/ui/table";\n' +
        "\n" +
        "const invoices = [\n" +
        "  {\n" +
        '    invoice: "INV001",\n' +
        '    paymentStatus: "Paid",\n' +
        '    totalAmount: "$250.00",\n' +
        '    paymentMethod: "Credit Card",\n' +
        "  },\n" +
        "  {\n" +
        '    invoice: "INV002",\n' +
        '    paymentStatus: "Pending",\n' +
        '    totalAmount: "$150.00",\n' +
        '    paymentMethod: "PayPal",\n' +
        "  },\n" +
        "  {\n" +
        '    invoice: "INV003",\n' +
        '    paymentStatus: "Unpaid",\n' +
        '    totalAmount: "$350.00",\n' +
        '    paymentMethod: "Bank Transfer",\n' +
        "  },\n" +
        "  {\n" +
        '    invoice: "INV004",\n' +
        '    paymentStatus: "Paid",\n' +
        '    totalAmount: "$450.00",\n' +
        '    paymentMethod: "Credit Card",\n' +
        "  },\n" +
        "  {\n" +
        '    invoice: "INV005",\n' +
        '    paymentStatus: "Paid",\n' +
        '    totalAmount: "$550.00",\n' +
        '    paymentMethod: "PayPal",\n' +
        "  },\n" +
        "  {\n" +
        '    invoice: "INV006",\n' +
        '    paymentStatus: "Pending",\n' +
        '    totalAmount: "$200.00",\n' +
        '    paymentMethod: "Bank Transfer",\n' +
        "  },\n" +
        "  {\n" +
        '    invoice: "INV007",\n' +
        '    paymentStatus: "Unpaid",\n' +
        '    totalAmount: "$300.00",\n' +
        '    paymentMethod: "Credit Card",\n' +
        "  },\n" +
        "];\n" +
        "</script>\n" +
        "\n" +
        "<template>\n" +
        "  <Table>\n" +
        "    <TableCaption> A list of your recent invoices. </TableCaption>\n" +
        "    <TableHeader>\n" +
        "      <TableRow>\n" +
        '        <TableHead class="w-[100px]"> Invoice </TableHead>\n' +
        "        <TableHead> Status </TableHead>\n" +
        "        <TableHead> Method </TableHead>\n" +
        '        <TableHead class="text-right"> Amount </TableHead>\n' +
        "      </TableRow>\n" +
        "    </TableHeader>\n" +
        "    <TableBody>\n" +
        "      <TableRow\n" +
        '        v-for="(invoice, index) in invoices"\n' +
        '        :key="index"\n' +
        "      >\n" +
        '        <TableCell class="font-medium"> {{ invoice.invoice }} </TableCell>\n' +
        "        <TableCell> {{ invoice.paymentStatus }} </TableCell>\n" +
        "        <TableCell> {{ invoice.paymentMethod }} </TableCell>\n" +
        '        <TableCell class="text-right">\n' +
        "          {{ invoice.totalAmount }}\n" +
        "        </TableCell>\n" +
        "      </TableRow>\n" +
        "    </TableBody>\n" +
        "  </Table>\n" +
        "</template>\n",
      usageImportCode:
        '<script setup lang="ts">\n' +
        "import {\n" +
        "  Table,\n" +
        "  TableBody,\n" +
        "  TableCaption,\n" +
        "  TableCell,\n" +
        "  TableHead,\n" +
        "  TableHeader,\n" +
        "  TableRow,\n" +
        '} from "@/components/ui/table";\n' +
        "</script>",
      usageCode:
        "<template>\n" +
        "  <Table>\n" +
        "    <TableCaption> A list of your recent invoices. </TableCaption>\n" +
        "    <TableHeader>\n" +
        "      <TableRow>\n" +
        '        <TableHead class="w-[100px]"> Invoice </TableHead>\n' +
        "        <TableHead> Status </TableHead>\n" +
        "        <TableHead> Method </TableHead>\n" +
        '        <TableHead class="text-right"> Amount </TableHead>\n' +
        "      </TableRow>\n" +
        "    </TableHeader>\n" +
        "    <TableBody>\n" +
        "      <TableRow>\n" +
        '        <TableCell class="font-medium"> INV001 </TableCell>\n' +
        "        <TableCell> Paid </TableCell>\n" +
        "        <TableCell> Credit Card </TableCell>\n" +
        '        <TableCell class="text-right"> $250.00 </TableCell>\n' +
        "      </TableRow>\n" +
        "    </TableBody>\n" +
        "  </Table>\n" +
        "</template>",
    },
  },
  {
    id: 33,
    attributes: {
      name: "Tabs",
      slug: "tabs",
      description:
        "A set of layered sections of content known as tab panels that are displayed one at a time.",
      code:
        '<script setup lang="ts">\n' +
        'import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";\n' +
        "import {\n" +
        "  Card,\n" +
        "  CardHeader,\n" +
        "  CardTitle,\n" +
        "  CardDescription,\n" +
        "  CardContent,\n" +
        "  CardFooter,\n" +
        '} from "@/components/ui/card";\n' +
        'import { Button } from "@/components/ui/button";\n' +
        'import { Label } from "@/components/ui/label";\n' +
        'import { Input } from "@/components/ui/input";\n' +
        "</script>\n" +
        "\n" +
        "<template>\n" +
        "  <Tabs\n" +
        '    default-value="account"\n' +
        '    class="w-[400px]"\n' +
        "  >\n" +
        '    <TabsList class="grid w-full grid-cols-2">\n' +
        '      <TabsTrigger value="account"> Account </TabsTrigger>\n' +
        '      <TabsTrigger value="password"> Password </TabsTrigger>\n' +
        "    </TabsList>\n" +
        '    <TabsContent value="account">\n' +
        "      <Card>\n" +
        "        <CardHeader>\n" +
        "          <CardTitle> Account </CardTitle>\n" +
        "          <CardDescription>\n" +
        "            Make changes to your account here. Click save when you're done.\n" +
        "          </CardDescription>\n" +
        "        </CardHeader>\n" +
        '        <CardContent class="space-y-4">\n' +
        '          <div class="space-y-2">\n' +
        '            <Label for="name"> Name </Label>\n' +
        "            <Input\n" +
        '              id="name"\n' +
        '              value="Pedro Duarte"\n' +
        "            />\n" +
        "          </div>\n" +
        '          <div class="space-y-2">\n' +
        '            <Label for="username"> Username </Label>\n' +
        "            <Input\n" +
        '              id="username"\n' +
        '              value="@peduarte"\n' +
        "            />\n" +
        "          </div>\n" +
        "        </CardContent>\n" +
        "        <CardFooter>\n" +
        "          <Button> Save changes </Button>\n" +
        "        </CardFooter>\n" +
        "      </Card>\n" +
        "    </TabsContent>\n" +
        '    <TabsContent value="password">\n' +
        "      <Card>\n" +
        "        <CardHeader>\n" +
        "          <CardTitle> Password </CardTitle>\n" +
        "          <CardDescription>\n" +
        "            Change your password here. After saving, you'll be logged out.\n" +
        "          </CardDescription>\n" +
        "        </CardHeader>\n" +
        '        <CardContent class="space-y-4">\n' +
        '          <div class="space-y-2">\n' +
        '            <Label for="current-password"> Current password </Label>\n' +
        "            <Input\n" +
        '              id="current-password"\n' +
        '              type="password"\n' +
        "            />\n" +
        "          </div>\n" +
        '          <div class="space-y-2">\n' +
        '            <Label for="new-password"> New password </Label>\n' +
        "            <Input\n" +
        '              id="new-password"\n' +
        '              type="password"\n' +
        "            />\n" +
        "          </div>\n" +
        "        </CardContent>\n" +
        "        <CardFooter>\n" +
        "          <Button> Save password </Button>\n" +
        "        </CardFooter>\n" +
        "      </Card>\n" +
        "    </TabsContent>\n" +
        "  </Tabs>\n" +
        "</template>\n",
      usageImportCode:
        '<script setup lang="ts">\n' +
        'import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";\n' +
        "</script>",
      usageCode:
        "<template>\n" +
        '  <Tabs default-value="account">\n' +
        "    <TabsList>\n" +
        '      <TabsTrigger value="account"> Account </TabsTrigger>\n' +
        '      <TabsTrigger value="password"> Password </TabsTrigger>\n' +
        "    </TabsList>\n" +
        '    <TabsContent value="account">\n' +
        "      Account content\n" +
        "    </TabsContent>\n" +
        '    <TabsContent value="password">\n' +
        "      Password content\n" +
        "    </TabsContent>\n" +
        "  </Tabs>\n" +
        "</template>",
    },
  },
  {
    id: 34,
    attributes: {
      name: "Textarea",
      slug: "textarea",
      description: "Displays a multi-line text input field.",
      code: null,
    },
  },
  {
    id: 35,
    attributes: {
      name: "Toast",
      slug: "toast",
      description: "Displays a short message, in response to a user action.",
      code: null,
    },
  },
  {
    id: 36,
    attributes: {
      name: "Toggle",
      slug: "toggle",
      description: "A two-state button that can be either on or off.",
      code: null,
    },
  },
  {
    id: 37,
    attributes: {
      name: "Tooltip",
      slug: "tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
      code: null,
    },
  },
];

export default components;
