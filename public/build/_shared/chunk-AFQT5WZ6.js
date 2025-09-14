import {
  dt
} from "/build/_shared/chunk-L3SGAUKX.js";
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

// app/components/Common/Chart/index.jsx
var import_react = __toESM(require_react(), 1);

// app/components/Common/Chart/styled.jsx
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Common/Chart/styled.jsx"
  );
  import.meta.hot.lastModified = "1757813526777.5527";
}
var TradingViewContainer = dt.div`
  width: calc(100% - 272px);
`;

// app/components/Common/Chart/index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Common/Chart/index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Common/Chart/index.jsx"
  );
  import.meta.hot.lastModified = "1757827304747.9006";
}
var TradingViewWidget = () => {
  _s();
  const container = (0, import_react.useRef)();
  (0, import_react.useEffect)(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "allow_symbol_change": true,
          "calendar": false,
          "details": false,
          "hide_side_toolbar": true,
          "hide_top_toolbar": false,
          "hide_legend": false,
          "hide_volume": false,
          "hotlist": false,
          "interval": "D",
          "locale": "en",
          "style": "1",
          "symbol": "FX:EURUSD",
          "theme": "light",
          "timezone": "Etc/UTC",
          "backgroundColor": "#fff",
          "gridColor": "rgba(198, 198, 198, 0.1)",
          "watchlist": [],
          "withdateranges": false,
          "compareSymbols": [],
          "studies": [],
          "autosize": true
        }`;
    container.current.appendChild(script);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TradingViewContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "tradingview-widget-container", ref: container }, void 0, false, {
    fileName: "app/components/Common/Chart/index.jsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Common/Chart/index.jsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
};
_s(TradingViewWidget, "gP936EAkbq44zYYGRnj90r2fLhg=");
_c = TradingViewWidget;
var Chart_default = TradingViewWidget;
var _c;
$RefreshReg$(_c, "TradingViewWidget");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Chart_default
};
//# sourceMappingURL=/build/_shared/chunk-AFQT5WZ6.js.map
