import {
  macaroni_logged_out_default
} from "/build/_shared/chunk-3F54YUXI.js";
import {
  logo_light_default
} from "/build/_shared/chunk-3HVHQP7I.js";
import {
  external_link_default
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

// app/routes/auth/login/route.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/auth/login/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/auth/login/route.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var Login = () => {
  _s();
  const [userName, setUserName] = (0, import_react.useState)("");
  const [password, setPassword] = (0, import_react.useState)("");
  const [showPassword, setShowPassword] = (0, import_react.useState)(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hk-pg-wrapper py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { fluid: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "auth-split", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { xl: 5, lg: 6, md: 7, className: "position-relative mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "auth-content flex-column pt-8 pb-md-8 pb-13", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "navbar-brand me-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "brand-img d-inline-block", src: logo_light_default, alt: "brand" }, void 0, false, {
          fileName: "app/routes/auth/login/route.jsx",
          lineNumber: 48,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/auth/login/route.jsx",
          lineNumber: 47,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/auth/login/route.jsx",
          lineNumber: 46,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { className: "w-100", onSubmit: (e) => handleSubmit(e), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { xl: 7, sm: 10, className: "mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { children: "Sign in to your account" }, void 0, false, {
              fileName: "app/routes/auth/login/route.jsx",
              lineNumber: 55,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "There are many variations of passages of Lorem Ipsum available, in some form, by injected humour" }, void 0, false, {
              fileName: "app/routes/auth/login/route.jsx",
              lineNumber: 56,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth/login/route.jsx",
            lineNumber: 54,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { as: Form_default.Group, lg: 12, className: "mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-label-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "User Name" }, void 0, false, {
                fileName: "app/routes/auth/login/route.jsx",
                lineNumber: 61,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/auth/login/route.jsx",
                lineNumber: 60,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { placeholder: "Enter username or email ID", type: "text", value: userName, onChange: (e) => setUserName(e.target.value) }, void 0, false, {
                fileName: "app/routes/auth/login/route.jsx",
                lineNumber: 63,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/auth/login/route.jsx",
              lineNumber: 59,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { as: Form_default.Group, lg: 12, className: "mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-label-group", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Password" }, void 0, false, {
                  fileName: "app/routes/auth/login/route.jsx",
                  lineNumber: 67,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "fs-7 fw-medium", children: "Forgot Password ?" }, void 0, false, {
                  fileName: "app/routes/auth/login/route.jsx",
                  lineNumber: 68,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/auth/login/route.jsx",
                lineNumber: 66,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputGroup_default, { className: "password-check", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "input-affix-wrapper affix-wth-text", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { placeholder: "Enter your password", value: password, onChange: (e) => setPassword(e.target.value), type: showPassword ? "text" : "password" }, void 0, false, {
                  fileName: "app/routes/auth/login/route.jsx",
                  lineNumber: 72,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "input-suffix text-primary text-uppercase fs-8 fw-medium", onClick: () => setShowPassword(!showPassword), children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Hide" }, void 0, false, {
                  fileName: "app/routes/auth/login/route.jsx",
                  lineNumber: 74,
                  columnNumber: 81
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Show" }, void 0, false, {
                  fileName: "app/routes/auth/login/route.jsx",
                  lineNumber: 74,
                  columnNumber: 101
                }, this) }, void 0, false, {
                  fileName: "app/routes/auth/login/route.jsx",
                  lineNumber: 73,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/auth/login/route.jsx",
                lineNumber: 71,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/auth/login/route.jsx",
                lineNumber: 70,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/auth/login/route.jsx",
              lineNumber: 65,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth/login/route.jsx",
            lineNumber: 58,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex justify-content-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { id: "logged_in", className: "form-check-sm mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Input, { type: "checkbox", defaultChecked: true }, void 0, false, {
              fileName: "app/routes/auth/login/route.jsx",
              lineNumber: 82,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Label, { className: "text-muted fs-7", children: "Keep me logged in" }, void 0, false, {
              fileName: "app/routes/auth/login/route.jsx",
              lineNumber: 83,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth/login/route.jsx",
            lineNumber: 81,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/auth/login/route.jsx",
            lineNumber: 80,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", type: "submit", className: "btn-uppercase btn-block", children: "Login" }, void 0, false, {
            fileName: "app/routes/auth/login/route.jsx",
            lineNumber: 86,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "p-xs mt-2 text-center", children: [
            "New to Jampack? ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { children: "Create new account" }, void 0, false, {
              fileName: "app/routes/auth/login/route.jsx",
              lineNumber: 87,
              columnNumber: 111
            }, this) }, void 0, false, {
              fileName: "app/routes/auth/login/route.jsx",
              lineNumber: 87,
              columnNumber: 98
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth/login/route.jsx",
            lineNumber: 87,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "d-block extr-link text-center mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(external_link_default, {}, void 0, false, {
              fileName: "app/routes/auth/login/route.jsx",
              lineNumber: 90,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/auth/login/route.jsx",
              lineNumber: 89,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { className: "text-muted", children: "Send feedback to our help forum" }, void 0, false, {
              fileName: "app/routes/auth/login/route.jsx",
              lineNumber: 92,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth/login/route.jsx",
            lineNumber: 88,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth/login/route.jsx",
          lineNumber: 53,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/auth/login/route.jsx",
          lineNumber: 52,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/auth/login/route.jsx",
          lineNumber: 51,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth/login/route.jsx",
        lineNumber: 45,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hk-footer border-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { fluid: true, as: "footer", className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-xl-8 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "footer-text pb-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "copy-text", children: [
          "Jampack \xA9 ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " All rights reserved."
        ] }, void 0, true, {
          fileName: "app/routes/auth/login/route.jsx",
          lineNumber: 103,
          columnNumber: 77
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", target: "_blank", children: "Privacy Policy" }, void 0, false, {
          fileName: "app/routes/auth/login/route.jsx",
          lineNumber: 103,
          columnNumber: 170
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "footer-link-sep", children: "|" }, void 0, false, {
          fileName: "app/routes/auth/login/route.jsx",
          lineNumber: 103,
          columnNumber: 220
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", target: "_blank", children: "T&C" }, void 0, false, {
          fileName: "app/routes/auth/login/route.jsx",
          lineNumber: 103,
          columnNumber: 262
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "footer-link-sep", children: "|" }, void 0, false, {
          fileName: "app/routes/auth/login/route.jsx",
          lineNumber: 103,
          columnNumber: 305
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", target: "_blank", children: "System Status" }, void 0, false, {
          fileName: "app/routes/auth/login/route.jsx",
          lineNumber: 103,
          columnNumber: 347
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth/login/route.jsx",
        lineNumber: 103,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "app/routes/auth/login/route.jsx",
        lineNumber: 102,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/auth/login/route.jsx",
        lineNumber: 101,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/auth/login/route.jsx",
        lineNumber: 100,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/auth/login/route.jsx",
        lineNumber: 99,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth/login/route.jsx",
      lineNumber: 44,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { xl: 7, lg: 6, md: 5, sm: 10, className: "d-md-block d-none position-relative bg-primary-light-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "auth-content flex-column text-center py-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { xxl: 7, xl: 8, lg: 11, className: "mx-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-4", children: "Meet all new Pro Jampack 2.0" }, void 0, false, {
            fileName: "app/routes/auth/login/route.jsx",
            lineNumber: 113,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "There are many variations of passages of Lorem Ipsum available, passages of Lorem Ipsum available, in some form, by injected." }, void 0, false, {
            fileName: "app/routes/auth/login/route.jsx",
            lineNumber: 114,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-primary", className: "btn-uppercase mt-2", children: "Take Tour" }, void 0, false, {
            fileName: "app/routes/auth/login/route.jsx",
            lineNumber: 115,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth/login/route.jsx",
          lineNumber: 112,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/auth/login/route.jsx",
          lineNumber: 111,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: macaroni_logged_out_default, className: "img-fluid w-sm-50 mt-7", alt: "login" }, void 0, false, {
          fileName: "app/routes/auth/login/route.jsx",
          lineNumber: 118,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth/login/route.jsx",
        lineNumber: 110,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "p-xs credit-text opacity-55", children: [
        "All illustration are powered by ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "https://icons8.com/ouch/", target: "_blank", rel: "noreferrer", className: "text-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { children: "Icons8" }, void 0, false, {
          fileName: "app/routes/auth/login/route.jsx",
          lineNumber: 120,
          columnNumber: 196
        }, this) }, void 0, false, {
          fileName: "app/routes/auth/login/route.jsx",
          lineNumber: 120,
          columnNumber: 104
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth/login/route.jsx",
        lineNumber: 120,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth/login/route.jsx",
      lineNumber: 109,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth/login/route.jsx",
    lineNumber: 43,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/routes/auth/login/route.jsx",
    lineNumber: 42,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/auth/login/route.jsx",
    lineNumber: 41,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/auth/login/route.jsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_s(Login, "4+8oI66ib1bfJQMCVHwW4l6qRgU=", false, function() {
  return [useNavigate];
});
_c = Login;
var route_default = Login;
var _c;
$RefreshReg$(_c, "Login");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/auth/login/route-GWPP7NIP.js.map
