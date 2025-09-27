import {
  require_react_apexcharts_min
} from "/build/_shared/chunk-MMNNIOF2.js";
import {
  checkbox_default,
  table_default
} from "/build/_shared/chunk-ADB2646T.js";
import {
  AddActions,
  ModalAddContainer
} from "/build/_shared/chunk-MWMMX5WT.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  createHotContext
} from "/build/_shared/chunk-KTLBVDTS.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/Financial/Chart/index.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Financial/Chart/index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Financial/Chart/index.jsx"
  );
  import.meta.hot.lastModified = "1758792175526.1973";
}
var Chart = null;
if (typeof window !== "undefined") {
  Chart = require_react_apexcharts_min().default;
}
function BvpsChart({
  type
}) {
  _s();
  const [mounted, setMounted] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setMounted(true);
  }, []);
  const categories = type === 2 ? ["Q2 2020", "Q3 2020", "Q4 2020", "Q1 2021", "Q2 2021", "Q3 2021", "Q4 2021", "Q1 2022", "Q2 2022", "Q3 2022", "Q4 2022", "Q1 2023", "Q2 2023", "Q3 2023", "Q4 2023", "Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Q1 2025"] : ["Q2 2020", "Q3 2020", "Q4 2020", "Q1 2021", "Q2 2021", "Q3 2021", "Q4 2021", "Q1 2022", "Q2 2022", "Q3 2022", "Q4 2022", "Q1 2023", "Q2 2023", "Q3 2023", "Q4 2023", "Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Q1 2025"];
  const series = type === 2 ? [{
    name: "B\u1EA5t \u0111\u1ED9ng s\u1EA3n - T\u1EA5t c\u1EA3 DN trong ng\xE0nh",
    data: [4, 6, 5, 6, 5, 6, 7, 6, 6, 5, 4, 6, 6, 6, 7, 6, 6, 6, 6, 7]
  }, {
    name: "B\u1EA5t \u0111\u1ED9ng s\u1EA3n - DN c\xF3 Doanh thu > 0",
    data: [3.5, 9, 10, 12, 13, 11, 11.5, 11, 13, 10.5, 12, 10, 12, 13, 11, 11.5, 11, 13, 12.5, 9]
  }] : [{
    name: "ACB",
    data: [4, 6, 5, 6, 5, 6, 7, 6, 6, 5, 4, 6, 5, 6, 6, 6, 6, 6, 6, 7]
  }, {
    name: "TCB",
    data: [3.5, 9, 10, 12, 13, 11, 11.5, 11, 13, 10.5, 11.8, 12, 11, 12.5, 11, 12, 13, 12.5, 12, 10]
  }, {
    name: "VCB",
    data: [5, 8, 6.5, 8, 7, 7.5, 8.5, 6.5, 4.2, 3, 4.2, 4, 7, 9.5, 8.3, 8.2, 8.5, 9, 8.8, 9.5]
  }, {
    name: "OCB",
    data: [3.8, 7, 7, 9, 9, 8.5, 9.3, 8.2, 7.3, 5.5, 6.8, 8, 9, 8.5, 9, 8.5, 9, 8.8, 8.5, 7.8]
  }, {
    name: "Ng\xE0nh T\xE0i ch\xEDnh",
    data: [4, 6.2, 6.5, 7, 7.5, 8, 6, 6.5, 5, 6.5, 5.5, 6.2, 7, 8.2, 8.5, 8.2, 8, 8.2, 8, 7.5]
  }];
  const options = {
    chart: {
      type: "line",
      height: 400,
      toolbar: {
        show: false
      }
    },
    stroke: {
      width: 2,
      curve: "straight",
      dashArray: type === 2 ? [] : [0, 4, 4, 4, 4]
    },
    markers: {
      size: 4
    },
    colors: type === 2 ? ["#1E88E5", "#FB8C00"] : ["#B71C1C", "#FBC02D", "#26A69A", "#3949AB", "#616161"],
    xaxis: {
      categories,
      labels: {
        rotate: -45
      }
    },
    yaxis: {
      min: 0,
      max: 14,
      labels: {
        formatter: (val) => `${val}%`
      }
    },
    legend: {
      position: "top",
      horizontalAlign: "center"
    },
    title: {
      text: type === 2 ? "T\u1EF7 l\u1EC7 l\u1EE3i nhu\u1EADn trong ng\xE0nh B\u1EA5t \u0111\u1ED9ng s\u1EA3n" : "Gi\xE1 tr\u1ECB s\u1ED5 s\xE1ch c\u1EE7a c\u1ED5 phi\u1EBFu (BVPS)",
      align: "center"
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: mounted && Chart ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, { options, series, type: "line", height: 450 }, void 0, false, {
    fileName: "app/components/Financial/Chart/index.jsx",
    lineNumber: 98,
    columnNumber: 27
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading chart..." }, void 0, false, {
    fileName: "app/components/Financial/Chart/index.jsx",
    lineNumber: 98,
    columnNumber: 98
  }, this) }, void 0, false, {
    fileName: "app/components/Financial/Chart/index.jsx",
    lineNumber: 97,
    columnNumber: 10
  }, this);
}
_s(BvpsChart, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = BvpsChart;
var _c;
$RefreshReg$(_c, "BvpsChart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Common/Modal/Add/index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Common/Modal/Add/index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Common/Modal/Add/index.jsx"
  );
  import.meta.hot.lastModified = "1758930315446.2517";
}
var ModalAdd = ({
  handleCancelAdd
}) => {
  const data = [{
    key: 1,
    major: "C\xF4ng nghi\u1EC7p"
  }, {
    key: 2,
    major: "Nguy\xEAn v\u1EADt li\u1EC7u"
  }, {
    key: 3,
    major: "Ti\xEAu d\xF9ng kh\xF4ng thi\u1EBFt y\u1EBFu"
  }, {
    key: 4,
    major: "Ti\xEAu d\xF9ng thi\u1EBFt y\u1EBFu"
  }, {
    key: 5,
    major: "D\u1ECBch v\u1EE5 ti\u1EC7n \xEDch"
  }, {
    key: 6,
    major: "B\u1EA5t \u0111\u1ED9ng s\u1EA3n"
  }, {
    key: 7,
    major: "T\xE0i ch\xEDnh"
  }, {
    key: 8,
    major: "Ch\u0103m s\xF3c s\u1EE9c kh\u1ECFe"
  }, {
    key: 9,
    major: "N\u0103ng l\u01B0\u1EE3ng"
  }, {
    key: 10,
    major: "D\u1ECBch v\u1EE5 vi\u1EC5n th\xF4ng"
  }, {
    key: 11,
    major: "C\xF4ng ngh\u1EC7 th\xF4ng tin"
  }, {
    key: 12,
    major: "To\xE0n th\u1ECB tr\u01B0\u1EDDng"
  }];
  const columns = [{
    title: "Ng\xE0nh",
    dataIndex: "major",
    key: "major",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(checkbox_default, { onChange: () => {
    }, children: text }, void 0, false, {
      fileName: "app/components/Common/Modal/Add/index.jsx",
      lineNumber: 68,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Common/Modal/Add/index.jsx",
      lineNumber: 67,
      columnNumber: 21
    }, this)
  }, {
    title: "Ph\u1EA1m vi t\xEDnh to\xE1n c\u1EE7a ch\u1EC9 s\u1ED1",
    dataIndex: "",
    key: "",
    render: () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(checkbox_default, { onChange: () => {
      }, children: "T\u1EA5t c\u1EA3 DN trong ng\xE0nh" }, void 0, false, {
        fileName: "app/components/Common/Modal/Add/index.jsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(checkbox_default, { onChange: () => {
      }, children: "DN c\xF3 Doanh thu > 0" }, void 0, false, {
        fileName: "app/components/Common/Modal/Add/index.jsx",
        lineNumber: 76,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Common/Modal/Add/index.jsx",
      lineNumber: 74,
      columnNumber: 19
    }, this)
  }];
  const actions = [{
    id: 1,
    text: "Th\xEAm",
    func: () => {
    }
  }, {
    id: 2,
    text: "H\u1EE7y",
    func: () => {
    }
  }, {
    id: 3,
    text: "L\xE0m m\u1EDBi",
    func: () => {
    }
  }, {
    id: 4,
    text: "\u0110\xF3ng",
    func: () => {
      handleCancelAdd();
    }
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ModalAddContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(table_default, { bordered: true, columns, dataSource: data, pagination: {
      hideOnSinglePage: true,
      pageSize: 20
    } }, void 0, false, {
      fileName: "app/components/Common/Modal/Add/index.jsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AddActions, { children: actions.map((item) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { onClick: item.func, children: item.text }, item.id, false, {
        fileName: "app/components/Common/Modal/Add/index.jsx",
        lineNumber: 105,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/Common/Modal/Add/index.jsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Common/Modal/Add/index.jsx",
    lineNumber: 98,
    columnNumber: 10
  }, this);
};
_c2 = ModalAdd;
var Add_default = ModalAdd;
var _c2;
$RefreshReg$(_c2, "ModalAdd");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  BvpsChart,
  Add_default
};
//# sourceMappingURL=/build/_shared/chunk-CEAC4Z4M.js.map
