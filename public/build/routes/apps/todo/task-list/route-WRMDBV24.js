import {
  AddNewTask_default
} from "/build/_shared/chunk-ORACPNRU.js";
import {
  HkInlineEdit_default
} from "/build/_shared/chunk-T524GDL3.js";
import {
  hk_alert_default
} from "/build/_shared/chunk-AOHHCEYO.js";
import "/build/_shared/chunk-NQ2SSAFE.js";
import {
  hk_chips_default
} from "/build/_shared/chunk-2QHYHO6V.js";
import {
  ConnectedDroppable,
  DragDropContext,
  PublicDraggable
} from "/build/_shared/chunk-AHXLRT5S.js";
import {
  nanoid
} from "/build/_shared/chunk-PUI2DGTL.js";
import {
  HkDropZone_default
} from "/build/_shared/chunk-OVUIRAHX.js";
import {
  avatar4_default
} from "/build/_shared/chunk-54CGHQVE.js";
import "/build/_shared/chunk-BRHXWRHF.js";
import "/build/_shared/chunk-JPGC5R3S.js";
import {
  avatar10_default
} from "/build/_shared/chunk-LDADEV53.js";
import {
  img_thumb1_default
} from "/build/_shared/chunk-PZUTWR2K.js";
import {
  hk_collapse_default
} from "/build/_shared/chunk-OT26VHP7.js";
import {
  avatar15_default
} from "/build/_shared/chunk-ZGGRJ3QC.js";
import {
  avatar6_default
} from "/build/_shared/chunk-CWUICKJG.js";
import {
  avatar9_default
} from "/build/_shared/chunk-VFRPT2WG.js";
import {
  avatar5_default
} from "/build/_shared/chunk-JQFY4KQJ.js";
import {
  avatar7_default
} from "/build/_shared/chunk-7XF6XEF7.js";
import {
  avatar13_default
} from "/build/_shared/chunk-WWUYITJG.js";
import {
  HkTooltip_default
} from "/build/_shared/chunk-5BLZWIUZ.js";
import {
  useWindowWidth
} from "/build/_shared/chunk-RBFUKTHB.js";
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
  align_center_default,
  archive_default,
  arrow_up_default,
  book_default,
  bookmark_default,
  calendar_default,
  chevron_down_default,
  chevron_up_default,
  clock_default,
  droplet_default,
  edit_2_default,
  edit_default,
  file_default,
  layout_default,
  link_default,
  list_default,
  more_vertical_default,
  paperclip_default,
  plus_default,
  plus_square_default,
  pocket_default,
  repeat_default,
  settings_default,
  star_default,
  tag_default,
  trash_2_default,
  user_default,
  x_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  Badge_default,
  Button_default,
  Card_default,
  Col_default,
  Container_default,
  Dropdown_default,
  Form_default,
  ListGroup_default,
  Nav_default,
  Pagination_default,
  Row_default,
  Tab_default
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

// app/routes/apps/todo/task-list/route.jsx
var import_react6 = __toESM(require_react(), 1);
var import_classnames4 = __toESM(require_classnames(), 1);

// app/routes/apps/todo/task-list/TaskInfo.jsx
var import_react = __toESM(require_react(), 1);
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/todo/task-list/TaskInfo.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/todo/task-list/TaskInfo.jsx"
  );
  import.meta.hot.lastModified = "1732600247987.509";
}
var TaskInfo = ({
  close
}) => {
  _s();
  const [recipients, setRecipients] = (0, import_react.useState)(["Framework", "Html"]);
  const [checkList, setCheckList] = (0, import_react.useState)([{
    label: "Video conference with canada Team",
    checked: true,
    editable: false
  }, {
    label: "Client objective meeting",
    checked: true,
    editable: false
  }, {
    label: "Invite jaqueline on video conference",
    checked: false,
    editable: false
  }]);
  const [teamCheckList, setTeamCheckList] = (0, import_react.useState)([{
    label: "Upgrade dependency on resources",
    checked: true,
    editable: false
  }, {
    label: "Invite jaqueline on video conference",
    checked: false,
    editable: false
  }]);
  const [newListLabel1, setnewListLabel1] = (0, import_react.useState)("");
  const [newListLabel2, setnewListLabel2] = (0, import_react.useState)("");
  const [showAddButton, setshowAddButton] = (0, import_react.useState)(true);
  const [newRecipient, setNewRecipient] = (0, import_react.useState)("");
  const [ApexChart, setApexChart] = (0, import_react.useState)();
  (0, import_react.useEffect)(() => {
    import("/build/_shared/react-apexcharts.min-EK7VHYIA.js").then((d) => setApexChart(() => d.default.default));
  }, []);
  const handleRecipients = () => {
    setRecipients((recipients2) => recipients2.concat(newRecipient));
  };
  const onEnter = ({
    key
  }) => {
    if (key === "Enter") {
      handleRecipients();
      setNewRecipient("");
    }
  };
  const handleCheck = (id, indx) => {
    if (id === "list1") {
      const newCheckList = [...checkList];
      newCheckList[indx].checked = !newCheckList[indx].checked;
      setCheckList(newCheckList);
    } else if (id === "list2") {
      const newCheckList = [...teamCheckList];
      newCheckList[indx].checked = !newCheckList[indx].checked;
      setTeamCheckList(newCheckList);
    }
  };
  const updateCheckList = (id, index) => {
    if (id === "label1") {
      const newCheckLists = [...checkList];
      newCheckLists[index].label = newListLabel1;
      newCheckLists[index].editable = false;
      setCheckList(newCheckLists);
      setnewListLabel1("");
    } else if (id === "label2") {
      const newCheckLists = [...teamCheckList];
      newCheckLists[index].label = newListLabel2;
      newCheckLists[index].editable = false;
      setTeamCheckList(newCheckLists);
      setnewListLabel2("");
    }
    setshowAddButton(!showAddButton);
  };
  const addItem = (id, event) => {
    event.preventDefault();
    if (id === "list-1") {
      const newItem = {
        id: nanoid(),
        label: "",
        checked: false,
        editable: true
      };
      setCheckList([...checkList, newItem]);
    } else if (id === "list-2") {
      const newItem = {
        id: nanoid(),
        label: "",
        checked: false,
        editable: true
      };
      setTeamCheckList([...teamCheckList, newItem]);
    }
    setshowAddButton(!showAddButton);
  };
  const deleteItem = (id, itemId) => {
    if (id === "list1") {
      const newList = [...checkList];
      newList.splice(itemId, 1);
      setCheckList(newList);
    } else if (id === "list2") {
      const newList = [...teamCheckList];
      newList.splice(itemId, 1);
      setTeamCheckList(newList);
    }
  };
  var options = {
    chart: {
      type: "radialBar",
      width: 50,
      height: 50,
      sparkline: {
        enabled: true
      }
    },
    colors: ["#007D88"],
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "80%"
        },
        track: {
          margin: 0,
          strokeWidth: "97%"
        }
      }
    },
    labels: ["8/12"]
  };
  const series = [85];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "task-info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "task-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center", children: [
        !ApexChart ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 196,
          columnNumber: 39
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ApexChart, { options, series, type: "radialBar", height: 50, width: 50 }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 196,
          columnNumber: 47
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { type: "checkbox", className: "mx-lg-3 ms-3", label: "Mark as completed", id: "customCheckcTask", defaultChecked: true }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 197,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-light", className: "flush-outline-hover d-lg-inline-block d-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_default, {}, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 202,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 201,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 200,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Copy Link" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 205,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 199,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 198,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "light", className: "btn-icon btn-rounded d-lg-none d-lg-inline-block ms-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(link_default, {}, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 212,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 211,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 210,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 209,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 208,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
        lineNumber: 195,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "task-options-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "task-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 221,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 220,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 219,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret ms-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 228,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 227,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 226,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 225,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Header, { children: "Action" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 233,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(edit_default, {}, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 236,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 235,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Assign to" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 238,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 234,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(user_default, {}, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 242,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 241,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Attach files" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 244,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 240,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(paperclip_default, {}, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 248,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 247,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Apply Labels" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 250,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 246,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tag_default, {}, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 254,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 253,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Set Due Date" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 256,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 252,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(calendar_default, {}, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 260,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 259,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Follow Task" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 262,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 258,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(bookmark_default, {}, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 266,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 265,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Set Due Date" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 268,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 264,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 270,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(arrow_up_default, {}, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 273,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 272,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Set as Top Priority" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 275,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 271,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(repeat_default, {}, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 279,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 278,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Change Status" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 281,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 277,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pocket_default, {}, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 285,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 284,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Save as Template" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 287,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 283,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(archive_default, {}, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 291,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 290,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Move to archive" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 293,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 289,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "delete-task", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 297,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 296,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Delete" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 299,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 295,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 232,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 224,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover close-task-info", onClick: close, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(x_default, {}, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 305,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 304,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 303,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 302,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
        lineNumber: 218,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
      lineNumber: 194,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "task-detail-body", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_alert_default, { variant: "primary", className: "alert-wth-icon", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "alert-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "zmdi zmdi-lock" }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 313,
          columnNumber: 90
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 313,
          columnNumber: 59
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 313,
          columnNumber: 25
        }, this),
        " This task is private for Jampack Team"
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
        lineNumber: 312,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkInlineEdit_default, { as: "h4", id: "editable1", className: "fw-bold mb-0", value: "Framworking Building" }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
        lineNumber: 316,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkInlineEdit_default, { as: "p", id: "editable2", className: "mb-0", value: "Instant rebuilding of assets during development" }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
        lineNumber: 317,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar-group avatar-group avatar-group-overlapped mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { title: "Katharine", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 322,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 321,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 320,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { title: "Dean", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 327,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 326,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 325,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { title: "Tom", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "T" }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 332,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 331,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 330,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { title: "Morgan", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 337,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 336,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 335,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { title: "Add New", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(plus_default, {}, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 344,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 343,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 342,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 341,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 340,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
        lineNumber: 319,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { as: Row_default, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-wth-divider my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Due Date" }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 353,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 352,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 351,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { md: 6, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-wth-divider my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Status" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 370,
            columnNumber: 75
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 370,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "warning", className: "btn-rounded dropdown-toggle", children: "In Progress" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 372,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Action" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 374,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Another action" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 375,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Something else here" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 376,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 377,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Separated link" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 378,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 373,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 371,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 369,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { md: 12, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-wth-divider my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Labels" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 383,
            columnNumber: 75
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 383,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex flex-wrap", children: [
            recipients.map((data, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_chips_default, { className: "mb-2 me-2", variant: "outline-secondary", dismissable: true, children: data }, i, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 385,
              columnNumber: 62
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", className: "border-0 p-0 shadow-none flex-1 mb-2 me-2", placeholder: "Add Chips", value: newRecipient, onChange: (e) => setNewRecipient(e.target.value), onKeyPress: onEnter }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 388,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 384,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 382,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
        lineNumber: 350,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Container, { defaultActiveKey: "checklist", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { justify: true, className: "nav-light nav-tabs nav-segmented-tabs active-theme mt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { eventKey: "checklist", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Checklist" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 396,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 395,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 394,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { eventKey: "comments", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text badge-on-text", children: "Comments" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 401,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 400,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 399,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { eventKey: "files", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text badge-on-text", children: "Files" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 406,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 405,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 404,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { eventKey: "activity", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text badge-on-text", children: "Activity" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 411,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 410,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 409,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 393,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Content, { className: "mt-7", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Pane, { eventKey: "checklist", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between mb-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-lg mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Checklist" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 418,
                columnNumber: 74
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 418,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "btn btn-xs btn-icon btn-rounded btn-light", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Add Category", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(plus_default, {}, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 419,
                  columnNumber: 248
                }, this),
                " "
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 419,
                columnNumber: 217
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 419,
                columnNumber: 194
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 419,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 417,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hk-checklist", children: [
              checkList.map((data, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { id: `check_${index}`, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Input, { type: "checkbox", checked: data.checked, onChange: () => handleCheck("list1", index) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 424,
                  columnNumber: 45
                }, this),
                !data.editable ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Label, { htmlFor: `check_${index}`, children: [
                  data.label,
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "done-strikethrough" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 427,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 425,
                  columnNumber: 63
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Label, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { className: "checklist-input", type: "text", placeholder: "Add new Item", value: newListLabel1, onChange: (e) => setnewListLabel1(e.target.value), onKeyPress: (e) => {
                  if (e.key === "Enter")
                    updateCheckList("label1", index);
                }, autoFocus: true }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 429,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 428,
                  columnNumber: 71
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "btn btn-xs btn-icon btn-rounded btn-flush-light flush-soft-hover delete-checklist", onClick: () => deleteItem("list1", index), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 436,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 435,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 434,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 433,
                  columnNumber: 45
                }, this)
              ] }, index, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 423,
                columnNumber: 69
              }, this)),
              showAddButton && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: (0, import_classnames.default)("d-flex align-items-center add-new-checklist"), onClick: (e) => addItem("list-1", e), children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon fe-x me-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(plus_square_default, {}, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 442,
                    columnNumber: 82
                  }, this),
                  " "
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 442,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "New Item" }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 443,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 441,
                columnNumber: 55
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 421,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-wth-divider flex-grow-1 my-4 me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Canada team task" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 447,
                columnNumber: 100
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 447,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "btn btn-xs btn-icon btn-rounded btn-flush-light flush-soft-hover delete-checklist", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(edit_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 450,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 449,
                  columnNumber: 253
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 449,
                  columnNumber: 230
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 449,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "btn btn-xs btn-icon btn-rounded btn-flush-light flush-soft-hover delete-checklist", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 452,
                  columnNumber: 205
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 452,
                  columnNumber: 174
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 452,
                  columnNumber: 151
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 452,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 448,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 446,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hk-checklist", children: [
              teamCheckList.map((data, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { id: `check_${index}_team`, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Input, { type: "checkbox", checked: data.checked, onChange: () => handleCheck("list2", index) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 457,
                  columnNumber: 45
                }, this),
                !data.editable ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Label, { htmlFor: `check_${index}_team`, children: [
                  data.label,
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "done-strikethrough" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 460,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 458,
                  columnNumber: 63
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Label, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { className: "checklist-input", type: "text", placeholder: "Add new Item", value: newListLabel2, onChange: (e) => setnewListLabel2(e.target.value), onKeyPress: (e) => {
                  if (e.key === "Enter")
                    updateCheckList("label2", index);
                }, autoFocus: true }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 462,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 461,
                  columnNumber: 71
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "btn btn-xs btn-icon btn-rounded btn-flush-light flush-soft-hover delete-checklist", onClick: () => deleteItem("list2", index), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_2_default, {}, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 469,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 468,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 467,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 466,
                  columnNumber: 45
                }, this)
              ] }, index, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 456,
                columnNumber: 73
              }, this)),
              showAddButton && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: (0, import_classnames.default)("d-flex align-items-center add-new-checklist"), onClick: (e) => addItem("list-2", e), children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon fe-x me-2", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(plus_square_default, {}, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 475,
                    columnNumber: 82
                  }, this),
                  " "
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 475,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "New Item" }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 476,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 474,
                columnNumber: 55
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 455,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between mt-5 mb-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-lg mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Notes" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 481,
                columnNumber: 74
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 481,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "btn btn-xs btn-icon btn-rounded btn-light", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Add Category", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(plus_default, {}, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 482,
                  columnNumber: 248
                }, this),
                " "
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 482,
                columnNumber: 217
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 482,
                columnNumber: 194
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 482,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 480,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card card-border note-block bg-orange-light-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-action-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { size: "xs", variant: "flus-soft", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 490,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 489,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 488,
                  columnNumber: 171
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 488,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Action" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 495,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Another action" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 496,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Something else here" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 497,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 498,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Separated link" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 499,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 494,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 487,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 486,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 506,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 505,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 504,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Martin Luther" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 510,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "9 Apr, 20, 7:14 AM" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 511,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 509,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 503,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "@",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "fw-medium", children: "Charlie Darvin" }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 514,
                  columnNumber: 45
                }, this),
                " From there, you can run grunt compile, grunt migrate and grunt test to compile your contracts, deploy those contracts to the network, and run their associated unit tests."
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 514,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 485,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 484,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card card-border note-block bg-orange-light-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card-action-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { size: "xs", variant: "flus-soft", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 523,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 522,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 521,
                  columnNumber: 171
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 521,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Action" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 528,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Another action" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 529,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Something else here" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 530,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 531,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Separated link" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 532,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 527,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 520,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 519,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar3_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 539,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 538,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 537,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Katherine Jones" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 543,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "8 Apr, 20, 5:30 PM" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 544,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 542,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 536,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                "@",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "fw-medium", children: "Martin Luther" }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 547,
                  columnNumber: 45
                }, this),
                ' Viscosity ratio for "Appear view" link text is 3.7:1 which is less '
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 547,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 518,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 517,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "btn btn-outline-light btn-block", children: "View more" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 550,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 416,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Pane, { eventKey: "comments", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between mb-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-lg mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "3 Responses" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 554,
                columnNumber: 74
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 554,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "btn btn-xs btn-icon btn-rounded btn-light", "data-bs-toggle": "tooltip", "data-bs-placement": "top", "data-bs-original-title": "Add Board", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(plus_default, {}, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 555,
                  columnNumber: 245
                }, this),
                " "
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 555,
                columnNumber: 214
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 555,
                columnNumber: 191
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 555,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 553,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "comment-block", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar4_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 561,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 560,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 559,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "cm-name", children: "Martin Luther" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 566,
                      columnNumber: 49
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "badge badge-soft-violet", children: "Manager" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 567,
                      columnNumber: 49
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 565,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                    "@",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "fw-medium", children: "Charlie Darvin" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 569,
                      columnNumber: 49
                    }, this),
                    " From there, you can run truffle compile, truffle migrate and truffle test to compile your contracts, deploy those contracts to the network, and run their associated unit tests."
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 569,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "comment-action-wrap mt-3", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "3 hours ago" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 571,
                      columnNumber: 49
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 572,
                      columnNumber: 49
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", children: "Reply" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 573,
                      columnNumber: 49
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 574,
                      columnNumber: 49
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", children: "Like" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 575,
                      columnNumber: 49
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 570,
                    columnNumber: 45
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 564,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 558,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 579,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 583,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 582,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 581,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "cm-name", children: "Katherine Jones" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 588,
                    columnNumber: 49
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 587,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                    "Dynamically beautiful work done by @",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "fw-medium", children: "Ashton Kutcher" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 590,
                      columnNumber: 84
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 590,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "comment-action-wrap mt-3", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "3 hours ago" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 592,
                      columnNumber: 49
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 593,
                      columnNumber: 49
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", children: "Reply" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 594,
                      columnNumber: 49
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 595,
                      columnNumber: 49
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", children: "Like" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 596,
                      columnNumber: 49
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 591,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar3_default, alt: "user", className: "avatar-img" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 601,
                      columnNumber: 57
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 600,
                      columnNumber: 53
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 599,
                      columnNumber: 49
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "cm-name", children: "Ashton Kutche" }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 606,
                          columnNumber: 57
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "badge badge-soft-danger", children: "Designer" }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 607,
                          columnNumber: 57
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 605,
                        columnNumber: 53
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                        "@",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "fw-medium", children: "Katherine Jones" }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 609,
                          columnNumber: 57
                        }, this),
                        " Thank you :)"
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 609,
                        columnNumber: 53
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "comment-action-wrap mt-3", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "3 hours ago" }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 611,
                          columnNumber: 57
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 612,
                          columnNumber: 57
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", children: "Reply" }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 613,
                          columnNumber: 57
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 614,
                          columnNumber: 57
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", children: "Like" }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 615,
                          columnNumber: 57
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 610,
                        columnNumber: 53
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 604,
                      columnNumber: 49
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 598,
                    columnNumber: 45
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 586,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 580,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 621,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "form-label", children: "Add Comment" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 624,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { className: "form-control", rows: 5 }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 625,
                    columnNumber: 45
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 623,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "btn btn-primary", children: "Send" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 628,
                    columnNumber: 45
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { className: "form-text text-muted mt-0", children: "Basic HTML is allowed" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 629,
                    columnNumber: 45
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 627,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 622,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 557,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 552,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Pane, { eventKey: "files", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkDropZone_default, { children: "Drop files here to upload" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 637,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 636,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 635,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-lg mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Shared files" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 643,
              columnNumber: 74
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 643,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 642,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collapse-simple", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "files_collapse_1", title: "Yesterday", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "sh-files", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-blue", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-file-excel-2-fill" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 654,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 653,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 652,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 651,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-name", children: "website_content.exl" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 660,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-size", children: "2,635 KB" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 661,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 659,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 665,
                        columnNumber: 69
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 664,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { size: "sm", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 671,
                          columnNumber: 81
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 670,
                          columnNumber: 77
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 669,
                          columnNumber: 73
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 668,
                          columnNumber: 69
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "ms-0", children: "Download" }, void 0, false, {
                            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                            lineNumber: 676,
                            columnNumber: 73
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "ms-0 link-danger", children: "Delete" }, void 0, false, {
                            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                            lineNumber: 677,
                            columnNumber: 73
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 675,
                          columnNumber: 69
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 667,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 663,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 658,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 650,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 649,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-file-text-fill" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 689,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 688,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 687,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 686,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-name", children: "jampack.pdf" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 695,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-size", children: "1.3 GB" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 696,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 694,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar3_default, alt: "user", className: "avatar-img" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 700,
                        columnNumber: 69
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 699,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { size: "sm", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 706,
                          columnNumber: 81
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 705,
                          columnNumber: 77
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 704,
                          columnNumber: 73
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 703,
                          columnNumber: 69
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "ms-0", children: "Download" }, void 0, false, {
                            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                            lineNumber: 711,
                            columnNumber: 73
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "ms-0 link-danger", children: "Delete" }, void 0, false, {
                            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                            lineNumber: 712,
                            columnNumber: 73
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 710,
                          columnNumber: 69
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 702,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 698,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 693,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 685,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 684,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-file-zip-fill" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 724,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 723,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 722,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 721,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-name", children: "themeforest-pack.zip" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 730,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-size", children: "2.45 GB" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 731,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 729,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-soft-danger avatar-rounded me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 735,
                        columnNumber: 69
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 734,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { size: "sm", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 741,
                          columnNumber: 81
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 740,
                          columnNumber: 77
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 739,
                          columnNumber: 73
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 738,
                          columnNumber: 69
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "ms-0", children: "Download" }, void 0, false, {
                            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                            lineNumber: 746,
                            columnNumber: 73
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "ms-0 link-danger", children: "Delete" }, void 0, false, {
                            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                            lineNumber: 747,
                            columnNumber: 73
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 745,
                          columnNumber: 69
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 737,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 733,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 728,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 720,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 719,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-logo avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar2_default, alt: "user" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 759,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 758,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 757,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 756,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-name", children: "bruce-mars-fiEG-Pk6ZASFPk6ZASF" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 765,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-size", children: "4,178 KB" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 766,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 764,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar5_default, alt: "user", className: "avatar-img" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 770,
                        columnNumber: 69
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 769,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { size: "sm", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 776,
                          columnNumber: 81
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 775,
                          columnNumber: 77
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 774,
                          columnNumber: 73
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 773,
                          columnNumber: 69
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "ms-0", children: "Download" }, void 0, false, {
                            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                            lineNumber: 781,
                            columnNumber: 73
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "ms-0 link-danger", children: "Delete" }, void 0, false, {
                            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                            lineNumber: 782,
                            columnNumber: 73
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 780,
                          columnNumber: 69
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 772,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 768,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 763,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 755,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 754,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-logo avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar2_default, alt: "user" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 794,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 793,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 792,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 791,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-name", children: "jonas-kakaroto-KIPqvvTKIPqvvT" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 800,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-size", children: "951 KB" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 801,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 799,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar6_default, alt: "user", className: "avatar-img" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 805,
                        columnNumber: 69
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 804,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { size: "sm", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 811,
                          columnNumber: 81
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 810,
                          columnNumber: 77
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 809,
                          columnNumber: 73
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 808,
                          columnNumber: 69
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "ms-0", children: "Download" }, void 0, false, {
                            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                            lineNumber: 816,
                            columnNumber: 73
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "ms-0 link-danger", children: "Delete" }, void 0, false, {
                            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                            lineNumber: 817,
                            columnNumber: 73
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 815,
                          columnNumber: 69
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 807,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 803,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 798,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 790,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 789,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 648,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 647,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "files_collapse_2", title: "23 April", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "sh-files", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-keynote-fill" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 833,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 832,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 831,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 830,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-name", children: "presentation.keynote" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 839,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-size", children: "20 KB" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 840,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 838,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar5_default, alt: "user", className: "avatar-img" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 844,
                        columnNumber: 69
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 843,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { size: "sm", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 850,
                          columnNumber: 81
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 849,
                          columnNumber: 77
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 848,
                          columnNumber: 73
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 847,
                          columnNumber: 69
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "ms-0", children: "Download" }, void 0, false, {
                            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                            lineNumber: 855,
                            columnNumber: 73
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "ms-0 link-danger", children: "Delete" }, void 0, false, {
                            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                            lineNumber: 856,
                            columnNumber: 73
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 854,
                          columnNumber: 69
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 846,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 842,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 837,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 829,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 828,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-file-zip-fill" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 868,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 867,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 866,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 865,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-name", children: "PACK-TRIAL.zip" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 874,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-size", children: "2.45 GB" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 875,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 873,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 879,
                        columnNumber: 69
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 878,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 883,
                        columnNumber: 73
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 882,
                        columnNumber: 69
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 881,
                        columnNumber: 208
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 881,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-menu dropdown-menu-end", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "dropdown-item ms-0", href: "#some", children: "Download" }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 885,
                          columnNumber: 69
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "dropdown-item ms-0", href: "#some", children: "Delete" }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 886,
                          columnNumber: 69
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 884,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 877,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 872,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 864,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 863,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: img_thumb1_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 896,
                    columnNumber: 65
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 895,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 894,
                    columnNumber: 57
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-name", children: "joel-mott-LaK153ghdigaghdi" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 901,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-size", children: "3,028 KB" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 902,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 900,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 906,
                        columnNumber: 69
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 905,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "btn btn-sm btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 910,
                        columnNumber: 73
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 909,
                        columnNumber: 69
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 908,
                        columnNumber: 208
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 908,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-menu dropdown-menu-end", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "dropdown-item ms-0", href: "#some", children: "Download" }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 912,
                          columnNumber: 69
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "dropdown-item ms-0", href: "#some", children: "Delete" }, void 0, false, {
                          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                          lineNumber: 913,
                          columnNumber: 69
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 911,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 904,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 899,
                    columnNumber: 57
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 893,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 892,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 827,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 826,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 646,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 645,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 634,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Pane, { eventKey: "activity", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-lg mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Latest activity" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 926,
              columnNumber: 74
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 926,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 925,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collapse-simple", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "activity_1", title: "Today", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default, { as: "ul", variant: "flush", className: "activity-list", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 935,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 934,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 933,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-dark", children: "Hencework" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 939,
                        columnNumber: 60
                      }, this),
                      " on Documentation link is working now - ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "link-url", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { children: "ttps://hencework.com/theme/jampa" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 939,
                        columnNumber: 181
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 939,
                        columnNumber: 144
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 939,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "last-activity-time", children: "Oct 15, 2021, 12:34 PM" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 940,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 938,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 932,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 931,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 948,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 947,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 946,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-dark", children: "Morgan Fregman" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 952,
                        columnNumber: 60
                      }, this),
                      " completed react conversion of ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { children: "components" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 952,
                        columnNumber: 181
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 952,
                        columnNumber: 140
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 952,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "last-activity-time", children: "Sep 16, 2021, 4:54 PM" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 953,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 951,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 945,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 944,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 961,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 960,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 959,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-dark", children: "Jimmy Carry" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 965,
                        columnNumber: 60
                      }, this),
                      "completed side bar menu on ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { children: "elements" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 965,
                        columnNumber: 174
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 965,
                        columnNumber: 133
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 965,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 966,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 964,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 958,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 957,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar7_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 974,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 973,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 972,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-dark", children: "Charlie Chaplin" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 978,
                        columnNumber: 60
                      }, this),
                      " deleted empty cards on ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { children: "completed" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 978,
                        columnNumber: 175
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 978,
                        columnNumber: 134
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 978,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 979,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 977,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 971,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 970,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 930,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 929,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "activity_2", title: "Yesterday", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default, { as: "ul", variant: "flush", className: "activity-list", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "W" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 991,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 990,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 989,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-dark", children: "Winston Churchills" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 995,
                        columnNumber: 60
                      }, this),
                      " created a note on UI components task list"
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 995,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "last-activity-time", children: "Sep 2, 2021, 9:23 AM" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 996,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 994,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 988,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 987,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1004,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1003,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1002,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-dark", children: "Morgan Fregman" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 1008,
                        columnNumber: 60
                      }, this),
                      " completed react conversion of ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { children: "components" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 1008,
                        columnNumber: 181
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 1008,
                        columnNumber: 140
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 1008,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "last-activity-time", children: "Sep 16, 2021, 4:54 PM" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 1009,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1007,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 1001,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 1e3,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1017,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1016,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1015,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-dark", children: "Jimmy Carry" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 1021,
                        columnNumber: 60
                      }, this),
                      "added shared components to ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { children: "basic structure" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 1021,
                        columnNumber: 174
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 1021,
                        columnNumber: 133
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 1021,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 1022,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1020,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 1014,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 1013,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1030,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1029,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1028,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-dark", children: "Hencework" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 1034,
                        columnNumber: 60
                      }, this),
                      " commented on ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", className: "link-default", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { children: "basic structure" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 1034,
                        columnNumber: 159
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 1034,
                        columnNumber: 118
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 1034,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 1035,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1033,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 1027,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 1026,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar7_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1043,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1042,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1041,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-dark", children: "Charlie Chaplin" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 1047,
                        columnNumber: 60
                      }, this),
                      " moved components from all modules to in progress"
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 1047,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 1048,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1046,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 1040,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 1039,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "W" }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1056,
                    columnNumber: 61
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1055,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1054,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-dark", children: "Winston Churchills" }, void 0, false, {
                        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                        lineNumber: 1060,
                        columnNumber: 60
                      }, this),
                      " created a note on UI components task list"
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 1060,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "last-activity-time", children: "Sep 10, 2021, 10:13 AM" }, void 0, false, {
                      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                      lineNumber: 1061,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                    lineNumber: 1059,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 1053,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                  lineNumber: 1052,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 986,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
                lineNumber: 985,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
              lineNumber: 928,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
            lineNumber: 924,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
          lineNumber: 415,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
        lineNumber: 392,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
      lineNumber: 311,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
    lineNumber: 193,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/task-list/TaskInfo.jsx",
    lineNumber: 192,
    columnNumber: 10
  }, this);
};
_s(TaskInfo, "wHZlT42YG0tmaqztJhTuI3JbAcg=");
_c = TaskInfo;
var TaskInfo_default = TaskInfo;
var _c;
$RefreshReg$(_c, "TaskInfo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/todo/task-list/TodoHeader.jsx
var import_classnames2 = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/todo/task-list/TodoHeader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/todo/task-list/TodoHeader.jsx"
  );
  import.meta.hot.lastModified = "1732600247987.909";
}
var TodoHeader = ({
  toggleSidebar,
  showSidebar,
  toggleInfo
}) => {
  _s2();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "todo-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex align-items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Toggle, { as: Link, to: "#", className: "todoapp-title link-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "All Tasks" }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
        lineNumber: 42,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
        lineNumber: 41,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Menu, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(align_center_default, {}, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
            lineNumber: 47,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
            lineNumber: 46,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "All Tasks" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
            lineNumber: 48,
            columnNumber: 36
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
          lineNumber: 45,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(list_default, {}, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
            lineNumber: 52,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
            lineNumber: 51,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "My Tasks" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
            lineNumber: 53,
            columnNumber: 36
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
          lineNumber: 50,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(clock_default, {}, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
            lineNumber: 57,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
            lineNumber: 56,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Pending Tasks" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
            lineNumber: 58,
            columnNumber: 36
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
          lineNumber: 55,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(droplet_default, {}, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
            lineNumber: 62,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
            lineNumber: 61,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "In Progress Tasks" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
            lineNumber: 63,
            columnNumber: 36
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
          lineNumber: 60,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
          lineNumber: 65,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: "Urgent Priority" }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
          lineNumber: 66,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: "High Priority" }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
          lineNumber: 67,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: "Low Priority" }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
          lineNumber: 68,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
        lineNumber: 44,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
      lineNumber: 40,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "todo-options-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default, { className: "d-sm-block d-none", role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "text", placeholder: "Search tasks" }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
        lineNumber: 74,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
        lineNumber: 73,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover hk-navbar-togglable", onClick: () => dispatch({
        type: "top_nav_toggle"
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: states.layoutState.topNavCollapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(chevron_down_default, {}, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
        lineNumber: 82,
        columnNumber: 70
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(chevron_up_default, {}, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
        lineNumber: 82,
        columnNumber: 88
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
        lineNumber: 81,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
        lineNumber: 80,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
        lineNumber: 79,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
        lineNumber: 76,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
      lineNumber: 72,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: (0, import_classnames2.default)("hk-sidebar-togglable", {
      "active": showSidebar
    }), onClick: toggleSidebar }, void 0, false, {
      fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
      lineNumber: 88,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/todo/task-list/TodoHeader.jsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
};
_s2(TodoHeader, "OVdtiISsix2HOQFhIOw6MKqd+SU=", false, function() {
  return [useGlobalStateContext];
});
_c2 = TodoHeader;
var TodoHeader_default = TodoHeader;
var _c2;
$RefreshReg$(_c2, "TodoHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/todo/task-list/TodoSidebar.jsx
var import_react4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/todo/task-list/TodoSidebar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/todo/task-list/TodoSidebar.jsx"
  );
  import.meta.hot.lastModified = "1732600247988.327";
}
var TodoSidebar = () => {
  _s3();
  const [addNewTask, setAddNewTask] = (0, import_react4.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "todoapp-sidebar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "menu-content-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "primary", className: "btn-rounded btn-block mb-4", onClick: () => setAddNewTask(!addNewTask), children: "Add Task" }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 36,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { className: "nav-light navbar-nav flex-column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { className: "active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { href: "#", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(layout_default, {}, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 43,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 42,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 41,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Overview" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 46,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
            lineNumber: 40,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
            lineNumber: 39,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(list_default, {}, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 53,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 52,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 51,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "My Tasks" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 56,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
            lineNumber: 50,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
            lineNumber: 49,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(calendar_default, {}, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 63,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 62,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 61,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Files" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 66,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
            lineNumber: 60,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
            lineNumber: 59,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(file_default, {}, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 73,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 72,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 71,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Activity" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 76,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
            lineNumber: 70,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
            lineNumber: 69,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 38,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 37,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 81,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "title-sm text-primary", children: "Priority" }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 82,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { className: "nav-light navbar-nav flex-column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { className: "link-with-badge", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_badge_default, { indicator: true, bg: "danger", className: "badge-indicator-lg me-2" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 87,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Urgent" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 88,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
            lineNumber: 86,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
            lineNumber: 85,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { className: "link-with-badge", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_badge_default, { indicator: true, bg: "orange", className: "badge-indicator-lg me-2" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 93,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "High" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 94,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
            lineNumber: 92,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
            lineNumber: 91,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { className: "link-with-badge", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_badge_default, { indicator: true, bg: "yellow", className: "badge-indicator-lg me-2" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 99,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Medium" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 100,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
            lineNumber: 98,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
            lineNumber: 97,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { className: "link-with-badge", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_badge_default, { indicator: true, bg: "gold", className: "badge-indicator-lg me-2" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 105,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Low" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
              lineNumber: 106,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
            lineNumber: 104,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
            lineNumber: 103,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 84,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 83,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
        lineNumber: 35,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "todoapp-fixednav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hk-toolbar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { className: "nav-light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { id: "tooltip2", placement: "top", title: "Settings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(settings_default, {}, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 122,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 121,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 120,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 119,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 118,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 117,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { id: "tooltip3", placement: "top", title: "Archive", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(archive_default, {}, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 133,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 132,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 131,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 130,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 129,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 128,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(HkTooltip_default, { id: "tooltip2", placement: "top", title: "Help", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(book_default, {}, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 144,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 143,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 142,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 141,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 140,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
          lineNumber: 139,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
        lineNumber: 116,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
        lineNumber: 115,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
        lineNumber: 114,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AddNewTask_default, { show: addNewTask, hide: () => setAddNewTask(false) }, void 0, false, {
      fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
      lineNumber: 154,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/todo/task-list/TodoSidebar.jsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_s3(TodoSidebar, "VKEL547Vz1928vc4wm3EaE1NByQ=");
_c3 = TodoSidebar;
var TodoSidebar_default = TodoSidebar;
var _c3;
$RefreshReg$(_c3, "TodoSidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/todo/task-list/Body.jsx
var import_react5 = __toESM(require_react(), 1);

// app/data/todo/todo-data.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/todo/todo-data.js"
  );
  import.meta.hot.lastModified = "1732600247881.979";
}
var DATASET = {
  tasks: {
    // Recently Assigned
    "task-1": {
      id: "task-1",
      checked: false,
      stared: true,
      task_name: "Video conference with Canada Team",
      priority: "High",
      indicator: "danger",
      task_time: [{ time: "Tomorrow", text: "primary" }],
      img: avatar7_default,
      badge: [{ text: "Calls", bg: "primary" }]
    },
    "task-2": {
      id: "task-2",
      checked: false,
      stared: false,
      task_name: "Client objective meeting",
      priority: "High",
      indicator: "warning",
      task_time: [{ time: "Yesterday", text: "danger" }],
      img: avatar9_default,
      badge: [{ text: "Conferences", bg: "violet" }]
    },
    "task-3": {
      id: "task-3",
      checked: false,
      stared: false,
      task_name: "Target market trend analysis on the go",
      indicator: "danger",
      task_time: [{ time: "Today", text: "primary" }],
      img: avatar7_default,
      badge: [{ text: "Meetings", bg: "pink" }]
    },
    "task-4": {
      id: "task-4",
      checked: false,
      stared: true,
      task_name: "Send revised proposal to Mr. Dow Jones",
      priority: "Low",
      indicator: "gold",
      task_time: [{ time: "Saturday", text: "" }],
      img: avatar10_default,
      badge: [{ text: "Project", bg: "orange" }]
    },
    "task-5": {
      id: "task-5",
      checked: false,
      stared: false,
      task_name: "Set up first call for demo",
      indicator: "warning",
      task_time: [{ time: "Sunday", text: "" }],
      init_avt: [{ text: "H", bg: "primary" }]
    },
    "task-6": {
      id: "task-6",
      checked: false,
      stared: true,
      task_name: "Upgrade dependency on resouces",
      priority: "Medium",
      indicator: "danger",
      task_time: [{ time: "27 Nov, 2020", text: "" }],
      img: avatar15_default,
      badge: [{ text: "Calls", bg: "primary" }]
    },
    "task-7": {
      id: "task-7",
      checked: false,
      stared: false,
      task_name: "Update contribution guidelines and licence",
      indicator: "danger",
      task_time: [{ time: "Today", text: "primary" }],
      img: avatar15_default,
      badge: [{ text: "Meetings", bg: "pink" }]
    },
    //Yesterday
    "task-8": {
      id: "task-8",
      checked: false,
      stared: false,
      task_name: "Fix tooltip word wrap/break rules",
      priority: "High",
      indicator: "warning",
      task_time: [{ time: "4 Days ago", text: "danger" }],
      img: avatar2_default,
      badge: [{ text: "Project", bg: "warning" }]
    },
    "task-9": {
      id: "task-9",
      checked: false,
      stared: false,
      task_name: "Redesigning the base model",
      priority: "Urgent",
      indicator: "warning",
      task_time: [{ time: "2 Aug, 2020", text: "" }],
      img: avatar13_default
    },
    "task-10": {
      id: "task-10",
      checked: false,
      stared: true,
      task_name: "Configure security analysis feature",
      priority: "Medium",
      indicator: "gold",
      task_time: [{ time: "8 Aug, 2020", text: "" }],
      img: avatar7_default,
      badge: [{ text: "Calls", bg: "primary" }]
    },
    "task-11": {
      id: "task-11",
      checked: false,
      stared: false,
      task_name: "Remove notifications panel from inbox",
      priority: "Urgent",
      indicator: "danger",
      task_time: [{ time: "24 Sep, 2020", text: "" }],
      img: avatar15_default,
      badge: [{ text: "Meetings", bg: "pink" }]
    },
    //15 July, 20
    "task-12": {
      id: "task-12",
      checked: false,
      stared: false,
      task_name: "Send an invite to join project",
      priority: "Low",
      indicator: "warning",
      task_time: [{ time: "Yesterday", text: "danger" }],
      img: avatar7_default,
      badge: [{ text: "Project", bg: "warning" }]
    },
    "task-13": {
      id: "task-13",
      checked: false,
      stared: false,
      task_name: "Connect to software tools",
      priority: "High",
      indicator: "danger",
      task_time: [{ time: "Saturday", text: "" }],
      img: avatar10_default
    },
    "task-14": {
      id: "task-14",
      checked: false,
      stared: false,
      task_name: "Speed up project review with planner",
      priority: "High",
      indicator: "danger",
      task_time: [{ time: "15 Oct, 2020", text: "" }],
      img: avatar9_default,
      badge: [{ text: "Calls", bg: "primary" }]
    }
  },
  cards: {
    "card-1": {
      id: "card-1",
      title: "Recently Assigned",
      taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5", "task-6", "task-7"]
    },
    "card-2": {
      id: "card-2",
      title: "Yesterday",
      taskIds: ["task-8", "task-9", "task-10", "task-11"]
    },
    "card-3": {
      id: "card-3",
      title: "15 July, 20",
      taskIds: ["task-12", "task-13", "task-14"]
    }
  },
  cardOrder: ["card-1", "card-2", "card-3"]
};

// app/routes/apps/todo/task-list/Task.jsx
var import_classnames3 = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/todo/task-list/Task.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/todo/task-list/Task.jsx"
  );
  import.meta.hot.lastModified = "1732600247986.347";
}
var Task = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PublicDraggable, { draggableId: props.task.id, index: props.index, children: (provided, snapshot) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: (0, import_classnames3.default)("advance-list-item single-task-list active-todo", {
    "selected": props.task.checked
  }), ref: provided.innerRef, ...provided.draggableProps, ...provided.dragHandleProps, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex align-items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Check, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            Form_default.Check.Input,
            {
              type: "checkbox"
            },
            void 0,
            false,
            {
              fileName: "app/routes/apps/todo/task-list/Task.jsx",
              lineNumber: 35,
              columnNumber: 33
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Check.Label, {}, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Task.jsx",
            lineNumber: 39,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/Task.jsx",
          lineNumber: 34,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: (0, import_classnames3.default)("todo-star", {
            " marked": props.task.stared
          }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(star_default, {}, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Task.jsx",
            lineNumber: 47,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Task.jsx",
            lineNumber: 46,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Task.jsx",
            lineNumber: 43,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_badge_default, { indicator: true, bg: props.task.indicator, className: "badge-indicator-xl d-md-inline-block d-none" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Task.jsx",
            lineNumber: 50,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "todo-text text-dark text-truncate", onClick: props.taskInfo, children: props.task.task_name }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Task.jsx",
            lineNumber: 51,
            columnNumber: 33
          }, this),
          props.task.priority && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Badge_default, { size: "sm", bg: "white", className: (0, import_classnames3.default)("badge-sm badge-outline badge-wth-indicator badge-wth-icon ms-3 d-lg-inline-block d-none", {
            "badge-danger": props.task.priority === "High" || props.task.priority === "Urgent"
          }, {
            "badge-warning": props.task.priority === "Low"
          }, {
            "badge-orange": props.task.priority === "Medium"
          }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "badge-dot ri-checkbox-blank-circle-fill" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/Task.jsx",
              lineNumber: 63,
              columnNumber: 45
            }, this),
            props.task.priority
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/task-list/Task.jsx",
            lineNumber: 62,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Task.jsx",
            lineNumber: 55,
            columnNumber: 57
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/Task.jsx",
          lineNumber: 42,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/task-list/Task.jsx",
        lineNumber: 32,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex flex-shrink-0 align-items-center ms-3", children: [
        props.task.task_time.map((ele, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: (0, import_classnames3.default)("todo-time d-lg-inline-block d-none me-3", `text-${ele.text}`), children: ele.time }, i, false, {
          fileName: "app/routes/apps/todo/task-list/Task.jsx",
          lineNumber: 70,
          columnNumber: 67
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded d-md-inline-block d-none", children: [
          props.task.img && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: props.task.img, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Task.jsx",
            lineNumber: 74,
            columnNumber: 52
          }, this),
          props.task.init_avt && props.task.init_avt.map((avt, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: (0, import_classnames3.default)("avatar avatar-xs avatar-rounded d-md-inline-block d-none", `avatar-${avt.bg}`), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: avt.text }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Task.jsx",
            lineNumber: 77,
            columnNumber: 41
          }, this) }, idx, false, {
            fileName: "app/routes/apps/todo/task-list/Task.jsx",
            lineNumber: 76,
            columnNumber: 95
          }, this))
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/Task.jsx",
          lineNumber: 73,
          columnNumber: 29
        }, this),
        props.task.badge && props.task.badge.map((bdg, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_badge_default, { bg: bdg.bg, className: "ms-3 d-md-inline-block d-none", children: bdg.text }, indx, false, {
          fileName: "app/routes/apps/todo/task-list/Task.jsx",
          lineNumber: 81,
          columnNumber: 86
        }, this)),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-light", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Task.jsx",
            lineNumber: 86,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Task.jsx",
            lineNumber: 85,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Task.jsx",
            lineNumber: 84,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Task.jsx",
            lineNumber: 83,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "edit-task", children: "Edit Task" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/Task.jsx",
              lineNumber: 91,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "view-task", children: "View Task" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/Task.jsx",
              lineNumber: 92,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "delete-task", onClick: () => props.onRemoveTask(props.task.id, props.cardId), children: "Delete Task" }, void 0, false, {
              fileName: "app/routes/apps/todo/task-list/Task.jsx",
              lineNumber: 93,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/task-list/Task.jsx",
            lineNumber: 90,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/Task.jsx",
          lineNumber: 82,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/task-list/Task.jsx",
        lineNumber: 69,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/task-list/Task.jsx",
      lineNumber: 31,
      columnNumber: 21
    }, this),
    provided.placeholder
  ] }, props.task.id, true, {
    fileName: "app/routes/apps/todo/task-list/Task.jsx",
    lineNumber: 28,
    columnNumber: 38
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/task-list/Task.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c4 = Task;
var Task_default = Task;
var _c4;
$RefreshReg$(_c4, "Task");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/todo/task-list/Board.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/todo/task-list/Board.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/todo/task-list/Board.jsx"
  );
  import.meta.hot.lastModified = "1732600247984.997";
}
var Board = (props) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "collapse-simple mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", wrapperClass: "card-border", targetId: props.card.id, title: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h5", { className: "mb-0", children: props.card.title }, void 0, false, {
    fileName: "app/routes/apps/todo/task-list/Board.jsx",
    lineNumber: 27,
    columnNumber: 106
  }, this), collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ConnectedDroppable, { droppableId: props.card.id, type: "task", children: (provided, snapshot) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Card_default.Body, { ref: provided.innerRef, ...provided.droppableProps, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "advance-list", children: [
    props.tasks.map((task, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Task_default, { task, index, cardId: props.card.id, onRemoveTask: props.onRemoveTask, taskInfo: props.taskInfo }, task.id, false, {
      fileName: "app/routes/apps/todo/task-list/Board.jsx",
      lineNumber: 31,
      columnNumber: 67
    }, this)),
    provided.placeholder
  ] }, void 0, true, {
    fileName: "app/routes/apps/todo/task-list/Board.jsx",
    lineNumber: 30,
    columnNumber: 29
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/task-list/Board.jsx",
    lineNumber: 29,
    columnNumber: 46
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/task-list/Board.jsx",
    lineNumber: 28,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/task-list/Board.jsx",
    lineNumber: 27,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/task-list/Board.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c5 = Board;
var Board_default = Board;
var _c5;
$RefreshReg$(_c5, "Board");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/todo/task-list/DragCard.jsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/todo/task-list/DragCard.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/todo/task-list/DragCard.jsx"
  );
  import.meta.hot.lastModified = "1732600247985.9";
}
var DragCard = ({
  cards,
  tasks,
  cardOrder,
  setCards,
  setTasks,
  setCardOrder,
  taskInfo
}) => {
  const reorderCards = (source, destination, draggableId) => {
    const newCardOrder = Array.from(cardOrder);
    newCardOrder.splice(source.index, 1);
    newCardOrder.splice(destination.index, 0, draggableId);
    setCardOrder(newCardOrder);
  };
  const reorderTasksWithinCard = (card, sourceIdx, destinationIdx, draggableId) => {
    const newTaskIds = Array.from(card.taskIds);
    newTaskIds.splice(sourceIdx, 1);
    newTaskIds.splice(destinationIdx, 0, draggableId);
    setCards({
      ...cards,
      [card.id]: {
        ...card,
        taskIds: newTaskIds
      }
    });
  };
  const moveTask = (start, finish, sourceIdx, destinationIdx, draggableId) => {
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(sourceIdx, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destinationIdx, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };
    setCards({
      ...cards,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish
    });
  };
  const onDragEnd = (result) => {
    const {
      destination,
      source,
      draggableId,
      type
    } = result;
    if (!destination || destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    if (type === "card") {
      reorderCards(source, destination, draggableId);
    } else {
      const start = cards[source.droppableId];
      const finish = cards[destination.droppableId];
      if (start.id === finish.id) {
        reorderTasksWithinCard(start, source.index, destination.index, draggableId);
      } else {
        moveTask(start, finish, source.index, destination.index, draggableId);
      }
    }
  };
  const onRemoveTask = (taskID, cardID) => {
    const newTaskIds = cards[cardID].taskIds.filter((id) => id !== taskID);
    setCards({
      ...cards,
      [cardID]: {
        ...cards[cardID],
        taskIds: newTaskIds
      }
    });
    delete tasks[taskID];
    setTasks(tasks);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DragDropContext, { onDragEnd, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ConnectedDroppable, { droppableId: "all-cards", direction: "vertical", type: "card", children: (provided) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { ...provided.droppableProps, ref: provided.innerRef, children: [
    cardOrder.map((id, index) => {
      const card = cards[id];
      const cardTasks = card.taskIds.map((taskId) => tasks[taskId]);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Board_default, { card, tasks: cardTasks, index, onRemoveTask, taskInfo }, card.id, false, {
        fileName: "app/routes/apps/todo/task-list/DragCard.jsx",
        lineNumber: 112,
        columnNumber: 18
      }, this);
    }),
    provided.placeholder
  ] }, void 0, true, {
    fileName: "app/routes/apps/todo/task-list/DragCard.jsx",
    lineNumber: 108,
    columnNumber: 30
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/task-list/DragCard.jsx",
    lineNumber: 107,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/task-list/DragCard.jsx",
    lineNumber: 106,
    columnNumber: 10
  }, this);
};
_c6 = DragCard;
var DragCard_default = DragCard;
var _c6;
$RefreshReg$(_c6, "DragCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/todo/task-list/Body.jsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/todo/task-list/Body.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/todo/task-list/Body.jsx"
  );
  import.meta.hot.lastModified = "1732600247985.508";
}
var Body = ({
  showInfo
}) => {
  _s4();
  const [dataset, setDataset] = (0, import_react5.useState)(DATASET);
  const [tasks, setTasks] = (0, import_react5.useState)(dataset.tasks);
  const [cards, setCards] = (0, import_react5.useState)(dataset.cards);
  const [cardOrder, setCardOrder] = (0, import_react5.useState)(dataset.cardOrder);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "todo-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Container_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "todo-toolbar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Form_default.Select, { size: "sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: 0, children: "Bulk actions" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Body.jsx",
            lineNumber: 42,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: 1, children: "One" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Body.jsx",
            lineNumber: 43,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: 2, children: "Two" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Body.jsx",
            lineNumber: 44,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: 3, children: "Three" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Body.jsx",
            lineNumber: 45,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/Body.jsx",
          lineNumber: 41,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "btn btn-sm btn-light ms-2", children: "Apply" }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/Body.jsx",
          lineNumber: 47,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Form_default.Select, { size: "sm", className: "d-xxl-inline-block d-none mx-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: 0, children: "Sort by date" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Body.jsx",
            lineNumber: 49,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: 1, children: "Sort By Time" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Body.jsx",
            lineNumber: 50,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: 2, children: "Sort By Category" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Body.jsx",
            lineNumber: 51,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: 3, children: "Sort By Priority" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Body.jsx",
            lineNumber: 52,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: 4, children: "Sort By Title" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Body.jsx",
            lineNumber: 53,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: 5, children: "Sort By Assignee" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Body.jsx",
            lineNumber: 54,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/Body.jsx",
          lineNumber: 48,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/task-list/Body.jsx",
        lineNumber: 40,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "paging-info d-xxl-inline-block d-none", children: "1 - 10 of 30" }, void 0, false, {
          fileName: "app/routes/apps/todo/task-list/Body.jsx",
          lineNumber: 58,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Pagination_default, { className: "custom-pagination pagination-simple m-0 ms-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Pagination_default.Prev, { disabled: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "ri-arrow-left-s-line" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Body.jsx",
            lineNumber: 61,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Body.jsx",
            lineNumber: 60,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Pagination_default.Item, { className: "paginate_button", children: "1" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Body.jsx",
            lineNumber: 63,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Pagination_default.Item, { className: "paginate_button", children: "2" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Body.jsx",
            lineNumber: 64,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Pagination_default.Next, { className: "paginate_button", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "ri-arrow-right-s-line" }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Body.jsx",
            lineNumber: 66,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/task-list/Body.jsx",
            lineNumber: 65,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/task-list/Body.jsx",
          lineNumber: 59,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/task-list/Body.jsx",
        lineNumber: 57,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/task-list/Body.jsx",
      lineNumber: 39,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DragCard_default, { cards, tasks, cardOrder, setCards, setTasks, setCardOrder, taskInfo: showInfo }, void 0, false, {
      fileName: "app/routes/apps/todo/task-list/Body.jsx",
      lineNumber: 72,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Row_default, { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "float-end text-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Pagination_default, { className: "custom-pagination pagination-simple active-theme", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Pagination_default.Prev, { disabled: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "ri-arrow-left-s-line" }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/Body.jsx",
        lineNumber: 79,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/Body.jsx",
        lineNumber: 78,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Pagination_default.Item, { active: true, children: "1" }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/Body.jsx",
        lineNumber: 81,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Pagination_default.Item, { children: "2" }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/Body.jsx",
        lineNumber: 84,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Pagination_default.Item, { children: "3" }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/Body.jsx",
        lineNumber: 87,
        columnNumber: 37
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Pagination_default.Next, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "ri-arrow-right-s-line" }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/Body.jsx",
        lineNumber: 91,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/Body.jsx",
        lineNumber: 90,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/task-list/Body.jsx",
      lineNumber: 77,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/todo/task-list/Body.jsx",
      lineNumber: 76,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/todo/task-list/Body.jsx",
      lineNumber: 75,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/todo/task-list/Body.jsx",
      lineNumber: 74,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/todo/task-list/Body.jsx",
    lineNumber: 38,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/task-list/Body.jsx",
    lineNumber: 37,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/task-list/Body.jsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_s4(Body, "BpkyIVWKTqB2DUxV3GFlMD0q1Qc=");
_c7 = Body;
var Body_default = Body;
var _c7;
$RefreshReg$(_c7, "Body");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/todo/task-list/route.jsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/todo/task-list/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/todo/task-list/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247988.71";
}
var TaskList = () => {
  _s5();
  const [showAppInfo, setShowAppInfo] = (0, import_react6.useState)(true);
  const [showSidebar, setShowSidebar] = (0, import_react6.useState)(false);
  const vpWidth = useWindowWidth();
  (0, import_react6.useEffect)(() => {
    if (vpWidth < 1199) {
      setShowAppInfo(false);
    }
  }, [vpWidth]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: (0, import_classnames4.default)("todoapp-wrap", {
    "todoapp-info-active": showAppInfo
  }, {
    "todoapp-sidebar-toggle": showSidebar
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TodoSidebar_default, {}, void 0, false, {
      fileName: "app/routes/apps/todo/task-list/route.jsx",
      lineNumber: 45,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "todoapp-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "todoapp-detail-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TodoHeader_default, { toggleSidebar: () => setShowSidebar(!showSidebar), showSidebar }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/route.jsx",
        lineNumber: 48,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Body_default, { showInfo: () => setShowAppInfo(true) }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/route.jsx",
        lineNumber: 49,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(TaskInfo_default, { close: () => setShowAppInfo(!showAppInfo) }, void 0, false, {
        fileName: "app/routes/apps/todo/task-list/route.jsx",
        lineNumber: 50,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/task-list/route.jsx",
      lineNumber: 47,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/todo/task-list/route.jsx",
      lineNumber: 46,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/todo/task-list/route.jsx",
    lineNumber: 40,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/todo/task-list/route.jsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
};
_s5(TaskList, "rPQHZJYJpuHz4Zyyq6Nddj5rlxo=", false, function() {
  return [useWindowWidth];
});
_c8 = TaskList;
var route_default = TaskList;
var _c8;
$RefreshReg$(_c8, "TaskList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/todo/task-list/route-WRMDBV24.js.map
