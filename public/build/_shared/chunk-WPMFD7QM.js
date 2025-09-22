import {
  AdjustContainer
} from "/build/_shared/chunk-PYXJMS6E.js";
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

// app/routes/apps/dashboard/Top/Adjust/index.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/dashboard/Top/Adjust/index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/dashboard/Top/Adjust/index.jsx"
  );
  import.meta.hot.lastModified = "1757826380169.823";
}
var AdjustValue = ({
  value,
  background
}) => {
  _s();
  const [percent, setPercent] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    const interval = setInterval(() => {
      setPercent(() => {
        const randomPercent = Math.random() * 100;
        return randomPercent;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdjustContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
      background,
      width: `${percent}%`
    } }, void 0, false, {
      fileName: "app/routes/apps/dashboard/Top/Adjust/index.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      value,
      "%"
    ] }, void 0, true, {
      fileName: "app/routes/apps/dashboard/Top/Adjust/index.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/dashboard/Top/Adjust/index.jsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
};
_s(AdjustValue, "qy9k8hlTw0Z7eTBIkMCkGk+elf8=");
_c = AdjustValue;
var Adjust_default = AdjustValue;
var _c;
$RefreshReg$(_c, "AdjustValue");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Adjust_default
};
//# sourceMappingURL=/build/_shared/chunk-WPMFD7QM.js.map
