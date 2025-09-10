import {
  logo_light_default
} from "/build/_shared/chunk-3HVHQP7I.js";
import {
  help_circle_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  Button_default,
  Container_default,
  Nav_default,
  Navbar_default
} from "/build/_shared/chunk-KBRVI47E.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  Link,
  useLocation
} from "/build/_shared/chunk-OQSN7HAE.js";
import {
  createHotContext
} from "/build/_shared/chunk-7UABGPEU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/auth/SimpleHeader.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/auth/SimpleHeader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/auth/SimpleHeader.jsx"
  );
  import.meta.hot.lastModified = "1732600247989.783";
}
var SimpleHeader = () => {
  _s();
  const {
    pathname
  } = useLocation();
  const loginPath = pathname.match("/auth/login/simple");
  const signupPath = pathname.match("/auth/signup/simple");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar_default, { expand: "xl", className: "hk-navbar navbar-light fixed-top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "nav-start-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar_default.Brand, { as: Link, to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "brand-img d-inline-block", src: logo_light_default, alt: "brand" }, void 0, false, {
      fileName: "app/routes/auth/SimpleHeader.jsx",
      lineNumber: 40,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/SimpleHeader.jsx",
      lineNumber: 39,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/SimpleHeader.jsx",
      lineNumber: 38,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "nav-end-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { as: "ul", className: "flex-row", children: [
      loginPath && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", className: "nav-link py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { size: "sm", variant: "outline-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(help_circle_default, {}, void 0, false, {
          fileName: "app/routes/auth/SimpleHeader.jsx",
          lineNumber: 52,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/auth/SimpleHeader.jsx",
          lineNumber: 51,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/auth/SimpleHeader.jsx",
          lineNumber: 50,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Get Help" }, void 0, false, {
          fileName: "app/routes/auth/SimpleHeader.jsx",
          lineNumber: 55,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth/SimpleHeader.jsx",
        lineNumber: 49,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/auth/SimpleHeader.jsx",
        lineNumber: 48,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/auth/SimpleHeader.jsx",
        lineNumber: 47,
        columnNumber: 39
      }, this),
      signupPath && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", className: "nav-link py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", as: "a", href: "#", children: "Help" }, void 0, false, {
          fileName: "app/routes/auth/SimpleHeader.jsx",
          lineNumber: 61,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/auth/SimpleHeader.jsx",
          lineNumber: 60,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", className: "nav-link py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "outline-light", as: Link, to: "/auth/login", children: "Sign In" }, void 0, false, {
          fileName: "app/routes/auth/SimpleHeader.jsx",
          lineNumber: 64,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/auth/SimpleHeader.jsx",
          lineNumber: 63,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth/SimpleHeader.jsx",
        lineNumber: 59,
        columnNumber: 40
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth/SimpleHeader.jsx",
      lineNumber: 46,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/SimpleHeader.jsx",
      lineNumber: 45,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth/SimpleHeader.jsx",
    lineNumber: 36,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/auth/SimpleHeader.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_s(SimpleHeader, "qVMqkCpYCjknUqSjfMln5RFSkbo=", false, function() {
  return [useLocation];
});
_c = SimpleHeader;
var SimpleHeader_default = SimpleHeader;
var _c;
$RefreshReg$(_c, "SimpleHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  SimpleHeader_default
};
//# sourceMappingURL=/build/_shared/chunk-D7WXB36O.js.map
