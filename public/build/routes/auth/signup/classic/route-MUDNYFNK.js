import {
  CommonFooter1_default
} from "/build/_shared/chunk-GU3OJUGP.js";
import {
  faFacebook,
  faGoogle
} from "/build/_shared/chunk-GJLLTWNM.js";
import {
  logo_light_default
} from "/build/_shared/chunk-3HVHQP7I.js";
import {
  FontAwesomeIcon
} from "/build/_shared/chunk-JPGC5R3S.js";
import {
  Link
} from "/build/_shared/chunk-DKEEJ4HZ.js";
import {
  Button_default,
  Card_default,
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

// app/routes/auth/signup/classic/route.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/auth/signup/classic/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/auth/signup/classic/route.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var SignupClassic = () => {
  _s();
  const [showPassword, setShowPassword] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hk-pg-wrapper pt-0 pb-xl-0 pb-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hk-pg-body pt-0 pb-xl-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 10, className: "position-relative mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "auth-content py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { className: "w-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { xxl: 5, xl: 7, lg: 8, sm: 10, className: "mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "navbar-brand me-0", to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "brand-img d-inline-block", src: logo_light_default, alt: "brand" }, void 0, false, {
        fileName: "app/routes/auth/signup/classic/route.jsx",
        lineNumber: 45,
        columnNumber: 53
      }, this) }, void 0, false, {
        fileName: "app/routes/auth/signup/classic/route.jsx",
        lineNumber: 44,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "app/routes/auth/signup/classic/route.jsx",
        lineNumber: 43,
        columnNumber: 45
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-center mb-0", children: "Sign Up to Jampack" }, void 0, false, {
          fileName: "app/routes/auth/signup/classic/route.jsx",
          lineNumber: 50,
          columnNumber: 53
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "p-xs mt-2 mb-4 text-center", children: [
          "Already a member ? ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/auth/login/classic", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { children: "Sign In" }, void 0, false, {
            fileName: "app/routes/auth/signup/classic/route.jsx",
            lineNumber: 52,
            columnNumber: 107
          }, this) }, void 0, false, {
            fileName: "app/routes/auth/signup/classic/route.jsx",
            lineNumber: 52,
            columnNumber: 76
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth/signup/classic/route.jsx",
          lineNumber: 51,
          columnNumber: 53
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "outline-dark", className: "btn-rounded btn-block mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faGoogle }, void 0, false, {
            fileName: "app/routes/auth/signup/classic/route.jsx",
            lineNumber: 57,
            columnNumber: 65
          }, this) }, void 0, false, {
            fileName: "app/routes/auth/signup/classic/route.jsx",
            lineNumber: 56,
            columnNumber: 61
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Sign Up with Gmail" }, void 0, false, {
            fileName: "app/routes/auth/signup/classic/route.jsx",
            lineNumber: 59,
            columnNumber: 61
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth/signup/classic/route.jsx",
          lineNumber: 55,
          columnNumber: 57
        }, this) }, void 0, false, {
          fileName: "app/routes/auth/signup/classic/route.jsx",
          lineNumber: 54,
          columnNumber: 53
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "social-facebook", className: "btn-social btn-rounded btn-block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faFacebook }, void 0, false, {
            fileName: "app/routes/auth/signup/classic/route.jsx",
            lineNumber: 65,
            columnNumber: 65
          }, this) }, void 0, false, {
            fileName: "app/routes/auth/signup/classic/route.jsx",
            lineNumber: 64,
            columnNumber: 61
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Sign Up with Facebook" }, void 0, false, {
            fileName: "app/routes/auth/signup/classic/route.jsx",
            lineNumber: 67,
            columnNumber: 61
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth/signup/classic/route.jsx",
          lineNumber: 63,
          columnNumber: 57
        }, this) }, void 0, false, {
          fileName: "app/routes/auth/signup/classic/route.jsx",
          lineNumber: 62,
          columnNumber: 53
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title-sm title-wth-divider divider-center my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Or" }, void 0, false, {
          fileName: "app/routes/auth/signup/classic/route.jsx",
          lineNumber: 70,
          columnNumber: 117
        }, this) }, void 0, false, {
          fileName: "app/routes/auth/signup/classic/route.jsx",
          lineNumber: 70,
          columnNumber: 53
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { lg: 6, as: Form_default.Group, className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Name" }, void 0, false, {
              fileName: "app/routes/auth/signup/classic/route.jsx",
              lineNumber: 73,
              columnNumber: 61
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { placeholder: "Enter your name", type: "text" }, void 0, false, {
              fileName: "app/routes/auth/signup/classic/route.jsx",
              lineNumber: 74,
              columnNumber: 61
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth/signup/classic/route.jsx",
            lineNumber: 72,
            columnNumber: 57
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { lg: 6, as: Form_default.Group, className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Username" }, void 0, false, {
              fileName: "app/routes/auth/signup/classic/route.jsx",
              lineNumber: 77,
              columnNumber: 61
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { placeholder: "Enter username", type: "text" }, void 0, false, {
              fileName: "app/routes/auth/signup/classic/route.jsx",
              lineNumber: 78,
              columnNumber: 61
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth/signup/classic/route.jsx",
            lineNumber: 76,
            columnNumber: 57
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { lg: 12, as: Form_default.Group, className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Email" }, void 0, false, {
              fileName: "app/routes/auth/signup/classic/route.jsx",
              lineNumber: 81,
              columnNumber: 61
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { placeholder: "Enter your email id", type: "text" }, void 0, false, {
              fileName: "app/routes/auth/signup/classic/route.jsx",
              lineNumber: 82,
              columnNumber: 61
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth/signup/classic/route.jsx",
            lineNumber: 80,
            columnNumber: 57
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { lg: 12, as: Form_default.Group, className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Password" }, void 0, false, {
              fileName: "app/routes/auth/signup/classic/route.jsx",
              lineNumber: 85,
              columnNumber: 61
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputGroup_default, { className: "password-check", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "input-affix-wrapper affix-wth-text", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { placeholder: "6+ characters", type: showPassword ? "text" : "password" }, void 0, false, {
                fileName: "app/routes/auth/signup/classic/route.jsx",
                lineNumber: 88,
                columnNumber: 69
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "input-suffix text-primary text-uppercase fs-8 fw-medium", onClick: () => setShowPassword(!showPassword), children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Hide" }, void 0, false, {
                fileName: "app/routes/auth/signup/classic/route.jsx",
                lineNumber: 90,
                columnNumber: 89
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Show" }, void 0, false, {
                fileName: "app/routes/auth/signup/classic/route.jsx",
                lineNumber: 90,
                columnNumber: 109
              }, this) }, void 0, false, {
                fileName: "app/routes/auth/signup/classic/route.jsx",
                lineNumber: 89,
                columnNumber: 69
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/auth/signup/classic/route.jsx",
              lineNumber: 87,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/auth/signup/classic/route.jsx",
              lineNumber: 86,
              columnNumber: 61
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth/signup/classic/route.jsx",
            lineNumber: 84,
            columnNumber: 57
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth/signup/classic/route.jsx",
          lineNumber: 71,
          columnNumber: 53
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { id: "logged_in", className: "form-check-sm mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Input, { type: "checkbox", defaultChecked: true }, void 0, false, {
            fileName: "app/routes/auth/signup/classic/route.jsx",
            lineNumber: 97,
            columnNumber: 57
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Label, { className: "text-muted fs-7", children: [
            "By creating an account you specify that you have read and agree with our ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: "Tearms of use" }, void 0, false, {
              fileName: "app/routes/auth/signup/classic/route.jsx",
              lineNumber: 99,
              columnNumber: 134
            }, this),
            " and ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: "Privacy policy" }, void 0, false, {
              fileName: "app/routes/auth/signup/classic/route.jsx",
              lineNumber: 99,
              columnNumber: 172
            }, this),
            ". We may keep you inform about latest updates through our default ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: "notification settings" }, void 0, false, {
              fileName: "app/routes/auth/signup/classic/route.jsx",
              lineNumber: 99,
              columnNumber: 272
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/auth/signup/classic/route.jsx",
            lineNumber: 98,
            columnNumber: 57
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/auth/signup/classic/route.jsx",
          lineNumber: 96,
          columnNumber: 53
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", className: "btn-rounded btn-uppercase btn-block", as: Link, to: "/auth/login-classic", children: "Create account" }, void 0, false, {
          fileName: "app/routes/auth/signup/classic/route.jsx",
          lineNumber: 102,
          columnNumber: 53
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/auth/signup/classic/route.jsx",
        lineNumber: 49,
        columnNumber: 49
      }, this) }, void 0, false, {
        fileName: "app/routes/auth/signup/classic/route.jsx",
        lineNumber: 48,
        columnNumber: 45
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/auth/signup/classic/route.jsx",
      lineNumber: 42,
      columnNumber: 41
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/signup/classic/route.jsx",
      lineNumber: 41,
      columnNumber: 37
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/signup/classic/route.jsx",
      lineNumber: 40,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/signup/classic/route.jsx",
      lineNumber: 39,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/signup/classic/route.jsx",
      lineNumber: 38,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/signup/classic/route.jsx",
      lineNumber: 37,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/signup/classic/route.jsx",
      lineNumber: 36,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/auth/signup/classic/route.jsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CommonFooter1_default, {}, void 0, false, {
      fileName: "app/routes/auth/signup/classic/route.jsx",
      lineNumber: 114,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/auth/signup/classic/route.jsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_s(SignupClassic, "daguiRHWMFkqPgCh/ppD7CF5VuQ=");
_c = SignupClassic;
var route_default = SignupClassic;
var _c;
$RefreshReg$(_c, "SignupClassic");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/auth/signup/classic/route-MUDNYFNK.js.map
