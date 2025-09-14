import {
  Adjust_default,
  table_default
} from "/build/_shared/chunk-ZJIKFG2F.js";
import "/build/_shared/chunk-BVOHG2V5.js";
import {
  Block_default,
  RecommendBlock
} from "/build/_shared/chunk-L3SGAUKX.js";
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
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  createHotContext
} from "/build/_shared/chunk-KTLBVDTS.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/apps/analysis/company/index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/analysis/company/index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/analysis/company/index.jsx"
  );
  import.meta.hot.lastModified = "1757828763576.8445";
}
var Company = () => {
  const columns = [{
    title: "M\xE3 CK",
    dataIndex: "code",
    key: "code",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: text }, void 0, false, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 31,
      columnNumber: 21
    }, this)
  }, {
    title: "T\xEAn c\xF4ng ty",
    dataIndex: "company",
    key: "company",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: text }, void 0, false, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this)
  }, {
    title: "Ng\xE0nh",
    dataIndex: "major",
    key: "major",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: text }, void 0, false, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 41,
      columnNumber: 21
    }, this)
  }, {
    title: "P/E",
    dataIndex: "pe",
    key: "pe",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: text }, void 0, false, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 46,
      columnNumber: 21
    }, this)
  }, {
    title: "% t\u0103ng gi\xE1",
    dataIndex: "percent",
    key: "percent",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Adjust_default, { value: text, background: "#C0E3FF" }, void 0, false, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 51,
      columnNumber: 21
    }, this)
  }, {
    title: "ROE",
    dataIndex: "roe",
    key: "roe",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Adjust_default, { value: text, background: "#A5FFD5" }, void 0, false, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 56,
      columnNumber: 21
    }, this)
  }, {
    title: "ROA",
    dataIndex: "roa",
    key: "roa",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Adjust_default, { value: text, background: "#FFF39B" }, void 0, false, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 61,
      columnNumber: 21
    }, this)
  }];
  const data = [{
    key: 1,
    code: "ACB",
    company: "Ng\xE2n h\xE0ng TMCP \xC1 Ch\xE2u",
    major: "T\xE0i ch\xEDnh",
    pe: 4.58,
    roe: 12.04,
    roa: 11.87,
    percent: 10.13
  }, {
    key: 2,
    code: "ACB",
    company: "Ng\xE2n h\xE0ng TMCP \xC1 Ch\xE2u",
    major: "T\xE0i ch\xEDnh",
    pe: 4.58,
    roe: 8.45,
    roa: 8.45,
    percent: 13.46
  }, {
    key: 3,
    code: "ACB",
    company: "Ng\xE2n h\xE0ng TMCP \xC1 Ch\xE2u",
    major: "T\xE0i ch\xEDnh",
    pe: 4.58,
    roe: 7,
    roa: 9.22,
    percent: 12.04
  }, {
    key: 4,
    code: "ACB",
    company: "Ng\xE2n h\xE0ng TMCP \xC1 Ch\xE2u",
    major: "T\xE0i ch\xEDnh",
    pe: 4.58,
    roe: 6.12,
    roa: 10.54,
    percent: 6.12
  }, {
    key: 5,
    code: "ACB",
    company: "Ng\xE2n h\xE0ng TMCP \xC1 Ch\xE2u",
    major: "T\xE0i ch\xEDnh",
    pe: 4.58,
    roe: 5.97,
    roa: 5.97,
    percent: 5.97
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { fluid: "xxl", className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Container, { activeKey: "overview", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block_default, { title: "Danh s\xE1ch VSMI khuy\u1EBFn ngh\u1ECB", component: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecommendBlock, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(table_default, { bordered: true, columns, dataSource: data, pagination: {
    hideOnSinglePage: true,
    pageSize: 20
  } }, void 0, false, {
    fileName: "app/routes/apps/analysis/company/index.jsx",
    lineNumber: 112,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/analysis/company/index.jsx",
    lineNumber: 111,
    columnNumber: 68
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/analysis/company/index.jsx",
    lineNumber: 111,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/analysis/company/index.jsx",
    lineNumber: 110,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/analysis/company/index.jsx",
    lineNumber: 109,
    columnNumber: 10
  }, this);
};
_c = Company;
var company_default = Company;
var _c;
$RefreshReg$(_c, "Company");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  company_default as default
};
//# sourceMappingURL=/build/routes/apps/analysis/company/index-FX25ZTRA.js.map
