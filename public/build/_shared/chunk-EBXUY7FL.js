import {
  HkTooltip_default
} from "/build/_shared/chunk-5BLZWIUZ.js";
import {
  archive_default,
  chevron_down_default,
  chevron_up_default,
  edit_default,
  external_link_default,
  grid_default,
  list_default,
  more_vertical_default,
  refresh_cw_default,
  server_default,
  settings_default,
  slash_default,
  star_default,
  trash_2_default,
  user_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  Button_default,
  Dropdown_default
} from "/build/_shared/chunk-KBRVI47E.js";
import {
  require_classnames
} from "/build/_shared/chunk-CQ7UJNRQ.js";
import {
  useGlobalStateContext
} from "/build/_shared/chunk-DIOLN5GK.js";
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

// app/routes/apps/contact/ContactAppHeader.jsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/contact/ContactAppHeader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/contact/ContactAppHeader.jsx"
  );
  import.meta.hot.lastModified = "1732600247912.033";
}
var ContactAppHeader = ({
  toggleSidebar,
  show
}) => {
  _s();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  const {
    pathname
  } = useLocation();
  const contactListRoute = pathname.match("/apps/contact/contact-list");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "contact-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", className: "contactapp-title link-dark", href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Contacts" }, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 45,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 44,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 50,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 49,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "All Contacts" }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 52,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 48,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 56,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 55,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Important" }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 58,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 54,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(archive_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 62,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 61,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Archive" }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 64,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 60,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(edit_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 68,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 67,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Pending" }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 70,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 66,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 74,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 73,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Deleted" }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 76,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 72,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 47,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "ms-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { size: "sm", variant: "outline-secondary", className: "flex-shrink-0 d-lg-inline-block d-none", children: "Create New" }, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 81,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Add New Contact" }, void 0, false, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 83,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Add New Department" }, void 0, false, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 84,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Add Category" }, void 0, false, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 85,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Add New Tag" }, void 0, false, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 86,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 82,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
        lineNumber: 80,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contact-options-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "inline-block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "btn btn-icon btn-flush-dark flush-soft-hover no-caret active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: contactListRoute ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(list_default, {}, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 95,
          columnNumber: 53
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(grid_default, {}, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 95,
          columnNumber: 64
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 94,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 93,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 92,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { as: Link, to: "/apps/contact/contact-list", className: (0, import_classnames.default)({
            "active": contactListRoute
          }), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(list_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 103,
              columnNumber: 29
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 102,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "List View" }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 105,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 100,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { as: Link, to: "/apps/contact/contact-cards", className: (0, import_classnames.default)({
            "active": pathname === "/apps/contact/cards"
          }), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(grid_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 111,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 110,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Grid View" }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 113,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 107,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(server_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 117,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 116,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Compact View" }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 119,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 115,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 99,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
        lineNumber: 91,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret d-sm-inline-block d-none", href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { title: "Refresh", placement: states.layoutState.topNavCollapse ? "bottom" : "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(refresh_cw_default, {}, void 0, false, {
        fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
        lineNumber: 127,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
        lineNumber: 126,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
        lineNumber: 125,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
        lineNumber: 124,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
        lineNumber: 123,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "v-separator d-lg-block d-none" }, void 0, false, {
        fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
        lineNumber: 132,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "inline-block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "btn btn-flush-dark btn-icon btn-rounded flush-soft-hover no-caret d-lg-inline-block d-none ms-sm-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Manage Contact", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(settings_default, {}, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 138,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 137,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 136,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 135,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 134,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Manage Contact" }, void 0, false, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 144,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Import" }, void 0, false, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 145,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Export" }, void 0, false, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 146,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 147,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Send Messages" }, void 0, false, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 148,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Delegate Access" }, void 0, false, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 149,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 143,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
        lineNumber: 133,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "inline-block ms-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "btn btn-flush-dark btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret d-lg-inline-block d-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "More", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 157,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 156,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 155,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 154,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 153,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 165,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 164,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Stared Contacts" }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 167,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 163,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(archive_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 171,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 170,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Archive Contacts" }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 173,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 169,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 175,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(slash_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 178,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 177,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Block Content" }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 180,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 176,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(external_link_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 184,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 183,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Feedback" }, void 0, false, {
              fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
              lineNumber: 186,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
            lineNumber: 182,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
          lineNumber: 162,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
        lineNumber: 152,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: "a", href: "#", className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none", onClick: () => dispatch({
        type: "top_nav_toggle"
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: states.layoutState.topNavCollapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_down_default, {}, void 0, false, {
        fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
        lineNumber: 196,
        columnNumber: 70
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_up_default, {}, void 0, false, {
        fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
        lineNumber: 196,
        columnNumber: 88
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
        lineNumber: 195,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
        lineNumber: 194,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
        lineNumber: 193,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
        lineNumber: 190,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
      lineNumber: 90,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("hk-sidebar-togglable", {
      "active": show
    }), onClick: toggleSidebar }, void 0, false, {
      fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
      lineNumber: 202,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/contact/ContactAppHeader.jsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
};
_s(ContactAppHeader, "0UkaAYJ6fqpxOB/3OtRtsVpRMYY=", false, function() {
  return [useGlobalStateContext, useLocation];
});
_c = ContactAppHeader;
var ContactAppHeader_default = ContactAppHeader;
var _c;
$RefreshReg$(_c, "ContactAppHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ContactAppHeader_default
};
//# sourceMappingURL=/build/_shared/chunk-EBXUY7FL.js.map
