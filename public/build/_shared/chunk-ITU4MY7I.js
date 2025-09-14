import {
  edit_2_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import {
  Button_default,
  Form_default
} from "/build/_shared/chunk-VRR24KJX.js";
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
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  createHotContext
} from "/build/_shared/chunk-KTLBVDTS.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/@hk-components/@hk-editable-component/HkInlineEdit.jsx
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
    window.$RefreshRuntime$.register(type, '"app/@hk-components/@hk-editable-component/HkInlineEdit.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-editable-component/HkInlineEdit.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var HkInlineEdit = ({
  value,
  as,
  className,
  containerClass,
  id,
  left
}) => {
  _s();
  const [editable, setEditable] = (0, import_react.useState)(false);
  const onEdit = () => {
    var el = document.getElementById(id);
    el.contentEditable = true;
    var range = document.createRange();
    var sel = window.getSelection();
    range.selectNodeContents(el);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
    el.focus();
    setEditable(!editable);
  };
  const BlurEle = () => {
    var el = document.getElementById(id);
    el.contentEditable = false;
    setEditable(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: (0, import_classnames.default)("d-flex align-items-center inline-editable-wrap", containerClass), children: [
    !editable && left && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { size: "sm", variant: "flush-light", className: "btn-icon btn-rounded flush-soft-hover edit-tyn ms-1", onClick: onEdit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(edit_2_default, {}, void 0, false, {
      fileName: "app/@hk-components/@hk-editable-component/HkInlineEdit.jsx",
      lineNumber: 60,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/@hk-components/@hk-editable-component/HkInlineEdit.jsx",
      lineNumber: 59,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/@hk-components/@hk-editable-component/HkInlineEdit.jsx",
      lineNumber: 58,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/@hk-components/@hk-editable-component/HkInlineEdit.jsx",
      lineNumber: 57,
      columnNumber: 39
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { as, id, className: (0, import_classnames.default)(className), onBlur: BlurEle, children: value }, void 0, false, {
      fileName: "app/@hk-components/@hk-editable-component/HkInlineEdit.jsx",
      lineNumber: 65,
      columnNumber: 17
    }, this),
    !editable && !left && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { size: "sm", variant: "flush-light", className: "btn-icon btn-rounded flush-soft-hover edit-tyn ms-1", onClick: onEdit, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(edit_2_default, {}, void 0, false, {
      fileName: "app/@hk-components/@hk-editable-component/HkInlineEdit.jsx",
      lineNumber: 72,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/@hk-components/@hk-editable-component/HkInlineEdit.jsx",
      lineNumber: 71,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/@hk-components/@hk-editable-component/HkInlineEdit.jsx",
      lineNumber: 70,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/@hk-components/@hk-editable-component/HkInlineEdit.jsx",
      lineNumber: 69,
      columnNumber: 40
    }, this)
  ] }, void 0, true, {
    fileName: "app/@hk-components/@hk-editable-component/HkInlineEdit.jsx",
    lineNumber: 55,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/@hk-components/@hk-editable-component/HkInlineEdit.jsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
};
_s(HkInlineEdit, "v9AOl5wRgpqedlzTwQ7BmtO4/4w=");
_c = HkInlineEdit;
HkInlineEdit.propTypes = {
  id: import_prop_types.default.any.isRequired,
  value: import_prop_types.default.string
};
var HkInlineEdit_default = HkInlineEdit;
var _c;
$RefreshReg$(_c, "HkInlineEdit");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  HkInlineEdit_default
};
//# sourceMappingURL=/build/_shared/chunk-ITU4MY7I.js.map
