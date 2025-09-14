import {
  Outlet,
  useLocation
} from "/build/_shared/chunk-DKEEJ4HZ.js";
import {
  require_classnames
} from "/build/_shared/chunk-CQ7UJNRQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  createHotContext
} from "/build/_shared/chunk-KTLBVDTS.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/layout/auth-layout/index.jsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/layout/auth-layout/index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/layout/auth-layout/index.jsx"
  );
  import.meta.hot.lastModified = "1757670705263.7515";
}
var AuthLayout = ({
  children
}) => {
  _s();
  const {
    pathname
  } = useLocation();
  const lockScreenAuth = pathname.match("/auth/lock-screen");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("hk-wrapper hk-pg-auth", {
    "bg-primary-dark-3": lockScreenAuth
  }), "data-footer": "simple", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/layout/auth-layout/index.jsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/layout/auth-layout/index.jsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_s(AuthLayout, "qVMqkCpYCjknUqSjfMln5RFSkbo=", false, function() {
  return [useLocation];
});
_c = AuthLayout;
var auth_layout_default = AuthLayout;
var _c;
$RefreshReg$(_c, "AuthLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  auth_layout_default as default
};
//# sourceMappingURL=/build/layout/auth-layout/index-VIL2SN2S.js.map
