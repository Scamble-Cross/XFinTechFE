import {
  BlogAside_default,
  TinymceEditor_default
} from "/build/_shared/chunk-AF6LNL6Z.js";
import "/build/_shared/chunk-KLXQ4KPF.js";
import {
  HkDropZone_default
} from "/build/_shared/chunk-OVUIRAHX.js";
import "/build/_shared/chunk-BRHXWRHF.js";
import "/build/_shared/chunk-OT26VHP7.js";
import "/build/_shared/chunk-5BLZWIUZ.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  edit_default,
  settings_default,
  zap_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  Card_default,
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
  createHotContext
} from "/build/_shared/chunk-7UABGPEU.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/apps/blog/add-new-post/route.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/blog/add-new-post/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/blog/add-new-post/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247891.764";
}
var NewPostBody = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { fluid: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { xxl: 9, lg: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { className: "edit-post-form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Post Title" }, void 0, false, {
          fileName: "app/routes/apps/blog/add-new-post/route.jsx",
          lineNumber: 35,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { placeholder: "Post Title" }, void 0, false, {
          fileName: "app/routes/apps/blog/add-new-post/route.jsx",
          lineNumber: 36,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/add-new-post/route.jsx",
        lineNumber: 34,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Permalink" }, void 0, false, {
          fileName: "app/routes/apps/blog/add-new-post/route.jsx",
          lineNumber: 39,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { placeholder: "Permalink" }, void 0, false, {
          fileName: "app/routes/apps/blog/add-new-post/route.jsx",
          lineNumber: 40,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/add-new-post/route.jsx",
        lineNumber: 38,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Container, { defaultActiveKey: "tabClassic", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { variant: "tabs", className: "nav-light border-bottom-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { eventKey: "tabClassic", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Classic" }, void 0, false, {
            fileName: "app/routes/apps/blog/add-new-post/route.jsx",
            lineNumber: 46,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/add-new-post/route.jsx",
            lineNumber: 45,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/add-new-post/route.jsx",
            lineNumber: 44,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { eventKey: "tabCode", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Code" }, void 0, false, {
            fileName: "app/routes/apps/blog/add-new-post/route.jsx",
            lineNumber: 51,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/add-new-post/route.jsx",
            lineNumber: 50,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/add-new-post/route.jsx",
            lineNumber: 49,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/add-new-post/route.jsx",
          lineNumber: 43,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border rounded-top-start-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Content, { className: "mt-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Pane, { eventKey: "tabClassic", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "tinymce-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TinymceEditor_default, {}, void 0, false, {
            fileName: "app/routes/apps/blog/add-new-post/route.jsx",
            lineNumber: 60,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/add-new-post/route.jsx",
            lineNumber: 59,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/add-new-post/route.jsx",
            lineNumber: 58,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Pane, { eventKey: "tabCode" }, void 0, false, {
            fileName: "app/routes/apps/blog/add-new-post/route.jsx",
            lineNumber: 63,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/add-new-post/route.jsx",
          lineNumber: 57,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/add-new-post/route.jsx",
          lineNumber: 56,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/add-new-post/route.jsx",
          lineNumber: 55,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/add-new-post/route.jsx",
        lineNumber: 42,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border advance-option-post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Title, { children: "Advance Option" }, void 0, false, {
          fileName: "app/routes/apps/blog/add-new-post/route.jsx",
          lineNumber: 71,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Container, { defaultActiveKey: "summery", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { variant: "tabs", className: "nav-line nav-icon nav-light border-bottom", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { eventKey: "summery", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(zap_default, {}, void 0, false, {
                fileName: "app/routes/apps/blog/add-new-post/route.jsx",
                lineNumber: 78,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/add-new-post/route.jsx",
                lineNumber: 77,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/add-new-post/route.jsx",
                lineNumber: 76,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Post Slider Images" }, void 0, false, {
                fileName: "app/routes/apps/blog/add-new-post/route.jsx",
                lineNumber: 81,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/blog/add-new-post/route.jsx",
              lineNumber: 75,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/add-new-post/route.jsx",
              lineNumber: 74,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { eventKey: "#", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(settings_default, {}, void 0, false, {
                fileName: "app/routes/apps/blog/add-new-post/route.jsx",
                lineNumber: 88,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/add-new-post/route.jsx",
                lineNumber: 87,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/add-new-post/route.jsx",
                lineNumber: 86,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Post Settings" }, void 0, false, {
                fileName: "app/routes/apps/blog/add-new-post/route.jsx",
                lineNumber: 91,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/blog/add-new-post/route.jsx",
              lineNumber: 85,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/add-new-post/route.jsx",
              lineNumber: 84,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { disabled: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(edit_default, {}, void 0, false, {
                fileName: "app/routes/apps/blog/add-new-post/route.jsx",
                lineNumber: 98,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/add-new-post/route.jsx",
                lineNumber: 97,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/add-new-post/route.jsx",
                lineNumber: 96,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Version History" }, void 0, false, {
                fileName: "app/routes/apps/blog/add-new-post/route.jsx",
                lineNumber: 101,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/blog/add-new-post/route.jsx",
              lineNumber: 95,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/add-new-post/route.jsx",
              lineNumber: 94,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/add-new-post/route.jsx",
            lineNumber: 73,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Pane, { eventKey: "summery", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkDropZone_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "main-text", children: "Upload a high quality image to" }, void 0, false, {
              fileName: "app/routes/apps/blog/add-new-post/route.jsx",
              lineNumber: 108,
              columnNumber: 57
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fw-light text-muted", children: " Make your blog post inviting" }, void 0, false, {
              fileName: "app/routes/apps/blog/add-new-post/route.jsx",
              lineNumber: 108,
              columnNumber: 122
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/add-new-post/route.jsx",
            lineNumber: 107,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/add-new-post/route.jsx",
            lineNumber: 106,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/add-new-post/route.jsx",
            lineNumber: 105,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/add-new-post/route.jsx",
          lineNumber: 72,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/add-new-post/route.jsx",
        lineNumber: 70,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/add-new-post/route.jsx",
        lineNumber: 69,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/blog/add-new-post/route.jsx",
      lineNumber: 33,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/blog/add-new-post/route.jsx",
      lineNumber: 32,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { xxl: 3, lg: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlogAside_default, {}, void 0, false, {
      fileName: "app/routes/apps/blog/add-new-post/route.jsx",
      lineNumber: 118,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/blog/add-new-post/route.jsx",
      lineNumber: 117,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/blog/add-new-post/route.jsx",
    lineNumber: 31,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/blog/add-new-post/route.jsx",
    lineNumber: 30,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/blog/add-new-post/route.jsx",
    lineNumber: 29,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/blog/add-new-post/route.jsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_c = NewPostBody;
var route_default = NewPostBody;
var _c;
$RefreshReg$(_c, "NewPostBody");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/blog/add-new-post/route-QM7FJGX5.js.map
