import {
  Add_default,
  BvpsChart
} from "/build/_shared/chunk-CEAC4Z4M.js";
import {
  require_react_apexcharts_min
} from "/build/_shared/chunk-MMNNIOF2.js";
import {
  Adjust_default
} from "/build/_shared/chunk-2TMVTIIQ.js";
import {
  date_picker_default,
  modal_default,
  select_default,
  table_default
} from "/build/_shared/chunk-ADB2646T.js";
import "/build/_shared/chunk-W2LHDNHE.js";
import {
  Chart_default
} from "/build/_shared/chunk-33A7RMRT.js";
import {
  AnalyticsItem,
  BlockPriceChart,
  Block_default,
  BorderBlock,
  CompareBlock,
  CompareTab,
  FinancialAnalysis,
  FinancialBody,
  FinancialHeader,
  FinancialTabs,
  MarketContainer,
  PriceChartSelect,
  RecommendBlock,
  SummaryAnalysis,
  SummaryBottom,
  TagAdd,
  TagCommon
} from "/build/_shared/chunk-MWMMX5WT.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/@rc-component/util/lib/Dom/canUseDom.js
var require_canUseDom = __commonJS({
  "node_modules/@rc-component/util/lib/Dom/canUseDom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = canUseDom;
    function canUseDom() {
      return !!(typeof window !== "undefined" && window.document && window.document.createElement);
    }
  }
});

// node_modules/@rc-component/util/lib/Dom/contains.js
var require_contains = __commonJS({
  "node_modules/@rc-component/util/lib/Dom/contains.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = contains;
    function contains(root, n) {
      if (!root) {
        return false;
      }
      if (root.contains) {
        return root.contains(n);
      }
      let node = n;
      while (node) {
        if (node === root) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    }
  }
});

// node_modules/@rc-component/util/lib/Dom/dynamicCSS.js
var require_dynamicCSS = __commonJS({
  "node_modules/@rc-component/util/lib/Dom/dynamicCSS.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.clearContainerCache = clearContainerCache;
    exports.injectCSS = injectCSS;
    exports.removeCSS = removeCSS;
    exports.updateCSS = updateCSS2;
    var _canUseDom = _interopRequireDefault(require_canUseDom());
    var _contains = _interopRequireDefault(require_contains());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var APPEND_ORDER = "data-rc-order";
    var APPEND_PRIORITY = "data-rc-priority";
    var MARK_KEY = `rc-util-key`;
    var containerCache = /* @__PURE__ */ new Map();
    function getMark({
      mark
    } = {}) {
      if (mark) {
        return mark.startsWith("data-") ? mark : `data-${mark}`;
      }
      return MARK_KEY;
    }
    function getContainer(option) {
      if (option.attachTo) {
        return option.attachTo;
      }
      const head = document.querySelector("head");
      return head || document.body;
    }
    function getOrder(prepend) {
      if (prepend === "queue") {
        return "prependQueue";
      }
      return prepend ? "prepend" : "append";
    }
    function findStyles(container) {
      return Array.from((containerCache.get(container) || container).children).filter((node) => node.tagName === "STYLE");
    }
    function injectCSS(css, option = {}) {
      if (!(0, _canUseDom.default)()) {
        return null;
      }
      const {
        csp,
        prepend,
        priority = 0
      } = option;
      const mergedOrder = getOrder(prepend);
      const isPrependQueue = mergedOrder === "prependQueue";
      const styleNode = document.createElement("style");
      styleNode.setAttribute(APPEND_ORDER, mergedOrder);
      if (isPrependQueue && priority) {
        styleNode.setAttribute(APPEND_PRIORITY, `${priority}`);
      }
      if (csp?.nonce) {
        styleNode.nonce = csp?.nonce;
      }
      styleNode.innerHTML = css;
      const container = getContainer(option);
      const {
        firstChild
      } = container;
      if (prepend) {
        if (isPrependQueue) {
          const existStyle = (option.styles || findStyles(container)).filter((node) => {
            if (!["prepend", "prependQueue"].includes(node.getAttribute(APPEND_ORDER))) {
              return false;
            }
            const nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
            return priority >= nodePriority;
          });
          if (existStyle.length) {
            container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
            return styleNode;
          }
        }
        container.insertBefore(styleNode, firstChild);
      } else {
        container.appendChild(styleNode);
      }
      return styleNode;
    }
    function findExistNode(key, option = {}) {
      let {
        styles
      } = option;
      styles ||= findStyles(getContainer(option));
      return styles.find((node) => node.getAttribute(getMark(option)) === key);
    }
    function removeCSS(key, option = {}) {
      const existNode = findExistNode(key, option);
      if (existNode) {
        const container = getContainer(option);
        container.removeChild(existNode);
      }
    }
    function syncRealContainer(container, option) {
      const cachedRealContainer = containerCache.get(container);
      if (!cachedRealContainer || !(0, _contains.default)(document, cachedRealContainer)) {
        const placeholderStyle = injectCSS("", option);
        const {
          parentNode
        } = placeholderStyle;
        containerCache.set(container, parentNode);
        container.removeChild(placeholderStyle);
      }
    }
    function clearContainerCache() {
      containerCache.clear();
    }
    function updateCSS2(css, key, originOption = {}) {
      const container = getContainer(originOption);
      const styles = findStyles(container);
      const option = {
        ...originOption,
        styles
      };
      syncRealContainer(container, option);
      const existNode = findExistNode(key, option);
      if (existNode) {
        if (option.csp?.nonce && existNode.nonce !== option.csp?.nonce) {
          existNode.nonce = option.csp?.nonce;
        }
        if (existNode.innerHTML !== css) {
          existNode.innerHTML = css;
        }
        return existNode;
      }
      const newNode = injectCSS(css, option);
      newNode.setAttribute(getMark(option), key);
      return newNode;
    }
  }
});

// node_modules/@rc-component/util/lib/Dom/shadow.js
var require_shadow = __commonJS({
  "node_modules/@rc-component/util/lib/Dom/shadow.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getShadowRoot = getShadowRoot2;
    exports.inShadow = inShadow;
    function getRoot(ele) {
      return ele?.getRootNode?.();
    }
    function inShadow(ele) {
      return getRoot(ele) instanceof ShadowRoot;
    }
    function getShadowRoot2(ele) {
      return inShadow(ele) ? getRoot(ele) : null;
    }
  }
});

// node_modules/@rc-component/util/lib/warning.js
var require_warning = __commonJS({
  "node_modules/@rc-component/util/lib/warning.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.call = call;
    exports.default = void 0;
    exports.note = note;
    exports.noteOnce = noteOnce;
    exports.preMessage = void 0;
    exports.resetWarned = resetWarned;
    exports.warning = warning2;
    exports.warningOnce = warningOnce2;
    var warned = {};
    var preWarningFns = [];
    var preMessage = (fn) => {
      preWarningFns.push(fn);
    };
    exports.preMessage = preMessage;
    function warning2(valid, message) {
      if (!valid && console !== void 0) {
        const finalMessage = preWarningFns.reduce((msg, preMessageFn) => preMessageFn(msg ?? "", "warning"), message);
        if (finalMessage) {
          console.error(`Warning: ${finalMessage}`);
        }
      }
    }
    function note(valid, message) {
      if (!valid && console !== void 0) {
        const finalMessage = preWarningFns.reduce((msg, preMessageFn) => preMessageFn(msg ?? "", "note"), message);
        if (finalMessage) {
          console.warn(`Note: ${finalMessage}`);
        }
      }
    }
    function resetWarned() {
      warned = {};
    }
    function call(method, valid, message) {
      if (!valid && !warned[message]) {
        method(false, message);
        warned[message] = true;
      }
    }
    function warningOnce2(valid, message) {
      call(warning2, valid, message);
    }
    function noteOnce(valid, message) {
      call(note, valid, message);
    }
    warningOnce2.preMessage = preMessage;
    warningOnce2.resetWarned = resetWarned;
    warningOnce2.noteOnce = noteOnce;
    var _default = exports.default = warningOnce2;
  }
});

// node_modules/@ant-design/icons-svg/lib/asn/CloseOutlined.js
var require_CloseOutlined = __commonJS({
  "node_modules/@ant-design/icons-svg/lib/asn/CloseOutlined.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CloseOutlined2 = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, "name": "close", "theme": "outlined" };
    exports.default = CloseOutlined2;
  }
});

// app/routes/apps/analysis/company/index.jsx
var import_react5 = __toESM(require_react(), 1);

// node_modules/@ant-design/icons/es/components/Context.js
var import_react = __toESM(require_react());
var IconContext = /* @__PURE__ */ (0, import_react.createContext)({});
var Context_default = IconContext;

// node_modules/@ant-design/icons/es/components/AntdIcon.js
var React3 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());

// node_modules/@ant-design/icons/node_modules/@ant-design/fast-color/es/presetColors.js
var presetColors_default = {
  aliceblue: "9ehhb",
  antiquewhite: "9sgk7",
  aqua: "1ekf",
  aquamarine: "4zsno",
  azure: "9eiv3",
  beige: "9lhp8",
  bisque: "9zg04",
  black: "0",
  blanchedalmond: "9zhe5",
  blue: "73",
  blueviolet: "5e31e",
  brown: "6g016",
  burlywood: "8ouiv",
  cadetblue: "3qba8",
  chartreuse: "4zshs",
  chocolate: "87k0u",
  coral: "9yvyo",
  cornflowerblue: "3xael",
  cornsilk: "9zjz0",
  crimson: "8l4xo",
  cyan: "1ekf",
  darkblue: "3v",
  darkcyan: "rkb",
  darkgoldenrod: "776yz",
  darkgray: "6mbhl",
  darkgreen: "jr4",
  darkgrey: "6mbhl",
  darkkhaki: "7ehkb",
  darkmagenta: "5f91n",
  darkolivegreen: "3bzfz",
  darkorange: "9yygw",
  darkorchid: "5z6x8",
  darkred: "5f8xs",
  darksalmon: "9441m",
  darkseagreen: "5lwgf",
  darkslateblue: "2th1n",
  darkslategray: "1ugcv",
  darkslategrey: "1ugcv",
  darkturquoise: "14up",
  darkviolet: "5rw7n",
  deeppink: "9yavn",
  deepskyblue: "11xb",
  dimgray: "442g9",
  dimgrey: "442g9",
  dodgerblue: "16xof",
  firebrick: "6y7tu",
  floralwhite: "9zkds",
  forestgreen: "1cisi",
  fuchsia: "9y70f",
  gainsboro: "8m8kc",
  ghostwhite: "9pq0v",
  goldenrod: "8j4f4",
  gold: "9zda8",
  gray: "50i2o",
  green: "pa8",
  greenyellow: "6senj",
  grey: "50i2o",
  honeydew: "9eiuo",
  hotpink: "9yrp0",
  indianred: "80gnw",
  indigo: "2xcoy",
  ivory: "9zldc",
  khaki: "9edu4",
  lavenderblush: "9ziet",
  lavender: "90c8q",
  lawngreen: "4vk74",
  lemonchiffon: "9zkct",
  lightblue: "6s73a",
  lightcoral: "9dtog",
  lightcyan: "8s1rz",
  lightgoldenrodyellow: "9sjiq",
  lightgray: "89jo3",
  lightgreen: "5nkwg",
  lightgrey: "89jo3",
  lightpink: "9z6wx",
  lightsalmon: "9z2ii",
  lightseagreen: "19xgq",
  lightskyblue: "5arju",
  lightslategray: "4nwk9",
  lightslategrey: "4nwk9",
  lightsteelblue: "6wau6",
  lightyellow: "9zlcw",
  lime: "1edc",
  limegreen: "1zcxe",
  linen: "9shk6",
  magenta: "9y70f",
  maroon: "4zsow",
  mediumaquamarine: "40eju",
  mediumblue: "5p",
  mediumorchid: "79qkz",
  mediumpurple: "5r3rv",
  mediumseagreen: "2d9ip",
  mediumslateblue: "4tcku",
  mediumspringgreen: "1di2",
  mediumturquoise: "2uabw",
  mediumvioletred: "7rn9h",
  midnightblue: "z980",
  mintcream: "9ljp6",
  mistyrose: "9zg0x",
  moccasin: "9zfzp",
  navajowhite: "9zest",
  navy: "3k",
  oldlace: "9wq92",
  olive: "50hz4",
  olivedrab: "472ub",
  orange: "9z3eo",
  orangered: "9ykg0",
  orchid: "8iu3a",
  palegoldenrod: "9bl4a",
  palegreen: "5yw0o",
  paleturquoise: "6v4ku",
  palevioletred: "8k8lv",
  papayawhip: "9zi6t",
  peachpuff: "9ze0p",
  peru: "80oqn",
  pink: "9z8wb",
  plum: "8nba5",
  powderblue: "6wgdi",
  purple: "4zssg",
  rebeccapurple: "3zk49",
  red: "9y6tc",
  rosybrown: "7cv4f",
  royalblue: "2jvtt",
  saddlebrown: "5fmkz",
  salmon: "9rvci",
  sandybrown: "9jn1c",
  seagreen: "1tdnb",
  seashell: "9zje6",
  sienna: "6973h",
  silver: "7ir40",
  skyblue: "5arjf",
  slateblue: "45e4t",
  slategray: "4e100",
  slategrey: "4e100",
  snow: "9zke2",
  springgreen: "1egv",
  steelblue: "2r1kk",
  tan: "87yx8",
  teal: "pds",
  thistle: "8ggk8",
  tomato: "9yqfb",
  turquoise: "2j4r4",
  violet: "9b10u",
  wheat: "9ld4j",
  white: "9zldr",
  whitesmoke: "9lhpx",
  yellow: "9zl6o",
  yellowgreen: "61fzm"
};

// node_modules/@ant-design/icons/node_modules/@ant-design/fast-color/es/FastColor.js
var round = Math.round;
function splitColorStr(str, parseNum) {
  const match = str.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [];
  const numList = match.map((item) => parseFloat(item));
  for (let i = 0; i < 3; i += 1) {
    numList[i] = parseNum(numList[i] || 0, match[i] || "", i);
  }
  if (match[3]) {
    numList[3] = match[3].includes("%") ? numList[3] / 100 : numList[3];
  } else {
    numList[3] = 1;
  }
  return numList;
}
var parseHSVorHSL = (num, _, index) => index === 0 ? num : num / 100;
function limitRange(value, max) {
  const mergedMax = max || 255;
  if (value > mergedMax) {
    return mergedMax;
  }
  if (value < 0) {
    return 0;
  }
  return value;
}
var FastColor = class {
  /**
   * All FastColor objects are valid. So isValid is always true. This property is kept to be compatible with TinyColor.
   */
  isValid = true;
  /**
   * Red, R in RGB
   */
  r = 0;
  /**
   * Green, G in RGB
   */
  g = 0;
  /**
   * Blue, B in RGB
   */
  b = 0;
  /**
   * Alpha/Opacity, A in RGBA/HSLA
   */
  a = 1;
  // HSV privates
  _h;
  _s;
  _l;
  _v;
  // intermediate variables to calculate HSL/HSV
  _max;
  _min;
  _brightness;
  constructor(input) {
    function matchFormat(str) {
      return str[0] in input && str[1] in input && str[2] in input;
    }
    if (!input) {
    } else if (typeof input === "string") {
      let matchPrefix = function(prefix) {
        return trimStr.startsWith(prefix);
      };
      const trimStr = input.trim();
      if (/^#?[A-F\d]{3,8}$/i.test(trimStr)) {
        this.fromHexString(trimStr);
      } else if (matchPrefix("rgb")) {
        this.fromRgbString(trimStr);
      } else if (matchPrefix("hsl")) {
        this.fromHslString(trimStr);
      } else if (matchPrefix("hsv") || matchPrefix("hsb")) {
        this.fromHsvString(trimStr);
      } else {
        const presetColor = presetColors_default[trimStr.toLowerCase()];
        if (presetColor) {
          this.fromHexString(
            // Convert 36 hex to 16 hex
            parseInt(presetColor, 36).toString(16).padStart(6, "0")
          );
        }
      }
    } else if (input instanceof FastColor) {
      this.r = input.r;
      this.g = input.g;
      this.b = input.b;
      this.a = input.a;
      this._h = input._h;
      this._s = input._s;
      this._l = input._l;
      this._v = input._v;
    } else if (matchFormat("rgb")) {
      this.r = limitRange(input.r);
      this.g = limitRange(input.g);
      this.b = limitRange(input.b);
      this.a = typeof input.a === "number" ? limitRange(input.a, 1) : 1;
    } else if (matchFormat("hsl")) {
      this.fromHsl(input);
    } else if (matchFormat("hsv")) {
      this.fromHsv(input);
    } else {
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(input));
    }
  }
  // ======================= Setter =======================
  setR(value) {
    return this._sc("r", value);
  }
  setG(value) {
    return this._sc("g", value);
  }
  setB(value) {
    return this._sc("b", value);
  }
  setA(value) {
    return this._sc("a", value, 1);
  }
  setHue(value) {
    const hsv = this.toHsv();
    hsv.h = value;
    return this._c(hsv);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function adjustGamma(raw) {
      const val = raw / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    }
    const R = adjustGamma(this.r);
    const G = adjustGamma(this.g);
    const B = adjustGamma(this.b);
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  }
  getHue() {
    if (typeof this._h === "undefined") {
      const delta = this.getMax() - this.getMin();
      if (delta === 0) {
        this._h = 0;
      } else {
        this._h = round(60 * (this.r === this.getMax() ? (this.g - this.b) / delta + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / delta + 2 : (this.r - this.g) / delta + 4));
      }
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s === "undefined") {
      const delta = this.getMax() - this.getMin();
      if (delta === 0) {
        this._s = 0;
      } else {
        this._s = delta / this.getMax();
      }
    }
    return this._s;
  }
  getLightness() {
    if (typeof this._l === "undefined") {
      this._l = (this.getMax() + this.getMin()) / 510;
    }
    return this._l;
  }
  getValue() {
    if (typeof this._v === "undefined") {
      this._v = this.getMax() / 255;
    }
    return this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    if (typeof this._brightness === "undefined") {
      this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3;
    }
    return this._brightness;
  }
  // ======================== Func ========================
  darken(amount = 10) {
    const h = this.getHue();
    const s = this.getSaturation();
    let l = this.getLightness() - amount / 100;
    if (l < 0) {
      l = 0;
    }
    return this._c({
      h,
      s,
      l,
      a: this.a
    });
  }
  lighten(amount = 10) {
    const h = this.getHue();
    const s = this.getSaturation();
    let l = this.getLightness() + amount / 100;
    if (l > 1) {
      l = 1;
    }
    return this._c({
      h,
      s,
      l,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(input, amount = 50) {
    const color = this._c(input);
    const p = amount / 100;
    const calc = (key) => (color[key] - this[key]) * p + this[key];
    const rgba = {
      r: round(calc("r")),
      g: round(calc("g")),
      b: round(calc("b")),
      a: round(calc("a") * 100) / 100
    };
    return this._c(rgba);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(amount = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, amount);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(amount = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, amount);
  }
  onBackground(background) {
    const bg = this._c(background);
    const alpha = this.a + bg.a * (1 - this.a);
    const calc = (key) => {
      return round((this[key] * this.a + bg[key] * bg.a * (1 - this.a)) / alpha);
    };
    return this._c({
      r: calc("r"),
      g: calc("g"),
      b: calc("b"),
      a: alpha
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(other) {
    return this.r === other.r && this.g === other.g && this.b === other.b && this.a === other.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let hex = "#";
    const rHex = (this.r || 0).toString(16);
    hex += rHex.length === 2 ? rHex : "0" + rHex;
    const gHex = (this.g || 0).toString(16);
    hex += gHex.length === 2 ? gHex : "0" + gHex;
    const bHex = (this.b || 0).toString(16);
    hex += bHex.length === 2 ? bHex : "0" + bHex;
    if (typeof this.a === "number" && this.a >= 0 && this.a < 1) {
      const aHex = round(this.a * 255).toString(16);
      hex += aHex.length === 2 ? aHex : "0" + aHex;
    }
    return hex;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const h = this.getHue();
    const s = round(this.getSaturation() * 100);
    const l = round(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${h},${s}%,${l}%,${this.a})` : `hsl(${h},${s}%,${l}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(rgb, value, max) {
    const clone = this.clone();
    clone[rgb] = limitRange(value, max);
    return clone;
  }
  _c(input) {
    return new this.constructor(input);
  }
  getMax() {
    if (typeof this._max === "undefined") {
      this._max = Math.max(this.r, this.g, this.b);
    }
    return this._max;
  }
  getMin() {
    if (typeof this._min === "undefined") {
      this._min = Math.min(this.r, this.g, this.b);
    }
    return this._min;
  }
  fromHexString(trimStr) {
    const withoutPrefix = trimStr.replace("#", "");
    function connectNum(index1, index2) {
      return parseInt(withoutPrefix[index1] + withoutPrefix[index2 || index1], 16);
    }
    if (withoutPrefix.length < 6) {
      this.r = connectNum(0);
      this.g = connectNum(1);
      this.b = connectNum(2);
      this.a = withoutPrefix[3] ? connectNum(3) / 255 : 1;
    } else {
      this.r = connectNum(0, 1);
      this.g = connectNum(2, 3);
      this.b = connectNum(4, 5);
      this.a = withoutPrefix[6] ? connectNum(6, 7) / 255 : 1;
    }
  }
  fromHsl({
    h,
    s,
    l,
    a
  }) {
    this._h = h % 360;
    this._s = s;
    this._l = l;
    this.a = typeof a === "number" ? a : 1;
    if (s <= 0) {
      const rgb = round(l * 255);
      this.r = rgb;
      this.g = rgb;
      this.b = rgb;
    }
    let r = 0, g = 0, b = 0;
    const huePrime = h / 60;
    const chroma = (1 - Math.abs(2 * l - 1)) * s;
    const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
    if (huePrime >= 0 && huePrime < 1) {
      r = chroma;
      g = secondComponent;
    } else if (huePrime >= 1 && huePrime < 2) {
      r = secondComponent;
      g = chroma;
    } else if (huePrime >= 2 && huePrime < 3) {
      g = chroma;
      b = secondComponent;
    } else if (huePrime >= 3 && huePrime < 4) {
      g = secondComponent;
      b = chroma;
    } else if (huePrime >= 4 && huePrime < 5) {
      r = secondComponent;
      b = chroma;
    } else if (huePrime >= 5 && huePrime < 6) {
      r = chroma;
      b = secondComponent;
    }
    const lightnessModification = l - chroma / 2;
    this.r = round((r + lightnessModification) * 255);
    this.g = round((g + lightnessModification) * 255);
    this.b = round((b + lightnessModification) * 255);
  }
  fromHsv({
    h,
    s,
    v,
    a
  }) {
    this._h = h % 360;
    this._s = s;
    this._v = v;
    this.a = typeof a === "number" ? a : 1;
    const vv = round(v * 255);
    this.r = vv;
    this.g = vv;
    this.b = vv;
    if (s <= 0) {
      return;
    }
    const hh = h / 60;
    const i = Math.floor(hh);
    const ff = hh - i;
    const p = round(v * (1 - s) * 255);
    const q = round(v * (1 - s * ff) * 255);
    const t = round(v * (1 - s * (1 - ff)) * 255);
    switch (i) {
      case 0:
        this.g = t;
        this.b = p;
        break;
      case 1:
        this.r = q;
        this.b = p;
        break;
      case 2:
        this.r = p;
        this.b = t;
        break;
      case 3:
        this.r = p;
        this.g = q;
        break;
      case 4:
        this.r = t;
        this.g = p;
        break;
      case 5:
      default:
        this.g = p;
        this.b = q;
        break;
    }
  }
  fromHsvString(trimStr) {
    const cells = splitColorStr(trimStr, parseHSVorHSL);
    this.fromHsv({
      h: cells[0],
      s: cells[1],
      v: cells[2],
      a: cells[3]
    });
  }
  fromHslString(trimStr) {
    const cells = splitColorStr(trimStr, parseHSVorHSL);
    this.fromHsl({
      h: cells[0],
      s: cells[1],
      l: cells[2],
      a: cells[3]
    });
  }
  fromRgbString(trimStr) {
    const cells = splitColorStr(trimStr, (num, txt) => (
      // Convert percentage to number. e.g. 50% -> 128
      txt.includes("%") ? round(num / 100 * 255) : num
    ));
    this.r = cells[0];
    this.g = cells[1];
    this.b = cells[2];
    this.a = cells[3];
  }
};

// node_modules/@ant-design/icons/node_modules/@ant-design/colors/es/generate.js
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function getHue(hsv, i, light) {
  let hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  let saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Math.round(saturation * 100) / 100;
}
function getValue(hsv, i, light) {
  let value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  value = Math.max(0, Math.min(1, value));
  return Math.round(value * 100) / 100;
}
function generate(color, opts = {}) {
  const patterns = [];
  const pColor = new FastColor(color);
  const hsv = pColor.toHsv();
  for (let i = lightColorCount; i > 0; i -= 1) {
    const c = new FastColor({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    });
    patterns.push(c);
  }
  patterns.push(pColor);
  for (let i = 1; i <= darkColorCount; i += 1) {
    const c = new FastColor({
      h: getHue(hsv, i),
      s: getSaturation(hsv, i),
      v: getValue(hsv, i)
    });
    patterns.push(c);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(({
      index,
      amount
    }) => new FastColor(opts.backgroundColor || "#141414").mix(patterns[index], amount).toHexString());
  }
  return patterns.map((c) => c.toHexString());
}

// node_modules/@ant-design/icons/node_modules/@ant-design/colors/es/presets.js
var red = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
red.primary = red[5];
var volcano = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
volcano.primary = volcano[5];
var orange = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
orange.primary = orange[5];
var gold = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
gold.primary = gold[5];
var yellow = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
yellow.primary = yellow[5];
var lime = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
lime.primary = lime[5];
var green = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
green.primary = green[5];
var cyan = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
cyan.primary = cyan[5];
var blue = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
blue.primary = blue[5];
var geekblue = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
geekblue.primary = geekblue[5];
var purple = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
purple.primary = purple[5];
var magenta = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
magenta.primary = magenta[5];
var grey = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
grey.primary = grey[5];
var redDark = ["#2a1215", "#431418", "#58181c", "#791a1f", "#a61d24", "#d32029", "#e84749", "#f37370", "#f89f9a", "#fac8c3"];
redDark.primary = redDark[5];
var volcanoDark = ["#2b1611", "#441d12", "#592716", "#7c3118", "#aa3e19", "#d84a1b", "#e87040", "#f3956a", "#f8b692", "#fad4bc"];
volcanoDark.primary = volcanoDark[5];
var orangeDark = ["#2b1d11", "#442a11", "#593815", "#7c4a15", "#aa6215", "#d87a16", "#e89a3c", "#f3b765", "#f8cf8d", "#fae3b7"];
orangeDark.primary = orangeDark[5];
var goldDark = ["#2b2111", "#443111", "#594214", "#7c5914", "#aa7714", "#d89614", "#e8b339", "#f3cc62", "#f8df8b", "#faedb5"];
goldDark.primary = goldDark[5];
var yellowDark = ["#2b2611", "#443b11", "#595014", "#7c6e14", "#aa9514", "#d8bd14", "#e8d639", "#f3ea62", "#f8f48b", "#fafab5"];
yellowDark.primary = yellowDark[5];
var limeDark = ["#1f2611", "#2e3c10", "#3e4f13", "#536d13", "#6f9412", "#8bbb11", "#a9d134", "#c9e75d", "#e4f88b", "#f0fab5"];
limeDark.primary = limeDark[5];
var greenDark = ["#162312", "#1d3712", "#274916", "#306317", "#3c8618", "#49aa19", "#6abe39", "#8fd460", "#b2e58b", "#d5f2bb"];
greenDark.primary = greenDark[5];
var cyanDark = ["#112123", "#113536", "#144848", "#146262", "#138585", "#13a8a8", "#33bcb7", "#58d1c9", "#84e2d8", "#b2f1e8"];
cyanDark.primary = cyanDark[5];
var blueDark = ["#111a2c", "#112545", "#15325b", "#15417e", "#1554ad", "#1668dc", "#3c89e8", "#65a9f3", "#8dc5f8", "#b7dcfa"];
blueDark.primary = blueDark[5];
var geekblueDark = ["#131629", "#161d40", "#1c2755", "#203175", "#263ea0", "#2b4acb", "#5273e0", "#7f9ef3", "#a8c1f8", "#d2e0fa"];
geekblueDark.primary = geekblueDark[5];
var purpleDark = ["#1a1325", "#24163a", "#301c4d", "#3e2069", "#51258f", "#642ab5", "#854eca", "#ab7ae0", "#cda8f0", "#ebd7fa"];
purpleDark.primary = purpleDark[5];
var magentaDark = ["#291321", "#40162f", "#551c3b", "#75204f", "#a02669", "#cb2b83", "#e0529c", "#f37fb7", "#f8a8cc", "#fad2e3"];
magentaDark.primary = magentaDark[5];
var greyDark = ["#151515", "#1f1f1f", "#2d2d2d", "#393939", "#494949", "#5a5a5a", "#6a6a6a", "#7b7b7b", "#888888", "#969696"];
greyDark.primary = greyDark[5];

// node_modules/@ant-design/icons/es/components/IconBase.js
var React2 = __toESM(require_react());

// node_modules/@ant-design/icons/es/utils.js
var import_dynamicCSS = __toESM(require_dynamicCSS());
var import_shadow = __toESM(require_shadow());
var import_warning = __toESM(require_warning());
var import_react2 = __toESM(require_react());
function camelCase(input) {
  return input.replace(/-(.)/g, (match, g) => g.toUpperCase());
}
function warning(valid, message) {
  (0, import_warning.warningOnce)(valid, `[@ant-design/icons] ${message}`);
}
function isIconDefinition(target) {
  return typeof target === "object" && typeof target.name === "string" && typeof target.theme === "string" && (typeof target.icon === "object" || typeof target.icon === "function");
}
function normalizeAttrs(attrs = {}) {
  return Object.keys(attrs).reduce((acc, key) => {
    const val = attrs[key];
    switch (key) {
      case "class":
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}
function generate2(node, key, rootProps) {
  if (!rootProps) {
    return /* @__PURE__ */ import_react2.default.createElement(node.tag, {
      key,
      ...normalizeAttrs(node.attrs)
    }, (node.children || []).map((child, index) => generate2(child, `${key}-${node.tag}-${index}`)));
  }
  return /* @__PURE__ */ import_react2.default.createElement(node.tag, {
    key,
    ...normalizeAttrs(node.attrs),
    ...rootProps
  }, (node.children || []).map((child, index) => generate2(child, `${key}-${node.tag}-${index}`)));
}
function getSecondaryColor(primaryColor) {
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var iconStyles = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
  vertical-align: inherit;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
var useInsertStyles = (eleRef) => {
  const {
    csp,
    prefixCls,
    layer
  } = (0, import_react2.useContext)(Context_default);
  let mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  if (layer) {
    mergedStyleStr = `@layer ${layer} {
${mergedStyleStr}
}`;
  }
  (0, import_react2.useEffect)(() => {
    const ele = eleRef.current;
    const shadowRoot = (0, import_shadow.getShadowRoot)(ele);
    (0, import_dynamicCSS.updateCSS)(mergedStyleStr, "@ant-design-icons", {
      prepend: !layer,
      csp,
      attachTo: shadowRoot
    });
  }, []);
};

// node_modules/@ant-design/icons/es/components/IconBase.js
var twoToneColorPalette = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false
};
function setTwoToneColors({
  primaryColor,
  secondaryColor
}) {
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return {
    ...twoToneColorPalette
  };
}
var IconBase = (props) => {
  const {
    icon,
    className,
    onClick,
    style,
    primaryColor,
    secondaryColor,
    ...restProps
  } = props;
  const svgRef = React2.useRef();
  let colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles(svgRef);
  warning(isIconDefinition(icon), `icon should be icon definiton, but got ${icon}`);
  if (!isIconDefinition(icon)) {
    return null;
  }
  let target = icon;
  if (target && typeof target.icon === "function") {
    target = {
      ...target,
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    };
  }
  return generate2(target.icon, `svg-${target.name}`, {
    className,
    onClick,
    style,
    "data-icon": target.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true",
    ...restProps,
    ref: svgRef
  });
};
IconBase.displayName = "IconReact";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var IconBase_default = IconBase;

// node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js
function setTwoToneColor(twoToneColor) {
  const [primaryColor, secondaryColor] = normalizeTwoToneColors(twoToneColor);
  return IconBase_default.setTwoToneColors({
    primaryColor,
    secondaryColor
  });
}
function getTwoToneColor() {
  const colors = IconBase_default.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}

// node_modules/@ant-design/icons/es/components/AntdIcon.js
"use client";
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
setTwoToneColor(blue.primary);
var Icon = /* @__PURE__ */ React3.forwardRef((props, ref) => {
  const {
    // affect outter <i>...</i>
    className,
    // affect inner <svg>...</svg>
    icon,
    spin,
    rotate,
    tabIndex,
    onClick,
    // other
    twoToneColor,
    ...restProps
  } = props;
  const {
    prefixCls = "anticon",
    rootClassName
  } = React3.useContext(Context_default);
  const classString = (0, import_classnames.default)(rootClassName, prefixCls, {
    [`${prefixCls}-${icon.name}`]: !!icon.name,
    [`${prefixCls}-spin`]: !!spin || icon.name === "loading"
  }, className);
  let iconTabIndex = tabIndex;
  if (iconTabIndex === void 0 && onClick) {
    iconTabIndex = -1;
  }
  const svgStyle = rotate ? {
    msTransform: `rotate(${rotate}deg)`,
    transform: `rotate(${rotate}deg)`
  } : void 0;
  const [primaryColor, secondaryColor] = normalizeTwoToneColors(twoToneColor);
  return /* @__PURE__ */ React3.createElement("span", _extends({
    role: "img",
    "aria-label": icon.name
  }, restProps, {
    ref,
    tabIndex: iconTabIndex,
    onClick,
    className: classString
  }), /* @__PURE__ */ React3.createElement(IconBase_default, {
    icon,
    primaryColor,
    secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = "AntdIcon";
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
var AntdIcon_default = Icon;

// node_modules/@ant-design/icons/es/icons/CloseOutlined.js
var React4 = __toESM(require_react());
var import_CloseOutlined = __toESM(require_CloseOutlined());
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var CloseOutlined = (props, ref) => /* @__PURE__ */ React4.createElement(AntdIcon_default, _extends2({}, props, {
  ref,
  icon: import_CloseOutlined.default
}));
var RefIcon = /* @__PURE__ */ React4.forwardRef(CloseOutlined);
if (true) {
  RefIcon.displayName = "CloseOutlined";
}
var CloseOutlined_default = RefIcon;

// app/components/Financial/SubChart/index.jsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Financial/SubChart/index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Financial/SubChart/index.jsx"
  );
  import.meta.hot.lastModified = "1758792175526.4683";
}
var Chart = null;
if (typeof window !== "undefined") {
  Chart = require_react_apexcharts_min().default;
}
function RankingChart() {
  _s();
  const [mounted, setMounted] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => setMounted(true), []);
  const categories = ["Q2 2020", "Q3 2020", "Q4 2020", "Q1 2021", "Q2 2021", "Q3 2021", "Q4 2021", "Q1 2022", "Q2 2022", "Q3 2022", "Q4 2022", "Q1 2023", "Q2 2023", "Q3 2023", "Q4 2023", "Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Q1 2025"];
  const series = [{
    name: "ACB",
    data: [80, 55, 25, 32, 18, 45, 80, 52, 25, 32, 18, 45, 40, 38, 35, 18, 45, 40, 38, 36]
  }, {
    name: "TCB",
    data: [60, 88, 87, 90, 92, 91, 60, 89, 90, 91, 92, 91, 90, 89, 90, 91, 92, 90, 91, 92]
  }, {
    name: "VCB",
    data: [30, 18, 45, 80, 55, 32, 25, 32, 18, 45, 40, 20, 38, 42, 45, 40, 38, 42, 45, 39]
  }, {
    name: "OCB",
    data: [90, 88, 87, 60, 89, 90, 92, 91, 60, 62, 91, 92, 91, 60, 88, 87, 89, 90, 92, 91]
  }];
  const annotations = {
    xaxis: categories.map((cat, i) => {
      if (i % 2 === 0) {
        return {
          x: cat,
          strokeDashArray: 0,
          borderColor: "#f0f0f0",
          fillColor: "#f5f5f5",
          opacity: 0.5,
          label: {
            show: false
          }
        };
      }
      return {};
    })
  };
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
      dashArray: [0, 4, 4, 4]
      // ACB liền, các line khác gạch chấm
    },
    markers: {
      size: 5
    },
    colors: ["#B71C1C", "#FBC02D", "#26A69A", "#3949AB"],
    xaxis: {
      categories,
      labels: {
        rotate: -45
      }
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        formatter: (val) => `${val}%`
      }
    },
    grid: {
      borderColor: "#e0e0e0",
      xaxis: {
        lines: {
          show: true
        }
      },
      // đường dọc
      yaxis: {
        lines: {
          show: true
        }
      }
      // đường ngang
    },
    annotations,
    legend: {
      position: "top",
      horizontalAlign: "center"
    },
    title: {
      text: "V\u1ECB tr\xED c\u1EE7a c\xF4ng ty trong to\xE0n ng\xE0nh - X\xE9t theo: Gi\xE1 tr\u1ECB s\u1ED5 s\xE1ch c\u1EE7a c\u1ED5 phi\u1EBFu (BVPS)",
      align: "center"
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: mounted && Chart ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Chart, { options, series, type: "line", height: 450 }, void 0, false, {
    fileName: "app/components/Financial/SubChart/index.jsx",
    lineNumber: 120,
    columnNumber: 27
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Loading chart..." }, void 0, false, {
    fileName: "app/components/Financial/SubChart/index.jsx",
    lineNumber: 120,
    columnNumber: 98
  }, this) }, void 0, false, {
    fileName: "app/components/Financial/SubChart/index.jsx",
    lineNumber: 119,
    columnNumber: 10
  }, this);
}
_s(RankingChart, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = RankingChart;
var _c;
$RefreshReg$(_c, "RankingChart");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/analysis/company/index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/analysis/company/index.jsx"
  );
  import.meta.hot.lastModified = "1758930124943.6096";
}
var Company = () => {
  _s2();
  const [selected, setSelected] = (0, import_react5.useState)("Ng\xE2n h\xE0ng TMCP \xC1 Ch\xE2u");
  const [isModalAdd, setIsModalAdd] = (0, import_react5.useState)(false);
  const columns = [{
    title: "M\xE3 CK",
    dataIndex: "code",
    key: "code",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: text }, void 0, false, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 43,
      columnNumber: 21
    }, this)
  }, {
    title: "T\xEAn c\xF4ng ty",
    dataIndex: "company",
    key: "company",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: text }, void 0, false, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 48,
      columnNumber: 21
    }, this)
  }, {
    title: "Ng\xE0nh",
    dataIndex: "major",
    key: "major",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: text }, void 0, false, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 53,
      columnNumber: 21
    }, this)
  }, {
    title: "P/E",
    dataIndex: "pe",
    key: "pe",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: text }, void 0, false, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 58,
      columnNumber: 21
    }, this)
  }, {
    title: "% t\u0103ng gi\xE1",
    dataIndex: "percent",
    key: "percent",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Adjust_default, { value: text, background: "#C0E3FF" }, void 0, false, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 63,
      columnNumber: 21
    }, this)
  }, {
    title: "ROE",
    dataIndex: "roe",
    key: "roe",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Adjust_default, { value: text, background: "#A5FFD5" }, void 0, false, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 68,
      columnNumber: 21
    }, this)
  }, {
    title: "ROA",
    dataIndex: "roa",
    key: "roa",
    render: (text) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Adjust_default, { value: text, background: "#FFF39B" }, void 0, false, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 73,
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
  const priceChartData = [{
    value: "Ng\xE2n h\xE0ng TMCP \xC1 Ch\xE2u",
    label: "ACB"
  }, {
    value: "Ng\xE2n h\xE0ng Techcombank",
    label: "TCB"
  }, {
    value: "Ng\xE2n h\xE0ng BIDV",
    label: "BIDV"
  }, {
    value: "Ng\xE2n h\xE0ng s\u1ED1 Lio",
    label: "Lio"
  }];
  const dataAdd = [{
    id: 1,
    tag: "BIDV"
  }, {
    id: 2,
    tag: "TCB"
  }, {
    id: 3,
    tag: "Lio"
  }];
  const financialTabs = [{
    id: 1,
    text: "Ch\u1EC9 s\u1ED1 \u0111\u1ECBnh gi\xE1"
  }, {
    id: 2,
    text: "Kh\u1EA3 n\u0103ng sinh l\u1EDDi"
  }, {
    id: 3,
    text: "Ch\u1EC9 s\u1ED1 thanh kho\u1EA3n"
  }, {
    id: 4,
    text: "Hi\u1EC7u qu\u1EA3 ho\u1EA1t \u0111\u1ED9ng"
  }, {
    id: 5,
    text: "C\u01A1 c\u1EA5u ngu\u1ED3n v\u1ED1n"
  }];
  const handleChange = (value) => {
    setSelected(value);
  };
  const handleConvertData = () => {
    switch (selected) {
      case "Ng\xE2n h\xE0ng TMCP \xC1 Ch\xE2u":
        return "ACB";
      case "Ng\xE2n h\xE0ng Techcombank":
        return "Techcombank";
      case "Ng\xE2n h\xE0ng BIDV":
        return "BIDV";
      case "Ng\xE2n h\xE0ng s\u1ED1 Lio":
        return "Lio";
    }
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const handleOkAdd = () => {
    setIsModalAdd(false);
  };
  const handleCancelAdd = () => {
    setIsModalAdd(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Container_default, { fluid: "xxl", className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tab_default.Container, { activeKey: "overview", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Block_default, { title: "Danh s\xE1ch VSMI khuy\u1EBFn ngh\u1ECB", component: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RecommendBlock, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(table_default, { bordered: true, columns, dataSource: data, pagination: {
        hideOnSinglePage: true,
        pageSize: 20
      } }, void 0, false, {
        fileName: "app/routes/apps/analysis/company/index.jsx",
        lineNumber: 219,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/analysis/company/index.jsx",
        lineNumber: 218,
        columnNumber: 70
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/analysis/company/index.jsx",
        lineNumber: 218,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BlockPriceChart, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PriceChartSelect, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Ch\u1ECDn M\xE3 ch\u1EE9ng kho\xE1n" }, void 0, false, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 226,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(select_default, { defaultValue: "ACB", onChange: handleChange, options: priceChartData }, void 0, false, {
              fileName: "app/routes/apps/analysis/company/index.jsx",
              lineNumber: 228,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: selected }, void 0, false, {
              fileName: "app/routes/apps/analysis/company/index.jsx",
              lineNumber: 229,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 227,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/analysis/company/index.jsx",
          lineNumber: 225,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Block_default, { title: "Bi\u1EC3u \u0111\u1ED3 gi\xE1", component: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MarketContainer, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CompareBlock, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BorderBlock, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CompareTab, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TagCommon, { className: "bold", children: handleConvertData() }, void 0, false, {
                fileName: "app/routes/apps/analysis/company/index.jsx",
                lineNumber: 236,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TagAdd, { onClick: () => {
                setIsModalAdd(true);
              }, children: "Th\xEAm m\xE3 so s\xE1nh" }, void 0, false, {
                fileName: "app/routes/apps/analysis/company/index.jsx",
                lineNumber: 239,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: dataAdd.map((item) => {
                return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TagCommon, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CloseOutlined_default, { style: {
                    color: "#C00000"
                  } }, void 0, false, {
                    fileName: "app/routes/apps/analysis/company/index.jsx",
                    lineNumber: 247,
                    columnNumber: 33
                  }, this),
                  item.tag
                ] }, item.id, true, {
                  fileName: "app/routes/apps/analysis/company/index.jsx",
                  lineNumber: 246,
                  columnNumber: 30
                }, this);
              }) }, void 0, false, {
                fileName: "app/routes/apps/analysis/company/index.jsx",
                lineNumber: 244,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/analysis/company/index.jsx",
              lineNumber: 235,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/analysis/company/index.jsx",
              lineNumber: 234,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Chart_default, {}, void 0, false, {
              fileName: "app/routes/apps/analysis/company/index.jsx",
              lineNumber: 256,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 233,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BorderBlock, { className: "market-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "swiper-verical", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Swiper, { loop: true, direction: "vertical", slidesPerView: "auto", spaceBetween: 15, navigation: true, modules: [Pagination, Navigation], children: analyticsData.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SwiperSlide, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AnalyticsItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", {}, void 0, false, {
              fileName: "app/routes/apps/analysis/company/index.jsx",
              lineNumber: 263,
              columnNumber: 31
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: item.title }, void 0, false, {
              fileName: "app/routes/apps/analysis/company/index.jsx",
              lineNumber: 264,
              columnNumber: 31
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 262,
            columnNumber: 29
          }, this) }, item.id, false, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 261,
            columnNumber: 52
          }, this)) }, void 0, false, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 260,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 259,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 258,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/analysis/company/index.jsx",
          lineNumber: 232,
          columnNumber: 57
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/analysis/company/index.jsx",
          lineNumber: 232,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/analysis/company/index.jsx",
        lineNumber: 224,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Block_default, { title: "Ph\xE2n t\xEDch t\xE0i ch\xEDnh", component: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FinancialTabs, { children: financialTabs.map((item) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: item.text }, item.id, false, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 275,
            columnNumber: 22
          }, this);
        }) }, void 0, false, {
          fileName: "app/routes/apps/analysis/company/index.jsx",
          lineNumber: 273,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BorderBlock, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FinancialAnalysis, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FinancialHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CompareTab, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TagCommon, { className: "bold", children: handleConvertData() }, void 0, false, {
                fileName: "app/routes/apps/analysis/company/index.jsx",
                lineNumber: 282,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TagAdd, { onClick: () => {
                setIsModalAdd(true);
              }, children: "Th\xEAm m\xE3 so s\xE1nh" }, void 0, false, {
                fileName: "app/routes/apps/analysis/company/index.jsx",
                lineNumber: 285,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: dataAdd.map((item) => {
                return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TagCommon, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CloseOutlined_default, { style: {
                    color: "#C00000"
                  } }, void 0, false, {
                    fileName: "app/routes/apps/analysis/company/index.jsx",
                    lineNumber: 293,
                    columnNumber: 33
                  }, this),
                  item.tag
                ] }, item.id, true, {
                  fileName: "app/routes/apps/analysis/company/index.jsx",
                  lineNumber: 292,
                  columnNumber: 30
                }, this);
              }) }, void 0, false, {
                fileName: "app/routes/apps/analysis/company/index.jsx",
                lineNumber: 290,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/analysis/company/index.jsx",
              lineNumber: 281,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "financial-quarter", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "K\u1EF3 BCTC" }, void 0, false, {
                fileName: "app/routes/apps/analysis/company/index.jsx",
                lineNumber: 302,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(date_picker_default, { onChange, picker: "quarter", placeholder: "Ch\u1ECDn qu\xFD" }, void 0, false, {
                fileName: "app/routes/apps/analysis/company/index.jsx",
                lineNumber: 303,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(date_picker_default, { onChange, picker: "quarter", placeholder: "Ch\u1ECDn qu\xFD" }, void 0, false, {
                fileName: "app/routes/apps/analysis/company/index.jsx",
                lineNumber: 304,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/analysis/company/index.jsx",
              lineNumber: 301,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 280,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FinancialBody, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BvpsChart, {}, void 0, false, {
              fileName: "app/routes/apps/analysis/company/index.jsx",
              lineNumber: 308,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RankingChart, {}, void 0, false, {
              fileName: "app/routes/apps/analysis/company/index.jsx",
              lineNumber: 309,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 307,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/analysis/company/index.jsx",
          lineNumber: 279,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/analysis/company/index.jsx",
          lineNumber: 278,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/analysis/company/index.jsx",
        lineNumber: 272,
        columnNumber: 63
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/analysis/company/index.jsx",
        lineNumber: 272,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Block_default, { title: "B\xE1o c\xE1o ph\xE2n t\xEDch c\xF4ng ty", component: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SummaryAnalysis, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", {}, void 0, false, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 316,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "B\xE1o c\xE1o ph\xE2n t\xEDch - ACB - 2025 - Q1.pdf" }, void 0, false, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 317,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/analysis/company/index.jsx",
          lineNumber: 315,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SummaryBottom, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { children: "B\xE1o c\xE1o ph\xE2n t\xEDch kh\xE1c" }, void 0, false, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 320,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(BorderBlock, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Swiper, { loop: true, slidesPerView: 5, spaceBetween: 15, navigation: true, modules: [Pagination, Navigation], children: analyticsData.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SwiperSlide, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AnalyticsItem, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", {}, void 0, false, {
              fileName: "app/routes/apps/analysis/company/index.jsx",
              lineNumber: 325,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: item.title }, void 0, false, {
              fileName: "app/routes/apps/analysis/company/index.jsx",
              lineNumber: 326,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 324,
            columnNumber: 27
          }, this) }, item.id, false, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 323,
            columnNumber: 50
          }, this)) }, void 0, false, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 322,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/analysis/company/index.jsx",
            lineNumber: 321,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/analysis/company/index.jsx",
          lineNumber: 319,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/analysis/company/index.jsx",
        lineNumber: 314,
        columnNumber: 69
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/analysis/company/index.jsx",
        lineNumber: 314,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 217,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 216,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(modal_default, { closable: false, open: isModalAdd, onOk: handleOkAdd, onCancel: handleCancelAdd, footer: false, width: 700, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Add_default, { handleCancelAdd }, void 0, false, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 336,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/analysis/company/index.jsx",
      lineNumber: 335,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/analysis/company/index.jsx",
    lineNumber: 215,
    columnNumber: 10
  }, this);
};
_s2(Company, "PSPPC7YR2wlVoSCrF7PnumWo6kI=");
_c2 = Company;
var company_default = Company;
var _c2;
$RefreshReg$(_c2, "Company");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  company_default as default
};
//# sourceMappingURL=/build/routes/apps/analysis/company/index-MOIHYMGB.js.map
