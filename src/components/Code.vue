<script setup lang="ts">
import { getHighlighter, loadTheme, setCDN, renderToHtml } from "shiki-es";
import RadixIconsCopy from "~icons/radix-icons/copy";
import RadixIconsCheck from "~icons/radix-icons/check";
import { ref, computed, onMounted } from "vue";
import { useClipboard } from "@vueuse/core";

interface CodeProps {
  code: string;
  language: string;
  highlights?: number[];
  showLineNumbers?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<CodeProps>(), {
  showLineNumbers: true,
});

const html = ref<string>("");

const moreThanOneLine = computed(() =>
  props.code ? props.code.trim().split("\n").length > 1 : false,
);

onMounted(async () => {
  setCDN("http://127.0.0.1:3000/src/assets/shiki/");

  const theme = await loadTheme("themes/monochrome.json");
  const highlighter = await getHighlighter({
    theme: theme,
    langs: [
      "typescript",
      "javascript",
      "html",
      "css",
      "typescript",
      "json",
      "vue",
      "bash",
      "markdown",
      "python",
    ],
  });
  const tokens = highlighter.codeToThemedTokens(
    props.code.trim(),
    props.language ?? "typescript",
  );

  html.value = renderToHtml(tokens, {
    bg: "#11151c",
    fg: "#d8dee9",
    elements: {
      pre({ style, children }) {
        return `<pre class="max-h-[650px] overflow-auto py-4 rounded-lg" style="${style}">${children}</pre>`;
      },
      code({ style, children }) {
        return `<code class="font-mono text-sm" style="${style}">${children}</code>`;
      },
      line({ className, index, children }) {
        const shallHighlight = props.highlights?.includes(index + 1) ?? false;
        const lineNumber =
          props.showLineNumbers && moreThanOneLine.value
            ? `<div class="select-none px-6 text-[#aca7a1] text-xs leading-8">${
                index + 1
              }</div>`
            : "";
        return `<div class="${className} w-full inline-flex leading-8 ${
          props.showLineNumbers === false ? "pl-6" : ""
        }"
        ${
          shallHighlight ? 'style="background-color: #242428;"' : ""
        }>${lineNumber}${children}</div>`;
      },
    },
  });
});

const { copy, copied } = useClipboard();

const copyCode = () => {
  copy(props.code);
};
</script>

<template>
  <div
    class="flex items-center bg-transparent relative top-[43.5px] justify-end px-5"
  >
    <button
      @click="copyCode"
      class="flex items-center hover:bg-stone-700 text-gray-400 hover:text-white ease-in-out transition-colors duration-200 rounded-md p-1.5"
    >
      <RadixIconsCopy class="h-3.5 w-3.5" v-if="!copied" />
      <RadixIconsCheck class="h-3.5 w-3.5" v-else />
    </button>
  </div>
  <div
    v-html="html"
    class="w-full rounded-lg [&_pre]:!my-0 [&_pre]:max-h-[450px] [&_pre]:overflow-auto overflow-hidden"
  />
</template>
