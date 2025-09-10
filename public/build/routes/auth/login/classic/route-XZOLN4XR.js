import {
  CommonFooter1_default
} from "/build/_shared/chunk-2MVUSLWJ.js";
import {
  logo_light_default
} from "/build/_shared/chunk-3HVHQP7I.js";
import {
  eye_default,
  eye_off_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  Button_default,
  Card_default,
  Col_default,
  Container_default,
  Form_default,
  InputGroup_default,
  Row_default
} from "/build/_shared/chunk-KBRVI47E.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-HFWHD4VB.js";
import "/build/_shared/chunk-CQ7UJNRQ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  Link,
  useNavigate
} from "/build/_shared/chunk-OQSN7HAE.js";
import {
  createHotContext
} from "/build/_shared/chunk-7UABGPEU.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/auth/login/classic/route.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/auth/login/classic/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/auth/login/classic/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247993.916";
}
var LoginClassic = () => {
  _s();
  const [userName, setUserName] = (0, import_react.useState)("");
  const [password, setPassword] = (0, import_react.useState)("");
  const [showPassword, setShowPassword] = (0, import_react.useState)(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hk-pg-wrapper pt-0 pb-xl-0 pb-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hk-pg-body pt-0 pb-xl-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 10, className: "position-relative mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "auth-content py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { className: "w-100", onSubmit: (e) => handleSubmit(e), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { lg: 5, md: 7, sm: 10, className: "mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "navbar-brand me-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "brand-img d-inline-block", src: logo_light_default, alt: "brand" }, void 0, false, {
        fileName: "app/routes/auth/login/classic/route.jsx",
        lineNumber: 51,
        columnNumber: 53
      }, this) }, void 0, false, {
        fileName: "app/routes/auth/login/classic/route.jsx",
        lineNumber: 50,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "app/routes/auth/login/classic/route.jsx",
        lineNumber: 49,
        columnNumber: 45
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-lg card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "mb-4 text-center", children: "Sign in to your account" }, void 0, false, {
          fileName: "app/routes/auth/login/classic/route.jsx",
          lineNumber: 56,
          columnNumber: 53
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { as: Form_default.Group, lg: 12, className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-label-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "User Name" }, void 0, false, {
              fileName: "app/routes/auth/login/classic/route.jsx",
              lineNumber: 60,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/auth/login/classic/route.jsx",
              lineNumber: 59,
              columnNumber: 61
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { placeholder: "Enter username or email ID", type: "text", value: userName, onChange: (e) => setUserName(e.target.value) }, void 0, false, {
              fileName: "app/routes/auth/login/classic/route.jsx",
              lineNumber: 62,
              columnNumber: 61
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth/login/classic/route.jsx",
            lineNumber: 58,
            columnNumber: 57
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { as: Form_default.Group, lg: 12, className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-label-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Password" }, void 0, false, {
                fileName: "app/routes/auth/login/classic/route.jsx",
                lineNumber: 66,
                columnNumber: 65
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "fs-7 fw-medium", children: "Forgot Password ?" }, void 0, false, {
                fileName: "app/routes/auth/login/classic/route.jsx",
                lineNumber: 67,
                columnNumber: 65
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/auth/login/classic/route.jsx",
              lineNumber: 65,
              columnNumber: 61
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputGroup_default, { className: "password-check", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "input-affix-wrapper", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { placeholder: "Enter your password", value: password, onChange: (e) => setPassword(e.target.value), type: showPassword ? "text" : "password" }, void 0, false, {
                fileName: "app/routes/auth/login/classic/route.jsx",
                lineNumber: 71,
                columnNumber: 69
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "input-suffix text-muted", onClick: () => setShowPassword(!showPassword), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_off_default, { className: "form-icon" }, void 0, false, {
                fileName: "app/routes/auth/login/classic/route.jsx",
                lineNumber: 74,
                columnNumber: 93
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, { className: "form-icon" }, void 0, false, {
                fileName: "app/routes/auth/login/classic/route.jsx",
                lineNumber: 74,
                columnNumber: 128
              }, this) }, void 0, false, {
                fileName: "app/routes/auth/login/classic/route.jsx",
                lineNumber: 73,
                columnNumber: 73
              }, this) }, void 0, false, {
                fileName: "app/routes/auth/login/classic/route.jsx",
                lineNumber: 72,
                columnNumber: 69
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/auth/login/classic/route.jsx",
              lineNumber: 70,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/auth/login/classic/route.jsx",
              lineNumber: 69,
              columnNumber: 61
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth/login/classic/route.jsx",
            lineNumber: 64,
            columnNumber: 57
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth/login/classic/route.jsx",
          lineNumber: 57,
          columnNumber: 53
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { id: "logged_in", className: "form-check-sm mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Input, { type: "checkbox", defaultChecked: true }, void 0, false, {
            fileName: "app/routes/auth/login/classic/route.jsx",
            lineNumber: 84,
            columnNumber: 61
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Label, { className: "text-muted fs-7", children: "Keep me logged in" }, void 0, false, {
            fileName: "app/routes/auth/login/classic/route.jsx",
            lineNumber: 85,
            columnNumber: 61
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth/login/classic/route.jsx",
          lineNumber: 83,
          columnNumber: 57
        }, this) }, void 0, false, {
          fileName: "app/routes/auth/login/classic/route.jsx",
          lineNumber: 82,
          columnNumber: 53
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", type: "submit", className: "btn-uppercase btn-block", children: "Login" }, void 0, false, {
          fileName: "app/routes/auth/login/classic/route.jsx",
          lineNumber: 88,
          columnNumber: 53
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "p-xs mt-2 text-center", children: [
          "New to Jmapack ? ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { children: "Create new account" }, void 0, false, {
            fileName: "app/routes/auth/login/classic/route.jsx",
            lineNumber: 89,
            columnNumber: 120
          }, this) }, void 0, false, {
            fileName: "app/routes/auth/login/classic/route.jsx",
            lineNumber: 89,
            columnNumber: 107
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth/login/classic/route.jsx",
          lineNumber: 89,
          columnNumber: 53
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth/login/classic/route.jsx",
        lineNumber: 55,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "app/routes/auth/login/classic/route.jsx",
        lineNumber: 54,
        columnNumber: 45
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth/login/classic/route.jsx",
      lineNumber: 48,
      columnNumber: 41
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/login/classic/route.jsx",
      lineNumber: 47,
      columnNumber: 37
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/login/classic/route.jsx",
      lineNumber: 46,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/login/classic/route.jsx",
      lineNumber: 45,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/login/classic/route.jsx",
      lineNumber: 44,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/login/classic/route.jsx",
      lineNumber: 43,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/login/classic/route.jsx",
      lineNumber: 42,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/login/classic/route.jsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommonFooter1_default, {}, void 0, false, {
      fileName: "app/routes/auth/login/classic/route.jsx",
      lineNumber: 101,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth/login/classic/route.jsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_s(LoginClassic, "4+8oI66ib1bfJQMCVHwW4l6qRgU=", false, function() {
  return [useNavigate];
});
_c = LoginClassic;
var route_default = LoginClassic;
var _c;
$RefreshReg$(_c, "LoginClassic");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/auth/login/classic/route-XZOLN4XR.js.map
