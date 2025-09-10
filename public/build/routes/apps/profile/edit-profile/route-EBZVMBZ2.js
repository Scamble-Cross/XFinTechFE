import {
  avatar3_default
} from "/build/_shared/chunk-MVEBKFJK.js";
import {
  Button_default,
  Col_default,
  Container_default,
  Form_default,
  Nav_default,
  Row_default,
  Tab_default
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

// app/routes/apps/profile/edit-profile/route.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/profile/edit-profile/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/profile/edit-profile/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247963.426";
}
var EditProfile = ({
  toggleCollapsedNav
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hk-pg-header pt-7 pb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "pg-title", children: "Edit Profile" }, void 0, false, {
        fileName: "app/routes/apps/profile/edit-profile/route.jsx",
        lineNumber: 30,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The Avatar component is used to represent a user, and displays the profile picture, initials or fallback icon." }, void 0, false, {
        fileName: "app/routes/apps/profile/edit-profile/route.jsx",
        lineNumber: 31,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/profile/edit-profile/route.jsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hk-pg-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Container, { defaultActiveKey: "tabBlock1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "edit-profile-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { xs: 4, sm: 3, lg: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "nav-profile mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "nav-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Account" }, void 0, false, {
          fileName: "app/routes/apps/profile/edit-profile/route.jsx",
          lineNumber: 40,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/profile/edit-profile/route.jsx",
          lineNumber: 39,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { as: "ul", variant: "tabs", className: "nav-light nav-vertical", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { eventKey: "tabBlock1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Public Profile" }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 45,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 44,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 43,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { eventKey: "tabBlock2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Account Settings" }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 50,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 49,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 48,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { eventKey: "tabBlock3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Privacy Settings" }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 55,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 54,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 53,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { eventKey: "tabBlock4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Login & Security" }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 60,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 59,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 58,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Notifications" }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 65,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 64,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 63,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Connections" }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 70,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 69,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 68,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Billing Info" }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 75,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 74,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 73,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/profile/edit-profile/route.jsx",
          lineNumber: 42,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/profile/edit-profile/route.jsx",
        lineNumber: 38,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/profile/edit-profile/route.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { lg: 10, sm: 9, xs: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Content, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Pane, { eventKey: "tabBlock1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media align-items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-rounded avatar-xxl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar3_default, alt: "user", className: "avatar-img" }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 91,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 90,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 89,
              columnNumber: 57
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "soft-primary", className: "btn-file mb-1", children: [
                "Upload Photo",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "file", className: "upload" }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 97,
                  columnNumber: 65
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 95,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Text, { as: "div", className: "form-text text-muted", children: "For better preview recommended size is 450px x 450px. Max size 5mb." }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 99,
                columnNumber: 61
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 94,
              columnNumber: 57
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 88,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 87,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 86,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 85,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-xs title-wth-divider text-primary text-uppercase my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Personal Info" }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 107,
            columnNumber: 124
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 107,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "First Name" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 111,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "Kate" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 112,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 110,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 109,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Last Name" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 117,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "Jones" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 118,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 116,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 115,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 108,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Location" }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 125,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "Lane no 1, Newyork" }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 126,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 124,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 123,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 122,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-label-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Bio" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 134,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { className: "text-muted", children: "1200" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 135,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 133,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { as: "textarea", rows: 8, placeholder: "Write an internal note" }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 137,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Text, { muted: true, children: "Brief bio about yourself. This will be displayed on your profile page." }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 138,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 132,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 131,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 130,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-xs title-wth-divider text-primary text-uppercase my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Additional Info" }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 145,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 144,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Personal Website" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 150,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "hencework.com" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 151,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 149,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 148,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 12, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Phone" }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 156,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "tel", defaultValue: "xxxxxxx987" }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 157,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 155,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheckList4", label: "Keep my number private" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 159,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 154,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 147,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", className: "mt-5", children: "Save Changes" }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 162,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/profile/edit-profile/route.jsx",
          lineNumber: 84,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/profile/edit-profile/route.jsx",
          lineNumber: 83,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Pane, { eventKey: "tabBlock2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title-lg fs-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Account Settings" }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 166,
            columnNumber: 68
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 166,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4", children: "The Avatar component is used to represent a user, and displays the profile picture, initials or fallback icon." }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 167,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Username" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 172,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "Kate" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 173,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 171,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 170,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 169,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Email" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 180,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "Lane no 1, Newyork" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 181,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 179,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 178,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 177,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "URL" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 188,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "hencework.com" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 189,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 187,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 186,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 185,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-xs title-wth-divider text-primary text-uppercase my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Tracking Code" }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 193,
              columnNumber: 124
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 193,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Google Analytics tracking code" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 197,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", defaultValue: "UA-1387652-1" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 198,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Text, { muted: true, children: "Track shot and profile views in your Google analytics account, eg. UA-0000000-0" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 199,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 196,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 195,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 194,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-xs title-wth-divider text-primary text-uppercase my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Account Changes" }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 205,
              columnNumber: 124
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 205,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "h5 d-block mb-0", children: "Delete Account" }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 209,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Text, { muted: true, children: "Delete account and all your data" }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 210,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 208,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 207,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, className: "text-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "danger", children: "Close account" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 217,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 216,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 215,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 206,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", className: "mt-5", children: "Save Changes" }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 221,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 168,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/profile/edit-profile/route.jsx",
          lineNumber: 165,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Pane, { eventKey: "tabBlock3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title-lg fs-4 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Privacy Settings" }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 226,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 225,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 12, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { className: "form-check-lg", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Input, { id: "customChecks1" }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 232,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Label, { htmlFor: "customChecks1", children: "let others find me by email address" }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 233,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Text, { muted: true, className: "d-block", children: "People who have your email address will be able to connect you by Jampack" }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 234,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 231,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "separator" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 236,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { className: "form-check-lg", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Input, { id: "customChecks2" }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 238,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Label, { htmlFor: "customChecks2", children: "Keep my phone number private" }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 239,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Text, { muted: true, className: "d-block", children: "No one can find you by your phone number. Your phone number will not be shared with your contact anymore." }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 240,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 237,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "separator" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 242,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { className: "form-check-lg", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Input, { id: "customChecks3" }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 244,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Label, { htmlFor: "customChecks3", children: "All Keep my location sharing on" }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 245,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Text, { muted: true, className: "d-block", children: "Jmapack webapp shares your location wherever you go" }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 246,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 243,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "separator" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 248,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { className: "form-check-lg", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Input, { id: "customChecks4" }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 250,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Label, { htmlFor: "customChecks4", children: "Share data through select partnerships" }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 251,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Text, { muted: true, className: "d-block", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum mauris volutpat enim ornare iaculis. Curabitur euismod rutrum lorem id lobortis. Cras ut ex dui. Nulla sed blandit tortor. In quam diam, efficitur sit amet pulvinar eget, consequat placerat arcu." }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 252,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 249,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 230,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 229,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", className: "mt-5", children: "Save Changes" }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 256,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 228,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/profile/edit-profile/route.jsx",
          lineNumber: 224,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Pane, { eventKey: "tabBlock4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title-lg fs-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Login & Security" }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 260,
            columnNumber: 68
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 260,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4", children: "The Avatar component is used to represent a user, and displays the profile picture, initials or fallback icon." }, void 0, false, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 261,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-xs title-wth-divider text-primary text-uppercase my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Password Settings" }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 263,
              columnNumber: 124
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 263,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Password" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 267,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "password", defaultValue: "Katervewe" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 268,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", className: "mt-3", children: "Changes password" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 269,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 266,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 265,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 264,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-xs title-wth-divider text-primary text-uppercase my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Additional Security" }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 273,
              columnNumber: 124
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 273,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "2-Step Verification (2FA)" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 277,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Text, { muted: true, className: "d-block", children: [
                "2-step verification drastically reduces the chances of having the personal information in your Google account stolen by someone else. Why? Because hackers would have to not only get your password and your username, they'd have to get a hold of your phone. A ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "text-primary", children: "6-digit" }, void 0, false, {
                  fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                  lineNumber: 279,
                  columnNumber: 320
                }, this),
                " code may be sent to a number you\u2019ve previously provided. Codes can be sent in a text message (SMS) or through a voice call, which depends on the setting you chose. To verify it\u2019s you, enter the code on the sign-in screen."
              ] }, void 0, true, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 278,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", className: "mt-3", children: "Add Authentication" }, void 0, false, {
                fileName: "app/routes/apps/profile/edit-profile/route.jsx",
                lineNumber: 281,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 276,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 275,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/profile/edit-profile/route.jsx",
              lineNumber: 274,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/profile/edit-profile/route.jsx",
            lineNumber: 262,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/profile/edit-profile/route.jsx",
          lineNumber: 259,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/profile/edit-profile/route.jsx",
        lineNumber: 82,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/profile/edit-profile/route.jsx",
        lineNumber: 81,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/profile/edit-profile/route.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/profile/edit-profile/route.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/profile/edit-profile/route.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/profile/edit-profile/route.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_c = EditProfile;
var route_default = EditProfile;
var _c;
$RefreshReg$(_c, "EditProfile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/profile/edit-profile/route-EBZVMBZ2.js.map
