import {
  Badge_default
} from "/build/_shared/chunk-VRR24KJX.js";
import {
  require_classnames
} from "/build/_shared/chunk-CQ7UJNRQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-KTLBVDTS.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/@hk-components/@hk-badge/@hk-badge.jsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/@hk-components/@hk-badge/@hk-badge.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-badge/@hk-badge.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var HkBadge = ({
  children,
  as,
  bg,
  pill,
  outline,
  indicator,
  text,
  bsPrefix,
  className,
  size,
  soft,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge_default, { as, bg: !soft ? bg : `bg-${bg}-light-5`, pill, text, bsPrefix, ...rest, className: (0, import_classnames.default)(className, {
    "badge-sm": size === "sm"
  }, {
    "badge-outline": outline
  }, soft ? `badge-soft-${bg}` : "", {
    "badge-indicator": indicator
  }), children }, void 0, false, {
    fileName: "app/@hk-components/@hk-badge/@hk-badge.jsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
};
_c = HkBadge;
var hk_badge_default = HkBadge;
var _c;
$RefreshReg$(_c, "HkBadge");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  hk_badge_default
};
//# sourceMappingURL=/build/_shared/chunk-YWRMJW47.js.map
