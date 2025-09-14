import {
  InvoiceAppSidebar_default
} from "/build/_shared/chunk-GEGWK4S2.js";
import {
  HkTooltip_default
} from "/build/_shared/chunk-NYEYMOIV.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  chevron_down_default,
  chevron_up_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import {
  useGlobalStateContext
} from "/build/_shared/chunk-3LFZEH5W.js";
import "/build/_shared/chunk-B57YWHU6.js";
import "/build/_shared/chunk-WUHA5P4Y.js";
import {
  Link
} from "/build/_shared/chunk-DKEEJ4HZ.js";
import {
  Button_default,
  Card_default,
  Col_default,
  Container_default,
  Form_default,
  Row_default
} from "/build/_shared/chunk-VRR24KJX.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-HFWHD4VB.js";
import {
  require_classnames
} from "/build/_shared/chunk-CQ7UJNRQ.js";
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

// app/routes/apps/invoices/invoice-templates/route.jsx
var import_react3 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// app/assets/img/templates/template1.png
var template1_default = "/build/_assets/template1-TUZLRCL4.png";

// app/assets/img/templates/template2.png
var template2_default = "/build/_assets/template2-VSNEZQFK.png";

// app/assets/img/templates/template3.png
var template3_default = "/build/_assets/template3-VMMDG6MM.png";

// app/assets/img/templates/template4.png
var template4_default = "/build/_assets/template4-BJ6VXADP.png";

// app/assets/img/templates/template5.png
var template5_default = "/build/_assets/template5-KY3C5ZLA.png";

// app/assets/img/templates/template6.png
var template6_default = "/build/_assets/template6-VBUYAPJ2.png";

// app/assets/img/templates/template7.png
var template7_default = "/build/_assets/template7-IM53MNHJ.png";

// app/assets/img/templates/template8.png
var template8_default = "/build/_assets/template8-4ZE5HNW3.png";

// app/routes/apps/invoices/invoice-templates/Body.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/invoices/invoice-templates/Body.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/invoices/invoice-templates/Body.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var Body = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "invoice-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-md-7 my-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-4", children: "Pick your starting point" }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
      lineNumber: 39,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { md: 4, className: "mb-md-0 mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", placeholder: "Search Template" }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 43,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 42,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { md: 4, className: "mb-md-0 mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Select, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 1, children: "Popular" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 47,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 2, children: "Classic" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 48,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 3, children: "Trending" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 49,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 4, children: "Simple" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 50,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 46,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 45,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-md-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Select, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 1, children: "All Categories" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 55,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 2, children: "Business" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 56,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 3, children: "Studio" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 57,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 3, children: "Personal" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 58,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 54,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 53,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
      lineNumber: 41,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
      lineNumber: 40,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "mt-7 mb-3", children: "Premium Templates" }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
      lineNumber: 63,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "d-block col-xl-2 col-sm-4 col-xs-12 mb-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Img, { src: template1_default, alt: "Card img cap" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 67,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 66,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "mb-0", children: "Standard" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 69,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 65,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "d-block col-xl-2 col-sm-4 col-xs-12 mb-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Img, { src: template2_default, alt: "Card img cap" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 73,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 72,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "mb-0", children: "Simplicity" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 75,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 71,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "d-block col-xl-2 col-sm-4 col-xs-12 mb-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Img, { src: template3_default, alt: "Card img cap" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 79,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 78,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "mb-0", children: "Essential" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 81,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 77,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "d-block col-xl-2 col-sm-4 col-xs-12 mb-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Img, { src: template4_default, alt: "Card img cap" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 85,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 84,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "mb-0", children: "Classic" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 87,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 83,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
      lineNumber: 64,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "mt-7 mb-3", children: "Business" }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
      lineNumber: 90,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "row text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "d-block col-xl-2 col-sm-4 col-xs-12 mb-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Img, { src: template5_default, alt: "Card img cap" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 94,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 93,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "mb-0", children: "Pro Forma" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 96,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 92,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "d-block col-xl-2 col-sm-4 col-xs-12 mb-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Img, { src: template6_default, alt: "Card img cap" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 100,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 99,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "mb-0", children: "Trade" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 102,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 98,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "d-block col-xl-2 col-sm-4 col-xs-12 mb-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Img, { src: template7_default, alt: "Card img cap" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 106,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 105,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "mb-0", children: "Interim" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 108,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 104,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "d-block col-xl-2 col-sm-4 col-xs-12 mb-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Img, { src: template8_default, alt: "Card img cap" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 112,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 111,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "mb-0", children: "Primary" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 114,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 110,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "d-block col-xl-2 col-sm-4 col-xs-12 mb-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Img, { src: template1_default, alt: "Card img cap" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 118,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 117,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "mb-0", children: "Matt Opel" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 120,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 116,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "d-block col-xl-2 col-sm-4 col-xs-12 mb-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Img, { src: template2_default, alt: "Card img cap" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 124,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 123,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "mb-0", children: "Freelancer" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 126,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 122,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "d-block col-xl-2 col-sm-4 col-xs-12 mb-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Img, { src: template3_default, alt: "Card img cap" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 130,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 129,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "mb-0", children: "Designer" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 132,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 128,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "d-block col-xl-2 col-sm-4 col-xs-12 mb-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Img, { src: template4_default, alt: "Card img cap" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 136,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 135,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "mb-0", children: "Service" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 138,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 134,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "d-block col-xl-2 col-sm-4 col-xs-12 mb-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Img, { src: template5_default, alt: "Card img cap" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 142,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 141,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "mb-0", children: "Service" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 144,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 140,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "d-block col-xl-2 col-sm-4 col-xs-12 mb-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Img, { src: template6_default, alt: "Card img cap" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 148,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 147,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "mb-0", children: "Service" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 150,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 146,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "d-block col-xl-2 col-sm-4 col-xs-12 mb-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Img, { src: template7_default, alt: "Card img cap" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 154,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 153,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "mb-0", children: "Service" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 156,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 152,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "d-block col-xl-2 col-sm-4 col-xs-12 mb-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Img, { src: template8_default, alt: "Card img cap" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 160,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 159,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "mb-0", children: "Service" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
          lineNumber: 162,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
        lineNumber: 158,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
      lineNumber: 91,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
    lineNumber: 38,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
    lineNumber: 37,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
    lineNumber: 36,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/invoices/invoice-templates/Body.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_c = Body;
var Body_default = Body;
var _c;
$RefreshReg$(_c, "Body");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/invoices/invoice-templates/Header.jsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/invoices/invoice-templates/Header.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/invoices/invoice-templates/Header.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var Header = ({
  toggleSidebar,
  show
}) => {
  _s();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "invoice-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "#", className: "invoiceapp-title link-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Invoice Templates" }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-templates/Header.jsx",
      lineNumber: 40,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-templates/Header.jsx",
      lineNumber: 39,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-templates/Header.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none", onClick: () => dispatch({
      type: "top_nav_toggle"
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: states.layoutState.topNavCollapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(chevron_down_default, {}, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-templates/Header.jsx",
      lineNumber: 49,
      columnNumber: 66
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(chevron_up_default, {}, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-templates/Header.jsx",
      lineNumber: 49,
      columnNumber: 84
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-templates/Header.jsx",
      lineNumber: 48,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-templates/Header.jsx",
      lineNumber: 47,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-templates/Header.jsx",
      lineNumber: 46,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-templates/Header.jsx",
      lineNumber: 43,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: (0, import_classnames.default)("hk-sidebar-togglable", {
      "active": !show
    }), onClick: toggleSidebar }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-templates/Header.jsx",
      lineNumber: 54,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/invoices/invoice-templates/Header.jsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
};
_s(Header, "OVdtiISsix2HOQFhIOw6MKqd+SU=", false, function() {
  return [useGlobalStateContext];
});
_c2 = Header;
var Header_default = Header;
var _c2;
$RefreshReg$(_c2, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/invoices/invoice-templates/route.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/invoices/invoice-templates/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/invoices/invoice-templates/route.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var InvoiceTemplates = () => {
  _s2();
  const [showSidebar, setShowSidebar] = (0, import_react3.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: (0, import_classnames2.default)("invoiceapp-wrap", {
    "invoiceapp-sidebar-toggle": !showSidebar
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InvoiceAppSidebar_default, {}, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-templates/route.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "invoiceapp-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "invoiceapp-detail-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Header_default, { toggleSidebar: () => setShowSidebar(!showSidebar), show: showSidebar }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-templates/route.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Body_default, {}, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-templates/route.jsx",
        lineNumber: 38,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/invoice-templates/route.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-templates/route.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/invoices/invoice-templates/route.jsx",
    lineNumber: 31,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/invoices/invoice-templates/route.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s2(InvoiceTemplates, "O0tqdxfw1ryb5O1kO6vD3OVdeTk=");
_c3 = InvoiceTemplates;
var route_default = InvoiceTemplates;
var _c3;
$RefreshReg$(_c3, "InvoiceTemplates");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/invoices/invoice-templates/route-2VEOIIQW.js.map
