import {
  InvoiceAppSidebar_default
} from "/build/_shared/chunk-GEGWK4S2.js";
import {
  logo_light_default
} from "/build/_shared/chunk-3HVHQP7I.js";
import {
  HkTooltip_default
} from "/build/_shared/chunk-NYEYMOIV.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  chevron_down_default,
  chevron_left_default,
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
  Col_default,
  Container_default,
  Row_default,
  Table_default
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

// app/routes/apps/invoices/invoice-preview/route.jsx
var import_react2 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// app/routes/apps/invoices/invoice-preview/Body.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/invoices/invoice-preview/Body.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/invoices/invoice-preview/Body.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var Body = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "invoice-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "template-invoice-wrap mt-xxl-5 p-md-5 p-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { lg: 3, md: 5, className: "order-md-0 order-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: logo_light_default, alt: "logo" }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
        lineNumber: 33,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
        lineNumber: 32,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { lg: 4, md: 4, className: "offset-lg-5 offset-md-3 mb-md-0 mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "d-flex justify-content-md-end mb-0", children: "Invoice" }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
        lineNumber: 36,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
        lineNumber: 35,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
      lineNumber: 31,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { md: 4, className: "order-md-0 order-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "address-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { children: "Hencework" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 42,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "4747, Pearl Street" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 43,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Rainy day Drive" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 44,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Washington DC 42341" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 45,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "jampack_01@hencework.com" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 46,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
        lineNumber: 41,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
        lineNumber: 40,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { md: 5, className: "offset-md-3 mb-4 mb-md-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex justify-content-md-end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-md-end me-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-1", children: "Invoice No*" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 52,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-1", children: "Invoice Date*" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 53,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-1", children: "Due Date*" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 54,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Customer No" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 55,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 51,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-dark", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-1", children: "0001" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 58,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-1", children: "24/08/2020" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 59,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-1", children: "Due on receipt" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 60,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "321456" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 61,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 57,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
        lineNumber: 50,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
        lineNumber: 49,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
      lineNumber: 39,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
      lineNumber: 66,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { md: 3, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "text-uppercase fs-7 mb-2", children: "Billed To" }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
        lineNumber: 69,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "Billto-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { children: "Supernova consultant" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 71,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "4747, Pearl Street" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 72,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Rainy day Drive" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 73,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Washington DC 42341" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 74,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "jampack_01@hencework.com" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 75,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
        lineNumber: 70,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
      lineNumber: 68,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
      lineNumber: 67,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "table-wrap mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Table_default, { bordered: true, responsive: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "thead-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Item" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 83,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-end", children: "Quantity" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 84,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-end", children: "Price" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 85,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-end", children: "Discount" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 86,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-end", children: "Amount" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 87,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
        lineNumber: 82,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
        lineNumber: 81,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "w-70", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { children: "Redesiging of agencyclick.com" }, void 0, false, {
              fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
              lineNumber: 93,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "This is my project description. if the line do not filt like the sentence is to big the area will start getting bigger" }, void 0, false, {
              fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
              lineNumber: 94,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 92,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "text-end text-dark", children: "8" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 96,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "w-15 text-end text-dark", children: "60.00" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 97,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "text-end text-dark", children: "5%" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 98,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "w-20 text-end text-dark", children: "$420.5" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 99,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 91,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "w-70", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { children: "Re-branding" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 103,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 102,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "text-end text-dark", children: "1" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 105,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "w-15 text-end text-dark", children: "150.00" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 106,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "text-end text-dark", children: "0%" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 107,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "w-20 text-end text-dark", children: "$140.5" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 108,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 101,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "w-70", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { children: "Social media marketing" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 112,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 111,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "text-end text-dark", children: "20" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 114,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "w-15 text-end text-dark", children: "30.00" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 115,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "text-end text-dark", children: "5%" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 116,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "w-20 text-end text-dark", children: "$540.5" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 117,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 110,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { colSpan: 2, rowSpan: 4, className: "border-0" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 120,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { colSpan: 2, children: "Subtotal" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 121,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "text-end text-dark", children: "$1101.0" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 122,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 119,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { colSpan: 2, children: "Item Discount" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 125,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "text-end text-dark", children: "$10.0" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 126,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 124,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { colSpan: 2, children: "Extra Discount" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 129,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "text-end text-dark", children: "$0" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 130,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 128,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { colSpan: 2, className: "text-dark border", children: "Total" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 133,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "text-end text-dark border", children: "$1101.0" }, void 0, false, {
            fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
            lineNumber: 134,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 132,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
        lineNumber: 90,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
      lineNumber: 80,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
      lineNumber: 79,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "mt-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { lg: 5, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { children: "Note to client" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 141,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: 'thank you for choosing Hencework for design services. If you need more assistance in future here is your discount coupon for future jobs. Just call us and mention the coupon code: "10-springhnc"' }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 142,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
        lineNumber: 140,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { lg: 7, className: "text-lg-end mt-lg-0 mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "mt-lg-7", children: "Katherine Zeta Jones" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 145,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Co-founder, Hencework" }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 146,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
        lineNumber: 144,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
      lineNumber: 139,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "separator separator-light mt-7" }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
      lineNumber: 149,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { md: 12, className: "col-md-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { children: "Terms & Conditions" }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
        lineNumber: 152,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", { className: "ps-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments." }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 154,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: "Please quote invoice number when remitting funds." }, void 0, false, {
          fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
          lineNumber: 155,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
        lineNumber: 153,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
      lineNumber: 151,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
      lineNumber: 150,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
    lineNumber: 30,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
    lineNumber: 29,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
    lineNumber: 28,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/invoices/invoice-preview/Body.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c = Body;
var Body_default = Body;
var _c;
$RefreshReg$(_c, "Body");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/invoices/invoice-preview/Header.jsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/invoices/invoice-preview/Header.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/invoices/invoice-preview/Header.jsx"
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex align-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { as: Link, to: "/apps/invoices/create-invoice", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(chevron_left_default, {}, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
        lineNumber: 42,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
        lineNumber: 41,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
        lineNumber: 40,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
        lineNumber: 39,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "v-separator d-sm-inline-block d-none" }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "#", className: "invoiceapp-title link-dark ms-1 ms-sm-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Template Preview" }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
        lineNumber: 48,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
        lineNumber: 47,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "invoice-options-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "soft-primary", as: Link, to: "/apps/invoices/create-invoice", className: "flex-shrink-0 d-md-inline-block d-none", children: "Start with Template" }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
        lineNumber: 52,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "v-separator d-md-inline-block d-none" }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
        lineNumber: 53,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none", onClick: () => dispatch({
        type: "top_nav_toggle"
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: states.layoutState.topNavCollapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(chevron_down_default, {}, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
        lineNumber: 60,
        columnNumber: 70
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(chevron_up_default, {}, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
        lineNumber: 60,
        columnNumber: 88
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
        lineNumber: 59,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
        lineNumber: 58,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
        lineNumber: 57,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
        lineNumber: 54,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
      lineNumber: 51,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: (0, import_classnames.default)("hk-sidebar-togglable", {
      "active": !show
    }), onClick: toggleSidebar }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
      lineNumber: 66,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/invoices/invoice-preview/Header.jsx",
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

// app/routes/apps/invoices/invoice-preview/route.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/invoices/invoice-preview/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/invoices/invoice-preview/route.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var PreviewInvoice = () => {
  _s2();
  const [showSidebar, setShowSidebar] = (0, import_react2.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: (0, import_classnames2.default)("invoiceapp-wrap", {
    "invoiceapp-sidebar-toggle": !showSidebar
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InvoiceAppSidebar_default, {}, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-preview/route.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "invoiceapp-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "invoiceapp-detail-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Header_default, { toggleSidebar: () => setShowSidebar(!showSidebar), show: showSidebar }, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/route.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Body_default, {}, void 0, false, {
        fileName: "app/routes/apps/invoices/invoice-preview/route.jsx",
        lineNumber: 38,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/invoice-preview/route.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/invoice-preview/route.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/invoices/invoice-preview/route.jsx",
    lineNumber: 31,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/invoices/invoice-preview/route.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s2(PreviewInvoice, "O0tqdxfw1ryb5O1kO6vD3OVdeTk=");
_c3 = PreviewInvoice;
var route_default = PreviewInvoice;
var _c3;
$RefreshReg$(_c3, "PreviewInvoice");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/invoices/invoice-preview/route-7SBQWS4A.js.map
