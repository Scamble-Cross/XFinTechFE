import {
  HkTooltip_default
} from "/build/_shared/chunk-NYEYMOIV.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  archive_default,
  book_default,
  download_default,
  edit_default,
  layers_default,
  save_default,
  settings_default,
  star_default,
  trash_2_default,
  upload_default,
  user_default,
  users_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import {
  Link
} from "/build/_shared/chunk-DKEEJ4HZ.js";
import {
  Button_default,
  Dropdown_default,
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

// app/routes/apps/invoices/InvoiceAppSidebar.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/invoices/InvoiceAppSidebar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/invoices/InvoiceAppSidebar.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var InvoiceAppSidebar = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "invoiceapp-sidebar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-content-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "primary", className: "btn-rounded btn-block mb-4", children: "Create" }, void 0, false, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 31,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { as: Link, to: "/apps/invoices/create-invoice", children: "Create Invoice" }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 35,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Create Estimate" }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 36,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 34,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 30,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { as: "ul", className: "nav-light navbar-nav flex-column", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { active: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_default, {}, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 45,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 44,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 43,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "All Invoices" }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 48,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 42,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 41,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 55,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 54,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 53,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Sent" }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 58,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 52,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 51,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(archive_default, {}, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 65,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 64,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 63,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Archived" }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 68,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 62,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 61,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(edit_default, {}, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 75,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 74,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 73,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Pending" }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 78,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 72,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 71,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 85,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 84,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 83,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Deleted" }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 88,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 82,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 81,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 40,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 39,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-gap" }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 93,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "nav-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Manage" }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 95,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 94,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { as: "ul", className: "nav-light navbar-nav flex-column", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(upload_default, {}, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 103,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 102,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 101,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Manage Invoices" }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 106,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 100,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 99,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 113,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 112,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 111,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Recurring Invoices" }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 116,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 110,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 109,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(layers_default, {}, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 123,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 122,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 121,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Manage Estimate" }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 126,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 120,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 119,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(book_default, {}, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 133,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 132,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 131,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Manage Contacts" }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 136,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 130,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 129,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(save_default, {}, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 143,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 142,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 141,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Saved Templates" }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 146,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 140,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 139,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 98,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 97,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-gap" }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 151,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "nav-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Info" }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 153,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 152,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { as: "ul", className: "nav nav-light navbar-nav flex-column", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(users_default, {}, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 161,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 160,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 159,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Business Info" }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 164,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 158,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 157,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 171,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 170,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 169,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Tax Info" }, void 0, false, {
            fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
            lineNumber: 174,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 168,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
          lineNumber: 167,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 156,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 155,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
      lineNumber: 29,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "invoiceapp-fixednav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hk-toolbar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { as: "ul", className: "nav-light", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { id: "tooltip2", placement: "top", title: "Settings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(settings_default, {}, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 190,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 189,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 188,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 187,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 186,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 185,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { id: "tooltip3", placement: "top", title: "Archive", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(archive_default, {}, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 201,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 200,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 199,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 198,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 197,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 196,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { id: "tooltip2", placement: "top", title: "Help", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(book_default, {}, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 212,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 211,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 210,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 209,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 208,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
        lineNumber: 207,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
      lineNumber: 184,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
      lineNumber: 183,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
      lineNumber: 182,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/invoices/InvoiceAppSidebar.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c = InvoiceAppSidebar;
var InvoiceAppSidebar_default = InvoiceAppSidebar;
var _c;
$RefreshReg$(_c, "InvoiceAppSidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  InvoiceAppSidebar_default
};
//# sourceMappingURL=/build/_shared/chunk-GEGWK4S2.js.map
