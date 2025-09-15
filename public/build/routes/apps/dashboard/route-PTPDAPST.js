import {
  Adjust_default,
  table_default
} from "/build/_shared/chunk-DW53F2BE.js";
import "/build/_shared/chunk-BVOHG2V5.js";
import {
  AnalyticsItem,
  BlockListMeasure,
  BlockPerCommon,
  BlockPerTab,
  Block_default,
  BorderBlock,
  Chart_default,
  MarketContainer,
  ProductionPackage
} from "/build/_shared/chunk-L5ZLY5MO.js";
import {
  Navigation,
  Pagination,
  Swiper,
  SwiperSlide
} from "/build/_shared/chunk-ONELXEGJ.js";
import {
  Container_default,
  Tab_default
} from "/build/_shared/chunk-VRR24KJX.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-HFWHD4VB.js";
import "/build/_shared/chunk-CQ7UJNRQ.js";
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

// app/routes/apps/dashboard/Effeciency/index.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/dashboard/Effeciency/index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/dashboard/Effeciency/index.jsx"
  );
  import.meta.hot.lastModified = "1757826515099.5134";
}
var Effeciency = () => {
  _s();
  const [activeTab, setActiveTab] = (0, import_react.useState)(1);
  const tabs = [{
    id: 1,
    title: "ROE"
  }, {
    id: 2,
    title: "ROA"
  }];
  const columns = [{
    title: "",
    dataIndex: "name",
    key: "name",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-custom", children: text }, void 0, false, {
      fileName: "app/routes/apps/dashboard/Effeciency/index.jsx",
      lineNumber: 40,
      columnNumber: 21
    }, this)
  }, {
    title: "",
    dataIndex: "percent",
    key: "percent",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Adjust_default, { value: text, background: "#C0E3FF" }, void 0, false, {
      fileName: "app/routes/apps/dashboard/Effeciency/index.jsx",
      lineNumber: 45,
      columnNumber: 21
    }, this)
  }];
  const data = [{
    key: 1,
    name: "ACC",
    percent: 12.89
  }, {
    key: 2,
    name: "ACC",
    percent: 11.9
  }, {
    key: 3,
    name: "ACC",
    percent: 10.59
  }, {
    key: 4,
    name: "ACC",
    percent: 10.23
  }, {
    key: 5,
    name: "ACC",
    percent: 9.85
  }, {
    key: 6,
    name: "ACC",
    percent: 9.05
  }, {
    key: 7,
    name: "ACC",
    percent: 8.67
  }, {
    key: 8,
    name: "ACC",
    percent: 7.99
  }, {
    key: 9,
    name: "ACC",
    percent: 7.45
  }, {
    key: 10,
    name: "ACC",
    percent: 6.99
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockPerCommon, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Top hi\u1EC7u qu\u1EA3 ho\u1EA1t \u0111\u1ED9ng" }, void 0, false, {
      fileName: "app/routes/apps/dashboard/Effeciency/index.jsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockPerTab, { children: tabs.map((item) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: item.id === activeTab ? "active" : "", onClick: () => {
        setActiveTab(item.id);
      }, children: item.title }, item.id, false, {
        fileName: "app/routes/apps/dashboard/Effeciency/index.jsx",
        lineNumber: 92,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/apps/dashboard/Effeciency/index.jsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(table_default, { columns, dataSource: data, pagination: {
      hideOnSinglePage: true
    } }, void 0, false, {
      fileName: "app/routes/apps/dashboard/Effeciency/index.jsx",
      lineNumber: 99,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/dashboard/Effeciency/index.jsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
};
_s(Effeciency, "BWY5R9M9pvKcIff1cAnch9Xqh+Y=");
_c = Effeciency;
var Effeciency_default = Effeciency;
var _c;
$RefreshReg$(_c, "Effeciency");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/dashboard/Top/index.jsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/dashboard/Top/index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/dashboard/Top/index.jsx"
  );
  import.meta.hot.lastModified = "1757826484632.395";
}
var Top = () => {
  _s2();
  const [activeTab, setActiveTab] = (0, import_react2.useState)(1);
  const tabs = [{
    id: 1,
    title: "1D"
  }, {
    id: 2,
    title: "1W"
  }, {
    id: 3,
    title: "2W"
  }, {
    id: 4,
    title: "1M"
  }, {
    id: 5,
    title: "3M"
  }, {
    id: 6,
    title: "1Y"
  }];
  const columns = [{
    title: "",
    dataIndex: "name",
    key: "name",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-custom", children: text }, void 0, false, {
      fileName: "app/routes/apps/dashboard/Top/index.jsx",
      lineNumber: 52,
      columnNumber: 21
    }, this)
  }, {
    title: "P/E",
    dataIndex: "value",
    key: "value"
  }, {
    title: "% t\u0103ng gi\xE1",
    dataIndex: "percent",
    key: "percent",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Adjust_default, { value: text, background: "rgb(165, 255, 213)" }, void 0, false, {
      fileName: "app/routes/apps/dashboard/Top/index.jsx",
      lineNumber: 61,
      columnNumber: 21
    }, this)
  }];
  const data = [{
    key: 1,
    name: "ACC",
    value: 12.05,
    percent: 12.89
  }, {
    key: 2,
    name: "ACC",
    value: 11.98,
    percent: 11.9
  }, {
    key: 3,
    name: "ACC",
    value: 10.67,
    percent: 10.59
  }, {
    key: 4,
    name: "ACC",
    value: 10.03,
    percent: 10.23
  }, {
    key: 5,
    name: "ACC",
    value: 9.45,
    percent: 9.85
  }, {
    key: 6,
    name: "ACC",
    value: 9.3,
    percent: 9.05
  }, {
    key: 7,
    name: "ACC",
    value: 9.02,
    percent: 8.67
  }, {
    key: 8,
    name: "ACC",
    value: 8.65,
    percent: 7.99
  }, {
    key: 9,
    name: "ACC",
    value: 8.01,
    percent: 7.45
  }, {
    key: 10,
    name: "ACC",
    value: 7.34,
    percent: 6.99
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BlockPerCommon, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { children: "Top t\u0103ng gi\xE1" }, void 0, false, {
      fileName: "app/routes/apps/dashboard/Top/index.jsx",
      lineNumber: 115,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BlockPerTab, { children: tabs.map((item) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: item.id === activeTab ? "active" : "", onClick: () => {
        setActiveTab(item.id);
      }, children: item.title }, item.id, false, {
        fileName: "app/routes/apps/dashboard/Top/index.jsx",
        lineNumber: 118,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/apps/dashboard/Top/index.jsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(table_default, { columns, dataSource: data, pagination: {
      hideOnSinglePage: true
    } }, void 0, false, {
      fileName: "app/routes/apps/dashboard/Top/index.jsx",
      lineNumber: 125,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/dashboard/Top/index.jsx",
    lineNumber: 114,
    columnNumber: 10
  }, this);
};
_s2(Top, "BWY5R9M9pvKcIff1cAnch9Xqh+Y=");
_c2 = Top;
var Top_default = Top;
var _c2;
$RefreshReg$(_c2, "Top");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/dashboard/PE/index.jsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/dashboard/PE/index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/dashboard/PE/index.jsx"
  );
  import.meta.hot.lastModified = "1757826498598.9792";
}
var PE = () => {
  _s3();
  const [activeTab, setActiveTab] = (0, import_react3.useState)(1);
  const tabs = [{
    id: 1,
    title: "TAB 1"
  }, {
    id: 2,
    title: "TAB 2"
  }];
  const columns = [{
    title: "",
    dataIndex: "name",
    key: "name",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-custom", children: text }, void 0, false, {
      fileName: "app/routes/apps/dashboard/PE/index.jsx",
      lineNumber: 40,
      columnNumber: 21
    }, this)
  }, {
    title: "",
    dataIndex: "percent",
    key: "percent",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Adjust_default, { value: text, background: "#FFF39B" }, void 0, false, {
      fileName: "app/routes/apps/dashboard/PE/index.jsx",
      lineNumber: 45,
      columnNumber: 21
    }, this)
  }];
  const data = [{
    key: 1,
    name: "B\u1EA5t \u0111\u1ED9ng s\u1EA3n",
    percent: 12.89
  }, {
    key: 2,
    name: "Ch\u0103m s\xF3c s\u1EE9c kh\u1ECFe",
    percent: 11.9
  }, {
    key: 3,
    name: "C\xF4ng ngh\u1EC7 th\xF4ng tin",
    percent: 10.59
  }, {
    key: 4,
    name: "C\xF4ng nghi\u1EC7p",
    percent: 10.23
  }, {
    key: 5,
    name: "D\u1ECBch v\u1EE5 ti\u1EC7n t\xEDch",
    percent: 9.85
  }, {
    key: 6,
    name: "D\u1ECBch v\u1EE5 vi\u1EC5n th\xF4ng",
    percent: 9.05
  }, {
    key: 7,
    name: "N\u0103ng l\u01B0\u1EE3ng",
    percent: 8.67
  }, {
    key: 8,
    name: "Nguy\xEAn v\u1EADt li\u1EC7u",
    percent: 7.99
  }, {
    key: 9,
    name: "T\xE0i ch\xEDnh",
    percent: 7.45
  }, {
    key: 10,
    name: "Ti\xEAu d\xF9ng kh\xF4ng thi\u1EBFt y\u1EBFu",
    percent: 6.99
  }, {
    key: 11,
    name: "Ti\xEAu d\xF9ng thi\u1EBFt y\u1EBFu",
    percent: 6.2
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BlockPerCommon, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "P/E ng\xE0nh" }, void 0, false, {
      fileName: "app/routes/apps/dashboard/PE/index.jsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(BlockPerTab, { children: tabs.map((item) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: item.id === activeTab ? "active" : "", onClick: () => {
        setActiveTab(item.id);
      }, children: item.title }, item.id, false, {
        fileName: "app/routes/apps/dashboard/PE/index.jsx",
        lineNumber: 96,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/routes/apps/dashboard/PE/index.jsx",
      lineNumber: 94,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(table_default, { columns, dataSource: data, pagination: {
      hideOnSinglePage: true,
      pageSize: 20
    } }, void 0, false, {
      fileName: "app/routes/apps/dashboard/PE/index.jsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/dashboard/PE/index.jsx",
    lineNumber: 92,
    columnNumber: 10
  }, this);
};
_s3(PE, "BWY5R9M9pvKcIff1cAnch9Xqh+Y=");
_c3 = PE;
var PE_default = PE;
var _c3;
$RefreshReg$(_c3, "PE");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/dashboard/route.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/dashboard/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/dashboard/route.jsx"
  );
  import.meta.hot.lastModified = "1757826786150.598";
}
var Dashboard = () => {
  const analyticsData = [{
    id: 1,
    title: "Ti\xEAu \u0111\u1EC1"
  }, {
    id: 2,
    title: "Ti\xEAu \u0111\u1EC1"
  }, {
    id: 3,
    title: "Ti\xEAu \u0111\u1EC1"
  }, {
    id: 4,
    title: "Ti\xEAu \u0111\u1EC1"
  }, {
    id: 5,
    title: "Ti\xEAu \u0111\u1EC1"
  }, {
    id: 6,
    title: "Ti\xEAu \u0111\u1EC1"
  }, {
    id: 7,
    title: "Ti\xEAu \u0111\u1EC1"
  }, {
    id: 8,
    title: "Ti\xEAu \u0111\u1EC1"
  }, {
    id: 9,
    title: "Ti\xEAu \u0111\u1EC1"
  }, {
    id: 10,
    title: "Ti\xEAu \u0111\u1EC1"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Container_default, { fluid: "xxl", className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tab_default.Container, { activeKey: "overview", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Block_default, { title: "B\xE1o c\xE1o ph\xE2n t\xEDch", component: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BorderBlock, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Swiper, { loop: true, slidesPerView: 5, spaceBetween: 15, navigation: true, modules: [Pagination, Navigation], children: analyticsData.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SwiperSlide, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AnalyticsItem, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {}, void 0, false, {
        fileName: "app/routes/apps/dashboard/route.jsx",
        lineNumber: 69,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: item.title }, void 0, false, {
        fileName: "app/routes/apps/dashboard/route.jsx",
        lineNumber: 70,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/dashboard/route.jsx",
      lineNumber: 68,
      columnNumber: 23
    }, this) }, item.id, false, {
      fileName: "app/routes/apps/dashboard/route.jsx",
      lineNumber: 67,
      columnNumber: 46
    }, this)) }, void 0, false, {
      fileName: "app/routes/apps/dashboard/route.jsx",
      lineNumber: 66,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/dashboard/route.jsx",
      lineNumber: 65,
      columnNumber: 61
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/dashboard/route.jsx",
      lineNumber: 65,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Block_default, { title: "Th\u1ECB tr\u01B0\u1EDDng", component: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MarketContainer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Chart_default, {}, void 0, false, {
        fileName: "app/routes/apps/dashboard/route.jsx",
        lineNumber: 76,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BorderBlock, { className: "market-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "swiper-verical", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Swiper, { loop: true, direction: "vertical", slidesPerView: "auto", spaceBetween: 15, navigation: true, modules: [Pagination, Navigation], children: analyticsData.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SwiperSlide, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AnalyticsItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {}, void 0, false, {
          fileName: "app/routes/apps/dashboard/route.jsx",
          lineNumber: 82,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: item.title }, void 0, false, {
          fileName: "app/routes/apps/dashboard/route.jsx",
          lineNumber: 83,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/dashboard/route.jsx",
        lineNumber: 81,
        columnNumber: 27
      }, this) }, item.id, false, {
        fileName: "app/routes/apps/dashboard/route.jsx",
        lineNumber: 80,
        columnNumber: 50
      }, this)) }, void 0, false, {
        fileName: "app/routes/apps/dashboard/route.jsx",
        lineNumber: 79,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/dashboard/route.jsx",
        lineNumber: 78,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/dashboard/route.jsx",
        lineNumber: 77,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/dashboard/route.jsx",
      lineNumber: 75,
      columnNumber: 54
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/dashboard/route.jsx",
      lineNumber: 75,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BlockListMeasure, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Top_default, {}, void 0, false, {
        fileName: "app/routes/apps/dashboard/route.jsx",
        lineNumber: 91,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Effeciency_default, {}, void 0, false, {
        fileName: "app/routes/apps/dashboard/route.jsx",
        lineNumber: 92,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PE_default, {}, void 0, false, {
        fileName: "app/routes/apps/dashboard/route.jsx",
        lineNumber: 93,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/dashboard/route.jsx",
      lineNumber: 90,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Block_default, { title: "V\xE0ng v\xE0 Ngo\u1EA1i t\u1EC7", component: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BorderBlock, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Swiper, { loop: true, slidesPerView: 5, spaceBetween: 15, navigation: true, modules: [Pagination, Navigation], children: analyticsData.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SwiperSlide, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AnalyticsItem, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {}, void 0, false, {
        fileName: "app/routes/apps/dashboard/route.jsx",
        lineNumber: 99,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: item.title }, void 0, false, {
        fileName: "app/routes/apps/dashboard/route.jsx",
        lineNumber: 100,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/dashboard/route.jsx",
      lineNumber: 98,
      columnNumber: 23
    }, this) }, item.id, false, {
      fileName: "app/routes/apps/dashboard/route.jsx",
      lineNumber: 97,
      columnNumber: 46
    }, this)) }, void 0, false, {
      fileName: "app/routes/apps/dashboard/route.jsx",
      lineNumber: 96,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/dashboard/route.jsx",
      lineNumber: 95,
      columnNumber: 60
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/dashboard/route.jsx",
      lineNumber: 95,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Block_default, { title: "G\xF3i S\u1EA3n ph\u1EA9m VSMI", component: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProductionPackage, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BorderBlock, { children: "V\xF9ng th\xF4ng tin \u0111\u1EC3 m\u1EDDi KH \u0111\u0103ng k\xFD" }, void 0, false, {
        fileName: "app/routes/apps/dashboard/route.jsx",
        lineNumber: 106,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BorderBlock, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { children: "Basic" }, void 0, false, {
          fileName: "app/routes/apps/dashboard/route.jsx",
          lineNumber: 108,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Th\xF4ng tin g\xF3i Basic" }, void 0, false, {
          fileName: "app/routes/apps/dashboard/route.jsx",
          lineNumber: 109,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { children: "\u0110\u0103ng k\xFD" }, void 0, false, {
          fileName: "app/routes/apps/dashboard/route.jsx",
          lineNumber: 110,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/dashboard/route.jsx",
        lineNumber: 107,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(BorderBlock, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { children: "Premium" }, void 0, false, {
          fileName: "app/routes/apps/dashboard/route.jsx",
          lineNumber: 113,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Th\xF4ng tin g\xF3i Premium" }, void 0, false, {
          fileName: "app/routes/apps/dashboard/route.jsx",
          lineNumber: 114,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { children: "\u0110\u0103ng k\xFD" }, void 0, false, {
          fileName: "app/routes/apps/dashboard/route.jsx",
          lineNumber: 115,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/dashboard/route.jsx",
        lineNumber: 112,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/dashboard/route.jsx",
      lineNumber: 105,
      columnNumber: 61
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/dashboard/route.jsx",
      lineNumber: 105,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/dashboard/route.jsx",
    lineNumber: 64,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/dashboard/route.jsx",
    lineNumber: 63,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/dashboard/route.jsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
};
_c4 = Dashboard;
var route_default = Dashboard;
var _c4;
$RefreshReg$(_c4, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/dashboard/route-PTPDAPST.js.map
