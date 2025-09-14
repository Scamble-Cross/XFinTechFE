import {
  DateRangePicker
} from "/build/_shared/chunk-XROUZ3B7.js";
import {
  HkTooltip_default
} from "/build/_shared/chunk-NYEYMOIV.js";
import {
  plus_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import {
  Link
} from "/build/_shared/chunk-DKEEJ4HZ.js";
import {
  Button_default,
  Col_default,
  Form_default,
  Modal_default,
  Row_default
} from "/build/_shared/chunk-VRR24KJX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-KTLBVDTS.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/apps/todo/AddNewTask.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/todo/AddNewTask.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/todo/AddNewTask.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var AddNewTask = ({
  show,
  hide
}) => {
  const hideCalender = (ev, picker) => {
    picker.container.find(".calendar-table").hide();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { show, onHide: hide, centered: true, className: "add-new-contact", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: hide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
        fileName: "app/routes/apps/todo/AddNewTask.jsx",
        lineNumber: 36,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/todo/AddNewTask.jsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Title, { as: "h5", className: "mb-4", children: "Add New Task" }, void 0, false, {
        fileName: "app/routes/apps/todo/AddNewTask.jsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-xs title-wth-divider text-primary text-uppercase mt-1 mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Basic Info" }, void 0, false, {
          fileName: "app/routes/apps/todo/AddNewTask.jsx",
          lineNumber: 40,
          columnNumber: 109
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/AddNewTask.jsx",
          lineNumber: 40,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Name" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 44,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 45,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 43,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 42,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Code" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 50,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 51,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 49,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 48,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/AddNewTask.jsx",
          lineNumber: 41,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-label-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Note/Description" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 59,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { className: "text-muted", children: "200" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 60,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 58,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { as: "textarea", rows: 3 }, void 0, false, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 62,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/AddNewTask.jsx",
          lineNumber: 57,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/AddNewTask.jsx",
          lineNumber: 56,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/AddNewTask.jsx",
          lineNumber: 55,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Start Date" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 69,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateRangePicker, { initialSettings: {
              singleDatePicker: true,
              showDropdowns: true,
              startDate: /* @__PURE__ */ new Date()
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", name: "single-date-pick1" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 75,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 70,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { type: "checkbox", className: "form-check-sm mt-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Input, { type: "checkbox", defaultChecked: true }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 78,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Label, { children: "Mark as milestone" }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 79,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 77,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 68,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 67,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Start Time" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 85,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateRangePicker, { initialSettings: {
              singleDatePicker: true,
              timePicker: true,
              timePicker24Hour: true,
              timePickerIncrement: 1,
              timePickerSeconds: true,
              locale: {
                format: "HH:mm:ss"
              }
            }, onShow: hideCalender, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { className: "input-timepicker", type: "text", name: "time" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 96,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 86,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 84,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 83,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/AddNewTask.jsx",
          lineNumber: 66,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "End Date" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 104,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateRangePicker, { initialSettings: {
              singleDatePicker: true,
              showDropdowns: true,
              startDate: /* @__PURE__ */ new Date()
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", name: "single-date-pick1" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 110,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 105,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { type: "checkbox", className: "form-check-sm mt-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Input, { type: "checkbox", defaultChecked: true }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 113,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Label, { children: "Mark as milestone" }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 114,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 112,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 103,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 102,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "End Time" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 120,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DateRangePicker, { initialSettings: {
              singleDatePicker: true,
              timePicker: true,
              timePicker24Hour: true,
              timePickerIncrement: 1,
              timePickerSeconds: true,
              locale: {
                format: "HH:mm:ss"
              }
            }, onShow: hideCalender, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { className: "input-single-timepicker", type: "text", name: "time" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 131,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 121,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 119,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 118,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/AddNewTask.jsx",
          lineNumber: 101,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Category" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 139,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Select, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 0, children: "Project" }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 141,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 1, children: "One" }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 142,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 2, children: "Two" }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 143,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 3, children: "Three" }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 144,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 140,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 138,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 137,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Status" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 150,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Select, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 0, children: "To-Do" }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 152,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 1, children: "On Hold" }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 153,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 2, children: "In Progress" }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 154,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 3, children: "Done" }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 155,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 4, children: "Pending" }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 156,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 151,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 149,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 148,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/AddNewTask.jsx",
          lineNumber: 136,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-inline", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Set priority:" }, void 0, false, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 165,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { inline: true, type: "radio", className: "ms-2", id: "customRadioc2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Input, { type: "radio", name: "customRadioc2" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 167,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Label, { htmlFor: "customRadioc2", children: "High" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 168,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 166,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { inline: true, type: "radio", id: "customRadioc3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Input, { type: "radio", name: "customRadioc2" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 171,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Label, { htmlFor: "customRadioc3", children: "Medium" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 172,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 170,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { inline: true, type: "radio", id: "customRadioc4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Input, { type: "radio", name: "customRadioc2" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 175,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check.Label, { htmlFor: "customRadioc4", children: "Low" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 176,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 174,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/AddNewTask.jsx",
          lineNumber: 164,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/AddNewTask.jsx",
          lineNumber: 163,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/AddNewTask.jsx",
          lineNumber: 162,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/AddNewTask.jsx",
          lineNumber: 161,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-xs title-wth-divider text-primary text-uppercase my-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Assign to" }, void 0, false, {
          fileName: "app/routes/apps/todo/AddNewTask.jsx",
          lineNumber: 182,
          columnNumber: 104
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/AddNewTask.jsx",
          lineNumber: 182,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "repeater", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "data-repeater-list": "category-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3 flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, as: Form_default.Group, className: "mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Add Person" }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 188,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 187,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, as: Form_default.Group, className: "mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Role" }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 191,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 190,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 186,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: "top", title: "Add Person", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "btn btn-xs btn-icon btn-rounded btn-light mb-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(plus_default, {}, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 198,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 197,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 196,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 195,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 194,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 185,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { className: "gx-3 flex-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, as: Form_default.Group, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { placeholder: "--", type: "text" }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 207,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 206,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { sm: 6, as: Form_default.Group, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { placeholder: "--", type: "text" }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 210,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/todo/AddNewTask.jsx",
                lineNumber: 209,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 205,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "btn btn-xs btn-icon btn-rounded btn-light ms-2 mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-delete-bin-6-line" }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 215,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 214,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/todo/AddNewTask.jsx",
              lineNumber: 213,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/todo/AddNewTask.jsx",
            lineNumber: 204,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/todo/AddNewTask.jsx",
          lineNumber: 184,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/todo/AddNewTask.jsx",
          lineNumber: 183,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/todo/AddNewTask.jsx",
        lineNumber: 39,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/AddNewTask.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Footer, { className: "align-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "secondary", onClick: hide, children: "Discard" }, void 0, false, {
        fileName: "app/routes/apps/todo/AddNewTask.jsx",
        lineNumber: 224,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", onClick: hide, children: "Add" }, void 0, false, {
        fileName: "app/routes/apps/todo/AddNewTask.jsx",
        lineNumber: 225,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/todo/AddNewTask.jsx",
      lineNumber: 223,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/todo/AddNewTask.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_c = AddNewTask;
var AddNewTask_default = AddNewTask;
var _c;
$RefreshReg$(_c, "AddNewTask");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  AddNewTask_default
};
//# sourceMappingURL=/build/_shared/chunk-XLN2GFWY.js.map
