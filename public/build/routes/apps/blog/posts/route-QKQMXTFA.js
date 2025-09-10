import {
  hk_data_table_default
} from "/build/_shared/chunk-QGWTCQ62.js";
import "/build/_shared/chunk-6N3H4K5U.js";
import {
  avatar10_default
} from "/build/_shared/chunk-LDADEV53.js";
import {
  avatar9_default
} from "/build/_shared/chunk-VFRPT2WG.js";
import {
  avatar7_default
} from "/build/_shared/chunk-7XF6XEF7.js";
import {
  avatar3_default
} from "/build/_shared/chunk-MVEBKFJK.js";
import {
  avatar2_default
} from "/build/_shared/chunk-LLX7VWLD.js";
import {
  hk_badge_default
} from "/build/_shared/chunk-DSN3JJ3U.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  more_vertical_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  Button_default,
  Col_default,
  Dropdown_default,
  Form_default,
  Nav_default,
  Row_default,
  Tab_default
} from "/build/_shared/chunk-KBRVI47E.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-HFWHD4VB.js";
import {
  require_classnames
} from "/build/_shared/chunk-CQ7UJNRQ.js";
import {
  avatar8_default
} from "/build/_shared/chunk-WUHA5P4Y.js";
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

// app/routes/apps/blog/posts/PostsTable.jsx
var import_react = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// app/data/blog/post-table.js
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/blog/post-table.js"
  );
  import.meta.hot.lastModified = "1732600247875.693";
}
var authorFormatter = (cell) => {
  return cell.map((data2, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media align-items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("avatar avatar-xs avatar-rounded", data2.initAvt ? `avatar-soft-${data2.avtBg}` : ""), children: [
      data2.Img && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: data2.Img, alt: "user", className: "avatar-img" }, void 0, false, {
        fileName: "app/data/blog/post-table.js",
        lineNumber: 33,
        columnNumber: 38
      }, this),
      data2.initAvt && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: data2.initAvt }, void 0, false, {
        fileName: "app/data/blog/post-table.js",
        lineNumber: 34,
        columnNumber: 42
      }, this)
    ] }, void 0, true, {
      fileName: "app/data/blog/post-table.js",
      lineNumber: 32,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/data/blog/post-table.js",
      lineNumber: 31,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "d-block", children: data2.authorName }, void 0, false, {
      fileName: "app/data/blog/post-table.js",
      lineNumber: 38,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/data/blog/post-table.js",
      lineNumber: 37,
      columnNumber: 17
    }, this)
  ] }, indx, true, {
    fileName: "app/data/blog/post-table.js",
    lineNumber: 30,
    columnNumber: 13
  }, this));
};
var tagFormatter = (cell) => {
  return cell.map((data2, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_badge_default, { bg: data2.bg, soft: true, className: "my-1  me-2", children: data2.title }, indx, false, {
    fileName: "app/data/blog/post-table.js",
    lineNumber: 50,
    columnNumber: 13
  }, this));
};
var seoFormatter = (cell) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_badge_default, { bg: cell, indicator: true, className: "badge-indicator-xl" }, void 0, false, {
    fileName: "app/data/blog/post-table.js",
    lineNumber: 57,
    columnNumber: 12
  }, this);
};
var actionFormatter = (cell) => {
  return cell.map((data2, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
      fileName: "app/data/blog/post-table.js",
      lineNumber: 69,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/data/blog/post-table.js",
      lineNumber: 68,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/data/blog/post-table.js",
      lineNumber: 67,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/data/blog/post-table.js",
      lineNumber: 66,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { as: "a", href: data2.actinLink, children: "Action" }, void 0, false, {
        fileName: "app/data/blog/post-table.js",
        lineNumber: 74,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Another action" }, void 0, false, {
        fileName: "app/data/blog/post-table.js",
        lineNumber: 75,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Something else here" }, void 0, false, {
        fileName: "app/data/blog/post-table.js",
        lineNumber: 76,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
        fileName: "app/data/blog/post-table.js",
        lineNumber: 77,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Separated link" }, void 0, false, {
        fileName: "app/data/blog/post-table.js",
        lineNumber: 78,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/data/blog/post-table.js",
      lineNumber: 73,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/data/blog/post-table.js",
    lineNumber: 65,
    columnNumber: 17
  }, this) }, indx, false, {
    fileName: "app/data/blog/post-table.js",
    lineNumber: 64,
    columnNumber: 13
  }, this));
};
var columns = [
  {
    accessor: "id",
    title: "ID"
  },
  {
    accessor: "title",
    title: "Title",
    sort: true,
    cellFormatter: (cell) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: cell }, void 0, false, {
      fileName: "app/data/blog/post-table.js",
      lineNumber: 96,
      columnNumber: 34
    }, this),
    tdClasses: "mw-250p text-truncate text-high-em"
  },
  {
    accessor: "author",
    title: "Author",
    // sort: true,
    cellFormatter: authorFormatter
  },
  {
    accessor: "categories",
    title: "Categories"
    // sort: true,
  },
  {
    accessor: "tags",
    title: "Tags",
    // sort: true,
    cellFormatter: tagFormatter
  },
  {
    accessor: "status",
    title: "Status"
    // sort: true,
  },
  {
    accessor: "date",
    title: "Date"
    // sort: true,
  },
  {
    accessor: "seo",
    title: "SEO",
    // sort: true,
    cellFormatter: seoFormatter
  },
  {
    accessor: "actions",
    title: "Actions",
    cellFormatter: actionFormatter
  }
];
var data = [
  {
    id: 110,
    title: "Building an effective Dashboard User Interface design",
    author: [{ Img: avatar2_default, authorName: "Morgan Freeman" }],
    categories: "design",
    tags: [{ title: "Promotion", bg: "violet" }, { title: "Collaborator", bg: "danger" }],
    status: "Published",
    date: "13 Jan, 2020",
    seo: "primary",
    actions: [{ actionLink: "#" }]
  },
  {
    id: 109,
    title: "Testing Post",
    author: [{ Img: avatar9_default, authorName: "Huma Therman" }],
    categories: "Development",
    tags: [{ title: "Collaborator", bg: "danger" }],
    status: "Draft",
    date: "13 Jan, 2020",
    seo: "light",
    actions: [{ actionLink: "#" }]
  },
  {
    id: 108,
    title: "Untitled Post",
    author: [{ initAvt: "C", avtBg: "success", authorName: "Charlie Chaplin" }],
    categories: "design",
    tags: [{ title: "Collaborator", bg: "danger" }],
    status: "Draft",
    date: "13 Jan, 2019",
    seo: "light",
    actions: [{ actionLink: "#" }]
  },
  {
    id: 106,
    title: "Remote Work &amp; Collaboration in Design",
    author: [{ Img: avatar10_default, authorName: "Winston Churcchil" }],
    categories: "design",
    tags: [{ title: "Promotion", bg: "violet" }, { title: "Advertisement", bg: "light" }],
    status: " Published",
    date: "13 Jan, 2020",
    seo: "danger",
    actions: [{ actionLink: "#" }]
  },
  {
    id: 105,
    title: "What are empty states in application?",
    author: [{ Img: avatar3_default, authorName: "Jaquiline Joker" }],
    categories: "design",
    tags: [{ title: "Promotion", bg: "violet" }, { title: "Collaborator", bg: "danger" }],
    status: " Published",
    date: "13 Jan, 2020",
    seo: "warning",
    actions: [{ actionLink: "#" }]
  },
  {
    id: 104,
    title: "How to keep your code simple and orderly that any developer can pick up easily?",
    author: [{ Img: avatar7_default, authorName: "Tom Cruz" }],
    categories: "Development",
    tags: [{ title: "Collaborator", bg: "danger" }, { title: "Angular Development", bg: "success" }],
    status: " Published",
    date: "13 Jan, 2020",
    seo: "primary",
    actions: [{ actionLink: "#" }]
  },
  {
    id: 107,
    title: "Untitled post",
    author: [{ initAvt: "D", avtBg: "danger", authorName: "Daniel Craig" }],
    categories: "design",
    tags: [{ title: "Collaborator", bg: "danger" }, { title: "Angular Development", bg: "success" }],
    status: " Draft",
    date: "13 Jan, 2020",
    seo: "light",
    actions: [{ actionLink: "#" }]
  },
  {
    id: 103,
    title: "Sass based solid core framework",
    author: [{ initAvt: "H", avtBg: "primary", authorName: "Hence work" }],
    categories: "User Interface",
    tags: [{ title: "Promotion", bg: "violet" }],
    status: " Draft",
    date: "13 Jan, 2020",
    seo: "light",
    actions: [{ actionLink: "#" }]
  },
  {
    id: 102,
    title: "Marvin - Bootstrap 4.5.0 Admin Dashboard template",
    author: [{ Img: avatar8_default, authorName: "Huma Therman" }],
    categories: "design",
    tags: [{ title: "Promotion", bg: "violet" }],
    status: " Published",
    date: "13 Jan, 2020",
    seo: "primary",
    actions: [{ actionLink: "#" }]
  },
  {
    id: 101,
    title: "Go miles away",
    author: [{ Img: avatar8_default, authorName: "Huma Therman" }],
    categories: "Business",
    tags: [{ title: "Promotion", bg: "violet" }],
    status: " Published",
    date: "13 Jan, 2020",
    seo: "primary",
    actions: [{ actionLink: "#" }]
  }
];

// app/routes/apps/blog/posts/PostsTable.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/blog/posts/PostsTable.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/blog/posts/PostsTable.jsx"
  );
  import.meta.hot.lastModified = "1732600247893.073";
}
var PostsTable = () => {
  _s();
  const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { className: "mb-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xs: 7, mb: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "blog-toolbar-left", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "d-xxl-flex d-none align-items-center mb-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Select, { size: "sm", className: "w-120p", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 1, children: "Bulk actions" }, void 0, false, {
              fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
              lineNumber: 37,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 2, children: "Edit" }, void 0, false, {
              fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
              lineNumber: 38,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 3, children: "Move to trash" }, void 0, false, {
              fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
              lineNumber: 39,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
            lineNumber: 36,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { size: "sm", variant: "light", className: "ms-2", children: "Apply" }, void 0, false, {
            fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
            lineNumber: 41,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
          lineNumber: 35,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "d-xxl-flex d-none align-items-center mb-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "flex-shrink-0 mb-0 me-2", children: "Sort by:" }, void 0, false, {
            fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
            lineNumber: 44,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Select, { size: "sm", className: "w-130p", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 1, children: "Date Created" }, void 0, false, {
              fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
              lineNumber: 46,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 2, children: "Date Edited" }, void 0, false, {
              fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
              lineNumber: 47,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 3, children: "Frequent Contacts" }, void 0, false, {
              fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
              lineNumber: 48,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 4, children: "Recently Added" }, void 0, false, {
              fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
              lineNumber: 49,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
            lineNumber: 45,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
          lineNumber: 43,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Select, { size: "sm", className: "d-flex align-items-center w-130p", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 1, children: "Export to CSV" }, void 0, false, {
            fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
            lineNumber: 53,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 2, children: "Export to PDF" }, void 0, false, {
            fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
            lineNumber: 54,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 3, children: "Send Message" }, void 0, false, {
            fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
            lineNumber: 55,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 4, children: "Delegate Access" }, void 0, false, {
            fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
            lineNumber: 56,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
          lineNumber: 52,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
        lineNumber: 34,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xs: 5, mb: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "blog-toolbar-right", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dataTables_filter", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { size: "sm", type: "search", placeholder: "Search", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }, void 0, false, {
          fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
          lineNumber: 64,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
          lineNumber: 63,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
          lineNumber: 62,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dataTables_paginate paging_simple_numbers", id: "datable_1_paginate", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "pagination custom-pagination pagination-simple m-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: (0, import_classnames2.default)("paginate_button page-item previous"), id: "datable_1_previous", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "#", className: "page-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-arrow-left-s-line" }, void 0, false, {
            fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
            lineNumber: 71,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
            lineNumber: 70,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
            lineNumber: 69,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: (0, import_classnames2.default)("paginate_button page-item next"), id: "datable_1_next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "#", className: "page-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-arrow-right-s-line" }, void 0, false, {
            fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
            lineNumber: 76,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
            lineNumber: 75,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
            lineNumber: 74,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
          lineNumber: 68,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
          lineNumber: 67,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
        lineNumber: 61,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
        lineNumber: 60,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
      lineNumber: 32,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(hk_data_table_default, { column: columns, rowData: data, rowSelection: true, rowsPerPage: 10, searchQuery: searchTerm, classes: "nowrap w-100 mb-5", responsive: true }, void 0, false, {
      fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
      lineNumber: 85,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/blog/posts/PostsTable.jsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_s(PostsTable, "+YdqPTpSlp4r5CWiFEQiF/UjThM=");
_c = PostsTable;
var PostsTable_default = PostsTable;
var _c;
$RefreshReg$(_c, "PostsTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/blog/posts/route.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/blog/posts/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/blog/posts/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247893.462";
}
var PostBody = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "blog-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "post-list", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tab_default.Container, { defaultActiveKey: "allPost", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { variant: "tabs", className: "nav-line nav-icon nav-light", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { eventKey: "allPost", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "All Posts" }, void 0, false, {
          fileName: "app/routes/apps/blog/posts/route.jsx",
          lineNumber: 33,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "badge badge-pill badge-sm badge-soft-secondary ms-1", children: "10" }, void 0, false, {
          fileName: "app/routes/apps/blog/posts/route.jsx",
          lineNumber: 34,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/posts/route.jsx",
        lineNumber: 32,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/posts/route.jsx",
        lineNumber: 31,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/posts/route.jsx",
        lineNumber: 30,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Published" }, void 0, false, {
          fileName: "app/routes/apps/blog/posts/route.jsx",
          lineNumber: 41,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "badge badge-pill badge-sm badge-soft-secondary ms-1", children: "6" }, void 0, false, {
          fileName: "app/routes/apps/blog/posts/route.jsx",
          lineNumber: 42,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/posts/route.jsx",
        lineNumber: 40,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/posts/route.jsx",
        lineNumber: 39,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/posts/route.jsx",
        lineNumber: 38,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Trash" }, void 0, false, {
          fileName: "app/routes/apps/blog/posts/route.jsx",
          lineNumber: 49,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "badge badge-pill badge-sm badge-soft-secondary ms-1", children: "4" }, void 0, false, {
          fileName: "app/routes/apps/blog/posts/route.jsx",
          lineNumber: 50,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/posts/route.jsx",
        lineNumber: 48,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/posts/route.jsx",
        lineNumber: 47,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/posts/route.jsx",
        lineNumber: 46,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/blog/posts/route.jsx",
      lineNumber: 29,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tab_default.Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tab_default.Pane, { eventKey: "allPost", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PostsTable_default, {}, void 0, false, {
      fileName: "app/routes/apps/blog/posts/route.jsx",
      lineNumber: 57,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/blog/posts/route.jsx",
      lineNumber: 56,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/blog/posts/route.jsx",
      lineNumber: 55,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/blog/posts/route.jsx",
    lineNumber: 28,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/blog/posts/route.jsx",
    lineNumber: 27,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/blog/posts/route.jsx",
    lineNumber: 26,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/blog/posts/route.jsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
};
_c2 = PostBody;
var route_default = PostBody;
var _c2;
$RefreshReg$(_c2, "PostBody");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/blog/posts/route-QKQMXTFA.js.map
