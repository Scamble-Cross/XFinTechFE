import {
  hk_avatar_uploader_default
} from "/build/_shared/chunk-35NP6KP5.js";
import {
  require_dist
} from "/build/_shared/chunk-RF2NSX3W.js";
import {
  ContactAppSidebar_default
} from "/build/_shared/chunk-LXYVPAND.js";
import {
  hk_tags_default
} from "/build/_shared/chunk-EGIWPWVU.js";
import "/build/_shared/chunk-CXWPXLC3.js";
import {
  faBehance,
  faDropbox,
  faGithub,
  faGoogleDrive
} from "/build/_shared/chunk-GJLLTWNM.js";
import {
  FontAwesomeIcon
} from "/build/_shared/chunk-JPGC5R3S.js";
import "/build/_shared/chunk-YWRMJW47.js";
import {
  avatar2_default
} from "/build/_shared/chunk-LLX7VWLD.js";
import {
  HkTooltip_default
} from "/build/_shared/chunk-NYEYMOIV.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  activity_default,
  check_square_default,
  chevron_down_default,
  chevron_left_default,
  chevron_right_default,
  chevron_up_default,
  clock_default,
  edit_2_default,
  edit_3_default,
  heart_default,
  mail_default,
  phone_default,
  plus_default,
  shield_default,
  trash_default,
  upload_default,
  video_default,
  zap_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import {
  useGlobalStateContext
} from "/build/_shared/chunk-3LFZEH5W.js";
import "/build/_shared/chunk-B57YWHU6.js";
import "/build/_shared/chunk-WUHA5P4Y.js";
import {
  Link
} from "/build/_shared/chunk-DKEEJ4HZ.js";
import "/build/_shared/chunk-BVOHG2V5.js";
import {
  Badge_default,
  Button_default,
  Card_default,
  Col_default,
  Dropdown_default,
  Form_default,
  Modal_default,
  Nav_default,
  Row_default,
  Tab_default
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

// app/routes/apps/contact/edit-contact/route.jsx
var import_react3 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// app/routes/apps/contact/edit-contact/EditContactBody.jsx
var import_react2 = __toESM(require_react(), 1);
var import_react_simple_star_rating = __toESM(require_dist(), 1);

// app/routes/apps/contact/edit-contact/ProfileInfo.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/contact/edit-contact/ProfileInfo.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/contact/edit-contact/ProfileInfo.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var ProfileInfo = ({
  show,
  hide
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { show, onHide: hide, size: "lg", centered: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Header, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Title, { as: "h6", children: "Profile Information" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: hide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
        lineNumber: 30,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
        lineNumber: 29,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "First Name" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
            lineNumber: 38,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "Mandaline", placeholder: "First Name", name: "name" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
            lineNumber: 39,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
          lineNumber: 37,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
          lineNumber: 36,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Last Name" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
            lineNumber: 44,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "Shane", placeholder: "Last Name", name: "lastname" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
            lineNumber: 45,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
          lineNumber: 43,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
          lineNumber: 42,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
        lineNumber: 35,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Email ID" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
            lineNumber: 52,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "email", defaultValue: "contct@hencework.com", placeholder: "Email Id", name: "emailid" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
            lineNumber: 53,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
          lineNumber: 51,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
          lineNumber: 50,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Phone" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
            lineNumber: 58,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "+91-25-4125-2365", placeholder: "Phone No", name: "phone" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
            lineNumber: 59,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
          lineNumber: 57,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
          lineNumber: 56,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
        lineNumber: 49,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "col-sm-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Location" }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
          lineNumber: 65,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "Lane 1", placeholder: "Line 1", name: "add1" }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
          lineNumber: 67,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
          lineNumber: 66,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "Newyork", placeholder: "Line 2", name: "add2" }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
          lineNumber: 70,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
          lineNumber: 69,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
        lineNumber: 64,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
        lineNumber: 63,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Footer, { className: "align-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "secondary", onClick: hide, children: "Discard" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
        lineNumber: 77,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", onClick: hide, children: "Update" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
        lineNumber: 78,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
      lineNumber: 76,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/contact/edit-contact/ProfileInfo.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c = ProfileInfo;
var ProfileInfo_default = ProfileInfo;
var _c;
$RefreshReg$(_c, "ProfileInfo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/contact/edit-contact/MoreInfo.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/contact/edit-contact/MoreInfo.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/contact/edit-contact/MoreInfo.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var MoreInfo = ({
  show,
  hide
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default, { show, onHide: hide, size: "lg", centered: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Header, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Title, { as: "h6", children: "Profile Information" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: hide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
        lineNumber: 30,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
        lineNumber: 29,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { className: "gx-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: "Designation" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
            lineNumber: 38,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "Mandaline", placeholder: "First Name", name: "name1" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
            lineNumber: 39,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
          lineNumber: 37,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
          lineNumber: 36,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: "Company" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
            lineNumber: 44,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "Shane", placeholder: "Last Name", name: "lastname1" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
            lineNumber: 45,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
          lineNumber: 43,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
          lineNumber: 42,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
        lineNumber: 35,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { className: "gx-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: "Language" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
            lineNumber: 52,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "email", defaultValue: "contct@hencework.com", placeholder: "Email Id", name: "emailid1" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
            lineNumber: 53,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
          lineNumber: 51,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
          lineNumber: 50,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: "Birthday" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
            lineNumber: 58,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "10/24/1984", placeholder: "Phone No", name: "birthday1" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
            lineNumber: 59,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
          lineNumber: 57,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
          lineNumber: 56,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
        lineNumber: 49,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Footer, { className: "align-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "secondary", onClick: hide, children: "Discard" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
        lineNumber: 66,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "primary", onClick: hide, children: "Update" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
        lineNumber: 67,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
      lineNumber: 65,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/contact/edit-contact/MoreInfo.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c2 = MoreInfo;
var MoreInfo_default = MoreInfo;
var _c2;
$RefreshReg$(_c2, "MoreInfo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/contact/edit-contact/AddTags.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/contact/edit-contact/AddTags.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/contact/edit-contact/AddTags.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var AddTags = ({
  show,
  hide
}) => {
  const multiSelectOpt = [{
    value: "collaborator",
    label: "Collaborator"
  }, {
    value: "designer",
    label: "Designer"
  }, {
    value: "react-developer",
    label: "React Developer"
  }, {
    value: "promotion",
    label: "Promotion"
  }, {
    value: "advertisement",
    label: "Advertisement"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal_default, { show, onHide: hide, centered: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal_default.Header, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal_default.Title, { children: "Tags" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/AddTags.jsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: hide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/AddTags.jsx",
        lineNumber: 47,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/AddTags.jsx",
        lineNumber: 46,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/edit-contact/AddTags.jsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Group, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex flex-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_tags_default, { options: multiSelectOpt, defaultValue: [multiSelectOpt[0], multiSelectOpt[1], multiSelectOpt[2], multiSelectOpt[3]] }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/AddTags.jsx",
      lineNumber: 56,
      columnNumber: 37
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/AddTags.jsx",
      lineNumber: 55,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/AddTags.jsx",
      lineNumber: 54,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/AddTags.jsx",
      lineNumber: 53,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/AddTags.jsx",
      lineNumber: 52,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/AddTags.jsx",
      lineNumber: 51,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/AddTags.jsx",
      lineNumber: 50,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal_default.Footer, { className: "align-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "secondary", onClick: hide, children: "Discard" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/AddTags.jsx",
        lineNumber: 64,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "primary", onClick: hide, children: "Update" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/AddTags.jsx",
        lineNumber: 65,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/edit-contact/AddTags.jsx",
      lineNumber: 63,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/contact/edit-contact/AddTags.jsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
};
_c3 = AddTags;
var AddTags_default = AddTags;
var _c3;
$RefreshReg$(_c3, "AddTags");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/contact/edit-contact/AddBio.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/contact/edit-contact/AddBio.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/contact/edit-contact/AddBio.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var AddBio = ({
  show,
  hide
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Modal_default, { show, onHide: hide, centered: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Modal_default.Header, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Modal_default.Title, { as: "h6", children: "Biography" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/AddBio.jsx",
        lineNumber: 28,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: hide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/AddBio.jsx",
        lineNumber: 30,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/AddBio.jsx",
        lineNumber: 29,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/edit-contact/AddBio.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Modal_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Control, { as: "textarea", rows: 4, placeholder: "Add Bio", defaultValue: "Hello there, Morgan Freeman is a full-stack frontend developer working under pressure is his quality." }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/AddBio.jsx",
      lineNumber: 38,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/AddBio.jsx",
      lineNumber: 37,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/AddBio.jsx",
      lineNumber: 36,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/AddBio.jsx",
      lineNumber: 35,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/AddBio.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/AddBio.jsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Modal_default.Footer, { className: "align-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "secondary", onClick: hide, children: "Discard" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/AddBio.jsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "primary", onClick: hide, children: "Update" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/AddBio.jsx",
        lineNumber: 46,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/edit-contact/AddBio.jsx",
      lineNumber: 44,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/contact/edit-contact/AddBio.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c4 = AddBio;
var AddBio_default = AddBio;
var _c4;
$RefreshReg$(_c4, "AddBio");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/contact/edit-contact/EditContactBody.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/contact/edit-contact/EditContactBody.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/contact/edit-contact/EditContactBody.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var EditContactBody = () => {
  _s();
  const [profileInfo, setProfileInfo] = (0, import_react2.useState)(false);
  const [moreInfo, setMoreInfo] = (0, import_react2.useState)(false);
  const [addTags, setAddTags] = (0, import_react2.useState)(false);
  const [addBio, setAddBio] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "contact-body contact-detail-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "d-flex flex-xxl-nowrap flex-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "contact-info w-xxl-30 w-100", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default, { className: "action-btn", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Toggle, { variant: "light", children: "Action" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 52,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Menu, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { children: "Action" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 54,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { children: "Another action" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 55,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { children: "Something else here" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 56,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 57,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { children: "Separated link" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 58,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 53,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
          lineNumber: 51,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "text-center mt-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto", style: {
            width: 118
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(hk_avatar_uploader_default, { defaultImg: avatar2_default }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 65,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 62,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "cp-name text-truncate mt-3", children: "Mendaline Shane" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 67,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "No phone calls Always busy" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 68,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react_simple_star_rating.Rating, { initialValue: 3, readonly: true, size: "20" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 69,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "hk-list hk-list-sm justify-content-center mt-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { variant: "soft-primary", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(mail_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 75,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 74,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 73,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 72,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 71,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { variant: "soft-success", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(phone_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 84,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 83,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 82,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 81,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 80,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { variant: "soft-danger", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(video_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 93,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 92,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 91,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 90,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 89,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 70,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
          lineNumber: 61,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default.Header, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "#", children: "Profile Information" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 102,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { variant: "light", size: "xs", className: "btn-icon btn-rounded", onClick: () => setProfileInfo(!profileInfo), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HkTooltip_default, { placement: "top", title: "Edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(edit_2_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 107,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 106,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 105,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 104,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 103,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 101,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "cp-info", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "First name" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 116,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Morgan" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 117,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 115,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Last name" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 120,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Freeman" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 121,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 119,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Email" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 124,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "morgan@flights.com" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 125,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 123,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Phone" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 128,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "+912-4532-1234" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 129,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 127,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Location" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 132,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Newyork" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 133,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 131,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 114,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 113,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
          lineNumber: 100,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "separator-full" }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
          lineNumber: 138,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default.Header, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "#", children: "More Info" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 141,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { variant: "light", size: "xs", className: "btn-icon btn-rounded", onClick: () => setMoreInfo(!moreInfo), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HkTooltip_default, { placement: "top", title: "Edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(edit_2_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 146,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 145,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 144,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 143,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 142,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 140,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "cp-info", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Designation" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 155,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Morgan" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 156,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 154,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Company" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 159,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Freeman" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 160,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 158,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Language" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 163,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "morgan@flights.com" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 164,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 162,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Birthday" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 167,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "-" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 168,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 166,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Location" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 171,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Newyork" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 172,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 170,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 153,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 152,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
          lineNumber: 139,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "separator-full" }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
          lineNumber: 177,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default.Header, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "#", children: "Tags" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 180,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { variant: "light", size: "xs", className: "btn-icon btn-rounded", onClick: () => setAddTags(!addTags), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HkTooltip_default, { placement: "top", title: "Add Tags", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(plus_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 185,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 184,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 183,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 182,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 181,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 179,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default.Body, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Badge_default, { bg: "soft-violet", className: "badge-soft-violet me-1", children: "Collaboration" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 192,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Badge_default, { bg: "soft-danger", className: "badge-soft-danger me-1", children: "React Developer" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 193,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 191,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
          lineNumber: 178,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "separator-full" }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
          lineNumber: 196,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "#", children: "Social Profile" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 199,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 198,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "hk-list hk-list-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { variant: "primary", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FontAwesomeIcon, { icon: faBehance }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 206,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 205,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 204,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 203,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { variant: "warning", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FontAwesomeIcon, { icon: faGoogleDrive }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 213,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 212,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 211,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 210,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { variant: "info", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FontAwesomeIcon, { icon: faDropbox }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 220,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 219,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 218,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 217,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { variant: "dark", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(FontAwesomeIcon, { icon: faGithub }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 227,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 226,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 225,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 224,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 202,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 201,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
          lineNumber: 197,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "separator-full" }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
          lineNumber: 234,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default.Header, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "#", children: "Biography" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 237,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { variant: "light", size: "xs", className: "btn-icon btn-rounded", onClick: () => setAddBio(!addBio), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HkTooltip_default, { placement: "top", title: "Edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(edit_2_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 242,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 241,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 240,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 239,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 238,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 236,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Hello there, Morgan Freeman is a full-stack frontend developer working under pressure is his quality." }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 249,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 248,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
          lineNumber: 235,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "separator-full" }, void 0, false, {
          fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
          lineNumber: 252,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "#", children: "Settings" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 255,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 254,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "cp-action", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "#", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "cp-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(upload_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 263,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 262,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 261,
                columnNumber: 49
              }, this),
              "Share Contact"
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 260,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 259,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "#", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "cp-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(heart_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 273,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 272,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 271,
                columnNumber: 49
              }, this),
              "Add to Favourites"
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 270,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 269,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Link, { to: "#", className: "link-danger", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "cp-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(trash_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 283,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 282,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 281,
                columnNumber: 49
              }, this),
              "Delete Contact"
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 280,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 279,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 258,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 257,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
          lineNumber: 253,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
        lineNumber: 50,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "contact-more-info", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Tab_default.Container, { activeKey: "tab_summery", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nav_default, { variant: "tabs", className: "nav-line nav-icon nav-light", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nav_default.Link, { eventKey: "tab_summery", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(zap_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 300,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 299,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 298,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "nav-link-text", children: "Summery" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 303,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 297,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 296,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nav_default.Link, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(activity_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 310,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 309,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 308,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "nav-link-text", children: "Activity" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 313,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 307,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 306,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nav_default.Link, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(edit_3_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 320,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 319,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 318,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "nav-link-text", children: "Notes" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 323,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 317,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 316,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nav_default.Link, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(mail_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 330,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 329,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 328,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "nav-link-text", children: "Email" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 333,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 327,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 326,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nav_default.Link, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(phone_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 340,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 339,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 338,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "nav-link-text", children: "Calls" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 343,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 337,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 336,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nav_default.Link, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(check_square_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 350,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 349,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 348,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "nav-link-text", children: "Tasks" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 353,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 347,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 346,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nav_default.Link, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(clock_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 360,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 359,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 358,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "nav-link-text", children: "Schedule" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 363,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 357,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 356,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Nav_default.Link, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(shield_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 370,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 369,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 368,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "nav-link-text", children: "Sales" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 373,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 367,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 366,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 295,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Tab_default.Content, { className: "mt-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Tab_default.Pane, { eventKey: "tab_summery", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Col_default, { md: 12, as: Form_default.Group, className: "mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "form-label-group", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Label, { children: "Write a Note" }, void 0, false, {
                  fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                  lineNumber: 383,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("small", { className: "text-muted", children: "1200" }, void 0, false, {
                  fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                  lineNumber: 384,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 382,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { as: "textarea", rows: 8, placeholder: "Write an internal note" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 386,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 381,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 380,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { variant: "outline-light", className: "mt-2", children: "Add Note" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 389,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 379,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 378,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 377,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
          lineNumber: 294,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "pipeline-status-wrap mt-7", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "title-lg mb-3", children: "Lead Pipeline Status" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 395,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "pipeline-stutus", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "completed", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "In Pipeline" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 397,
              columnNumber: 63
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 397,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { className: "active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Follow Up" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 398,
              columnNumber: 60
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 398,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Scheduled Service" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 399,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 399,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Conversation" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 400,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 400,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: "Win/Lost" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 401,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 401,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 396,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "clearfix" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 403,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
          lineNumber: 394,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "activity-wrap mt-7", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "title-lg mb-0", children: "Activity" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 407,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Select, { className: "mw-150p", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 0, children: "All Activity" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 409,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 1, children: "One" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 410,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 2, children: "Two" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 411,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: 3, children: "Three" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 412,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 408,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 406,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "title-sm text-primary mb-3", children: "June 24" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 415,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "activity-thread", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "media", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(mail_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 422,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 421,
                columnNumber: 84
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 421,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 420,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 419,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "activity-text", children: [
                  "You sent ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-dark text-capitalize", children: "1 message" }, void 0, false, {
                    fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                    lineNumber: 429,
                    columnNumber: 93
                  }, this),
                  " to the contact."
                ] }, void 0, true, {
                  fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                  lineNumber: 429,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "activity-time", children: "10.00 pm" }, void 0, false, {
                  fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                  lineNumber: 430,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 428,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 427,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 418,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 417,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "media", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "initial-wrap", children: "M" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 439,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 438,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 437,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "activity-text", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-dark text-capitalize", children: "Morgan Freeman" }, void 0, false, {
                    fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                    lineNumber: 444,
                    columnNumber: 84
                  }, this),
                  " as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled."
                ] }, void 0, true, {
                  fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                  lineNumber: 444,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "activity-time", children: "10.00 pm" }, void 0, false, {
                  fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                  lineNumber: 445,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 443,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 442,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 436,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 435,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "media", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "avatar  avatar-icon avatar-sm avatar-info avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(shield_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 455,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 454,
                columnNumber: 84
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 454,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 453,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 452,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "activity-text", children: [
                  "Your deal value ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-dark", children: "$208.15" }, void 0, false, {
                    fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                    lineNumber: 462,
                    columnNumber: 100
                  }, this),
                  " is paid through PayU Money online on ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-dark", children: "02.12.18" }, void 0, false, {
                    fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                    lineNumber: 462,
                    columnNumber: 180
                  }, this),
                  " at ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-dark", children: "15:30, Monday" }, void 0, false, {
                    fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                    lineNumber: 462,
                    columnNumber: 227
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                  lineNumber: 462,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "activity-time", children: "10.00 pm" }, void 0, false, {
                  fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                  lineNumber: 463,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 461,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 460,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 451,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 450,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 416,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "title-sm text-primary mt-5 mb-3", children: "June 25" }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 469,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "activity-thread", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "media", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "initial-wrap", children: "M" }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 475,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 474,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 473,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "activity-text", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-dark", children: "Morgan Freeman" }, void 0, false, {
                  fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                  lineNumber: 480,
                  columnNumber: 84
                }, this),
                " responded to your appointment schedule question. "
              ] }, void 0, true, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 480,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "activity-time", children: "10.00 pm" }, void 0, false, {
                fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
                lineNumber: 481,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 479,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
              lineNumber: 478,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 472,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 471,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
            lineNumber: 470,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
          lineNumber: 405,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
        lineNumber: 293,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
      lineNumber: 49,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
      lineNumber: 48,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AddTags_default, { show: addTags, hide: () => setAddTags(!addTags) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
      lineNumber: 494,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ProfileInfo_default, { show: profileInfo, hide: () => setProfileInfo(!profileInfo) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
      lineNumber: 496,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MoreInfo_default, { show: moreInfo, hide: () => setMoreInfo(!moreInfo) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
      lineNumber: 498,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AddBio_default, { show: addBio, hide: () => setAddBio(!addBio) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
      lineNumber: 500,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/contact/edit-contact/EditContactBody.jsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
};
_s(EditContactBody, "G4m3OcjqjJkZ4kA2CpRQD4wGeMs=");
_c5 = EditContactBody;
var EditContactBody_default = EditContactBody;
var _c5;
$RefreshReg$(_c5, "EditContactBody");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/contact/edit-contact/EditContactHeader.jsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/contact/edit-contact/EditContactHeader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/contact/edit-contact/EditContactHeader.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var EditContactHeader = ({
  toggleSidebar,
  show
}) => {
  _s2();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("header", { className: "contact-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "d-flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("nav", { "aria-label": "breadcrumb", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("ol", { className: "breadcrumb  mb-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: "breadcrumb-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "contact.html", children: "Contacts" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 40,
        columnNumber: 57
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 40,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("li", { className: "breadcrumb-item active", "aria-current": "page", children: "Morgan Freeman" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 41,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
      lineNumber: 39,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
      lineNumber: 38,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "contact-options-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "d-flex fs-7 align-items-center", children: "1 of 30" }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover contactapp-info-toggle", href: "#", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Previous", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(chevron_left_default, {}, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 50,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 49,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 48,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 47,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover contactapp-info-toggle", href: "#", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(chevron_right_default, {}, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 57,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 56,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 55,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover hk-navbar-togglable", onClick: () => dispatch({
        type: "top_nav_toggle"
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "feather-icon", children: states.layoutState.topNavCollapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(chevron_down_default, {}, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 67,
        columnNumber: 70
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(chevron_up_default, {}, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 67,
        columnNumber: 88
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 66,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 65,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 64,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
        lineNumber: 61,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: (0, import_classnames.default)("hk-sidebar-togglable", {
      "active": show
    }), onClick: toggleSidebar }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
      lineNumber: 73,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/contact/edit-contact/EditContactHeader.jsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_s2(EditContactHeader, "OVdtiISsix2HOQFhIOw6MKqd+SU=", false, function() {
  return [useGlobalStateContext];
});
_c6 = EditContactHeader;
var EditContactHeader_default = EditContactHeader;
var _c6;
$RefreshReg$(_c6, "EditContactHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/contact/edit-contact/route.jsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/contact/edit-contact/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/contact/edit-contact/route.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var EditContact = () => {
  _s3();
  const [showSidebar, setShowSidebar] = (0, import_react3.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: (0, import_classnames2.default)("contactapp-wrap", {
    "contactapp-sidebar-toggle": showSidebar
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ContactAppSidebar_default, {}, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/route.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "contactapp-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "contactapp-detail-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(EditContactHeader_default, { toggleSidebar: () => setShowSidebar(!showSidebar), show: showSidebar }, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/route.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(EditContactBody_default, {}, void 0, false, {
        fileName: "app/routes/apps/contact/edit-contact/route.jsx",
        lineNumber: 38,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/edit-contact/route.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/edit-contact/route.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/contact/edit-contact/route.jsx",
    lineNumber: 31,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/contact/edit-contact/route.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s3(EditContact, "Jn+Blp4AInVy8bzFY0VrkhtmHTg=");
_c7 = EditContact;
var route_default = EditContact;
var _c7;
$RefreshReg$(_c7, "EditContact");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/contact/edit-contact/route-JYS5QWUA.js.map
