import {
  symbol_avatar_11_default
} from "/build/_shared/chunk-4KUYEYFM.js";
import {
  AppsSidebar_default
} from "/build/_shared/chunk-JWFIAL5V.js";
import {
  symbol_avatar_16_default
} from "/build/_shared/chunk-IDVLJD6P.js";
import {
  symbol_avatar_5_default
} from "/build/_shared/chunk-TI466TIB.js";
import {
  logo_avatar_8_default
} from "/build/_shared/chunk-EXZHZ27Y.js";
import {
  logo_avatar_10_default,
  symbol_avatar_15_default,
  symbol_avatar_1_default,
  symbol_avatar_4_default
} from "/build/_shared/chunk-RXWNQY2C.js";
import {
  symbol_avatar_10_default,
  symbol_avatar_13_default,
  symbol_avatar_7_default,
  symbol_avatar_9_default
} from "/build/_shared/chunk-SQKKCWDH.js";
import {
  symbol_avatar_12_default
} from "/build/_shared/chunk-RIGWRGCS.js";
import {
  symbol_avatar_6_default
} from "/build/_shared/chunk-TXN3O5BI.js";
import {
  symbol_avatar_14_default
} from "/build/_shared/chunk-4NF7SRHQ.js";
import {
  logo_avatar_1_default,
  logo_avatar_3_default,
  logo_avatar_5_default
} from "/build/_shared/chunk-LIX45Q54.js";
import {
  logo_avatar_2_default
} from "/build/_shared/chunk-WZGBR62Z.js";
import {
  HkTooltip_default
} from "/build/_shared/chunk-5BLZWIUZ.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  chevron_down_default,
  chevron_up_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  Button_default,
  Card_default,
  Col_default,
  Container_default,
  Form_default,
  Row_default
} from "/build/_shared/chunk-KBRVI47E.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-HFWHD4VB.js";
import {
  require_classnames
} from "/build/_shared/chunk-CQ7UJNRQ.js";
import {
  useGlobalStateContext
} from "/build/_shared/chunk-DIOLN5GK.js";
import "/build/_shared/chunk-B57YWHU6.js";
import "/build/_shared/chunk-WUHA5P4Y.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  Link
} from "/build/_shared/chunk-OQSN7HAE.js";
import {
  createHotContext
} from "/build/_shared/chunk-7UABGPEU.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/apps/integrations/all-apps/route.jsx
var import_react3 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// app/routes/apps/integrations/all-apps/Header.jsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/integrations/all-apps/Header.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/integrations/all-apps/Header.jsx"
  );
  import.meta.hot.lastModified = "1732600247939.326";
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "integrationsapp-title link-dark flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "All Apps" }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
        lineNumber: 40,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
        lineNumber: 39,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { className: "ms-3 w-xl-30 d-md-block d-none", role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", placeholder: "Search by categories, name, tag" }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
        lineNumber: 43,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
        lineNumber: 42,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "integrations-options-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Select, { className: "me-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 0, children: "Popular" }, void 0, false, {
          fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
          lineNumber: 48,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 1, children: "New Apps" }, void 0, false, {
          fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
          lineNumber: 49,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 2, children: "Recommended" }, void 0, false, {
          fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
          lineNumber: 50,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 3, children: "Developer's Tools" }, void 0, false, {
          fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
          lineNumber: 51,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
        lineNumber: 47,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none", onClick: () => dispatch({
        type: "top_nav_toggle"
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: states.layoutState.topNavCollapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_down_default, {}, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
        lineNumber: 59,
        columnNumber: 70
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_up_default, {}, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
        lineNumber: 59,
        columnNumber: 88
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
        lineNumber: 58,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
        lineNumber: 57,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
        lineNumber: 56,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
        lineNumber: 53,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("hk-sidebar-togglable", {
      "active": !show
    }), onClick: toggleSidebar }, void 0, false, {
      fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
      lineNumber: 65,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/integrations/all-apps/Header.jsx",
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

// app/routes/apps/integrations/all-apps/Body.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/integrations/all-apps/Body.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/integrations/all-apps/Body.jsx"
  );
  import.meta.hot.lastModified = "1732600247938.701";
}
var Body = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "integrations-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Container_default, { className: "mt-md-7 mt-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex flex-md-nowrap flex-wrap align-items-center justify-content-between mb-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h5", { children: "Recommended for you" }, void 0, false, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 51,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Because you installed Jampack template these are your recommendations." }, void 0, false, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 52,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 50,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "#", className: "fs-7 flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("u", { children: "View All" }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 54,
        columnNumber: 69
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 54,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
      lineNumber: 49,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_14_default, alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 62,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 61,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 60,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Intercom" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 65,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Chat Application" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 66,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae." }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 67,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 59,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 71,
              columnNumber: 41
            }, this),
            "1,245 Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 70,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 73,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 69,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 58,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 57,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: logo_avatar_2_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 81,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 80,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Swiggy" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 83,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Food Delivery" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 84,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Dictum fusce ut placerat orci. Semper viverra nam libero justo laoreet sit amet." }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 85,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 79,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 89,
              columnNumber: 41
            }, this),
            "1,245 Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 88,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 90,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 87,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 78,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 77,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: logo_avatar_10_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 98,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 97,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Medium" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 100,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Blog" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 101,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Purus viverra accumsan in nisl nisi scelerisque. Quam vulputate dignissim suspendisse in est ante. Est ultricies integer quis auctor elit sed." }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 102,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 96,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 106,
              columnNumber: 41
            }, this),
            "1,245 Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 105,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 107,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 104,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 95,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 94,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap bg-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_12_default, alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 116,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 115,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 114,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Figma" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 119,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Design Tool" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 120,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Viverra nam libero justo laoreet sit amet cursus sit amet. Faucibus vitae aliquet nec ullamcorper." }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 121,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 113,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 125,
              columnNumber: 41
            }, this),
            "1,245 Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 124,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 126,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 123,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 112,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 111,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
      lineNumber: 56,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between mt-6 mb-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h5", { children: "Popular Apps" }, void 0, false, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 133,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Used by millions of people around the globe and liked them." }, void 0, false, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 134,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 132,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "#", className: "fs-7 flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("u", { children: "View All" }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 136,
        columnNumber: 69
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 136,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
      lineNumber: 131,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-violet mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 143,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 142,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Hencework" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 145,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Design Agency" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 146,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Id diam maecenas ultricies mi eget mauris. At consectetur lorem donec massa sapien faucibus et." }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 147,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 141,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 151,
              columnNumber: 41
            }, this),
            "70.2K Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 150,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 152,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 149,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 140,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 139,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_4_default, alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 161,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 160,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 159,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Jampack" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 164,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Dashboard Template" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 165,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Ac ut consequat semper viverra nam libero justo laoreet sit. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo." }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 166,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 158,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 170,
              columnNumber: 41
            }, this),
            "4,537 Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 169,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 171,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 168,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 157,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 156,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_1_default, alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 180,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 179,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 178,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Tinder" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 183,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Dating App" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 184,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Laoreet suspendisse interdum consectetur libero id faucibus. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. " }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 185,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 177,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 189,
              columnNumber: 41
            }, this),
            "1,245 Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 188,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 190,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 187,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 176,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 175,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_16_default, alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 199,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 198,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 197,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Github" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 202,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Developer Geek" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 203,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Elit at imperdiet dui accumsan sit. Condimentum lacinia." }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 204,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 196,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 208,
              columnNumber: 41
            }, this),
            "24.8M Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 207,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 209,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 206,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 195,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 194,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_5_default, alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 218,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 217,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 216,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Dribbble" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 221,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Inspiration" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 222,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae." }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 223,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 215,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 227,
              columnNumber: 41
            }, this),
            "1,245 Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 226,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 228,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 225,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 214,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 213,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: logo_avatar_1_default, className: "avatar-img", alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 236,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 235,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Phone Pay" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 238,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Payment" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 239,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Dictum fusce ut placerat orci. Semper viverra nam libero justo laoreet sit amet. " }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 240,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 234,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 244,
              columnNumber: 41
            }, this),
            "234 Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 243,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 245,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 242,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 233,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 232,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: logo_avatar_3_default, className: "avatar-img", alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 253,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 252,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Coursera" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 255,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Online Courses" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 256,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Purus viverra accumsan in nisl nisi scelerisque. Quam vulputate dignissim suspendisse in est ante. Est ultricies integer quis auctor elit sed. " }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 257,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 251,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 261,
              columnNumber: 41
            }, this),
            "8,769 Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 260,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 262,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 259,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 250,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 249,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_15_default, alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 271,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 270,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 269,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Kickstarter" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 274,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Fundraiser" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 275,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Viverra nam libero justo laoreet sit amet cursus sit amet. Faucibus vitae aliquet nec ullamcorper. " }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 276,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 268,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 280,
              columnNumber: 41
            }, this),
            "9K Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 279,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 281,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 278,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 267,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 266,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
      lineNumber: 138,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between mt-6 mb-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h5", { children: "Developer Tools" }, void 0, false, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 288,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "For developer geek in you don't care for others are doing." }, void 0, false, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 289,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 287,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "#", className: "fs-7 flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("u", { children: "View All" }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 291,
        columnNumber: 69
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 291,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
      lineNumber: 286,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_9_default, alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 299,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 298,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 297,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Propswala" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 302,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Toys & Tents" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 303,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Ac ut consequat semper viverra nam libero justo laoreet sit. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo." }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 304,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 296,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 308,
              columnNumber: 41
            }, this),
            "754 Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 307,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 309,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 306,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 295,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 294,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_7_default, alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 318,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 317,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 316,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Icons8" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 321,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Icons" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 322,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Laoreet suspendisse interdum consectetur libero id faucibus. Egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris. " }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 323,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 315,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 327,
              columnNumber: 41
            }, this),
            "842 Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 326,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 328,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 325,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 314,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 313,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_6_default, alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 337,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 336,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 335,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Behance" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 340,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Collaboration" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 341,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Elit at imperdiet dui accumsan sit. Condimentum lacinia." }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 342,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 334,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 346,
              columnNumber: 41
            }, this),
            "10.6K Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 345,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 347,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 344,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 333,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 332,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap bg-green-light-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_10_default, alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 356,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 355,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 354,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Medium" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 359,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Publication" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 360,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae." }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 361,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 353,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 365,
              columnNumber: 41
            }, this),
            "1,245 Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 364,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 366,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 363,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 352,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 351,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_11_default, alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 375,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 374,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 373,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Node Js" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 378,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "javascript" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 379,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Dictum fusce ut placerat orci. Semper viverra nam libero justo laoreet sit amet. " }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 380,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 372,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 384,
              columnNumber: 41
            }, this),
            "9K Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 383,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 385,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 382,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 371,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 370,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: logo_avatar_8_default, className: "avatar-img", alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 393,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 392,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Indian Type Factory" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 395,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Fonts" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 396,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Purus viverra accumsan in nisl nisi scelerisque. Quam vulputate dignissim suspendisse in est ante. Est ultricies integer quis auctor elit sed. " }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 397,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 391,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 401,
              columnNumber: 41
            }, this),
            "8,768 Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 400,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 402,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 399,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 390,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 389,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: logo_avatar_5_default, className: "avatar-img", alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 410,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 409,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "City Deals" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 412,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Deals" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 413,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Viverra nam libero justo laoreet sit amet cursus sit amet. Faucibus vitae aliquet nec ullamcorper. " }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 414,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 408,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 418,
              columnNumber: 41
            }, this),
            "1,478 Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 417,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 419,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 416,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 407,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 406,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 3, xl: 4, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border card-int mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: symbol_avatar_13_default, alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 428,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 427,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 426,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-name", children: "Sketch" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 431,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "app-cat", children: "Design Tool" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 432,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm multine-ellipsis", children: "Id diam maecenas ultricies mi eget mauris. At consectetur lorem donec massa sapien faucibus et." }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 433,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 425,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-footer justify-content-between border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
              lineNumber: 437,
              columnNumber: 41
            }, this),
            "5.4M Downloads"
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 436,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", size: "sm", children: "Connect" }, void 0, false, {
            fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
            lineNumber: 438,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
          lineNumber: 435,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 424,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
        lineNumber: 423,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
      lineNumber: 293,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
    lineNumber: 48,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
    lineNumber: 47,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/integrations/all-apps/Body.jsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
};
_c2 = Body;
var Body_default = Body;
var _c2;
$RefreshReg$(_c2, "Body");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/integrations/all-apps/route.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/integrations/all-apps/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/integrations/all-apps/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247940.387";
}
var AllApps = () => {
  _s2();
  const [showSidebar, setShowSidebar] = (0, import_react3.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: (0, import_classnames2.default)("integrationsapp-wrap", {
    "integrationsapp-sidebar-toggle": !showSidebar
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AppsSidebar_default, {}, void 0, false, {
      fileName: "app/routes/apps/integrations/all-apps/route.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "integrationsapp-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "integrationsapp-detail-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Header_default, { toggleSidebar: () => setShowSidebar(!showSidebar), show: showSidebar }, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/route.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Body_default, {}, void 0, false, {
        fileName: "app/routes/apps/integrations/all-apps/route.jsx",
        lineNumber: 38,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/all-apps/route.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/all-apps/route.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/integrations/all-apps/route.jsx",
    lineNumber: 31,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/integrations/all-apps/route.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s2(AllApps, "O0tqdxfw1ryb5O1kO6vD3OVdeTk=");
_c3 = AllApps;
var route_default = AllApps;
var _c3;
$RefreshReg$(_c3, "AllApps");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/integrations/all-apps/route-FF46L5SG.js.map
