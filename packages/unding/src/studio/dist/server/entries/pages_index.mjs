import { c as create_ssr_component, o as onRenderHtml } from "../chunks/chunk-b6c0853f.js";
import "vite-plugin-ssr/server";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `wat
123
456`;
});
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
const index = [
  {
    configName: "onRenderHtml",
    codeFilePath: "@unding/renderer/renderer/onRenderHtml",
    isPlusFile: false,
    codeFileExportValue: onRenderHtml
  },
  {
    configName: "Page",
    codeFilePath: "/pages/index/+Page.svelte",
    isPlusFile: true,
    codeFileExports: import_1
  }
];
export {
  index as default
};
