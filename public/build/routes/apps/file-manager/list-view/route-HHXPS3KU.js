import {
  mock8_default
} from "/build/_shared/chunk-YZ44NKFR.js";
import {
  mock7_default
} from "/build/_shared/chunk-MZZNQIWN.js";
import {
  hk_data_table_default
} from "/build/_shared/chunk-ZO24V7LS.js";
import {
  avatar14_default
} from "/build/_shared/chunk-F6BSWV7B.js";
import {
  avatar2_default
} from "/build/_shared/chunk-LLX7VWLD.js";
import {
  avatar13_default
} from "/build/_shared/chunk-WWUYITJG.js";
import {
  HkTooltip_default
} from "/build/_shared/chunk-NYEYMOIV.js";
import "/build/_shared/chunk-T44O2CY6.js";
import {
  avatar12_default
} from "/build/_shared/chunk-TDK3BLMN.js";
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
  trash_2_default,
  user_plus_default
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
  Dropdown_default,
  Nav_default,
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

// app/data/file-manager/fmListData.js
var import_react = __toESM(require_react(), 1);
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/data/file-manager/fmListData.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/file-manager/fmListData.js"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var NameFormater = (cell) => {
  _s();
  const {
    dispatch
  } = useGlobalStateContext();
  return cell.map((data2, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media fmapp-info-trigger", onClick: () => dispatch({
    type: "show_fmInfo",
    showInfo: true
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: [
      data2.icons && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("avatar avatar-icon avatar-sm", `avatar-soft-${data2.iconBg}`), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: `ri-${data2.icons}` }, void 0, false, {
        fileName: "app/data/file-manager/fmListData.js",
        lineNumber: 51,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/data/file-manager/fmListData.js",
        lineNumber: 50,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/data/file-manager/fmListData.js",
        lineNumber: 49,
        columnNumber: 36
      }, this),
      data2.img && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: data2.img, alt: "user", className: "d-block img-fluid w-50p" }, void 0, false, {
        fileName: "app/data/file-manager/fmListData.js",
        lineNumber: 54,
        columnNumber: 34
      }, this)
    ] }, void 0, true, {
      fileName: "app/data/file-manager/fmListData.js",
      lineNumber: 48,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-name", children: data2.fileName }, void 0, false, {
        fileName: "app/data/file-manager/fmListData.js",
        lineNumber: 57,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: data2.fileType }, void 0, false, {
        fileName: "app/data/file-manager/fmListData.js",
        lineNumber: 58,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/data/file-manager/fmListData.js",
      lineNumber: 56,
      columnNumber: 17
    }, this)
  ] }, indx, true, {
    fileName: "app/data/file-manager/fmListData.js",
    lineNumber: 44,
    columnNumber: 35
  }, this));
};
_s(NameFormater, "XJzbkUw8PwFr4WEPuknUorYYQ9M=", false, function() {
  return [useGlobalStateContext];
});
_c = NameFormater;
var sharingFormater = (cell) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar-group avatar-group-overlapped", children: cell.map((data2, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.default.Fragment, { children: [
    data2.img && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: "top", title: data2.userName, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-rounded", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Dean", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: data2.img, alt: "user", className: "avatar-img" }, void 0, false, {
      fileName: "app/data/file-manager/fmListData.js",
      lineNumber: 73,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/data/file-manager/fmListData.js",
      lineNumber: 72,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/data/file-manager/fmListData.js",
      lineNumber: 71,
      columnNumber: 34
    }, this),
    data2.intAvt && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: "top", title: data2.userName, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("avatar avatar-rounded", `avatar-soft-${data2.initAvtBg}`), "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Tom", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: data2.intAvt }, void 0, false, {
      fileName: "app/data/file-manager/fmListData.js",
      lineNumber: 78,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/data/file-manager/fmListData.js",
      lineNumber: 77,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/data/file-manager/fmListData.js",
      lineNumber: 76,
      columnNumber: 37
    }, this),
    data2.blank && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "-" }, void 0, false, {
      fileName: "app/data/file-manager/fmListData.js",
      lineNumber: 81,
      columnNumber: 36
    }, this)
  ] }, indx, true, {
    fileName: "app/data/file-manager/fmListData.js",
    lineNumber: 70,
    columnNumber: 39
  }, this)) }, void 0, false, {
    fileName: "app/data/file-manager/fmListData.js",
    lineNumber: 69,
    columnNumber: 10
  }, this);
};
var actionFormater = (cell) => {
  return cell.map((data2, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
      fileName: "app/data/file-manager/fmListData.js",
      lineNumber: 93,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/data/file-manager/fmListData.js",
      lineNumber: 92,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/data/file-manager/fmListData.js",
      lineNumber: 91,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/data/file-manager/fmListData.js",
      lineNumber: 90,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { as: Link, to: data2.preview, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 100,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 99,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Preview" }, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 102,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/file-manager/fmListData.js",
        lineNumber: 98,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(copy_default, {}, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 106,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 105,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Duplicate" }, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 108,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/file-manager/fmListData.js",
        lineNumber: 104,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(skip_forward_default, {}, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 112,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 111,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move" }, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 114,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/file-manager/fmListData.js",
        lineNumber: 110,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_plus_default, {}, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 118,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 117,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Invite" }, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 120,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/file-manager/fmListData.js",
        lineNumber: 116,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_2_default, {}, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 124,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 123,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Share Link" }, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 126,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/file-manager/fmListData.js",
        lineNumber: 122,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
        fileName: "app/data/file-manager/fmListData.js",
        lineNumber: 128,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(info_default, {}, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 131,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 130,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Details" }, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 133,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/file-manager/fmListData.js",
        lineNumber: 129,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(download_default, {}, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 137,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 136,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Download" }, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 139,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/file-manager/fmListData.js",
        lineNumber: 135,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 143,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 142,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
          fileName: "app/data/file-manager/fmListData.js",
          lineNumber: 145,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/data/file-manager/fmListData.js",
        lineNumber: 141,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/data/file-manager/fmListData.js",
      lineNumber: 97,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/data/file-manager/fmListData.js",
    lineNumber: 89,
    columnNumber: 17
  }, this) }, indx, false, {
    fileName: "app/data/file-manager/fmListData.js",
    lineNumber: 88,
    columnNumber: 35
  }, this));
};
var columns = [{
  accessor: "id",
  title: "Product ID",
  hidden: true
}, {
  accessor: "starred",
  title: "",
  hidden: true
}, {
  accessor: "name",
  title: "Name",
  sort: true,
  cellFormatter: NameFormater
  // events: {
  //     onClick: (e) => {
  //         e.preventDefault();
  //         sessionStorage.setItem("FmInfo", true);
  //     }
  // },
}, {
  accessor: "sharing",
  title: "Sharing",
  sort: true,
  cellFormatter: sharingFormater
}, {
  accessor: "modified",
  title: "Modified",
  sort: true
}, {
  accessor: "size",
  title: "Size",
  sort: true
}, {
  accessor: "actions",
  title: "Action",
  cellFormatter: actionFormater
}];
var data = [{
  id: 1,
  starred: true,
  name: [{
    icons: "file-excel-2-fill",
    iconBg: "blue",
    fileName: "Website_content.exl",
    fileType: "exel"
  }],
  sharing: [{
    img: avatar13_default,
    userName: "Dean"
  }, {
    img: avatar14_default,
    userName: "Danial"
  }],
  modified: "Today 11:02 AM",
  size: "2,637KB",
  actions: [{
    preview: "#"
  }]
}, {
  id: 2,
  starred: false,
  name: [{
    img: mock7_default,
    fileName: "bruce-mars-fiEG-Pk6ZEZLA",
    fileType: "png"
  }],
  sharing: [{
    intAvt: "B",
    initAvtBg: "success",
    userName: "Tom"
  }],
  modified: "Yesterday, 2:40 PM",
  size: "4,178 KB",
  actions: [{
    preview: "#"
  }]
}, {
  id: 3,
  starred: false,
  name: [{
    icons: "folder-2-fill",
    iconBg: "warning",
    fileName: "Jampack - HTML - v1.0",
    fileType: "folder"
  }],
  sharing: [{
    img: avatar2_default,
    userName: "Danial"
  }],
  modified: "13 Jul, 1:46 PM",
  size: "501 KB",
  actions: [{
    preview: "#"
  }]
}, {
  id: 4,
  starred: false,
  name: [{
    icons: "folder-zip-fill",
    iconBg: "blue",
    fileName: "themeforest-pack.zip",
    fileType: "zip"
  }],
  sharing: [{
    img: avatar12_default,
    userName: "Danial"
  }],
  modified: "10 Jun, 8:00 AM",
  size: "2.45 GB",
  actions: [{
    preview: "#"
  }]
}, {
  id: 5,
  starred: true,
  name: [{
    icons: "folder-5-fill",
    iconBg: "warning",
    fileName: "Jampack",
    fileType: "folder"
  }],
  sharing: [{
    blank: true
  }],
  modified: "24 Jun, 6:55 PM",
  size: "1.6 GB",
  actions: [{
    preview: "#"
  }]
}, {
  id: 6,
  starred: false,
  name: [{
    icons: "file-text-fill",
    iconBg: "blue",
    fileName: "minutes_meeting.doc",
    fileType: "document"
  }],
  sharing: [{
    img: avatar12_default,
    userName: "Dean"
  }, {
    img: avatar13_default,
    userName: "Danial"
  }],
  modified: "18 Feb, 12:25 PM",
  size: "20 KB",
  actions: [{
    preview: "#"
  }]
}, {
  id: 7,
  starred: false,
  name: [{
    icons: "file-text-fill",
    iconBg: "blue",
    fileName: "expenses.doc",
    fileType: "document"
  }],
  sharing: [{
    img: avatar12_default,
    userName: "Danial"
  }],
  modified: "12 Feb, 12:30 PM",
  size: "76.3 KB",
  actions: [{
    preview: "#"
  }]
}, {
  id: 8,
  starred: false,
  name: [{
    img: mock8_default,
    fileName: "joel-mott-LaK153ghdigdss",
    fileType: "jpeg"
  }],
  sharing: [{
    blank: true
  }],
  modified: "02 Jan, 4:32 PM",
  size: "3,028 KB",
  actions: [{
    preview: "#"
  }]
}, {
  id: 9,
  starred: false,
  name: [{
    icons: "file-word-fill",
    iconBg: "blue",
    fileName: "proposal.doc",
    fileType: "word document"
  }],
  sharing: [{
    img: avatar12_default,
    userName: "Katharine"
  }, {
    img: avatar13_default,
    userName: "Danial"
  }, {
    img: avatar14_default,
    userName: "Dean"
  }, {
    intAvt: "B",
    initAvtBg: "success",
    userName: "Tom"
  }],
  modified: "02 Jan, 9:45 AM",
  size: "951 KB",
  actions: [{
    preview: "#"
  }]
}, {
  id: 10,
  starred: false,
  name: [{
    icons: "file-pdf-fill",
    iconBg: "danger",
    fileName: "jampack.pdf",
    fileType: "pdf"
  }],
  sharing: [{
    blank: true
  }],
  modified: "Today, 4:30 PM",
  size: "21.73 MB",
  actions: [{
    preview: "#"
  }]
}];
var _c;
$RefreshReg$(_c, "NameFormater");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/file-manager/list-view/route.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/file-manager/list-view/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/file-manager/list-view/route.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var FmList = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fm-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "file-list-view", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tab_default.Container, { defaultActiveKey: "cloud_doc", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav_default, { as: "ul", variant: "tabs", className: "nav-line nav-icon nav-light", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav_default.Link, { eventKey: "cloud_doc", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-link-text", children: "Cloud Documents" }, void 0, false, {
        fileName: "app/routes/apps/file-manager/list-view/route.jsx",
        lineNumber: 33,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/list-view/route.jsx",
        lineNumber: 32,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/list-view/route.jsx",
        lineNumber: 31,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav_default.Link, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-link-text", children: "Shared with me" }, void 0, false, {
        fileName: "app/routes/apps/file-manager/list-view/route.jsx",
        lineNumber: 38,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/list-view/route.jsx",
        lineNumber: 37,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/file-manager/list-view/route.jsx",
        lineNumber: 36,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/file-manager/list-view/route.jsx",
      lineNumber: 30,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tab_default.Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tab_default.Pane, { eventKey: "cloud_doc", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(hk_data_table_default, { column: columns, rowData: data, rowSelection: true, markStarred: true, classes: "nowrap w-100 mb-5", responsive: true }, void 0, false, {
      fileName: "app/routes/apps/file-manager/list-view/route.jsx",
      lineNumber: 44,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/file-manager/list-view/route.jsx",
      lineNumber: 43,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/file-manager/list-view/route.jsx",
      lineNumber: 42,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/file-manager/list-view/route.jsx",
    lineNumber: 29,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/file-manager/list-view/route.jsx",
    lineNumber: 28,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/file-manager/list-view/route.jsx",
    lineNumber: 27,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/file-manager/list-view/route.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c2 = FmList;
var route_default = FmList;
var _c2;
$RefreshReg$(_c2, "FmList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/file-manager/list-view/route-HHXPS3KU.js.map
