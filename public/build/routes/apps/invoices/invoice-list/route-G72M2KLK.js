import {
  InvoiceAppSidebar_default
} from "/build/_shared/chunk-ILTOGQWW.js";
import {
  hk_data_table_default
} from "/build/_shared/chunk-QGWTCQ62.js";
import "/build/_shared/chunk-6N3H4K5U.js";
import {
  HkTooltip_default
} from "/build/_shared/chunk-5BLZWIUZ.js";
import {
  hk_badge_default
} from "/build/_shared/chunk-DSN3JJ3U.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  archive_default,
  chevron_down_default,
  chevron_up_default,
  edit_default,
  external_link_default,
  more_vertical_default,
  refresh_cw_default,
  settings_default,
  slash_default,
  star_default,
  trash_2_default,
  users_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  ButtonGroup_default,
  Button_default,
  Col_default,
  Dropdown_default,
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

// app/routes/apps/invoices/invoice-list/route.jsx
var import_react5 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx"
  );
  import.meta.hot.lastModified = "1732600247952.989";
}
var InvoiceAppHeader = ({
  toggleSidebar,
  show
}) => {
  _s();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "invoice-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "invoiceapp-title link-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "All invoices" }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
        lineNumber: 40,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
        lineNumber: 39,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(users_default, {}, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 45,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 44,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "All Invoices" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 47,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
          lineNumber: 43,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 51,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 50,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Sent" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 53,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
          lineNumber: 49,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(archive_default, {}, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 57,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 56,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Archive" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 59,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
          lineNumber: 55,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(edit_default, {}, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 63,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 62,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Pending" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 65,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
          lineNumber: 61,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 69,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 68,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Deleted" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 71,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
          lineNumber: 67,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
        lineNumber: 42,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
      lineNumber: 38,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "invoice-options-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret flex-shrink-0 d-lg-inline-block d-none", href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Refresh", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(refresh_cw_default, {}, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
        lineNumber: 81,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
        lineNumber: 80,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
        lineNumber: 79,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
        lineNumber: 78,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
        lineNumber: 77,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "v-separator d-lg-inline-block d-none" }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
        lineNumber: 86,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret ms-0  d-sm-inline-block d-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(settings_default, {}, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
          lineNumber: 91,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
          lineNumber: 90,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
          lineNumber: 89,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
          lineNumber: 88,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Manage Contact" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 96,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Import" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 97,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Export" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 98,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 99,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Send Messages" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 100,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Delegate Access" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 101,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
          lineNumber: 95,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
        lineNumber: 87,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { as: "a", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", "data-bs-toggle": "tooltip", "data-placement": "top", "data-bs-original-title": "More", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
          lineNumber: 108,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
          lineNumber: 107,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
          lineNumber: 106,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
          lineNumber: 105,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
              fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
              lineNumber: 115,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
              lineNumber: 114,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Stared Contacts" }, void 0, false, {
              fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
              lineNumber: 117,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 113,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(archive_default, {}, void 0, false, {
              fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
              lineNumber: 121,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
              lineNumber: 120,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Archive Contacts" }, void 0, false, {
              fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
              lineNumber: 123,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 119,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 125,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(slash_default, {}, void 0, false, {
              fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
              lineNumber: 128,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
              lineNumber: 127,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Block Content" }, void 0, false, {
              fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
              lineNumber: 130,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 126,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(external_link_default, {}, void 0, false, {
              fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
              lineNumber: 134,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
              lineNumber: 133,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Feedback" }, void 0, false, {
              fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
              lineNumber: 136,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
            lineNumber: 132,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
          lineNumber: 112,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
        lineNumber: 104,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none", onClick: () => dispatch({
        type: "top_nav_toggle"
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: states.layoutState.topNavCollapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_down_default, {}, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
        lineNumber: 146,
        columnNumber: 70
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_up_default, {}, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
        lineNumber: 146,
        columnNumber: 88
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
        lineNumber: 145,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
        lineNumber: 144,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
        lineNumber: 143,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
        lineNumber: 140,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
      lineNumber: 76,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("hk-sidebar-togglable", {
      "active": !show
    }), onClick: toggleSidebar }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
      lineNumber: 152,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/invoices/invoice-list/InvoiceAppHeader.jsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_s(InvoiceAppHeader, "OVdtiISsix2HOQFhIOw6MKqd+SU=", false, function() {
  return [useGlobalStateContext];
});
_c = InvoiceAppHeader;
var InvoiceAppHeader_default = InvoiceAppHeader;
var _c;
$RefreshReg$(_c, "InvoiceAppHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/invoices/invoice-list/InvoiceList.jsx
var import_react4 = __toESM(require_react(), 1);

// app/data/invoices/invoice-table.js
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/invoices/invoice-table.js"
  );
  import.meta.hot.lastModified = "1732600247880.875";
}
var reciplentFormatter = (cell) => {
  return cell.map((data2, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react.default.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-dark", children: data2.title }, void 0, false, {
      fileName: "app/data/invoices/invoice-table.js",
      lineNumber: 24,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fs-7", children: data2.id }, void 0, false, {
      fileName: "app/data/invoices/invoice-table.js",
      lineNumber: 25,
      columnNumber: 17
    }, this)
  ] }, indx, true, {
    fileName: "app/data/invoices/invoice-table.js",
    lineNumber: 23,
    columnNumber: 13
  }, this));
};
var tagFormatter = (cell) => {
  return cell.map((data2, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react.default.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(hk_badge_default, { bg: data2.bg, text: data2.color, className: "my-1  me-2", children: data2.title }, void 0, false, {
      fileName: "app/data/invoices/invoice-table.js",
      lineNumber: 36,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fs-8 mt-1", children: data2.text }, void 0, false, {
      fileName: "app/data/invoices/invoice-table.js",
      lineNumber: 37,
      columnNumber: 17
    }, this)
  ] }, indx, true, {
    fileName: "app/data/invoices/invoice-table.js",
    lineNumber: 35,
    columnNumber: 13
  }, this));
};
var actionFormatter = (cell) => {
  return cell.map((data2, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex align-items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default, { as: ButtonGroup_default, className: "btn-group selectable-split-dropdown", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-light", type: "button", className: "btn-dyn-text w-100p", children: "Edit" }, void 0, false, {
        fileName: "app/data/invoices/invoice-table.js",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Toggle, { variant: "outline-light", split: true, className: "me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: "Toggle Dropdown" }, void 0, false, {
        fileName: "app/data/invoices/invoice-table.js",
        lineNumber: 52,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/data/invoices/invoice-table.js",
        lineNumber: 51,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { eventKey: "Remind", children: "Remind" }, void 0, false, {
          fileName: "app/data/invoices/invoice-table.js",
          lineNumber: 55,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { eventKey: "Sent", children: "Sent" }, void 0, false, {
          fileName: "app/data/invoices/invoice-table.js",
          lineNumber: 56,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { eventKey: "Active", children: "Active" }, void 0, false, {
          fileName: "app/data/invoices/invoice-table.js",
          lineNumber: 57,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
          fileName: "app/data/invoices/invoice-table.js",
          lineNumber: 58,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { eventKey: "Edit", children: "Edit" }, void 0, false, {
          fileName: "app/data/invoices/invoice-table.js",
          lineNumber: 59,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/invoices/invoice-table.js",
        lineNumber: 54,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/data/invoices/invoice-table.js",
      lineNumber: 49,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "btn-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(archive_default, {}, void 0, false, {
        fileName: "app/data/invoices/invoice-table.js",
        lineNumber: 66,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/data/invoices/invoice-table.js",
        lineNumber: 65,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/data/invoices/invoice-table.js",
        lineNumber: 64,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/data/invoices/invoice-table.js",
        lineNumber: 63,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", href: data2.actionLink, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "btn-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(edit_default, {}, void 0, false, {
        fileName: "app/data/invoices/invoice-table.js",
        lineNumber: 73,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/data/invoices/invoice-table.js",
        lineNumber: 72,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/data/invoices/invoice-table.js",
        lineNumber: 71,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/data/invoices/invoice-table.js",
        lineNumber: 70,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "btn-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(trash_2_default, {}, void 0, false, {
        fileName: "app/data/invoices/invoice-table.js",
        lineNumber: 80,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/data/invoices/invoice-table.js",
        lineNumber: 79,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/data/invoices/invoice-table.js",
        lineNumber: 78,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/data/invoices/invoice-table.js",
        lineNumber: 77,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/data/invoices/invoice-table.js",
      lineNumber: 62,
      columnNumber: 17
    }, this)
  ] }, indx, true, {
    fileName: "app/data/invoices/invoice-table.js",
    lineNumber: 48,
    columnNumber: 13
  }, this));
};
var columns = [
  {
    accessor: "id",
    title: "ID",
    hidden: true
  },
  {
    accessor: "invoice",
    title: "Invoice #",
    sort: false,
    cellFormatter: (cell) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "#", className: "table-link-text link-high-em", children: cell }, void 0, false, {
      fileName: "app/data/invoices/invoice-table.js",
      lineNumber: 101,
      columnNumber: 34
    }, this)
  },
  {
    accessor: "date",
    title: "Date",
    sort: true
  },
  {
    accessor: "reciplent",
    title: "Reciplent",
    sort: true,
    cellFormatter: reciplentFormatter,
    sortValue: (cell, row) => cell.map((data2) => data2.title)
  },
  {
    accessor: "status",
    title: "Status",
    sort: true,
    cellFormatter: tagFormatter
  },
  {
    accessor: "activity",
    title: "Activity",
    sort: true
  },
  {
    accessor: "amount",
    title: "Amount",
    sort: true
  },
  {
    accessor: "actions",
    title: "Actions",
    cellFormatter: actionFormatter
  }
];
var data = [
  {
    id: 1,
    invoice: "11234",
    date: "13 Jan, 2020",
    reciplent: [{ title: "Patrik Schelton", id: "morgan@jampack.com" }],
    status: [{ title: "draft", bg: "light", color: "dark" }],
    activity: "-",
    amount: "$ 2,300.00 USD",
    actions: [{ actionLink: "#" }]
  },
  {
    id: 2,
    invoice: "11235",
    date: "13 Jan, 2020",
    reciplent: [{ title: "Huma Therman", id: "huma@clariesup.au" }],
    status: [{ title: "Unpaid", bg: "danger", text: "Due 25 Apr 2020" }],
    activity: "Sent",
    amount: "$ 780.00 USD",
    actions: [{ actionLink: "#" }]
  },
  {
    id: 3,
    invoice: "11236",
    date: "13 Jan, 2020",
    reciplent: [{ title: "Charlie Chaplin", id: "charlie@leernoca.monster" }],
    status: [{ title: "Paid", bg: "primary" }],
    activity: "Done",
    amount: "$ 567.00 USD",
    actions: [{ actionLink: "#" }]
  },
  {
    id: 4,
    invoice: "11237",
    date: "13 Jan, 2020",
    reciplent: [{ title: "Winston Churchil", id: "winston@worthniza.ga" }],
    status: [{ title: "Unpaid", bg: "danger", text: "Due 12 Sep 2020" }],
    activity: "-",
    amount: "$ 1,500.00 USD",
    actions: [{ actionLink: "#" }]
  },
  {
    id: 5,
    invoice: "11238",
    date: "13 Jan, 2020",
    reciplent: [{ title: "Jaquiline Joker", id: "jaquljoker@jampack.com" }],
    status: [{ title: "Unpaid", bg: "danger", text: "Due 18 Oct 2020" }],
    activity: "Sent",
    amount: "$ 900.00 USD",
    actions: [{ actionLink: "#" }]
  },
  {
    id: 6,
    invoice: "11239",
    date: "3 July, 2020",
    reciplent: [{ title: "Tom Cruz", id: "tomcz@jampack.com" }],
    status: [{ title: "Paid", bg: "primary" }],
    activity: "Done",
    amount: "$ 4,750.00 USD",
    actions: [{ actionLink: "#" }]
  },
  {
    id: 7,
    invoice: "11240",
    date: "24 Jun, 2019",
    reciplent: [{ title: "Danial Craig", id: "danialc@jampack.com" }],
    status: [{ title: "Paid", bg: "primary", text: "Due 25 Apr 2020" }],
    activity: "Done",
    amount: "$ 2,300.00 USD",
    actions: [{ actionLink: "#" }]
  },
  {
    id: 8,
    invoice: "11241",
    date: "24 Jun, 2019",
    reciplent: [{ title: "Katharine Jones", id: "joneskath@jampack.com" }],
    status: [{ title: "Paid", bg: "primary" }],
    activity: "Done",
    amount: "$ 7,650.00 USD",
    actions: [{ actionLink: "#" }]
  },
  {
    id: 9,
    invoice: "11242",
    date: "24 Jun, 2019",
    reciplent: [{ title: "Hence Work", id: "contact@hencework.com" }],
    status: [{ title: "Draft", bg: "light", color: "dark" }],
    activity: "-",
    amount: "$ 4,500.00 USD",
    actions: [{ actionLink: "https://hencework.com/" }]
  }
];

// app/routes/apps/invoices/invoice-list/InvoiceList.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/invoices/invoice-list/InvoiceList.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/invoices/invoice-list/InvoiceList.jsx"
  );
  import.meta.hot.lastModified = "1732600247953.481";
}
var InvoiceList = () => {
  _s2();
  const [searchTerm, setSearchTerm] = (0, import_react4.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Row_default, { className: "mb-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xs: 7, mb: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "invoice-toolbar-left", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Select, { size: "sm", className: "d-flex align-items-center w-130p", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: 1, children: "Export to CSV" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
          lineNumber: 35,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: 2, children: "Export to PDF" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
          lineNumber: 36,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: 3, children: "Send Message" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
          lineNumber: 37,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: 4, children: "Delegate Access" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
          lineNumber: 38,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
        lineNumber: 34,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
        lineNumber: 33,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
        lineNumber: 32,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xs: 5, mb: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "invoice-toolbar-right", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dataTables_filter", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Control, { size: "sm", type: "search", placeholder: "Search", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
          lineNumber: 46,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
          lineNumber: 45,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
          lineNumber: 44,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dataTables_paginate paging_simple_numbers", id: "datable_1_paginate", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "pagination custom-pagination pagination-simple m-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "paginate_button page-item previous disabled", id: "datable_1_previous", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", className: "page-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-arrow-left-s-line" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
            lineNumber: 53,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
            lineNumber: 52,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
            lineNumber: 51,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "paginate_button page-item next disabled", id: "datable_1_next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", className: "page-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-arrow-right-s-line" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
            lineNumber: 58,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
            lineNumber: 57,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
            lineNumber: 56,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
          lineNumber: 50,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
          lineNumber: 49,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
        lineNumber: 43,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
        lineNumber: 42,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_data_table_default, { column: columns, rowData: data, rowSelection: true, rowsPerPage: 10, searchQuery: searchTerm, classes: "nowrap w-100 mb-5", responsive: true }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
      lineNumber: 67,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/invoices/invoice-list/InvoiceList.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s2(InvoiceList, "a1cMJ8t0eYFnsCEdGcHtaGJdbCM=");
_c2 = InvoiceList;
var InvoiceList_default = InvoiceList;
var _c2;
$RefreshReg$(_c2, "InvoiceList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/invoices/invoice-list/InvoiceListBody.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/invoices/invoice-list/InvoiceListBody.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/invoices/invoice-list/InvoiceListBody.jsx"
  );
  import.meta.hot.lastModified = "1732600247953.886";
}
var InvoiceListBody = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "invoice-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "invoice-list-view", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(InvoiceList_default, {}, void 0, false, {
    fileName: "app/routes/apps/invoices/invoice-list/InvoiceListBody.jsx",
    lineNumber: 27,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/invoices/invoice-list/InvoiceListBody.jsx",
    lineNumber: 26,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/invoices/invoice-list/InvoiceListBody.jsx",
    lineNumber: 25,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/invoices/invoice-list/InvoiceListBody.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
};
_c3 = InvoiceListBody;
var InvoiceListBody_default = InvoiceListBody;
var _c3;
$RefreshReg$(_c3, "InvoiceListBody");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/invoices/invoice-list/route.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/invoices/invoice-list/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/invoices/invoice-list/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247954.34";
}
var InvoiceList2 = () => {
  _s3();
  const [showSidebar, setShowSidebar] = (0, import_react5.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: (0, import_classnames2.default)("invoiceapp-wrap", {
    "invoiceapp-sidebar-toggle": !showSidebar
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(InvoiceAppSidebar_default, {}, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-list/route.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "invoiceapp-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "invoiceapp-detail-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(InvoiceAppHeader_default, { toggleSidebar: () => setShowSidebar(!showSidebar), show: showSidebar }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/route.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(InvoiceListBody_default, {}, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-list/route.jsx",
        lineNumber: 38,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/invoice-list/route.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-list/route.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/invoices/invoice-list/route.jsx",
    lineNumber: 31,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/invoices/invoice-list/route.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s3(InvoiceList2, "O0tqdxfw1ryb5O1kO6vD3OVdeTk=");
_c4 = InvoiceList2;
var route_default = InvoiceList2;
var _c4;
$RefreshReg$(_c4, "InvoiceList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/invoices/invoice-list/route-G72M2KLK.js.map
