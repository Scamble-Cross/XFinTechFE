import {
  chevron_down_default,
  chevron_up_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  Button_default,
  Card_default,
  Collapse_default
} from "/build/_shared/chunk-KBRVI47E.js";
import {
  require_prop_types
} from "/build/_shared/chunk-HFWHD4VB.js";
import {
  require_classnames
} from "/build/_shared/chunk-CQ7UJNRQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-7UABGPEU.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/@hk-components/@hk-collapse/@hk-collapse.jsx
var import_react = __toESM(require_react(), 1);
var import_classnames = __toESM(require_classnames(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/@hk-components/@hk-collapse/@hk-collapse.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-collapse/@hk-collapse.jsx"
  );
  import.meta.hot.lastModified = "1732600247581.396";
}
var HkCollapse = ({
  children,
  title,
  collapseIcon,
  targetId,
  bsPrefix,
  as,
  headerClass,
  bodyClass,
  wrapperClass,
  btnClasses,
  collapsed,
  ...rest
}) => {
  _s();
  const [open, setOpen] = (0, import_react.useState)(!collapsed);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: wrapperClass, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Header, { className: headerClass, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { bsPrefix, as, "aria-controls": targetId, "aria-expanded": open, onClick: () => setOpen(!open), className: (0, import_classnames.default)({
        "collapsed": !open
      }, btnClasses), ...rest, children: title }, void 0, false, {
        fileName: "app/@hk-components/@hk-collapse/@hk-collapse.jsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      collapseIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-action-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", onClick: () => setOpen(!open), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_down_default, {}, void 0, false, {
        fileName: "app/@hk-components/@hk-collapse/@hk-collapse.jsx",
        lineNumber: 54,
        columnNumber: 41
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_up_default, {}, void 0, false, {
        fileName: "app/@hk-components/@hk-collapse/@hk-collapse.jsx",
        lineNumber: 54,
        columnNumber: 59
      }, this) }, void 0, false, {
        fileName: "app/@hk-components/@hk-collapse/@hk-collapse.jsx",
        lineNumber: 53,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/@hk-components/@hk-collapse/@hk-collapse.jsx",
        lineNumber: 52,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/@hk-components/@hk-collapse/@hk-collapse.jsx",
        lineNumber: 51,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/@hk-components/@hk-collapse/@hk-collapse.jsx",
        lineNumber: 50,
        columnNumber: 34
      }, this)
    ] }, void 0, true, {
      fileName: "app/@hk-components/@hk-collapse/@hk-collapse.jsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Collapse_default, { in: open, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: targetId, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: bodyClass, children }, void 0, false, {
      fileName: "app/@hk-components/@hk-collapse/@hk-collapse.jsx",
      lineNumber: 62,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/@hk-components/@hk-collapse/@hk-collapse.jsx",
      lineNumber: 61,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/@hk-components/@hk-collapse/@hk-collapse.jsx",
      lineNumber: 60,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/@hk-components/@hk-collapse/@hk-collapse.jsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
};
_s(HkCollapse, "SEY+6NnvEjyXWjJpnpC66VSEH1k=");
_c = HkCollapse;
HkCollapse.propTypes = {
  targetId: import_prop_types.default.string.isRequired,
  collapsed: import_prop_types.default.bool.isRequired
};
var hk_collapse_default = HkCollapse;
var _c;
$RefreshReg$(_c, "HkCollapse");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  hk_collapse_default
};
//# sourceMappingURL=/build/_shared/chunk-OT26VHP7.js.map
