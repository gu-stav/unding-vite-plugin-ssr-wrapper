import { c as create_ssr_component, o as onRenderHtml } from "../chunks/chunk-b6c0853f.js";
import "vite-plugin-ssr/server";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-1xi36hy">Studio</h1>

wat`;
});
const import_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
const studio = [
  {
    configName: "onRenderHtml",
    codeFilePath: "@unding/renderer/renderer/onRenderHtml",
    isPlusFile: false,
    codeFileExportValue: onRenderHtml
  },
  {
    configName: "Page",
    codeFilePath: "/pages/studio/+Page.svelte",
    isPlusFile: true,
    codeFileExports: import_1
  }
];
export {
  studio as default
};
