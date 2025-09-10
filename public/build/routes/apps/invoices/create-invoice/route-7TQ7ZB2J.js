import {
  InvoiceAppSidebar_default
} from "/build/_shared/chunk-ILTOGQWW.js";
import {
  HkInlineEdit_default
} from "/build/_shared/chunk-T524GDL3.js";
import {
  nanoid
} from "/build/_shared/chunk-PUI2DGTL.js";
import {
  HkDropZone_default
} from "/build/_shared/chunk-OVUIRAHX.js";
import {
  HkTooltip_default
} from "/build/_shared/chunk-5BLZWIUZ.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  chevron_down_default,
  chevron_up_default,
  sliders_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  ButtonGroup_default,
  Button_default,
  Card_default,
  Col_default,
  Collapse_default,
  Container_default,
  Dropdown_default,
  Form_default,
  InputGroup_default,
  Modal_default,
  Row_default,
  Table_default
} from "/build/_shared/chunk-KBRVI47E.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-HFWHD4VB.js";
import {
  require_classnames
} from "/build/_shared/chunk-CQ7UJNRQ.js";
import {
  useGlobalStateContext
} from "/build/_shared/chunk-DIOLN5GK.js";
import "/build/_shared/chunk-B57YWHU6.js";
import "/build/_shared/chunk-WUHA5P4Y.js";
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
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/apps/invoices/create-invoice/route.jsx
var import_react6 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// app/routes/apps/invoices/create-invoice/Header.jsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/invoices/create-invoice/Header.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/invoices/create-invoice/Header.jsx"
  );
  import.meta.hot.lastModified = "1732600247950.815";
}
var Header = ({
  toggleSidebar,
  show,
  handleSettings
}) => {
  _s();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "invoice-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "invoiceapp-title link-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Standard Template" }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
        lineNumber: 42,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
        lineNumber: 41,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Simplicity Template" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
          lineNumber: 45,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Essential Template" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
          lineNumber: 46,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Classic Template" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
          lineNumber: 47,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Pro Forma Template" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
          lineNumber: 48,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Trade Template" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
          lineNumber: 49,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Interim Template" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
          lineNumber: 50,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Primary Template" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
          lineNumber: 51,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Matt Opel Template" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
          lineNumber: 52,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Freelancer Template" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
          lineNumber: 53,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
        lineNumber: 44,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
      lineNumber: 40,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "invoice-options-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover invoiceapp-setting-toggle active me-2", onClick: handleSettings, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(sliders_default, {}, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
        lineNumber: 61,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
        lineNumber: 60,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
        lineNumber: 59,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: Link, to: "/apps/invoices/invoice-preview", variant: "outline-secondary", className: "flex-shrink-0 d-md-inline-block d-none", children: "Preview" }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
        lineNumber: 65,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: Link, to: "#", variant: "primary", className: "mx-2 d-sm-inline-block d-none", children: "save" }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
        lineNumber: 66,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: Link, to: "#", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none", onClick: () => dispatch({
        type: "top_nav_toggle"
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: states.layoutState.topNavCollapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_down_default, {}, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
        lineNumber: 73,
        columnNumber: 70
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_up_default, {}, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
        lineNumber: 73,
        columnNumber: 88
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
        lineNumber: 72,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
        lineNumber: 71,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
        lineNumber: 70,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
        lineNumber: 67,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
      lineNumber: 57,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("hk-sidebar-togglable", {
      "active": !show
    }), onClick: toggleSidebar }, void 0, false, {
      fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
      lineNumber: 79,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/invoices/create-invoice/Header.jsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
};
_s(Header, "OVdtiISsix2HOQFhIOw6MKqd+SU=", false, function() {
  return [useGlobalStateContext];
});
_c = Header;
var Header_default = Header;
var _c;
$RefreshReg$(_c, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/invoices/create-invoice/Body.jsx
var import_react3 = __toESM(require_react(), 1);

// app/routes/apps/invoices/create-invoice/EditInfo.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/invoices/create-invoice/EditInfo.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/invoices/create-invoice/EditInfo.jsx"
  );
  import.meta.hot.lastModified = "1732600247950.21";
}
var EditInfo = ({
  show,
  hide
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default, { show, onHide: hide, centered: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: hide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
        lineNumber: 29,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h5", { className: "mb-5", children: "Edit Info" }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { className: "gx-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { sm: 12, as: Form_default.Group, className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: "Company Name" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
            lineNumber: 35,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "Hencework" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
            lineNumber: 36,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
          lineNumber: 34,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { sm: 12, as: Form_default.Group, className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: "Email ID" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
            lineNumber: 39,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "email", defaultValue: "jampack_01@hencework.com" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
            lineNumber: 40,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
          lineNumber: 38,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { sm: 12, as: Form_default.Group, className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: "Address Line One" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
            lineNumber: 43,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "4747, Pearl Street Rainy day Drive" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
            lineNumber: 44,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
          lineNumber: 42,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { sm: 12, as: Form_default.Group, className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: "Address Line Two" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
            lineNumber: 47,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "Washington DC 42341" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
            lineNumber: 48,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
          lineNumber: 46,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
        lineNumber: 33,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
        lineNumber: 32,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Footer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "secondary", onClick: hide, children: "Discard" }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "primary", onClick: hide, children: "Add" }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
      lineNumber: 53,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/invoices/create-invoice/EditInfo.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c2 = EditInfo;
var EditInfo_default = EditInfo;
var _c2;
$RefreshReg$(_c2, "EditInfo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/invoices/create-invoice/AddNewClient.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/invoices/create-invoice/AddNewClient.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/invoices/create-invoice/AddNewClient.jsx"
  );
  import.meta.hot.lastModified = "1732600247948.729";
}
var AddNewClient = ({
  show,
  hide
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal_default, { show, onHide: hide, centered: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: hide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
        lineNumber: 29,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h5", { className: "mb-5", children: "Billed To" }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Row_default, { className: "gx-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { sm: 12, as: Form_default.Group, className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Label, { children: "Company Name" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
            lineNumber: 35,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "Supernova Consultants" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
            lineNumber: 36,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
          lineNumber: 34,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { sm: 12, as: Form_default.Group, className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Label, { children: "Email ID" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
            lineNumber: 39,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Control, { type: "email", defaultValue: "thompson_peter@super.co" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
            lineNumber: 40,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
          lineNumber: 38,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { sm: 12, as: Form_default.Group, className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Label, { children: "Address Line One" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
            lineNumber: 43,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "Sycamore Street" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
            lineNumber: 44,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
          lineNumber: 42,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { sm: 12, as: Form_default.Group, className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Label, { children: "Address Line Two" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
            lineNumber: 47,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "San Antonio Valley, CA 34668" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
            lineNumber: 48,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
          lineNumber: 46,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
        lineNumber: 33,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
        lineNumber: 32,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal_default.Footer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "secondary", onClick: hide, children: "Discard" }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "primary", onClick: hide, children: "Add" }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
      lineNumber: 53,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/invoices/create-invoice/AddNewClient.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c3 = AddNewClient;
var AddNewClient_default = AddNewClient;
var _c3;
$RefreshReg$(_c3, "AddNewClient");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/@hk-components/@hk-collapse/@hk-simple-collapse.jsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/@hk-components/@hk-collapse/@hk-simple-collapse.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-collapse/@hk-simple-collapse.jsx"
  );
  import.meta.hot.lastModified = "1732600247581.725";
}
var HkSimpleCollapse = ({
  children,
  title,
  collapseIcon,
  targetId,
  bsPrefix,
  as,
  headerClass,
  bodyClass,
  wrapperClass,
  btnClasses,
  collapsed,
  ...rest
}) => {
  _s2();
  const [show, setShow] = (0, import_react2.useState)(!collapsed);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: wrapperClass, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { bsPrefix, as, "aria-controls": targetId, "aria-expanded": show, onClick: () => setShow(!show), className: headerClass, ...rest, children: title }, void 0, false, {
      fileName: "app/@hk-components/@hk-collapse/@hk-simple-collapse.jsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Collapse_default, { in: show, children }, void 0, false, {
      fileName: "app/@hk-components/@hk-collapse/@hk-simple-collapse.jsx",
      lineNumber: 44,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/@hk-components/@hk-collapse/@hk-simple-collapse.jsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_s2(HkSimpleCollapse, "ZtjHTm27CUnZi8PFf2lgIJSKoP0=");
_c4 = HkSimpleCollapse;
var hk_simple_collapse_default = HkSimpleCollapse;
var _c4;
$RefreshReg$(_c4, "HkSimpleCollapse");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/invoices/create-invoice/Body.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/invoices/create-invoice/Body.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/invoices/create-invoice/Body.jsx"
  );
  import.meta.hot.lastModified = "1732600247949.818";
}
var Body = () => {
  _s3();
  const [editInfo, setEditInfo] = (0, import_react3.useState)(false);
  const [addNewClient, setAddNewClient] = (0, import_react3.useState)(false);
  const [subTotal, setSubTotal] = (0, import_react3.useState)(0);
  const [totalDiscount, setTotalDiscount] = (0, import_react3.useState)(0);
  const [extraDiscount, setExtraDiscount] = (0, import_react3.useState)({
    discValue: 0,
    discType: "per"
  });
  const [grossTotal, setGrossTotal] = (0, import_react3.useState)(0);
  const [itemList, setItemList] = (0, import_react3.useState)([{
    id: 0,
    title: "Redesiging of agencyclick.com",
    quantity: 1,
    price: 150,
    discount: 2,
    discountType: "per",
    totalPrice: 147,
    description: "This is my project description. if the line do not filt like the sentence is to big the area will start getting bigger"
  }]);
  const [termAndConditions, setTermAndConditions] = (0, import_react3.useState)([{
    id: 0,
    conditon: "Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments."
  }, {
    id: 1,
    conditon: "Please quote invoice number when remitting funds."
  }]);
  const addItem = (event) => {
    event.preventDefault();
    const newItem = {
      id: nanoid(),
      title: "",
      quantity: 0,
      price: 0,
      discount: 0,
      discountType: "per",
      totalPrice: 0,
      description: ""
    };
    setItemList([...itemList, newItem]);
  };
  const updateItemList = (index) => (e) => {
    let newArr = [...itemList];
    if (e.target.name === "title") {
      newArr[index].title = e.target.value;
    } else if (e.target.name === "quantity") {
      newArr[index].quantity = e.target.value;
    } else if (e.target.name === "price") {
      newArr[index].price = e.target.value;
    } else if (e.target.name === "discount") {
      newArr[index].discount = e.target.value;
    } else if (e.target.name === "discountType") {
      newArr[index].discountType = e.target.value;
    } else if (e.target.name === "description") {
      newArr[index].description = e.target.value;
    }
    ;
    setItemList(newArr);
    if (newArr[index].discountType === "per") {
      let disc = itemList[index].price - itemList[index].price * itemList[index].discount / 100;
      newArr[index].totalPrice = newArr[index].quantity * disc;
    } else {
      let disc = itemList[index].price - itemList[index].discount;
      newArr[index].totalPrice = newArr[index].quantity * disc;
    }
  };
  const deleteItem = (itemId) => {
    const newList = [...itemList];
    const index = itemList.findIndex((item) => item.id === itemId);
    newList.splice(index, 1);
    setItemList(newList);
  };
  (0, import_react3.useEffect)(() => {
    const CountSubtotal = itemList.reduce((ttl, datas) => ttl = ttl + datas.totalPrice, 0);
    setSubTotal(CountSubtotal);
    const disct = itemList.reduce((ttl, datas) => ttl = ttl + parseInt(datas.discount), 0);
    setTotalDiscount(disct);
    if (extraDiscount.discType === "per") {
      setGrossTotal(subTotal - subTotal * extraDiscount.discValue / 100);
    } else {
      setGrossTotal(subTotal - extraDiscount.discValue);
    }
  }, [itemList, subTotal, extraDiscount]);
  const updateTC = (index) => (e) => {
    let updatedArr = [...termAndConditions];
    updatedArr[index] = e.target.value;
    setTermAndConditions(updatedArr);
  };
  const addNewConditon = (event) => {
    event.preventDefault();
    const newCondition = {
      id: nanoid(),
      conditon: ""
    };
    setTermAndConditions([...termAndConditions, newCondition]);
  };
  const deleteCondition = (itemId) => {
    let newConditions = [...termAndConditions];
    let index = termAndConditions.findIndex((item) => item.id === itemId);
    newConditions.splice(index, 1);
    setTermAndConditions(newConditions);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "invoice-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Container_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "create-invoice-wrap mt-xxl-5 p-md-5 p-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Row_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { lg: 3, md: 5, className: "order-md-0 order-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HkDropZone_default, { children: "Upload Logo" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 160,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 159,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { lg: 4, md: 4, className: "offset-lg-5 offset-md-3 mb-md-0 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "d-flex align-items-center justify-content-md-end mb-0 inline-editable-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HkInlineEdit_default, { as: "h2", id: "editable1", value: "Invoice", left: true }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 166,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 165,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 164,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 158,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Row_default, { className: "mt-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { xxl: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(hk_simple_collapse_default, { bsPrefix: "a", href: "#", targetId: "address_collpase", collapsed: false, title: "- Your business information", headerClass: "d-inline-block mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { id: "address_collpase", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "address-wrap", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h6", { children: "Hencework" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 176,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "4747, Pearl Street" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 177,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Rainy Day Drive, " }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 178,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Washington DC 42156" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 179,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "jampack_01@hencework.com" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 180,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 175,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "#", className: "d-inline-flex align-items-center mt-2", onClick: () => setEditInfo(!editInfo), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-pencil-line me-1" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 183,
              columnNumber: 49
            }, this),
            " Edit Info"
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 182,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 174,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 173,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 172,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { xxl: 4, className: "offset-xxl-5 mt-xxl-0 mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Row_default, { className: "gx-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { lg: 6, as: Form_default.Group, className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { defaultValue: "Invoice No*", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 192,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 191,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { lg: 6, as: Form_default.Group, className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { defaultValue: "0001", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 195,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 194,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 190,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Row_default, { className: "gx-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { lg: 6, as: Form_default.Group, className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { defaultValue: "Invoice Date*", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 200,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 199,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { lg: 6, as: Form_default.Group, className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { name: "single-date-pick", defaultValue: "24/2/2020", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 203,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 202,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 198,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Row_default, { className: "gx-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { lg: 6, as: Form_default.Group, className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { defaultValue: "Due date*", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 208,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 207,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { lg: 6, as: Form_default.Group, className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Select, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 0, children: "Due on Reciept" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 212,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 1, children: "One" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 213,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 2, children: "Two" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 214,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 3, children: "Three" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 215,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 211,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 210,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 206,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Row_default, { className: "gx-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { lg: 6, as: Form_default.Group, className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { defaultValue: "Customer No", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 221,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 220,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { lg: 6, as: Form_default.Group, className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { defaultValue: 32321, type: "text" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 224,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 223,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 219,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "repeater", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { "data-repeater-list": "category-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Row_default, { className: "gx-3", "data-repeater-item": true, style: {
              display: "none"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { lg: 6, as: Form_default.Group, className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { placeholder: "Label", type: "text" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 233,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 232,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { lg: 6, as: Form_default.Group, className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { placeholder: "Value", type: "text" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 236,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 235,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 229,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 228,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "#", "data-repeater-create": true, className: "d-inline-flex align-items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-add-box-line me-1" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 241,
                columnNumber: 49
              }, this),
              " Add more fields"
            ] }, void 0, true, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 240,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 227,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 189,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 188,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 171,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 247,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Row_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { xxl: 3, className: "mb-xxl-0 mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h6", { children: "Billed To" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 250,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Select, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 0, children: "Supernova consultant" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 254,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 1, children: "One" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 255,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 2, children: "Two" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 256,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 3, children: "Three" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 257,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 253,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 252,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "#", className: "d-inline-flex align-items-center", onClick: () => setAddNewClient(!addNewClient), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-add-box-line me-1" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 261,
                columnNumber: 45
              }, this),
              " Add new client"
            ] }, void 0, true, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 260,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 251,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "Billto-wrap mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h6", { children: "Supernova consultant" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 265,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Sycamore Street" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 266,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "San Antonio Valley," }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 267,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "CA 34668" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 268,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "thompson_peter@super.co" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 269,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 264,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { className: "d-inline-flex align-items-center mt-2", "data-bs-toggle": "modal", "data-bs-target": "#billed_info", href: "#some", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-pencil-line me-1" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 272,
              columnNumber: 41
            }, this),
            " Edit Info"
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 271,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 249,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { xxl: 4, className: "offset-xxl-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h6", { children: "Ship To" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 276,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "repeater", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(hk_simple_collapse_default, { bsPrefix: "a", href: "#", targetId: "shipto_collpase", collapsed: true, title: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-add-box-line me-1" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 278,
              columnNumber: 134
            }, this),
            " Add shipping address"
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 278,
            columnNumber: 132
          }, this), headerClass: "d-inline-flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { id: "shipto_collpase", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Row_default, { className: "gx-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-sm-12 form-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { placeholder: "Client business name", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 282,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 281,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-sm-12 form-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { placeholder: "Address", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 285,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 284,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { lg: 6, as: Form_default.Group, className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { placeholder: "City", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 288,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 287,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { lg: 6, as: Form_default.Group, className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { placeholder: "Postal Code", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 291,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 290,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-sm-12 form-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { placeholder: "State", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 294,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 293,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-sm-12 form-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { placeholder: "Country", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 297,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 296,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-sm-12 form-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { placeholder: "GSTIN Enter GSTIN here(optional)", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 300,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 299,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 280,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 279,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 278,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 277,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 275,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 248,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Row_default, { className: "mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { sm: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { className: "form-inline p-3 bg-grey-light-5 rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "row gx-3 align-items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-xl-auto mb-xl-0 mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { className: "form-label mb-xl-0", children: "Filters" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 313,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 312,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-xl-auto mb-xl-0 mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("select", { className: "form-select", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 0, children: "Number format" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 317,
            columnNumber: 53
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 1, children: "One" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 318,
            columnNumber: 53
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 2, children: "Two" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 319,
            columnNumber: 53
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 3, children: "Three" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 320,
            columnNumber: 53
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 316,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 315,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-xl-auto mb-xl-0 mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("select", { className: "form-select", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 0, children: "Add/Remove columns" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 325,
            columnNumber: 53
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 1, children: "One" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 326,
            columnNumber: 53
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 2, children: "Two" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 327,
            columnNumber: 53
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 3, children: "Three" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 328,
            columnNumber: 53
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 324,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 323,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "col-xl-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("select", { className: "form-select", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 0, children: "US Dollar ($ USD)" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 333,
            columnNumber: 53
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 1, children: "One" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 334,
            columnNumber: 53
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 2, children: "Two" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 335,
            columnNumber: 53
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 3, children: "Three" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 336,
            columnNumber: 53
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 332,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 331,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 311,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 310,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 309,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 308,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "table-wrap mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "invoice-table-wrap", children: [
        itemList.map((items, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Table_default, { bordered: true, className: "invoice-table", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("thead", { className: "thead-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { children: "Item" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 348,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { children: "Quantity" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 349,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { children: "Price" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 350,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { colSpan: 2, children: "Discount" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 351,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("th", { children: "Amount" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 352,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 347,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 346,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tbody", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { className: "table-row-gap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", {}, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 356,
              columnNumber: 79
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 356,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "w-70 rounded-top-start border-end-0 border-bottom-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { type: "text", name: "title", value: items.title, onChange: updateItemList(index) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 359,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 358,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "border-end-0 border-bottom-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { type: "text", name: "quantity", className: "qty", value: items.quantity, onChange: updateItemList(index) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 362,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 361,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "w-15 border-end-0 border-bottom-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { type: "text", name: "price", className: "price", value: items.price, onChange: updateItemList(index) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 365,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 364,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "border-end-0 border-bottom-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { type: "text", name: "discount", className: "discount w-60p", value: items.discount, onChange: updateItemList(index) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 368,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 367,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "border-end-0 border-bottom-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Select, { name: "discountType", value: items.discountType, onChange: updateItemList(index), className: "disc-type w-70p", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "per", children: "%" }, void 0, false, {
                  fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                  lineNumber: 372,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "cur", children: "\u20B9" }, void 0, false, {
                  fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                  lineNumber: 373,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 371,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 370,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "w-20  rounded-end  bg-primary-light-5 close-over position-relative", rowSpan: 2, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { type: "text", className: "bg-transparent border-0 p-0 total", value: items.totalPrice, readOnly: true }, void 0, false, {
                  fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                  lineNumber: 376,
                  columnNumber: 148
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { bsPrefix: "btn-close", className: "close-row", onClick: () => deleteItem(items.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
                  fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                  lineNumber: 378,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                  lineNumber: 377,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 376,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 357,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { colSpan: 5, className: "rounded-bottom-start border-end-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { type: "text", name: "description", value: items.description, onChange: updateItemList(index) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 383,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 382,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 381,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 355,
            columnNumber: 45
          }, this)
        ] }, index, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 345,
          columnNumber: 69
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "#", className: "d-inline-flex align-items-center add-new-row", onClick: addItem, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-add-box-line me-1" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 389,
            columnNumber: 41
          }, this),
          " Add new item"
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 388,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 344,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 343,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Row_default, { className: "justify-content-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { xxl: 6, className: "mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "table-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Table_default, { responsive: true, bordered: true, className: "subtotal-table", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tbody", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { colSpan: 3, className: "rounded-top-start border-end-0 border-bottom-0", children: "Subtotal" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 399,
            columnNumber: 53
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "rounded-top-end border-bottom-0 w-30 bg-primary-light-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { type: "text", className: "bg-transparent border-0 p-0 gross-total", value: subTotal, readOnly: true }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 401,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 400,
            columnNumber: 53
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 398,
          columnNumber: 49
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { colSpan: 3, className: "border-end-0 border-bottom-0", children: "Item Discount" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 405,
            columnNumber: 53
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "border-bottom-0  bg-primary-light-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { type: "text", className: "bg-transparent border-0 p-0 gross-discount", value: totalDiscount, readOnly: true }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 407,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 406,
            columnNumber: 53
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 404,
          columnNumber: 49
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "border-end-0 border-bottom-0", children: "Extra Discount" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 411,
            columnNumber: 53
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "border-end-0 border-bottom-0 w-25", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { type: "text", className: "extdiscount", name: "discValue", value: extraDiscount.discValue, onChange: (e) => setExtraDiscount({
            ...extraDiscount,
            [e.target.name]: e.target.value
          }) }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 413,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 412,
            columnNumber: 53
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "border-end-0 border-bottom-0 w-25", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Select, { className: "form-select extra-disc-type", name: "discType", value: extraDiscount.discType, onChange: (e) => setExtraDiscount({
            ...extraDiscount,
            [e.target.name]: e.target.value
          }), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "per", children: "%" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 423,
              columnNumber: 61
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "cur", children: "\u20B9" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 424,
              columnNumber: 61
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 419,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 418,
            columnNumber: 53
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "border-bottom-0  bg-primary-light-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { type: "text", className: "bg-transparent border-0 p-0 extdiscount-read", value: extraDiscount.discValue, readOnly: true }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 428,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 427,
            columnNumber: 53
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 410,
          columnNumber: 49
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { colSpan: 3, className: "rounded-bottom-start border-end-0 bg-primary-light-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-dark", children: "Total" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 433,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 432,
            columnNumber: 53
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("td", { className: "rounded-bottom-end  bg-primary-light-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { type: "text", className: "bg-transparent border-0 p-0 totalPrice", value: grossTotal, readOnly: true }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 436,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 435,
            columnNumber: 53
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 431,
          columnNumber: 49
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 397,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 396,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 395,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 394,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 393,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Row_default, { className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { xxl: 5, className: "order-2 order-xxl-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Group, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "form-label-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Label, { children: "Note to client" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 448,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("small", { className: "text-muted", children: "1400" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 449,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 447,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { as: "textarea", rows: 6, placeholder: "Write an internal note", defaultValue: "" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 451,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { variant: "outline-light", className: "mt-2", children: "Add Note" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 452,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 446,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 445,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { xxl: 4, className: "offset-xxl-3 text-xxl-end mb-xxl-0 mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "btn btn-light btn-link text-primary btn-file bg-transparent p-0 border-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "d-inline-flex align-items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-add-box-line me-1" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 458,
              columnNumber: 45
            }, this),
            " Add signature (Optional)",
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "file", className: "upload" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 459,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 457,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 456,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(hk_simple_collapse_default, { bsPrefix: "a", href: "#", targetId: "label_collpase", collapsed: false, title: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-add-box-line me-1" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 462,
              columnNumber: 130
            }, this),
            " Add Name & Label"
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 462,
            columnNumber: 128
          }, this), headerClass: "d-inline-flex align-items-center mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-5", id: "label_collpase", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Group, { className: "form-group close-over", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { type: "text", className: "form-control", defaultValue: "Katherine Zeta Jones" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 465,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { bsPrefix: "btn-close", className: "close-input", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 467,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 466,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 464,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Group, { className: "form-group close-over", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { type: "text", className: "form-control", defaultValue: "Co-founder Hencework" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 471,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { bsPrefix: "btn-close", className: "close-input", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 473,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
                lineNumber: 472,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
              lineNumber: 470,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 463,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 462,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 455,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 444,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 499,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h6", { className: "mb-4", children: "Terms & Condition" }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 500,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "repeater", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ol", { className: "ps-3", "data-repeater-list": "category-group", children: termAndConditions.map((datas, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "form-group close-over", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { type: "text", name: "conditon", value: datas.conditon, onChange: updateTC(index) }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 504,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { bsPrefix: "btn-close", className: "close-input", onClick: () => deleteCondition(datas.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 506,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 505,
            columnNumber: 49
          }, this)
        ] }, index, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 503,
          columnNumber: 78
        }, this)) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 502,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "#", className: "d-inline-flex align-items-center", onClick: addNewConditon, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-add-box-line me-1" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 512,
            columnNumber: 37
          }, this),
          " Add New Term Row"
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 511,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 501,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 515,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "btn btn-light btn-file mb-4", children: [
        "Attach files",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { type: "file", className: "upload" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 518,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 516,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(hk_simple_collapse_default, { bsPrefix: "a", href: "#", targetId: "memo_collpase", collapsed: false, title: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-add-box-line me-1" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 521,
          columnNumber: 121
        }, this),
        " Add a personal memo"
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 521,
        columnNumber: 119
      }, this), headerClass: "d-inline-flex align-items-center my-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Row_default, { id: "memo_collpase", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { xxl: 5, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "form-label-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Label, { children: "Personal Memo" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 526,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("small", { className: "text-muted", children: "1400" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
            lineNumber: 527,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 525,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { as: "textarea", rows: 6, placeholder: "Write an internal note", defaultValue: "" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 529,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { variant: "outline-light", className: "mt-2", children: "Add Note" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
          lineNumber: 530,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 524,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 523,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 522,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
        lineNumber: 521,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
      lineNumber: 157,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
      lineNumber: 156,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
      lineNumber: 155,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
      lineNumber: 154,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(EditInfo_default, { show: editInfo, hide: () => setEditInfo(!editInfo) }, void 0, false, {
      fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
      lineNumber: 541,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AddNewClient_default, { show: addNewClient, hide: () => setAddNewClient(!addNewClient) }, void 0, false, {
      fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
      lineNumber: 544,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/invoices/create-invoice/Body.jsx",
    lineNumber: 153,
    columnNumber: 10
  }, this);
};
_s3(Body, "bIJ3Pu8qud+G8k2qIBWwCRMIcJo=");
_c5 = Body;
var Body_default = Body;
var _c5;
$RefreshReg$(_c5, "Body");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/invoices/create-invoice/SettingPannel.jsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/invoices/create-invoice/SettingPannel.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/invoices/create-invoice/SettingPannel.jsx"
  );
  import.meta.hot.lastModified = "1732600247951.68";
}
var SettingPannel = ({
  onHide
}) => {
  _s4();
  const [accentClr, setAccentClr] = (0, import_react5.useState)("#007D88");
  const [headingClr, setHeadingClr] = (0, import_react5.useState)("#1F2327");
  const [textClr, setTextClr] = (0, import_react5.useState)("#646A71");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "invoice-settings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { bsPrefix: "btn-close", className: "info-close", onClick: onHide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
      fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
      lineNumber: 35,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "collapse-simple mt-lg-0 mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { role: "button", "data-bs-toggle": "collapse", href: "#currency", "aria-expanded": "true", children: "Currency" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 40,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 39,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { id: "currency", className: "collapse show", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Group, { className: "mt-2 mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Label, { children: "Currency Symbol" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
            lineNumber: 44,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Select, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: 0, children: "US Dollar ($ USD)" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
              lineNumber: 46,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: 1, children: "IND Rupees (\u20B9 USD)" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
              lineNumber: 47,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
            lineNumber: 45,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 43,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 42,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
        lineNumber: 38,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { role: "button", "data-bs-toggle": "collapse", href: "#typography", "aria-expanded": "true", children: "Typography" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 54,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 53,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { id: "typography", className: "collapse show", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "form-group mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Label, { children: "Font" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
              lineNumber: 58,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Select, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: 0, children: "Arial" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 60,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: 1, children: "Times New Roman" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 61,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
              lineNumber: 59,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
            lineNumber: 57,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Label, { children: "Size" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
              lineNumber: 65,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Select, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: 0, children: "16px" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 67,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: 1, children: "20px" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 68,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("option", { value: 2, children: "24px" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 69,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
              lineNumber: 66,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
            lineNumber: 64,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Label, { children: "Align" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
              lineNumber: 73,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ButtonGroup_default, { role: "group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { variant: "outline-secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { className: "fa fa-align-left text-primary" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 76,
                columnNumber: 77
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 76,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { variant: "outline-secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { className: "fa fa-align-center" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 77,
                columnNumber: 77
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 77,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { variant: "outline-secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { className: "fa fa-align-right" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 78,
                columnNumber: 77
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 78,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { variant: "outline-secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("i", { className: "fa fa-align-justify" }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 79,
                columnNumber: 77
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 79,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
              lineNumber: 75,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
              lineNumber: 74,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
            lineNumber: 72,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 56,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
        lineNumber: 52,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { role: "button", "data-bs-toggle": "collapse", href: "#color", "aria-expanded": "true", children: "Color" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 87,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 86,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { id: "color", className: "collapse show", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "form-group mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Label, { children: "Accent" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
              lineNumber: 91,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(InputGroup_default, { className: "input-group color-picker", title: "Using horizontal option", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(InputGroup_default.Text, { className: "colorpicker-input-addon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Control, { type: "color", id: "exampleColorInput1", title: "Choose your color", value: accentClr, onChange: (e) => setAccentClr(e.target.value) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 94,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 93,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Control, { type: "text", value: accentClr, onChange: () => setAccentClr(accentClr) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 96,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
              lineNumber: 92,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
            lineNumber: 90,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Label, { children: "Heading Color" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
              lineNumber: 100,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(InputGroup_default, { className: "input-group color-picker", title: "Using horizontal option", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(InputGroup_default.Text, { className: "colorpicker-input-addon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Control, { type: "color", id: "exampleColorInput2", title: "Choose your color", value: headingClr, onChange: (e) => setHeadingClr(e.target.value) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 103,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 102,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Control, { type: "text", value: headingClr, onChange: () => setHeadingClr(headingClr) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 105,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
              lineNumber: 101,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
            lineNumber: 99,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Label, { children: "Text Color" }, void 0, false, {
              fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
              lineNumber: 109,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(InputGroup_default, { className: "input-group color-picker", title: "Using horizontal option", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(InputGroup_default.Text, { className: "colorpicker-input-addon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Control, { type: "color", id: "exampleColorInput3", title: "Choose your color", value: textClr, onChange: (e) => setTextClr(e.target.value) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 112,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 111,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Control, { type: "text", value: textClr, onChange: () => setTextClr(textClr) }, void 0, false, {
                fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
                lineNumber: 114,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
              lineNumber: 110,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
            lineNumber: 108,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 89,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
        lineNumber: 85,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { role: "button", "data-bs-toggle": "collapse", href: "#action", "aria-expanded": "true", children: "Actions" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 121,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 120,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { id: "action", className: "collapse show", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Group, { className: "mt-2 mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form_default.Label, { children: "Schedule send" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
            lineNumber: 125,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "text", className: "form-control" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
            lineNumber: 126,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 124,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 123,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
        lineNumber: 119,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { role: "button", "data-bs-toggle": "collapse", href: "#option", "aria-expanded": "true", children: "Options" }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 132,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 131,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { id: "option", className: "collapse show", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "button-list", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { variant: "light", className: "btn-block", children: "Get Link" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
            lineNumber: 136,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { variant: "light", className: "btn-block", children: "Download Invoice" }, void 0, false, {
            fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
            lineNumber: 137,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 135,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
          lineNumber: 134,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
        lineNumber: 130,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
      lineNumber: 37,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
    lineNumber: 33,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/invoices/create-invoice/SettingPannel.jsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_s4(SettingPannel, "SOtfvxx4cqp5lSeKifOWD0kQolE=");
_c6 = SettingPannel;
var SettingPannel_default = SettingPannel;
var _c6;
$RefreshReg$(_c6, "SettingPannel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/invoices/create-invoice/route.jsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/invoices/create-invoice/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/invoices/create-invoice/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247952.111";
}
var Invoices = () => {
  _s5();
  const [showSidebar, setShowSidebar] = (0, import_react6.useState)(true);
  const [openSettingPannel, setOpenSettingPannel] = (0, import_react6.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: (0, import_classnames2.default)("invoiceapp-wrap", {
    "invoiceapp-sidebar-toggle": !showSidebar
  }, {
    "invoiceapp-setting-active": openSettingPannel
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(InvoiceAppSidebar_default, {}, void 0, false, {
      fileName: "app/routes/apps/invoices/create-invoice/route.jsx",
      lineNumber: 38,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "invoiceapp-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "invoiceapp-detail-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Header_default, { toggleSidebar: () => setShowSidebar(!showSidebar), show: showSidebar, handleSettings: () => setOpenSettingPannel(!openSettingPannel) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/route.jsx",
        lineNumber: 41,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Body_default, {}, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/route.jsx",
        lineNumber: 42,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SettingPannel_default, { onHide: () => setOpenSettingPannel(false) }, void 0, false, {
        fileName: "app/routes/apps/invoices/create-invoice/route.jsx",
        lineNumber: 43,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/invoices/create-invoice/route.jsx",
      lineNumber: 40,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/invoices/create-invoice/route.jsx",
      lineNumber: 39,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/invoices/create-invoice/route.jsx",
    lineNumber: 33,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/invoices/create-invoice/route.jsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_s5(Invoices, "l0wl/2Qhja93wMRa2tFBSlPYNiU=");
_c7 = Invoices;
var route_default = Invoices;
var _c7;
$RefreshReg$(_c7, "Invoices");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/invoices/create-invoice/route-7TQ7ZB2J.js.map
