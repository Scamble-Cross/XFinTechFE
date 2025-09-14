import {
  HkDropZone_default
} from "/build/_shared/chunk-CXWPXLC3.js";
import {
  HkTooltip_default
} from "/build/_shared/chunk-NYEYMOIV.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  archive_default,
  book_default,
  globe_default,
  layout_default,
  lock_default,
  more_vertical_default,
  plus_default,
  settings_default,
  star_default,
  trash_2_default,
  user_check_default,
  zap_off_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import {
  Alert_default,
  Button_default,
  Col_default,
  Form_default,
  InputGroup_default,
  Modal_default,
  Nav_default,
  Row_default
} from "/build/_shared/chunk-VRR24KJX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  createHotContext
} from "/build/_shared/chunk-KTLBVDTS.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/apps/scrumboard/Sidebar.jsx
var import_react2 = __toESM(require_react(), 1);

// app/routes/apps/scrumboard/AddNewBoard.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/scrumboard/AddNewBoard.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/scrumboard/AddNewBoard.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var AddNewBoard = ({
  show,
  onHide
}) => {
  _s();
  const [avatarColor, setAvatarColor] = (0, import_react.useState)("#009B84");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { show, onHide, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: onHide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
        lineNumber: 34,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { children: "Add New Board" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4", children: "You are granted limited license only for purposes of viewing the material contained on this Website." }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Name" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
            lineNumber: 42,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { className: "task-name", type: "text" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
            lineNumber: 43,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
          lineNumber: 41,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
          lineNumber: 40,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Visibility" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
            lineNumber: 48,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Select, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 1, children: "Public" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
              lineNumber: 50,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 2, children: "Private" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
              lineNumber: 51,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
            lineNumber: 49,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { className: "form-text text-muted", children: "Public setting will be seen by everybody with login details." }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
            lineNumber: 53,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
          lineNumber: 47,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
          lineNumber: 46,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Avatar" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
            lineNumber: 60,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Select, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 1, children: "Choose Avatar-Text" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
              lineNumber: 62,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 2, children: "A" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
              lineNumber: 63,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
            lineNumber: 61,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
          lineNumber: 59,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
          lineNumber: 58,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Avatar Color" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
            lineNumber: 69,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputGroup_default, { className: "color-picker", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputGroup_default.Text, { className: "colorpicker-input-addon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "color", value: avatarColor, onChange: (e) => setAvatarColor(e.target.value) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
              lineNumber: 72,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
              lineNumber: 71,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", value: avatarColor, readOnly: true }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
              lineNumber: 74,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
            lineNumber: 70,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
          lineNumber: 68,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
          lineNumber: 67,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkDropZone_default, { className: "dropify-square w-60", children: "Upload Photo" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
          lineNumber: 81,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
          lineNumber: 80,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
          lineNumber: 79,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
        lineNumber: 39,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
        lineNumber: 38,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Footer, { className: "align-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "secondary", onClick: onHide, children: "Cancel" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
        lineNumber: 90,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", onClick: onHide, children: "Add" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
        lineNumber: 91,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
      lineNumber: 89,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/scrumboard/AddNewBoard.jsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_s(AddNewBoard, "Z/dNUofQ4/y/3sfygBRZf4sM13g=");
_c = AddNewBoard;
var AddNewBoard_default = AddNewBoard;
var _c;
$RefreshReg$(_c, "AddNewBoard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/scrumboard/AddNewFavBoard.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/scrumboard/AddNewFavBoard.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/scrumboard/AddNewFavBoard.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var AddNewFavBoard = ({
  show,
  onHide
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default, { show, onHide, centered: true, dialogClassName: "mw-400p", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Header, { className: "header-wth-bg-inv", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Title, { as: "h5", children: "Add Board" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { bsPrefix: "btn-close", className: "text-white", onClick: onHide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
        lineNumber: 31,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
        lineNumber: 30,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Body, { className: "p-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SimpleBar, { className: "nicescroll-bar h-350p", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "p-3 pb-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "J" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 42,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 41,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 40,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "Jampack" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 46,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 45,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 39,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck2", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 49,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
        lineNumber: 38,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 55,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 54,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 53,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "Hencework" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 59,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 58,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 52,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck3", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 62,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
        lineNumber: 51,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-info avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "G" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 68,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 67,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 66,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "Griffin" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 72,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 71,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 65,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck4" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 75,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
        lineNumber: 64,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-warning avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "R" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 81,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 80,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 79,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "React - Jampack" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 85,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 84,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 78,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck5", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 88,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
        lineNumber: 77,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "P" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 94,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 93,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 92,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "Pangong" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 98,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 97,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 91,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck6", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 101,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
        lineNumber: 90,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-success avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "A" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 107,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 106,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 105,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "Angular - Jampack" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 111,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 110,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 104,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck7", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 114,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
        lineNumber: 103,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-warning avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "R" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 120,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 119,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 118,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "React - Jampack" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 124,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 123,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 117,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck8" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 127,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
        lineNumber: 116,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "P" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 133,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 132,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 131,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "Pangong" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 137,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 136,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 130,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck9" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 140,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
        lineNumber: 129,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "d-flex align-items-center justify-content-between mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-success avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "A" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 146,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 145,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 144,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "name", children: "Angular - Jampack" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 150,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
            lineNumber: 149,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 143,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck10" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
          lineNumber: 153,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
        lineNumber: 142,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
      lineNumber: 37,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Footer, { className: "justify-content-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "light", className: "flex-1", onClick: onHide, children: "Cancel" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
        lineNumber: 160,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "primary", className: "flex-fill flex-1", onClick: onHide, children: "Add Board" }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
        lineNumber: 161,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
      lineNumber: 159,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/scrumboard/AddNewFavBoard.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c2 = AddNewFavBoard;
var AddNewFavBoard_default = AddNewFavBoard;
var _c2;
$RefreshReg$(_c2, "AddNewFavBoard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/scrumboard/Sidebar.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/scrumboard/Sidebar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/scrumboard/Sidebar.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var Sidebar = () => {
  _s2();
  const [addNewBoard, setAddNewBoard] = (0, import_react2.useState)(false);
  const [addFavBoard, setAddFavBoard] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { className: "taskboardapp-sidebar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "menu-content-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "primary", className: "btn-rounded btn-block mb-4", onClick: () => setAddNewBoard(!addNewBoard), children: "Add New Board" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 37,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { as: "ul", className: "nav-light navbar-nav flex-column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { active: true, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(layout_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 44,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 43,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 42,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "All Boards" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 47,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 41,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 40,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(star_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 54,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 53,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 52,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Stared Boards" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 57,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 51,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 50,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(lock_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 64,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 63,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 62,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Private Boards" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 67,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 61,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 60,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(user_check_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 74,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 73,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 72,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Public Boards" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 77,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 71,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 70,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(trash_2_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 84,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 83,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 82,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Deleted" }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 87,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 81,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 80,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 39,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 38,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 92,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "title-sm text-primary mb-0", children: "Favourite Boards" }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 94,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { size: "xs", variant: "light", className: "btn-icon btn-rounded", onClick: () => setAddFavBoard(!addFavBoard), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { id: "tooltip1", title: "Add Board", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(plus_default, {}, void 0, false, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 98,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 97,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 96,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 95,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 93,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { className: "nav-light navbar-nav flex-column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "J" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 110,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 109,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 108,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "name", children: "Jampack" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 115,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 114,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 113,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 107,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ms-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { size: "sm", variant: "flush-light", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(lock_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 123,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 122,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 121,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 120,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { size: "sm", variant: "flush-light", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_vertical_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 130,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 129,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 128,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 127,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 119,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 106,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 105,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs avatar-pink avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 142,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 141,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 140,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "name", children: "Hencework" }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 147,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 146,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 145,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 139,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ms-auto", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "flush-light", size: "sm", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(globe_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 155,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 154,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 153,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 152,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { size: "sm", variant: "flush-light", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_vertical_default, {}, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 162,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 161,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 160,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
                lineNumber: 159,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 151,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 138,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 137,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 104,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 103,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Alert_default, { variant: "warning", className: "mt-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Alert_default.Heading, { as: "h6", className: "heading-wth-icon", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "head-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(zap_off_default, {}, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 176,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 175,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
              lineNumber: 174,
              columnNumber: 33
            }, this),
            "Trial Ends on 14 Jan"
          ] }, void 0, true, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 173,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "fs-7", children: "Last 3 days left for your trial to end. Renew now to stay connected." }, void 0, false, {
            fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
            lineNumber: 181,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 172,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
        lineNumber: 36,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "taskboardapp-fixednav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hk-toolbar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { className: "nav-light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { id: "tooltip2", placement: "top", title: "Settings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(settings_default, {}, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 194,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 193,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 192,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 191,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 190,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 189,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { id: "tooltip3", placement: "top", title: "Archive", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(archive_default, {}, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 205,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 204,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 203,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 202,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 201,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 200,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { id: "tooltip2", placement: "top", title: "Help", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(book_default, {}, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 216,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 215,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 214,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 213,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 212,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
          lineNumber: 211,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
        lineNumber: 188,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
        lineNumber: 187,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
        lineNumber: 186,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AddNewBoard_default, { show: addNewBoard, onHide: () => setAddNewBoard(!addNewBoard) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
      lineNumber: 228,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AddNewFavBoard_default, { show: addFavBoard, onHide: () => setAddFavBoard(!addFavBoard) }, void 0, false, {
      fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
      lineNumber: 230,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/scrumboard/Sidebar.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_s2(Sidebar, "TUsoqbHOZD+hhys821oQ5XyzQ1U=");
_c3 = Sidebar;
var Sidebar_default = Sidebar;
var _c3;
$RefreshReg$(_c3, "Sidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  AddNewBoard_default,
  Sidebar_default
};
//# sourceMappingURL=/build/_shared/chunk-AQ6Q2GAS.js.map
