const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;
const pageConfigs = [
  {
    pageId: "/pages/index",
    isErrorPage: false,
    routeFilesystem: "/",
    routeFilesystemDefinedBy: "/pages/index/",
    loadCodeFiles: async () => (await import("./entries/pages_index.mjs")).default,
    configElements: {
      ["onRenderHtml"]: {
        configDefinedAt: "@unding/renderer/renderer/onRenderHtml",
        configDefinedByFile: "@unding/renderer/renderer/onRenderHtml",
        codeFilePath: "@unding/renderer/renderer/onRenderHtml",
        codeFileExport: "default",
        plusConfigFilePath: "/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper/packages/renderer/src/renderer/+config.js",
        configEnv: "server-only"
      },
      ["onRenderClient"]: {
        configDefinedAt: "@unding/renderer/renderer/onRenderClient",
        configDefinedByFile: "@unding/renderer/renderer/onRenderClient",
        codeFilePath: "@unding/renderer/renderer/onRenderClient",
        codeFileExport: "default",
        plusConfigFilePath: "/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper/packages/renderer/src/renderer/+config.js",
        configEnv: "client-only"
      },
      ["Page"]: {
        configDefinedAt: "/pages/index/+Page.svelte",
        configDefinedByFile: "/pages/index/+Page.svelte",
        codeFilePath: "/pages/index/+Page.svelte",
        codeFileExport: "default",
        plusConfigFilePath: null,
        configEnv: "server-and-client"
      },
      ["passToClient"]: {
        configDefinedAt: "\x1B[1m/pages/+config.h.js\x1B[22m > \x1B[36mexport default { passToClient }\x1B[39m",
        configDefinedByFile: "/pages/+config.h.js",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "/pages/+config.h.js",
        configEnv: "server-only",
        configValueSerialized: '["pageProps"]'
      },
      ["clientRouting"]: {
        configDefinedAt: "\x1B[1m/pages/+config.h.js\x1B[22m > \x1B[36mexport default { clientRouting }\x1B[39m",
        configDefinedByFile: "/pages/+config.h.js",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "/pages/+config.h.js",
        configEnv: "server-and-client",
        configValueSerialized: "true"
      },
      ["hydrationCanBeAborted"]: {
        configDefinedAt: "\x1B[1m/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper/packages/renderer/src/renderer/+config.js\x1B[22m > \x1B[36mexport default { hydrationCanBeAborted }\x1B[39m",
        configDefinedByFile: "/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper/packages/renderer/src/renderer/+config.js",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper/packages/renderer/src/renderer/+config.js",
        configEnv: "client-only",
        configValueSerialized: "true"
      },
      ["isClientSideRenderable"]: {
        configDefinedAt: "TODO",
        configDefinedByFile: "TODO",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "TODO",
        configEnv: "server-and-client",
        configValueSerialized: "true"
      },
      ["onBeforeRenderEnv"]: {
        configDefinedAt: "TODO",
        configDefinedByFile: "TODO",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "TODO",
        configEnv: "client-only",
        configValueSerialized: "null"
      }
    }
  },
  {
    pageId: "/pages/studio",
    isErrorPage: false,
    routeFilesystem: "/studio",
    routeFilesystemDefinedBy: "/pages/studio/",
    loadCodeFiles: async () => (await import("./entries/pages_studio.mjs")).default,
    configElements: {
      ["onRenderHtml"]: {
        configDefinedAt: "@unding/renderer/renderer/onRenderHtml",
        configDefinedByFile: "@unding/renderer/renderer/onRenderHtml",
        codeFilePath: "@unding/renderer/renderer/onRenderHtml",
        codeFileExport: "default",
        plusConfigFilePath: "/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper/packages/renderer/src/renderer/+config.js",
        configEnv: "server-only"
      },
      ["onRenderClient"]: {
        configDefinedAt: "@unding/renderer/renderer/onRenderClient",
        configDefinedByFile: "@unding/renderer/renderer/onRenderClient",
        codeFilePath: "@unding/renderer/renderer/onRenderClient",
        codeFileExport: "default",
        plusConfigFilePath: "/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper/packages/renderer/src/renderer/+config.js",
        configEnv: "client-only"
      },
      ["Page"]: {
        configDefinedAt: "/pages/studio/+Page.svelte",
        configDefinedByFile: "/pages/studio/+Page.svelte",
        codeFilePath: "/pages/studio/+Page.svelte",
        codeFileExport: "default",
        plusConfigFilePath: null,
        configEnv: "server-and-client"
      },
      ["passToClient"]: {
        configDefinedAt: "\x1B[1m/pages/+config.h.js\x1B[22m > \x1B[36mexport default { passToClient }\x1B[39m",
        configDefinedByFile: "/pages/+config.h.js",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "/pages/+config.h.js",
        configEnv: "server-only",
        configValueSerialized: '["pageProps"]'
      },
      ["clientRouting"]: {
        configDefinedAt: "\x1B[1m/pages/+config.h.js\x1B[22m > \x1B[36mexport default { clientRouting }\x1B[39m",
        configDefinedByFile: "/pages/+config.h.js",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "/pages/+config.h.js",
        configEnv: "server-and-client",
        configValueSerialized: "true"
      },
      ["hydrationCanBeAborted"]: {
        configDefinedAt: "\x1B[1m/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper/packages/renderer/src/renderer/+config.js\x1B[22m > \x1B[36mexport default { hydrationCanBeAborted }\x1B[39m",
        configDefinedByFile: "/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper/packages/renderer/src/renderer/+config.js",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper/packages/renderer/src/renderer/+config.js",
        configEnv: "client-only",
        configValueSerialized: "true"
      },
      ["isClientSideRenderable"]: {
        configDefinedAt: "TODO",
        configDefinedByFile: "TODO",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "TODO",
        configEnv: "server-and-client",
        configValueSerialized: "true"
      },
      ["onBeforeRenderEnv"]: {
        configDefinedAt: "TODO",
        configDefinedByFile: "TODO",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "TODO",
        configEnv: "client-only",
        configValueSerialized: "null"
      }
    }
  },
  {
    pageId: "/pages/auth/login",
    isErrorPage: false,
    routeFilesystem: "/auth/login",
    routeFilesystemDefinedBy: "/pages/auth/login/",
    loadCodeFiles: async () => (await import("./entries/pages_auth_login.mjs")).default,
    configElements: {
      ["onRenderHtml"]: {
        configDefinedAt: "@unding/renderer/renderer/onRenderHtml",
        configDefinedByFile: "@unding/renderer/renderer/onRenderHtml",
        codeFilePath: "@unding/renderer/renderer/onRenderHtml",
        codeFileExport: "default",
        plusConfigFilePath: "/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper/packages/renderer/src/renderer/+config.js",
        configEnv: "server-only"
      },
      ["onRenderClient"]: {
        configDefinedAt: "@unding/renderer/renderer/onRenderClient",
        configDefinedByFile: "@unding/renderer/renderer/onRenderClient",
        codeFilePath: "@unding/renderer/renderer/onRenderClient",
        codeFileExport: "default",
        plusConfigFilePath: "/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper/packages/renderer/src/renderer/+config.js",
        configEnv: "client-only"
      },
      ["Page"]: {
        configDefinedAt: "/pages/auth/login/+Page.svelte",
        configDefinedByFile: "/pages/auth/login/+Page.svelte",
        codeFilePath: "/pages/auth/login/+Page.svelte",
        codeFileExport: "default",
        plusConfigFilePath: null,
        configEnv: "server-and-client"
      },
      ["passToClient"]: {
        configDefinedAt: "\x1B[1m/pages/+config.h.js\x1B[22m > \x1B[36mexport default { passToClient }\x1B[39m",
        configDefinedByFile: "/pages/+config.h.js",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "/pages/+config.h.js",
        configEnv: "server-only",
        configValueSerialized: '["pageProps"]'
      },
      ["clientRouting"]: {
        configDefinedAt: "\x1B[1m/pages/+config.h.js\x1B[22m > \x1B[36mexport default { clientRouting }\x1B[39m",
        configDefinedByFile: "/pages/+config.h.js",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "/pages/+config.h.js",
        configEnv: "server-and-client",
        configValueSerialized: "true"
      },
      ["hydrationCanBeAborted"]: {
        configDefinedAt: "\x1B[1m/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper/packages/renderer/src/renderer/+config.js\x1B[22m > \x1B[36mexport default { hydrationCanBeAborted }\x1B[39m",
        configDefinedByFile: "/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper/packages/renderer/src/renderer/+config.js",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper/packages/renderer/src/renderer/+config.js",
        configEnv: "client-only",
        configValueSerialized: "true"
      },
      ["isClientSideRenderable"]: {
        configDefinedAt: "TODO",
        configDefinedByFile: "TODO",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "TODO",
        configEnv: "server-and-client",
        configValueSerialized: "true"
      },
      ["onBeforeRenderEnv"]: {
        configDefinedAt: "TODO",
        configDefinedByFile: "TODO",
        codeFilePath: null,
        codeFileExport: null,
        plusConfigFilePath: "TODO",
        configEnv: "client-only",
        configValueSerialized: "null"
      }
    }
  }
];
const pageConfigGlobal = {
  ["onBeforeRoute"]: null,
  ["onPrerenderStart"]: null
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
export {
  isGeneratedFile,
  neverLoaded,
  pageConfigGlobal,
  pageConfigs,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
};
