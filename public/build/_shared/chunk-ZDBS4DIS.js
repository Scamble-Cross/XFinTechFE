import {
  Button_default,
  FormControl_default
} from "/build/_shared/chunk-VRR24KJX.js";
import {
  require_classnames
} from "/build/_shared/chunk-CQ7UJNRQ.js";
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

// app/@hk-components/@hk-chips/@hk-chips.jsx
var import_classnames = __toESM(require_classnames(), 1);
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/@hk-components/@hk-chips/@hk-chips.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-chips/@hk-chips.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var HkChips = ({
  children,
  variant,
  dismissable,
  pill,
  ticked,
  icon,
  src,
  lg,
  disabled,
  className
}) => {
  _s();
  const [show, setShow] = (0, import_react.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)(className, `chip chip-${variant}`, {
    "chip-dismissable": dismissable
  }, {
    pill: "chip-pill"
  }, {
    "chip-ticked": ticked
  }, {
    "chip-pill": pill
  }, {
    "chip-wth-icon": icon
  }, {
    "d-none": !show
  }, {
    "user-chip": src
  }, {
    "chip-lg": lg
  }, {
    "chip-disabled": disabled
  }), children: [
    !dismissable && !src && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl_default, { type: "checkbox" }, void 0, false, {
      fileName: "app/@hk-components/@hk-chips/@hk-chips.jsx",
      lineNumber: 58,
      columnNumber: 38
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
      icon,
      src && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "avatar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src, alt: "user", className: "avatar-img" }, void 0, false, {
        fileName: "app/@hk-components/@hk-chips/@hk-chips.jsx",
        lineNumber: 62,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/@hk-components/@hk-chips/@hk-chips.jsx",
        lineNumber: 61,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "chip-text", children }, void 0, false, {
        fileName: "app/@hk-components/@hk-chips/@hk-chips.jsx",
        lineNumber: 64,
        columnNumber: 17
      }, this),
      dismissable && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: () => setShow(!show) }, void 0, false, {
        fileName: "app/@hk-components/@hk-chips/@hk-chips.jsx",
        lineNumber: 67,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/@hk-components/@hk-chips/@hk-chips.jsx",
      lineNumber: 59,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/@hk-components/@hk-chips/@hk-chips.jsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
};
_s(HkChips, "vfh/DqFDMxhJHyczn42K3OB7AlU=");
_c = HkChips;
var hk_chips_default = HkChips;
var _c;
$RefreshReg$(_c, "HkChips");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  hk_chips_default
};
//# sourceMappingURL=/build/_shared/chunk-ZDBS4DIS.js.map
