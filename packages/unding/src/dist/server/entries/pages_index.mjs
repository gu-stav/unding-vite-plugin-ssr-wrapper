import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
let current_component;
function set_current_component(component) {
  current_component = component;
}
const missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(
      `<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
    );
  }
  return component;
}
let on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css) => css.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { Page: Page2 } = $$props;
  let { pageProps } = $$props;
  if ($$props.Page === void 0 && $$bindings.Page && Page2 !== void 0)
    $$bindings.Page(Page2);
  if ($$props.pageProps === void 0 && $$bindings.pageProps && pageProps !== void 0)
    $$bindings.pageProps(pageProps);
  return `${validate_component(Page2 || missing_component, "svelte:component").$$render($$result, Object.assign({}, pageProps), {}, {})}`;
});
const base = "/";
async function onRenderHtml(pageContext) {
  const app = Layout.render(pageContext);
  const { html, head, css } = app;
  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${base}logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${dangerouslySkipEscape(head)}
        <style>${css.code}</style>
      </head>
      <body>
        <div id="app">
          ${dangerouslySkipEscape(html)}
        </div>
      </body>
    </html>`;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `wat`;
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
