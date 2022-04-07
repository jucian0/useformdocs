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

// mdx:/home/barbosa/javascript/docs/app/routes/docs/debounced-form.mdx
var debounced_form_exports = {};
__export(debounced_form_exports, {
  attributes: () => attributes4,
  default: () => debounced_form_default,
  filename: () => filename4,
  headers: () => headers4,
  links: () => links6,
  meta: () => meta5
});
init_react();
var import_react12 = __toModule(require("react"));
var attributes4 = {
  "meta": {
    "title": "useForm | debounced mode",
    "description": "When you use debounced form the debounce parameter delays the updating of the state until the user has stopped changing inputs for a predetermined amount of time."
  }
};
function MDXContent4(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    a: "a",
    code: "code",
    blockquote: "blockquote"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react12.default.createElement(import_react12.default.Fragment, null, /* @__PURE__ */ import_react12.default.createElement(_components.h1, null, "Debounced mode"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.h2, null, "Introduction"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "Debounce function forces a function to wait a certain amount of time before running again. The function is built to limit the number of times a function is called."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "The debounce parameter delays the updating of the state until the user has stopped changing inputs for a predetermined amount of time."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "The input value is set to state values and then updated via React events. Defining a form\u2019s input value via state is considered a controlled component. For controlled inputs, you will need a corresponding state and then a function to update that state with changes."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, /* @__PURE__ */ import_react12.default.createElement(_components.a, {
    href: "https://reactjs.org/docs/forms.html"
  }, "React Docs")), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "It means that whenever state is changed the component, it is rendered again."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "If you want to use this kind of form, you need only pass property ", /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "mode:'debounced'"), "."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "Also, it means that the validations are run in every state change, providing better user feedback.\nSee more in Controlled Inputs with validation."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.h2, null, "Usage"), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "useForm"), " provides a ", /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "register"), " function, this function returns all properties to manager a field."), "\n", /* @__PURE__ */ import_react12.default.createElement(CodeBlock, {
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
`), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "Use dot notation to create advanced objects or to map object values. Type an entry name and type or an entry property object."), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react12.default.createElement(_components.p, null, "Dot notation is used to access nested objects. For example, if you have an object with a nested object, you can access the nested object using dot notation; ", /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "info.name"), ".\nUse dot notation to access nested arrays. For example, if you\nhave an object with a nested array, you can access the nested array using dot notation;\n", /* @__PURE__ */ import_react12.default.createElement(_components.code, null, "info.array[2]"), "."), "\n"), "\n", /* @__PURE__ */ import_react12.default.createElement(CodeBlock, {
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
`), "\n", /* @__PURE__ */ import_react12.default.createElement(_components.h2, null, "Demo"), "\n", /* @__PURE__ */ import_react12.default.createElement(demo_default, {
    url: "https://codesandbox.io/embed/useform-debounced-sdokv?fontsize=14&hidenavigation=1&theme=dark"
  }));
  return MDXLayout ? /* @__PURE__ */ import_react12.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var debounced_form_default = MDXContent4;
var filename4 = "debounced-form.mdx";
var headers4 = typeof attributes4 !== "undefined" && attributes4.headers;
var meta5 = typeof attributes4 !== "undefined" && attributes4.meta;
var links6 = void 0;

// mdx:/home/barbosa/javascript/docs/app/routes/docs/onchange-form.mdx
var onchange_form_exports = {};
__export(onchange_form_exports, {
  attributes: () => attributes5,
  default: () => onchange_form_default,
  filename: () => filename5,
  headers: () => headers5,
  links: () => links7,
  meta: () => meta6
});
init_react();
var import_react13 = __toModule(require("react"));
var attributes5 = {
  "meta": {
    "title": "useForm | onChange mode",
    "description": "When using controlled forms, the input value is set to state values and then updated via React events. React form controlled is the most popular aproach in reactjs."
  }
};
function MDXContent5(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    code: "code",
    blockquote: "blockquote"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react13.default.createElement(import_react13.default.Fragment, null, /* @__PURE__ */ import_react13.default.createElement(_components.h1, null, "onChange mode"), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.h2, null, "Description"), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "There are two types of form input in React. We have the uncontrolled input and the controlled input.\nWhen using controlled forms, the input value is set to state values and then updated via React events.\nDefining a form input value via state is considered a controlled component. For controlled inputs, you will need a corresponding state and then a function to update that state with changes."), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "Controlled inputs are the most popular in the react ecosystem, are easier to write and understanding. But when you think about performance controlled inputs are less powerful than uncontrolled inputs.Every time that component state is updated the component is rendered again and this affects the performance result."), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.h2, null, "Usage"), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, /* @__PURE__ */ import_react13.default.createElement(_components.code, null, "useForm"), " provides a ", /* @__PURE__ */ import_react13.default.createElement(_components.code, null, "register"), " function, this function returns all properties to manager a field."), "\n", /* @__PURE__ */ import_react13.default.createElement(CodeBlock, {
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
`), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "Use dot notation to create advanced objects or to map object values. Type an entry name and type or an entry property object."), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react13.default.createElement(_components.p, null, "Dot notation is used to access nested objects. For example, if you have an object with a nested object, you can access the nested object using dot notation; ", /* @__PURE__ */ import_react13.default.createElement(_components.code, null, "info.name"), ".\nUse dot notation to access nested arrays. For example, if you\nhave an object with a nested array, you can access the nested array using dot notation;\n", /* @__PURE__ */ import_react13.default.createElement(_components.code, null, "info.array[2]"), "."), "\n"), "\n", /* @__PURE__ */ import_react13.default.createElement(CodeBlock, {
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
`), "\n", /* @__PURE__ */ import_react13.default.createElement(_components.h2, null, "Demo"), "\n", /* @__PURE__ */ import_react13.default.createElement(demo_default, {
    url: "https://codesandbox.io/embed/useform-quick-start-ypoxu?fontsize=14&hidenavigation=1&theme=dark"
  }));
  return MDXLayout ? /* @__PURE__ */ import_react13.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var onchange_form_default = MDXContent5;
var filename5 = "onchange-form.mdx";
var headers5 = typeof attributes5 !== "undefined" && attributes5.headers;
var meta6 = typeof attributes5 !== "undefined" && attributes5.meta;
var links7 = void 0;

// mdx:/home/barbosa/javascript/docs/app/routes/docs/onsubmit-form.mdx
var onsubmit_form_exports = {};
__export(onsubmit_form_exports, {
  attributes: () => attributes6,
  default: () => onsubmit_form_default,
  filename: () => filename6,
  headers: () => headers6,
  links: () => links8,
  meta: () => meta7
});
init_react();
var import_react14 = __toModule(require("react"));
var attributes6 = {
  "meta": {
    "title": "useForm | onSubmit mode",
    "description": "Uncontrolled forms are the most performant way to create react forms. With uncontrolled input values, there is no updating or changing of any states. What you submit is what you get."
  }
};
function MDXContent6(props = {}) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2",
    p: "p",
    a: "a",
    code: "code",
    blockquote: "blockquote"
  }, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react14.default.createElement(import_react14.default.Fragment, null, /* @__PURE__ */ import_react14.default.createElement(_components.h1, null, "onSubmit mode"), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.h2, null, "Description"), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, "There are two types of form input in React. We have the uncontrolled input and the controlled input. Uncontrolled inputs are like traditional HTML form inputs:"), "\n", /* @__PURE__ */ import_react14.default.createElement(CodeBlock, {
    language: "html"
  }, `<input type="text" />
`), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, "With uncontrolled input, there is no updating or changing of any states. When we use uncontrolled input is necessary to set a reference in input for manipulating and receives events, but with userForm it isn't necessary because userForm makes this for us.\nUncontrolled inputs are useful when performance is essential. But if the forms turn very complex debounce forms are the best option."), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, "Ps * You can use uncontrolled form with custom inputs but custom inputs use state in your internal logic.\nIf you want to use uncontrolled form with custom inputs and native inputs the uncontrolled approach is applied only native inputs."), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, /* @__PURE__ */ import_react14.default.createElement(_components.a, {
    href: "https://reactjs.org/docs/forms.html"
  }, "React Docs")), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, "By default, ", /* @__PURE__ */ import_react14.default.createElement(_components.code, null, "useForm"), " use uncontrolled form, isn't necessary to pass any value to useForm hook if you want to use this kind.\nBut when you use this kind of form, it is necessary to realize that values and events validation are available only when onSubmit event is dispatched."), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, "With this approach, it's possible to complete a form without any extra renders."), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.h2, null, "Usage"), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.p, null, /* @__PURE__ */ import_react14.default.createElement(_components.code, null, "useForm"), " provides a ", /* @__PURE__ */ import_react14.default.createElement(_components.code, null, "register"), " function, this function returns all properties to manager a field."), "\n", /* @__PURE__ */ import_react14.default.createElement(CodeBlock, {
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
`), "\n", /* @__PURE__ */ import_react14.default.createElement(_components.h2, null, "Demo"), "\n", /* @__PURE__ */ import_react14.default.createElement(demo_default, {
    url: "https://codesandbox.io/embed/useform-onsubmit-jvz1z?fontsize=14&hidenavigation=1&theme=dark"
  }));
  return MDXLayout ? /* @__PURE__ */ import_react14.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var onsubmit_form_default = MDXContent6;
var filename6 = "onsubmit-form.mdx";
var headers6 = typeof attributes6 !== "undefined" && attributes6.headers;
var meta7 = typeof attributes6 !== "undefined" && attributes6.meta;
var links8 = void 0;

// mdx:/home/barbosa/javascript/docs/app/routes/docs/create-form.mdx
var create_form_exports = {};
__export(create_form_exports, {
  attributes: () => attributes7,
  default: () => create_form_default,
  filename: () => filename7,
  headers: () => headers7,
  links: () => links9,
  meta: () => meta8
});
init_react();
var import_react15 = __toModule(require("react"));
var attributes7 = {
  "meta": {
    "title": "useForm | Create Form",
    "description": "Create form is a function that creates a form and you can use it as a hook."
  }
};
function MDXContent7(props = {}) {
  const _components = Object.assign({}, props.components), { wrapper: MDXLayout } = _components;
  const _content = /* @__PURE__ */ import_react15.default.createElement(import_react15.default.Fragment, null);
  return MDXLayout ? /* @__PURE__ */ import_react15.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var create_form_default = MDXContent7;
var filename7 = "create-form.mdx";
var headers7 = typeof attributes7 !== "undefined" && attributes7.headers;
var meta8 = typeof attributes7 !== "undefined" && attributes7.meta;
var links9 = void 0;

// mdx:/home/barbosa/javascript/docs/app/routes/docs/quick-start.mdx
var quick_start_exports = {};
__export(quick_start_exports, {
  attributes: () => attributes8,
  default: () => quick_start_default,
  filename: () => filename8,
  headers: () => headers8,
  links: () => links10,
  meta: () => meta9
});
init_react();
var import_react16 = __toModule(require("react"));
var attributes8 = {
  "meta": {
    "title": "useForm | Quick Start",
    "description": "Your first step to creating forms."
  }
};
function MDXContent8(props = {}) {
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
  const _content = /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, /* @__PURE__ */ import_react16.default.createElement(_components.h1, null, "Quick Start"), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.p, null, "Hey there!"), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.p, null, "It's really good to see you here, on this first page you will see some steps to create forms easily."), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.h2, null, "Description"), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.p, null, "Forms are an important part of web applications, and with React it's possible to create greats forms,", /* @__PURE__ */ import_react16.default.createElement(_components.br, null), "\n", "react hooks are a game-changer when we think about forms, with hooks is simple to create forms, and you can go on without libraries.", /* @__PURE__ */ import_react16.default.createElement(_components.br, null), "\n", "But when we want to build complex forms with nested fields and validations, might be a good idea to use a library, and you can find a lot of libraries to help you to create forms."), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.h3, null, "So, why UseForm?"), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.p, null, "There are some reasons why you face problems when you want to create forms, and with useForm, you can solve these problems."), "\n", /* @__PURE__ */ import_react16.default.createElement("br", null), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react16.default.createElement(_components.li, null, "State management -  A couple of years ago, you could think that Redux or MobX was a good solution to manage form state in react, but they weren't. Today you can use hooks to manage the form state, hooks like ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "useStatew"), " and ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "useReducer"), " are a good solution to manage the state. But managing values, touched fields and errors could be a problem if you don't have a standard way to manage them. Usually, real applications use nested objects as request payloads, and you should keep it to send the correct data to the server, manage nested values and errors could be a problem using just ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "useReducer"), "."), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.li, null, "Errors-To deal with errors, you can use your validation solution, and it can work well with simple forms, but you can stuck with a lot of errors when you have nested fields."), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.li, null, "Touched fields - Maybe you want to show a message error just when the field is touched, so in order to do that you need to manage the touched fields, it can be really easy to do with ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "useReducer"), ", but you can't do that very well with ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "useReducer"), " when you have nested fields."), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.li, null, "Handle submit - When you want to handle submit, you need to manage the submit event, it's convenient when you have an already solution to do that."), "\n"), "\n", /* @__PURE__ */ import_react16.default.createElement("br", null), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.p, null, "UseForm provides a way to create complex forms easily, this hook returns an object of values \u200B\u200Bin the same shape that it receives, this is possible using dot notation. Therefore,\nit does not matter if the object is complex or has many properties or an array,\nthe result is the same. This process turns very easy to create forms from nested objects,\nthe same layers and properties are replicated in the final object,\nthis approach prevents you to type more code to convert an object from form to backend object type. The same process is realized with errors objects and touched objects."), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.h2, null, "What to expect with useForm"), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react16.default.createElement(_components.li, null, "Performer forms - useForm provides a way to complete a form and submit it without any rerender, by default useForm creates uncontrolled forms."), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.li, null, "Easy to write - useForm has an easy way to write forms with less code. register function return necessary input's properties and it is all we need to manage all events in a native HTML ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "input"), ". Writhe forms without form tag."), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.li, null, "Easy validation - By default useForm uses yup validation, we can write complex validation without effort."), "\n"), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.h2, null, "Installation"), "\n", /* @__PURE__ */ import_react16.default.createElement(CodeBlock, {
    language: "bash"
  }, `npm install --save @use-form/use-form
  `), "\n", /* @__PURE__ */ import_react16.default.createElement(CodeBlock, {
    language: "bash"
  }, `yarn add @use-form/use-form
  `), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.h2, null, "Usage"), "\n", /* @__PURE__ */ import_react16.default.createElement(_components.p, null, "With ", /* @__PURE__ */ import_react16.default.createElement(_components.code, null, "createForm"), " you can create a hook form and use it wherever you want,"), "\n", /* @__PURE__ */ import_react16.default.createElement(demo_default, {
    url: "https://codesandbox.io/embed/useform-quick-start-ypoxu?fontsize=14&hidenavigation=1&theme=dark"
  }));
  return MDXLayout ? /* @__PURE__ */ import_react16.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var quick_start_default = MDXContent8;
var filename8 = "quick-start.mdx";
var headers8 = typeof attributes8 !== "undefined" && attributes8.headers;
var meta9 = typeof attributes8 !== "undefined" && attributes8.meta;
var links10 = void 0;

// mdx:/home/barbosa/javascript/docs/app/routes/docs/concept.mdx
var concept_exports = {};
__export(concept_exports, {
  attributes: () => attributes9,
  default: () => concept_default,
  filename: () => filename9,
  headers: () => headers9,
  links: () => links11,
  meta: () => meta10
});
init_react();
var import_react17 = __toModule(require("react"));
var attributes9 = {
  "meta": {
    "title": "useForm | Concept",
    "description": "How UseForm works, and why we decided to do it this way."
  }
};
function MDXContent9(props = {}) {
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
  const _content = /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement(_components.h1, null, "Concept"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "When you are working on a project, you might want to use a form in different places, or maybe you have a form with a couple of steps in different components, how could you handle this?"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "The most common answer is to use React Context API, or if you are using a form library like ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "react-hook-form"), ", you can use the ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "useFormContext"), " hook, formik has a similar API. These APIS are based on React Context API, so you can use them in the same way."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "But for me this is not the best way to do that, the idea to have a provider whenever you want to share something is weird and not very useful. Besides declaring a provider you should pass the value to the provider, it's really strange for me, because we can do that without a provider, by storing the state in s external store as Zustand do, the UseForm use an external store, for this reason, we don't need to use a React Context API or something similar to store our form state."), "\n", /* @__PURE__ */ import_react17.default.createElement("br", null), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h2, null, "How a store works"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "The store concept becomes very popular in React community by the way of Redux and MobX works, a store is a place where you could keep your state, in the store you can trust, it means that the store is the source of truth, and every change in the state is always a change in the store."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "To deliver every change we need to use a pattern called ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "Observable"), ", so whenever a change happens in the state, the observable can notify the subscribers that the state has changed."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "Now that we know the main concept of the store and the observable, we can go on and understand how UseForm uses it."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h2, null, "How UseForm works"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "UseForm uses an external store to keep the form state, but it's not enough, we need to share the state with other components without React Context. For this reason, we have a function called ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "createForm"), ";\nThis function creates a form and returns a function that can be used as a hook, this hook is connected to the store, so whenever the store changes, the hook will be notified and the form will be updated."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "In other words, the ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "createForm"), " function creates a form and returns a function that has all resources to manage the form, if you use it ten times, it will be the same form and the same store being managed in different places."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "For that reason, we can use the same form in different components without providers or React Context API."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h2, null, "Initial State"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "As the first step, we need to define the initial state of the form, this is the state that will be used when the form is created, we have ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "initialValues"), " and ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "initialErrors"), " properties, ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "initialTouched"), ", all of them are optional."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h2, null, "Form Validation"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "The validation process can be done in two ways:"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "The first and most common is to use a ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "validationSchema"), ", this is an object that contains all the validation rules, the ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "validationSchema"), " should have the same shape from the ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "initialValues"), " object, so if you have a form with a ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "name"), " field, you should have a ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "name"), " field in the validationSchema, this rule is applied to nested fields, we recommend to use ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "Yup"), " library for this. The first way is the recommended way to use validation, because it's the most simple and easy to use, and you have a powerful validation library. If you decide to use this way, you should create and use the ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "validationSchema"), " when you create the form."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "The second way is to use a ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "validate"), " function, this function will be called every time then the form is updated, and it will receive the form values and the form errors, and it should return an object with the new form errors."), "\n"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h2, null, "Native elements vs Custom elements"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "In web development we can find native elements like ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "<input>"), " and ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "<select>"), " and custom elements like ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "<Selectbox/>"), " and ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "<DatePicker/>"), ",\nthere are some differences between them, native elements are HTML elements that are created by the browser, and custom elements are created by the developer,\nthe developer can use native elements to build custom elements."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "By default ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "createForm"), " create a form using just a reference to communicate with fields, since fields like ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "<input>"), " and ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "<select>"), " are native elements, ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "createForm"), " can do it without problems,\nbut if you want to use custom elements, ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "createForm"), " can't do it because most of them doesn't have a reference to native elements, and custom elements normally have an internal state, so to work with custom elements as native elements, we need a ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "Wrapper"), " component."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h3, null, "Wrapper"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "The Wrapper component will be used to wrap the custom elements, and it will be used to create a reference to the native element. (Custom elements should have commons properties like ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "value"), ", ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "onChange"), ", ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "onBlur"), ") and it will be used to create a reference to the native element."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "We need to use a Wrapper because we don't want to rerender the form every time the custom element changes. Wrapper prevents this and makes just the specific custom element rerender."), "\n"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.h2, null, "Controlled vs Uncontrolled vs Debounced forms"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "By default, UseForm creates an agnostic form, which means that the form can be used as you wish, as controlled, uncontrolled or debounced. This configuration should be provided when you are going to use it."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Debounced forms are forms that are updated only when the user stops typing, this is useful when you have a form with a lot of fields, and you don't want to update the form every time the user types, but only when the user stops typing."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Controlled forms are forms that are updated whenever the user types, this is useful if you want to give quick feedback to the user, like a form with a ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "name"), " field, you can use a controlled form to show the user the error when the field is empty before to submit the form."), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.li, null, "Uncontrolled forms are forms that are updated just when the form is submitted, which means that the form can be fulfilled with the values of the form and submitted without rerendering the form."), "\n"), "\n", /* @__PURE__ */ import_react17.default.createElement(_components.p, null, "You can learn more about this in the pages for ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "controlled"), ", ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "uncontrolled"), ", and ", /* @__PURE__ */ import_react17.default.createElement(_components.code, null, "debounced"), " forms."));
  return MDXLayout ? /* @__PURE__ */ import_react17.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var concept_default = MDXContent9;
var filename9 = "concept.mdx";
var headers9 = typeof attributes9 !== "undefined" && attributes9.headers;
var meta10 = typeof attributes9 !== "undefined" && attributes9.meta;
var links11 = void 0;

// mdx:/home/barbosa/javascript/docs/app/routes/docs/index.mdx
var docs_exports2 = {};
__export(docs_exports2, {
  attributes: () => attributes10,
  default: () => docs_default2,
  filename: () => filename10,
  headers: () => headers10,
  links: () => links12,
  meta: () => meta11
});
init_react();
var import_react18 = __toModule(require("react"));
var attributes10 = {
  "meta": {
    "title": "useForm | Readme",
    "description": "Your fist step to create form easily without effort."
  }
};
function MDXContent10(props = {}) {
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
  const _content = /* @__PURE__ */ import_react18.default.createElement(import_react18.default.Fragment, null, /* @__PURE__ */ import_react18.default.createElement(_components.p, null, /* @__PURE__ */ import_react18.default.createElement(_components.img, {
    src: "https://raw.githubusercontent.com/use-form/use-form/main/img/logo3.png",
    alt: "Logo"
  })), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h1, null, "Welcome to useForm \u{1F44B}"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.blockquote, null, "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useForm"), " provide a way to create complex forms easily."), "\n"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h3, null, "\u{1F3E0} ", /* @__PURE__ */ import_react18.default.createElement(_components.a, {
    href: "https://useform.org"
  }, "Homepage")), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h3, null, "\u2728 ", /* @__PURE__ */ import_react18.default.createElement(_components.a, {
    href: "https://codesandbox.io/s/useform-2u2ju"
  }, "Demo")), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "Description"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "Forms are an important part of web applications, and with react it's possible to create greats forms,", /* @__PURE__ */ import_react18.default.createElement(_components.br, null), "\n", "react hooks are a game-changer when we think about forms, with hooks is simple to create forms, and you can go on without libraries.", /* @__PURE__ */ import_react18.default.createElement(_components.br, null), "\n", "But when we want to build complex forms with nested fields and validations, maight be a good idea to use a library, and you can find a lot of libraries to help you to create forms."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h3, null, "So, why UseForm?"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "There are some reasons why you face problems when you want to create forms, and with useForm you can solve this problems."), "\n", /* @__PURE__ */ import_react18.default.createElement("br", null), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "State management -  A couple of yeears ago, you could think that Redux or MobX was  a good solution to manage form state in react, but they wasn't. Today you can use hooks to manage form state, hooks like ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useStatew"), " and ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useReducer"), " are a good solution to manage state. But manage values, touched fields and errors could be a problem if you don't have a standard way to manager them. Usually real applications use nested objects as request paylooads, and you should keep it in order to send the correct data to the server, manage nested values and errors could be a problem using just ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useReducer"), "."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "Errors - To deal with errors, you can use your woun validation solution, and it can work well with simple forms, but you can stuck with a lot of errors when you have nested fields."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "Touched fields - Maybe you want to show a message error just when the field is touched, so in order to do that you need to manager the touched fields, it can be really easy to do with ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useReducer"), ", but you can't do that very well with ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useState"), " and ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "useReducer"), " when you have nested fields."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "Handle submit - When you want to handle submit, you need to manage the submit event, it's really convinient when you have a already solution to do that."), "\n"), "\n", /* @__PURE__ */ import_react18.default.createElement("br", null), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "UseForm provides a way to create complex forms easily, this hook returns an object of values \u200B\u200Bin the same shape that it receives, this is possible using dot notation. Therefore,\nit does not matter if the object is complex or has many properties or array,\nthe result is the same. This process turns very easily to create forms from an object with several layers,\nthe same layers and properties are replicated in the final object,\nthis approach prevents you to type more code to convert an object from form to backend object type. The same process is realized with errors object and touched objects."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "What to expect with useForm"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.ul, null, "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "Performer forms - useForm provides a way to complete a form and submit it without any rerender, by default useForm creates uncontrolled forms."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "Easy to write - useForm has an easy way to write forms with less code. register function return necessary input's properties and it is all we need to manage all events in a native HTML ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "input"), ". Writhe forms without form tag."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.li, null, "Easy validation - By default useForm uses yup validation, we can write complex validation without effort."), "\n"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "Installation"), "\n", /* @__PURE__ */ import_react18.default.createElement(CodeBlock, {
    language: "bash"
  }, `npm install --save @use-form/use-form
  `), "\n", /* @__PURE__ */ import_react18.default.createElement(CodeBlock, {
    language: "bash"
  }, `yarn add @use-form/use-form
  `), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "Usage"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "With ", /* @__PURE__ */ import_react18.default.createElement(_components.code, null, "createForm"), " you can create a hook form and use it wherever you want,"), "\n", /* @__PURE__ */ import_react18.default.createElement("br", null), "\n", /* @__PURE__ */ import_react18.default.createElement(CodeBlock, {
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
`), "\n", /* @__PURE__ */ import_react18.default.createElement(CodeBlock, {
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
`), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h3, null, /* @__PURE__ */ import_react18.default.createElement(_components.a, {
    href: "https://dev.to/jucian0/building-forms-with-useform-1cna"
  }, "Post")), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "\u{1F91D} Contributing"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "Contributions, issues and feature requests are welcome!"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "Feel free to check ", /* @__PURE__ */ import_react18.default.createElement(_components.a, {
    href: "https://github.com/use-form/use-form/issues"
  }, "issues page"), ". You can also take a look at the ", /* @__PURE__ */ import_react18.default.createElement(_components.a, {
    href: "https://github.com/Jucian0/use-form/blob/main/CONTRIBUTING.md"
  }, "contributing guide"), "."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "Show your support"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "Give a \u2B50\uFE0F if this project helped you!"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.h2, null, "\u{1F4DD} License"), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "Copyright \xA9 2020 ", /* @__PURE__ */ import_react18.default.createElement(_components.a, {
    href: "https://github.com/use-form"
  }, "useForm"), "."), "\n", /* @__PURE__ */ import_react18.default.createElement(_components.p, null, "This project is ", /* @__PURE__ */ import_react18.default.createElement(_components.a, {
    href: "https://github.com/use-form/use-form/blob/53debd6986650f76561795f2069d6eebc5db6c65/LICENSE"
  }, "MIT"), " licensed."));
  return MDXLayout ? /* @__PURE__ */ import_react18.default.createElement(MDXLayout, __spreadValues({}, props), _content) : _content;
}
var docs_default2 = MDXContent10;
var filename10 = "index.mdx";
var headers10 = typeof attributes10 !== "undefined" && attributes10.headers;
var meta11 = typeof attributes10 !== "undefined" && attributes10.meta;
var links12 = void 0;

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3N0eWxlcy5jb250ZXh0LnRzIiwgInJvdXRlLW1vZHVsZTovaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3V0aWxzL21pc2MudHMiLCAicm91dGUtbW9kdWxlOi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9ob2NzL3dpdGhIb21lLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9mb290ZXIvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvbG9nby9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9hcHAvY29uZmlnL2luZGV4LnRzIiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL25hdmJhci9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL3N0eWxlcy50cyIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvaG9jcy93aXRoRG9jcy50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvY29udGVudEZvb3Rlci9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvY29udGVudEZvb3Rlci9zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zdHlsZXMudHMiLCAibWR4Oi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9jdXN0b20tY29tcG9uZW50cy5tZHgiLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvZGVtby9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvY29kZWJsb2NrL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9jb2RlYmxvY2svc3R5bGVzLnRzIiwgIm1keDovaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3MvZm9ybS12YWxpZGF0aW9uLm1keCIsICJtZHg6L2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL25hdGl2ZS1lbGVtZW50cy5tZHgiLCAibWR4Oi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9kZWJvdW5jZWQtZm9ybS5tZHgiLCAibWR4Oi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9vbmNoYW5nZS1mb3JtLm1keCIsICJtZHg6L2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL29uc3VibWl0LWZvcm0ubWR4IiwgIm1keDovaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3MvY3JlYXRlLWZvcm0ubWR4IiwgIm1keDovaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3MvcXVpY2stc3RhcnQubWR4IiwgIm1keDovaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3MvY29uY2VwdC5tZHgiLCAibWR4Oi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9pbmRleC5tZHgiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3MudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9jdXN0b20tY29tcG9uZW50cy5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL2Zvcm0tdmFsaWRhdGlvbi5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL25hdGl2ZS1lbGVtZW50cy5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL2RlYm91bmNlZC1mb3JtLm1keFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3Mvb25jaGFuZ2UtZm9ybS5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL29uc3VibWl0LWZvcm0ubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9jcmVhdGUtZm9ybS5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9xdWljay1zdGFydC5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9jb25jZXB0Lm1keFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMiBmcm9tIFwiL2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL2luZGV4Lm1keFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2RvY3NcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kb2NzXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiZG9jc1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2RvY3MvY3VzdG9tLWNvbXBvbmVudHNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kb2NzL2N1c3RvbS1jb21wb25lbnRzXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RvY3NcIixcbiAgICBwYXRoOiBcImN1c3RvbS1jb21wb25lbnRzXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvZG9jcy9mb3JtLXZhbGlkYXRpb25cIjoge1xuICAgIGlkOiBcInJvdXRlcy9kb2NzL2Zvcm0tdmFsaWRhdGlvblwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9kb2NzXCIsXG4gICAgcGF0aDogXCJmb3JtLXZhbGlkYXRpb25cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy9kb2NzL25hdGl2ZS1lbGVtZW50c1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RvY3MvbmF0aXZlLWVsZW1lbnRzXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RvY3NcIixcbiAgICBwYXRoOiBcIm5hdGl2ZS1lbGVtZW50c1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU1XG4gIH0sXG4gIFwicm91dGVzL2RvY3MvZGVib3VuY2VkLWZvcm1cIjoge1xuICAgIGlkOiBcInJvdXRlcy9kb2NzL2RlYm91bmNlZC1mb3JtXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RvY3NcIixcbiAgICBwYXRoOiBcImRlYm91bmNlZC1mb3JtXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTZcbiAgfSxcbiAgXCJyb3V0ZXMvZG9jcy9vbmNoYW5nZS1mb3JtXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZG9jcy9vbmNoYW5nZS1mb3JtXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RvY3NcIixcbiAgICBwYXRoOiBcIm9uY2hhbmdlLWZvcm1cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlN1xuICB9LFxuICBcInJvdXRlcy9kb2NzL29uc3VibWl0LWZvcm1cIjoge1xuICAgIGlkOiBcInJvdXRlcy9kb2NzL29uc3VibWl0LWZvcm1cIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZG9jc1wiLFxuICAgIHBhdGg6IFwib25zdWJtaXQtZm9ybVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU4XG4gIH0sXG4gIFwicm91dGVzL2RvY3MvY3JlYXRlLWZvcm1cIjoge1xuICAgIGlkOiBcInJvdXRlcy9kb2NzL2NyZWF0ZS1mb3JtXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RvY3NcIixcbiAgICBwYXRoOiBcImNyZWF0ZS1mb3JtXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTlcbiAgfSxcbiAgXCJyb3V0ZXMvZG9jcy9xdWljay1zdGFydFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RvY3MvcXVpY2stc3RhcnRcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZG9jc1wiLFxuICAgIHBhdGg6IFwicXVpY2stc3RhcnRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTBcbiAgfSxcbiAgXCJyb3V0ZXMvZG9jcy9jb25jZXB0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZG9jcy9jb25jZXB0XCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RvY3NcIixcbiAgICBwYXRoOiBcImNvbmNlcHRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTFcbiAgfSxcbiAgXCJyb3V0ZXMvZG9jcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RvY3MvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZG9jc1wiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTEyXG4gIH1cbn07IiwgIi8vIGFwcC9lbnRyeS5zZXJ2ZXIudHN4XG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgU3R5bGVzQ29udGV4dCB9IGZyb20gXCIuL3N0eWxlcy5jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcblxuICBjb25zdCBzaGVldCA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KCk7XG5cbiAgcmVuZGVyVG9TdHJpbmcoXG4gICAgc2hlZXQuY29sbGVjdFN0eWxlcyhcbiAgICAgIDxTdHlsZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtudWxsfT5cbiAgICAgICAgPFJlbWl4U2VydmVyXG4gICAgICAgICAgY29udGV4dD17cmVtaXhDb250ZXh0fVxuICAgICAgICAgIHVybD17cmVxdWVzdC51cmx9XG4gICAgICAgIC8+XG4gICAgICA8L1N0eWxlc0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuICApO1xuXG4gIGNvbnN0IHN0eWxlcyA9IHNoZWV0LmdldFN0eWxlRWxlbWVudCgpO1xuICBzaGVldC5zZWFsKCk7XG5cbiAgY29uc3QgbWFya3VwID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gICAgPFN0eWxlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0eWxlc30+XG4gICAgICA8UmVtaXhTZXJ2ZXJcbiAgICAgICAgY29udGV4dD17cmVtaXhDb250ZXh0fVxuICAgICAgICB1cmw9e3JlcXVlc3QudXJsfVxuICAgICAgLz5cbiAgICA8L1N0eWxlc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59IiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlLCBjc3MsIERlZmF1bHRUaGVtZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgU3R5bGVzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8bnVsbCB8IFJlYWN0LlJlYWN0RWxlbWVudDx7fSwgc3RyaW5nIHwgUmVhY3QuSlNYRWxlbWVudENvbnN0cnVjdG9yPGFueT4+W10+KG51bGwpO1xuZXhwb3J0IGNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55Pih7fSlcblxuZGVjbGFyZSBtb2R1bGUgXCJzdHlsZWQtY29tcG9uZW50c1wiIHtcbiAgIGV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdFRoZW1lIHtcbiAgICAgIGNvbG9yczoge1xuICAgICAgICAgYmtnQ29udGVudDogc3RyaW5nO1xuICAgICAgICAgcHJpbWFyeTogc3RyaW5nXG4gICAgICAgICBwcmltYXJ5SG92ZXI6IHN0cmluZ1xuICAgICAgICAgc2Vjb25kYXJ5OiBzdHJpbmdcbiAgICAgICAgIGRhcms6IHN0cmluZ1xuICAgICAgICAgYm9yZGVyOiBzdHJpbmdcbiAgICAgICAgIHJlZDogc3RyaW5nXG4gICAgICAgICBiYWNrZ3JvdW5kOiBzdHJpbmdcbiAgICAgICAgIHRleHRDb2xvcjogc3RyaW5nXG4gICAgICAgICBoZWFkaW5nQ29sb3I6IHN0cmluZ1xuICAgICAgICAgYmtnUHJlOiBzdHJpbmdcbiAgICAgICAgIGNvbG9yUHJlOiBzdHJpbmdcbiAgICAgICAgIGJrZ1Njcm9sbGJhcjogc3RyaW5nXG4gICAgICAgICB3aGl0ZTogc3RyaW5nXG4gICAgICB9XG4gICB9XG59XG5cbmV4cG9ydCBjb25zdCBsaWdodFRoZW1lOiBEZWZhdWx0VGhlbWUgPSB7XG4gICBjb2xvcnM6IHtcbiAgICAgIHByaW1hcnk6ICcjMmVjNGI2JyxcbiAgICAgIHByaW1hcnlIb3ZlcjogJyMyOUIwQTMnLFxuICAgICAgc2Vjb25kYXJ5OiAnIzNhNTA2YicsXG4gICAgICBkYXJrOiAnIzBiMTMyYicsXG4gICAgICBib3JkZXI6ICcjZWRmMmY0JyxcbiAgICAgIHJlZDogJyNlNzFkMzYnLFxuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxuICAgICAgdGV4dENvbG9yOiAnIzRiNTU2MycsXG4gICAgICBoZWFkaW5nQ29sb3I6ICcjMTExODI3JyxcbiAgICAgIGJrZ1ByZTogJyNlZGYyZjQnLFxuICAgICAgY29sb3JQcmU6ICcjZWRmMmY0JyxcbiAgICAgIGJrZ1Njcm9sbGJhcjogJyMzYTUwNmInLFxuICAgICAgYmtnQ29udGVudDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgd2hpdGU6ICcjRkZGRkZGJ1xuICAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IGRhcmtUaGVtZSA9IHtcbiAgIGNvbG9yczoge1xuICAgICAgcHJpbWFyeTogJyMyZWM0YjYnLFxuICAgICAgcHJpbWFyeUhvdmVyOiAnIzI5QjBBMycsXG4gICAgICBzZWNvbmRhcnk6ICcjM2E1MDZiJyxcbiAgICAgIGRhcms6ICcjMGIxMzJiJyxcbiAgICAgIGJvcmRlcjogJyMxYjI2MmMnLFxuICAgICAgcmVkOiAnI2U3MWQzNicsXG4gICAgICBiYWNrZ3JvdW5kOiAnIzFjMjEyOCcsXG4gICAgICB0ZXh0Q29sb3I6ICcjZWRmMmY0JyxcbiAgICAgIGhlYWRpbmdDb2xvcjogJyNlZGYyZjQnLFxuICAgICAgYmtnUHJlOiAnIzNhNTA2YicsXG4gICAgICBjb2xvclByZTogJyNlZGYyZjQnLFxuICAgICAgYmtnU2Nyb2xsYmFyOiAnIzNhNTA2YicsXG4gICAgICBia2dDb250ZW50OiBcInRyYW5zcGFyZW50XCIsXG4gICAgICB3aGl0ZTogJyNGRkZGRkYnXG4gICB9LFxufVxuXG5leHBvcnQgY29uc3QgU2Nyb2xsQmFyID0gY3NzYFxuICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogMC42MjVyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci10b3A6IDAuNjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMC42MjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICB9XG5cbiAgIDo6LXdlYmtpdC1zY3JvbGxiYXI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgIH1cblxuICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ia2dTY3JvbGxiYXJ9O1xuICAgICAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgbWluLWhlaWdodDogMC42MjVyZW07XG4gICB9XG5cbiAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6dmVydGljYWw6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJrZ1Njcm9sbGJhcn07XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gICB9XG4gICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJrZ1Njcm9sbGJhcn07XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gICAgICB3aWR0aDogMC42MjVyZW07XG4gICB9XG5cbiAgIC5ob3Jpem9udGFsLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xuICAgICAgd2lkdGg6IDAuNDM3NXJlbTtcbiAgIH1cblxuICAgLmhvcml6b250YWwtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhcjpob3Jpem9udGFsIHtcbiAgICAgIGhlaWdodDogMC40Mzc1cmVtO1xuICAgfVxuXG4gICAuaG9yaXpvbnRhbC1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJrZ1Njcm9sbGJhcn07XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjQzNzVyZW07XG4gICB9XG5cbiAgIC5ob3Jpem9udGFsLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgICAgIHBhZGRpbmc6IDAuMDYyNXJlbTtcbiAgIH1cblxuICAgLmhvcml6b250YWwtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ia2dTY3JvbGxiYXJ9O1xuICAgfVxuYFxuXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcblxuICAgKntcbiAgICAgIG1hcmdpbjowO1xuICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgJHtTY3JvbGxCYXJ9O1xuICAgICAgb3V0bGluZTpub25lO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgIH1cbiAgIGh0bWwsIGJvZHkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICAgfVxuXG4gICAgaDF7XG4gICAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5oZWFkaW5nQ29sb3J9O1xuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgLy9tYXJnaW4tdG9wOiAxLjZlbTtcbiAgICAgLy8gbWFyZ2luLWJvdHRvbTogLjhlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICBzY3JvbGwtbWFyZ2luLXRvcDogMS42ZW07XG4gICAgfVxuXG4gICAgaDJ7XG4gICAgICBmb250LXNpemU6MS40Mjg1NzE0ZW07XG4gICAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5oZWFkaW5nQ29sb3J9O1xuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgIG1hcmdpbi10b3A6IDEuNmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLjhlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICBzY3JvbGwtbWFyZ2luLXRvcDogMS42ZW07XG4gICAgfVxuXG4gICAgaDN7XG4gICAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5oZWFkaW5nQ29sb3J9O1xuICAgICAgZm9udC1zaXplOiAxLjI4NTcxNDNlbTtcbiAgICAgIG1hcmdpbi10b3A6IDEuNTU1NTU1NmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLjQ0NDQ0NDRlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU1NTU1NTY7XG4gICAgICBzY3JvbGwtbWFyZ2luLXRvcDogMS41NTU1NTU2ZW07XG4gICAgfVxuXG4gICAgaDR7XG4gICAgICBmb250LXNpemU6MXJlbTtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmhlYWRpbmdDb2xvcn07XG4gICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgbWFyZ2luLXRvcDogMS42ZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAuOGVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIHNjcm9sbC1tYXJnaW4tdG9wOiAxLjZlbTtcbiAgICB9XG5cbiAgIGF7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnNlY29uZGFyeX07XG4gICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XG4gICAgICAmOmhvdmVye1xuICAgICAgICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICB9XG4gICB9XG5cbiAgIHB7XG4gICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjcxNDI4NTc7XG4gICAgICBzY3JvbGwtbWFyZ2luLXRvcDogMS42ZW07XG5cbiAgICAgIGNvZGV7XG4gICAgICAgICBkaXNwbGF5OmlubGluZTtcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmtnUHJlfTtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6LjNyZW07XG4gICAgICAgICBmb250LXNpemU6Ljg1cmVtO1xuICAgICAgICAgZm9udC1mYW1pbHk6TW9ub3NwYWNlO1xuICAgICAgICAgcGFkZGluZzogMC4xMjVyZW0gMC4yNXJlbTtcbiAgICAgICAgIGRpc3BsYXk6aW5saW5lO1xuICAgICAgICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgICAgIH1cbiAgICAgIHN0cm9uZ3tcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgfVxuXG4gICBzdHJvbmd7XG4gICAgIGZvbnQtd2VpZ2h0OjUwMDtcbiAgIH1cblxuICAgbGluZS1oZWlnaHQsIHVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgIH1cblxuXG4gICB1bHtcbiAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgc2Nyb2xsLW1hcmdpbi10b3A6IDEuNmVtO1xuICAgfVxuXG4gICBsaXtcbiAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgc2Nyb2xsLW1hcmdpbi10b3A6IDEuNmVtO1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG4gICB9XG5cbiAgIHRhYmxle1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4xODhyZW0gMC4zNzVyZW0gcmdiYSgwLDAsMCwwLjE2KSwgMCAwLjE4OHJlbSAwLjM3NXJlbSByZ2JhKDAsMCwwLDAuMjMpO1xuICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XG5cbiAgIHRkLCB0aCB7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtIDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtIDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgfVxuXG4gICB0aGVhZCB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4wNjNyZW0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYm9yZGVyfTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICB9XG5cbiAgIHRib2R5IHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4wNjNyZW0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYm9yZGVyfTtcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiByZWQ7XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206bm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXHR9XG4gICB9XG5cbiAgIGJsb2NrcXVvdGV7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ib3JkZXJ9O1xuICAgICAgcGFkZGluZzogMXB4IDAgMXB4IDE1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgICAgZm9udC1zdHlsZTppdGFsaWM7XG4gICAgICAmIHB7XG4gICAgICAgICBtYXJnaW4tdG9wOjEycHg7XG4gICAgICAgICBtYXJnaW4tYm90dG9tOjEycHg7XG4gICAgICB9XG4gICB9XG5gXG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIExvYWRlckZ1bmN0aW9uLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUxheW91dEVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0eWxlc0NvbnRleHQsIFRoZW1lQ29udGV4dCB9IGZyb20gXCIuL3N0eWxlcy5jb250ZXh0XCI7XG5pbXBvcnQgeyByZW1vdmVUcmFpbGluZ1NsYXNoIH0gZnJvbSBcIi4vdXRpbHMvbWlzY1wiO1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcInVzZUZvcm1cIixcbiAgICBkZXNjcmlwdGlvbjogXCJ1c2VGb3JtIHByb3ZpZGVzIGEgZWFzeSB3YXkgdG8gY3JlYXRlIGZvcm1zLlwiLFxuICAgIHZpZXdwb3J0OiAnd2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSx2aWV3cG9ydC1maXQ9Y292ZXInLFxuICAgIGNoYXJTZXQ6ICd1dGYtOCcsXG4gICAga2V5d29yZHM6ICd1c2VGb3JtLCBmb3JtLCByZWFjdCwgaG9va3MsIGNvbnRleHQsIGNvbnRleHQgYXBpLCBjb250ZXh0IGFwaSB1c2VGb3JtLCB1c2Vmb3JtLCB1c2UtZm9ybSwgZm9ybXMsIGlucHV0JyxcbiAgICB0aGVtZUNvbG9yOiAnIzJlYzRiNicsXG4gICAgb3JpZ2luOiAnaHR0cHM6Ly91c2Vmb3JtLm9yZycsXG4gICAgaW1hZ2U6ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdXNlRm9ybS91c2VGb3JtL21haW4vaW1nL2xvZ28zLnBuZycsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiBbXG4gIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcIiB9LFxuICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiIH1cbl07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpXG5cbiAgcmV0dXJuIHtcbiAgICB1cmxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3Qgc3R5bGVzID0gdXNlQ29udGV4dChTdHlsZXNDb250ZXh0KTtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRoZW1lKHNlbGVjdGVkVGhlbWU6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBzZXRUaGVtZShzZWxlY3RlZFRoZW1lKVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgc2VsZWN0ZWRUaGVtZSlcbiAgICB9XG4gIH1cblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgY29uc3QgY3VycmVudFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJylcbiAgICAgIGhhbmRsZVRoZW1lKGN1cnJlbnRUaGVtZSB8fCAnbGlnaHQnKVxuICAgIH1cblxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIiBjb250ZW50PVwiNExQQy1CcU01aldMTFlZRHpKNzQwVlNmOEFIQ0Z2Z25lREtlTTJkMkIza1wiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiY2Fub25pY2FsXCJcbiAgICAgICAgICBocmVmPXtyZW1vdmVUcmFpbGluZ1NsYXNoKGRhdGEudXJsKX1cbiAgICAgICAgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICAgIHtzdHlsZXN9XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0aGVtZSwgc2V0VGhlbWU6IGhhbmRsZVRoZW1lIH19PlxuICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5VcmwocmVxdWVzdDogUmVxdWVzdCkge1xuICAgY29uc3QgaG9zdCA9XG4gICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoJ1gtRm9yd2FyZGVkLUhvc3QnKSA/PyByZXF1ZXN0LmhlYWRlcnMuZ2V0KCdob3N0JylcbiAgIGlmICghaG9zdCkge1xuICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBkZXRlcm1pbmUgZG9tYWluIFVSTC4nKVxuICAgfVxuICAgY29uc3QgcHJvdG9jb2wgPSBob3N0LmluY2x1ZGVzKCdsb2NhbGhvc3QnKSA/ICdodHRwJyA6ICdodHRwcydcblxuICAgcmV0dXJuIGAke3Byb3RvY29sfTovLyR7aG9zdH1gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUcmFpbGluZ1NsYXNoKHM6IHN0cmluZykge1xuICAgcmV0dXJuIHMuZW5kc1dpdGgoJy8nKSA/IHMuc2xpY2UoMCwgLTEpIDogc1xuIH1cblxuIGV4cG9ydCBmdW5jdGlvbiB0eXBlZEJvb2xlYW48VD4oXG4gICB2YWx1ZTogVCxcbiApOiB2YWx1ZSBpcyBFeGNsdWRlPFQsICcnIHwgMCB8IGZhbHNlIHwgbnVsbCB8IHVuZGVmaW5lZD4ge1xuICAgcmV0dXJuIEJvb2xlYW4odmFsdWUpXG4gfSIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHdpdGhIb21lIGZyb20gXCJ+L2hvY3Mvd2l0aEhvbWVcIjtcbmltcG9ydCBJZnJhbWUgZnJvbSAncmVhY3QtaWZyYW1lJ1xuXG5cblxuY29uc3QgSGVybyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOjEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OnN0YXJ0O1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcblxuXG5cbiAgaDF7XG4gICAgZm9udC1zaXplOjNlbTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gIH1cblxuICBwe1xuICAgIGZvbnQtc2l6ZToxLjZlbTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gIH1cblxuICBkaXZ7XG5cbiAgICBwYWRkaW5nOjE1cHg7XG5cbiAgICAuYnRue1xuICAgICAgYm9yZGVyOjFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgICBmb250LXdlaWdodDo2MDA7XG4gICAgICBmb250LXNpemU6MS4zZW07XG4gICAgICBwYWRkaW5nOjEwcHggMzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICB0cmFuc2l0aW9uOmVhc2UgMzAwbXM7XG4gICAgICBtYXJnaW46NXB4O1xuICBcbiAgICAgICY6aG92ZXJ7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC5kb2NzLWJ0bntcbiAgICAgIGJvcmRlcjoxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgICAgZm9udC1zaXplOjEuM2VtO1xuICAgICAgcGFkZGluZzoxMHB4IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICAgIHRyYW5zaXRpb246ZWFzZSAzMDBtcztcbiAgICAgIG1hcmdpbjoyMHB4O1xuICBcbiAgICAgICY6aG92ZXJ7XG4gICAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OmdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjQwcHgsIDFmcikpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLGF1dG8pOyBcbiAgY29sdW1uLWdhcDogMTBweDtcbiAgcm93LWdhcDoxMHB4O1xuICB3aWR0aDoxMDAlO1xuICBtYXgtd2lkdGg6MTIwMHB4O1xuICBtYXJnaW46MCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICBwYWRkaW5nOjIwcHg7XG4gIFxuICAmIGRpdntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OnN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICAgcGFkZGluZzoyMHB4O1xuICAgICYgaDEsIHB7XG4gICAgfVxuXG4gICAgJiBpbWd7XG4gICAgICB3aWR0aDoyMCU7XG4gICAgICBoZWlnaHQ6YXV0bztcbiAgICB9XG4gIH1cblxuYFxuXG5jb25zdCBDb2RlU2FuZEJveCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOjEwMCU7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gIHBhZGRpbmctYm90dG9tOjEwMHB4O1xuXG4gIGgxe1xuICAgIGZvbnQtc2l6ZTozZW07XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLHNhbnMtc2VyaWY7XG4gICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gIH1cblxuICBkaXZ7XG4gICAgd2lkdGg6MTA0MHB4O1xuICAgIHBhZGRpbmc6MnB4O1xuICAgIC5zYW5kYm94e1xuICAgICAgYm9yZGVyOm5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOjhweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcbiAgICB9XG4gIH1cbmBcblxuXG5mdW5jdGlvbiBJbmRleCgpIHtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgPlxuICAgICAgPEhlcm8+XG4gICAgICAgIDxoMT5Vc2UgRm9ybTwvaDE+XG4gICAgICAgIDxwPlVzZSBGb3JtIHByb3ZpZGVzIHlvdSBhIHNpbXBsZSB3YXkgdG8gY3JlYXRlIGZvcm1zIHdpdGggUmVhY3Q8L3A+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiZG9jcy1idG5cIiB0bz17Jy9kb2NzJ30+UmVhZCBkb2NzPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ0blwiIHRvPXsnL2RvY3MvcXVpY2stc3RhcnQnfT5RdWljayBzdGFydDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxDb2RlU2FuZEJveD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPElmcmFtZVxuICAgICAgICAgICAgICB1cmw9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL3VzZWZvcm0tZm9ya2VkLW9vanVxP2ZvbnRzaXplPTE0JmhpZGVuYXZpZ2F0aW9uPTEmdGhlbWU9ZGFya1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjY1MHB4XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2FuZGJveFwiXG4gICAgICAgICAgICAgIGlkPVwibXlJZFwiXG4gICAgICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2RlU2FuZEJveD5cbiAgICAgIDwvSGVybz5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5FYXN5PC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+TGVzcyBjb2RlLiA8L3N0cm9uZz5cbiAgICAgICAgICAgIFVzZUZvcm0gaXMgdGhlIGVhc2llc3Qgd2F5IHRvIGNyZWF0ZSBmb3JtcyB3aXRoIFJlYWN0LiBDcmVhdGUgYSBmb3JtIGFuZCB1c2UgaXQgd2hlcmV2ZXIgeW91IHdhbnQsIGRvbid0IHdvcnJ5IHdpdGggUmVhY3QgQ29udGV4dCwgb3IgUmVkdXguIFlvdSBjYW4gc2hhcmUgeW91ciBmb3JtIHdpdGggb3RoZXIgY29tcG9uZW50cyBqdXN0IGJ5IHVzaW5nIHRoZSBob29rIGNyZWF0ZWQgYnkgY3JlYXRlRm9ybSBmdW5jdGlvbi5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5GbGV4aWJsZTwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3Ryb25nPkNyZWF0ZSBhIGZvcm0gYW4gdXNlIGFzIG9uU3VibWl0LCBvbkNoYW5nZSBvciBkZWJvdW5jZWQgbW9kZS4gPC9zdHJvbmc+XG4gICAgICAgICAgICBDcmVhdGUgcG93ZXJmdWwgZm9ybXMgd2l0aCBVc2VGb3JtLiBZb3UgY2FuIGNyZWF0ZSB5b3VyIG93biBmb3JtIHdpdGggeW91ciBvd24gZmllbGRzLCBhbmQgeW91IGNhbiB1c2UgeW91ciBvd24gdmFsaWRhdGlvbiBydWxlcy4gVXNlRm9ybSBhbGxvd3MgeW91IHRvIGNyZWF0ZSBmb3JtLCBhbmQgdXNlIGl0IGFzIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgZm9ybS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5QZXJmb3JtYW5jZTwvaDE+XG4gICAgICAgICAgPHA+PHN0cm9uZz5KdXN0IG9uZSByZW5kZXIuIDwvc3Ryb25nPlxuICAgICAgICAgICAgVGhlcmUgYXJlIG1hbnkgZm9ybSBsaWJyYXJpZXMsIG1vc3Qgb2Ygd2hpY2ggYXJlIGhlYXZ5LCBhbmQgYWxsb3cgeW91IHRvIGNyZWF0ZSBqdXN0IG9uZSBraW5kIG9mIGZvcm0sIGJ1dCB3aXRoIFVzZUZvcm0geW91IGNhbiBmdWxmaWxsIGFuZCBzdWJtaXQgYSBmb3JtIHdpdGgganVzdCBvbmUgcmVuZGVyLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhIb21lKEluZGV4KTsiLCAiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgZGFya1RoZW1lLCBHbG9iYWxTdHlsZSwgbGlnaHRUaGVtZSwgVGhlbWVDb250ZXh0IH0gZnJvbSAnfi9zdHlsZXMuY29udGV4dCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXInXG5cbmNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbmBcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYFxuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJrZ0NvbnRlbnR9O1xuICBtYXJnaW4tdG9wOjYwcHg7XG5gXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuZnVuY3Rpb24gSG9tZUxheW91dCh7IGNoaWxkcmVuIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPE1haW4+XG4gICAgICA8TmF2YmFyIHNldE9wZW49eygpID0+IHsgfX0gLz5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxDb250ZW50PntjaGlsZHJlbn08L0NvbnRlbnQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L01haW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aEhvbWUoQ29tcG9uZW50OiBSZWFjdC5KU1hFbGVtZW50Q29uc3RydWN0b3I8YW55Pikge1xuICByZXR1cm4gZnVuY3Rpb24gRG9jc0NvbXBvbmVudChwcm9wczogYW55KSB7XG4gICAgY29uc3QgeyB0aGVtZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpXG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZSA9PT0gJ2xpZ2h0JyA/IGxpZ2h0VGhlbWUgOiBkYXJrVGhlbWV9PlxuICAgICAgICA8SG9tZUxheW91dD5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgPC9Ib21lTGF5b3V0PlxuICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApXG4gIH1cbn0iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBDb250YWluZXIsIEZvb3RlckNvbnRlbnQsIEZvb3RlckluZm9ybWF0aW9uLCBGb290ZXJMb2dvIH0gZnJvbSAnLi9zdHlsZXMnXG5pbXBvcnQgeyBMb2dvIH0gZnJvbSAnLi4vbG9nbydcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJ34vY29uZmlnJ1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL2dyZWVuX2xvZ28uc3ZnJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEZvb3RlckNvbnRlbnQ+XG4gICAgICAgIDxGb290ZXJMb2dvPlxuICAgICAgICAgIDxMb2dvPlxuICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD1cImxvZ29cIiBjbGFzc05hbWU9J2xvZ28nIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yIGZvbnQtZXh0cmFib2xkIGhpZGRlbiBtZDppbmxpbmVcIj57Q29uZmlnLnNpdGVOYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8L0xvZ28+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9vdGVyLXRleHRcIj57Q29uZmlnLmZvb3RlclRleHR9PC9zcGFuPlxuICAgICAgICA8L0Zvb3RlckxvZ28+XG4gICAgICAgIDxGb290ZXJJbmZvcm1hdGlvbj5cbiAgICAgICAgICA8aDE+RG9jczwvaDE+XG4gICAgICAgICAgPExpbmsgdG89e2Ake0NvbmZpZy5wYXRofWRvY3MvcXVpY2stc3RhcnRgfT5RdWljayBzdGFydDwvTGluaz5cbiAgICAgICAgICA8TGluayB0bz17YCR7Q29uZmlnLnBhdGh9ZG9jc2B9PkRvY3M8L0xpbms+XG4gICAgICAgIDwvRm9vdGVySW5mb3JtYXRpb24+XG4gICAgICAgIDxGb290ZXJJbmZvcm1hdGlvbj5cbiAgICAgICAgICA8aDE+Q29tbXVuaXR5PC9oMT5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtDb25maWcucmVwb3NpdG9yeX0+R2l0aHViPC9hPlxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2Ake0NvbmZpZy5yZXBvc2l0b3J5fS9pc3N1ZXNgfT5SZXF1ZXN0IGEgZmVhdHVyZTwvYT5cbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgJHtDb25maWcucmVwb3NpdG9yeX0vaXNzdWVzYH0+UmVwb3J0IGEgYnVnPC9hPlxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2Ake0NvbmZpZy5yZXBvc2l0b3J5fWB9PkxlYXZlIHVzIGEgc3RhcnQ8L2E+XG4gICAgICAgIDwvRm9vdGVySW5mb3JtYXRpb24+XG4gICAgICA8L0Zvb3RlckNvbnRlbnQ+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn0iLCAiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5mb290ZXJgXG4gIGJhY2tncm91bmQ6ICR7KHt0aGVtZX0pPT4gdGhlbWUuY29sb3JzLmRhcmt9O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB3aWR0aDoxMDAlO1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBGb290ZXJDb250ZW50ID0gc3R5bGVkLmRpdmBcbmRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsYXV0byk7IFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xuICByb3ctZ2FwOjEwcHg7XG4gIHdpZHRoOjEwMCU7XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgcGFkZGluZzoyMHB4IDEwcHg7XG4gIG1heC13aWR0aDoxNDQwcHg7XG4gIGF7XG4gICAgY29sb3I6JHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAmOmhvdmVye1xuICAgICAgY29sb3I6JHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMucHJpbWFyeUhvdmVyfTtcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlckluZm9ybWF0aW9uID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6JHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgd2lkdGg6MTAwJTtcbiAgbWFyZ2luLXRvcDoxMHB4O1xuICBwYWRkaW5nOjAgMTVweDtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5gXG5cbmV4cG9ydCBjb25zdCBGb290ZXJMb2dvID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6MTAwJTtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6c3RhcnQ7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICBwYWRkaW5nOjE1cHggMTBweDtcblxuICAuZm9vdGVyLXRleHR7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgY29sb3I6JHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgfVxuYCIsICJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG4gICBkaXNwbGF5OmZsZXg7XG4gICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gICAmIGltZ3tcbiAgICAgIHdpZHRoOjUwcHg7XG4gICAgICBoZWlnaHQ6NTBweDtcbiAgIH1cblxuICAgJiBzcGFue1xuICAgICAgZm9udC1zaXplOjIzcHg7XG4gICAgICBjb2xvcjokeyh7dGhlbWV9KT0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgIH1cbmA7IiwgImV4cG9ydCBjb25zdCBDb25maWc9IHtcbiAgcmVwb3NpdG9yeTogJ2h0dHBzOi8vZ2l0aHViLmNvbS91c2VGb3JtL3VzZUZvcm0nLFxuICBkb2NzUmVwb3NpdG9yeTogJ2h0dHBzOi8vZ2l0aHViLmNvbS91c2VGb3JtL2RvY3MnLFxuICB0d2l0dGVyOiBcImh0dHBzOi8vdHdpdHRlci5jb20vanVjaWFub19iYXJib3NhXCIsXG4gIGJyYW5jaDogJ21haW4nLFxuICBzaXRlTmFtZTogJ1VzZSBGb3JtJyxcbiAgc2l0ZVNsb2dhbjogJ1VzZSBGb3JtIHByb3ZpZGVzIGEgd2F5IHRvIGNyZWF0ZSBjb21wbGV4IGZvcm1zIGVhc2lseS4nLFxuICBwYXRoOiAnLycsXG4gIHRpdGxlU3VmZml4OiAnIFx1MjAxMyB1c2VGb3JtJyxcbiAgbmV4dExpbmtzOiB0cnVlLFxuICBwcmV2TGlua3M6IHRydWUsXG4gIG5hdkxpbmtzOiBbe1xuICAgIGxhYmVsOiAnRG9jcycsXG4gICAgcGF0aDogJy9kb2NzJyxcbiAgfVxuICBdLFxuICBkZWZhdWx0TWVudUNvbGxhcHNlZDogZmFsc2UsXG4gIGZvbnQ6IHRydWUsXG4gIGZvb3RlcjogdHJ1ZSxcbiAgZm9vdGVyVGV4dDogJ01JVCAyMDIyIFx1MDBBOSBVc2UgRm9ybS4nLFxuICBmb290ZXJFZGl0T25HaXRIdWJMaW5rOiB0cnVlLFxufVxuIiwgImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJb0xvZ29HaXRodWIsIElvTG9nb1R3aXR0ZXIsIElvTWRNb29uLCBJb0lvc1N1bm55IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5pbXBvcnQgeyBUaVRoTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy90aVwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBBY3Rpb25CdXR0b25zLCBCdXR0b24sIE1lbnVCdXR0b24sIFdyYXBwZXIsIExpbmtzLCBCdXR0b25MaW5rIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9hc3NldHMvZ3JlZW5fbG9nby5zdmcnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnfi9jb25maWcnO1xuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnfi9zdHlsZXMuY29udGV4dCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlbWl4JztcbmltcG9ydCB7IExvZ28gfSBmcm9tICcuLi9sb2dvJztcblxudHlwZSBQcm9wcyA9IHtcbiAgc2V0T3BlbjogKG9wZW46IGJvb2xlYW4pID0+IHZvaWRcbn1cblxuZnVuY3Rpb24gTmF2YmFyKHsgc2V0T3BlbiB9OiBQcm9wcykge1xuXG4gIGNvbnN0IHsgc2V0VGhlbWUsIHRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dClcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRoZW1lKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkVGhlbWUgPSB0aGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCdcbiAgICBzZXRUaGVtZShzZWxlY3RlZFRoZW1lKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGEgaHJlZj17Q29uZmlnLnBhdGh9PlxuICAgICAgICAgICAgPExvZ28+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBhbHQ9XCJsb2dvXCIgY2xhc3NOYW1lPSdsb2dvJyAvPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yIGZvbnQtZXh0cmFib2xkIGhpZGRlbiBtZDppbmxpbmVcIj57Q29uZmlnLnNpdGVOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvTG9nbz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QWN0aW9uQnV0dG9ucz5cbiAgICAgICAgICA8QnV0dG9uTGluayB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtDb25maWcudHdpdHRlcn0+XG4gICAgICAgICAgICA8SW9Mb2dvVHdpdHRlciAvPlxuICAgICAgICAgIDwvQnV0dG9uTGluaz5cbiAgICAgICAgICA8QnV0dG9uTGluayB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtDb25maWcucmVwb3NpdG9yeX0+XG4gICAgICAgICAgICA8SW9Mb2dvR2l0aHViIC8+XG4gICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlVGhlbWV9PlxuICAgICAgICAgICAge3RoZW1lID09PSAnbGlnaHQnID8gPElvTWRNb29uIC8+IDogPElvSW9zU3VubnkgLz59XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aG5hbWUgIT09IENvbmZpZy5wYXRoICYmIChcbiAgICAgICAgICAgICAgPE1lbnVCdXR0b24gb25DbGljaz17c2V0T3Blbn0+XG4gICAgICAgICAgICAgICAgPFRpVGhNZW51IC8+XG4gICAgICAgICAgICAgIDwvTWVudUJ1dHRvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIDwvQWN0aW9uQnV0dG9ucz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsICJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5uYXZgXG4gICBkaXNwbGF5OmZsZXg7XG4gICB3aWR0aDoxMDAlO1xuICAgaGVpZ2h0OmF1dG87XG4gICBvdmVyZmxvdzpoaWRkZW47XG4gICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYm9yZGVyfTtcbiAgIHBvc2l0aW9uOmZpeGVkO1xuICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gICB6LWluZGV4OjE7XG4gICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgIGRpc3BsYXk6ZmxleDtcbiAgIHdpZHRoOjEwMCU7XG4gICBoZWlnaHQ6NjBweDtcbiAgIG92ZXJmbG93OmhpZGRlbjtcbiAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgcGFkZGluZzo1cHggMHB4IDVweCAyMHB4O1xuICAgbWF4LXdpZHRoOjE0NDBweDtcbiAgICYgZGl2e1xuICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFjdGlvbkJ1dHRvbnMgPSBzdHlsZWQuZGl2YFxuICAgZGlzcGxheTpmbGV4O1xuICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcbiAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgIG1hcmdpbjowIDEwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgYm9yZGVyOm5vbmU7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gICB3aWR0aDo0MHB4O1xuICAgaGVpZ2h0OjQwcHg7XG4gICBvdXRsaW5lOm5vbmU7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgZGlzcGxheTpmbGV4O1xuICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcblxuICAgJiBzdmd7XG4gICAgICBmaWxsOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgICAgd2lkdGg6MjFweDtcbiAgICAgIGhlaWdodDoyMXB4O1xuICAgfVxuXG4gICAmOmhvdmVye1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ib3JkZXJ9O1xuICAgfVxuXG4gICAmICsgYnV0dG9ue1xuICAgICAgbWFyZ2luOjVweDtcbiAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25MaW5rID0gc3R5bGVkLmFgXG4gICBib3JkZXItcmFkaXVzOjUwJTtcbiAgIGJvcmRlcjpub25lO1xuICAgY3Vyc29yOiBwb2ludGVyO1xuICAgd2lkdGg6NDBweDtcbiAgIGhlaWdodDo0MHB4O1xuICAgb3V0bGluZTpub25lO1xuICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgIGRpc3BsYXk6ZmxleDtcbiAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG5cbiAgICYgc3Zne1xuICAgICAgZmlsbDokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICAgIHdpZHRoOjIxcHg7XG4gICAgICBoZWlnaHQ6MjFweDtcbiAgIH1cblxuICAgJjpob3ZlcntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYm9yZGVyfTtcbiAgIH1cblxuICAgJiArIGJ1dHRvbntcbiAgICAgIG1hcmdpbjo1cHg7XG4gICB9XG5gXG5cbmV4cG9ydCBjb25zdCBNZW51QnV0dG9uID0gc3R5bGVkKEJ1dHRvbik8e29uQ2xpY2s6YW55fT5gXG4gICBib3JkZXI6MXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJvcmRlcn07XG5cbiAgIEBtZWRpYSAobWluLXdpZHRoOjk4OXB4KXtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IExpbmtzID0gc3R5bGVkLmRpdmBcbiAgIGRpc3BsYXk6ZmxleDtcbiAgIGp1c3RpZnktY29udGVudDpzdGFydDtcbiAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgIHdpZHRoOmZpdC1jb250ZW50O1xuICAgcGFkZGluZy1sZWZ0OjQwcHg7XG5cbiAgIGF7XG4gICAgICBwYWRkaW5nOjAgMjBweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuXG4gICAgICAmOmhvdmVye1xuICAgICAgICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICB9XG4gICB9XG5cbiAgIEBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KXtcbiAgICAgIGRpc3BsYXk6bm9uZTtcbiAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IE1vYmlsZUxpbmsgPSBzdHlsZWQuZGl2PHtpc09wZW46Ym9vbGVhbn0+YFxuICAgZGlzcGxheTpmbGV4O1xuICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuICAgd2lkdGg6MTAwJTtcbiAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcbiAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgIGJhY2tncm91bmQtY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gICBoZWlnaHQ6JHsoeyBpc09wZW4gfSkgPT4gaXNPcGVuID8gNjAgOiAxMH1weDtcblxuICAgQG1lZGlhIChtaW4td2lkdGg6NjAwcHgpe1xuICAgICAgZGlzcGxheTpub25lO1xuICAgfVxuXG4gICBkaXZ7XG4gICAgICBkaXNwbGF5OiR7KHsgaXNPcGVuIH0pID0+IGlzT3BlbiA/ICdmbGV4JyA6ICdub25lJ307XG4gICAgICB3aWR0aDoxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OnN0YXJ0O1xuICAgICAgcGFkZGluZzogMCAyMHB4IDAgMjJweDtcblxuICAgICAgYXtcbiAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgcGFkZGluZy1yaWdodDoyMHB4O1xuICAgICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgICAgICAgXG4gICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIGJ1dHRvbntcbiAgICAgIGJvdHRvbTowO1xuICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOm5vbmU7XG4gICB9XG5gIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHdpdGhEb2NzIGZyb20gXCJ+L2hvY3Mvd2l0aERvY3NcIjtcblxuZnVuY3Rpb24gRG9jcygpIHtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEb2NzKERvY3MpOyIsICJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgc3R5bGVkLCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuaW1wb3J0IENvbnRlbnRGb290ZXIgZnJvbSBcIn4vY29tcG9uZW50cy9jb250ZW50Rm9vdGVyXCJcbmltcG9ydCBGb290ZXIgZnJvbSBcIn4vY29tcG9uZW50cy9mb290ZXJcIlxuaW1wb3J0IE5hdmJhciBmcm9tIFwifi9jb21wb25lbnRzL25hdmJhclwiXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwifi9jb21wb25lbnRzL3NpZGViYXJcIlxuaW1wb3J0IHsgZGFya1RoZW1lLCBHbG9iYWxTdHlsZSwgbGlnaHRUaGVtZSwgVGhlbWVDb250ZXh0IH0gZnJvbSBcIn4vc3R5bGVzLmNvbnRleHRcIlxuXG5cbmNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICB3aWR0aDogMTAwJTtcblxuICBpbWd7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICBib3gtc2hhZG93OiAwIDAuMTg4cmVtIDAuMzc1cmVtIHJnYmEoMCwwLDAsMC4xNiksIDAgMC4xODhyZW0gMC4zNzVyZW0gcmdiYSgwLDAsMCwwLjIzKTtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICB9XG5gXG5cbmNvbnN0IE1haW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXgtd2lkdGg6MTQ0MHB4O1xuICB3aWR0aDoxMDAlO1xuYFxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbmBcblxuY29uc3QgTWFpbkNvbnRlbnQgPSBzdHlsZWQuZGl2PHsgb3BlbjogYm9vbGVhbiB9PmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6ICR7KHsgb3BlbiB9KSA9PiAoIW9wZW4gPyAnMTAwJScgOiAnY2FsYygxMDAlIC0gMjYwcHgpJyl9O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGxlZnQ6ICR7KHsgb3BlbiB9KSA9PiAob3BlbiA/ICcyNjBweCcgOiAnMCcpfTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG5gXG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIG1hcmdpbi10b3A6NDBweDtcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJrZ0NvbnRlbnR9O1xuYFxuXG5mdW5jdGlvbiBEb2NzTGF5b3V0KHsgY2hpbGRyZW4gfTogYW55KSB7XG4gICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuXG4gICBjb25zdCByZXNpemUgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93Py5pbm5lcldpZHRoID4gOTg5KSB7XG4gICAgICAgICBzZXRPcGVuKHRydWUpXG4gICAgICB9IGVsc2UgaWYgKHdpbmRvdz8uaW5uZXJXaWR0aCA8PSA5ODkpIHtcbiAgICAgICAgIHNldE9wZW4oZmFsc2UpXG4gICAgICB9XG4gICB9XG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplKVxuICAgICAgcmVzaXplKClcbiAgIH0sIFtdKVxuXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgcmVzaXplKClcbiAgIH0sIFtwYXRobmFtZV0pXG5cblxuICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgICA8TmF2YmFyIHNldE9wZW49eygpID0+IHNldE9wZW4oIW9wZW4pfSAvPlxuICAgICAgICAgPE1haW4+XG4gICAgICAgICAgICA8TWFpbkNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8U2lkZWJhciBvcGVuPXtvcGVufSAvPlxuICAgICAgICAgICAgICAgICAgPE1haW5Db250ZW50IG9wZW49e29wZW59PlxuICAgICAgICAgICAgICAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGVudEZvb3RlciAvPlxuICAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgICAgICAgPC9NYWluQ29udGVudD5cbiAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9NYWluQ29udGFpbmVyPlxuICAgICAgICAgPC9NYWluPlxuICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC8+XG4gICApXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aERvY3MoQ29tcG9uZW50OiBSZWFjdC5KU1hFbGVtZW50Q29uc3RydWN0b3I8YW55Pikge1xuICAgcmV0dXJuIGZ1bmN0aW9uIERvY3NDb21wb25lbnQocHJvcHM6IGFueSkge1xuICAgICAgY29uc3QgeyB0aGVtZSB9ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpXG4gICAgICByZXR1cm4gKFxuICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lID09PSAnbGlnaHQnID8gbGlnaHRUaGVtZSA6IGRhcmtUaGVtZX0+XG4gICAgICAgICAgICA8RG9jc0xheW91dD5cbiAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgPC9Eb2NzTGF5b3V0PlxuICAgICAgICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICApXG4gICB9XG59IiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IE1kRWRpdCB9IGZyb20gJ3JlYWN0LWljb25zL21kJ1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnfi9jb25maWcnO1xuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZW1peCc7XG5jb25zdCBmaXhQYXRoID0gKHBhdGg6IHN0cmluZykgPT4ge1xuICBjb25zdCBwYXRoV2l0aEZyb250U2xhc2ggPSBwYXRoLnN0YXJ0c1dpdGgoJy8nKSA/IHBhdGggOiBgLyR7cGF0aH1gXG4gIGNvbnN0IHBhdGhXaXRoQmFja1NsYXNoID0gcGF0aFdpdGhGcm9udFNsYXNoLmVuZHNXaXRoKCcvJylcbiAgICA/IHBhdGhXaXRoRnJvbnRTbGFzaFxuICAgIDogYCR7cGF0aFdpdGhGcm9udFNsYXNofS9gXG5cbiAgcmV0dXJuIHBhdGhXaXRoQmFja1NsYXNoXG59XG5cbmNvbnN0IGNyZWF0ZUVkaXRVcmwgPSAocmVwb3NpdG9yeTogc3RyaW5nLCBicmFuY2g6IHN0cmluZywgcGF0aDogc3RyaW5nLCBmaWxlcGF0aFdpdGhOYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3Qgbm9ybWFsaXplZFBhdGggPSBmaXhQYXRoKHBhdGgpXG4gIHJldHVybiBgJHtyZXBvc2l0b3J5fS90cmVlLyR7YnJhbmNofSR7bm9ybWFsaXplZFBhdGh9c3JjL3BhZ2VzJHtmaWxlcGF0aFdpdGhOYW1lfS5tZHhgXG59XG5cbmNvbnN0IEVkaXRPbkdpdGh1YkxpbmsgPSAoe1xuICByZXBvc2l0b3J5LFxuICBicmFuY2gsXG4gIHBhdGgsXG4gIGZpbGVwYXRoV2l0aE5hbWVcbn06IGFueSkgPT4ge1xuICBjb25zdCBocmVmID0gY3JlYXRlRWRpdFVybChyZXBvc2l0b3J5LCBicmFuY2gsIHBhdGgsIGZpbGVwYXRoV2l0aE5hbWUpXG4gIHJldHVybiAoXG4gICAgPGEgY2xhc3NOYW1lPVwidGV4dC1zbVwiIGhyZWY9e2hyZWZ9IHRhcmdldD1cIl9ibGFua1wiPjxNZEVkaXQgc2l6ZT1cIjEuMnJlbVwiIC8+Jm5ic3A7RWRpdCB0aGlzIHBhZ2Ugb24gR2l0SHViPC9hPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnRGb290ZXIoKSB7XG5cbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuXG4gIHJldHVybiAoXG4gICAgPFMuV3JhcHBlcj5cbiAgICAgIDxFZGl0T25HaXRodWJMaW5rXG4gICAgICAgIHJlcG9zaXRvcnk9e0NvbmZpZy5kb2NzUmVwb3NpdG9yeSB8fCBDb25maWcucmVwb3NpdG9yeX1cbiAgICAgICAgYnJhbmNoPXtDb25maWcuYnJhbmNofVxuICAgICAgICBwYXRoPXtDb25maWcucGF0aH1cbiAgICAgICAgZmlsZXBhdGhXaXRoTmFtZT17cGF0aG5hbWV9XG4gICAgICAvPlxuICAgIDwvUy5XcmFwcGVyPlxuICApXG59IiwgImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgIGRpc3BsYXk6ZmxleDtcbiAgIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICAgcGFkZGluZyA6IDUwcHggMDtcblxuICAgYXtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XG4gICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAmOmhvdmVye1xuICAgICAgICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICB9XG4gICB9XG5gIiwgImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBHb0NoZXZyb25SaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9nb1wiO1xuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBBc2lkZSwgSXRlbSwgSXRlbXMsIFN1Ykl0ZW1zLCBTdWJJdGVtIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5jb25zdCBsaW5rcyA9IFtcbiAge1xuICAgIGxhYmVsOiAnSW50cm9kdWN0aW9uJyxcbiAgICBsaW5rOiAnJyxcbiAgICBzdWJJdGVtczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ1JlYWRtZScsXG4gICAgICAgIGxpbms6ICcvZG9jcy8nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdRdWljayBTdGFydCcsXG4gICAgICAgIGxpbms6ICcvZG9jcy9xdWljay1zdGFydCdcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0hvdyBpdCB3b3JrcycsXG4gICAgbGluazogJycsXG4gICAgc3ViSXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdUaGUgY29uY2VwdCcsXG4gICAgICAgIGxpbms6ICcvZG9jcy9jb25jZXB0J1xuICAgICAgfSxcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ0NyZWF0aW5nIGEgZm9ybScsXG4gICAgbGluazogJycsXG4gICAgc3ViSXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdOYXRpdmUgZWxlbWVudHMnLFxuICAgICAgICBsaW5rOiAnL2RvY3MvbmF0aXZlLWVsZW1lbnRzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdDdXN0b20gY29tcG9uZW50cycsXG4gICAgICAgIGxpbms6ICcvZG9jcy9jdXN0b20tY29tcG9uZW50cydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnRm9ybSB2YWxpZGF0aW9uJyxcbiAgICAgICAgbGluazogJy9kb2NzL2Zvcm0tdmFsaWRhdGlvbidcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ1VzaW5nIHlvdXIgRm9ybScsXG4gICAgbGluazogJycsXG4gICAgc3ViSXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdBcyBvbkNoYW5nZSBmb3JtJyxcbiAgICAgICAgbGluazogJy9kb2NzL29uY2hhbmdlLWZvcm0nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ0FzIGRlYm91bmNlZCBmb3JtJyxcbiAgICAgICAgbGluazogJy9kb2NzL2RlYm91bmNlZC1mb3JtJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdBcyBvblN1Ym1pdCBmb3JtJyxcbiAgICAgICAgbGluazogJy9kb2NzL29uc3VibWl0LWZvcm0nXG4gICAgICB9LFxuICAgIF1cbiAgfSxcbl1cblxuXG5cbmZ1bmN0aW9uIEFjdGl2ZUxpbmsoeyBocmVmLCBjaGlsZHJlbiB9OiBhbnkpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKTtcbiAgY29uc3QgdGhlbWUgPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dClcblxuICBjb25zdCBpc0FjdGl2ZSA9IHVzZU1lbW8oKCkgPT4gcGF0aG5hbWUgPT09IGhyZWYsIFtwYXRobmFtZSwgaHJlZl0pXG5cbiAgcmV0dXJuIChcbiAgICA8U3ViSXRlbSBjbGFzc05hbWU9e2lzQWN0aXZlID8gXCJhY3RpdmVcIiA6ICcnfT5cbiAgICAgIDxHb0NoZXZyb25SaWdodCBjb2xvcj17aXNBY3RpdmUgPyB0aGVtZS5jb2xvcnMucHJpbWFyeSA6ICd0cmFuc3BhcmVudCd9IC8+XG4gICAgICA8TGluayB0bz17aHJlZn0gY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IFwiYWN0aXZlXCIgOiAnJ30+e2NoaWxkcmVufTwvTGluaz5cbiAgICA8L1N1Ykl0ZW0+XG4gIClcbn1cblxuXG5mdW5jdGlvbiBTaWRlYmFyKHsgb3BlbiwgLi4ucmVzdCB9OiBhbnkpIHtcblxuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKCcnKVxuXG5cbiAgcmV0dXJuIChcbiAgICA8QXNpZGUgb3Blbj17b3Blbn0+XG4gICAgICA8SXRlbXM+XG4gICAgICAgIHtcbiAgICAgICAgICBsaW5rcy5tYXAobGluayA9PiAoXG4gICAgICAgICAgICA8SXRlbSBrZXk9e2xpbmsubGFiZWx9PlxuICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRFeHBhbmRlZCgnJyl9PlxuICAgICAgICAgICAgICAgIHtsaW5rLmxhYmVsfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBleHBhbmRlZCA9PT0gJydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8U3ViSXRlbXM+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbGluay5zdWJJdGVtcz8ubWFwKHN1Ykl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICA8QWN0aXZlTGluayBrZXk9e3N1Ykl0ZW0ubGFiZWx9IGhyZWY9e3N1Ykl0ZW0ubGlua30+e3N1Ykl0ZW0ubGFiZWx9PC9BY3RpdmVMaW5rPlxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvU3ViSXRlbXM+XG4gICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9JdGVtcz5cbiAgICA8L0FzaWRlPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyOyIsICJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQXNpZGUgPSBzdHlsZWQuYXNpZGU8e29wZW46Ym9vbGVhbn0+YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xuICBmbGV4LXNocmluazogMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYm9yZGVyfTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMjBweCAxMHB4IDEwcHggNXB4O1xuICBtYXJnaW4tdG9wOjUwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIG92ZXJmbG93OmF1dG87XG4gIHRvcDo2MHB4O1xuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjVzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW4tbGVmdDogJHsoeyBvcGVuIH0pID0+IChvcGVuID8gMCA6ICctMjYwcHgnKX07XG4gIHdpZHRoOiAyNjBweDtcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XG5cbiAgdWx7XG4gICAgcGFkZGluZy1sZWZ0OjBweDtcbiAgfVxuICBsaXtcbiAgICBtYXJnaW46MTVweDtcbiAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgSXRlbXMgPSBzdHlsZWQudWxgXG5cbmBcblxuZXhwb3J0IGNvbnN0IEl0ZW0gPSBzdHlsZWQubGlgXG4gIGxpc3Qtc3R5bGU6bm9uZTtcbiAgY3Vyc29yOnBvaW50ZXI7XG4gICYgc3BhbntcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgZm9udC1zaXplOjEuMmVtO1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBTdWJJdGVtcyA9IHN0eWxlZC51bGBcblxuYFxuXG5leHBvcnQgY29uc3QgSW5kaWNhdG9yID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xuICBtYXJnaW46IDNweDtcbmBcblxuZXhwb3J0IGNvbnN0IFN1Ykl0ZW0gPSBzdHlsZWQubGlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG5cbiAgJjpob3ZlcntcbiAgICAgY3Vyc29yOnBvaW50ZXI7XG4gIH1cblxuICAmIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XG4gIH1cbiAgIFxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYm9yZGVyfTtcbiAgICBhIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICB9XG4gICAgJHtJbmRpY2F0b3J9IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIH1cbiAgfVxuICAgXG4gICY6aG92ZXIge1xuICAgICR7SW5kaWNhdG9yfSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICB9XG4gICAgYSB7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgfVxuICB9XG5cbmBcbiIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcInVzZUZvcm0gfCBDdXN0b20gY29tcG9uZW50c1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMZWFybiBob3cgdG8gdXNlIHVzZUZvcm0gdG8gd29yayB3aXRoIGN1c3RvbSBjb21wb25lbnRzLlwiXG4gIH1cbn07XG5pbXBvcnQgRGVtbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RlbW8nO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvZGVibG9jayc7XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiLFxuICAgIGgzOiBcImgzXCIsXG4gICAgcDogXCJwXCIsXG4gICAgdWw6IFwidWxcIixcbiAgICBsaTogXCJsaVwiLFxuICAgIGgyOiBcImgyXCIsXG4gICAgY29kZTogXCJjb2RlXCIsXG4gICAgYmxvY2txdW90ZTogXCJibG9ja3F1b3RlXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDE+e1wiQ3VzdG9tIGNvbXBvbmVudHNcIn08L19jb21wb25lbnRzLmgxPntcIlxcblwifTxfY29tcG9uZW50cy5oMz57XCJXaGF0IGFyZSBjdXN0b20gY29tcG9uZW50cz9cIn08L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlVzdWFsbHksIGN1c3RvbSBjb21wb25lbnRzIGFyZSB1c2VkIHRvIGNyZWF0ZSBhIGJldHRlciB1c2VyIGV4cGVyaWVuY2UsIGZvciBleGFtcGxlIHdoZW4geW91IHdhbnQgdG8gcHJvdmlkZSBhIHdheSB0byB1c2VyIHNlbGVjdCBhIGNvbGxlY3Rpb24gb2YgaXRlbXMgb3IgY29sbGVjdCBhIHJhbmdlIG9mIGRhdGVzIG9yIHRpbWVzLCB5b3UgY2FuIHJlYWNoIHRoZSBzYW1lIHJlc3VsdCB1c2luZyBuYXRpdmUgZWxlbWVudHMsIGJ1dCB3aXRoIGN1c3RvbSBjb21wb25lbnRzLCB5b3UgY2FuIGRvIGl0IGluIGEgbW9yZSB1c2VyLWZyaWVuZGx5IHdheS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiRGlmZmVyZW50IGZyb20gbmF0aXZlIGVsZW1lbnRzLCBjdXN0b20gY29tcG9uZW50cyBoYXZlIGFuIGludGVybmFsIHN0YXRlIGNvbnRyb2xsZWQgYnkgc3RhdGUgbWFuYWdlbWVudCwgd2hpY2ggbWVhbnMgdGhhdCB0aGV5IHdpbGwgYmUgdXBkYXRlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzLCBob3dldmVyLCBuYXRpdmUgZWxlbWVudHMgYXJlIG5vdCwgYmVjYXVzZSB5b3UgY2FuIHVzZSBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudCB0byB1cGRhdGUgaXRzIHZhbHVlLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiTGV0J3Mgc2VlIHNvbWUgZXhhbXBsZXMgb2YgY3VzdG9tIGNvbXBvbmVudHMuXCJ9PC9fY29tcG9uZW50cy5oMz57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkRhdGVwaWtlcnMgLSBhcmUgYSBjb21wb25lbnQgdGhhdCBhbGxvd3MgeW91IHRvIHNlbGVjdCBhIGRhdGUuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiVGltZXBpa2VycyAtIGFyZSBhIGNvbXBvbmVudCB0aGF0IGFsbG93cyB5b3UgdG8gc2VsZWN0IGEgdGltZS5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJTbGlkZXJzIC0gYXJlIGEgY29tcG9uZW50IHRoYXQgYWxsb3dzIHlvdSB0byBzZWxlY3QgYSByYW5nZSBvZiB2YWx1ZXMuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiU2VsZWN0cywgbXVsdGktc2VsZWN0cyBjb21wb25lbnRzIC0gYXJlIGEgY29tcG9uZW50IHRoYXQgYWxsb3dzIHlvdSB0byBzZWxlY3Qgc2luZ2xlIG9yIG11bHRpcGxlIHZhbHVlcy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJEcmFnIGFuZCBkcm9wIGNvbXBvbmVudHMgLSBhcmUgYSBjb21wb25lbnQgdGhhdCBhbGxvd3MgeW91IHRvIGRyYWcgYW5kIGRyb3AgaXRlbXMuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJIb3cgdG8gdXNlIGN1c3RvbSBjb21wb25lbnRzIHdpdGggdXNlRm9ybVwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVG8gdXNlIGN1c3RvbSBjb21wb25lbnRzIHdpdGggdXNlRm9ybSwgeW91IG5lZWQgdG8gdXNlIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8V3JhcHBlcj5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGNvbXBvbmVudCBhbmQgcGFzcyB0aGUgY29tcG9uZW50IGFzIGEgcHJvcC4gQW5vdGhlciBpbXBvcnRhbnQgdGhpbmcgaXMgdGhhdCB0aGUgY3VzdG9tIGNvbXBvbmVudCBzaG91bGQgaGF2ZSB0aG9zZSBwcm9wczogXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widmFsdWVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJvbkNoYW5nZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIFwifTxfY29tcG9uZW50cy5jb2RlPntcIm9uQmx1clwifTwvX2NvbXBvbmVudHMuY29kZT57XCIuIFRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ2YWx1ZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgcHJvcCBpcyB0aGUgdmFsdWUgb2YgdGhlIGNvbXBvbmVudCwgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcIm9uQ2hhbmdlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBwcm9wIGlzIHRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMgYW5kIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJvbkJsdXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHByb3AgaXMgdGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgY29tcG9uZW50IGxvc2VzIGZvY3VzLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiV2h5IGRvIHdlIG5lZWQgdG8gdXNlIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8V3JhcHBlcj5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGNvbXBvbmVudD9cIn08L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJyZWdpc3RlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZnVuY3Rpb24gaXMgdGhlIG9ubHkgd2F5IHRvIGNvbm5lY3QgYSBmaWVsZCB0byB0aGUgZm9ybSwgYW5kIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJyZWdpc3RlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZnVuY3Rpb24gcmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgY29tcG9uZW50LCB0aGVuIHdlIG5lZWQgdG8gdXNlIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8V3JhcHBlcj5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGNvbXBvbmVudCB0byBnZXQgdGhlIHJlZmVyZW5jZS5cXG5Vc3VhbGx5LCBjdXN0b20gY29tcG9uZW50cyBkb24ndCB3b3JrIHdpdGggcmVmZXJlbmNlLCBpbiBjb25zZXF1ZW5jZSwgd2UgbmVlZCB0byB1c2UgYSB3cmFwcGVyIHRvIGNvbm5lY3QgdGhlIGN1c3RvbSBjb21wb25lbnQgd2l0aCBhIHJlZmVyZW5jZSBhbmQgZmluYWxseSBjb25uZWN0IHRvIHRoZSBmb3JtLiBBbmQgdGhlbiB5b3UgY2FuIHVzZSB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wicmVnaXN0ZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZ1bmN0aW9uIHRvIHJlZ2lzdGVyIHRoZSBjdXN0b20gY29tcG9uZW50LlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08YnIgLz57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8V3JhcHBlcj5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGNvbXBvbmVudCBpcyBhIHdyYXBwZXIgdGhhdCB3aWxsIGJlIHVzZWQgdG8gd3JhcCB0aGUgY3VzdG9tIGNvbXBvbmVudCwgaXQgd2lsbCBiZSB1c2VkIHRvIGFkZCB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wib25DaGFuZ2VcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJvbkJsdXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHByb3BzIHRvIHRoZSBuYXRpdmUgZXZlbnQgaGFuZGxlcnMuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiVGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcIjxXcmFwcGVyPlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgY29tcG9uZW50IGlzIGFsc28gdXNlZCB0byBhZGQgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInZhbHVlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBwcm9wIHRvIHRoZSBjdXN0b20gY29tcG9uZW50LlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiSG93IHRvIHVzZSBjdXN0b20gY29tcG9uZW50cyB3aXRoIHVzZUZpZWxkXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJXaGVuIHdlIGFyZSBjcmVhdGluZyB0aGUgZm9ybSBkb2Vzbid0IG1hdHRlciBpZiB3ZSBhcmUgdXNpbmcgbmF0aXZlIEhUTUwgZWxlbWVudHMgb3Igbm90LCBpdCdzIGp1c3QgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBzdG9yZSBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRvIG1hbmFnZSB0aGUgZm9ybS4gU28gd2UgZG9uJ3QgbmVlZCB0byB3b3JyeSBhYm91dCBpdCBmb3Igbm93LiBXZSBqdXN0IG5lZWQgdG8gY3JlYXRlIHRoZSBmb3JtIHN0b3JlLCBhbHNvIHdlIGNhbiBwcm92aWRlIHRoZSBpbml0aWFsIHZhbHVlcywgaW5pdGlhbCBlcnJvcnMsIGluaXRpYWwgdG91Y2hlZCwgYW5kIHRoZSB2YWxpZGF0aW9uIHNjaGVtYSwgYnV0IGZvciBub3csIHdlIHdpbGwganVzdCBwcm92aWRlIHRoZSBpbml0aWFsIHZhbHVlcy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImphdmFzY3JpcHRcIj57YGltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICdAdXNlLWZvcm0vY29yZSdcblxuY29uc3QgdXNlVXNlckZvcm0gPSBjcmVhdGVGb3JtKHtcbiAgaW5pdGlhbFZhbHVlczoge1xuICAgIG5hbWVzOiBbXVxuICB9LFxuIH0pXG5gfTwvQ29kZUJsb2NrPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlNvLCBub3cgd2UgYXJlIGdvaW5nIHRvIGNyZWF0ZSB0aGUgZm9ybSBjb21wb25lbnQgdGhhdCB3aWxsIGJlIHVzZWQgdG8gbWFuYWdlIHRoZSBmb3JtLCBhbmQgd2Ugd2lsbCB1c2UgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcIjxXcmFwcGVyPlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgY29tcG9uZW50IHRvIHdyYXAgdGhlIGN1c3RvbSBjb21wb25lbnQuIEFsbCB0aGUgcHJvcHMgdGhhdCB0aGUgY3VzdG9tIGNvbXBvbmVudCB3aWxsIHJlY2VpdmUgd2lsbCBiZSB0aGUgcHJvcHMgdGhhdCB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPFdyYXBwZXI+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBjb21wb25lbnQgd2lsbCByZWNlaXZlLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUbyByZWdpc3RlciB0aGUgY3VzdG9tIGNvbXBvbmVudCwgd2Ugd2lsbCB1c2UgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInJlZ2lzdGVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmdW5jdGlvbiwgYW5kIHdlIHdpbGwgcGFzcyBpdCB0byBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8V3JhcHBlcj5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGNvbXBvbmVudCBieSB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wicmVmXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBwcm9wLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08Q29kZUJsb2NrIGxhbmd1YWdlPVwianN4XCI+e2BcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tICdAdXNlLWZvcm0vdXNlLWZvcm0nXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3NlbGVjdC1jb21wb25lbnQnXG5cbmZ1bnRpb24gVXNlckZvcm0oKXtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VVc2VyRm9ybSgpXG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgIDxXcmFwcGVyIGNvbXBvbmVudD17U2VsZWN0fSByZWY9e3JlZ2lzdGVyKCduYW1lcycpfSAvPlxuICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgeyB2YWx1ZTogJ0pvaG4nLCBsYWJlbDogJ0pvaG4nIH0sXG4gICAgICAgICAgeyB2YWx1ZTogJ0phbmUnLCBsYWJlbDogJ0phbmUnIH0sXG4gICAgICAgICAgeyB2YWx1ZTogJ0phY2snLCBsYWJlbDogJ0phY2snIH0sXG4gICAgICAgIF19XG4gICAgICAvPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuYH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMuYmxvY2txdW90ZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGUgd3JhcHBlciBjb21wb25lbnQgd2lsbCBsb29rIGF0IHRoZSBjdXN0b20gY29tcG9uZW50IHByb3BzLCBhbmQgaWYgdGhlIGNvbXBvbmVudCBkb2Vzbid0IGhhdmUgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzLCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJvbkNoYW5nZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIFwifTxfY29tcG9uZW50cy5jb2RlPntcIm9uQmx1clwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ2YWx1ZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgaXQgd2lsbCB0aHJvdyBhbiBlcnJvci4gSW4gdGhpcyBjYXNlLCB5b3Ugc2hvdWxkIGJ1aWxkIHlvdXIgb3duIFdyYXBwZXIgY29tcG9uZW50LCBvciB5b3UgY2FuIGN1c3RvbWl6ZSB0aGUgY29tcG9uZW50IHRvIGFkZCB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wib25DaGFuZ2VcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJvbkJsdXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHByb3BzLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08L19jb21wb25lbnRzLmJsb2NrcXVvdGU+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJjdXN0b20tY29tcG9uZW50cy5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgSWZyYW1lIGZyb20gJ3JlYWN0LWlmcmFtZSdcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVtaXgnXG5cbmNvbnN0IENvZGVTYW5kQm94ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6MTAwJTtcbiAgcGFkZGluZzoxMHB4IDA7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG5cblxuICBoMXtcbiAgICBmb250LXNpemU6M2VtO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIHBhZGRpbmc6MjBweDtcbiAgfVxuXG4gIGRpdntcbiAgICB3aWR0aDoxMDAlO1xuICAgIHBhZGRpbmc6MnB4O1xuICAgIC5zYW5kYm94e1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICAgIGJvcmRlcjpub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XG4gICAgfVxuICB9XG5cbiAgYFxuXG5mdW5jdGlvbiBEZW1vKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgcHVzaCA9IHVzZU5hdmlnYXRlKClcblxuICBmdW5jdGlvbiByZWRpcmVjdCgpIHtcbiAgICBwdXNoKCcvZG9jcycpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb2RlU2FuZEJveD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxJZnJhbWVcbiAgICAgICAgICB1cmw9e3Byb3BzLnVybH1cbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgIGhlaWdodD1cIjcwMHB4XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzYW5kYm94XCJcbiAgICAgICAgICBpZD1cIm15SWRcIlxuICAgICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Db2RlU2FuZEJveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZW1vXG4iLCAiaW1wb3J0IEhpZ2hsaWdodCwgeyBkZWZhdWx0UHJvcHMgfSBmcm9tICdwcmlzbS1yZWFjdC1yZW5kZXJlcidcbmltcG9ydCB0aGVtZSBmcm9tIFwicHJpc20tcmVhY3QtcmVuZGVyZXIvdGhlbWVzL3BhbGVuaWdodFwiO1xuaW1wb3J0IHsgTWRDb250ZW50Q29weSwgTWRDaGVjayB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuaW1wb3J0IHVzZUNsaXBib2FyZCBmcm9tIFwicmVhY3QtdXNlLWNsaXBib2FyZFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyLCB9IGZyb20gJy4vc3R5bGVzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVCbG9jayh7IGNoaWxkcmVuLCBsYW5ndWFnZSB9OiBhbnkpIHtcbiAgY29uc3QgW2lzQ29waWVkLCBzZXRDb3BpZWRdID0gdXNlQ2xpcGJvYXJkKGNoaWxkcmVuLCB7IHN1Y2Nlc3NEdXJhdGlvbjogMTAwMCB9KTtcblxuICByZXR1cm4gKFxuICAgIDxIaWdobGlnaHQgey4uLmRlZmF1bHRQcm9wc30gY29kZT17Y2hpbGRyZW59IGxhbmd1YWdlPXtsYW5ndWFnZX0gdGhlbWU9e3RoZW1lfT5cbiAgICAgIHsoeyBjbGFzc05hbWUsIHN0eWxlLCB0b2tlbnMsIGdldExpbmVQcm9wcywgZ2V0VG9rZW5Qcm9wcyB9KSA9PiAoXG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPHByZSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZ3VhZ2VcIj57bGFuZ3VhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgIDxDb3B5QnV0dG9uIG9uQ2xpY2s9e3NldENvcGllZH0gaXNDb3BpZWQ9e2lzQ29waWVkfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7dG9rZW5zLm1hcCgobGluZSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IHsuLi5nZXRMaW5lUHJvcHMoeyBsaW5lLCBrZXk6IGkgfSl9PlxuICAgICAgICAgICAgICAgIHtsaW5lLm1hcCgodG9rZW4sIGtleSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHNwYW4gey4uLmdldFRva2VuUHJvcHMoeyB0b2tlbiwga2V5IH0pfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICl9XG4gICAgPC9IaWdobGlnaHQ+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IENvcHlCdXR0b24gPSAoeyBpc0NvcGllZCwgLi4ucHJvcHMgfTogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2J1dHRvbi1oYXMtdHlwZVxuICAgIDxidXR0b24gey4uLnByb3BzfT57aXNDb3BpZWQgPyA8TWRDaGVjayBjb2xvcj1cIiNmZmZcIiAvPiA6IDxNZENvbnRlbnRDb3B5IGNvbG9yPVwiI2ZmZlwiIC8+fTwvYnV0dG9uPlxuICApXG59IiwgImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDFyZW0gMDtcbiAgKntcbiAgICBmb250LWZhbWlseTptb25vc3BhY2U7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgZm9udC1zaXplOiAuODc1cmVtO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcFxuXG4gICAgfVxuICAmIHByZSB7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIHBhZGRpbmctbGVmdDoxcmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMC4xODhyZW0gMC4zNzVyZW0gcmdiYSgwLDAsMCwwLjE2KSwgMCAwLjE4OHJlbSAwLjM3NXJlbSByZ2JhKDAsMCwwLDAuMjMpO1xuICB9XG5cbiAgJiAuaGVhZGVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XG5cbiAgJiAubGFuZ3VhZ2V7XG4gICAgZm9udC1mYW1pbHk6J1JvYm90bycsIHNhbnMtc2VyaWYhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIGJvcmRlcjogMC4wNjNyZW0gc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAuMTI1cmVtIDAuMTI1cmVtO1xuICAgIG1hcmdpbi1yaWdodDowLjMxM3JlbTtcbiAgICB3aWR0aDptYXgtY29udGVudDtcbiAgICBwYWRkaW5nOjAuMjVyZW07XG4gICAgZGlzcGxheTppbmxpbmU7XG4gIH1cblxuICAmIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgYm9yZGVyOiAwLjA2M3JlbSBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZy10b3A6MC4zMTNyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAuMTI1cmVtIDAuMTI1cmVtO1xuICAgIG1hcmdpbi1yaWdodDowLjYyNXJlbTtcblxuICAgICY6aG92ZXJ7XG4gICAgICBib3gtc2hhZG93OiAwIDAuMTg4cmVtIDAuMzc1cmVtIHJnYmEoMCwwLDAsMC4xNiksIDAgMC4xODhyZW0gMC4zNzVyZW0gcmdiYSgwLDAsMCwwLjIzKTtcbiAgICB9XG4gIH1cbiAgfVxuYCIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcInVzZUZvcm0gfCBGb3JtIHZhbGlkYXRpb25cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTGVhcm4gaG93IHRvIHZhbGlkYXRlIGZvcm0gdmFsdWVzIHVzaW5nIHVzZS1mb3JtLlwiXG4gIH1cbn07XG5pbXBvcnQgRGVtbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RlbW8nO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvZGVibG9jayc7XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiLFxuICAgIGgyOiBcImgyXCIsXG4gICAgcDogXCJwXCIsXG4gICAgdWw6IFwidWxcIixcbiAgICBsaTogXCJsaVwiLFxuICAgIGgzOiBcImgzXCIsXG4gICAgY29kZTogXCJjb2RlXCIsXG4gICAgYmxvY2txdW90ZTogXCJibG9ja3F1b3RlXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDE+e1wiRm9ybXMgdmFsaWRhdGlvbnNcIn08L19jb21wb25lbnRzLmgxPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJWYWxpZGF0aW9uXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJFdmVyeSB3ZWJzaXRlIHdpdGggZm9ybXMgc2hvdWxkIGhhdmUgdmFsaWRhdGlvbnMsIGJ1dCB3aGF0IGFyZSBmb3JtIHZhbGlkYXRpb25zPyBHbyB0byBhbnkgcG9wdWxhciB3ZWJzaXRlIHdpdGggYSByZWdpc3RyYXRpb24gZm9ybSwgYW5kIHlvdSB3aWxsIGJlIG5vdGljZSB0aGF0IHRoZXkgcHJvdmlkZSBmZWVkYmFjayB3aGVuIHlvdSBkb24ndCBmaWxsIGluIHRoZSBmb3JtIGNvcnJlY3RseS4gWW91J2xsIHNlZSBtZXNzYWdlcyBzdWNoIGFzOlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlxcXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXFxcIiAoWW91IGNhbid0IGxlYXZlIHRoaXMgZmllbGQgYmxhbmspLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlxcXCJQbGVhc2UgZW50ZXIgeW91ciBwaG9uZSBudW1iZXIgaW4gdGhlIGZvcm1hdCB4eHgteHh4eFxcXCIgKEEgc3BlY2lmaWMgZGF0YSBmb3JtYXQgaXMgcmVxdWlyZWQgZm9yIGl0IHRvIGJlIGNvbnNpZGVyZWQgdmFsaWQpLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlxcXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXFxcIiAodGhlIGRhdGEgeW91IGVudGVyZWQgaXMgbm90IGluIHRoZSByaWdodCBmb3JtYXQpLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlxcXCJZb3VyIHBhc3N3b3JkIG5lZWRzIHRvIGJlIGJldHdlZW4gOCBhbmQgMzAgY2hhcmFjdGVycyBsb25nIGFuZCBjb250YWluIG9uZSB1cHBlcmNhc2UgbGV0dGVyLCBvbmUgc3ltYm9sLCBhbmQgYSBudW1iZXIuXFxcIiAoQSB2ZXJ5IHNwZWNpZmljIGRhdGEgZm9ybWF0IGlzIHJlcXVpcmVkIGZvciB5b3VyIGRhdGEpLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiQnV0IHdoeSBpcyB0aGlzIHNvIGltcG9ydGFudD9cIn08L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkZvcm0gdmFsaWRhdGlvbiBpcyBhIHZlcnkgaW1wb3J0YW50IHBhcnQgb2YgdGhlIHdlYiBkZXZlbG9wbWVudCBwcm9jZXNzLiBJdCdzIGEgd2F5IHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBkYXRhIHlvdSBlbnRlciBpcyB2YWxpZC4gSWYgeW91IGRvbid0IHZhbGlkYXRlIHlvdXIgZGF0YSwgaXQncyBwb3NzaWJsZSB0aGF0IHlvdXIgZGF0YSB3aWxsIGJlIGxvc3Qgb3IgY29ycnVwdGVkLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJTZXJ2ZXItc2lkZSB2YWxpZGF0aW9ucyBhcmUgdGhlIGxhc3QgcGFydCBvZiB0aGUgdmFsaWRhdGlvbiwgd2hpY2ggbWVhbnMsIGV2ZW4gaWYgdGhlIGRhdGEgaXMgaW4gdGhlIGNvcnJlY3QgZm9ybWF0IGl0J3MgcG9zc2libGUgdGhhdCB0aGUgZGF0YSBjYW4ndCBiZSBzdG9yZWQgYmVjYXVzZSBzb21lIGRhdGEgY2FuJ3QgYmUgZHVwbGljYXRlZCBsaWtlIGVtYWlsIG9yIHVzZXJuYW1lLCB0aGlzIGtpbmQgb2YgdmFsaWRhdGlvbiBpcyBkb25lIGluIHNlcnZlci1zaWRlLiBDbGllbnQtc2lkZSB2YWxpZGF0aW9uIGRlYWwgd2l0aCBpbmNvcnJlY3QgZGF0YSBmb3JtYXQsIGxpa2UgYSB2YWxpZCBlbWFpbCwgb3IgYSB2YWxpZCBwYXNzd29yZCwgd2hpY2ggbWVhbnMsIHRoYXQgYmVmb3JlIHRoZSBkYXRhIGlzIHN1Ym1pdHRlZCB0aGUgY2xpZW50LXNpZGUgdmFsaWRhdGVzIGlmIGl0IGlzIGEgdmFsaWQgZGF0YSBmb3JtYXQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJEZXNjcmlwdGlvblwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlcmUgYXJlIHNldmVyYWwgdmFsaWRhdGlvbnMgc29sdXRpb25zIGF2YWlsYWJsZSwgYnV0IHdoZW4gdXNpbmcgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlRm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgdGhlIGRlZmF1bHQgc29sdXRpb24gaXMgWXVwLiBXaXRoIHl1cCB0aGUgcHJvY2VzcyBvZiB2YWxpZGF0aW9ucyBpcyBzaW1wbGUgYW5kIHBvd2VyZnVsLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlRm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgcmV0dXJucyBhbiBlcnJvciBvYmplY3QsIHRoYXQgaGFzIGFsbCBlcnJvcnMsIGFuZCB0aGlzIG9iamVjdCBpcyB1cGRhdGVkIHdoZW5ldmVyIHRoZSBpbnB1dCBzdGF0ZSBpcyBjaGFuZ2VkIG9yIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkIGlmIHlvdXIgZm9ybSBoYXMgdmFsaWRhdGlvbi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVXN1YWxseSB5b3Ugd2FubnQgdG8gc2hvdyB0aGUgZXJyb3IgbWVzc2FnZSBqdXN0IHdoZW4gYSBmaWVsZCBpcyB0b3VjaGVkLCB5b3UgY2FuIGRvIHRoYXQgYnkgdXNpbmcgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInRvdWNoZWRcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIG9iamVjdC4gVGhvdWNoZWQgb2JqZWN0IGlzIGFuIG9iamVjdCB0aGF0IGhhcyBhbGwgdGhlIGZpZWxkcyB0aGF0IGFyZSB0b3VjaGVkLCBhbmQgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBpcyB0cnVlIGlmIHRoZSBmaWVsZCBpcyB0b3VjaGVkLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiVXNhZ2VcIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlZhbGlkYXRpb24gaXMgcGVyZm9ybWVkIHdoZW5ldmVyIHRoZSBzdGF0ZSBpcyBjaGFuZ2VkLiBCeSBkZWZhdWx0LCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VGb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiB1c2VzIHRoZSB1bmNvbnRyb2xsZWQgaW5wdXRzIG9wdGlvbiwgdGhpcyBtZWFucyB0aGF0IHRoZSB2YWx1ZXMgXHUyMDBCXHUyMDBCYXJlIGFjY2Vzc2libGUgd2hlbiB0aGUgb25TdWJtaXQgZXZlbnQgaXMgZGlzcGF0Y2hlZC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImpzeFwiPntgXG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSBcIkB1c2UtZm9ybS91c2UtZm9ybVwiO1xuaW1wb3J0ICogYXMgeXVwIGZyb20gXCJ5dXBcIjtcblxuY29uc3QgdXNlRm9ybSA9IGNyZWF0ZUZvcm0oe1xuICAgaW5pdGlhbFZhbHVlczp7XG4gICAgICBuYW1lOiBcIkplc3NlXCIsXG4gICAgICBlbWFpbDogXCJqZXNzZUBqZXNzZS5jb21cIixcbiAgICAgIHBldHM6IFtcImZlbGl4XCJdLFxuICAgICAgYWNjZXB0OiBmYWxzZSxcbiAgIH0gICBcbn0pXG5cbmNvbnN0IHZhbGlkYXRpb24gPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xuICBuYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIpLFxuICBlbWFpbDogeXVwXG4gICAgLnN0cmluZygpXG4gICAgLmVtYWlsKFwiVGhpcyBmaWVsZCBtdXN0IGJlIGEgdmFsaWQgZS1tYWlsXCIpXG4gICAgLnJlcXVpcmVkKFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiKSxcbiAgcGV0czogeXVwLmFycmF5KHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIikpLFxuICBhY2NlcHQ6IHl1cC5ib29sKCkub25lT2YoW3RydWVdLCBcIkZpZWxkIG11c3QgYmUgY2hlY2tlZFwiKSxcbn0pO1xuXG5mdW5jdGlvbiBGb3JtKCkge1xuICBjb25zdCB7IHJlZ2lzdGVyLCBzdGF0ZSwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHttb2RlOidvbkNoYW5nZSd9KTtcblxuICBjb25zdCB7ZXJyb3JzLCB0b3VjaGVkfSA9IHN0YXRlO1xuXG4gIGZ1bmN0aW9uIG9uU3VibWl0KGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoXCJuYW1lXCIpfSAvPlxuICAgICAgICAgPHNwYW4+e3RvdWNoZWQubmFtZSAmJiBlcnJvcnMubmFtZX08L3NwYW4+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoXCJlbWFpbFwiKX0gLz5cbiAgICAgICAgIDxzcGFuPnt0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbH08L3NwYW4+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoXCJwZXRzXCIpfSAvPlxuICAgICAgICAgPHNwYW4+e3RvdWNoZWQucGV0cyAmJiBlcnJvcnMucGV0c308L3NwYW4+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoXCJwZXRzLjBcIil9IC8+XG4gICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcihcImFjY2VwdFwiKX0gLz5cbiAgICAgICAgIDxzcGFuPnt0b3VjaGVkLmFjY2VwdCAmJiBlcnJvcnMuYWNjZXB0fTwvc3Bhbj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59YH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMuYmxvY2txdW90ZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJJZiB5b3UgZG9uJ3Qgd2FudCB0byB1c2UgWXVwIHZhbGlkYXRpb24sIHlvdSBjYW4gdXNlIGFueSBvdGhlciB2YWxpZGF0aW9uIGxpYnJhcnksIG9yIHdyaXRlIHlvdXIgb3duIHZhbGlkYXRpb24gbG9naWMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTwvX2NvbXBvbmVudHMuYmxvY2txdW90ZT57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiRGVtb1wifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PERlbW8gdXJsPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL3VzZS1mb3JtLXZhbGlkYXRpb24tZm9ybS1qbXY5ZVwiIC8+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJmb3JtLXZhbGlkYXRpb24ubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcInVzZUZvcm0gfCBOYXRpdmUgSFRNTCBlbGVtZW50c1wiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJMZWFybiBob3cgdG8gdXNlIG5hdGl2ZSBIVE1MIGVsZW1lbnRzIGluIG9yZGVyIHRvIGNyZWF0ZSBiZXR0ZXIgZm9ybXMuXCJcbiAgfVxufTtcbmltcG9ydCBEZW1vIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGVtbyc7XG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29kZWJsb2NrJztcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGgxOiBcImgxXCIsXG4gICAgaDI6IFwiaDJcIixcbiAgICBwOiBcInBcIixcbiAgICBjb2RlOiBcImNvZGVcIixcbiAgICBoMzogXCJoM1wiLFxuICAgIGJsb2NrcXVvdGU6IFwiYmxvY2txdW90ZVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxPntcIk5hdGl2ZSBIVE1MIGVsZW1lbnRzXCJ9PC9fY29tcG9uZW50cy5oMT57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiV2hhdCBpcyBhIG5hdGl2ZSBIVE1MIGVsZW1lbnQ/XCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJOYXRpdmUgSFRNTCBlbGVtZW50cyBhcmUgZWxlbWVudHMgdGhhdCBhcmUgYnVpbHQgaW50byB0aGUgYnJvd3NlciwgbGlrZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8aW5wdXQ+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPGJ1dHRvbj5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8c2VsZWN0PlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIGV0Yy4gVGhlc2UgZWxlbWVudHMgYXJlIGRpZmZlcmVudCBmcm9tIGN1c3RvbSBlbGVtZW50cywgd2hpY2ggYXJlIGVsZW1lbnRzIHRoYXQgYXJlIGNyZWF0ZWQgYnkgZGV2ZWxvcGVycy4gTmF0aXZlIEhUTUwgZWxlbWVudHMgYXJlIHBvd2VyZnVsIGFuZCBlYXN5IHRvIHVzZSBzaW5jZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VGb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiB1c2VzIGEgcmVmZXJlbmNlIHRvIHJlZ2lzdGVyIHRoZSBmaWVsZHMsIG5hdGl2ZSBlbGVtZW50cyBhcmUgZWFzeSB0byByZWdpc3RlciwgdHJpZ2dlciBhbmQgbGlzdGVuIHRvIGV2ZW50cy4gQWxsIHRoYXQgd2UgbmVlZCB0byBkbyBpcyB0byB1c2UgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInJlZlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgcHJvcGVydHkgdG8gcmVnaXN0ZXIgdGhlIGVsZW1lbnQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqc3hcIj57YDxpbnB1dCByZWY9e3JlZ2lzdGVyKCdmaWVsZE5hbWUnKX0gLz5cbmB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIkxldCdzIGNyZWF0ZSBhIGZ1bGwgZm9ybSBleGFtcGxlXCJ9PC9fY29tcG9uZW50cy5oMz57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJXaGVuIHdlIGFyZSBjcmVhdGluZyB0aGUgZm9ybSBkb2Vzbid0IG1hdHRlciBpZiB3ZSBhcmUgdXNpbmcgbmF0aXZlIEhUTUwgZWxlbWVudHMgb3Igbm90LCBpdCdzIGp1c3QgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBzdG9yZSBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRvIG1hbmFnZSB0aGUgZm9ybS4gU28gd2UgZG9uJ3QgbmVlZCB0byB3b3JyeSBhYm91dCBpdCBmb3Igbm93LiBXZSBqdXN0IG5lZWQgdG8gY3JlYXRlIHRoZSBmb3JtIHN0b3JlLCBhbHNvIHdlIGNhbiBwcm92aWRlIHRoZSBpbml0aWFsIHZhbHVlcywgaW5pdGlhbCBlcnJvcnMsIGluaXRpYWwgdG91Y2hlZCwgYW5kIHRoZSB2YWxpZGF0aW9uIHNjaGVtYSwgYnV0IGZvciBub3csIHdlIHdpbGwganVzdCBwcm92aWRlIHRoZSBpbml0aWFsIHZhbHVlcy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImphdmFzY3JpcHRcIj57YGltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICdAdXNlLWZvcm0vY29yZSdcblxuY29uc3QgdXNlVXNlckZvcm0gPSBjcmVhdGVGb3JtKHtcbiAgaW5pdGlhbFZhbHVlczoge1xuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgY29uZmlybVBhc3N3b3JkOiAnJyxcbiAgfSxcbiB9KVxuYH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJJbiBvcmRlciB0byBoYXZlIGEgZnVsbCBmb3JtIGV4YW1wbGUsIHdlIG5lZWQgdG8gY3JlYXRlIGEgZm9ybSBjb21wb25lbnQgYW5kIHVzZSB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlVXNlckZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGhvb2suIEluIHRoaXMgc3RlcCB3ZSBuZWVkIHRvIHJlZ2lzdGVyIHRoZSBmaWVsZHMsIHdlIGNhbiBkbyB0aGF0IHVzaW5nIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJyZWdpc3RlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZnVuY3Rpb24uXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5ibG9ja3F1b3RlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJyZWdpc3RlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZnVuY3Rpb24gaXMgYSBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIHRoZSBuYW1lIG9mIHRoZSBmaWVsZCBhbmQgcmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgZWxlbWVudC4gVGhlIHJlZmVyZW5jZSBpcyB1c2VkIHRvIHJlZ2lzdGVyIHRoZSBlbGVtZW50LCB0cmlnZ2VyLCBhbmQgbGlzdGVuIHRvIGV2ZW50cy4gSWYgeW91IGFyZSB1c2luZyBhIGxpYnJhcnkgbGlrZSBNYXRlcmlhbCBVSSBvciBzb21ldGhpbmcgc2ltaWxhciwgbWFrZSBzdXJlIHRoYXQgdGhlIGlucHV0IGNvbXBvbmVudCB1c2UgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiUmVhY3QuZm9yd2FyZFJlZlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIG90aGVyd2lzZSB5b3Ugd2lsbCBuZWVkIHRvIHVzZSBhIFdyYXBwZXIgdG8gcmVnaXN0ZXIgdGhlIGVsZW1lbnQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTwvX2NvbXBvbmVudHMuYmxvY2txdW90ZT57XCJcXG5cIn08Q29kZUJsb2NrIGxhbmd1YWdlPVwianN4XCI+e2BcbmZ1bnRpb24gVXNlckZvcm0oKXtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VVc2VyRm9ybSgpXG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKCduYW1lJyl9IC8+XG4gICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcignZW1haWwnKX0gLz5cbiAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKCdwYXNzd29yZCcpfSAvPlxuICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoJ2NvbmZpcm1QYXNzd29yZCcpfSAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApXG59XG5gfTwvQ29kZUJsb2NrPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoZSBsYXN0IHRoaW5nIHdlIG5lZWQgdG8ga25vdyBpcyBhYm91dCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJoYW5kbGVTdWJtaXRcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBpdCdzIGEgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyBhbm90aGVyIGZ1bmN0aW9uIGFzIGEgcGFyYW1ldGVyLCB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZC4gVGhlIGZ1bmN0aW9uIHJlY2VpdmVzIHRoZSBkYXRhIG9mIHRoZSBmb3JtIGFzIGEgcGFyYW1ldGVyIGFuZCB0aGUgc2Vjb25kIHBhcmFtZXRlciBpcyB0aGUgYW5zd2VyIG9mIHRoZSB2YWxpZGF0aW9uIChpZiB0aGUgZm9ybSBpcyB2YWxpZCBvciBub3QsIGl0IGRlcGVuZHMgb24gdGhlIHZhbGlkYXRpb24gc2NoZW1hKS5cIn08L19jb21wb25lbnRzLnA+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJuYXRpdmUtZWxlbWVudHMubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcInVzZUZvcm0gfCBkZWJvdW5jZWQgbW9kZVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJXaGVuIHlvdSB1c2UgZGVib3VuY2VkIGZvcm0gdGhlIGRlYm91bmNlIHBhcmFtZXRlciBkZWxheXMgdGhlIHVwZGF0aW5nIG9mIHRoZSBzdGF0ZSB1bnRpbCB0aGUgdXNlciBoYXMgc3RvcHBlZCBjaGFuZ2luZyBpbnB1dHMgZm9yIGEgcHJlZGV0ZXJtaW5lZCBhbW91bnQgb2YgdGltZS5cIlxuICB9XG59O1xuaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZW1vJztcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb2RlYmxvY2snO1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIixcbiAgICBoMjogXCJoMlwiLFxuICAgIHA6IFwicFwiLFxuICAgIGE6IFwiYVwiLFxuICAgIGNvZGU6IFwiY29kZVwiLFxuICAgIGJsb2NrcXVvdGU6IFwiYmxvY2txdW90ZVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxPntcIkRlYm91bmNlZCBtb2RlXCJ9PC9fY29tcG9uZW50cy5oMT57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiSW50cm9kdWN0aW9uXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJEZWJvdW5jZSBmdW5jdGlvbiBmb3JjZXMgYSBmdW5jdGlvbiB0byB3YWl0IGEgY2VydGFpbiBhbW91bnQgb2YgdGltZSBiZWZvcmUgcnVubmluZyBhZ2Fpbi4gVGhlIGZ1bmN0aW9uIGlzIGJ1aWx0IHRvIGxpbWl0IHRoZSBudW1iZXIgb2YgdGltZXMgYSBmdW5jdGlvbiBpcyBjYWxsZWQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoZSBkZWJvdW5jZSBwYXJhbWV0ZXIgZGVsYXlzIHRoZSB1cGRhdGluZyBvZiB0aGUgc3RhdGUgdW50aWwgdGhlIHVzZXIgaGFzIHN0b3BwZWQgY2hhbmdpbmcgaW5wdXRzIGZvciBhIHByZWRldGVybWluZWQgYW1vdW50IG9mIHRpbWUuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoZSBpbnB1dCB2YWx1ZSBpcyBzZXQgdG8gc3RhdGUgdmFsdWVzIGFuZCB0aGVuIHVwZGF0ZWQgdmlhIFJlYWN0IGV2ZW50cy4gRGVmaW5pbmcgYSBmb3JtXHUyMDE5cyBpbnB1dCB2YWx1ZSB2aWEgc3RhdGUgaXMgY29uc2lkZXJlZCBhIGNvbnRyb2xsZWQgY29tcG9uZW50LiBGb3IgY29udHJvbGxlZCBpbnB1dHMsIHlvdSB3aWxsIG5lZWQgYSBjb3JyZXNwb25kaW5nIHN0YXRlIGFuZCB0aGVuIGEgZnVuY3Rpb24gdG8gdXBkYXRlIHRoYXQgc3RhdGUgd2l0aCBjaGFuZ2VzLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD48X2NvbXBvbmVudHMuYSBocmVmPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Zvcm1zLmh0bWxcIj57XCJSZWFjdCBEb2NzXCJ9PC9fY29tcG9uZW50cy5hPjwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJJdCBtZWFucyB0aGF0IHdoZW5ldmVyIHN0YXRlIGlzIGNoYW5nZWQgdGhlIGNvbXBvbmVudCwgaXQgaXMgcmVuZGVyZWQgYWdhaW4uXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIklmIHlvdSB3YW50IHRvIHVzZSB0aGlzIGtpbmQgb2YgZm9ybSwgeW91IG5lZWQgb25seSBwYXNzIHByb3BlcnR5IFwifTxfY29tcG9uZW50cy5jb2RlPntcIm1vZGU6J2RlYm91bmNlZCdcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJBbHNvLCBpdCBtZWFucyB0aGF0IHRoZSB2YWxpZGF0aW9ucyBhcmUgcnVuIGluIGV2ZXJ5IHN0YXRlIGNoYW5nZSwgcHJvdmlkaW5nIGJldHRlciB1c2VyIGZlZWRiYWNrLlxcblNlZSBtb3JlIGluIENvbnRyb2xsZWQgSW5wdXRzIHdpdGggdmFsaWRhdGlvbi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIlVzYWdlXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD48X2NvbXBvbmVudHMuY29kZT57XCJ1c2VGb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBwcm92aWRlcyBhIFwifTxfY29tcG9uZW50cy5jb2RlPntcInJlZ2lzdGVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmdW5jdGlvbiwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIGFsbCBwcm9wZXJ0aWVzIHRvIG1hbmFnZXIgYSBmaWVsZC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImpzeFwiPntgaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJ0B1c2UtZm9ybS91c2UtZm9ybSdcblxuY29uc3QgdXNlRm9ybSA9IGNyZWF0ZUZvcm0oe1xuICBpbml0aWFsVmFsdWVzOiB7XG4gICAgbmFtZTogJ0FubmEnLFxuICAgIGFkZHJlc3M6IFtcbiAgICAgIHtcbiAgICAgICAgc3RyZWV0OiAnMTIzIE1haW4gU3QnLFxuICAgICAgICBjaXR5OiAnQW55dG93bicsXG4gICAgICB9LFxuICAgIF1cbiAgfVxufSlcbmB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVXNlIGRvdCBub3RhdGlvbiB0byBjcmVhdGUgYWR2YW5jZWQgb2JqZWN0cyBvciB0byBtYXAgb2JqZWN0IHZhbHVlcy4gVHlwZSBhbiBlbnRyeSBuYW1lIGFuZCB0eXBlIG9yIGFuIGVudHJ5IHByb3BlcnR5IG9iamVjdC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmJsb2NrcXVvdGU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiRG90IG5vdGF0aW9uIGlzIHVzZWQgdG8gYWNjZXNzIG5lc3RlZCBvYmplY3RzLiBGb3IgZXhhbXBsZSwgaWYgeW91IGhhdmUgYW4gb2JqZWN0IHdpdGggYSBuZXN0ZWQgb2JqZWN0LCB5b3UgY2FuIGFjY2VzcyB0aGUgbmVzdGVkIG9iamVjdCB1c2luZyBkb3Qgbm90YXRpb247IFwifTxfY29tcG9uZW50cy5jb2RlPntcImluZm8ubmFtZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIuXFxuVXNlIGRvdCBub3RhdGlvbiB0byBhY2Nlc3MgbmVzdGVkIGFycmF5cy4gRm9yIGV4YW1wbGUsIGlmIHlvdVxcbmhhdmUgYW4gb2JqZWN0IHdpdGggYSBuZXN0ZWQgYXJyYXksIHlvdSBjYW4gYWNjZXNzIHRoZSBuZXN0ZWQgYXJyYXkgdXNpbmcgZG90IG5vdGF0aW9uO1xcblwifTxfY29tcG9uZW50cy5jb2RlPntcImluZm8uYXJyYXlbMl1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08L19jb21wb25lbnRzLmJsb2NrcXVvdGU+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImpzeFwiPntgXG4gICBmdW5jdGlvbiBGb3JtKCl7XG4gICAgY29uc3QgeyByZWdpc3RlciB9ID0gdXNlRm9ybSh7IG1vZGU6ICdkZWJvdW5jZWQnfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoJ25hbWUnKX0gLz5cbiAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoJ2FkZHJlc3Muc3RyZWV0Jyl9IC8+XG4gICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKCdhZGRyZXNzLmNpdHknKX0gLz5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gICB9XG5gfTwvQ29kZUJsb2NrPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJEZW1vXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08RGVtbyB1cmw9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL3VzZWZvcm0tZGVib3VuY2VkLXNkb2t2P2ZvbnRzaXplPTE0JmFtcDtoaWRlbmF2aWdhdGlvbj0xJmFtcDt0aGVtZT1kYXJrXCIgLz48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImRlYm91bmNlZC1mb3JtLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjoge1xuICAgIFwidGl0bGVcIjogXCJ1c2VGb3JtIHwgb25DaGFuZ2UgbW9kZVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJXaGVuIHVzaW5nIGNvbnRyb2xsZWQgZm9ybXMsIHRoZSBpbnB1dCB2YWx1ZSBpcyBzZXQgdG8gc3RhdGUgdmFsdWVzIGFuZCB0aGVuIHVwZGF0ZWQgdmlhIFJlYWN0IGV2ZW50cy4gUmVhY3QgZm9ybSBjb250cm9sbGVkIGlzIHRoZSBtb3N0IHBvcHVsYXIgYXByb2FjaCBpbiByZWFjdGpzLlwiXG4gIH1cbn07XG5pbXBvcnQgRGVtbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RlbW8nO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvZGVibG9jayc7XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiLFxuICAgIGgyOiBcImgyXCIsXG4gICAgcDogXCJwXCIsXG4gICAgY29kZTogXCJjb2RlXCIsXG4gICAgYmxvY2txdW90ZTogXCJibG9ja3F1b3RlXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDE+e1wib25DaGFuZ2UgbW9kZVwifTwvX2NvbXBvbmVudHMuaDE+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkRlc2NyaXB0aW9uXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGVyZSBhcmUgdHdvIHR5cGVzIG9mIGZvcm0gaW5wdXQgaW4gUmVhY3QuIFdlIGhhdmUgdGhlIHVuY29udHJvbGxlZCBpbnB1dCBhbmQgdGhlIGNvbnRyb2xsZWQgaW5wdXQuXFxuV2hlbiB1c2luZyBjb250cm9sbGVkIGZvcm1zLCB0aGUgaW5wdXQgdmFsdWUgaXMgc2V0IHRvIHN0YXRlIHZhbHVlcyBhbmQgdGhlbiB1cGRhdGVkIHZpYSBSZWFjdCBldmVudHMuXFxuRGVmaW5pbmcgYSBmb3JtIGlucHV0IHZhbHVlIHZpYSBzdGF0ZSBpcyBjb25zaWRlcmVkIGEgY29udHJvbGxlZCBjb21wb25lbnQuIEZvciBjb250cm9sbGVkIGlucHV0cywgeW91IHdpbGwgbmVlZCBhIGNvcnJlc3BvbmRpbmcgc3RhdGUgYW5kIHRoZW4gYSBmdW5jdGlvbiB0byB1cGRhdGUgdGhhdCBzdGF0ZSB3aXRoIGNoYW5nZXMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkNvbnRyb2xsZWQgaW5wdXRzIGFyZSB0aGUgbW9zdCBwb3B1bGFyIGluIHRoZSByZWFjdCBlY29zeXN0ZW0sIGFyZSBlYXNpZXIgdG8gd3JpdGUgYW5kIHVuZGVyc3RhbmRpbmcuIEJ1dCB3aGVuIHlvdSB0aGluayBhYm91dCBwZXJmb3JtYW5jZSBjb250cm9sbGVkIGlucHV0cyBhcmUgbGVzcyBwb3dlcmZ1bCB0aGFuIHVuY29udHJvbGxlZCBpbnB1dHMuRXZlcnkgdGltZSB0aGF0IGNvbXBvbmVudCBzdGF0ZSBpcyB1cGRhdGVkIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWQgYWdhaW4gYW5kIHRoaXMgYWZmZWN0cyB0aGUgcGVyZm9ybWFuY2UgcmVzdWx0LlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiVXNhZ2VcIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPjxfY29tcG9uZW50cy5jb2RlPntcInVzZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHByb3ZpZGVzIGEgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wicmVnaXN0ZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZ1bmN0aW9uLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYWxsIHByb3BlcnRpZXMgdG8gbWFuYWdlciBhIGZpZWxkLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08Q29kZUJsb2NrIGxhbmd1YWdlPVwianN4XCI+e2BcbmltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICdAdXNlLWZvcm0vdXNlLWZvcm0nXG5cbmNvbnN0IHVzZUZvcm0gPSBjcmVhdGVGb3JtKHtcbiAgaW5pdGlhbFZhbHVlczoge1xuICAgIG5hbWU6ICdBbm5hJyxcbiAgICBhZGRyZXNzOiBbXG4gICAgICB7XG4gICAgICAgIHN0cmVldDogJzEyMyBNYWluIFN0JyxcbiAgICAgICAgY2l0eTogJ0FueXRvd24nLFxuICAgICAgfSxcbiAgICBdXG4gIH1cbn0pXG5gfTwvQ29kZUJsb2NrPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlVzZSBkb3Qgbm90YXRpb24gdG8gY3JlYXRlIGFkdmFuY2VkIG9iamVjdHMgb3IgdG8gbWFwIG9iamVjdCB2YWx1ZXMuIFR5cGUgYW4gZW50cnkgbmFtZSBhbmQgdHlwZSBvciBhbiBlbnRyeSBwcm9wZXJ0eSBvYmplY3QuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5ibG9ja3F1b3RlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkRvdCBub3RhdGlvbiBpcyB1c2VkIHRvIGFjY2VzcyBuZXN0ZWQgb2JqZWN0cy4gRm9yIGV4YW1wbGUsIGlmIHlvdSBoYXZlIGFuIG9iamVjdCB3aXRoIGEgbmVzdGVkIG9iamVjdCwgeW91IGNhbiBhY2Nlc3MgdGhlIG5lc3RlZCBvYmplY3QgdXNpbmcgZG90IG5vdGF0aW9uOyBcIn08X2NvbXBvbmVudHMuY29kZT57XCJpbmZvLm5hbWVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLlxcblVzZSBkb3Qgbm90YXRpb24gdG8gYWNjZXNzIG5lc3RlZCBhcnJheXMuIEZvciBleGFtcGxlLCBpZiB5b3VcXG5oYXZlIGFuIG9iamVjdCB3aXRoIGEgbmVzdGVkIGFycmF5LCB5b3UgY2FuIGFjY2VzcyB0aGUgbmVzdGVkIGFycmF5IHVzaW5nIGRvdCBub3RhdGlvbjtcXG5cIn08X2NvbXBvbmVudHMuY29kZT57XCJpbmZvLmFycmF5WzJdXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5ibG9ja3F1b3RlPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqc3hcIj57YFxuICAgZnVuY3Rpb24gRm9ybSgpe1xuICAgIGNvbnN0IHsgcmVnaXN0ZXIgfSA9IHVzZUZvcm0oeyBtb2RlOiAnb25DaGFuZ2UnfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoJ25hbWUnKX0gLz5cbiAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoJ2FkZHJlc3Muc3RyZWV0Jyl9IC8+XG4gICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKCdhZGRyZXNzLmNpdHknKX0gLz5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gICB9XG5gfTwvQ29kZUJsb2NrPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJEZW1vXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08RGVtbyB1cmw9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL3VzZWZvcm0tcXVpY2stc3RhcnQteXBveHU/Zm9udHNpemU9MTQmYW1wO2hpZGVuYXZpZ2F0aW9uPTEmYW1wO3RoZW1lPWRhcmtcIiAvPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwib25jaGFuZ2UtZm9ybS5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IHtcbiAgICBcInRpdGxlXCI6IFwidXNlRm9ybSB8IG9uU3VibWl0IG1vZGVcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiVW5jb250cm9sbGVkIGZvcm1zIGFyZSB0aGUgbW9zdCBwZXJmb3JtYW50IHdheSB0byBjcmVhdGUgcmVhY3QgZm9ybXMuIFdpdGggdW5jb250cm9sbGVkIGlucHV0IHZhbHVlcywgdGhlcmUgaXMgbm8gdXBkYXRpbmcgb3IgY2hhbmdpbmcgb2YgYW55IHN0YXRlcy4gV2hhdCB5b3Ugc3VibWl0IGlzIHdoYXQgeW91IGdldC5cIlxuICB9XG59O1xuaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZW1vJztcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb2RlYmxvY2snO1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIixcbiAgICBoMjogXCJoMlwiLFxuICAgIHA6IFwicFwiLFxuICAgIGE6IFwiYVwiLFxuICAgIGNvZGU6IFwiY29kZVwiLFxuICAgIGJsb2NrcXVvdGU6IFwiYmxvY2txdW90ZVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxPntcIm9uU3VibWl0IG1vZGVcIn08L19jb21wb25lbnRzLmgxPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJEZXNjcmlwdGlvblwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlcmUgYXJlIHR3byB0eXBlcyBvZiBmb3JtIGlucHV0IGluIFJlYWN0LiBXZSBoYXZlIHRoZSB1bmNvbnRyb2xsZWQgaW5wdXQgYW5kIHRoZSBjb250cm9sbGVkIGlucHV0LiBVbmNvbnRyb2xsZWQgaW5wdXRzIGFyZSBsaWtlIHRyYWRpdGlvbmFsIEhUTUwgZm9ybSBpbnB1dHM6XCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJodG1sXCI+e2A8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxuYH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJXaXRoIHVuY29udHJvbGxlZCBpbnB1dCwgdGhlcmUgaXMgbm8gdXBkYXRpbmcgb3IgY2hhbmdpbmcgb2YgYW55IHN0YXRlcy4gV2hlbiB3ZSB1c2UgdW5jb250cm9sbGVkIGlucHV0IGlzIG5lY2Vzc2FyeSB0byBzZXQgYSByZWZlcmVuY2UgaW4gaW5wdXQgZm9yIG1hbmlwdWxhdGluZyBhbmQgcmVjZWl2ZXMgZXZlbnRzLCBidXQgd2l0aCB1c2VyRm9ybSBpdCBpc24ndCBuZWNlc3NhcnkgYmVjYXVzZSB1c2VyRm9ybSBtYWtlcyB0aGlzIGZvciB1cy5cXG5VbmNvbnRyb2xsZWQgaW5wdXRzIGFyZSB1c2VmdWwgd2hlbiBwZXJmb3JtYW5jZSBpcyBlc3NlbnRpYWwuIEJ1dCBpZiB0aGUgZm9ybXMgdHVybiB2ZXJ5IGNvbXBsZXggZGVib3VuY2UgZm9ybXMgYXJlIHRoZSBiZXN0IG9wdGlvbi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiUHMgKiBZb3UgY2FuIHVzZSB1bmNvbnRyb2xsZWQgZm9ybSB3aXRoIGN1c3RvbSBpbnB1dHMgYnV0IGN1c3RvbSBpbnB1dHMgdXNlIHN0YXRlIGluIHlvdXIgaW50ZXJuYWwgbG9naWMuXFxuSWYgeW91IHdhbnQgdG8gdXNlIHVuY29udHJvbGxlZCBmb3JtIHdpdGggY3VzdG9tIGlucHV0cyBhbmQgbmF0aXZlIGlucHV0cyB0aGUgdW5jb250cm9sbGVkIGFwcHJvYWNoIGlzIGFwcGxpZWQgb25seSBuYXRpdmUgaW5wdXRzLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD48X2NvbXBvbmVudHMuYSBocmVmPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Zvcm1zLmh0bWxcIj57XCJSZWFjdCBEb2NzXCJ9PC9fY29tcG9uZW50cy5hPjwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJCeSBkZWZhdWx0LCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VGb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiB1c2UgdW5jb250cm9sbGVkIGZvcm0sIGlzbid0IG5lY2Vzc2FyeSB0byBwYXNzIGFueSB2YWx1ZSB0byB1c2VGb3JtIGhvb2sgaWYgeW91IHdhbnQgdG8gdXNlIHRoaXMga2luZC5cXG5CdXQgd2hlbiB5b3UgdXNlIHRoaXMga2luZCBvZiBmb3JtLCBpdCBpcyBuZWNlc3NhcnkgdG8gcmVhbGl6ZSB0aGF0IHZhbHVlcyBhbmQgZXZlbnRzIHZhbGlkYXRpb24gYXJlIGF2YWlsYWJsZSBvbmx5IHdoZW4gb25TdWJtaXQgZXZlbnQgaXMgZGlzcGF0Y2hlZC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiV2l0aCB0aGlzIGFwcHJvYWNoLCBpdCdzIHBvc3NpYmxlIHRvIGNvbXBsZXRlIGEgZm9ybSB3aXRob3V0IGFueSBleHRyYSByZW5kZXJzLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiVXNhZ2VcIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPjxfY29tcG9uZW50cy5jb2RlPntcInVzZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHByb3ZpZGVzIGEgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wicmVnaXN0ZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZ1bmN0aW9uLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYWxsIHByb3BlcnRpZXMgdG8gbWFuYWdlciBhIGZpZWxkLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08Q29kZUJsb2NrIGxhbmd1YWdlPVwianN4XCI+e2BcbmltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICdAdXNlLWZvcm0vdXNlLWZvcm0nXG5cbmNvbnN0IHVzZUZvcm0gPSBjcmVhdGVGb3JtKHtcbiAgaW5pdGlhbFZhbHVlczoge1xuICAgIG5hbWU6ICdBbm5hJyxcbiAgICBhZGRyZXNzOiBbXG4gICAgICB7XG4gICAgICAgIHN0cmVldDogJzEyMyBNYWluIFN0JyxcbiAgICAgICAgY2l0eTogJ0FueXRvd24nLFxuICAgICAgfSxcbiAgICBdXG4gIH1cbn0pXG5gfTwvQ29kZUJsb2NrPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlVzZSBkb3Qgbm90YXRpb24gdG8gY3JlYXRlIGFkdmFuY2VkIG9iamVjdHMgb3IgdG8gbWFwIG9iamVjdCB2YWx1ZXMuIFR5cGUgYW4gZW50cnkgbmFtZSBhbmQgdHlwZSBvciBhbiBlbnRyeSBwcm9wZXJ0eSBvYmplY3QuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5ibG9ja3F1b3RlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkRvdCBub3RhdGlvbiBpcyB1c2VkIHRvIGFjY2VzcyBuZXN0ZWQgb2JqZWN0cy4gRm9yIGV4YW1wbGUsIGlmIHlvdSBoYXZlIGFuIG9iamVjdCB3aXRoIGEgbmVzdGVkIG9iamVjdCwgeW91IGNhbiBhY2Nlc3MgdGhlIG5lc3RlZCBvYmplY3QgdXNpbmcgZG90IG5vdGF0aW9uOyBcIn08X2NvbXBvbmVudHMuY29kZT57XCJpbmZvLm5hbWVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLlxcblVzZSBkb3Qgbm90YXRpb24gdG8gYWNjZXNzIG5lc3RlZCBhcnJheXMuIEZvciBleGFtcGxlLCBpZiB5b3VcXG5oYXZlIGFuIG9iamVjdCB3aXRoIGEgbmVzdGVkIGFycmF5LCB5b3UgY2FuIGFjY2VzcyB0aGUgbmVzdGVkIGFycmF5IHVzaW5nIGRvdCBub3RhdGlvbjtcXG5cIn08X2NvbXBvbmVudHMuY29kZT57XCJpbmZvLmFycmF5WzJdXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5ibG9ja3F1b3RlPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqc3hcIj57YGltcG9ydCB7IFdyYXBwZXIgfSBmcm9tICdAdXNlLWZvcm0vdXNlLWZvcm0nXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3NlbGVjdC1jb21wb25lbnQnXG5cbmZ1bnRpb24gVXNlckZvcm0oKXtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VVc2VyRm9ybSgpXG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgIDxXcmFwcGVyIGNvbXBvbmVudD17U2VsZWN0fSByZWY9e3JlZ2lzdGVyKCduYW1lcycpfSAvPlxuICAgICAgICBvcHRpb25zPXtbXG4gICAgICAgICAgeyB2YWx1ZTogJ0pvaG4nLCBsYWJlbDogJ0pvaG4nIH0sXG4gICAgICAgICAgeyB2YWx1ZTogJ0phbmUnLCBsYWJlbDogJ0phbmUnIH0sXG4gICAgICAgICAgeyB2YWx1ZTogJ0phY2snLCBsYWJlbDogJ0phY2snIH0sXG4gICAgICAgIF19XG4gICAgICAvPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuYH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiRGVtb1wifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PERlbW8gdXJsPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC91c2Vmb3JtLW9uc3VibWl0LWp2ejF6P2ZvbnRzaXplPTE0JmFtcDtoaWRlbmF2aWdhdGlvbj0xJmFtcDt0aGVtZT1kYXJrXCIgLz48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcIm9uc3VibWl0LWZvcm0ubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcInVzZUZvcm0gfCBDcmVhdGUgRm9ybVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJDcmVhdGUgZm9ybSBpcyBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIGZvcm0gYW5kIHlvdSBjYW4gdXNlIGl0IGFzIGEgaG9vay5cIlxuICB9XG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImNyZWF0ZS1mb3JtLm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjoge1xuICAgIFwidGl0bGVcIjogXCJ1c2VGb3JtIHwgUXVpY2sgU3RhcnRcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiWW91ciBmaXJzdCBzdGVwIHRvIGNyZWF0aW5nIGZvcm1zLlwiXG4gIH1cbn07XG5pbXBvcnQgRGVtbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RlbW8nO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvZGVibG9jayc7XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiLFxuICAgIHA6IFwicFwiLFxuICAgIGgyOiBcImgyXCIsXG4gICAgYnI6IFwiYnJcIixcbiAgICBoMzogXCJoM1wiLFxuICAgIHVsOiBcInVsXCIsXG4gICAgbGk6IFwibGlcIixcbiAgICBjb2RlOiBcImNvZGVcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMT57XCJRdWljayBTdGFydFwifTwvX2NvbXBvbmVudHMuaDE+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSGV5IHRoZXJlIVwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJJdCdzIHJlYWxseSBnb29kIHRvIHNlZSB5b3UgaGVyZSwgb24gdGhpcyBmaXJzdCBwYWdlIHlvdSB3aWxsIHNlZSBzb21lIHN0ZXBzIHRvIGNyZWF0ZSBmb3JtcyBlYXNpbHkuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJEZXNjcmlwdGlvblwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiRm9ybXMgYXJlIGFuIGltcG9ydGFudCBwYXJ0IG9mIHdlYiBhcHBsaWNhdGlvbnMsIGFuZCB3aXRoIFJlYWN0IGl0J3MgcG9zc2libGUgdG8gY3JlYXRlIGdyZWF0cyBmb3JtcyxcIn08X2NvbXBvbmVudHMuYnIgLz57XCJcXG5cIn17XCJyZWFjdCBob29rcyBhcmUgYSBnYW1lLWNoYW5nZXIgd2hlbiB3ZSB0aGluayBhYm91dCBmb3Jtcywgd2l0aCBob29rcyBpcyBzaW1wbGUgdG8gY3JlYXRlIGZvcm1zLCBhbmQgeW91IGNhbiBnbyBvbiB3aXRob3V0IGxpYnJhcmllcy5cIn08X2NvbXBvbmVudHMuYnIgLz57XCJcXG5cIn17XCJCdXQgd2hlbiB3ZSB3YW50IHRvIGJ1aWxkIGNvbXBsZXggZm9ybXMgd2l0aCBuZXN0ZWQgZmllbGRzIGFuZCB2YWxpZGF0aW9ucywgbWlnaHQgYmUgYSBnb29kIGlkZWEgdG8gdXNlIGEgbGlicmFyeSwgYW5kIHlvdSBjYW4gZmluZCBhIGxvdCBvZiBsaWJyYXJpZXMgdG8gaGVscCB5b3UgdG8gY3JlYXRlIGZvcm1zLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiU28sIHdoeSBVc2VGb3JtP1wifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlcmUgYXJlIHNvbWUgcmVhc29ucyB3aHkgeW91IGZhY2UgcHJvYmxlbXMgd2hlbiB5b3Ugd2FudCB0byBjcmVhdGUgZm9ybXMsIGFuZCB3aXRoIHVzZUZvcm0sIHlvdSBjYW4gc29sdmUgdGhlc2UgcHJvYmxlbXMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxiciAvPntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiU3RhdGUgbWFuYWdlbWVudCAtICBBIGNvdXBsZSBvZiB5ZWFycyBhZ28sIHlvdSBjb3VsZCB0aGluayB0aGF0IFJlZHV4IG9yIE1vYlggd2FzIGEgZ29vZCBzb2x1dGlvbiB0byBtYW5hZ2UgZm9ybSBzdGF0ZSBpbiByZWFjdCwgYnV0IHRoZXkgd2VyZW4ndC4gVG9kYXkgeW91IGNhbiB1c2UgaG9va3MgdG8gbWFuYWdlIHRoZSBmb3JtIHN0YXRlLCBob29rcyBsaWtlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVN0YXRld1wifTwvX2NvbXBvbmVudHMuY29kZT57XCIgYW5kIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVJlZHVjZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFyZSBhIGdvb2Qgc29sdXRpb24gdG8gbWFuYWdlIHRoZSBzdGF0ZS4gQnV0IG1hbmFnaW5nIHZhbHVlcywgdG91Y2hlZCBmaWVsZHMgYW5kIGVycm9ycyBjb3VsZCBiZSBhIHByb2JsZW0gaWYgeW91IGRvbid0IGhhdmUgYSBzdGFuZGFyZCB3YXkgdG8gbWFuYWdlIHRoZW0uIFVzdWFsbHksIHJlYWwgYXBwbGljYXRpb25zIHVzZSBuZXN0ZWQgb2JqZWN0cyBhcyByZXF1ZXN0IHBheWxvYWRzLCBhbmQgeW91IHNob3VsZCBrZWVwIGl0IHRvIHNlbmQgdGhlIGNvcnJlY3QgZGF0YSB0byB0aGUgc2VydmVyLCBtYW5hZ2UgbmVzdGVkIHZhbHVlcyBhbmQgZXJyb3JzIGNvdWxkIGJlIGEgcHJvYmxlbSB1c2luZyBqdXN0IFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVN0YXRlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlUmVkdWNlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiRXJyb3JzLVRvIGRlYWwgd2l0aCBlcnJvcnMsIHlvdSBjYW4gdXNlIHlvdXIgdmFsaWRhdGlvbiBzb2x1dGlvbiwgYW5kIGl0IGNhbiB3b3JrIHdlbGwgd2l0aCBzaW1wbGUgZm9ybXMsIGJ1dCB5b3UgY2FuIHN0dWNrIHdpdGggYSBsb3Qgb2YgZXJyb3JzIHdoZW4geW91IGhhdmUgbmVzdGVkIGZpZWxkcy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJUb3VjaGVkIGZpZWxkcyAtIE1heWJlIHlvdSB3YW50IHRvIHNob3cgYSBtZXNzYWdlIGVycm9yIGp1c3Qgd2hlbiB0aGUgZmllbGQgaXMgdG91Y2hlZCwgc28gaW4gb3JkZXIgdG8gZG8gdGhhdCB5b3UgbmVlZCB0byBtYW5hZ2UgdGhlIHRvdWNoZWQgZmllbGRzLCBpdCBjYW4gYmUgcmVhbGx5IGVhc3kgdG8gZG8gd2l0aCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VTdGF0ZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgYW5kIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVJlZHVjZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBidXQgeW91IGNhbid0IGRvIHRoYXQgdmVyeSB3ZWxsIHdpdGggXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlU3RhdGVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VSZWR1Y2VyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiB3aGVuIHlvdSBoYXZlIG5lc3RlZCBmaWVsZHMuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiSGFuZGxlIHN1Ym1pdCAtIFdoZW4geW91IHdhbnQgdG8gaGFuZGxlIHN1Ym1pdCwgeW91IG5lZWQgdG8gbWFuYWdlIHRoZSBzdWJtaXQgZXZlbnQsIGl0J3MgY29udmVuaWVudCB3aGVuIHlvdSBoYXZlIGFuIGFscmVhZHkgc29sdXRpb24gdG8gZG8gdGhhdC5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PGJyIC8+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVXNlRm9ybSBwcm92aWRlcyBhIHdheSB0byBjcmVhdGUgY29tcGxleCBmb3JtcyBlYXNpbHksIHRoaXMgaG9vayByZXR1cm5zIGFuIG9iamVjdCBvZiB2YWx1ZXMgXHUyMDBCXHUyMDBCaW4gdGhlIHNhbWUgc2hhcGUgdGhhdCBpdCByZWNlaXZlcywgdGhpcyBpcyBwb3NzaWJsZSB1c2luZyBkb3Qgbm90YXRpb24uIFRoZXJlZm9yZSxcXG5pdCBkb2VzIG5vdCBtYXR0ZXIgaWYgdGhlIG9iamVjdCBpcyBjb21wbGV4IG9yIGhhcyBtYW55IHByb3BlcnRpZXMgb3IgYW4gYXJyYXksXFxudGhlIHJlc3VsdCBpcyB0aGUgc2FtZS4gVGhpcyBwcm9jZXNzIHR1cm5zIHZlcnkgZWFzeSB0byBjcmVhdGUgZm9ybXMgZnJvbSBuZXN0ZWQgb2JqZWN0cyxcXG50aGUgc2FtZSBsYXllcnMgYW5kIHByb3BlcnRpZXMgYXJlIHJlcGxpY2F0ZWQgaW4gdGhlIGZpbmFsIG9iamVjdCxcXG50aGlzIGFwcHJvYWNoIHByZXZlbnRzIHlvdSB0byB0eXBlIG1vcmUgY29kZSB0byBjb252ZXJ0IGFuIG9iamVjdCBmcm9tIGZvcm0gdG8gYmFja2VuZCBvYmplY3QgdHlwZS4gVGhlIHNhbWUgcHJvY2VzcyBpcyByZWFsaXplZCB3aXRoIGVycm9ycyBvYmplY3RzIGFuZCB0b3VjaGVkIG9iamVjdHMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJXaGF0IHRvIGV4cGVjdCB3aXRoIHVzZUZvcm1cIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiUGVyZm9ybWVyIGZvcm1zIC0gdXNlRm9ybSBwcm92aWRlcyBhIHdheSB0byBjb21wbGV0ZSBhIGZvcm0gYW5kIHN1Ym1pdCBpdCB3aXRob3V0IGFueSByZXJlbmRlciwgYnkgZGVmYXVsdCB1c2VGb3JtIGNyZWF0ZXMgdW5jb250cm9sbGVkIGZvcm1zLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkVhc3kgdG8gd3JpdGUgLSB1c2VGb3JtIGhhcyBhbiBlYXN5IHdheSB0byB3cml0ZSBmb3JtcyB3aXRoIGxlc3MgY29kZS4gcmVnaXN0ZXIgZnVuY3Rpb24gcmV0dXJuIG5lY2Vzc2FyeSBpbnB1dCdzIHByb3BlcnRpZXMgYW5kIGl0IGlzIGFsbCB3ZSBuZWVkIHRvIG1hbmFnZSBhbGwgZXZlbnRzIGluIGEgbmF0aXZlIEhUTUwgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiaW5wdXRcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLiBXcml0aGUgZm9ybXMgd2l0aG91dCBmb3JtIHRhZy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJFYXN5IHZhbGlkYXRpb24gLSBCeSBkZWZhdWx0IHVzZUZvcm0gdXNlcyB5dXAgdmFsaWRhdGlvbiwgd2UgY2FuIHdyaXRlIGNvbXBsZXggdmFsaWRhdGlvbiB3aXRob3V0IGVmZm9ydC5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkluc3RhbGxhdGlvblwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImJhc2hcIj57YG5wbSBpbnN0YWxsIC0tc2F2ZSBAdXNlLWZvcm0vdXNlLWZvcm1cbiAgYH08L0NvZGVCbG9jaz57XCJcXG5cIn08Q29kZUJsb2NrIGxhbmd1YWdlPVwiYmFzaFwiPntgeWFybiBhZGQgQHVzZS1mb3JtL3VzZS1mb3JtXG4gIGB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIlVzYWdlXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJXaXRoIFwifTxfY29tcG9uZW50cy5jb2RlPntcImNyZWF0ZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHlvdSBjYW4gY3JlYXRlIGEgaG9vayBmb3JtIGFuZCB1c2UgaXQgd2hlcmV2ZXIgeW91IHdhbnQsXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxEZW1vIHVybD1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvdXNlZm9ybS1xdWljay1zdGFydC15cG94dT9mb250c2l6ZT0xNCZhbXA7aGlkZW5hdmlnYXRpb249MSZhbXA7dGhlbWU9ZGFya1wiIC8+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJxdWljay1zdGFydC5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IHtcbiAgICBcInRpdGxlXCI6IFwidXNlRm9ybSB8IENvbmNlcHRcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiSG93IFVzZUZvcm0gd29ya3MsIGFuZCB3aHkgd2UgZGVjaWRlZCB0byBkbyBpdCB0aGlzIHdheS5cIlxuICB9XG59O1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIixcbiAgICBwOiBcInBcIixcbiAgICBjb2RlOiBcImNvZGVcIixcbiAgICBoMjogXCJoMlwiLFxuICAgIHVsOiBcInVsXCIsXG4gICAgbGk6IFwibGlcIixcbiAgICBoMzogXCJoM1wiLFxuICAgIGJsb2NrcXVvdGU6IFwiYmxvY2txdW90ZVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxPntcIkNvbmNlcHRcIn08L19jb21wb25lbnRzLmgxPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIldoZW4geW91IGFyZSB3b3JraW5nIG9uIGEgcHJvamVjdCwgeW91IG1pZ2h0IHdhbnQgdG8gdXNlIGEgZm9ybSBpbiBkaWZmZXJlbnQgcGxhY2VzLCBvciBtYXliZSB5b3UgaGF2ZSBhIGZvcm0gd2l0aCBhIGNvdXBsZSBvZiBzdGVwcyBpbiBkaWZmZXJlbnQgY29tcG9uZW50cywgaG93IGNvdWxkIHlvdSBoYW5kbGUgdGhpcz9cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlIG1vc3QgY29tbW9uIGFuc3dlciBpcyB0byB1c2UgUmVhY3QgQ29udGV4dCBBUEksIG9yIGlmIHlvdSBhcmUgdXNpbmcgYSBmb3JtIGxpYnJhcnkgbGlrZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJyZWFjdC1ob29rLWZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCB5b3UgY2FuIHVzZSB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlRm9ybUNvbnRleHRcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGhvb2ssIGZvcm1payBoYXMgYSBzaW1pbGFyIEFQSS4gVGhlc2UgQVBJUyBhcmUgYmFzZWQgb24gUmVhY3QgQ29udGV4dCBBUEksIHNvIHlvdSBjYW4gdXNlIHRoZW0gaW4gdGhlIHNhbWUgd2F5LlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJCdXQgZm9yIG1lIHRoaXMgaXMgbm90IHRoZSBiZXN0IHdheSB0byBkbyB0aGF0LCB0aGUgaWRlYSB0byBoYXZlIGEgcHJvdmlkZXIgd2hlbmV2ZXIgeW91IHdhbnQgdG8gc2hhcmUgc29tZXRoaW5nIGlzIHdlaXJkIGFuZCBub3QgdmVyeSB1c2VmdWwuIEJlc2lkZXMgZGVjbGFyaW5nIGEgcHJvdmlkZXIgeW91IHNob3VsZCBwYXNzIHRoZSB2YWx1ZSB0byB0aGUgcHJvdmlkZXIsIGl0J3MgcmVhbGx5IHN0cmFuZ2UgZm9yIG1lLCBiZWNhdXNlIHdlIGNhbiBkbyB0aGF0IHdpdGhvdXQgYSBwcm92aWRlciwgYnkgc3RvcmluZyB0aGUgc3RhdGUgaW4gcyBleHRlcm5hbCBzdG9yZSBhcyBadXN0YW5kIGRvLCB0aGUgVXNlRm9ybSB1c2UgYW4gZXh0ZXJuYWwgc3RvcmUsIGZvciB0aGlzIHJlYXNvbiwgd2UgZG9uJ3QgbmVlZCB0byB1c2UgYSBSZWFjdCBDb250ZXh0IEFQSSBvciBzb21ldGhpbmcgc2ltaWxhciB0byBzdG9yZSBvdXIgZm9ybSBzdGF0ZS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PGJyIC8+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkhvdyBhIHN0b3JlIHdvcmtzXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGUgc3RvcmUgY29uY2VwdCBiZWNvbWVzIHZlcnkgcG9wdWxhciBpbiBSZWFjdCBjb21tdW5pdHkgYnkgdGhlIHdheSBvZiBSZWR1eCBhbmQgTW9iWCB3b3JrcywgYSBzdG9yZSBpcyBhIHBsYWNlIHdoZXJlIHlvdSBjb3VsZCBrZWVwIHlvdXIgc3RhdGUsIGluIHRoZSBzdG9yZSB5b3UgY2FuIHRydXN0LCBpdCBtZWFucyB0aGF0IHRoZSBzdG9yZSBpcyB0aGUgc291cmNlIG9mIHRydXRoLCBhbmQgZXZlcnkgY2hhbmdlIGluIHRoZSBzdGF0ZSBpcyBhbHdheXMgYSBjaGFuZ2UgaW4gdGhlIHN0b3JlLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUbyBkZWxpdmVyIGV2ZXJ5IGNoYW5nZSB3ZSBuZWVkIHRvIHVzZSBhIHBhdHRlcm4gY2FsbGVkIFwifTxfY29tcG9uZW50cy5jb2RlPntcIk9ic2VydmFibGVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBzbyB3aGVuZXZlciBhIGNoYW5nZSBoYXBwZW5zIGluIHRoZSBzdGF0ZSwgdGhlIG9ic2VydmFibGUgY2FuIG5vdGlmeSB0aGUgc3Vic2NyaWJlcnMgdGhhdCB0aGUgc3RhdGUgaGFzIGNoYW5nZWQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIk5vdyB0aGF0IHdlIGtub3cgdGhlIG1haW4gY29uY2VwdCBvZiB0aGUgc3RvcmUgYW5kIHRoZSBvYnNlcnZhYmxlLCB3ZSBjYW4gZ28gb24gYW5kIHVuZGVyc3RhbmQgaG93IFVzZUZvcm0gdXNlcyBpdC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkhvdyBVc2VGb3JtIHdvcmtzXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJVc2VGb3JtIHVzZXMgYW4gZXh0ZXJuYWwgc3RvcmUgdG8ga2VlcCB0aGUgZm9ybSBzdGF0ZSwgYnV0IGl0J3Mgbm90IGVub3VnaCwgd2UgbmVlZCB0byBzaGFyZSB0aGUgc3RhdGUgd2l0aCBvdGhlciBjb21wb25lbnRzIHdpdGhvdXQgUmVhY3QgQ29udGV4dC4gRm9yIHRoaXMgcmVhc29uLCB3ZSBoYXZlIGEgZnVuY3Rpb24gY2FsbGVkIFwifTxfY29tcG9uZW50cy5jb2RlPntcImNyZWF0ZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiO1xcblRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIGZvcm0gYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIGFzIGEgaG9vaywgdGhpcyBob29rIGlzIGNvbm5lY3RlZCB0byB0aGUgc3RvcmUsIHNvIHdoZW5ldmVyIHRoZSBzdG9yZSBjaGFuZ2VzLCB0aGUgaG9vayB3aWxsIGJlIG5vdGlmaWVkIGFuZCB0aGUgZm9ybSB3aWxsIGJlIHVwZGF0ZWQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkluIG90aGVyIHdvcmRzLCB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiY3JlYXRlRm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZnVuY3Rpb24gY3JlYXRlcyBhIGZvcm0gYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGhhcyBhbGwgcmVzb3VyY2VzIHRvIG1hbmFnZSB0aGUgZm9ybSwgaWYgeW91IHVzZSBpdCB0ZW4gdGltZXMsIGl0IHdpbGwgYmUgdGhlIHNhbWUgZm9ybSBhbmQgdGhlIHNhbWUgc3RvcmUgYmVpbmcgbWFuYWdlZCBpbiBkaWZmZXJlbnQgcGxhY2VzLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJGb3IgdGhhdCByZWFzb24sIHdlIGNhbiB1c2UgdGhlIHNhbWUgZm9ybSBpbiBkaWZmZXJlbnQgY29tcG9uZW50cyB3aXRob3V0IHByb3ZpZGVycyBvciBSZWFjdCBDb250ZXh0IEFQSS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkluaXRpYWwgU3RhdGVcIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkFzIHRoZSBmaXJzdCBzdGVwLCB3ZSBuZWVkIHRvIGRlZmluZSB0aGUgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgZm9ybSwgdGhpcyBpcyB0aGUgc3RhdGUgdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiB0aGUgZm9ybSBpcyBjcmVhdGVkLCB3ZSBoYXZlIFwifTxfY29tcG9uZW50cy5jb2RlPntcImluaXRpYWxWYWx1ZXNcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJpbml0aWFsRXJyb3JzXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBwcm9wZXJ0aWVzLCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJpbml0aWFsVG91Y2hlZFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIGFsbCBvZiB0aGVtIGFyZSBvcHRpb25hbC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkZvcm0gVmFsaWRhdGlvblwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlIHZhbGlkYXRpb24gcHJvY2VzcyBjYW4gYmUgZG9uZSBpbiB0d28gd2F5czpcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJUaGUgZmlyc3QgYW5kIG1vc3QgY29tbW9uIGlzIHRvIHVzZSBhIFwifTxfY29tcG9uZW50cy5jb2RlPntcInZhbGlkYXRpb25TY2hlbWFcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCB0aGlzIGlzIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgdmFsaWRhdGlvbiBydWxlcywgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInZhbGlkYXRpb25TY2hlbWFcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHNob3VsZCBoYXZlIHRoZSBzYW1lIHNoYXBlIGZyb20gdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcImluaXRpYWxWYWx1ZXNcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIG9iamVjdCwgc28gaWYgeW91IGhhdmUgYSBmb3JtIHdpdGggYSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJuYW1lXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmaWVsZCwgeW91IHNob3VsZCBoYXZlIGEgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wibmFtZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZmllbGQgaW4gdGhlIHZhbGlkYXRpb25TY2hlbWEsIHRoaXMgcnVsZSBpcyBhcHBsaWVkIHRvIG5lc3RlZCBmaWVsZHMsIHdlIHJlY29tbWVuZCB0byB1c2UgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiWXVwXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBsaWJyYXJ5IGZvciB0aGlzLiBUaGUgZmlyc3Qgd2F5IGlzIHRoZSByZWNvbW1lbmRlZCB3YXkgdG8gdXNlIHZhbGlkYXRpb24sIGJlY2F1c2UgaXQncyB0aGUgbW9zdCBzaW1wbGUgYW5kIGVhc3kgdG8gdXNlLCBhbmQgeW91IGhhdmUgYSBwb3dlcmZ1bCB2YWxpZGF0aW9uIGxpYnJhcnkuIElmIHlvdSBkZWNpZGUgdG8gdXNlIHRoaXMgd2F5LCB5b3Ugc2hvdWxkIGNyZWF0ZSBhbmQgdXNlIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ2YWxpZGF0aW9uU2NoZW1hXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiB3aGVuIHlvdSBjcmVhdGUgdGhlIGZvcm0uXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiVGhlIHNlY29uZCB3YXkgaXMgdG8gdXNlIGEgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widmFsaWRhdGVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZ1bmN0aW9uLCB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlbiB0aGUgZm9ybSBpcyB1cGRhdGVkLCBhbmQgaXQgd2lsbCByZWNlaXZlIHRoZSBmb3JtIHZhbHVlcyBhbmQgdGhlIGZvcm0gZXJyb3JzLCBhbmQgaXQgc2hvdWxkIHJldHVybiBhbiBvYmplY3Qgd2l0aCB0aGUgbmV3IGZvcm0gZXJyb3JzLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiTmF0aXZlIGVsZW1lbnRzIHZzIEN1c3RvbSBlbGVtZW50c1wifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSW4gd2ViIGRldmVsb3BtZW50IHdlIGNhbiBmaW5kIG5hdGl2ZSBlbGVtZW50cyBsaWtlIFwifTxfY29tcG9uZW50cy5jb2RlPntcIjxpbnB1dD5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8c2VsZWN0PlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgYW5kIGN1c3RvbSBlbGVtZW50cyBsaWtlIFwifTxfY29tcG9uZW50cy5jb2RlPntcIjxTZWxlY3Rib3gvPlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgYW5kIFwifTxfY29tcG9uZW50cy5jb2RlPntcIjxEYXRlUGlja2VyLz5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiLFxcbnRoZXJlIGFyZSBzb21lIGRpZmZlcmVuY2VzIGJldHdlZW4gdGhlbSwgbmF0aXZlIGVsZW1lbnRzIGFyZSBIVE1MIGVsZW1lbnRzIHRoYXQgYXJlIGNyZWF0ZWQgYnkgdGhlIGJyb3dzZXIsIGFuZCBjdXN0b20gZWxlbWVudHMgYXJlIGNyZWF0ZWQgYnkgdGhlIGRldmVsb3BlcixcXG50aGUgZGV2ZWxvcGVyIGNhbiB1c2UgbmF0aXZlIGVsZW1lbnRzIHRvIGJ1aWxkIGN1c3RvbSBlbGVtZW50cy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiQnkgZGVmYXVsdCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJjcmVhdGVGb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBjcmVhdGUgYSBmb3JtIHVzaW5nIGp1c3QgYSByZWZlcmVuY2UgdG8gY29tbXVuaWNhdGUgd2l0aCBmaWVsZHMsIHNpbmNlIGZpZWxkcyBsaWtlIFwifTxfY29tcG9uZW50cy5jb2RlPntcIjxpbnB1dD5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8c2VsZWN0PlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgYXJlIG5hdGl2ZSBlbGVtZW50cywgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiY3JlYXRlRm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgY2FuIGRvIGl0IHdpdGhvdXQgcHJvYmxlbXMsXFxuYnV0IGlmIHlvdSB3YW50IHRvIHVzZSBjdXN0b20gZWxlbWVudHMsIFwifTxfY29tcG9uZW50cy5jb2RlPntcImNyZWF0ZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGNhbid0IGRvIGl0IGJlY2F1c2UgbW9zdCBvZiB0aGVtIGRvZXNuJ3QgaGF2ZSBhIHJlZmVyZW5jZSB0byBuYXRpdmUgZWxlbWVudHMsIGFuZCBjdXN0b20gZWxlbWVudHMgbm9ybWFsbHkgaGF2ZSBhbiBpbnRlcm5hbCBzdGF0ZSwgc28gdG8gd29yayB3aXRoIGN1c3RvbSBlbGVtZW50cyBhcyBuYXRpdmUgZWxlbWVudHMsIHdlIG5lZWQgYSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJXcmFwcGVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBjb21wb25lbnQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMz57XCJXcmFwcGVyXCJ9PC9fY29tcG9uZW50cy5oMz57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGUgV3JhcHBlciBjb21wb25lbnQgd2lsbCBiZSB1c2VkIHRvIHdyYXAgdGhlIGN1c3RvbSBlbGVtZW50cywgYW5kIGl0IHdpbGwgYmUgdXNlZCB0byBjcmVhdGUgYSByZWZlcmVuY2UgdG8gdGhlIG5hdGl2ZSBlbGVtZW50LiAoQ3VzdG9tIGVsZW1lbnRzIHNob3VsZCBoYXZlIGNvbW1vbnMgcHJvcGVydGllcyBsaWtlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInZhbHVlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wib25DaGFuZ2VcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJvbkJsdXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiKSBhbmQgaXQgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSBhIHJlZmVyZW5jZSB0byB0aGUgbmF0aXZlIGVsZW1lbnQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5ibG9ja3F1b3RlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIldlIG5lZWQgdG8gdXNlIGEgV3JhcHBlciBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG8gcmVyZW5kZXIgdGhlIGZvcm0gZXZlcnkgdGltZSB0aGUgY3VzdG9tIGVsZW1lbnQgY2hhbmdlcy4gV3JhcHBlciBwcmV2ZW50cyB0aGlzIGFuZCBtYWtlcyBqdXN0IHRoZSBzcGVjaWZpYyBjdXN0b20gZWxlbWVudCByZXJlbmRlci5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5ibG9ja3F1b3RlPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJDb250cm9sbGVkIHZzIFVuY29udHJvbGxlZCB2cyBEZWJvdW5jZWQgZm9ybXNcIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkJ5IGRlZmF1bHQsIFVzZUZvcm0gY3JlYXRlcyBhbiBhZ25vc3RpYyBmb3JtLCB3aGljaCBtZWFucyB0aGF0IHRoZSBmb3JtIGNhbiBiZSB1c2VkIGFzIHlvdSB3aXNoLCBhcyBjb250cm9sbGVkLCB1bmNvbnRyb2xsZWQgb3IgZGVib3VuY2VkLiBUaGlzIGNvbmZpZ3VyYXRpb24gc2hvdWxkIGJlIHByb3ZpZGVkIHdoZW4geW91IGFyZSBnb2luZyB0byB1c2UgaXQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiRGVib3VuY2VkIGZvcm1zIGFyZSBmb3JtcyB0aGF0IGFyZSB1cGRhdGVkIG9ubHkgd2hlbiB0aGUgdXNlciBzdG9wcyB0eXBpbmcsIHRoaXMgaXMgdXNlZnVsIHdoZW4geW91IGhhdmUgYSBmb3JtIHdpdGggYSBsb3Qgb2YgZmllbGRzLCBhbmQgeW91IGRvbid0IHdhbnQgdG8gdXBkYXRlIHRoZSBmb3JtIGV2ZXJ5IHRpbWUgdGhlIHVzZXIgdHlwZXMsIGJ1dCBvbmx5IHdoZW4gdGhlIHVzZXIgc3RvcHMgdHlwaW5nLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkNvbnRyb2xsZWQgZm9ybXMgYXJlIGZvcm1zIHRoYXQgYXJlIHVwZGF0ZWQgd2hlbmV2ZXIgdGhlIHVzZXIgdHlwZXMsIHRoaXMgaXMgdXNlZnVsIGlmIHlvdSB3YW50IHRvIGdpdmUgcXVpY2sgZmVlZGJhY2sgdG8gdGhlIHVzZXIsIGxpa2UgYSBmb3JtIHdpdGggYSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJuYW1lXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmaWVsZCwgeW91IGNhbiB1c2UgYSBjb250cm9sbGVkIGZvcm0gdG8gc2hvdyB0aGUgdXNlciB0aGUgZXJyb3Igd2hlbiB0aGUgZmllbGQgaXMgZW1wdHkgYmVmb3JlIHRvIHN1Ym1pdCB0aGUgZm9ybS5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJVbmNvbnRyb2xsZWQgZm9ybXMgYXJlIGZvcm1zIHRoYXQgYXJlIHVwZGF0ZWQganVzdCB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCwgd2hpY2ggbWVhbnMgdGhhdCB0aGUgZm9ybSBjYW4gYmUgZnVsZmlsbGVkIHdpdGggdGhlIHZhbHVlcyBvZiB0aGUgZm9ybSBhbmQgc3VibWl0dGVkIHdpdGhvdXQgcmVyZW5kZXJpbmcgdGhlIGZvcm0uXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIllvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCB0aGlzIGluIHRoZSBwYWdlcyBmb3IgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiY29udHJvbGxlZFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVuY29udHJvbGxlZFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJkZWJvdW5jZWRcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZvcm1zLlwifTwvX2NvbXBvbmVudHMucD48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImNvbmNlcHQubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcInVzZUZvcm0gfCBSZWFkbWVcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiWW91ciBmaXN0IHN0ZXAgdG8gY3JlYXRlIGZvcm0gZWFzaWx5IHdpdGhvdXQgZWZmb3J0LlwiXG4gIH1cbn07XG5pbXBvcnQgRGVtbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RlbW8nO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvZGVibG9jayc7XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBwOiBcInBcIixcbiAgICBpbWc6IFwiaW1nXCIsXG4gICAgaDE6IFwiaDFcIixcbiAgICBibG9ja3F1b3RlOiBcImJsb2NrcXVvdGVcIixcbiAgICBjb2RlOiBcImNvZGVcIixcbiAgICBoMzogXCJoM1wiLFxuICAgIGE6IFwiYVwiLFxuICAgIGgyOiBcImgyXCIsXG4gICAgYnI6IFwiYnJcIixcbiAgICB1bDogXCJ1bFwiLFxuICAgIGxpOiBcImxpXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMucD48X2NvbXBvbmVudHMuaW1nIHNyYz1cImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS91c2UtZm9ybS91c2UtZm9ybS9tYWluL2ltZy9sb2dvMy5wbmdcIiBhbHQ9XCJMb2dvXCIgLz48L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgxPntcIldlbGNvbWUgdG8gdXNlRm9ybSBcdUQ4M0RcdURDNEJcIn08L19jb21wb25lbnRzLmgxPntcIlxcblwifTxfY29tcG9uZW50cy5ibG9ja3F1b3RlPntcIlxcblwifTxfY29tcG9uZW50cy5wPjxfY29tcG9uZW50cy5jb2RlPntcInVzZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHByb3ZpZGUgYSB3YXkgdG8gY3JlYXRlIGNvbXBsZXggZm9ybXMgZWFzaWx5LlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08L19jb21wb25lbnRzLmJsb2NrcXVvdGU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIlx1RDgzQ1x1REZFMCBcIn08X2NvbXBvbmVudHMuYSBocmVmPVwiaHR0cHM6Ly91c2Vmb3JtLm9yZ1wiPntcIkhvbWVwYWdlXCJ9PC9fY29tcG9uZW50cy5hPjwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIlx1MjcyOCBcIn08X2NvbXBvbmVudHMuYSBocmVmPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL3VzZWZvcm0tMnUyanVcIj57XCJEZW1vXCJ9PC9fY29tcG9uZW50cy5hPjwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkRlc2NyaXB0aW9uXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJGb3JtcyBhcmUgYW4gaW1wb3J0YW50IHBhcnQgb2Ygd2ViIGFwcGxpY2F0aW9ucywgYW5kIHdpdGggcmVhY3QgaXQncyBwb3NzaWJsZSB0byBjcmVhdGUgZ3JlYXRzIGZvcm1zLFwifTxfY29tcG9uZW50cy5iciAvPntcIlxcblwifXtcInJlYWN0IGhvb2tzIGFyZSBhIGdhbWUtY2hhbmdlciB3aGVuIHdlIHRoaW5rIGFib3V0IGZvcm1zLCB3aXRoIGhvb2tzIGlzIHNpbXBsZSB0byBjcmVhdGUgZm9ybXMsIGFuZCB5b3UgY2FuIGdvIG9uIHdpdGhvdXQgbGlicmFyaWVzLlwifTxfY29tcG9uZW50cy5iciAvPntcIlxcblwifXtcIkJ1dCB3aGVuIHdlIHdhbnQgdG8gYnVpbGQgY29tcGxleCBmb3JtcyB3aXRoIG5lc3RlZCBmaWVsZHMgYW5kIHZhbGlkYXRpb25zLCBtYWlnaHQgYmUgYSBnb29kIGlkZWEgdG8gdXNlIGEgbGlicmFyeSwgYW5kIHlvdSBjYW4gZmluZCBhIGxvdCBvZiBsaWJyYXJpZXMgdG8gaGVscCB5b3UgdG8gY3JlYXRlIGZvcm1zLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiU28sIHdoeSBVc2VGb3JtP1wifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlcmUgYXJlIHNvbWUgcmVhc29ucyB3aHkgeW91IGZhY2UgcHJvYmxlbXMgd2hlbiB5b3Ugd2FudCB0byBjcmVhdGUgZm9ybXMsIGFuZCB3aXRoIHVzZUZvcm0geW91IGNhbiBzb2x2ZSB0aGlzIHByb2JsZW1zLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08YnIgLz57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlN0YXRlIG1hbmFnZW1lbnQgLSAgQSBjb3VwbGUgb2YgeWVlYXJzIGFnbywgeW91IGNvdWxkIHRoaW5rIHRoYXQgUmVkdXggb3IgTW9iWCB3YXMgIGEgZ29vZCBzb2x1dGlvbiB0byBtYW5hZ2UgZm9ybSBzdGF0ZSBpbiByZWFjdCwgYnV0IHRoZXkgd2Fzbid0LiBUb2RheSB5b3UgY2FuIHVzZSBob29rcyB0byBtYW5hZ2UgZm9ybSBzdGF0ZSwgaG9va3MgbGlrZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VTdGF0ZXdcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VSZWR1Y2VyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhcmUgYSBnb29kIHNvbHV0aW9uIHRvIG1hbmFnZSBzdGF0ZS4gQnV0IG1hbmFnZSB2YWx1ZXMsIHRvdWNoZWQgZmllbGRzIGFuZCBlcnJvcnMgY291bGQgYmUgYSBwcm9ibGVtIGlmIHlvdSBkb24ndCBoYXZlIGEgc3RhbmRhcmQgd2F5IHRvIG1hbmFnZXIgdGhlbS4gVXN1YWxseSByZWFsIGFwcGxpY2F0aW9ucyB1c2UgbmVzdGVkIG9iamVjdHMgYXMgcmVxdWVzdCBwYXlsb29hZHMsIGFuZCB5b3Ugc2hvdWxkIGtlZXAgaXQgaW4gb3JkZXIgdG8gc2VuZCB0aGUgY29ycmVjdCBkYXRhIHRvIHRoZSBzZXJ2ZXIsIG1hbmFnZSBuZXN0ZWQgdmFsdWVzIGFuZCBlcnJvcnMgY291bGQgYmUgYSBwcm9ibGVtIHVzaW5nIGp1c3QgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlU3RhdGVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VSZWR1Y2VyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIi5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJFcnJvcnMgLSBUbyBkZWFsIHdpdGggZXJyb3JzLCB5b3UgY2FuIHVzZSB5b3VyIHdvdW4gdmFsaWRhdGlvbiBzb2x1dGlvbiwgYW5kIGl0IGNhbiB3b3JrIHdlbGwgd2l0aCBzaW1wbGUgZm9ybXMsIGJ1dCB5b3UgY2FuIHN0dWNrIHdpdGggYSBsb3Qgb2YgZXJyb3JzIHdoZW4geW91IGhhdmUgbmVzdGVkIGZpZWxkcy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJUb3VjaGVkIGZpZWxkcyAtIE1heWJlIHlvdSB3YW50IHRvIHNob3cgYSBtZXNzYWdlIGVycm9yIGp1c3Qgd2hlbiB0aGUgZmllbGQgaXMgdG91Y2hlZCwgc28gaW4gb3JkZXIgdG8gZG8gdGhhdCB5b3UgbmVlZCB0byBtYW5hZ2VyIHRoZSB0b3VjaGVkIGZpZWxkcywgaXQgY2FuIGJlIHJlYWxseSBlYXN5IHRvIGRvIHdpdGggXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlU3RhdGVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VSZWR1Y2VyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgYnV0IHlvdSBjYW4ndCBkbyB0aGF0IHZlcnkgd2VsbCB3aXRoIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVN0YXRlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlUmVkdWNlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgd2hlbiB5b3UgaGF2ZSBuZXN0ZWQgZmllbGRzLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkhhbmRsZSBzdWJtaXQgLSBXaGVuIHlvdSB3YW50IHRvIGhhbmRsZSBzdWJtaXQsIHlvdSBuZWVkIHRvIG1hbmFnZSB0aGUgc3VibWl0IGV2ZW50LCBpdCdzIHJlYWxseSBjb252aW5pZW50IHdoZW4geW91IGhhdmUgYSBhbHJlYWR5IHNvbHV0aW9uIHRvIGRvIHRoYXQuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxiciAvPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlVzZUZvcm0gcHJvdmlkZXMgYSB3YXkgdG8gY3JlYXRlIGNvbXBsZXggZm9ybXMgZWFzaWx5LCB0aGlzIGhvb2sgcmV0dXJucyBhbiBvYmplY3Qgb2YgdmFsdWVzIFx1MjAwQlx1MjAwQmluIHRoZSBzYW1lIHNoYXBlIHRoYXQgaXQgcmVjZWl2ZXMsIHRoaXMgaXMgcG9zc2libGUgdXNpbmcgZG90IG5vdGF0aW9uLiBUaGVyZWZvcmUsXFxuaXQgZG9lcyBub3QgbWF0dGVyIGlmIHRoZSBvYmplY3QgaXMgY29tcGxleCBvciBoYXMgbWFueSBwcm9wZXJ0aWVzIG9yIGFycmF5LFxcbnRoZSByZXN1bHQgaXMgdGhlIHNhbWUuIFRoaXMgcHJvY2VzcyB0dXJucyB2ZXJ5IGVhc2lseSB0byBjcmVhdGUgZm9ybXMgZnJvbSBhbiBvYmplY3Qgd2l0aCBzZXZlcmFsIGxheWVycyxcXG50aGUgc2FtZSBsYXllcnMgYW5kIHByb3BlcnRpZXMgYXJlIHJlcGxpY2F0ZWQgaW4gdGhlIGZpbmFsIG9iamVjdCxcXG50aGlzIGFwcHJvYWNoIHByZXZlbnRzIHlvdSB0byB0eXBlIG1vcmUgY29kZSB0byBjb252ZXJ0IGFuIG9iamVjdCBmcm9tIGZvcm0gdG8gYmFja2VuZCBvYmplY3QgdHlwZS4gVGhlIHNhbWUgcHJvY2VzcyBpcyByZWFsaXplZCB3aXRoIGVycm9ycyBvYmplY3QgYW5kIHRvdWNoZWQgb2JqZWN0cy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIldoYXQgdG8gZXhwZWN0IHdpdGggdXNlRm9ybVwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJQZXJmb3JtZXIgZm9ybXMgLSB1c2VGb3JtIHByb3ZpZGVzIGEgd2F5IHRvIGNvbXBsZXRlIGEgZm9ybSBhbmQgc3VibWl0IGl0IHdpdGhvdXQgYW55IHJlcmVuZGVyLCBieSBkZWZhdWx0IHVzZUZvcm0gY3JlYXRlcyB1bmNvbnRyb2xsZWQgZm9ybXMuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiRWFzeSB0byB3cml0ZSAtIHVzZUZvcm0gaGFzIGFuIGVhc3kgd2F5IHRvIHdyaXRlIGZvcm1zIHdpdGggbGVzcyBjb2RlLiByZWdpc3RlciBmdW5jdGlvbiByZXR1cm4gbmVjZXNzYXJ5IGlucHV0J3MgcHJvcGVydGllcyBhbmQgaXQgaXMgYWxsIHdlIG5lZWQgdG8gbWFuYWdlIGFsbCBldmVudHMgaW4gYSBuYXRpdmUgSFRNTCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJpbnB1dFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIuIFdyaXRoZSBmb3JtcyB3aXRob3V0IGZvcm0gdGFnLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkVhc3kgdmFsaWRhdGlvbiAtIEJ5IGRlZmF1bHQgdXNlRm9ybSB1c2VzIHl1cCB2YWxpZGF0aW9uLCB3ZSBjYW4gd3JpdGUgY29tcGxleCB2YWxpZGF0aW9uIHdpdGhvdXQgZWZmb3J0LlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiSW5zdGFsbGF0aW9uXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08Q29kZUJsb2NrIGxhbmd1YWdlPVwiYmFzaFwiPntgbnBtIGluc3RhbGwgLS1zYXZlIEB1c2UtZm9ybS91c2UtZm9ybVxuICBgfTwvQ29kZUJsb2NrPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJiYXNoXCI+e2B5YXJuIGFkZCBAdXNlLWZvcm0vdXNlLWZvcm1cbiAgYH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiVXNhZ2VcIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIldpdGggXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiY3JlYXRlRm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgeW91IGNhbiBjcmVhdGUgYSBob29rIGZvcm0gYW5kIHVzZSBpdCB3aGVyZXZlciB5b3Ugd2FudCxcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PGJyIC8+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImphdmFzY3JpcHRcIj57YGltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICdAdXNlLWZvcm0vY29yZSdcblxuY29uc3QgdXNlVXNlckZvcm0gPSBjcmVhdGVGb3JtKHtcbiAgaW5pdGlhbFZhbHVlczoge1xuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgY29uZmlybVBhc3N3b3JkOiAnJyxcbiAgfSxcbiB9KVxuYH08L0NvZGVCbG9jaz57XCJcXG5cIn08Q29kZUJsb2NrIGxhbmd1YWdlPVwianN4XCI+e2BcbmZ1bnRpb24gVXNlckZvcm0oKXtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VVc2VyRm9ybSgpXG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKCduYW1lJyl9IC8+XG4gICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcignZW1haWwnKX0gLz5cbiAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKCdwYXNzd29yZCcpfSAvPlxuICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoJ2NvbmZpcm1QYXNzd29yZCcpfSAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApXG59XG5gfTwvQ29kZUJsb2NrPntcIlxcblwifTxfY29tcG9uZW50cy5oMz48X2NvbXBvbmVudHMuYSBocmVmPVwiaHR0cHM6Ly9kZXYudG8vanVjaWFuMC9idWlsZGluZy1mb3Jtcy13aXRoLXVzZWZvcm0tMWNuYVwiPntcIlBvc3RcIn08L19jb21wb25lbnRzLmE+PC9fY29tcG9uZW50cy5oMz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiXHVEODNFXHVERDFEIENvbnRyaWJ1dGluZ1wifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiQ29udHJpYnV0aW9ucywgaXNzdWVzIGFuZCBmZWF0dXJlIHJlcXVlc3RzIGFyZSB3ZWxjb21lIVwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJGZWVsIGZyZWUgdG8gY2hlY2sgXCJ9PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS91c2UtZm9ybS91c2UtZm9ybS9pc3N1ZXNcIj57XCJpc3N1ZXMgcGFnZVwifTwvX2NvbXBvbmVudHMuYT57XCIuIFlvdSBjYW4gYWxzbyB0YWtlIGEgbG9vayBhdCB0aGUgXCJ9PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9KdWNpYW4wL3VzZS1mb3JtL2Jsb2IvbWFpbi9DT05UUklCVVRJTkcubWRcIj57XCJjb250cmlidXRpbmcgZ3VpZGVcIn08L19jb21wb25lbnRzLmE+e1wiLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiU2hvdyB5b3VyIHN1cHBvcnRcIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkdpdmUgYSBcdTJCNTBcdUZFMEYgaWYgdGhpcyBwcm9qZWN0IGhlbHBlZCB5b3UhXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJcdUQ4M0RcdURDREQgTGljZW5zZVwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiQ29weXJpZ2h0IFx1MDBBOSAyMDIwIFwifTxfY29tcG9uZW50cy5hIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdXNlLWZvcm1cIj57XCJ1c2VGb3JtXCJ9PC9fY29tcG9uZW50cy5hPntcIi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhpcyBwcm9qZWN0IGlzIFwifTxfY29tcG9uZW50cy5hIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdXNlLWZvcm0vdXNlLWZvcm0vYmxvYi81M2RlYmQ2OTg2NjUwZjc2NTYxNzk1ZjIwNjlkNmVlYmM1ZGI2YzY1L0xJQ0VOU0VcIj57XCJNSVRcIn08L19jb21wb25lbnRzLmE+e1wiIGxpY2Vuc2VkLlwifTwvX2NvbXBvbmVudHMucD48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcImluZGV4Lm1keFwiO1xuZXhwb3J0IGNvbnN0IGhlYWRlcnMgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLmhlYWRlcnM7XG5leHBvcnQgY29uc3QgbWV0YSA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMubWV0YTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFT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
