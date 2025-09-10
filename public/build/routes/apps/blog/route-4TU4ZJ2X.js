import {
  hk_tags_default
} from "/build/_shared/chunk-KLXQ4KPF.js";
import {
  HkTooltip_default
} from "/build/_shared/chunk-5BLZWIUZ.js";
import {
  hk_badge_default
} from "/build/_shared/chunk-DSN3JJ3U.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  archive_default,
  book_default,
  chevron_down_default,
  chevron_up_default,
  edit_default,
  external_link_default,
  flag_default,
  grid_default,
  more_vertical_default,
  plus_default,
  refresh_cw_default,
  settings_default,
  slash_default,
  star_default,
  tag_default,
  trash_2_default,
  users_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  Button_default,
  Col_default,
  Dropdown_default,
  Form_default,
  Modal_default,
  Nav_default,
  Row_default
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
  Link,
  Outlet,
  useLocation
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

// app/routes/apps/blog/route.jsx
var import_react4 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// app/routes/apps/blog/BlogAppHeader.jsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/blog/BlogAppHeader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/blog/BlogAppHeader.jsx"
  );
  import.meta.hot.lastModified = "1732600247890.048";
}
var BlogAppHeader = ({
  toggleSidebar,
  showSidebar
}) => {
  _s();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  const {
    pathname
  } = useLocation();
  const postsRoute = pathname.match("/apps/blog/posts");
  const addNewPostRoute = pathname.match("/apps/blog/add-new-post");
  const postDetail = pathname.match("/apps/blog/post-detail");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "blog-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "blogapp-title link-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: [
        postsRoute && "Posts",
        addNewPostRoute && "Add New Post",
        postDetail && "Edit Post"
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
        lineNumber: 46,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      postDetail && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/apps/blog/add-new-post", className: "btn btn-soft-primary ms-3", children: "Add new" }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
        lineNumber: 52,
        columnNumber: 32
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-options-wrap", children: [
      postsRoute && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { as: "a", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "outline-light", className: "d-sm-inline-block d-none", children: "Manage" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
            lineNumber: 57,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(flag_default, {}, void 0, false, {
                fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
                lineNumber: 61,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
                lineNumber: 60,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Manage Post" }, void 0, false, {
                fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
                lineNumber: 63,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
              lineNumber: 59,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(grid_default, {}, void 0, false, {
                fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
                lineNumber: 67,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
                lineNumber: 66,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Manage Categories" }, void 0, false, {
                fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
                lineNumber: 69,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
              lineNumber: 65,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tag_default, {}, void 0, false, {
                fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
                lineNumber: 73,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
                lineNumber: 72,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Manage Tags" }, void 0, false, {
                fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
                lineNumber: 75,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
              lineNumber: 71,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
            lineNumber: 58,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
          lineNumber: 56,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret flex-shrink-0 d-lg-inline-block d-none", href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Refresh", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(refresh_cw_default, {}, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
          lineNumber: 83,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
          lineNumber: 82,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
          lineNumber: 81,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
          lineNumber: 80,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
          lineNumber: 79,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "v-separator  d-lg-inline-block d-none" }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
          lineNumber: 88,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
        lineNumber: 55,
        columnNumber: 32
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret flex-shrink-0  ms-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
          lineNumber: 94,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
          lineNumber: 93,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
          lineNumber: 92,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
          lineNumber: 91,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(users_default, {}, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
              lineNumber: 101,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
              lineNumber: 100,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Posts" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
              lineNumber: 103,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
            lineNumber: 99,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(settings_default, {}, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
              lineNumber: 107,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
              lineNumber: 106,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Settings" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
              lineNumber: 109,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
            lineNumber: 105,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(slash_default, {}, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
              lineNumber: 113,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
              lineNumber: 112,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Block Content" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
              lineNumber: 115,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
            lineNumber: 111,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(external_link_default, {}, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
              lineNumber: 119,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
              lineNumber: 118,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Feedback" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
              lineNumber: 121,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
            lineNumber: 117,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
          lineNumber: 98,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
        lineNumber: 90,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none", onClick: () => dispatch({
        type: "top_nav_toggle"
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: states.layoutState.topNavCollapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_down_default, {}, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
        lineNumber: 131,
        columnNumber: 70
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_up_default, {}, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
        lineNumber: 131,
        columnNumber: 88
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
        lineNumber: 130,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
        lineNumber: 129,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
        lineNumber: 128,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
        lineNumber: 125,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("hk-sidebar-togglable", {
      "active": !showSidebar
    }), onClick: toggleSidebar }, void 0, false, {
      fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
      lineNumber: 137,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/blog/BlogAppHeader.jsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
};
_s(BlogAppHeader, "0UkaAYJ6fqpxOB/3OtRtsVpRMYY=", false, function() {
  return [useGlobalStateContext, useLocation];
});
_c = BlogAppHeader;
var BlogAppHeader_default = BlogAppHeader;
var _c;
$RefreshReg$(_c, "BlogAppHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/blog/BlogAppSidebar.jsx
var import_react2 = __toESM(require_react(), 1);

// app/routes/apps/blog/AddNewCategory.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/blog/AddNewCategory.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/blog/AddNewCategory.jsx"
  );
  import.meta.hot.lastModified = "1732600247889.313";
}
var AddNewCategory = ({
  show,
  hide
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default, { show, onHide: hide, size: "sm", centered: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Body, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: hide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
      fileName: "app/routes/apps/blog/AddNewCategory.jsx",
      lineNumber: 29,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/blog/AddNewCategory.jsx",
      lineNumber: 28,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "text-uppercase fw-bold mb-3", children: "Add Category" }, void 0, false, {
      fileName: "app/routes/apps/blog/AddNewCategory.jsx",
      lineNumber: 31,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "text", placeholder: "Category Name" }, void 0, false, {
        fileName: "app/routes/apps/blog/AddNewCategory.jsx",
        lineNumber: 36,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/AddNewCategory.jsx",
        lineNumber: 35,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/AddNewCategory.jsx",
        lineNumber: 34,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/AddNewCategory.jsx",
        lineNumber: 33,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "primary", className: "float-end", onClick: hide, children: "Add" }, void 0, false, {
        fileName: "app/routes/apps/blog/AddNewCategory.jsx",
        lineNumber: 40,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/blog/AddNewCategory.jsx",
      lineNumber: 32,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/blog/AddNewCategory.jsx",
    lineNumber: 27,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/blog/AddNewCategory.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c2 = AddNewCategory;
var AddNewCategory_default = AddNewCategory;
var _c2;
$RefreshReg$(_c2, "AddNewCategory");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/blog/AddTag.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/blog/AddTag.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/blog/AddTag.jsx"
  );
  import.meta.hot.lastModified = "1732600247889.68";
}
var AddTag = ({
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal_default, { show, onHide: hide, size: "sm", centered: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal_default.Body, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: hide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
      fileName: "app/routes/apps/blog/AddTag.jsx",
      lineNumber: 46,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/blog/AddTag.jsx",
      lineNumber: 45,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { className: "text-uppercase fw-bold mb-3", children: "Add Tag" }, void 0, false, {
      fileName: "app/routes/apps/blog/AddTag.jsx",
      lineNumber: 48,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_tags_default, { options: multiSelectOpt, defaultValue: [multiSelectOpt[0], multiSelectOpt[1], multiSelectOpt[2], multiSelectOpt[3]] }, void 0, false, {
        fileName: "app/routes/apps/blog/AddTag.jsx",
        lineNumber: 53,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/AddTag.jsx",
        lineNumber: 52,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/AddTag.jsx",
        lineNumber: 51,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/AddTag.jsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "primary", className: "float-end", onClick: hide, children: "Add" }, void 0, false, {
        fileName: "app/routes/apps/blog/AddTag.jsx",
        lineNumber: 57,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/blog/AddTag.jsx",
      lineNumber: 49,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/blog/AddTag.jsx",
    lineNumber: 44,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/blog/AddTag.jsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
};
_c3 = AddTag;
var AddTag_default = AddTag;
var _c3;
$RefreshReg$(_c3, "AddTag");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/blog/BlogAppSidebar.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/blog/BlogAppSidebar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/blog/BlogAppSidebar.jsx"
  );
  import.meta.hot.lastModified = "1732600247890.736";
}
var BlogAppSidebar = () => {
  _s2();
  const [addCategory, setAddCategory] = (0, import_react2.useState)(false);
  const [addTags, setAddTags] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { className: "blogapp-sidebar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "menu-content-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/apps/blog/add-new-post", className: "btn btn-primary btn-rounded btn-block mb-4", children: "Create Post" }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 39,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default, { as: "ul", defaultActiveKey: "post", className: "nav-light navbar-nav flex-column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { eventKey: "post", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(users_default, {}, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 48,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 47,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 46,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Posts" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 51,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 45,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 44,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { eventKey: "published", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(star_default, {}, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 58,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 57,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 56,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Published" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 61,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 55,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 54,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { eventKey: "archived", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(archive_default, {}, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 68,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 67,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 66,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Archived" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 71,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 65,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 64,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { eventKey: "draft", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(edit_default, {}, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 78,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 77,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 76,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Draft" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 81,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 75,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 74,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { eventKey: "deleted", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(trash_2_default, {}, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 88,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 87,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 86,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Deleted" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 91,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 85,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 84,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 43,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 42,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "menu-gap" }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 96,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "nav-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Manage" }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 98,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 97,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default, { as: "ul", className: "nav-light navbar-nav flex-column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(flag_default, {}, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 106,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 105,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 104,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Manage Post" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 109,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 103,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 102,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(grid_default, {}, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 116,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 115,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 114,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Manage Categories" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 119,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 113,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 112,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(tag_default, {}, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 126,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 125,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 124,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Manage Tags" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 129,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 123,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 122,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 101,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 100,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 134,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "title-sm text-primary mb-0", children: "Categories" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 136,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { size: "xs", variant: "light", className: "btn-icon btn-rounded", onClick: () => setAddCategory(!addCategory), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: "top", title: "Add Category", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(plus_default, {}, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 141,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 140,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 139,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 138,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 137,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 135,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default, { as: "ul", className: "nav-light navbar-nav flex-column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { className: "link-badge-right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Design" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 151,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_badge_default, { pill: true, size: "sm", soft: true, bg: "primary", className: "ms-auto", children: "136" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 152,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 150,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 149,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { className: "link-badge-right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Development" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 157,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_badge_default, { pill: true, size: "sm", soft: true, bg: "primary", className: "ms-auto", children: "2" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 158,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 156,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 155,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { className: "link-badge-right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "User Interface" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 163,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_badge_default, { pill: true, size: "sm", soft: true, bg: "primary", className: "ms-auto", children: "86" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 164,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 162,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 161,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { className: "link-badge-right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Business" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 169,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_badge_default, { pill: true, size: "sm", soft: true, bg: "primary", className: "ms-auto", children: "34" }, void 0, false, {
              fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
              lineNumber: 170,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 168,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 167,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 148,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 147,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 175,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "title-sm text-primary mb-0", children: "Tags" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 177,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "light", size: "xs", className: "btn-icon btn-rounded", onClick: () => setAddTags(!addTags), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: "top", title: "Add Tag", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(plus_default, {}, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 182,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 181,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 180,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 179,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 178,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 176,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "tag-cloud", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "#", className: "badge badge-outline badge-light", children: "Collaboration" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 190,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "#", className: "badge badge-outline badge-light", children: "React Developer" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 191,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "#", className: "badge badge-outline badge-light", children: "Angular Developer" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 192,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "#", className: "badge badge-outline badge-light", children: "promotion" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 193,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "#", className: "badge badge-outline badge-light", children: "Advertisement" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
            lineNumber: 194,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 189,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 188,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
        lineNumber: 38,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "blogapp-fixednav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hk-toolbar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default, { as: "ul", className: "nav-light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { id: "tooltip2", placement: "top", title: "Settings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(settings_default, {}, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 208,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 207,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 206,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 205,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 204,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 203,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { id: "tooltip3", placement: "top", title: "Archive", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(archive_default, {}, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 219,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 218,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 217,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 216,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 215,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 214,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { id: "tooltip2", placement: "top", title: "Help", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(book_default, {}, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 230,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 229,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 228,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 227,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 226,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
          lineNumber: 225,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
        lineNumber: 202,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
        lineNumber: 201,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
        lineNumber: 200,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AddNewCategory_default, { show: addCategory, hide: () => setAddCategory(!addCategory) }, void 0, false, {
      fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
      lineNumber: 242,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AddTag_default, { show: addTags, hide: () => setAddTags(!addTags) }, void 0, false, {
      fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
      lineNumber: 244,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/blog/BlogAppSidebar.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_s2(BlogAppSidebar, "2wO36MsfJbhms1+f7gobKT3nHos=");
_c4 = BlogAppSidebar;
var BlogAppSidebar_default = BlogAppSidebar;
var _c4;
$RefreshReg$(_c4, "BlogAppSidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/blog/route.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/blog/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/blog/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247893.758";
}
var Blog = () => {
  _s3();
  const [showSidebar, setShowSidebar] = (0, import_react4.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: (0, import_classnames2.default)("blogapp-wrap", {
    "blogapp-sidebar-toggle": !showSidebar
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BlogAppSidebar_default, {}, void 0, false, {
      fileName: "app/routes/apps/blog/route.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "blogapp-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "blogapp-detail-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(BlogAppHeader_default, { toggleSidebar: () => setShowSidebar(!showSidebar), showSidebar }, void 0, false, {
        fileName: "app/routes/apps/blog/route.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/apps/blog/route.jsx",
        lineNumber: 38,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/blog/route.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/blog/route.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/blog/route.jsx",
    lineNumber: 31,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/blog/route.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s3(Blog, "O0tqdxfw1ryb5O1kO6vD3OVdeTk=");
_c5 = Blog;
var route_default = Blog;
var _c5;
$RefreshReg$(_c5, "Blog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/blog/route-4TU4ZJ2X.js.map
