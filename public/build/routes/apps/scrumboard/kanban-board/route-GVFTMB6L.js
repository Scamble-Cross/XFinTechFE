import {
  HkInlineEdit_default
} from "/build/_shared/chunk-ITU4MY7I.js";
import {
  hk_alert_default
} from "/build/_shared/chunk-7ZU22BSR.js";
import {
  Sidebar_default
} from "/build/_shared/chunk-AQ6Q2GAS.js";
import {
  require_lib
} from "/build/_shared/chunk-TOZXT5O7.js";
import {
  ConnectedDroppable,
  DragDropContext,
  PublicDraggable
} from "/build/_shared/chunk-F3AHXZ5K.js";
import {
  nanoid
} from "/build/_shared/chunk-PUI2DGTL.js";
import {
  HkDropZone_default
} from "/build/_shared/chunk-CXWPXLC3.js";
import {
  hk_collapse_default
} from "/build/_shared/chunk-4E2L3NE2.js";
import {
  avatar6_default
} from "/build/_shared/chunk-CWUICKJG.js";
import {
  avatar5_default
} from "/build/_shared/chunk-JQFY4KQJ.js";
import {
  avatar4_default
} from "/build/_shared/chunk-54CGHQVE.js";
import {
  avatar15_default
} from "/build/_shared/chunk-ZGGRJ3QC.js";
import "/build/_shared/chunk-NQ2SSAFE.js";
import {
  DateRangePicker
} from "/build/_shared/chunk-XROUZ3B7.js";
import "/build/_shared/chunk-JPGC5R3S.js";
import {
  hk_badge_default
} from "/build/_shared/chunk-YWRMJW47.js";
import {
  avatar10_default
} from "/build/_shared/chunk-LDADEV53.js";
import {
  avatar3_default
} from "/build/_shared/chunk-MVEBKFJK.js";
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
  hk_chips_default
} from "/build/_shared/chunk-ZDBS4DIS.js";
import {
  avatar13_default
} from "/build/_shared/chunk-WWUYITJG.js";
import {
  HkTooltip_default
} from "/build/_shared/chunk-NYEYMOIV.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  archive_default,
  arrow_up_default,
  bookmark_default,
  calendar_default,
  chevron_down_default,
  chevron_up_default,
  edit_2_default,
  edit_default,
  info_default,
  link_default,
  more_horizontal_default,
  more_vertical_default,
  paperclip_default,
  plus_default,
  plus_square_default,
  pocket_default,
  repeat_default,
  star_default,
  tag_default,
  trash_2_default,
  user_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import {
  useGlobalStateContext
} from "/build/_shared/chunk-3LFZEH5W.js";
import {
  avatar1_default
} from "/build/_shared/chunk-B57YWHU6.js";
import {
  avatar8_default
} from "/build/_shared/chunk-WUHA5P4Y.js";
import {
  Link
} from "/build/_shared/chunk-DKEEJ4HZ.js";
import {
  Button_default,
  Card_default,
  Col_default,
  Dropdown_default,
  Form_default,
  InputGroup_default,
  ListGroup_default,
  Modal_default,
  Nav_default,
  ProgressBar_default,
  Row_default,
  Tab_default
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

// app/routes/apps/scrumboard/kanban-board/route.jsx
var import_react7 = __toESM(require_react(), 1);
var import_classnames5 = __toESM(require_classnames(), 1);

// app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var BoardHeader = ({
  showSidebar,
  toggleSidebar,
  showInfo,
  toggleInfo
}) => {
  _s();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "taskboard-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "taskboardapp-title link-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
        "Jampack",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "task-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 52,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 51,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 50,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 48,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 47,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "ms-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputGroup_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "input-affix-wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "input-prefix", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-lock-line" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 61,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 60,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Select, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 1, children: "Private Board" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
            lineNumber: 64,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 2, children: "Public Board" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
            lineNumber: 65,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 63,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 59,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 58,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 57,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
      lineNumber: 46,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Select, { className: "d-xxl-none flex-1 mx-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 1, children: "Task Board" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 73,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 2, children: "Conversation" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 74,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 3, children: "To Do List" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 75,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 4, children: "Files" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 76,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 5, children: "Links" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 77,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
      lineNumber: 72,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { variant: "pills", className: "nav-pills-rounded active-theme nav-light px-2 flex-shrink-0 d-xxl-flex d-none", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { active: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Task Board" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 82,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 81,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 80,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Conversation" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 87,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 86,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 85,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "To Do List" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 92,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 91,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 90,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Files" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 97,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 96,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 95,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Links" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 102,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 101,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 100,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
      lineNumber: 79,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "taskboard-options-wrap flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex ms-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar-group avatar-group-overlapped d-xl-flex d-none me-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Katharine", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 111,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 110,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 109,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Dean", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 116,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 115,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 114,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Tom", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "T" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 121,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 120,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 119,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Morgan", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 126,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 125,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 124,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Tooltip", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(plus_default, {}, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 131,
          columnNumber: 95
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 131,
          columnNumber: 64
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 131,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 130,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
          lineNumber: 129,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 108,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "v-separator d-xl-flex d-none" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 135,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: (0, import_classnames.default)("btn-icon btn-rounded flush-soft-hover taskboardapp-info-toggle ms-xl-0", {
        "active": showInfo
      }), onClick: toggleInfo, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 142,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 141,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 140,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 139,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 136,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none", onClick: () => dispatch({
        type: "top_nav_toggle"
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: states.layoutState.topNavCollapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_down_default, {}, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 153,
        columnNumber: 74
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_up_default, {}, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 153,
        columnNumber: 92
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 152,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 151,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 150,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
        lineNumber: 147,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
      lineNumber: 107,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
      lineNumber: 106,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("hk-sidebar-togglable", {
      "active": !showSidebar
    }), onClick: toggleSidebar }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
      lineNumber: 160,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/scrumboard/kanban-board/BoardHeader.jsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
};
_s(BoardHeader, "OVdtiISsix2HOQFhIOw6MKqd+SU=", false, function() {
  return [useGlobalStateContext];
});
_c = BoardHeader;
var BoardHeader_default = BoardHeader;
var _c;
$RefreshReg$(_c, "BoardHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/scrumboard/kanban-board/EditTaskList.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/scrumboard/kanban-board/EditTaskList.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/scrumboard/kanban-board/EditTaskList.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var EditTaskList = ({
  show,
  onHide
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default, { size: "sm", show, onHide, centered: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: onHide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/EditTaskList.jsx",
        lineNumber: 29,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/EditTaskList.jsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h5", { className: "mb-4", children: "Create Task List" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/EditTaskList.jsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: "Name" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/EditTaskList.jsx",
          lineNumber: 36,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "text" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/EditTaskList.jsx",
          lineNumber: 37,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/EditTaskList.jsx",
        lineNumber: 35,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/EditTaskList.jsx",
        lineNumber: 34,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/EditTaskList.jsx",
        lineNumber: 33,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/EditTaskList.jsx",
        lineNumber: 32,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/kanban-board/EditTaskList.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Footer, { className: "align-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "secondary", onClick: onHide, children: "Cancel" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/EditTaskList.jsx",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "primary", className: "btn-edit-tasklist", children: "Save" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/EditTaskList.jsx",
        lineNumber: 45,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/kanban-board/EditTaskList.jsx",
      lineNumber: 43,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/scrumboard/kanban-board/EditTaskList.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c2 = EditTaskList;
var EditTaskList_default = EditTaskList;
var _c2;
$RefreshReg$(_c2, "EditTaskList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var TaskboardInfo = ({
  onHide
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "taskboard-info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { bsPrefix: "btn-close", type: "button", className: "info-close mb-10", onClick: onHide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
      lineNumber: 39,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
      lineNumber: 38,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default, { role: "search", className: "mt-xl-0 mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Control, { type: "text", placeholder: "Search in conversation" }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
      lineNumber: 42,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
      lineNumber: 41,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "collapse-simple mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "board_members", title: "Members", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "hk-list", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-primary avatar-rounded", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Hencework", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 49,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 48,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 47,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Morgan", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 54,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 53,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 52,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Charlie", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 59,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 58,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 57,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Tom", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar7_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 64,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 65,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 63,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 62,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Katherine", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar9_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 70,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 69,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 68,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Danial", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar10_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 75,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 76,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 74,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 73,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Boss", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar15_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 81,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 82,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 80,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 79,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Winston", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "W" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 87,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 86,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 85,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "avatar avatar-sm avatar-icon avatar-soft-light avatar-rounded", "data-bs-toggle": "modal", "data-bs-target": "#invite_people", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Add New", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(plus_default, {}, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 93,
          columnNumber: 72
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 93,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 92,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 91,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 90,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
        lineNumber: 46,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
        lineNumber: 45,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "board_activity", title: "Latest Activity", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default, { as: "ul", variant: "flush", className: "activity-list", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 105,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 104,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 103,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-dark", children: "Hencework" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 109,
                columnNumber: 44
              }, this),
              " on Documentation link is working now - ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "link-url", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("u", { children: "ttps://hencework.com/theme/jampa" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 109,
                columnNumber: 165
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 109,
                columnNumber: 128
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 109,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "last-activity-time", children: "Oct 15, 2021, 12:34 PM" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 110,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 108,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 102,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 101,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 118,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 117,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 116,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-dark", children: "Morgan Fregman" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 122,
                columnNumber: 44
              }, this),
              " completed react conversion of ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("u", { children: "components" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 122,
                columnNumber: 165
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 122,
                columnNumber: 124
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 122,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "last-activity-time", children: "Sep 16, 2021, 4:54 PM" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 123,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 121,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 115,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 114,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 131,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 130,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 129,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-dark", children: "Jimmy Carry" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 135,
                columnNumber: 44
              }, this),
              "completed side bar menu on ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("u", { children: "elements" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 135,
                columnNumber: 158
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 135,
                columnNumber: 117
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 135,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 136,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 134,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 128,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 127,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar7_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 144,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 143,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 142,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-dark", children: "Charlie Chaplin" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 148,
                columnNumber: 44
              }, this),
              " deleted empty cards on ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("u", { children: "completed" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 148,
                columnNumber: 159
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 148,
                columnNumber: 118
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 148,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 149,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 147,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 141,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 140,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "W" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 157,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 156,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 155,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-dark", children: "Winston Churchills" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 161,
                columnNumber: 44
              }, this),
              " created a note on UI components task list"
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 161,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "last-activity-time", children: "Sep 2, 2021, 9:23 AM" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 162,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 160,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 154,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 153,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 170,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 169,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 168,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-dark", children: "Morgan Fregman" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 174,
                columnNumber: 44
              }, this),
              " completed react conversion of ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("u", { children: "components" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 174,
                columnNumber: 165
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 174,
                columnNumber: 124
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 174,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "last-activity-time", children: "Sep 16, 2021, 4:54 PM" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 175,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 173,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 167,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 166,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 183,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 182,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 181,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-dark", children: "Jimmy Carry" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 187,
                columnNumber: 44
              }, this),
              "added shared components to ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("u", { children: "basic structure" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 187,
                columnNumber: 158
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 187,
                columnNumber: 117
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 187,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 188,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 186,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 180,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 179,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 196,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 195,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 194,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-dark", children: "Hencework" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 200,
                columnNumber: 44
              }, this),
              " commented on ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("u", { children: "basic structure" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 200,
                columnNumber: 143
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 200,
                columnNumber: 102
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 200,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 201,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 199,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 193,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 192,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar7_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 209,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 208,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 207,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-dark", children: "Charlie Chaplin" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 213,
                columnNumber: 44
              }, this),
              " moved components from all modules to in progress"
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 213,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 214,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 212,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 206,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 205,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "W" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 222,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 221,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 220,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-dark", children: "Winston Churchills" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
                lineNumber: 226,
                columnNumber: 44
              }, this),
              " created a note on UI components task list"
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 226,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
              lineNumber: 227,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
            lineNumber: 225,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 219,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
          lineNumber: 218,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
        lineNumber: 100,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
        lineNumber: 99,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
      lineNumber: 44,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
    lineNumber: 37,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/scrumboard/kanban-board/TaskboardInfo.jsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_c3 = TaskboardInfo;
var TaskboardInfo_default = TaskboardInfo;
var _c3;
$RefreshReg$(_c3, "TaskboardInfo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx
var import_react2 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var TaskDetails = ({
  show,
  onHide
}) => {
  _s2();
  const [recipients, setRecipients] = (0, import_react2.useState)(["Framework", "Html"]);
  const [checkList, setCheckList] = (0, import_react2.useState)([{
    label: "Video conference with canada Team",
    checked: true,
    editable: false
  }, {
    label: "Client objective meeting",
    checked: true,
    editable: false
  }, {
    label: "Invite jaqueline on video conference",
    checked: false,
    editable: false
  }]);
  const [teamCheckList, setTeamCheckList] = (0, import_react2.useState)([{
    label: "Upgrade dependency on resources",
    checked: true,
    editable: false
  }, {
    label: "Invite jaqueline on video conference",
    checked: false,
    editable: false
  }]);
  const [newListLabel1, setnewListLabel1] = (0, import_react2.useState)("");
  const [newListLabel2, setnewListLabel2] = (0, import_react2.useState)("");
  const [showAddButton, setshowAddButton] = (0, import_react2.useState)(true);
  const [newRecipient, setNewRecipient] = (0, import_react2.useState)("");
  const handleRecipients = () => {
    setRecipients((recipients2) => recipients2.concat(newRecipient));
  };
  const onEnter = ({
    key
  }) => {
    if (key === "Enter") {
      handleRecipients();
      setNewRecipient("");
    }
  };
  const handleCheck = (id, indx) => {
    if (id === "list1") {
      const newCheckList = [...checkList];
      newCheckList[indx].checked = !newCheckList[indx].checked;
      setCheckList(newCheckList);
    } else if (id === "list2") {
      const newCheckList = [...teamCheckList];
      newCheckList[indx].checked = !newCheckList[indx].checked;
      setTeamCheckList(newCheckList);
    }
  };
  const updateCheckList = (id, index) => {
    if (id === "label1") {
      const newCheckLists = [...checkList];
      newCheckLists[index].label = newListLabel1;
      newCheckLists[index].editable = false;
      setCheckList(newCheckLists);
      setnewListLabel1("");
    } else if (id === "label2") {
      const newCheckLists = [...teamCheckList];
      newCheckLists[index].label = newListLabel2;
      newCheckLists[index].editable = false;
      setTeamCheckList(newCheckLists);
      setnewListLabel2("");
    }
    setshowAddButton(!showAddButton);
  };
  const addItem = (id, event) => {
    event.preventDefault();
    if (id === "list-1") {
      const newItem = {
        id: nanoid(),
        label: "",
        checked: false,
        editable: true
      };
      setCheckList([...checkList, newItem]);
    } else if (id === "list-2") {
      const newItem = {
        id: nanoid(),
        label: "",
        checked: false,
        editable: true
      };
      setTeamCheckList([...teamCheckList, newItem]);
    }
    setshowAddButton(!showAddButton);
  };
  const deleteItem = (id, itemId) => {
    if (id === "list1") {
      const newList = [...checkList];
      newList.splice(itemId, 1);
      setCheckList(newList);
    } else if (id === "list2") {
      const newList = [...teamCheckList];
      newList.splice(itemId, 1);
      setTeamCheckList(newList);
    }
  };
  var options = {
    chart: {
      type: "radialBar",
      width: 50,
      height: 50,
      sparkline: {
        enabled: true
      }
    },
    colors: ["#007D88"],
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "80%"
        },
        track: {
          margin: 0,
          strokeWidth: "97%"
        }
      }
    },
    labels: ["8/12"]
  };
  const series = [85];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Modal_default, { show, onHide, size: "xl", centered: true, dialogClassName: "modal-dialog-centered task-detail-modal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "modal-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Modal_default.Body, { className: "p-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { className: "task-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex align-items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Check, { label: "Mark as completed", className: "mx-lg-3 ms-3", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 198,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "flush-light", className: "flush-outline-hover d-lg-inline-block d-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(link_default, {}, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 203,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 202,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 201,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Copy Link" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 206,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 200,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 199,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "light", className: "btn-icon btn-rounded d-lg-none d-lg-inline-block ms-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(link_default, {}, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 213,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 212,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 211,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 210,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 209,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
        lineNumber: 196,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "task-options-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "task-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(star_default, {}, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 222,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 221,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 220,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover ms-1 d-lg-inline-block d-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(trash_2_default, {}, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 228,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 227,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 226,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 225,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 236,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 235,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 234,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 233,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Header, { children: "Action" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 241,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(edit_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 243,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 242,
                columnNumber: 52
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Assign to" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 245,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 242,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(user_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 248,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 247,
                columnNumber: 52
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Attach files" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 250,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 247,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(paperclip_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 253,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 252,
                columnNumber: 52
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Apply Labels" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 255,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 252,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(tag_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 258,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 257,
                columnNumber: 52
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Set Due Date" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 260,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 257,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(calendar_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 263,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 262,
                columnNumber: 52
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Follow Task" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 265,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 262,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(bookmark_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 268,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 267,
                columnNumber: 52
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Set Due Date" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 270,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 267,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 272,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(arrow_up_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 274,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 273,
                columnNumber: 52
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Set as Top Priority" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 276,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 273,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(repeat_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 279,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 278,
                columnNumber: 52
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Change Status" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 281,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 278,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(pocket_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 284,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 283,
                columnNumber: 52
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Save as Template" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 286,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 283,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(archive_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 289,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 288,
                columnNumber: 52
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Move to archive" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 291,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 288,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "delete-task", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(trash_2_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 294,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 293,
                columnNumber: 76
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 296,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 293,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 240,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 232,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
        lineNumber: 219,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
      lineNumber: 195,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "task-detail-body", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_alert_default, { variant: "primary", className: "alert-wth-icon", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "alert-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "zmdi zmdi-lock" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 304,
          columnNumber: 94
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 304,
          columnNumber: 63
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 304,
          columnNumber: 29
        }, this),
        " This task is private for Jampack Team"
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
        lineNumber: 303,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkInlineEdit_default, { as: "h4", id: "edit1", className: "fw-bold mb-0", value: "Framworking Building" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
        lineNumber: 306,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkInlineEdit_default, { as: "p", id: "edit2", className: "mb-0", value: "Instant rebuilding of assets during development" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
        lineNumber: 307,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar-group avatar-group-lg avatar-group-overlapped mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-rounded", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Katharine", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 310,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 309,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-rounded", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Dean", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 313,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 312,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-xs avatar-soft-danger avatar-rounded", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Tom", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: "T" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 316,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 315,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-rounded", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Morgan", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 319,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 318,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-primary avatar-rounded", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Tooltip text", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(plus_default, {}, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 322,
          columnNumber: 95
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 322,
          columnNumber: 64
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 322,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 321,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
        lineNumber: 308,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Row_default, { as: Form_default, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Col_default, { md: 4, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "title title-wth-divider my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Assignee" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 327,
            columnNumber: 79
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 327,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media align-items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 331,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 330,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 329,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "as-name", children: "Hencework" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 335,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "as-date", children: "4 july 2022, 8:30pm" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 336,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 334,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 328,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 326,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Col_default, { md: 4, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "title title-wth-divider my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Due Date" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 341,
            columnNumber: 79
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 341,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DateRangePicker, { initialSettings: {
            singleDatePicker: true,
            timePicker: true,
            showDropdowns: true,
            startDate: /* @__PURE__ */ new Date(),
            locale: {
              format: "M/DD/YYYY hh:mm A"
            }
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Control, { type: "text", name: "single-date" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 351,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 342,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 340,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Col_default, { md: 4, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "title title-wth-divider my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Status" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 355,
            columnNumber: 79
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 355,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "warning", className: "btn-rounded", children: "In Progress" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 357,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Action" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 361,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Another action" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 362,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Something else here" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 363,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 364,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Separated link" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 365,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 360,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 356,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 354,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Col_default, { md: 12, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "title title-wth-divider my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Labels" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 370,
            columnNumber: 79
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 370,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex flex-wrap", children: [
            recipients.map((data, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_chips_default, { className: "mb-2 me-2", variant: "outline-secondary", dismissable: true, children: data }, i, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 372,
              columnNumber: 66
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Control, { type: "text", className: "border-0 p-0 shadow-none flex-1 mb-2 me-2", placeholder: "Add Chips", value: newRecipient, onChange: (e) => setNewRecipient(e.target.value), onKeyPress: onEnter }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 375,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 371,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 369,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
        lineNumber: 325,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tab_default.Container, { defaultActiveKey: "tabChecklist", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default, { as: "ul", variant: "tabs", justify: true, className: "nav-light nav-segmented-tabs active-theme mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { eventKey: "tabChecklist", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Checklist" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 383,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 382,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 381,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { eventKey: "tabComments", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text badge-on-text", children: "Comments" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 388,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 387,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 386,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { eventKey: "tabFiles", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text badge-on-text", children: "Files" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 393,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 392,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 391,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { eventKey: "tabActivity", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text badge-on-text", children: "Activity" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 398,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 397,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 396,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 380,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tab_default.Content, { className: "mt-7", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tab_default.Pane, { eventKey: "tabChecklist", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between mb-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "title title-lg mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Checklist" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 406,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 405,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "light", size: "xs", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: "top", title: "Add Category", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(plus_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 412,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 411,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 410,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 409,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 408,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 404,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hk-checklist", children: [
              checkList.map((data, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Check, { id: `check_${index}`, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Check.Input, { type: "checkbox", checked: data.checked, onChange: () => handleCheck("list1", index) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 421,
                  columnNumber: 49
                }, this),
                !data.editable ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Check.Label, { htmlFor: `check_${index}`, children: [
                  data.label,
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "done-strikethrough" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 424,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 422,
                  columnNumber: 67
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Check.Label, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Control, { className: "checklist-input", type: "text", placeholder: "Add new Item", value: newListLabel1, onChange: (e) => setnewListLabel1(e.target.value), onKeyPress: (e) => {
                  if (e.key === "Enter")
                    updateCheckList("label1", index);
                }, autoFocus: true }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 426,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 425,
                  columnNumber: 75
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "#", className: "btn btn-xs btn-icon btn-rounded btn-flush-light flush-soft-hover delete-checklist", onClick: () => deleteItem("list1", index), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 433,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 432,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 431,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 430,
                  columnNumber: 49
                }, this)
              ] }, index, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 420,
                columnNumber: 73
              }, this)),
              showAddButton && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "#", className: (0, import_classnames2.default)("d-flex align-items-center add-new-checklist"), onClick: (e) => addItem("list-1", e), children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon fe-x me-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(plus_square_default, {}, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 439,
                    columnNumber: 86
                  }, this),
                  " "
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 439,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "New Item" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 440,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 438,
                columnNumber: 59
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 418,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "title title-wth-divider flex-grow-1 my-4 me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Canada team task" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 444,
                columnNumber: 104
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 444,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "btn btn-xs btn-icon btn-rounded btn-flush-light flush-soft-hover delete-checklist", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(edit_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 448,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 447,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 446,
                  columnNumber: 234
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 446,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "btn btn-xs btn-icon btn-rounded btn-flush-light flush-soft-hover delete-checklist", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(trash_2_default, {}, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 452,
                    columnNumber: 53
                  }, this),
                  " "
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 450,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 449,
                  columnNumber: 155
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 449,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 445,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 443,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hk-checklist", children: [
              teamCheckList.map((data, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Check, { id: `check_${index}_team`, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Check.Input, { type: "checkbox", checked: data.checked, onChange: () => handleCheck("list2", index) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 457,
                  columnNumber: 49
                }, this),
                !data.editable ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Check.Label, { htmlFor: `check_${index}_team`, children: [
                  data.label,
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "done-strikethrough" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 460,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 458,
                  columnNumber: 67
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Check.Label, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Control, { className: "checklist-input", type: "text", placeholder: "Add new Item", value: newListLabel2, onChange: (e) => setnewListLabel2(e.target.value), onKeyPress: (e) => {
                  if (e.key === "Enter")
                    updateCheckList("label2", index);
                }, autoFocus: true }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 462,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 461,
                  columnNumber: 75
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "#", className: "btn btn-xs btn-icon btn-rounded btn-flush-light flush-soft-hover delete-checklist", onClick: () => deleteItem("list2", index), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 469,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 468,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 467,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 466,
                  columnNumber: 49
                }, this)
              ] }, index, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 456,
                columnNumber: 77
              }, this)),
              showAddButton && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "#", className: (0, import_classnames2.default)("d-flex align-items-center add-new-checklist"), onClick: (e) => addItem("list-2", e), children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon fe-x me-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(plus_square_default, {}, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 475,
                    columnNumber: 86
                  }, this),
                  " "
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 475,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "New Item" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 476,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 474,
                columnNumber: 59
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 455,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between mt-5 mb-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "title title-lg mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Notes" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 481,
                columnNumber: 78
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 481,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "btn btn-xs btn-icon btn-rounded btn-light", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Add Category", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(plus_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 484,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 483,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 482,
                columnNumber: 198
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 482,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 480,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "card card-border note-block bg-orange-light-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "card-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "card-action-wrap", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "btn btn-xs btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "aria-expanded": "false", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 491,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 490,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 489,
                  columnNumber: 206
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 489,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { role: "menu", className: "dropdown-menu dropdown-menu-end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Action" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 493,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Another action" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 494,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Something else here" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 495,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 496,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Separated link" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 497,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 492,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 488,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 503,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 502,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 501,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: "Martin Luther" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 507,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: "9 Apr, 20, 7:14 AM" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 508,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 506,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 500,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
                "@",
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "fw-medium", children: "Charlie Darvin" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 511,
                  columnNumber: 49
                }, this),
                " From there, you can run grunt compile, grunt migrate and grunt test to compile your contracts, deploy those contracts to the network, and run their associated unit tests."
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 511,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 487,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 486,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "card card-border note-block bg-orange-light-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "card-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "card-action-wrap", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "btn btn-xs btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "aria-expanded": "false", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 519,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 518,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 517,
                  columnNumber: 206
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 517,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { role: "menu", className: "dropdown-menu dropdown-menu-end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Action" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 521,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Another action" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 522,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Something else here" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 523,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 524,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Separated link" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 525,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 520,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 516,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar3_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 531,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 530,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 529,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: "Katherine Jones" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 535,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: "8 Apr, 20, 5:30 PM" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 536,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 534,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 528,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
                "@",
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "fw-medium", children: "Martin Luther" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 539,
                  columnNumber: 49
                }, this),
                ' Viscosity ratio for "Appear view" link text is 3.7:1 which is less '
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 539,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 515,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 514,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "btn btn-outline-light btn-block", children: "View more" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 542,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 403,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tab_default.Pane, { eventKey: "tabComments", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between mb-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "title title-lg mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "3 Responses" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 546,
                columnNumber: 78
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 546,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "btn btn-xs btn-icon btn-rounded btn-light", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Add Board", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(plus_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 549,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 548,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 547,
                columnNumber: 195
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 547,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 545,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "comment-block", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar4_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 555,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 554,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 553,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "cm-name", children: "Martin Luther" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 560,
                      columnNumber: 53
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "badge badge-soft-violet", children: "Manager" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 561,
                      columnNumber: 53
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 559,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
                    "@",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "fw-medium", children: "Charlie Darvin" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 563,
                      columnNumber: 53
                    }, this),
                    " From there, you can run truffle compile, truffle migrate and truffle test to compile your contracts, deploy those contracts to the network, and run their associated unit tests."
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 563,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "comment-action-wrap mt-3", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "3 hours ago" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 565,
                      columnNumber: 53
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 566,
                      columnNumber: 53
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", children: "Reply" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 567,
                      columnNumber: 53
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 568,
                      columnNumber: 53
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", children: "Like" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 569,
                      columnNumber: 53
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 564,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 558,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 552,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 573,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 577,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 576,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 575,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "cm-name", children: "Katherine Jones" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 582,
                    columnNumber: 53
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 581,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
                    "Dynamically beautiful work done by @",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "fw-medium", children: "Ashton Kutcher" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 584,
                      columnNumber: 88
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 584,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "comment-action-wrap mt-3", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "3 hours ago" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 586,
                      columnNumber: 53
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 587,
                      columnNumber: 53
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", children: "Reply" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 588,
                      columnNumber: 53
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 589,
                      columnNumber: 53
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", children: "Like" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 590,
                      columnNumber: 53
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 585,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar3_default, alt: "user", className: "avatar-img" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 595,
                      columnNumber: 61
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 594,
                      columnNumber: 57
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 593,
                      columnNumber: 53
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "cm-name", children: "Ashton Kutche" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 600,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "badge badge-soft-danger", children: "Designer" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 601,
                          columnNumber: 61
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 599,
                        columnNumber: 57
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
                        "@",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "fw-medium", children: "Katherine Jones" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 603,
                          columnNumber: 61
                        }, this),
                        " Thank you :)"
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 603,
                        columnNumber: 57
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "comment-action-wrap mt-3", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "3 hours ago" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 605,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 606,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", children: "Reply" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 607,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 608,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", children: "Like" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 609,
                          columnNumber: 61
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 604,
                        columnNumber: 57
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 598,
                      columnNumber: 53
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 592,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 580,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 574,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 615,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "form-group", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { className: "form-label", children: "Add Comment" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 618,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("textarea", { className: "form-control", rows: 5, defaultValue: "" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 619,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 617,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "btn btn-primary", children: "Send" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 622,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("small", { className: "form-text text-muted mt-0", children: "Basic HTML is allowed" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 623,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 621,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 616,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 551,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 544,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tab_default.Pane, { eventKey: "tabFiles", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Col_default, { sm: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkDropZone_default, { children: "Drop files here to upload" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 631,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 630,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 629,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-5 mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "title title-lg mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Shared files" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 637,
              columnNumber: 78
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 637,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 636,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "file-block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "collapse-simple", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "files_collapse_1", title: "Yesterday", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "sh-files", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-blue", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-file-excel-2-fill" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 648,
                    columnNumber: 73
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 647,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 646,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 645,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "website_content.exl" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 654,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "2,635 KB" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 655,
                        columnNumber: 69
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 653,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 659,
                        columnNumber: 73
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 658,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { size: "sm", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 665,
                          columnNumber: 85
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 664,
                          columnNumber: 81
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 663,
                          columnNumber: 77
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 662,
                          columnNumber: 73
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "ms-0", children: "Download" }, void 0, false, {
                            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                            lineNumber: 670,
                            columnNumber: 77
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "ms-0 link-danger", children: "Delete" }, void 0, false, {
                            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                            lineNumber: 671,
                            columnNumber: 77
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 669,
                          columnNumber: 73
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 661,
                        columnNumber: 69
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 657,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 652,
                    columnNumber: 61
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 644,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 643,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-file-text-fill" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 683,
                    columnNumber: 73
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 682,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 681,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 680,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "jampack.pdf" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 689,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "1.3 GB" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 690,
                        columnNumber: 69
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 688,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar3_default, alt: "user", className: "avatar-img" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 694,
                        columnNumber: 73
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 693,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { size: "sm", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 700,
                          columnNumber: 85
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 699,
                          columnNumber: 81
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 698,
                          columnNumber: 77
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 697,
                          columnNumber: 73
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "ms-0", children: "Download" }, void 0, false, {
                            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                            lineNumber: 705,
                            columnNumber: 77
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "ms-0 link-danger", children: "Delete" }, void 0, false, {
                            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                            lineNumber: 706,
                            columnNumber: 77
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 704,
                          columnNumber: 73
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 696,
                        columnNumber: 69
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 692,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 687,
                    columnNumber: 61
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 679,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 678,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-file-zip-fill" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 718,
                    columnNumber: 73
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 717,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 716,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 715,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "themeforest-pack.zip" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 724,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "2.45 GB" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 725,
                        columnNumber: 69
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 723,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-xs avatar-soft-danger avatar-rounded me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 729,
                        columnNumber: 73
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 728,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { size: "sm", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 735,
                          columnNumber: 85
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 734,
                          columnNumber: 81
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 733,
                          columnNumber: 77
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 732,
                          columnNumber: 73
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "ms-0", children: "Download" }, void 0, false, {
                            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                            lineNumber: 740,
                            columnNumber: 77
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "ms-0 link-danger", children: "Delete" }, void 0, false, {
                            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                            lineNumber: 741,
                            columnNumber: 77
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 739,
                          columnNumber: 73
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 731,
                        columnNumber: 69
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 727,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 722,
                    columnNumber: 61
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 714,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 713,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-logo avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar2_default, alt: "user" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 753,
                    columnNumber: 73
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 752,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 751,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 750,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "bruce-mars-fiEG-Pk6ZASFPk6ZASF" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 759,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "4,178 KB" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 760,
                        columnNumber: 69
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 758,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar5_default, alt: "user", className: "avatar-img" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 764,
                        columnNumber: 73
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 763,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { size: "sm", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 770,
                          columnNumber: 85
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 769,
                          columnNumber: 81
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 768,
                          columnNumber: 77
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 767,
                          columnNumber: 73
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "ms-0", children: "Download" }, void 0, false, {
                            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                            lineNumber: 775,
                            columnNumber: 77
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "ms-0 link-danger", children: "Delete" }, void 0, false, {
                            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                            lineNumber: 776,
                            columnNumber: 77
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 774,
                          columnNumber: 73
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 766,
                        columnNumber: 69
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 762,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 757,
                    columnNumber: 61
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 749,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 748,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-logo avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar2_default, alt: "user" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 788,
                    columnNumber: 73
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 787,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 786,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 785,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "jonas-kakaroto-KIPqvvTKIPqvvT" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 794,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "951 KB" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 795,
                        columnNumber: 69
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 793,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar6_default, alt: "user", className: "avatar-img" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 799,
                        columnNumber: 73
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 798,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { size: "sm", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 805,
                          columnNumber: 85
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 804,
                          columnNumber: 81
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 803,
                          columnNumber: 77
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 802,
                          columnNumber: 73
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "ms-0", children: "Download" }, void 0, false, {
                            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                            lineNumber: 810,
                            columnNumber: 77
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "ms-0 link-danger", children: "Delete" }, void 0, false, {
                            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                            lineNumber: 811,
                            columnNumber: 77
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 809,
                          columnNumber: 73
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 801,
                        columnNumber: 69
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 797,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 792,
                    columnNumber: 61
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 784,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 783,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 642,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 641,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "files_collapse_2", title: "23 April", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "sh-files", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-keynote-fill" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 827,
                    columnNumber: 73
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 826,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 825,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 824,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "presentation.keynote" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 833,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "20 KB" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 834,
                        columnNumber: 69
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 832,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar5_default, alt: "user", className: "avatar-img" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 838,
                        columnNumber: 73
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 837,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { size: "sm", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 844,
                          columnNumber: 85
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 843,
                          columnNumber: 81
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 842,
                          columnNumber: 77
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 841,
                          columnNumber: 73
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "ms-0", children: "Download" }, void 0, false, {
                            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                            lineNumber: 849,
                            columnNumber: 77
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "ms-0 link-danger", children: "Delete" }, void 0, false, {
                            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                            lineNumber: 850,
                            columnNumber: 77
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 848,
                          columnNumber: 73
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 840,
                        columnNumber: 69
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 836,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 831,
                    columnNumber: 61
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 823,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 822,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-file-zip-fill" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 862,
                    columnNumber: 73
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 861,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 860,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 859,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "PACK-TRIAL.zip" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 868,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "2.45 GB" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 869,
                        columnNumber: 69
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 867,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 873,
                        columnNumber: 73
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 872,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 877,
                        columnNumber: 77
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 876,
                        columnNumber: 73
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 875,
                        columnNumber: 212
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 875,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "dropdown-menu dropdown-menu-end", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "dropdown-item ms-0", href: "#some", children: "Download" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 879,
                          columnNumber: 73
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "dropdown-item ms-0", href: "#some", children: "Delete" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 880,
                          columnNumber: 73
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 878,
                        columnNumber: 69
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 871,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 866,
                    columnNumber: 61
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 858,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 857,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar1_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 890,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 889,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 888,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "joel-mott-LaK153ghdigaghdi" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 895,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "3,028 KB" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 896,
                        columnNumber: 69
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 894,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 900,
                        columnNumber: 73
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 899,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 904,
                        columnNumber: 77
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 903,
                        columnNumber: 73
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 902,
                        columnNumber: 212
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 902,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "dropdown-menu dropdown-menu-end", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "dropdown-item ms-0", href: "#some", children: "Download" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 906,
                          columnNumber: 73
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "dropdown-item ms-0", href: "#some", children: "Delete" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                          lineNumber: 907,
                          columnNumber: 73
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 905,
                        columnNumber: 69
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 898,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 893,
                    columnNumber: 61
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 887,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 886,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 821,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 820,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 640,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 639,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 628,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tab_default.Pane, { eventKey: "tabActivity", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-5 mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "title title-lg mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Latest activity" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 920,
              columnNumber: 78
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 920,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 919,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "collapse-simple", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "activity_1", title: "Today", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListGroup_default, { as: "ul", variant: "flush", className: "activity-list", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 929,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 928,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 927,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-dark", children: "Hencework" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 933,
                        columnNumber: 64
                      }, this),
                      " on Documentation link is working now - ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "link-url", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("u", { children: "ttps://hencework.com/theme/jampa" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 933,
                        columnNumber: 185
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 933,
                        columnNumber: 148
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 933,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "last-activity-time", children: "Oct 15, 2021, 12:34 PM" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 934,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 932,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 926,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 925,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 942,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 941,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 940,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-dark", children: "Morgan Fregman" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 946,
                        columnNumber: 64
                      }, this),
                      " completed react conversion of ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("u", { children: "components" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 946,
                        columnNumber: 185
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 946,
                        columnNumber: 144
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 946,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "last-activity-time", children: "Sep 16, 2021, 4:54 PM" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 947,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 945,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 939,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 938,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 955,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 954,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 953,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-dark", children: "Jimmy Carry" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 959,
                        columnNumber: 64
                      }, this),
                      "completed side bar menu on ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("u", { children: "elements" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 959,
                        columnNumber: 178
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 959,
                        columnNumber: 137
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 959,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 960,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 958,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 952,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 951,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar7_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 968,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 967,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 966,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-dark", children: "Charlie Chaplin" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 972,
                        columnNumber: 64
                      }, this),
                      " deleted empty cards on ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("u", { children: "completed" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 972,
                        columnNumber: 179
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 972,
                        columnNumber: 138
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 972,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 973,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 971,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 965,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 964,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 924,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 923,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "activity_2", title: "Yesterday", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListGroup_default, { as: "ul", variant: "flush", className: "activity-list", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: "W" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 985,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 984,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 983,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-dark", children: "Winston Churchills" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 989,
                        columnNumber: 64
                      }, this),
                      " created a note on UI components task list"
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 989,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "last-activity-time", children: "Sep 2, 2021, 9:23 AM" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 990,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 988,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 982,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 981,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 998,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 997,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 996,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-dark", children: "Morgan Fregman" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 1002,
                        columnNumber: 64
                      }, this),
                      " completed react conversion of ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("u", { children: "components" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 1002,
                        columnNumber: 185
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 1002,
                        columnNumber: 144
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 1002,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "last-activity-time", children: "Sep 16, 2021, 4:54 PM" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 1003,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 1001,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 995,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 994,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 1011,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 1010,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 1009,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-dark", children: "Jimmy Carry" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 1015,
                        columnNumber: 64
                      }, this),
                      "added shared components to ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("u", { children: "basic structure" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 1015,
                        columnNumber: 178
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 1015,
                        columnNumber: 137
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 1015,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 1016,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 1014,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 1008,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 1007,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 1024,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 1023,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 1022,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-dark", children: "Hencework" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 1028,
                        columnNumber: 64
                      }, this),
                      " commented on ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("u", { children: "basic structure" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 1028,
                        columnNumber: 163
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 1028,
                        columnNumber: 122
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 1028,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 1029,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 1027,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 1021,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 1020,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar7_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 1037,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 1036,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 1035,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-dark", children: "Charlie Chaplin" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 1041,
                        columnNumber: 64
                      }, this),
                      " moved components from all modules to in progress"
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 1041,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 1042,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 1040,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 1034,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 1033,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: "W" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 1050,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 1049,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 1048,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-dark", children: "Winston Churchills" }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                        lineNumber: 1054,
                        columnNumber: 64
                      }, this),
                      " created a note on UI components task list"
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 1054,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                      lineNumber: 1055,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                    lineNumber: 1053,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 1047,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                  lineNumber: 1046,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 980,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
                lineNumber: 979,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 922,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 918,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 402,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
        lineNumber: 379,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
      lineNumber: 302,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "task-action-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "nicescroll-bar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "title title-xs text-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Action" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
        lineNumber: 1068,
        columnNumber: 74
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
        lineNumber: 1068,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default, { className: "nav-sm nav-icon nav-vertical nav-light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(edit_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 1072,
              columnNumber: 104
            }, this),
            " "
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1072,
            columnNumber: 73
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1072,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Edit" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1073,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1071,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1070,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(user_default, {}, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1078,
            columnNumber: 104
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1078,
            columnNumber: 73
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1078,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Assign to" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1079,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1077,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1076,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(paperclip_default, {}, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1084,
            columnNumber: 104
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1084,
            columnNumber: 73
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1084,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Attach files" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1085,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1083,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1082,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(tag_default, {}, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1090,
            columnNumber: 104
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1090,
            columnNumber: 73
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1090,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "ApplyLabels" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1091,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1089,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1088,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(calendar_default, {}, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1096,
            columnNumber: 104
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1096,
            columnNumber: 73
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1096,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Set Due Date" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1097,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1095,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1094,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(bookmark_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 1103,
              columnNumber: 45
            }, this),
            " "
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1102,
            columnNumber: 73
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1102,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Follow Task" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1104,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1101,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1100,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
        lineNumber: 1069,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hk-separator hk-separator-sm hk-secondary-separator" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
        lineNumber: 1108,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default, { className: "nav nav-sm nav-icon nav-vertical nav-light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(arrow_up_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 1112,
              columnNumber: 104
            }, this),
            " "
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1112,
            columnNumber: 73
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1112,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Set as Top Priority" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1113,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1111,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1110,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: [
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(repeat_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 1118,
              columnNumber: 105
            }, this),
            " "
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1118,
            columnNumber: 73
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1118,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Change Status" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1119,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1117,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1116,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(pocket_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 1124,
              columnNumber: 104
            }, this),
            " "
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1124,
            columnNumber: 73
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1124,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Save as Template" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1125,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1123,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1122,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(archive_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 1130,
              columnNumber: 104
            }, this),
            " "
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1130,
            columnNumber: 73
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1130,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Move to archive" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1131,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1129,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1128,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(trash_2_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
              lineNumber: 1137,
              columnNumber: 45
            }, this),
            " "
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1136,
            columnNumber: 73
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1136,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Delete" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
            lineNumber: 1138,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1135,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
          lineNumber: 1134,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
        lineNumber: 1109,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
      lineNumber: 1067,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
      lineNumber: 1066,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
    lineNumber: 194,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
    lineNumber: 193,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/scrumboard/kanban-board/TaskDetails.jsx",
    lineNumber: 192,
    columnNumber: 10
  }, this);
};
_s2(TaskDetails, "dXzzaywIbW8V4V1YV88P/v8JQwk=");
_c4 = TaskDetails;
var TaskDetails_default = TaskDetails;
var _c4;
$RefreshReg$(_c4, "TaskDetails");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/scrumboard/kanban-board/Board.jsx
var import_react6 = __toESM(require_react(), 1);
var import_react_perfect_scrollbar2 = __toESM(require_lib(), 1);

// app/routes/apps/scrumboard/kanban-board/KanbanDatas.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/scrumboard/kanban-board/KanbanDatas.js"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var DATASET = {
  tasks: {
    // All Module Task
    "task-1": {
      id: "task-1",
      Task_Name: "Application Pages",
      Avatar: [{ img: avatar13_default, name: "Dean" }, { img: avatar2_default, name: "Danial" }],
      InitAvatar: [{ avt: "B", bg: "avatar-soft-danger", name: "Tom" }],
      Footer: true,
      Task_Counter: "4/8",
      Task_Discuss: "24",
      Deadline: "22 Sep, 22"
    },
    "task-2": {
      id: "task-2",
      Task_Name: "Authentication",
      Footer: true,
      Task_Counter: "12/18",
      Task_Discuss: "24",
      Deadline: "22 Sep, 22"
    },
    "task-3": {
      id: "task-3",
      Task_Name: "Menu Modules",
      Footer: false
    },
    "task-4": {
      id: "task-4",
      Task_Name: "Content",
      Avatar: [{ img: avatar13_default, name: "Dean" }, { img: avatar10_default, name: "Winston" }],
      Footer: true,
      Task_Counter: "0/3",
      Task_Discuss: "24",
      Deadline: "22 Sep, 22"
    },
    "task-5": {
      id: "task-5",
      Task_Name: "Utilities",
      Footer: false
    },
    "task-6": {
      id: "task-6",
      Task_Name: "Forms",
      Footer: true,
      Task_Counter: "18/18",
      Deadline: "22 Sep, 22"
    },
    "task-7": {
      id: "task-7",
      Task_Name: "Tables",
      Footer: true,
      Task_Counter: "1/9",
      Task_Discuss: "5",
      Deadline: "30 Sep, 22"
    },
    "task-8": {
      id: "task-8",
      Task_Name: "Charts",
      Footer: false
    },
    "task-9": {
      id: "task-9",
      Task_Name: "Maps",
      Footer: false
    },
    "task-10": {
      id: "task-10",
      Task_Name: "Final Package",
      Avatar: [{ img: avatar2_default, name: "Danial" }],
      Footer: true,
      Task_Counter: "40/127",
      Task_Discuss: "24",
      Deadline: "15 Oct, 20"
    },
    // IN PROGRESS TASK
    "task-11": {
      id: "task-11",
      Task_Name: "Profile Pages",
      Avatar: [{ img: avatar8_default, name: "Katharine" }],
      Footer: true,
      Task_Counter: "4/8",
      Task_Discuss: "",
      Deadline: "18 Sep, 22",
      Progressed_Value: 45
    },
    "task-12": {
      id: "task-12",
      Task_Name: "Advance Tables",
      Footer: true,
      Task_Counter: "4/8",
      Task_Discuss: "24",
      Deadline: "22 Sep, 22",
      Progressed_Value: 85
    },
    "task-13": {
      id: "task-13",
      Task_Name: "CSS Compilation",
      Avatar: [{ img: avatar2_default, name: "Danial" }],
      InitAvatar: [{ avt: "A", bg: "avatar-soft-success", name: "Huma" }],
      Badges: [{ title: "Priority", bg: "primary" }, { title: "Angular", bg: "danger" }],
      Footer: true,
      Task_Counter: "4/8",
      Task_Discuss: "",
      Deadline: "18 Sep, 22",
      Progressed_Value: 60
    },
    "task-14": {
      id: "task-14",
      Task_Name: "Lists",
      Footer: true,
      Task_Counter: "18/18",
      Task_Discuss: "24",
      Deadline: "28 Sep, 22",
      Progressed_Value: 20
    },
    "task-15": {
      id: "task-15",
      Task_Name: "Dashboards",
      Footer: true,
      Task_Counter: "18/18",
      Task_Discuss: "24",
      Deadline: "28 Sep, 22",
      Progressed_Value: 10
    },
    "task-16": {
      id: "task-16",
      Task_Name: "Detail Pages",
      Avatar: [{ img: avatar2_default, name: "Danial" }],
      Footer: true,
      Task_Counter: "18/18",
      Task_Discuss: "24",
      Deadline: "28 Sep, 22",
      Progressed_Value: 70
    },
    // COMPLETED TASK
    "task-17": {
      id: "task-17",
      Task_Name: "Forms",
      Description: "Form validation works only online. Check by activating local server.",
      Footer: true,
      Task_Counter: "18/18",
      Task_Discuss: "",
      Deadline: "28 Sep, 22",
      Progressed_Value: 100
    },
    "task-18": {
      id: "task-18",
      Task_Name: "Tables",
      Description: "",
      Footer: true,
      Task_Counter: "1/9",
      Task_Discuss: "5",
      Deadline: "30 Sep, 22",
      Progressed_Value: 100
    },
    "task-19": {
      id: "task-19",
      Task_Name: "Application Pages",
      Description: "",
      Avatar: [{ img: avatar9_default, name: "Huma" }, { img: avatar3_default, name: "Katharine" }, { img: avatar7_default, name: "Danial" }, { img: avatar13_default, name: "Dean" }],
      InitAvatar: [{ avt: "C", bg: "avatar-soft-info", name: "Charlie" }],
      Footer: true,
      Task_Counter: "4/8",
      Task_Discuss: "",
      Deadline: "18 Sep, 22",
      Progressed_Value: 100
    },
    "task-20": {
      id: "task-20",
      Task_Name: "Authentication",
      Footer: true,
      Task_Counter: "1/9",
      Task_Discuss: "5",
      Deadline: "30 Sep, 22",
      Progressed_Value: 100
    },
    // PENDING TASK
    "task-21": {
      id: "task-21",
      Task_Name: "Authentication",
      Badges: [{ title: "Unassigned", bg: "light" }, { title: "Collaborator", bg: "danger" }],
      Footer: true,
      Task_Counter: "12/18",
      Task_Discuss: "24",
      Deadline: "22 Sep, 20"
    },
    "task-22": {
      id: "task-22",
      Task_Name: "Content",
      Avatar: [{ img: avatar13_default, name: "Dean" }, { img: avatar10_default, name: "Winston" }],
      Footer: true,
      Task_Counter: "0/3",
      Task_Discuss: "24",
      Deadline: "24 Sep, 20"
    },
    "task-23": {
      id: "task-23",
      Task_Name: "Utilities",
      Footer: false
    },
    "task-24": {
      id: "task-24",
      Task_Name: "Forms",
      Footer: true,
      Task_Counter: "18/18",
      Task_Discuss: "24",
      Deadline: "24 Sep, 22"
    },
    "task-25": {
      id: "task-25",
      Task_Name: "Tables",
      Footer: true,
      Task_Counter: "1/9",
      Task_Discuss: "5",
      Deadline: "30 Sep, 22"
    },
    "task-26": {
      id: "task-26",
      Task_Name: "Charts",
      Footer: false
    }
  },
  cards: {
    "card-1": {
      id: "card-1",
      title: "ALL MODULES",
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5", "task-6", "task-7", "task-8", "task-9", "task-10"]
    },
    "card-2": {
      id: "card-2",
      title: "IN PROGRESS",
      taskIds: ["task-11", "task-12", "task-13", "task-14", "task-15", "task-16"]
    },
    "card-3": {
      id: "card-3",
      title: "COMPLETED",
      taskIds: ["task-17", "task-18", "task-19", "task-20"]
    },
    "card-4": {
      id: "card-4",
      title: "PENDING ",
      taskIds: ["task-21", "task-22", "task-23", "task-24", "task-25", "task-26"]
    }
  },
  cardOrder: ["card-1", "card-2", "card-3", "card-4"]
};

// app/routes/apps/scrumboard/kanban-board/Cards.jsx
var import_react5 = __toESM(require_react(), 1);
var import_classnames4 = __toESM(require_classnames(), 1);
var import_react_perfect_scrollbar = __toESM(require_lib(), 1);

// app/routes/apps/scrumboard/kanban-board/Task.jsx
var import_react4 = __toESM(require_react(), 1);
var import_classnames3 = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/scrumboard/kanban-board/Task.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/scrumboard/kanban-board/Task.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var Task = (props) => {
  _s3();
  const [showTaskInfo, setshowTaskInfo] = (0, import_react4.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PublicDraggable, { draggableId: props.task.id, index: props.index, children: (provided, snapshot) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      Card_default,
      {
        className: "card-border card-wth-progress card-simple tasklist-card",
        ref: provided.innerRef,
        ...provided.draggableProps,
        ...provided.dragHandleProps,
        children: [
          props.task.Progressed_Value && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ProgressBar_default, { size: "xs", variant: (0, import_classnames3.default)({
            "warning": props.task.Progressed_Value > 30 && props.task.Progressed_Value < 50
          }, {
            "danger": props.task.Progressed_Value < 30
          }, {
            "success": props.task.Progressed_Value === 100
          }), now: props.task.Progressed_Value, className: "progress-bar-xs" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
            lineNumber: 38,
            columnNumber: 57
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default.Header, { className: "card-header-action", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h6", { className: "fw-bold", children: props.task.Task_Name }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
              lineNumber: 46,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "card-action-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(more_vertical_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                lineNumber: 52,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                lineNumber: 51,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                lineNumber: 50,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                lineNumber: 49,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { onClick: () => setshowTaskInfo(!showTaskInfo), children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(edit_2_default, {}, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 59,
                    columnNumber: 49
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 58,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Edit" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 61,
                    columnNumber: 45
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 57,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(user_default, {}, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 65,
                    columnNumber: 49
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 64,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Assign to" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 67,
                    columnNumber: 45
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 63,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(paperclip_default, {}, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 71,
                    columnNumber: 49
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 70,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Attach files" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 73,
                    columnNumber: 45
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 69,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(tag_default, {}, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 77,
                    columnNumber: 49
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 76,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Apply Labels" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 79,
                    columnNumber: 45
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 75,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(calendar_default, {}, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 83,
                    columnNumber: 49
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 82,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Set Due Date" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 85,
                    columnNumber: 45
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 81,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(bookmark_default, {}, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 89,
                    columnNumber: 49
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 88,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Follow Task" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 91,
                    columnNumber: 45
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 87,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 93,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(arrow_up_default, {}, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 95,
                    columnNumber: 90
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 95,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Set as Top Priority" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 97,
                    columnNumber: 45
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 94,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: [
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(repeat_default, {}, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                      lineNumber: 100,
                      columnNumber: 91
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 100,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Change Status" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 102,
                    columnNumber: 45
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 99,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: [
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(pocket_default, {}, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                      lineNumber: 105,
                      columnNumber: 91
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 105,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Save as Template" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 107,
                    columnNumber: 45
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 104,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(archive_default, {}, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 110,
                    columnNumber: 90
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 110,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Move to archive" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 112,
                    columnNumber: 45
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 109,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { className: "delete-task", onClick: () => props.onRemoveTask(props.task.id, props.cardId), children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(trash_2_default, {}, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 116,
                    columnNumber: 49
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 115,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                    lineNumber: 118,
                    columnNumber: 45
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 114,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                lineNumber: 56,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
              lineNumber: 48,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
              lineNumber: 47,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
            lineNumber: 45,
            columnNumber: 25
          }, this),
          (props.task.Avatar || props.task.Badges || props.task.Description) && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default.Body, { children: [
            props.task.Description && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: props.task.Description }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
              lineNumber: 124,
              columnNumber: 56
            }, this),
            (props.task.Avatar || props.task.InitAvatar) && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "avatar-group avatar-group-overlapped", children: [
              props.task.Avatar && props.task.Avatar.map((ele, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HkTooltip_default, { placement: "top", title: ele.name, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: ele.img, alt: "user", className: "avatar-img" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                lineNumber: 128,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                lineNumber: 127,
                columnNumber: 41
              }, this) }, indx, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                lineNumber: 126,
                columnNumber: 92
              }, this)),
              props.task.InitAvatar && props.task.InitAvatar.map((elem, ind) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HkTooltip_default, { placement: "top", title: elem.name, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: (0, import_classnames3.default)("avatar avatar-xs avatar-rounded", elem.bg), "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Tom", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "initial-wrap", children: elem.avt }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                lineNumber: 133,
                columnNumber: 45
              }, this) }, ind, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                lineNumber: 132,
                columnNumber: 41
              }, this) }, ind, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                lineNumber: 131,
                columnNumber: 100
              }, this))
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
              lineNumber: 125,
              columnNumber: 78
            }, this),
            props.task.Badges && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-2", children: props.task.Badges.map((badge, ind) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(hk_badge_default, { bg: badge.bg, soft: true, className: "my-1 me-1", children: badge.title }, ind, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
              lineNumber: 138,
              columnNumber: 72
            }, this)) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
              lineNumber: 137,
              columnNumber: 51
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
            lineNumber: 123,
            columnNumber: 96
          }, this),
          props.task.Footer && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default.Footer, { className: "text-muted justify-content-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
              props.task.Task_Counter && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "task-counter", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-checkbox-line" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 144,
                  columnNumber: 47
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 144,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: props.task.Task_Counter }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 145,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                lineNumber: 143,
                columnNumber: 65
              }, this),
              props.task.Task_Discuss && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "task-discuss", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-message-3-line" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 148,
                  columnNumber: 47
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 148,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: props.task.Task_Discuss }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                  lineNumber: 149,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
                lineNumber: 147,
                columnNumber: 65
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
              lineNumber: 142,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "task-deadline", children: props.task.Deadline }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
              lineNumber: 153,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
              lineNumber: 152,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
            lineNumber: 141,
            columnNumber: 47
          }, this)
        ]
      },
      props.task.id,
      true,
      {
        fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
        lineNumber: 35,
        columnNumber: 42
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TaskDetails_default, { show: showTaskInfo, onHide: () => setshowTaskInfo(!showTaskInfo) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
      lineNumber: 161,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/scrumboard/kanban-board/Task.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_s3(Task, "JuRGzDKtbdZ6WbeOMTuyZW9QU2Q=");
_c5 = Task;
var Task_default = Task;
var _c5;
$RefreshReg$(_c5, "Task");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/scrumboard/kanban-board/Cards.jsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/scrumboard/kanban-board/Cards.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/scrumboard/kanban-board/Cards.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var Cards = (props) => {
  _s4();
  const [renameBoard, setRenameBoard] = (0, import_react5.useState)(false);
  const [newBoardName, setNewBoardName] = (0, import_react5.useState)("");
  const [addNewCard, setAddNewCard] = (0, import_react5.useState)(false);
  const [newCardName, setNewCardName] = (0, import_react5.useState)("");
  const handleRename = () => {
    setNewBoardName(props.card?.title);
    setRenameBoard(!renameBoard);
  };
  const onRenameBoard = () => {
    props.renameBoard(props.card.id, newBoardName);
    setRenameBoard(false);
  };
  const onSaveTask = (content) => {
    props.onAddNewTask(props.card?.id, newCardName);
    setNewCardName("");
    setAddNewCard(!addNewCard);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PublicDraggable, { draggableId: props.card.id, index: props.index, children: (provided) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card_default, { className: (0, import_classnames4.default)("card-simple card-border tasklist"), ref: provided.innerRef, ...provided.draggableProps, id: props.card.id, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card_default.Header, { className: "card-header-action", ...provided.dragHandleProps, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "tasklist-handle", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h6", { className: "text-uppercase fw-bold  d-flex align-items-center mb-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "tasklist-name", children: props.card.title }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 56,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(hk_badge_default, { bg: "violet", soft: true, pill: true, className: "ms-2", children: props.card.taskIds.length }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 57,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
            lineNumber: 55,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "card-action-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 64,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 63,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 62,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 61,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Item, { className: "edit-tasklist", onClick: handleRename, children: "Edit" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
                lineNumber: 69,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Item, { className: "delete-tasklist", onClick: () => props.onRemoveBoard(props.card.id), children: "Delete" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
                lineNumber: 70,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Dropdown_default.Item, { className: "clear-tasklist", onClick: () => props.clearBoard(props.card.id), children: "Clear All" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
                lineNumber: 71,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 68,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
            lineNumber: 60,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
            lineNumber: 59,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 54,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { variant: "white", className: "btn-block btn-add-newtask", onClick: () => setAddNewCard(!addNewCard), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(plus_default, {}, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 80,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 79,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 78,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 77,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 76,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
        lineNumber: 53,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card_default.Body, { as: import_react_perfect_scrollbar.default, children: [
        "    ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ConnectedDroppable, { droppableId: props.card.id, type: "task", children: (provided2, snapshot) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "div",
            {
              ref: provided2.innerRef,
              ...provided2.droppableProps,
              children: props.tasks.map((task, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Task_default, { task, index, cardId: props.card.id, onRemoveTask: props.onRemoveTask }, task.id, false, {
                fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
                lineNumber: 94,
                columnNumber: 79
              }, this))
            },
            void 0,
            false,
            {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 90,
              columnNumber: 41
            },
            this
          ),
          provided2.placeholder
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 89,
          columnNumber: 58
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 88,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
        lineNumber: 87,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
      lineNumber: 52,
      columnNumber: 30
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Modal_default, { Modal: true, show: renameBoard, onHide: () => setRenameBoard(!renameBoard), size: "sm", centered: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Modal_default.Body, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: () => setRenameBoard(!renameBoard), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 109,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 108,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h5", { className: "mb-4", children: "Edit Task List" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 111,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Group, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Label, { children: "Name" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
            lineNumber: 116,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Control, { type: "text", value: newBoardName, onChange: (e) => setNewBoardName(e.target.value) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
            lineNumber: 117,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 115,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 114,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 113,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 112,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
        lineNumber: 107,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "modal-footer align-items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { variant: "secondary", onClick: () => setRenameBoard(!renameBoard), children: "Cancel" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 124,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { variant: "primary", className: "btn-add-tasklist", onClick: onRenameBoard, children: "Add" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 125,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
        lineNumber: 123,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
      lineNumber: 106,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Modal_default, { show: addNewCard, onHide: () => setAddNewCard(!addNewCard), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Modal_default.Body, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: () => setAddNewCard(!addNewCard), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 133,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 132,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h5", { className: "mb-4", children: "Create New Card" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 135,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Row_default, { className: "gx-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Label, { children: "Name" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 140,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Control, { className: "task-name", type: "text", name: "Task_Name", value: newCardName, onChange: (e) => setNewCardName(e.target.value) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 141,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
            lineNumber: 139,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
            lineNumber: 138,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Label, { children: "Start Date" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 146,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DateRangePicker, { initialSettings: {
              singleDatePicker: true,
              showDropdowns: true,
              startDate: /* @__PURE__ */ new Date()
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Control, { name: " single-date-pick", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 152,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 147,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
            lineNumber: 145,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
            lineNumber: 144,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Label, { children: "End Date" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 158,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DateRangePicker, { initialSettings: {
              singleDatePicker: true,
              showDropdowns: true,
              startDate: /* @__PURE__ */ new Date()
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Control, { name: " single-date-pick2", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 164,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 159,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
            lineNumber: 157,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
            lineNumber: 156,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Col_default, { md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Label, { children: "Note/Description" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 170,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Control, { as: "textarea", rows: 3 }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 171,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
            lineNumber: 169,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
            lineNumber: 168,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Col_default, { md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Group, { className: "mt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Label, { className: "me-3", children: "Set priority:" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 176,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Check, { inline: true, label: "High", name: "group1", type: "radio", id: "check1" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 177,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Check, { inline: true, label: "Medium", name: "group1", type: "radio", id: "check2" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 178,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Check, { inline: true, label: "Low", name: "group1", type: "radio", id: "check3" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
              lineNumber: 179,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
            lineNumber: 175,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
            lineNumber: 174,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 137,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 136,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
        lineNumber: 131,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Modal_default.Footer, { className: "align-items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { variant: "secondary", onClick: () => setAddNewCard(!addNewCard), children: "Cancel" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 186,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { variant: "primary", onClick: onSaveTask, children: "Add" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
          lineNumber: 187,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
        lineNumber: 185,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
      lineNumber: 130,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/scrumboard/kanban-board/Cards.jsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
};
_s4(Cards, "0Wjj+A4QaGM3DuHdNLbuHHIFNpM=");
_c6 = Cards;
var Cards_default = Cards;
var _c6;
$RefreshReg$(_c6, "Cards");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/scrumboard/kanban-board/DragDropCards.jsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/scrumboard/kanban-board/DragDropCards.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/scrumboard/kanban-board/DragDropCards.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var DragDropCards = ({
  cards,
  tasks,
  cardOrder,
  setCards,
  setTasks,
  setCardOrder
}) => {
  const reorderCards = (source, destination, draggableId) => {
    const newCardOrder = Array.from(cardOrder);
    newCardOrder.splice(source.index, 1);
    newCardOrder.splice(destination.index, 0, draggableId);
    setCardOrder(newCardOrder);
  };
  const reorderTasksWithinCard = (card, sourceIdx, destinationIdx, draggableId) => {
    const newTaskIds = Array.from(card.taskIds);
    newTaskIds.splice(sourceIdx, 1);
    newTaskIds.splice(destinationIdx, 0, draggableId);
    setCards({
      ...cards,
      [card.id]: {
        ...card,
        taskIds: newTaskIds
      }
    });
  };
  const moveTask = (start, finish, sourceIdx, destinationIdx, draggableId) => {
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(sourceIdx, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destinationIdx, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };
    setCards({
      ...cards,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish
    });
  };
  const onDragEnd = (result) => {
    const {
      destination,
      source,
      draggableId,
      type
    } = result;
    if (!destination || destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    if (type === "card") {
      reorderCards(source, destination, draggableId);
    } else {
      const start = cards[source.droppableId];
      const finish = cards[destination.droppableId];
      if (start.id === finish.id) {
        reorderTasksWithinCard(start, source.index, destination.index, draggableId);
      } else {
        moveTask(start, finish, source.index, destination.index, draggableId);
      }
    }
  };
  const boardRename = (cardID, newTitle) => {
    if (newTitle !== cards[cardID].title) {
      setCards({
        ...cards,
        [cardID]: {
          ...cards[cardID],
          title: newTitle
        }
      });
    }
  };
  const onRemoveBoard = (cardID) => {
    const newCardOrder = cardOrder.filter((id) => id !== cardID);
    setCardOrder(newCardOrder);
    const cardTaskIds = cards[cardID].taskIds;
    cardTaskIds.forEach((taskID) => delete tasks[taskID]);
    delete cards[cardID];
    setCards(cards);
    setTasks(tasks);
  };
  const clearBoard = (cardID) => {
    setCards({
      ...cards,
      [cardID]: {
        ...cards[cardID],
        taskIds: []
      }
    });
  };
  const onAddNewTask = (cardID, taskName) => {
    const newTask = {
      id: nanoid(),
      Task_Name: taskName,
      Footer: true,
      Task_Counter: "4/8",
      Task_Discuss: "24",
      Deadline: "22 Sep, 22"
    };
    setTasks({
      ...tasks,
      [newTask.id]: newTask
    });
    const newTaskIds = Array.from(cards[cardID].taskIds);
    newTaskIds.push(newTask.id);
    setCards({
      ...cards,
      [cardID]: {
        ...cards[cardID],
        taskIds: newTaskIds
      }
    });
  };
  const onRemoveTask = (taskID, cardID) => {
    const newTaskIds = cards[cardID].taskIds.filter((id) => id !== taskID);
    setCards({
      ...cards,
      [cardID]: {
        ...cards[cardID],
        taskIds: newTaskIds
      }
    });
    delete tasks[taskID];
    setTasks(tasks);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DragDropContext, { onDragEnd, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ConnectedDroppable, { droppableId: "all-cards", direction: "horizontal", type: "card", children: (provided) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "tasklist-wrap", ...provided.droppableProps, ref: provided.innerRef, children: [
    cardOrder.map((id, index) => {
      const card = cards[id];
      const cardTasks = card.taskIds.map((taskId) => tasks[taskId]);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Cards_default, { card, tasks: cardTasks, index, renameBoard: boardRename, onRemoveBoard, clearBoard, onRemoveTask, onAddNewTask }, card.id, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/DragDropCards.jsx",
        lineNumber: 173,
        columnNumber: 18
      }, this);
    }),
    provided.placeholder
  ] }, void 0, true, {
    fileName: "app/routes/apps/scrumboard/kanban-board/DragDropCards.jsx",
    lineNumber: 169,
    columnNumber: 30
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/scrumboard/kanban-board/DragDropCards.jsx",
    lineNumber: 168,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/scrumboard/kanban-board/DragDropCards.jsx",
    lineNumber: 167,
    columnNumber: 10
  }, this);
};
_c7 = DragDropCards;
var DragDropCards_default = DragDropCards;
var _c7;
$RefreshReg$(_c7, "DragDropCards");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/scrumboard/kanban-board/Board.jsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/scrumboard/kanban-board/Board.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/scrumboard/kanban-board/Board.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var Board = () => {
  _s5();
  const [dataset, setDataset] = (0, import_react6.useState)(DATASET);
  const [tasks, setTasks] = (0, import_react6.useState)(dataset.tasks);
  const [cards, setCards] = (0, import_react6.useState)(dataset.cards);
  const [cardOrder, setCardOrder] = (0, import_react6.useState)(dataset.cardOrder);
  const [addNewBoard, setAddNewBoard] = (0, import_react6.useState)(false);
  const [newBoardName, setNewBoardName] = (0, import_react6.useState)("");
  const onAddNewCard = () => {
    const newCard = {
      id: "card-" + nanoid(),
      title: newBoardName,
      taskIds: []
    };
    const newCardOrder = Array.from(cardOrder);
    newCardOrder.push(newCard.id);
    setCards({
      ...cards,
      [newCard.id]: newCard
    });
    setCardOrder(newCardOrder);
    setNewBoardName("");
    setAddNewBoard(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "taskboard-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "taskbar-toolbar", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "d-flex align-items-center flex-grow-1 flex-lg-grow-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button_default, { variant: "soft-primary", className: "flex-shrink-0 btn-add-newlist me-4", onClick: () => setAddNewBoard(!addNewBoard), children: "Create New" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
            lineNumber: 57,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form_default.Check, { type: "switch", id: "custom-switch", label: "Show description", className: "ms-auto", defaultChecked: true }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
            lineNumber: 58,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
          lineNumber: 56,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form_default, { role: "search", className: "d-lg-flex d-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form_default.Control, { type: "text", placeholder: "Search in conversation" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
          lineNumber: 61,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
          lineNumber: 60,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
        lineNumber: 55,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react_perfect_scrollbar2.default, { className: "tasklist-scroll position-relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { id: "tasklist_wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(DragDropCards_default, { cards, tasks, cardOrder, setCards, setTasks, setCardOrder }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
          lineNumber: 66,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
          lineNumber: 65,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "card card-simple card-border tasklist add-new-task", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button_default, { variant: "soft-primary", className: "btn-add-newlist flex-shrink-0", onClick: () => setAddNewBoard(!addNewBoard), children: "Add New List" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
          lineNumber: 69,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
          lineNumber: 68,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
        lineNumber: 64,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
      lineNumber: 54,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Modal_default, { show: addNewBoard, onHide: () => setAddNewBoard(!addNewBoard), size: "sm", centered: true, className: "add-tasklist-modal", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Modal_default.Body, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: () => setAddNewBoard(!addNewBoard), children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
          lineNumber: 79,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
          lineNumber: 78,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h5", { className: "mb-4", children: "Add Task List" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
          lineNumber: 81,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form_default.Group, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form_default.Label, { children: "Name" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
            lineNumber: 86,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Form_default.Control, { type: "text", value: newBoardName, onChange: (e) => setNewBoardName(e.target.value) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
            lineNumber: 87,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
          lineNumber: 85,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
          lineNumber: 84,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
          lineNumber: 83,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
          lineNumber: 82,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
        lineNumber: 77,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Modal_default.Footer, { className: "align-items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button_default, { variant: "secondary", onClick: () => setAddNewBoard(!addNewBoard), children: "Cancel" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
          lineNumber: 94,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button_default, { variant: "primary", className: "btn-add-Board", onClick: onAddNewCard, children: "Add" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
          lineNumber: 95,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
        lineNumber: 93,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
      lineNumber: 76,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/scrumboard/kanban-board/Board.jsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
};
_s5(Board, "7jGmuaGk0h10tY9DsE9uXXPMoX0=");
_c8 = Board;
var Board_default = Board;
var _c8;
$RefreshReg$(_c8, "Board");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/scrumboard/kanban-board/route.jsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/scrumboard/kanban-board/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/scrumboard/kanban-board/route.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var KanbanBoard = () => {
  _s6();
  const [showSidebar, setShowSidebar] = (0, import_react7.useState)(true);
  const [showInfo, setShowInfo] = (0, import_react7.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: (0, import_classnames5.default)("taskboardapp-wrap", {
    "taskboardapp-sidebar-toggle": !showSidebar
  }, {
    "taskboardapp-info-active": showInfo
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Sidebar_default, {}, void 0, false, {
      fileName: "app/routes/apps/scrumboard/kanban-board/route.jsx",
      lineNumber: 40,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "taskboardapp-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "taskboardapp-detail-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BoardHeader_default, { showSidebar, toggleSidebar: () => setShowSidebar(!showSidebar), showInfo, toggleInfo: () => setShowInfo(!showInfo) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/route.jsx",
          lineNumber: 43,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Board_default, {}, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/route.jsx",
          lineNumber: 44,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TaskboardInfo_default, { onHide: () => setShowInfo(false) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/kanban-board/route.jsx",
          lineNumber: 45,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/kanban-board/route.jsx",
        lineNumber: 42,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(TaskDetails_default, {}, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/route.jsx",
        lineNumber: 48,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(EditTaskList_default, {}, void 0, false, {
        fileName: "app/routes/apps/scrumboard/kanban-board/route.jsx",
        lineNumber: 50,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/kanban-board/route.jsx",
      lineNumber: 41,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/scrumboard/kanban-board/route.jsx",
    lineNumber: 35,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/scrumboard/kanban-board/route.jsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_s6(KanbanBoard, "t64WNTYboXdOrkwLo0lC9U/yHPs=");
_c9 = KanbanBoard;
var route_default = KanbanBoard;
var _c9;
$RefreshReg$(_c9, "KanbanBoard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/scrumboard/kanban-board/route-GVFTMB6L.js.map
