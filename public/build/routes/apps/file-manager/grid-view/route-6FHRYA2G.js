import {
  mock5_default
} from "/build/_shared/chunk-EABAFHXI.js";
import {
  mock7_default
} from "/build/_shared/chunk-MZZNQIWN.js";
import {
  hk_alert_default
} from "/build/_shared/chunk-AOHHCEYO.js";
import "/build/_shared/chunk-NQ2SSAFE.js";
import "/build/_shared/chunk-JPGC5R3S.js";
import {
  hk_collapse_default
} from "/build/_shared/chunk-OT26VHP7.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  copy_default,
  download_default,
  eye_default,
  info_default,
  link_2_default,
  more_horizontal_default,
  skip_forward_default,
  star_default,
  trash_2_default,
  user_plus_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  Button_default,
  Card_default,
  Col_default,
  Dropdown_default,
  Row_default
} from "/build/_shared/chunk-KBRVI47E.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-HFWHD4VB.js";
import "/build/_shared/chunk-CQ7UJNRQ.js";
import {
  useGlobalStateContext
} from "/build/_shared/chunk-DIOLN5GK.js";
import "/build/_shared/chunk-B57YWHU6.js";
import "/build/_shared/chunk-WUHA5P4Y.js";
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

// app/routes/apps/file-manager/grid-view/route.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/file-manager/grid-view/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/file-manager/grid-view/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247932.777";
}
var FmGrid = () => {
  _s();
  const {
    dispatch
  } = useGlobalStateContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fm-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-card-view", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_alert_default, { variant: "warning", className: "alert-wth-icon", dismissible: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "alert-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-alert-line" }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 41,
        columnNumber: 59
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 41,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center flex-wrap flex-sm-nowrap", children: [
        "You must provide value for account name.",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { size: "sm", variant: "warning", className: "ms-sm-auto mt-sm-0 mt-2 flex-shrink-0", children: "Upgrade Storage" }, void 0, false, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 44,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 42,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
      lineNumber: 40,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collapse-simple mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "fm_collapse_1", title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "mb-0", children: "Quick Access" }, void 0, false, {
      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
      lineNumber: 48,
      columnNumber: 93
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
      lineNumber: 48,
      columnNumber: 91
    }, this), collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3 row-cols-xxl-6 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 mt-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-card card-border", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: "fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-file-excel-2-fill text-blue" }, void 0, false, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 56,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 52,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Footer, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex justify-content-between align-items-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "Website_content.exl" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 61,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "2,637 KB" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 62,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 60,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 67,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 66,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 65,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 74,
                  columnNumber: 69
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 73,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 72,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 71,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 82,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 81,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 84,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 80,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 88,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 87,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 90,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 86,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 94,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 93,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 96,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 92,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 100,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 99,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 102,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 98,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 106,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 105,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 108,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 104,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 110,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 113,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 112,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 115,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 111,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 119,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 118,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 121,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 117,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 125,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 124,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 127,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 123,
                    columnNumber: 61
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 79,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 70,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 64,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 59,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-truncate p-xs", children: "Last Access: 2 hours ago" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 133,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 58,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 51,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 50,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-card card-border", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: "fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-file-pdf-fill text-danger" }, void 0, false, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 143,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 139,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Footer, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex justify-content-between align-items-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "Website_content.exl" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 148,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "21.73 MB" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 149,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 147,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 154,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 153,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 152,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 161,
                  columnNumber: 69
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 160,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 159,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 158,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 169,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 168,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 171,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 167,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 175,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 174,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 177,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 173,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 181,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 180,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 183,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 179,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 187,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 186,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 189,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 185,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 193,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 192,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 195,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 191,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 197,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 200,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 199,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 202,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 198,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 206,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 205,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 208,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 204,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 212,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 211,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 214,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 210,
                    columnNumber: 61
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 166,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 157,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 151,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 146,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-truncate p-xs", children: "Last Access: 2 hours ago	" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 220,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 145,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 138,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 137,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-card card-border", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: "fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-file-word-2-fill text-blue" }, void 0, false, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 230,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 226,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Footer, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex justify-content-between align-items-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "jampack.doc" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 235,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "951 KB" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 236,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 234,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 241,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 240,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 239,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 248,
                  columnNumber: 69
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 247,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 246,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 245,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 256,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 255,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 258,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 254,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 262,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 261,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 264,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 260,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 268,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 267,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 270,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 266,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 274,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 273,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 276,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 272,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 280,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 279,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 282,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 278,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 284,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 287,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 286,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 289,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 285,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 293,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 292,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 295,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 291,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 299,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 298,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 301,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 297,
                    columnNumber: 61
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 253,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 244,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 238,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 233,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-truncate p-xs", children: "Last Access: 2 hours ago" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 307,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 232,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 225,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 224,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-card card-border", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: " fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-folder-2-fill text-warning" }, void 0, false, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 317,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 313,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Footer, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex justify-content-between align-items-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "Jampack - html - v1.0" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 322,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "1.6 GB" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 323,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 321,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 328,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 327,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 326,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 335,
                  columnNumber: 69
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 334,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 333,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 332,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 343,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 342,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 345,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 341,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 349,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 348,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 351,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 347,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 355,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 354,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 357,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 353,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 361,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 360,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 363,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 359,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 367,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 366,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 369,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 365,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 371,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 374,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 373,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 376,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 372,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 380,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 379,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 382,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 378,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 386,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 385,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 388,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 384,
                    columnNumber: 61
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 340,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 331,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 325,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 320,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-truncate p-xs", children: "Last Access: 2 hours ago" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 394,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 319,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 312,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 311,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-card card-border", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: " fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-folder-2-fill text-warning" }, void 0, false, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 404,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 400,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Footer, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex justify-content-between align-items-start", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "Jampack - Angular" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 409,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "2,637 KB" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 410,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 408,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 415,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 414,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 413,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 422,
                  columnNumber: 69
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 421,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 420,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 419,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 430,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 429,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 432,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 428,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 436,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 435,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 438,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 434,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 442,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 441,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 444,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 440,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 448,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 447,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 450,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 446,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 454,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 453,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 456,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 452,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 458,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 461,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 460,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 463,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 459,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 467,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 466,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 469,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 465,
                    columnNumber: 61
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 473,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 472,
                      columnNumber: 65
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                      lineNumber: 475,
                      columnNumber: 65
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                    lineNumber: 471,
                    columnNumber: 61
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 427,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 418,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 412,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 407,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-truncate p-xs", children: "Last Access: 2 hours ago" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 481,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 406,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 399,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 398,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
      lineNumber: 49,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
      lineNumber: 48,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
      lineNumber: 47,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collapse-simple mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "fm_collapse_2", title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "mb-0", children: "Folders" }, void 0, false, {
      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
      lineNumber: 489,
      columnNumber: 93
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
      lineNumber: 489,
      columnNumber: 91
    }, this), collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3 row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-compact-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: " d-flex justify-content-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-folder-2-fill" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 500,
            columnNumber: 88
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 500,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 499,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 498,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "Jampack - HTML - v1.0" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 504,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "1.6 GB" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 505,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 503,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 494,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 511,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 510,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 509,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 518,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 517,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 516,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 515,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 526,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 525,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 528,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 524,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 532,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 531,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 534,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 530,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 538,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 537,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 540,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 536,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 544,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 543,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 546,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 542,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 550,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 549,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 552,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 548,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 554,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 557,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 556,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 559,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 555,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 563,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 562,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 565,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 561,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 569,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 568,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 571,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 567,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 523,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 514,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 508,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 493,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 492,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 491,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-compact-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: " d-flex justify-content-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-folder-2-fill" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 588,
            columnNumber: 88
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 588,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 587,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 586,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "Jampack - Angular" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 592,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "2,635 KB" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 593,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 591,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 582,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 599,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 598,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 597,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 606,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 605,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 604,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 603,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 614,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 613,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 616,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 612,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 620,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 619,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 622,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 618,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 626,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 625,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 628,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 624,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 632,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 631,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 634,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 630,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 638,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 637,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 640,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 636,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 642,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 645,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 644,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 647,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 643,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 651,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 650,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 653,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 649,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 657,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 656,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 659,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 655,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 611,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 602,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 596,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 581,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 580,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 579,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-compact-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: " d-flex justify-content-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-folder-2-fill" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 676,
            columnNumber: 88
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 676,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 675,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 674,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "Designs" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 680,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "1.48 GB" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 681,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 679,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 670,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 687,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 686,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 685,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 694,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 693,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 692,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 691,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 702,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 701,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 704,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 700,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 708,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 707,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 710,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 706,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 714,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 713,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 716,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 712,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 720,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 719,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 722,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 718,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 726,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 725,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 728,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 724,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 730,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 733,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 732,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 735,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 731,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 739,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 738,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 741,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 737,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 745,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 744,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 747,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 743,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 699,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 690,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 684,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 669,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 668,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 667,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-compact-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: " d-flex justify-content-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-folder-2-fill" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 764,
            columnNumber: 88
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 764,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 763,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 762,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "Inspiration" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 768,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "3.5 GB" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 769,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 767,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 758,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 775,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 774,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 773,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 782,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 781,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 780,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 779,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 790,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 789,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 792,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 788,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 796,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 795,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 798,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 794,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 802,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 801,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 804,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 800,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 808,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 807,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 810,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 806,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 814,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 813,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 816,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 812,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 818,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 821,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 820,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 823,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 819,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 827,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 826,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 829,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 825,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 833,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 832,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 835,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 831,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 787,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 778,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 772,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 757,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 756,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 755,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
      lineNumber: 490,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
      lineNumber: 489,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
      lineNumber: 488,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collapse-simple mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "fm_collapse_3", title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "mb-0", children: "Files" }, void 0, false, {
      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
      lineNumber: 847,
      columnNumber: 93
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
      lineNumber: 847,
      columnNumber: 91
    }, this), collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3 row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-compact-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: " d-flex justify-content-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-soft-blue avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-file-excel-2-fill" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 859,
            columnNumber: 61
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 858,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 857,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 856,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "Website_content.exl" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 864,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "2,635 KB" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 865,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 863,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 852,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 871,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 870,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 869,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 878,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 877,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 876,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 875,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 886,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 885,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 888,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 884,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 892,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 891,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 894,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 890,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 898,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 897,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 900,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 896,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 904,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 903,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 906,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 902,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 910,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 909,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 912,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 908,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 914,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 917,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 916,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 919,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 915,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 923,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 922,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 925,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 921,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 929,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 928,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 931,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 927,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 883,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 874,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 868,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 851,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 850,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 849,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-compact-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: " d-flex justify-content-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-soft-danger avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-file-pdf-fill" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 949,
            columnNumber: 61
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 948,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 947,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 946,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "jampack.pdf" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 954,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "21.73 MB" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 955,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 953,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 942,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 961,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 960,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 959,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 968,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 967,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 966,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 965,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 976,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 975,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 978,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 974,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 982,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 981,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 984,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 980,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 988,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 987,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 990,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 986,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 994,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 993,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 996,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 992,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1e3,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 999,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1002,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 998,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1004,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1007,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1006,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1009,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1005,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1013,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1012,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1015,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1011,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1019,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1018,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1021,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1017,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 973,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 964,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 958,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 941,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 940,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 939,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-compact-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: " d-flex justify-content-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: mock7_default, alt: "user", className: "d-block img-fluid h-50p w-75p" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1037,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1036,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "jonas-kakaroto-KIPqvvTxl" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1040,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "4,178 KB" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1041,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1039,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 1032,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1047,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1046,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1045,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1054,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1053,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1052,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1051,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1062,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1061,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1064,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1060,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1068,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1067,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1070,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1066,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1074,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1073,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1076,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1072,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1080,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1079,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1082,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1078,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1086,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1085,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1088,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1084,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1090,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1093,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1092,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1095,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1091,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1099,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1098,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1101,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1097,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1105,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1104,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1107,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1103,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1059,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1050,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 1044,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1031,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1030,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1029,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-compact-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: " d-flex justify-content-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-soft-blue avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-folder-zip-fill" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1125,
            columnNumber: 61
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1124,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1123,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1122,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "themeforest-pack.zip" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1130,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "2.45 GB" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1131,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1129,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 1118,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1137,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1136,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1135,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1144,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1143,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1142,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1141,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1152,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1151,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1154,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1150,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1158,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1157,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1160,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1156,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1164,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1163,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1166,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1162,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1170,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1169,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1172,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1168,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1176,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1175,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1178,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1174,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1180,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1183,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1182,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1185,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1181,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1189,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1188,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1191,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1187,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1195,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1194,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1197,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1193,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1149,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1140,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 1134,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1117,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1116,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1115,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-compact-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: " d-flex justify-content-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-soft-light avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-keynote-fill" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1215,
            columnNumber: 61
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1214,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1213,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1212,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "presentation.keynote" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1220,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "20 KB" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1221,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1219,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 1208,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1227,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1226,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1225,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1234,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1233,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1232,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1231,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1242,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1241,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1244,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1240,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1248,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1247,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1250,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1246,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1254,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1253,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1256,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1252,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1260,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1259,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1262,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1258,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1266,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1265,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1268,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1264,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1270,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1273,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1272,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1275,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1271,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1279,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1278,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1281,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1277,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1285,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1284,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1287,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1283,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1239,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1230,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 1224,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1207,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1206,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1205,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-compact-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: " d-flex justify-content-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: mock5_default, alt: "user", className: "d-block img-fluid h-50p w-40p" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1303,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1302,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "joel-mott-LaK153ghdig" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1306,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "2,635 KB" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1307,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1305,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 1298,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1313,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1312,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1311,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1320,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1319,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1318,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1317,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1328,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1327,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1330,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1326,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1334,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1333,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1336,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1332,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1340,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1339,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1342,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1338,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1346,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1345,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1348,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1344,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1352,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1351,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1354,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1350,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1356,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1359,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1358,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1361,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1357,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1365,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1364,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1367,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1363,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1371,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1370,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1373,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1369,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1325,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1316,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 1310,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1297,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1296,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1295,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-compact-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: " d-flex justify-content-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-soft-blue avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-file-text-fill" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1391,
            columnNumber: 61
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1390,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1389,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1388,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "expenses.doc" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1396,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "2,635 KB" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1397,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1395,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 1384,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1403,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1402,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1401,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1410,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1409,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1408,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1407,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1418,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1417,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1420,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1416,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1424,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1423,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1426,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1422,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1430,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1429,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1432,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1428,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1436,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1435,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1438,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1434,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1442,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1441,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1444,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1440,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1446,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1449,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1448,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1451,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1447,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1455,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1454,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1457,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1453,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1461,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1460,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1463,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1459,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1415,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1406,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 1400,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1383,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1382,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1381,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-compact-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: " d-flex justify-content-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-soft-blue avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-file-text-fill" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1481,
            columnNumber: 61
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1480,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1479,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1478,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "minutes_meeting.doc" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1486,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "2,635 KB" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1487,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1485,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 1474,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1493,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1492,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1491,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1500,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1499,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1498,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1497,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1508,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1507,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1510,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1506,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1514,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1513,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1516,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1512,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1520,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1519,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1522,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1518,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1526,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1525,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1528,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1524,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1532,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1531,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1534,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1530,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1536,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1539,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1538,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1541,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1537,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1545,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1544,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1547,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1543,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1551,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1550,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1553,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1549,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1505,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1496,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 1490,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1473,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1472,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1471,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "file-compact-card card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { className: " d-flex justify-content-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media fmapp-info-trigger", onClick: () => dispatch({
          type: "show_fmInfo",
          showInfo: true
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-blue", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-file-word-2-fill" }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1571,
            columnNumber: 61
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1570,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1569,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1568,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: "proposal.doc" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1576,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-truncate fs-8 mb-2", children: "951 KB" }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1577,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1575,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 1564,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "file-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1583,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1582,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1581,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0 no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1590,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1589,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1588,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1587,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1598,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1597,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1600,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1596,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1604,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1603,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1606,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1602,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1610,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1609,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1612,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1608,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1616,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1615,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1618,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1614,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1622,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1621,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1624,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1620,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1626,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1629,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1628,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1631,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1627,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1635,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1634,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1637,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1633,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1641,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1640,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                  fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                  lineNumber: 1643,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
                lineNumber: 1639,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
              lineNumber: 1595,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
            lineNumber: 1586,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
          lineNumber: 1580,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1563,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1562,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
        lineNumber: 1561,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
      lineNumber: 848,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
      lineNumber: 847,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
      lineNumber: 846,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
    lineNumber: 39,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
    lineNumber: 38,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/file-manager/grid-view/route.jsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
};
_s(FmGrid, "XJzbkUw8PwFr4WEPuknUorYYQ9M=", false, function() {
  return [useGlobalStateContext];
});
_c = FmGrid;
var route_default = FmGrid;
var _c;
$RefreshReg$(_c, "FmGrid");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/file-manager/grid-view/route-6FHRYA2G.js.map
