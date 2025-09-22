import {
  ContactAppHeader_default
} from "/build/_shared/chunk-Z3JIM3C6.js";
import {
  ContactAppSidebar_default
} from "/build/_shared/chunk-2FNF4HHQ.js";
import "/build/_shared/chunk-QVKKGQ72.js";
import "/build/_shared/chunk-CXWPXLC3.js";
import {
  hk_data_table_default
} from "/build/_shared/chunk-ZO24V7LS.js";
import {
  hk_badge_default
} from "/build/_shared/chunk-YWRMJW47.js";
import {
  avatar10_default
} from "/build/_shared/chunk-LDADEV53.js";
import {
  avatar3_default
} from "/build/_shared/chunk-MVEBKFJK.js";
import {
  avatar7_default
} from "/build/_shared/chunk-7XF6XEF7.js";
import {
  avatar9_default
} from "/build/_shared/chunk-VFRPT2WG.js";
import {
  avatar2_default
} from "/build/_shared/chunk-LLX7VWLD.js";
import {
  avatar13_default
} from "/build/_shared/chunk-WWUYITJG.js";
import "/build/_shared/chunk-NYEYMOIV.js";
import "/build/_shared/chunk-T44O2CY6.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  archive_default,
  copy_default,
  edit_default,
  more_vertical_default,
  trash_2_default,
  trash_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import "/build/_shared/chunk-3LFZEH5W.js";
import {
  avatar1_default
} from "/build/_shared/chunk-B57YWHU6.js";
import {
  avatar8_default
} from "/build/_shared/chunk-WUHA5P4Y.js";
import {
  Link
} from "/build/_shared/chunk-DKEEJ4HZ.js";
import "/build/_shared/chunk-W2LHDNHE.js";
import {
  Button_default,
  Col_default,
  Dropdown_default,
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

// app/routes/apps/contact/contact-list/route.jsx
var import_react3 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// app/routes/apps/contact/contact-list/ContactAppBody.jsx
var import_react2 = __toESM(require_react(), 1);

// app/data/contact/contact-list.js
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/contact/contact-list.js"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var nameFormater = (cell) => {
  return cell.map((data2, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media align-items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("avatar avatar-xs avatar-rounded", data2.cstmAvt ? `avatar-soft-${data2.avtBg}` : ""), children: [
      data2.Img && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: data2.Img, alt: "user", className: "avatar-img" }, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 37,
        columnNumber: 38
      }, this),
      data2.cstmAvt && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: data2.cstmAvt }, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 38,
        columnNumber: 42
      }, this)
    ] }, void 0, true, {
      fileName: "app/data/contact/contact-list.js",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/data/contact/contact-list.js",
      lineNumber: 35,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "d-block text-high-em", children: data2.userName }, void 0, false, {
      fileName: "app/data/contact/contact-list.js",
      lineNumber: 42,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/data/contact/contact-list.js",
      lineNumber: 41,
      columnNumber: 17
    }, this)
  ] }, indx, true, {
    fileName: "app/data/contact/contact-list.js",
    lineNumber: 34,
    columnNumber: 13
  }, this));
};
var tagFormater = (cell) => {
  return cell.map((data2, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_badge_default, { bg: data2.bg, soft: true, className: "my-1  me-2", children: data2.title }, indx, false, {
    fileName: "app/data/contact/contact-list.js",
    lineNumber: 54,
    columnNumber: 13
  }, this));
};
var actionFormater = (cell) => {
  return cell.map((data2, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-dark", as: Link, to: data2.archiveLink, className: "btn-icon btn-rounded flush-soft-hover", "data-bs-toggle": "tooltip", "data-placement": "top", "data-bs-original-title": "Archive", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(archive_default, {}, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 68,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 67,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 66,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 65,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-dark", as: Link, to: data2.editLink, className: "btn-icon btn-rounded flush-soft-hover", "data-bs-toggle": "tooltip", "data-placement": "top", "data-bs-original-title": "Edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(edit_default, {}, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 75,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 74,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 73,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 72,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-dark", as: Link, to: data2.deleteLink, className: "btn-icon btn-rounded flush-soft-hover del-button", "data-bs-toggle": "tooltip", "data-placement": "top", "data-bs-original-title": "Delete", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_default, {}, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 82,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 81,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 80,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 79,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/data/contact/contact-list.js",
      lineNumber: 64,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", "aria-expanded": "false", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 91,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 90,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 89,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 88,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { as: Link, to: data2.editLink, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(edit_default, {}, void 0, false, {
            fileName: "app/data/contact/contact-list.js",
            lineNumber: 98,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/data/contact/contact-list.js",
            lineNumber: 97,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Edit Contact" }, void 0, false, {
            fileName: "app/data/contact/contact-list.js",
            lineNumber: 100,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/data/contact/contact-list.js",
          lineNumber: 96,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { as: Link, to: "#", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
            fileName: "app/data/contact/contact-list.js",
            lineNumber: 104,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/data/contact/contact-list.js",
            lineNumber: 103,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
            fileName: "app/data/contact/contact-list.js",
            lineNumber: 106,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/data/contact/contact-list.js",
          lineNumber: 102,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { as: Link, to: "#", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
            fileName: "app/data/contact/contact-list.js",
            lineNumber: 110,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/data/contact/contact-list.js",
            lineNumber: 109,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
            fileName: "app/data/contact/contact-list.js",
            lineNumber: 112,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/data/contact/contact-list.js",
          lineNumber: 108,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
          fileName: "app/data/contact/contact-list.js",
          lineNumber: 114,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Header, { className: "dropdown-header-bold", children: "Change Labels" }, void 0, false, {
          fileName: "app/data/contact/contact-list.js",
          lineNumber: 115,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { as: "a", href: "#", children: "Design" }, void 0, false, {
          fileName: "app/data/contact/contact-list.js",
          lineNumber: 116,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { as: "a", href: "#", children: "Developer" }, void 0, false, {
          fileName: "app/data/contact/contact-list.js",
          lineNumber: 117,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { as: "a", href: "#", children: "Inventory" }, void 0, false, {
          fileName: "app/data/contact/contact-list.js",
          lineNumber: 118,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { as: "a", href: "#", children: "Human Resource" }, void 0, false, {
          fileName: "app/data/contact/contact-list.js",
          lineNumber: 119,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/contact/contact-list.js",
        lineNumber: 95,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/data/contact/contact-list.js",
      lineNumber: 87,
      columnNumber: 17
    }, this)
  ] }, indx, true, {
    fileName: "app/data/contact/contact-list.js",
    lineNumber: 63,
    columnNumber: 13
  }, this));
};
var columns = [
  {
    accessor: "id",
    title: "Product ID",
    hidden: true
  },
  {
    accessor: "starred",
    title: "",
    hidden: true
  },
  {
    accessor: "name",
    title: "Name",
    sort: true,
    cellFormatter: nameFormater
  },
  {
    accessor: "email",
    title: "Email Address",
    sort: true,
    cellFormatter: (cell) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-truncate mw-150p d-block", children: cell }, void 0, false, {
      fileName: "app/data/contact/contact-list.js",
      lineNumber: 149,
      columnNumber: 34
    }, this)
  },
  {
    accessor: "phone",
    title: "Phone",
    sort: true
  },
  {
    accessor: "tags",
    title: "Tags",
    sort: true,
    cellFormatter: tagFormater
  },
  {
    accessor: "labels",
    title: "Labels",
    sort: true
  },
  {
    accessor: "dateCreated",
    title: "Date Created",
    sort: true
  },
  {
    accessor: "actions",
    title: "",
    cellFormatter: actionFormater
  }
];
var data = [
  {
    id: 1,
    starred: true,
    name: [{ Img: avatar1_default, userName: "Morgan Freeman" }],
    email: "morgan@jampack.com",
    phone: "+145 52 5689",
    tags: [{ title: "Promotion", bg: "violet" }, { title: "Collaborator", bg: "danger" }],
    labels: "Design",
    dateCreated: "13 Jan, 2020",
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 2,
    starred: true,
    name: [{ Img: avatar9_default, userName: "Huma Therman" }],
    email: "huma@clariesup.au",
    phone: "+234 48 2365",
    tags: [{ title: "Collaborator", bg: "danger" }, { title: "Angular Developer", bg: "success" }],
    labels: "Developer",
    dateCreated: "13 Jan, 2020",
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 3,
    starred: false,
    name: [{ cstmAvt: "C", avtBg: "info", userName: "Charlie Chaplin" }],
    email: "charlie@leernoca.monster",
    phone: "+741 56 7896",
    tags: [{ title: "Collaborator", bg: "danger" }],
    labels: "Inventory",
    dateCreated: "13 Jan, 2019",
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 4,
    starred: true,
    name: [{ Img: avatar10_default, userName: "Winston Churchil" }],
    email: "winston@worthniza.ga",
    phone: "+145 52 5463",
    tags: [{ title: "Promotion", bg: "danger" }, { title: "Advertisement", bg: "light" }],
    labels: "Human Resource",
    dateCreated: "13 Jan, 2020",
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 5,
    starred: false,
    name: [{ Img: avatar3_default, userName: "Jaquiline Joker" }],
    email: "jaquljoker@jampack.com",
    phone: "+145 53 4715",
    tags: [{ title: "Promotion", bg: "violet" }, { title: "Collaborator", bg: "danger" }],
    labels: "Design",
    dateCreated: "3 July, 2020",
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 6,
    starred: true,
    name: [{ Img: avatar7_default, userName: "Tom Cruz" }],
    email: "tomcz@jampack.com",
    phone: "+456 52 4862",
    tags: [{ title: "Collaborator", bg: "danger" }, { title: "Angular Developer", bg: "warning" }],
    labels: "Inventory",
    dateCreated: "24 Jun, 2019",
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 7,
    starred: false,
    name: [{ Img: avatar2_default, userName: "Danial Craig" }],
    email: "danialc@jampack.com",
    phone: "+145 52 5689",
    tags: [{ title: "Collaborator", bg: "danger" }],
    labels: "Developer",
    dateCreated: "24 Jun, 2019",
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 8,
    starred: false,
    name: [{ Img: avatar8_default, userName: "Katharine Jones" }],
    email: "joneskath@jampack.com",
    phone: "+741 56 7896",
    tags: [{ title: "Promotion", bg: "violet" }],
    labels: "Inventory",
    dateCreated: "24 Jun, 2019",
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 9,
    starred: true,
    name: [{ cstmAvt: "H", avtBg: "primary", userName: "Hence Work" }],
    email: "contact@hencework.com",
    phone: "+145 52 5463",
    tags: [{ title: "Promotion", bg: "violet" }],
    labels: "Design",
    dateCreated: "30 Mar, 2019",
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 10,
    starred: true,
    name: [{ Img: avatar13_default, userName: "Dean Shaw" }],
    email: "dean-shaw@poww.me",
    phone: "+234 48 2365",
    tags: [{ title: "Collaborator", bg: "danger" }, { title: "Angular Developer", bg: "success" }],
    labels: "Design",
    dateCreated: "21 Feb, 2019",
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  },
  {
    id: 11,
    starred: false,
    name: [{ cstmAvt: "J", avtBg: "danger", userName: "John Brother" }],
    email: "john@cryodrakon.info",
    phone: "+456 52 4862",
    tags: [{ title: "Promotion", bg: "violet" }, { title: "Collaborator", bg: "danger" }],
    labels: "Human Resource",
    dateCreated: "14 Jan, 2019",
    actions: [{ archiveLink: "#", editLink: "edit-contact", deleteLink: "#" }]
  }
];

// app/routes/apps/contact/contact-list/ContactAppBody.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/contact/contact-list/ContactAppBody.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/contact/contact-list/ContactAppBody.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var ContactAppBody = () => {
  _s();
  const [searchTerm, setSearchTerm] = (0, import_react2.useState)("");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "contact-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "collapse", id: "collapseQuick", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "quick-access-form-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default, { className: "quick-access-form border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { className: "gx-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 10, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "position-relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropify-square", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "file", className: "dropify-1" }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
          lineNumber: 39,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
          lineNumber: 38,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { className: "gx-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { lg: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { placeholder: "First name*", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 45,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 44,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { placeholder: "Last name*", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 48,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 47,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
            lineNumber: 43,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { lg: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { placeholder: "Email Id*", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 53,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 52,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { placeholder: "Phone", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 56,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 55,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
            lineNumber: 51,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { lg: 4, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { placeholder: "Department", type: "text" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 61,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 60,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Select, { id: "input_tags", multiple: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 1, children: "Collaborator" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
                lineNumber: 65,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 2, children: "Designer" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
                lineNumber: 66,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 3, children: "Developer" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
                lineNumber: 67,
                columnNumber: 61
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 64,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 63,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
            lineNumber: 59,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
          lineNumber: 42,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
          lineNumber: 41,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
        lineNumber: 37,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
        lineNumber: 36,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "primary", "data-bs-toggle": "collapse", "data-bs-target": "#collapseExample", "aria-expanded": "false", className: "btn-block", children: "Create New" }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
          lineNumber: 77,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
          lineNumber: 76,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "secondary", "data-bs-toggle": "collapse", disabled: true, "data-bs-target": "#collapseExample", "aria-expanded": "false", className: "btn-block", children: "Discard" }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
          lineNumber: 81,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
          lineNumber: 80,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
        lineNumber: 75,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
      lineNumber: 35,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
      lineNumber: 34,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
      lineNumber: 33,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
      lineNumber: 32,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "contact-list-view", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xs: 7, mb: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "contact-toolbar-left", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "d-xxl-flex d-none align-items-center mb-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Select, { size: "sm", className: "w-120p", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 1, children: "Bulk actions" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
                lineNumber: 96,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 2, children: "Edit" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
                lineNumber: 97,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 3, children: "Move to trash" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
                lineNumber: 98,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 95,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { size: "sm", variant: "light", className: "ms-2", children: "Apply" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 100,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
            lineNumber: 94,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "d-xxl-flex d-none align-items-center mb-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "flex-shrink-0 mb-0 me-2", children: "Sort by:" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 103,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Select, { size: "sm", className: "w-130p", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 1, children: "Date Created" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
                lineNumber: 105,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 2, children: "Date Edited" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
                lineNumber: 106,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 3, children: "Frequent Contacts" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
                lineNumber: 107,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 4, children: "Recently Added" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
                lineNumber: 108,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 104,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
            lineNumber: 102,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Select, { size: "sm", className: "d-flex align-items-center w-130p", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 1, children: "Export to CSV" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 112,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 2, children: "Export to PDF" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 113,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 3, children: "Send Message" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 114,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 4, children: "Delegate Access" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 115,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
            lineNumber: 111,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
          lineNumber: 93,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
          lineNumber: 92,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xs: 5, mb: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "contact-toolbar-right", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dataTables_filter", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { size: "sm", type: "search", placeholder: "Search", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
            lineNumber: 123,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
            lineNumber: 122,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
            lineNumber: 121,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dataTables_paginate paging_simple_numbers", id: "datable_1_paginate", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "pagination custom-pagination pagination-simple m-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "paginate_button page-item previous disabled", id: "datable_1_previous", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#some", "data-dt-idx": 0, tabIndex: 0, className: "page-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-arrow-left-s-line" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 130,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 129,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 128,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "paginate_button page-item active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#some", "data-dt-idx": 1, tabIndex: 0, className: "page-link", children: "1" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 134,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 133,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "paginate_button page-item ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#some", "data-dt-idx": 2, tabIndex: 0, className: "page-link", children: "2" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 137,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 136,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "paginate_button page-item next", id: "datable_1_next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#some", "data-dt-idx": 3, tabIndex: 0, className: "page-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-arrow-right-s-line" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 141,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 140,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
              lineNumber: 139,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
            lineNumber: 127,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
            lineNumber: 126,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
          lineNumber: 120,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
          lineNumber: 119,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
        lineNumber: 91,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(hk_data_table_default, { column: columns, rowData: data, rowsPerPage: 10, rowSelection: true, markStarred: true, searchQuery: searchTerm, classes: "nowrap w-100 mb-5", responsive: true }, void 0, false, {
        fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
        lineNumber: 150,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
      lineNumber: 89,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
    lineNumber: 31,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/contact/contact-list/ContactAppBody.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s(ContactAppBody, "a1cMJ8t0eYFnsCEdGcHtaGJdbCM=");
_c = ContactAppBody;
var ContactAppBody_default = ContactAppBody;
var _c;
$RefreshReg$(_c, "ContactAppBody");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/contact/contact-list/route.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/contact/contact-list/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/contact/contact-list/route.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var ContactList = () => {
  _s2();
  const [showSidebar, setShowSidebar] = (0, import_react3.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: (0, import_classnames2.default)("contactapp-wrap", {
    "contactapp-sidebar-toggle": showSidebar
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ContactAppSidebar_default, {}, void 0, false, {
      fileName: "app/routes/apps/contact/contact-list/route.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "contactapp-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "contactapp-detail-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ContactAppHeader_default, { toggleSidebar: () => setShowSidebar(!showSidebar), show: showSidebar }, void 0, false, {
        fileName: "app/routes/apps/contact/contact-list/route.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ContactAppBody_default, {}, void 0, false, {
        fileName: "app/routes/apps/contact/contact-list/route.jsx",
        lineNumber: 38,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/contact-list/route.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/contact-list/route.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/contact/contact-list/route.jsx",
    lineNumber: 31,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/contact/contact-list/route.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s2(ContactList, "Jn+Blp4AInVy8bzFY0VrkhtmHTg=");
_c2 = ContactList;
var route_default = ContactList;
var _c2;
$RefreshReg$(_c2, "ContactList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/contact/contact-list/route-QBTLRVRM.js.map
