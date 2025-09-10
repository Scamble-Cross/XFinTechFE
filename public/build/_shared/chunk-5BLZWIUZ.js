import {
  OverlayTrigger_default,
  Tooltip_default
} from "/build/_shared/chunk-KBRVI47E.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-7UABGPEU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/@hk-components/@hk-tooltip/HkTooltip.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/@hk-components/@hk-tooltip/HkTooltip.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-tooltip/HkTooltip.jsx"
  );
  import.meta.hot.lastModified = "1732600247605.725";
}
var HkTooltip = ({
  children,
  id,
  placement,
  title,
  show,
  popper,
  bsPrefix,
  className,
  as
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OverlayTrigger_default, { placement, overlay: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tooltip_default, { id, as, className, show, popper, bsPrefix, children: title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: title }, void 0, false, {
    fileName: "app/@hk-components/@hk-tooltip/HkTooltip.jsx",
    lineNumber: 34,
    columnNumber: 30
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
    "Tooltip on ",
    placement
  ] }, void 0, true, {
    fileName: "app/@hk-components/@hk-tooltip/HkTooltip.jsx",
    lineNumber: 34,
    columnNumber: 53
  }, this) }, void 0, false, {
    fileName: "app/@hk-components/@hk-tooltip/HkTooltip.jsx",
    lineNumber: 33,
    columnNumber: 66
  }, this), children }, id, false, {
    fileName: "app/@hk-components/@hk-tooltip/HkTooltip.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_c = HkTooltip;
var HkTooltip_default = HkTooltip;
var _c;
$RefreshReg$(_c, "HkTooltip");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  HkTooltip_default
};
//# sourceMappingURL=/build/_shared/chunk-5BLZWIUZ.js.map
