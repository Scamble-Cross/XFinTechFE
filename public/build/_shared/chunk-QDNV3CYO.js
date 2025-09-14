import {
  HkTooltip_default
} from "/build/_shared/chunk-NYEYMOIV.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  archive_default,
  book_default,
  box_default,
  briefcase_default,
  check_square_default,
  code_default,
  git_branch_default,
  github_default,
  grid_default,
  heart_default,
  pen_tool_default,
  refresh_cw_default,
  settings_default,
  tool_default,
  zap_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import {
  Link,
  useLocation
} from "/build/_shared/chunk-DKEEJ4HZ.js";
import {
  Button_default,
  Form_default,
  Nav_default
} from "/build/_shared/chunk-VRR24KJX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-KTLBVDTS.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/apps/integrations/AppsSidebar.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/integrations/AppsSidebar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/integrations/AppsSidebar.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var AppsSidebar = () => {
  _s();
  const {
    pathname
  } = useLocation();
  const allAppRoute = pathname.match("/all-apps");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "integrationsapp-sidebar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-content-wrap", children: [
      !allAppRoute && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { className: "mb-4", role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", className: "form-control", placeholder: "Search by categories, name" }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 36,
        columnNumber: 38
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { as: "ul", className: "nav-light navbar-nav flex-column", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { as: Link, to: "/apps/integrations/integration", className: pathname === "/apps/integrations/integration" ? "active" : "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(box_default, {}, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 45,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 44,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 43,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Integrations" }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 48,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 42,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 41,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(refresh_cw_default, {}, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 55,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 54,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 53,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Updates" }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 58,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 52,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 51,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 40,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 39,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-gap" }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 63,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "nav-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Browse" }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 65,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 64,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { as: "ul", className: "nav-light navbar-nav flex-column", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { as: Link, to: "/apps/integrations/all-apps", className: pathname === "/apps/integrations/all-apps" ? "active" : "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(grid_default, {}, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 73,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 72,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 71,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "All Apps" }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 76,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 70,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 69,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(heart_default, {}, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 83,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 82,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 81,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Popular" }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 86,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 80,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 79,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { as: Link, to: "/apps/integrations/app-detail", className: pathname === "/apps/integrations/app-detail" ? "active" : "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(zap_default, {}, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 93,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 92,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 91,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "New Apps" }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 96,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 90,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 89,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(check_square_default, {}, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 103,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 102,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 101,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Recommended for you" }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 106,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 100,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 99,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(git_branch_default, {}, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 113,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 112,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 111,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Developer Tools" }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 116,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 110,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 109,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 68,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 67,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-gap" }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 121,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "nav-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Categories" }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 123,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 122,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { as: "ul", className: "nav nav-light navbar-nav flex-column", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pen_tool_default, {}, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 131,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 130,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 129,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Design" }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 134,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 128,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 127,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(github_default, {}, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 141,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 140,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 139,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Marketing" }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 144,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 138,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 137,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(code_default, {}, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 151,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 150,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 149,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Technology" }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 154,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 148,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 147,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(zap_default, {}, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 161,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 160,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 159,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "API" }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 164,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 158,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 157,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tool_default, {}, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 171,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 170,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 169,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "SEO Tools" }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 174,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 168,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 167,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(briefcase_default, {}, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 181,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 180,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 179,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Management" }, void 0, false, {
            fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
            lineNumber: 184,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 178,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
          lineNumber: 177,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 126,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 125,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "integrationsapp-fixednav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hk-toolbar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { as: "ul", className: "nav-light", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { id: "tooltip2", placement: "top", title: "Settings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(settings_default, {}, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 200,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 199,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 198,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 197,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 196,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 195,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { id: "tooltip3", placement: "top", title: "Archive", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(archive_default, {}, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 211,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 210,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 209,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 208,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 207,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 206,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { id: "tooltip2", placement: "top", title: "Help", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(book_default, {}, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 222,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 221,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 220,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 219,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 218,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
        lineNumber: 217,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
      lineNumber: 194,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
      lineNumber: 193,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
      lineNumber: 192,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/integrations/AppsSidebar.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_s(AppsSidebar, "qVMqkCpYCjknUqSjfMln5RFSkbo=", false, function() {
  return [useLocation];
});
_c = AppsSidebar;
var AppsSidebar_default = AppsSidebar;
var _c;
$RefreshReg$(_c, "AppsSidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  AppsSidebar_default
};
//# sourceMappingURL=/build/_shared/chunk-QDNV3CYO.js.map
