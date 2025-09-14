import {
  AddNewTask_default
} from "/build/_shared/chunk-XLN2GFWY.js";
import {
  hk_data_table_default
} from "/build/_shared/chunk-ZO24V7LS.js";
import {
  avatar15_default
} from "/build/_shared/chunk-ZGGRJ3QC.js";
import "/build/_shared/chunk-XROUZ3B7.js";
import {
  hk_badge_default
} from "/build/_shared/chunk-YWRMJW47.js";
import {
  avatar10_default
} from "/build/_shared/chunk-LDADEV53.js";
import {
  avatar7_default
} from "/build/_shared/chunk-7XF6XEF7.js";
import {
  avatar9_default
} from "/build/_shared/chunk-VFRPT2WG.js";
import {
  avatar2_default
} from "/build/_shared/chunk-LLX7VWLD.js";
import {
  avatar13_default
} from "/build/_shared/chunk-WWUYITJG.js";
import {
  HkTooltip_default
} from "/build/_shared/chunk-NYEYMOIV.js";
import "/build/_shared/chunk-T44O2CY6.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  activity_default,
  archive_default,
  book_default,
  calendar_default,
  chevron_down_default,
  chevron_up_default,
  columns_default,
  file_default,
  git_pull_request_default,
  globe_default,
  list_default,
  lock_default,
  maximize_default,
  minimize_default,
  more_vertical_default,
  plus_default,
  settings_default,
  sidebar_default,
  star_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import {
  useGlobalStateContext
} from "/build/_shared/chunk-3LFZEH5W.js";
import "/build/_shared/chunk-B57YWHU6.js";
import {
  avatar8_default
} from "/build/_shared/chunk-WUHA5P4Y.js";
import {
  Link
} from "/build/_shared/chunk-DKEEJ4HZ.js";
import {
  Badge_default,
  ButtonGroup_default,
  Button_default,
  Dropdown_default,
  Form_default,
  InputGroup_default,
  Modal_default,
  Nav_default
} from "/build/_shared/chunk-VRR24KJX.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_prop_types
} from "/build/_shared/chunk-HFWHD4VB.js";
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

// app/routes/apps/todo/gantt/route.jsx
var import_react8 = __toESM(require_react(), 1);
var import_classnames3 = __toESM(require_classnames(), 1);

// app/routes/apps/todo/gantt/AppHeader.jsx
var import_react = __toESM(require_react(), 1);
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/todo/gantt/AppHeader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/todo/gantt/AppHeader.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var AppHeader = ({
  toggleSidebar,
  showSidebar
}) => {
  _s();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  const [isFullscreen, setIsFullscreen] = (0, import_react.useState)(false);
  const fullScreen = (e) => {
    e.preventDefault();
    setIsFullscreen(!isFullscreen);
    if (!isFullscreen) {
      document.body.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "todo-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "todoapp-title link-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
        "Jampack",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "task-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 61,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 60,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 59,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 57,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 56,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputGroup_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "input-affix-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "input-prefix", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-lock-line" }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 69,
          columnNumber: 64
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 69,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Select, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 1, children: "Private Board" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
            lineNumber: 71,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 2, children: "Public Board" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
            lineNumber: 72,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 70,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 68,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 67,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 66,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
      lineNumber: 55,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ButtonGroup_default, { className: "d-md-inline-flex d-none", role: "group", id: "modes-filter", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { name: "modes", id: "qday", variant: "outline-light", onClick: () => dispatch({
        type: "change_vm",
        vm: "QuarterDay"
      }), active: states.todoState.vm === "QuarterDay", children: "Quarter Day" }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 80,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { name: "modes", id: "hday", variant: "outline-light", onClick: () => dispatch({
        type: "change_vm",
        vm: "Half Day"
      }), active: states.todoState.vm === "Half Day", children: "Half Day" }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 84,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { name: "modes", id: "day", variant: "outline-light", onClick: () => dispatch({
        type: "change_vm",
        vm: "Day"
      }), active: states.todoState.vm === "Day", children: "Day" }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 88,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { name: "modes", id: "week", variant: "outline-light", onClick: () => dispatch({
        type: "change_vm",
        vm: "Week"
      }), active: states.todoState.vm === "Week", children: "Week" }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 92,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { name: "modes", id: "month", variant: "outline-light", onClick: () => dispatch({
        type: "change_vm",
        vm: "Month"
      }), active: states.todoState.vm === "Month", children: "Month" }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 96,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
      lineNumber: 79,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "todo-options-wrap flex-lg-grow-1 flex-lg-shrink-1 flex-basis-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex ms-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar-group avatar-group-overlapped d-xl-flex d-none me-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Katharine", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 106,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 105,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 104,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Dean", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 111,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 110,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 109,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Tom", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "T" }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 116,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 115,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 114,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Morgan", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 121,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 120,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 119,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Tooltip", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(plus_default, {}, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 126,
          columnNumber: 95
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 126,
          columnNumber: 64
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 126,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 125,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 124,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 103,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "v-separator  d-lg-inline-block d-none" }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 130,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", className: "btn btn-icon btn-flush-dark flush-soft-hover no-caret active ms-0  d-lg-inline-block d-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(columns_default, {}, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 135,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 134,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 133,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 132,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", className: "mnw-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon me-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(sidebar_default, {}, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
            lineNumber: 142,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
            lineNumber: 141,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
            lineNumber: 140,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon me-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(columns_default, {}, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
            lineNumber: 147,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
            lineNumber: 146,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
            lineNumber: 145,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon me-0 icon-flip-y", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(sidebar_default, {}, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
            lineNumber: 152,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
            lineNumber: 151,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
            lineNumber: 150,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
          lineNumber: 139,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 131,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: isFullscreen ? "Minimize" : "Maximize", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover full-screenapp", onClick: fullScreen, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: isFullscreen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(minimize_default, {}, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 161,
        columnNumber: 53
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(maximize_default, {}, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 161,
        columnNumber: 68
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 160,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 159,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 158,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 157,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none", onClick: () => dispatch({
        type: "top_nav_toggle"
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: states.layoutState.topNavCollapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_down_default, {}, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 173,
        columnNumber: 74
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_up_default, {}, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 173,
        columnNumber: 92
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 172,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 171,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 170,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
        lineNumber: 167,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
      lineNumber: 102,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
      lineNumber: 101,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("hk-sidebar-togglable", {
      "active": showSidebar
    }), onClick: toggleSidebar }, void 0, false, {
      fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
      lineNumber: 180,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/todo/gantt/AppHeader.jsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
};
_s(AppHeader, "rogPhhu0qRLqtbWiDTTBBiNNOZ8=", false, function() {
  return [useGlobalStateContext];
});
_c = AppHeader;
var AppHeader_default = AppHeader;
var _c;
$RefreshReg$(_c, "AppHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/todo/gantt/TodoAppSidebar.jsx
var import_react3 = __toESM(require_react(), 1);

// app/routes/apps/todo/gantt/AddNewProject.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/todo/gantt/AddNewProject.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/todo/gantt/AddNewProject.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var AddNewProject = ({
  show,
  onHide
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default, { show, onHide, centered: true, dialogClassName: "mw-400p", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Header, { className: "header-wth-bg-inv", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Title, { children: "Add Board" }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { bsPrefix: "btn-close", className: "text-white", onClick: onHide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
        lineNumber: 31,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
        lineNumber: 30,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Body, { className: "p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SimpleBar, { className: "nicescroll-bar h-350p", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "p-3 pb-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "J" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 42,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 41,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 40,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "Jampack" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 46,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 45,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 39,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck2", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 49,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
        lineNumber: 38,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 55,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 54,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 53,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "Hencework" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 59,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 58,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 52,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck3", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 62,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
        lineNumber: 51,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-info avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "G" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 68,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 67,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 66,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "Griffin" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 72,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 71,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 65,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck4" }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 75,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
        lineNumber: 64,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-warning avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "R" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 81,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 80,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 79,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "React - Jampack" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 85,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 84,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 78,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck5", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 88,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
        lineNumber: 77,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "P" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 94,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 93,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 92,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "Pangong" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 98,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 97,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 91,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck6", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 101,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
        lineNumber: 90,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-success avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "A" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 107,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 106,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 105,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "Angular - Jampack" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 111,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 110,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 104,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck7", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 114,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
        lineNumber: 103,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-warning avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "R" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 120,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 119,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 118,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "React - Jampack" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 124,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 123,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 117,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck8" }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 127,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
        lineNumber: 116,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "P" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 133,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 132,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 131,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "Pangong" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 137,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 136,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 130,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck9" }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 140,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
        lineNumber: 129,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-success avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "A" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 146,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 145,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 144,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "Angular - Jampack" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 150,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
            lineNumber: 149,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 143,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck10" }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
          lineNumber: 153,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
        lineNumber: 142,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
      lineNumber: 37,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Footer, { className: "justify-content-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "light", className: "flex-1", onClick: onHide, children: "Cancel" }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
        lineNumber: 160,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "primary", className: "flex-fill flex-1", onClick: onHide, children: "Add Board" }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
        lineNumber: 161,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
      lineNumber: 159,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/todo/gantt/AddNewProject.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c2 = AddNewProject;
var AddNewProject_default = AddNewProject;
var _c2;
$RefreshReg$(_c2, "AddNewProject");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/todo/gantt/TodoAppSidebar.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/todo/gantt/TodoAppSidebar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/todo/gantt/TodoAppSidebar.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var TodoAppSidebar = () => {
  _s2();
  const [addNewTask, setAddNewTask] = (0, import_react3.useState)(false);
  const [addNewBoard, setAddNewBoard] = (0, import_react3.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "todoapp-sidebar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "menu-content-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "primary", className: "btn-rounded btn-block mb-4", onClick: () => setAddNewTask(!addNewTask), children: "Add Task" }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 39,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { className: "nav-light navbar-nav flex-column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { className: "active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(git_pull_request_default, {}, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 46,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 45,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 44,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Gantt" }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 49,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 43,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 42,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(list_default, {}, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 56,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 55,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 54,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "My Tasks" }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 59,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 53,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 52,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(calendar_default, {}, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 66,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 65,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 64,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Calendar" }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 69,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 63,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 62,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(file_default, {}, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 76,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 75,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 74,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Files" }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 79,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 73,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 72,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(activity_default, {}, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 86,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 85,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 84,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Activity" }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 89,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 83,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 82,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 41,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 40,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 94,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "title-sm text-primary", children: "Priority" }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 95,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { className: "nav-light navbar-nav flex-column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { className: "link-with-badge", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_badge_default, { indicator: true, bg: "danger", className: "badge-indicator-lg me-2" }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 100,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Urgent" }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 101,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 99,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 98,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { className: "link-with-badge", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_badge_default, { indicator: true, bg: "orange", className: "badge-indicator-lg me-2" }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 106,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "High" }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 107,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 105,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 104,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { className: "link-with-badge", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_badge_default, { indicator: true, bg: "yellow", className: "badge-indicator-lg me-2" }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 112,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Medium" }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 113,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 111,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 110,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { className: "link-with-badge", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_badge_default, { indicator: true, bg: "gold", className: "badge-indicator-lg me-2" }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 118,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Low" }, void 0, false, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 119,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 117,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 116,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 97,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 96,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 124,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "title-sm text-primary mb-0", children: "Projects" }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 126,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", className: "btn btn-xs btn-icon btn-rounded btn-light", onClick: () => setAddNewBoard(!addNewBoard), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { placement: "top", title: "Add Project", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(plus_default, {}, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 131,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 130,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 129,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 128,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 127,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 125,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { className: "nav-light navbar-nav flex-column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "J" }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 144,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 143,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 142,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "name", children: "Jampack" }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 149,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 148,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 147,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 141,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ms-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "flush-light", size: "sm", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(lock_default, {}, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 157,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 156,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 155,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 154,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "flush-light", size: "sm", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_vertical_default, {}, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 164,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 163,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 162,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 161,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 153,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 140,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 139,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs avatar-pink avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 176,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 175,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 174,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "name", children: "Hencework" }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 181,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 180,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 179,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 173,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ms-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "flush-light", size: "sm", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(globe_default, {}, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 189,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 188,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 187,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 186,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "flush-light", size: "sm", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_vertical_default, {}, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 196,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 195,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 194,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
                lineNumber: 193,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
              lineNumber: 185,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 172,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
            lineNumber: 171,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 138,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 137,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
        lineNumber: 38,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "todoapp-fixednav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hk-toolbar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { className: "nav-light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { id: "tooltip2", placement: "top", title: "Settings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(settings_default, {}, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 216,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 215,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 214,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 213,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 212,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 211,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { id: "tooltip3", placement: "top", title: "Archive", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(archive_default, {}, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 227,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 226,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 225,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 224,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 223,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 222,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { id: "tooltip2", placement: "top", title: "Help", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(book_default, {}, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 238,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 237,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 236,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 235,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 234,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
          lineNumber: 233,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
        lineNumber: 210,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
        lineNumber: 209,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
        lineNumber: 208,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AddNewTask_default, { show: addNewTask, hide: () => setAddNewTask(false) }, void 0, false, {
      fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
      lineNumber: 249,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AddNewProject_default, { show: addNewBoard, onHide: () => setAddNewBoard(false) }, void 0, false, {
      fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
      lineNumber: 250,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/todo/gantt/TodoAppSidebar.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_s2(TodoAppSidebar, "1x/LG4mUiy0A6Y8SGiLnJO0hhLs=");
_c3 = TodoAppSidebar;
var TodoAppSidebar_default = TodoAppSidebar;
var _c3;
$RefreshReg$(_c3, "TodoAppSidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/react-split/dist/react-split.es.js
var import_react5 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/split.js/dist/split.es.js
var global = typeof window !== "undefined" ? window : null;
var ssr = global === null;
var document2 = !ssr ? global.document : void 0;
var addEventListener = "addEventListener";
var removeEventListener = "removeEventListener";
var getBoundingClientRect = "getBoundingClientRect";
var gutterStartDragging = "_a";
var aGutterSize = "_b";
var bGutterSize = "_c";
var HORIZONTAL = "horizontal";
var NOOP = function() {
  return false;
};
var calc = ssr ? "calc" : ["", "-webkit-", "-moz-", "-o-"].filter(function(prefix) {
  var el = document2.createElement("div");
  el.style.cssText = "width:" + prefix + "calc(9px)";
  return !!el.style.length;
}).shift() + "calc";
var isString = function(v) {
  return typeof v === "string" || v instanceof String;
};
var elementOrSelector = function(el) {
  if (isString(el)) {
    var ele = document2.querySelector(el);
    if (!ele) {
      throw new Error("Selector " + el + " did not match a DOM element");
    }
    return ele;
  }
  return el;
};
var getOption = function(options, propName, def) {
  var value = options[propName];
  if (value !== void 0) {
    return value;
  }
  return def;
};
var getGutterSize = function(gutterSize, isFirst, isLast, gutterAlign) {
  if (isFirst) {
    if (gutterAlign === "end") {
      return 0;
    }
    if (gutterAlign === "center") {
      return gutterSize / 2;
    }
  } else if (isLast) {
    if (gutterAlign === "start") {
      return 0;
    }
    if (gutterAlign === "center") {
      return gutterSize / 2;
    }
  }
  return gutterSize;
};
var defaultGutterFn = function(i, gutterDirection) {
  var gut = document2.createElement("div");
  gut.className = "gutter gutter-" + gutterDirection;
  return gut;
};
var defaultElementStyleFn = function(dim, size, gutSize) {
  var style = {};
  if (!isString(size)) {
    style[dim] = calc + "(" + size + "% - " + gutSize + "px)";
  } else {
    style[dim] = size;
  }
  return style;
};
var defaultGutterStyleFn = function(dim, gutSize) {
  var obj;
  return obj = {}, obj[dim] = gutSize + "px", obj;
};
var Split = function(idsOption, options) {
  if (options === void 0)
    options = {};
  if (ssr) {
    return {};
  }
  var ids = idsOption;
  var dimension;
  var clientAxis;
  var position;
  var positionEnd;
  var clientSize;
  var elements;
  if (Array.from) {
    ids = Array.from(ids);
  }
  var firstElement = elementOrSelector(ids[0]);
  var parent = firstElement.parentNode;
  var parentStyle = getComputedStyle ? getComputedStyle(parent) : null;
  var parentFlexDirection = parentStyle ? parentStyle.flexDirection : null;
  var sizes = getOption(options, "sizes") || ids.map(function() {
    return 100 / ids.length;
  });
  var minSize = getOption(options, "minSize", 100);
  var minSizes = Array.isArray(minSize) ? minSize : ids.map(function() {
    return minSize;
  });
  var maxSize = getOption(options, "maxSize", Infinity);
  var maxSizes = Array.isArray(maxSize) ? maxSize : ids.map(function() {
    return maxSize;
  });
  var expandToMin = getOption(options, "expandToMin", false);
  var gutterSize = getOption(options, "gutterSize", 10);
  var gutterAlign = getOption(options, "gutterAlign", "center");
  var snapOffset = getOption(options, "snapOffset", 30);
  var snapOffsets = Array.isArray(snapOffset) ? snapOffset : ids.map(function() {
    return snapOffset;
  });
  var dragInterval = getOption(options, "dragInterval", 1);
  var direction = getOption(options, "direction", HORIZONTAL);
  var cursor = getOption(
    options,
    "cursor",
    direction === HORIZONTAL ? "col-resize" : "row-resize"
  );
  var gutter = getOption(options, "gutter", defaultGutterFn);
  var elementStyle = getOption(
    options,
    "elementStyle",
    defaultElementStyleFn
  );
  var gutterStyle = getOption(options, "gutterStyle", defaultGutterStyleFn);
  if (direction === HORIZONTAL) {
    dimension = "width";
    clientAxis = "clientX";
    position = "left";
    positionEnd = "right";
    clientSize = "clientWidth";
  } else if (direction === "vertical") {
    dimension = "height";
    clientAxis = "clientY";
    position = "top";
    positionEnd = "bottom";
    clientSize = "clientHeight";
  }
  function setElementSize(el, size, gutSize, i) {
    var style = elementStyle(dimension, size, gutSize, i);
    Object.keys(style).forEach(function(prop) {
      el.style[prop] = style[prop];
    });
  }
  function setGutterSize(gutterElement, gutSize, i) {
    var style = gutterStyle(dimension, gutSize, i);
    Object.keys(style).forEach(function(prop) {
      gutterElement.style[prop] = style[prop];
    });
  }
  function getSizes() {
    return elements.map(function(element) {
      return element.size;
    });
  }
  function getMousePosition(e) {
    if ("touches" in e) {
      return e.touches[0][clientAxis];
    }
    return e[clientAxis];
  }
  function adjust(offset) {
    var a = elements[this.a];
    var b = elements[this.b];
    var percentage = a.size + b.size;
    a.size = offset / this.size * percentage;
    b.size = percentage - offset / this.size * percentage;
    setElementSize(a.element, a.size, this[aGutterSize], a.i);
    setElementSize(b.element, b.size, this[bGutterSize], b.i);
  }
  function drag(e) {
    var offset;
    var a = elements[this.a];
    var b = elements[this.b];
    if (!this.dragging) {
      return;
    }
    offset = getMousePosition(e) - this.start + (this[aGutterSize] - this.dragOffset);
    if (dragInterval > 1) {
      offset = Math.round(offset / dragInterval) * dragInterval;
    }
    if (offset <= a.minSize + a.snapOffset + this[aGutterSize]) {
      offset = a.minSize + this[aGutterSize];
    } else if (offset >= this.size - (b.minSize + b.snapOffset + this[bGutterSize])) {
      offset = this.size - (b.minSize + this[bGutterSize]);
    }
    if (offset >= a.maxSize - a.snapOffset + this[aGutterSize]) {
      offset = a.maxSize + this[aGutterSize];
    } else if (offset <= this.size - (b.maxSize - b.snapOffset + this[bGutterSize])) {
      offset = this.size - (b.maxSize + this[bGutterSize]);
    }
    adjust.call(this, offset);
    getOption(options, "onDrag", NOOP)(getSizes());
  }
  function calculateSizes() {
    var a = elements[this.a].element;
    var b = elements[this.b].element;
    var aBounds = a[getBoundingClientRect]();
    var bBounds = b[getBoundingClientRect]();
    this.size = aBounds[dimension] + bBounds[dimension] + this[aGutterSize] + this[bGutterSize];
    this.start = aBounds[position];
    this.end = aBounds[positionEnd];
  }
  function innerSize(element) {
    if (!getComputedStyle) {
      return null;
    }
    var computedStyle = getComputedStyle(element);
    if (!computedStyle) {
      return null;
    }
    var size = element[clientSize];
    if (size === 0) {
      return null;
    }
    if (direction === HORIZONTAL) {
      size -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
    } else {
      size -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
    }
    return size;
  }
  function trimToMin(sizesToTrim) {
    var parentSize = innerSize(parent);
    if (parentSize === null) {
      return sizesToTrim;
    }
    if (minSizes.reduce(function(a, b) {
      return a + b;
    }, 0) > parentSize) {
      return sizesToTrim;
    }
    var excessPixels = 0;
    var toSpare = [];
    var pixelSizes = sizesToTrim.map(function(size, i) {
      var pixelSize = parentSize * size / 100;
      var elementGutterSize = getGutterSize(
        gutterSize,
        i === 0,
        i === sizesToTrim.length - 1,
        gutterAlign
      );
      var elementMinSize = minSizes[i] + elementGutterSize;
      if (pixelSize < elementMinSize) {
        excessPixels += elementMinSize - pixelSize;
        toSpare.push(0);
        return elementMinSize;
      }
      toSpare.push(pixelSize - elementMinSize);
      return pixelSize;
    });
    if (excessPixels === 0) {
      return sizesToTrim;
    }
    return pixelSizes.map(function(pixelSize, i) {
      var newPixelSize = pixelSize;
      if (excessPixels > 0 && toSpare[i] - excessPixels > 0) {
        var takenPixels = Math.min(
          excessPixels,
          toSpare[i] - excessPixels
        );
        excessPixels -= takenPixels;
        newPixelSize = pixelSize - takenPixels;
      }
      return newPixelSize / parentSize * 100;
    });
  }
  function stopDragging() {
    var self = this;
    var a = elements[self.a].element;
    var b = elements[self.b].element;
    if (self.dragging) {
      getOption(options, "onDragEnd", NOOP)(getSizes());
    }
    self.dragging = false;
    global[removeEventListener]("mouseup", self.stop);
    global[removeEventListener]("touchend", self.stop);
    global[removeEventListener]("touchcancel", self.stop);
    global[removeEventListener]("mousemove", self.move);
    global[removeEventListener]("touchmove", self.move);
    self.stop = null;
    self.move = null;
    a[removeEventListener]("selectstart", NOOP);
    a[removeEventListener]("dragstart", NOOP);
    b[removeEventListener]("selectstart", NOOP);
    b[removeEventListener]("dragstart", NOOP);
    a.style.userSelect = "";
    a.style.webkitUserSelect = "";
    a.style.MozUserSelect = "";
    a.style.pointerEvents = "";
    b.style.userSelect = "";
    b.style.webkitUserSelect = "";
    b.style.MozUserSelect = "";
    b.style.pointerEvents = "";
    self.gutter.style.cursor = "";
    self.parent.style.cursor = "";
    document2.body.style.cursor = "";
  }
  function startDragging(e) {
    if ("button" in e && e.button !== 0) {
      return;
    }
    var self = this;
    var a = elements[self.a].element;
    var b = elements[self.b].element;
    if (!self.dragging) {
      getOption(options, "onDragStart", NOOP)(getSizes());
    }
    e.preventDefault();
    self.dragging = true;
    self.move = drag.bind(self);
    self.stop = stopDragging.bind(self);
    global[addEventListener]("mouseup", self.stop);
    global[addEventListener]("touchend", self.stop);
    global[addEventListener]("touchcancel", self.stop);
    global[addEventListener]("mousemove", self.move);
    global[addEventListener]("touchmove", self.move);
    a[addEventListener]("selectstart", NOOP);
    a[addEventListener]("dragstart", NOOP);
    b[addEventListener]("selectstart", NOOP);
    b[addEventListener]("dragstart", NOOP);
    a.style.userSelect = "none";
    a.style.webkitUserSelect = "none";
    a.style.MozUserSelect = "none";
    a.style.pointerEvents = "none";
    b.style.userSelect = "none";
    b.style.webkitUserSelect = "none";
    b.style.MozUserSelect = "none";
    b.style.pointerEvents = "none";
    self.gutter.style.cursor = cursor;
    self.parent.style.cursor = cursor;
    document2.body.style.cursor = cursor;
    calculateSizes.call(self);
    self.dragOffset = getMousePosition(e) - self.end;
  }
  sizes = trimToMin(sizes);
  var pairs = [];
  elements = ids.map(function(id, i) {
    var element = {
      element: elementOrSelector(id),
      size: sizes[i],
      minSize: minSizes[i],
      maxSize: maxSizes[i],
      snapOffset: snapOffsets[i],
      i
    };
    var pair;
    if (i > 0) {
      pair = {
        a: i - 1,
        b: i,
        dragging: false,
        direction,
        parent
      };
      pair[aGutterSize] = getGutterSize(
        gutterSize,
        i - 1 === 0,
        false,
        gutterAlign
      );
      pair[bGutterSize] = getGutterSize(
        gutterSize,
        false,
        i === ids.length - 1,
        gutterAlign
      );
      if (parentFlexDirection === "row-reverse" || parentFlexDirection === "column-reverse") {
        var temp = pair.a;
        pair.a = pair.b;
        pair.b = temp;
      }
    }
    if (i > 0) {
      var gutterElement = gutter(i, direction, element.element);
      setGutterSize(gutterElement, gutterSize, i);
      pair[gutterStartDragging] = startDragging.bind(pair);
      gutterElement[addEventListener](
        "mousedown",
        pair[gutterStartDragging]
      );
      gutterElement[addEventListener](
        "touchstart",
        pair[gutterStartDragging]
      );
      parent.insertBefore(gutterElement, element.element);
      pair.gutter = gutterElement;
    }
    setElementSize(
      element.element,
      element.size,
      getGutterSize(
        gutterSize,
        i === 0,
        i === ids.length - 1,
        gutterAlign
      ),
      i
    );
    if (i > 0) {
      pairs.push(pair);
    }
    return element;
  });
  function adjustToMin(element) {
    var isLast = element.i === pairs.length;
    var pair = isLast ? pairs[element.i - 1] : pairs[element.i];
    calculateSizes.call(pair);
    var size = isLast ? pair.size - element.minSize - pair[bGutterSize] : element.minSize + pair[aGutterSize];
    adjust.call(pair, size);
  }
  elements.forEach(function(element) {
    var computedSize = element.element[getBoundingClientRect]()[dimension];
    if (computedSize < element.minSize) {
      if (expandToMin) {
        adjustToMin(element);
      } else {
        element.minSize = computedSize;
      }
    }
  });
  function setSizes(newSizes) {
    var trimmed = trimToMin(newSizes);
    trimmed.forEach(function(newSize, i) {
      if (i > 0) {
        var pair = pairs[i - 1];
        var a = elements[pair.a];
        var b = elements[pair.b];
        a.size = trimmed[i - 1];
        b.size = newSize;
        setElementSize(a.element, a.size, pair[aGutterSize], a.i);
        setElementSize(b.element, b.size, pair[bGutterSize], b.i);
      }
    });
  }
  function destroy(preserveStyles, preserveGutter) {
    pairs.forEach(function(pair) {
      if (preserveGutter !== true) {
        pair.parent.removeChild(pair.gutter);
      } else {
        pair.gutter[removeEventListener](
          "mousedown",
          pair[gutterStartDragging]
        );
        pair.gutter[removeEventListener](
          "touchstart",
          pair[gutterStartDragging]
        );
      }
      if (preserveStyles !== true) {
        var style = elementStyle(
          dimension,
          pair.a.size,
          pair[aGutterSize]
        );
        Object.keys(style).forEach(function(prop) {
          elements[pair.a].element.style[prop] = "";
          elements[pair.b].element.style[prop] = "";
        });
      }
    });
  }
  return {
    setSizes,
    getSizes,
    collapse: function collapse(i) {
      adjustToMin(elements[i]);
    },
    destroy,
    parent,
    pairs
  };
};
var split_es_default = Split;

// node_modules/react-split/dist/react-split.es.js
function objectWithoutProperties(obj, exclude) {
  var target = {};
  for (var k in obj)
    if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1)
      target[k] = obj[k];
  return target;
}
var SplitWrapper = /* @__PURE__ */ function(superclass) {
  function SplitWrapper2() {
    superclass.apply(this, arguments);
  }
  if (superclass)
    SplitWrapper2.__proto__ = superclass;
  SplitWrapper2.prototype = Object.create(superclass && superclass.prototype);
  SplitWrapper2.prototype.constructor = SplitWrapper2;
  SplitWrapper2.prototype.componentDidMount = function componentDidMount() {
    var ref = this.props;
    ref.children;
    var gutter = ref.gutter;
    var rest = objectWithoutProperties(ref, ["children", "gutter"]);
    var options = rest;
    options.gutter = function(index, direction) {
      var gutterElement;
      if (gutter) {
        gutterElement = gutter(index, direction);
      } else {
        gutterElement = document.createElement("div");
        gutterElement.className = "gutter gutter-" + direction;
      }
      gutterElement.__isSplitGutter = true;
      return gutterElement;
    };
    this.split = split_es_default(this.parent.children, options);
  };
  SplitWrapper2.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var this$1 = this;
    var ref = this.props;
    ref.children;
    var minSize = ref.minSize;
    var sizes = ref.sizes;
    var collapsed = ref.collapsed;
    var rest = objectWithoutProperties(ref, ["children", "minSize", "sizes", "collapsed"]);
    var options = rest;
    var prevMinSize = prevProps.minSize;
    var prevSizes = prevProps.sizes;
    var prevCollapsed = prevProps.collapsed;
    var otherProps = [
      "maxSize",
      "expandToMin",
      "gutterSize",
      "gutterAlign",
      "snapOffset",
      "dragInterval",
      "direction",
      "cursor"
    ];
    var needsRecreate = otherProps.map(function(prop) {
      return this$1.props[prop] !== prevProps[prop];
    }).reduce(function(accum, same) {
      return accum || same;
    }, false);
    if (Array.isArray(minSize) && Array.isArray(prevMinSize)) {
      var minSizeChanged = false;
      minSize.forEach(function(minSizeI, i) {
        minSizeChanged = minSizeChanged || minSizeI !== prevMinSize[i];
      });
      needsRecreate = needsRecreate || minSizeChanged;
    } else if (Array.isArray(minSize) || Array.isArray(prevMinSize)) {
      needsRecreate = true;
    } else {
      needsRecreate = needsRecreate || minSize !== prevMinSize;
    }
    if (needsRecreate) {
      options.minSize = minSize;
      options.sizes = sizes || this.split.getSizes();
      this.split.destroy(true, true);
      options.gutter = function(index, direction, pairB) {
        return pairB.previousSibling;
      };
      this.split = split_es_default(
        Array.from(this.parent.children).filter(
          // eslint-disable-next-line no-underscore-dangle
          function(element) {
            return !element.__isSplitGutter;
          }
        ),
        options
      );
    } else if (sizes) {
      var sizeChanged = false;
      sizes.forEach(function(sizeI, i) {
        sizeChanged = sizeChanged || sizeI !== prevSizes[i];
      });
      if (sizeChanged) {
        this.split.setSizes(this.props.sizes);
      }
    }
    if (Number.isInteger(collapsed) && (collapsed !== prevCollapsed || needsRecreate)) {
      this.split.collapse(collapsed);
    }
  };
  SplitWrapper2.prototype.componentWillUnmount = function componentWillUnmount() {
    this.split.destroy();
    delete this.split;
  };
  SplitWrapper2.prototype.render = function render() {
    var this$1 = this;
    var ref = this.props;
    ref.sizes;
    ref.minSize;
    ref.maxSize;
    ref.expandToMin;
    ref.gutterSize;
    ref.gutterAlign;
    ref.snapOffset;
    ref.dragInterval;
    ref.direction;
    ref.cursor;
    ref.gutter;
    ref.elementStyle;
    ref.gutterStyle;
    ref.onDrag;
    ref.onDragStart;
    ref.onDragEnd;
    ref.collapsed;
    var children = ref.children;
    var rest$1 = objectWithoutProperties(ref, ["sizes", "minSize", "maxSize", "expandToMin", "gutterSize", "gutterAlign", "snapOffset", "dragInterval", "direction", "cursor", "gutter", "elementStyle", "gutterStyle", "onDrag", "onDragStart", "onDragEnd", "collapsed", "children"]);
    var rest = rest$1;
    return import_react5.default.createElement(
      "div",
      Object.assign(
        {},
        { ref: function(parent) {
          this$1.parent = parent;
        } },
        rest
      ),
      children
    );
  };
  return SplitWrapper2;
}(import_react5.default.Component);
SplitWrapper.propTypes = {
  sizes: import_prop_types.default.arrayOf(import_prop_types.default.number),
  minSize: import_prop_types.default.oneOfType([
    import_prop_types.default.number,
    import_prop_types.default.arrayOf(import_prop_types.default.number)
  ]),
  maxSize: import_prop_types.default.oneOfType([
    import_prop_types.default.number,
    import_prop_types.default.arrayOf(import_prop_types.default.number)
  ]),
  expandToMin: import_prop_types.default.bool,
  gutterSize: import_prop_types.default.number,
  gutterAlign: import_prop_types.default.string,
  snapOffset: import_prop_types.default.oneOfType([
    import_prop_types.default.number,
    import_prop_types.default.arrayOf(import_prop_types.default.number)
  ]),
  dragInterval: import_prop_types.default.number,
  direction: import_prop_types.default.string,
  cursor: import_prop_types.default.string,
  gutter: import_prop_types.default.func,
  elementStyle: import_prop_types.default.func,
  gutterStyle: import_prop_types.default.func,
  onDrag: import_prop_types.default.func,
  onDragStart: import_prop_types.default.func,
  onDragEnd: import_prop_types.default.func,
  collapsed: import_prop_types.default.number,
  children: import_prop_types.default.arrayOf(import_prop_types.default.element)
};
SplitWrapper.defaultProps = {
  sizes: void 0,
  minSize: void 0,
  maxSize: void 0,
  expandToMin: void 0,
  gutterSize: void 0,
  gutterAlign: void 0,
  snapOffset: void 0,
  dragInterval: void 0,
  direction: void 0,
  cursor: void 0,
  gutter: void 0,
  elementStyle: void 0,
  gutterStyle: void 0,
  onDrag: void 0,
  onDragStart: void 0,
  onDragEnd: void 0,
  collapsed: void 0,
  children: void 0
};
var react_split_es_default = SplitWrapper;

// app/routes/apps/todo/gantt/GanttChart.jsx
var import_react7 = __toESM(require_react(), 1);

// app/@hk-components/@hk-gantt/gantt-master/src/date_utils.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-gantt/gantt-master/src/date_utils.js"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var YEAR = "year";
var MONTH = "month";
var DAY = "day";
var HOUR = "hour";
var MINUTE = "minute";
var SECOND = "second";
var MILLISECOND = "millisecond";
var date_utils_default = {
  parse(date, date_separator = "-", time_separator = /[.:]/) {
    if (date instanceof Date) {
      return date;
    }
    if (typeof date === "string") {
      let date_parts, time_parts;
      const parts = date.split(" ");
      date_parts = parts[0].split(date_separator).map((val) => parseInt(val, 10));
      time_parts = parts[1] && parts[1].split(time_separator);
      date_parts[1] = date_parts[1] - 1;
      let vals = date_parts;
      if (time_parts && time_parts.length) {
        if (time_parts.length == 4) {
          time_parts[3] = "0." + time_parts[3];
          time_parts[3] = parseFloat(time_parts[3]) * 1e3;
        }
        vals = vals.concat(time_parts);
      }
      return new Date(...vals);
    }
  },
  to_string(date, with_time = false) {
    if (!(date instanceof Date)) {
      throw new TypeError("Invalid argument type");
    }
    const vals = this.get_date_values(date).map((val, i) => {
      if (i === 1) {
        val = val + 1;
      }
      if (i === 6) {
        return padStart(val + "", 3, "0");
      }
      return padStart(val + "", 2, "0");
    });
    const date_string = `${vals[0]}-${vals[1]}-${vals[2]}`;
    const time_string = `${vals[3]}:${vals[4]}:${vals[5]}.${vals[6]}`;
    return date_string + (with_time ? " " + time_string : "");
  },
  format(date, format_string = "YYYY-MM-DD HH:mm:ss.SSS", lang = "en") {
    const dateTimeFormat = new Intl.DateTimeFormat(lang, {
      month: "long"
    });
    const month_name = dateTimeFormat.format(date);
    const month_name_capitalized = month_name.charAt(0).toUpperCase() + month_name.slice(1);
    const values = this.get_date_values(date).map((d) => padStart(d, 2, 0));
    const format_map = {
      YYYY: values[0],
      MM: padStart(+values[1] + 1, 2, 0),
      DD: values[2],
      HH: values[3],
      mm: values[4],
      ss: values[5],
      SSS: values[6],
      D: values[2],
      MMMM: month_name_capitalized,
      MMM: month_name_capitalized
    };
    let str = format_string;
    const formatted_values = [];
    Object.keys(format_map).sort((a, b) => b.length - a.length).forEach((key) => {
      if (str.includes(key)) {
        str = str.replace(key, `$${formatted_values.length}`);
        formatted_values.push(format_map[key]);
      }
    });
    formatted_values.forEach((value, i) => {
      str = str.replace(`$${i}`, value);
    });
    return str;
  },
  diff(date_a, date_b, scale = DAY) {
    let milliseconds, seconds, hours, minutes, days, months, years;
    milliseconds = date_a - date_b;
    seconds = milliseconds / 1e3;
    minutes = seconds / 60;
    hours = minutes / 60;
    days = hours / 24;
    months = days / 30;
    years = months / 12;
    if (!scale.endsWith("s")) {
      scale += "s";
    }
    return Math.floor(
      {
        milliseconds,
        seconds,
        minutes,
        hours,
        days,
        months,
        years
      }[scale]
    );
  },
  today() {
    const vals = this.get_date_values(/* @__PURE__ */ new Date()).slice(0, 3);
    return new Date(...vals);
  },
  now() {
    return /* @__PURE__ */ new Date();
  },
  add(date, qty, scale) {
    qty = parseInt(qty, 10);
    const vals = [
      date.getFullYear() + (scale === YEAR ? qty : 0),
      date.getMonth() + (scale === MONTH ? qty : 0),
      date.getDate() + (scale === DAY ? qty : 0),
      date.getHours() + (scale === HOUR ? qty : 0),
      date.getMinutes() + (scale === MINUTE ? qty : 0),
      date.getSeconds() + (scale === SECOND ? qty : 0),
      date.getMilliseconds() + (scale === MILLISECOND ? qty : 0)
    ];
    return new Date(...vals);
  },
  start_of(date, scale) {
    const scores = {
      [YEAR]: 6,
      [MONTH]: 5,
      [DAY]: 4,
      [HOUR]: 3,
      [MINUTE]: 2,
      [SECOND]: 1,
      [MILLISECOND]: 0
    };
    function should_reset(_scale) {
      const max_score = scores[scale];
      return scores[_scale] <= max_score;
    }
    const vals = [
      date.getFullYear(),
      should_reset(YEAR) ? 0 : date.getMonth(),
      should_reset(MONTH) ? 1 : date.getDate(),
      should_reset(DAY) ? 0 : date.getHours(),
      should_reset(HOUR) ? 0 : date.getMinutes(),
      should_reset(MINUTE) ? 0 : date.getSeconds(),
      should_reset(SECOND) ? 0 : date.getMilliseconds()
    ];
    return new Date(...vals);
  },
  clone(date) {
    return new Date(...this.get_date_values(date));
  },
  get_date_values(date) {
    return [
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    ];
  },
  get_days_in_month(date) {
    const no_of_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const month = date.getMonth();
    if (month !== 1) {
      return no_of_days[month];
    }
    const year = date.getFullYear();
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
      return 29;
    }
    return 28;
  }
};
function padStart(str, targetLength, padString) {
  str = str + "";
  targetLength = targetLength >> 0;
  padString = String(typeof padString !== "undefined" ? padString : " ");
  if (str.length > targetLength) {
    return String(str);
  } else {
    targetLength = targetLength - str.length;
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(str);
  }
}

// app/@hk-components/@hk-gantt/gantt-master/src/svg_utils.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-gantt/gantt-master/src/svg_utils.js"
  );
  import.meta.hot.lastModified = "1732594846000";
}
function $(expr, con) {
  return typeof expr === "string" ? (con || document).querySelector(expr) : expr || null;
}
function createSVG(tag, attrs) {
  const elem = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (let attr in attrs) {
    if (attr === "append_to") {
      const parent = attrs.append_to;
      parent.appendChild(elem);
    } else if (attr === "innerHTML") {
      elem.innerHTML = attrs.innerHTML;
    } else {
      elem.setAttribute(attr, attrs[attr]);
    }
  }
  return elem;
}
function animateSVG(svgElement, attr, from, to) {
  const animatedSvgElement = getAnimationElement(svgElement, attr, from, to);
  if (animatedSvgElement === svgElement) {
    const event = document.createEvent("HTMLEvents");
    event.initEvent("click", true, true);
    event.eventName = "click";
    animatedSvgElement.dispatchEvent(event);
  }
}
function getAnimationElement(svgElement, attr, from, to, dur = "0.4s", begin = "0.1s") {
  const animEl = svgElement.querySelector("animate");
  if (animEl) {
    $.attr(animEl, {
      attributeName: attr,
      from,
      to,
      dur,
      begin: "click + " + begin
      // artificial click
    });
    return svgElement;
  }
  const animateElement = createSVG("animate", {
    attributeName: attr,
    from,
    to,
    dur,
    begin,
    calcMode: "spline",
    values: from + ";" + to,
    keyTimes: "0; 1",
    keySplines: cubic_bezier("ease-out")
  });
  svgElement.appendChild(animateElement);
  return svgElement;
}
function cubic_bezier(name) {
  return {
    ease: ".25 .1 .25 1",
    linear: "0 0 1 1",
    "ease-in": ".42 0 1 1",
    "ease-out": "0 0 .58 1",
    "ease-in-out": ".42 0 .58 1"
  }[name];
}
$.on = (element, event, selector, callback) => {
  if (!callback) {
    callback = selector;
    $.bind(element, event, callback);
  } else {
    $.delegate(element, event, selector, callback);
  }
};
$.off = (element, event, handler) => {
  element.removeEventListener(event, handler);
};
$.bind = (element, event, callback) => {
  event.split(/\s+/).forEach(function(event2) {
    element.addEventListener(event2, callback);
  });
};
$.delegate = (element, event, selector, callback) => {
  element.addEventListener(event, function(e) {
    const delegatedTarget = e.target.closest(selector);
    if (delegatedTarget) {
      e.delegatedTarget = delegatedTarget;
      callback.call(this, e, delegatedTarget);
    }
  });
};
$.closest = (selector, element) => {
  if (!element)
    return null;
  if (element.matches(selector)) {
    return element;
  }
  return $.closest(selector, element.parentNode);
};
$.attr = (element, attr, value) => {
  if (!value && typeof attr === "string") {
    return element.getAttribute(attr);
  }
  if (typeof attr === "object") {
    for (let key in attr) {
      $.attr(element, key, attr[key]);
    }
    return;
  }
  element.setAttribute(attr, value);
};

// app/@hk-components/@hk-gantt/gantt-master/src/bar.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-gantt/gantt-master/src/bar.js"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var Bar = class {
  constructor(gantt, task) {
    this.set_defaults(gantt, task);
    this.prepare();
    this.draw();
    this.bind();
  }
  set_defaults(gantt, task) {
    this.action_completed = false;
    this.gantt = gantt;
    this.task = task;
  }
  prepare() {
    this.prepare_values();
    this.prepare_helpers();
  }
  prepare_values() {
    this.invalid = this.task.invalid;
    this.height = this.gantt.options.bar_height;
    this.x = this.compute_x();
    this.y = this.compute_y();
    this.corner_radius = this.gantt.options.bar_corner_radius;
    this.duration = date_utils_default.diff(this.task._end, this.task._start, "hour") / this.gantt.options.step;
    this.width = this.gantt.options.column_width * this.duration;
    this.progress_width = this.gantt.options.column_width * this.duration * (this.task.progress / 100) || 0;
    this.group = createSVG("g", {
      class: "bar-wrapper " + (this.task.custom_class || ""),
      "data-id": this.task.id
    });
    this.bar_group = createSVG("g", {
      class: "bar-group",
      append_to: this.group
    });
    this.handle_group = createSVG("g", {
      class: "handle-group",
      append_to: this.group
    });
  }
  prepare_helpers() {
    SVGElement.prototype.getX = function() {
      return +this.getAttribute("x");
    };
    SVGElement.prototype.getY = function() {
      return +this.getAttribute("y");
    };
    SVGElement.prototype.getWidth = function() {
      return +this.getAttribute("width");
    };
    SVGElement.prototype.getHeight = function() {
      return +this.getAttribute("height");
    };
    SVGElement.prototype.getEndX = function() {
      return this.getX() + this.getWidth();
    };
  }
  draw() {
    this.draw_bar();
    this.draw_progress_bar();
    this.draw_label();
    this.draw_resize_handles();
  }
  draw_bar() {
    this.$bar = createSVG("rect", {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      rx: this.corner_radius,
      ry: this.corner_radius,
      class: "bar",
      append_to: this.bar_group
    });
    animateSVG(this.$bar, "width", 0, this.width);
    if (this.invalid) {
      this.$bar.classList.add("bar-invalid");
    }
  }
  draw_progress_bar() {
    if (this.invalid)
      return;
    this.$bar_progress = createSVG("rect", {
      x: this.x,
      y: this.y,
      width: this.progress_width,
      height: this.height,
      rx: this.corner_radius,
      ry: this.corner_radius,
      class: "bar-progress",
      append_to: this.bar_group
    });
    animateSVG(this.$bar_progress, "width", 0, this.progress_width);
  }
  draw_label() {
    createSVG("text", {
      x: this.x + this.width / 2,
      y: this.y + this.height / 2,
      innerHTML: this.task.name,
      class: "bar-label",
      append_to: this.bar_group
    });
    requestAnimationFrame(() => this.update_label_position());
  }
  draw_resize_handles() {
    if (this.invalid)
      return;
    const bar = this.$bar;
    const handle_width = 8;
    createSVG("rect", {
      x: bar.getX() + bar.getWidth() - 9,
      y: bar.getY() + 1,
      width: handle_width,
      height: this.height - 2,
      rx: this.corner_radius,
      ry: this.corner_radius,
      class: "handle right",
      append_to: this.handle_group
    });
    createSVG("rect", {
      x: bar.getX() + 1,
      y: bar.getY() + 1,
      width: handle_width,
      height: this.height - 2,
      rx: this.corner_radius,
      ry: this.corner_radius,
      class: "handle left",
      append_to: this.handle_group
    });
    if (this.task.progress && this.task.progress < 100) {
      this.$handle_progress = createSVG("polygon", {
        points: this.get_progress_polygon_points().join(","),
        class: "handle progress",
        append_to: this.handle_group
      });
    }
  }
  get_progress_polygon_points() {
    const bar_progress = this.$bar_progress;
    return [
      bar_progress.getEndX() - 5,
      bar_progress.getY() + bar_progress.getHeight(),
      bar_progress.getEndX() + 5,
      bar_progress.getY() + bar_progress.getHeight(),
      bar_progress.getEndX(),
      bar_progress.getY() + bar_progress.getHeight() - 8.66
    ];
  }
  bind() {
    if (this.invalid)
      return;
    this.setup_click_event();
  }
  setup_click_event() {
    $.on(this.group, "focus " + this.gantt.options.popup_trigger, (e) => {
      if (this.action_completed) {
        return;
      }
      this.show_popup();
      this.gantt.unselect_all();
      this.group.classList.add("active");
    });
    $.on(this.group, "dblclick", (e) => {
      if (this.action_completed) {
        return;
      }
      this.gantt.trigger_event("click", [this.task]);
    });
  }
  show_popup() {
    if (this.gantt.bar_being_dragged)
      return;
    const start_date = date_utils_default.format(
      this.task._start,
      "MMM D",
      this.gantt.options.language
    );
    const end_date = date_utils_default.format(
      date_utils_default.add(this.task._end, -1, "second"),
      "MMM D",
      this.gantt.options.language
    );
    const subtitle = start_date + " - " + end_date;
    this.gantt.show_popup({
      target_element: this.$bar,
      title: this.task.name,
      subtitle,
      task: this.task
    });
  }
  update_bar_position({ x = null, width = null }) {
    const bar = this.$bar;
    if (x) {
      const xs = this.task.dependencies.map((dep) => {
        return this.gantt.get_bar(dep).$bar.getX();
      });
      const valid_x = xs.reduce((prev, curr) => {
        return x >= curr;
      }, x);
      if (!valid_x) {
        width = null;
        return;
      }
      this.update_attr(bar, "x", x);
    }
    if (width && width >= this.gantt.options.column_width) {
      this.update_attr(bar, "width", width);
    }
    this.update_label_position();
    this.update_handle_position();
    this.update_progressbar_position();
    this.update_arrow_position();
  }
  date_changed() {
    let changed = false;
    const { new_start_date, new_end_date } = this.compute_start_end_date();
    if (Number(this.task._start) !== Number(new_start_date)) {
      changed = true;
      this.task._start = new_start_date;
    }
    if (Number(this.task._end) !== Number(new_end_date)) {
      changed = true;
      this.task._end = new_end_date;
    }
    if (!changed)
      return;
    this.gantt.trigger_event("date_change", [
      this.task,
      new_start_date,
      date_utils_default.add(new_end_date, -1, "second")
    ]);
  }
  progress_changed() {
    const new_progress = this.compute_progress();
    this.task.progress = new_progress;
    this.gantt.trigger_event("progress_change", [this.task, new_progress]);
  }
  set_action_completed() {
    this.action_completed = true;
    setTimeout(() => this.action_completed = false, 1e3);
  }
  compute_start_end_date() {
    const bar = this.$bar;
    const x_in_units = bar.getX() / this.gantt.options.column_width;
    const new_start_date = date_utils_default.add(
      this.gantt.gantt_start,
      x_in_units * this.gantt.options.step,
      "hour"
    );
    const width_in_units = bar.getWidth() / this.gantt.options.column_width;
    const new_end_date = date_utils_default.add(
      new_start_date,
      width_in_units * this.gantt.options.step,
      "hour"
    );
    return { new_start_date, new_end_date };
  }
  compute_progress() {
    const progress = this.$bar_progress.getWidth() / this.$bar.getWidth() * 100;
    return parseInt(progress, 10);
  }
  compute_x() {
    const { step, column_width } = this.gantt.options;
    const task_start = this.task._start;
    const gantt_start = this.gantt.gantt_start;
    const diff = date_utils_default.diff(task_start, gantt_start, "hour");
    let x = diff / step * column_width;
    if (this.gantt.view_is("Month")) {
      const diff2 = date_utils_default.diff(task_start, gantt_start, "day");
      x = diff2 * column_width / 30;
    }
    return x;
  }
  compute_y() {
    return this.gantt.options.header_height + this.gantt.options.padding + this.task._index * (this.height + this.gantt.options.padding);
  }
  get_snap_position(dx) {
    let odx = dx, rem, position;
    if (this.gantt.view_is("Week")) {
      rem = dx % (this.gantt.options.column_width / 7);
      position = odx - rem + (rem < this.gantt.options.column_width / 14 ? 0 : this.gantt.options.column_width / 7);
    } else if (this.gantt.view_is("Month")) {
      rem = dx % (this.gantt.options.column_width / 30);
      position = odx - rem + (rem < this.gantt.options.column_width / 60 ? 0 : this.gantt.options.column_width / 30);
    } else {
      rem = dx % this.gantt.options.column_width;
      position = odx - rem + (rem < this.gantt.options.column_width / 2 ? 0 : this.gantt.options.column_width);
    }
    return position;
  }
  update_attr(element, attr, value) {
    value = +value;
    if (!isNaN(value)) {
      element.setAttribute(attr, value);
    }
    return element;
  }
  update_progressbar_position() {
    if (this.invalid)
      return;
    this.$bar_progress.setAttribute("x", this.$bar.getX());
    this.$bar_progress.setAttribute(
      "width",
      this.$bar.getWidth() * (this.task.progress / 100)
    );
  }
  update_label_position() {
    const bar = this.$bar, label = this.group.querySelector(".bar-label");
    if (label.getBBox().width > bar.getWidth()) {
      label.classList.add("big");
      label.setAttribute("x", bar.getX() + bar.getWidth() + 5);
    } else {
      label.classList.remove("big");
      label.setAttribute("x", bar.getX() + bar.getWidth() / 2);
    }
  }
  update_handle_position() {
    if (this.invalid)
      return;
    const bar = this.$bar;
    this.handle_group.querySelector(".handle.left").setAttribute("x", bar.getX() + 1);
    this.handle_group.querySelector(".handle.right").setAttribute("x", bar.getEndX() - 9);
    const handle = this.group.querySelector(".handle.progress");
    handle && handle.setAttribute("points", this.get_progress_polygon_points());
  }
  update_arrow_position() {
    this.arrows = this.arrows || [];
    for (let arrow of this.arrows) {
      arrow.update();
    }
  }
};

// app/@hk-components/@hk-gantt/gantt-master/src/arrow.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-gantt/gantt-master/src/arrow.js"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var Arrow = class {
  constructor(gantt, from_task, to_task) {
    this.gantt = gantt;
    this.from_task = from_task;
    this.to_task = to_task;
    this.calculate_path();
    this.draw();
  }
  calculate_path() {
    let start_x = this.from_task.$bar.getX() + this.from_task.$bar.getWidth() / 2;
    const condition = () => this.to_task.$bar.getX() < start_x + this.gantt.options.padding && start_x > this.from_task.$bar.getX() + this.gantt.options.padding;
    while (condition()) {
      start_x -= 10;
    }
    const start_y = this.gantt.options.header_height + this.gantt.options.bar_height + (this.gantt.options.padding + this.gantt.options.bar_height) * this.from_task.task._index + this.gantt.options.padding;
    const end_x = this.to_task.$bar.getX() - this.gantt.options.padding / 2;
    const end_y = this.gantt.options.header_height + this.gantt.options.bar_height / 2 + (this.gantt.options.padding + this.gantt.options.bar_height) * this.to_task.task._index + this.gantt.options.padding;
    const from_is_below_to = this.from_task.task._index > this.to_task.task._index;
    const curve = this.gantt.options.arrow_curve;
    const clockwise = from_is_below_to ? 1 : 0;
    const curve_y = from_is_below_to ? -curve : curve;
    const offset = from_is_below_to ? end_y + this.gantt.options.arrow_curve : end_y - this.gantt.options.arrow_curve;
    this.path = `
            M ${start_x} ${start_y}
            V ${offset}
            a ${curve} ${curve} 0 0 ${clockwise} ${curve} ${curve_y}
            L ${end_x} ${end_y}
            m -5 -5
            l 5 5
            l -5 5`;
    if (this.to_task.$bar.getX() < this.from_task.$bar.getX() + this.gantt.options.padding) {
      const down_1 = this.gantt.options.padding / 2 - curve;
      const down_2 = this.to_task.$bar.getY() + this.to_task.$bar.getHeight() / 2 - curve_y;
      const left = this.to_task.$bar.getX() - this.gantt.options.padding;
      this.path = `
                M ${start_x} ${start_y}
                v ${down_1}
                a ${curve} ${curve} 0 0 1 -${curve} ${curve}
                H ${left}
                a ${curve} ${curve} 0 0 ${clockwise} -${curve} ${curve_y}
                V ${down_2}
                a ${curve} ${curve} 0 0 ${clockwise} ${curve} ${curve_y}
                L ${end_x} ${end_y}
                m -5 -5
                l 5 5
                l -5 5`;
    }
  }
  draw() {
    this.element = createSVG("path", {
      d: this.path,
      "data-from": this.from_task.task.id,
      "data-to": this.to_task.task.id
    });
  }
  update() {
    this.calculate_path();
    this.element.setAttribute("d", this.path);
  }
};

// app/@hk-components/@hk-gantt/gantt-master/src/popup.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-gantt/gantt-master/src/popup.js"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var Popup = class {
  constructor(parent, custom_html) {
    this.parent = parent;
    this.custom_html = custom_html;
    this.make();
  }
  make() {
    this.parent.innerHTML = `
            <div class="title"></div>
            <div class="subtitle"></div>
            <div class="pointer"></div>
        `;
    this.hide();
    this.title = this.parent.querySelector(".title");
    this.subtitle = this.parent.querySelector(".subtitle");
    this.pointer = this.parent.querySelector(".pointer");
  }
  show(options) {
    if (!options.target_element) {
      throw new Error("target_element is required to show popup");
    }
    if (!options.position) {
      options.position = "left";
    }
    const target_element = options.target_element;
    if (this.custom_html) {
      let html = this.custom_html(options.task);
      html += '<div class="pointer"></div>';
      this.parent.innerHTML = html;
      this.pointer = this.parent.querySelector(".pointer");
    } else {
      this.title.innerHTML = options.title;
      this.subtitle.innerHTML = options.subtitle;
      this.parent.style.width = this.parent.clientWidth + "px";
    }
    let position_meta;
    if (target_element instanceof HTMLElement) {
      position_meta = target_element.getBoundingClientRect();
    } else if (target_element instanceof SVGElement) {
      position_meta = options.target_element.getBBox();
    }
    if (options.position === "left") {
      this.parent.style.left = position_meta.x + (position_meta.width + 10) + "px";
      this.parent.style.top = position_meta.y + "px";
      this.pointer.style.transform = "rotateZ(90deg)";
      this.pointer.style.left = "-7px";
      this.pointer.style.top = "2px";
    }
    this.parent.style.opacity = 1;
  }
  hide() {
    this.parent.style.opacity = 0;
    this.parent.style.left = 0;
  }
};

// app/@hk-components/@hk-gantt/gantt-master/src/index.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-gantt/gantt-master/src/index.js"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var VIEW_MODE = {
  QUARTER_DAY: "Quarter Day",
  HALF_DAY: "Half Day",
  DAY: "Day",
  WEEK: "Week",
  MONTH: "Month",
  YEAR: "Year"
};
var Gantt = class {
  constructor(wrapper, tasks, options) {
    this.setup_wrapper(wrapper);
    this.setup_options(options);
    this.setup_tasks(tasks);
    this.change_view_mode();
    this.bind_events();
  }
  setup_wrapper(element) {
    let svg_element, wrapper_element;
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if (element instanceof HTMLElement) {
      wrapper_element = element;
      svg_element = element.querySelector("svg");
    } else if (element instanceof SVGElement) {
      svg_element = element;
    } else {
      throw new TypeError(
        "Frapp\xE9 Gantt only supports usage of a string CSS selector, HTML DOM element or SVG DOM element for the 'element' parameter"
      );
    }
    if (!svg_element) {
      this.$svg = createSVG("svg", {
        append_to: wrapper_element,
        class: "gantt"
      });
    } else {
      this.$svg = svg_element;
      this.$svg.classList.add("gantt");
    }
    this.$container = document.createElement("div");
    this.$container.classList.add("gantt-container");
    const parent_element = this.$svg.parentElement;
    parent_element.appendChild(this.$container);
    this.$container.appendChild(this.$svg);
    this.popup_wrapper = document.createElement("div");
    this.popup_wrapper.classList.add("popup-wrapper");
    this.$container.appendChild(this.popup_wrapper);
  }
  setup_options(options) {
    const default_options = {
      header_height: 50,
      column_width: 30,
      step: 24,
      view_modes: [...Object.values(VIEW_MODE)],
      bar_height: 20,
      bar_corner_radius: 3,
      arrow_curve: 5,
      padding: 18,
      view_mode: "Day",
      date_format: "YYYY-MM-DD",
      popup_trigger: "click",
      custom_popup_html: null,
      language: "en"
    };
    this.options = Object.assign({}, default_options, options);
  }
  setup_tasks(tasks) {
    this.tasks = tasks.map((task, i) => {
      task._start = date_utils_default.parse(task.start);
      task._end = date_utils_default.parse(task.end);
      if (date_utils_default.diff(task._end, task._start, "year") > 10) {
        task.end = null;
      }
      task._index = i;
      if (!task.start && !task.end) {
        const today = date_utils_default.today();
        task._start = today;
        task._end = date_utils_default.add(today, 2, "day");
      }
      if (!task.start && task.end) {
        task._start = date_utils_default.add(task._end, -2, "day");
      }
      if (task.start && !task.end) {
        task._end = date_utils_default.add(task._start, 2, "day");
      }
      const task_end_values = date_utils_default.get_date_values(task._end);
      if (task_end_values.slice(3).every((d) => d === 0)) {
        task._end = date_utils_default.add(task._end, 24, "hour");
      }
      if (!task.start || !task.end) {
        task.invalid = true;
      }
      if (typeof task.dependencies === "string" || !task.dependencies) {
        let deps = [];
        if (task.dependencies) {
          deps = task.dependencies.split(",").map((d) => d.trim()).filter((d) => d);
        }
        task.dependencies = deps;
      }
      if (!task.id) {
        task.id = generate_id(task);
      }
      return task;
    });
    this.setup_dependencies();
  }
  setup_dependencies() {
    this.dependency_map = {};
    for (let t of this.tasks) {
      for (let d of t.dependencies) {
        this.dependency_map[d] = this.dependency_map[d] || [];
        this.dependency_map[d].push(t.id);
      }
    }
  }
  refresh(tasks) {
    this.setup_tasks(tasks);
    this.change_view_mode();
  }
  change_view_mode(mode = this.options.view_mode) {
    this.update_view_scale(mode);
    this.setup_dates();
    this.render();
    this.trigger_event("view_change", [mode]);
  }
  update_view_scale(view_mode) {
    this.options.view_mode = view_mode;
    if (view_mode === VIEW_MODE.DAY) {
      this.options.step = 24;
      this.options.column_width = 38;
    } else if (view_mode === VIEW_MODE.HALF_DAY) {
      this.options.step = 24 / 2;
      this.options.column_width = 38;
    } else if (view_mode === VIEW_MODE.QUARTER_DAY) {
      this.options.step = 24 / 4;
      this.options.column_width = 38;
    } else if (view_mode === VIEW_MODE.WEEK) {
      this.options.step = 24 * 7;
      this.options.column_width = 140;
    } else if (view_mode === VIEW_MODE.MONTH) {
      this.options.step = 24 * 30;
      this.options.column_width = 120;
    } else if (view_mode === VIEW_MODE.YEAR) {
      this.options.step = 24 * 365;
      this.options.column_width = 120;
    }
  }
  setup_dates() {
    this.setup_gantt_dates();
    this.setup_date_values();
  }
  setup_gantt_dates() {
    this.gantt_start = this.gantt_end = null;
    for (let task of this.tasks) {
      if (!this.gantt_start || task._start < this.gantt_start) {
        this.gantt_start = task._start;
      }
      if (!this.gantt_end || task._end > this.gantt_end) {
        this.gantt_end = task._end;
      }
    }
    this.gantt_start = date_utils_default.start_of(this.gantt_start, "day");
    this.gantt_end = date_utils_default.start_of(this.gantt_end, "day");
    if (this.view_is([VIEW_MODE.QUARTER_DAY, VIEW_MODE.HALF_DAY])) {
      this.gantt_start = date_utils_default.add(this.gantt_start, -7, "day");
      this.gantt_end = date_utils_default.add(this.gantt_end, 7, "day");
    } else if (this.view_is(VIEW_MODE.MONTH)) {
      this.gantt_start = date_utils_default.start_of(this.gantt_start, "year");
      this.gantt_end = date_utils_default.add(this.gantt_end, 1, "year");
    } else if (this.view_is(VIEW_MODE.YEAR)) {
      this.gantt_start = date_utils_default.add(this.gantt_start, -2, "year");
      this.gantt_end = date_utils_default.add(this.gantt_end, 2, "year");
    } else {
      this.gantt_start = date_utils_default.add(this.gantt_start, -1, "month");
      this.gantt_end = date_utils_default.add(this.gantt_end, 1, "month");
    }
  }
  setup_date_values() {
    this.dates = [];
    let cur_date = null;
    while (cur_date === null || cur_date < this.gantt_end) {
      if (!cur_date) {
        cur_date = date_utils_default.clone(this.gantt_start);
      } else {
        if (this.view_is(VIEW_MODE.YEAR)) {
          cur_date = date_utils_default.add(cur_date, 1, "year");
        } else if (this.view_is(VIEW_MODE.MONTH)) {
          cur_date = date_utils_default.add(cur_date, 1, "month");
        } else {
          cur_date = date_utils_default.add(
            cur_date,
            this.options.step,
            "hour"
          );
        }
      }
      this.dates.push(cur_date);
    }
  }
  bind_events() {
    this.bind_grid_click();
    this.bind_bar_events();
  }
  render() {
    this.clear();
    this.setup_layers();
    this.make_grid();
    this.make_dates();
    this.make_bars();
    this.make_arrows();
    this.map_arrows_on_bars();
    this.set_width();
    this.set_scroll_position();
  }
  setup_layers() {
    this.layers = {};
    const layers = ["grid", "date", "arrow", "progress", "bar", "details"];
    for (let layer of layers) {
      this.layers[layer] = createSVG("g", {
        class: layer,
        append_to: this.$svg
      });
    }
  }
  make_grid() {
    this.make_grid_background();
    this.make_grid_rows();
    this.make_grid_header();
    this.make_grid_ticks();
    this.make_grid_highlights();
  }
  make_grid_background() {
    const grid_width = this.dates.length * this.options.column_width;
    const grid_height = this.options.header_height + this.options.padding + (this.options.bar_height + this.options.padding) * this.tasks.length;
    createSVG("rect", {
      x: 0,
      y: 0,
      width: grid_width,
      height: grid_height,
      class: "grid-background",
      append_to: this.layers.grid
    });
    $.attr(this.$svg, {
      height: grid_height + this.options.padding + 100,
      width: "100%"
    });
  }
  make_grid_rows() {
    const rows_layer = createSVG("g", { append_to: this.layers.grid });
    const lines_layer = createSVG("g", { append_to: this.layers.grid });
    const row_width = this.dates.length * this.options.column_width;
    const row_height = this.options.bar_height + this.options.padding;
    let row_y = this.options.header_height + this.options.padding / 2;
    for (let task of this.tasks) {
      createSVG("rect", {
        x: 0,
        y: row_y,
        width: row_width,
        height: row_height,
        class: "grid-row",
        append_to: rows_layer
      });
      createSVG("line", {
        x1: 0,
        y1: row_y + row_height,
        x2: row_width,
        y2: row_y + row_height,
        class: "row-line",
        append_to: lines_layer
      });
      row_y += this.options.bar_height + this.options.padding;
    }
  }
  make_grid_header() {
    const header_width = this.dates.length * this.options.column_width;
    const header_height = this.options.header_height + 10;
    createSVG("rect", {
      x: 0,
      y: 0,
      width: header_width,
      height: header_height,
      class: "grid-header",
      append_to: this.layers.grid
    });
  }
  make_grid_ticks() {
    let tick_x = 0;
    let tick_y = this.options.header_height + this.options.padding / 2;
    let tick_height = (this.options.bar_height + this.options.padding) * this.tasks.length;
    for (let date of this.dates) {
      let tick_class = "tick";
      if (this.view_is(VIEW_MODE.DAY) && date.getDate() === 1) {
        tick_class += " thick";
      }
      if (this.view_is(VIEW_MODE.WEEK) && date.getDate() >= 1 && date.getDate() < 8) {
        tick_class += " thick";
      }
      if (this.view_is(VIEW_MODE.MONTH) && date.getMonth() % 3 === 0) {
        tick_class += " thick";
      }
      createSVG("path", {
        d: `M ${tick_x} ${tick_y} v ${tick_height}`,
        class: tick_class,
        append_to: this.layers.grid
      });
      if (this.view_is(VIEW_MODE.MONTH)) {
        tick_x += date_utils_default.get_days_in_month(date) * this.options.column_width / 30;
      } else {
        tick_x += this.options.column_width;
      }
    }
  }
  make_grid_highlights() {
    if (this.view_is(VIEW_MODE.DAY)) {
      const x = date_utils_default.diff(date_utils_default.today(), this.gantt_start, "hour") / this.options.step * this.options.column_width;
      const y = 0;
      const width = this.options.column_width;
      const height = (this.options.bar_height + this.options.padding) * this.tasks.length + this.options.header_height + this.options.padding / 2;
      createSVG("rect", {
        x,
        y,
        width,
        height,
        class: "today-highlight",
        append_to: this.layers.grid
      });
    }
  }
  make_dates() {
    for (let date of this.get_dates_to_draw()) {
      createSVG("text", {
        x: date.lower_x,
        y: date.lower_y,
        innerHTML: date.lower_text,
        class: "lower-text",
        append_to: this.layers.date
      });
      if (date.upper_text) {
        const $upper_text = createSVG("text", {
          x: date.upper_x,
          y: date.upper_y,
          innerHTML: date.upper_text,
          class: "upper-text",
          append_to: this.layers.date
        });
        if ($upper_text.getBBox().x2 > this.layers.grid.getBBox().width) {
          $upper_text.remove();
        }
      }
    }
  }
  get_dates_to_draw() {
    let last_date = null;
    const dates = this.dates.map((date, i) => {
      const d = this.get_date_info(date, last_date, i);
      last_date = date;
      return d;
    });
    return dates;
  }
  get_date_info(date, last_date, i) {
    if (!last_date) {
      last_date = date_utils_default.add(date, 1, "year");
    }
    const date_text = {
      "Quarter Day_lower": date_utils_default.format(
        date,
        "HH",
        this.options.language
      ),
      "Half Day_lower": date_utils_default.format(
        date,
        "HH",
        this.options.language
      ),
      Day_lower: date.getDate() !== last_date.getDate() ? date_utils_default.format(date, "D", this.options.language) : "",
      Week_lower: date.getMonth() !== last_date.getMonth() ? date_utils_default.format(date, "D MMM", this.options.language) : date_utils_default.format(date, "D", this.options.language),
      Month_lower: date_utils_default.format(date, "MMMM", this.options.language),
      Year_lower: date_utils_default.format(date, "YYYY", this.options.language),
      "Quarter Day_upper": date.getDate() !== last_date.getDate() ? date_utils_default.format(date, "D MMM", this.options.language) : "",
      "Half Day_upper": date.getDate() !== last_date.getDate() ? date.getMonth() !== last_date.getMonth() ? date_utils_default.format(
        date,
        "D MMM",
        this.options.language
      ) : date_utils_default.format(date, "D", this.options.language) : "",
      Day_upper: date.getMonth() !== last_date.getMonth() ? date_utils_default.format(date, "MMMM", this.options.language) : "",
      Week_upper: date.getMonth() !== last_date.getMonth() ? date_utils_default.format(date, "MMMM", this.options.language) : "",
      Month_upper: date.getFullYear() !== last_date.getFullYear() ? date_utils_default.format(date, "YYYY", this.options.language) : "",
      Year_upper: date.getFullYear() !== last_date.getFullYear() ? date_utils_default.format(date, "YYYY", this.options.language) : ""
    };
    const base_pos = {
      x: i * this.options.column_width,
      lower_y: this.options.header_height,
      upper_y: this.options.header_height - 25
    };
    const x_pos = {
      "Quarter Day_lower": this.options.column_width * 4 / 2,
      "Quarter Day_upper": 0,
      "Half Day_lower": this.options.column_width * 2 / 2,
      "Half Day_upper": 0,
      Day_lower: this.options.column_width / 2,
      Day_upper: this.options.column_width * 30 / 2,
      Week_lower: 0,
      Week_upper: this.options.column_width * 4 / 2,
      Month_lower: this.options.column_width / 2,
      Month_upper: this.options.column_width * 12 / 2,
      Year_lower: this.options.column_width / 2,
      Year_upper: this.options.column_width * 30 / 2
    };
    return {
      upper_text: date_text[`${this.options.view_mode}_upper`],
      lower_text: date_text[`${this.options.view_mode}_lower`],
      upper_x: base_pos.x + x_pos[`${this.options.view_mode}_upper`],
      upper_y: base_pos.upper_y,
      lower_x: base_pos.x + x_pos[`${this.options.view_mode}_lower`],
      lower_y: base_pos.lower_y
    };
  }
  make_bars() {
    this.bars = this.tasks.map((task) => {
      const bar = new Bar(this, task);
      this.layers.bar.appendChild(bar.group);
      return bar;
    });
  }
  make_arrows() {
    this.arrows = [];
    for (let task of this.tasks) {
      let arrows = [];
      arrows = task.dependencies.map((task_id) => {
        const dependency = this.get_task(task_id);
        if (!dependency)
          return;
        const arrow = new Arrow(
          this,
          this.bars[dependency._index],
          // from_task
          this.bars[task._index]
          // to_task
        );
        this.layers.arrow.appendChild(arrow.element);
        return arrow;
      }).filter(Boolean);
      this.arrows = this.arrows.concat(arrows);
    }
  }
  map_arrows_on_bars() {
    for (let bar of this.bars) {
      bar.arrows = this.arrows.filter((arrow) => {
        return arrow.from_task.task.id === bar.task.id || arrow.to_task.task.id === bar.task.id;
      });
    }
  }
  set_width() {
    const cur_width = this.$svg.getBoundingClientRect().width;
    const actual_width = this.$svg.querySelector(".grid .grid-row").getAttribute("width");
    if (cur_width < actual_width) {
      this.$svg.setAttribute("width", actual_width);
    }
  }
  set_scroll_position() {
    const parent_element = this.$svg.parentElement;
    if (!parent_element)
      return;
    const hours_before_first_task = date_utils_default.diff(
      this.get_oldest_starting_date(),
      this.gantt_start,
      "hour"
    );
    const scroll_pos = hours_before_first_task / this.options.step * this.options.column_width - this.options.column_width;
    parent_element.scrollLeft = scroll_pos;
  }
  bind_grid_click() {
    $.on(
      this.$svg,
      this.options.popup_trigger,
      ".grid-row, .grid-header",
      () => {
        this.unselect_all();
        this.hide_popup();
      }
    );
  }
  bind_bar_events() {
    let is_dragging = false;
    let x_on_start = 0;
    let y_on_start = 0;
    let is_resizing_left = false;
    let is_resizing_right = false;
    let parent_bar_id = null;
    let bars = [];
    this.bar_being_dragged = null;
    function action_in_progress() {
      return is_dragging || is_resizing_left || is_resizing_right;
    }
    $.on(this.$svg, "mousedown", ".bar-wrapper, .handle", (e, element) => {
      const bar_wrapper = $.closest(".bar-wrapper", element);
      if (element.classList.contains("left")) {
        is_resizing_left = true;
      } else if (element.classList.contains("right")) {
        is_resizing_right = true;
      } else if (element.classList.contains("bar-wrapper")) {
        is_dragging = true;
      }
      bar_wrapper.classList.add("active");
      x_on_start = e.offsetX;
      y_on_start = e.offsetY;
      parent_bar_id = bar_wrapper.getAttribute("data-id");
      const ids = [
        parent_bar_id,
        ...this.get_all_dependent_tasks(parent_bar_id)
      ];
      bars = ids.map((id) => this.get_bar(id));
      this.bar_being_dragged = parent_bar_id;
      bars.forEach((bar) => {
        const $bar = bar.$bar;
        $bar.ox = $bar.getX();
        $bar.oy = $bar.getY();
        $bar.owidth = $bar.getWidth();
        $bar.finaldx = 0;
      });
    });
    $.on(this.$svg, "mousemove", (e) => {
      if (!action_in_progress())
        return;
      const dx = e.offsetX - x_on_start;
      const dy = e.offsetY - y_on_start;
      bars.forEach((bar) => {
        const $bar = bar.$bar;
        $bar.finaldx = this.get_snap_position(dx);
        this.hide_popup();
        if (is_resizing_left) {
          if (parent_bar_id === bar.task.id) {
            bar.update_bar_position({
              x: $bar.ox + $bar.finaldx,
              width: $bar.owidth - $bar.finaldx
            });
          } else {
            bar.update_bar_position({
              x: $bar.ox + $bar.finaldx
            });
          }
        } else if (is_resizing_right) {
          if (parent_bar_id === bar.task.id) {
            bar.update_bar_position({
              width: $bar.owidth + $bar.finaldx
            });
          }
        } else if (is_dragging) {
          bar.update_bar_position({ x: $bar.ox + $bar.finaldx });
        }
      });
    });
    document.addEventListener("mouseup", (e) => {
      if (is_dragging || is_resizing_left || is_resizing_right) {
        bars.forEach((bar) => bar.group.classList.remove("active"));
      }
      is_dragging = false;
      is_resizing_left = false;
      is_resizing_right = false;
    });
    $.on(this.$svg, "mouseup", (e) => {
      this.bar_being_dragged = null;
      bars.forEach((bar) => {
        const $bar = bar.$bar;
        if (!$bar.finaldx)
          return;
        bar.date_changed();
        bar.set_action_completed();
      });
    });
    this.bind_bar_progress();
  }
  bind_bar_progress() {
    let x_on_start = 0;
    let y_on_start = 0;
    let is_resizing = null;
    let bar = null;
    let $bar_progress = null;
    let $bar = null;
    $.on(this.$svg, "mousedown", ".handle.progress", (e, handle) => {
      is_resizing = true;
      x_on_start = e.offsetX;
      y_on_start = e.offsetY;
      const $bar_wrapper = $.closest(".bar-wrapper", handle);
      const id = $bar_wrapper.getAttribute("data-id");
      bar = this.get_bar(id);
      $bar_progress = bar.$bar_progress;
      $bar = bar.$bar;
      $bar_progress.finaldx = 0;
      $bar_progress.owidth = $bar_progress.getWidth();
      $bar_progress.min_dx = -$bar_progress.getWidth();
      $bar_progress.max_dx = $bar.getWidth() - $bar_progress.getWidth();
    });
    $.on(this.$svg, "mousemove", (e) => {
      if (!is_resizing)
        return;
      let dx = e.offsetX - x_on_start;
      let dy = e.offsetY - y_on_start;
      if (dx > $bar_progress.max_dx) {
        dx = $bar_progress.max_dx;
      }
      if (dx < $bar_progress.min_dx) {
        dx = $bar_progress.min_dx;
      }
      const $handle = bar.$handle_progress;
      $.attr($bar_progress, "width", $bar_progress.owidth + dx);
      $.attr($handle, "points", bar.get_progress_polygon_points());
      $bar_progress.finaldx = dx;
    });
    $.on(this.$svg, "mouseup", () => {
      is_resizing = false;
      if (!($bar_progress && $bar_progress.finaldx))
        return;
      bar.progress_changed();
      bar.set_action_completed();
    });
  }
  get_all_dependent_tasks(task_id) {
    let out = [];
    let to_process = [task_id];
    while (to_process.length) {
      const deps = to_process.reduce((acc, curr) => {
        acc = acc.concat(this.dependency_map[curr]);
        return acc;
      }, []);
      out = out.concat(deps);
      to_process = deps.filter((d) => !to_process.includes(d));
    }
    return out.filter(Boolean);
  }
  get_snap_position(dx) {
    let odx = dx, rem, position;
    if (this.view_is(VIEW_MODE.WEEK)) {
      rem = dx % (this.options.column_width / 7);
      position = odx - rem + (rem < this.options.column_width / 14 ? 0 : this.options.column_width / 7);
    } else if (this.view_is(VIEW_MODE.MONTH)) {
      rem = dx % (this.options.column_width / 30);
      position = odx - rem + (rem < this.options.column_width / 60 ? 0 : this.options.column_width / 30);
    } else {
      rem = dx % this.options.column_width;
      position = odx - rem + (rem < this.options.column_width / 2 ? 0 : this.options.column_width);
    }
    return position;
  }
  unselect_all() {
    [...this.$svg.querySelectorAll(".bar-wrapper")].forEach((el) => {
      el.classList.remove("active");
    });
  }
  view_is(modes) {
    if (typeof modes === "string") {
      return this.options.view_mode === modes;
    }
    if (Array.isArray(modes)) {
      return modes.some((mode) => this.options.view_mode === mode);
    }
    return false;
  }
  get_task(id) {
    return this.tasks.find((task) => {
      return task.id === id;
    });
  }
  get_bar(id) {
    return this.bars.find((bar) => {
      return bar.task.id === id;
    });
  }
  show_popup(options) {
    if (!this.popup) {
      this.popup = new Popup(
        this.popup_wrapper,
        this.options.custom_popup_html
      );
    }
    this.popup.show(options);
  }
  hide_popup() {
    this.popup && this.popup.hide();
  }
  trigger_event(event, args) {
    if (this.options["on_" + event]) {
      this.options["on_" + event].apply(null, args);
    }
  }
  /**
   * Gets the oldest starting date from the list of tasks
   *
   * @returns Date
   * @memberof Gantt
   */
  get_oldest_starting_date() {
    return this.tasks.map((task) => task._start).reduce(
      (prev_date, cur_date) => cur_date <= prev_date ? cur_date : prev_date
    );
  }
  /**
   * Clear all elements from the parent svg element
   *
   * @memberof Gantt
   */
  clear() {
    this.$svg.innerHTML = "";
  }
};
Gantt.VIEW_MODE = VIEW_MODE;
function generate_id(task) {
  return task.name + "_" + Math.random().toString(36).slice(2, 12);
}

// app/@hk-components/@hk-gantt/@hk-gantt.jsx
var import_react6 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/@hk-components/@hk-gantt/@hk-gantt.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-gantt/@hk-gantt.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var HkGantt = ({
  tasks,
  onClick,
  onViewChange,
  onDateChange,
  onProgressChange,
  viewMode,
  customPopupHtml
}) => {
  _s3();
  const chartRef = (0, import_react6.useRef)(null);
  const popupHtml = (task) => {
    return `
        <div class="popover fade show bs-popover-right gantt-task-details" role="tooltip">
          <div class="arrow">
        </div>
        <div class="popover-body">
        <h5>${task.name}</h5>
        <p class="mb-2">Expected to finish by ${task.end}</p>
        <div class="progress mb-2" style="height: 10px;"><div class="progress-bar" role="progressbar" style="width: ${task.progress}%;" aria-valuenow="${task.progress}" aria-valuemin="0" aria-valuemax="100">${task.progress}%</div></div></div></div>
        `;
  };
  (0, import_react6.useEffect)(() => {
    const gantt = new Gantt(chartRef.current, tasks, {
      on_click: onClick,
      on_view_change: onViewChange,
      on_date_change: (task, start, end) => {
        onDateChange(task, start, end);
      },
      on_progress_change: (task, progress) => {
        onProgressChange(task, progress);
      },
      view_modes: ["Quarter Day", "Half Day", "Day", "Week", "Month"],
      view_mode: {
        viewMode
      },
      custom_popup_html: customPopupHtml ? customPopupHtml : popupHtml
    });
    gantt.change_view_mode(viewMode);
  }, [tasks, onClick, onViewChange, onDateChange, onProgressChange, viewMode, customPopupHtml]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { ref: chartRef, xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }, void 0, false, {
    fileName: "app/@hk-components/@hk-gantt/@hk-gantt.jsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
};
_s3(HkGantt, "X+1SfQQ6xefXNU27aQW843M7cTw=");
_c4 = HkGantt;
var hk_gantt_default = HkGantt;
var _c4;
$RefreshReg$(_c4, "HkGantt");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/todo/gantt/GanttChart.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/todo/gantt/GanttChart.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/todo/gantt/GanttChart.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var GanttChart = () => {
  _s4();
  const {
    states
  } = useGlobalStateContext();
  (0, import_react7.useEffect)(() => {
    const element = document.querySelector("#split_2 .simplebar-content-wrapper");
    element.scrollTo({
      left: 500,
      behavior: "smooth"
    });
  });
  const tasks = [{
    id: "task_1",
    name: "Draft the new contract document for sales team",
    start: "2019-07-16",
    end: "2019-07-20",
    progress: 55
  }, {
    id: "task_2",
    name: "Find out the old contract documents",
    start: "2019-07-19",
    end: "2019-07-21",
    progress: 85,
    dependencies: "task_1"
  }, {
    id: "task_3",
    name: "Organize meeting with sales associates to understand need in detail",
    start: "2019-07-21",
    end: "2019-07-22",
    progress: 80,
    dependencies: "task_2"
  }, {
    id: "task_4",
    name: "iOS App home page",
    start: "2019-07-15",
    end: "2019-07-17",
    progress: 80
  }, {
    id: "task_5",
    name: "Write a release note",
    start: "2019-07-18",
    end: "2019-07-22",
    progress: 65,
    dependencies: "task_4"
  }, {
    id: "task_6",
    name: "Setup new sales project",
    start: "2019-07-20",
    end: "2019-07-31",
    progress: 15
  }, {
    id: "task_7",
    name: "Invite user to a project",
    start: "2019-07-25",
    end: "2019-07-26",
    progress: 99,
    dependencies: "task_6"
  }, {
    id: "task_8",
    name: "Coordinate with business development",
    start: "2019-07-28",
    end: "2019-07-30",
    progress: 35,
    dependencies: "task_7"
  }, {
    id: "task_9",
    name: "Kanban board design",
    start: "2019-08-01",
    end: "2019-08-03",
    progress: 25,
    dependencies: "task_8"
  }, {
    id: "task_10",
    name: "Enable analytics tracking",
    start: "2019-08-05",
    end: "2019-08-07",
    progress: 60,
    dependencies: "task_9"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SimpleBar, { autoHide: false, style: {
    maxHeight: "100vh"
  }, className: "split", id: "split_2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "gantt-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "gantt-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "gantt", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(hk_gantt_default, { tasks, viewMode: states.todoState.vm, onProgressChange: (task, progress) => console.log(task, progress), onDateChange: (task, start, end) => console.log(task, start, end) }, void 0, false, {
    fileName: "app/routes/apps/todo/gantt/GanttChart.jsx",
    lineNumber: 117,
    columnNumber: 25
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/gantt/GanttChart.jsx",
    lineNumber: 116,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/gantt/GanttChart.jsx",
    lineNumber: 115,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/gantt/GanttChart.jsx",
    lineNumber: 114,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/gantt/GanttChart.jsx",
    lineNumber: 111,
    columnNumber: 10
  }, this);
};
_s4(GanttChart, "IgL0/9cuHHRswl+CkcgnFAlWTgk=", false, function() {
  return [useGlobalStateContext];
});
_c5 = GanttChart;
var GanttChart_default = GanttChart;
var _c5;
$RefreshReg$(_c5, "GanttChart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/data/todo/gantt-table-data.js
var import_classnames2 = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/todo/gantt-table-data.js"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var avatarFormater = (cell) => {
  return cell.map((data2, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "media align-items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: (0, import_classnames2.default)("avatar avatar-xs avatar-rounded", data2.cstmAvt ? `avatar-${data2.avtBg}` : ""), children: [
      data2.Img && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: data2.Img, alt: "user", className: "avatar-img" }, void 0, false, {
        fileName: "app/data/todo/gantt-table-data.js",
        lineNumber: 43,
        columnNumber: 38
      }, this),
      data2.cstmAvt && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "initial-wrap", children: data2.cstmAvt }, void 0, false, {
        fileName: "app/data/todo/gantt-table-data.js",
        lineNumber: 44,
        columnNumber: 42
      }, this)
    ] }, void 0, true, {
      fileName: "app/data/todo/gantt-table-data.js",
      lineNumber: 42,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/data/todo/gantt-table-data.js",
      lineNumber: 41,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "media-body", children: data2.userName }, void 0, false, {
      fileName: "app/data/todo/gantt-table-data.js",
      lineNumber: 47,
      columnNumber: 17
    }, this)
  ] }, indx, true, {
    fileName: "app/data/todo/gantt-table-data.js",
    lineNumber: 40,
    columnNumber: 13
  }, this));
};
var tagFormater = (cell) => cell ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  Badge_default,
  {
    size: "sm",
    bg: "white",
    className: (0, import_classnames2.default)("badge-outline badge-wth-icon", { "badge-danger": cell === "High" || cell === "Urgent" }, { "badge-warning": cell === "Low" }, { "badge-orange": cell === "Medium" }),
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { className: "badge-dot ri-checkbox-blank-circle-fill" }, void 0, false, {
        fileName: "app/data/todo/gantt-table-data.js",
        lineNumber: 64,
        columnNumber: 13
      }, this),
      cell
    ] }, void 0, true, {
      fileName: "app/data/todo/gantt-table-data.js",
      lineNumber: 63,
      columnNumber: 9
    }, this)
  },
  void 0,
  false,
  {
    fileName: "app/data/todo/gantt-table-data.js",
    lineNumber: 58,
    columnNumber: 12
  },
  this
) : null;
var statusFormater = (cell) => {
  return cell.map((data2, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default, { className: "selectable-dropdown", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Toggle, { variant: data2.variant, className: "btn-rounded", type: "button", children: data2.status }, void 0, false, {
      fileName: "app/data/todo/gantt-table-data.js",
      lineNumber: 77,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Menu, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Item, { "data-color": "#5e7d8a", children: "On Hold" }, void 0, false, {
        fileName: "app/data/todo/gantt-table-data.js",
        lineNumber: 79,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Item, { "data-color": "#FFC400", children: "In Progress" }, void 0, false, {
        fileName: "app/data/todo/gantt-table-data.js",
        lineNumber: 80,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Item, { "data-color": "#9e9e9e", children: "To-Do" }, void 0, false, {
        fileName: "app/data/todo/gantt-table-data.js",
        lineNumber: 81,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Item, { "data-color": "#007D88", children: "Done" }, void 0, false, {
        fileName: "app/data/todo/gantt-table-data.js",
        lineNumber: 82,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Item, { "data-color": "#FF0101", children: "Pending" }, void 0, false, {
        fileName: "app/data/todo/gantt-table-data.js",
        lineNumber: 83,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/data/todo/gantt-table-data.js",
      lineNumber: 78,
      columnNumber: 17
    }, this)
  ] }, indx, true, {
    fileName: "app/data/todo/gantt-table-data.js",
    lineNumber: 76,
    columnNumber: 13
  }, this));
};
var actionFormater = (cell) => {
  return cell.map((data2, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(more_vertical_default, {}, void 0, false, {
      fileName: "app/data/todo/gantt-table-data.js",
      lineNumber: 98,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/data/todo/gantt-table-data.js",
      lineNumber: 97,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/data/todo/gantt-table-data.js",
      lineNumber: 96,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/data/todo/gantt-table-data.js",
      lineNumber: 95,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Item, { "data-color": "#5e7d8a", children: "On Hold" }, void 0, false, {
        fileName: "app/data/todo/gantt-table-data.js",
        lineNumber: 103,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Item, { "data-color": "#FFC400", children: "In Progress" }, void 0, false, {
        fileName: "app/data/todo/gantt-table-data.js",
        lineNumber: 104,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Item, { "data-color": "#9e9e9e", children: "To-Do" }, void 0, false, {
        fileName: "app/data/todo/gantt-table-data.js",
        lineNumber: 105,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Item, { "data-color": "#007D88", children: "Done" }, void 0, false, {
        fileName: "app/data/todo/gantt-table-data.js",
        lineNumber: 106,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Item, { "data-color": "#FF0101", children: "Pending" }, void 0, false, {
        fileName: "app/data/todo/gantt-table-data.js",
        lineNumber: 107,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/data/todo/gantt-table-data.js",
      lineNumber: 102,
      columnNumber: 17
    }, this)
  ] }, indx, true, {
    fileName: "app/data/todo/gantt-table-data.js",
    lineNumber: 94,
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
    accessor: "task",
    title: "Task",
    sort: true
    // cellFormatter: taskFormater,
  },
  {
    accessor: "priority",
    title: "Priority",
    sort: true,
    cellFormatter: tagFormater
  },
  {
    accessor: "assignee",
    title: "Assignee",
    sort: true,
    cellFormatter: avatarFormater,
    sortValue: (cell, row) => cell.map((data2) => data2.userName)
  },
  {
    accessor: "due_date",
    title: "Due Date",
    sort: true
  },
  {
    accessor: "status",
    title: "Status",
    sort: true,
    cellFormatter: statusFormater
  },
  {
    accessor: "actions",
    title: "",
    cellFormatter: actionFormater
  }
];
var data = [
  {
    id: 1,
    starred: true,
    task: "Video conference with Canada Team",
    priority: "High",
    assignee: [{ Img: avatar7_default, userName: " Tom Cruz" }],
    due_date: "Tomorrow",
    status: [{ status: "To-Do", variant: "secondary" }],
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 2,
    starred: false,
    task: "Client objective meeting",
    priority: "High",
    assignee: [{ Img: avatar9_default, userName: "Katherine Jones" }],
    due_date: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-danger", children: "Yesterday" }, void 0, false, {
      fileName: "app/data/todo/gantt-table-data.js",
      lineNumber: 175,
      columnNumber: 19
    }, this),
    status: [{ status: "In Progres", variant: "warning" }],
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 3,
    starred: false,
    task: "Target market trend analysis on the go",
    assignee: [{ Img: avatar7_default, userName: "Tom Cruz" }],
    due_date: "Today",
    status: [{ status: "Done", variant: "primary" }],
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 4,
    starred: true,
    task: "Send revised proposal to Mr. Dow Jones",
    priority: "Low",
    assignee: [{ Img: avatar10_default, userName: "Martin Lutherking" }],
    due_date: "Saturday",
    status: [{ status: "On Hold", variant: "info" }],
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 5,
    starred: false,
    task: "Set up first call for demo",
    assignee: [{ cstmAvt: "H", avtBg: "primary", userName: "Hencework" }],
    due_date: "Sunday",
    status: [{ status: "In Progress", variant: "warning" }],
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 6,
    starred: true,
    task: "Upgrade dependency on resouces",
    priority: "Medium",
    assignee: [{ Img: avatar15_default, userName: "Boss Baby" }],
    due_date: "27 Nov, 2020",
    status: [{ status: "Pending", variant: "danger" }],
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 7,
    starred: false,
    task: "Update contribution guidelines and licence",
    assignee: [{ Img: avatar15_default, userName: "Boss Baby" }],
    due_date: "Today",
    status: [{ status: "Done", variant: "primary" }],
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 8,
    starred: false,
    task: "Fix tooltip word wrap/break rules",
    priority: "High",
    assignee: [{ Img: avatar2_default, userName: "Morgan Freeman" }],
    due_date: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-danger", children: "4 Days ago" }, void 0, false, {
      fileName: "app/data/todo/gantt-table-data.js",
      lineNumber: 232,
      columnNumber: 19
    }, this),
    status: [{ status: "In Progress", variant: "warning" }],
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 9,
    starred: true,
    task: "Redesigning the base model",
    priority: "Urgent",
    assignee: [{ Img: avatar2_default, userName: "Charlie Chaplin" }],
    due_date: "3 Aug, 2020",
    status: [{ status: "In Progress", variant: "warning" }],
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 10,
    starred: true,
    task: "Configure security analysis feature",
    priority: "Medium",
    assignee: [{ Img: avatar2_default, userName: "Tom Cruz" }],
    due_date: "8 Aug, 2020",
    status: [{ status: "On Hold", variant: "info" }],
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 11,
    starred: false,
    task: "Remove notifications panel from inbox",
    priority: "Urgent",
    assignee: [{ Img: avatar2_default, userName: "Boss Baby" }],
    due_date: "24 Sep, 2020",
    status: [{ status: "To-Do", variant: "secondary" }],
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 12,
    starred: false,
    task: "Send an invite to join project",
    priority: "Low",
    assignee: [{ Img: avatar7_default, userName: "Tom Cruz" }],
    due_date: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-danger", children: "Yesterday" }, void 0, false, {
      fileName: "app/data/todo/gantt-table-data.js",
      lineNumber: 272,
      columnNumber: 19
    }, this),
    status: [{ status: "In Progress", variant: "warning" }],
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 13,
    starred: false,
    task: "Connect to software tools",
    priority: "High",
    assignee: [{ Img: avatar10_default, userName: "Martin Lutherking" }],
    due_date: "Saturday",
    status: [{ status: "Done", variant: "primary" }],
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 14,
    starred: false,
    task: "Speed up project review with planner",
    priority: "High",
    assignee: [{ Img: avatar9_default, userName: "Katherine Jones" }],
    due_date: "15 Oct, 2020",
    status: [{ status: "Done", variant: "primary" }],
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  }
  // {
  //     id: 4,
  //     task: [{ text: "Update contribution guidelines and licence", mark: false }],
  //     priority: "Low",
  //     assignee: [{ Img: avatar7, userName: "Morgan Freeman" }],
  //     due_date: "Today",
  //     status: [{ status: "Done", variant: "primary" }],
  //     actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  // },
];

// app/routes/apps/todo/gantt/GanttTable.jsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/todo/gantt/GanttTable.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/todo/gantt/GanttTable.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var GanttTable = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SimpleBar, { autoHide: false, style: {
    maxHeight: "100vh"
  }, className: "split", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(hk_data_table_default, { column: columns, rowData: data, rowSelection: true, markStarred: true, classes: "table-wrap gt-todo-table nowrap" }, void 0, false, {
    fileName: "app/routes/apps/todo/gantt/GanttTable.jsx",
    lineNumber: 28,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/gantt/GanttTable.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c6 = GanttTable;
var GanttTable_default = GanttTable;
var _c6;
$RefreshReg$(_c6, "GanttTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/todo/gantt/TodoBody.jsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/todo/gantt/TodoBody.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/todo/gantt/TodoBody.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var gutterFn = (_index, direction) => {
  const gutter = document.createElement("div");
  gutter.className = `
    gutter
    gutter-${direction}
    flex
    items-center
    justify-center
    cursor-col-resize
  `;
  gutter.style.height = "100%";
  return gutter;
};
var TodoBody = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "todo-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(react_split_es_default, { className: "split-wrap", gutter: gutterFn, gutterSize: 7, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(GanttTable_default, {}, void 0, false, {
      fileName: "app/routes/apps/todo/gantt/TodoBody.jsx",
      lineNumber: 41,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(GanttChart_default, {}, void 0, false, {
      fileName: "app/routes/apps/todo/gantt/TodoBody.jsx",
      lineNumber: 42,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/todo/gantt/TodoBody.jsx",
    lineNumber: 40,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/gantt/TodoBody.jsx",
    lineNumber: 39,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/gantt/TodoBody.jsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
};
_c7 = TodoBody;
var TodoBody_default = TodoBody;
var _c7;
$RefreshReg$(_c7, "TodoBody");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/todo/gantt/route.jsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/todo/gantt/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/todo/gantt/route.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var Gantt2 = () => {
  _s5();
  const [showSidebar, setShowSidebar] = (0, import_react8.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: (0, import_classnames3.default)("todoapp-wrap ganttapp-wrap full-screenapp", {
    "todoapp-sidebar-toggle": showSidebar
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TodoAppSidebar_default, {}, void 0, false, {
      fileName: "app/routes/apps/todo/gantt/route.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "todoapp-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "todoapp-detail-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(AppHeader_default, { toggleSidebar: () => setShowSidebar(!showSidebar), showSidebar }, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/route.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TodoBody_default, {}, void 0, false, {
        fileName: "app/routes/apps/todo/gantt/route.jsx",
        lineNumber: 38,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/gantt/route.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/todo/gantt/route.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/todo/gantt/route.jsx",
    lineNumber: 31,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/gantt/route.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s5(Gantt2, "Jn+Blp4AInVy8bzFY0VrkhtmHTg=");
_c8 = Gantt2;
var route_default = Gantt2;
var _c8;
$RefreshReg$(_c8, "Gantt");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/todo/gantt/route-MTZUSJTI.js.map
