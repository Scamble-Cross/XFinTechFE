import {
  faClose
} from "/build/_shared/chunk-NQ2SSAFE.js";
import {
  FontAwesomeIcon
} from "/build/_shared/chunk-JPGC5R3S.js";
import {
  Alert_default,
  Button_default
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

// app/@hk-components/@hk-alert/@hk-alert.jsx
var import_react = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/@hk-components/@hk-alert/@hk-alert.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-alert/@hk-alert.jsx"
  );
  import.meta.hot.lastModified = "1732600247578.426";
}
var HkAlert = ({
  children,
  show = true,
  variant = "primary",
  className,
  dismissible = false,
  inverse = false,
  bsPrefix,
  closeLabel,
  closeVariant,
  onClose,
  transition,
  rounded
}) => {
  _s();
  const [display, setDisplay] = (0, import_react.useState)(show);
  (0, import_react.useEffect)(() => {
    setDisplay(show);
  }, [show]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default, { variant: !inverse && variant, bsPrefix, className: (0, import_classnames.default)(className, inverse ? `alert-inv alert-inv-${variant}` : "", {
    "rounded-22": rounded
  }), dismissible, closeLabel, closeVariant, onClose, show: display, transition, children: [
    children,
    dismissible && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: () => setDisplay(!display), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faClose }, void 0, false, {
      fileName: "app/@hk-components/@hk-alert/@hk-alert.jsx",
      lineNumber: 52,
      columnNumber: 99
    }, this) }, void 0, false, {
      fileName: "app/@hk-components/@hk-alert/@hk-alert.jsx",
      lineNumber: 52,
      columnNumber: 33
    }, this)
  ] }, void 0, true, {
    fileName: "app/@hk-components/@hk-alert/@hk-alert.jsx",
    lineNumber: 48,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/@hk-components/@hk-alert/@hk-alert.jsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
};
_s(HkAlert, "VxT+zUHeGuJRb1fcwceyjnvSnSg=");
_c = HkAlert;
var Header = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default.Heading, { as: props.as, bsPrefix: props.bsPrefix, className: props.className, children: props.children }, void 0, false, {
  fileName: "app/@hk-components/@hk-alert/@hk-alert.jsx",
  lineNumber: 58,
  columnNumber: 25
}, this);
_c2 = Header;
HkAlert.Header = Header;
var Link = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Alert_default.Link, { href: props.href, bsPrefix: props.bsPrefix, className: props.className, children: props.children }, void 0, false, {
  fileName: "app/@hk-components/@hk-alert/@hk-alert.jsx",
  lineNumber: 61,
  columnNumber: 23
}, this);
_c3 = Link;
HkAlert.Link = Link;
HkAlert.propTypes = {
  show: import_prop_types.default.bool,
  variant: import_prop_types.default.string,
  className: import_prop_types.default.string,
  dismissible: import_prop_types.default.bool,
  inverse: import_prop_types.default.bool,
  bsPrefix: import_prop_types.default.string,
  closeLabel: import_prop_types.default.bool,
  closeVariant: import_prop_types.default.bool
};
var hk_alert_default = HkAlert;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "HkAlert");
$RefreshReg$(_c2, "Header");
$RefreshReg$(_c3, "Link");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  hk_alert_default
};
//# sourceMappingURL=/build/_shared/chunk-AOHHCEYO.js.map
