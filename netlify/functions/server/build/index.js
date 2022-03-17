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
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());
var import_react2 = __toModule(require("react"));
var meta = () => {
  return { title: "useForm", description: "useForm provides a easy way to create forms." };
};
var links = () => [
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" }
];
function App() {
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
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null), styles), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
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
    "title": "Custom components",
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
    "title": "Form validation",
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
    "title": "Native HTML elements",
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
    "title": "debounced mode",
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
    "title": "onChange mode",
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
    "title": "onSubmit mode",
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
    "title": "Create Form",
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
    "title": "Quick Start",
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
    "title": "Concept",
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
    "title": "Readme",
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
 * @remix-run/server-runtime v1.1.1
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAiLi4vLi4vLi4vLi4vYXBwL3N0eWxlcy5jb250ZXh0LnRzIiwgInJvdXRlLW1vZHVsZTovaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm9vdC50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9ob2NzL3dpdGhIb21lLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9mb290ZXIvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvbG9nby9pbmRleC50cyIsICIuLi8uLi8uLi8uLi9hcHAvY29uZmlnL2luZGV4LnRzIiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL25hdmJhci9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvbmF2YmFyL3N0eWxlcy50cyIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvaG9jcy93aXRoRG9jcy50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvY29udGVudEZvb3Rlci9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvY29udGVudEZvb3Rlci9zdHlsZXMudHMiLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zdHlsZXMudHMiLCAibWR4Oi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9jdXN0b20tY29tcG9uZW50cy5tZHgiLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvZGVtby9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvY29kZWJsb2NrL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9jb2RlYmxvY2svc3R5bGVzLnRzIiwgIm1keDovaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3MvZm9ybS12YWxpZGF0aW9uLm1keCIsICJtZHg6L2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL25hdGl2ZS1lbGVtZW50cy5tZHgiLCAibWR4Oi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9kZWJvdW5jZWQtZm9ybS5tZHgiLCAibWR4Oi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9vbmNoYW5nZS1mb3JtLm1keCIsICJtZHg6L2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL29uc3VibWl0LWZvcm0ubWR4IiwgIm1keDovaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3MvY3JlYXRlLWZvcm0ubWR4IiwgIm1keDovaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3MvcXVpY2stc3RhcnQubWR4IiwgIm1keDovaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3MvY29uY2VwdC5tZHgiLCAibWR4Oi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9pbmRleC5tZHgiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3MudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9jdXN0b20tY29tcG9uZW50cy5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL2Zvcm0tdmFsaWRhdGlvbi5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL25hdGl2ZS1lbGVtZW50cy5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL2RlYm91bmNlZC1mb3JtLm1keFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvaG9tZS9iYXJib3NhL2phdmFzY3JpcHQvZG9jcy9hcHAvcm91dGVzL2RvY3Mvb25jaGFuZ2UtZm9ybS5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL29uc3VibWl0LWZvcm0ubWR4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9jcmVhdGUtZm9ybS5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9xdWljay1zdGFydC5tZHhcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIi9ob21lL2JhcmJvc2EvamF2YXNjcmlwdC9kb2NzL2FwcC9yb3V0ZXMvZG9jcy9jb25jZXB0Lm1keFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMiBmcm9tIFwiL2hvbWUvYmFyYm9zYS9qYXZhc2NyaXB0L2RvY3MvYXBwL3JvdXRlcy9kb2NzL2luZGV4Lm1keFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2RvY3NcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kb2NzXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiZG9jc1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2RvY3MvY3VzdG9tLWNvbXBvbmVudHNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kb2NzL2N1c3RvbS1jb21wb25lbnRzXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RvY3NcIixcbiAgICBwYXRoOiBcImN1c3RvbS1jb21wb25lbnRzXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvZG9jcy9mb3JtLXZhbGlkYXRpb25cIjoge1xuICAgIGlkOiBcInJvdXRlcy9kb2NzL2Zvcm0tdmFsaWRhdGlvblwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9kb2NzXCIsXG4gICAgcGF0aDogXCJmb3JtLXZhbGlkYXRpb25cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy9kb2NzL25hdGl2ZS1lbGVtZW50c1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RvY3MvbmF0aXZlLWVsZW1lbnRzXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RvY3NcIixcbiAgICBwYXRoOiBcIm5hdGl2ZS1lbGVtZW50c1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU1XG4gIH0sXG4gIFwicm91dGVzL2RvY3MvZGVib3VuY2VkLWZvcm1cIjoge1xuICAgIGlkOiBcInJvdXRlcy9kb2NzL2RlYm91bmNlZC1mb3JtXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RvY3NcIixcbiAgICBwYXRoOiBcImRlYm91bmNlZC1mb3JtXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTZcbiAgfSxcbiAgXCJyb3V0ZXMvZG9jcy9vbmNoYW5nZS1mb3JtXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZG9jcy9vbmNoYW5nZS1mb3JtXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RvY3NcIixcbiAgICBwYXRoOiBcIm9uY2hhbmdlLWZvcm1cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlN1xuICB9LFxuICBcInJvdXRlcy9kb2NzL29uc3VibWl0LWZvcm1cIjoge1xuICAgIGlkOiBcInJvdXRlcy9kb2NzL29uc3VibWl0LWZvcm1cIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZG9jc1wiLFxuICAgIHBhdGg6IFwib25zdWJtaXQtZm9ybVwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU4XG4gIH0sXG4gIFwicm91dGVzL2RvY3MvY3JlYXRlLWZvcm1cIjoge1xuICAgIGlkOiBcInJvdXRlcy9kb2NzL2NyZWF0ZS1mb3JtXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RvY3NcIixcbiAgICBwYXRoOiBcImNyZWF0ZS1mb3JtXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTlcbiAgfSxcbiAgXCJyb3V0ZXMvZG9jcy9xdWljay1zdGFydFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RvY3MvcXVpY2stc3RhcnRcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZG9jc1wiLFxuICAgIHBhdGg6IFwicXVpY2stc3RhcnRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTBcbiAgfSxcbiAgXCJyb3V0ZXMvZG9jcy9jb25jZXB0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvZG9jcy9jb25jZXB0XCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2RvY3NcIixcbiAgICBwYXRoOiBcImNvbmNlcHRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTFcbiAgfSxcbiAgXCJyb3V0ZXMvZG9jcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2RvY3MvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZG9jc1wiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTEyXG4gIH1cbn07IiwgIi8vIGFwcC9lbnRyeS5zZXJ2ZXIudHN4XG5pbXBvcnQgUmVhY3RET01TZXJ2ZXIgZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgU3R5bGVzQ29udGV4dCB9IGZyb20gXCIuL3N0eWxlcy5jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcblxuICBjb25zdCBzaGVldCA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KCk7XG5cbiAgcmVuZGVyVG9TdHJpbmcoXG4gICAgc2hlZXQuY29sbGVjdFN0eWxlcyhcbiAgICAgIDxTdHlsZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtudWxsfT5cbiAgICAgICAgPFJlbWl4U2VydmVyXG4gICAgICAgICAgY29udGV4dD17cmVtaXhDb250ZXh0fVxuICAgICAgICAgIHVybD17cmVxdWVzdC51cmx9XG4gICAgICAgIC8+XG4gICAgICA8L1N0eWxlc0NvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuICApO1xuXG4gIGNvbnN0IHN0eWxlcyA9IHNoZWV0LmdldFN0eWxlRWxlbWVudCgpO1xuICBzaGVldC5zZWFsKCk7XG5cbiAgY29uc3QgbWFya3VwID0gUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoXG4gICAgPFN0eWxlc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3N0eWxlc30+XG4gICAgICA8UmVtaXhTZXJ2ZXJcbiAgICAgICAgY29udGV4dD17cmVtaXhDb250ZXh0fVxuICAgICAgICB1cmw9e3JlcXVlc3QudXJsfVxuICAgICAgLz5cbiAgICA8L1N0eWxlc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59IiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlLCBjc3MsIERlZmF1bHRUaGVtZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgU3R5bGVzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8bnVsbCB8IFJlYWN0LlJlYWN0RWxlbWVudDx7fSwgc3RyaW5nIHwgUmVhY3QuSlNYRWxlbWVudENvbnN0cnVjdG9yPGFueT4+W10+KG51bGwpO1xuZXhwb3J0IGNvbnN0IFRoZW1lQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8YW55Pih7fSlcblxuZGVjbGFyZSBtb2R1bGUgXCJzdHlsZWQtY29tcG9uZW50c1wiIHtcbiAgIGV4cG9ydCBpbnRlcmZhY2UgRGVmYXVsdFRoZW1lIHtcbiAgICAgIGNvbG9yczoge1xuICAgICAgICAgYmtnQ29udGVudDogc3RyaW5nO1xuICAgICAgICAgcHJpbWFyeTogc3RyaW5nXG4gICAgICAgICBwcmltYXJ5SG92ZXI6IHN0cmluZ1xuICAgICAgICAgc2Vjb25kYXJ5OiBzdHJpbmdcbiAgICAgICAgIGRhcms6IHN0cmluZ1xuICAgICAgICAgYm9yZGVyOiBzdHJpbmdcbiAgICAgICAgIHJlZDogc3RyaW5nXG4gICAgICAgICBiYWNrZ3JvdW5kOiBzdHJpbmdcbiAgICAgICAgIHRleHRDb2xvcjogc3RyaW5nXG4gICAgICAgICBoZWFkaW5nQ29sb3I6IHN0cmluZ1xuICAgICAgICAgYmtnUHJlOiBzdHJpbmdcbiAgICAgICAgIGNvbG9yUHJlOiBzdHJpbmdcbiAgICAgICAgIGJrZ1Njcm9sbGJhcjogc3RyaW5nXG4gICAgICAgICB3aGl0ZTogc3RyaW5nXG4gICAgICB9XG4gICB9XG59XG5cbmV4cG9ydCBjb25zdCBsaWdodFRoZW1lOiBEZWZhdWx0VGhlbWUgPSB7XG4gICBjb2xvcnM6IHtcbiAgICAgIHByaW1hcnk6ICcjMmVjNGI2JyxcbiAgICAgIHByaW1hcnlIb3ZlcjogJyMyOUIwQTMnLFxuICAgICAgc2Vjb25kYXJ5OiAnIzNhNTA2YicsXG4gICAgICBkYXJrOiAnIzBiMTMyYicsXG4gICAgICBib3JkZXI6ICcjZWRmMmY0JyxcbiAgICAgIHJlZDogJyNlNzFkMzYnLFxuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxuICAgICAgdGV4dENvbG9yOiAnIzRiNTU2MycsXG4gICAgICBoZWFkaW5nQ29sb3I6ICcjMTExODI3JyxcbiAgICAgIGJrZ1ByZTogJyNlZGYyZjQnLFxuICAgICAgY29sb3JQcmU6ICcjZWRmMmY0JyxcbiAgICAgIGJrZ1Njcm9sbGJhcjogJyMzYTUwNmInLFxuICAgICAgYmtnQ29udGVudDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgd2hpdGU6ICcjRkZGRkZGJ1xuICAgfSxcbn1cblxuZXhwb3J0IGNvbnN0IGRhcmtUaGVtZSA9IHtcbiAgIGNvbG9yczoge1xuICAgICAgcHJpbWFyeTogJyMyZWM0YjYnLFxuICAgICAgcHJpbWFyeUhvdmVyOiAnIzI5QjBBMycsXG4gICAgICBzZWNvbmRhcnk6ICcjM2E1MDZiJyxcbiAgICAgIGRhcms6ICcjMGIxMzJiJyxcbiAgICAgIGJvcmRlcjogJyMxYjI2MmMnLFxuICAgICAgcmVkOiAnI2U3MWQzNicsXG4gICAgICBiYWNrZ3JvdW5kOiAnIzFjMjEyOCcsXG4gICAgICB0ZXh0Q29sb3I6ICcjZWRmMmY0JyxcbiAgICAgIGhlYWRpbmdDb2xvcjogJyNlZGYyZjQnLFxuICAgICAgYmtnUHJlOiAnIzNhNTA2YicsXG4gICAgICBjb2xvclByZTogJyNlZGYyZjQnLFxuICAgICAgYmtnU2Nyb2xsYmFyOiAnIzNhNTA2YicsXG4gICAgICBia2dDb250ZW50OiBcInRyYW5zcGFyZW50XCIsXG4gICAgICB3aGl0ZTogJyNGRkZGRkYnXG4gICB9LFxufVxuXG5leHBvcnQgY29uc3QgU2Nyb2xsQmFyID0gY3NzYFxuICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICB3aWR0aDogMC42MjVyZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci10b3A6IDAuNjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMC42MjVyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICB9XG5cbiAgIDo6LXdlYmtpdC1zY3JvbGxiYXI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgIH1cblxuICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp2ZXJ0aWNhbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ia2dTY3JvbGxiYXJ9O1xuICAgICAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgbWluLWhlaWdodDogMC42MjVyZW07XG4gICB9XG5cbiAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6dmVydGljYWw6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJrZ1Njcm9sbGJhcn07XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gICB9XG4gICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOnZlcnRpY2FsOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJrZ1Njcm9sbGJhcn07XG4gICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gICAgICB3aWR0aDogMC42MjVyZW07XG4gICB9XG5cbiAgIC5ob3Jpem9udGFsLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXI6dmVydGljYWwge1xuICAgICAgd2lkdGg6IDAuNDM3NXJlbTtcbiAgIH1cblxuICAgLmhvcml6b250YWwtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhcjpob3Jpem9udGFsIHtcbiAgICAgIGhlaWdodDogMC40Mzc1cmVtO1xuICAgfVxuXG4gICAuaG9yaXpvbnRhbC1zY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJrZ1Njcm9sbGJhcn07XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjQzNzVyZW07XG4gICB9XG5cbiAgIC5ob3Jpem9udGFsLXNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgICAgIHBhZGRpbmc6IDAuMDYyNXJlbTtcbiAgIH1cblxuICAgLmhvcml6b250YWwtc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ia2dTY3JvbGxiYXJ9O1xuICAgfVxuYFxuXG5leHBvcnQgY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcblxuICAgKntcbiAgICAgIG1hcmdpbjowO1xuICAgICAgZm9udC1zaXplOjE2cHg7XG4gICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgJHtTY3JvbGxCYXJ9O1xuICAgICAgb3V0bGluZTpub25lO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgIH1cbiAgIGh0bWwsIGJvZHkge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJhY2tncm91bmR9O1xuICAgfVxuXG4gICAgaDF7XG4gICAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5oZWFkaW5nQ29sb3J9O1xuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgLy9tYXJnaW4tdG9wOiAxLjZlbTtcbiAgICAgLy8gbWFyZ2luLWJvdHRvbTogLjhlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICBzY3JvbGwtbWFyZ2luLXRvcDogMS42ZW07XG4gICAgfVxuXG4gICAgaDJ7XG4gICAgICBmb250LXNpemU6MS40Mjg1NzE0ZW07XG4gICAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5oZWFkaW5nQ29sb3J9O1xuICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgIG1hcmdpbi10b3A6IDEuNmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLjhlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICBzY3JvbGwtbWFyZ2luLXRvcDogMS42ZW07XG4gICAgfVxuXG4gICAgaDN7XG4gICAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5oZWFkaW5nQ29sb3J9O1xuICAgICAgZm9udC1zaXplOiAxLjI4NTcxNDNlbTtcbiAgICAgIG1hcmdpbi10b3A6IDEuNTU1NTU1NmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogLjQ0NDQ0NDRlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU1NTU1NTY7XG4gICAgICBzY3JvbGwtbWFyZ2luLXRvcDogMS41NTU1NTU2ZW07XG4gICAgfVxuXG4gICAgaDR7XG4gICAgICBmb250LXNpemU6MXJlbTtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmhlYWRpbmdDb2xvcn07XG4gICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgbWFyZ2luLXRvcDogMS42ZW07XG4gICAgICBtYXJnaW4tYm90dG9tOiAuOGVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgIHNjcm9sbC1tYXJnaW4tdG9wOiAxLjZlbTtcbiAgICB9XG5cbiAgIGF7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnNlY29uZGFyeX07XG4gICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcbiAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XG4gICAgICAmOmhvdmVye1xuICAgICAgICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICB9XG4gICB9XG5cbiAgIHB7XG4gICAgICBmb250LXdlaWdodDo0MDA7XG4gICAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjcxNDI4NTc7XG4gICAgICBzY3JvbGwtbWFyZ2luLXRvcDogMS42ZW07XG5cbiAgICAgIGNvZGV7XG4gICAgICAgICBkaXNwbGF5OmlubGluZTtcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmtnUHJlfTtcbiAgICAgICAgIGJvcmRlci1yYWRpdXM6LjNyZW07XG4gICAgICAgICBmb250LXNpemU6Ljg1cmVtO1xuICAgICAgICAgZm9udC1mYW1pbHk6TW9ub3NwYWNlO1xuICAgICAgICAgcGFkZGluZzogMC4xMjVyZW0gMC4yNXJlbTtcbiAgICAgICAgIGRpc3BsYXk6aW5saW5lO1xuICAgICAgICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgICAgIH1cbiAgICAgIHN0cm9uZ3tcbiAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgfVxuXG4gICBzdHJvbmd7XG4gICAgIGZvbnQtd2VpZ2h0OjUwMDtcbiAgIH1cblxuICAgbGluZS1oZWlnaHQsIHVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgIH1cblxuXG4gICB1bHtcbiAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgc2Nyb2xsLW1hcmdpbi10b3A6IDEuNmVtO1xuICAgfVxuXG4gICBsaXtcbiAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgc2Nyb2xsLW1hcmdpbi10b3A6IDEuNmVtO1xuICAgICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG4gICB9XG5cbiAgIHRhYmxle1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4xODhyZW0gMC4zNzVyZW0gcmdiYSgwLDAsMCwwLjE2KSwgMCAwLjE4OHJlbSAwLjM3NXJlbSByZ2JhKDAsMCwwLDAuMjMpO1xuICAgICAgYm9yZGVyLXJhZGl1czo4cHg7XG5cbiAgIHRkLCB0aCB7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtIDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtIDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgfVxuXG4gICB0aGVhZCB7XG4gICAgICAgIHRyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4wNjNyZW0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYm9yZGVyfTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICB9XG5cbiAgIHRib2R5IHtcbiAgICAgICAgdHIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4wNjNyZW0gJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYm9yZGVyfTtcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiByZWQ7XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206bm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXHR9XG4gICB9XG5cbiAgIGJsb2NrcXVvdGV7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ib3JkZXJ9O1xuICAgICAgcGFkZGluZzogMXB4IDAgMXB4IDE1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgICAgZm9udC1zdHlsZTppdGFsaWM7XG4gICAgICAmIHB7XG4gICAgICAgICBtYXJnaW4tdG9wOjEycHg7XG4gICAgICAgICBtYXJnaW4tYm90dG9tOjEycHg7XG4gICAgICB9XG4gICB9XG5gXG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb25cbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3R5bGVzQ29udGV4dCwgVGhlbWVDb250ZXh0IH0gZnJvbSBcIi4vc3R5bGVzLmNvbnRleHRcIjtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwidXNlRm9ybVwiLCBkZXNjcmlwdGlvbjogXCJ1c2VGb3JtIHByb3ZpZGVzIGEgZWFzeSB3YXkgdG8gY3JlYXRlIGZvcm1zLlwiIH07XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSAoKSA9PiBbXG4gIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcIiB9LFxuICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGU6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFwiIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3Qgc3R5bGVzID0gdXNlQ29udGV4dChTdHlsZXNDb250ZXh0KTtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZSgnbGlnaHQnKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRoZW1lKHNlbGVjdGVkVGhlbWU6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBzZXRUaGVtZShzZWxlY3RlZFRoZW1lKVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgc2VsZWN0ZWRUaGVtZSlcbiAgICB9XG4gIH1cblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgY29uc3QgY3VycmVudFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJylcbiAgICAgIGhhbmRsZVRoZW1lKGN1cnJlbnRUaGVtZSB8fCAnbGlnaHQnKVxuICAgIH1cblxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICAgIHtzdHlsZXN9XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB0aGVtZSwgc2V0VGhlbWU6IGhhbmRsZVRoZW1lIH19PlxuICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgd2l0aEhvbWUgZnJvbSBcIn4vaG9jcy93aXRoSG9tZVwiO1xuaW1wb3J0IElmcmFtZSBmcm9tICdyZWFjdC1pZnJhbWUnXG5cblxuXG5jb25zdCBIZXJvID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6MTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6c3RhcnQ7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuXG5cblxuICBoMXtcbiAgICBmb250LXNpemU6M2VtO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcbiAgfVxuXG4gIHB7XG4gICAgZm9udC1zaXplOjEuNmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJyxzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcbiAgfVxuXG4gIGRpdntcblxuICAgIHBhZGRpbmc6MTVweDtcblxuICAgIC5idG57XG4gICAgICBib3JkZXI6MXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICAgIGNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICAgIGZvbnQtc2l6ZToxLjNlbTtcbiAgICAgIHBhZGRpbmc6MTBweCAzMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czo1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICAgIHRyYW5zaXRpb246ZWFzZSAzMDBtcztcbiAgICAgIG1hcmdpbjo1cHg7XG4gIFxuICAgICAgJjpob3ZlcntcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLmRvY3MtYnRue1xuICAgICAgYm9yZGVyOjFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICBmb250LXdlaWdodDo2MDA7XG4gICAgICBmb250LXNpemU6MS4zZW07XG4gICAgICBwYWRkaW5nOjEwcHggMzBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgICAgdHJhbnNpdGlvbjplYXNlIDMwMG1zO1xuICAgICAgbWFyZ2luOjIwcHg7XG4gIFxuICAgICAgJjpob3ZlcntcbiAgICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6Z3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNDBweCwgMWZyKSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsYXV0byk7IFxuICBjb2x1bW4tZ2FwOiAxMHB4O1xuICByb3ctZ2FwOjEwcHg7XG4gIHdpZHRoOjEwMCU7XG4gIG1heC13aWR0aDoxMjAwcHg7XG4gIG1hcmdpbjowIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gIHBhZGRpbmc6MjBweDtcbiAgXG4gICYgZGl2e1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgICBwYWRkaW5nOjIwcHg7XG4gICAgJiBoMSwgcHtcbiAgICB9XG5cbiAgICAmIGltZ3tcbiAgICAgIHdpZHRoOjIwJTtcbiAgICAgIGhlaWdodDphdXRvO1xuICAgIH1cbiAgfVxuXG5gXG5cbmNvbnN0IENvZGVTYW5kQm94ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6MTAwJTtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAgcGFkZGluZy1ib3R0b206MTAwcHg7XG5cbiAgaDF7XG4gICAgZm9udC1zaXplOjNlbTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgfVxuXG4gIGRpdntcbiAgICB3aWR0aDoxMDQwcHg7XG4gICAgcGFkZGluZzoycHg7XG4gICAgLnNhbmRib3h7XG4gICAgICBib3JkZXI6bm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xuICAgIH1cbiAgfVxuYFxuXG5cbmZ1bmN0aW9uIEluZGV4KCkge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiA+XG4gICAgICA8SGVybz5cbiAgICAgICAgPGgxPlVzZSBGb3JtPC9oMT5cbiAgICAgICAgPHA+VXNlIEZvcm0gcHJvdmlkZXMgeW91IGEgc2ltcGxlIHdheSB0byBjcmVhdGUgZm9ybXMgd2l0aCBSZWFjdDwvcD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJkb2NzLWJ0blwiIHRvPXsnL2RvY3MnfT5SZWFkIGRvY3M8L0xpbms+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnRuXCIgdG89eycvZG9jcy9xdWljay1zdGFydCd9PlF1aWNrIHN0YXJ0PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENvZGVTYW5kQm94PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SWZyYW1lXG4gICAgICAgICAgICAgIHVybD1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvdXNlZm9ybS1mb3JrZWQtb29qdXE/Zm9udHNpemU9MTQmaGlkZW5hdmlnYXRpb249MSZ0aGVtZT1kYXJrXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNjUwcHhcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzYW5kYm94XCJcbiAgICAgICAgICAgICAgaWQ9XCJteUlkXCJcbiAgICAgICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvZGVTYW5kQm94PlxuICAgICAgPC9IZXJvPlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPkVhc3k8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz5MZXNzIGNvZGUuIDwvc3Ryb25nPlxuICAgICAgICAgICAgVXNlRm9ybSBpcyB0aGUgZWFzaWVzdCB3YXkgdG8gY3JlYXRlIGZvcm1zIHdpdGggUmVhY3QuIENyZWF0ZSBhIGZvcm0gYW5kIHVzZSBpdCB3aGVyZXZlciB5b3Ugd2FudCwgZG9uJ3Qgd29ycnkgd2l0aCBSZWFjdCBDb250ZXh0LCBvciBSZWR1eC4gWW91IGNhbiBzaGFyZSB5b3VyIGZvcm0gd2l0aCBvdGhlciBjb21wb25lbnRzIGp1c3QgYnkgdXNpbmcgdGhlIGhvb2sgY3JlYXRlZCBieSBjcmVhdGVGb3JtIGZ1bmN0aW9uLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPkZsZXhpYmxlPC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxzdHJvbmc+Q3JlYXRlIGEgZm9ybSBhbiB1c2UgYXMgb25TdWJtaXQsIG9uQ2hhbmdlIG9yIGRlYm91bmNlZCBtb2RlLiA8L3N0cm9uZz5cbiAgICAgICAgICAgIENyZWF0ZSBwb3dlcmZ1bCBmb3JtcyB3aXRoIFVzZUZvcm0uIFlvdSBjYW4gY3JlYXRlIHlvdXIgb3duIGZvcm0gd2l0aCB5b3VyIG93biBmaWVsZHMsIGFuZCB5b3UgY2FuIHVzZSB5b3VyIG93biB2YWxpZGF0aW9uIHJ1bGVzLiBVc2VGb3JtIGFsbG93cyB5b3UgdG8gY3JlYXRlIGZvcm0sIGFuZCB1c2UgaXQgYXMgYSBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCBmb3JtLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPlBlcmZvcm1hbmNlPC9oMT5cbiAgICAgICAgICA8cD48c3Ryb25nPkp1c3Qgb25lIHJlbmRlci4gPC9zdHJvbmc+XG4gICAgICAgICAgICBUaGVyZSBhcmUgbWFueSBmb3JtIGxpYnJhcmllcywgbW9zdCBvZiB3aGljaCBhcmUgaGVhdnksIGFuZCBhbGxvdyB5b3UgdG8gY3JlYXRlIGp1c3Qgb25lIGtpbmQgb2YgZm9ybSwgYnV0IHdpdGggVXNlRm9ybSB5b3UgY2FuIGZ1bGZpbGwgYW5kIHN1Ym1pdCBhIGZvcm0gd2l0aCBqdXN0IG9uZSByZW5kZXIuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEhvbWUoSW5kZXgpOyIsICJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBkYXJrVGhlbWUsIEdsb2JhbFN0eWxlLCBsaWdodFRoZW1lLCBUaGVtZUNvbnRleHQgfSBmcm9tICd+L3N0eWxlcy5jb250ZXh0J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3RlcidcblxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhcidcblxuY29uc3QgTWFpbiA9IHN0eWxlZC5tYWluYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuYFxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmtnQ29udGVudH07XG4gIG1hcmdpbi10b3A6NjBweDtcbmBcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5mdW5jdGlvbiBIb21lTGF5b3V0KHsgY2hpbGRyZW4gfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8TWFpbj5cbiAgICAgIDxOYXZiYXIgc2V0T3Blbj17KCkgPT4geyB9fSAvPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPENvbnRlbnQ+e2NoaWxkcmVufTwvQ29udGVudD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvTWFpbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoSG9tZShDb21wb25lbnQ6IFJlYWN0LkpTWEVsZW1lbnRDb25zdHJ1Y3Rvcjxhbnk+KSB7XG4gIHJldHVybiBmdW5jdGlvbiBEb2NzQ29tcG9uZW50KHByb3BzOiBhbnkpIHtcbiAgICBjb25zdCB7IHRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dClcbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lID09PSAnbGlnaHQnID8gbGlnaHRUaGVtZSA6IGRhcmtUaGVtZX0+XG4gICAgICAgIDxIb21lTGF5b3V0PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICA8L0hvbWVMYXlvdXQ+XG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIClcbiAgfVxufSIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IENvbnRhaW5lciwgRm9vdGVyQ29udGVudCwgRm9vdGVySW5mb3JtYXRpb24sIEZvb3RlckxvZ28gfSBmcm9tICcuL3N0eWxlcydcbmltcG9ydCB7IExvZ28gfSBmcm9tICcuLi9sb2dvJ1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnfi9jb25maWcnXG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9hc3NldHMvZ3JlZW5fbG9nby5zdmcnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Rm9vdGVyQ29udGVudD5cbiAgICAgICAgPEZvb3RlckxvZ28+XG4gICAgICAgICAgPExvZ28+XG4gICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwibG9nb1wiIGNsYXNzTmFtZT0nbG9nbycgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTIgZm9udC1leHRyYWJvbGQgaGlkZGVuIG1kOmlubGluZVwiPntDb25maWcuc2l0ZU5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvTG9nbz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb290ZXItdGV4dFwiPntDb25maWcuZm9vdGVyVGV4dH08L3NwYW4+XG4gICAgICAgIDwvRm9vdGVyTG9nbz5cbiAgICAgICAgPEZvb3RlckluZm9ybWF0aW9uPlxuICAgICAgICAgIDxoMT5Eb2NzPC9oMT5cbiAgICAgICAgICA8TGluayB0bz17YCR7Q29uZmlnLnBhdGh9ZG9jcy9xdWljay1zdGFydGB9PlF1aWNrIHN0YXJ0PC9MaW5rPlxuICAgICAgICAgIDxMaW5rIHRvPXtgJHtDb25maWcucGF0aH1kb2NzYH0+RG9jczwvTGluaz5cbiAgICAgICAgPC9Gb290ZXJJbmZvcm1hdGlvbj5cbiAgICAgICAgPEZvb3RlckluZm9ybWF0aW9uPlxuICAgICAgICAgIDxoMT5Db21tdW5pdHk8L2gxPlxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e0NvbmZpZy5yZXBvc2l0b3J5fT5HaXRodWI8L2E+XG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YCR7Q29uZmlnLnJlcG9zaXRvcnl9L2lzc3Vlc2B9PlJlcXVlc3QgYSBmZWF0dXJlPC9hPlxuICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2Ake0NvbmZpZy5yZXBvc2l0b3J5fS9pc3N1ZXNgfT5SZXBvcnQgYSBidWc8L2E+XG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YCR7Q29uZmlnLnJlcG9zaXRvcnl9YH0+TGVhdmUgdXMgYSBzdGFydDwvYT5cbiAgICAgICAgPC9Gb290ZXJJbmZvcm1hdGlvbj5cbiAgICAgIDwvRm9vdGVyQ29udGVudD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufSIsICJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmZvb3RlcmBcbiAgYmFja2dyb3VuZDogJHsoe3RoZW1lfSk9PiB0aGVtZS5jb2xvcnMuZGFya307XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHdpZHRoOjEwMCU7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlckNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuZGlzcGxheTpncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI0MHB4LCAxZnIpKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMyxhdXRvKTsgXG4gIGNvbHVtbi1nYXA6IDEwcHg7XG4gIHJvdy1nYXA6MTBweDtcbiAgd2lkdGg6MTAwJTtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICBwYWRkaW5nOjIwcHggMTBweDtcbiAgbWF4LXdpZHRoOjE0NDBweDtcbiAgYXtcbiAgICBjb2xvcjokeyh7dGhlbWV9KT0+IHRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICY6aG92ZXJ7XG4gICAgICBjb2xvcjokeyh7dGhlbWV9KT0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5SG92ZXJ9O1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgRm9vdGVySW5mb3JtYXRpb24gPSBzdHlsZWQuZGl2YFxuICBjb2xvcjokeyh7dGhlbWV9KT0+IHRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xuICB3aWR0aDoxMDAlO1xuICBtYXJnaW4tdG9wOjEwcHg7XG4gIHBhZGRpbmc6MCAxNXB4O1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlckxvZ28gPSBzdHlsZWQuZGl2YFxuICB3aWR0aDoxMDAlO1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpzdGFydDtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gIHBhZGRpbmc6MTVweCAxMHB4O1xuXG4gIC5mb290ZXItdGV4dHtcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICBjb2xvcjokeyh7dGhlbWV9KT0+IHRoZW1lLmNvbG9ycy50ZXh0Q29sb3J9O1xuICB9XG5gIiwgImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcbiAgIGRpc3BsYXk6ZmxleDtcbiAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICYgaW1ne1xuICAgICAgd2lkdGg6NTBweDtcbiAgICAgIGhlaWdodDo1MHB4O1xuICAgfVxuXG4gICAmIHNwYW57XG4gICAgICBmb250LXNpemU6MjNweDtcbiAgICAgIGNvbG9yOiR7KHt0aGVtZX0pPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgfVxuYDsiLCAiZXhwb3J0IGNvbnN0IENvbmZpZz0ge1xuICByZXBvc2l0b3J5OiAnaHR0cHM6Ly9naXRodWIuY29tL3VzZUZvcm0vdXNlRm9ybScsXG4gIGRvY3NSZXBvc2l0b3J5OiAnaHR0cHM6Ly9naXRodWIuY29tL3VzZUZvcm0vZG9jcycsXG4gIHR3aXR0ZXI6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9qdWNpYW5vX2JhcmJvc2FcIixcbiAgYnJhbmNoOiAnbWFpbicsXG4gIHNpdGVOYW1lOiAnVXNlIEZvcm0nLFxuICBzaXRlU2xvZ2FuOiAnVXNlIEZvcm0gcHJvdmlkZXMgYSB3YXkgdG8gY3JlYXRlIGNvbXBsZXggZm9ybXMgZWFzaWx5LicsXG4gIHBhdGg6ICcvJyxcbiAgdGl0bGVTdWZmaXg6ICcgXHUyMDEzIHVzZUZvcm0nLFxuICBuZXh0TGlua3M6IHRydWUsXG4gIHByZXZMaW5rczogdHJ1ZSxcbiAgbmF2TGlua3M6IFt7XG4gICAgbGFiZWw6ICdEb2NzJyxcbiAgICBwYXRoOiAnL2RvY3MnLFxuICB9XG4gIF0sXG4gIGRlZmF1bHRNZW51Q29sbGFwc2VkOiBmYWxzZSxcbiAgZm9udDogdHJ1ZSxcbiAgZm9vdGVyOiB0cnVlLFxuICBmb290ZXJUZXh0OiAnTUlUIDIwMjIgXHUwMEE5IFVzZSBGb3JtLicsXG4gIGZvb3RlckVkaXRPbkdpdEh1Ykxpbms6IHRydWUsXG59XG4iLCAiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IElvTG9nb0dpdGh1YiwgSW9Mb2dvVHdpdHRlciwgSW9NZE1vb24sIElvSW9zU3VubnkgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcbmltcG9ydCB7IFRpVGhNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL3RpXCI7XG5pbXBvcnQgeyBDb250YWluZXIsIEFjdGlvbkJ1dHRvbnMsIEJ1dHRvbiwgTWVudUJ1dHRvbiwgV3JhcHBlciwgTGlua3MsIEJ1dHRvbkxpbmsgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uL2Fzc2V0cy9ncmVlbl9sb2dvLnN2Zyc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICd+L2NvbmZpZyc7XG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tICd+L3N0eWxlcy5jb250ZXh0JztcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVtaXgnO1xuaW1wb3J0IHsgTG9nbyB9IGZyb20gJy4uL2xvZ28nO1xuXG50eXBlIFByb3BzID0ge1xuICBzZXRPcGVuOiAob3BlbjogYm9vbGVhbikgPT4gdm9pZFxufVxuXG5mdW5jdGlvbiBOYXZiYXIoeyBzZXRPcGVuIH06IFByb3BzKSB7XG5cbiAgY29uc3QgeyBzZXRUaGVtZSwgdGhlbWUgfSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG5cbiAgZnVuY3Rpb24gaGFuZGxlVGhlbWUoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRUaGVtZSA9IHRoZW1lID09PSAnbGlnaHQnID8gJ2RhcmsnIDogJ2xpZ2h0J1xuICAgIHNldFRoZW1lKHNlbGVjdGVkVGhlbWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YSBocmVmPXtDb25maWcucGF0aH0+XG4gICAgICAgICAgICA8TG9nbz5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD1cImxvZ29cIiBjbGFzc05hbWU9J2xvZ28nIC8+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTIgZm9udC1leHRyYWJvbGQgaGlkZGVuIG1kOmlubGluZVwiPntDb25maWcuc2l0ZU5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPC9Mb2dvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBY3Rpb25CdXR0b25zPlxuICAgICAgICAgIDxCdXR0b25MaW5rIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e0NvbmZpZy50d2l0dGVyfT5cbiAgICAgICAgICAgIDxJb0xvZ29Ud2l0dGVyIC8+XG4gICAgICAgICAgPC9CdXR0b25MaW5rPlxuICAgICAgICAgIDxCdXR0b25MaW5rIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e0NvbmZpZy5yZXBvc2l0b3J5fT5cbiAgICAgICAgICAgIDxJb0xvZ29HaXRodWIgLz5cbiAgICAgICAgICA8L0J1dHRvbkxpbms+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVUaGVtZX0+XG4gICAgICAgICAgICB7dGhlbWUgPT09ICdsaWdodCcgPyA8SW9NZE1vb24gLz4gOiA8SW9Jb3NTdW5ueSAvPn1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRobmFtZSAhPT0gQ29uZmlnLnBhdGggJiYgKFxuICAgICAgICAgICAgICA8TWVudUJ1dHRvbiBvbkNsaWNrPXtzZXRPcGVufT5cbiAgICAgICAgICAgICAgICA8VGlUaE1lbnUgLz5cbiAgICAgICAgICAgICAgPC9NZW51QnV0dG9uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgPC9BY3Rpb25CdXR0b25zPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9XcmFwcGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwgImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLm5hdmBcbiAgIGRpc3BsYXk6ZmxleDtcbiAgIHdpZHRoOjEwMCU7XG4gICBoZWlnaHQ6YXV0bztcbiAgIG92ZXJmbG93OmhpZGRlbjtcbiAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ib3JkZXJ9O1xuICAgcG9zaXRpb246Zml4ZWQ7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgIHotaW5kZXg6MTtcbiAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICAgZGlzcGxheTpmbGV4O1xuICAgd2lkdGg6MTAwJTtcbiAgIGhlaWdodDo2MHB4O1xuICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICBwYWRkaW5nOjVweCAwcHggNXB4IDIwcHg7XG4gICBtYXgtd2lkdGg6MTQ0MHB4O1xuICAgJiBkaXZ7XG4gICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQWN0aW9uQnV0dG9ucyA9IHN0eWxlZC5kaXZgXG4gICBkaXNwbGF5OmZsZXg7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xuICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgbWFyZ2luOjAgMTBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICBib3JkZXI6bm9uZTtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbiAgIHdpZHRoOjQwcHg7XG4gICBoZWlnaHQ6NDBweDtcbiAgIG91dGxpbmU6bm9uZTtcbiAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICBkaXNwbGF5OmZsZXg7XG4gICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuXG4gICAmIHN2Z3tcbiAgICAgIGZpbGw6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgICB3aWR0aDoyMXB4O1xuICAgICAgaGVpZ2h0OjIxcHg7XG4gICB9XG5cbiAgICY6aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmJvcmRlcn07XG4gICB9XG5cbiAgICYgKyBidXR0b257XG4gICAgICBtYXJnaW46NXB4O1xuICAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkxpbmsgPSBzdHlsZWQuYWBcbiAgIGJvcmRlci1yYWRpdXM6NTAlO1xuICAgYm9yZGVyOm5vbmU7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gICB3aWR0aDo0MHB4O1xuICAgaGVpZ2h0OjQwcHg7XG4gICBvdXRsaW5lOm5vbmU7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgZGlzcGxheTpmbGV4O1xuICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcblxuICAgJiBzdmd7XG4gICAgICBmaWxsOiR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgICAgd2lkdGg6MjFweDtcbiAgICAgIGhlaWdodDoyMXB4O1xuICAgfVxuXG4gICAmOmhvdmVye1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ib3JkZXJ9O1xuICAgfVxuXG4gICAmICsgYnV0dG9ue1xuICAgICAgbWFyZ2luOjVweDtcbiAgIH1cbmBcblxuZXhwb3J0IGNvbnN0IE1lbnVCdXR0b24gPSBzdHlsZWQoQnV0dG9uKTx7b25DbGljazphbnl9PmBcbiAgIGJvcmRlcjoxcHggc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYm9yZGVyfTtcblxuICAgQG1lZGlhIChtaW4td2lkdGg6OTg5cHgpe1xuICAgICAgZGlzcGxheTpub25lO1xuICAgfVxuYFxuXG5leHBvcnQgY29uc3QgTGlua3MgPSBzdHlsZWQuZGl2YFxuICAgZGlzcGxheTpmbGV4O1xuICAganVzdGlmeS1jb250ZW50OnN0YXJ0O1xuICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgd2lkdGg6Zml0LWNvbnRlbnQ7XG4gICBwYWRkaW5nLWxlZnQ6NDBweDtcblxuICAgYXtcbiAgICAgIHBhZGRpbmc6MCAyMHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICBmb250LXdlaWdodDo2MDA7XG5cbiAgICAgICY6aG92ZXJ7XG4gICAgICAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICAgIH1cbiAgIH1cblxuICAgQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpe1xuICAgICAgZGlzcGxheTpub25lO1xuICAgfVxuYFxuXG5leHBvcnQgY29uc3QgTW9iaWxlTGluayA9IHN0eWxlZC5kaXY8e2lzT3Blbjpib29sZWFufT5gXG4gICBkaXNwbGF5OmZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gICB3aWR0aDoxMDAlO1xuICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xuICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgYmFja2dyb3VuZC1jb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgIGhlaWdodDokeyh7IGlzT3BlbiB9KSA9PiBpc09wZW4gPyA2MCA6IDEwfXB4O1xuXG4gICBAbWVkaWEgKG1pbi13aWR0aDo2MDBweCl7XG4gICAgICBkaXNwbGF5Om5vbmU7XG4gICB9XG5cbiAgIGRpdntcbiAgICAgIGRpc3BsYXk6JHsoeyBpc09wZW4gfSkgPT4gaXNPcGVuID8gJ2ZsZXgnIDogJ25vbmUnfTtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3RhcnQ7XG4gICAgICBwYWRkaW5nOiAwIDIwcHggMCAyMnB4O1xuXG4gICAgICBhe1xuICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG4gICAgICAgICBmb250LXdlaWdodDo2MDA7XG4gICAgICAgICBcbiAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH1cblxuICAgYnV0dG9ue1xuICAgICAgYm90dG9tOjA7XG4gICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6bm9uZTtcbiAgIH1cbmAiLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgd2l0aERvY3MgZnJvbSBcIn4vaG9jcy93aXRoRG9jc1wiO1xuXG5mdW5jdGlvbiBEb2NzKCkge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aERvY3MoRG9jcyk7IiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXG5pbXBvcnQgQ29udGVudEZvb3RlciBmcm9tIFwifi9jb21wb25lbnRzL2NvbnRlbnRGb290ZXJcIlxuaW1wb3J0IEZvb3RlciBmcm9tIFwifi9jb21wb25lbnRzL2Zvb3RlclwiXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJ+L2NvbXBvbmVudHMvbmF2YmFyXCJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCJ+L2NvbXBvbmVudHMvc2lkZWJhclwiXG5pbXBvcnQgeyBkYXJrVGhlbWUsIEdsb2JhbFN0eWxlLCBsaWdodFRoZW1lLCBUaGVtZUNvbnRleHQgfSBmcm9tIFwifi9zdHlsZXMuY29udGV4dFwiXG5cblxuY29uc3QgTWFpbiA9IHN0eWxlZC5tYWluYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGltZ3tcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4xODhyZW0gMC4zNzVyZW0gcmdiYSgwLDAsMCwwLjE2KSwgMCAwLjE4OHJlbSAwLjM3NXJlbSByZ2JhKDAsMCwwLDAuMjMpO1xuICAgICAgd2lkdGg6MTAwJTtcbiAgIH1cbmBcblxuY29uc3QgTWFpbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1heC13aWR0aDoxNDQwcHg7XG4gIHdpZHRoOjEwMCU7XG5gXG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuYFxuXG5jb25zdCBNYWluQ29udGVudCA9IHN0eWxlZC5kaXY8eyBvcGVuOiBib29sZWFuIH0+YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogJHsoeyBvcGVuIH0pID0+ICghb3BlbiA/ICcxMDAlJyA6ICdjYWxjKDEwMCUgLSAyNjBweCknKX07XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgbGVmdDogJHsoeyBvcGVuIH0pID0+IChvcGVuID8gJzI2MHB4JyA6ICcwJyl9O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbmBcblxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNDBweDtcbiAgbWFyZ2luLXRvcDo0MHB4O1xuICBtYXgtd2lkdGg6IDEwNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuYmtnQ29udGVudH07XG5gXG5cbmZ1bmN0aW9uIERvY3NMYXlvdXQoeyBjaGlsZHJlbiB9OiBhbnkpIHtcbiAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKHRydWUpXG4gICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG5cbiAgIGNvbnN0IHJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3c/LmlubmVyV2lkdGggPiA5ODkpIHtcbiAgICAgICAgIHNldE9wZW4odHJ1ZSlcbiAgICAgIH0gZWxzZSBpZiAod2luZG93Py5pbm5lcldpZHRoIDw9IDk4OSkge1xuICAgICAgICAgc2V0T3BlbihmYWxzZSlcbiAgICAgIH1cbiAgIH1cblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemUpXG4gICAgICByZXNpemUoKVxuICAgfSwgW10pXG5cbiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICByZXNpemUoKVxuICAgfSwgW3BhdGhuYW1lXSlcblxuXG4gICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgIDxOYXZiYXIgc2V0T3Blbj17KCkgPT4gc2V0T3Blbighb3Blbil9IC8+XG4gICAgICAgICA8TWFpbj5cbiAgICAgICAgICAgIDxNYWluQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxTaWRlYmFyIG9wZW49e29wZW59IC8+XG4gICAgICAgICAgICAgICAgICA8TWFpbkNvbnRlbnQgb3Blbj17b3Blbn0+XG4gICAgICAgICAgICAgICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb250ZW50Rm9vdGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICA8L01haW5Db250ZW50PlxuICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L01haW5Db250YWluZXI+XG4gICAgICAgICA8L01haW4+XG4gICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8Lz5cbiAgIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoRG9jcyhDb21wb25lbnQ6IFJlYWN0LkpTWEVsZW1lbnRDb25zdHJ1Y3Rvcjxhbnk+KSB7XG4gICByZXR1cm4gZnVuY3Rpb24gRG9jc0NvbXBvbmVudChwcm9wczogYW55KSB7XG4gICAgICBjb25zdCB7IHRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dClcbiAgICAgIHJldHVybiAoXG4gICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWUgPT09ICdsaWdodCcgPyBsaWdodFRoZW1lIDogZGFya1RoZW1lfT5cbiAgICAgICAgICAgIDxEb2NzTGF5b3V0PlxuICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICA8L0RvY3NMYXlvdXQ+XG4gICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgIClcbiAgIH1cbn0iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHsgTWRFZGl0IH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICd+L2NvbmZpZyc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlbWl4JztcbmNvbnN0IGZpeFBhdGggPSAocGF0aDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHBhdGhXaXRoRnJvbnRTbGFzaCA9IHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA6IGAvJHtwYXRofWBcbiAgY29uc3QgcGF0aFdpdGhCYWNrU2xhc2ggPSBwYXRoV2l0aEZyb250U2xhc2guZW5kc1dpdGgoJy8nKVxuICAgID8gcGF0aFdpdGhGcm9udFNsYXNoXG4gICAgOiBgJHtwYXRoV2l0aEZyb250U2xhc2h9L2BcblxuICByZXR1cm4gcGF0aFdpdGhCYWNrU2xhc2hcbn1cblxuY29uc3QgY3JlYXRlRWRpdFVybCA9IChyZXBvc2l0b3J5OiBzdHJpbmcsIGJyYW5jaDogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIGZpbGVwYXRoV2l0aE5hbWU6IHN0cmluZykgPT4ge1xuICBjb25zdCBub3JtYWxpemVkUGF0aCA9IGZpeFBhdGgocGF0aClcbiAgcmV0dXJuIGAke3JlcG9zaXRvcnl9L3RyZWUvJHticmFuY2h9JHtub3JtYWxpemVkUGF0aH1zcmMvcGFnZXMke2ZpbGVwYXRoV2l0aE5hbWV9Lm1keGBcbn1cblxuY29uc3QgRWRpdE9uR2l0aHViTGluayA9ICh7XG4gIHJlcG9zaXRvcnksXG4gIGJyYW5jaCxcbiAgcGF0aCxcbiAgZmlsZXBhdGhXaXRoTmFtZVxufTogYW55KSA9PiB7XG4gIGNvbnN0IGhyZWYgPSBjcmVhdGVFZGl0VXJsKHJlcG9zaXRvcnksIGJyYW5jaCwgcGF0aCwgZmlsZXBhdGhXaXRoTmFtZSlcbiAgcmV0dXJuIChcbiAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXNtXCIgaHJlZj17aHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCI+PE1kRWRpdCBzaXplPVwiMS4ycmVtXCIgLz4mbmJzcDtFZGl0IHRoaXMgcGFnZSBvbiBHaXRIdWI8L2E+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGVudEZvb3RlcigpIHtcblxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG5cbiAgcmV0dXJuIChcbiAgICA8Uy5XcmFwcGVyPlxuICAgICAgPEVkaXRPbkdpdGh1YkxpbmtcbiAgICAgICAgcmVwb3NpdG9yeT17Q29uZmlnLmRvY3NSZXBvc2l0b3J5IHx8IENvbmZpZy5yZXBvc2l0b3J5fVxuICAgICAgICBicmFuY2g9e0NvbmZpZy5icmFuY2h9XG4gICAgICAgIHBhdGg9e0NvbmZpZy5wYXRofVxuICAgICAgICBmaWxlcGF0aFdpdGhOYW1lPXtwYXRobmFtZX1cbiAgICAgIC8+XG4gICAgPC9TLldyYXBwZXI+XG4gIClcbn0iLCAiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgZGlzcGxheTpmbGV4O1xuICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gICBwYWRkaW5nIDogNTBweCAwO1xuXG4gICBhe1xuICAgICAgY29sb3I6JHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgZm9udC13ZWlnaHQ6NjAwO1xuICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICY6aG92ZXJ7XG4gICAgICAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICAgIH1cbiAgIH1cbmAiLCAiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEdvQ2hldnJvblJpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2dvXCI7XG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7IEFzaWRlLCBJdGVtLCBJdGVtcywgU3ViSXRlbXMsIFN1Ykl0ZW0gfSBmcm9tICcuL3N0eWxlcyc7XG5cbmNvbnN0IGxpbmtzID0gW1xuICB7XG4gICAgbGFiZWw6ICdJbnRyb2R1Y3Rpb24nLFxuICAgIGxpbms6ICcnLFxuICAgIHN1Ykl0ZW1zOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnUmVhZG1lJyxcbiAgICAgICAgbGluazogJy9kb2NzLycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1F1aWNrIFN0YXJ0JyxcbiAgICAgICAgbGluazogJy9kb2NzL3F1aWNrLXN0YXJ0J1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnSG93IGl0IHdvcmtzJyxcbiAgICBsaW5rOiAnJyxcbiAgICBzdWJJdGVtczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ1RoZSBjb25jZXB0JyxcbiAgICAgICAgbGluazogJy9kb2NzL2NvbmNlcHQnXG4gICAgICB9LFxuICAgIF1cbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnQ3JlYXRpbmcgYSBmb3JtJyxcbiAgICBsaW5rOiAnJyxcbiAgICBzdWJJdGVtczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ05hdGl2ZSBlbGVtZW50cycsXG4gICAgICAgIGxpbms6ICcvZG9jcy9uYXRpdmUtZWxlbWVudHMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ0N1c3RvbSBjb21wb25lbnRzJyxcbiAgICAgICAgbGluazogJy9kb2NzL2N1c3RvbS1jb21wb25lbnRzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdGb3JtIHZhbGlkYXRpb24nLFxuICAgICAgICBsaW5rOiAnL2RvY3MvZm9ybS12YWxpZGF0aW9uJ1xuICAgICAgfVxuICAgIF1cbiAgfSxcbiAge1xuICAgIGxhYmVsOiAnVXNpbmcgeW91ciBGb3JtJyxcbiAgICBsaW5rOiAnJyxcbiAgICBzdWJJdGVtczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0FzIG9uQ2hhbmdlIGZvcm0nLFxuICAgICAgICBsaW5rOiAnL2RvY3Mvb25jaGFuZ2UtZm9ybSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnQXMgZGVib3VuY2VkIGZvcm0nLFxuICAgICAgICBsaW5rOiAnL2RvY3MvZGVib3VuY2VkLWZvcm0nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ0FzIG9uU3VibWl0IGZvcm0nLFxuICAgICAgICBsaW5rOiAnL2RvY3Mvb25zdWJtaXQtZm9ybSdcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuXVxuXG5cblxuZnVuY3Rpb24gQWN0aXZlTGluayh7IGhyZWYsIGNoaWxkcmVuIH06IGFueSkge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxuXG4gIGNvbnN0IGlzQWN0aXZlID0gdXNlTWVtbygoKSA9PiBwYXRobmFtZSA9PT0gaHJlZiwgW3BhdGhuYW1lLCBocmVmXSlcblxuICByZXR1cm4gKFxuICAgIDxTdWJJdGVtIGNsYXNzTmFtZT17aXNBY3RpdmUgPyBcImFjdGl2ZVwiIDogJyd9PlxuICAgICAgPEdvQ2hldnJvblJpZ2h0IGNvbG9yPXtpc0FjdGl2ZSA/IHRoZW1lLmNvbG9ycy5wcmltYXJ5IDogJ3RyYW5zcGFyZW50J30gLz5cbiAgICAgIDxMaW5rIHRvPXtocmVmfSBjbGFzc05hbWU9e2lzQWN0aXZlID8gXCJhY3RpdmVcIiA6ICcnfT57Y2hpbGRyZW59PC9MaW5rPlxuICAgIDwvU3ViSXRlbT5cbiAgKVxufVxuXG5cbmZ1bmN0aW9uIFNpZGViYXIoeyBvcGVuLCAuLi5yZXN0IH06IGFueSkge1xuXG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoJycpXG5cblxuICByZXR1cm4gKFxuICAgIDxBc2lkZSBvcGVuPXtvcGVufT5cbiAgICAgIDxJdGVtcz5cbiAgICAgICAge1xuICAgICAgICAgIGxpbmtzLm1hcChsaW5rID0+IChcbiAgICAgICAgICAgIDxJdGVtIGtleT17bGluay5sYWJlbH0+XG4gICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldEV4cGFuZGVkKCcnKX0+XG4gICAgICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGV4cGFuZGVkID09PSAnJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDxTdWJJdGVtcz5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBsaW5rLnN1Ykl0ZW1zPy5tYXAoc3ViSXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxBY3RpdmVMaW5rIGtleT17c3ViSXRlbS5sYWJlbH0gaHJlZj17c3ViSXRlbS5saW5rfT57c3ViSXRlbS5sYWJlbH08L0FjdGl2ZUxpbms+XG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9TdWJJdGVtcz5cbiAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L0l0ZW1zPlxuICAgIDwvQXNpZGU+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7IiwgImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBBc2lkZSA9IHN0eWxlZC5hc2lkZTx7b3Blbjpib29sZWFufT5gXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ib3JkZXJ9O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAyMHB4IDEwcHggMTBweCA1cHg7XG4gIG1hcmdpbi10b3A6NTBweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgb3ZlcmZsb3c6YXV0bztcbiAgdG9wOjYwcHg7XG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIG1hcmdpbi1sZWZ0OiAkeyh7IG9wZW4gfSkgPT4gKG9wZW4gPyAwIDogJy0yNjBweCcpfTtcbiAgd2lkdGg6IDI2MHB4O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcblxuICB1bHtcbiAgICBwYWRkaW5nLWxlZnQ6MHB4O1xuICB9XG4gIGxpe1xuICAgIG1hcmdpbjoxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICB9XG5gXG5cbmV4cG9ydCBjb25zdCBJdGVtcyA9IHN0eWxlZC51bGBcblxuYFxuXG5leHBvcnQgY29uc3QgSXRlbSA9IHN0eWxlZC5saWBcbiAgbGlzdC1zdHlsZTpub25lO1xuICBjdXJzb3I6cG9pbnRlcjtcbiAgJiBzcGFue1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBmb250LXNpemU6MS4yZW07XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IFN1Ykl0ZW1zID0gc3R5bGVkLnVsYFxuXG5gXG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3IgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnRleHRDb2xvcn07XG4gIG1hcmdpbjogM3B4O1xuYFxuXG5leHBvcnQgY29uc3QgU3ViSXRlbSA9IHN0eWxlZC5saWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcblxuICAmOmhvdmVye1xuICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgfVxuXG4gICYgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMudGV4dENvbG9yfTtcbiAgfVxuICAgXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5ib3JkZXJ9O1xuICAgIGEge1xuICAgICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIH1cbiAgICAke0luZGljYXRvcn0ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgfVxuICB9XG4gICBcbiAgJjpob3ZlciB7XG4gICAgJHtJbmRpY2F0b3J9IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIH1cbiAgICBhIHtcbiAgICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICB9XG4gIH1cblxuYFxuIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IHtcbiAgICBcInRpdGxlXCI6IFwiQ3VzdG9tIGNvbXBvbmVudHNcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTGVhcm4gaG93IHRvIHVzZSB1c2VGb3JtIHRvIHdvcmsgd2l0aCBjdXN0b20gY29tcG9uZW50cy5cIlxuICB9XG59O1xuaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZW1vJztcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb2RlYmxvY2snO1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIixcbiAgICBoMzogXCJoM1wiLFxuICAgIHA6IFwicFwiLFxuICAgIHVsOiBcInVsXCIsXG4gICAgbGk6IFwibGlcIixcbiAgICBoMjogXCJoMlwiLFxuICAgIGNvZGU6IFwiY29kZVwiLFxuICAgIGJsb2NrcXVvdGU6IFwiYmxvY2txdW90ZVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLmgxPntcIkN1c3RvbSBjb21wb25lbnRzXCJ9PC9fY29tcG9uZW50cy5oMT57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiV2hhdCBhcmUgY3VzdG9tIGNvbXBvbmVudHM/XCJ9PC9fY29tcG9uZW50cy5oMz57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJVc3VhbGx5LCBjdXN0b20gY29tcG9uZW50cyBhcmUgdXNlZCB0byBjcmVhdGUgYSBiZXR0ZXIgdXNlciBleHBlcmllbmNlLCBmb3IgZXhhbXBsZSB3aGVuIHlvdSB3YW50IHRvIHByb3ZpZGUgYSB3YXkgdG8gdXNlciBzZWxlY3QgYSBjb2xsZWN0aW9uIG9mIGl0ZW1zIG9yIGNvbGxlY3QgYSByYW5nZSBvZiBkYXRlcyBvciB0aW1lcywgeW91IGNhbiByZWFjaCB0aGUgc2FtZSByZXN1bHQgdXNpbmcgbmF0aXZlIGVsZW1lbnRzLCBidXQgd2l0aCBjdXN0b20gY29tcG9uZW50cywgeW91IGNhbiBkbyBpdCBpbiBhIG1vcmUgdXNlci1mcmllbmRseSB3YXkuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkRpZmZlcmVudCBmcm9tIG5hdGl2ZSBlbGVtZW50cywgY3VzdG9tIGNvbXBvbmVudHMgaGF2ZSBhbiBpbnRlcm5hbCBzdGF0ZSBjb250cm9sbGVkIGJ5IHN0YXRlIG1hbmFnZW1lbnQsIHdoaWNoIG1lYW5zIHRoYXQgdGhleSB3aWxsIGJlIHVwZGF0ZWQgd2hlbiB0aGUgdmFsdWUgY2hhbmdlcywgaG93ZXZlciwgbmF0aXZlIGVsZW1lbnRzIGFyZSBub3QsIGJlY2F1c2UgeW91IGNhbiB1c2UgYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnQgdG8gdXBkYXRlIGl0cyB2YWx1ZS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIkxldCdzIHNlZSBzb21lIGV4YW1wbGVzIG9mIGN1c3RvbSBjb21wb25lbnRzLlwifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJEYXRlcGlrZXJzIC0gYXJlIGEgY29tcG9uZW50IHRoYXQgYWxsb3dzIHlvdSB0byBzZWxlY3QgYSBkYXRlLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlRpbWVwaWtlcnMgLSBhcmUgYSBjb21wb25lbnQgdGhhdCBhbGxvd3MgeW91IHRvIHNlbGVjdCBhIHRpbWUuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiU2xpZGVycyAtIGFyZSBhIGNvbXBvbmVudCB0aGF0IGFsbG93cyB5b3UgdG8gc2VsZWN0IGEgcmFuZ2Ugb2YgdmFsdWVzLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlNlbGVjdHMsIG11bHRpLXNlbGVjdHMgY29tcG9uZW50cyAtIGFyZSBhIGNvbXBvbmVudCB0aGF0IGFsbG93cyB5b3UgdG8gc2VsZWN0IHNpbmdsZSBvciBtdWx0aXBsZSB2YWx1ZXMuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiRHJhZyBhbmQgZHJvcCBjb21wb25lbnRzIC0gYXJlIGEgY29tcG9uZW50IHRoYXQgYWxsb3dzIHlvdSB0byBkcmFnIGFuZCBkcm9wIGl0ZW1zLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiSG93IHRvIHVzZSBjdXN0b20gY29tcG9uZW50cyB3aXRoIHVzZUZvcm1cIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRvIHVzZSBjdXN0b20gY29tcG9uZW50cyB3aXRoIHVzZUZvcm0sIHlvdSBuZWVkIHRvIHVzZSB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPFdyYXBwZXI+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBjb21wb25lbnQgYW5kIHBhc3MgdGhlIGNvbXBvbmVudCBhcyBhIHByb3AuIEFub3RoZXIgaW1wb3J0YW50IHRoaW5nIGlzIHRoYXQgdGhlIGN1c3RvbSBjb21wb25lbnQgc2hvdWxkIGhhdmUgdGhvc2UgcHJvcHM6IFwifTxfY29tcG9uZW50cy5jb2RlPntcInZhbHVlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wib25DaGFuZ2VcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJvbkJsdXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLiBUaGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widmFsdWVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHByb3AgaXMgdGhlIHZhbHVlIG9mIHRoZSBjb21wb25lbnQsIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJvbkNoYW5nZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgcHJvcCBpcyB0aGUgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzIGFuZCB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wib25CbHVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBwcm9wIGlzIHRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBsb3NlcyBmb2N1cy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIldoeSBkbyB3ZSBuZWVkIHRvIHVzZSB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPFdyYXBwZXI+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBjb21wb25lbnQ/XCJ9PC9fY29tcG9uZW50cy5oMz57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wicmVnaXN0ZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZ1bmN0aW9uIGlzIHRoZSBvbmx5IHdheSB0byBjb25uZWN0IGEgZmllbGQgdG8gdGhlIGZvcm0sIGFuZCB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wicmVnaXN0ZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZ1bmN0aW9uIHJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIGNvbXBvbmVudCwgdGhlbiB3ZSBuZWVkIHRvIHVzZSB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPFdyYXBwZXI+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBjb21wb25lbnQgdG8gZ2V0IHRoZSByZWZlcmVuY2UuXFxuVXN1YWxseSwgY3VzdG9tIGNvbXBvbmVudHMgZG9uJ3Qgd29yayB3aXRoIHJlZmVyZW5jZSwgaW4gY29uc2VxdWVuY2UsIHdlIG5lZWQgdG8gdXNlIGEgd3JhcHBlciB0byBjb25uZWN0IHRoZSBjdXN0b20gY29tcG9uZW50IHdpdGggYSByZWZlcmVuY2UgYW5kIGZpbmFsbHkgY29ubmVjdCB0byB0aGUgZm9ybS4gQW5kIHRoZW4geW91IGNhbiB1c2UgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInJlZ2lzdGVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmdW5jdGlvbiB0byByZWdpc3RlciB0aGUgY3VzdG9tIGNvbXBvbmVudC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PGJyIC8+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJUaGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPFdyYXBwZXI+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBjb21wb25lbnQgaXMgYSB3cmFwcGVyIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHdyYXAgdGhlIGN1c3RvbSBjb21wb25lbnQsIGl0IHdpbGwgYmUgdXNlZCB0byBhZGQgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcIm9uQ2hhbmdlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wib25CbHVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBwcm9wcyB0byB0aGUgbmF0aXZlIGV2ZW50IGhhbmRsZXJzLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8V3JhcHBlcj5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGNvbXBvbmVudCBpcyBhbHNvIHVzZWQgdG8gYWRkIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ2YWx1ZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgcHJvcCB0byB0aGUgY3VzdG9tIGNvbXBvbmVudC5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkhvdyB0byB1c2UgY3VzdG9tIGNvbXBvbmVudHMgd2l0aCB1c2VGaWVsZFwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiV2hlbiB3ZSBhcmUgY3JlYXRpbmcgdGhlIGZvcm0gZG9lc24ndCBtYXR0ZXIgaWYgd2UgYXJlIHVzaW5nIG5hdGl2ZSBIVE1MIGVsZW1lbnRzIG9yIG5vdCwgaXQncyBqdXN0IGEgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGEgc3RvcmUgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0byBtYW5hZ2UgdGhlIGZvcm0uIFNvIHdlIGRvbid0IG5lZWQgdG8gd29ycnkgYWJvdXQgaXQgZm9yIG5vdy4gV2UganVzdCBuZWVkIHRvIGNyZWF0ZSB0aGUgZm9ybSBzdG9yZSwgYWxzbyB3ZSBjYW4gcHJvdmlkZSB0aGUgaW5pdGlhbCB2YWx1ZXMsIGluaXRpYWwgZXJyb3JzLCBpbml0aWFsIHRvdWNoZWQsIGFuZCB0aGUgdmFsaWRhdGlvbiBzY2hlbWEsIGJ1dCBmb3Igbm93LCB3ZSB3aWxsIGp1c3QgcHJvdmlkZSB0aGUgaW5pdGlhbCB2YWx1ZXMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqYXZhc2NyaXB0XCI+e2BpbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnQHVzZS1mb3JtL2NvcmUnXG5cbmNvbnN0IHVzZVVzZXJGb3JtID0gY3JlYXRlRm9ybSh7XG4gIGluaXRpYWxWYWx1ZXM6IHtcbiAgICBuYW1lczogW11cbiAgfSxcbiB9KVxuYH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJTbywgbm93IHdlIGFyZSBnb2luZyB0byBjcmVhdGUgdGhlIGZvcm0gY29tcG9uZW50IHRoYXQgd2lsbCBiZSB1c2VkIHRvIG1hbmFnZSB0aGUgZm9ybSwgYW5kIHdlIHdpbGwgdXNlIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8V3JhcHBlcj5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGNvbXBvbmVudCB0byB3cmFwIHRoZSBjdXN0b20gY29tcG9uZW50LiBBbGwgdGhlIHByb3BzIHRoYXQgdGhlIGN1c3RvbSBjb21wb25lbnQgd2lsbCByZWNlaXZlIHdpbGwgYmUgdGhlIHByb3BzIHRoYXQgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcIjxXcmFwcGVyPlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgY29tcG9uZW50IHdpbGwgcmVjZWl2ZS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVG8gcmVnaXN0ZXIgdGhlIGN1c3RvbSBjb21wb25lbnQsIHdlIHdpbGwgdXNlIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJyZWdpc3RlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZnVuY3Rpb24sIGFuZCB3ZSB3aWxsIHBhc3MgaXQgdG8gXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPFdyYXBwZXI+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBjb21wb25lbnQgYnkgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInJlZlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgcHJvcC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImpzeFwiPntgXG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSAnQHVzZS1mb3JtL3VzZS1mb3JtJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICdzZWxlY3QtY29tcG9uZW50J1xuXG5mdW50aW9uIFVzZXJGb3JtKCl7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlVXNlckZvcm0oKVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICA8V3JhcHBlciBjb21wb25lbnQ9e1NlbGVjdH0gcmVmPXtyZWdpc3RlcignbmFtZXMnKX0gLz5cbiAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgIHsgdmFsdWU6ICdKb2huJywgbGFiZWw6ICdKb2huJyB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdKYW5lJywgbGFiZWw6ICdKYW5lJyB9LFxuICAgICAgICAgIHsgdmFsdWU6ICdKYWNrJywgbGFiZWw6ICdKYWNrJyB9LFxuICAgICAgICBdfVxuICAgICAgLz5cbiAgICA8L2Zvcm0+XG4gIClcbn1cbmB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmJsb2NrcXVvdGU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlIHdyYXBwZXIgY29tcG9uZW50IHdpbGwgbG9vayBhdCB0aGUgY3VzdG9tIGNvbXBvbmVudCBwcm9wcywgYW5kIGlmIHRoZSBjb21wb25lbnQgZG9lc24ndCBoYXZlIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllcywgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wib25DaGFuZ2VcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJvbkJsdXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widmFsdWVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3IuIEluIHRoaXMgY2FzZSwgeW91IHNob3VsZCBidWlsZCB5b3VyIG93biBXcmFwcGVyIGNvbXBvbmVudCwgb3IgeW91IGNhbiBjdXN0b21pemUgdGhlIGNvbXBvbmVudCB0byBhZGQgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcIm9uQ2hhbmdlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wib25CbHVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBwcm9wcy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5ibG9ja3F1b3RlPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiY3VzdG9tLWNvbXBvbmVudHMubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IElmcmFtZSBmcm9tICdyZWFjdC1pZnJhbWUnXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlbWl4J1xuXG5jb25zdCBDb2RlU2FuZEJveCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOjEwMCU7XG4gIHBhZGRpbmc6MTBweCAwO1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xuXG5cbiAgaDF7XG4gICAgZm9udC1zaXplOjNlbTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsc2Fucy1zZXJpZjtcbiAgICBjb2xvcjokeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICBwYWRkaW5nOjIwcHg7XG4gIH1cblxuICBkaXZ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBwYWRkaW5nOjJweDtcbiAgICAuc2FuZGJveHtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgICBib3JkZXI6bm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6OHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xuICAgIH1cbiAgfVxuXG4gIGBcblxuZnVuY3Rpb24gRGVtbyhwcm9wczogYW55KSB7XG4gIGNvbnN0IHB1c2ggPSB1c2VOYXZpZ2F0ZSgpXG5cbiAgZnVuY3Rpb24gcmVkaXJlY3QoKSB7XG4gICAgcHVzaCgnL2RvY3MnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29kZVNhbmRCb3g+XG4gICAgICA8ZGl2PlxuICAgICAgICA8SWZyYW1lXG4gICAgICAgICAgdXJsPXtwcm9wcy51cmx9XG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCI3MDBweFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2FuZGJveFwiXG4gICAgICAgICAgaWQ9XCJteUlkXCJcbiAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29kZVNhbmRCb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVtb1xuIiwgImltcG9ydCBIaWdobGlnaHQsIHsgZGVmYXVsdFByb3BzIH0gZnJvbSAncHJpc20tcmVhY3QtcmVuZGVyZXInXG5pbXBvcnQgdGhlbWUgZnJvbSBcInByaXNtLXJlYWN0LXJlbmRlcmVyL3RoZW1lcy9wYWxlbmlnaHRcIjtcbmltcG9ydCB7IE1kQ29udGVudENvcHksIE1kQ2hlY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcbmltcG9ydCB1c2VDbGlwYm9hcmQgZnJvbSBcInJlYWN0LXVzZS1jbGlwYm9hcmRcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgfSBmcm9tICcuL3N0eWxlcydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlQmxvY2soeyBjaGlsZHJlbiwgbGFuZ3VhZ2UgfTogYW55KSB7XG4gIGNvbnN0IFtpc0NvcGllZCwgc2V0Q29waWVkXSA9IHVzZUNsaXBib2FyZChjaGlsZHJlbiwgeyBzdWNjZXNzRHVyYXRpb246IDEwMDAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8SGlnaGxpZ2h0IHsuLi5kZWZhdWx0UHJvcHN9IGNvZGU9e2NoaWxkcmVufSBsYW5ndWFnZT17bGFuZ3VhZ2V9IHRoZW1lPXt0aGVtZX0+XG4gICAgICB7KHsgY2xhc3NOYW1lLCBzdHlsZSwgdG9rZW5zLCBnZXRMaW5lUHJvcHMsIGdldFRva2VuUHJvcHMgfSkgPT4gKFxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmd1YWdlXCI+e2xhbmd1YWdlfTwvZGl2PlxuICAgICAgICAgICAgICA8Q29weUJ1dHRvbiBvbkNsaWNrPXtzZXRDb3BpZWR9IGlzQ29waWVkPXtpc0NvcGllZH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3Rva2Vucy5tYXAoKGxpbmUsIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiB7Li4uZ2V0TGluZVByb3BzKHsgbGluZSwga2V5OiBpIH0pfT5cbiAgICAgICAgICAgICAgICB7bGluZS5tYXAoKHRva2VuLCBrZXkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHsuLi5nZXRUb2tlblByb3BzKHsgdG9rZW4sIGtleSB9KX0gLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICApfVxuICAgIDwvSGlnaGxpZ2h0PlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBDb3B5QnV0dG9uID0gKHsgaXNDb3BpZWQsIC4uLnByb3BzIH06IGFueSkgPT4ge1xuICByZXR1cm4gKFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9idXR0b24taGFzLXR5cGVcbiAgICA8YnV0dG9uIHsuLi5wcm9wc30+e2lzQ29waWVkID8gPE1kQ2hlY2sgY29sb3I9XCIjZmZmXCIgLz4gOiA8TWRDb250ZW50Q29weSBjb2xvcj1cIiNmZmZcIiAvPn08L2J1dHRvbj5cbiAgKVxufSIsICJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAxcmVtIDA7XG4gICp7XG4gICAgZm9udC1mYW1pbHk6bW9ub3NwYWNlO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xuICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXBcblxuICAgIH1cbiAgJiBwcmUge1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6MXJlbTtcbiAgICBib3gtc2hhZG93OiAwIDAuMTg4cmVtIDAuMzc1cmVtIHJnYmEoMCwwLDAsMC4xNiksIDAgMC4xODhyZW0gMC4zNzVyZW0gcmdiYSgwLDAsMCwwLjIzKTtcbiAgfVxuXG4gICYgLmhlYWRlcntcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xuXG4gICYgLmxhbmd1YWdle1xuICAgIGZvbnQtZmFtaWx5OidSb2JvdG8nLCBzYW5zLXNlcmlmIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgICBib3JkZXI6IDAuMDYzcmVtIHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwLjEyNXJlbSAwLjEyNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6MC4zMTNyZW07XG4gICAgd2lkdGg6bWF4LWNvbnRlbnQ7XG4gICAgcGFkZGluZzowLjI1cmVtO1xuICAgIGRpc3BsYXk6aW5saW5lO1xuICB9XG5cbiAgJiBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xuICAgIGJvcmRlcjogMC4wNjNyZW0gc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctdG9wOjAuMzEzcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwLjEyNXJlbSAwLjEyNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6MC42MjVyZW07XG5cbiAgICAmOmhvdmVye1xuICAgICAgYm94LXNoYWRvdzogMCAwLjE4OHJlbSAwLjM3NXJlbSByZ2JhKDAsMCwwLDAuMTYpLCAwIDAuMTg4cmVtIDAuMzc1cmVtIHJnYmEoMCwwLDAsMC4yMyk7XG4gICAgfVxuICB9XG4gIH1cbmAiLCAiXG4vKkBqc3hSdW50aW1lIGNsYXNzaWMgQGpzeCBSZWFjdC5jcmVhdGVFbGVtZW50IEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50Ki9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBjb25zdCBhdHRyaWJ1dGVzID0ge1xuICBcIm1ldGFcIjoge1xuICAgIFwidGl0bGVcIjogXCJGb3JtIHZhbGlkYXRpb25cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiTGVhcm4gaG93IHRvIHZhbGlkYXRlIGZvcm0gdmFsdWVzIHVzaW5nIHVzZS1mb3JtLlwiXG4gIH1cbn07XG5pbXBvcnQgRGVtbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RlbW8nO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvZGVibG9jayc7XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiLFxuICAgIGgyOiBcImgyXCIsXG4gICAgcDogXCJwXCIsXG4gICAgdWw6IFwidWxcIixcbiAgICBsaTogXCJsaVwiLFxuICAgIGgzOiBcImgzXCIsXG4gICAgY29kZTogXCJjb2RlXCIsXG4gICAgYmxvY2txdW90ZTogXCJibG9ja3F1b3RlXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDE+e1wiRm9ybXMgdmFsaWRhdGlvbnNcIn08L19jb21wb25lbnRzLmgxPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJWYWxpZGF0aW9uXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJFdmVyeSB3ZWJzaXRlIHdpdGggZm9ybXMgc2hvdWxkIGhhdmUgdmFsaWRhdGlvbnMsIGJ1dCB3aGF0IGFyZSBmb3JtIHZhbGlkYXRpb25zPyBHbyB0byBhbnkgcG9wdWxhciB3ZWJzaXRlIHdpdGggYSByZWdpc3RyYXRpb24gZm9ybSwgYW5kIHlvdSB3aWxsIGJlIG5vdGljZSB0aGF0IHRoZXkgcHJvdmlkZSBmZWVkYmFjayB3aGVuIHlvdSBkb24ndCBmaWxsIGluIHRoZSBmb3JtIGNvcnJlY3RseS4gWW91J2xsIHNlZSBtZXNzYWdlcyBzdWNoIGFzOlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlxcXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXFxcIiAoWW91IGNhbid0IGxlYXZlIHRoaXMgZmllbGQgYmxhbmspLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlxcXCJQbGVhc2UgZW50ZXIgeW91ciBwaG9uZSBudW1iZXIgaW4gdGhlIGZvcm1hdCB4eHgteHh4eFxcXCIgKEEgc3BlY2lmaWMgZGF0YSBmb3JtYXQgaXMgcmVxdWlyZWQgZm9yIGl0IHRvIGJlIGNvbnNpZGVyZWQgdmFsaWQpLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlxcXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzXFxcIiAodGhlIGRhdGEgeW91IGVudGVyZWQgaXMgbm90IGluIHRoZSByaWdodCBmb3JtYXQpLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlxcXCJZb3VyIHBhc3N3b3JkIG5lZWRzIHRvIGJlIGJldHdlZW4gOCBhbmQgMzAgY2hhcmFjdGVycyBsb25nIGFuZCBjb250YWluIG9uZSB1cHBlcmNhc2UgbGV0dGVyLCBvbmUgc3ltYm9sLCBhbmQgYSBudW1iZXIuXFxcIiAoQSB2ZXJ5IHNwZWNpZmljIGRhdGEgZm9ybWF0IGlzIHJlcXVpcmVkIGZvciB5b3VyIGRhdGEpLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiQnV0IHdoeSBpcyB0aGlzIHNvIGltcG9ydGFudD9cIn08L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkZvcm0gdmFsaWRhdGlvbiBpcyBhIHZlcnkgaW1wb3J0YW50IHBhcnQgb2YgdGhlIHdlYiBkZXZlbG9wbWVudCBwcm9jZXNzLiBJdCdzIGEgd2F5IHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBkYXRhIHlvdSBlbnRlciBpcyB2YWxpZC4gSWYgeW91IGRvbid0IHZhbGlkYXRlIHlvdXIgZGF0YSwgaXQncyBwb3NzaWJsZSB0aGF0IHlvdXIgZGF0YSB3aWxsIGJlIGxvc3Qgb3IgY29ycnVwdGVkLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJTZXJ2ZXItc2lkZSB2YWxpZGF0aW9ucyBhcmUgdGhlIGxhc3QgcGFydCBvZiB0aGUgdmFsaWRhdGlvbiwgd2hpY2ggbWVhbnMsIGV2ZW4gaWYgdGhlIGRhdGEgaXMgaW4gdGhlIGNvcnJlY3QgZm9ybWF0IGl0J3MgcG9zc2libGUgdGhhdCB0aGUgZGF0YSBjYW4ndCBiZSBzdG9yZWQgYmVjYXVzZSBzb21lIGRhdGEgY2FuJ3QgYmUgZHVwbGljYXRlZCBsaWtlIGVtYWlsIG9yIHVzZXJuYW1lLCB0aGlzIGtpbmQgb2YgdmFsaWRhdGlvbiBpcyBkb25lIGluIHNlcnZlci1zaWRlLiBDbGllbnQtc2lkZSB2YWxpZGF0aW9uIGRlYWwgd2l0aCBpbmNvcnJlY3QgZGF0YSBmb3JtYXQsIGxpa2UgYSB2YWxpZCBlbWFpbCwgb3IgYSB2YWxpZCBwYXNzd29yZCwgd2hpY2ggbWVhbnMsIHRoYXQgYmVmb3JlIHRoZSBkYXRhIGlzIHN1Ym1pdHRlZCB0aGUgY2xpZW50LXNpZGUgdmFsaWRhdGVzIGlmIGl0IGlzIGEgdmFsaWQgZGF0YSBmb3JtYXQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJEZXNjcmlwdGlvblwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlcmUgYXJlIHNldmVyYWwgdmFsaWRhdGlvbnMgc29sdXRpb25zIGF2YWlsYWJsZSwgYnV0IHdoZW4gdXNpbmcgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlRm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgdGhlIGRlZmF1bHQgc29sdXRpb24gaXMgWXVwLiBXaXRoIHl1cCB0aGUgcHJvY2VzcyBvZiB2YWxpZGF0aW9ucyBpcyBzaW1wbGUgYW5kIHBvd2VyZnVsLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlRm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgcmV0dXJucyBhbiBlcnJvciBvYmplY3QsIHRoYXQgaGFzIGFsbCBlcnJvcnMsIGFuZCB0aGlzIG9iamVjdCBpcyB1cGRhdGVkIHdoZW5ldmVyIHRoZSBpbnB1dCBzdGF0ZSBpcyBjaGFuZ2VkIG9yIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkIGlmIHlvdXIgZm9ybSBoYXMgdmFsaWRhdGlvbi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVXN1YWxseSB5b3Ugd2FubnQgdG8gc2hvdyB0aGUgZXJyb3IgbWVzc2FnZSBqdXN0IHdoZW4gYSBmaWVsZCBpcyB0b3VjaGVkLCB5b3UgY2FuIGRvIHRoYXQgYnkgdXNpbmcgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInRvdWNoZWRcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIG9iamVjdC4gVGhvdWNoZWQgb2JqZWN0IGlzIGFuIG9iamVjdCB0aGF0IGhhcyBhbGwgdGhlIGZpZWxkcyB0aGF0IGFyZSB0b3VjaGVkLCBhbmQgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBpcyB0cnVlIGlmIHRoZSBmaWVsZCBpcyB0b3VjaGVkLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiVXNhZ2VcIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlZhbGlkYXRpb24gaXMgcGVyZm9ybWVkIHdoZW5ldmVyIHRoZSBzdGF0ZSBpcyBjaGFuZ2VkLiBCeSBkZWZhdWx0LCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VGb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiB1c2VzIHRoZSB1bmNvbnRyb2xsZWQgaW5wdXRzIG9wdGlvbiwgdGhpcyBtZWFucyB0aGF0IHRoZSB2YWx1ZXMgXHUyMDBCXHUyMDBCYXJlIGFjY2Vzc2libGUgd2hlbiB0aGUgb25TdWJtaXQgZXZlbnQgaXMgZGlzcGF0Y2hlZC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImpzeFwiPntgXG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSBcIkB1c2UtZm9ybS91c2UtZm9ybVwiO1xuaW1wb3J0ICogYXMgeXVwIGZyb20gXCJ5dXBcIjtcblxuY29uc3QgdXNlRm9ybSA9IGNyZWF0ZUZvcm0oe1xuICAgaW5pdGlhbFZhbHVlczp7XG4gICAgICBuYW1lOiBcIkplc3NlXCIsXG4gICAgICBlbWFpbDogXCJqZXNzZUBqZXNzZS5jb21cIixcbiAgICAgIHBldHM6IFtcImZlbGl4XCJdLFxuICAgICAgYWNjZXB0OiBmYWxzZSxcbiAgIH0gICBcbn0pXG5cbmNvbnN0IHZhbGlkYXRpb24gPSB5dXAub2JqZWN0KCkuc2hhcGUoe1xuICBuYW1lOiB5dXAuc3RyaW5nKCkucmVxdWlyZWQoXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCIpLFxuICBlbWFpbDogeXVwXG4gICAgLnN0cmluZygpXG4gICAgLmVtYWlsKFwiVGhpcyBmaWVsZCBtdXN0IGJlIGEgdmFsaWQgZS1tYWlsXCIpXG4gICAgLnJlcXVpcmVkKFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZFwiKSxcbiAgcGV0czogeXVwLmFycmF5KHl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIikpLFxuICBhY2NlcHQ6IHl1cC5ib29sKCkub25lT2YoW3RydWVdLCBcIkZpZWxkIG11c3QgYmUgY2hlY2tlZFwiKSxcbn0pO1xuXG5mdW5jdGlvbiBGb3JtKCkge1xuICBjb25zdCB7IHJlZ2lzdGVyLCBzdGF0ZSwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKHttb2RlOidvbkNoYW5nZSd9KTtcblxuICBjb25zdCB7ZXJyb3JzLCB0b3VjaGVkfSA9IHN0YXRlO1xuXG4gIGZ1bmN0aW9uIG9uU3VibWl0KGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoXCJuYW1lXCIpfSAvPlxuICAgICAgICAgPHNwYW4+e3RvdWNoZWQubmFtZSAmJiBlcnJvcnMubmFtZX08L3NwYW4+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoXCJlbWFpbFwiKX0gLz5cbiAgICAgICAgIDxzcGFuPnt0b3VjaGVkLmVtYWlsICYmIGVycm9ycy5lbWFpbH08L3NwYW4+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoXCJwZXRzXCIpfSAvPlxuICAgICAgICAgPHNwYW4+e3RvdWNoZWQucGV0cyAmJiBlcnJvcnMucGV0c308L3NwYW4+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoXCJwZXRzLjBcIil9IC8+XG4gICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcihcImFjY2VwdFwiKX0gLz5cbiAgICAgICAgIDxzcGFuPnt0b3VjaGVkLmFjY2VwdCAmJiBlcnJvcnMuYWNjZXB0fTwvc3Bhbj5cbiAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59YH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMuYmxvY2txdW90ZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJJZiB5b3UgZG9uJ3Qgd2FudCB0byB1c2UgWXVwIHZhbGlkYXRpb24sIHlvdSBjYW4gdXNlIGFueSBvdGhlciB2YWxpZGF0aW9uIGxpYnJhcnksIG9yIHdyaXRlIHlvdXIgb3duIHZhbGlkYXRpb24gbG9naWMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTwvX2NvbXBvbmVudHMuYmxvY2txdW90ZT57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiRGVtb1wifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PERlbW8gdXJsPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9zL3VzZS1mb3JtLXZhbGlkYXRpb24tZm9ybS1qbXY5ZVwiIC8+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJmb3JtLXZhbGlkYXRpb24ubWR4XCI7XG5leHBvcnQgY29uc3QgaGVhZGVycyA9IHR5cGVvZiBhdHRyaWJ1dGVzICE9PSBcInVuZGVmaW5lZFwiICYmIGF0dHJpYnV0ZXMuaGVhZGVycztcbmV4cG9ydCBjb25zdCBtZXRhID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5tZXRhO1xuZXhwb3J0IGNvbnN0IGxpbmtzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICIsICJcbi8qQGpzeFJ1bnRpbWUgY2xhc3NpYyBAanN4IFJlYWN0LmNyZWF0ZUVsZW1lbnQgQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGNvbnN0IGF0dHJpYnV0ZXMgPSB7XG4gIFwibWV0YVwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIk5hdGl2ZSBIVE1MIGVsZW1lbnRzXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIkxlYXJuIGhvdyB0byB1c2UgbmF0aXZlIEhUTUwgZWxlbWVudHMgaW4gb3JkZXIgdG8gY3JlYXRlIGJldHRlciBmb3Jtcy5cIlxuICB9XG59O1xuaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZW1vJztcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb2RlYmxvY2snO1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgaDE6IFwiaDFcIixcbiAgICBoMjogXCJoMlwiLFxuICAgIHA6IFwicFwiLFxuICAgIGNvZGU6IFwiY29kZVwiLFxuICAgIGgzOiBcImgzXCIsXG4gICAgYmxvY2txdW90ZTogXCJibG9ja3F1b3RlXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDE+e1wiTmF0aXZlIEhUTUwgZWxlbWVudHNcIn08L19jb21wb25lbnRzLmgxPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJXaGF0IGlzIGEgbmF0aXZlIEhUTUwgZWxlbWVudD9cIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIk5hdGl2ZSBIVE1MIGVsZW1lbnRzIGFyZSBlbGVtZW50cyB0aGF0IGFyZSBidWlsdCBpbnRvIHRoZSBicm93c2VyLCBsaWtlIFwifTxfY29tcG9uZW50cy5jb2RlPntcIjxpbnB1dD5cIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBcIn08X2NvbXBvbmVudHMuY29kZT57XCI8YnV0dG9uPlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIFwifTxfY29tcG9uZW50cy5jb2RlPntcIjxzZWxlY3Q+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgZXRjLiBUaGVzZSBlbGVtZW50cyBhcmUgZGlmZmVyZW50IGZyb20gY3VzdG9tIGVsZW1lbnRzLCB3aGljaCBhcmUgZWxlbWVudHMgdGhhdCBhcmUgY3JlYXRlZCBieSBkZXZlbG9wZXJzLiBOYXRpdmUgSFRNTCBlbGVtZW50cyBhcmUgcG93ZXJmdWwgYW5kIGVhc3kgdG8gdXNlIHNpbmNlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHVzZXMgYSByZWZlcmVuY2UgdG8gcmVnaXN0ZXIgdGhlIGZpZWxkcywgbmF0aXZlIGVsZW1lbnRzIGFyZSBlYXN5IHRvIHJlZ2lzdGVyLCB0cmlnZ2VyIGFuZCBsaXN0ZW4gdG8gZXZlbnRzLiBBbGwgdGhhdCB3ZSBuZWVkIHRvIGRvIGlzIHRvIHVzZSB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wicmVmXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBwcm9wZXJ0eSB0byByZWdpc3RlciB0aGUgZWxlbWVudC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImpzeFwiPntgPGlucHV0IHJlZj17cmVnaXN0ZXIoJ2ZpZWxkTmFtZScpfSAvPlxuYH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiTGV0J3MgY3JlYXRlIGEgZnVsbCBmb3JtIGV4YW1wbGVcIn08L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIldoZW4gd2UgYXJlIGNyZWF0aW5nIHRoZSBmb3JtIGRvZXNuJ3QgbWF0dGVyIGlmIHdlIGFyZSB1c2luZyBuYXRpdmUgSFRNTCBlbGVtZW50cyBvciBub3QsIGl0J3MganVzdCBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHN0b3JlIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gdG8gbWFuYWdlIHRoZSBmb3JtLiBTbyB3ZSBkb24ndCBuZWVkIHRvIHdvcnJ5IGFib3V0IGl0IGZvciBub3cuIFdlIGp1c3QgbmVlZCB0byBjcmVhdGUgdGhlIGZvcm0gc3RvcmUsIGFsc28gd2UgY2FuIHByb3ZpZGUgdGhlIGluaXRpYWwgdmFsdWVzLCBpbml0aWFsIGVycm9ycywgaW5pdGlhbCB0b3VjaGVkLCBhbmQgdGhlIHZhbGlkYXRpb24gc2NoZW1hLCBidXQgZm9yIG5vdywgd2Ugd2lsbCBqdXN0IHByb3ZpZGUgdGhlIGluaXRpYWwgdmFsdWVzLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08Q29kZUJsb2NrIGxhbmd1YWdlPVwiamF2YXNjcmlwdFwiPntgaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJ0B1c2UtZm9ybS9jb3JlJ1xuXG5jb25zdCB1c2VVc2VyRm9ybSA9IGNyZWF0ZUZvcm0oe1xuICBpbml0aWFsVmFsdWVzOiB7XG4gICAgbmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICBjb25maXJtUGFzc3dvcmQ6ICcnLFxuICB9LFxuIH0pXG5gfTwvQ29kZUJsb2NrPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkluIG9yZGVyIHRvIGhhdmUgYSBmdWxsIGZvcm0gZXhhbXBsZSwgd2UgbmVlZCB0byBjcmVhdGUgYSBmb3JtIGNvbXBvbmVudCBhbmQgdXNlIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VVc2VyRm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgaG9vay4gSW4gdGhpcyBzdGVwIHdlIG5lZWQgdG8gcmVnaXN0ZXIgdGhlIGZpZWxkcywgd2UgY2FuIGRvIHRoYXQgdXNpbmcgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInJlZ2lzdGVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmdW5jdGlvbi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmJsb2NrcXVvdGU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInJlZ2lzdGVyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmdW5jdGlvbiBpcyBhIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgdGhlIG5hbWUgb2YgdGhlIGZpZWxkIGFuZCByZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50LiBUaGUgcmVmZXJlbmNlIGlzIHVzZWQgdG8gcmVnaXN0ZXIgdGhlIGVsZW1lbnQsIHRyaWdnZXIsIGFuZCBsaXN0ZW4gdG8gZXZlbnRzLiBJZiB5b3UgYXJlIHVzaW5nIGEgbGlicmFyeSBsaWtlIE1hdGVyaWFsIFVJIG9yIHNvbWV0aGluZyBzaW1pbGFyLCBtYWtlIHN1cmUgdGhhdCB0aGUgaW5wdXQgY29tcG9uZW50IHVzZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJSZWFjdC5mb3J3YXJkUmVmXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgb3RoZXJ3aXNlIHlvdSB3aWxsIG5lZWQgdG8gdXNlIGEgV3JhcHBlciB0byByZWdpc3RlciB0aGUgZWxlbWVudC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5ibG9ja3F1b3RlPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqc3hcIj57YFxuZnVudGlvbiBVc2VyRm9ybSgpe1xuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZVVzZXJGb3JtKClcblxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoJ25hbWUnKX0gLz5cbiAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKCdlbWFpbCcpfSAvPlxuICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoJ3Bhc3N3b3JkJyl9IC8+XG4gICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcignY29uZmlybVBhc3N3b3JkJyl9IC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gIClcbn1cbmB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlIGxhc3QgdGhpbmcgd2UgbmVlZCB0byBrbm93IGlzIGFib3V0IFwifTxfY29tcG9uZW50cy5jb2RlPntcImhhbmRsZVN1Ym1pdFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIGl0J3MgYSBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIGFub3RoZXIgZnVuY3Rpb24gYXMgYSBwYXJhbWV0ZXIsIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkLiBUaGUgZnVuY3Rpb24gcmVjZWl2ZXMgdGhlIGRhdGEgb2YgdGhlIGZvcm0gYXMgYSBwYXJhbWV0ZXIgYW5kIHRoZSBzZWNvbmQgcGFyYW1ldGVyIGlzIHRoZSBhbnN3ZXIgb2YgdGhlIHZhbGlkYXRpb24gKGlmIHRoZSBmb3JtIGlzIHZhbGlkIG9yIG5vdCwgaXQgZGVwZW5kcyBvbiB0aGUgdmFsaWRhdGlvbiBzY2hlbWEpLlwifTwvX2NvbXBvbmVudHMucD48Lz47XG4gIHJldHVybiBNRFhMYXlvdXQgPyA8TURYTGF5b3V0IHsuLi5wcm9wc30+e19jb250ZW50fTwvTURYTGF5b3V0PiA6IF9jb250ZW50O1xufVxuZXhwb3J0IGRlZmF1bHQgTURYQ29udGVudDtcblxuXG5leHBvcnQgY29uc3QgZmlsZW5hbWUgPSBcIm5hdGl2ZS1lbGVtZW50cy5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IHtcbiAgICBcInRpdGxlXCI6IFwiZGVib3VuY2VkIG1vZGVcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiV2hlbiB5b3UgdXNlIGRlYm91bmNlZCBmb3JtIHRoZSBkZWJvdW5jZSBwYXJhbWV0ZXIgZGVsYXlzIHRoZSB1cGRhdGluZyBvZiB0aGUgc3RhdGUgdW50aWwgdGhlIHVzZXIgaGFzIHN0b3BwZWQgY2hhbmdpbmcgaW5wdXRzIGZvciBhIHByZWRldGVybWluZWQgYW1vdW50IG9mIHRpbWUuXCJcbiAgfVxufTtcbmltcG9ydCBEZW1vIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGVtbyc7XG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29kZWJsb2NrJztcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGgxOiBcImgxXCIsXG4gICAgaDI6IFwiaDJcIixcbiAgICBwOiBcInBcIixcbiAgICBhOiBcImFcIixcbiAgICBjb2RlOiBcImNvZGVcIixcbiAgICBibG9ja3F1b3RlOiBcImJsb2NrcXVvdGVcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMT57XCJEZWJvdW5jZWQgbW9kZVwifTwvX2NvbXBvbmVudHMuaDE+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkludHJvZHVjdGlvblwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiRGVib3VuY2UgZnVuY3Rpb24gZm9yY2VzIGEgZnVuY3Rpb24gdG8gd2FpdCBhIGNlcnRhaW4gYW1vdW50IG9mIHRpbWUgYmVmb3JlIHJ1bm5pbmcgYWdhaW4uIFRoZSBmdW5jdGlvbiBpcyBidWlsdCB0byBsaW1pdCB0aGUgbnVtYmVyIG9mIHRpbWVzIGEgZnVuY3Rpb24gaXMgY2FsbGVkLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGUgZGVib3VuY2UgcGFyYW1ldGVyIGRlbGF5cyB0aGUgdXBkYXRpbmcgb2YgdGhlIHN0YXRlIHVudGlsIHRoZSB1c2VyIGhhcyBzdG9wcGVkIGNoYW5naW5nIGlucHV0cyBmb3IgYSBwcmVkZXRlcm1pbmVkIGFtb3VudCBvZiB0aW1lLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGUgaW5wdXQgdmFsdWUgaXMgc2V0IHRvIHN0YXRlIHZhbHVlcyBhbmQgdGhlbiB1cGRhdGVkIHZpYSBSZWFjdCBldmVudHMuIERlZmluaW5nIGEgZm9ybVx1MjAxOXMgaW5wdXQgdmFsdWUgdmlhIHN0YXRlIGlzIGNvbnNpZGVyZWQgYSBjb250cm9sbGVkIGNvbXBvbmVudC4gRm9yIGNvbnRyb2xsZWQgaW5wdXRzLCB5b3Ugd2lsbCBuZWVkIGEgY29ycmVzcG9uZGluZyBzdGF0ZSBhbmQgdGhlbiBhIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGF0IHN0YXRlIHdpdGggY2hhbmdlcy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9mb3Jtcy5odG1sXCI+e1wiUmVhY3QgRG9jc1wifTwvX2NvbXBvbmVudHMuYT48L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSXQgbWVhbnMgdGhhdCB3aGVuZXZlciBzdGF0ZSBpcyBjaGFuZ2VkIHRoZSBjb21wb25lbnQsIGl0IGlzIHJlbmRlcmVkIGFnYWluLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJJZiB5b3Ugd2FudCB0byB1c2UgdGhpcyBraW5kIG9mIGZvcm0sIHlvdSBuZWVkIG9ubHkgcGFzcyBwcm9wZXJ0eSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJtb2RlOidkZWJvdW5jZWQnXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiQWxzbywgaXQgbWVhbnMgdGhhdCB0aGUgdmFsaWRhdGlvbnMgYXJlIHJ1biBpbiBldmVyeSBzdGF0ZSBjaGFuZ2UsIHByb3ZpZGluZyBiZXR0ZXIgdXNlciBmZWVkYmFjay5cXG5TZWUgbW9yZSBpbiBDb250cm9sbGVkIElucHV0cyB3aXRoIHZhbGlkYXRpb24uXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJVc2FnZVwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+PF9jb21wb25lbnRzLmNvZGU+e1widXNlRm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgcHJvdmlkZXMgYSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJyZWdpc3RlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZnVuY3Rpb24sIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBhbGwgcHJvcGVydGllcyB0byBtYW5hZ2VyIGEgZmllbGQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqc3hcIj57YGltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICdAdXNlLWZvcm0vdXNlLWZvcm0nXG5cbmNvbnN0IHVzZUZvcm0gPSBjcmVhdGVGb3JtKHtcbiAgaW5pdGlhbFZhbHVlczoge1xuICAgIG5hbWU6ICdBbm5hJyxcbiAgICBhZGRyZXNzOiBbXG4gICAgICB7XG4gICAgICAgIHN0cmVldDogJzEyMyBNYWluIFN0JyxcbiAgICAgICAgY2l0eTogJ0FueXRvd24nLFxuICAgICAgfSxcbiAgICBdXG4gIH1cbn0pXG5gfTwvQ29kZUJsb2NrPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlVzZSBkb3Qgbm90YXRpb24gdG8gY3JlYXRlIGFkdmFuY2VkIG9iamVjdHMgb3IgdG8gbWFwIG9iamVjdCB2YWx1ZXMuIFR5cGUgYW4gZW50cnkgbmFtZSBhbmQgdHlwZSBvciBhbiBlbnRyeSBwcm9wZXJ0eSBvYmplY3QuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5ibG9ja3F1b3RlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkRvdCBub3RhdGlvbiBpcyB1c2VkIHRvIGFjY2VzcyBuZXN0ZWQgb2JqZWN0cy4gRm9yIGV4YW1wbGUsIGlmIHlvdSBoYXZlIGFuIG9iamVjdCB3aXRoIGEgbmVzdGVkIG9iamVjdCwgeW91IGNhbiBhY2Nlc3MgdGhlIG5lc3RlZCBvYmplY3QgdXNpbmcgZG90IG5vdGF0aW9uOyBcIn08X2NvbXBvbmVudHMuY29kZT57XCJpbmZvLm5hbWVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLlxcblVzZSBkb3Qgbm90YXRpb24gdG8gYWNjZXNzIG5lc3RlZCBhcnJheXMuIEZvciBleGFtcGxlLCBpZiB5b3VcXG5oYXZlIGFuIG9iamVjdCB3aXRoIGEgbmVzdGVkIGFycmF5LCB5b3UgY2FuIGFjY2VzcyB0aGUgbmVzdGVkIGFycmF5IHVzaW5nIGRvdCBub3RhdGlvbjtcXG5cIn08X2NvbXBvbmVudHMuY29kZT57XCJpbmZvLmFycmF5WzJdXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5ibG9ja3F1b3RlPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqc3hcIj57YFxuICAgZnVuY3Rpb24gRm9ybSgpe1xuICAgIGNvbnN0IHsgcmVnaXN0ZXIgfSA9IHVzZUZvcm0oeyBtb2RlOiAnZGVib3VuY2VkJ30pXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0+XG4gICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKCduYW1lJyl9IC8+XG4gICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKCdhZGRyZXNzLnN0cmVldCcpfSAvPlxuICAgICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcignYWRkcmVzcy5jaXR5Jyl9IC8+XG4gICAgICA8L2Zvcm0+XG4gICAgKVxuICAgfVxuYH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiRGVtb1wifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PERlbW8gdXJsPVwiaHR0cHM6Ly9jb2Rlc2FuZGJveC5pby9lbWJlZC91c2Vmb3JtLWRlYm91bmNlZC1zZG9rdj9mb250c2l6ZT0xNCZhbXA7aGlkZW5hdmlnYXRpb249MSZhbXA7dGhlbWU9ZGFya1wiIC8+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJkZWJvdW5jZWQtZm9ybS5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IHtcbiAgICBcInRpdGxlXCI6IFwib25DaGFuZ2UgbW9kZVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJXaGVuIHVzaW5nIGNvbnRyb2xsZWQgZm9ybXMsIHRoZSBpbnB1dCB2YWx1ZSBpcyBzZXQgdG8gc3RhdGUgdmFsdWVzIGFuZCB0aGVuIHVwZGF0ZWQgdmlhIFJlYWN0IGV2ZW50cy4gUmVhY3QgZm9ybSBjb250cm9sbGVkIGlzIHRoZSBtb3N0IHBvcHVsYXIgYXByb2FjaCBpbiByZWFjdGpzLlwiXG4gIH1cbn07XG5pbXBvcnQgRGVtbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RlbW8nO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvZGVibG9jayc7XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiLFxuICAgIGgyOiBcImgyXCIsXG4gICAgcDogXCJwXCIsXG4gICAgY29kZTogXCJjb2RlXCIsXG4gICAgYmxvY2txdW90ZTogXCJibG9ja3F1b3RlXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDE+e1wib25DaGFuZ2UgbW9kZVwifTwvX2NvbXBvbmVudHMuaDE+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkRlc2NyaXB0aW9uXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGVyZSBhcmUgdHdvIHR5cGVzIG9mIGZvcm0gaW5wdXQgaW4gUmVhY3QuIFdlIGhhdmUgdGhlIHVuY29udHJvbGxlZCBpbnB1dCBhbmQgdGhlIGNvbnRyb2xsZWQgaW5wdXQuXFxuV2hlbiB1c2luZyBjb250cm9sbGVkIGZvcm1zLCB0aGUgaW5wdXQgdmFsdWUgaXMgc2V0IHRvIHN0YXRlIHZhbHVlcyBhbmQgdGhlbiB1cGRhdGVkIHZpYSBSZWFjdCBldmVudHMuXFxuRGVmaW5pbmcgYSBmb3JtIGlucHV0IHZhbHVlIHZpYSBzdGF0ZSBpcyBjb25zaWRlcmVkIGEgY29udHJvbGxlZCBjb21wb25lbnQuIEZvciBjb250cm9sbGVkIGlucHV0cywgeW91IHdpbGwgbmVlZCBhIGNvcnJlc3BvbmRpbmcgc3RhdGUgYW5kIHRoZW4gYSBmdW5jdGlvbiB0byB1cGRhdGUgdGhhdCBzdGF0ZSB3aXRoIGNoYW5nZXMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkNvbnRyb2xsZWQgaW5wdXRzIGFyZSB0aGUgbW9zdCBwb3B1bGFyIGluIHRoZSByZWFjdCBlY29zeXN0ZW0sIGFyZSBlYXNpZXIgdG8gd3JpdGUgYW5kIHVuZGVyc3RhbmRpbmcuIEJ1dCB3aGVuIHlvdSB0aGluayBhYm91dCBwZXJmb3JtYW5jZSBjb250cm9sbGVkIGlucHV0cyBhcmUgbGVzcyBwb3dlcmZ1bCB0aGFuIHVuY29udHJvbGxlZCBpbnB1dHMuRXZlcnkgdGltZSB0aGF0IGNvbXBvbmVudCBzdGF0ZSBpcyB1cGRhdGVkIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyZWQgYWdhaW4gYW5kIHRoaXMgYWZmZWN0cyB0aGUgcGVyZm9ybWFuY2UgcmVzdWx0LlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiVXNhZ2VcIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPjxfY29tcG9uZW50cy5jb2RlPntcInVzZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHByb3ZpZGVzIGEgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wicmVnaXN0ZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZ1bmN0aW9uLCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYWxsIHByb3BlcnRpZXMgdG8gbWFuYWdlciBhIGZpZWxkLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08Q29kZUJsb2NrIGxhbmd1YWdlPVwianN4XCI+e2BcbmltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICdAdXNlLWZvcm0vdXNlLWZvcm0nXG5cbmNvbnN0IHVzZUZvcm0gPSBjcmVhdGVGb3JtKHtcbiAgaW5pdGlhbFZhbHVlczoge1xuICAgIG5hbWU6ICdBbm5hJyxcbiAgICBhZGRyZXNzOiBbXG4gICAgICB7XG4gICAgICAgIHN0cmVldDogJzEyMyBNYWluIFN0JyxcbiAgICAgICAgY2l0eTogJ0FueXRvd24nLFxuICAgICAgfSxcbiAgICBdXG4gIH1cbn0pXG5gfTwvQ29kZUJsb2NrPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlVzZSBkb3Qgbm90YXRpb24gdG8gY3JlYXRlIGFkdmFuY2VkIG9iamVjdHMgb3IgdG8gbWFwIG9iamVjdCB2YWx1ZXMuIFR5cGUgYW4gZW50cnkgbmFtZSBhbmQgdHlwZSBvciBhbiBlbnRyeSBwcm9wZXJ0eSBvYmplY3QuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5ibG9ja3F1b3RlPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkRvdCBub3RhdGlvbiBpcyB1c2VkIHRvIGFjY2VzcyBuZXN0ZWQgb2JqZWN0cy4gRm9yIGV4YW1wbGUsIGlmIHlvdSBoYXZlIGFuIG9iamVjdCB3aXRoIGEgbmVzdGVkIG9iamVjdCwgeW91IGNhbiBhY2Nlc3MgdGhlIG5lc3RlZCBvYmplY3QgdXNpbmcgZG90IG5vdGF0aW9uOyBcIn08X2NvbXBvbmVudHMuY29kZT57XCJpbmZvLm5hbWVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLlxcblVzZSBkb3Qgbm90YXRpb24gdG8gYWNjZXNzIG5lc3RlZCBhcnJheXMuIEZvciBleGFtcGxlLCBpZiB5b3VcXG5oYXZlIGFuIG9iamVjdCB3aXRoIGEgbmVzdGVkIGFycmF5LCB5b3UgY2FuIGFjY2VzcyB0aGUgbmVzdGVkIGFycmF5IHVzaW5nIGRvdCBub3RhdGlvbjtcXG5cIn08X2NvbXBvbmVudHMuY29kZT57XCJpbmZvLmFycmF5WzJdXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5ibG9ja3F1b3RlPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqc3hcIj57YFxuICAgZnVuY3Rpb24gRm9ybSgpe1xuICAgIGNvbnN0IHsgcmVnaXN0ZXIgfSA9IHVzZUZvcm0oeyBtb2RlOiAnb25DaGFuZ2UnfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoJ25hbWUnKX0gLz5cbiAgICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoJ2FkZHJlc3Muc3RyZWV0Jyl9IC8+XG4gICAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKCdhZGRyZXNzLmNpdHknKX0gLz5cbiAgICAgIDwvZm9ybT5cbiAgICApXG4gICB9XG5gfTwvQ29kZUJsb2NrPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJEZW1vXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08RGVtbyB1cmw9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL3VzZWZvcm0tcXVpY2stc3RhcnQteXBveHU/Zm9udHNpemU9MTQmYW1wO2hpZGVuYXZpZ2F0aW9uPTEmYW1wO3RoZW1lPWRhcmtcIiAvPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwib25jaGFuZ2UtZm9ybS5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IHtcbiAgICBcInRpdGxlXCI6IFwib25TdWJtaXQgbW9kZVwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJVbmNvbnRyb2xsZWQgZm9ybXMgYXJlIHRoZSBtb3N0IHBlcmZvcm1hbnQgd2F5IHRvIGNyZWF0ZSByZWFjdCBmb3Jtcy4gV2l0aCB1bmNvbnRyb2xsZWQgaW5wdXQgdmFsdWVzLCB0aGVyZSBpcyBubyB1cGRhdGluZyBvciBjaGFuZ2luZyBvZiBhbnkgc3RhdGVzLiBXaGF0IHlvdSBzdWJtaXQgaXMgd2hhdCB5b3UgZ2V0LlwiXG4gIH1cbn07XG5pbXBvcnQgRGVtbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RlbW8nO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvZGVibG9jayc7XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiLFxuICAgIGgyOiBcImgyXCIsXG4gICAgcDogXCJwXCIsXG4gICAgYTogXCJhXCIsXG4gICAgY29kZTogXCJjb2RlXCIsXG4gICAgYmxvY2txdW90ZTogXCJibG9ja3F1b3RlXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDE+e1wib25TdWJtaXQgbW9kZVwifTwvX2NvbXBvbmVudHMuaDE+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkRlc2NyaXB0aW9uXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGVyZSBhcmUgdHdvIHR5cGVzIG9mIGZvcm0gaW5wdXQgaW4gUmVhY3QuIFdlIGhhdmUgdGhlIHVuY29udHJvbGxlZCBpbnB1dCBhbmQgdGhlIGNvbnRyb2xsZWQgaW5wdXQuIFVuY29udHJvbGxlZCBpbnB1dHMgYXJlIGxpa2UgdHJhZGl0aW9uYWwgSFRNTCBmb3JtIGlucHV0czpcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImh0bWxcIj57YDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XG5gfTwvQ29kZUJsb2NrPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIldpdGggdW5jb250cm9sbGVkIGlucHV0LCB0aGVyZSBpcyBubyB1cGRhdGluZyBvciBjaGFuZ2luZyBvZiBhbnkgc3RhdGVzLiBXaGVuIHdlIHVzZSB1bmNvbnRyb2xsZWQgaW5wdXQgaXMgbmVjZXNzYXJ5IHRvIHNldCBhIHJlZmVyZW5jZSBpbiBpbnB1dCBmb3IgbWFuaXB1bGF0aW5nIGFuZCByZWNlaXZlcyBldmVudHMsIGJ1dCB3aXRoIHVzZXJGb3JtIGl0IGlzbid0IG5lY2Vzc2FyeSBiZWNhdXNlIHVzZXJGb3JtIG1ha2VzIHRoaXMgZm9yIHVzLlxcblVuY29udHJvbGxlZCBpbnB1dHMgYXJlIHVzZWZ1bCB3aGVuIHBlcmZvcm1hbmNlIGlzIGVzc2VudGlhbC4gQnV0IGlmIHRoZSBmb3JtcyB0dXJuIHZlcnkgY29tcGxleCBkZWJvdW5jZSBmb3JtcyBhcmUgdGhlIGJlc3Qgb3B0aW9uLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJQcyAqIFlvdSBjYW4gdXNlIHVuY29udHJvbGxlZCBmb3JtIHdpdGggY3VzdG9tIGlucHV0cyBidXQgY3VzdG9tIGlucHV0cyB1c2Ugc3RhdGUgaW4geW91ciBpbnRlcm5hbCBsb2dpYy5cXG5JZiB5b3Ugd2FudCB0byB1c2UgdW5jb250cm9sbGVkIGZvcm0gd2l0aCBjdXN0b20gaW5wdXRzIGFuZCBuYXRpdmUgaW5wdXRzIHRoZSB1bmNvbnRyb2xsZWQgYXBwcm9hY2ggaXMgYXBwbGllZCBvbmx5IG5hdGl2ZSBpbnB1dHMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPjxfY29tcG9uZW50cy5hIGhyZWY9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZm9ybXMuaHRtbFwiPntcIlJlYWN0IERvY3NcIn08L19jb21wb25lbnRzLmE+PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkJ5IGRlZmF1bHQsIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHVzZSB1bmNvbnRyb2xsZWQgZm9ybSwgaXNuJ3QgbmVjZXNzYXJ5IHRvIHBhc3MgYW55IHZhbHVlIHRvIHVzZUZvcm0gaG9vayBpZiB5b3Ugd2FudCB0byB1c2UgdGhpcyBraW5kLlxcbkJ1dCB3aGVuIHlvdSB1c2UgdGhpcyBraW5kIG9mIGZvcm0sIGl0IGlzIG5lY2Vzc2FyeSB0byByZWFsaXplIHRoYXQgdmFsdWVzIGFuZCBldmVudHMgdmFsaWRhdGlvbiBhcmUgYXZhaWxhYmxlIG9ubHkgd2hlbiBvblN1Ym1pdCBldmVudCBpcyBkaXNwYXRjaGVkLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJXaXRoIHRoaXMgYXBwcm9hY2gsIGl0J3MgcG9zc2libGUgdG8gY29tcGxldGUgYSBmb3JtIHdpdGhvdXQgYW55IGV4dHJhIHJlbmRlcnMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJVc2FnZVwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+PF9jb21wb25lbnRzLmNvZGU+e1widXNlRm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgcHJvdmlkZXMgYSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJyZWdpc3RlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZnVuY3Rpb24sIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBhbGwgcHJvcGVydGllcyB0byBtYW5hZ2VyIGEgZmllbGQuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqc3hcIj57YFxuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJ0B1c2UtZm9ybS91c2UtZm9ybSdcblxuY29uc3QgdXNlRm9ybSA9IGNyZWF0ZUZvcm0oe1xuICBpbml0aWFsVmFsdWVzOiB7XG4gICAgbmFtZTogJ0FubmEnLFxuICAgIGFkZHJlc3M6IFtcbiAgICAgIHtcbiAgICAgICAgc3RyZWV0OiAnMTIzIE1haW4gU3QnLFxuICAgICAgICBjaXR5OiAnQW55dG93bicsXG4gICAgICB9LFxuICAgIF1cbiAgfVxufSlcbmB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVXNlIGRvdCBub3RhdGlvbiB0byBjcmVhdGUgYWR2YW5jZWQgb2JqZWN0cyBvciB0byBtYXAgb2JqZWN0IHZhbHVlcy4gVHlwZSBhbiBlbnRyeSBuYW1lIGFuZCB0eXBlIG9yIGFuIGVudHJ5IHByb3BlcnR5IG9iamVjdC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmJsb2NrcXVvdGU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiRG90IG5vdGF0aW9uIGlzIHVzZWQgdG8gYWNjZXNzIG5lc3RlZCBvYmplY3RzLiBGb3IgZXhhbXBsZSwgaWYgeW91IGhhdmUgYW4gb2JqZWN0IHdpdGggYSBuZXN0ZWQgb2JqZWN0LCB5b3UgY2FuIGFjY2VzcyB0aGUgbmVzdGVkIG9iamVjdCB1c2luZyBkb3Qgbm90YXRpb247IFwifTxfY29tcG9uZW50cy5jb2RlPntcImluZm8ubmFtZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIuXFxuVXNlIGRvdCBub3RhdGlvbiB0byBhY2Nlc3MgbmVzdGVkIGFycmF5cy4gRm9yIGV4YW1wbGUsIGlmIHlvdVxcbmhhdmUgYW4gb2JqZWN0IHdpdGggYSBuZXN0ZWQgYXJyYXksIHlvdSBjYW4gYWNjZXNzIHRoZSBuZXN0ZWQgYXJyYXkgdXNpbmcgZG90IG5vdGF0aW9uO1xcblwifTxfY29tcG9uZW50cy5jb2RlPntcImluZm8uYXJyYXlbMl1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08L19jb21wb25lbnRzLmJsb2NrcXVvdGU+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImpzeFwiPntgaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gJ0B1c2UtZm9ybS91c2UtZm9ybSdcbmltcG9ydCBTZWxlY3QgZnJvbSAnc2VsZWN0LWNvbXBvbmVudCdcblxuZnVudGlvbiBVc2VyRm9ybSgpe1xuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZVVzZXJGb3JtKClcblxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9PlxuICAgICAgPFdyYXBwZXIgY29tcG9uZW50PXtTZWxlY3R9IHJlZj17cmVnaXN0ZXIoJ25hbWVzJyl9IC8+XG4gICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICB7IHZhbHVlOiAnSm9obicsIGxhYmVsOiAnSm9obicgfSxcbiAgICAgICAgICB7IHZhbHVlOiAnSmFuZScsIGxhYmVsOiAnSmFuZScgfSxcbiAgICAgICAgICB7IHZhbHVlOiAnSmFjaycsIGxhYmVsOiAnSmFjaycgfSxcbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgPC9mb3JtPlxuICApXG59XG5gfTwvQ29kZUJsb2NrPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJEZW1vXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08RGVtbyB1cmw9XCJodHRwczovL2NvZGVzYW5kYm94LmlvL2VtYmVkL3VzZWZvcm0tb25zdWJtaXQtanZ6MXo/Zm9udHNpemU9MTQmYW1wO2hpZGVuYXZpZ2F0aW9uPTEmYW1wO3RoZW1lPWRhcmtcIiAvPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwib25zdWJtaXQtZm9ybS5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IHtcbiAgICBcInRpdGxlXCI6IFwiQ3JlYXRlIEZvcm1cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3JlYXRlIGZvcm0gaXMgYSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYSBmb3JtIGFuZCB5b3UgY2FuIHVzZSBpdCBhcyBhIGhvb2suXCJcbiAgfVxufTtcbmZ1bmN0aW9uIE1EWENvbnRlbnQocHJvcHMgPSB7fSkge1xuICBjb25zdCBfY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJjcmVhdGUtZm9ybS5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IHtcbiAgICBcInRpdGxlXCI6IFwiUXVpY2sgU3RhcnRcIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiWW91ciBmaXJzdCBzdGVwIHRvIGNyZWF0aW5nIGZvcm1zLlwiXG4gIH1cbn07XG5pbXBvcnQgRGVtbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2RlbW8nO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvZGVibG9jayc7XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiLFxuICAgIHA6IFwicFwiLFxuICAgIGgyOiBcImgyXCIsXG4gICAgYnI6IFwiYnJcIixcbiAgICBoMzogXCJoM1wiLFxuICAgIHVsOiBcInVsXCIsXG4gICAgbGk6IFwibGlcIixcbiAgICBjb2RlOiBcImNvZGVcIlxuICB9LCBwcm9wcy5jb21wb25lbnRzKSwge3dyYXBwZXI6IE1EWExheW91dH0gPSBfY29tcG9uZW50cztcbiAgY29uc3QgX2NvbnRlbnQgPSA8PjxfY29tcG9uZW50cy5oMT57XCJRdWljayBTdGFydFwifTwvX2NvbXBvbmVudHMuaDE+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSGV5IHRoZXJlIVwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJJdCdzIHJlYWxseSBnb29kIHRvIHNlZSB5b3UgaGVyZSwgb24gdGhpcyBmaXJzdCBwYWdlIHlvdSB3aWxsIHNlZSBzb21lIHN0ZXBzIHRvIGNyZWF0ZSBmb3JtcyBlYXNpbHkuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJEZXNjcmlwdGlvblwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiRm9ybXMgYXJlIGFuIGltcG9ydGFudCBwYXJ0IG9mIHdlYiBhcHBsaWNhdGlvbnMsIGFuZCB3aXRoIFJlYWN0IGl0J3MgcG9zc2libGUgdG8gY3JlYXRlIGdyZWF0cyBmb3JtcyxcIn08X2NvbXBvbmVudHMuYnIgLz57XCJcXG5cIn17XCJyZWFjdCBob29rcyBhcmUgYSBnYW1lLWNoYW5nZXIgd2hlbiB3ZSB0aGluayBhYm91dCBmb3Jtcywgd2l0aCBob29rcyBpcyBzaW1wbGUgdG8gY3JlYXRlIGZvcm1zLCBhbmQgeW91IGNhbiBnbyBvbiB3aXRob3V0IGxpYnJhcmllcy5cIn08X2NvbXBvbmVudHMuYnIgLz57XCJcXG5cIn17XCJCdXQgd2hlbiB3ZSB3YW50IHRvIGJ1aWxkIGNvbXBsZXggZm9ybXMgd2l0aCBuZXN0ZWQgZmllbGRzIGFuZCB2YWxpZGF0aW9ucywgbWlnaHQgYmUgYSBnb29kIGlkZWEgdG8gdXNlIGEgbGlicmFyeSwgYW5kIHlvdSBjYW4gZmluZCBhIGxvdCBvZiBsaWJyYXJpZXMgdG8gaGVscCB5b3UgdG8gY3JlYXRlIGZvcm1zLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+e1wiU28sIHdoeSBVc2VGb3JtP1wifTwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVGhlcmUgYXJlIHNvbWUgcmVhc29ucyB3aHkgeW91IGZhY2UgcHJvYmxlbXMgd2hlbiB5b3Ugd2FudCB0byBjcmVhdGUgZm9ybXMsIGFuZCB3aXRoIHVzZUZvcm0sIHlvdSBjYW4gc29sdmUgdGhlc2UgcHJvYmxlbXMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxiciAvPntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiU3RhdGUgbWFuYWdlbWVudCAtICBBIGNvdXBsZSBvZiB5ZWFycyBhZ28sIHlvdSBjb3VsZCB0aGluayB0aGF0IFJlZHV4IG9yIE1vYlggd2FzIGEgZ29vZCBzb2x1dGlvbiB0byBtYW5hZ2UgZm9ybSBzdGF0ZSBpbiByZWFjdCwgYnV0IHRoZXkgd2VyZW4ndC4gVG9kYXkgeW91IGNhbiB1c2UgaG9va3MgdG8gbWFuYWdlIHRoZSBmb3JtIHN0YXRlLCBob29rcyBsaWtlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVN0YXRld1wifTwvX2NvbXBvbmVudHMuY29kZT57XCIgYW5kIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVJlZHVjZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFyZSBhIGdvb2Qgc29sdXRpb24gdG8gbWFuYWdlIHRoZSBzdGF0ZS4gQnV0IG1hbmFnaW5nIHZhbHVlcywgdG91Y2hlZCBmaWVsZHMgYW5kIGVycm9ycyBjb3VsZCBiZSBhIHByb2JsZW0gaWYgeW91IGRvbid0IGhhdmUgYSBzdGFuZGFyZCB3YXkgdG8gbWFuYWdlIHRoZW0uIFVzdWFsbHksIHJlYWwgYXBwbGljYXRpb25zIHVzZSBuZXN0ZWQgb2JqZWN0cyBhcyByZXF1ZXN0IHBheWxvYWRzLCBhbmQgeW91IHNob3VsZCBrZWVwIGl0IHRvIHNlbmQgdGhlIGNvcnJlY3QgZGF0YSB0byB0aGUgc2VydmVyLCBtYW5hZ2UgbmVzdGVkIHZhbHVlcyBhbmQgZXJyb3JzIGNvdWxkIGJlIGEgcHJvYmxlbSB1c2luZyBqdXN0IFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVN0YXRlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlUmVkdWNlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiRXJyb3JzLVRvIGRlYWwgd2l0aCBlcnJvcnMsIHlvdSBjYW4gdXNlIHlvdXIgdmFsaWRhdGlvbiBzb2x1dGlvbiwgYW5kIGl0IGNhbiB3b3JrIHdlbGwgd2l0aCBzaW1wbGUgZm9ybXMsIGJ1dCB5b3UgY2FuIHN0dWNrIHdpdGggYSBsb3Qgb2YgZXJyb3JzIHdoZW4geW91IGhhdmUgbmVzdGVkIGZpZWxkcy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJUb3VjaGVkIGZpZWxkcyAtIE1heWJlIHlvdSB3YW50IHRvIHNob3cgYSBtZXNzYWdlIGVycm9yIGp1c3Qgd2hlbiB0aGUgZmllbGQgaXMgdG91Y2hlZCwgc28gaW4gb3JkZXIgdG8gZG8gdGhhdCB5b3UgbmVlZCB0byBtYW5hZ2UgdGhlIHRvdWNoZWQgZmllbGRzLCBpdCBjYW4gYmUgcmVhbGx5IGVhc3kgdG8gZG8gd2l0aCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VTdGF0ZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgYW5kIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVJlZHVjZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBidXQgeW91IGNhbid0IGRvIHRoYXQgdmVyeSB3ZWxsIHdpdGggXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlU3RhdGVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGFuZCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VSZWR1Y2VyXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiB3aGVuIHlvdSBoYXZlIG5lc3RlZCBmaWVsZHMuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiSGFuZGxlIHN1Ym1pdCAtIFdoZW4geW91IHdhbnQgdG8gaGFuZGxlIHN1Ym1pdCwgeW91IG5lZWQgdG8gbWFuYWdlIHRoZSBzdWJtaXQgZXZlbnQsIGl0J3MgY29udmVuaWVudCB3aGVuIHlvdSBoYXZlIGFuIGFscmVhZHkgc29sdXRpb24gdG8gZG8gdGhhdC5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PGJyIC8+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiVXNlRm9ybSBwcm92aWRlcyBhIHdheSB0byBjcmVhdGUgY29tcGxleCBmb3JtcyBlYXNpbHksIHRoaXMgaG9vayByZXR1cm5zIGFuIG9iamVjdCBvZiB2YWx1ZXMgXHUyMDBCXHUyMDBCaW4gdGhlIHNhbWUgc2hhcGUgdGhhdCBpdCByZWNlaXZlcywgdGhpcyBpcyBwb3NzaWJsZSB1c2luZyBkb3Qgbm90YXRpb24uIFRoZXJlZm9yZSxcXG5pdCBkb2VzIG5vdCBtYXR0ZXIgaWYgdGhlIG9iamVjdCBpcyBjb21wbGV4IG9yIGhhcyBtYW55IHByb3BlcnRpZXMgb3IgYW4gYXJyYXksXFxudGhlIHJlc3VsdCBpcyB0aGUgc2FtZS4gVGhpcyBwcm9jZXNzIHR1cm5zIHZlcnkgZWFzeSB0byBjcmVhdGUgZm9ybXMgZnJvbSBuZXN0ZWQgb2JqZWN0cyxcXG50aGUgc2FtZSBsYXllcnMgYW5kIHByb3BlcnRpZXMgYXJlIHJlcGxpY2F0ZWQgaW4gdGhlIGZpbmFsIG9iamVjdCxcXG50aGlzIGFwcHJvYWNoIHByZXZlbnRzIHlvdSB0byB0eXBlIG1vcmUgY29kZSB0byBjb252ZXJ0IGFuIG9iamVjdCBmcm9tIGZvcm0gdG8gYmFja2VuZCBvYmplY3QgdHlwZS4gVGhlIHNhbWUgcHJvY2VzcyBpcyByZWFsaXplZCB3aXRoIGVycm9ycyBvYmplY3RzIGFuZCB0b3VjaGVkIG9iamVjdHMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJXaGF0IHRvIGV4cGVjdCB3aXRoIHVzZUZvcm1cIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiUGVyZm9ybWVyIGZvcm1zIC0gdXNlRm9ybSBwcm92aWRlcyBhIHdheSB0byBjb21wbGV0ZSBhIGZvcm0gYW5kIHN1Ym1pdCBpdCB3aXRob3V0IGFueSByZXJlbmRlciwgYnkgZGVmYXVsdCB1c2VGb3JtIGNyZWF0ZXMgdW5jb250cm9sbGVkIGZvcm1zLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkVhc3kgdG8gd3JpdGUgLSB1c2VGb3JtIGhhcyBhbiBlYXN5IHdheSB0byB3cml0ZSBmb3JtcyB3aXRoIGxlc3MgY29kZS4gcmVnaXN0ZXIgZnVuY3Rpb24gcmV0dXJuIG5lY2Vzc2FyeSBpbnB1dCdzIHByb3BlcnRpZXMgYW5kIGl0IGlzIGFsbCB3ZSBuZWVkIHRvIG1hbmFnZSBhbGwgZXZlbnRzIGluIGEgbmF0aXZlIEhUTUwgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiaW5wdXRcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLiBXcml0aGUgZm9ybXMgd2l0aG91dCBmb3JtIHRhZy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJFYXN5IHZhbGlkYXRpb24gLSBCeSBkZWZhdWx0IHVzZUZvcm0gdXNlcyB5dXAgdmFsaWRhdGlvbiwgd2UgY2FuIHdyaXRlIGNvbXBsZXggdmFsaWRhdGlvbiB3aXRob3V0IGVmZm9ydC5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkluc3RhbGxhdGlvblwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImJhc2hcIj57YG5wbSBpbnN0YWxsIC0tc2F2ZSBAdXNlLWZvcm0vdXNlLWZvcm1cbiAgYH08L0NvZGVCbG9jaz57XCJcXG5cIn08Q29kZUJsb2NrIGxhbmd1YWdlPVwiYmFzaFwiPntgeWFybiBhZGQgQHVzZS1mb3JtL3VzZS1mb3JtXG4gIGB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIlVzYWdlXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJXaXRoIFwifTxfY29tcG9uZW50cy5jb2RlPntcImNyZWF0ZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHlvdSBjYW4gY3JlYXRlIGEgaG9vayBmb3JtIGFuZCB1c2UgaXQgd2hlcmV2ZXIgeW91IHdhbnQsXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxEZW1vIHVybD1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vZW1iZWQvdXNlZm9ybS1xdWljay1zdGFydC15cG94dT9mb250c2l6ZT0xNCZhbXA7aGlkZW5hdmlnYXRpb249MSZhbXA7dGhlbWU9ZGFya1wiIC8+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJxdWljay1zdGFydC5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IHtcbiAgICBcInRpdGxlXCI6IFwiQ29uY2VwdFwiLFxuICAgIFwiZGVzY3JpcHRpb25cIjogXCJIb3cgVXNlRm9ybSB3b3JrcywgYW5kIHdoeSB3ZSBkZWNpZGVkIHRvIGRvIGl0IHRoaXMgd2F5LlwiXG4gIH1cbn07XG5mdW5jdGlvbiBNRFhDb250ZW50KHByb3BzID0ge30pIHtcbiAgY29uc3QgX2NvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBoMTogXCJoMVwiLFxuICAgIHA6IFwicFwiLFxuICAgIGNvZGU6IFwiY29kZVwiLFxuICAgIGgyOiBcImgyXCIsXG4gICAgdWw6IFwidWxcIixcbiAgICBsaTogXCJsaVwiLFxuICAgIGgzOiBcImgzXCIsXG4gICAgYmxvY2txdW90ZTogXCJibG9ja3F1b3RlXCJcbiAgfSwgcHJvcHMuY29tcG9uZW50cyksIHt3cmFwcGVyOiBNRFhMYXlvdXR9ID0gX2NvbXBvbmVudHM7XG4gIGNvbnN0IF9jb250ZW50ID0gPD48X2NvbXBvbmVudHMuaDE+e1wiQ29uY2VwdFwifTwvX2NvbXBvbmVudHMuaDE+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiV2hlbiB5b3UgYXJlIHdvcmtpbmcgb24gYSBwcm9qZWN0LCB5b3UgbWlnaHQgd2FudCB0byB1c2UgYSBmb3JtIGluIGRpZmZlcmVudCBwbGFjZXMsIG9yIG1heWJlIHlvdSBoYXZlIGEgZm9ybSB3aXRoIGEgY291cGxlIG9mIHN0ZXBzIGluIGRpZmZlcmVudCBjb21wb25lbnRzLCBob3cgY291bGQgeW91IGhhbmRsZSB0aGlzP1wifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGUgbW9zdCBjb21tb24gYW5zd2VyIGlzIHRvIHVzZSBSZWFjdCBDb250ZXh0IEFQSSwgb3IgaWYgeW91IGFyZSB1c2luZyBhIGZvcm0gbGlicmFyeSBsaWtlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInJlYWN0LWhvb2stZm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIHlvdSBjYW4gdXNlIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VGb3JtQ29udGV4dFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgaG9vaywgZm9ybWlrIGhhcyBhIHNpbWlsYXIgQVBJLiBUaGVzZSBBUElTIGFyZSBiYXNlZCBvbiBSZWFjdCBDb250ZXh0IEFQSSwgc28geW91IGNhbiB1c2UgdGhlbSBpbiB0aGUgc2FtZSB3YXkuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkJ1dCBmb3IgbWUgdGhpcyBpcyBub3QgdGhlIGJlc3Qgd2F5IHRvIGRvIHRoYXQsIHRoZSBpZGVhIHRvIGhhdmUgYSBwcm92aWRlciB3aGVuZXZlciB5b3Ugd2FudCB0byBzaGFyZSBzb21ldGhpbmcgaXMgd2VpcmQgYW5kIG5vdCB2ZXJ5IHVzZWZ1bC4gQmVzaWRlcyBkZWNsYXJpbmcgYSBwcm92aWRlciB5b3Ugc2hvdWxkIHBhc3MgdGhlIHZhbHVlIHRvIHRoZSBwcm92aWRlciwgaXQncyByZWFsbHkgc3RyYW5nZSBmb3IgbWUsIGJlY2F1c2Ugd2UgY2FuIGRvIHRoYXQgd2l0aG91dCBhIHByb3ZpZGVyLCBieSBzdG9yaW5nIHRoZSBzdGF0ZSBpbiBzIGV4dGVybmFsIHN0b3JlIGFzIFp1c3RhbmQgZG8sIHRoZSBVc2VGb3JtIHVzZSBhbiBleHRlcm5hbCBzdG9yZSwgZm9yIHRoaXMgcmVhc29uLCB3ZSBkb24ndCBuZWVkIHRvIHVzZSBhIFJlYWN0IENvbnRleHQgQVBJIG9yIHNvbWV0aGluZyBzaW1pbGFyIHRvIHN0b3JlIG91ciBmb3JtIHN0YXRlLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08YnIgLz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiSG93IGEgc3RvcmUgd29ya3NcIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoZSBzdG9yZSBjb25jZXB0IGJlY29tZXMgdmVyeSBwb3B1bGFyIGluIFJlYWN0IGNvbW11bml0eSBieSB0aGUgd2F5IG9mIFJlZHV4IGFuZCBNb2JYIHdvcmtzLCBhIHN0b3JlIGlzIGEgcGxhY2Ugd2hlcmUgeW91IGNvdWxkIGtlZXAgeW91ciBzdGF0ZSwgaW4gdGhlIHN0b3JlIHlvdSBjYW4gdHJ1c3QsIGl0IG1lYW5zIHRoYXQgdGhlIHN0b3JlIGlzIHRoZSBzb3VyY2Ugb2YgdHJ1dGgsIGFuZCBldmVyeSBjaGFuZ2UgaW4gdGhlIHN0YXRlIGlzIGFsd2F5cyBhIGNoYW5nZSBpbiB0aGUgc3RvcmUuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRvIGRlbGl2ZXIgZXZlcnkgY2hhbmdlIHdlIG5lZWQgdG8gdXNlIGEgcGF0dGVybiBjYWxsZWQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiT2JzZXJ2YWJsZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIHNvIHdoZW5ldmVyIGEgY2hhbmdlIGhhcHBlbnMgaW4gdGhlIHN0YXRlLCB0aGUgb2JzZXJ2YWJsZSBjYW4gbm90aWZ5IHRoZSBzdWJzY3JpYmVycyB0aGF0IHRoZSBzdGF0ZSBoYXMgY2hhbmdlZC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiTm93IHRoYXQgd2Uga25vdyB0aGUgbWFpbiBjb25jZXB0IG9mIHRoZSBzdG9yZSBhbmQgdGhlIG9ic2VydmFibGUsIHdlIGNhbiBnbyBvbiBhbmQgdW5kZXJzdGFuZCBob3cgVXNlRm9ybSB1c2VzIGl0LlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiSG93IFVzZUZvcm0gd29ya3NcIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlVzZUZvcm0gdXNlcyBhbiBleHRlcm5hbCBzdG9yZSB0byBrZWVwIHRoZSBmb3JtIHN0YXRlLCBidXQgaXQncyBub3QgZW5vdWdoLCB3ZSBuZWVkIHRvIHNoYXJlIHRoZSBzdGF0ZSB3aXRoIG90aGVyIGNvbXBvbmVudHMgd2l0aG91dCBSZWFjdCBDb250ZXh0LiBGb3IgdGhpcyByZWFzb24sIHdlIGhhdmUgYSBmdW5jdGlvbiBjYWxsZWQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiY3JlYXRlRm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCI7XFxuVGhpcyBmdW5jdGlvbiBjcmVhdGVzIGEgZm9ybSBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHVzZWQgYXMgYSBob29rLCB0aGlzIGhvb2sgaXMgY29ubmVjdGVkIHRvIHRoZSBzdG9yZSwgc28gd2hlbmV2ZXIgdGhlIHN0b3JlIGNoYW5nZXMsIHRoZSBob29rIHdpbGwgYmUgbm90aWZpZWQgYW5kIHRoZSBmb3JtIHdpbGwgYmUgdXBkYXRlZC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiSW4gb3RoZXIgd29yZHMsIHRoZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJjcmVhdGVGb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmdW5jdGlvbiBjcmVhdGVzIGEgZm9ybSBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgaGFzIGFsbCByZXNvdXJjZXMgdG8gbWFuYWdlIHRoZSBmb3JtLCBpZiB5b3UgdXNlIGl0IHRlbiB0aW1lcywgaXQgd2lsbCBiZSB0aGUgc2FtZSBmb3JtIGFuZCB0aGUgc2FtZSBzdG9yZSBiZWluZyBtYW5hZ2VkIGluIGRpZmZlcmVudCBwbGFjZXMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkZvciB0aGF0IHJlYXNvbiwgd2UgY2FuIHVzZSB0aGUgc2FtZSBmb3JtIGluIGRpZmZlcmVudCBjb21wb25lbnRzIHdpdGhvdXQgcHJvdmlkZXJzIG9yIFJlYWN0IENvbnRleHQgQVBJLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiSW5pdGlhbCBTdGF0ZVwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiQXMgdGhlIGZpcnN0IHN0ZXAsIHdlIG5lZWQgdG8gZGVmaW5lIHRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBmb3JtLCB0aGlzIGlzIHRoZSBzdGF0ZSB0aGF0IHdpbGwgYmUgdXNlZCB3aGVuIHRoZSBmb3JtIGlzIGNyZWF0ZWQsIHdlIGhhdmUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiaW5pdGlhbFZhbHVlc1wifTwvX2NvbXBvbmVudHMuY29kZT57XCIgYW5kIFwifTxfY29tcG9uZW50cy5jb2RlPntcImluaXRpYWxFcnJvcnNcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHByb3BlcnRpZXMsIFwifTxfY29tcG9uZW50cy5jb2RlPntcImluaXRpYWxUb3VjaGVkXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgYWxsIG9mIHRoZW0gYXJlIG9wdGlvbmFsLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiRm9ybSBWYWxpZGF0aW9uXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJUaGUgdmFsaWRhdGlvbiBwcm9jZXNzIGNhbiBiZSBkb25lIGluIHR3byB3YXlzOlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlRoZSBmaXJzdCBhbmQgbW9zdCBjb21tb24gaXMgdG8gdXNlIGEgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widmFsaWRhdGlvblNjaGVtYVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIHRoaXMgaXMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIHRoZSB2YWxpZGF0aW9uIHJ1bGVzLCB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widmFsaWRhdGlvblNjaGVtYVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgc2hvdWxkIGhhdmUgdGhlIHNhbWUgc2hhcGUgZnJvbSB0aGUgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiaW5pdGlhbFZhbHVlc1wifTwvX2NvbXBvbmVudHMuY29kZT57XCIgb2JqZWN0LCBzbyBpZiB5b3UgaGF2ZSBhIGZvcm0gd2l0aCBhIFwifTxfY29tcG9uZW50cy5jb2RlPntcIm5hbWVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZpZWxkLCB5b3Ugc2hvdWxkIGhhdmUgYSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJuYW1lXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBmaWVsZCBpbiB0aGUgdmFsaWRhdGlvblNjaGVtYSwgdGhpcyBydWxlIGlzIGFwcGxpZWQgdG8gbmVzdGVkIGZpZWxkcywgd2UgcmVjb21tZW5kIHRvIHVzZSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJZdXBcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGxpYnJhcnkgZm9yIHRoaXMuIFRoZSBmaXJzdCB3YXkgaXMgdGhlIHJlY29tbWVuZGVkIHdheSB0byB1c2UgdmFsaWRhdGlvbiwgYmVjYXVzZSBpdCdzIHRoZSBtb3N0IHNpbXBsZSBhbmQgZWFzeSB0byB1c2UsIGFuZCB5b3UgaGF2ZSBhIHBvd2VyZnVsIHZhbGlkYXRpb24gbGlicmFyeS4gSWYgeW91IGRlY2lkZSB0byB1c2UgdGhpcyB3YXksIHlvdSBzaG91bGQgY3JlYXRlIGFuZCB1c2UgdGhlIFwifTxfY29tcG9uZW50cy5jb2RlPntcInZhbGlkYXRpb25TY2hlbWFcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHdoZW4geW91IGNyZWF0ZSB0aGUgZm9ybS5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJUaGUgc2Vjb25kIHdheSBpcyB0byB1c2UgYSBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ2YWxpZGF0ZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZnVuY3Rpb24sIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgZXZlcnkgdGltZSB0aGVuIHRoZSBmb3JtIGlzIHVwZGF0ZWQsIGFuZCBpdCB3aWxsIHJlY2VpdmUgdGhlIGZvcm0gdmFsdWVzIGFuZCB0aGUgZm9ybSBlcnJvcnMsIGFuZCBpdCBzaG91bGQgcmV0dXJuIGFuIG9iamVjdCB3aXRoIHRoZSBuZXcgZm9ybSBlcnJvcnMuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08L19jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJOYXRpdmUgZWxlbWVudHMgdnMgQ3VzdG9tIGVsZW1lbnRzXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJJbiB3ZWIgZGV2ZWxvcG1lbnQgd2UgY2FuIGZpbmQgbmF0aXZlIGVsZW1lbnRzIGxpa2UgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPGlucHV0PlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgYW5kIFwifTxfY29tcG9uZW50cy5jb2RlPntcIjxzZWxlY3Q+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgY3VzdG9tIGVsZW1lbnRzIGxpa2UgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPFNlbGVjdGJveC8+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPERhdGVQaWNrZXIvPlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsXFxudGhlcmUgYXJlIHNvbWUgZGlmZmVyZW5jZXMgYmV0d2VlbiB0aGVtLCBuYXRpdmUgZWxlbWVudHMgYXJlIEhUTUwgZWxlbWVudHMgdGhhdCBhcmUgY3JlYXRlZCBieSB0aGUgYnJvd3NlciwgYW5kIGN1c3RvbSBlbGVtZW50cyBhcmUgY3JlYXRlZCBieSB0aGUgZGV2ZWxvcGVyLFxcbnRoZSBkZXZlbG9wZXIgY2FuIHVzZSBuYXRpdmUgZWxlbWVudHMgdG8gYnVpbGQgY3VzdG9tIGVsZW1lbnRzLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJCeSBkZWZhdWx0IFwifTxfY29tcG9uZW50cy5jb2RlPntcImNyZWF0ZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGNyZWF0ZSBhIGZvcm0gdXNpbmcganVzdCBhIHJlZmVyZW5jZSB0byBjb21tdW5pY2F0ZSB3aXRoIGZpZWxkcywgc2luY2UgZmllbGRzIGxpa2UgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiPGlucHV0PlwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgYW5kIFwifTxfY29tcG9uZW50cy5jb2RlPntcIjxzZWxlY3Q+XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhcmUgbmF0aXZlIGVsZW1lbnRzLCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJjcmVhdGVGb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBjYW4gZG8gaXQgd2l0aG91dCBwcm9ibGVtcyxcXG5idXQgaWYgeW91IHdhbnQgdG8gdXNlIGN1c3RvbSBlbGVtZW50cywgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiY3JlYXRlRm9ybVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgY2FuJ3QgZG8gaXQgYmVjYXVzZSBtb3N0IG9mIHRoZW0gZG9lc24ndCBoYXZlIGEgcmVmZXJlbmNlIHRvIG5hdGl2ZSBlbGVtZW50cywgYW5kIGN1c3RvbSBlbGVtZW50cyBub3JtYWxseSBoYXZlIGFuIGludGVybmFsIHN0YXRlLCBzbyB0byB3b3JrIHdpdGggY3VzdG9tIGVsZW1lbnRzIGFzIG5hdGl2ZSBlbGVtZW50cywgd2UgbmVlZCBhIFwifTxfY29tcG9uZW50cy5jb2RlPntcIldyYXBwZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGNvbXBvbmVudC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIldyYXBwZXJcIn08L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoZSBXcmFwcGVyIGNvbXBvbmVudCB3aWxsIGJlIHVzZWQgdG8gd3JhcCB0aGUgY3VzdG9tIGVsZW1lbnRzLCBhbmQgaXQgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSBhIHJlZmVyZW5jZSB0byB0aGUgbmF0aXZlIGVsZW1lbnQuIChDdXN0b20gZWxlbWVudHMgc2hvdWxkIGhhdmUgY29tbW9ucyBwcm9wZXJ0aWVzIGxpa2UgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widmFsdWVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJvbkNoYW5nZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIFwifTxfY29tcG9uZW50cy5jb2RlPntcIm9uQmx1clwifTwvX2NvbXBvbmVudHMuY29kZT57XCIpIGFuZCBpdCB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIGEgcmVmZXJlbmNlIHRvIHRoZSBuYXRpdmUgZWxlbWVudC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmJsb2NrcXVvdGU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiV2UgbmVlZCB0byB1c2UgYSBXcmFwcGVyIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCB0byByZXJlbmRlciB0aGUgZm9ybSBldmVyeSB0aW1lIHRoZSBjdXN0b20gZWxlbWVudCBjaGFuZ2VzLiBXcmFwcGVyIHByZXZlbnRzIHRoaXMgYW5kIG1ha2VzIGp1c3QgdGhlIHNwZWNpZmljIGN1c3RvbSBlbGVtZW50IHJlcmVuZGVyLlwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08L19jb21wb25lbnRzLmJsb2NrcXVvdGU+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkNvbnRyb2xsZWQgdnMgVW5jb250cm9sbGVkIHZzIERlYm91bmNlZCBmb3Jtc1wifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiQnkgZGVmYXVsdCwgVXNlRm9ybSBjcmVhdGVzIGFuIGFnbm9zdGljIGZvcm0sIHdoaWNoIG1lYW5zIHRoYXQgdGhlIGZvcm0gY2FuIGJlIHVzZWQgYXMgeW91IHdpc2gsIGFzIGNvbnRyb2xsZWQsIHVuY29udHJvbGxlZCBvciBkZWJvdW5jZWQuIFRoaXMgY29uZmlndXJhdGlvbiBzaG91bGQgYmUgcHJvdmlkZWQgd2hlbiB5b3UgYXJlIGdvaW5nIHRvIHVzZSBpdC5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJEZWJvdW5jZWQgZm9ybXMgYXJlIGZvcm1zIHRoYXQgYXJlIHVwZGF0ZWQgb25seSB3aGVuIHRoZSB1c2VyIHN0b3BzIHR5cGluZywgdGhpcyBpcyB1c2VmdWwgd2hlbiB5b3UgaGF2ZSBhIGZvcm0gd2l0aCBhIGxvdCBvZiBmaWVsZHMsIGFuZCB5b3UgZG9uJ3Qgd2FudCB0byB1cGRhdGUgdGhlIGZvcm0gZXZlcnkgdGltZSB0aGUgdXNlciB0eXBlcywgYnV0IG9ubHkgd2hlbiB0aGUgdXNlciBzdG9wcyB0eXBpbmcuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiQ29udHJvbGxlZCBmb3JtcyBhcmUgZm9ybXMgdGhhdCBhcmUgdXBkYXRlZCB3aGVuZXZlciB0aGUgdXNlciB0eXBlcywgdGhpcyBpcyB1c2VmdWwgaWYgeW91IHdhbnQgdG8gZ2l2ZSBxdWljayBmZWVkYmFjayB0byB0aGUgdXNlciwgbGlrZSBhIGZvcm0gd2l0aCBhIFwifTxfY29tcG9uZW50cy5jb2RlPntcIm5hbWVcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIGZpZWxkLCB5b3UgY2FuIHVzZSBhIGNvbnRyb2xsZWQgZm9ybSB0byBzaG93IHRoZSB1c2VyIHRoZSBlcnJvciB3aGVuIHRoZSBmaWVsZCBpcyBlbXB0eSBiZWZvcmUgdG8gc3VibWl0IHRoZSBmb3JtLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIlVuY29udHJvbGxlZCBmb3JtcyBhcmUgZm9ybXMgdGhhdCBhcmUgdXBkYXRlZCBqdXN0IHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkLCB3aGljaCBtZWFucyB0aGF0IHRoZSBmb3JtIGNhbiBiZSBmdWxmaWxsZWQgd2l0aCB0aGUgdmFsdWVzIG9mIHRoZSBmb3JtIGFuZCBzdWJtaXR0ZWQgd2l0aG91dCByZXJlbmRlcmluZyB0aGUgZm9ybS5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IHRoaXMgaW4gdGhlIHBhZ2VzIGZvciBcIn08X2NvbXBvbmVudHMuY29kZT57XCJjb250cm9sbGVkXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widW5jb250cm9sbGVkXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiwgYW5kIFwifTxfY29tcG9uZW50cy5jb2RlPntcImRlYm91bmNlZFwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgZm9ybXMuXCJ9PC9fY29tcG9uZW50cy5wPjwvPjtcbiAgcmV0dXJuIE1EWExheW91dCA/IDxNRFhMYXlvdXQgey4uLnByb3BzfT57X2NvbnRlbnR9PC9NRFhMYXlvdXQ+IDogX2NvbnRlbnQ7XG59XG5leHBvcnQgZGVmYXVsdCBNRFhDb250ZW50O1xuXG5cbmV4cG9ydCBjb25zdCBmaWxlbmFtZSA9IFwiY29uY2VwdC5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIiwgIlxuLypAanN4UnVudGltZSBjbGFzc2ljIEBqc3ggUmVhY3QuY3JlYXRlRWxlbWVudCBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgY29uc3QgYXR0cmlidXRlcyA9IHtcbiAgXCJtZXRhXCI6IHtcbiAgICBcInRpdGxlXCI6IFwiUmVhZG1lXCIsXG4gICAgXCJkZXNjcmlwdGlvblwiOiBcIllvdXIgZmlzdCBzdGVwIHRvIGNyZWF0ZSBmb3JtIGVhc2lseSB3aXRob3V0IGVmZm9ydC5cIlxuICB9XG59O1xuaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9kZW1vJztcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb2RlYmxvY2snO1xuZnVuY3Rpb24gTURYQ29udGVudChwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IF9jb21wb25lbnRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcDogXCJwXCIsXG4gICAgaW1nOiBcImltZ1wiLFxuICAgIGgxOiBcImgxXCIsXG4gICAgYmxvY2txdW90ZTogXCJibG9ja3F1b3RlXCIsXG4gICAgY29kZTogXCJjb2RlXCIsXG4gICAgaDM6IFwiaDNcIixcbiAgICBhOiBcImFcIixcbiAgICBoMjogXCJoMlwiLFxuICAgIGJyOiBcImJyXCIsXG4gICAgdWw6IFwidWxcIixcbiAgICBsaTogXCJsaVwiXG4gIH0sIHByb3BzLmNvbXBvbmVudHMpLCB7d3JhcHBlcjogTURYTGF5b3V0fSA9IF9jb21wb25lbnRzO1xuICBjb25zdCBfY29udGVudCA9IDw+PF9jb21wb25lbnRzLnA+PF9jb21wb25lbnRzLmltZyBzcmM9XCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vdXNlLWZvcm0vdXNlLWZvcm0vbWFpbi9pbWcvbG9nbzMucG5nXCIgYWx0PVwiTG9nb1wiIC8+PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMT57XCJXZWxjb21lIHRvIHVzZUZvcm0gXHVEODNEXHVEQzRCXCJ9PC9fY29tcG9uZW50cy5oMT57XCJcXG5cIn08X2NvbXBvbmVudHMuYmxvY2txdW90ZT57XCJcXG5cIn08X2NvbXBvbmVudHMucD48X2NvbXBvbmVudHMuY29kZT57XCJ1c2VGb3JtXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBwcm92aWRlIGEgd2F5IHRvIGNyZWF0ZSBjb21wbGV4IGZvcm1zIGVhc2lseS5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy5ibG9ja3F1b3RlPntcIlxcblwifTxfY29tcG9uZW50cy5oMz57XCJcdUQ4M0NcdURGRTAgXCJ9PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vdXNlZm9ybS5vcmdcIj57XCJIb21lcGFnZVwifTwvX2NvbXBvbmVudHMuYT48L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5oMz57XCJcdTI3MjggXCJ9PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vY29kZXNhbmRib3guaW8vcy91c2Vmb3JtLTJ1Mmp1XCI+e1wiRGVtb1wifTwvX2NvbXBvbmVudHMuYT48L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJEZXNjcmlwdGlvblwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiRm9ybXMgYXJlIGFuIGltcG9ydGFudCBwYXJ0IG9mIHdlYiBhcHBsaWNhdGlvbnMsIGFuZCB3aXRoIHJlYWN0IGl0J3MgcG9zc2libGUgdG8gY3JlYXRlIGdyZWF0cyBmb3JtcyxcIn08X2NvbXBvbmVudHMuYnIgLz57XCJcXG5cIn17XCJyZWFjdCBob29rcyBhcmUgYSBnYW1lLWNoYW5nZXIgd2hlbiB3ZSB0aGluayBhYm91dCBmb3Jtcywgd2l0aCBob29rcyBpcyBzaW1wbGUgdG8gY3JlYXRlIGZvcm1zLCBhbmQgeW91IGNhbiBnbyBvbiB3aXRob3V0IGxpYnJhcmllcy5cIn08X2NvbXBvbmVudHMuYnIgLz57XCJcXG5cIn17XCJCdXQgd2hlbiB3ZSB3YW50IHRvIGJ1aWxkIGNvbXBsZXggZm9ybXMgd2l0aCBuZXN0ZWQgZmllbGRzIGFuZCB2YWxpZGF0aW9ucywgbWFpZ2h0IGJlIGEgZ29vZCBpZGVhIHRvIHVzZSBhIGxpYnJhcnksIGFuZCB5b3UgY2FuIGZpbmQgYSBsb3Qgb2YgbGlicmFyaWVzIHRvIGhlbHAgeW91IHRvIGNyZWF0ZSBmb3Jtcy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgzPntcIlNvLCB3aHkgVXNlRm9ybT9cIn08L19jb21wb25lbnRzLmgzPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoZXJlIGFyZSBzb21lIHJlYXNvbnMgd2h5IHlvdSBmYWNlIHByb2JsZW1zIHdoZW4geW91IHdhbnQgdG8gY3JlYXRlIGZvcm1zLCBhbmQgd2l0aCB1c2VGb3JtIHlvdSBjYW4gc29sdmUgdGhpcyBwcm9ibGVtcy5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PGJyIC8+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnVsPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJTdGF0ZSBtYW5hZ2VtZW50IC0gIEEgY291cGxlIG9mIHllZWFycyBhZ28sIHlvdSBjb3VsZCB0aGluayB0aGF0IFJlZHV4IG9yIE1vYlggd2FzICBhIGdvb2Qgc29sdXRpb24gdG8gbWFuYWdlIGZvcm0gc3RhdGUgaW4gcmVhY3QsIGJ1dCB0aGV5IHdhc24ndC4gVG9kYXkgeW91IGNhbiB1c2UgaG9va3MgdG8gbWFuYWdlIGZvcm0gc3RhdGUsIGhvb2tzIGxpa2UgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlU3RhdGV3XCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlUmVkdWNlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgYXJlIGEgZ29vZCBzb2x1dGlvbiB0byBtYW5hZ2Ugc3RhdGUuIEJ1dCBtYW5hZ2UgdmFsdWVzLCB0b3VjaGVkIGZpZWxkcyBhbmQgZXJyb3JzIGNvdWxkIGJlIGEgcHJvYmxlbSBpZiB5b3UgZG9uJ3QgaGF2ZSBhIHN0YW5kYXJkIHdheSB0byBtYW5hZ2VyIHRoZW0uIFVzdWFsbHkgcmVhbCBhcHBsaWNhdGlvbnMgdXNlIG5lc3RlZCBvYmplY3RzIGFzIHJlcXVlc3QgcGF5bG9vYWRzLCBhbmQgeW91IHNob3VsZCBrZWVwIGl0IGluIG9yZGVyIHRvIHNlbmQgdGhlIGNvcnJlY3QgZGF0YSB0byB0aGUgc2VydmVyLCBtYW5hZ2UgbmVzdGVkIHZhbHVlcyBhbmQgZXJyb3JzIGNvdWxkIGJlIGEgcHJvYmxlbSB1c2luZyBqdXN0IFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVN0YXRlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlUmVkdWNlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiRXJyb3JzIC0gVG8gZGVhbCB3aXRoIGVycm9ycywgeW91IGNhbiB1c2UgeW91ciB3b3VuIHZhbGlkYXRpb24gc29sdXRpb24sIGFuZCBpdCBjYW4gd29yayB3ZWxsIHdpdGggc2ltcGxlIGZvcm1zLCBidXQgeW91IGNhbiBzdHVjayB3aXRoIGEgbG90IG9mIGVycm9ycyB3aGVuIHlvdSBoYXZlIG5lc3RlZCBmaWVsZHMuXCJ9PC9fY29tcG9uZW50cy5saT57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiVG91Y2hlZCBmaWVsZHMgLSBNYXliZSB5b3Ugd2FudCB0byBzaG93IGEgbWVzc2FnZSBlcnJvciBqdXN0IHdoZW4gdGhlIGZpZWxkIGlzIHRvdWNoZWQsIHNvIGluIG9yZGVyIHRvIGRvIHRoYXQgeW91IG5lZWQgdG8gbWFuYWdlciB0aGUgdG91Y2hlZCBmaWVsZHMsIGl0IGNhbiBiZSByZWFsbHkgZWFzeSB0byBkbyB3aXRoIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVN0YXRlXCJ9PC9fY29tcG9uZW50cy5jb2RlPntcIiBhbmQgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1widXNlUmVkdWNlclwifTwvX2NvbXBvbmVudHMuY29kZT57XCIsIGJ1dCB5b3UgY2FuJ3QgZG8gdGhhdCB2ZXJ5IHdlbGwgd2l0aCBcIn08X2NvbXBvbmVudHMuY29kZT57XCJ1c2VTdGF0ZVwifTwvX2NvbXBvbmVudHMuY29kZT57XCIgYW5kIFwifTxfY29tcG9uZW50cy5jb2RlPntcInVzZVJlZHVjZXJcIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHdoZW4geW91IGhhdmUgbmVzdGVkIGZpZWxkcy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJIYW5kbGUgc3VibWl0IC0gV2hlbiB5b3Ugd2FudCB0byBoYW5kbGUgc3VibWl0LCB5b3UgbmVlZCB0byBtYW5hZ2UgdGhlIHN1Ym1pdCBldmVudCwgaXQncyByZWFsbHkgY29udmluaWVudCB3aGVuIHlvdSBoYXZlIGEgYWxyZWFkeSBzb2x1dGlvbiB0byBkbyB0aGF0LlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PC9fY29tcG9uZW50cy51bD57XCJcXG5cIn08YnIgLz57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJVc2VGb3JtIHByb3ZpZGVzIGEgd2F5IHRvIGNyZWF0ZSBjb21wbGV4IGZvcm1zIGVhc2lseSwgdGhpcyBob29rIHJldHVybnMgYW4gb2JqZWN0IG9mIHZhbHVlcyBcdTIwMEJcdTIwMEJpbiB0aGUgc2FtZSBzaGFwZSB0aGF0IGl0IHJlY2VpdmVzLCB0aGlzIGlzIHBvc3NpYmxlIHVzaW5nIGRvdCBub3RhdGlvbi4gVGhlcmVmb3JlLFxcbml0IGRvZXMgbm90IG1hdHRlciBpZiB0aGUgb2JqZWN0IGlzIGNvbXBsZXggb3IgaGFzIG1hbnkgcHJvcGVydGllcyBvciBhcnJheSxcXG50aGUgcmVzdWx0IGlzIHRoZSBzYW1lLiBUaGlzIHByb2Nlc3MgdHVybnMgdmVyeSBlYXNpbHkgdG8gY3JlYXRlIGZvcm1zIGZyb20gYW4gb2JqZWN0IHdpdGggc2V2ZXJhbCBsYXllcnMsXFxudGhlIHNhbWUgbGF5ZXJzIGFuZCBwcm9wZXJ0aWVzIGFyZSByZXBsaWNhdGVkIGluIHRoZSBmaW5hbCBvYmplY3QsXFxudGhpcyBhcHByb2FjaCBwcmV2ZW50cyB5b3UgdG8gdHlwZSBtb3JlIGNvZGUgdG8gY29udmVydCBhbiBvYmplY3QgZnJvbSBmb3JtIHRvIGJhY2tlbmQgb2JqZWN0IHR5cGUuIFRoZSBzYW1lIHByb2Nlc3MgaXMgcmVhbGl6ZWQgd2l0aCBlcnJvcnMgb2JqZWN0IGFuZCB0b3VjaGVkIG9iamVjdHMuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5oMj57XCJXaGF0IHRvIGV4cGVjdCB3aXRoIHVzZUZvcm1cIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy51bD57XCJcXG5cIn08X2NvbXBvbmVudHMubGk+e1wiUGVyZm9ybWVyIGZvcm1zIC0gdXNlRm9ybSBwcm92aWRlcyBhIHdheSB0byBjb21wbGV0ZSBhIGZvcm0gYW5kIHN1Ym1pdCBpdCB3aXRob3V0IGFueSByZXJlbmRlciwgYnkgZGVmYXVsdCB1c2VGb3JtIGNyZWF0ZXMgdW5jb250cm9sbGVkIGZvcm1zLlwifTwvX2NvbXBvbmVudHMubGk+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmxpPntcIkVhc3kgdG8gd3JpdGUgLSB1c2VGb3JtIGhhcyBhbiBlYXN5IHdheSB0byB3cml0ZSBmb3JtcyB3aXRoIGxlc3MgY29kZS4gcmVnaXN0ZXIgZnVuY3Rpb24gcmV0dXJuIG5lY2Vzc2FyeSBpbnB1dCdzIHByb3BlcnRpZXMgYW5kIGl0IGlzIGFsbCB3ZSBuZWVkIHRvIG1hbmFnZSBhbGwgZXZlbnRzIGluIGEgbmF0aXZlIEhUTUwgXCJ9PF9jb21wb25lbnRzLmNvZGU+e1wiaW5wdXRcIn08L19jb21wb25lbnRzLmNvZGU+e1wiLiBXcml0aGUgZm9ybXMgd2l0aG91dCBmb3JtIHRhZy5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTxfY29tcG9uZW50cy5saT57XCJFYXN5IHZhbGlkYXRpb24gLSBCeSBkZWZhdWx0IHVzZUZvcm0gdXNlcyB5dXAgdmFsaWRhdGlvbiwgd2UgY2FuIHdyaXRlIGNvbXBsZXggdmFsaWRhdGlvbiB3aXRob3V0IGVmZm9ydC5cIn08L19jb21wb25lbnRzLmxpPntcIlxcblwifTwvX2NvbXBvbmVudHMudWw+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIkluc3RhbGxhdGlvblwifTwvX2NvbXBvbmVudHMuaDI+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImJhc2hcIj57YG5wbSBpbnN0YWxsIC0tc2F2ZSBAdXNlLWZvcm0vdXNlLWZvcm1cbiAgYH08L0NvZGVCbG9jaz57XCJcXG5cIn08Q29kZUJsb2NrIGxhbmd1YWdlPVwiYmFzaFwiPntgeWFybiBhZGQgQHVzZS1mb3JtL3VzZS1mb3JtXG4gIGB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIlVzYWdlXCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJXaXRoIFwifTxfY29tcG9uZW50cy5jb2RlPntcImNyZWF0ZUZvcm1cIn08L19jb21wb25lbnRzLmNvZGU+e1wiIHlvdSBjYW4gY3JlYXRlIGEgaG9vayBmb3JtIGFuZCB1c2UgaXQgd2hlcmV2ZXIgeW91IHdhbnQsXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxiciAvPntcIlxcblwifTxDb2RlQmxvY2sgbGFuZ3VhZ2U9XCJqYXZhc2NyaXB0XCI+e2BpbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnQHVzZS1mb3JtL2NvcmUnXG5cbmNvbnN0IHVzZVVzZXJGb3JtID0gY3JlYXRlRm9ybSh7XG4gIGluaXRpYWxWYWx1ZXM6IHtcbiAgICBuYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICAgIGNvbmZpcm1QYXNzd29yZDogJycsXG4gIH0sXG4gfSlcbmB9PC9Db2RlQmxvY2s+e1wiXFxuXCJ9PENvZGVCbG9jayBsYW5ndWFnZT1cImpzeFwiPntgXG5mdW50aW9uIFVzZXJGb3JtKCl7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlVXNlckZvcm0oKVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcignbmFtZScpfSAvPlxuICAgICAgPGlucHV0IHJlZj17cmVnaXN0ZXIoJ2VtYWlsJyl9IC8+XG4gICAgICA8aW5wdXQgcmVmPXtyZWdpc3RlcigncGFzc3dvcmQnKX0gLz5cbiAgICAgIDxpbnB1dCByZWY9e3JlZ2lzdGVyKCdjb25maXJtUGFzc3dvcmQnKX0gLz5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuYH08L0NvZGVCbG9jaz57XCJcXG5cIn08X2NvbXBvbmVudHMuaDM+PF9jb21wb25lbnRzLmEgaHJlZj1cImh0dHBzOi8vZGV2LnRvL2p1Y2lhbjAvYnVpbGRpbmctZm9ybXMtd2l0aC11c2Vmb3JtLTFjbmFcIj57XCJQb3N0XCJ9PC9fY29tcG9uZW50cy5hPjwvX2NvbXBvbmVudHMuaDM+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIlx1RDgzRVx1REQxRCBDb250cmlidXRpbmdcIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkNvbnRyaWJ1dGlvbnMsIGlzc3VlcyBhbmQgZmVhdHVyZSByZXF1ZXN0cyBhcmUgd2VsY29tZSFcIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLnA+e1wiRmVlbCBmcmVlIHRvIGNoZWNrIFwifTxfY29tcG9uZW50cy5hIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdXNlLWZvcm0vdXNlLWZvcm0vaXNzdWVzXCI+e1wiaXNzdWVzIHBhZ2VcIn08L19jb21wb25lbnRzLmE+e1wiLiBZb3UgY2FuIGFsc28gdGFrZSBhIGxvb2sgYXQgdGhlIFwifTxfY29tcG9uZW50cy5hIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vSnVjaWFuMC91c2UtZm9ybS9ibG9iL21haW4vQ09OVFJJQlVUSU5HLm1kXCI+e1wiY29udHJpYnV0aW5nIGd1aWRlXCJ9PC9fY29tcG9uZW50cy5hPntcIi5cIn08L19jb21wb25lbnRzLnA+e1wiXFxuXCJ9PF9jb21wb25lbnRzLmgyPntcIlNob3cgeW91ciBzdXBwb3J0XCJ9PC9fY29tcG9uZW50cy5oMj57XCJcXG5cIn08X2NvbXBvbmVudHMucD57XCJHaXZlIGEgXHUyQjUwXHVGRTBGIGlmIHRoaXMgcHJvamVjdCBoZWxwZWQgeW91IVwifTwvX2NvbXBvbmVudHMucD57XCJcXG5cIn08X2NvbXBvbmVudHMuaDI+e1wiXHVEODNEXHVEQ0REIExpY2Vuc2VcIn08L19jb21wb25lbnRzLmgyPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIkNvcHlyaWdodCBcdTAwQTkgMjAyMCBcIn08X2NvbXBvbmVudHMuYSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3VzZS1mb3JtXCI+e1widXNlRm9ybVwifTwvX2NvbXBvbmVudHMuYT57XCIuXCJ9PC9fY29tcG9uZW50cy5wPntcIlxcblwifTxfY29tcG9uZW50cy5wPntcIlRoaXMgcHJvamVjdCBpcyBcIn08X2NvbXBvbmVudHMuYSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3VzZS1mb3JtL3VzZS1mb3JtL2Jsb2IvNTNkZWJkNjk4NjY1MGY3NjU2MTc5NWYyMDY5ZDZlZWJjNWRiNmM2NS9MSUNFTlNFXCI+e1wiTUlUXCJ9PC9fY29tcG9uZW50cy5hPntcIiBsaWNlbnNlZC5cIn08L19jb21wb25lbnRzLnA+PC8+O1xuICByZXR1cm4gTURYTGF5b3V0ID8gPE1EWExheW91dCB7Li4ucHJvcHN9PntfY29udGVudH08L01EWExheW91dD4gOiBfY29udGVudDtcbn1cbmV4cG9ydCBkZWZhdWx0IE1EWENvbnRlbnQ7XG5cblxuZXhwb3J0IGNvbnN0IGZpbGVuYW1lID0gXCJpbmRleC5tZHhcIjtcbmV4cG9ydCBjb25zdCBoZWFkZXJzID0gdHlwZW9mIGF0dHJpYnV0ZXMgIT09IFwidW5kZWZpbmVkXCIgJiYgYXR0cmlidXRlcy5oZWFkZXJzO1xuZXhwb3J0IGNvbnN0IG1ldGEgPSB0eXBlb2YgYXR0cmlidXRlcyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhdHRyaWJ1dGVzLm1ldGE7XG5leHBvcnQgY29uc3QgbGlua3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVs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
