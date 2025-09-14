import {
  SimpleHeader_default
} from "/build/_shared/chunk-CLDSF4B5.js";
import {
  macaroni_logged_out_default
} from "/build/_shared/chunk-3F54YUXI.js";
import "/build/_shared/chunk-3HVHQP7I.js";
import {
  PageFooter_default
} from "/build/_shared/chunk-CIKTYXJT.js";
import {
  eye_default,
  eye_off_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import {
  Link,
  useNavigate
} from "/build/_shared/chunk-DKEEJ4HZ.js";
import {
  Button_default,
  Col_default,
  Container_default,
  Form_default,
  InputGroup_default,
  Row_default
} from "/build/_shared/chunk-VRR24KJX.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-HFWHD4VB.js";
import "/build/_shared/chunk-CQ7UJNRQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  createHotContext
} from "/build/_shared/chunk-KTLBVDTS.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/auth/login/simple/Body.jsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/auth/login/simple/Body.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/auth/login/simple/Body.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var Body = () => {
  _s();
  const [userName, setUserName] = (0, import_react2.useState)("");
  const [password, setPassword] = (0, import_react2.useState)("");
  const [showPassword, setShowPassword] = (0, import_react2.useState)(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hk-pg-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { xl: 7, lg: 6, className: "d-lg-block d-none v-separator separator-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "auth-content py-md-0 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { xxl: 9, xl: 8, lg: 11, className: "text-center mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: macaroni_logged_out_default, className: "img-fluid w-sm-40 w-50 mb-3", alt: "login" }, void 0, false, {
        fileName: "app/routes/auth/login/simple/Body.jsx",
        lineNumber: 46,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-2", children: "Dig into festive savings, Go Premium" }, void 0, false, {
        fileName: "app/routes/auth/login/simple/Body.jsx",
        lineNumber: 47,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "w-xxl-65 w-100 mx-auto", children: 'Save 20% on the premium membership plan by using the promo code "JAMPACK20"' }, void 0, false, {
        fileName: "app/routes/auth/login/simple/Body.jsx",
        lineNumber: 48,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { size: "sm", variant: "primary", className: "btn-uppercase mt-4", children: "Upgrade Now" }, void 0, false, {
        fileName: "app/routes/auth/login/simple/Body.jsx",
        lineNumber: 49,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "p-xs mt-5 text-light", children: [
        "All illustration are powered by ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://icons8.com/ouch/", rel: "noreferrer", target: "_blank", className: "text-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { children: "Icons8" }, void 0, false, {
          fileName: "app/routes/auth/login/simple/Body.jsx",
          lineNumber: 50,
          columnNumber: 196
        }, this) }, void 0, false, {
          fileName: "app/routes/auth/login/simple/Body.jsx",
          lineNumber: 50,
          columnNumber: 105
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth/login/simple/Body.jsx",
        lineNumber: 50,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth/login/simple/Body.jsx",
      lineNumber: 45,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/login/simple/Body.jsx",
      lineNumber: 44,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/login/simple/Body.jsx",
      lineNumber: 43,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/login/simple/Body.jsx",
      lineNumber: 42,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { xl: 5, lg: 6, md: 7, sm: 10, className: "position-relative mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "auth-content py-md-0 py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { className: "w-100", onSubmit: (e) => handleSubmit(e), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { lg: 10, className: "mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "mb-4", children: "Sign in to your account" }, void 0, false, {
        fileName: "app/routes/auth/login/simple/Body.jsx",
        lineNumber: 60,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { lg: 12, as: Form_default.Group, className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-label-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "User Name" }, void 0, false, {
            fileName: "app/routes/auth/login/simple/Body.jsx",
            lineNumber: 64,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/auth/login/simple/Body.jsx",
            lineNumber: 63,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { placeholder: "Enter username or email ID", type: "text", value: userName, onChange: (e) => setUserName(e.target.value) }, void 0, false, {
            fileName: "app/routes/auth/login/simple/Body.jsx",
            lineNumber: 66,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth/login/simple/Body.jsx",
          lineNumber: 62,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { lg: 12, as: Form_default.Group, className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-label-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Password" }, void 0, false, {
              fileName: "app/routes/auth/login/simple/Body.jsx",
              lineNumber: 70,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "fs-7 fw-medium", children: "Forgot Password ?" }, void 0, false, {
              fileName: "app/routes/auth/login/simple/Body.jsx",
              lineNumber: 71,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth/login/simple/Body.jsx",
            lineNumber: 69,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputGroup_default, { className: "password-check", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "input-affix-wrapper", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { placeholder: "Enter your password", value: password, onChange: (e) => setPassword(e.target.value), type: showPassword ? "text" : "password" }, void 0, false, {
              fileName: "app/routes/auth/login/simple/Body.jsx",
              lineNumber: 75,
              columnNumber: 57
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "input-suffix text-muted", onClick: () => setShowPassword(!showPassword), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_off_default, { className: "form-icon" }, void 0, false, {
              fileName: "app/routes/auth/login/simple/Body.jsx",
              lineNumber: 78,
              columnNumber: 81
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, { className: "form-icon" }, void 0, false, {
              fileName: "app/routes/auth/login/simple/Body.jsx",
              lineNumber: 78,
              columnNumber: 116
            }, this) }, void 0, false, {
              fileName: "app/routes/auth/login/simple/Body.jsx",
              lineNumber: 77,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/auth/login/simple/Body.jsx",
              lineNumber: 76,
              columnNumber: 57
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth/login/simple/Body.jsx",
            lineNumber: 74,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/auth/login/simple/Body.jsx",
            lineNumber: 73,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth/login/simple/Body.jsx",
          lineNumber: 68,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth/login/simple/Body.jsx",
        lineNumber: 61,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { id: "logged_in", className: "form-check-sm mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Input, { type: "checkbox", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/auth/login/simple/Body.jsx",
          lineNumber: 88,
          columnNumber: 49
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Label, { className: "text-muted fs-7", children: "Keep me logged in" }, void 0, false, {
          fileName: "app/routes/auth/login/simple/Body.jsx",
          lineNumber: 89,
          columnNumber: 49
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth/login/simple/Body.jsx",
        lineNumber: 87,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "app/routes/auth/login/simple/Body.jsx",
        lineNumber: 86,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", type: "submit", className: "btn-uppercase btn-block", children: "Login" }, void 0, false, {
        fileName: "app/routes/auth/login/simple/Body.jsx",
        lineNumber: 92,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "p-xs mt-2 text-center", children: [
        "New to Jmapack ? ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { children: "Create new account" }, void 0, false, {
          fileName: "app/routes/auth/login/simple/Body.jsx",
          lineNumber: 93,
          columnNumber: 108
        }, this) }, void 0, false, {
          fileName: "app/routes/auth/login/simple/Body.jsx",
          lineNumber: 93,
          columnNumber: 95
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth/login/simple/Body.jsx",
        lineNumber: 93,
        columnNumber: 41
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth/login/simple/Body.jsx",
      lineNumber: 59,
      columnNumber: 37
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/login/simple/Body.jsx",
      lineNumber: 58,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/login/simple/Body.jsx",
      lineNumber: 57,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/login/simple/Body.jsx",
      lineNumber: 56,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/login/simple/Body.jsx",
      lineNumber: 55,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth/login/simple/Body.jsx",
    lineNumber: 41,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/auth/login/simple/Body.jsx",
    lineNumber: 40,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/auth/login/simple/Body.jsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
};
_s(Body, "4+8oI66ib1bfJQMCVHwW4l6qRgU=", false, function() {
  return [useNavigate];
});
_c = Body;
var Body_default = Body;
var _c;
$RefreshReg$(_c, "Body");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/auth/login/simple/route.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/auth/login/simple/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/auth/login/simple/route.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var LoginSimple = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SimpleHeader_default, {}, void 0, false, {
      fileName: "app/routes/auth/login/simple/route.jsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hk-pg-wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Body_default, {}, void 0, false, {
        fileName: "app/routes/auth/login/simple/route.jsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PageFooter_default, {}, void 0, false, {
        fileName: "app/routes/auth/login/simple/route.jsx",
        lineNumber: 29,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth/login/simple/route.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth/login/simple/route.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c2 = LoginSimple;
var route_default = LoginSimple;
var _c2;
$RefreshReg$(_c2, "LoginSimple");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/auth/login/simple/route-Y5FC4MNJ.js.map
