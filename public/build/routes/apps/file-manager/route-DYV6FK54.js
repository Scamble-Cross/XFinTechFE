import {
  mock2_default
} from "/build/_shared/chunk-MCO2KVL7.js";
import {
  avatar12_default
} from "/build/_shared/chunk-TDK3BLMN.js";
import {
  avatar10_default
} from "/build/_shared/chunk-LDADEV53.js";
import {
  avatar15_default
} from "/build/_shared/chunk-ZGGRJ3QC.js";
import {
  avatar9_default
} from "/build/_shared/chunk-VFRPT2WG.js";
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
  book_default,
  chevron_down_default,
  chevron_up_default,
  file_default,
  file_plus_default,
  file_text_default,
  folder_default,
  folder_plus_default,
  grid_default,
  hard_drive_default,
  image_default,
  info_default,
  list_default,
  play_default,
  plus_default,
  settings_default,
  star_default,
  trash_2_default,
  upload_cloud_default,
  upload_default,
  user_plus_default,
  video_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  Button_default,
  Card_default,
  Dropdown_default,
  Form_default,
  ListGroup_default,
  Nav_default,
  Tab_default
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
  Link,
  Outlet,
  useLocation
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

// app/routes/apps/file-manager/route.jsx
var import_react3 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// app/routes/apps/file-manager/FmHeader.jsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/file-manager/FmHeader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/file-manager/FmHeader.jsx"
  );
  import.meta.hot.lastModified = "1732600247929.933";
}
var FmHeader = ({
  toggleSidebar,
  showSidebar
}) => {
  _s();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  const {
    pathname
  } = useLocation();
  const listViewRoute = pathname.match("/apps/file-manager/list-view");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "fm-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center flex-grow-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: Link, to: "#", className: "fmapp-title link-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "My Space" }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmHeader.jsx",
          lineNumber: 45,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmHeader.jsx",
          lineNumber: 44,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(file_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/FmHeader.jsx",
              lineNumber: 50,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FmHeader.jsx",
              lineNumber: 49,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "All Files" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FmHeader.jsx",
              lineNumber: 52,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/FmHeader.jsx",
            lineNumber: 48,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(file_plus_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/FmHeader.jsx",
              lineNumber: 56,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FmHeader.jsx",
              lineNumber: 55,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Synced Files" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FmHeader.jsx",
              lineNumber: 58,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/FmHeader.jsx",
            lineNumber: 54,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(upload_cloud_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/FmHeader.jsx",
              lineNumber: 62,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FmHeader.jsx",
              lineNumber: 61,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Cloud Document" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FmHeader.jsx",
              lineNumber: 64,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/FmHeader.jsx",
            lineNumber: 60,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/FmHeader.jsx",
          lineNumber: 47,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 43,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { className: "mx-3 flex-grow-1 mw-400p", role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", placeholder: "Search files and folders" }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 69,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 68,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/file-manager/FmHeader.jsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fm-options-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover disabled d-xl-inline-block d-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 76,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 75,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 74,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 73,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: Link, to: "#", variant: "flush-dark", className: (0, import_classnames.default)("btn-icon btn-rounded flush-soft-hover fmapp-info-toggle", {
        "active": states.fmState.showInfo
      }), onClick: () => dispatch({
        type: "show_fmInfo",
        showInfo: !states.fmState.showInfo
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 88,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 87,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 86,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 80,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "v-separator d-xl-inline-block d-none" }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 92,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: Link, to: "#", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover ms-0 d-xl-inline-block d-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Add New Folder", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(folder_plus_default, {}, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 97,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 96,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 95,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 94,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 93,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: Link, to: "#", variant: "flush-dark", className: "btn-icon btn-rounded btn-file flush-soft-hover  d-md-inline-block d-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Upload", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(upload_cloud_default, {}, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 106,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 105,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 104,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 103,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 102,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "v-separator d-lg-inline-block d-none" }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 111,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "inline-block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: Link, to: "#", className: "btn btn-icon btn-flush-dark flush-soft-hover no-caret active ms-lg-0 d-sm-inline-block d-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: listViewRoute ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(list_default, {}, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmHeader.jsx",
          lineNumber: 116,
          columnNumber: 50
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(grid_default, {}, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmHeader.jsx",
          lineNumber: 116,
          columnNumber: 61
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmHeader.jsx",
          lineNumber: 115,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmHeader.jsx",
          lineNumber: 114,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmHeader.jsx",
          lineNumber: 113,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { as: Link, to: "list-view", active: listViewRoute, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(list_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/FmHeader.jsx",
              lineNumber: 123,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FmHeader.jsx",
              lineNumber: 122,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "List View" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FmHeader.jsx",
              lineNumber: 125,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/FmHeader.jsx",
            lineNumber: 121,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { as: Link, to: "grid-view", active: pathname.match("apps/file-manager/grid-view"), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(grid_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/FmHeader.jsx",
              lineNumber: 129,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FmHeader.jsx",
              lineNumber: 128,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Grid View" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FmHeader.jsx",
              lineNumber: 131,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/FmHeader.jsx",
            lineNumber: 127,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/FmHeader.jsx",
          lineNumber: 120,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 112,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: Link, to: "#", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none", onClick: () => dispatch({
        type: "top_nav_toggle"
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: states.layoutState.topNavCollapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_down_default, {}, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 141,
        columnNumber: 70
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_up_default, {}, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 141,
        columnNumber: 88
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 140,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 139,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 138,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmHeader.jsx",
        lineNumber: 135,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/file-manager/FmHeader.jsx",
      lineNumber: 72,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("hk-sidebar-togglable", {
      "active": !showSidebar
    }), onClick: toggleSidebar }, void 0, false, {
      fileName: "app/routes/apps/file-manager/FmHeader.jsx",
      lineNumber: 147,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/file-manager/FmHeader.jsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
};
_s(FmHeader, "0UkaAYJ6fqpxOB/3OtRtsVpRMYY=", false, function() {
  return [useGlobalStateContext, useLocation];
});
_c = FmHeader;
var FmHeader_default = FmHeader;
var _c;
$RefreshReg$(_c, "FmHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/file-manager/FmSidebar.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/file-manager/FmSidebar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/file-manager/FmSidebar.jsx"
  );
  import.meta.hot.lastModified = "1732600247930.477";
}
var FmSidebar = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "fmapp-sidebar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "menu-content-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "btn btn-primary btn-rounded btn-block btn-file mb-4", children: [
        "Upload",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "file", className: "upload" }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 31,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 29,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "nav nav-light navbar-nav flex-column", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "nav-link", href: "#some", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(hard_drive_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 39,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 38,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 37,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-link-text", children: "My Space" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 42,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 36,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 35,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "nav-link", href: "#some", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(file_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 49,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 48,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 47,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-link-text", children: "All Files" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 52,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 46,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 45,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "nav-link", href: "#some", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(folder_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 59,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 58,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 57,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-link-text", children: "Folders" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 62,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 56,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 55,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "nav-link", href: "#some", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(upload_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 69,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 68,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 67,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-link-text", children: "Shared" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 72,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 66,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 65,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "nav-link", href: "#some", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 79,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 78,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 77,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-link-text", children: "Starred" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 82,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 76,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 75,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "nav-link", href: "#some", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(trash_2_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 89,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 88,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 87,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-link-text", children: "Trash" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 92,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 86,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 85,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 34,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 33,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 97,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "nav nav-light navbar-nav flex-column", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "nav-link", href: "#some", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(image_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 104,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 103,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 102,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-link-text", children: "Images" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 107,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 101,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 100,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "nav-link", href: "#some", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(video_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 114,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 113,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 112,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-link-text", children: "Videos" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 117,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 111,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 110,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "nav-link", href: "#some", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(play_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 124,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 123,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 122,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-link-text", children: "Audio" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 127,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 121,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 120,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { className: "nav-link", href: "#some", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(file_text_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 134,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 133,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 132,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-link-text", children: "Documents" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
            lineNumber: 137,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 131,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 130,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 99,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 98,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
      lineNumber: 28,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fmapp-storage", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "p-sm", children: "Storage is 85% full. 78.5 GB of 1 TB used. You can buy more space." }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 145,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "progress-lb-wrap my-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "progress-label text-uppercase fs-8 fw-medium", children: "78.5 GB of 1 TB" }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 147,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "progress progress-bar-rounded progress-bar-xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "progress-bar bg-danger w-85", role: "progressbar", "aria-valuenow": 25, "aria-valuemin": 0, "aria-valuemax": 100 }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 149,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
          lineNumber: 148,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 146,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#some", className: "fs-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("u", { children: "Buy Storage" }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 152,
        columnNumber: 50
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 152,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
      lineNumber: 144,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fmapp-fixednav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hk-toolbar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav_default, { className: "nav-light", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HkTooltip_default, { id: "tooltip2", placement: "top", title: "Settings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(settings_default, {}, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 163,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 162,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 161,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 160,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 159,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 158,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HkTooltip_default, { id: "tooltip3", placement: "top", title: "Archive", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(archive_default, {}, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 174,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 173,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 172,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 171,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 170,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 169,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HkTooltip_default, { id: "tooltip2", placement: "top", title: "Help", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(book_default, {}, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 185,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 184,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 183,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 182,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 181,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
        lineNumber: 180,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
      lineNumber: 157,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
      lineNumber: 156,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
      lineNumber: 155,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/file-manager/FmSidebar.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c2 = FmSidebar;
var FmSidebar_default = FmSidebar;
var _c2;
$RefreshReg$(_c2, "FmSidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/file-manager/FileInfo.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/file-manager/FileInfo.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/file-manager/FileInfo.jsx"
  );
  import.meta.hot.lastModified = "1732600247929.527";
}
var FileInfo = () => {
  _s2();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "file-info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { bsPrefix: "btn-close", className: "info-close", onClick: () => dispatch({
      type: "show_fmInfo",
      showInfo: false
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
      lineNumber: 48,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
      lineNumber: 44,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "file-name", children: "bruce-mars-fiEG-PkjG" }, void 0, false, {
      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
      lineNumber: 50,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "JPG File" }, void 0, false, {
      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
      lineNumber: 51,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: mock2_default, alt: "user", className: "d-block img-fluid my-4 w-250p" }, void 0, false, {
      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
      lineNumber: 52,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tab_default.Container, { defaultActiveKey: "tabInfo", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { as: "ul", justify: true, variant: "tabs", className: "nav-light nav-segmented-tabs active-theme mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { eventKey: "tabInfo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Details" }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FileInfo.jsx",
          lineNumber: 57,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FileInfo.jsx",
          lineNumber: 56,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FileInfo.jsx",
          lineNumber: 55,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { eventKey: "tabActivity", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Activity" }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FileInfo.jsx",
          lineNumber: 62,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FileInfo.jsx",
          lineNumber: 61,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FileInfo.jsx",
          lineNumber: 60,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/FileInfo.jsx",
        lineNumber: 54,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tab_default.Content, { className: "mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tab_default.Pane, { eventKey: "tabInfo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "collapse-simple", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#fl_info", role: "button", "data-bs-toggle": "collapse", "aria-expanded": "true", children: "Specification" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 71,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 70,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { id: "fl_info", className: "collapse show", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "fm-info", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Date Modified" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 77,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "20, Nov 2020" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 78,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 76,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Size" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 81,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "15.2 GB" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 82,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 80,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Created by" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 85,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Morgan Freeman" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 86,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 84,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Date Created" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 89,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "12, Nov 2020" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 90,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 88,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Dimension" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 93,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "1950 x 1245" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 94,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 92,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 75,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 74,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 73,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/FileInfo.jsx",
            lineNumber: 69,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", role: "button", "data-bs-toggle": "collapse", "aria-expanded": "true", children: "Shared with " }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 102,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 101,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { id: "shared_with", className: "collapse show", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "hk-list", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { placement: "top", title: "Katherine", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-primary position-relative avatar-rounded", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar9_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 110,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_badge_default, { bg: "transparent", className: "badge-icon badge-circle text-blue badge-icon-xxs position-bottom-end-overflow-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "badge-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-upload-2-fill" }, void 0, false, {
                    fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                    lineNumber: 113,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                    lineNumber: 112,
                    columnNumber: 65
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 127 127", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("g", { "data-name": "Ellipse 302", transform: "translate(8 8)", strokeWidth: 3, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("circle", { cx: "55.5", cy: "55.5", r: "55.5", stroke: "currentColor" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                      lineNumber: 117,
                      columnNumber: 73
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("circle", { cx: "55.5", cy: "55.5", r: "59.5", fill: "currentColor" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                      lineNumber: 118,
                      columnNumber: 73
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                    lineNumber: 116,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                    lineNumber: 115,
                    columnNumber: 65
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 111,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 109,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 108,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 107,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { placement: "top", title: "Dean", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm  avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar10_default, alt: "user", className: "avatar-img" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 128,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 127,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 126,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 125,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { placement: "top", title: "Winston", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "W" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 135,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 134,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 133,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 132,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#som", className: "avatar avatar-sm avatar-icon avatar-soft-light avatar-rounded", "data-bs-toggle": "modal", "data-bs-target": "#invite_people", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { placement: "top", title: "Add New", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(plus_default, {}, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 144,
                columnNumber: 69
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 143,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 142,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 141,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 140,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 139,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 106,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 105,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 104,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/FileInfo.jsx",
            lineNumber: 100,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", role: "button", "data-bs-toggle": "collapse", "aria-expanded": "true", children: "Settings " }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 156,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 155,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { id: "settings", className: "collapse show", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "fm-action", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-danger", children: "Delete File" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 163,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 162,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 161,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: "Somthing's Wrong" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 167,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 166,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 160,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", className: "d-block text-dark fs-7 mb-2", children: "Give feedback and report conversation" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 172,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 159,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 158,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/FileInfo.jsx",
            lineNumber: 154,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/FileInfo.jsx",
          lineNumber: 68,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FileInfo.jsx",
          lineNumber: 67,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tab_default.Pane, { eventKey: "tabActivity", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "collapse-simple", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#act_info1", role: "button", "data-bs-toggle": "collapse", "aria-expanded": "true", children: "Yesterday" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 182,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 181,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { id: "act_info1", className: "collapse show", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default, { variant: "flush", className: "activity-list", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 191,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 190,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 189,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-dark", children: "Hencework" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                      lineNumber: 196,
                      columnNumber: 65
                    }, this),
                    " is working on ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", className: "link-url", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("u", { children: "https://assets.adobe.com/id/urn:aaid:sc:AP:5cebaf53-ca19-420a-aeeb-1517b04ab8c0?view=file" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                      lineNumber: 196,
                      columnNumber: 158
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                      lineNumber: 196,
                      columnNumber: 124
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                    lineNumber: 195,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "last-activity-time", children: "3:15 PM" }, void 0, false, {
                    fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                    lineNumber: 198,
                    columnNumber: 61
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 194,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 188,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 187,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "W" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 206,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 205,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 204,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-dark", children: "Morgan Fregman" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                      lineNumber: 210,
                      columnNumber: 64
                    }, this),
                    " completed react conversion of ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("u", { children: "components" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                      lineNumber: 210,
                      columnNumber: 182
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                      lineNumber: 210,
                      columnNumber: 144
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                    lineNumber: 210,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "last-activity-time", children: "3:15 PM" }, void 0, false, {
                    fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                    lineNumber: 211,
                    columnNumber: 61
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 209,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 203,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 202,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 186,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 185,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 184,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/FileInfo.jsx",
            lineNumber: 180,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", role: "button", "data-bs-toggle": "collapse", "aria-expanded": "true", children: "23 April" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 221,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 220,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { id: "act_info2", className: "collapse show", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default, { variant: "flush", className: "activity-list", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar15_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 230,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 229,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 228,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-dark", children: "Hencework" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                      lineNumber: 234,
                      columnNumber: 64
                    }, this),
                    " is working on ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", className: "link-url", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("u", { children: "https://assets.adobe.com/id/urn:aaid:sc:AP:5cebaf53-ca19-420a-aeeb-1517b04ab8c0?view=file" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                      lineNumber: 234,
                      columnNumber: 157
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                      lineNumber: 234,
                      columnNumber: 123
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                    lineNumber: 234,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "last-activity-time", children: "3:15 PM" }, void 0, false, {
                    fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                    lineNumber: 235,
                    columnNumber: 61
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 233,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 227,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 226,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar12_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 243,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 242,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 241,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-dark", children: "Morgan Fregman" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                      lineNumber: 247,
                      columnNumber: 64
                    }, this),
                    " completed react conversion of ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("u", { children: "components" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                      lineNumber: 247,
                      columnNumber: 182
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                      lineNumber: 247,
                      columnNumber: 144
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                    lineNumber: 247,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "last-activity-time", children: "3:15 PM" }, void 0, false, {
                    fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                    lineNumber: 248,
                    columnNumber: 61
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                  lineNumber: 246,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 240,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/FileInfo.jsx",
                lineNumber: 239,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 225,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 224,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/FileInfo.jsx",
              lineNumber: 223,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/FileInfo.jsx",
            lineNumber: 219,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/FileInfo.jsx",
          lineNumber: 179,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/FileInfo.jsx",
          lineNumber: 178,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/FileInfo.jsx",
        lineNumber: 66,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/file-manager/FileInfo.jsx",
      lineNumber: 53,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/file-manager/FileInfo.jsx",
    lineNumber: 43,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/file-manager/FileInfo.jsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
};
_s2(FileInfo, "OVdtiISsix2HOQFhIOw6MKqd+SU=", false, function() {
  return [useGlobalStateContext];
});
_c3 = FileInfo;
var FileInfo_default = FileInfo;
var _c3;
$RefreshReg$(_c3, "FileInfo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/file-manager/route.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/file-manager/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/file-manager/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247934.054";
}
var FileManager = () => {
  _s3();
  const {
    states
  } = useGlobalStateContext();
  const [showSidebar, setShowSidebar] = (0, import_react3.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: (0, import_classnames2.default)("fmapp-wrap", {
    "fmapp-sidebar-toggle": !showSidebar
  }, {
    "fmapp-info-active": states.fmState.showInfo
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FmSidebar_default, {}, void 0, false, {
      fileName: "app/routes/apps/file-manager/route.jsx",
      lineNumber: 41,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "fmapp-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "fmapp-detail-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FmHeader_default, { toggleSidebar: () => setShowSidebar(!showSidebar), showSidebar, showInfo: states.fmState.showInfo }, void 0, false, {
        fileName: "app/routes/apps/file-manager/route.jsx",
        lineNumber: 44,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/apps/file-manager/route.jsx",
        lineNumber: 46,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FileInfo_default, {}, void 0, false, {
        fileName: "app/routes/apps/file-manager/route.jsx",
        lineNumber: 47,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/file-manager/route.jsx",
      lineNumber: 43,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/file-manager/route.jsx",
      lineNumber: 42,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/file-manager/route.jsx",
    lineNumber: 36,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/file-manager/route.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_s3(FileManager, "BE+QMeeUUXQ67symBgIbmuyddS0=", false, function() {
  return [useGlobalStateContext];
});
_c4 = FileManager;
var route_default = FileManager;
var _c4;
$RefreshReg$(_c4, "FileManager");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/file-manager/route-DYV6FK54.js.map
