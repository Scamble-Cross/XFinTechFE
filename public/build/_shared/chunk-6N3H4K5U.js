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

// node_modules/tabler-icons-react/dist/icons/browser.js
var import_react5 = __toESM(require_react());
var _excluded5 = ["size", "color"];
function Browser(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded5);
  return /* @__PURE__ */ import_react5.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-browser",
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
    height: "16",
    rx: "1"
  }), /* @__PURE__ */ import_react5.default.createElement("line", {
    x1: "4",
    y1: "8",
    x2: "20",
    y2: "8"
  }), /* @__PURE__ */ import_react5.default.createElement("line", {
    x1: "8",
    y1: "4",
    x2: "8",
    y2: "8"
  }));
}

// node_modules/tabler-icons-react/dist/icons/calendar-time.js
var import_react6 = __toESM(require_react());
var _excluded6 = ["size", "color"];
function CalendarTime(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded6);
  return /* @__PURE__ */ import_react6.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-calendar-time",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react6.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react6.default.createElement("path", {
    d: "M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"
  }), /* @__PURE__ */ import_react6.default.createElement("circle", {
    cx: "18",
    cy: "18",
    r: "4"
  }), /* @__PURE__ */ import_react6.default.createElement("path", {
    d: "M15 3v4"
  }), /* @__PURE__ */ import_react6.default.createElement("path", {
    d: "M7 3v4"
  }), /* @__PURE__ */ import_react6.default.createElement("path", {
    d: "M3 11h16"
  }), /* @__PURE__ */ import_react6.default.createElement("path", {
    d: "M18 16.496v1.504l1 1"
  }));
}

// node_modules/tabler-icons-react/dist/icons/code.js
var import_react7 = __toESM(require_react());
var _excluded7 = ["size", "color"];
function Code(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded7);
  return /* @__PURE__ */ import_react7.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-code",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react7.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react7.default.createElement("polyline", {
    points: "7 8 3 12 7 16"
  }), /* @__PURE__ */ import_react7.default.createElement("polyline", {
    points: "17 8 21 12 17 16"
  }), /* @__PURE__ */ import_react7.default.createElement("line", {
    x1: "14",
    y1: "4",
    x2: "10",
    y2: "20"
  }));
}

// node_modules/tabler-icons-react/dist/icons/file-check.js
var import_react8 = __toESM(require_react());
var _excluded8 = ["size", "color"];
function FileCheck(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded8);
  return /* @__PURE__ */ import_react8.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-file-check",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react8.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react8.default.createElement("path", {
    d: "M14 3v4a1 1 0 0 0 1 1h4"
  }), /* @__PURE__ */ import_react8.default.createElement("path", {
    d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
  }), /* @__PURE__ */ import_react8.default.createElement("path", {
    d: "M9 15l2 2l4 -4"
  }));
}

// node_modules/tabler-icons-react/dist/icons/file-code-2.js
var import_react9 = __toESM(require_react());
var _excluded9 = ["size", "color"];
function FileCode2(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded9);
  return /* @__PURE__ */ import_react9.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-file-code-2",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react9.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react9.default.createElement("path", {
    d: "M10 12h-1v5h1"
  }), /* @__PURE__ */ import_react9.default.createElement("path", {
    d: "M14 12h1v5h-1"
  }), /* @__PURE__ */ import_react9.default.createElement("path", {
    d: "M14 3v4a1 1 0 0 0 1 1h4"
  }), /* @__PURE__ */ import_react9.default.createElement("path", {
    d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
  }));
}

// node_modules/tabler-icons-react/dist/icons/file-digit.js
var import_react10 = __toESM(require_react());
var _excluded10 = ["size", "color"];
function FileDigit(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded10);
  return /* @__PURE__ */ import_react10.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-file-digit",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react10.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react10.default.createElement("path", {
    d: "M14 3v4a1 1 0 0 0 1 1h4"
  }), /* @__PURE__ */ import_react10.default.createElement("rect", {
    x: "9",
    y: "12",
    width: "3",
    height: "5",
    rx: "1"
  }), /* @__PURE__ */ import_react10.default.createElement("path", {
    d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
  }), /* @__PURE__ */ import_react10.default.createElement("path", {
    d: "M15 12v5"
  }));
}

// node_modules/tabler-icons-react/dist/icons/inbox.js
var import_react11 = __toESM(require_react());
var _excluded11 = ["size", "color"];
function Inbox(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded11);
  return /* @__PURE__ */ import_react11.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-inbox",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react11.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react11.default.createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "2"
  }), /* @__PURE__ */ import_react11.default.createElement("path", {
    d: "M4 13h3l3 3h4l3 -3h3"
  }));
}

// node_modules/tabler-icons-react/dist/icons/layout-kanban.js
var import_react12 = __toESM(require_react());
var _excluded12 = ["size", "color"];
function LayoutKanban(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded12);
  return /* @__PURE__ */ import_react12.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-layout-kanban",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react12.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react12.default.createElement("line", {
    x1: "4",
    y1: "4",
    x2: "10",
    y2: "4"
  }), /* @__PURE__ */ import_react12.default.createElement("line", {
    x1: "14",
    y1: "4",
    x2: "20",
    y2: "4"
  }), /* @__PURE__ */ import_react12.default.createElement("rect", {
    x: "4",
    y: "8",
    width: "6",
    height: "12",
    rx: "2"
  }), /* @__PURE__ */ import_react12.default.createElement("rect", {
    x: "14",
    y: "8",
    width: "6",
    height: "6",
    rx: "2"
  }));
}

// node_modules/tabler-icons-react/dist/icons/layout.js
var import_react13 = __toESM(require_react());
var _excluded13 = ["size", "color"];
function Layout(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded13);
  return /* @__PURE__ */ import_react13.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-layout",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react13.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react13.default.createElement("rect", {
    x: "4",
    y: "4",
    width: "6",
    height: "5",
    rx: "2"
  }), /* @__PURE__ */ import_react13.default.createElement("rect", {
    x: "4",
    y: "13",
    width: "6",
    height: "7",
    rx: "2"
  }), /* @__PURE__ */ import_react13.default.createElement("rect", {
    x: "14",
    y: "4",
    width: "6",
    height: "16",
    rx: "2"
  }));
}

// node_modules/tabler-icons-react/dist/icons/list-details.js
var import_react14 = __toESM(require_react());
var _excluded14 = ["size", "color"];
function ListDetails(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded14);
  return /* @__PURE__ */ import_react14.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-list-details",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react14.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react14.default.createElement("path", {
    d: "M13 5h8"
  }), /* @__PURE__ */ import_react14.default.createElement("path", {
    d: "M13 9h5"
  }), /* @__PURE__ */ import_react14.default.createElement("path", {
    d: "M13 15h8"
  }), /* @__PURE__ */ import_react14.default.createElement("path", {
    d: "M13 19h5"
  }), /* @__PURE__ */ import_react14.default.createElement("rect", {
    x: "3",
    y: "4",
    width: "6",
    height: "6",
    rx: "1"
  }), /* @__PURE__ */ import_react14.default.createElement("rect", {
    x: "3",
    y: "14",
    width: "6",
    height: "6",
    rx: "1"
  }));
}

// node_modules/tabler-icons-react/dist/icons/message-circle.js
var import_react15 = __toESM(require_react());
var _excluded15 = ["size", "color"];
function MessageCircle(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded15);
  return /* @__PURE__ */ import_react15.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-message-circle",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react15.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react15.default.createElement("path", {
    d: "M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"
  }), /* @__PURE__ */ import_react15.default.createElement("line", {
    x1: "12",
    y1: "12",
    x2: "12",
    y2: "12.01"
  }), /* @__PURE__ */ import_react15.default.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "8",
    y2: "12.01"
  }), /* @__PURE__ */ import_react15.default.createElement("line", {
    x1: "16",
    y1: "12",
    x2: "16",
    y2: "12.01"
  }));
}

// node_modules/tabler-icons-react/dist/icons/message-dots.js
var import_react16 = __toESM(require_react());
var _excluded16 = ["size", "color"];
function MessageDots(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded16);
  return /* @__PURE__ */ import_react16.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-message-dots",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react16.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react16.default.createElement("path", {
    d: "M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4"
  }), /* @__PURE__ */ import_react16.default.createElement("line", {
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "11.01"
  }), /* @__PURE__ */ import_react16.default.createElement("line", {
    x1: "8",
    y1: "11",
    x2: "8",
    y2: "11.01"
  }), /* @__PURE__ */ import_react16.default.createElement("line", {
    x1: "16",
    y1: "11",
    x2: "16",
    y2: "11.01"
  }));
}

// node_modules/tabler-icons-react/dist/icons/notebook.js
var import_react17 = __toESM(require_react());
var _excluded17 = ["size", "color"];
function Notebook(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded17);
  return /* @__PURE__ */ import_react17.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-notebook",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react17.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react17.default.createElement("path", {
    d: "M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18"
  }), /* @__PURE__ */ import_react17.default.createElement("line", {
    x1: "13",
    y1: "8",
    x2: "15",
    y2: "8"
  }), /* @__PURE__ */ import_react17.default.createElement("line", {
    x1: "13",
    y1: "12",
    x2: "15",
    y2: "12"
  }));
}

// node_modules/tabler-icons-react/dist/icons/photo.js
var import_react18 = __toESM(require_react());
var _excluded18 = ["size", "color"];
function Photo(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded18);
  return /* @__PURE__ */ import_react18.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-photo",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react18.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react18.default.createElement("line", {
    x1: "15",
    y1: "8",
    x2: "15.01",
    y2: "8"
  }), /* @__PURE__ */ import_react18.default.createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "3"
  }), /* @__PURE__ */ import_react18.default.createElement("path", {
    d: "M4 15l4 -4a3 5 0 0 1 3 0l5 5"
  }), /* @__PURE__ */ import_react18.default.createElement("path", {
    d: "M14 14l1 -1a3 5 0 0 1 3 0l2 2"
  }));
}

// node_modules/tabler-icons-react/dist/icons/template.js
var import_react19 = __toESM(require_react());
var _excluded19 = ["size", "color"];
function Template(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded19);
  return /* @__PURE__ */ import_react19.default.createElement("svg", _extends({
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
  }, restProps), /* @__PURE__ */ import_react19.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react19.default.createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "4",
    rx: "1"
  }), /* @__PURE__ */ import_react19.default.createElement("rect", {
    x: "4",
    y: "12",
    width: "6",
    height: "8",
    rx: "1"
  }), /* @__PURE__ */ import_react19.default.createElement("line", {
    x1: "14",
    y1: "12",
    x2: "20",
    y2: "12"
  }), /* @__PURE__ */ import_react19.default.createElement("line", {
    x1: "14",
    y1: "16",
    x2: "20",
    y2: "16"
  }), /* @__PURE__ */ import_react19.default.createElement("line", {
    x1: "14",
    y1: "20",
    x2: "20",
    y2: "20"
  }));
}

// node_modules/tabler-icons-react/dist/icons/user-plus.js
var import_react20 = __toESM(require_react());
var _excluded20 = ["size", "color"];
function UserPlus(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded20);
  return /* @__PURE__ */ import_react20.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-user-plus",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react20.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react20.default.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /* @__PURE__ */ import_react20.default.createElement("path", {
    d: "M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
  }), /* @__PURE__ */ import_react20.default.createElement("path", {
    d: "M16 11h6m-3 -3v6"
  }));
}

// node_modules/tabler-icons-react/dist/icons/user-search.js
var import_react21 = __toESM(require_react());
var _excluded21 = ["size", "color"];
function UserSearch(_ref) {
  var _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, restProps = _objectWithoutProperties(_ref, _excluded21);
  return /* @__PURE__ */ import_react21.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon icon-tabler icon-tabler-user-search",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, restProps), /* @__PURE__ */ import_react21.default.createElement("path", {
    stroke: "none",
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /* @__PURE__ */ import_react21.default.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }), /* @__PURE__ */ import_react21.default.createElement("path", {
    d: "M6 21v-2a4 4 0 0 1 4 -4h1"
  }), /* @__PURE__ */ import_react21.default.createElement("circle", {
    cx: "16.5",
    cy: "17.5",
    r: "2.5"
  }), /* @__PURE__ */ import_react21.default.createElement("path", {
    d: "M18.5 19.5l2.5 2.5"
  }));
}

export {
  ArrowBarToLeft,
  ArrowsSort,
  Browser,
  CalendarTime,
  Code,
  FileCheck,
  FileCode2,
  FileDigit,
  Inbox,
  LayoutKanban,
  Layout,
  ListDetails,
  MessageCircle,
  MessageDots,
  Notebook,
  Photo,
  SortAscending,
  SortDescending,
  Template,
  UserPlus,
  UserSearch
};
//# sourceMappingURL=/build/_shared/chunk-6N3H4K5U.js.map
