import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/tabler-icons-react/dist/_virtual/_rollupPluginBabelHelpers.js
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
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}

// node_modules/tabler-icons-react/dist/icons/arrows-sort.js
var import_react = __toESM(require_react());
var _excluded = ["size", "color"];
function ArrowsSort(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded);
  return /* @__PURE__ */ import_react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-arrows-sort",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react.default.createElement("path", {
    d: "M3 9l4 -4l4 4m-4 -4v14"
  }), /* @__PURE__ */ import_react.default.createElement("path", {
    d: "M21 15l-4 4l-4 -4m4 4v-14"
  }));
}

// node_modules/tabler-icons-react/dist/icons/sort-ascending.js
var import_react2 = __toESM(require_react());
var _excluded2 = ["size", "color"];
function SortAscending(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded2);
  return /* @__PURE__ */ import_react2.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-sort-ascending",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react2.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react2.default.createElement("line", {
    x1: "4",
    y1: "6",
    x2: "11",
    y2: "6"
  }), /* @__PURE__ */ import_react2.default.createElement("line", {
    x1: "4",
    y1: "12",
    x2: "11",
    y2: "12"
  }), /* @__PURE__ */ import_react2.default.createElement("line", {
    x1: "4",
    y1: "18",
    x2: "13",
    y2: "18"
  }), /* @__PURE__ */ import_react2.default.createElement("polyline", {
    points: "15 9 18 6 21 9"
  }), /* @__PURE__ */ import_react2.default.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
}

// node_modules/tabler-icons-react/dist/icons/sort-descending.js
var import_react3 = __toESM(require_react());
var _excluded3 = ["size", "color"];
function SortDescending(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded3);
  return /* @__PURE__ */ import_react3.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-sort-descending",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react3.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react3.default.createElement("line", {
    x1: "4",
    y1: "6",
    x2: "13",
    y2: "6"
  }), /* @__PURE__ */ import_react3.default.createElement("line", {
    x1: "4",
    y1: "12",
    x2: "11",
    y2: "12"
  }), /* @__PURE__ */ import_react3.default.createElement("line", {
    x1: "4",
    y1: "18",
    x2: "11",
    y2: "18"
  }), /* @__PURE__ */ import_react3.default.createElement("polyline", {
    points: "15 15 18 18 21 15"
  }), /* @__PURE__ */ import_react3.default.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
}

// node_modules/tabler-icons-react/dist/icons/arrow-bar-to-left.js
var import_react4 = __toESM(require_react());
var _excluded4 = ["size", "color"];
function ArrowBarToLeft(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded4);
  return /* @__PURE__ */ import_react4.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-arrow-bar-to-left",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react4.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react4.default.createElement("line", {
    x1: "10",
    y1: "12",
    x2: "20",
    y2: "12"
  }), /* @__PURE__ */ import_react4.default.createElement("line", {
    x1: "10",
    y1: "12",
    x2: "14",
    y2: "16"
  }), /* @__PURE__ */ import_react4.default.createElement("line", {
    x1: "10",
    y1: "12",
    x2: "14",
    y2: "8"
  }), /* @__PURE__ */ import_react4.default.createElement("line", {
    x1: "4",
    y1: "4",
    x2: "4",
    y2: "20"
  }));
}

// node_modules/tabler-icons-react/dist/icons/template.js
var import_react5 = __toESM(require_react());
var _excluded5 = ["size", "color"];
function Template(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded5);
  return /* @__PURE__ */ import_react5.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-template",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react5.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react5.default.createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "4",
    rx: "1"
  }), /* @__PURE__ */ import_react5.default.createElement("rect", {
    x: "4",
    y: "12",
    width: "6",
    height: "8",
    rx: "1"
  }), /* @__PURE__ */ import_react5.default.createElement("line", {
    x1: "14",
    y1: "12",
    x2: "20",
    y2: "12"
  }), /* @__PURE__ */ import_react5.default.createElement("line", {
    x1: "14",
    y1: "16",
    x2: "20",
    y2: "16"
  }), /* @__PURE__ */ import_react5.default.createElement("line", {
    x1: "14",
    y1: "20",
    x2: "20",
    y2: "20"
  }));
}

export {
  ArrowBarToLeft,
  ArrowsSort,
  SortAscending,
  SortDescending,
  Template
};
//# sourceMappingURL=/build/_shared/chunk-T44O2CY6.js.map
