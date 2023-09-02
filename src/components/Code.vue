<script setup lang="ts">
import { getHighlighter, loadTheme, setCDN, renderToHtml } from "shiki-es";
import RadixIconsCopy from "~icons/radix-icons/copy";
import RadixIconsCheck from "~icons/radix-icons/check";
import { ref, computed, onMounted } from "vue";
import { useClipboard } from "@vueuse/core";
import { cn } from "@/lib/utils";

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
  const highlighter = await getHighlighter({
    theme: "css-variables",
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
            ? `<div class="select-none px-6 text-[#ffffff88] text-xs leading-8">${
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
    v-html="html"
    :class="
      cn(
        'w-full rounded-lg [&_pre]:max-h-[450px] [&_pre]:overflow-auto overflow-hidden',
        $attrs.class,
      )
    "
  />
</template>

<style>
:root {
  --shiki-color-text: #eeeeee;
  --shiki-color-background: #ffffff;
  --shiki-token-constant: #ffffff;
  --shiki-token-string: #ffffff88;
  --shiki-token-comment: #880000;
  --shiki-token-keyword: #ffffff88;
  --shiki-token-parameter: #aa0000;
  --shiki-token-function: #ffffff;
  --shiki-token-string-expression: #ffffff88;
  --shiki-token-punctuation: #ffffff;
  --shiki-token-link: #ee0000;
}
</style>
