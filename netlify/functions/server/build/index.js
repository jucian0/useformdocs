var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
var import_server2 = __toModule(require("react-dom/server"));
var import_styled_components2 = __toModule(require("styled-components"));

// app/styles.context.ts
init_react();
var import_react = __toModule(require("react"));
var import_styled_components = __toModule(require("styled-components"));
var StylesContext = (0, import_react.createContext)(null);
var ThemeContext = (0, import_react.createContext)({});
var lightTheme = {
  colors: {
    primary: "#2ec4b6",
    primaryHover: "#29B0A3",
    secondary: "#3a506b",
    dark: "#0b132b",
    border: "#edf2f4",
    red: "#e71d36",
    background: "#FFFFFF",
    textColor: "#4b5563",
    headingColor: "#111827",
    bkgPre: "#edf2f4",
    colorPre: "#edf2f4",
    bkgScrollbar: "#3a506b",
    bkgContent: "transparent",
    white: "#FFFFFF"
  }
};
var darkTheme = {
  colors: {
    primary: "#2ec4b6",
    primaryHover: "#29B0A3",
    secondary: "#3a506b",
    dark: "#0b132b",
    border: "#1b262c",
    red: "#e71d36",
    background: "#1c2128",
    textColor: "#edf2f4",
    headingColor: "#edf2f4",
    bkgPre: "#3a506b",
    colorPre: "#edf2f4",
    bkgScrollbar: "#3a506b",
    bkgContent: "transparent",
    white: "#FFFFFF"
  }
};
var ScrollBar = import_styled_components.css`
   ::-webkit-scrollbar {
      width: 0.625rem;
      background-color: transparent;
      border-top: 0.625rem solid transparent;
      border-bottom: 0.625rem solid transparent;
   }

   ::-webkit-scrollbar:hover {
      background-color: rgba(0, 0, 0, 0.05);
   }

   ::-webkit-scrollbar-thumb:vertical {
      background: ${({ theme: theme2 }) => theme2.colors.bkgScrollbar};
      border-radius: 6.25rem;
      background-clip: padding-box;
      border: 0.125rem solid transparent;
      min-height: 0.625rem;
   }

   ::-webkit-scrollbar-thumb:vertical:active {
      background: ${({ theme: theme2 }) => theme2.colors.bkgScrollbar};
      -webkit-border-radius: 6.25rem;
   }
   ::-webkit-scrollbar-thumb:vertical:hover {
      background: ${({ theme: theme2 }) => theme2.colors.bkgScrollbar};
      -webkit-border-radius: 6.25rem;
      width: 0.625rem;
   }

   .horizontal-scroll::-webkit-scrollbar:vertical {
      width: 0.4375rem;
   }

   .horizontal-scroll::-webkit-scrollbar:horizontal {
      height: 0.4375rem;
   }

   .horizontal-scroll::-webkit-scrollbar-thumb {
      background: ${({ theme: theme2 }) => theme2.colors.bkgScrollbar};
      border-radius: 0.4375rem;
   }

   .horizontal-scroll::-webkit-scrollbar-track {
      border-radius: 0.75rem;
      padding: 0.0625rem;
   }

   .horizontal-scroll::-webkit-scrollbar-thumb:hover {
      background: ${({ theme: theme2 }) => theme2.colors.bkgScrollbar};
   }
`;
var GlobalStyle = import_styled_components.createGlobalStyle`

   *{
      margin:0;
      font-size:16px;
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
      ${ScrollBar};
      outline:none;
      box-sizing: border-box;
   }
   html, body {
      width: 100%;
      height: 100%;
      background-color:${({ theme: theme2 }) => theme2.colors.background};
   }

    h1{
      color:${({ theme: theme2 }) => theme2.colors.headingColor};
      font-weight:bold;
      font-size: 2em;
      //margin-top: 1.6em;
     // margin-bottom: .8em;
      line-height: 1.4;
      scroll-margin-top: 1.6em;
    }

    h2{
      font-size:1.4285714em;
      color:${({ theme: theme2 }) => theme2.colors.headingColor};
      font-weight:bold;
      margin-top: 1.6em;
      margin-bottom: .8em;
      line-height: 1.4;
      scroll-margin-top: 1.6em;
    }

    h3{
      color:${({ theme: theme2 }) => theme2.colors.headingColor};
      font-size: 1.2857143em;
      margin-top: 1.5555556em;
      margin-bottom: .4444444em;
      line-height: 1.5555556;
      scroll-margin-top: 1.5555556em;
    }

    h4{
      font-size:1rem;
      color:${({ theme: theme2 }) => theme2.colors.headingColor};
      font-weight:bold;
      margin-top: 1.6em;
      margin-bottom: .8em;
      line-height: 1.4;
      scroll-margin-top: 1.6em;
    }

   a{
      font-size: 1rem;
      line-height: 1.75;
      color:${({ theme: theme2 }) => theme2.colors.secondary};
      text-decoration:none;
      font-weight:600;
      color:${({ theme: theme2 }) => theme2.colors.textColor};
      &:hover{
         color:${({ theme: theme2 }) => theme2.colors.primary};
      }
   }

   p{
      font-weight:400;
      color:${({ theme: theme2 }) => theme2.colors.textColor};
      box-sizing: border-box;
      font-size: 1rem;
      line-height: 1.7142857;
      scroll-margin-top: 1.6em;

      code{
         display:inline;
         background-color:${({ theme: theme2 }) => theme2.colors.bkgPre};
         border-radius:.3rem;
         font-size:.85rem;
         font-family:Monospace;
         padding: 0.125rem 0.25rem;
         display:inline;
         color:${({ theme: theme2 }) => theme2.colors.textColor};
      }
      strong{
         font-weight: bold;
      }
   }

   strong{
     font-weight:500;
   }

   line-height, ul {
      font-size: 1rem;
      line-height: 1.75;
      color:${({ theme: theme2 }) => theme2.colors.textColor};
   }


   ul{
      font-weight:400;
      color:${({ theme: theme2 }) => theme2.colors.textColor};
      box-sizing: border-box;
      font-size: 1rem;
      scroll-margin-top: 1.6em;
   }

   li{
      font-weight:400;
      color:${({ theme: theme2 }) => theme2.colors.textColor};
      box-sizing: border-box;
      font-size: 1rem;
      scroll-margin-top: 1.6em;
      list-style-type: circle;
   }

   table{
      width: 100%;
      border-spacing: 0;
      border-collapse: collapse;
      color: ${({ theme: theme2 }) => theme2.colors.textColor};
      box-shadow: 0 0.188rem 0.375rem rgba(0,0,0,0.16), 0 0.188rem 0.375rem rgba(0,0,0,0.23);
      border-radius:8px;

   td, th {
        &:first-child {
            padding-left: 2rem;

            @media screen and (max-width: 768px) {
               padding-left: 2rem ;
            }

            @media screen and (max-width: 576px) {
               padding-left: 2rem;
            }
        }

        &:last-child {
            padding-right: 2rem;

            @media screen and (max-width: 768px) {
               padding-left: 2rem ;
            }

            @media screen and (max-width: 576px) {
               padding-left: 2rem;
            }
        }
   }

   thead {
        tr {
            font-size: 1em;
            border-bottom: solid 0.063rem ${({ theme: theme2 }) => theme2.colors.border};
            line-height: 2.5rem;
            text-align: left;
        }
   }

   tbody {
        tr {
            font-size: 1em;
            line-height: 2.5rem;
            border-bottom: solid 0.063rem ${({ theme: theme2 }) => theme2.colors.border};
            will-change: red;

            &:last-child{
               border-bottom:none;
            }
        }
	}
   }

   blockquote{
      margin-top: 10px;
      background-color:${({ theme: theme2 }) => theme2.colors.border};
      padding: 1px 0 1px 15px;
      border-radius:5px;
      border-left: 10px solid ${({ theme: theme2 }) => theme2.colors.primary};
      font-style:italic;
      & p{
         margin-top:12px;
         margin-bottom:12px;
      }
   }
`;

// app/entry.server.tsx
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const sheet = new import_styled_components2.ServerStyleSheet();
  (0, import_server2.renderToString)(sheet.collectStyles(/* @__PURE__ */ React.createElement(StylesContext.Provider, {
    value: null
  }, /* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }))));
  const styles = sheet.getStyleElement();
  sheet.seal();
  const markup = import_server.default.renderToString(/* @__PURE__ */ React.createElement(StylesContext.Provider, {
    value: styles
  }, /* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/home/barbosa/javascript/docs/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());
var import_react2 = __toModule(require("react"));

// app/utils/misc.ts
init_react();
function removeTrailingSlash(s) {
  return s.endsWith("/") ? s.slice(0, -1) : s;
}

// route-module:/home/barbosa/javascript/docs/app/root.tsx
var meta = () => {
  return {
    title: "useForm",
    description: "useForm provides a easy way to create forms.",
    viewport: "width=device-width,initial-scale=1,viewport-fit=cover",
    charSet: "utf-8",
    keywords: "useForm, form, react, hooks, context, context api, context api useForm, useform, use-form, forms, input",
    themeColor: "#2ec4b6",
    origin: "https://useform.org",
    image: "https://raw.githubusercontent.com/useForm/useForm/main/img/logo3.png"
  };
};
var links = () => [
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" }
];
var loader = ({ request }) => {
  const url = new URL(request.url);
  return {
    url
  };
};
function App() {
  const data = (0, import_remix2.useLoaderData)();
  const styles = (0, import_react2.useContext)(StylesContext);
  const [theme2, setTheme] = (0, import_react2.useState)("light");
  function handleTheme(selectedTheme) {
    if (typeof window !== "undefined") {
      setTheme(selectedTheme);
      localStorage.setItem("theme", selectedTheme);
    }
  }
  (0, import_react2.useLayoutEffect)(() => {
    if (typeof window !== "undefined") {
      const currentTheme = localStorage.getItem("theme");
      handleTheme(currentTheme || "light");
    }
  }, []);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    name: "google-site-verification",
    content: "4LPC-BqM5jWLLYYDzJ740VSf8AHCFvgneDKeM2d2B3k"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement("link", {
    rel: "canonical",
    href: removeTrailingSlash(data.url)
  }), /* @__PURE__ */ React.createElement(import_remix2.Links, null), styles), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value: { theme: theme2, setTheme: handleTheme }
  }, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null)), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route-module:/home/barbosa/javascript/docs/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
init_react();
var import_remix4 = __toModule(require_remix());
var import_styled_components7 = __toModule(require("styled-components"));

// app/hocs/withHome.tsx
init_react();
var import_react4 = __toModule(require("react"));
var import_styled_components6 = __toModule(require("styled-components"));

// app/components/footer/index.tsx
init_react();
var import_react_router_dom = __toModule(require("react-router-dom"));

// app/components/footer/styles.ts
init_react();
var import_styled_components3 = __toModule(require("styled-components"));
var Container = import_styled_components3.default.footer`
  background: ${({ theme: theme2 }) => theme2.colors.dark};
  position: sticky;
  width:100%;
  display:flex;
  justify-content:center;
`;
var FooterContent = import_styled_components3.default.div`
display:grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: repeat(3,auto); 
  column-gap: 10px;
  row-gap:10px;
  width:100%;
  overflow:hidden;
  padding:20px 10px;
  max-width:1440px;
  a{
    color:${({ theme: theme2 }) => theme2.colors.textColor};
    text-decoration:none;
    &:hover{
      color:${({ theme: theme2 }) => theme2.colors.primaryHover};
    }
  }
`;
var FooterInformation = import_styled_components3.default.div`
  color:${({ theme: theme2 }) => theme2.colors.textColor};
  width:100%;
  margin-top:10px;
  padding:0 15px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-direction:column;
`;
var FooterLogo = import_styled_components3.default.div`
  width:100%;
  display:flex;
  justify-content:start;
  align-items:center;
  flex-direction:column;
  padding:15px 10px;

  .footer-text{
    margin-top:10px;
      color:${({ theme: theme2 }) => theme2.colors.textColor};
  }
`;

// app/components/logo/index.ts
init_react();
var import_styled_components4 = __toModule(require("styled-components"));
var Logo = import_styled_components4.default.div`
   display:flex;
   align-items:center;
   cursor: pointer;
   & img{
      width:50px;
      height:50px;
   }

   & span{
      font-size:23px;
      color:${({ theme: theme2 }) => theme2.colors.primary};
   }
`;

// app/config/index.ts
init_react();
var Config = {
  repository: "https://github.com/useForm/useForm",
  docsRepository: "https://github.com/useForm/docs",
  twitter: "https://twitter.com/juciano_barbosa",
  branch: "main",
  siteName: "Use Form",
  siteSlogan: "Use Form provides a way to create complex forms easily.",
  path: "/",
  titleSuffix: " \u2013 useForm",
  nextLinks: true,
  prevLinks: true,
  navLinks: [
    {
      label: "Docs",
      path: "/docs"
    }
  ],
  defaultMenuCollapsed: false,
  font: true,
  footer: true,
  footerText: "MIT 2022 \xA9 Use Form.",
  footerEditOnGitHubLink: true
};

// app/assets/green_logo.svg
var green_logo_default = "/build/_assets/green_logo-TH2WTCVN.svg";

// app/components/footer/index.tsx
function Footer() {
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(FooterContent, null, /* @__PURE__ */ React.createElement(FooterLogo, null, /* @__PURE__ */ React.createElement(Logo, null, /* @__PURE__ */ React.createElement("img", {
    src: green_logo_default,
    alt: "logo",
    className: "logo"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "mr-2 font-extrabold hidden md:inline"
  }, Config.siteName)), /* @__PURE__ */ React.createElement("span", {
    className: "footer-text"
  }, Config.footerText)), /* @__PURE__ */ React.createElement(FooterInformation, null, /* @__PURE__ */ React.createElement("h1", null, "Docs"), /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: `${Config.path}docs/quick-start`
  }, "Quick start"), /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: `${Config.path}docs`
  }, "Docs")), /* @__PURE__ */ React.createElement(FooterInformation, null, /* @__PURE__ */ React.createElement("h1", null, "Community"), /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: Config.repository
  }, "Github"), /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: `${Config.repository}/issues`
  }, "Request a feature"), /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: `${Config.repository}/issues`
  }, "Report a bug"), /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: `${Config.repository}`
  }, "Leave us a start"))));
}

// app/components/navbar/index.tsx
init_react();
var import_react3 = __toModule(require("react"));
var import_io = __toModule(require("react-icons/io"));
var import_ti = __toModule(require("react-icons/ti"));

// app/components/navbar/styles.ts
init_react();
var import_styled_components5 = __toModule(require("styled-components"));
var Wrapper = import_styled_components5.default.nav`
   display:flex;
   width:100%;
   height:auto;
   overflow:hidden;
   justify-content:center;
   align-items:center;
   flex-direction: row;
   align-items: center;
   border-bottom: 1px solid ${({ theme: theme2 }) => theme2.colors.border};
   position:fixed;
   background-color: ${({ theme: theme2 }) => theme2.colors.background};
   z-index:1;
   flex-direction:column;
`;
var Container2 = import_styled_components5.default.div`
   display:flex;
   width:100%;
   height:60px;
   overflow:hidden;
   justify-content:space-between;
   align-items:center;
   padding:5px 0px 5px 20px;
   max-width:1440px;
   & div{
      display:flex;
      align-items:center;
   }
`;
var ActionButtons = import_styled_components5.default.div`
   display:flex;
   justify-content:space-around;
   align-items:center;
   margin:0 10px;
`;
var Button = import_styled_components5.default.button`
   border-radius:50%;
   border:none;
   cursor: pointer;
   width:40px;
   height:40px;
   outline:none;
   background-color:transparent;
   display:flex;
   align-items:center;
   justify-content:center;

   & svg{
      fill:${({ theme: theme2 }) => theme2.colors.primary};
      width:21px;
      height:21px;
   }

   &:hover{
      background-color:${({ theme: theme2 }) => theme2.colors.border};
   }

   & + button{
      margin:5px;
   }
`;
var ButtonLink = import_styled_components5.default.a`
   border-radius:50%;
   border:none;
   cursor: pointer;
   width:40px;
   height:40px;
   outline:none;
   background-color:transparent;
   display:flex;
   align-items:center;
   justify-content:center;

   & svg{
      fill:${({ theme: theme2 }) => theme2.colors.primary};
      width:21px;
      height:21px;
   }

   &:hover{
      background-color:${({ theme: theme2 }) => theme2.colors.border};
   }

   & + button{
      margin:5px;
   }
`;
var MenuButton = (0, import_styled_components5.default)(Button)`
   border:1px solid ${({ theme: theme2 }) => theme2.colors.border};

   @media (min-width:989px){
      display:none;
   }
`;
var Links2 = import_styled_components5.default.div`
   display:flex;
   justify-content:start;
   align-items:center;
   width:fit-content;
   padding-left:40px;

   a{
      padding:0 20px;
      text-decoration:none;
      font-weight:600;

      &:hover{
         color:${({ theme: theme2 }) => theme2.colors.primary};
      }
   }

   @media (max-width:600px){
      display:none;
   }
`;
var MobileLink = import_styled_components5.default.div`
   display:flex;
   flex-direction:column;
   width:100%;
   justify-content:flex-end;
   align-items:center;
   background-color:${({ theme: theme2 }) => theme2.colors.background};
   height:${({ isOpen }) => isOpen ? 60 : 10}px;

   @media (min-width:600px){
      display:none;
   }

   div{
      display:${({ isOpen }) => isOpen ? "flex" : "none"};
      width:100%;
      justify-content:start;
      padding: 0 20px 0 22px;

      a{
         text-decoration:none;
         padding-right:20px;
         font-weight:600;
         
         &:hover{
            color:${({ theme: theme2 }) => theme2.colors.primary};
         }
      }
   }

   button{
      bottom:0;
      cursor:pointer;
      background-color:transparent;
      border:none;
   }
`;

// app/components/navbar/index.tsx
var import_remix3 = __toModule(require_remix());
function Navbar({ setOpen }) {
  const { setTheme, theme: theme2 } = (0, import_react3.useContext)(ThemeContext);
  const { pathname } = (0, import_remix3.useLocation)();
  function handleTheme() {
    const selectedTheme = theme2 === "light" ? "dark" : "light";
    setTheme(selectedTheme);
  }
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(Container2, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: Config.path
  }, /* @__PURE__ */ React.createElement(Logo, null, /* @__PURE__ */ React.createElement("img", {
    src: green_logo_default,
    alt: "logo",
    className: "logo"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "mr-2 font-extrabold hidden md:inline"
  }, Config.siteName)))), /* @__PURE__ */ React.createElement(ActionButtons, null, /* @__PURE__ */ React.createElement(ButtonLink, {
    target: "_blank",
    href: Config.twitter
  }, /* @__PURE__ */ React.createElement(import_io.IoLogoTwitter, null)), /* @__PURE__ */ React.createElement(ButtonLink, {
    target: "_blank",
    href: Config.repository
  }, /* @__PURE__ */ React.createElement(import_io.IoLogoGithub, null)), /* @__PURE__ */ React.createElement(Button, {
    onClick: handleTheme
  }, theme2 === "light" ? /* @__PURE__ */ React.createElement(import_io.IoMdMoon, null) : /* @__PURE__ */ React.createElement(import_io.IoIosSunny, null)), pathname !== Config.path && /* @__PURE__ */ React.createElement(MenuButton, {
    onClick: setOpen
  }, /* @__PURE__ */ React.createElement(import_ti.TiThMenu, null)))));
}
var navbar_default = Navbar;

// app/hocs/withHome.tsx
var Main = import_styled_components6.default.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
var Container3 = import_styled_components6.default.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
var Content = import_styled_components6.default.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: theme2 }) => theme2.colors.bkgContent};
  margin-top:60px;
`;
function HomeLayout({ children }) {
  return /* @__PURE__ */ import_react4.default.createElement(Main, null, /* @__PURE__ */ import_react4.default.createElement(navbar_default, {
    setOpen: () => {
    }
  }), /* @__PURE__ */ import_react4.default.createElement(Container3, null, /* @__PURE__ */ import_react4.default.createElement(Content, null, children)), /* @__PURE__ */ import_react4.default.createElement(Footer, null));
}
function withHome(Component) {
  return function DocsComponent(props) {
    const { theme: theme2 } = (0, import_react4.useContext)(ThemeContext);
    return /* @__PURE__ */ import_react4.default.createElement(import_styled_components6.ThemeProvider, {
      theme: theme2 === "light" ? lightTheme : darkTheme
    }, /* @__PURE__ */ import_react4.default.createElement(HomeLayout, null, /* @__PURE__ */ import_react4.default.createElement(Component, __spreadValues({}, props))), /* @__PURE__ */ import_react4.default.createElement(GlobalStyle, null));
  };
}

// route-module:/home/barbosa/javascript/docs/app/routes/index.tsx
var import_react_iframe = __toModule(require("react-iframe"));
var Hero = import_styled_components7.default.div`
  width:100%;
  background-color:${({ theme: theme2 }) => theme2.colors.primary};
  display:flex;
  justify-content:start;
  align-items:center;
  flex-direction:column;



  h1{
    font-size:3em;
    font-family: 'Roboto',sans-serif;
    color:${({ theme: theme2 }) => theme2.colors.white};
  }

  p{
    font-size:1.6em;
    font-family: 'Roboto',sans-serif;
    color:${({ theme: theme2 }) => theme2.colors.white};
  }

  div{

    padding:15px;

    .btn{
      border:1px solid ${({ theme: theme2 }) => theme2.colors.white};
      color:${({ theme: theme2 }) => theme2.colors.white};
      font-weight:600;
      font-size:1.3em;
      padding:10px 30px;
      border-radius:5px;
      background-color: ${({ theme: theme2 }) => theme2.colors.primary};
      transition:ease 300ms;
      margin:5px;
  
      &:hover{
        color: ${({ theme: theme2 }) => theme2.colors.primary};
        background-color: ${({ theme: theme2 }) => theme2.colors.white};
        cursor:pointer;
      }
    }
  
    .docs-btn{
      border:1px solid ${({ theme: theme2 }) => theme2.colors.white};
      color: ${({ theme: theme2 }) => theme2.colors.primary};
      font-weight:600;
      font-size:1.3em;
      padding:10px 30px;
      border-radius:5px;
      background-color: ${({ theme: theme2 }) => theme2.colors.white};
      transition:ease 300ms;
      margin:20px;
  
      &:hover{
        color: ${({ theme: theme2 }) => theme2.colors.primary};
        background-color: ${({ theme: theme2 }) => theme2.colors.white};
        cursor:pointer;
      }
    }
  }
`;
var Section = import_styled_components7.default.section`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: repeat(3,auto); 
  column-gap: 10px;
  row-gap:10px;
  width:100%;
  max-width:1200px;
  margin:0 auto;
  background-color:${({ theme: theme2 }) => theme2.colors.background};
  padding:20px;
  
  & div{
    display:flex;
    justify-content:start;
    align-items:center;
    flex-direction:column;
    padding:20px;
    & h1, p{
    }

    & img{
      width:20%;
      height:auto;
    }
  }

`;
var CodeSandBox = import_styled_components7.default.div`
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  padding-bottom:100px;

  h1{
    font-size:3em;
    font-family: 'Roboto',sans-serif;
    color:${({ theme: theme2 }) => theme2.colors.primary};
  }

  div{
    width:1040px;
    padding:2px;
    .sandbox{
      border:none;
      border-radius:8px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
  }
`;
function Index() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Hero, null, /* @__PURE__ */ React.createElement("h1", null, "Use Form"), /* @__PURE__ */ React.createElement("p", null, "Use Form provides you a simple way to create forms with React"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    className: "docs-btn",
    to: "/docs"
  }, "Read docs"), /* @__PURE__ */ React.createElement(import_remix4.Link, {
    className: "btn",
    to: "/docs/quick-start"
  }, "Quick start")), /* @__PURE__ */ React.createElement(CodeSandBox, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_iframe.default, {
    url: "https://codesandbox.io/embed/useform-forked-oojuq?fontsize=14&hidenavigation=1&theme=dark",
    width: "100%",
    height: "650px",
    className: "sandbox",
    id: "myId",
    position: "relative"
  })))), /* @__PURE__ */ React.createElement(Section, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Easy"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Less code. "), "UseForm is the easiest way to create forms with React. Create a form and use it wherever you want, don't worry with React Context, or Redux. You can share your form with other components just by using the hook created by createForm function.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Flexible"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Create a form an use as onSubmit, onChange or debounced mode. "), "Create powerful forms with UseForm. You can create your own form with your own fields, and you can use your own validation rules. UseForm allows you to create form, and use it as a controlled or uncontrolled form.")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Performance"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Just one render. "), "There are many form libraries, most of which are heavy, and allow you to create just one kind of form, but with UseForm you can fulfill and submit a form with just one render."))));
}
var routes_default = withHome(Index);

// route-module:/home/barbosa/javascript/docs/app/routes/docs.tsx
var docs_exports = {};
__export(docs_exports, {
  default: () => docs_default
});
init_react();
var import_remix7 = __toModule(require_remix());

// app/hocs/withDocs.tsx
init_react();
var import_react7 = __toModule(require("react"));
var import_remix6 = __toModule(require_remix());
var import_styled_components11 = __toModule(require("styled-components"));

// app/components/contentFooter/index.tsx
init_react();
var import_react5 = __toModule(require("react"));

// app/components/contentFooter/styles.ts
init_react();
var import_styled_components8 = __toModule(require("styled-components"));
var Wrapper2 = import_styled_components8.default.div`
   display:flex;
   justify-content:space-between;
   padding : 50px 0;

   a{
      color:${({ theme: theme2 }) => theme2.colors.textColor};
      text-decoration:none;
      font-weight:600;
      display:flex;
      align-items: center;
      &:hover{
         color:${({ theme: theme2 }) => theme2.colors.primary};
      }
   }
`;

// app/components/contentFooter/index.tsx
var import_md = __toModule(require("react-icons/md"));
var import_remix5 = __toModule(require_remix());
var fixPath = (path) => {
  const pathWithFrontSlash = path.startsWith("/") ? path : `/${path}`;
  const pathWithBackSlash = pathWithFrontSlash.endsWith("/") ? pathWithFrontSlash : `${pathWithFrontSlash}/`;
  return pathWithBackSlash;
};
var createEditUrl = (repository, branch, path, filepathWithName) => {
  const normalizedPath = fixPath(path);
  return `${repository}/tree/${branch}${normalizedPath}src/pages${filepathWithName}.mdx`;
};
var EditOnGithubLink = ({
  repository,
  branch,
  path,
  filepathWithName
}) => {
  const href = createEditUrl(repository, branch, path, filepathWithName);
  return /* @__PURE__ */ import_react5.default.createElement("a", {
    className: "text-sm",
    href,
    target: "_blank"
  }, /* @__PURE__ */ import_react5.default.createElement(import_md.MdEdit, {
    size: "1.2rem"
  }), "\xA0Edit this page on GitHub");
};
function ContentFooter() {
  const { pathname } = (0, import_remix5.useLocation)();
  return /* @__PURE__ */ import_react5.default.createElement(Wrapper2, null, /* @__PURE__ */ import_react5.default.createElement(EditOnGithubLink, {
    repository: Config.docsRepository || Config.repository,
    branch: Config.branch,
    path: Config.path,
    filepathWithName: pathname
  }));
}

// app/components/sidebar/index.tsx
init_react();
var import_react6 = __toModule(require("react"));
var import_react_router_dom2 = __toModule(require("react-router-dom"));
var import_go = __toModule(require("react-icons/go"));
var import_styled_components10 = __toModule(require("styled-components"));

// app/components/sidebar/styles.ts
init_react();
var import_styled_components9 = __toModule(require("styled-components"));
var Aside = import_styled_components9.default.aside`
  position: fixed;
  display: flex;
  height: calc(100vh - 60px);
  flex-shrink: 0;
  border-right: 1px solid ${({ theme: theme2 }) => theme2.colors.border};
  flex-direction: column;
  padding: 20px 10px 10px 5px;
  margin-top:50px;
  position: sticky;
  overflow:auto;
  top:60px;
  transition: margin-left 0.5s ease-in-out;
  margin-left: ${({ open }) => open ? 0 : "-260px"};
  width: 260px;
  color: ${({ theme: theme2 }) => theme2.colors.textColor};

  ul{
    padding-left:0px;
  }
  li{
    margin:15px;
    border-radius:5px;
  }
`;
var Items = import_styled_components9.default.ul`

`;
var Item = import_styled_components9.default.li`
  list-style:none;
  cursor:pointer;
  & span{
    font-weight:600;
    font-size:1.2em;
  }
`;
var SubItems = import_styled_components9.default.ul`

`;
var Indicator = import_styled_components9.default.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ theme: theme2 }) => theme2.colors.textColor};
  margin: 3px;
`;
var SubItem = import_styled_components9.default.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 500;
  transition: all 0.5s ease-in-out;

  &:hover{
     cursor:pointer;
  }

  & a {
    display: flex;
    cursor: pointer;
    font-size: 16px;
    text-decoration: none;
    color: ${({ theme: theme2 }) => theme2.colors.textColor};
  }
   
  &.active {
    background-color: ${({ theme: theme2 }) => theme2.colors.border};
    a {
      color: ${({ theme: theme2 }) => theme2.colors.primary};
    }
    ${Indicator} {
      background-color: ${({ theme: theme2 }) => theme2.colors.primary};
    }
  }
   
  &:hover {
    ${Indicator} {
      background-color: ${({ theme: theme2 }) => theme2.colors.primary};
    }
    a {
      color: ${({ theme: theme2 }) => theme2.colors.primary};
    }
  }

`;

// app/components/sidebar/index.tsx
var links2 = [
  {
    label: "Introduction",
    link: "",
    subItems: [
      {
        label: "Readme",
        link: "/docs/"
      },
      {
        label: "Quick Start",
        link: "/docs/quick-start"
      }
    ]
  },
  {
    label: "How it works",
    link: "",
    subItems: [
      {
        label: "The concept",
        link: "/docs/concept"
      }
    ]
  },
  {
    label: "Creating a form",
    link: "",
    subItems: [
      {
        label: "Native elements",
        link: "/docs/native-elements"
      },
      {
        label: "Custom components",
        link: "/docs/custom-components"
      },
      {
        label: "Form validation",
        link: "/docs/form-validation"
      }
    ]
  },
  {
    label: "Using your Form",
    link: "",
    subItems: [
      {
        label: "As onChange form",
        link: "/docs/onchange-form"
      },
      {
        label: "As debounced form",
        link: "/docs/debounced-form"
      },
      {
        label: "As onSubmit form",
        link: "/docs/onsubmit-form"
      }
    ]
  },
  {
    label: "Tutorials",
    link: "",
    subItems: [
      {
        label: "Creating Forms",
        link: "/docs/creating-forms"
      }
    ]
  }
];
function ActiveLink({ href, children }) {
  const { pathname } = (0, import_react_router_dom2.useLocation)();
  const theme2 = (0, import_react6.useContext)(import_styled_components10.ThemeContext);
  const isActive = (0, import_react6.useMemo)(() => pathname === href, [pathname, href]);
  return /* @__PURE__ */ import_react6.default.createElement(SubItem, {
    className: isActive ? "active" : ""
  }, /* @__PURE__ */ import_react6.default.createElement(import_go.GoChevronRight, {
    color: isActive ? theme2.colors.primary : "transparent"
  }), /* @__PURE__ */ import_react6.default.createElement(import_react_router_dom2.Link, {
    to: href,
    className: isActive ? "active" : ""
  }, children));
}
function Sidebar(_a) {
  var _b = _a, { open } = _b, rest = __objRest(_b, ["open"]);
  const [expanded, setExpanded] = (0, import_react6.useState)("");
  return /* @__PURE__ */ import_react6.default.createElement(Aside, {
    open
  }, /* @__PURE__ */ import_react6.default.createElement(Items, null, links2.map((link) => {
    var _a2;
    return /* @__PURE__ */ import_react6.default.createElement(Item, {
      key: link.label
    }, /* @__PURE__ */ import_react6.default.createElement("span", {
      onClick: () => setExpanded("")
    }, link.label), expanded === "", /* @__PURE__ */ import_react6.default.createElement(SubItems, null, (_a2 = link.subItems) == null ? void 0 : _a2.map((subItem) => /* @__PURE__ */ import_react6.default.createElement(ActiveLink, {
      key: subItem.label,
      href: subItem.link
    }, subItem.label))));
  })));
}
var sidebar_default = Sidebar;

// app/hocs/withDocs.tsx
var Main2 = import_styled_components11.default.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items:center;
  width: 100%;

  img{
      border-radius: 0.5rem;
      box-shadow: 0 0.188rem 0.375rem rgba(0,0,0,0.16), 0 0.188rem 0.375rem rgba(0,0,0,0.23);
      width:100%;
   }
`;
var MainContainer = import_styled_components11.default.div`
  max-width:1440px;
  width:100%;
`;
var Container4 = import_styled_components11.default.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
var MainContent = import_styled_components11.default.div`
  display: flex;
  width: ${({ open }) => !open ? "100%" : "calc(100% - 260px)"};
  height: calc(100% - 60px);
  position: sticky;
  justify-content: center;
  float: left;
  left: ${({ open }) => open ? "260px" : "0"};
  transition: all 0.5s ease-in-out;
`;
var Content2 = import_styled_components11.default.div`
  display: block;
  width: 100%;
  padding: 40px;
  margin-top:40px;
  max-width: 1040px;
  background-color: ${({ theme: theme2 }) => theme2.colors.bkgContent};
`;
function DocsLayout({ children }) {
  const [open, setOpen] = (0, import_react7.useState)(true);
  const { pathname } = (0, import_remix6.useLocation)();
  const resize = () => {
    if ((window == null ? void 0 : window.innerWidth) > 989) {
      setOpen(true);
    } else if ((window == null ? void 0 : window.innerWidth) <= 989) {
      setOpen(false);
    }
  };
  (0, import_react7.useEffect)(() => {
    window.addEventListener("resize", resize);
    resize();
  }, []);
  (0, import_react7.useEffect)(() => {
    resize();
  }, [pathname]);
  return /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(navbar_default, {
    setOpen: () => setOpen(!open)
  }), /* @__PURE__ */ import_react7.default.createElement(Main2, null, /* @__PURE__ */ import_react7.default.createElement(MainContainer, null, /* @__PURE__ */ import_react7.default.createElement(Container4, null, /* @__PURE__ */ import_react7.default.createElement(sidebar_default, {
    open
  }), /* @__PURE__ */ import_react7.default.createElement(MainContent, {
    open
  }, /* @__PURE__ */ import_react7.default.createElement(Content2, null, children, /* @__PURE__ */ import_react7.default.createElement(ContentFooter, null)))))), /* @__PURE__ */ import_react7.default.createElement(Footer, null));
}
function withDocs(Component) {
  return function DocsComponent(props) {
    const { theme: theme2 } = (0, import_react7.useContext)(ThemeContext);
    return /* @__PURE__ */ import_react7.default.createElement(import_styled_components11.ThemeProvider, {
      theme: theme2 === "light" ? lightTheme : darkTheme
    }, /* @__PURE__ */ import_react7.default.createElement(DocsLayout, null, /* @__PURE__ */ import_react7.default.createElement(Component, __spreadValues({}, props))), /* @__PURE__ */ import_react7.default.createElement(GlobalStyle, null));
  };
}

// route-module:/home/barbosa/javascript/docs/app/routes/docs.tsx
function Docs() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix7.Outlet, null));
}
var docs_default = withDocs(Docs);

// mdx:/home/barbosa/javascript/docs/app/routes/docs/custom-components.mdx
var custom_components_exports = {};
__export(custom_components_exports, {
  attributes: () => attributes,
  default: () => custom_components_default,
  filename: () => filename,
  headers: () => headers,
  links: () => links3,
  meta: () => meta2
});
init_react();
var import_react9 = __toModule(require("react"));

// app/components/demo/index.tsx
init_react();
var import_react8 = __toModule(require("react"));
var import_styled_components12 = __toModule(require("styled-components"));
var import_react_iframe2 = __toModule(require("react-iframe"));
var import_remix8 = __toModule(require_remix());
var CodeSandBox2 = import_styled_components12.default.div`
  width:100%;
  padding:10px 0;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;


  h1{
    font-size:3em;
    font-family: 'Roboto',sans-serif;
    color:${({ theme: theme2 }) => theme2.colors.primary};
    padding:20px;
  }

  div{
    width:100%;
    padding:2px;
    .sandbox{
      width:100%;
      border:none;
      border-radius:8px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
  }

  `;
function Demo(props) {
  const push = (0, import_remix8.useNavigate)();
  function redirect() {
    push("/docs");
  }
  return /* @__PURE__ */ import_react8.default.createElement(CodeSandBox2, null, /* @__PURE__ */ import_react8.default.createElement("div", null, /* @__PURE__ */ import_react8.default.createElement(import_react_iframe2.default, {
    url: props.url,
    width: "100%",
    height: "700px",
    className: "sandbox",
    id: "myId",
    position: "relative"
  })));
}
var demo_default = Demo;

// app/components/codeblock/index.tsx
init_react();
var import_prism_react_renderer = __toModule(require("prism-react-renderer"));
var import_palenight = __toModule(require("prism-react-renderer/themes/palenight"));
var import_md2 = __toModule(require("react-icons/md"));
var import_react_use_clipboard = __toModule(require("react-use-clipboard"));

// app/components/codeblock/styles.ts
init_react();
var import_styled_components13 = __toModule(require("styled-components"));
var Container5 = import_styled_components13.default.div`
  margin: 1rem 0;
  *{
    font-family:monospace;
    font-size: inherit;
    white-space: pre;
    font-size: .875rem;
    white-space: pre-wrap

    }
  & pre {
    border-radius: 0.5rem;
    padding-left:1rem;
    box-shadow: 0 0.188rem 0.375rem rgba(0,0,0,0.16), 0 0.188rem 0.375rem rgba(0,0,0,0.23);
  }

  & .header{
    display:flex;
    justify-content:flex-end;

  & .language{
    font-family:'Roboto', sans-serif!important;
    color: #ffffff;
    background-color: ${({ theme: theme2 }) => theme2.colors.primary};
    border: 0.063rem solid ${({ theme: theme2 }) => theme2.colors.primary};
    border-radius: 0 0 0.125rem 0.125rem;
    margin-right:0.313rem;
    width:max-content;
    padding:0.25rem;
    display:inline;
  }

  & button {
    background-color: ${({ theme: theme2 }) => theme2.colors.primary};
    border: 0.063rem solid ${({ theme: theme2 }) => theme2.colors.primary};
    cursor: pointer;
    padding-top:0.313rem;
    border-radius: 0 0 0.125rem 0.125rem;
    margin-right:0.625rem;

    &:hover{
      box-shadow: 0 0.188rem 0.375rem rgba(0,0,0,0.16), 0 0.188rem 0.375rem rgba(0,0,0,0.23);
    }
  }
  }
`;

// app/components/codeblock/index.tsx
function CodeBlock({ children, language }) {
  const [isCopied, setCopied] = (0, import_react_use_clipboard.default)(children, { successDuration: 1e3 });
  return /* @__PURE__ */ React.createElement(import_prism_react_renderer.default, __spreadProps(__spreadValues({}, import_prism_react_renderer.defaultProps), {
    code: children,
    language,
    theme: import_palenight.default
  }), ({ className, style, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ React.createElement(Container5, null, /* @__PURE__ */ React.createElement("pre", {
    className,
    style
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "language"
  }, language), /* @__PURE__ */ React.createElement(CopyButton, {
    onClick: setCopied,
    isCopied
  })), tokens.map((line, i) => /* @__PURE__ */ React.createElement("div", __spreadValues({}, getLineProps({ line, key: i })), line.map((token, key) => /* @__PURE__ */ React.createElement("span", __spreadValues({}, getTokenProps({ token, key })))))))));
}
var CopyButton = (_a) => {
  var _b = _a, { isCopied } = _b, props = __objRest(_b, ["isCopied"]);
  return /* @__PURE__ */ React.createElement("button", __spreadValues({}, props), isCopied ? /* @__PURE__ */ React.createElement(import_md2.MdCheck, {
    color: "#fff"
  }) : /* @__PURE__ */ React.createElement(import_md2.MdContentCopy, {
    color: "#fff"
  }));
};

// mdx:/home/barbosa/javascript/docs/app/routes/docs/custom-components.mdx
var attributes = {
  "meta": {
    "title": "useForm | Custom components",
    "description": "Learn how to use useForm to work with custom components."
  }
};
function MDXContent(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    h3: "h3",
    p: "p",
    ul: "ul",
    li: "li",
    h2: "h2",
    code: "code",
    blockquote: "blockquote"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement(_components.h1, null, "Custom components"), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.h3, null, "What are custom components?"), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.p, null, "Usually, custom components are used to create a better user experience, for example when you want to provide a way to user select a collection of items or collect a range of dates or times, you can reach the same result using native elements, but with custom components, you can do it in a more user-friendly way."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.p, null, "Different from native elements, custom components have an internal state controlled by state management, which means that they will be updated when the value changes, however, native elements are not, because you can use a reference to the element to update its value."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.h3, null, "Let's see some examples of custom components."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react9.default.createElement(_components.li, null, "Datepikers - are a component that allows you to select a date."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.li, null, "Timepikers - are a component that allows you to select a time."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.li, null, "Sliders - are a component that allows you to select a range of values."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.li, null, "Selects, multi-selects components - are a component that allows you to select single or multiple values."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.li, null, "Drag and drop components - are a component that allows you to drag and drop items."), "\n"), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.h2, null, "How to use custom components with useForm"), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.p, null, "To use custom components with useForm, you need to use the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "<Wrapper>"), " component and pass the component as a prop. Another important thing is that the custom component should have those props: ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "value"), ", ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onChange"), ", ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onBlur"), ". The ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "value"), " prop is the value of the component, the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onChange"), " prop is the function that will be called when the value changes and the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onBlur"), " prop is the function that will be called when the component loses focus."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.h3, null, "Why do we need to use the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "<Wrapper>"), " component?"), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.p, null, "The ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "register"), " function is the only way to connect a field to the form, and the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "register"), " function returns a reference to the component, then we need to use the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "<Wrapper>"), " component to get the reference.\nUsually, custom components don't work with reference, in consequence, we need to use a wrapper to connect the custom component with a reference and finally connect to the form. And then you can use the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "register"), " function to register the custom component."), "\n", /* @__PURE__ */ import_react9.default.createElement("br", null), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react9.default.createElement(_components.li, null, "The ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "<Wrapper>"), " component is a wrapper that will be used to wrap the custom component, it will be used to add the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onChange"), " and ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onBlur"), " props to the native event handlers."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.li, null, "The ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "<Wrapper>"), " component is also used to add the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "value"), " prop to the custom component."), "\n"), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.h2, null, "How to use custom components with useField"), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.p, null, "When we are creating the form doesn't matter if we are using native HTML elements or not, it's just a function that creates a store and returns a function to manage the form. So we don't need to worry about it for now. We just need to create the form store, also we can provide the initial values, initial errors, initial touched, and the validation schema, but for now, we will just provide the initial values."), "\n", /* @__PURE__ */ import_react9.default.createElement(CodeBlock, {
    language: "javascript"
  }, `import { createForm } from '@use-form/core'

const useUserForm = createForm({
  initialValues: {
    names: []
  },
 })
`), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.p, null, "So, now we are going to create the form component that will be used to manage the form, and we will use the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "<Wrapper>"), " component to wrap the custom component. All the props that the custom component will receive will be the props that the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "<Wrapper>"), " component will receive."), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.p, null, "To register the custom component, we will use the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "register"), " function, and we will pass it to ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "<Wrapper>"), " component by the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "ref"), " prop."), "\n", /* @__PURE__ */ import_react9.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
import { Wrapper } from '@use-form/use-form'
import Select from 'select-component'

funtion UserForm(){
  const { register, handleSubmit } = useUserForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper component={Select} ref={register('names')} />
        options={[
          { value: 'John', label: 'John' },
          { value: 'Jane', label: 'Jane' },
          { value: 'Jack', label: 'Jack' },
        ]}
      />
    </form>
  )
}
`), "\n", /* @__PURE__ */ import_react9.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react9.default.createElement(_components.p, null, "The wrapper component will look at the custom component props, and if the component doesn't have the following properties, ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onChange"), ", ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onBlur"), ", and ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "value"), " it will throw an error. In this case, you should build your own Wrapper component, or you can customize the component to add the ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onChange"), " and ", /* @__PURE__ */ import_react9.default.createElement(_components.code, null, "onBlur"), " props."), "\n"));
  return MDXLayout ? /* @__PURE__ */ import_react9.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var custom_components_default = MDXContent;
var filename = "custom-components.mdx";
var headers = typeof attributes !== "undefined" && attributes.headers;
var meta2 = typeof attributes !== "undefined" && attributes.meta;
var links3 = void 0;

// mdx:/home/barbosa/javascript/docs/app/routes/docs/form-validation.mdx
var form_validation_exports = {};
__export(form_validation_exports, {
  attributes: () => attributes2,
  default: () => form_validation_default,
  filename: () => filename2,
  headers: () => headers2,
  links: () => links4,
  meta: () => meta3
});
init_react();
var import_react10 = __toModule(require("react"));
var attributes2 = {
  "meta": {
    "title": "useForm | Form validation",
    "description": "Learn how to validate form values using use-form."
  }
};
function MDXContent2(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    ul: "ul",
    li: "li",
    h3: "h3",
    code: "code",
    blockquote: "blockquote"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement(_components.h1, null, "Forms validations"), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.h2, null, "Validation"), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Every website with forms should have validations, but what are form validations? Go to any popular website with a registration form, and you will be notice that they provide feedback when you don't fill in the form correctly. You'll see messages such as:"), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react10.default.createElement(_components.li, null, `"This field is required" (You can't leave this field blank).`), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.li, null, '"Please enter your phone number in the format xxx-xxxx" (A specific data format is required for it to be considered valid).'), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.li, null, '"Please enter a valid email address" (the data you entered is not in the right format).'), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.li, null, '"Your password needs to be between 8 and 30 characters long and contain one uppercase letter, one symbol, and a number." (A very specific data format is required for your data).'), "\n"), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.h3, null, "But why is this so important?"), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Form validation is a very important part of the web development process. It's a way to make sure that the data you enter is valid. If you don't validate your data, it's possible that your data will be lost or corrupted."), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Server-side validations are the last part of the validation, which means, even if the data is in the correct format it's possible that the data can't be stored because some data can't be duplicated like email or username, this kind of validation is done in server-side. Client-side validation deal with incorrect data format, like a valid email, or a valid password, which means, that before the data is submitted the client-side validates if it is a valid data format."), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.h2, null, "Description"), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "There are several validations solutions available, but when using ", /* @__PURE__ */ import_react10.default.createElement(_components.code, null, "useForm"), " the default solution is Yup. With yup the process of validations is simple and powerful."), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "The ", /* @__PURE__ */ import_react10.default.createElement(_components.code, null, "useForm"), " returns an error object, that has all errors, and this object is updated whenever the input state is changed or when the form is submitted if your form has validation."), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Usually you wannt to show the error message just when a field is touched, you can do that by using the ", /* @__PURE__ */ import_react10.default.createElement(_components.code, null, "touched"), " object. Thouched object is an object that has all the fields that are touched, and the value of the field is true if the field is touched."), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.h2, null, "Usage"), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "Validation is performed whenever the state is changed. By default, ", /* @__PURE__ */ import_react10.default.createElement(_components.code, null, "useForm"), " uses the uncontrolled inputs option, this means that the values \u200B\u200Bare accessible when the onSubmit event is dispatched."), "\n", /* @__PURE__ */ import_react10.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
import { createForm } from "@use-form/use-form";
import * as yup from "yup";

const useForm = createForm({
   initialValues:{
      name: "Jesse",
      email: "jesse@jesse.com",
      pets: ["felix"],
      accept: false,
   }   
})

const validation = yup.object().shape({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("This field must be a valid e-mail")
    .required("This field is required"),
  pets: yup.array(yup.string().required("This field is required")),
  accept: yup.bool().oneOf([true], "Field must be checked"),
});

function Form() {
  const { register, state, handleSubmit } = useForm({mode:'onChange'});

  const {errors, touched} = state;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
         <input ref={register("name")} />
         <span>{touched.name && errors.name}</span>
      </fieldset>
      <fieldset>
         <input ref={register("email")} />
         <span>{touched.email && errors.email}</span>
      </fieldset>
      <fieldset>
         <input ref={register("pets")} />
         <span>{touched.pets && errors.pets}</span>
      </fieldset>
      <input ref={register("pets.0")} />
      <fieldset>
         <input ref={register("accept")} />
         <span>{touched.accept && errors.accept}</span>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}`), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react10.default.createElement(_components.p, null, "If you don't want to use Yup validation, you can use any other validation library, or write your own validation logic."), "\n"), "\n", /* @__PURE__ */ import_react10.default.createElement(_components.h2, null, "Demo"), "\n", /* @__PURE__ */ import_react10.default.createElement(demo_default, {
    url: "https://codesandbox.io/s/use-form-validation-form-jmv9e"
  }));
  return MDXLayout ? /* @__PURE__ */ import_react10.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var form_validation_default = MDXContent2;
var filename2 = "form-validation.mdx";
var headers2 = typeof attributes2 !== "undefined" && attributes2.headers;
var meta3 = typeof attributes2 !== "undefined" && attributes2.meta;
var links4 = void 0;

// mdx:/home/barbosa/javascript/docs/app/routes/docs/native-elements.mdx
var native_elements_exports = {};
__export(native_elements_exports, {
  attributes: () => attributes3,
  default: () => native_elements_default,
  filename: () => filename3,
  headers: () => headers3,
  links: () => links5,
  meta: () => meta4
});
init_react();
var import_react11 = __toModule(require("react"));
var attributes3 = {
  "meta": {
    "title": "useForm | Native HTML elements",
    "description": "Learn how to use native HTML elements in order to create better forms."
  }
};
function MDXContent3(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    code: "code",
    h3: "h3",
    blockquote: "blockquote"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react11.default.createElement(import_react11.default.Fragment, null, /* @__PURE__ */ import_react11.default.createElement(_components.h1, null, "Native HTML elements"), "\n", /* @__PURE__ */ import_react11.default.createElement(_components.h2, null, "What is a native HTML element?"), "\n", /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "Native HTML elements are elements that are built into the browser, like ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "<input>"), ", ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "<button>"), ", ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "<select>"), ", etc. These elements are different from custom elements, which are elements that are created by developers. Native HTML elements are powerful and easy to use since ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "useForm"), " uses a reference to register the fields, native elements are easy to register, trigger and listen to events. All that we need to do is to use the ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "ref"), " property to register the element."), "\n", /* @__PURE__ */ import_react11.default.createElement(CodeBlock, {
    language: "jsx"
  }, `<input ref={register('fieldName')} />
`), "\n", /* @__PURE__ */ import_react11.default.createElement(_components.h3, null, "Let's create a full form example"), "\n", /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "When we are creating the form doesn't matter if we are using native HTML elements or not, it's just a function that creates a store and returns a function to manage the form. So we don't need to worry about it for now. We just need to create the form store, also we can provide the initial values, initial errors, initial touched, and the validation schema, but for now, we will just provide the initial values."), "\n", /* @__PURE__ */ import_react11.default.createElement(CodeBlock, {
    language: "javascript"
  }, `import { createForm } from '@use-form/core'

const useUserForm = createForm({
  initialValues: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
 })
`), "\n", /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "In order to have a full form example, we need to create a form component and use the ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "useUserForm"), " hook. In this step we need to register the fields, we can do that using the ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "register"), " function."), "\n", /* @__PURE__ */ import_react11.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "The ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "register"), " function is a function that receives the name of the field and returns a reference to the element. The reference is used to register the element, trigger, and listen to events. If you are using a library like Material UI or something similar, make sure that the input component use ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "React.forwardRef"), ", otherwise you will need to use a Wrapper to register the element."), "\n"), "\n", /* @__PURE__ */ import_react11.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
funtion UserForm(){
  const { register, handleSubmit } = useUserForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register('name')} />
      <input ref={register('email')} />
      <input ref={register('password')} />
      <input ref={register('confirmPassword')} />
      <button type="submit">Submit</button>
    </form>
  )
}
`), "\n", /* @__PURE__ */ import_react11.default.createElement(_components.p, null, "The last thing we need to know is about ", /* @__PURE__ */ import_react11.default.createElement(_components.code, null, "handleSubmit"), ", it's a function that receives another function as a parameter, this function is called when the form is submitted. The function receives the data of the form as a parameter and the second parameter is the answer of the validation (if the form is valid or not, it depends on the validation schema)."));
  return MDXLayout ? /* @__PURE__ */ import_react11.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var native_elements_default = MDXContent3;
var filename3 = "native-elements.mdx";
var headers3 = typeof attributes3 !== "undefined" && attributes3.headers;
var meta4 = typeof attributes3 !== "undefined" && attributes3.meta;
var links5 = void 0;

// mdx:/home/barbosa/javascript/docs/app/routes/docs/creating-forms.mdx
var creating_forms_exports = {};
__export(creating_forms_exports, {
  attributes: () => attributes4,
  default: () => creating_forms_default,
  filename: () => filename4,
  headers: () => headers4,
  links: () => links6,
  meta: () => meta5
});
init_react();
var import_react12 = __toModule(require("react"));
var attributes4 = {
  "meta": {
    "title": "useForm | Create forms easily with useform",
    "description": "This tutorial will show you how to create forms easily with useform."
  }
};
function MDXContent4(props = {}) {
  const _components = Object.assign({
    p: "p",
    img: "img",
    h1: "h1",
    ul: "ul",
    li: "li",
    h2: "h2",
    code: "code",
    h3: "h3"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement(_components.p, null, /* @__PURE__ */ import_react12.default.createElement(_components.img, {
    src: "https://res.cloudinary.com/practicaldev/image/fetch/s--SOHJ-nn6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/a0qtwoo6xz02au5p958w.png",
    alt: "useform, reactjs"
  })), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.h1, null, "Create forms easily with useform"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "One of the most important steps when you are developing web applications is how to write and maintain smart forms with little effort.\nWhen you think about ReactJS you can find many form library options and I must to admit that there are a lot of good form libraries, so you may think why one more?"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "UseForm was born because I found great difficulty when I wanted to build complex forms with different steps or levels and with many fields."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "When we need to build complex forms we can encounter issues like:"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react12.default.createElement(_components.li, null, "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "A lot of rendering - Every change is made in the form state is reflected and the form component tree is rendered again and again."), "\n"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.li, null, "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "A lot of properties - When you use some libraries it is necessary to put many properties in one input, creating a lot of unnecessary code."), "\n"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.li, null, "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "Just one approach - You can use controlled forms or uncontrolled forms never both together."), "\n"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.li, null, "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "Share state - You should share the form state with many other components like a step form and a form library should provide it."), "\n"), "\n"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.h2, null, "How useForm works"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "The most important thing is that there are three ways to use it:"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react12.default.createElement(_components.li, null, "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "You can build an uncontrolled form, it's is called ", /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "onSubmit"), " mode, this is the most performative form because the input value is not saved in the component state and all changes are integrated with a component reference and native events. It means you can fill out a form and submit it with just one render."), "\n"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.li, null, "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "You can build a controlled form, it's called ", /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "onChange"), " mode, this is not the most performative way to build a form, but in this way the user can have a better experience.It can be so frustrating when you fill in a form and just after you submit it, you realize that some field values are wrong. When you use a controlled form, shows the user if some values are wrong which the user can fix before submitting."), "\n"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.li, null, "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "You can use the debounce approach which, it's called ", /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "debounced"), " mode, in my opinion, is the better option because you can have the best of both worlds(Jean-Luc Picard). This is whay it is the better option:"), "\n"), "\n"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, '"The debounce() function forces a function to wait a certain amount of time before running again. The function is built to limit the number of times a function is called."'), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "If you are interested in this library,please leave a star: https://github.com/use-form/use-form"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.h2, null, "Show me the code"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.h3, null, "To build a simple form."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "In this first example I will show you how you can build a simple form and how you can define a controlled, uncontrolled or debounce form."), "\n", /* @__PURE__ */ import_react12.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
import { createForm } from "@use-form/use-form";

const useAuthForm = createForm({
  initialValues:{
  name: 'Jesse',
  email: 'jesse@jesse.com',
  score: 25,
}});

const { register, state: { values }} = useAuthForm({mode: 'onChange'});


<Input placeholder="Name" ref={register("name")}/>
<Input placeholder="E-mail" type="email" ref={register("email")}/>
<Range ref={register("score")}/>
<Button onClick={() => console.log(values)}>Submit</Button>
`), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "useForm"), " can have many properties and some of these properties are: ", /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "isDebounced"), " and ", /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "isControlled"), "."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "By default, ", /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "useForm"), " uses the uncontrolled approach."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.h3, null, "Adding validation with yup"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "When working with real application validations forms are very common because this is the way you can verify if the input's value is correct or not. There are several validations solutions available, but when using useForm the default solution is Yup. With yup the process of validation is simple and powerful."), "\n", /* @__PURE__ */ import_react12.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
import { createForm } from "@use-form/use-form";
import * as yup from "yup";

export const usePersonForm = createForm({
  initialValues:{
  name: 'Jesse',
  email: 'jesse@jesse.com',
  pets: ['felix', 'lucky'],
  accepted: false,
}});


const validation = yup.object().shape({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("This field must be a valid e-mail")
    .required("This field is required"),
  pets: yup.array(yup.string().required("This field is required")),
  accept: yup.bool().oneOf([true], "Field must be checked"),
});

function ControlledForm() {
  const { register, state } = usePersonForm({
    validation,
    mode:'onChange'
  });
  return (
    <>
      <input ref={register("name")} />
      <span>{touched.name && errors.name}</span>
      <input type="email" ref={register("email")} />
      <span>{touched.email && errors.email}</span>
      <input ref={register("pets.0")} />
      <span>{touched.pets?.[0] && errors.pets?.[0]}</span>
      <input type="checkbox" ref={register("accept")} />
      <span>{touched.accept && errors.accept}</span>
    </>
  );
}
`), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.h3, null, "Sharing state with other components"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "When you want to share the form state with other components you just need to use the form created before."), "\n", /* @__PURE__ */ import_react12.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
import {usePersonForm} from './../usePersonForm';

function StepForm() {
  const { register, state } = usePersonForm();
  return (
    <>
      <input ref={register("name")} />
      <input ref={register("email")} />
      <input ref={register("pets.0")} />
      <input ref={register("pets.1")} />
      <input ref={register("accept")} />
    </>
  );
}
`), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.h2, null, "Conclusion"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "I hope you have enjoyed this post and have found it helpful, ", /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "useForm"), " is a new library to build forms and has some documentation in English. If you want to start with open source, this repository can be your first step."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "https://github.com/use-form/use-form"));
  return MDXLayout ? /* @__PURE__ */ import_react12.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var creating_forms_default = MDXContent4;
var filename4 = "creating-forms.mdx";
var headers4 = typeof attributes4 !== "undefined" && attributes4.headers;
var meta5 = typeof attributes4 !== "undefined" && attributes4.meta;
var links6 = void 0;

// mdx:/home/barbosa/javascript/docs/app/routes/docs/debounced-form.mdx
var debounced_form_exports = {};
__export(debounced_form_exports, {
  attributes: () => attributes5,
  default: () => debounced_form_default,
  filename: () => filename5,
  headers: () => headers5,
  links: () => links7,
  meta: () => meta6
});
init_react();
var import_react13 = __toModule(require("react"));
var attributes5 = {
  "meta": {
    "title": "useForm | debounced mode",
    "description": "When you use debounced form the debounce parameter delays the updating of the state until the user has stopped changing inputs for a predetermined amount of time."
  }
};
function MDXContent5(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    a: "a",
    code: "code",
    blockquote: "blockquote"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement(_components.h1, null, "Debounced mode"), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.h2, null, "Introduction"), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "Debounce function forces a function to wait a certain amount of time before running again. The function is built to limit the number of times a function is called."), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "The debounce parameter delays the updating of the state until the user has stopped changing inputs for a predetermined amount of time."), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "The input value is set to state values and then updated via React events. Defining a form\u2019s input value via state is considered a controlled component. For controlled inputs, you will need a corresponding state and then a function to update that state with changes."), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, /* @__PURE__ */ import_react13.default.createElement(_components.a, {
    href: "https://reactjs.org/docs/forms.html"
  }, "React Docs")), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "It means that whenever state is changed the component, it is rendered again."), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "If you want to use this kind of form, you need only pass property ", /* @__PURE__ */ import_react13.default.createElement(_components.code, null, "mode:'debounced'"), "."), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "Also, it means that the validations are run in every state change, providing better user feedback.\nSee more in Controlled Inputs with validation."), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.h2, null, "Usage"), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, /* @__PURE__ */ import_react13.default.createElement(_components.code, null, "useForm"), " provides a ", /* @__PURE__ */ import_react13.default.createElement(_components.code, null, "register"), " function, this function returns all properties to manager a field."), "\n", /* @__PURE__ */ import_react13.default.createElement(CodeBlock, {
    language: "jsx"
  }, `import { createForm } from '@use-form/use-form'

const useForm = createForm({
  initialValues: {
    name: 'Anna',
    address: [
      {
        street: '123 Main St',
        city: 'Anytown',
      },
    ]
  }
})
`), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "Use dot notation to create advanced objects or to map object values. Type an entry name and type or an entry property object."), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "Dot notation is used to access nested objects. For example, if you have an object with a nested object, you can access the nested object using dot notation; ", /* @__PURE__ */ import_react13.default.createElement(_components.code, null, "info.name"), ".\nUse dot notation to access nested arrays. For example, if you\nhave an object with a nested array, you can access the nested array using dot notation;\n", /* @__PURE__ */ import_react13.default.createElement(_components.code, null, "info.array[2]"), "."), "\n"), "\n", /* @__PURE__ */ import_react13.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
   function Form(){
    const { register } = useForm({ mode: 'debounced'})

    return (
      <form>
        <input ref={register('name')} />
        <input ref={register('address.street')} />
        <input ref={register('address.city')} />
      </form>
    )
   }
`), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.h2, null, "Demo"), "\n", /* @__PURE__ */ import_react13.default.createElement(demo_default, {
    url: "https://codesandbox.io/embed/useform-debounced-sdokv?fontsize=14&hidenavigation=1&theme=dark"
  }));
  return MDXLayout ? /* @__PURE__ */ import_react13.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var debounced_form_default = MDXContent5;
var filename5 = "debounced-form.mdx";
var headers5 = typeof attributes5 !== "undefined" && attributes5.headers;
var meta6 = typeof attributes5 !== "undefined" && attributes5.meta;
var links7 = void 0;

// mdx:/home/barbosa/javascript/docs/app/routes/docs/onchange-form.mdx
var onchange_form_exports = {};
__export(onchange_form_exports, {
  attributes: () => attributes6,
  default: () => onchange_form_default,
  filename: () => filename6,
  headers: () => headers6,
  links: () => links8,
  meta: () => meta7
});
init_react();
var import_react14 = __toModule(require("react"));
var attributes6 = {
  "meta": {
    "title": "useForm | onChange mode",
    "description": "When using controlled forms, the input value is set to state values and then updated via React events. React form controlled is the most popular aproach in reactjs."
  }
};
function MDXContent6(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    code: "code",
    blockquote: "blockquote"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, /* @__PURE__ */ import_react14.default.createElement(_components.h1, null, "onChange mode"), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.h2, null, "Description"), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, "There are two types of form input in React. We have the uncontrolled input and the controlled input.\nWhen using controlled forms, the input value is set to state values and then updated via React events.\nDefining a form input value via state is considered a controlled component. For controlled inputs, you will need a corresponding state and then a function to update that state with changes."), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, "Controlled inputs are the most popular in the react ecosystem, are easier to write and understanding. But when you think about performance controlled inputs are less powerful than uncontrolled inputs.Every time that component state is updated the component is rendered again and this affects the performance result."), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.h2, null, "Usage"), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, /* @__PURE__ */ import_react14.default.createElement(_components.code, null, "useForm"), " provides a ", /* @__PURE__ */ import_react14.default.createElement(_components.code, null, "register"), " function, this function returns all properties to manager a field."), "\n", /* @__PURE__ */ import_react14.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
import { createForm } from '@use-form/use-form'

const useForm = createForm({
  initialValues: {
    name: 'Anna',
    address: [
      {
        street: '123 Main St',
        city: 'Anytown',
      },
    ]
  }
})
`), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, "Use dot notation to create advanced objects or to map object values. Type an entry name and type or an entry property object."), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, "Dot notation is used to access nested objects. For example, if you have an object with a nested object, you can access the nested object using dot notation; ", /* @__PURE__ */ import_react14.default.createElement(_components.code, null, "info.name"), ".\nUse dot notation to access nested arrays. For example, if you\nhave an object with a nested array, you can access the nested array using dot notation;\n", /* @__PURE__ */ import_react14.default.createElement(_components.code, null, "info.array[2]"), "."), "\n"), "\n", /* @__PURE__ */ import_react14.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
   function Form(){
    const { register } = useForm({ mode: 'onChange'})

    return (
      <form>
        <input ref={register('name')} />
        <input ref={register('address.street')} />
        <input ref={register('address.city')} />
      </form>
    )
   }
`), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.h2, null, "Demo"), "\n", /* @__PURE__ */ import_react14.default.createElement(demo_default, {
    url: "https://codesandbox.io/embed/useform-quick-start-ypoxu?fontsize=14&hidenavigation=1&theme=dark"
  }));
  return MDXLayout ? /* @__PURE__ */ import_react14.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var onchange_form_default = MDXContent6;
var filename6 = "onchange-form.mdx";
var headers6 = typeof attributes6 !== "undefined" && attributes6.headers;
var meta7 = typeof attributes6 !== "undefined" && attributes6.meta;
var links8 = void 0;

// mdx:/home/barbosa/javascript/docs/app/routes/docs/onsubmit-form.mdx
var onsubmit_form_exports = {};
__export(onsubmit_form_exports, {
  attributes: () => attributes7,
  default: () => onsubmit_form_default,
  filename: () => filename7,
  headers: () => headers7,
  links: () => links9,
  meta: () => meta8
});
init_react();
var import_react15 = __toModule(require("react"));
var attributes7 = {
  "meta": {
    "title": "useForm | onSubmit mode",
    "description": "Uncontrolled forms are the most performant way to create react forms. With uncontrolled input values, there is no updating or changing of any states. What you submit is what you get."
  }
};
function MDXContent7(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    a: "a",
    code: "code",
    blockquote: "blockquote"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null, /* @__PURE__ */ import_react15.default.createElement(_components.h1, null, "onSubmit mode"), "\n", /* @__PURE__ */ import_react15.default.createElement(_components.h2, null, "Description"), "\n", /* @__PURE__ */ import_react15.default.createElement(_components.p, null, "There are two types of form input in React. We have the uncontrolled input and the controlled input. Uncontrolled inputs are like traditional HTML form inputs:"), "\n", /* @__PURE__ */ import_react15.default.createElement(CodeBlock, {
    language: "html"
  }, `<input type="text" />
`), "\n", /* @__PURE__ */ import_react15.default.createElement(_components.p, null, "With uncontrolled input, there is no updating or changing of any states. When we use uncontrolled input is necessary to set a reference in input for manipulating and receives events, but with userForm it isn't necessary because userForm makes this for us.\nUncontrolled inputs are useful when performance is essential. But if the forms turn very complex debounce forms are the best option."), "\n", /* @__PURE__ */ import_react15.default.createElement(_components.p, null, "Ps * You can use uncontrolled form with custom inputs but custom inputs use state in your internal logic.\nIf you want to use uncontrolled form with custom inputs and native inputs the uncontrolled approach is applied only native inputs."), "\n", /* @__PURE__ */ import_react15.default.createElement(_components.p, null, /* @__PURE__ */ import_react15.default.createElement(_components.a, {
    href: "https://reactjs.org/docs/forms.html"
  }, "React Docs")), "\n", /* @__PURE__ */ import_react15.default.createElement(_components.p, null, "By default, ", /* @__PURE__ */ import_react15.default.createElement(_components.code, null, "useForm"), " use uncontrolled form, isn't necessary to pass any value to useForm hook if you want to use this kind.\nBut when you use this kind of form, it is necessary to realize that values and events validation are available only when onSubmit event is dispatched."), "\n", /* @__PURE__ */ import_react15.default.createElement(_components.p, null, "With this approach, it's possible to complete a form without any extra renders."), "\n", /* @__PURE__ */ import_react15.default.createElement(_components.h2, null, "Usage"), "\n", /* @__PURE__ */ import_react15.default.createElement(_components.p, null, /* @__PURE__ */ import_react15.default.createElement(_components.code, null, "useForm"), " provides a ", /* @__PURE__ */ import_react15.default.createElement(_components.code, null, "register"), " function, this function returns all properties to manager a field."), "\n", /* @__PURE__ */ import_react15.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
import { createForm } from '@use-form/use-form'

const useForm = createForm({
  initialValues: {
    name: 'Anna',
    address: [
      {
        street: '123 Main St',
        city: 'Anytown',
      },
    ]
  }
})
`), "\n", /* @__PURE__ */ import_react15.default.createElement(_components.p, null, "Use dot notation to create advanced objects or to map object values. Type an entry name and type or an entry property object."), "\n", /* @__PURE__ */ import_react15.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react15.default.createElement(_components.p, null, "Dot notation is used to access nested objects. For example, if you have an object with a nested object, you can access the nested object using dot notation; ", /* @__PURE__ */ import_react15.default.createElement(_components.code, null, "info.name"), ".\nUse dot notation to access nested arrays. For example, if you\nhave an object with a nested array, you can access the nested array using dot notation;\n", /* @__PURE__ */ import_react15.default.createElement(_components.code, null, "info.array[2]"), "."), "\n"), "\n", /* @__PURE__ */ import_react15.default.createElement(CodeBlock, {
    language: "jsx"
  }, `import { Wrapper } from '@use-form/use-form'
import Select from 'select-component'

funtion UserForm(){
  const { register, handleSubmit } = useUserForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Wrapper component={Select} ref={register('names')} />
        options={[
          { value: 'John', label: 'John' },
          { value: 'Jane', label: 'Jane' },
          { value: 'Jack', label: 'Jack' },
        ]}
      />
    </form>
  )
}
`), "\n", /* @__PURE__ */ import_react15.default.createElement(_components.h2, null, "Demo"), "\n", /* @__PURE__ */ import_react15.default.createElement(demo_default, {
    url: "https://codesandbox.io/embed/useform-onsubmit-jvz1z?fontsize=14&hidenavigation=1&theme=dark"
  }));
  return MDXLayout ? /* @__PURE__ */ import_react15.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var onsubmit_form_default = MDXContent7;
var filename7 = "onsubmit-form.mdx";
var headers7 = typeof attributes7 !== "undefined" && attributes7.headers;
var meta8 = typeof attributes7 !== "undefined" && attributes7.meta;
var links9 = void 0;

// mdx:/home/barbosa/javascript/docs/app/routes/docs/create-form.mdx
var create_form_exports = {};
__export(create_form_exports, {
  attributes: () => attributes8,
  default: () => create_form_default,
  filename: () => filename8,
  headers: () => headers8,
  links: () => links10,
  meta: () => meta9
});
init_react();
var import_react16 = __toModule(require("react"));
var attributes8 = {
  "meta": {
    "title": "useForm | Create Form",
    "description": "Create form is a function that creates a form and you can use it as a hook."
  }
};
function MDXContent8(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react16.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var create_form_default = MDXContent8;
var filename8 = "create-form.mdx";
var headers8 = typeof attributes8 !== "undefined" && attributes8.headers;
var meta9 = typeof attributes8 !== "undefined" && attributes8.meta;
var links10 = void 0;

// mdx:/home/barbosa/javascript/docs/app/routes/docs/quick-start.mdx
var quick_start_exports = {};
__export(quick_start_exports, {
  attributes: () => attributes9,
  default: () => quick_start_default,
  filename: () => filename9,
  headers: () => headers9,
  links: () => links11,
  meta: () => meta10
});
init_react();
var import_react17 = __toModule(require("react"));
var attributes9 = {
  "meta": {
    "title": "useForm | Quick Start",
    "description": "Your first step to creating forms."
  }
};
function MDXContent9(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2",
    br: "br",
    h3: "h3",
    ul: "ul",
    li: "li",
    code: "code"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement(_components.h1, null, "Quick Start"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "Hey there!"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "It's really good to see you here, on this first page you will see some steps to create forms easily."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h2, null, "Description"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "Forms are an important part of web applications, and with React it's possible to create greats forms,", /* @__PURE__ */ import_react17.default.createElement(_components.br, null), "\n", "react hooks are a game-changer when we think about forms, with hooks is simple to create forms, and you can go on without libraries.", /* @__PURE__ */ import_react17.default.createElement(_components.br, null), "\n", "But when we want to build complex forms with nested fields and validations, might be a good idea to use a library, and you can find a lot of libraries to help you to create forms."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h3, null, "So, why UseForm?"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "There are some reasons why you face problems when you want to create forms, and with useForm, you can solve these problems."), "\n", /* @__PURE__ */ import_react17.default.createElement("br", null), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "State management -  A couple of years ago, you could think that Redux or MobX was a good solution to manage form state in react, but they weren't. Today you can use hooks to manage the form state, hooks like ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "useStatew"), " and ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "useReducer"), " are a good solution to manage the state. But managing values, touched fields and errors could be a problem if you don't have a standard way to manage them. Usually, real applications use nested objects as request payloads, and you should keep it to send the correct data to the server, manage nested values and errors could be a problem using just ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "useReducer"), "."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Errors-To deal with errors, you can use your validation solution, and it can work well with simple forms, but you can stuck with a lot of errors when you have nested fields."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Touched fields - Maybe you want to show a message error just when the field is touched, so in order to do that you need to manage the touched fields, it can be really easy to do with ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "useReducer"), ", but you can't do that very well with ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "useReducer"), " when you have nested fields."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Handle submit - When you want to handle submit, you need to manage the submit event, it's convenient when you have an already solution to do that."), "\n"), "\n", /* @__PURE__ */ import_react17.default.createElement("br", null), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "UseForm provides a way to create complex forms easily, this hook returns an object of values \u200B\u200Bin the same shape that it receives, this is possible using dot notation. Therefore,\nit does not matter if the object is complex or has many properties or an array,\nthe result is the same. This process turns very easy to create forms from nested objects,\nthe same layers and properties are replicated in the final object,\nthis approach prevents you to type more code to convert an object from form to backend object type. The same process is realized with errors objects and touched objects."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h2, null, "What to expect with useForm"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Performer forms - useForm provides a way to complete a form and submit it without any rerender, by default useForm creates uncontrolled forms."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Easy to write - useForm has an easy way to write forms with less code. register function return necessary input's properties and it is all we need to manage all events in a native HTML ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "input"), ". Writhe forms without form tag."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Easy validation - By default useForm uses yup validation, we can write complex validation without effort."), "\n"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h2, null, "Installation"), "\n", /* @__PURE__ */ import_react17.default.createElement(CodeBlock, {
    language: "bash"
  }, `npm install --save @use-form/use-form
  `), "\n", /* @__PURE__ */ import_react17.default.createElement(CodeBlock, {
    language: "bash"
  }, `yarn add @use-form/use-form
  `), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h2, null, "Usage"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "With ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "createForm"), " you can create a hook form and use it wherever you want,"), "\n", /* @__PURE__ */ import_react17.default.createElement(demo_default, {
    url: "https://codesandbox.io/embed/useform-quick-start-ypoxu?fontsize=14&hidenavigation=1&theme=dark"
  }));
  return MDXLayout ? /* @__PURE__ */ import_react17.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var quick_start_default = MDXContent9;
var filename9 = "quick-start.mdx";
var headers9 = typeof attributes9 !== "undefined" && attributes9.headers;
var meta10 = typeof attributes9 !== "undefined" && attributes9.meta;
var links11 = void 0;

// mdx:/home/barbosa/javascript/docs/app/routes/docs/concept.mdx
var concept_exports = {};
__export(concept_exports, {
  attributes: () => attributes10,
  default: () => concept_default,
  filename: () => filename10,
  headers: () => headers10,
  links: () => links12,
  meta: () => meta11
});
init_react();
var import_react18 = __toModule(require("react"));
var attributes10 = {
  "meta": {
    "title": "useForm | Concept",
    "description": "How UseForm works, and why we decided to do it this way."
  }
};
function MDXContent10(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    code: "code",
    h2: "h2",
    ul: "ul",
    li: "li",
    h3: "h3",
    blockquote: "blockquote"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, /* @__PURE__ */ import_react18.default.createElement(_components.h1, null, "Concept"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "When you are working on a project, you might want to use a form in different places, or maybe you have a form with a couple of steps in different components, how could you handle this?"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "The most common answer is to use React Context API, or if you are using a form library like ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "react-hook-form"), ", you can use the ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useFormContext"), " hook, formik has a similar API. These APIS are based on React Context API, so you can use them in the same way."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "But for me this is not the best way to do that, the idea to have a provider whenever you want to share something is weird and not very useful. Besides declaring a provider you should pass the value to the provider, it's really strange for me, because we can do that without a provider, by storing the state in s external store as Zustand do, the UseForm use an external store, for this reason, we don't need to use a React Context API or something similar to store our form state."), "\n", /* @__PURE__ */ import_react18.default.createElement("br", null), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "How a store works"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "The store concept becomes very popular in React community by the way of Redux and MobX works, a store is a place where you could keep your state, in the store you can trust, it means that the store is the source of truth, and every change in the state is always a change in the store."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "To deliver every change we need to use a pattern called ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "Observable"), ", so whenever a change happens in the state, the observable can notify the subscribers that the state has changed."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "Now that we know the main concept of the store and the observable, we can go on and understand how UseForm uses it."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "How UseForm works"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "UseForm uses an external store to keep the form state, but it's not enough, we need to share the state with other components without React Context. For this reason, we have a function called ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "createForm"), ";\nThis function creates a form and returns a function that can be used as a hook, this hook is connected to the store, so whenever the store changes, the hook will be notified and the form will be updated."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "In other words, the ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "createForm"), " function creates a form and returns a function that has all resources to manage the form, if you use it ten times, it will be the same form and the same store being managed in different places."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "For that reason, we can use the same form in different components without providers or React Context API."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "Initial State"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "As the first step, we need to define the initial state of the form, this is the state that will be used when the form is created, we have ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "initialValues"), " and ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "initialErrors"), " properties, ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "initialTouched"), ", all of them are optional."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "Form Validation"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "The validation process can be done in two ways:"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "The first and most common is to use a ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "validationSchema"), ", this is an object that contains all the validation rules, the ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "validationSchema"), " should have the same shape from the ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "initialValues"), " object, so if you have a form with a ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "name"), " field, you should have a ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "name"), " field in the validationSchema, this rule is applied to nested fields, we recommend to use ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "Yup"), " library for this. The first way is the recommended way to use validation, because it's the most simple and easy to use, and you have a powerful validation library. If you decide to use this way, you should create and use the ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "validationSchema"), " when you create the form."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "The second way is to use a ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "validate"), " function, this function will be called every time then the form is updated, and it will receive the form values and the form errors, and it should return an object with the new form errors."), "\n"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "Native elements vs Custom elements"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "In web development we can find native elements like ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "<input>"), " and ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "<select>"), " and custom elements like ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "<Selectbox/>"), " and ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "<DatePicker/>"), ",\nthere are some differences between them, native elements are HTML elements that are created by the browser, and custom elements are created by the developer,\nthe developer can use native elements to build custom elements."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "By default ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "createForm"), " create a form using just a reference to communicate with fields, since fields like ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "<input>"), " and ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "<select>"), " are native elements, ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "createForm"), " can do it without problems,\nbut if you want to use custom elements, ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "createForm"), " can't do it because most of them doesn't have a reference to native elements, and custom elements normally have an internal state, so to work with custom elements as native elements, we need a ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "Wrapper"), " component."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h3, null, "Wrapper"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "The Wrapper component will be used to wrap the custom elements, and it will be used to create a reference to the native element. (Custom elements should have commons properties like ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "value"), ", ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "onChange"), ", ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "onBlur"), ") and it will be used to create a reference to the native element."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "We need to use a Wrapper because we don't want to rerender the form every time the custom element changes. Wrapper prevents this and makes just the specific custom element rerender."), "\n"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "Controlled vs Uncontrolled vs Debounced forms"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "By default, UseForm creates an agnostic form, which means that the form can be used as you wish, as controlled, uncontrolled or debounced. This configuration should be provided when you are going to use it."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "Debounced forms are forms that are updated only when the user stops typing, this is useful when you have a form with a lot of fields, and you don't want to update the form every time the user types, but only when the user stops typing."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "Controlled forms are forms that are updated whenever the user types, this is useful if you want to give quick feedback to the user, like a form with a ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "name"), " field, you can use a controlled form to show the user the error when the field is empty before to submit the form."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "Uncontrolled forms are forms that are updated just when the form is submitted, which means that the form can be fulfilled with the values of the form and submitted without rerendering the form."), "\n"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "You can learn more about this in the pages for ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "controlled"), ", ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "uncontrolled"), ", and ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "debounced"), " forms."));
  return MDXLayout ? /* @__PURE__ */ import_react18.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var concept_default = MDXContent10;
var filename10 = "concept.mdx";
var headers10 = typeof attributes10 !== "undefined" && attributes10.headers;
var meta11 = typeof attributes10 !== "undefined" && attributes10.meta;
var links12 = void 0;

// mdx:/home/barbosa/javascript/docs/app/routes/docs/index.mdx
var docs_exports2 = {};
__export(docs_exports2, {
  attributes: () => attributes11,
  default: () => docs_default2,
  filename: () => filename11,
  headers: () => headers11,
  links: () => links13,
  meta: () => meta12
});
init_react();
var import_react19 = __toModule(require("react"));
var attributes11 = {
  "meta": {
    "title": "useForm | Readme",
    "description": "Your fist step to create form easily without effort."
  }
};
function MDXContent11(props = {}) {
  const _components = Object.assign({
    p: "p",
    img: "img",
    h1: "h1",
    blockquote: "blockquote",
    code: "code",
    h3: "h3",
    a: "a",
    h2: "h2",
    br: "br",
    ul: "ul",
    li: "li"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react19.default.createElement(import_react19.default.Fragment, null, /* @__PURE__ */ import_react19.default.createElement(_components.p, null, /* @__PURE__ */ import_react19.default.createElement(_components.img, {
    src: "https://raw.githubusercontent.com/use-form/use-form/main/img/logo3.png",
    alt: "Logo"
  })), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.h1, null, "Welcome to useForm \u{1F44B}"), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react19.default.createElement(_components.p, null, /* @__PURE__ */ import_react19.default.createElement(_components.code, null, "useForm"), " provide a way to create complex forms easily."), "\n"), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.h3, null, "\u{1F3E0} ", /* @__PURE__ */ import_react19.default.createElement(_components.a, {
    href: "https://useform.org"
  }, "Homepage")), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.h3, null, "\u2728 ", /* @__PURE__ */ import_react19.default.createElement(_components.a, {
    href: "https://codesandbox.io/s/useform-2u2ju"
  }, "Demo")), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.h2, null, "Description"), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.p, null, "Forms are an important part of web applications, and with react it's possible to create greats forms,", /* @__PURE__ */ import_react19.default.createElement(_components.br, null), "\n", "react hooks are a game-changer when we think about forms, with hooks is simple to create forms, and you can go on without libraries.", /* @__PURE__ */ import_react19.default.createElement(_components.br, null), "\n", "But when we want to build complex forms with nested fields and validations, maight be a good idea to use a library, and you can find a lot of libraries to help you to create forms."), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.h3, null, "So, why UseForm?"), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.p, null, "There are some reasons why you face problems when you want to create forms, and with useForm you can solve this problems."), "\n", /* @__PURE__ */ import_react19.default.createElement("br", null), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react19.default.createElement(_components.li, null, "State management -  A couple of yeears ago, you could think that Redux or MobX was  a good solution to manage form state in react, but they wasn't. Today you can use hooks to manage form state, hooks like ", /* @__PURE__ */ import_react19.default.createElement(_components.code, null, "useStatew"), " and ", /* @__PURE__ */ import_react19.default.createElement(_components.code, null, "useReducer"), " are a good solution to manage state. But manage values, touched fields and errors could be a problem if you don't have a standard way to manager them. Usually real applications use nested objects as request paylooads, and you should keep it in order to send the correct data to the server, manage nested values and errors could be a problem using just ", /* @__PURE__ */ import_react19.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react19.default.createElement(_components.code, null, "useReducer"), "."), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.li, null, "Errors - To deal with errors, you can use your woun validation solution, and it can work well with simple forms, but you can stuck with a lot of errors when you have nested fields."), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.li, null, "Touched fields - Maybe you want to show a message error just when the field is touched, so in order to do that you need to manager the touched fields, it can be really easy to do with ", /* @__PURE__ */ import_react19.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react19.default.createElement(_components.code, null, "useReducer"), ", but you can't do that very well with ", /* @__PURE__ */ import_react19.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react19.default.createElement(_components.code, null, "useReducer"), " when you have nested fields."), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.li, null, "Handle submit - When you want to handle submit, you need to manage the submit event, it's really convinient when you have a already solution to do that."), "\n"), "\n", /* @__PURE__ */ import_react19.default.createElement("br", null), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.p, null, "UseForm provides a way to create complex forms easily, this hook returns an object of values \u200B\u200Bin the same shape that it receives, this is possible using dot notation. Therefore,\nit does not matter if the object is complex or has many properties or array,\nthe result is the same. This process turns very easily to create forms from an object with several layers,\nthe same layers and properties are replicated in the final object,\nthis approach prevents you to type more code to convert an object from form to backend object type. The same process is realized with errors object and touched objects."), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.h2, null, "What to expect with useForm"), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react19.default.createElement(_components.li, null, "Performer forms - useForm provides a way to complete a form and submit it without any rerender, by default useForm creates uncontrolled forms."), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.li, null, "Easy to write - useForm has an easy way to write forms with less code. register function return necessary input's properties and it is all we need to manage all events in a native HTML ", /* @__PURE__ */ import_react19.default.createElement(_components.code, null, "input"), ". Writhe forms without form tag."), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.li, null, "Easy validation - By default useForm uses yup validation, we can write complex validation without effort."), "\n"), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.h2, null, "Installation"), "\n", /* @__PURE__ */ import_react19.default.createElement(CodeBlock, {
    language: "bash"
  }, `npm install --save @use-form/use-form
  `), "\n", /* @__PURE__ */ import_react19.default.createElement(CodeBlock, {
    language: "bash"
  }, `yarn add @use-form/use-form
  `), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.h2, null, "Usage"), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.p, null, "With ", /* @__PURE__ */ import_react19.default.createElement(_components.code, null, "createForm"), " you can create a hook form and use it wherever you want,"), "\n", /* @__PURE__ */ import_react19.default.createElement("br", null), "\n", /* @__PURE__ */ import_react19.default.createElement(CodeBlock, {
    language: "javascript"
  }, `import { createForm } from '@use-form/core'

const useUserForm = createForm({
  initialValues: {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
 })
`), "\n", /* @__PURE__ */ import_react19.default.createElement(CodeBlock, {
    language: "jsx"
  }, `
funtion UserForm(){
  const { register, handleSubmit } = useUserForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input ref={register('name')} />
      <input ref={register('email')} />
      <input ref={register('password')} />
      <input ref={register('confirmPassword')} />
      <button type="submit">Submit</button>
    </form>
  )
}
`), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.h3, null, /* @__PURE__ */ import_react19.default.createElement(_components.a, {
    href: "https://dev.to/jucian0/building-forms-with-useform-1cna"
  }, "Post")), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.h2, null, "\u{1F91D} Contributing"), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.p, null, "Contributions, issues and feature requests are welcome!"), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.p, null, "Feel free to check ", /* @__PURE__ */ import_react19.default.createElement(_components.a, {
    href: "https://github.com/use-form/use-form/issues"
  }, "issues page"), ". You can also take a look at the ", /* @__PURE__ */ import_react19.default.createElement(_components.a, {
    href: "https://github.com/Jucian0/use-form/blob/main/CONTRIBUTING.md"
  }, "contributing guide"), "."), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.h2, null, "Show your support"), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.p, null, "Give a \u2B50\uFE0F if this project helped you!"), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.h2, null, "\u{1F4DD} License"), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.p, null, "Copyright \xA9 2020 ", /* @__PURE__ */ import_react19.default.createElement(_components.a, {
    href: "https://github.com/use-form"
  }, "useForm"), "."), "\n", /* @__PURE__ */ import_react19.default.createElement(_components.p, null, "This project is ", /* @__PURE__ */ import_react19.default.createElement(_components.a, {
    href: "https://github.com/use-form/use-form/blob/53debd6986650f76561795f2069d6eebc5db6c65/LICENSE"
  }, "MIT"), " licensed."));
  return MDXLayout ? /* @__PURE__ */ import_react19.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var docs_default2 = MDXContent11;
var filename11 = "index.mdx";
var headers11 = typeof attributes11 !== "undefined" && attributes11.headers;
var meta12 = typeof attributes11 !== "undefined" && attributes11.meta;
var links13 = void 0;

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/docs": {
    id: "routes/docs",
    parentId: "root",
    path: "docs",
    index: void 0,
    caseSensitive: void 0,
    module: docs_exports
  },
  "routes/docs/custom-components": {
    id: "routes/docs/custom-components",
    parentId: "routes/docs",
    path: "custom-components",
    index: void 0,
    caseSensitive: void 0,
    module: custom_components_exports
  },
  "routes/docs/form-validation": {
    id: "routes/docs/form-validation",
    parentId: "routes/docs",
    path: "form-validation",
    index: void 0,
    caseSensitive: void 0,
    module: form_validation_exports
  },
  "routes/docs/native-elements": {
    id: "routes/docs/native-elements",
    parentId: "routes/docs",
    path: "native-elements",
    index: void 0,
    caseSensitive: void 0,
    module: native_elements_exports
  },
  "routes/docs/creating-forms": {
    id: "routes/docs/creating-forms",
    parentId: "routes/docs",
    path: "creating-forms",
    index: void 0,
    caseSensitive: void 0,
    module: creating_forms_exports
  },
  "routes/docs/debounced-form": {
    id: "routes/docs/debounced-form",
    parentId: "routes/docs",
    path: "debounced-form",
    index: void 0,
    caseSensitive: void 0,
    module: debounced_form_exports
  },
  "routes/docs/onchange-form": {
    id: "routes/docs/onchange-form",
    parentId: "routes/docs",
    path: "onchange-form",
    index: void 0,
    caseSensitive: void 0,
    module: onchange_form_exports
  },
  "routes/docs/onsubmit-form": {
    id: "routes/docs/onsubmit-form",
    parentId: "routes/docs",
    path: "onsubmit-form",
    index: void 0,
    caseSensitive: void 0,
    module: onsubmit_form_exports
  },
  "routes/docs/create-form": {
    id: "routes/docs/create-form",
    parentId: "routes/docs",
    path: "create-form",
    index: void 0,
    caseSensitive: void 0,
    module: create_form_exports
  },
  "routes/docs/quick-start": {
    id: "routes/docs/quick-start",
    parentId: "routes/docs",
    path: "quick-start",
    index: void 0,
    caseSensitive: void 0,
    module: quick_start_exports
  },
  "routes/docs/concept": {
    id: "routes/docs/concept",
    parentId: "routes/docs",
    path: "concept",
    index: void 0,
    caseSensitive: void 0,
    module: concept_exports
  },
  "routes/docs/index": {
    id: "routes/docs/index",
    parentId: "routes/docs",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: docs_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3N0eWxlcy5jb250ZXh0LnRzIiwgInJvdXRlLW1vZHVsZTovaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3V0aWxzL21pc2MudHMiLCAicm91dGUtbW9kdWxlOi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9ob2NzL3dpdGhIb21lLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9mb290ZXIvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvbG9nby9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9hcHAvY29uZmlnL2luZGV4LnRzIiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL25hdmJhci9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL3N0eWxlcy50cyIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvaG9jcy93aXRoRG9jcy50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvY29udGVudEZvb3Rlci9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvY29udGVudEZvb3Rlci9zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zdHlsZXMudHMiLCAibWR4Oi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9jdXN0b20tY29tcG9uZW50cy5tZHgiLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvZGVtby9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvY29kZWJsb2NrL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9jb2RlYmxvY2svc3R5bGVzLnRzIiwgIm1keDovaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3MvZm9ybS12YWxpZGF0aW9uLm1keCIsICJtZHg6L2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL25hdGl2ZS1lbGVtZW50cy5tZHgiLCAibWR4Oi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9jcmVhdGluZy1mb3Jtcy5tZHgiLCAibWR4Oi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9kZWJvdW5jZWQtZm9ybS5tZHgiLCAibWR4Oi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9vbmNoYW5nZS1mb3JtLm1keCIsICJtZHg6L2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL29uc3VibWl0LWZvcm0ubWR4IiwgIm1keDovaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3MvY3JlYXRlLWZvcm0ubWR4IiwgIm1keDovaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3MvcXVpY2stc3RhcnQubWR4IiwgIm1keDovaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3MvY29uY2VwdC5tZHgiLCAibWR4Oi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9pbmRleC5tZHgiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3MudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9jdXN0b20tY29tcG9uZW50cy5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL2Zvcm0tdmFsaWRhdGlvbi5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL25hdGl2ZS1lbGVtZW50cy5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL2NyZWF0aW5nLWZvcm1zLm1keFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3MvZGVib3VuY2VkLWZvcm0ubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9vbmNoYW5nZS1mb3JtLm1keFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3Mvb25zdWJtaXQtZm9ybS5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9jcmVhdGUtZm9ybS5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9xdWljay1zdGFydC5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9jb25jZXB0Lm1keFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMyBmcm9tIFwiL2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL2luZGV4Lm1keFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2RvY3NcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kb2NzXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiZG9jc1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2RvY3MvY3VzdG9tLWNvbXBvbmVudHNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kb2NzL2N1c3RvbS1jb21wb25lbnRzXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RvY3NcIixcbiAgICBwYXRoOiBcImN1c3RvbS1jb21wb25lbnRzXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvZG9jcy9mb3JtLXZhbGlkYXRpb25cIjoge1xuICAgIGlkOiBcInJvdXRlcy9kb2NzL2Zvcm0tdmFsaWRhdGlvblwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9kb2NzXCIsXG4gICAgcGF0aDogXCJmb3JtLXZhbGlkYXRpb25cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy9kb2NzL25hdGl2ZS1lbGVtZW50c1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RvY3MvbmF0aXZlLWVsZW1lbnRzXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RvY3NcIixcbiAgICBwYXRoOiBcIm5hdGl2ZS1lbGVtZW50c1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU1XG4gIH0sXG4gIFwicm91dGVzL2RvY3MvY3JlYXRpbmctZm9ybXNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kb2NzL2NyZWF0aW5nLWZvcm1zXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RvY3NcIixcbiAgICBwYXRoOiBcImNyZWF0aW5nLWZvcm1zXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTZcbiAgfSxcbiAgXCJyb3V0ZXMvZG9jcy9kZWJvdW5jZWQtZm9ybVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RvY3MvZGVib3VuY2VkLWZvcm1cIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZG9jc1wiLFxuICAgIHBhdGg6IFwiZGVib3VuY2VkLWZvcm1cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlN1xuICB9LFxuICBcInJvdXRlcy9kb2NzL29uY2hhbmdlLWZvcm1cIjoge1xuICAgIGlkOiBcInJvdXRlcy9kb2NzL29uY2hhbmdlLWZvcm1cIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZG9jc1wiLFxuICAgIHBhdGg6IFwib25jaGFuZ2UtZm9ybVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU4XG4gIH0sXG4gIFwicm91dGVzL2RvY3Mvb25zdWJtaXQtZm9ybVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RvY3Mvb25zdWJtaXQtZm9ybVwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9kb2NzXCIsXG4gICAgcGF0aDogXCJvbnN1Ym1pdC1mb3JtXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTlcbiAgfSxcbiAgXCJyb3V0ZXMvZG9jcy9jcmVhdGUtZm9ybVwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RvY3MvY3JlYXRlLWZvcm1cIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZG9jc1wiLFxuICAgIHBhdGg6IFwiY3JlYXRlLWZvcm1cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTBcbiAgfSxcbiAgXCJyb3V0ZXMvZG9jcy9xdWljay1zdGFydFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RvY3MvcXVpY2stc3RhcnRcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZG9jc1wiLFxuICAgIHBhdGg6IFwicXVpY2stc3RhcnRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTFcbiAgfSxcbiAgXCJyb3V0ZXMvZG9jcy9jb25jZXB0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZG9jcy9jb25jZXB0XCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RvY3NcIixcbiAgICBwYXRoOiBcImNvbmNlcHRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTJcbiAgfSxcbiAgXCJyb3V0ZXMvZG9jcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RvY3MvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZG9jc1wiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTEzXG4gIH1cbn07IiwgIi8vIGFwcC9lbnRyeS5zZXJ2ZXIudHN4XG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgU3R5bGVzQ29udGV4dCB9IGZyb20gXCIuL3N0eWxlcy5jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcblxuICBjb25zdCBzaGVldCA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KCk7XG5cbiAgcmVuZGVyVG9TdHJpbmcoXG4gICAgc2hlZXQuY29sbGVjdFN0eWxlcyhcbiAgICAgIDxTdHlsZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtudWxsfT5cbiAgICAgICAgPFJlbWl4U2VydmVyXG4gICAgICAgICAgY29udGV4dD17cmVtaXhDb250ZXh0fVxuICAgICAgICAgIHVybD17cmVxdWVzdC51cmx9XG4gICAgICAgIC8+XG4gICAgICA8L1N0eWxlc0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuICApO1xuXG4gIGNvbnN0IHN0eWxlcyA9IHNoZWV0LmdldFN0eWxlRWxlbWVudCgpO1xuICBzaGVldC5zZWFsKCk7XG5cbiAgY29uc3QgbWFya3VwID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gICAgPFN0eWxlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0eWxlc30+XG4gICAgICA8UmVtaXhTZXJ2ZXJcbiAgICAgICAgY29udGV4dD17cmVtaXhDb250ZXh0fVxuICAgICAgICB1cmw9e3JlcXVlc3QudXJsfVxuICAgICAgLz5cbiAgICA8L1N0eWxlc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59IiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlLCBjc3MsIERlZmF1bHRUaGVtZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgU3R5bGVzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8bnVsbCB8IFJlYWN0LlJlYWN0RWxlbWVudDx7fSwgc3RyaW5nIHwgUmVhY3QuSlNYRWxlbWVudENvbnN0cnVjdG9yPGFueT4+W10+KG51bGwpO1xuZXhwb3J0IGNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55Pih7fSlcblxuZGVjbGFyZSBtb2R1bGUgXCJzdHlsZWQtY29tcG9uZW50c1wiIHtcbiAgIGV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdFRoZW1lIHtcbiAgICAgIGNvbG9yczoge1xuICAgICAgICAgYmtnQ29udGVudDogc3RyaW5nO1xuICAgICAgICAgcHJpbWFyeTogc3RyaW5nXG4gICAgICAgICBwcmltYXJ5SG92ZXI6IHN0cmluZ1xuICAgICAgICAgc2Vjb25kYXJ5OiBzdHJpbmdcbiAgICAgICAgIGRhcms6IHN0cmluZ1xuICAgICAgICAgYm9yZGVyOiBzdHJpbmdcbiAgICAgICAgIHJlZDogc3RyaW5nXG4gICAgICAgICBiYWNrZ3JvdW5kOiBzdHJpbmdcbiAgICAgICAgIHRleHRDb2xvcjogc3RyaW5nXG4gICAgICAgICBoZWFkaW5nQ29sb3I6IHN0cmluZ1xuICAgICAgICAgYmtnUHJlOiBzdHJpbmdcbiAgICAgICAgIGNvbG9yUHJlOiBzdHJpbmdcbiAgICAgICAgIGJrZ1Njcm9sbGJhcjogc3RyaW5nXG4gICAgICAgICB3aGl0ZTogc3RyaW5nXG4gICAgICB9XG4gICB9XG59XG5cbmV4cG9ydCBjb25zdCBsaWdodFRoZW1lOiBEZWZhdWx0VGhlbWUgPSB7XG4gICBjb2xvcnM6IHtcbiAgICAgIHByaW1hcnk6ICcjMmVjNGI2JyxcbiAgICAgIHByaW1hcnlIb3ZlcjogJyMyOUIwQTMnLFxuICAgICAgc2Vjb25kYXJ5OiAnIzNhNTA2YicsXG4gICAgICBkYXJrOiAnIzBiMTMyYicsXG4gICAgICBib3JkZXI6ICcjZWRmMmY0JyxcbiAgICAgIHJlZDogJyNlNzFkMzYnLFxuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxuICAgICAgdGV4dENvbG9yOiAnIzRiNTU2MycsXG4gICAgICBoZWFkaW5nQ29sb3I6ICcjMTExODI3JyxcbiAgICAgIGJrZ1ByZTogJyNlZGYyZjQnLFxuICAgICAgY29sb3JQcmU6ICcjZWRmMmY0JyxcbiAgICAgIGJrZ1Njcm9sbGJhcjogJyMzYTUwNmInLFxuICAgICAgYmtnQ29udGVudDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgd2hpdGU6ICcjRkZGRkZGJ1xuICAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IGRhcmtUaGVtZSA9IHtcbiAgIGNvbG9yczoge1xuICAgICAgcHJpbWFyeTogJyMyZWM0YjYnLFxuICAgICAgcHJpbWFyeUhvdmVyOiAnIzI5QjBBMycsXG4gICAgICBzZWNvbmRhcnk6ICcjM2E1MDZiJyxcbiAgICAgIGRhcms6ICcjMGIxMzJiJyxcbiAgICAgIGJvcmRlcjogJyMxYjI2MmMnLFxuICAgICAgcmVkOiAnI2U3MWQzNicsXG4gICAgICBiYWNrZ3JvdW5kOiAnIzFjMjEyOCcsXG4gICAgICB0ZXh0Q29sb3I6ICcjZWRmMmY0JyxcbiAgICAgIGhlYWRpbmdDb2xvcjogJyNlZGYyZjQnLFxuICAgICAgYmtnUHJlOiAnIzNhNTA2YicsXG4gICAgICBjb2xvclByZTogJyNlZGYyZjQnLFxuICAgICAgYmtnU2Nyb2xsYmFyOiAnIzNhNTA2YicsXG4gICAgICBia2dDb250ZW50OiBcInRyYW5zcGFyZW50XCIsXG4gICAgICB3aGl0ZTogJyNGRkZGRkYnXG4gICB9LFxufVxuXG5leHBvcnQgY29uc3QgU2Nyb2xsQmFyID0gY3NzYFxuICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogMC42MjVyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci10b3A6IDAuNjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMC42MjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICB9XG5cbiAgIDo6LXdlYmtpdC1zY3JvbGxiYXI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgIH1cblxuICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ia2dTY3JvbGxiYXJ9O1xuICAgICAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgbWluLWhlaWdodDogMC42MjVyZW07XG4gICB9XG5cbiAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6dmVydGljYWw6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJrZ1Njcm9sbGJhcn07XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gICB9XG4gICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJrZ1Njcm9sbGJhcn07XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gICAgICB3aWR0aDogMC42MjVyZW07XG4gICB9XG5cbiAgIC5ob3Jpem9udGFsLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xuICAgICAgd2lkdGg6IDAuNDM3NXJlbTtcbiAgIH1cblxuICAgLmhvcml6b250YWwtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhcjpob3Jpem9udGFsIHtcbiAgICAgIGhlaWdodDogMC40Mzc1cmVtO1xuICAgfVxuXG4gICAuaG9yaXpvbnRhbC1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJrZ1Njcm9sbGJhcn07XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjQzNzVyZW07XG4gICB9XG5cbiAgIC5ob3Jpem9udGFsLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgICAgIHBhZGRpbmc6IDAuMDYyNXJlbTtcbiAgIH1cblxuICAgLmhvcml6b250YWwtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ia2dTY3JvbGxiYXJ9O1xuICAgfVxuYFxuXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcblxuICAgKntcbiAgICAgIG1hcmdpbjowO1xuICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgJHtTY3JvbGxCYXJ9O1xuICAgICAgb3V0bGluZTpub25lO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgIH1cbiAgIGh0bWwsIGJvZHkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICAgfVxuXG4gICAgaDF7XG4gICAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5oZWFkaW5nQ29sb3J9O1xuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgLy9tYXJnaW4tdG9wOiAxLjZlbTtcbiAgICAgLy8gbWFyZ2luLWJvdHRvbTogLjhlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICBzY3JvbGwtbWFyZ2luLXRvcDogMS42ZW07XG4gICAgfVxuXG4gICAgaDJ7XG4gICAgICBmb250LXNpemU6MS40Mjg1NzE0ZW07XG4gICAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5oZWFkaW5nQ29sb3J9O1xuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgIG1hcmdpbi10b3A6IDEuNmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLjhlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICBzY3JvbGwtbWFyZ2luLXRvcDogMS42ZW07XG4gICAgfVxuXG4gICAgaDN7XG4gICAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5oZWFkaW5nQ29sb3J9O1xuICAgICAgZm9udC1zaXplOiAxLjI4NTcxNDNlbTtcbiAgICAgIG1hcmdpbi10b3A6IDEuNTU1NTU1NmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLjQ0NDQ0NDRlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU1NTU1NTY7XG4gICAgICBzY3JvbGwtbWFyZ2luLXRvcDogMS41NTU1NTU2ZW07XG4gICAgfVxuXG4gICAgaDR7XG4gICAgICBmb250LXNpemU6MXJlbTtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmhlYWRpbmdDb2xvcn07XG4gICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgbWFyZ2luLXRvcDogMS42ZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAuOGVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIHNjcm9sbC1tYXJnaW4tdG9wOiAxLjZlbTtcbiAgICB9XG5cbiAgIGF7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnNlY29uZGFyeX07XG4gICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XG4gICAgICAmOmhvdmVye1xuICAgICAgICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICB9XG4gICB9XG5cbiAgIHB7XG4gICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjcxNDI4NTc7XG4gICAgICBzY3JvbGwtbWFyZ2luLXRvcDogMS42ZW07XG5cbiAgICAgIGNvZGV7XG4gICAgICAgICBkaXNwbGF5OmlubGluZTtcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmtnUHJlfTtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6LjNyZW07XG4gICAgICAgICBmb250LXNpemU6Ljg1cmVtO1xuICAgICAgICAgZm9udC1mYW1pbHk6TW9ub3NwYWNlO1xuICAgICAgICAgcGFkZGluZzogMC4xMjVyZW0gMC4yNXJlbTtcbiAgICAgICAgIGRpc3BsYXk6aW5saW5lO1xuICAgICAgICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgICAgIH1cbiAgICAgIHN0cm9uZ3tcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgfVxuXG4gICBzdHJvbmd7XG4gICAgIGZvbnQtd2VpZ2h0OjUwMDtcbiAgIH1cblxuICAgbGluZS1oZWlnaHQsIHVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgIH1cblxuXG4gICB1bHtcbiAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgc2Nyb2xsLW1hcmdpbi10b3A6IDEuNmVtO1xuICAgfVxuXG4gICBsaXtcbiAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgc2Nyb2xsLW1hcmdpbi10b3A6IDEuNmVtO1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG4gICB9XG5cbiAgIHRhYmxle1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4xODhyZW0gMC4zNzVyZW0gcmdiYSgwLDAsMCwwLjE2KSwgMCAwLjE4OHJlbSAwLjM3NXJlbSByZ2JhKDAsMCwwLDAuMjMpO1xuICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XG5cbiAgIHRkLCB0aCB7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtIDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtIDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgfVxuXG4gICB0aGVhZCB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4wNjNyZW0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYm9yZGVyfTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICB9XG5cbiAgIHRib2R5IHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4wNjNyZW0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYm9yZGVyfTtcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiByZWQ7XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206bm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXHR9XG4gICB9XG5cbiAgIGJsb2NrcXVvdGV7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ib3JkZXJ9O1xuICAgICAgcGFkZGluZzogMXB4IDAgMXB4IDE1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgICAgZm9udC1zdHlsZTppdGFsaWM7XG4gICAgICAmIHB7XG4gICAgICAgICBtYXJnaW4tdG9wOjEycHg7XG4gICAgICAgICBtYXJnaW4tYm90dG9tOjEycHg7XG4gICAgICB9XG4gICB9XG5gXG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUxheW91dEVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0eWxlc0NvbnRleHQsIFRoZW1lQ29udGV4dCB9IGZyb20gXCIuL3N0eWxlcy5jb250ZXh0XCI7XG5pbXBvcnQgeyByZW1vdmVUcmFpbGluZ1NsYXNoIH0gZnJvbSBcIi4vdXRpbHMvbWlzY1wiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcInVzZUZvcm1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJ1c2VGb3JtIHByb3ZpZGVzIGEgZWFzeSB3YXkgdG8gY3JlYXRlIGZvcm1zLlwiLFxuICAgIHZpZXdwb3J0OiAnd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSx2aWV3cG9ydC1maXQ9Y292ZXInLFxuICAgIGNoYXJTZXQ6ICd1dGYtOCcsXG4gICAga2V5d29yZHM6ICd1c2VGb3JtLCBmb3JtLCByZWFjdCwgaG9va3MsIGNvbnRleHQsIGNvbnRleHQgYXBpLCBjb250ZXh0IGFwaSB1c2VGb3JtLCB1c2Vmb3JtLCB1c2UtZm9ybSwgZm9ybXMsIGlucHV0JyxcbiAgICB0aGVtZUNvbG9yOiAnIzJlYzRiNicsXG4gICAgb3JpZ2luOiAnaHR0cHM6Ly91c2Vmb3JtLm9yZycsXG4gICAgaW1hZ2U6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdXNlRm9ybS91c2VGb3JtL21haW4vaW1nL2xvZ28zLnBuZycsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiBbXG4gIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcIiB9LFxuICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiIH1cbl07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpXG5cbiAgcmV0dXJuIHtcbiAgICB1cmxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3Qgc3R5bGVzID0gdXNlQ29udGV4dChTdHlsZXNDb250ZXh0KTtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRoZW1lKHNlbGVjdGVkVGhlbWU6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBzZXRUaGVtZShzZWxlY3RlZFRoZW1lKVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgc2VsZWN0ZWRUaGVtZSlcbiAgICB9XG4gIH1cblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgY29uc3QgY3VycmVudFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJylcbiAgICAgIGhhbmRsZVRoZW1lKGN1cnJlbnRUaGVtZSB8fCAnbGlnaHQnKVxuICAgIH1cblxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwiNExQQy1CcU01aldMTFlZRHpKNzQwVlNmOEFIQ0Z2Z25lREtlTTJkMkIza1wiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiY2Fub25pY2FsXCJcbiAgICAgICAgICBocmVmPXtyZW1vdmVUcmFpbGluZ1NsYXNoKGRhdGEudXJsKX1cbiAgICAgICAgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICAgIHtzdHlsZXN9XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0aGVtZSwgc2V0VGhlbWU6IGhhbmRsZVRoZW1lIH19PlxuICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5VcmwocmVxdWVzdDogUmVxdWVzdCkge1xuICAgY29uc3QgaG9zdCA9XG4gICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoJ1gtRm9yd2FyZGVkLUhvc3QnKSA/PyByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdob3N0JylcbiAgIGlmICghaG9zdCkge1xuICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBkZXRlcm1pbmUgZG9tYWluIFVSTC4nKVxuICAgfVxuICAgY29uc3QgcHJvdG9jb2wgPSBob3N0LmluY2x1ZGVzKCdsb2NhbGhvc3QnKSA/ICdodHRwJyA6ICdodHRwcydcblxuICAgcmV0dXJuIGAke3Byb3RvY29sfTovLyR7aG9zdH1gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUcmFpbGluZ1NsYXNoKHM6IHN0cmluZykge1xuICAgcmV0dXJuIHMuZW5kc1dpdGgoJy8nKSA/IHMuc2xpY2UoMCwgLTEpIDogc1xuIH1cblxuIGV4cG9ydCBmdW5jdGlvbiB0eXBlZEJvb2xlYW48VD4oXG4gICB2YWx1ZTogVCxcbiApOiB2YWx1ZSBpcyBFeGNsdWRlPFQsICcnIHwgMCB8IGZhbHNlIHwgbnVsbCB8IHVuZGVmaW5lZD4ge1xuICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gfSIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHdpdGhIb21lIGZyb20gXCJ+L2hvY3Mvd2l0aEhvbWVcIjtcbmltcG9ydCBJZnJhbWUgZnJvbSAncmVhY3QtaWZyYW1lJ1xuXG5cblxuY29uc3QgSGVybyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOjEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OnN0YXJ0O1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcblxuXG5cbiAgaDF7XG4gICAgZm9udC1zaXplOjNlbTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gIH1cblxuICBwe1xuICAgIGZvbnQtc2l6ZToxLjZlbTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gIH1cblxuICBkaXZ7XG5cbiAgICBwYWRkaW5nOjE1cHg7XG5cbiAgICAuYnRue1xuICAgICAgYm9yZGVyOjFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgICBmb250LXdlaWdodDo2MDA7XG4gICAgICBmb250LXNpemU6MS4zZW07XG4gICAgICBwYWRkaW5nOjEwcHggMzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICB0cmFuc2l0aW9uOmVhc2UgMzAwbXM7XG4gICAgICBtYXJnaW46NXB4O1xuICBcbiAgICAgICY6aG92ZXJ7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5kb2NzLWJ0bntcbiAgICAgIGJvcmRlcjoxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgICAgZm9udC1zaXplOjEuM2VtO1xuICAgICAgcGFkZGluZzoxMHB4IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICAgIHRyYW5zaXRpb246ZWFzZSAzMDBtcztcbiAgICAgIG1hcmdpbjoyMHB4O1xuICBcbiAgICAgICY6aG92ZXJ7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OmdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLGF1dG8pOyBcbiAgY29sdW1uLWdhcDogMTBweDtcbiAgcm93LWdhcDoxMHB4O1xuICB3aWR0aDoxMDAlO1xuICBtYXgtd2lkdGg6MTIwMHB4O1xuICBtYXJnaW46MCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICBwYWRkaW5nOjIwcHg7XG4gIFxuICAmIGRpdntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OnN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgcGFkZGluZzoyMHB4O1xuICAgICYgaDEsIHB7XG4gICAgfVxuXG4gICAgJiBpbWd7XG4gICAgICB3aWR0aDoyMCU7XG4gICAgICBoZWlnaHQ6YXV0bztcbiAgICB9XG4gIH1cblxuYFxuXG5jb25zdCBDb2RlU2FuZEJveCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOjEwMCU7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOjEwMHB4O1xuXG4gIGgxe1xuICAgIGZvbnQtc2l6ZTozZW07XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XG4gICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gIH1cblxuICBkaXZ7XG4gICAgd2lkdGg6MTA0MHB4O1xuICAgIHBhZGRpbmc6MnB4O1xuICAgIC5zYW5kYm94e1xuICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOjhweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcbiAgICB9XG4gIH1cbmBcblxuXG5mdW5jdGlvbiBJbmRleCgpIHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgPlxuICAgICAgPEhlcm8+XG4gICAgICAgIDxoMT5Vc2UgRm9ybTwvaDE+XG4gICAgICAgIDxwPlVzZSBGb3JtIHByb3ZpZGVzIHlvdSBhIHNpbXBsZSB3YXkgdG8gY3JlYXRlIGZvcm1zIHdpdGggUmVhY3Q8L3A+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiZG9jcy1idG5cIiB0bz17Jy9kb2NzJ30+UmVhZCBkb2NzPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0blwiIHRvPXsnL2RvY3MvcXVpY2stc3RhcnQnfT5RdWljayBzdGFydDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDb2RlU2FuZEJveD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPElmcmFtZVxuICAgICAgICAgICAgICB1cmw9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL3VzZWZvcm0tZm9ya2VkLW9vanVxP2ZvbnRzaXplPTE0JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjY1MHB4XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2FuZGJveFwiXG4gICAgICAgICAgICAgIGlkPVwibXlJZFwiXG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2RlU2FuZEJveD5cbiAgICAgIDwvSGVybz5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5FYXN5PC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+TGVzcyBjb2RlLiA8L3N0cm9uZz5cbiAgICAgICAgICAgIFVzZUZvcm0gaXMgdGhlIGVhc2llc3Qgd2F5IHRvIGNyZWF0ZSBmb3JtcyB3aXRoIFJlYWN0LiBDcmVhdGUgYSBmb3JtIGFuZCB1c2UgaXQgd2hlcmV2ZXIgeW91IHdhbnQsIGRvbid0IHdvcnJ5IHdpdGggUmVhY3QgQ29udGV4dCwgb3IgUmVkdXguIFlvdSBjYW4gc2hhcmUgeW91ciBmb3JtIHdpdGggb3RoZXIgY29tcG9uZW50cyBqdXN0IGJ5IHVzaW5nIHRoZSBob29rIGNyZWF0ZWQgYnkgY3JlYXRlRm9ybSBmdW5jdGlvbi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5GbGV4aWJsZTwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPkNyZWF0ZSBhIGZvcm0gYW4gdXNlIGFzIG9uU3VibWl0LCBvbkNoYW5nZSBvciBkZWJvdW5jZWQgbW9kZS4gPC9zdHJvbmc+XG4gICAgICAgICAgICBDcmVhdGUgcG93ZXJmdWwgZm9ybXMgd2l0aCBVc2VGb3JtLiBZb3UgY2FuIGNyZWF0ZSB5b3VyIG93biBmb3JtIHdpdGggeW91ciBvd24gZmllbGRzLCBhbmQgeW91IGNhbiB1c2UgeW91ciBvd24gdmFsaWRhdGlvbiBydWxlcy4gVXNlRm9ybSBhbGxvd3MgeW91IHRvIGNyZWF0ZSBmb3JtLCBhbmQgdXNlIGl0IGFzIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgZm9ybS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5QZXJmb3JtYW5jZTwvaDE+XG4gICAgICAgICAgPHA+PHN0cm9uZz5KdXN0IG9uZSByZW5kZXIuIDwvc3Ryb25nPlxuICAgICAgICAgICAgVGhlcmUgYXJlIG1hbnkgZm9ybSBsaWJyYXJpZXMsIG1vc3Qgb2Ygd2hpY2ggYXJlIGhlYXZ5LCBhbmQgYWxsb3cgeW91IHRvIGNyZWF0ZSBqdXN0IG9uZSBraW5kIG9mIGZvcm0sIGJ1dCB3aXRoIFVzZUZvcm0geW91IGNhbiBmdWxmaWxsIGFuZCBzdWJtaXQgYSBmb3JtIHdpdGgganVzdCBvbmUgcmVuZGVyLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhIb21lKEluZGV4KTsiLCAiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgZGFya1RoZW1lLCBHbG9iYWxTdHlsZSwgbGlnaHRUaGVtZSwgVGhlbWVDb250ZXh0IH0gZnJvbSAnfi9zdHlsZXMuY29udGV4dCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5cbmNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbmBcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJrZ0NvbnRlbnR9O1xuICBtYXJnaW4tdG9wOjYwcHg7XG5gXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuZnVuY3Rpb24gSG9tZUxheW91dCh7IGNoaWxkcmVuIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPE1haW4+XG4gICAgICA8TmF2YmFyIHNldE9wZW49eygpID0+IHsgfX0gLz5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxDb250ZW50PntjaGlsZHJlbn08L0NvbnRlbnQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L01haW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEhvbWUoQ29tcG9uZW50OiBSZWFjdC5KU1hFbGVtZW50Q29uc3RydWN0b3I8YW55Pikge1xuICByZXR1cm4gZnVuY3Rpb24gRG9jc0NvbXBvbmVudChwcm9wczogYW55KSB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpXG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZSA9PT0gJ2xpZ2h0JyA/IGxpZ2h0VGhlbWUgOiBkYXJrVGhlbWV9PlxuICAgICAgICA8SG9tZUxheW91dD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgPC9Ib21lTGF5b3V0PlxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApXG4gIH1cbn0iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBDb250YWluZXIsIEZvb3RlckNvbnRlbnQsIEZvb3RlckluZm9ybWF0aW9uLCBGb290ZXJMb2dvIH0gZnJvbSAnLi9zdHlsZXMnXG5pbXBvcnQgeyBMb2dvIH0gZnJvbSAnLi4vbG9nbydcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ34vY29uZmlnJ1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL2dyZWVuX2xvZ28uc3ZnJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEZvb3RlckNvbnRlbnQ+XG4gICAgICAgIDxGb290ZXJMb2dvPlxuICAgICAgICAgIDxMb2dvPlxuICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD1cImxvZ29cIiBjbGFzc05hbWU9J2xvZ28nIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yIGZvbnQtZXh0cmFib2xkIGhpZGRlbiBtZDppbmxpbmVcIj57Q29uZmlnLnNpdGVOYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8L0xvZ28+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9vdGVyLXRleHRcIj57Q29uZmlnLmZvb3RlclRleHR9PC9zcGFuPlxuICAgICAgICA8L0Zvb3RlckxvZ28+XG4gICAgICAgIDxGb290ZXJJbmZvcm1hdGlvbj5cbiAgICAgICAgICA8aDE+RG9jczwvaDE+XG4gICAgICAgICAgPExpbmsgdG89e2Ake0NvbmZpZy5wYXRofWRvY3MvcXVpY2stc3RhcnRgfT5RdWljayBzdGFydDwvTGluaz5cbiAgICAgICAgICA8TGluayB0bz17YCR7Q29uZmlnLnBhdGh9ZG9jc2B9PkRvY3M8L0xpbms+XG4gICAgICAgIDwvRm9vdGVySW5mb3JtYXRpb24+XG4gICAgICAgIDxGb290ZXJJbmZvcm1hdGlvbj5cbiAgICAgICAgICA8aDE+Q29tbXVuaXR5PC9oMT5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtDb25maWcucmVwb3NpdG9yeX0+R2l0aHViPC9hPlxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2Ake0NvbmZpZy5yZXBvc2l0b3J5fS9pc3N1ZXNgfT5SZXF1ZXN0IGEgZmVhdHVyZTwvYT5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgJHtDb25maWcucmVwb3NpdG9yeX0vaXNzdWVzYH0+UmVwb3J0IGEgYnVnPC9hPlxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2Ake0NvbmZpZy5yZXBvc2l0b3J5fWB9PkxlYXZlIHVzIGEgc3RhcnQ8L2E+XG4gICAgICAgIDwvRm9vdGVySW5mb3JtYXRpb24+XG4gICAgICA8L0Zvb3RlckNvbnRlbnQ+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn0iLCAiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5mb290ZXJgXG4gIGJhY2tncm91bmQ6ICR7KHt0aGVtZX0pPT4gdGhlbWUuY29sb3JzLmRhcmt9O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB3aWR0aDoxMDAlO1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBGb290ZXJDb250ZW50ID0gc3R5bGVkLmRpdmBcbmRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsYXV0byk7IFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xuICByb3ctZ2FwOjEwcHg7XG4gIHdpZHRoOjEwMCU7XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgcGFkZGluZzoyMHB4IDEwcHg7XG4gIG1heC13aWR0aDoxNDQwcHg7XG4gIGF7XG4gICAgY29sb3I6JHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAmOmhvdmVye1xuICAgICAgY29sb3I6JHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMucHJpbWFyeUhvdmVyfTtcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlckluZm9ybWF0aW9uID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6JHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgd2lkdGg6MTAwJTtcbiAgbWFyZ2luLXRvcDoxMHB4O1xuICBwYWRkaW5nOjAgMTVweDtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5gXG5cbmV4cG9ydCBjb25zdCBGb290ZXJMb2dvID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6MTAwJTtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6c3RhcnQ7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICBwYWRkaW5nOjE1cHggMTBweDtcblxuICAuZm9vdGVyLXRleHR7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgY29sb3I6JHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgfVxuYCIsICJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG4gICBkaXNwbGF5OmZsZXg7XG4gICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gICAmIGltZ3tcbiAgICAgIHdpZHRoOjUwcHg7XG4gICAgICBoZWlnaHQ6NTBweDtcbiAgIH1cblxuICAgJiBzcGFue1xuICAgICAgZm9udC1zaXplOjIzcHg7XG4gICAgICBjb2xvcjokeyh7dGhlbWV9KT0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgIH1cbmA7IiwgImV4cG9ydCBjb25zdCBDb25maWc9IHtcbiAgcmVwb3NpdG9yeTogJ2h0dHBzOi8vZ2l0aHViLmNvbS91c2VGb3JtL3VzZUZvcm0nLFxuICBkb2NzUmVwb3NpdG9yeTogJ2h0dHBzOi8vZ2l0aHViLmNvbS91c2VGb3JtL2RvY3MnLFxuICB0d2l0dGVyOiBcImh0dHBzOi8vdHdpdHRlci5jb20vanVjaWFub19iYXJib3NhXCIsXG4gIGJyYW5jaDogJ21haW4nLFxuICBzaXRlTmFtZTogJ1VzZSBGb3JtJyxcbiAgc2l0ZVNsb2dhbjogJ1VzZSBGb3JtIHByb3ZpZGVzIGEgd2F5IHRvIGNyZWF0ZSBjb21wbGV4IGZvcm1zIGVhc2lseS4nLFxuICBwYXRoOiAnLycsXG4gIHRpdGxlU3VmZml4OiAnIFx1MjAxMyB1c2VGb3JtJyxcbiAgbmV4dExpbmtzOiB0cnVlLFxuICBwcmV2TGlua3M6IHRydWUsXG4gIG5hdkxpbmtzOiBbe1xuICAgIGxhYmVsOiAnRG9jcycsXG4gICAgcGF0aDogJy9kb2NzJyxcbiAgfVxuICBdLFxuICBkZWZhdWx0TWVudUNvbGxhcHNlZDogZmFsc2UsXG4gIGZvbnQ6IHRydWUsXG4gIGZvb3RlcjogdHJ1ZSxcbiAgZm9vdGVyVGV4dDogJ01JVCAyMDIyIFx1MDBBOSBVc2UgRm9ybS4nLFxuICBmb290ZXJFZGl0T25HaXRIdWJMaW5rOiB0cnVlLFxufVxuIiwgImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJb0xvZ29HaXRodWIsIElvTG9nb1R3aXR0ZXIsIElvTWRNb29uLCBJb0lvc1N1bm55IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5pbXBvcnQgeyBUaVRoTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBBY3Rpb25CdXR0b25zLCBCdXR0b24sIE1lbnVCdXR0b24sIFdyYXBwZXIsIExpbmtzLCBCdXR0b25MaW5rIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9hc3NldHMvZ3JlZW5fbG9nby5zdmcnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnfi9jb25maWcnO1xuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnfi9zdHlsZXMuY29udGV4dCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IExvZ28gfSBmcm9tICcuLi9sb2dvJztcblxudHlwZSBQcm9wcyA9IHtcbiAgc2V0T3BlbjogKG9wZW46IGJvb2xlYW4pID0+IHZvaWRcbn1cblxuZnVuY3Rpb24gTmF2YmFyKHsgc2V0T3BlbiB9OiBQcm9wcykge1xuXG4gIGNvbnN0IHsgc2V0VGhlbWUsIHRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dClcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRoZW1lKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkVGhlbWUgPSB0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCdcbiAgICBzZXRUaGVtZShzZWxlY3RlZFRoZW1lKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGEgaHJlZj17Q29uZmlnLnBhdGh9PlxuICAgICAgICAgICAgPExvZ28+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPSdsb2dvJyAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yIGZvbnQtZXh0cmFib2xkIGhpZGRlbiBtZDppbmxpbmVcIj57Q29uZmlnLnNpdGVOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvTG9nbz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QWN0aW9uQnV0dG9ucz5cbiAgICAgICAgICA8QnV0dG9uTGluayB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtDb25maWcudHdpdHRlcn0+XG4gICAgICAgICAgICA8SW9Mb2dvVHdpdHRlciAvPlxuICAgICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgICAgICA8QnV0dG9uTGluayB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtDb25maWcucmVwb3NpdG9yeX0+XG4gICAgICAgICAgICA8SW9Mb2dvR2l0aHViIC8+XG4gICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlVGhlbWV9PlxuICAgICAgICAgICAge3RoZW1lID09PSAnbGlnaHQnID8gPElvTWRNb29uIC8+IDogPElvSW9zU3VubnkgLz59XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aG5hbWUgIT09IENvbmZpZy5wYXRoICYmIChcbiAgICAgICAgICAgICAgPE1lbnVCdXR0b24gb25DbGljaz17c2V0T3Blbn0+XG4gICAgICAgICAgICAgICAgPFRpVGhNZW51IC8+XG4gICAgICAgICAgICAgIDwvTWVudUJ1dHRvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIDwvQWN0aW9uQnV0dG9ucz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsICJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5uYXZgXG4gICBkaXNwbGF5OmZsZXg7XG4gICB3aWR0aDoxMDAlO1xuICAgaGVpZ2h0OmF1dG87XG4gICBvdmVyZmxvdzpoaWRkZW47XG4gICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYm9yZGVyfTtcbiAgIHBvc2l0aW9uOmZpeGVkO1xuICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gICB6LWluZGV4OjE7XG4gICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgIGRpc3BsYXk6ZmxleDtcbiAgIHdpZHRoOjEwMCU7XG4gICBoZWlnaHQ6NjBweDtcbiAgIG92ZXJmbG93OmhpZGRlbjtcbiAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgcGFkZGluZzo1cHggMHB4IDVweCAyMHB4O1xuICAgbWF4LXdpZHRoOjE0NDBweDtcbiAgICYgZGl2e1xuICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFjdGlvbkJ1dHRvbnMgPSBzdHlsZWQuZGl2YFxuICAgZGlzcGxheTpmbGV4O1xuICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbiAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgIG1hcmdpbjowIDEwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgYm9yZGVyOm5vbmU7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gICB3aWR0aDo0MHB4O1xuICAgaGVpZ2h0OjQwcHg7XG4gICBvdXRsaW5lOm5vbmU7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgZGlzcGxheTpmbGV4O1xuICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcblxuICAgJiBzdmd7XG4gICAgICBmaWxsOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgICAgd2lkdGg6MjFweDtcbiAgICAgIGhlaWdodDoyMXB4O1xuICAgfVxuXG4gICAmOmhvdmVye1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ib3JkZXJ9O1xuICAgfVxuXG4gICAmICsgYnV0dG9ue1xuICAgICAgbWFyZ2luOjVweDtcbiAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25MaW5rID0gc3R5bGVkLmFgXG4gICBib3JkZXItcmFkaXVzOjUwJTtcbiAgIGJvcmRlcjpub25lO1xuICAgY3Vyc29yOiBwb2ludGVyO1xuICAgd2lkdGg6NDBweDtcbiAgIGhlaWdodDo0MHB4O1xuICAgb3V0bGluZTpub25lO1xuICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgIGRpc3BsYXk6ZmxleDtcbiAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG5cbiAgICYgc3Zne1xuICAgICAgZmlsbDokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICAgIHdpZHRoOjIxcHg7XG4gICAgICBoZWlnaHQ6MjFweDtcbiAgIH1cblxuICAgJjpob3ZlcntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYm9yZGVyfTtcbiAgIH1cblxuICAgJiArIGJ1dHRvbntcbiAgICAgIG1hcmdpbjo1cHg7XG4gICB9XG5gXG5cbmV4cG9ydCBjb25zdCBNZW51QnV0dG9uID0gc3R5bGVkKEJ1dHRvbik8e29uQ2xpY2s6YW55fT5gXG4gICBib3JkZXI6MXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJvcmRlcn07XG5cbiAgIEBtZWRpYSAobWluLXdpZHRoOjk4OXB4KXtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpbmtzID0gc3R5bGVkLmRpdmBcbiAgIGRpc3BsYXk6ZmxleDtcbiAgIGp1c3RpZnktY29udGVudDpzdGFydDtcbiAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgIHdpZHRoOmZpdC1jb250ZW50O1xuICAgcGFkZGluZy1sZWZ0OjQwcHg7XG5cbiAgIGF7XG4gICAgICBwYWRkaW5nOjAgMjBweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuXG4gICAgICAmOmhvdmVye1xuICAgICAgICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICB9XG4gICB9XG5cbiAgIEBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KXtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IE1vYmlsZUxpbmsgPSBzdHlsZWQuZGl2PHtpc09wZW46Ym9vbGVhbn0+YFxuICAgZGlzcGxheTpmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgd2lkdGg6MTAwJTtcbiAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcbiAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgIGJhY2tncm91bmQtY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gICBoZWlnaHQ6JHsoeyBpc09wZW4gfSkgPT4gaXNPcGVuID8gNjAgOiAxMH1weDtcblxuICAgQG1lZGlhIChtaW4td2lkdGg6NjAwcHgpe1xuICAgICAgZGlzcGxheTpub25lO1xuICAgfVxuXG4gICBkaXZ7XG4gICAgICBkaXNwbGF5OiR7KHsgaXNPcGVuIH0pID0+IGlzT3BlbiA/ICdmbGV4JyA6ICdub25lJ307XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OnN0YXJ0O1xuICAgICAgcGFkZGluZzogMCAyMHB4IDAgMjJweDtcblxuICAgICAgYXtcbiAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgcGFkZGluZy1yaWdodDoyMHB4O1xuICAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgICAgICAgXG4gICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGJ1dHRvbntcbiAgICAgIGJvdHRvbTowO1xuICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOm5vbmU7XG4gICB9XG5gIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHdpdGhEb2NzIGZyb20gXCJ+L2hvY3Mvd2l0aERvY3NcIjtcblxuZnVuY3Rpb24gRG9jcygpIHtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEb2NzKERvY3MpOyIsICJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuaW1wb3J0IENvbnRlbnRGb290ZXIgZnJvbSBcIn4vY29tcG9uZW50cy9jb250ZW50Rm9vdGVyXCJcbmltcG9ydCBGb290ZXIgZnJvbSBcIn4vY29tcG9uZW50cy9mb290ZXJcIlxuaW1wb3J0IE5hdmJhciBmcm9tIFwifi9jb21wb25lbnRzL25hdmJhclwiXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwifi9jb21wb25lbnRzL3NpZGViYXJcIlxuaW1wb3J0IHsgZGFya1RoZW1lLCBHbG9iYWxTdHlsZSwgbGlnaHRUaGVtZSwgVGhlbWVDb250ZXh0IH0gZnJvbSBcIn4vc3R5bGVzLmNvbnRleHRcIlxuXG5cbmNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICB3aWR0aDogMTAwJTtcblxuICBpbWd7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICBib3gtc2hhZG93OiAwIDAuMTg4cmVtIDAuMzc1cmVtIHJnYmEoMCwwLDAsMC4xNiksIDAgMC4xODhyZW0gMC4zNzVyZW0gcmdiYSgwLDAsMCwwLjIzKTtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICB9XG5gXG5cbmNvbnN0IE1haW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6MTQ0MHB4O1xuICB3aWR0aDoxMDAlO1xuYFxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbmBcblxuY29uc3QgTWFpbkNvbnRlbnQgPSBzdHlsZWQuZGl2PHsgb3BlbjogYm9vbGVhbiB9PmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6ICR7KHsgb3BlbiB9KSA9PiAoIW9wZW4gPyAnMTAwJScgOiAnY2FsYygxMDAlIC0gMjYwcHgpJyl9O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxlZnQ6ICR7KHsgb3BlbiB9KSA9PiAob3BlbiA/ICcyNjBweCcgOiAnMCcpfTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG5gXG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIG1hcmdpbi10b3A6NDBweDtcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJrZ0NvbnRlbnR9O1xuYFxuXG5mdW5jdGlvbiBEb2NzTGF5b3V0KHsgY2hpbGRyZW4gfTogYW55KSB7XG4gICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuXG4gICBjb25zdCByZXNpemUgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93Py5pbm5lcldpZHRoID4gOTg5KSB7XG4gICAgICAgICBzZXRPcGVuKHRydWUpXG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdz8uaW5uZXJXaWR0aCA8PSA5ODkpIHtcbiAgICAgICAgIHNldE9wZW4oZmFsc2UpXG4gICAgICB9XG4gICB9XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplKVxuICAgICAgcmVzaXplKClcbiAgIH0sIFtdKVxuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgcmVzaXplKClcbiAgIH0sIFtwYXRobmFtZV0pXG5cblxuICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICA8TmF2YmFyIHNldE9wZW49eygpID0+IHNldE9wZW4oIW9wZW4pfSAvPlxuICAgICAgICAgPE1haW4+XG4gICAgICAgICAgICA8TWFpbkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8U2lkZWJhciBvcGVuPXtvcGVufSAvPlxuICAgICAgICAgICAgICAgICAgPE1haW5Db250ZW50IG9wZW49e29wZW59PlxuICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudEZvb3RlciAvPlxuICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgICAgICAgPC9NYWluQ29udGVudD5cbiAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9NYWluQ29udGFpbmVyPlxuICAgICAgICAgPC9NYWluPlxuICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC8+XG4gICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aERvY3MoQ29tcG9uZW50OiBSZWFjdC5KU1hFbGVtZW50Q29uc3RydWN0b3I8YW55Pikge1xuICAgcmV0dXJuIGZ1bmN0aW9uIERvY3NDb21wb25lbnQocHJvcHM6IGFueSkge1xuICAgICAgY29uc3QgeyB0aGVtZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpXG4gICAgICByZXR1cm4gKFxuICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lID09PSAnbGlnaHQnID8gbGlnaHRUaGVtZSA6IGRhcmtUaGVtZX0+XG4gICAgICAgICAgICA8RG9jc0xheW91dD5cbiAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgPC9Eb2NzTGF5b3V0PlxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICApXG4gICB9XG59IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IE1kRWRpdCB9IGZyb20gJ3JlYWN0LWljb25zL21kJ1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnfi9jb25maWcnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZW1peCc7XG5jb25zdCBmaXhQYXRoID0gKHBhdGg6IHN0cmluZykgPT4ge1xuICBjb25zdCBwYXRoV2l0aEZyb250U2xhc2ggPSBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggOiBgLyR7cGF0aH1gXG4gIGNvbnN0IHBhdGhXaXRoQmFja1NsYXNoID0gcGF0aFdpdGhGcm9udFNsYXNoLmVuZHNXaXRoKCcvJylcbiAgICA/IHBhdGhXaXRoRnJvbnRTbGFzaFxuICAgIDogYCR7cGF0aFdpdGhGcm9udFNsYXNofS9gXG5cbiAgcmV0dXJuIHBhdGhXaXRoQmFja1NsYXNoXG59XG5cbmNvbnN0IGNyZWF0ZUVkaXRVcmwgPSAocmVwb3NpdG9yeTogc3RyaW5nLCBicmFuY2g6IHN0cmluZywgcGF0aDogc3RyaW5nLCBmaWxlcGF0aFdpdGhOYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3Qgbm9ybWFsaXplZFBhdGggPSBmaXhQYXRoKHBhdGgpXG4gIHJldHVybiBgJHtyZXBvc2l0b3J5fS90cmVlLyR7YnJhbmNofSR7bm9ybWFsaXplZFBhdGh9c3JjL3BhZ2VzJHtmaWxlcGF0aFdpdGhOYW1lfS5tZHhgXG59XG5cbmNvbnN0IEVkaXRPbkdpdGh1YkxpbmsgPSAoe1xuICByZXBvc2l0b3J5LFxuICBicmFuY2gsXG4gIHBhdGgsXG4gIGZpbGVwYXRoV2l0aE5hbWVcbn06IGFueSkgPT4ge1xuICBjb25zdCBocmVmID0gY3JlYXRlRWRpdFVybChyZXBvc2l0b3J5LCBicmFuY2gsIHBhdGgsIGZpbGVwYXRoV2l0aE5hbWUpXG4gIHJldHVybiAoXG4gICAgPGEgY2xhc3NOYW1lPVwidGV4dC1zbVwiIGhyZWY9e2hyZWZ9IHRhcmdldD1cIl9ibGFua1wiPjxNZEVkaXQgc2l6ZT1cIjEuMnJlbVwiIC8+Jm5ic3A7RWRpdCB0aGlzIHBhZ2Ugb24gR2l0SHViPC9hPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnRGb290ZXIoKSB7XG5cbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuXG4gIHJldHVybiAoXG4gICAgPFMuV3JhcHBlcj5cbiAgICAgIDxFZGl0T25HaXRodWJMaW5rXG4gICAgICAgIHJlcG9zaXRvcnk9e0NvbmZpZy5kb2NzUmVwb3NpdG9yeSB8fCBDb25maWcucmVwb3NpdG9yeX1cbiAgICAgICAgYnJhbmNoPXtDb25maWcuYnJhbmNofVxuICAgICAgICBwYXRoPXtDb25maWcucGF0aH1cbiAgICAgICAgZmlsZXBhdGhXaXRoTmFtZT17cGF0aG5hbWV9XG4gICAgICAvPlxuICAgIDwvUy5XcmFwcGVyPlxuICApXG59IiwgImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgIGRpc3BsYXk6ZmxleDtcbiAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICAgcGFkZGluZyA6IDUwcHggMDtcblxuICAgYXtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XG4gICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAmOmhvdmVye1xuICAgICAgICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICB9XG4gICB9XG5gIiwgImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBHb0NoZXZyb25SaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBBc2lkZSwgSXRlbSwgSXRlbXMsIFN1Ykl0ZW1zLCBTdWJJdGVtIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBsaW5rcyA9IFtcbiAge1xuICAgIGxhYmVsOiAnSW50cm9kdWN0aW9uJyxcbiAgICBsaW5rOiAnJyxcbiAgICBzdWJJdGVtczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ1JlYWRtZScsXG4gICAgICAgIGxpbms6ICcvZG9jcy8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdRdWljayBTdGFydCcsXG4gICAgICAgIGxpbms6ICcvZG9jcy9xdWljay1zdGFydCdcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0hvdyBpdCB3b3JrcycsXG4gICAgbGluazogJycsXG4gICAgc3ViSXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdUaGUgY29uY2VwdCcsXG4gICAgICAgIGxpbms6ICcvZG9jcy9jb25jZXB0J1xuICAgICAgfSxcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0NyZWF0aW5nIGEgZm9ybScsXG4gICAgbGluazogJycsXG4gICAgc3ViSXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdOYXRpdmUgZWxlbWVudHMnLFxuICAgICAgICBsaW5rOiAnL2RvY3MvbmF0aXZlLWVsZW1lbnRzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdDdXN0b20gY29tcG9uZW50cycsXG4gICAgICAgIGxpbms6ICcvZG9jcy9jdXN0b20tY29tcG9uZW50cydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnRm9ybSB2YWxpZGF0aW9uJyxcbiAgICAgICAgbGluazogJy9kb2NzL2Zvcm0tdmFsaWRhdGlvbidcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1VzaW5nIHlvdXIgRm9ybScsXG4gICAgbGluazogJycsXG4gICAgc3ViSXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdBcyBvbkNoYW5nZSBmb3JtJyxcbiAgICAgICAgbGluazogJy9kb2NzL29uY2hhbmdlLWZvcm0nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ0FzIGRlYm91bmNlZCBmb3JtJyxcbiAgICAgICAgbGluazogJy9kb2NzL2RlYm91bmNlZC1mb3JtJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdBcyBvblN1Ym1pdCBmb3JtJyxcbiAgICAgICAgbGluazogJy9kb2NzL29uc3VibWl0LWZvcm0nXG4gICAgICB9LFxuICAgIF1cbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnVHV0b3JpYWxzJyxcbiAgICBsaW5rOiAnJyxcbiAgICBzdWJJdGVtczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0NyZWF0aW5nIEZvcm1zJyxcbiAgICAgICAgbGluazogJy9kb2NzL2NyZWF0aW5nLWZvcm1zJ1xuICAgICAgfSxcbiAgICBdLFxuICB9XG5dXG5cblxuXG5mdW5jdGlvbiBBY3RpdmVMaW5rKHsgaHJlZiwgY2hpbGRyZW4gfTogYW55KSB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpXG5cbiAgY29uc3QgaXNBY3RpdmUgPSB1c2VNZW1vKCgpID0+IHBhdGhuYW1lID09PSBocmVmLCBbcGF0aG5hbWUsIGhyZWZdKVxuXG4gIHJldHVybiAoXG4gICAgPFN1Ykl0ZW0gY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiAnJ30+XG4gICAgICA8R29DaGV2cm9uUmlnaHQgY29sb3I9e2lzQWN0aXZlID8gdGhlbWUuY29sb3JzLnByaW1hcnkgOiAndHJhbnNwYXJlbnQnfSAvPlxuICAgICAgPExpbmsgdG89e2hyZWZ9IGNsYXNzTmFtZT17aXNBY3RpdmUgPyBcImFjdGl2ZVwiIDogJyd9PntjaGlsZHJlbn08L0xpbms+XG4gICAgPC9TdWJJdGVtPlxuICApXG59XG5cblxuZnVuY3Rpb24gU2lkZWJhcih7IG9wZW4sIC4uLnJlc3QgfTogYW55KSB7XG5cbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSB1c2VTdGF0ZSgnJylcblxuXG4gIHJldHVybiAoXG4gICAgPEFzaWRlIG9wZW49e29wZW59PlxuICAgICAgPEl0ZW1zPlxuICAgICAgICB7XG4gICAgICAgICAgbGlua3MubWFwKGxpbmsgPT4gKFxuICAgICAgICAgICAgPEl0ZW0ga2V5PXtsaW5rLmxhYmVsfT5cbiAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoJycpfT5cbiAgICAgICAgICAgICAgICB7bGluay5sYWJlbH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWQgPT09ICcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPFN1Ykl0ZW1zPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxpbmsuc3ViSXRlbXM/Lm1hcChzdWJJdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZUxpbmsga2V5PXtzdWJJdGVtLmxhYmVsfSBocmVmPXtzdWJJdGVtLmxpbmt9PntzdWJJdGVtLmxhYmVsfTwvQWN0aXZlTGluaz5cbiAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L1N1Ykl0ZW1zPlxuICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvSXRlbXM+XG4gICAgPC9Bc2lkZT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjsiLCAiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IEFzaWRlID0gc3R5bGVkLmFzaWRlPHtvcGVuOmJvb2xlYW59PmBcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJvcmRlcn07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDIwcHggMTBweCAxMHB4IDVweDtcbiAgbWFyZ2luLXRvcDo1MHB4O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBvdmVyZmxvdzphdXRvO1xuICB0b3A6NjBweDtcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC41cyBlYXNlLWluLW91dDtcbiAgbWFyZ2luLWxlZnQ6ICR7KHsgb3BlbiB9KSA9PiAob3BlbiA/IDAgOiAnLTI2MHB4Jyl9O1xuICB3aWR0aDogMjYwcHg7XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xuXG4gIHVse1xuICAgIHBhZGRpbmctbGVmdDowcHg7XG4gIH1cbiAgbGl7XG4gICAgbWFyZ2luOjE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEl0ZW1zID0gc3R5bGVkLnVsYFxuXG5gXG5cbmV4cG9ydCBjb25zdCBJdGVtID0gc3R5bGVkLmxpYFxuICBsaXN0LXN0eWxlOm5vbmU7XG4gIGN1cnNvcjpwb2ludGVyO1xuICAmIHNwYW57XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgIGZvbnQtc2l6ZToxLjJlbTtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgU3ViSXRlbXMgPSBzdHlsZWQudWxgXG5cbmBcblxuZXhwb3J0IGNvbnN0IEluZGljYXRvciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgbWFyZ2luOiAzcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBTdWJJdGVtID0gc3R5bGVkLmxpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuXG4gICY6aG92ZXJ7XG4gICAgIGN1cnNvcjpwb2ludGVyO1xuICB9XG5cbiAgJiBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xuICB9XG4gICBcbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJvcmRlcn07XG4gICAgYSB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgfVxuICAgICR7SW5kaWNhdG9yfSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICB9XG4gIH1cbiAgIFxuICAmOmhvdmVyIHtcbiAgICAke0luZGljYXRvcn0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgfVxuICAgIGEge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIH1cbiAgfVxuXG5gXG4iLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjoge1xuICAgIFwidGl0bGVcIjogXCJ1c2VGb3JtIHwgQ3VzdG9tIGNvbXBvbmVudHNcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTGVhcm4gaG93IHRvIHVzZSB1c2VGb3JtIHRvIHdvcmsgd2l0aCBjdXN0b20gY29tcG9uZW50cy5cIlxuICB9XG59O1xuaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZW1vJztcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb2RlYmxvY2snO1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIixcbiAgICBoMzogXCJoM1wiLFxuICAgIHA6IFwicFwiLFxuICAgIHVsOiBcInVsXCIsXG4gICAgbGk6IFwibGlcIixcbiAgICBoMjogXCJoMlwiLFxuICAgIGNvZGU6IFwiY29kZVwiLFxuICAgIGJsb2NrcXVvdGU6IFwiYmxvY2txdW90ZVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxPntcIkN1c3RvbSBjb21wb25lbnRzXCJ9PC9fY29tcG9uZW50cy5oMT57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiV2hhdCBhcmUgY3VzdG9tIGNvbXBvbmVudHM/XCJ9PC9fY29tcG9uZW50cy5oMz57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJVc3VhbGx5LCBjdXN0b20gY29tcG9uZW50cyBhcmUgdXNlZCB0byBjcmVhdGUgYSBiZXR0ZXIgdXNlciBleHBlcmllbmNlLCBmb3IgZXhhbXBsZSB3aGVuIHlvdSB3YW50IHRvIHByb3ZpZGUgYSB3YXkgdG8gdXNlciBzZWxlY3QgYSBjb2xsZWN0aW9uIG9mIGl0ZW1zIG9yIGNvbGxlY3QgYSByYW5nZSBvZiBkYXRlcyBvciB0aW1lcywgeW91IGNhbiByZWFjaCB0aGUgc2FtZSByZXN1bHQgdXNpbmcgbmF0aXZlIGVsZW1lbnRzLCBidXQgd2l0aCBjdXN0b20gY29tcG9uZW50cywgeW91IGNhbiBkbyBpdCBpbiBhIG1vcmUgdXNlci1mcmllbmRseSB3YXkuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkRpZmZlcmVudCBmcm9tIG5hdGl2ZSBlbGVtZW50cywgY3VzdG9tIGNvbXBvbmVudHMgaGF2ZSBhbiBpbnRlcm5hbCBzdGF0ZSBjb250cm9sbGVkIGJ5IHN0YXRlIG1hbmFnZW1lbnQsIHdoaWNoIG1lYW5zIHRoYXQgdGhleSB3aWxsIGJlIHVwZGF0ZWQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcywgaG93ZXZlciwgbmF0aXZlIGVsZW1lbnRzIGFyZSBub3QsIGJlY2F1c2UgeW91IGNhbiB1c2UgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgdG8gdXBkYXRlIGl0cyB2YWx1ZS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIkxldCdzIHNlZSBzb21lIGV4YW1wbGVzIG9mIGN1c3RvbSBjb21wb25lbnRzLlwifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJEYXRlcGlrZXJzIC0gYXJlIGEgY29tcG9uZW50IHRoYXQgYWxsb3dzIHlvdSB0byBzZWxlY3QgYSBkYXRlLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlRpbWVwaWtlcnMgLSBhcmUgYSBjb21wb25lbnQgdGhhdCBhbGxvd3MgeW91IHRvIHNlbGVjdCBhIHRpbWUuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiU2xpZGVycyAtIGFyZSBhIGNvbXBvbmVudCB0aGF0IGFsbG93cyB5b3UgdG8gc2VsZWN0IGEgcmFuZ2Ugb2YgdmFsdWVzLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlNlbGVjdHMsIG11bHRpLXNlbGVjdHMgY29tcG9uZW50cyAtIGFyZSBhIGNvbXBvbmVudCB0aGF0IGFsbG93cyB5b3UgdG8gc2VsZWN0IHNpbmdsZSBvciBtdWx0aXBsZSB2YWx1ZXMuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiRHJhZyBhbmQgZHJvcCBjb21wb25lbnRzIC0gYXJlIGEgY29tcG9uZW50IHRoYXQgYWxsb3dzIHlvdSB0byBkcmFnIGFuZCBkcm9wIGl0ZW1zLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiSG93IHRvIHVzZSBjdXN0b20gY29tcG9uZW50cyB3aXRoIHVzZUZvcm1cIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRvIHVzZSBjdXN0b20gY29tcG9uZW50cyB3aXRoIHVzZUZvcm0sIHlvdSBuZWVkIHRvIHVzZSB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPFdyYXBwZXI+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBjb21wb25lbnQgYW5kIHBhc3MgdGhlIGNvbXBvbmVudCBhcyBhIHByb3AuIEFub3RoZXIgaW1wb3J0YW50IHRoaW5nIGlzIHRoYXQgdGhlIGN1c3RvbSBjb21wb25lbnQgc2hvdWxkIGhhdmUgdGhvc2UgcHJvcHM6IFwifTxfY29tcG9uZW50cy5jb2RlPntcInZhbHVlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wib25DaGFuZ2VcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJvbkJsdXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLiBUaGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widmFsdWVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHByb3AgaXMgdGhlIHZhbHVlIG9mIHRoZSBjb21wb25lbnQsIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJvbkNoYW5nZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgcHJvcCBpcyB0aGUgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIGFuZCB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wib25CbHVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBwcm9wIGlzIHRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBsb3NlcyBmb2N1cy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIldoeSBkbyB3ZSBuZWVkIHRvIHVzZSB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPFdyYXBwZXI+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBjb21wb25lbnQ/XCJ9PC9fY29tcG9uZW50cy5oMz57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wicmVnaXN0ZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZ1bmN0aW9uIGlzIHRoZSBvbmx5IHdheSB0byBjb25uZWN0IGEgZmllbGQgdG8gdGhlIGZvcm0sIGFuZCB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wicmVnaXN0ZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZ1bmN0aW9uIHJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCwgdGhlbiB3ZSBuZWVkIHRvIHVzZSB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPFdyYXBwZXI+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBjb21wb25lbnQgdG8gZ2V0IHRoZSByZWZlcmVuY2UuXFxuVXN1YWxseSwgY3VzdG9tIGNvbXBvbmVudHMgZG9uJ3Qgd29yayB3aXRoIHJlZmVyZW5jZSwgaW4gY29uc2VxdWVuY2UsIHdlIG5lZWQgdG8gdXNlIGEgd3JhcHBlciB0byBjb25uZWN0IHRoZSBjdXN0b20gY29tcG9uZW50IHdpdGggYSByZWZlcmVuY2UgYW5kIGZpbmFsbHkgY29ubmVjdCB0byB0aGUgZm9ybS4gQW5kIHRoZW4geW91IGNhbiB1c2UgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInJlZ2lzdGVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmdW5jdGlvbiB0byByZWdpc3RlciB0aGUgY3VzdG9tIGNvbXBvbmVudC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PGJyIC8+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJUaGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPFdyYXBwZXI+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBjb21wb25lbnQgaXMgYSB3cmFwcGVyIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHdyYXAgdGhlIGN1c3RvbSBjb21wb25lbnQsIGl0IHdpbGwgYmUgdXNlZCB0byBhZGQgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcIm9uQ2hhbmdlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wib25CbHVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBwcm9wcyB0byB0aGUgbmF0aXZlIGV2ZW50IGhhbmRsZXJzLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8V3JhcHBlcj5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGNvbXBvbmVudCBpcyBhbHNvIHVzZWQgdG8gYWRkIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ2YWx1ZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgcHJvcCB0byB0aGUgY3VzdG9tIGNvbXBvbmVudC5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkhvdyB0byB1c2UgY3VzdG9tIGNvbXBvbmVudHMgd2l0aCB1c2VGaWVsZFwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiV2hlbiB3ZSBhcmUgY3JlYXRpbmcgdGhlIGZvcm0gZG9lc24ndCBtYXR0ZXIgaWYgd2UgYXJlIHVzaW5nIG5hdGl2ZSBIVE1MIGVsZW1lbnRzIG9yIG5vdCwgaXQncyBqdXN0IGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgc3RvcmUgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0byBtYW5hZ2UgdGhlIGZvcm0uIFNvIHdlIGRvbid0IG5lZWQgdG8gd29ycnkgYWJvdXQgaXQgZm9yIG5vdy4gV2UganVzdCBuZWVkIHRvIGNyZWF0ZSB0aGUgZm9ybSBzdG9yZSwgYWxzbyB3ZSBjYW4gcHJvdmlkZSB0aGUgaW5pdGlhbCB2YWx1ZXMsIGluaXRpYWwgZXJyb3JzLCBpbml0aWFsIHRvdWNoZWQsIGFuZCB0aGUgdmFsaWRhdGlvbiBzY2hlbWEsIGJ1dCBmb3Igbm93LCB3ZSB3aWxsIGp1c3QgcHJvdmlkZSB0aGUgaW5pdGlhbCB2YWx1ZXMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqYXZhc2NyaXB0XCI+e2BpbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnQHVzZS1mb3JtL2NvcmUnXG5cbmNvbnN0IHVzZVVzZXJGb3JtID0gY3JlYXRlRm9ybSh7XG4gIGluaXRpYWxWYWx1ZXM6IHtcbiAgICBuYW1lczogW11cbiAgfSxcbiB9KVxuYH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJTbywgbm93IHdlIGFyZSBnb2luZyB0byBjcmVhdGUgdGhlIGZvcm0gY29tcG9uZW50IHRoYXQgd2lsbCBiZSB1c2VkIHRvIG1hbmFnZSB0aGUgZm9ybSwgYW5kIHdlIHdpbGwgdXNlIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8V3JhcHBlcj5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGNvbXBvbmVudCB0byB3cmFwIHRoZSBjdXN0b20gY29tcG9uZW50LiBBbGwgdGhlIHByb3BzIHRoYXQgdGhlIGN1c3RvbSBjb21wb25lbnQgd2lsbCByZWNlaXZlIHdpbGwgYmUgdGhlIHByb3BzIHRoYXQgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcIjxXcmFwcGVyPlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgY29tcG9uZW50IHdpbGwgcmVjZWl2ZS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVG8gcmVnaXN0ZXIgdGhlIGN1c3RvbSBjb21wb25lbnQsIHdlIHdpbGwgdXNlIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJyZWdpc3RlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZnVuY3Rpb24sIGFuZCB3ZSB3aWxsIHBhc3MgaXQgdG8gXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPFdyYXBwZXI+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBjb21wb25lbnQgYnkgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInJlZlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgcHJvcC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImpzeFwiPntgXG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSAnQHVzZS1mb3JtL3VzZS1mb3JtJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICdzZWxlY3QtY29tcG9uZW50J1xuXG5mdW50aW9uIFVzZXJGb3JtKCl7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlVXNlckZvcm0oKVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICA8V3JhcHBlciBjb21wb25lbnQ9e1NlbGVjdH0gcmVmPXtyZWdpc3RlcignbmFtZXMnKX0gLz5cbiAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgIHsgdmFsdWU6ICdKb2huJywgbGFiZWw6ICdKb2huJyB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdKYW5lJywgbGFiZWw6ICdKYW5lJyB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdKYWNrJywgbGFiZWw6ICdKYWNrJyB9LFxuICAgICAgICBdfVxuICAgICAgLz5cbiAgICA8L2Zvcm0+XG4gIClcbn1cbmB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmJsb2NrcXVvdGU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlIHdyYXBwZXIgY29tcG9uZW50IHdpbGwgbG9vayBhdCB0aGUgY3VzdG9tIGNvbXBvbmVudCBwcm9wcywgYW5kIGlmIHRoZSBjb21wb25lbnQgZG9lc24ndCBoYXZlIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllcywgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wib25DaGFuZ2VcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJvbkJsdXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widmFsdWVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IuIEluIHRoaXMgY2FzZSwgeW91IHNob3VsZCBidWlsZCB5b3VyIG93biBXcmFwcGVyIGNvbXBvbmVudCwgb3IgeW91IGNhbiBjdXN0b21pemUgdGhlIGNvbXBvbmVudCB0byBhZGQgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcIm9uQ2hhbmdlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wib25CbHVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBwcm9wcy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5ibG9ja3F1b3RlPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiY3VzdG9tLWNvbXBvbmVudHMubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IElmcmFtZSBmcm9tICdyZWFjdC1pZnJhbWUnXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlbWl4J1xuXG5jb25zdCBDb2RlU2FuZEJveCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOjEwMCU7XG4gIHBhZGRpbmc6MTBweCAwO1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuXG5cbiAgaDF7XG4gICAgZm9udC1zaXplOjNlbTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICBwYWRkaW5nOjIwcHg7XG4gIH1cblxuICBkaXZ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBwYWRkaW5nOjJweDtcbiAgICAuc2FuZGJveHtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBib3JkZXI6bm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xuICAgIH1cbiAgfVxuXG4gIGBcblxuZnVuY3Rpb24gRGVtbyhwcm9wczogYW55KSB7XG4gIGNvbnN0IHB1c2ggPSB1c2VOYXZpZ2F0ZSgpXG5cbiAgZnVuY3Rpb24gcmVkaXJlY3QoKSB7XG4gICAgcHVzaCgnL2RvY3MnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29kZVNhbmRCb3g+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SWZyYW1lXG4gICAgICAgICAgdXJsPXtwcm9wcy51cmx9XG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCI3MDBweFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2FuZGJveFwiXG4gICAgICAgICAgaWQ9XCJteUlkXCJcbiAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29kZVNhbmRCb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVtb1xuIiwgImltcG9ydCBIaWdobGlnaHQsIHsgZGVmYXVsdFByb3BzIH0gZnJvbSAncHJpc20tcmVhY3QtcmVuZGVyZXInXG5pbXBvcnQgdGhlbWUgZnJvbSBcInByaXNtLXJlYWN0LXJlbmRlcmVyL3RoZW1lcy9wYWxlbmlnaHRcIjtcbmltcG9ydCB7IE1kQ29udGVudENvcHksIE1kQ2hlY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB1c2VDbGlwYm9hcmQgZnJvbSBcInJlYWN0LXVzZS1jbGlwYm9hcmRcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgfSBmcm9tICcuL3N0eWxlcydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlQmxvY2soeyBjaGlsZHJlbiwgbGFuZ3VhZ2UgfTogYW55KSB7XG4gIGNvbnN0IFtpc0NvcGllZCwgc2V0Q29waWVkXSA9IHVzZUNsaXBib2FyZChjaGlsZHJlbiwgeyBzdWNjZXNzRHVyYXRpb246IDEwMDAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8SGlnaGxpZ2h0IHsuLi5kZWZhdWx0UHJvcHN9IGNvZGU9e2NoaWxkcmVufSBsYW5ndWFnZT17bGFuZ3VhZ2V9IHRoZW1lPXt0aGVtZX0+XG4gICAgICB7KHsgY2xhc3NOYW1lLCBzdHlsZSwgdG9rZW5zLCBnZXRMaW5lUHJvcHMsIGdldFRva2VuUHJvcHMgfSkgPT4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmd1YWdlXCI+e2xhbmd1YWdlfTwvZGl2PlxuICAgICAgICAgICAgICA8Q29weUJ1dHRvbiBvbkNsaWNrPXtzZXRDb3BpZWR9IGlzQ29waWVkPXtpc0NvcGllZH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3Rva2Vucy5tYXAoKGxpbmUsIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiB7Li4uZ2V0TGluZVByb3BzKHsgbGluZSwga2V5OiBpIH0pfT5cbiAgICAgICAgICAgICAgICB7bGluZS5tYXAoKHRva2VuLCBrZXkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5nZXRUb2tlblByb3BzKHsgdG9rZW4sIGtleSB9KX0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICApfVxuICAgIDwvSGlnaGxpZ2h0PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBDb3B5QnV0dG9uID0gKHsgaXNDb3BpZWQsIC4uLnByb3BzIH06IGFueSkgPT4ge1xuICByZXR1cm4gKFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9idXR0b24taGFzLXR5cGVcbiAgICA8YnV0dG9uIHsuLi5wcm9wc30+e2lzQ29waWVkID8gPE1kQ2hlY2sgY29sb3I9XCIjZmZmXCIgLz4gOiA8TWRDb250ZW50Q29weSBjb2xvcj1cIiNmZmZcIiAvPn08L2J1dHRvbj5cbiAgKVxufSIsICJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAxcmVtIDA7XG4gICp7XG4gICAgZm9udC1mYW1pbHk6bW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXBcblxuICAgIH1cbiAgJiBwcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6MXJlbTtcbiAgICBib3gtc2hhZG93OiAwIDAuMTg4cmVtIDAuMzc1cmVtIHJnYmEoMCwwLDAsMC4xNiksIDAgMC4xODhyZW0gMC4zNzVyZW0gcmdiYSgwLDAsMCwwLjIzKTtcbiAgfVxuXG4gICYgLmhlYWRlcntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xuXG4gICYgLmxhbmd1YWdle1xuICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICBib3JkZXI6IDAuMDYzcmVtIHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwLjEyNXJlbSAwLjEyNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6MC4zMTNyZW07XG4gICAgd2lkdGg6bWF4LWNvbnRlbnQ7XG4gICAgcGFkZGluZzowLjI1cmVtO1xuICAgIGRpc3BsYXk6aW5saW5lO1xuICB9XG5cbiAgJiBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIGJvcmRlcjogMC4wNjNyZW0gc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctdG9wOjAuMzEzcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwLjEyNXJlbSAwLjEyNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6MC42MjVyZW07XG5cbiAgICAmOmhvdmVye1xuICAgICAgYm94LXNoYWRvdzogMCAwLjE4OHJlbSAwLjM3NXJlbSByZ2JhKDAsMCwwLDAuMTYpLCAwIDAuMTg4cmVtIDAuMzc1cmVtIHJnYmEoMCwwLDAsMC4yMyk7XG4gICAgfVxuICB9XG4gIH1cbmAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjoge1xuICAgIFwidGl0bGVcIjogXCJ1c2VGb3JtIHwgRm9ybSB2YWxpZGF0aW9uXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxlYXJuIGhvdyB0byB2YWxpZGF0ZSBmb3JtIHZhbHVlcyB1c2luZyB1c2UtZm9ybS5cIlxuICB9XG59O1xuaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZW1vJztcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb2RlYmxvY2snO1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIixcbiAgICBoMjogXCJoMlwiLFxuICAgIHA6IFwicFwiLFxuICAgIHVsOiBcInVsXCIsXG4gICAgbGk6IFwibGlcIixcbiAgICBoMzogXCJoM1wiLFxuICAgIGNvZGU6IFwiY29kZVwiLFxuICAgIGJsb2NrcXVvdGU6IFwiYmxvY2txdW90ZVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxPntcIkZvcm1zIHZhbGlkYXRpb25zXCJ9PC9fY29tcG9uZW50cy5oMT57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiVmFsaWRhdGlvblwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiRXZlcnkgd2Vic2l0ZSB3aXRoIGZvcm1zIHNob3VsZCBoYXZlIHZhbGlkYXRpb25zLCBidXQgd2hhdCBhcmUgZm9ybSB2YWxpZGF0aW9ucz8gR28gdG8gYW55IHBvcHVsYXIgd2Vic2l0ZSB3aXRoIGEgcmVnaXN0cmF0aW9uIGZvcm0sIGFuZCB5b3Ugd2lsbCBiZSBub3RpY2UgdGhhdCB0aGV5IHByb3ZpZGUgZmVlZGJhY2sgd2hlbiB5b3UgZG9uJ3QgZmlsbCBpbiB0aGUgZm9ybSBjb3JyZWN0bHkuIFlvdSdsbCBzZWUgbWVzc2FnZXMgc3VjaCBhczpcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJcXFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFxcXCIgKFlvdSBjYW4ndCBsZWF2ZSB0aGlzIGZpZWxkIGJsYW5rKS5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJcXFwiUGxlYXNlIGVudGVyIHlvdXIgcGhvbmUgbnVtYmVyIGluIHRoZSBmb3JtYXQgeHh4LXh4eHhcXFwiIChBIHNwZWNpZmljIGRhdGEgZm9ybWF0IGlzIHJlcXVpcmVkIGZvciBpdCB0byBiZSBjb25zaWRlcmVkIHZhbGlkKS5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJcXFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzc1xcXCIgKHRoZSBkYXRhIHlvdSBlbnRlcmVkIGlzIG5vdCBpbiB0aGUgcmlnaHQgZm9ybWF0KS5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJcXFwiWW91ciBwYXNzd29yZCBuZWVkcyB0byBiZSBiZXR3ZWVuIDggYW5kIDMwIGNoYXJhY3RlcnMgbG9uZyBhbmQgY29udGFpbiBvbmUgdXBwZXJjYXNlIGxldHRlciwgb25lIHN5bWJvbCwgYW5kIGEgbnVtYmVyLlxcXCIgKEEgdmVyeSBzcGVjaWZpYyBkYXRhIGZvcm1hdCBpcyByZXF1aXJlZCBmb3IgeW91ciBkYXRhKS5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIkJ1dCB3aHkgaXMgdGhpcyBzbyBpbXBvcnRhbnQ/XCJ9PC9fY29tcG9uZW50cy5oMz57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJGb3JtIHZhbGlkYXRpb24gaXMgYSB2ZXJ5IGltcG9ydGFudCBwYXJ0IG9mIHRoZSB3ZWIgZGV2ZWxvcG1lbnQgcHJvY2Vzcy4gSXQncyBhIHdheSB0byBtYWtlIHN1cmUgdGhhdCB0aGUgZGF0YSB5b3UgZW50ZXIgaXMgdmFsaWQuIElmIHlvdSBkb24ndCB2YWxpZGF0ZSB5b3VyIGRhdGEsIGl0J3MgcG9zc2libGUgdGhhdCB5b3VyIGRhdGEgd2lsbCBiZSBsb3N0IG9yIGNvcnJ1cHRlZC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiU2VydmVyLXNpZGUgdmFsaWRhdGlvbnMgYXJlIHRoZSBsYXN0IHBhcnQgb2YgdGhlIHZhbGlkYXRpb24sIHdoaWNoIG1lYW5zLCBldmVuIGlmIHRoZSBkYXRhIGlzIGluIHRoZSBjb3JyZWN0IGZvcm1hdCBpdCdzIHBvc3NpYmxlIHRoYXQgdGhlIGRhdGEgY2FuJ3QgYmUgc3RvcmVkIGJlY2F1c2Ugc29tZSBkYXRhIGNhbid0IGJlIGR1cGxpY2F0ZWQgbGlrZSBlbWFpbCBvciB1c2VybmFtZSwgdGhpcyBraW5kIG9mIHZhbGlkYXRpb24gaXMgZG9uZSBpbiBzZXJ2ZXItc2lkZS4gQ2xpZW50LXNpZGUgdmFsaWRhdGlvbiBkZWFsIHdpdGggaW5jb3JyZWN0IGRhdGEgZm9ybWF0LCBsaWtlIGEgdmFsaWQgZW1haWwsIG9yIGEgdmFsaWQgcGFzc3dvcmQsIHdoaWNoIG1lYW5zLCB0aGF0IGJlZm9yZSB0aGUgZGF0YSBpcyBzdWJtaXR0ZWQgdGhlIGNsaWVudC1zaWRlIHZhbGlkYXRlcyBpZiBpdCBpcyBhIHZhbGlkIGRhdGEgZm9ybWF0LlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiRGVzY3JpcHRpb25cIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoZXJlIGFyZSBzZXZlcmFsIHZhbGlkYXRpb25zIHNvbHV0aW9ucyBhdmFpbGFibGUsIGJ1dCB3aGVuIHVzaW5nIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHRoZSBkZWZhdWx0IHNvbHV0aW9uIGlzIFl1cC4gV2l0aCB5dXAgdGhlIHByb2Nlc3Mgb2YgdmFsaWRhdGlvbnMgaXMgc2ltcGxlIGFuZCBwb3dlcmZ1bC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHJldHVybnMgYW4gZXJyb3Igb2JqZWN0LCB0aGF0IGhhcyBhbGwgZXJyb3JzLCBhbmQgdGhpcyBvYmplY3QgaXMgdXBkYXRlZCB3aGVuZXZlciB0aGUgaW5wdXQgc3RhdGUgaXMgY2hhbmdlZCBvciB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCBpZiB5b3VyIGZvcm0gaGFzIHZhbGlkYXRpb24uXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlVzdWFsbHkgeW91IHdhbm50IHRvIHNob3cgdGhlIGVycm9yIG1lc3NhZ2UganVzdCB3aGVuIGEgZmllbGQgaXMgdG91Y2hlZCwgeW91IGNhbiBkbyB0aGF0IGJ5IHVzaW5nIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ0b3VjaGVkXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBvYmplY3QuIFRob3VjaGVkIG9iamVjdCBpcyBhbiBvYmplY3QgdGhhdCBoYXMgYWxsIHRoZSBmaWVsZHMgdGhhdCBhcmUgdG91Y2hlZCwgYW5kIHRoZSB2YWx1ZSBvZiB0aGUgZmllbGQgaXMgdHJ1ZSBpZiB0aGUgZmllbGQgaXMgdG91Y2hlZC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIlVzYWdlXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJWYWxpZGF0aW9uIGlzIHBlcmZvcm1lZCB3aGVuZXZlciB0aGUgc3RhdGUgaXMgY2hhbmdlZC4gQnkgZGVmYXVsdCwgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlRm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgdXNlcyB0aGUgdW5jb250cm9sbGVkIGlucHV0cyBvcHRpb24sIHRoaXMgbWVhbnMgdGhhdCB0aGUgdmFsdWVzIFx1MjAwQlx1MjAwQmFyZSBhY2Nlc3NpYmxlIHdoZW4gdGhlIG9uU3VibWl0IGV2ZW50IGlzIGRpc3BhdGNoZWQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqc3hcIj57YFxuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gXCJAdXNlLWZvcm0vdXNlLWZvcm1cIjtcbmltcG9ydCAqIGFzIHl1cCBmcm9tIFwieXVwXCI7XG5cbmNvbnN0IHVzZUZvcm0gPSBjcmVhdGVGb3JtKHtcbiAgIGluaXRpYWxWYWx1ZXM6e1xuICAgICAgbmFtZTogXCJKZXNzZVwiLFxuICAgICAgZW1haWw6IFwiamVzc2VAamVzc2UuY29tXCIsXG4gICAgICBwZXRzOiBbXCJmZWxpeFwiXSxcbiAgICAgIGFjY2VwdDogZmFsc2UsXG4gICB9ICAgXG59KVxuXG5jb25zdCB2YWxpZGF0aW9uID0geXVwLm9iamVjdCgpLnNoYXBlKHtcbiAgbmFtZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiKSxcbiAgZW1haWw6IHl1cFxuICAgIC5zdHJpbmcoKVxuICAgIC5lbWFpbChcIlRoaXMgZmllbGQgbXVzdCBiZSBhIHZhbGlkIGUtbWFpbFwiKVxuICAgIC5yZXF1aXJlZChcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIiksXG4gIHBldHM6IHl1cC5hcnJheSh5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIpKSxcbiAgYWNjZXB0OiB5dXAuYm9vbCgpLm9uZU9mKFt0cnVlXSwgXCJGaWVsZCBtdXN0IGJlIGNoZWNrZWRcIiksXG59KTtcblxuZnVuY3Rpb24gRm9ybSgpIHtcbiAgY29uc3QgeyByZWdpc3Rlciwgc3RhdGUsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybSh7bW9kZTonb25DaGFuZ2UnfSk7XG5cbiAgY29uc3Qge2Vycm9ycywgdG91Y2hlZH0gPSBzdGF0ZTtcblxuICBmdW5jdGlvbiBvblN1Ym1pdChkYXRhKSB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKFwibmFtZVwiKX0gLz5cbiAgICAgICAgIDxzcGFuPnt0b3VjaGVkLm5hbWUgJiYgZXJyb3JzLm5hbWV9PC9zcGFuPlxuICAgICAgPC9maWVsZHNldD5cbiAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKFwiZW1haWxcIil9IC8+XG4gICAgICAgICA8c3Bhbj57dG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9PC9zcGFuPlxuICAgICAgPC9maWVsZHNldD5cbiAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKFwicGV0c1wiKX0gLz5cbiAgICAgICAgIDxzcGFuPnt0b3VjaGVkLnBldHMgJiYgZXJyb3JzLnBldHN9PC9zcGFuPlxuICAgICAgPC9maWVsZHNldD5cbiAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKFwicGV0cy4wXCIpfSAvPlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoXCJhY2NlcHRcIil9IC8+XG4gICAgICAgICA8c3Bhbj57dG91Y2hlZC5hY2NlcHQgJiYgZXJyb3JzLmFjY2VwdH08L3NwYW4+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufWB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmJsb2NrcXVvdGU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSWYgeW91IGRvbid0IHdhbnQgdG8gdXNlIFl1cCB2YWxpZGF0aW9uLCB5b3UgY2FuIHVzZSBhbnkgb3RoZXIgdmFsaWRhdGlvbiBsaWJyYXJ5LCBvciB3cml0ZSB5b3VyIG93biB2YWxpZGF0aW9uIGxvZ2ljLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08L19jb21wb25lbnRzLmJsb2NrcXVvdGU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkRlbW9cIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxEZW1vIHVybD1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vcy91c2UtZm9ybS12YWxpZGF0aW9uLWZvcm0tam12OWVcIiAvPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiZm9ybS12YWxpZGF0aW9uLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjoge1xuICAgIFwidGl0bGVcIjogXCJ1c2VGb3JtIHwgTmF0aXZlIEhUTUwgZWxlbWVudHNcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTGVhcm4gaG93IHRvIHVzZSBuYXRpdmUgSFRNTCBlbGVtZW50cyBpbiBvcmRlciB0byBjcmVhdGUgYmV0dGVyIGZvcm1zLlwiXG4gIH1cbn07XG5pbXBvcnQgRGVtbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RlbW8nO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvZGVibG9jayc7XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiLFxuICAgIGgyOiBcImgyXCIsXG4gICAgcDogXCJwXCIsXG4gICAgY29kZTogXCJjb2RlXCIsXG4gICAgaDM6IFwiaDNcIixcbiAgICBibG9ja3F1b3RlOiBcImJsb2NrcXVvdGVcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMT57XCJOYXRpdmUgSFRNTCBlbGVtZW50c1wifTwvX2NvbXBvbmVudHMuaDE+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIldoYXQgaXMgYSBuYXRpdmUgSFRNTCBlbGVtZW50P1wifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiTmF0aXZlIEhUTUwgZWxlbWVudHMgYXJlIGVsZW1lbnRzIHRoYXQgYXJlIGJ1aWx0IGludG8gdGhlIGJyb3dzZXIsIGxpa2UgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPGlucHV0PlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIFwifTxfY29tcG9uZW50cy5jb2RlPntcIjxidXR0b24+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPHNlbGVjdD5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBldGMuIFRoZXNlIGVsZW1lbnRzIGFyZSBkaWZmZXJlbnQgZnJvbSBjdXN0b20gZWxlbWVudHMsIHdoaWNoIGFyZSBlbGVtZW50cyB0aGF0IGFyZSBjcmVhdGVkIGJ5IGRldmVsb3BlcnMuIE5hdGl2ZSBIVE1MIGVsZW1lbnRzIGFyZSBwb3dlcmZ1bCBhbmQgZWFzeSB0byB1c2Ugc2luY2UgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlRm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgdXNlcyBhIHJlZmVyZW5jZSB0byByZWdpc3RlciB0aGUgZmllbGRzLCBuYXRpdmUgZWxlbWVudHMgYXJlIGVhc3kgdG8gcmVnaXN0ZXIsIHRyaWdnZXIgYW5kIGxpc3RlbiB0byBldmVudHMuIEFsbCB0aGF0IHdlIG5lZWQgdG8gZG8gaXMgdG8gdXNlIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJyZWZcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHByb3BlcnR5IHRvIHJlZ2lzdGVyIHRoZSBlbGVtZW50LlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08Q29kZUJsb2NrIGxhbmd1YWdlPVwianN4XCI+e2A8aW5wdXQgcmVmPXtyZWdpc3RlcignZmllbGROYW1lJyl9IC8+XG5gfTwvQ29kZUJsb2NrPntcIlxcblwifTxfY29tcG9uZW50cy5oMz57XCJMZXQncyBjcmVhdGUgYSBmdWxsIGZvcm0gZXhhbXBsZVwifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiV2hlbiB3ZSBhcmUgY3JlYXRpbmcgdGhlIGZvcm0gZG9lc24ndCBtYXR0ZXIgaWYgd2UgYXJlIHVzaW5nIG5hdGl2ZSBIVE1MIGVsZW1lbnRzIG9yIG5vdCwgaXQncyBqdXN0IGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgc3RvcmUgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0byBtYW5hZ2UgdGhlIGZvcm0uIFNvIHdlIGRvbid0IG5lZWQgdG8gd29ycnkgYWJvdXQgaXQgZm9yIG5vdy4gV2UganVzdCBuZWVkIHRvIGNyZWF0ZSB0aGUgZm9ybSBzdG9yZSwgYWxzbyB3ZSBjYW4gcHJvdmlkZSB0aGUgaW5pdGlhbCB2YWx1ZXMsIGluaXRpYWwgZXJyb3JzLCBpbml0aWFsIHRvdWNoZWQsIGFuZCB0aGUgdmFsaWRhdGlvbiBzY2hlbWEsIGJ1dCBmb3Igbm93LCB3ZSB3aWxsIGp1c3QgcHJvdmlkZSB0aGUgaW5pdGlhbCB2YWx1ZXMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqYXZhc2NyaXB0XCI+e2BpbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnQHVzZS1mb3JtL2NvcmUnXG5cbmNvbnN0IHVzZVVzZXJGb3JtID0gY3JlYXRlRm9ybSh7XG4gIGluaXRpYWxWYWx1ZXM6IHtcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIGNvbmZpcm1QYXNzd29yZDogJycsXG4gIH0sXG4gfSlcbmB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSW4gb3JkZXIgdG8gaGF2ZSBhIGZ1bGwgZm9ybSBleGFtcGxlLCB3ZSBuZWVkIHRvIGNyZWF0ZSBhIGZvcm0gY29tcG9uZW50IGFuZCB1c2UgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVVzZXJGb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBob29rLiBJbiB0aGlzIHN0ZXAgd2UgbmVlZCB0byByZWdpc3RlciB0aGUgZmllbGRzLCB3ZSBjYW4gZG8gdGhhdCB1c2luZyB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wicmVnaXN0ZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZ1bmN0aW9uLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuYmxvY2txdW90ZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wicmVnaXN0ZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZ1bmN0aW9uIGlzIGEgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyB0aGUgbmFtZSBvZiB0aGUgZmllbGQgYW5kIHJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQuIFRoZSByZWZlcmVuY2UgaXMgdXNlZCB0byByZWdpc3RlciB0aGUgZWxlbWVudCwgdHJpZ2dlciwgYW5kIGxpc3RlbiB0byBldmVudHMuIElmIHlvdSBhcmUgdXNpbmcgYSBsaWJyYXJ5IGxpa2UgTWF0ZXJpYWwgVUkgb3Igc29tZXRoaW5nIHNpbWlsYXIsIG1ha2Ugc3VyZSB0aGF0IHRoZSBpbnB1dCBjb21wb25lbnQgdXNlIFwifTxfY29tcG9uZW50cy5jb2RlPntcIlJlYWN0LmZvcndhcmRSZWZcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBvdGhlcndpc2UgeW91IHdpbGwgbmVlZCB0byB1c2UgYSBXcmFwcGVyIHRvIHJlZ2lzdGVyIHRoZSBlbGVtZW50LlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08L19jb21wb25lbnRzLmJsb2NrcXVvdGU+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImpzeFwiPntgXG5mdW50aW9uIFVzZXJGb3JtKCl7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlVXNlckZvcm0oKVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcignbmFtZScpfSAvPlxuICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoJ2VtYWlsJyl9IC8+XG4gICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcigncGFzc3dvcmQnKX0gLz5cbiAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKCdjb25maXJtUGFzc3dvcmQnKX0gLz5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuYH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGUgbGFzdCB0aGluZyB3ZSBuZWVkIHRvIGtub3cgaXMgYWJvdXQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiaGFuZGxlU3VibWl0XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgaXQncyBhIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgYW5vdGhlciBmdW5jdGlvbiBhcyBhIHBhcmFtZXRlciwgdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQuIFRoZSBmdW5jdGlvbiByZWNlaXZlcyB0aGUgZGF0YSBvZiB0aGUgZm9ybSBhcyBhIHBhcmFtZXRlciBhbmQgdGhlIHNlY29uZCBwYXJhbWV0ZXIgaXMgdGhlIGFuc3dlciBvZiB0aGUgdmFsaWRhdGlvbiAoaWYgdGhlIGZvcm0gaXMgdmFsaWQgb3Igbm90LCBpdCBkZXBlbmRzIG9uIHRoZSB2YWxpZGF0aW9uIHNjaGVtYSkuXCJ9PC9fY29tcG9uZW50cy5wPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwibmF0aXZlLWVsZW1lbnRzLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjoge1xuICAgIFwidGl0bGVcIjogXCJ1c2VGb3JtIHwgQ3JlYXRlIGZvcm1zIGVhc2lseSB3aXRoIHVzZWZvcm1cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGhpcyB0dXRvcmlhbCB3aWxsIHNob3cgeW91IGhvdyB0byBjcmVhdGUgZm9ybXMgZWFzaWx5IHdpdGggdXNlZm9ybS5cIlxuICB9XG59O1xuaW1wb3J0IENvZGVCbG9jayBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvZGVibG9jayc7XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwOiBcInBcIixcbiAgICBpbWc6IFwiaW1nXCIsXG4gICAgaDE6IFwiaDFcIixcbiAgICB1bDogXCJ1bFwiLFxuICAgIGxpOiBcImxpXCIsXG4gICAgaDI6IFwiaDJcIixcbiAgICBjb2RlOiBcImNvZGVcIixcbiAgICBoMzogXCJoM1wiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLnA+PF9jb21wb25lbnRzLmltZyBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9wcmFjdGljYWxkZXYvaW1hZ2UvZmV0Y2gvcy0tU09ISi1ubjYtLS9jX2ltYWdnYV9zY2FsZSxmX2F1dG8sZmxfcHJvZ3Jlc3NpdmUsaF80MjAscV9hdXRvLHdfMTAwMC9odHRwczovL2Rldi10by11cGxvYWRzLnMzLmFtYXpvbmF3cy5jb20vaS9hMHF0d29vNnh6MDJhdTVwOTU4dy5wbmdcIiBhbHQ9XCJ1c2Vmb3JtLCByZWFjdGpzXCIgLz48L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgxPntcIkNyZWF0ZSBmb3JtcyBlYXNpbHkgd2l0aCB1c2Vmb3JtXCJ9PC9fY29tcG9uZW50cy5oMT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJPbmUgb2YgdGhlIG1vc3QgaW1wb3J0YW50IHN0ZXBzIHdoZW4geW91IGFyZSBkZXZlbG9waW5nIHdlYiBhcHBsaWNhdGlvbnMgaXMgaG93IHRvIHdyaXRlIGFuZCBtYWludGFpbiBzbWFydCBmb3JtcyB3aXRoIGxpdHRsZSBlZmZvcnQuXFxuV2hlbiB5b3UgdGhpbmsgYWJvdXQgUmVhY3RKUyB5b3UgY2FuIGZpbmQgbWFueSBmb3JtIGxpYnJhcnkgb3B0aW9ucyBhbmQgSSBtdXN0IHRvIGFkbWl0IHRoYXQgdGhlcmUgYXJlIGEgbG90IG9mIGdvb2QgZm9ybSBsaWJyYXJpZXMsIHNvIHlvdSBtYXkgdGhpbmsgd2h5IG9uZSBtb3JlP1wifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJVc2VGb3JtIHdhcyBib3JuIGJlY2F1c2UgSSBmb3VuZCBncmVhdCBkaWZmaWN1bHR5IHdoZW4gSSB3YW50ZWQgdG8gYnVpbGQgY29tcGxleCBmb3JtcyB3aXRoIGRpZmZlcmVudCBzdGVwcyBvciBsZXZlbHMgYW5kIHdpdGggbWFueSBmaWVsZHMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIldoZW4gd2UgbmVlZCB0byBidWlsZCBjb21wbGV4IGZvcm1zIHdlIGNhbiBlbmNvdW50ZXIgaXNzdWVzIGxpa2U6XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiQSBsb3Qgb2YgcmVuZGVyaW5nIC0gRXZlcnkgY2hhbmdlIGlzIG1hZGUgaW4gdGhlIGZvcm0gc3RhdGUgaXMgcmVmbGVjdGVkIGFuZCB0aGUgZm9ybSBjb21wb25lbnQgdHJlZSBpcyByZW5kZXJlZCBhZ2FpbiBhbmQgYWdhaW4uXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkEgbG90IG9mIHByb3BlcnRpZXMgLSBXaGVuIHlvdSB1c2Ugc29tZSBsaWJyYXJpZXMgaXQgaXMgbmVjZXNzYXJ5IHRvIHB1dCBtYW55IHByb3BlcnRpZXMgaW4gb25lIGlucHV0LCBjcmVhdGluZyBhIGxvdCBvZiB1bm5lY2Vzc2FyeSBjb2RlLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJKdXN0IG9uZSBhcHByb2FjaCAtIFlvdSBjYW4gdXNlIGNvbnRyb2xsZWQgZm9ybXMgb3IgdW5jb250cm9sbGVkIGZvcm1zIG5ldmVyIGJvdGggdG9nZXRoZXIuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlNoYXJlIHN0YXRlIC0gWW91IHNob3VsZCBzaGFyZSB0aGUgZm9ybSBzdGF0ZSB3aXRoIG1hbnkgb3RoZXIgY29tcG9uZW50cyBsaWtlIGEgc3RlcCBmb3JtIGFuZCBhIGZvcm0gbGlicmFyeSBzaG91bGQgcHJvdmlkZSBpdC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJIb3cgdXNlRm9ybSB3b3Jrc1wifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlIG1vc3QgaW1wb3J0YW50IHRoaW5nIGlzIHRoYXQgdGhlcmUgYXJlIHRocmVlIHdheXMgdG8gdXNlIGl0OlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIllvdSBjYW4gYnVpbGQgYW4gdW5jb250cm9sbGVkIGZvcm0sIGl0J3MgaXMgY2FsbGVkIFwifTxfY29tcG9uZW50cy5jb2RlPntcIm9uU3VibWl0XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBtb2RlLCB0aGlzIGlzIHRoZSBtb3N0IHBlcmZvcm1hdGl2ZSBmb3JtIGJlY2F1c2UgdGhlIGlucHV0IHZhbHVlIGlzIG5vdCBzYXZlZCBpbiB0aGUgY29tcG9uZW50IHN0YXRlIGFuZCBhbGwgY2hhbmdlcyBhcmUgaW50ZWdyYXRlZCB3aXRoIGEgY29tcG9uZW50IHJlZmVyZW5jZSBhbmQgbmF0aXZlIGV2ZW50cy4gSXQgbWVhbnMgeW91IGNhbiBmaWxsIG91dCBhIGZvcm0gYW5kIHN1Ym1pdCBpdCB3aXRoIGp1c3Qgb25lIHJlbmRlci5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiWW91IGNhbiBidWlsZCBhIGNvbnRyb2xsZWQgZm9ybSwgaXQncyBjYWxsZWQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wib25DaGFuZ2VcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIG1vZGUsIHRoaXMgaXMgbm90IHRoZSBtb3N0IHBlcmZvcm1hdGl2ZSB3YXkgdG8gYnVpbGQgYSBmb3JtLCBidXQgaW4gdGhpcyB3YXkgdGhlIHVzZXIgY2FuIGhhdmUgYSBiZXR0ZXIgZXhwZXJpZW5jZS5JdCBjYW4gYmUgc28gZnJ1c3RyYXRpbmcgd2hlbiB5b3UgZmlsbCBpbiBhIGZvcm0gYW5kIGp1c3QgYWZ0ZXIgeW91IHN1Ym1pdCBpdCwgeW91IHJlYWxpemUgdGhhdCBzb21lIGZpZWxkIHZhbHVlcyBhcmUgd3JvbmcuIFdoZW4geW91IHVzZSBhIGNvbnRyb2xsZWQgZm9ybSwgc2hvd3MgdGhlIHVzZXIgaWYgc29tZSB2YWx1ZXMgYXJlIHdyb25nIHdoaWNoIHRoZSB1c2VyIGNhbiBmaXggYmVmb3JlIHN1Ym1pdHRpbmcuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIllvdSBjYW4gdXNlIHRoZSBkZWJvdW5jZSBhcHByb2FjaCB3aGljaCwgaXQncyBjYWxsZWQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiZGVib3VuY2VkXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBtb2RlLCBpbiBteSBvcGluaW9uLCBpcyB0aGUgYmV0dGVyIG9wdGlvbiBiZWNhdXNlIHlvdSBjYW4gaGF2ZSB0aGUgYmVzdCBvZiBib3RoIHdvcmxkcyhKZWFuLUx1YyBQaWNhcmQpLiBUaGlzIGlzIHdoYXkgaXQgaXMgdGhlIGJldHRlciBvcHRpb246XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJcXFwiVGhlIGRlYm91bmNlKCkgZnVuY3Rpb24gZm9yY2VzIGEgZnVuY3Rpb24gdG8gd2FpdCBhIGNlcnRhaW4gYW1vdW50IG9mIHRpbWUgYmVmb3JlIHJ1bm5pbmcgYWdhaW4uIFRoZSBmdW5jdGlvbiBpcyBidWlsdCB0byBsaW1pdCB0aGUgbnVtYmVyIG9mIHRpbWVzIGEgZnVuY3Rpb24gaXMgY2FsbGVkLlxcXCJcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSWYgeW91IGFyZSBpbnRlcmVzdGVkIGluIHRoaXMgbGlicmFyeSxwbGVhc2UgbGVhdmUgYSBzdGFyOiBodHRwczovL2dpdGh1Yi5jb20vdXNlLWZvcm0vdXNlLWZvcm1cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIlNob3cgbWUgdGhlIGNvZGVcIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5oMz57XCJUbyBidWlsZCBhIHNpbXBsZSBmb3JtLlwifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSW4gdGhpcyBmaXJzdCBleGFtcGxlIEkgd2lsbCBzaG93IHlvdSBob3cgeW91IGNhbiBidWlsZCBhIHNpbXBsZSBmb3JtIGFuZCBob3cgeW91IGNhbiBkZWZpbmUgYSBjb250cm9sbGVkLCB1bmNvbnRyb2xsZWQgb3IgZGVib3VuY2UgZm9ybS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImpzeFwiPntgXG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSBcIkB1c2UtZm9ybS91c2UtZm9ybVwiO1xuXG5jb25zdCB1c2VBdXRoRm9ybSA9IGNyZWF0ZUZvcm0oe1xuICBpbml0aWFsVmFsdWVzOntcbiAgbmFtZTogJ0plc3NlJyxcbiAgZW1haWw6ICdqZXNzZUBqZXNzZS5jb20nLFxuICBzY29yZTogMjUsXG59fSk7XG5cbmNvbnN0IHsgcmVnaXN0ZXIsIHN0YXRlOiB7IHZhbHVlcyB9fSA9IHVzZUF1dGhGb3JtKHttb2RlOiAnb25DaGFuZ2UnfSk7XG5cblxuPElucHV0IHBsYWNlaG9sZGVyPVwiTmFtZVwiIHJlZj17cmVnaXN0ZXIoXCJuYW1lXCIpfS8+XG48SW5wdXQgcGxhY2Vob2xkZXI9XCJFLW1haWxcIiB0eXBlPVwiZW1haWxcIiByZWY9e3JlZ2lzdGVyKFwiZW1haWxcIil9Lz5cbjxSYW5nZSByZWY9e3JlZ2lzdGVyKFwic2NvcmVcIil9Lz5cbjxCdXR0b24gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2codmFsdWVzKX0+U3VibWl0PC9CdXR0b24+XG5gfTwvQ29kZUJsb2NrPntcIlxcblwifTxfY29tcG9uZW50cy5wPjxfY29tcG9uZW50cy5jb2RlPntcInVzZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGNhbiBoYXZlIG1hbnkgcHJvcGVydGllcyBhbmQgc29tZSBvZiB0aGVzZSBwcm9wZXJ0aWVzIGFyZTogXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiaXNEZWJvdW5jZWRcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJpc0NvbnRyb2xsZWRcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJCeSBkZWZhdWx0LCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VGb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiB1c2VzIHRoZSB1bmNvbnRyb2xsZWQgYXBwcm9hY2guXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMz57XCJBZGRpbmcgdmFsaWRhdGlvbiB3aXRoIHl1cFwifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiV2hlbiB3b3JraW5nIHdpdGggcmVhbCBhcHBsaWNhdGlvbiB2YWxpZGF0aW9ucyBmb3JtcyBhcmUgdmVyeSBjb21tb24gYmVjYXVzZSB0aGlzIGlzIHRoZSB3YXkgeW91IGNhbiB2ZXJpZnkgaWYgdGhlIGlucHV0J3MgdmFsdWUgaXMgY29ycmVjdCBvciBub3QuIFRoZXJlIGFyZSBzZXZlcmFsIHZhbGlkYXRpb25zIHNvbHV0aW9ucyBhdmFpbGFibGUsIGJ1dCB3aGVuIHVzaW5nIHVzZUZvcm0gdGhlIGRlZmF1bHQgc29sdXRpb24gaXMgWXVwLiBXaXRoIHl1cCB0aGUgcHJvY2VzcyBvZiB2YWxpZGF0aW9uIGlzIHNpbXBsZSBhbmQgcG93ZXJmdWwuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqc3hcIj57YFxuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gXCJAdXNlLWZvcm0vdXNlLWZvcm1cIjtcbmltcG9ydCAqIGFzIHl1cCBmcm9tIFwieXVwXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VQZXJzb25Gb3JtID0gY3JlYXRlRm9ybSh7XG4gIGluaXRpYWxWYWx1ZXM6e1xuICBuYW1lOiAnSmVzc2UnLFxuICBlbWFpbDogJ2plc3NlQGplc3NlLmNvbScsXG4gIHBldHM6IFsnZmVsaXgnLCAnbHVja3knXSxcbiAgYWNjZXB0ZWQ6IGZhbHNlLFxufX0pO1xuXG5cbmNvbnN0IHZhbGlkYXRpb24gPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xuICBuYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIpLFxuICBlbWFpbDogeXVwXG4gICAgLnN0cmluZygpXG4gICAgLmVtYWlsKFwiVGhpcyBmaWVsZCBtdXN0IGJlIGEgdmFsaWQgZS1tYWlsXCIpXG4gICAgLnJlcXVpcmVkKFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiKSxcbiAgcGV0czogeXVwLmFycmF5KHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIikpLFxuICBhY2NlcHQ6IHl1cC5ib29sKCkub25lT2YoW3RydWVdLCBcIkZpZWxkIG11c3QgYmUgY2hlY2tlZFwiKSxcbn0pO1xuXG5mdW5jdGlvbiBDb250cm9sbGVkRm9ybSgpIHtcbiAgY29uc3QgeyByZWdpc3Rlciwgc3RhdGUgfSA9IHVzZVBlcnNvbkZvcm0oe1xuICAgIHZhbGlkYXRpb24sXG4gICAgbW9kZTonb25DaGFuZ2UnXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcihcIm5hbWVcIil9IC8+XG4gICAgICA8c3Bhbj57dG91Y2hlZC5uYW1lICYmIGVycm9ycy5uYW1lfTwvc3Bhbj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiByZWY9e3JlZ2lzdGVyKFwiZW1haWxcIil9IC8+XG4gICAgICA8c3Bhbj57dG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9PC9zcGFuPlxuICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoXCJwZXRzLjBcIil9IC8+XG4gICAgICA8c3Bhbj57dG91Y2hlZC5wZXRzPy5bMF0gJiYgZXJyb3JzLnBldHM/LlswXX08L3NwYW4+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgcmVmPXtyZWdpc3RlcihcImFjY2VwdFwiKX0gLz5cbiAgICAgIDxzcGFuPnt0b3VjaGVkLmFjY2VwdCAmJiBlcnJvcnMuYWNjZXB0fTwvc3Bhbj5cbiAgICA8Lz5cbiAgKTtcbn1cbmB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIlNoYXJpbmcgc3RhdGUgd2l0aCBvdGhlciBjb21wb25lbnRzXCJ9PC9fY29tcG9uZW50cy5oMz57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJXaGVuIHlvdSB3YW50IHRvIHNoYXJlIHRoZSBmb3JtIHN0YXRlIHdpdGggb3RoZXIgY29tcG9uZW50cyB5b3UganVzdCBuZWVkIHRvIHVzZSB0aGUgZm9ybSBjcmVhdGVkIGJlZm9yZS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImpzeFwiPntgXG5pbXBvcnQge3VzZVBlcnNvbkZvcm19IGZyb20gJy4vLi4vdXNlUGVyc29uRm9ybSc7XG5cbmZ1bmN0aW9uIFN0ZXBGb3JtKCkge1xuICBjb25zdCB7IHJlZ2lzdGVyLCBzdGF0ZSB9ID0gdXNlUGVyc29uRm9ybSgpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcihcIm5hbWVcIil9IC8+XG4gICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcihcImVtYWlsXCIpfSAvPlxuICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoXCJwZXRzLjBcIil9IC8+XG4gICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcihcInBldHMuMVwiKX0gLz5cbiAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKFwiYWNjZXB0XCIpfSAvPlxuICAgIDwvPlxuICApO1xufVxuYH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiQ29uY2x1c2lvblwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSSBob3BlIHlvdSBoYXZlIGVuam95ZWQgdGhpcyBwb3N0IGFuZCBoYXZlIGZvdW5kIGl0IGhlbHBmdWwsIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGlzIGEgbmV3IGxpYnJhcnkgdG8gYnVpbGQgZm9ybXMgYW5kIGhhcyBzb21lIGRvY3VtZW50YXRpb24gaW4gRW5nbGlzaC4gSWYgeW91IHdhbnQgdG8gc3RhcnQgd2l0aCBvcGVuIHNvdXJjZSwgdGhpcyByZXBvc2l0b3J5IGNhbiBiZSB5b3VyIGZpcnN0IHN0ZXAuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcImh0dHBzOi8vZ2l0aHViLmNvbS91c2UtZm9ybS91c2UtZm9ybVwifTwvX2NvbXBvbmVudHMucD48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImNyZWF0aW5nLWZvcm1zLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjoge1xuICAgIFwidGl0bGVcIjogXCJ1c2VGb3JtIHwgZGVib3VuY2VkIG1vZGVcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiV2hlbiB5b3UgdXNlIGRlYm91bmNlZCBmb3JtIHRoZSBkZWJvdW5jZSBwYXJhbWV0ZXIgZGVsYXlzIHRoZSB1cGRhdGluZyBvZiB0aGUgc3RhdGUgdW50aWwgdGhlIHVzZXIgaGFzIHN0b3BwZWQgY2hhbmdpbmcgaW5wdXRzIGZvciBhIHByZWRldGVybWluZWQgYW1vdW50IG9mIHRpbWUuXCJcbiAgfVxufTtcbmltcG9ydCBEZW1vIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGVtbyc7XG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29kZWJsb2NrJztcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGgxOiBcImgxXCIsXG4gICAgaDI6IFwiaDJcIixcbiAgICBwOiBcInBcIixcbiAgICBhOiBcImFcIixcbiAgICBjb2RlOiBcImNvZGVcIixcbiAgICBibG9ja3F1b3RlOiBcImJsb2NrcXVvdGVcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMT57XCJEZWJvdW5jZWQgbW9kZVwifTwvX2NvbXBvbmVudHMuaDE+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkludHJvZHVjdGlvblwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiRGVib3VuY2UgZnVuY3Rpb24gZm9yY2VzIGEgZnVuY3Rpb24gdG8gd2FpdCBhIGNlcnRhaW4gYW1vdW50IG9mIHRpbWUgYmVmb3JlIHJ1bm5pbmcgYWdhaW4uIFRoZSBmdW5jdGlvbiBpcyBidWlsdCB0byBsaW1pdCB0aGUgbnVtYmVyIG9mIHRpbWVzIGEgZnVuY3Rpb24gaXMgY2FsbGVkLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGUgZGVib3VuY2UgcGFyYW1ldGVyIGRlbGF5cyB0aGUgdXBkYXRpbmcgb2YgdGhlIHN0YXRlIHVudGlsIHRoZSB1c2VyIGhhcyBzdG9wcGVkIGNoYW5naW5nIGlucHV0cyBmb3IgYSBwcmVkZXRlcm1pbmVkIGFtb3VudCBvZiB0aW1lLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGUgaW5wdXQgdmFsdWUgaXMgc2V0IHRvIHN0YXRlIHZhbHVlcyBhbmQgdGhlbiB1cGRhdGVkIHZpYSBSZWFjdCBldmVudHMuIERlZmluaW5nIGEgZm9ybVx1MjAxOXMgaW5wdXQgdmFsdWUgdmlhIHN0YXRlIGlzIGNvbnNpZGVyZWQgYSBjb250cm9sbGVkIGNvbXBvbmVudC4gRm9yIGNvbnRyb2xsZWQgaW5wdXRzLCB5b3Ugd2lsbCBuZWVkIGEgY29ycmVzcG9uZGluZyBzdGF0ZSBhbmQgdGhlbiBhIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGF0IHN0YXRlIHdpdGggY2hhbmdlcy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9mb3Jtcy5odG1sXCI+e1wiUmVhY3QgRG9jc1wifTwvX2NvbXBvbmVudHMuYT48L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSXQgbWVhbnMgdGhhdCB3aGVuZXZlciBzdGF0ZSBpcyBjaGFuZ2VkIHRoZSBjb21wb25lbnQsIGl0IGlzIHJlbmRlcmVkIGFnYWluLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJJZiB5b3Ugd2FudCB0byB1c2UgdGhpcyBraW5kIG9mIGZvcm0sIHlvdSBuZWVkIG9ubHkgcGFzcyBwcm9wZXJ0eSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJtb2RlOidkZWJvdW5jZWQnXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiQWxzbywgaXQgbWVhbnMgdGhhdCB0aGUgdmFsaWRhdGlvbnMgYXJlIHJ1biBpbiBldmVyeSBzdGF0ZSBjaGFuZ2UsIHByb3ZpZGluZyBiZXR0ZXIgdXNlciBmZWVkYmFjay5cXG5TZWUgbW9yZSBpbiBDb250cm9sbGVkIElucHV0cyB3aXRoIHZhbGlkYXRpb24uXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJVc2FnZVwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+PF9jb21wb25lbnRzLmNvZGU+e1widXNlRm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgcHJvdmlkZXMgYSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJyZWdpc3RlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZnVuY3Rpb24sIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBhbGwgcHJvcGVydGllcyB0byBtYW5hZ2VyIGEgZmllbGQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqc3hcIj57YGltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICdAdXNlLWZvcm0vdXNlLWZvcm0nXG5cbmNvbnN0IHVzZUZvcm0gPSBjcmVhdGVGb3JtKHtcbiAgaW5pdGlhbFZhbHVlczoge1xuICAgIG5hbWU6ICdBbm5hJyxcbiAgICBhZGRyZXNzOiBbXG4gICAgICB7XG4gICAgICAgIHN0cmVldDogJzEyMyBNYWluIFN0JyxcbiAgICAgICAgY2l0eTogJ0FueXRvd24nLFxuICAgICAgfSxcbiAgICBdXG4gIH1cbn0pXG5gfTwvQ29kZUJsb2NrPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlVzZSBkb3Qgbm90YXRpb24gdG8gY3JlYXRlIGFkdmFuY2VkIG9iamVjdHMgb3IgdG8gbWFwIG9iamVjdCB2YWx1ZXMuIFR5cGUgYW4gZW50cnkgbmFtZSBhbmQgdHlwZSBvciBhbiBlbnRyeSBwcm9wZXJ0eSBvYmplY3QuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5ibG9ja3F1b3RlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkRvdCBub3RhdGlvbiBpcyB1c2VkIHRvIGFjY2VzcyBuZXN0ZWQgb2JqZWN0cy4gRm9yIGV4YW1wbGUsIGlmIHlvdSBoYXZlIGFuIG9iamVjdCB3aXRoIGEgbmVzdGVkIG9iamVjdCwgeW91IGNhbiBhY2Nlc3MgdGhlIG5lc3RlZCBvYmplY3QgdXNpbmcgZG90IG5vdGF0aW9uOyBcIn08X2NvbXBvbmVudHMuY29kZT57XCJpbmZvLm5hbWVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLlxcblVzZSBkb3Qgbm90YXRpb24gdG8gYWNjZXNzIG5lc3RlZCBhcnJheXMuIEZvciBleGFtcGxlLCBpZiB5b3VcXG5oYXZlIGFuIG9iamVjdCB3aXRoIGEgbmVzdGVkIGFycmF5LCB5b3UgY2FuIGFjY2VzcyB0aGUgbmVzdGVkIGFycmF5IHVzaW5nIGRvdCBub3RhdGlvbjtcXG5cIn08X2NvbXBvbmVudHMuY29kZT57XCJpbmZvLmFycmF5WzJdXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5ibG9ja3F1b3RlPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqc3hcIj57YFxuICAgZnVuY3Rpb24gRm9ybSgpe1xuICAgIGNvbnN0IHsgcmVnaXN0ZXIgfSA9IHVzZUZvcm0oeyBtb2RlOiAnZGVib3VuY2VkJ30pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0+XG4gICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKCduYW1lJyl9IC8+XG4gICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKCdhZGRyZXNzLnN0cmVldCcpfSAvPlxuICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcignYWRkcmVzcy5jaXR5Jyl9IC8+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICAgfVxuYH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiRGVtb1wifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PERlbW8gdXJsPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC91c2Vmb3JtLWRlYm91bmNlZC1zZG9rdj9mb250c2l6ZT0xNCZhbXA7aGlkZW5hdmlnYXRpb249MSZhbXA7dGhlbWU9ZGFya1wiIC8+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJkZWJvdW5jZWQtZm9ybS5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IHtcbiAgICBcInRpdGxlXCI6IFwidXNlRm9ybSB8IG9uQ2hhbmdlIG1vZGVcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiV2hlbiB1c2luZyBjb250cm9sbGVkIGZvcm1zLCB0aGUgaW5wdXQgdmFsdWUgaXMgc2V0IHRvIHN0YXRlIHZhbHVlcyBhbmQgdGhlbiB1cGRhdGVkIHZpYSBSZWFjdCBldmVudHMuIFJlYWN0IGZvcm0gY29udHJvbGxlZCBpcyB0aGUgbW9zdCBwb3B1bGFyIGFwcm9hY2ggaW4gcmVhY3Rqcy5cIlxuICB9XG59O1xuaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZW1vJztcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb2RlYmxvY2snO1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIixcbiAgICBoMjogXCJoMlwiLFxuICAgIHA6IFwicFwiLFxuICAgIGNvZGU6IFwiY29kZVwiLFxuICAgIGJsb2NrcXVvdGU6IFwiYmxvY2txdW90ZVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxPntcIm9uQ2hhbmdlIG1vZGVcIn08L19jb21wb25lbnRzLmgxPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJEZXNjcmlwdGlvblwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlcmUgYXJlIHR3byB0eXBlcyBvZiBmb3JtIGlucHV0IGluIFJlYWN0LiBXZSBoYXZlIHRoZSB1bmNvbnRyb2xsZWQgaW5wdXQgYW5kIHRoZSBjb250cm9sbGVkIGlucHV0LlxcbldoZW4gdXNpbmcgY29udHJvbGxlZCBmb3JtcywgdGhlIGlucHV0IHZhbHVlIGlzIHNldCB0byBzdGF0ZSB2YWx1ZXMgYW5kIHRoZW4gdXBkYXRlZCB2aWEgUmVhY3QgZXZlbnRzLlxcbkRlZmluaW5nIGEgZm9ybSBpbnB1dCB2YWx1ZSB2aWEgc3RhdGUgaXMgY29uc2lkZXJlZCBhIGNvbnRyb2xsZWQgY29tcG9uZW50LiBGb3IgY29udHJvbGxlZCBpbnB1dHMsIHlvdSB3aWxsIG5lZWQgYSBjb3JyZXNwb25kaW5nIHN0YXRlIGFuZCB0aGVuIGEgZnVuY3Rpb24gdG8gdXBkYXRlIHRoYXQgc3RhdGUgd2l0aCBjaGFuZ2VzLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJDb250cm9sbGVkIGlucHV0cyBhcmUgdGhlIG1vc3QgcG9wdWxhciBpbiB0aGUgcmVhY3QgZWNvc3lzdGVtLCBhcmUgZWFzaWVyIHRvIHdyaXRlIGFuZCB1bmRlcnN0YW5kaW5nLiBCdXQgd2hlbiB5b3UgdGhpbmsgYWJvdXQgcGVyZm9ybWFuY2UgY29udHJvbGxlZCBpbnB1dHMgYXJlIGxlc3MgcG93ZXJmdWwgdGhhbiB1bmNvbnRyb2xsZWQgaW5wdXRzLkV2ZXJ5IHRpbWUgdGhhdCBjb21wb25lbnQgc3RhdGUgaXMgdXBkYXRlZCB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmVkIGFnYWluIGFuZCB0aGlzIGFmZmVjdHMgdGhlIHBlcmZvcm1hbmNlIHJlc3VsdC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIlVzYWdlXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD48X2NvbXBvbmVudHMuY29kZT57XCJ1c2VGb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBwcm92aWRlcyBhIFwifTxfY29tcG9uZW50cy5jb2RlPntcInJlZ2lzdGVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmdW5jdGlvbiwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIGFsbCBwcm9wZXJ0aWVzIHRvIG1hbmFnZXIgYSBmaWVsZC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImpzeFwiPntgXG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnQHVzZS1mb3JtL3VzZS1mb3JtJ1xuXG5jb25zdCB1c2VGb3JtID0gY3JlYXRlRm9ybSh7XG4gIGluaXRpYWxWYWx1ZXM6IHtcbiAgICBuYW1lOiAnQW5uYScsXG4gICAgYWRkcmVzczogW1xuICAgICAge1xuICAgICAgICBzdHJlZXQ6ICcxMjMgTWFpbiBTdCcsXG4gICAgICAgIGNpdHk6ICdBbnl0b3duJyxcbiAgICAgIH0sXG4gICAgXVxuICB9XG59KVxuYH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJVc2UgZG90IG5vdGF0aW9uIHRvIGNyZWF0ZSBhZHZhbmNlZCBvYmplY3RzIG9yIHRvIG1hcCBvYmplY3QgdmFsdWVzLiBUeXBlIGFuIGVudHJ5IG5hbWUgYW5kIHR5cGUgb3IgYW4gZW50cnkgcHJvcGVydHkgb2JqZWN0LlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuYmxvY2txdW90ZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJEb3Qgbm90YXRpb24gaXMgdXNlZCB0byBhY2Nlc3MgbmVzdGVkIG9iamVjdHMuIEZvciBleGFtcGxlLCBpZiB5b3UgaGF2ZSBhbiBvYmplY3Qgd2l0aCBhIG5lc3RlZCBvYmplY3QsIHlvdSBjYW4gYWNjZXNzIHRoZSBuZXN0ZWQgb2JqZWN0IHVzaW5nIGRvdCBub3RhdGlvbjsgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiaW5mby5uYW1lXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIi5cXG5Vc2UgZG90IG5vdGF0aW9uIHRvIGFjY2VzcyBuZXN0ZWQgYXJyYXlzLiBGb3IgZXhhbXBsZSwgaWYgeW91XFxuaGF2ZSBhbiBvYmplY3Qgd2l0aCBhIG5lc3RlZCBhcnJheSwgeW91IGNhbiBhY2Nlc3MgdGhlIG5lc3RlZCBhcnJheSB1c2luZyBkb3Qgbm90YXRpb247XFxuXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiaW5mby5hcnJheVsyXVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTwvX2NvbXBvbmVudHMuYmxvY2txdW90ZT57XCJcXG5cIn08Q29kZUJsb2NrIGxhbmd1YWdlPVwianN4XCI+e2BcbiAgIGZ1bmN0aW9uIEZvcm0oKXtcbiAgICBjb25zdCB7IHJlZ2lzdGVyIH0gPSB1c2VGb3JtKHsgbW9kZTogJ29uQ2hhbmdlJ30pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0+XG4gICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKCduYW1lJyl9IC8+XG4gICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKCdhZGRyZXNzLnN0cmVldCcpfSAvPlxuICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcignYWRkcmVzcy5jaXR5Jyl9IC8+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICAgfVxuYH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiRGVtb1wifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PERlbW8gdXJsPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC91c2Vmb3JtLXF1aWNrLXN0YXJ0LXlwb3h1P2ZvbnRzaXplPTE0JmFtcDtoaWRlbmF2aWdhdGlvbj0xJmFtcDt0aGVtZT1kYXJrXCIgLz48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcIm9uY2hhbmdlLWZvcm0ubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcInVzZUZvcm0gfCBvblN1Ym1pdCBtb2RlXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIlVuY29udHJvbGxlZCBmb3JtcyBhcmUgdGhlIG1vc3QgcGVyZm9ybWFudCB3YXkgdG8gY3JlYXRlIHJlYWN0IGZvcm1zLiBXaXRoIHVuY29udHJvbGxlZCBpbnB1dCB2YWx1ZXMsIHRoZXJlIGlzIG5vIHVwZGF0aW5nIG9yIGNoYW5naW5nIG9mIGFueSBzdGF0ZXMuIFdoYXQgeW91IHN1Ym1pdCBpcyB3aGF0IHlvdSBnZXQuXCJcbiAgfVxufTtcbmltcG9ydCBEZW1vIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGVtbyc7XG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29kZWJsb2NrJztcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGgxOiBcImgxXCIsXG4gICAgaDI6IFwiaDJcIixcbiAgICBwOiBcInBcIixcbiAgICBhOiBcImFcIixcbiAgICBjb2RlOiBcImNvZGVcIixcbiAgICBibG9ja3F1b3RlOiBcImJsb2NrcXVvdGVcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMT57XCJvblN1Ym1pdCBtb2RlXCJ9PC9fY29tcG9uZW50cy5oMT57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiRGVzY3JpcHRpb25cIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoZXJlIGFyZSB0d28gdHlwZXMgb2YgZm9ybSBpbnB1dCBpbiBSZWFjdC4gV2UgaGF2ZSB0aGUgdW5jb250cm9sbGVkIGlucHV0IGFuZCB0aGUgY29udHJvbGxlZCBpbnB1dC4gVW5jb250cm9sbGVkIGlucHV0cyBhcmUgbGlrZSB0cmFkaXRpb25hbCBIVE1MIGZvcm0gaW5wdXRzOlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08Q29kZUJsb2NrIGxhbmd1YWdlPVwiaHRtbFwiPntgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cbmB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiV2l0aCB1bmNvbnRyb2xsZWQgaW5wdXQsIHRoZXJlIGlzIG5vIHVwZGF0aW5nIG9yIGNoYW5naW5nIG9mIGFueSBzdGF0ZXMuIFdoZW4gd2UgdXNlIHVuY29udHJvbGxlZCBpbnB1dCBpcyBuZWNlc3NhcnkgdG8gc2V0IGEgcmVmZXJlbmNlIGluIGlucHV0IGZvciBtYW5pcHVsYXRpbmcgYW5kIHJlY2VpdmVzIGV2ZW50cywgYnV0IHdpdGggdXNlckZvcm0gaXQgaXNuJ3QgbmVjZXNzYXJ5IGJlY2F1c2UgdXNlckZvcm0gbWFrZXMgdGhpcyBmb3IgdXMuXFxuVW5jb250cm9sbGVkIGlucHV0cyBhcmUgdXNlZnVsIHdoZW4gcGVyZm9ybWFuY2UgaXMgZXNzZW50aWFsLiBCdXQgaWYgdGhlIGZvcm1zIHR1cm4gdmVyeSBjb21wbGV4IGRlYm91bmNlIGZvcm1zIGFyZSB0aGUgYmVzdCBvcHRpb24uXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlBzICogWW91IGNhbiB1c2UgdW5jb250cm9sbGVkIGZvcm0gd2l0aCBjdXN0b20gaW5wdXRzIGJ1dCBjdXN0b20gaW5wdXRzIHVzZSBzdGF0ZSBpbiB5b3VyIGludGVybmFsIGxvZ2ljLlxcbklmIHlvdSB3YW50IHRvIHVzZSB1bmNvbnRyb2xsZWQgZm9ybSB3aXRoIGN1c3RvbSBpbnB1dHMgYW5kIG5hdGl2ZSBpbnB1dHMgdGhlIHVuY29udHJvbGxlZCBhcHByb2FjaCBpcyBhcHBsaWVkIG9ubHkgbmF0aXZlIGlucHV0cy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9mb3Jtcy5odG1sXCI+e1wiUmVhY3QgRG9jc1wifTwvX2NvbXBvbmVudHMuYT48L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiQnkgZGVmYXVsdCwgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlRm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgdXNlIHVuY29udHJvbGxlZCBmb3JtLCBpc24ndCBuZWNlc3NhcnkgdG8gcGFzcyBhbnkgdmFsdWUgdG8gdXNlRm9ybSBob29rIGlmIHlvdSB3YW50IHRvIHVzZSB0aGlzIGtpbmQuXFxuQnV0IHdoZW4geW91IHVzZSB0aGlzIGtpbmQgb2YgZm9ybSwgaXQgaXMgbmVjZXNzYXJ5IHRvIHJlYWxpemUgdGhhdCB2YWx1ZXMgYW5kIGV2ZW50cyB2YWxpZGF0aW9uIGFyZSBhdmFpbGFibGUgb25seSB3aGVuIG9uU3VibWl0IGV2ZW50IGlzIGRpc3BhdGNoZWQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIldpdGggdGhpcyBhcHByb2FjaCwgaXQncyBwb3NzaWJsZSB0byBjb21wbGV0ZSBhIGZvcm0gd2l0aG91dCBhbnkgZXh0cmEgcmVuZGVycy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIlVzYWdlXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD48X2NvbXBvbmVudHMuY29kZT57XCJ1c2VGb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBwcm92aWRlcyBhIFwifTxfY29tcG9uZW50cy5jb2RlPntcInJlZ2lzdGVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmdW5jdGlvbiwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIGFsbCBwcm9wZXJ0aWVzIHRvIG1hbmFnZXIgYSBmaWVsZC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImpzeFwiPntgXG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnQHVzZS1mb3JtL3VzZS1mb3JtJ1xuXG5jb25zdCB1c2VGb3JtID0gY3JlYXRlRm9ybSh7XG4gIGluaXRpYWxWYWx1ZXM6IHtcbiAgICBuYW1lOiAnQW5uYScsXG4gICAgYWRkcmVzczogW1xuICAgICAge1xuICAgICAgICBzdHJlZXQ6ICcxMjMgTWFpbiBTdCcsXG4gICAgICAgIGNpdHk6ICdBbnl0b3duJyxcbiAgICAgIH0sXG4gICAgXVxuICB9XG59KVxuYH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJVc2UgZG90IG5vdGF0aW9uIHRvIGNyZWF0ZSBhZHZhbmNlZCBvYmplY3RzIG9yIHRvIG1hcCBvYmplY3QgdmFsdWVzLiBUeXBlIGFuIGVudHJ5IG5hbWUgYW5kIHR5cGUgb3IgYW4gZW50cnkgcHJvcGVydHkgb2JqZWN0LlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuYmxvY2txdW90ZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJEb3Qgbm90YXRpb24gaXMgdXNlZCB0byBhY2Nlc3MgbmVzdGVkIG9iamVjdHMuIEZvciBleGFtcGxlLCBpZiB5b3UgaGF2ZSBhbiBvYmplY3Qgd2l0aCBhIG5lc3RlZCBvYmplY3QsIHlvdSBjYW4gYWNjZXNzIHRoZSBuZXN0ZWQgb2JqZWN0IHVzaW5nIGRvdCBub3RhdGlvbjsgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiaW5mby5uYW1lXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIi5cXG5Vc2UgZG90IG5vdGF0aW9uIHRvIGFjY2VzcyBuZXN0ZWQgYXJyYXlzLiBGb3IgZXhhbXBsZSwgaWYgeW91XFxuaGF2ZSBhbiBvYmplY3Qgd2l0aCBhIG5lc3RlZCBhcnJheSwgeW91IGNhbiBhY2Nlc3MgdGhlIG5lc3RlZCBhcnJheSB1c2luZyBkb3Qgbm90YXRpb247XFxuXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiaW5mby5hcnJheVsyXVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTwvX2NvbXBvbmVudHMuYmxvY2txdW90ZT57XCJcXG5cIn08Q29kZUJsb2NrIGxhbmd1YWdlPVwianN4XCI+e2BpbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSAnQHVzZS1mb3JtL3VzZS1mb3JtJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICdzZWxlY3QtY29tcG9uZW50J1xuXG5mdW50aW9uIFVzZXJGb3JtKCl7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlVXNlckZvcm0oKVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICA8V3JhcHBlciBjb21wb25lbnQ9e1NlbGVjdH0gcmVmPXtyZWdpc3RlcignbmFtZXMnKX0gLz5cbiAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgIHsgdmFsdWU6ICdKb2huJywgbGFiZWw6ICdKb2huJyB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdKYW5lJywgbGFiZWw6ICdKYW5lJyB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdKYWNrJywgbGFiZWw6ICdKYWNrJyB9LFxuICAgICAgICBdfVxuICAgICAgLz5cbiAgICA8L2Zvcm0+XG4gIClcbn1cbmB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkRlbW9cIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxEZW1vIHVybD1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvdXNlZm9ybS1vbnN1Ym1pdC1qdnoxej9mb250c2l6ZT0xNCZhbXA7aGlkZW5hdmlnYXRpb249MSZhbXA7dGhlbWU9ZGFya1wiIC8+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJvbnN1Ym1pdC1mb3JtLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjoge1xuICAgIFwidGl0bGVcIjogXCJ1c2VGb3JtIHwgQ3JlYXRlIEZvcm1cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3JlYXRlIGZvcm0gaXMgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBmb3JtIGFuZCB5b3UgY2FuIHVzZSBpdCBhcyBhIGhvb2suXCJcbiAgfVxufTtcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJjcmVhdGUtZm9ybS5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IHtcbiAgICBcInRpdGxlXCI6IFwidXNlRm9ybSB8IFF1aWNrIFN0YXJ0XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIllvdXIgZmlyc3Qgc3RlcCB0byBjcmVhdGluZyBmb3Jtcy5cIlxuICB9XG59O1xuaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZW1vJztcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb2RlYmxvY2snO1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIixcbiAgICBwOiBcInBcIixcbiAgICBoMjogXCJoMlwiLFxuICAgIGJyOiBcImJyXCIsXG4gICAgaDM6IFwiaDNcIixcbiAgICB1bDogXCJ1bFwiLFxuICAgIGxpOiBcImxpXCIsXG4gICAgY29kZTogXCJjb2RlXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDE+e1wiUXVpY2sgU3RhcnRcIn08L19jb21wb25lbnRzLmgxPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkhleSB0aGVyZSFcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSXQncyByZWFsbHkgZ29vZCB0byBzZWUgeW91IGhlcmUsIG9uIHRoaXMgZmlyc3QgcGFnZSB5b3Ugd2lsbCBzZWUgc29tZSBzdGVwcyB0byBjcmVhdGUgZm9ybXMgZWFzaWx5LlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiRGVzY3JpcHRpb25cIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkZvcm1zIGFyZSBhbiBpbXBvcnRhbnQgcGFydCBvZiB3ZWIgYXBwbGljYXRpb25zLCBhbmQgd2l0aCBSZWFjdCBpdCdzIHBvc3NpYmxlIHRvIGNyZWF0ZSBncmVhdHMgZm9ybXMsXCJ9PF9jb21wb25lbnRzLmJyIC8+e1wiXFxuXCJ9e1wicmVhY3QgaG9va3MgYXJlIGEgZ2FtZS1jaGFuZ2VyIHdoZW4gd2UgdGhpbmsgYWJvdXQgZm9ybXMsIHdpdGggaG9va3MgaXMgc2ltcGxlIHRvIGNyZWF0ZSBmb3JtcywgYW5kIHlvdSBjYW4gZ28gb24gd2l0aG91dCBsaWJyYXJpZXMuXCJ9PF9jb21wb25lbnRzLmJyIC8+e1wiXFxuXCJ9e1wiQnV0IHdoZW4gd2Ugd2FudCB0byBidWlsZCBjb21wbGV4IGZvcm1zIHdpdGggbmVzdGVkIGZpZWxkcyBhbmQgdmFsaWRhdGlvbnMsIG1pZ2h0IGJlIGEgZ29vZCBpZGVhIHRvIHVzZSBhIGxpYnJhcnksIGFuZCB5b3UgY2FuIGZpbmQgYSBsb3Qgb2YgbGlicmFyaWVzIHRvIGhlbHAgeW91IHRvIGNyZWF0ZSBmb3Jtcy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIlNvLCB3aHkgVXNlRm9ybT9cIn08L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoZXJlIGFyZSBzb21lIHJlYXNvbnMgd2h5IHlvdSBmYWNlIHByb2JsZW1zIHdoZW4geW91IHdhbnQgdG8gY3JlYXRlIGZvcm1zLCBhbmQgd2l0aCB1c2VGb3JtLCB5b3UgY2FuIHNvbHZlIHRoZXNlIHByb2JsZW1zLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08YnIgLz57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlN0YXRlIG1hbmFnZW1lbnQgLSAgQSBjb3VwbGUgb2YgeWVhcnMgYWdvLCB5b3UgY291bGQgdGhpbmsgdGhhdCBSZWR1eCBvciBNb2JYIHdhcyBhIGdvb2Qgc29sdXRpb24gdG8gbWFuYWdlIGZvcm0gc3RhdGUgaW4gcmVhY3QsIGJ1dCB0aGV5IHdlcmVuJ3QuIFRvZGF5IHlvdSBjYW4gdXNlIGhvb2tzIHRvIG1hbmFnZSB0aGUgZm9ybSBzdGF0ZSwgaG9va3MgbGlrZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VTdGF0ZXdcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VSZWR1Y2VyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhcmUgYSBnb29kIHNvbHV0aW9uIHRvIG1hbmFnZSB0aGUgc3RhdGUuIEJ1dCBtYW5hZ2luZyB2YWx1ZXMsIHRvdWNoZWQgZmllbGRzIGFuZCBlcnJvcnMgY291bGQgYmUgYSBwcm9ibGVtIGlmIHlvdSBkb24ndCBoYXZlIGEgc3RhbmRhcmQgd2F5IHRvIG1hbmFnZSB0aGVtLiBVc3VhbGx5LCByZWFsIGFwcGxpY2F0aW9ucyB1c2UgbmVzdGVkIG9iamVjdHMgYXMgcmVxdWVzdCBwYXlsb2FkcywgYW5kIHlvdSBzaG91bGQga2VlcCBpdCB0byBzZW5kIHRoZSBjb3JyZWN0IGRhdGEgdG8gdGhlIHNlcnZlciwgbWFuYWdlIG5lc3RlZCB2YWx1ZXMgYW5kIGVycm9ycyBjb3VsZCBiZSBhIHByb2JsZW0gdXNpbmcganVzdCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VTdGF0ZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgYW5kIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVJlZHVjZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkVycm9ycy1UbyBkZWFsIHdpdGggZXJyb3JzLCB5b3UgY2FuIHVzZSB5b3VyIHZhbGlkYXRpb24gc29sdXRpb24sIGFuZCBpdCBjYW4gd29yayB3ZWxsIHdpdGggc2ltcGxlIGZvcm1zLCBidXQgeW91IGNhbiBzdHVjayB3aXRoIGEgbG90IG9mIGVycm9ycyB3aGVuIHlvdSBoYXZlIG5lc3RlZCBmaWVsZHMuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiVG91Y2hlZCBmaWVsZHMgLSBNYXliZSB5b3Ugd2FudCB0byBzaG93IGEgbWVzc2FnZSBlcnJvciBqdXN0IHdoZW4gdGhlIGZpZWxkIGlzIHRvdWNoZWQsIHNvIGluIG9yZGVyIHRvIGRvIHRoYXQgeW91IG5lZWQgdG8gbWFuYWdlIHRoZSB0b3VjaGVkIGZpZWxkcywgaXQgY2FuIGJlIHJlYWxseSBlYXN5IHRvIGRvIHdpdGggXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlU3RhdGVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VSZWR1Y2VyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgYnV0IHlvdSBjYW4ndCBkbyB0aGF0IHZlcnkgd2VsbCB3aXRoIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVN0YXRlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlUmVkdWNlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgd2hlbiB5b3UgaGF2ZSBuZXN0ZWQgZmllbGRzLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkhhbmRsZSBzdWJtaXQgLSBXaGVuIHlvdSB3YW50IHRvIGhhbmRsZSBzdWJtaXQsIHlvdSBuZWVkIHRvIG1hbmFnZSB0aGUgc3VibWl0IGV2ZW50LCBpdCdzIGNvbnZlbmllbnQgd2hlbiB5b3UgaGF2ZSBhbiBhbHJlYWR5IHNvbHV0aW9uIHRvIGRvIHRoYXQuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxiciAvPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlVzZUZvcm0gcHJvdmlkZXMgYSB3YXkgdG8gY3JlYXRlIGNvbXBsZXggZm9ybXMgZWFzaWx5LCB0aGlzIGhvb2sgcmV0dXJucyBhbiBvYmplY3Qgb2YgdmFsdWVzIFx1MjAwQlx1MjAwQmluIHRoZSBzYW1lIHNoYXBlIHRoYXQgaXQgcmVjZWl2ZXMsIHRoaXMgaXMgcG9zc2libGUgdXNpbmcgZG90IG5vdGF0aW9uLiBUaGVyZWZvcmUsXFxuaXQgZG9lcyBub3QgbWF0dGVyIGlmIHRoZSBvYmplY3QgaXMgY29tcGxleCBvciBoYXMgbWFueSBwcm9wZXJ0aWVzIG9yIGFuIGFycmF5LFxcbnRoZSByZXN1bHQgaXMgdGhlIHNhbWUuIFRoaXMgcHJvY2VzcyB0dXJucyB2ZXJ5IGVhc3kgdG8gY3JlYXRlIGZvcm1zIGZyb20gbmVzdGVkIG9iamVjdHMsXFxudGhlIHNhbWUgbGF5ZXJzIGFuZCBwcm9wZXJ0aWVzIGFyZSByZXBsaWNhdGVkIGluIHRoZSBmaW5hbCBvYmplY3QsXFxudGhpcyBhcHByb2FjaCBwcmV2ZW50cyB5b3UgdG8gdHlwZSBtb3JlIGNvZGUgdG8gY29udmVydCBhbiBvYmplY3QgZnJvbSBmb3JtIHRvIGJhY2tlbmQgb2JqZWN0IHR5cGUuIFRoZSBzYW1lIHByb2Nlc3MgaXMgcmVhbGl6ZWQgd2l0aCBlcnJvcnMgb2JqZWN0cyBhbmQgdG91Y2hlZCBvYmplY3RzLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiV2hhdCB0byBleHBlY3Qgd2l0aCB1c2VGb3JtXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlBlcmZvcm1lciBmb3JtcyAtIHVzZUZvcm0gcHJvdmlkZXMgYSB3YXkgdG8gY29tcGxldGUgYSBmb3JtIGFuZCBzdWJtaXQgaXQgd2l0aG91dCBhbnkgcmVyZW5kZXIsIGJ5IGRlZmF1bHQgdXNlRm9ybSBjcmVhdGVzIHVuY29udHJvbGxlZCBmb3Jtcy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJFYXN5IHRvIHdyaXRlIC0gdXNlRm9ybSBoYXMgYW4gZWFzeSB3YXkgdG8gd3JpdGUgZm9ybXMgd2l0aCBsZXNzIGNvZGUuIHJlZ2lzdGVyIGZ1bmN0aW9uIHJldHVybiBuZWNlc3NhcnkgaW5wdXQncyBwcm9wZXJ0aWVzIGFuZCBpdCBpcyBhbGwgd2UgbmVlZCB0byBtYW5hZ2UgYWxsIGV2ZW50cyBpbiBhIG5hdGl2ZSBIVE1MIFwifTxfY29tcG9uZW50cy5jb2RlPntcImlucHV0XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIi4gV3JpdGhlIGZvcm1zIHdpdGhvdXQgZm9ybSB0YWcuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiRWFzeSB2YWxpZGF0aW9uIC0gQnkgZGVmYXVsdCB1c2VGb3JtIHVzZXMgeXVwIHZhbGlkYXRpb24sIHdlIGNhbiB3cml0ZSBjb21wbGV4IHZhbGlkYXRpb24gd2l0aG91dCBlZmZvcnQuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJJbnN0YWxsYXRpb25cIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJiYXNoXCI+e2BucG0gaW5zdGFsbCAtLXNhdmUgQHVzZS1mb3JtL3VzZS1mb3JtXG4gIGB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImJhc2hcIj57YHlhcm4gYWRkIEB1c2UtZm9ybS91c2UtZm9ybVxuICBgfTwvQ29kZUJsb2NrPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJVc2FnZVwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiV2l0aCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJjcmVhdGVGb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiB5b3UgY2FuIGNyZWF0ZSBhIGhvb2sgZm9ybSBhbmQgdXNlIGl0IHdoZXJldmVyIHlvdSB3YW50LFwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08RGVtbyB1cmw9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL3VzZWZvcm0tcXVpY2stc3RhcnQteXBveHU/Zm9udHNpemU9MTQmYW1wO2hpZGVuYXZpZ2F0aW9uPTEmYW1wO3RoZW1lPWRhcmtcIiAvPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwicXVpY2stc3RhcnQubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcInVzZUZvcm0gfCBDb25jZXB0XCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkhvdyBVc2VGb3JtIHdvcmtzLCBhbmQgd2h5IHdlIGRlY2lkZWQgdG8gZG8gaXQgdGhpcyB3YXkuXCJcbiAgfVxufTtcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGgxOiBcImgxXCIsXG4gICAgcDogXCJwXCIsXG4gICAgY29kZTogXCJjb2RlXCIsXG4gICAgaDI6IFwiaDJcIixcbiAgICB1bDogXCJ1bFwiLFxuICAgIGxpOiBcImxpXCIsXG4gICAgaDM6IFwiaDNcIixcbiAgICBibG9ja3F1b3RlOiBcImJsb2NrcXVvdGVcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMT57XCJDb25jZXB0XCJ9PC9fY29tcG9uZW50cy5oMT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJXaGVuIHlvdSBhcmUgd29ya2luZyBvbiBhIHByb2plY3QsIHlvdSBtaWdodCB3YW50IHRvIHVzZSBhIGZvcm0gaW4gZGlmZmVyZW50IHBsYWNlcywgb3IgbWF5YmUgeW91IGhhdmUgYSBmb3JtIHdpdGggYSBjb3VwbGUgb2Ygc3RlcHMgaW4gZGlmZmVyZW50IGNvbXBvbmVudHMsIGhvdyBjb3VsZCB5b3UgaGFuZGxlIHRoaXM/XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoZSBtb3N0IGNvbW1vbiBhbnN3ZXIgaXMgdG8gdXNlIFJlYWN0IENvbnRleHQgQVBJLCBvciBpZiB5b3UgYXJlIHVzaW5nIGEgZm9ybSBsaWJyYXJ5IGxpa2UgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wicmVhY3QtaG9vay1mb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgeW91IGNhbiB1c2UgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZUZvcm1Db250ZXh0XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBob29rLCBmb3JtaWsgaGFzIGEgc2ltaWxhciBBUEkuIFRoZXNlIEFQSVMgYXJlIGJhc2VkIG9uIFJlYWN0IENvbnRleHQgQVBJLCBzbyB5b3UgY2FuIHVzZSB0aGVtIGluIHRoZSBzYW1lIHdheS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiQnV0IGZvciBtZSB0aGlzIGlzIG5vdCB0aGUgYmVzdCB3YXkgdG8gZG8gdGhhdCwgdGhlIGlkZWEgdG8gaGF2ZSBhIHByb3ZpZGVyIHdoZW5ldmVyIHlvdSB3YW50IHRvIHNoYXJlIHNvbWV0aGluZyBpcyB3ZWlyZCBhbmQgbm90IHZlcnkgdXNlZnVsLiBCZXNpZGVzIGRlY2xhcmluZyBhIHByb3ZpZGVyIHlvdSBzaG91bGQgcGFzcyB0aGUgdmFsdWUgdG8gdGhlIHByb3ZpZGVyLCBpdCdzIHJlYWxseSBzdHJhbmdlIGZvciBtZSwgYmVjYXVzZSB3ZSBjYW4gZG8gdGhhdCB3aXRob3V0IGEgcHJvdmlkZXIsIGJ5IHN0b3JpbmcgdGhlIHN0YXRlIGluIHMgZXh0ZXJuYWwgc3RvcmUgYXMgWnVzdGFuZCBkbywgdGhlIFVzZUZvcm0gdXNlIGFuIGV4dGVybmFsIHN0b3JlLCBmb3IgdGhpcyByZWFzb24sIHdlIGRvbid0IG5lZWQgdG8gdXNlIGEgUmVhY3QgQ29udGV4dCBBUEkgb3Igc29tZXRoaW5nIHNpbWlsYXIgdG8gc3RvcmUgb3VyIGZvcm0gc3RhdGUuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxiciAvPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJIb3cgYSBzdG9yZSB3b3Jrc1wifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlIHN0b3JlIGNvbmNlcHQgYmVjb21lcyB2ZXJ5IHBvcHVsYXIgaW4gUmVhY3QgY29tbXVuaXR5IGJ5IHRoZSB3YXkgb2YgUmVkdXggYW5kIE1vYlggd29ya3MsIGEgc3RvcmUgaXMgYSBwbGFjZSB3aGVyZSB5b3UgY291bGQga2VlcCB5b3VyIHN0YXRlLCBpbiB0aGUgc3RvcmUgeW91IGNhbiB0cnVzdCwgaXQgbWVhbnMgdGhhdCB0aGUgc3RvcmUgaXMgdGhlIHNvdXJjZSBvZiB0cnV0aCwgYW5kIGV2ZXJ5IGNoYW5nZSBpbiB0aGUgc3RhdGUgaXMgYWx3YXlzIGEgY2hhbmdlIGluIHRoZSBzdG9yZS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVG8gZGVsaXZlciBldmVyeSBjaGFuZ2Ugd2UgbmVlZCB0byB1c2UgYSBwYXR0ZXJuIGNhbGxlZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJPYnNlcnZhYmxlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgc28gd2hlbmV2ZXIgYSBjaGFuZ2UgaGFwcGVucyBpbiB0aGUgc3RhdGUsIHRoZSBvYnNlcnZhYmxlIGNhbiBub3RpZnkgdGhlIHN1YnNjcmliZXJzIHRoYXQgdGhlIHN0YXRlIGhhcyBjaGFuZ2VkLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJOb3cgdGhhdCB3ZSBrbm93IHRoZSBtYWluIGNvbmNlcHQgb2YgdGhlIHN0b3JlIGFuZCB0aGUgb2JzZXJ2YWJsZSwgd2UgY2FuIGdvIG9uIGFuZCB1bmRlcnN0YW5kIGhvdyBVc2VGb3JtIHVzZXMgaXQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJIb3cgVXNlRm9ybSB3b3Jrc1wifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVXNlRm9ybSB1c2VzIGFuIGV4dGVybmFsIHN0b3JlIHRvIGtlZXAgdGhlIGZvcm0gc3RhdGUsIGJ1dCBpdCdzIG5vdCBlbm91Z2gsIHdlIG5lZWQgdG8gc2hhcmUgdGhlIHN0YXRlIHdpdGggb3RoZXIgY29tcG9uZW50cyB3aXRob3V0IFJlYWN0IENvbnRleHQuIEZvciB0aGlzIHJlYXNvbiwgd2UgaGF2ZSBhIGZ1bmN0aW9uIGNhbGxlZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJjcmVhdGVGb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIjtcXG5UaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgYSBmb3JtIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCBhcyBhIGhvb2ssIHRoaXMgaG9vayBpcyBjb25uZWN0ZWQgdG8gdGhlIHN0b3JlLCBzbyB3aGVuZXZlciB0aGUgc3RvcmUgY2hhbmdlcywgdGhlIGhvb2sgd2lsbCBiZSBub3RpZmllZCBhbmQgdGhlIGZvcm0gd2lsbCBiZSB1cGRhdGVkLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJJbiBvdGhlciB3b3JkcywgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcImNyZWF0ZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZ1bmN0aW9uIGNyZWF0ZXMgYSBmb3JtIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBoYXMgYWxsIHJlc291cmNlcyB0byBtYW5hZ2UgdGhlIGZvcm0sIGlmIHlvdSB1c2UgaXQgdGVuIHRpbWVzLCBpdCB3aWxsIGJlIHRoZSBzYW1lIGZvcm0gYW5kIHRoZSBzYW1lIHN0b3JlIGJlaW5nIG1hbmFnZWQgaW4gZGlmZmVyZW50IHBsYWNlcy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiRm9yIHRoYXQgcmVhc29uLCB3ZSBjYW4gdXNlIHRoZSBzYW1lIGZvcm0gaW4gZGlmZmVyZW50IGNvbXBvbmVudHMgd2l0aG91dCBwcm92aWRlcnMgb3IgUmVhY3QgQ29udGV4dCBBUEkuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJJbml0aWFsIFN0YXRlXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJBcyB0aGUgZmlyc3Qgc3RlcCwgd2UgbmVlZCB0byBkZWZpbmUgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIGZvcm0sIHRoaXMgaXMgdGhlIHN0YXRlIHRoYXQgd2lsbCBiZSB1c2VkIHdoZW4gdGhlIGZvcm0gaXMgY3JlYXRlZCwgd2UgaGF2ZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJpbml0aWFsVmFsdWVzXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiaW5pdGlhbEVycm9yc1wifTwvX2NvbXBvbmVudHMuY29kZT57XCIgcHJvcGVydGllcywgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiaW5pdGlhbFRvdWNoZWRcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBhbGwgb2YgdGhlbSBhcmUgb3B0aW9uYWwuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJGb3JtIFZhbGlkYXRpb25cIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoZSB2YWxpZGF0aW9uIHByb2Nlc3MgY2FuIGJlIGRvbmUgaW4gdHdvIHdheXM6XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiVGhlIGZpcnN0IGFuZCBtb3N0IGNvbW1vbiBpcyB0byB1c2UgYSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ2YWxpZGF0aW9uU2NoZW1hXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgdGhpcyBpcyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgdGhlIHZhbGlkYXRpb24gcnVsZXMsIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ2YWxpZGF0aW9uU2NoZW1hXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBzaG91bGQgaGF2ZSB0aGUgc2FtZSBzaGFwZSBmcm9tIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJpbml0aWFsVmFsdWVzXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBvYmplY3QsIHNvIGlmIHlvdSBoYXZlIGEgZm9ybSB3aXRoIGEgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wibmFtZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZmllbGQsIHlvdSBzaG91bGQgaGF2ZSBhIFwifTxfY29tcG9uZW50cy5jb2RlPntcIm5hbWVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZpZWxkIGluIHRoZSB2YWxpZGF0aW9uU2NoZW1hLCB0aGlzIHJ1bGUgaXMgYXBwbGllZCB0byBuZXN0ZWQgZmllbGRzLCB3ZSByZWNvbW1lbmQgdG8gdXNlIFwifTxfY29tcG9uZW50cy5jb2RlPntcIll1cFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgbGlicmFyeSBmb3IgdGhpcy4gVGhlIGZpcnN0IHdheSBpcyB0aGUgcmVjb21tZW5kZWQgd2F5IHRvIHVzZSB2YWxpZGF0aW9uLCBiZWNhdXNlIGl0J3MgdGhlIG1vc3Qgc2ltcGxlIGFuZCBlYXN5IHRvIHVzZSwgYW5kIHlvdSBoYXZlIGEgcG93ZXJmdWwgdmFsaWRhdGlvbiBsaWJyYXJ5LiBJZiB5b3UgZGVjaWRlIHRvIHVzZSB0aGlzIHdheSwgeW91IHNob3VsZCBjcmVhdGUgYW5kIHVzZSB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widmFsaWRhdGlvblNjaGVtYVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgd2hlbiB5b3UgY3JlYXRlIHRoZSBmb3JtLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlRoZSBzZWNvbmQgd2F5IGlzIHRvIHVzZSBhIFwifTxfY29tcG9uZW50cy5jb2RlPntcInZhbGlkYXRlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmdW5jdGlvbiwgdGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBldmVyeSB0aW1lIHRoZW4gdGhlIGZvcm0gaXMgdXBkYXRlZCwgYW5kIGl0IHdpbGwgcmVjZWl2ZSB0aGUgZm9ybSB2YWx1ZXMgYW5kIHRoZSBmb3JtIGVycm9ycywgYW5kIGl0IHNob3VsZCByZXR1cm4gYW4gb2JqZWN0IHdpdGggdGhlIG5ldyBmb3JtIGVycm9ycy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIk5hdGl2ZSBlbGVtZW50cyB2cyBDdXN0b20gZWxlbWVudHNcIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkluIHdlYiBkZXZlbG9wbWVudCB3ZSBjYW4gZmluZCBuYXRpdmUgZWxlbWVudHMgbGlrZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8aW5wdXQ+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPHNlbGVjdD5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFuZCBjdXN0b20gZWxlbWVudHMgbGlrZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8U2VsZWN0Ym94Lz5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8RGF0ZVBpY2tlci8+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIixcXG50aGVyZSBhcmUgc29tZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIHRoZW0sIG5hdGl2ZSBlbGVtZW50cyBhcmUgSFRNTCBlbGVtZW50cyB0aGF0IGFyZSBjcmVhdGVkIGJ5IHRoZSBicm93c2VyLCBhbmQgY3VzdG9tIGVsZW1lbnRzIGFyZSBjcmVhdGVkIGJ5IHRoZSBkZXZlbG9wZXIsXFxudGhlIGRldmVsb3BlciBjYW4gdXNlIG5hdGl2ZSBlbGVtZW50cyB0byBidWlsZCBjdXN0b20gZWxlbWVudHMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkJ5IGRlZmF1bHQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiY3JlYXRlRm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgY3JlYXRlIGEgZm9ybSB1c2luZyBqdXN0IGEgcmVmZXJlbmNlIHRvIGNvbW11bmljYXRlIHdpdGggZmllbGRzLCBzaW5jZSBmaWVsZHMgbGlrZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8aW5wdXQ+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPHNlbGVjdD5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFyZSBuYXRpdmUgZWxlbWVudHMsIFwifTxfY29tcG9uZW50cy5jb2RlPntcImNyZWF0ZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGNhbiBkbyBpdCB3aXRob3V0IHByb2JsZW1zLFxcbmJ1dCBpZiB5b3Ugd2FudCB0byB1c2UgY3VzdG9tIGVsZW1lbnRzLCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJjcmVhdGVGb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBjYW4ndCBkbyBpdCBiZWNhdXNlIG1vc3Qgb2YgdGhlbSBkb2Vzbid0IGhhdmUgYSByZWZlcmVuY2UgdG8gbmF0aXZlIGVsZW1lbnRzLCBhbmQgY3VzdG9tIGVsZW1lbnRzIG5vcm1hbGx5IGhhdmUgYW4gaW50ZXJuYWwgc3RhdGUsIHNvIHRvIHdvcmsgd2l0aCBjdXN0b20gZWxlbWVudHMgYXMgbmF0aXZlIGVsZW1lbnRzLCB3ZSBuZWVkIGEgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiV3JhcHBlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgY29tcG9uZW50LlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiV3JhcHBlclwifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlIFdyYXBwZXIgY29tcG9uZW50IHdpbGwgYmUgdXNlZCB0byB3cmFwIHRoZSBjdXN0b20gZWxlbWVudHMsIGFuZCBpdCB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIGEgcmVmZXJlbmNlIHRvIHRoZSBuYXRpdmUgZWxlbWVudC4gKEN1c3RvbSBlbGVtZW50cyBzaG91bGQgaGF2ZSBjb21tb25zIHByb3BlcnRpZXMgbGlrZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ2YWx1ZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIFwifTxfY29tcG9uZW50cy5jb2RlPntcIm9uQ2hhbmdlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wib25CbHVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIikgYW5kIGl0IHdpbGwgYmUgdXNlZCB0byBjcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIG5hdGl2ZSBlbGVtZW50LlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuYmxvY2txdW90ZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJXZSBuZWVkIHRvIHVzZSBhIFdyYXBwZXIgYmVjYXVzZSB3ZSBkb24ndCB3YW50IHRvIHJlcmVuZGVyIHRoZSBmb3JtIGV2ZXJ5IHRpbWUgdGhlIGN1c3RvbSBlbGVtZW50IGNoYW5nZXMuIFdyYXBwZXIgcHJldmVudHMgdGhpcyBhbmQgbWFrZXMganVzdCB0aGUgc3BlY2lmaWMgY3VzdG9tIGVsZW1lbnQgcmVyZW5kZXIuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTwvX2NvbXBvbmVudHMuYmxvY2txdW90ZT57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiQ29udHJvbGxlZCB2cyBVbmNvbnRyb2xsZWQgdnMgRGVib3VuY2VkIGZvcm1zXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJCeSBkZWZhdWx0LCBVc2VGb3JtIGNyZWF0ZXMgYW4gYWdub3N0aWMgZm9ybSwgd2hpY2ggbWVhbnMgdGhhdCB0aGUgZm9ybSBjYW4gYmUgdXNlZCBhcyB5b3Ugd2lzaCwgYXMgY29udHJvbGxlZCwgdW5jb250cm9sbGVkIG9yIGRlYm91bmNlZC4gVGhpcyBjb25maWd1cmF0aW9uIHNob3VsZCBiZSBwcm92aWRlZCB3aGVuIHlvdSBhcmUgZ29pbmcgdG8gdXNlIGl0LlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkRlYm91bmNlZCBmb3JtcyBhcmUgZm9ybXMgdGhhdCBhcmUgdXBkYXRlZCBvbmx5IHdoZW4gdGhlIHVzZXIgc3RvcHMgdHlwaW5nLCB0aGlzIGlzIHVzZWZ1bCB3aGVuIHlvdSBoYXZlIGEgZm9ybSB3aXRoIGEgbG90IG9mIGZpZWxkcywgYW5kIHlvdSBkb24ndCB3YW50IHRvIHVwZGF0ZSB0aGUgZm9ybSBldmVyeSB0aW1lIHRoZSB1c2VyIHR5cGVzLCBidXQgb25seSB3aGVuIHRoZSB1c2VyIHN0b3BzIHR5cGluZy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJDb250cm9sbGVkIGZvcm1zIGFyZSBmb3JtcyB0aGF0IGFyZSB1cGRhdGVkIHdoZW5ldmVyIHRoZSB1c2VyIHR5cGVzLCB0aGlzIGlzIHVzZWZ1bCBpZiB5b3Ugd2FudCB0byBnaXZlIHF1aWNrIGZlZWRiYWNrIHRvIHRoZSB1c2VyLCBsaWtlIGEgZm9ybSB3aXRoIGEgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wibmFtZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZmllbGQsIHlvdSBjYW4gdXNlIGEgY29udHJvbGxlZCBmb3JtIHRvIHNob3cgdGhlIHVzZXIgdGhlIGVycm9yIHdoZW4gdGhlIGZpZWxkIGlzIGVtcHR5IGJlZm9yZSB0byBzdWJtaXQgdGhlIGZvcm0uXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiVW5jb250cm9sbGVkIGZvcm1zIGFyZSBmb3JtcyB0aGF0IGFyZSB1cGRhdGVkIGp1c3Qgd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQsIHdoaWNoIG1lYW5zIHRoYXQgdGhlIGZvcm0gY2FuIGJlIGZ1bGZpbGxlZCB3aXRoIHRoZSB2YWx1ZXMgb2YgdGhlIGZvcm0gYW5kIHN1Ym1pdHRlZCB3aXRob3V0IHJlcmVuZGVyaW5nIHRoZSBmb3JtLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgdGhpcyBpbiB0aGUgcGFnZXMgZm9yIFwifTxfY29tcG9uZW50cy5jb2RlPntcImNvbnRyb2xsZWRcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1bmNvbnRyb2xsZWRcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiZGVib3VuY2VkXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmb3Jtcy5cIn08L19jb21wb25lbnRzLnA+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJjb25jZXB0Lm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjoge1xuICAgIFwidGl0bGVcIjogXCJ1c2VGb3JtIHwgUmVhZG1lXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIllvdXIgZmlzdCBzdGVwIHRvIGNyZWF0ZSBmb3JtIGVhc2lseSB3aXRob3V0IGVmZm9ydC5cIlxuICB9XG59O1xuaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZW1vJztcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb2RlYmxvY2snO1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcDogXCJwXCIsXG4gICAgaW1nOiBcImltZ1wiLFxuICAgIGgxOiBcImgxXCIsXG4gICAgYmxvY2txdW90ZTogXCJibG9ja3F1b3RlXCIsXG4gICAgY29kZTogXCJjb2RlXCIsXG4gICAgaDM6IFwiaDNcIixcbiAgICBhOiBcImFcIixcbiAgICBoMjogXCJoMlwiLFxuICAgIGJyOiBcImJyXCIsXG4gICAgdWw6IFwidWxcIixcbiAgICBsaTogXCJsaVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLnA+PF9jb21wb25lbnRzLmltZyBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdXNlLWZvcm0vdXNlLWZvcm0vbWFpbi9pbWcvbG9nbzMucG5nXCIgYWx0PVwiTG9nb1wiIC8+PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMT57XCJXZWxjb21lIHRvIHVzZUZvcm0gXHVEODNEXHVEQzRCXCJ9PC9fY29tcG9uZW50cy5oMT57XCJcXG5cIn08X2NvbXBvbmVudHMuYmxvY2txdW90ZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD48X2NvbXBvbmVudHMuY29kZT57XCJ1c2VGb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBwcm92aWRlIGEgd2F5IHRvIGNyZWF0ZSBjb21wbGV4IGZvcm1zIGVhc2lseS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5ibG9ja3F1b3RlPntcIlxcblwifTxfY29tcG9uZW50cy5oMz57XCJcdUQ4M0NcdURGRTAgXCJ9PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vdXNlZm9ybS5vcmdcIj57XCJIb21lcGFnZVwifTwvX2NvbXBvbmVudHMuYT48L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5oMz57XCJcdTI3MjggXCJ9PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vcy91c2Vmb3JtLTJ1Mmp1XCI+e1wiRGVtb1wifTwvX2NvbXBvbmVudHMuYT48L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJEZXNjcmlwdGlvblwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiRm9ybXMgYXJlIGFuIGltcG9ydGFudCBwYXJ0IG9mIHdlYiBhcHBsaWNhdGlvbnMsIGFuZCB3aXRoIHJlYWN0IGl0J3MgcG9zc2libGUgdG8gY3JlYXRlIGdyZWF0cyBmb3JtcyxcIn08X2NvbXBvbmVudHMuYnIgLz57XCJcXG5cIn17XCJyZWFjdCBob29rcyBhcmUgYSBnYW1lLWNoYW5nZXIgd2hlbiB3ZSB0aGluayBhYm91dCBmb3Jtcywgd2l0aCBob29rcyBpcyBzaW1wbGUgdG8gY3JlYXRlIGZvcm1zLCBhbmQgeW91IGNhbiBnbyBvbiB3aXRob3V0IGxpYnJhcmllcy5cIn08X2NvbXBvbmVudHMuYnIgLz57XCJcXG5cIn17XCJCdXQgd2hlbiB3ZSB3YW50IHRvIGJ1aWxkIGNvbXBsZXggZm9ybXMgd2l0aCBuZXN0ZWQgZmllbGRzIGFuZCB2YWxpZGF0aW9ucywgbWFpZ2h0IGJlIGEgZ29vZCBpZGVhIHRvIHVzZSBhIGxpYnJhcnksIGFuZCB5b3UgY2FuIGZpbmQgYSBsb3Qgb2YgbGlicmFyaWVzIHRvIGhlbHAgeW91IHRvIGNyZWF0ZSBmb3Jtcy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIlNvLCB3aHkgVXNlRm9ybT9cIn08L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoZXJlIGFyZSBzb21lIHJlYXNvbnMgd2h5IHlvdSBmYWNlIHByb2JsZW1zIHdoZW4geW91IHdhbnQgdG8gY3JlYXRlIGZvcm1zLCBhbmQgd2l0aCB1c2VGb3JtIHlvdSBjYW4gc29sdmUgdGhpcyBwcm9ibGVtcy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PGJyIC8+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJTdGF0ZSBtYW5hZ2VtZW50IC0gIEEgY291cGxlIG9mIHllZWFycyBhZ28sIHlvdSBjb3VsZCB0aGluayB0aGF0IFJlZHV4IG9yIE1vYlggd2FzICBhIGdvb2Qgc29sdXRpb24gdG8gbWFuYWdlIGZvcm0gc3RhdGUgaW4gcmVhY3QsIGJ1dCB0aGV5IHdhc24ndC4gVG9kYXkgeW91IGNhbiB1c2UgaG9va3MgdG8gbWFuYWdlIGZvcm0gc3RhdGUsIGhvb2tzIGxpa2UgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlU3RhdGV3XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlUmVkdWNlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgYXJlIGEgZ29vZCBzb2x1dGlvbiB0byBtYW5hZ2Ugc3RhdGUuIEJ1dCBtYW5hZ2UgdmFsdWVzLCB0b3VjaGVkIGZpZWxkcyBhbmQgZXJyb3JzIGNvdWxkIGJlIGEgcHJvYmxlbSBpZiB5b3UgZG9uJ3QgaGF2ZSBhIHN0YW5kYXJkIHdheSB0byBtYW5hZ2VyIHRoZW0uIFVzdWFsbHkgcmVhbCBhcHBsaWNhdGlvbnMgdXNlIG5lc3RlZCBvYmplY3RzIGFzIHJlcXVlc3QgcGF5bG9vYWRzLCBhbmQgeW91IHNob3VsZCBrZWVwIGl0IGluIG9yZGVyIHRvIHNlbmQgdGhlIGNvcnJlY3QgZGF0YSB0byB0aGUgc2VydmVyLCBtYW5hZ2UgbmVzdGVkIHZhbHVlcyBhbmQgZXJyb3JzIGNvdWxkIGJlIGEgcHJvYmxlbSB1c2luZyBqdXN0IFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVN0YXRlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlUmVkdWNlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiRXJyb3JzIC0gVG8gZGVhbCB3aXRoIGVycm9ycywgeW91IGNhbiB1c2UgeW91ciB3b3VuIHZhbGlkYXRpb24gc29sdXRpb24sIGFuZCBpdCBjYW4gd29yayB3ZWxsIHdpdGggc2ltcGxlIGZvcm1zLCBidXQgeW91IGNhbiBzdHVjayB3aXRoIGEgbG90IG9mIGVycm9ycyB3aGVuIHlvdSBoYXZlIG5lc3RlZCBmaWVsZHMuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiVG91Y2hlZCBmaWVsZHMgLSBNYXliZSB5b3Ugd2FudCB0byBzaG93IGEgbWVzc2FnZSBlcnJvciBqdXN0IHdoZW4gdGhlIGZpZWxkIGlzIHRvdWNoZWQsIHNvIGluIG9yZGVyIHRvIGRvIHRoYXQgeW91IG5lZWQgdG8gbWFuYWdlciB0aGUgdG91Y2hlZCBmaWVsZHMsIGl0IGNhbiBiZSByZWFsbHkgZWFzeSB0byBkbyB3aXRoIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVN0YXRlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlUmVkdWNlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIGJ1dCB5b3UgY2FuJ3QgZG8gdGhhdCB2ZXJ5IHdlbGwgd2l0aCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VTdGF0ZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgYW5kIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVJlZHVjZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHdoZW4geW91IGhhdmUgbmVzdGVkIGZpZWxkcy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJIYW5kbGUgc3VibWl0IC0gV2hlbiB5b3Ugd2FudCB0byBoYW5kbGUgc3VibWl0LCB5b3UgbmVlZCB0byBtYW5hZ2UgdGhlIHN1Ym1pdCBldmVudCwgaXQncyByZWFsbHkgY29udmluaWVudCB3aGVuIHlvdSBoYXZlIGEgYWxyZWFkeSBzb2x1dGlvbiB0byBkbyB0aGF0LlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08YnIgLz57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJVc2VGb3JtIHByb3ZpZGVzIGEgd2F5IHRvIGNyZWF0ZSBjb21wbGV4IGZvcm1zIGVhc2lseSwgdGhpcyBob29rIHJldHVybnMgYW4gb2JqZWN0IG9mIHZhbHVlcyBcdTIwMEJcdTIwMEJpbiB0aGUgc2FtZSBzaGFwZSB0aGF0IGl0IHJlY2VpdmVzLCB0aGlzIGlzIHBvc3NpYmxlIHVzaW5nIGRvdCBub3RhdGlvbi4gVGhlcmVmb3JlLFxcbml0IGRvZXMgbm90IG1hdHRlciBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsZXggb3IgaGFzIG1hbnkgcHJvcGVydGllcyBvciBhcnJheSxcXG50aGUgcmVzdWx0IGlzIHRoZSBzYW1lLiBUaGlzIHByb2Nlc3MgdHVybnMgdmVyeSBlYXNpbHkgdG8gY3JlYXRlIGZvcm1zIGZyb20gYW4gb2JqZWN0IHdpdGggc2V2ZXJhbCBsYXllcnMsXFxudGhlIHNhbWUgbGF5ZXJzIGFuZCBwcm9wZXJ0aWVzIGFyZSByZXBsaWNhdGVkIGluIHRoZSBmaW5hbCBvYmplY3QsXFxudGhpcyBhcHByb2FjaCBwcmV2ZW50cyB5b3UgdG8gdHlwZSBtb3JlIGNvZGUgdG8gY29udmVydCBhbiBvYmplY3QgZnJvbSBmb3JtIHRvIGJhY2tlbmQgb2JqZWN0IHR5cGUuIFRoZSBzYW1lIHByb2Nlc3MgaXMgcmVhbGl6ZWQgd2l0aCBlcnJvcnMgb2JqZWN0IGFuZCB0b3VjaGVkIG9iamVjdHMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJXaGF0IHRvIGV4cGVjdCB3aXRoIHVzZUZvcm1cIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiUGVyZm9ybWVyIGZvcm1zIC0gdXNlRm9ybSBwcm92aWRlcyBhIHdheSB0byBjb21wbGV0ZSBhIGZvcm0gYW5kIHN1Ym1pdCBpdCB3aXRob3V0IGFueSByZXJlbmRlciwgYnkgZGVmYXVsdCB1c2VGb3JtIGNyZWF0ZXMgdW5jb250cm9sbGVkIGZvcm1zLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkVhc3kgdG8gd3JpdGUgLSB1c2VGb3JtIGhhcyBhbiBlYXN5IHdheSB0byB3cml0ZSBmb3JtcyB3aXRoIGxlc3MgY29kZS4gcmVnaXN0ZXIgZnVuY3Rpb24gcmV0dXJuIG5lY2Vzc2FyeSBpbnB1dCdzIHByb3BlcnRpZXMgYW5kIGl0IGlzIGFsbCB3ZSBuZWVkIHRvIG1hbmFnZSBhbGwgZXZlbnRzIGluIGEgbmF0aXZlIEhUTUwgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiaW5wdXRcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLiBXcml0aGUgZm9ybXMgd2l0aG91dCBmb3JtIHRhZy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJFYXN5IHZhbGlkYXRpb24gLSBCeSBkZWZhdWx0IHVzZUZvcm0gdXNlcyB5dXAgdmFsaWRhdGlvbiwgd2UgY2FuIHdyaXRlIGNvbXBsZXggdmFsaWRhdGlvbiB3aXRob3V0IGVmZm9ydC5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkluc3RhbGxhdGlvblwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImJhc2hcIj57YG5wbSBpbnN0YWxsIC0tc2F2ZSBAdXNlLWZvcm0vdXNlLWZvcm1cbiAgYH08L0NvZGVCbG9jaz57XCJcXG5cIn08Q29kZUJsb2NrIGxhbmd1YWdlPVwiYmFzaFwiPntgeWFybiBhZGQgQHVzZS1mb3JtL3VzZS1mb3JtXG4gIGB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIlVzYWdlXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJXaXRoIFwifTxfY29tcG9uZW50cy5jb2RlPntcImNyZWF0ZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHlvdSBjYW4gY3JlYXRlIGEgaG9vayBmb3JtIGFuZCB1c2UgaXQgd2hlcmV2ZXIgeW91IHdhbnQsXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxiciAvPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqYXZhc2NyaXB0XCI+e2BpbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnQHVzZS1mb3JtL2NvcmUnXG5cbmNvbnN0IHVzZVVzZXJGb3JtID0gY3JlYXRlRm9ybSh7XG4gIGluaXRpYWxWYWx1ZXM6IHtcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIGNvbmZpcm1QYXNzd29yZDogJycsXG4gIH0sXG4gfSlcbmB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImpzeFwiPntgXG5mdW50aW9uIFVzZXJGb3JtKCl7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlVXNlckZvcm0oKVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcignbmFtZScpfSAvPlxuICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoJ2VtYWlsJyl9IC8+XG4gICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcigncGFzc3dvcmQnKX0gLz5cbiAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKCdjb25maXJtUGFzc3dvcmQnKX0gLz5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuYH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vZGV2LnRvL2p1Y2lhbjAvYnVpbGRpbmctZm9ybXMtd2l0aC11c2Vmb3JtLTFjbmFcIj57XCJQb3N0XCJ9PC9fY29tcG9uZW50cy5hPjwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIlx1RDgzRVx1REQxRCBDb250cmlidXRpbmdcIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkNvbnRyaWJ1dGlvbnMsIGlzc3VlcyBhbmQgZmVhdHVyZSByZXF1ZXN0cyBhcmUgd2VsY29tZSFcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiRmVlbCBmcmVlIHRvIGNoZWNrIFwifTxfY29tcG9uZW50cy5hIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdXNlLWZvcm0vdXNlLWZvcm0vaXNzdWVzXCI+e1wiaXNzdWVzIHBhZ2VcIn08L19jb21wb25lbnRzLmE+e1wiLiBZb3UgY2FuIGFsc28gdGFrZSBhIGxvb2sgYXQgdGhlIFwifTxfY29tcG9uZW50cy5hIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSnVjaWFuMC91c2UtZm9ybS9ibG9iL21haW4vQ09OVFJJQlVUSU5HLm1kXCI+e1wiY29udHJpYnV0aW5nIGd1aWRlXCJ9PC9fY29tcG9uZW50cy5hPntcIi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIlNob3cgeW91ciBzdXBwb3J0XCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJHaXZlIGEgXHUyQjUwXHVGRTBGIGlmIHRoaXMgcHJvamVjdCBoZWxwZWQgeW91IVwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiXHVEODNEXHVEQ0REIExpY2Vuc2VcIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkNvcHlyaWdodCBcdTAwQTkgMjAyMCBcIn08X2NvbXBvbmVudHMuYSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3VzZS1mb3JtXCI+e1widXNlRm9ybVwifTwvX2NvbXBvbmVudHMuYT57XCIuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoaXMgcHJvamVjdCBpcyBcIn08X2NvbXBvbmVudHMuYSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3VzZS1mb3JtL3VzZS1mb3JtL2Jsb2IvNTNkZWJkNjk4NjY1MGY3NjU2MTc5NWYyMDY5ZDZlZWJjNWRiNmM2NS9MSUNFTlNFXCI+e1wiTUlUXCJ9PC9fY29tcG9uZW50cy5hPntcIiBsaWNlbnNlZC5cIn08L19jb21wb25lbnRzLnA+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJpbmRleC5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEs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
