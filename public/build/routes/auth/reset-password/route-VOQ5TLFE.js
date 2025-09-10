import {
  CommonFooter1_default
} from "/build/_shared/chunk-2MVUSLWJ.js";
import {
  logo_light_default
} from "/build/_shared/chunk-3HVHQP7I.js";
import {
  Button_default,
  Card_default,
  Col_default,
  Container_default,
  Form_default,
  Row_default
} from "/build/_shared/chunk-KBRVI47E.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-HFWHD4VB.js";
import "/build/_shared/chunk-CQ7UJNRQ.js";
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
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/auth/reset-password/route.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/auth/reset-password/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/auth/reset-password/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247996.817";
}
var ResetPassword = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hk-pg-wrapper pt-0 pb-xl-0 pb-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hk-pg-body pt-0 pb-xl-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 10, className: "position-relative mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "auth-content py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { className: "w-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { lg: 5, md: 7, sm: 10, className: "mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "navbar-brand me-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "brand-img d-inline-block", src: logo_light_default, alt: "brand" }, void 0, false, {
        fileName: "app/routes/auth/reset-password/route.jsx",
        lineNumber: 39,
        columnNumber: 53
      }, this) }, void 0, false, {
        fileName: "app/routes/auth/reset-password/route.jsx",
        lineNumber: 38,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "app/routes/auth/reset-password/route.jsx",
        lineNumber: 37,
        columnNumber: 45
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-flush", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Reset your Password" }, void 0, false, {
          fileName: "app/routes/auth/reset-password/route.jsx",
          lineNumber: 44,
          columnNumber: 53
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4", children: "No worries we will mail you 6 digit code to your recovery email address to reset your password" }, void 0, false, {
          fileName: "app/routes/auth/reset-password/route.jsx",
          lineNumber: 45,
          columnNumber: 53
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { lg: 12, as: Form_default.Group, className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-label-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { htmlFor: "userName", children: "Email" }, void 0, false, {
              fileName: "app/routes/auth/reset-password/route.jsx",
              lineNumber: 49,
              columnNumber: 65
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "fs-7 fw-medium", children: "Forgot Username ?" }, void 0, false, {
              fileName: "app/routes/auth/reset-password/route.jsx",
              lineNumber: 50,
              columnNumber: 65
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth/reset-password/route.jsx",
            lineNumber: 48,
            columnNumber: 61
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { id: "userName", placeholder: "Recovery email ID", type: "email" }, void 0, false, {
            fileName: "app/routes/auth/reset-password/route.jsx",
            lineNumber: 52,
            columnNumber: 61
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth/reset-password/route.jsx",
          lineNumber: 47,
          columnNumber: 57
        }, this) }, void 0, false, {
          fileName: "app/routes/auth/reset-password/route.jsx",
          lineNumber: 46,
          columnNumber: 53
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", className: "btn-uppercase btn-block", children: "Send Code" }, void 0, false, {
          fileName: "app/routes/auth/reset-password/route.jsx",
          lineNumber: 55,
          columnNumber: 53
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "p-xs mt-2 text-center", children: [
          "Did not receive code? ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { children: "Send again" }, void 0, false, {
            fileName: "app/routes/auth/reset-password/route.jsx",
            lineNumber: 56,
            columnNumber: 125
          }, this) }, void 0, false, {
            fileName: "app/routes/auth/reset-password/route.jsx",
            lineNumber: 56,
            columnNumber: 112
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth/reset-password/route.jsx",
          lineNumber: 56,
          columnNumber: 53
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth/reset-password/route.jsx",
        lineNumber: 43,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "app/routes/auth/reset-password/route.jsx",
        lineNumber: 42,
        columnNumber: 45
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth/reset-password/route.jsx",
      lineNumber: 36,
      columnNumber: 41
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/reset-password/route.jsx",
      lineNumber: 35,
      columnNumber: 37
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/reset-password/route.jsx",
      lineNumber: 34,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/reset-password/route.jsx",
      lineNumber: 33,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/reset-password/route.jsx",
      lineNumber: 32,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/reset-password/route.jsx",
      lineNumber: 31,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/reset-password/route.jsx",
      lineNumber: 30,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/reset-password/route.jsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommonFooter1_default, {}, void 0, false, {
      fileName: "app/routes/auth/reset-password/route.jsx",
      lineNumber: 68,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth/reset-password/route.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_c = ResetPassword;
var route_default = ResetPassword;
var _c;
$RefreshReg$(_c, "ResetPassword");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/auth/reset-password/route-VOQ5TLFE.js.map
