import {
  symbol_avatar_11_default
} from "/build/_shared/chunk-4KUYEYFM.js";
import {
  symbol_avatar_5_default
} from "/build/_shared/chunk-TI466TIB.js";
import {
  AppsSidebar_default
} from "/build/_shared/chunk-QDNV3CYO.js";
import {
  symbol_avatar_10_default,
  symbol_avatar_13_default,
  symbol_avatar_7_default,
  symbol_avatar_9_default
} from "/build/_shared/chunk-SQKKCWDH.js";
import {
  symbol_avatar_6_default
} from "/build/_shared/chunk-TXN3O5BI.js";
import {
  symbol_avatar_12_default
} from "/build/_shared/chunk-RIGWRGCS.js";
import {
  symbol_avatar_14_default
} from "/build/_shared/chunk-4NF7SRHQ.js";
import {
  HkTooltip_default
} from "/build/_shared/chunk-NYEYMOIV.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  check_square_default,
  chevron_down_default,
  chevron_up_default,
  globe_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import {
  useGlobalStateContext
} from "/build/_shared/chunk-3LFZEH5W.js";
import "/build/_shared/chunk-B57YWHU6.js";
import "/build/_shared/chunk-WUHA5P4Y.js";
import {
  Link
} from "/build/_shared/chunk-DKEEJ4HZ.js";
import {
  Button_default,
  Card_default,
  Col_default,
  Container_default,
  Form_default,
  Nav_default,
  Row_default
} from "/build/_shared/chunk-VRR24KJX.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-HFWHD4VB.js";
import {
  require_classnames
} from "/build/_shared/chunk-CQ7UJNRQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  createHotContext
} from "/build/_shared/chunk-KTLBVDTS.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/apps/integrations/integration/route.jsx
var import_react2 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// app/routes/apps/integrations/integration/Header.jsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/integrations/integration/Header.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/integrations/integration/Header.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var Header = ({
  toggleSidebar,
  show
}) => {
  _s();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "integrations-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "integrationsapp-title", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Integrations" }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Header.jsx",
        lineNumber: 40,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Header.jsx",
        lineNumber: 39,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Select, { className: "d-md-none mw-300p ms-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 1, children: "All Integrations" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Header.jsx",
          lineNumber: 43,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 2, children: "Native Integrations" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Header.jsx",
          lineNumber: 44,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/integration/Header.jsx",
        lineNumber: 42,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/integration/Header.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-100 d-md-flex d-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { as: "ul", className: "nav-line nav-tabs nav-icon nav-light flex-shrink-0 px-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { className: "d-flex align-items-center h-100 active", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(check_square_default, {}, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Header.jsx",
          lineNumber: 53,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Header.jsx",
          lineNumber: 52,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Header.jsx",
          lineNumber: 51,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "All Integrations" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Header.jsx",
          lineNumber: 56,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/integration/Header.jsx",
        lineNumber: 50,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Header.jsx",
        lineNumber: 49,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { className: "d-flex align-items-center h-100", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(globe_default, {}, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Header.jsx",
          lineNumber: 63,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Header.jsx",
          lineNumber: 62,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Header.jsx",
          lineNumber: 61,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Native Integrations" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Header.jsx",
          lineNumber: 66,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/integration/Header.jsx",
        lineNumber: 60,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Header.jsx",
        lineNumber: 59,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/integration/Header.jsx",
      lineNumber: 48,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Header.jsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "integrations-options-wrap justify-content-end flex-1 d-md-flex d-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { className: "mw-300p flex-grow-1 d-lg-flex d-none", role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", placeholder: "Search by categories, name, tag" }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Header.jsx",
        lineNumber: 73,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Header.jsx",
        lineNumber: 72,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover hk-navbar-togglable", onClick: () => dispatch({
        type: "top_nav_toggle"
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: states.layoutState.topNavCollapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_down_default, {}, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Header.jsx",
        lineNumber: 81,
        columnNumber: 70
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_up_default, {}, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Header.jsx",
        lineNumber: 81,
        columnNumber: 88
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Header.jsx",
        lineNumber: 80,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Header.jsx",
        lineNumber: 79,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Header.jsx",
        lineNumber: 78,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Header.jsx",
        lineNumber: 75,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/integration/Header.jsx",
      lineNumber: 71,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("hk-sidebar-togglable", {
      "active": !show
    }), onClick: toggleSidebar }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Header.jsx",
      lineNumber: 87,
      columnNumber: 13
    }, this),
    "        "
  ] }, void 0, true, {
    fileName: "app/routes/apps/integrations/integration/Header.jsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
};
_s(Header, "OVdtiISsix2HOQFhIOw6MKqd+SU=", false, function() {
  return [useGlobalStateContext];
});
_c = Header;
var Header_default = Header;
var _c;
$RefreshReg$(_c, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/assets/img/symbol-avatar-2.png
var symbol_avatar_2_default = "/build/_assets/symbol-avatar-2-G7FPDG4M.png";

// app/assets/img/symbol-avatar-8.png
var symbol_avatar_8_default = "/build/_assets/symbol-avatar-8-A4Y2SLIC.png";

// app/routes/apps/integrations/integration/Body.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/integrations/integration/Body.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/integrations/integration/Body.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var Body = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "integrations-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Container_default, { className: "mt-md-7 mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex justify-content-between align-items-start mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_14_default, alt: "logo" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 47,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 46,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 45,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", className: "btn-block flex-grow-0 flex-shrink-0 flex-basis-0", children: "connect" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 50,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 44,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Intercom" }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 52,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae." }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 53,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 43,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 42,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 41,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex justify-content-between align-items-start mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_2_default, alt: "logo" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 63,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 62,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 61,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "primary", className: "btn-block flex-grow-0 flex-shrink-0 flex-basis-0", children: "connected" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 66,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 60,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Swiggy" }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 68,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Dictum fusce ut placerat orci. Semper viverra nam libero justo laoreet sit amet." }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 69,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 59,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 58,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 57,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex justify-content-between align-items-start mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_10_default, alt: "logo" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 79,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 78,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 77,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", className: "btn-block flex-grow-0 flex-shrink-0 flex-basis-0", children: "connect" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 82,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 76,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Medium" }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 84,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Purus viverra accumsan in nisl nisi scelerisque. Quam vulputate dignissim suspendisse in est ante. Est ultricies integer quis auctor elit sed." }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 85,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 75,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 74,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 73,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex justify-content-between align-items-start mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_12_default, alt: "logo" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 95,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 94,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 93,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "primary", className: "btn-block flex-grow-0 flex-shrink-0 flex-basis-0", children: "connected" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 98,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 92,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Figma" }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 100,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Viverra nam libero justo laoreet sit amet cursus sit amet. Faucibus vitae aliquet nec ullamcorper." }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 101,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 91,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 90,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 89,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex justify-content-between align-items-start mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_9_default, alt: "logo" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 111,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 110,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 109,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "primary", className: "btn-block flex-grow-0 flex-shrink-0 flex-basis-0", children: "connected" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 114,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 108,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Propswala" }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 116,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Ac ut consequat semper viverra nam libero justo laoreet sit. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo." }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 117,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 107,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 106,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 105,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex justify-content-between align-items-start mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_7_default, alt: "logo" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 127,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 126,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 125,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "primary", className: "btn-block flex-grow-0 flex-shrink-0 flex-basis-0", children: "connected" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 130,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 124,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Icons8" }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 132,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Laoreet suspendisse interdum consectetur libero id faucibus. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. " }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 133,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 123,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 122,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 121,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex justify-content-between align-items-start mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_6_default, alt: "logo" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 143,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 142,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 141,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", className: "btn-block flex-grow-0 flex-shrink-0 flex-basis-0", children: "connect" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 146,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 140,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Behance" }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 148,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Elit at imperdiet dui accumsan sit. Condimentum lacinia." }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 149,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 139,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 138,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 137,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex justify-content-between align-items-start mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_10_default, alt: "logo" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 159,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 158,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 157,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", className: "btn-block flex-grow-0 flex-shrink-0 flex-basis-0", children: "connect" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 162,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 156,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Medium" }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 164,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae." }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 165,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 155,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 154,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 153,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex justify-content-between align-items-start mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_11_default, alt: "logo" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 175,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 174,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 173,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", className: "btn-block flex-grow-0 flex-shrink-0 flex-basis-0", children: "connect" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 178,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 172,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Node Js" }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 180,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Dictum fusce ut placerat orci. Semper viverra nam libero justo laoreet sit amet. " }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 181,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 171,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 170,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 169,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex justify-content-between align-items-start mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_8_default, alt: "logo" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 191,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 190,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 189,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", className: "btn-block flex-grow-0 flex-shrink-0 flex-basis-0", children: "connect" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 194,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 188,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Indian Type Factory" }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 196,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Purus viverra accumsan in nisl nisi scelerisque. Quam vulputate dignissim suspendisse in est ante. Est ultricies integer quis auctor elit sed. " }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 197,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 187,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 186,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 185,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex justify-content-between align-items-start mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_5_default, alt: "logo" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 207,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 206,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 205,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "primary", className: "btn-block flex-grow-0 flex-shrink-0 flex-basis-0", children: "connected" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 210,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 204,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "City Deals" }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 212,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Viverra nam libero justo laoreet sit amet cursus sit amet. Faucibus vitae aliquet nec ullamcorper. " }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 213,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 203,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 202,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 201,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex justify-content-between align-items-start mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_13_default, alt: "logo" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 223,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 222,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 221,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", className: "btn-block flex-grow-0 flex-shrink-0 flex-basis-0", children: "connect" }, void 0, false, {
          fileName: "app/routes/apps/integrations/integration/Body.jsx",
          lineNumber: 226,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 220,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Sketch" }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 228,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Id diam maecenas ultricies mi eget mauris. At consectetur lorem donec massa sapien faucibus et." }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/Body.jsx",
        lineNumber: 229,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 219,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 218,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/Body.jsx",
      lineNumber: 217,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/integrations/integration/Body.jsx",
    lineNumber: 40,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/integrations/integration/Body.jsx",
    lineNumber: 39,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/integrations/integration/Body.jsx",
    lineNumber: 38,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/integrations/integration/Body.jsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
};
_c2 = Body;
var Body_default = Body;
var _c2;
$RefreshReg$(_c2, "Body");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/integrations/integration/route.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/integrations/integration/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/integrations/integration/route.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var Integration = () => {
  _s2();
  const [showSidebar, setShowSidebar] = (0, import_react2.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: (0, import_classnames2.default)("integrationsapp-wrap", {
    "integrationsapp-sidebar-toggle": !showSidebar
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AppsSidebar_default, {}, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/route.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "integrationsapp-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "integrationsapp-detail-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Header_default, { toggleSidebar: () => setShowSidebar(!showSidebar), show: showSidebar }, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/route.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Body_default, {}, void 0, false, {
        fileName: "app/routes/apps/integrations/integration/route.jsx",
        lineNumber: 38,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/integration/route.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/integration/route.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/integrations/integration/route.jsx",
    lineNumber: 31,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/integrations/integration/route.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s2(Integration, "O0tqdxfw1ryb5O1kO6vD3OVdeTk=");
_c3 = Integration;
var route_default = Integration;
var _c3;
$RefreshReg$(_c3, "Integration");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/integrations/integration/route-HZ2APDQP.js.map
