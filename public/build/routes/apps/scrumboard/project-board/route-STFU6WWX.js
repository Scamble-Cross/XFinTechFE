import {
  avatar14_default
} from "/build/_shared/chunk-F6BSWV7B.js";
import {
  avatar11_default
} from "/build/_shared/chunk-VQO4YLKZ.js";
import {
  AddNewBoard_default,
  Sidebar_default
} from "/build/_shared/chunk-QHJREALY.js";
import {
  HkDropZone_default
} from "/build/_shared/chunk-OVUIRAHX.js";
import {
  avatar10_default
} from "/build/_shared/chunk-LDADEV53.js";
import {
  avatar6_default
} from "/build/_shared/chunk-CWUICKJG.js";
import {
  avatar9_default
} from "/build/_shared/chunk-VFRPT2WG.js";
import {
  avatar5_default
} from "/build/_shared/chunk-JQFY4KQJ.js";
import {
  avatar7_default
} from "/build/_shared/chunk-7XF6XEF7.js";
import {
  avatar13_default
} from "/build/_shared/chunk-WWUYITJG.js";
import {
  HkTooltip_default
} from "/build/_shared/chunk-5BLZWIUZ.js";
import {
  avatar3_default
} from "/build/_shared/chunk-MVEBKFJK.js";
import {
  avatar2_default
} from "/build/_shared/chunk-LLX7VWLD.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  globe_default,
  more_horizontal_default,
  plus_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  Badge_default,
  Button_default,
  Card_default,
  Col_default,
  Container_default,
  Dropdown_default,
  Form_default,
  Modal_default,
  Nav_default,
  Row_default,
  Tab_default
} from "/build/_shared/chunk-KBRVI47E.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-HFWHD4VB.js";
import {
  require_classnames
} from "/build/_shared/chunk-CQ7UJNRQ.js";
import {
  avatar8_default
} from "/build/_shared/chunk-WUHA5P4Y.js";
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

// app/routes/apps/scrumboard/project-board/route.jsx
var import_react3 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// app/routes/apps/scrumboard/project-board/TaskBoard.jsx
var import_react = __toESM(require_react(), 1);
var import_classnames = __toESM(require_classnames(), 1);

// app/routes/apps/scrumboard/project-board/AddBoard.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/scrumboard/project-board/AddBoard.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/scrumboard/project-board/AddBoard.jsx"
  );
  import.meta.hot.lastModified = "1732600247977.749";
}
var AddBoard = ({
  show,
  hide
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { show, onHide: hide, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Header, { className: "header-wth-bg-inv", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Title, { as: "h5", children: "Add Board" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { bsPrefix: "btn-close", className: "text-white", onClick: hide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
        lineNumber: 31,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
        lineNumber: 30,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Body, { className: "p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBar, { className: "nicescroll-bar h-350p", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "p-3 pb-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "J" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 42,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 41,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 40,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "name", children: "Jampack" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 46,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 45,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 39,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-check", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", className: "form-check-input", id: "customCheck2", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 50,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 49,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
        lineNumber: 38,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 57,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 56,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 55,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "name", children: "Hencework" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 61,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 60,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 54,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-check", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", className: "form-check-input", id: "customCheck3", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 65,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 64,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
        lineNumber: 53,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-info avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "G" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 72,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 71,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 70,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "name", children: "Griffin" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 76,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 75,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 69,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-check", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", className: "form-check-input", id: "customCheck4" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 80,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 79,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
        lineNumber: 68,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-warning avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "R" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 87,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 86,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 85,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "name", children: "React - Jampack" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 91,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 90,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 84,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-check", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", className: "form-check-input", id: "customCheck5", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 95,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 94,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
        lineNumber: 83,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "P" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 102,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 101,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 100,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "name", children: "Pangong" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 106,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 105,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 99,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-check", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", className: "form-check-input", id: "customCheck6", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 110,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 109,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
        lineNumber: 98,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-success avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "A" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 117,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 116,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 115,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "name", children: "Angular - Jampack" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 121,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 120,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 114,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-check", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", className: "form-check-input", id: "customCheck7", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 125,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 124,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
        lineNumber: 113,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-warning avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "R" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 132,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 131,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 130,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "name", children: "React - Jampack" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 136,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 135,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 129,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-check", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", className: "form-check-input", id: "customCheck8" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 140,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 139,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
        lineNumber: 128,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "P" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 147,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 146,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 145,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "name", children: "Pangong" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 151,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 150,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 144,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-check", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", className: "form-check-input", id: "customCheck9" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 155,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 154,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
        lineNumber: 143,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-success avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "A" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 162,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 161,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 160,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "name", children: "Angular - Jampack" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 166,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
            lineNumber: 165,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 159,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-check", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", className: "form-check-input", id: "customCheck10" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 170,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
          lineNumber: 169,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
        lineNumber: 158,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
      lineNumber: 37,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Footer, { className: "justify-content-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "light", className: "flex-1", onClick: hide, children: "Cancel" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
        lineNumber: 178,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", className: "flex-fill flex-1", onClick: hide, children: "Add Board" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
        lineNumber: 179,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
      lineNumber: 177,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/scrumboard/project-board/AddBoard.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c = AddBoard;
var AddBoard_default = AddBoard;
var _c;
$RefreshReg$(_c, "AddBoard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/scrumboard/project-board/AddNewMember.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/scrumboard/project-board/AddNewMember.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/scrumboard/project-board/AddNewMember.jsx"
  );
  import.meta.hot.lastModified = "1732600247978.236";
}
var AddNewMember = ({
  show,
  hide
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default, { show, onHide: hide, centered: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: hide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
        lineNumber: 30,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
        lineNumber: 29,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h5", { className: "mb-4", children: "Add New Member" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
        lineNumber: 32,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { className: "gx-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: "Name" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
            lineNumber: 37,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "text" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
            lineNumber: 38,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
          lineNumber: 36,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
          lineNumber: 35,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: "Email Id" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
            lineNumber: 43,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "text" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
            lineNumber: 44,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
          lineNumber: 42,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
          lineNumber: 41,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HkDropZone_default, { className: "dropify-square w-30", children: "Upload Photo" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
          lineNumber: 49,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
          lineNumber: 48,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
          lineNumber: 47,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
        lineNumber: 34,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
        lineNumber: 33,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
      lineNumber: 28,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Footer, { className: "align-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "secondary", onClick: hide, children: "Cancel" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
        lineNumber: 58,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "primary", onClick: hide, children: "Add" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
        lineNumber: 59,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
      lineNumber: 57,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/scrumboard/project-board/AddNewMember.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c2 = AddNewMember;
var AddNewMember_default = AddNewMember;
var _c2;
$RefreshReg$(_c2, "AddNewMember");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/scrumboard/project-board/TaskBoard.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/scrumboard/project-board/TaskBoard.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/scrumboard/project-board/TaskBoard.jsx"
  );
  import.meta.hot.lastModified = "1732600247979.535";
}
var TaskBoard = ({
  showSidebar,
  toggleSidebar
}) => {
  _s();
  const [addNewBoard, setAddNewBoard] = (0, import_react.useState)(false);
  const [addNewMember, setAddNewMember] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "taskboardapp-content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "taskboardapp-detail-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tab_default.Container, { defaultActiveKey: "tab_boards", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "taskboard-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { justify: true, variant: "tabs", className: "nav-light nav-segmented-tabs active-theme mx-auto w-350p", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { eventKey: "tab_boards", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Boards" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
            lineNumber: 59,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
            lineNumber: 58,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
            lineNumber: 57,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { eventKey: "tab_team", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text badge-on-text", children: "Team" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
            lineNumber: 64,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
            lineNumber: 63,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
            lineNumber: 62,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
          lineNumber: 56,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: (0, import_classnames.default)("hk-sidebar-togglable", {
          "active": !showSidebar
        }), onClick: toggleSidebar }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
          lineNumber: 68,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
        lineNumber: 55,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "taskboard-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container_default, { fluid: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Row_default, { className: "justify-content-center board-team-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { md: 8, sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tab_default.Content, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tab_default.Pane, { eventKey: "tab_boards", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h5", { className: "mb-5", children: "Frequent Boards" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
            lineNumber: 79,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Row_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { lg: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "board-card card-border", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-pink", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "J" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 87,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 86,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 85,
                  columnNumber: 69
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Jampack" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 91,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 90,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 84,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 83,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Footer, { className: "text-muted justify-content-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar-group avatar-group-sm avatar-group-overlapped me-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Katharine", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 100,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 99,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 98,
                    columnNumber: 73
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Dean", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 105,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 104,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 103,
                    columnNumber: 73
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Morgan", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 110,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 109,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 108,
                    columnNumber: 73
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Tooltip text", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "3+" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 115,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 114,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 113,
                    columnNumber: 73
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 97,
                  columnNumber: 69
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 96,
                  columnNumber: 65
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "p-xs me-2", children: "Updated 25 min ago" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 121,
                    columnNumber: 69
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-shrink-0", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", className: "btn btn-xs btn-icon btn-flush-primary btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { placement: "top", title: "Public", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(globe_default, {}, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 127,
                      columnNumber: 89
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 126,
                      columnNumber: 85
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 125,
                      columnNumber: 81
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 124,
                      columnNumber: 77
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 123,
                      columnNumber: 73
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { as: "div", className: "d-inline", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { size: "xs", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 136,
                        columnNumber: 89
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 135,
                        columnNumber: 85
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 134,
                        columnNumber: 81
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 133,
                        columnNumber: 77
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Edit" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 141,
                          columnNumber: 81
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Copy Link" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 142,
                          columnNumber: 81
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Delete" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 143,
                          columnNumber: 81
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 140,
                        columnNumber: 77
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 132,
                      columnNumber: 73
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 122,
                    columnNumber: 69
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 120,
                  columnNumber: 65
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 95,
                columnNumber: 61
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 82,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 81,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { lg: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "board-card card-border", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-pumpkin", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "A" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 157,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 156,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 155,
                  columnNumber: 69
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Angular - Jampack" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 161,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 160,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 154,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 153,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Footer, { className: "text-muted justify-content-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar-group avatar-group-sm avatar-group-overlapped me-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Katharine", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Katharine", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar9_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 170,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 169,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 168,
                    columnNumber: 73
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Dean", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Dean", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 175,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 174,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 173,
                    columnNumber: 73
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 167,
                  columnNumber: 69
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 166,
                  columnNumber: 65
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "p-xs me-2", children: "Updated 5 min ago" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 181,
                    columnNumber: 69
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-shrink-0", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { as: "a", size: "xs", variant: "flush-primary", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Public", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(globe_default, {}, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 187,
                      columnNumber: 89
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 186,
                      columnNumber: 85
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 185,
                      columnNumber: 81
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 184,
                      columnNumber: 77
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 183,
                      columnNumber: 73
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { as: "div", className: "d-inline", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { size: "xs", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 196,
                        columnNumber: 89
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 195,
                        columnNumber: 85
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 194,
                        columnNumber: 81
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 193,
                        columnNumber: 77
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Edit" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 201,
                          columnNumber: 81
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Copy Link" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 202,
                          columnNumber: 81
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Delete" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 203,
                          columnNumber: 81
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 200,
                        columnNumber: 77
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 192,
                      columnNumber: 73
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 182,
                    columnNumber: 69
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 180,
                  columnNumber: 65
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 165,
                columnNumber: 61
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 152,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 151,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
            lineNumber: 80,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex justify-content-between align-items-center mb-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h5", { className: "mb-0", children: "All Boards" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 213,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "light", className: "btn-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(plus_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 217,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 216,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 215,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 214,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
            lineNumber: 212,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Row_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { lg: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "board-card card-border", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-violet", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "R" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 229,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 228,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 227,
                  columnNumber: 69
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "React - Jampack" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 233,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 232,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 226,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 225,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card-footer text-muted justify-content-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar-group avatar-group-sm avatar-group-overlapped me-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Katharine", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar10_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 242,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 241,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 240,
                    columnNumber: 73
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Dean", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 247,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 246,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 245,
                    columnNumber: 73
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Morgan", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 252,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 251,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 250,
                    columnNumber: 73
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Tooltip text", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "4+" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 257,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 256,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 255,
                    columnNumber: 73
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 239,
                  columnNumber: 69
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 238,
                  columnNumber: 65
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "p-xs me-2", children: "Updated Yesterday" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 263,
                    columnNumber: 69
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-shrink-0", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { as: "a", size: "xs", variant: "flush-primary", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Public", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(globe_default, {}, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 269,
                      columnNumber: 89
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 268,
                      columnNumber: 85
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 267,
                      columnNumber: 81
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 266,
                      columnNumber: 77
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 265,
                      columnNumber: 73
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { as: "div", className: "d-inline", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { size: "xs", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 278,
                        columnNumber: 89
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 277,
                        columnNumber: 85
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 276,
                        columnNumber: 81
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 275,
                        columnNumber: 77
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Edit" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 283,
                          columnNumber: 81
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Copy Link" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 284,
                          columnNumber: 81
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Delete" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 285,
                          columnNumber: 81
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 282,
                        columnNumber: 77
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 274,
                      columnNumber: 73
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 264,
                    columnNumber: 69
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 262,
                  columnNumber: 65
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 237,
                columnNumber: 61
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 224,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 223,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { lg: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "board-card card-border", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-orange", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "G" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 299,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 298,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 297,
                  columnNumber: 69
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Griffin" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 303,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 302,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 296,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 295,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Footer, { className: "text-muted justify-content-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar-group avatar-group-sm avatar-group-overlapped me-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Katharine", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar11_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 312,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 311,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 310,
                    columnNumber: 73
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Dean", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 317,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 316,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 315,
                    columnNumber: 73
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Morgan", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar7_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 322,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 321,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 320,
                    columnNumber: 73
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Tooltip text", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "W" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 327,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 326,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 325,
                    columnNumber: 73
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 309,
                  columnNumber: 69
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 308,
                  columnNumber: 65
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "p-xs me-2", children: "Updated 10 min ago" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 333,
                    columnNumber: 69
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-shrink-0", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { as: "a", size: "xs", variant: "flush-primary", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Public", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(globe_default, {}, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 339,
                      columnNumber: 89
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 338,
                      columnNumber: 85
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 337,
                      columnNumber: 81
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 336,
                      columnNumber: 77
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 335,
                      columnNumber: 73
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { as: "div", className: "d-inline", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { size: "xs", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 348,
                        columnNumber: 89
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 347,
                        columnNumber: 85
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 346,
                        columnNumber: 81
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 345,
                        columnNumber: 77
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Edit" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 353,
                          columnNumber: 81
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Copy Link" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 354,
                          columnNumber: 81
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Delete" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 355,
                          columnNumber: 81
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 352,
                        columnNumber: 77
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 344,
                      columnNumber: 73
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 334,
                    columnNumber: 69
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 332,
                  columnNumber: 65
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 307,
                columnNumber: 61
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 294,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 293,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { lg: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "board-card card-border", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "P" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 369,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 368,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 367,
                  columnNumber: 69
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Pangong" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 373,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 372,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 366,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 365,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card-footer text-muted justify-content-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar-group avatar-group-sm avatar-group-overlapped me-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Katharine", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 382,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 381,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 380,
                    columnNumber: 73
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Dean", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 387,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 386,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 385,
                    columnNumber: 73
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 379,
                  columnNumber: 69
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 378,
                  columnNumber: 65
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "p-xs me-2", children: "Updated 1 hour ago" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 393,
                    columnNumber: 69
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-shrink-0", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { as: "a", size: "xs", variant: "flush-primary", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Public", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(globe_default, {}, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 399,
                      columnNumber: 89
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 398,
                      columnNumber: 85
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 397,
                      columnNumber: 81
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 396,
                      columnNumber: 77
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 395,
                      columnNumber: 73
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { as: "div", className: "d-inline", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { size: "xs", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 408,
                        columnNumber: 89
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 407,
                        columnNumber: 85
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 406,
                        columnNumber: 81
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 405,
                        columnNumber: 77
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Edit" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 413,
                          columnNumber: 81
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Copy Link" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 414,
                          columnNumber: 81
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Delete" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 415,
                          columnNumber: 81
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 412,
                        columnNumber: 77
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 404,
                      columnNumber: 73
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 394,
                    columnNumber: 69
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 392,
                  columnNumber: 65
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 377,
                columnNumber: 61
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 364,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 363,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { lg: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "board-card card-border", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "D" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 429,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 428,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 427,
                  columnNumber: 69
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Doodle" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 433,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 432,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 426,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 425,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Footer, { className: "text-muted justify-content-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar-group avatar-group-sm avatar-group-overlapped me-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Katharine", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar9_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 442,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 441,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 440,
                    columnNumber: 73
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Dean", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar10_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 447,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 446,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 445,
                    columnNumber: 73
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Morgan", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar11_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 452,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 451,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 450,
                    columnNumber: 73
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Tooltip text", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "3+" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 457,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 456,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 455,
                    columnNumber: 73
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 439,
                  columnNumber: 69
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 438,
                  columnNumber: 65
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "p-xs me-2", children: "Updated 20 min ago" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 463,
                    columnNumber: 69
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-shrink-0", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { as: "a", size: "xs", variant: "flush-primary", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Public", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(globe_default, {}, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 469,
                      columnNumber: 89
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 468,
                      columnNumber: 85
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 467,
                      columnNumber: 81
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 466,
                      columnNumber: 77
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 465,
                      columnNumber: 73
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { as: "div", className: "d-inline", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { size: "xs", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 478,
                        columnNumber: 89
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 477,
                        columnNumber: 85
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 476,
                        columnNumber: 81
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 475,
                        columnNumber: 77
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Edit" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 483,
                          columnNumber: 81
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Copy Link" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 484,
                          columnNumber: 81
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Delete" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 485,
                          columnNumber: 81
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 482,
                        columnNumber: 77
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 474,
                      columnNumber: 73
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 464,
                    columnNumber: 69
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 462,
                  columnNumber: 65
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 437,
                columnNumber: 61
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 424,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 423,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { lg: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "board-card card-border", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-pink", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "P" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 499,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 498,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 497,
                  columnNumber: 69
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Pogody" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 503,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 502,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 496,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 495,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Footer, { className: "text-muted justify-content-between", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar-group avatar-group-sm avatar-group-overlapped me-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Katharine", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar5_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 512,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 511,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 510,
                    columnNumber: 73
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Dean", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar6_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 517,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 516,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 515,
                    columnNumber: 73
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Morgan", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar7_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 522,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 521,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 520,
                    columnNumber: 73
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Tooltip text", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "5+" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 527,
                    columnNumber: 81
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 526,
                    columnNumber: 77
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 525,
                    columnNumber: 73
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 509,
                  columnNumber: 69
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 508,
                  columnNumber: 65
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "p-xs me-2", children: "Updated 2 days ago" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 533,
                    columnNumber: 69
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex-shrink-0", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { as: "a", size: "xs", variant: "flush-primary", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Public", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(globe_default, {}, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 539,
                      columnNumber: 89
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 538,
                      columnNumber: 85
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 537,
                      columnNumber: 81
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 536,
                      columnNumber: 77
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 535,
                      columnNumber: 73
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { as: "div", className: "d-inline", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { size: "xs", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 548,
                        columnNumber: 89
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 547,
                        columnNumber: 85
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 546,
                        columnNumber: 81
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 545,
                        columnNumber: 77
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Edit" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 553,
                          columnNumber: 81
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Copy Link" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 554,
                          columnNumber: 81
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Delete" }, void 0, false, {
                          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                          lineNumber: 555,
                          columnNumber: 81
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                        lineNumber: 552,
                        columnNumber: 77
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 544,
                      columnNumber: 73
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 534,
                    columnNumber: 69
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 532,
                  columnNumber: 65
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 507,
                columnNumber: 61
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 494,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 493,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { lg: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "card-border border-dashed h-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card-body d-flex align-items-center justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "outline-light", className: "btn-block", onClick: () => setAddNewBoard(!addNewBoard), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { placement: "top", title: "Add New Member", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(plus_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 569,
              columnNumber: 77
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 568,
              columnNumber: 73
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 567,
              columnNumber: 69
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 566,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 565,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 564,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 563,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
            lineNumber: 222,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
          lineNumber: 78,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tab_default.Pane, { eventKey: "tab_team", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex justify-content-between align-items-center mb-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center form-group mb-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h5", { className: "mb-0 me-4", children: "Members" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 582,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { className: "flex-shrink-0 mb-0 me-2", children: "Sort by:" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 583,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Select, { size: "sm", className: "w-130p", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: 1, children: "Date Created" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 585,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: 2, children: "A - Z" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 586,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: 3, children: "Z - A" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 587,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 584,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 581,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "light", className: "btn-icon", onClick: () => setAddNewMember(!addNewMember), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { placement: "top", title: "Add New Member", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(plus_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 593,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 592,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 591,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 590,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
            lineNumber: 580,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Row_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xl: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "team-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card-action-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", "aria-expanded": "false", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 607,
                  columnNumber: 85
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 606,
                  columnNumber: 81
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 605,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 604,
                  columnNumber: 73
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Invite for project" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 612,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Copy Link" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 613,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Mail preferences" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 614,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 611,
                  columnNumber: 73
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 603,
                columnNumber: 69
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 602,
                columnNumber: 65
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 621,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 620,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 619,
                  columnNumber: 69
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Designer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Designer", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Morgan Freeman" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 627,
                      columnNumber: 81
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Badge_default, { bg: "primary", className: "badge-indicator badge-indicator-nobdr" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 628,
                      columnNumber: 81
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 626,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-truncate", children: "morgan@jampack.com" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 630,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 625,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 624,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 618,
                columnNumber: 65
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 601,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 600,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 599,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xl: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "team-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card-action-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", "aria-expanded": "false", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 645,
                  columnNumber: 85
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 644,
                  columnNumber: 81
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 643,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 642,
                  columnNumber: 73
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Invite for project" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 650,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Copy Link" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 651,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Mail preferences" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 652,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 649,
                  columnNumber: 73
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 641,
                columnNumber: 69
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 640,
                columnNumber: 65
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar9_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 659,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 658,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 657,
                  columnNumber: 69
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Designer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Designer", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Huma Therman" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 665,
                      columnNumber: 81
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Badge_default, { bg: "primary", className: "badge-indicator badge-indicator-nobdr" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 666,
                      columnNumber: 81
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 664,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-truncate", children: "huma@clariesup.au@jampack.com" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 668,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 663,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 662,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 656,
                columnNumber: 65
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 639,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 638,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 637,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xl: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "team-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card-action-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", "aria-expanded": "false", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 683,
                  columnNumber: 85
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 682,
                  columnNumber: 81
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 681,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 680,
                  columnNumber: 73
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Invite for project" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 688,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Copy Link" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 689,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Mail preferences" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 690,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 687,
                  columnNumber: 73
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 679,
                columnNumber: 69
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 678,
                columnNumber: 65
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar7_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 697,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 696,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 695,
                  columnNumber: 69
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Designer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Designer", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Tom Cruz" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 703,
                      columnNumber: 81
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Badge_default, { bg: "danger", className: "badge-indicator badge-indicator-nobdr" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 704,
                      columnNumber: 81
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 702,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-truncate", children: "tomcz@jampack.com" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 706,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 701,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 700,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 694,
                columnNumber: 65
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 677,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 676,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 675,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xl: 6, md: 12, className: "col-xl-6 col-md-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "team-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card-action-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", "aria-expanded": "false", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 721,
                  columnNumber: 85
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 720,
                  columnNumber: 81
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 719,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 718,
                  columnNumber: 73
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Invite for project" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 726,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Copy Link" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 727,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Mail preferences" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 728,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 725,
                  columnNumber: 73
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 717,
                columnNumber: 69
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 716,
                columnNumber: 65
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "D" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 735,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 734,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 733,
                  columnNumber: 69
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Designer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Designer", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Danial Craig" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 741,
                      columnNumber: 81
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Badge_default, { bg: "primary", className: "badge-indicator badge-indicator-nobdr" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 742,
                      columnNumber: 81
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 740,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-truncate", children: "danialc@jampack.com" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 744,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 739,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 738,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 732,
                columnNumber: 65
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 715,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 714,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 713,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xl: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "team-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card-action-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", "aria-expanded": "false", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 759,
                  columnNumber: 85
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 758,
                  columnNumber: 81
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 757,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 756,
                  columnNumber: 73
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Invite for project" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 764,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Copy Link" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 765,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Mail preferences" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 766,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 763,
                  columnNumber: 73
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 755,
                columnNumber: 69
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 754,
                columnNumber: 65
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar10_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 773,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 772,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 771,
                  columnNumber: 69
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Inventory", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Winston Churchil" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 779,
                      columnNumber: 81
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Badge_default, { bg: "primary", className: "badge-indicator badge-indicator-nobdr" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 780,
                      columnNumber: 81
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 778,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-truncate", children: "winston@worthniza.ga" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 782,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 777,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 776,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 770,
                columnNumber: 65
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 753,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 752,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 751,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xl: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "team-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card-action-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", "aria-expanded": "false", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 797,
                  columnNumber: 85
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 796,
                  columnNumber: 81
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 795,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 794,
                  columnNumber: 73
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Invite for project" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 802,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Copy Link" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 803,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Mail preferences" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 804,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 801,
                  columnNumber: 73
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 793,
                columnNumber: 69
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 792,
                columnNumber: 65
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 812,
                  columnNumber: 81
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 811,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 810,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 809,
                  columnNumber: 69
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Inventory", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Katharine Jones" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 819,
                      columnNumber: 81
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Badge_default, { bg: "primary", className: "badge-indicator badge-indicator-nobdr" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 820,
                      columnNumber: 81
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 818,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-truncate", children: "joneskath@jampack.com" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 822,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 817,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 816,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 808,
                columnNumber: 65
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 791,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 790,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 789,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xl: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "team-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card-action-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", "aria-expanded": "false", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 837,
                  columnNumber: 85
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 836,
                  columnNumber: 81
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 835,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 834,
                  columnNumber: 73
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Invite for project" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 842,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Copy Link" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 843,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Mail preferences" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 844,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 841,
                  columnNumber: 73
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 833,
                columnNumber: 69
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 832,
                columnNumber: 65
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar3_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 851,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 850,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 849,
                  columnNumber: 69
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Hr Manager", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Jaquiline Joker" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 857,
                      columnNumber: 81
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Badge_default, { bg: "danger", className: "badge-indicator badge-indicator-nobdr" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 858,
                      columnNumber: 81
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 856,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-truncate", children: "jaquljoker@jampack.com" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 860,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 855,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 854,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 848,
                columnNumber: 65
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 831,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 830,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 829,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xl: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "team-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card-action-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", "aria-expanded": "false", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 875,
                  columnNumber: 85
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 874,
                  columnNumber: 81
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 873,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 872,
                  columnNumber: 73
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Invite for project" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 880,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Copy Link" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 881,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Mail preferences" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 882,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 879,
                  columnNumber: 73
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 871,
                columnNumber: 69
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 870,
                columnNumber: 65
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-light avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "J" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 889,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 888,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 887,
                  columnNumber: 69
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Designer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "John Brother" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 895,
                      columnNumber: 81
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Badge_default, { bg: "primary", className: "badge-indicator badge-indicator-nobdr" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 896,
                      columnNumber: 81
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 894,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-truncate", children: "john@cryodrakon.info" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 898,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 893,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 892,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 886,
                columnNumber: 65
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 869,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 868,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 867,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xl: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "team-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card-action-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", "aria-expanded": "false", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 913,
                  columnNumber: 85
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 912,
                  columnNumber: 81
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 911,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 910,
                  columnNumber: 73
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Invite for project" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 918,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Copy Link" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 919,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Mail preferences" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 920,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 917,
                  columnNumber: 73
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 909,
                columnNumber: 69
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 908,
                columnNumber: 65
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar14_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 927,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 926,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 925,
                  columnNumber: 69
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Designer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "John Brother" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 933,
                      columnNumber: 81
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Badge_default, { bg: "primary", className: "badge-indicator badge-indicator-nobdr" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 934,
                      columnNumber: 81
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 932,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-truncate", children: "john@cryodrakon.info" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 936,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 931,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 930,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 924,
                columnNumber: 65
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 907,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 906,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 905,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xl: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "team-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card-action-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", "aria-expanded": "false", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 951,
                  columnNumber: 85
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 950,
                  columnNumber: 81
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 949,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 948,
                  columnNumber: 73
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Invite for project" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 956,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Copy Link" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 957,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: "Mail preferences" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 958,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 955,
                  columnNumber: 73
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 947,
                columnNumber: 69
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 946,
                columnNumber: 65
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-soft-success avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "C" }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 965,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 964,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 963,
                  columnNumber: 69
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { title: "Developer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Charlie Chaplin" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 971,
                      columnNumber: 81
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Badge_default, { bg: "danger", className: "badge-indicator badge-indicator-nobdr" }, void 0, false, {
                      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                      lineNumber: 972,
                      columnNumber: 81
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 970,
                    columnNumber: 77
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-truncate", children: "charlie@leernoca.monster" }, void 0, false, {
                    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                    lineNumber: 974,
                    columnNumber: 77
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 969,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                  lineNumber: 968,
                  columnNumber: 69
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
                lineNumber: 962,
                columnNumber: 65
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 945,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 944,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 943,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xl: 6, md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "card-border border-dashed h-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { className: "d-flex align-items-center justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "outline-light", className: "btn-icon", onClick: () => setAddNewMember(!addNewMember), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { placement: "top", title: "Add New Member", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(plus_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 987,
              columnNumber: 77
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 986,
              columnNumber: 73
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 985,
              columnNumber: 69
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 984,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 983,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 982,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
              lineNumber: 981,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
            lineNumber: 598,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
          lineNumber: 579,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
        lineNumber: 77,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
        lineNumber: 76,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
        lineNumber: 75,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
        lineNumber: 74,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
        lineNumber: 73,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
        lineNumber: 72,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
      lineNumber: 54,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AddNewBoard_default, { show: addNewBoard, onHide: () => setAddNewBoard(!addNewBoard) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
      lineNumber: 1005,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AddNewMember_default, { show: addNewMember, hide: () => setAddNewMember(!addNewMember) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
      lineNumber: 1008,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AddBoard_default, {}, void 0, false, {
      fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
      lineNumber: 1011,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/scrumboard/project-board/TaskBoard.jsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
};
_s(TaskBoard, "n0uI5UCZM1++d2WMAPrK7dcEkAU=");
_c3 = TaskBoard;
var TaskBoard_default = TaskBoard;
var _c3;
$RefreshReg$(_c3, "TaskBoard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/scrumboard/project-board/route.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/scrumboard/project-board/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/scrumboard/project-board/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247979.885";
}
var ProjectsBoard = () => {
  _s2();
  const [showSidebar, setShowSidebar] = (0, import_react3.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: (0, import_classnames2.default)("taskboardapp-wrap", {
    "taskboardapp-sidebar-toggle": !showSidebar
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Sidebar_default, {}, void 0, false, {
      fileName: "app/routes/apps/scrumboard/project-board/route.jsx",
      lineNumber: 33,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TaskBoard_default, { showSidebar, toggleSidebar: () => setShowSidebar(!showSidebar) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/project-board/route.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/scrumboard/project-board/route.jsx",
    lineNumber: 30,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/scrumboard/project-board/route.jsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_s2(ProjectsBoard, "O0tqdxfw1ryb5O1kO6vD3OVdeTk=");
_c4 = ProjectsBoard;
var route_default = ProjectsBoard;
var _c4;
$RefreshReg$(_c4, "ProjectsBoard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/scrumboard/project-board/route-STFU6WWX.js.map
