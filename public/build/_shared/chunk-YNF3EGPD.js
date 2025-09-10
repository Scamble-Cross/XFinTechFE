import {
  require_prop_types
} from "/build/_shared/chunk-HFWHD4VB.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/react-feather/dist/icons/calendar.js
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
function _extends() {
  _extends = Object.assign || function(target) {
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
var Calendar = (0, import_react.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react.default.createElement("svg", _extends({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react.default.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ import_react.default.createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "6"
  }), /* @__PURE__ */ import_react.default.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "6"
  }), /* @__PURE__ */ import_react.default.createElement("line", {
    x1: "3",
    y1: "10",
    x2: "21",
    y2: "10"
  }));
});
Calendar.propTypes = {
  color: import_prop_types.default.string,
  size: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number])
};
Calendar.displayName = "Calendar";
var calendar_default = Calendar;

// node_modules/react-feather/dist/icons/chevron-down.js
var import_react2 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
function _extends2() {
  _extends2 = Object.assign || function(target) {
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
function _objectWithoutProperties2(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
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
function _objectWithoutPropertiesLoose2(source, excluded) {
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
var ChevronDown = (0, import_react2.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties2(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react2.default.createElement("svg", _extends2({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react2.default.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }));
});
ChevronDown.propTypes = {
  color: import_prop_types2.default.string,
  size: import_prop_types2.default.oneOfType([import_prop_types2.default.string, import_prop_types2.default.number])
};
ChevronDown.displayName = "ChevronDown";
var chevron_down_default = ChevronDown;

// node_modules/react-feather/dist/icons/chevron-up.js
var import_react3 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
function _extends3() {
  _extends3 = Object.assign || function(target) {
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
  return _extends3.apply(this, arguments);
}
function _objectWithoutProperties3(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose3(source, excluded);
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
function _objectWithoutPropertiesLoose3(source, excluded) {
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
var ChevronUp = (0, import_react3.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties3(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react3.default.createElement("svg", _extends3({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react3.default.createElement("polyline", {
    points: "18 15 12 9 6 15"
  }));
});
ChevronUp.propTypes = {
  color: import_prop_types3.default.string,
  size: import_prop_types3.default.oneOfType([import_prop_types3.default.string, import_prop_types3.default.number])
};
ChevronUp.displayName = "ChevronUp";
var chevron_up_default = ChevronUp;

// node_modules/react-feather/dist/icons/copy.js
var import_react4 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
function _extends4() {
  _extends4 = Object.assign || function(target) {
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
  return _extends4.apply(this, arguments);
}
function _objectWithoutProperties4(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose4(source, excluded);
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
function _objectWithoutPropertiesLoose4(source, excluded) {
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
var Copy = (0, import_react4.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties4(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react4.default.createElement("svg", _extends4({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react4.default.createElement("rect", {
    x: "9",
    y: "9",
    width: "13",
    height: "13",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ import_react4.default.createElement("path", {
    d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
  }));
});
Copy.propTypes = {
  color: import_prop_types4.default.string,
  size: import_prop_types4.default.oneOfType([import_prop_types4.default.string, import_prop_types4.default.number])
};
Copy.displayName = "Copy";
var copy_default = Copy;

// node_modules/react-feather/dist/icons/download.js
var import_react5 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
function _extends5() {
  _extends5 = Object.assign || function(target) {
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
  return _extends5.apply(this, arguments);
}
function _objectWithoutProperties5(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose5(source, excluded);
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
function _objectWithoutPropertiesLoose5(source, excluded) {
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
var Download = (0, import_react5.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties5(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react5.default.createElement("svg", _extends5({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react5.default.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /* @__PURE__ */ import_react5.default.createElement("polyline", {
    points: "7 10 12 15 17 10"
  }), /* @__PURE__ */ import_react5.default.createElement("line", {
    x1: "12",
    y1: "15",
    x2: "12",
    y2: "3"
  }));
});
Download.propTypes = {
  color: import_prop_types5.default.string,
  size: import_prop_types5.default.oneOfType([import_prop_types5.default.string, import_prop_types5.default.number])
};
Download.displayName = "Download";
var download_default = Download;

// node_modules/react-feather/dist/icons/edit-2.js
var import_react6 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
function _extends6() {
  _extends6 = Object.assign || function(target) {
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
  return _extends6.apply(this, arguments);
}
function _objectWithoutProperties6(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose6(source, excluded);
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
function _objectWithoutPropertiesLoose6(source, excluded) {
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
var Edit2 = (0, import_react6.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties6(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react6.default.createElement("svg", _extends6({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react6.default.createElement("path", {
    d: "M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
  }));
});
Edit2.propTypes = {
  color: import_prop_types6.default.string,
  size: import_prop_types6.default.oneOfType([import_prop_types6.default.string, import_prop_types6.default.number])
};
Edit2.displayName = "Edit2";
var edit_2_default = Edit2;

// node_modules/react-feather/dist/icons/edit-3.js
var import_react7 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
function _extends7() {
  _extends7 = Object.assign || function(target) {
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
  return _extends7.apply(this, arguments);
}
function _objectWithoutProperties7(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose7(source, excluded);
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
function _objectWithoutPropertiesLoose7(source, excluded) {
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
var Edit3 = (0, import_react7.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties7(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react7.default.createElement("svg", _extends7({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react7.default.createElement("path", {
    d: "M12 20h9"
  }), /* @__PURE__ */ import_react7.default.createElement("path", {
    d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
  }));
});
Edit3.propTypes = {
  color: import_prop_types7.default.string,
  size: import_prop_types7.default.oneOfType([import_prop_types7.default.string, import_prop_types7.default.number])
};
Edit3.displayName = "Edit3";
var edit_3_default = Edit3;

// node_modules/react-feather/dist/icons/edit.js
var import_react8 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());
function _extends8() {
  _extends8 = Object.assign || function(target) {
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
  return _extends8.apply(this, arguments);
}
function _objectWithoutProperties8(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose8(source, excluded);
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
function _objectWithoutPropertiesLoose8(source, excluded) {
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
var Edit = (0, import_react8.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties8(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react8.default.createElement("svg", _extends8({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react8.default.createElement("path", {
    d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
  }), /* @__PURE__ */ import_react8.default.createElement("path", {
    d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
  }));
});
Edit.propTypes = {
  color: import_prop_types8.default.string,
  size: import_prop_types8.default.oneOfType([import_prop_types8.default.string, import_prop_types8.default.number])
};
Edit.displayName = "Edit";
var edit_default = Edit;

// node_modules/react-feather/dist/icons/external-link.js
var import_react9 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());
function _extends9() {
  _extends9 = Object.assign || function(target) {
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
  return _extends9.apply(this, arguments);
}
function _objectWithoutProperties9(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose9(source, excluded);
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
function _objectWithoutPropertiesLoose9(source, excluded) {
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
var ExternalLink = (0, import_react9.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties9(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react9.default.createElement("svg", _extends9({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react9.default.createElement("path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
  }), /* @__PURE__ */ import_react9.default.createElement("polyline", {
    points: "15 3 21 3 21 9"
  }), /* @__PURE__ */ import_react9.default.createElement("line", {
    x1: "10",
    y1: "14",
    x2: "21",
    y2: "3"
  }));
});
ExternalLink.propTypes = {
  color: import_prop_types9.default.string,
  size: import_prop_types9.default.oneOfType([import_prop_types9.default.string, import_prop_types9.default.number])
};
ExternalLink.displayName = "ExternalLink";
var external_link_default = ExternalLink;

// node_modules/react-feather/dist/icons/eye-off.js
var import_react10 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());
function _extends10() {
  _extends10 = Object.assign || function(target) {
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
  return _extends10.apply(this, arguments);
}
function _objectWithoutProperties10(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose10(source, excluded);
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
function _objectWithoutPropertiesLoose10(source, excluded) {
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
var EyeOff = (0, import_react10.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties10(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react10.default.createElement("svg", _extends10({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react10.default.createElement("path", {
    d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
  }), /* @__PURE__ */ import_react10.default.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }));
});
EyeOff.propTypes = {
  color: import_prop_types10.default.string,
  size: import_prop_types10.default.oneOfType([import_prop_types10.default.string, import_prop_types10.default.number])
};
EyeOff.displayName = "EyeOff";
var eye_off_default = EyeOff;

// node_modules/react-feather/dist/icons/eye.js
var import_react11 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());
function _extends11() {
  _extends11 = Object.assign || function(target) {
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
  return _extends11.apply(this, arguments);
}
function _objectWithoutProperties11(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose11(source, excluded);
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
function _objectWithoutPropertiesLoose11(source, excluded) {
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
var Eye = (0, import_react11.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties11(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react11.default.createElement("svg", _extends11({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react11.default.createElement("path", {
    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
  }), /* @__PURE__ */ import_react11.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }));
});
Eye.propTypes = {
  color: import_prop_types11.default.string,
  size: import_prop_types11.default.oneOfType([import_prop_types11.default.string, import_prop_types11.default.number])
};
Eye.displayName = "Eye";
var eye_default = Eye;

// node_modules/react-feather/dist/icons/info.js
var import_react12 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());
function _extends12() {
  _extends12 = Object.assign || function(target) {
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
  return _extends12.apply(this, arguments);
}
function _objectWithoutProperties12(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose12(source, excluded);
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
function _objectWithoutPropertiesLoose12(source, excluded) {
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
var Info = (0, import_react12.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties12(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react12.default.createElement("svg", _extends12({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react12.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ import_react12.default.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "12"
  }), /* @__PURE__ */ import_react12.default.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12.01",
    y2: "8"
  }));
});
Info.propTypes = {
  color: import_prop_types12.default.string,
  size: import_prop_types12.default.oneOfType([import_prop_types12.default.string, import_prop_types12.default.number])
};
Info.displayName = "Info";
var info_default = Info;

// node_modules/react-feather/dist/icons/link-2.js
var import_react13 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());
function _extends13() {
  _extends13 = Object.assign || function(target) {
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
  return _extends13.apply(this, arguments);
}
function _objectWithoutProperties13(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose13(source, excluded);
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
function _objectWithoutPropertiesLoose13(source, excluded) {
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
var Link2 = (0, import_react13.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties13(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react13.default.createElement("svg", _extends13({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react13.default.createElement("path", {
    d: "M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
  }), /* @__PURE__ */ import_react13.default.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
});
Link2.propTypes = {
  color: import_prop_types13.default.string,
  size: import_prop_types13.default.oneOfType([import_prop_types13.default.string, import_prop_types13.default.number])
};
Link2.displayName = "Link2";
var link_2_default = Link2;

// node_modules/react-feather/dist/icons/message-circle.js
var import_react14 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());
function _extends14() {
  _extends14 = Object.assign || function(target) {
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
  return _extends14.apply(this, arguments);
}
function _objectWithoutProperties14(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose14(source, excluded);
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
function _objectWithoutPropertiesLoose14(source, excluded) {
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
var MessageCircle = (0, import_react14.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties14(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react14.default.createElement("svg", _extends14({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react14.default.createElement("path", {
    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
  }));
});
MessageCircle.propTypes = {
  color: import_prop_types14.default.string,
  size: import_prop_types14.default.oneOfType([import_prop_types14.default.string, import_prop_types14.default.number])
};
MessageCircle.displayName = "MessageCircle";
var message_circle_default = MessageCircle;

// node_modules/react-feather/dist/icons/minimize.js
var import_react15 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());
function _extends15() {
  _extends15 = Object.assign || function(target) {
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
  return _extends15.apply(this, arguments);
}
function _objectWithoutProperties15(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose15(source, excluded);
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
function _objectWithoutPropertiesLoose15(source, excluded) {
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
var Minimize = (0, import_react15.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties15(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react15.default.createElement("svg", _extends15({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react15.default.createElement("path", {
    d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
  }));
});
Minimize.propTypes = {
  color: import_prop_types15.default.string,
  size: import_prop_types15.default.oneOfType([import_prop_types15.default.string, import_prop_types15.default.number])
};
Minimize.displayName = "Minimize";
var minimize_default = Minimize;

// node_modules/react-feather/dist/icons/more-horizontal.js
var import_react16 = __toESM(require_react());
var import_prop_types16 = __toESM(require_prop_types());
function _extends16() {
  _extends16 = Object.assign || function(target) {
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
  return _extends16.apply(this, arguments);
}
function _objectWithoutProperties16(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose16(source, excluded);
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
function _objectWithoutPropertiesLoose16(source, excluded) {
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
var MoreHorizontal = (0, import_react16.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties16(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react16.default.createElement("svg", _extends16({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react16.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), /* @__PURE__ */ import_react16.default.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1"
  }), /* @__PURE__ */ import_react16.default.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1"
  }));
});
MoreHorizontal.propTypes = {
  color: import_prop_types16.default.string,
  size: import_prop_types16.default.oneOfType([import_prop_types16.default.string, import_prop_types16.default.number])
};
MoreHorizontal.displayName = "MoreHorizontal";
var more_horizontal_default = MoreHorizontal;

// node_modules/react-feather/dist/icons/plus.js
var import_react17 = __toESM(require_react());
var import_prop_types17 = __toESM(require_prop_types());
function _extends17() {
  _extends17 = Object.assign || function(target) {
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
  return _extends17.apply(this, arguments);
}
function _objectWithoutProperties17(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose17(source, excluded);
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
function _objectWithoutPropertiesLoose17(source, excluded) {
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
var Plus = (0, import_react17.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties17(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react17.default.createElement("svg", _extends17({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react17.default.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /* @__PURE__ */ import_react17.default.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }));
});
Plus.propTypes = {
  color: import_prop_types17.default.string,
  size: import_prop_types17.default.oneOfType([import_prop_types17.default.string, import_prop_types17.default.number])
};
Plus.displayName = "Plus";
var plus_default = Plus;

// node_modules/react-feather/dist/icons/settings.js
var import_react18 = __toESM(require_react());
var import_prop_types18 = __toESM(require_prop_types());
function _extends18() {
  _extends18 = Object.assign || function(target) {
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
  return _extends18.apply(this, arguments);
}
function _objectWithoutProperties18(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose18(source, excluded);
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
function _objectWithoutPropertiesLoose18(source, excluded) {
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
var Settings = (0, import_react18.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties18(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react18.default.createElement("svg", _extends18({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react18.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /* @__PURE__ */ import_react18.default.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
  }));
});
Settings.propTypes = {
  color: import_prop_types18.default.string,
  size: import_prop_types18.default.oneOfType([import_prop_types18.default.string, import_prop_types18.default.number])
};
Settings.displayName = "Settings";
var settings_default = Settings;

// node_modules/react-feather/dist/icons/skip-forward.js
var import_react19 = __toESM(require_react());
var import_prop_types19 = __toESM(require_prop_types());
function _extends19() {
  _extends19 = Object.assign || function(target) {
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
  return _extends19.apply(this, arguments);
}
function _objectWithoutProperties19(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose19(source, excluded);
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
function _objectWithoutPropertiesLoose19(source, excluded) {
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
var SkipForward = (0, import_react19.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties19(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react19.default.createElement("svg", _extends19({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react19.default.createElement("polygon", {
    points: "5 4 15 12 5 20 5 4"
  }), /* @__PURE__ */ import_react19.default.createElement("line", {
    x1: "19",
    y1: "5",
    x2: "19",
    y2: "19"
  }));
});
SkipForward.propTypes = {
  color: import_prop_types19.default.string,
  size: import_prop_types19.default.oneOfType([import_prop_types19.default.string, import_prop_types19.default.number])
};
SkipForward.displayName = "SkipForward";
var skip_forward_default = SkipForward;

// node_modules/react-feather/dist/icons/star.js
var import_react20 = __toESM(require_react());
var import_prop_types20 = __toESM(require_prop_types());
function _extends20() {
  _extends20 = Object.assign || function(target) {
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
  return _extends20.apply(this, arguments);
}
function _objectWithoutProperties20(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose20(source, excluded);
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
function _objectWithoutPropertiesLoose20(source, excluded) {
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
var Star = (0, import_react20.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties20(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react20.default.createElement("svg", _extends20({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react20.default.createElement("polygon", {
    points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  }));
});
Star.propTypes = {
  color: import_prop_types20.default.string,
  size: import_prop_types20.default.oneOfType([import_prop_types20.default.string, import_prop_types20.default.number])
};
Star.displayName = "Star";
var star_default = Star;

// node_modules/react-feather/dist/icons/trash-2.js
var import_react21 = __toESM(require_react());
var import_prop_types21 = __toESM(require_prop_types());
function _extends21() {
  _extends21 = Object.assign || function(target) {
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
  return _extends21.apply(this, arguments);
}
function _objectWithoutProperties21(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose21(source, excluded);
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
function _objectWithoutPropertiesLoose21(source, excluded) {
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
var Trash2 = (0, import_react21.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties21(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react21.default.createElement("svg", _extends21({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react21.default.createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), /* @__PURE__ */ import_react21.default.createElement("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }), /* @__PURE__ */ import_react21.default.createElement("line", {
    x1: "10",
    y1: "11",
    x2: "10",
    y2: "17"
  }), /* @__PURE__ */ import_react21.default.createElement("line", {
    x1: "14",
    y1: "11",
    x2: "14",
    y2: "17"
  }));
});
Trash2.propTypes = {
  color: import_prop_types21.default.string,
  size: import_prop_types21.default.oneOfType([import_prop_types21.default.string, import_prop_types21.default.number])
};
Trash2.displayName = "Trash2";
var trash_2_default = Trash2;

// node_modules/react-feather/dist/icons/user-plus.js
var import_react22 = __toESM(require_react());
var import_prop_types22 = __toESM(require_prop_types());
function _extends22() {
  _extends22 = Object.assign || function(target) {
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
  return _extends22.apply(this, arguments);
}
function _objectWithoutProperties22(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose22(source, excluded);
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
function _objectWithoutPropertiesLoose22(source, excluded) {
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
var UserPlus = (0, import_react22.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties22(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react22.default.createElement("svg", _extends22({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react22.default.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /* @__PURE__ */ import_react22.default.createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), /* @__PURE__ */ import_react22.default.createElement("line", {
    x1: "20",
    y1: "8",
    x2: "20",
    y2: "14"
  }), /* @__PURE__ */ import_react22.default.createElement("line", {
    x1: "23",
    y1: "11",
    x2: "17",
    y2: "11"
  }));
});
UserPlus.propTypes = {
  color: import_prop_types22.default.string,
  size: import_prop_types22.default.oneOfType([import_prop_types22.default.string, import_prop_types22.default.number])
};
UserPlus.displayName = "UserPlus";
var user_plus_default = UserPlus;

// node_modules/react-feather/dist/icons/zap.js
var import_react23 = __toESM(require_react());
var import_prop_types23 = __toESM(require_prop_types());
function _extends23() {
  _extends23 = Object.assign || function(target) {
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
  return _extends23.apply(this, arguments);
}
function _objectWithoutProperties23(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose23(source, excluded);
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
function _objectWithoutPropertiesLoose23(source, excluded) {
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
var Zap = (0, import_react23.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties23(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react23.default.createElement("svg", _extends23({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react23.default.createElement("polygon", {
    points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
  }));
});
Zap.propTypes = {
  color: import_prop_types23.default.string,
  size: import_prop_types23.default.oneOfType([import_prop_types23.default.string, import_prop_types23.default.number])
};
Zap.displayName = "Zap";
var zap_default = Zap;

// node_modules/react-feather/dist/icons/activity.js
var import_react24 = __toESM(require_react());
var import_prop_types24 = __toESM(require_prop_types());
function _extends24() {
  _extends24 = Object.assign || function(target) {
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
  return _extends24.apply(this, arguments);
}
function _objectWithoutProperties24(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose24(source, excluded);
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
function _objectWithoutPropertiesLoose24(source, excluded) {
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
var Activity = (0, import_react24.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties24(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react24.default.createElement("svg", _extends24({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react24.default.createElement("polyline", {
    points: "22 12 18 12 15 21 9 3 6 12 2 12"
  }));
});
Activity.propTypes = {
  color: import_prop_types24.default.string,
  size: import_prop_types24.default.oneOfType([import_prop_types24.default.string, import_prop_types24.default.number])
};
Activity.displayName = "Activity";
var activity_default = Activity;

// node_modules/react-feather/dist/icons/alert-triangle.js
var import_react25 = __toESM(require_react());
var import_prop_types25 = __toESM(require_prop_types());
function _extends25() {
  _extends25 = Object.assign || function(target) {
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
  return _extends25.apply(this, arguments);
}
function _objectWithoutProperties25(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose25(source, excluded);
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
function _objectWithoutPropertiesLoose25(source, excluded) {
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
var AlertTriangle = (0, import_react25.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties25(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react25.default.createElement("svg", _extends25({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react25.default.createElement("path", {
    d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }), /* @__PURE__ */ import_react25.default.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /* @__PURE__ */ import_react25.default.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  }));
});
AlertTriangle.propTypes = {
  color: import_prop_types25.default.string,
  size: import_prop_types25.default.oneOfType([import_prop_types25.default.string, import_prop_types25.default.number])
};
AlertTriangle.displayName = "AlertTriangle";
var alert_triangle_default = AlertTriangle;

// node_modules/react-feather/dist/icons/align-center.js
var import_react26 = __toESM(require_react());
var import_prop_types26 = __toESM(require_prop_types());
function _extends26() {
  _extends26 = Object.assign || function(target) {
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
  return _extends26.apply(this, arguments);
}
function _objectWithoutProperties26(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose26(source, excluded);
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
function _objectWithoutPropertiesLoose26(source, excluded) {
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
var AlignCenter = (0, import_react26.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties26(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react26.default.createElement("svg", _extends26({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react26.default.createElement("line", {
    x1: "18",
    y1: "10",
    x2: "6",
    y2: "10"
  }), /* @__PURE__ */ import_react26.default.createElement("line", {
    x1: "21",
    y1: "6",
    x2: "3",
    y2: "6"
  }), /* @__PURE__ */ import_react26.default.createElement("line", {
    x1: "21",
    y1: "14",
    x2: "3",
    y2: "14"
  }), /* @__PURE__ */ import_react26.default.createElement("line", {
    x1: "18",
    y1: "18",
    x2: "6",
    y2: "18"
  }));
});
AlignCenter.propTypes = {
  color: import_prop_types26.default.string,
  size: import_prop_types26.default.oneOfType([import_prop_types26.default.string, import_prop_types26.default.number])
};
AlignCenter.displayName = "AlignCenter";
var align_center_default = AlignCenter;

// node_modules/react-feather/dist/icons/align-left.js
var import_react27 = __toESM(require_react());
var import_prop_types27 = __toESM(require_prop_types());
function _extends27() {
  _extends27 = Object.assign || function(target) {
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
  return _extends27.apply(this, arguments);
}
function _objectWithoutProperties27(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose27(source, excluded);
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
function _objectWithoutPropertiesLoose27(source, excluded) {
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
var AlignLeft = (0, import_react27.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties27(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react27.default.createElement("svg", _extends27({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react27.default.createElement("line", {
    x1: "17",
    y1: "10",
    x2: "3",
    y2: "10"
  }), /* @__PURE__ */ import_react27.default.createElement("line", {
    x1: "21",
    y1: "6",
    x2: "3",
    y2: "6"
  }), /* @__PURE__ */ import_react27.default.createElement("line", {
    x1: "21",
    y1: "14",
    x2: "3",
    y2: "14"
  }), /* @__PURE__ */ import_react27.default.createElement("line", {
    x1: "17",
    y1: "18",
    x2: "3",
    y2: "18"
  }));
});
AlignLeft.propTypes = {
  color: import_prop_types27.default.string,
  size: import_prop_types27.default.oneOfType([import_prop_types27.default.string, import_prop_types27.default.number])
};
AlignLeft.displayName = "AlignLeft";
var align_left_default = AlignLeft;

// node_modules/react-feather/dist/icons/archive.js
var import_react28 = __toESM(require_react());
var import_prop_types28 = __toESM(require_prop_types());
function _extends28() {
  _extends28 = Object.assign || function(target) {
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
  return _extends28.apply(this, arguments);
}
function _objectWithoutProperties28(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose28(source, excluded);
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
function _objectWithoutPropertiesLoose28(source, excluded) {
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
var Archive = (0, import_react28.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties28(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react28.default.createElement("svg", _extends28({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react28.default.createElement("polyline", {
    points: "21 8 21 21 3 21 3 8"
  }), /* @__PURE__ */ import_react28.default.createElement("rect", {
    x: "1",
    y: "3",
    width: "22",
    height: "5"
  }), /* @__PURE__ */ import_react28.default.createElement("line", {
    x1: "10",
    y1: "12",
    x2: "14",
    y2: "12"
  }));
});
Archive.propTypes = {
  color: import_prop_types28.default.string,
  size: import_prop_types28.default.oneOfType([import_prop_types28.default.string, import_prop_types28.default.number])
};
Archive.displayName = "Archive";
var archive_default = Archive;

// node_modules/react-feather/dist/icons/arrow-down.js
var import_react29 = __toESM(require_react());
var import_prop_types29 = __toESM(require_prop_types());
function _extends29() {
  _extends29 = Object.assign || function(target) {
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
  return _extends29.apply(this, arguments);
}
function _objectWithoutProperties29(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose29(source, excluded);
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
function _objectWithoutPropertiesLoose29(source, excluded) {
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
var ArrowDown = (0, import_react29.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties29(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react29.default.createElement("svg", _extends29({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react29.default.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /* @__PURE__ */ import_react29.default.createElement("polyline", {
    points: "19 12 12 19 5 12"
  }));
});
ArrowDown.propTypes = {
  color: import_prop_types29.default.string,
  size: import_prop_types29.default.oneOfType([import_prop_types29.default.string, import_prop_types29.default.number])
};
ArrowDown.displayName = "ArrowDown";
var arrow_down_default = ArrowDown;

// node_modules/react-feather/dist/icons/arrow-right.js
var import_react30 = __toESM(require_react());
var import_prop_types30 = __toESM(require_prop_types());
function _extends30() {
  _extends30 = Object.assign || function(target) {
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
  return _extends30.apply(this, arguments);
}
function _objectWithoutProperties30(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose30(source, excluded);
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
function _objectWithoutPropertiesLoose30(source, excluded) {
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
var ArrowRight = (0, import_react30.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties30(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react30.default.createElement("svg", _extends30({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react30.default.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /* @__PURE__ */ import_react30.default.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }));
});
ArrowRight.propTypes = {
  color: import_prop_types30.default.string,
  size: import_prop_types30.default.oneOfType([import_prop_types30.default.string, import_prop_types30.default.number])
};
ArrowRight.displayName = "ArrowRight";
var arrow_right_default = ArrowRight;

// node_modules/react-feather/dist/icons/arrow-up.js
var import_react31 = __toESM(require_react());
var import_prop_types31 = __toESM(require_prop_types());
function _extends31() {
  _extends31 = Object.assign || function(target) {
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
  return _extends31.apply(this, arguments);
}
function _objectWithoutProperties31(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose31(source, excluded);
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
function _objectWithoutPropertiesLoose31(source, excluded) {
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
var ArrowUp = (0, import_react31.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties31(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react31.default.createElement("svg", _extends31({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react31.default.createElement("line", {
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "5"
  }), /* @__PURE__ */ import_react31.default.createElement("polyline", {
    points: "5 12 12 5 19 12"
  }));
});
ArrowUp.propTypes = {
  color: import_prop_types31.default.string,
  size: import_prop_types31.default.oneOfType([import_prop_types31.default.string, import_prop_types31.default.number])
};
ArrowUp.displayName = "ArrowUp";
var arrow_up_default = ArrowUp;

// node_modules/react-feather/dist/icons/bell.js
var import_react32 = __toESM(require_react());
var import_prop_types32 = __toESM(require_prop_types());
function _extends32() {
  _extends32 = Object.assign || function(target) {
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
  return _extends32.apply(this, arguments);
}
function _objectWithoutProperties32(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose32(source, excluded);
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
function _objectWithoutPropertiesLoose32(source, excluded) {
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
var Bell = (0, import_react32.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties32(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react32.default.createElement("svg", _extends32({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react32.default.createElement("path", {
    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
  }), /* @__PURE__ */ import_react32.default.createElement("path", {
    d: "M13.73 21a2 2 0 0 1-3.46 0"
  }));
});
Bell.propTypes = {
  color: import_prop_types32.default.string,
  size: import_prop_types32.default.oneOfType([import_prop_types32.default.string, import_prop_types32.default.number])
};
Bell.displayName = "Bell";
var bell_default = Bell;

// node_modules/react-feather/dist/icons/book.js
var import_react33 = __toESM(require_react());
var import_prop_types33 = __toESM(require_prop_types());
function _extends33() {
  _extends33 = Object.assign || function(target) {
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
  return _extends33.apply(this, arguments);
}
function _objectWithoutProperties33(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose33(source, excluded);
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
function _objectWithoutPropertiesLoose33(source, excluded) {
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
var Book = (0, import_react33.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties33(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react33.default.createElement("svg", _extends33({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react33.default.createElement("path", {
    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
  }), /* @__PURE__ */ import_react33.default.createElement("path", {
    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
  }));
});
Book.propTypes = {
  color: import_prop_types33.default.string,
  size: import_prop_types33.default.oneOfType([import_prop_types33.default.string, import_prop_types33.default.number])
};
Book.displayName = "Book";
var book_default = Book;

// node_modules/react-feather/dist/icons/bookmark.js
var import_react34 = __toESM(require_react());
var import_prop_types34 = __toESM(require_prop_types());
function _extends34() {
  _extends34 = Object.assign || function(target) {
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
  return _extends34.apply(this, arguments);
}
function _objectWithoutProperties34(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose34(source, excluded);
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
function _objectWithoutPropertiesLoose34(source, excluded) {
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
var Bookmark = (0, import_react34.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties34(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react34.default.createElement("svg", _extends34({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react34.default.createElement("path", {
    d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
  }));
});
Bookmark.propTypes = {
  color: import_prop_types34.default.string,
  size: import_prop_types34.default.oneOfType([import_prop_types34.default.string, import_prop_types34.default.number])
};
Bookmark.displayName = "Bookmark";
var bookmark_default = Bookmark;

// node_modules/react-feather/dist/icons/box.js
var import_react35 = __toESM(require_react());
var import_prop_types35 = __toESM(require_prop_types());
function _extends35() {
  _extends35 = Object.assign || function(target) {
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
  return _extends35.apply(this, arguments);
}
function _objectWithoutProperties35(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose35(source, excluded);
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
function _objectWithoutPropertiesLoose35(source, excluded) {
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
var Box = (0, import_react35.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties35(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react35.default.createElement("svg", _extends35({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react35.default.createElement("path", {
    d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
  }), /* @__PURE__ */ import_react35.default.createElement("polyline", {
    points: "3.27 6.96 12 12.01 20.73 6.96"
  }), /* @__PURE__ */ import_react35.default.createElement("line", {
    x1: "12",
    y1: "22.08",
    x2: "12",
    y2: "12"
  }));
});
Box.propTypes = {
  color: import_prop_types35.default.string,
  size: import_prop_types35.default.oneOfType([import_prop_types35.default.string, import_prop_types35.default.number])
};
Box.displayName = "Box";
var box_default = Box;

// node_modules/react-feather/dist/icons/briefcase.js
var import_react36 = __toESM(require_react());
var import_prop_types36 = __toESM(require_prop_types());
function _extends36() {
  _extends36 = Object.assign || function(target) {
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
  return _extends36.apply(this, arguments);
}
function _objectWithoutProperties36(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose36(source, excluded);
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
function _objectWithoutPropertiesLoose36(source, excluded) {
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
var Briefcase = (0, import_react36.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties36(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react36.default.createElement("svg", _extends36({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react36.default.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "14",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ import_react36.default.createElement("path", {
    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
  }));
});
Briefcase.propTypes = {
  color: import_prop_types36.default.string,
  size: import_prop_types36.default.oneOfType([import_prop_types36.default.string, import_prop_types36.default.number])
};
Briefcase.displayName = "Briefcase";
var briefcase_default = Briefcase;

// node_modules/react-feather/dist/icons/check-square.js
var import_react37 = __toESM(require_react());
var import_prop_types37 = __toESM(require_prop_types());
function _extends37() {
  _extends37 = Object.assign || function(target) {
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
  return _extends37.apply(this, arguments);
}
function _objectWithoutProperties37(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose37(source, excluded);
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
function _objectWithoutPropertiesLoose37(source, excluded) {
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
var CheckSquare = (0, import_react37.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties37(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react37.default.createElement("svg", _extends37({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react37.default.createElement("polyline", {
    points: "9 11 12 14 22 4"
  }), /* @__PURE__ */ import_react37.default.createElement("path", {
    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  }));
});
CheckSquare.propTypes = {
  color: import_prop_types37.default.string,
  size: import_prop_types37.default.oneOfType([import_prop_types37.default.string, import_prop_types37.default.number])
};
CheckSquare.displayName = "CheckSquare";
var check_square_default = CheckSquare;

// node_modules/react-feather/dist/icons/check.js
var import_react38 = __toESM(require_react());
var import_prop_types38 = __toESM(require_prop_types());
function _extends38() {
  _extends38 = Object.assign || function(target) {
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
  return _extends38.apply(this, arguments);
}
function _objectWithoutProperties38(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose38(source, excluded);
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
function _objectWithoutPropertiesLoose38(source, excluded) {
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
var Check = (0, import_react38.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties38(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react38.default.createElement("svg", _extends38({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react38.default.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }));
});
Check.propTypes = {
  color: import_prop_types38.default.string,
  size: import_prop_types38.default.oneOfType([import_prop_types38.default.string, import_prop_types38.default.number])
};
Check.displayName = "Check";
var check_default = Check;

// node_modules/react-feather/dist/icons/chevron-left.js
var import_react39 = __toESM(require_react());
var import_prop_types39 = __toESM(require_prop_types());
function _extends39() {
  _extends39 = Object.assign || function(target) {
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
  return _extends39.apply(this, arguments);
}
function _objectWithoutProperties39(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose39(source, excluded);
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
function _objectWithoutPropertiesLoose39(source, excluded) {
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
var ChevronLeft = (0, import_react39.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties39(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react39.default.createElement("svg", _extends39({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react39.default.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }));
});
ChevronLeft.propTypes = {
  color: import_prop_types39.default.string,
  size: import_prop_types39.default.oneOfType([import_prop_types39.default.string, import_prop_types39.default.number])
};
ChevronLeft.displayName = "ChevronLeft";
var chevron_left_default = ChevronLeft;

// node_modules/react-feather/dist/icons/chevron-right.js
var import_react40 = __toESM(require_react());
var import_prop_types40 = __toESM(require_prop_types());
function _extends40() {
  _extends40 = Object.assign || function(target) {
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
  return _extends40.apply(this, arguments);
}
function _objectWithoutProperties40(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose40(source, excluded);
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
function _objectWithoutPropertiesLoose40(source, excluded) {
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
var ChevronRight = (0, import_react40.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties40(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react40.default.createElement("svg", _extends40({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react40.default.createElement("polyline", {
    points: "9 18 15 12 9 6"
  }));
});
ChevronRight.propTypes = {
  color: import_prop_types40.default.string,
  size: import_prop_types40.default.oneOfType([import_prop_types40.default.string, import_prop_types40.default.number])
};
ChevronRight.displayName = "ChevronRight";
var chevron_right_default = ChevronRight;

// node_modules/react-feather/dist/icons/clock.js
var import_react41 = __toESM(require_react());
var import_prop_types41 = __toESM(require_prop_types());
function _extends41() {
  _extends41 = Object.assign || function(target) {
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
  return _extends41.apply(this, arguments);
}
function _objectWithoutProperties41(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose41(source, excluded);
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
function _objectWithoutPropertiesLoose41(source, excluded) {
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
var Clock = (0, import_react41.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties41(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react41.default.createElement("svg", _extends41({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react41.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ import_react41.default.createElement("polyline", {
    points: "12 6 12 12 16 14"
  }));
});
Clock.propTypes = {
  color: import_prop_types41.default.string,
  size: import_prop_types41.default.oneOfType([import_prop_types41.default.string, import_prop_types41.default.number])
};
Clock.displayName = "Clock";
var clock_default = Clock;

// node_modules/react-feather/dist/icons/code.js
var import_react42 = __toESM(require_react());
var import_prop_types42 = __toESM(require_prop_types());
function _extends42() {
  _extends42 = Object.assign || function(target) {
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
  return _extends42.apply(this, arguments);
}
function _objectWithoutProperties42(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose42(source, excluded);
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
function _objectWithoutPropertiesLoose42(source, excluded) {
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
var Code = (0, import_react42.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties42(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react42.default.createElement("svg", _extends42({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react42.default.createElement("polyline", {
    points: "16 18 22 12 16 6"
  }), /* @__PURE__ */ import_react42.default.createElement("polyline", {
    points: "8 6 2 12 8 18"
  }));
});
Code.propTypes = {
  color: import_prop_types42.default.string,
  size: import_prop_types42.default.oneOfType([import_prop_types42.default.string, import_prop_types42.default.number])
};
Code.displayName = "Code";
var code_default = Code;

// node_modules/react-feather/dist/icons/columns.js
var import_react43 = __toESM(require_react());
var import_prop_types43 = __toESM(require_prop_types());
function _extends43() {
  _extends43 = Object.assign || function(target) {
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
  return _extends43.apply(this, arguments);
}
function _objectWithoutProperties43(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose43(source, excluded);
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
function _objectWithoutPropertiesLoose43(source, excluded) {
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
var Columns = (0, import_react43.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties43(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react43.default.createElement("svg", _extends43({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react43.default.createElement("path", {
    d: "M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"
  }));
});
Columns.propTypes = {
  color: import_prop_types43.default.string,
  size: import_prop_types43.default.oneOfType([import_prop_types43.default.string, import_prop_types43.default.number])
};
Columns.displayName = "Columns";
var columns_default = Columns;

// node_modules/react-feather/dist/icons/corner-up-left.js
var import_react44 = __toESM(require_react());
var import_prop_types44 = __toESM(require_prop_types());
function _extends44() {
  _extends44 = Object.assign || function(target) {
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
  return _extends44.apply(this, arguments);
}
function _objectWithoutProperties44(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose44(source, excluded);
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
function _objectWithoutPropertiesLoose44(source, excluded) {
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
var CornerUpLeft = (0, import_react44.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties44(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react44.default.createElement("svg", _extends44({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react44.default.createElement("polyline", {
    points: "9 14 4 9 9 4"
  }), /* @__PURE__ */ import_react44.default.createElement("path", {
    d: "M20 20v-7a4 4 0 0 0-4-4H4"
  }));
});
CornerUpLeft.propTypes = {
  color: import_prop_types44.default.string,
  size: import_prop_types44.default.oneOfType([import_prop_types44.default.string, import_prop_types44.default.number])
};
CornerUpLeft.displayName = "CornerUpLeft";
var corner_up_left_default = CornerUpLeft;

// node_modules/react-feather/dist/icons/corner-up-right.js
var import_react45 = __toESM(require_react());
var import_prop_types45 = __toESM(require_prop_types());
function _extends45() {
  _extends45 = Object.assign || function(target) {
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
  return _extends45.apply(this, arguments);
}
function _objectWithoutProperties45(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose45(source, excluded);
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
function _objectWithoutPropertiesLoose45(source, excluded) {
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
var CornerUpRight = (0, import_react45.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties45(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react45.default.createElement("svg", _extends45({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react45.default.createElement("polyline", {
    points: "15 14 20 9 15 4"
  }), /* @__PURE__ */ import_react45.default.createElement("path", {
    d: "M4 20v-7a4 4 0 0 1 4-4h12"
  }));
});
CornerUpRight.propTypes = {
  color: import_prop_types45.default.string,
  size: import_prop_types45.default.oneOfType([import_prop_types45.default.string, import_prop_types45.default.number])
};
CornerUpRight.displayName = "CornerUpRight";
var corner_up_right_default = CornerUpRight;

// node_modules/react-feather/dist/icons/cpu.js
var import_react46 = __toESM(require_react());
var import_prop_types46 = __toESM(require_prop_types());
function _extends46() {
  _extends46 = Object.assign || function(target) {
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
  return _extends46.apply(this, arguments);
}
function _objectWithoutProperties46(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose46(source, excluded);
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
function _objectWithoutPropertiesLoose46(source, excluded) {
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
var Cpu = (0, import_react46.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties46(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react46.default.createElement("svg", _extends46({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react46.default.createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ import_react46.default.createElement("rect", {
    x: "9",
    y: "9",
    width: "6",
    height: "6"
  }), /* @__PURE__ */ import_react46.default.createElement("line", {
    x1: "9",
    y1: "1",
    x2: "9",
    y2: "4"
  }), /* @__PURE__ */ import_react46.default.createElement("line", {
    x1: "15",
    y1: "1",
    x2: "15",
    y2: "4"
  }), /* @__PURE__ */ import_react46.default.createElement("line", {
    x1: "9",
    y1: "20",
    x2: "9",
    y2: "23"
  }), /* @__PURE__ */ import_react46.default.createElement("line", {
    x1: "15",
    y1: "20",
    x2: "15",
    y2: "23"
  }), /* @__PURE__ */ import_react46.default.createElement("line", {
    x1: "20",
    y1: "9",
    x2: "23",
    y2: "9"
  }), /* @__PURE__ */ import_react46.default.createElement("line", {
    x1: "20",
    y1: "14",
    x2: "23",
    y2: "14"
  }), /* @__PURE__ */ import_react46.default.createElement("line", {
    x1: "1",
    y1: "9",
    x2: "4",
    y2: "9"
  }), /* @__PURE__ */ import_react46.default.createElement("line", {
    x1: "1",
    y1: "14",
    x2: "4",
    y2: "14"
  }));
});
Cpu.propTypes = {
  color: import_prop_types46.default.string,
  size: import_prop_types46.default.oneOfType([import_prop_types46.default.string, import_prop_types46.default.number])
};
Cpu.displayName = "Cpu";
var cpu_default = Cpu;

// node_modules/react-feather/dist/icons/credit-card.js
var import_react47 = __toESM(require_react());
var import_prop_types47 = __toESM(require_prop_types());
function _extends47() {
  _extends47 = Object.assign || function(target) {
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
  return _extends47.apply(this, arguments);
}
function _objectWithoutProperties47(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose47(source, excluded);
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
function _objectWithoutPropertiesLoose47(source, excluded) {
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
var CreditCard = (0, import_react47.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties47(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react47.default.createElement("svg", _extends47({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react47.default.createElement("rect", {
    x: "1",
    y: "4",
    width: "22",
    height: "16",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ import_react47.default.createElement("line", {
    x1: "1",
    y1: "10",
    x2: "23",
    y2: "10"
  }));
});
CreditCard.propTypes = {
  color: import_prop_types47.default.string,
  size: import_prop_types47.default.oneOfType([import_prop_types47.default.string, import_prop_types47.default.number])
};
CreditCard.displayName = "CreditCard";
var credit_card_default = CreditCard;

// node_modules/react-feather/dist/icons/droplet.js
var import_react48 = __toESM(require_react());
var import_prop_types48 = __toESM(require_prop_types());
function _extends48() {
  _extends48 = Object.assign || function(target) {
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
  return _extends48.apply(this, arguments);
}
function _objectWithoutProperties48(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose48(source, excluded);
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
function _objectWithoutPropertiesLoose48(source, excluded) {
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
var Droplet = (0, import_react48.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties48(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react48.default.createElement("svg", _extends48({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react48.default.createElement("path", {
    d: "M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"
  }));
});
Droplet.propTypes = {
  color: import_prop_types48.default.string,
  size: import_prop_types48.default.oneOfType([import_prop_types48.default.string, import_prop_types48.default.number])
};
Droplet.displayName = "Droplet";
var droplet_default = Droplet;

// node_modules/react-feather/dist/icons/file-plus.js
var import_react49 = __toESM(require_react());
var import_prop_types49 = __toESM(require_prop_types());
function _extends49() {
  _extends49 = Object.assign || function(target) {
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
  return _extends49.apply(this, arguments);
}
function _objectWithoutProperties49(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose49(source, excluded);
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
function _objectWithoutPropertiesLoose49(source, excluded) {
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
var FilePlus = (0, import_react49.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties49(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react49.default.createElement("svg", _extends49({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react49.default.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /* @__PURE__ */ import_react49.default.createElement("polyline", {
    points: "14 2 14 8 20 8"
  }), /* @__PURE__ */ import_react49.default.createElement("line", {
    x1: "12",
    y1: "18",
    x2: "12",
    y2: "12"
  }), /* @__PURE__ */ import_react49.default.createElement("line", {
    x1: "9",
    y1: "15",
    x2: "15",
    y2: "15"
  }));
});
FilePlus.propTypes = {
  color: import_prop_types49.default.string,
  size: import_prop_types49.default.oneOfType([import_prop_types49.default.string, import_prop_types49.default.number])
};
FilePlus.displayName = "FilePlus";
var file_plus_default = FilePlus;

// node_modules/react-feather/dist/icons/file-text.js
var import_react50 = __toESM(require_react());
var import_prop_types50 = __toESM(require_prop_types());
function _extends50() {
  _extends50 = Object.assign || function(target) {
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
  return _extends50.apply(this, arguments);
}
function _objectWithoutProperties50(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose50(source, excluded);
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
function _objectWithoutPropertiesLoose50(source, excluded) {
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
var FileText = (0, import_react50.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties50(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react50.default.createElement("svg", _extends50({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react50.default.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /* @__PURE__ */ import_react50.default.createElement("polyline", {
    points: "14 2 14 8 20 8"
  }), /* @__PURE__ */ import_react50.default.createElement("line", {
    x1: "16",
    y1: "13",
    x2: "8",
    y2: "13"
  }), /* @__PURE__ */ import_react50.default.createElement("line", {
    x1: "16",
    y1: "17",
    x2: "8",
    y2: "17"
  }), /* @__PURE__ */ import_react50.default.createElement("polyline", {
    points: "10 9 9 9 8 9"
  }));
});
FileText.propTypes = {
  color: import_prop_types50.default.string,
  size: import_prop_types50.default.oneOfType([import_prop_types50.default.string, import_prop_types50.default.number])
};
FileText.displayName = "FileText";
var file_text_default = FileText;

// node_modules/react-feather/dist/icons/file.js
var import_react51 = __toESM(require_react());
var import_prop_types51 = __toESM(require_prop_types());
function _extends51() {
  _extends51 = Object.assign || function(target) {
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
  return _extends51.apply(this, arguments);
}
function _objectWithoutProperties51(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose51(source, excluded);
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
function _objectWithoutPropertiesLoose51(source, excluded) {
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
var File = (0, import_react51.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties51(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react51.default.createElement("svg", _extends51({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react51.default.createElement("path", {
    d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
  }), /* @__PURE__ */ import_react51.default.createElement("polyline", {
    points: "13 2 13 9 20 9"
  }));
});
File.propTypes = {
  color: import_prop_types51.default.string,
  size: import_prop_types51.default.oneOfType([import_prop_types51.default.string, import_prop_types51.default.number])
};
File.displayName = "File";
var file_default = File;

// node_modules/react-feather/dist/icons/flag.js
var import_react52 = __toESM(require_react());
var import_prop_types52 = __toESM(require_prop_types());
function _extends52() {
  _extends52 = Object.assign || function(target) {
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
  return _extends52.apply(this, arguments);
}
function _objectWithoutProperties52(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose52(source, excluded);
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
function _objectWithoutPropertiesLoose52(source, excluded) {
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
var Flag = (0, import_react52.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties52(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react52.default.createElement("svg", _extends52({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react52.default.createElement("path", {
    d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
  }), /* @__PURE__ */ import_react52.default.createElement("line", {
    x1: "4",
    y1: "22",
    x2: "4",
    y2: "15"
  }));
});
Flag.propTypes = {
  color: import_prop_types52.default.string,
  size: import_prop_types52.default.oneOfType([import_prop_types52.default.string, import_prop_types52.default.number])
};
Flag.displayName = "Flag";
var flag_default = Flag;

// node_modules/react-feather/dist/icons/folder-plus.js
var import_react53 = __toESM(require_react());
var import_prop_types53 = __toESM(require_prop_types());
function _extends53() {
  _extends53 = Object.assign || function(target) {
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
  return _extends53.apply(this, arguments);
}
function _objectWithoutProperties53(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose53(source, excluded);
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
function _objectWithoutPropertiesLoose53(source, excluded) {
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
var FolderPlus = (0, import_react53.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties53(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react53.default.createElement("svg", _extends53({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react53.default.createElement("path", {
    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
  }), /* @__PURE__ */ import_react53.default.createElement("line", {
    x1: "12",
    y1: "11",
    x2: "12",
    y2: "17"
  }), /* @__PURE__ */ import_react53.default.createElement("line", {
    x1: "9",
    y1: "14",
    x2: "15",
    y2: "14"
  }));
});
FolderPlus.propTypes = {
  color: import_prop_types53.default.string,
  size: import_prop_types53.default.oneOfType([import_prop_types53.default.string, import_prop_types53.default.number])
};
FolderPlus.displayName = "FolderPlus";
var folder_plus_default = FolderPlus;

// node_modules/react-feather/dist/icons/folder.js
var import_react54 = __toESM(require_react());
var import_prop_types54 = __toESM(require_prop_types());
function _extends54() {
  _extends54 = Object.assign || function(target) {
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
  return _extends54.apply(this, arguments);
}
function _objectWithoutProperties54(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose54(source, excluded);
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
function _objectWithoutPropertiesLoose54(source, excluded) {
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
var Folder = (0, import_react54.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties54(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react54.default.createElement("svg", _extends54({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react54.default.createElement("path", {
    d: "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
  }));
});
Folder.propTypes = {
  color: import_prop_types54.default.string,
  size: import_prop_types54.default.oneOfType([import_prop_types54.default.string, import_prop_types54.default.number])
};
Folder.displayName = "Folder";
var folder_default = Folder;

// node_modules/react-feather/dist/icons/git-branch.js
var import_react55 = __toESM(require_react());
var import_prop_types55 = __toESM(require_prop_types());
function _extends55() {
  _extends55 = Object.assign || function(target) {
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
  return _extends55.apply(this, arguments);
}
function _objectWithoutProperties55(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose55(source, excluded);
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
function _objectWithoutPropertiesLoose55(source, excluded) {
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
var GitBranch = (0, import_react55.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties55(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react55.default.createElement("svg", _extends55({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react55.default.createElement("line", {
    x1: "6",
    y1: "3",
    x2: "6",
    y2: "15"
  }), /* @__PURE__ */ import_react55.default.createElement("circle", {
    cx: "18",
    cy: "6",
    r: "3"
  }), /* @__PURE__ */ import_react55.default.createElement("circle", {
    cx: "6",
    cy: "18",
    r: "3"
  }), /* @__PURE__ */ import_react55.default.createElement("path", {
    d: "M18 9a9 9 0 0 1-9 9"
  }));
});
GitBranch.propTypes = {
  color: import_prop_types55.default.string,
  size: import_prop_types55.default.oneOfType([import_prop_types55.default.string, import_prop_types55.default.number])
};
GitBranch.displayName = "GitBranch";
var git_branch_default = GitBranch;

// node_modules/react-feather/dist/icons/git-pull-request.js
var import_react56 = __toESM(require_react());
var import_prop_types56 = __toESM(require_prop_types());
function _extends56() {
  _extends56 = Object.assign || function(target) {
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
  return _extends56.apply(this, arguments);
}
function _objectWithoutProperties56(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose56(source, excluded);
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
function _objectWithoutPropertiesLoose56(source, excluded) {
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
var GitPullRequest = (0, import_react56.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties56(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react56.default.createElement("svg", _extends56({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react56.default.createElement("circle", {
    cx: "18",
    cy: "18",
    r: "3"
  }), /* @__PURE__ */ import_react56.default.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "3"
  }), /* @__PURE__ */ import_react56.default.createElement("path", {
    d: "M13 6h3a2 2 0 0 1 2 2v7"
  }), /* @__PURE__ */ import_react56.default.createElement("line", {
    x1: "6",
    y1: "9",
    x2: "6",
    y2: "21"
  }));
});
GitPullRequest.propTypes = {
  color: import_prop_types56.default.string,
  size: import_prop_types56.default.oneOfType([import_prop_types56.default.string, import_prop_types56.default.number])
};
GitPullRequest.displayName = "GitPullRequest";
var git_pull_request_default = GitPullRequest;

// node_modules/react-feather/dist/icons/github.js
var import_react57 = __toESM(require_react());
var import_prop_types57 = __toESM(require_prop_types());
function _extends57() {
  _extends57 = Object.assign || function(target) {
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
  return _extends57.apply(this, arguments);
}
function _objectWithoutProperties57(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose57(source, excluded);
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
function _objectWithoutPropertiesLoose57(source, excluded) {
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
var GitHub = (0, import_react57.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties57(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react57.default.createElement("svg", _extends57({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react57.default.createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  }));
});
GitHub.propTypes = {
  color: import_prop_types57.default.string,
  size: import_prop_types57.default.oneOfType([import_prop_types57.default.string, import_prop_types57.default.number])
};
GitHub.displayName = "GitHub";
var github_default = GitHub;

// node_modules/react-feather/dist/icons/globe.js
var import_react58 = __toESM(require_react());
var import_prop_types58 = __toESM(require_prop_types());
function _extends58() {
  _extends58 = Object.assign || function(target) {
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
  return _extends58.apply(this, arguments);
}
function _objectWithoutProperties58(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose58(source, excluded);
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
function _objectWithoutPropertiesLoose58(source, excluded) {
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
var Globe = (0, import_react58.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties58(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react58.default.createElement("svg", _extends58({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react58.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ import_react58.default.createElement("line", {
    x1: "2",
    y1: "12",
    x2: "22",
    y2: "12"
  }), /* @__PURE__ */ import_react58.default.createElement("path", {
    d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
  }));
});
Globe.propTypes = {
  color: import_prop_types58.default.string,
  size: import_prop_types58.default.oneOfType([import_prop_types58.default.string, import_prop_types58.default.number])
};
Globe.displayName = "Globe";
var globe_default = Globe;

// node_modules/react-feather/dist/icons/grid.js
var import_react59 = __toESM(require_react());
var import_prop_types59 = __toESM(require_prop_types());
function _extends59() {
  _extends59 = Object.assign || function(target) {
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
  return _extends59.apply(this, arguments);
}
function _objectWithoutProperties59(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose59(source, excluded);
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
function _objectWithoutPropertiesLoose59(source, excluded) {
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
var Grid = (0, import_react59.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties59(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react59.default.createElement("svg", _extends59({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react59.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7"
  }), /* @__PURE__ */ import_react59.default.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7"
  }), /* @__PURE__ */ import_react59.default.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7"
  }), /* @__PURE__ */ import_react59.default.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7"
  }));
});
Grid.propTypes = {
  color: import_prop_types59.default.string,
  size: import_prop_types59.default.oneOfType([import_prop_types59.default.string, import_prop_types59.default.number])
};
Grid.displayName = "Grid";
var grid_default = Grid;

// node_modules/react-feather/dist/icons/hard-drive.js
var import_react60 = __toESM(require_react());
var import_prop_types60 = __toESM(require_prop_types());
function _extends60() {
  _extends60 = Object.assign || function(target) {
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
  return _extends60.apply(this, arguments);
}
function _objectWithoutProperties60(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose60(source, excluded);
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
function _objectWithoutPropertiesLoose60(source, excluded) {
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
var HardDrive = (0, import_react60.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties60(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react60.default.createElement("svg", _extends60({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react60.default.createElement("line", {
    x1: "22",
    y1: "12",
    x2: "2",
    y2: "12"
  }), /* @__PURE__ */ import_react60.default.createElement("path", {
    d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
  }), /* @__PURE__ */ import_react60.default.createElement("line", {
    x1: "6",
    y1: "16",
    x2: "6.01",
    y2: "16"
  }), /* @__PURE__ */ import_react60.default.createElement("line", {
    x1: "10",
    y1: "16",
    x2: "10.01",
    y2: "16"
  }));
});
HardDrive.propTypes = {
  color: import_prop_types60.default.string,
  size: import_prop_types60.default.oneOfType([import_prop_types60.default.string, import_prop_types60.default.number])
};
HardDrive.displayName = "HardDrive";
var hard_drive_default = HardDrive;

// node_modules/react-feather/dist/icons/heart.js
var import_react61 = __toESM(require_react());
var import_prop_types61 = __toESM(require_prop_types());
function _extends61() {
  _extends61 = Object.assign || function(target) {
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
  return _extends61.apply(this, arguments);
}
function _objectWithoutProperties61(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose61(source, excluded);
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
function _objectWithoutPropertiesLoose61(source, excluded) {
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
var Heart = (0, import_react61.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties61(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react61.default.createElement("svg", _extends61({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react61.default.createElement("path", {
    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
  }));
});
Heart.propTypes = {
  color: import_prop_types61.default.string,
  size: import_prop_types61.default.oneOfType([import_prop_types61.default.string, import_prop_types61.default.number])
};
Heart.displayName = "Heart";
var heart_default = Heart;

// node_modules/react-feather/dist/icons/help-circle.js
var import_react62 = __toESM(require_react());
var import_prop_types62 = __toESM(require_prop_types());
function _extends62() {
  _extends62 = Object.assign || function(target) {
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
  return _extends62.apply(this, arguments);
}
function _objectWithoutProperties62(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose62(source, excluded);
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
function _objectWithoutPropertiesLoose62(source, excluded) {
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
var HelpCircle = (0, import_react62.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties62(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react62.default.createElement("svg", _extends62({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react62.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ import_react62.default.createElement("path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
  }), /* @__PURE__ */ import_react62.default.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  }));
});
HelpCircle.propTypes = {
  color: import_prop_types62.default.string,
  size: import_prop_types62.default.oneOfType([import_prop_types62.default.string, import_prop_types62.default.number])
};
HelpCircle.displayName = "HelpCircle";
var help_circle_default = HelpCircle;

// node_modules/react-feather/dist/icons/image.js
var import_react63 = __toESM(require_react());
var import_prop_types63 = __toESM(require_prop_types());
function _extends63() {
  _extends63 = Object.assign || function(target) {
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
  return _extends63.apply(this, arguments);
}
function _objectWithoutProperties63(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose63(source, excluded);
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
function _objectWithoutPropertiesLoose63(source, excluded) {
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
var Image = (0, import_react63.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties63(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react63.default.createElement("svg", _extends63({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react63.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ import_react63.default.createElement("circle", {
    cx: "8.5",
    cy: "8.5",
    r: "1.5"
  }), /* @__PURE__ */ import_react63.default.createElement("polyline", {
    points: "21 15 16 10 5 21"
  }));
});
Image.propTypes = {
  color: import_prop_types63.default.string,
  size: import_prop_types63.default.oneOfType([import_prop_types63.default.string, import_prop_types63.default.number])
};
Image.displayName = "Image";
var image_default = Image;

// node_modules/react-feather/dist/icons/inbox.js
var import_react64 = __toESM(require_react());
var import_prop_types64 = __toESM(require_prop_types());
function _extends64() {
  _extends64 = Object.assign || function(target) {
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
  return _extends64.apply(this, arguments);
}
function _objectWithoutProperties64(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose64(source, excluded);
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
function _objectWithoutPropertiesLoose64(source, excluded) {
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
var Inbox = (0, import_react64.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties64(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react64.default.createElement("svg", _extends64({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react64.default.createElement("polyline", {
    points: "22 12 16 12 14 15 10 15 8 12 2 12"
  }), /* @__PURE__ */ import_react64.default.createElement("path", {
    d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
  }));
});
Inbox.propTypes = {
  color: import_prop_types64.default.string,
  size: import_prop_types64.default.oneOfType([import_prop_types64.default.string, import_prop_types64.default.number])
};
Inbox.displayName = "Inbox";
var inbox_default = Inbox;

// node_modules/react-feather/dist/icons/layers.js
var import_react65 = __toESM(require_react());
var import_prop_types65 = __toESM(require_prop_types());
function _extends65() {
  _extends65 = Object.assign || function(target) {
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
  return _extends65.apply(this, arguments);
}
function _objectWithoutProperties65(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose65(source, excluded);
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
function _objectWithoutPropertiesLoose65(source, excluded) {
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
var Layers = (0, import_react65.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties65(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react65.default.createElement("svg", _extends65({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react65.default.createElement("polygon", {
    points: "12 2 2 7 12 12 22 7 12 2"
  }), /* @__PURE__ */ import_react65.default.createElement("polyline", {
    points: "2 17 12 22 22 17"
  }), /* @__PURE__ */ import_react65.default.createElement("polyline", {
    points: "2 12 12 17 22 12"
  }));
});
Layers.propTypes = {
  color: import_prop_types65.default.string,
  size: import_prop_types65.default.oneOfType([import_prop_types65.default.string, import_prop_types65.default.number])
};
Layers.displayName = "Layers";
var layers_default = Layers;

// node_modules/react-feather/dist/icons/layout.js
var import_react66 = __toESM(require_react());
var import_prop_types66 = __toESM(require_prop_types());
function _extends66() {
  _extends66 = Object.assign || function(target) {
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
  return _extends66.apply(this, arguments);
}
function _objectWithoutProperties66(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose66(source, excluded);
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
function _objectWithoutPropertiesLoose66(source, excluded) {
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
var Layout = (0, import_react66.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties66(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react66.default.createElement("svg", _extends66({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react66.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ import_react66.default.createElement("line", {
    x1: "3",
    y1: "9",
    x2: "21",
    y2: "9"
  }), /* @__PURE__ */ import_react66.default.createElement("line", {
    x1: "9",
    y1: "21",
    x2: "9",
    y2: "9"
  }));
});
Layout.propTypes = {
  color: import_prop_types66.default.string,
  size: import_prop_types66.default.oneOfType([import_prop_types66.default.string, import_prop_types66.default.number])
};
Layout.displayName = "Layout";
var layout_default = Layout;

// node_modules/react-feather/dist/icons/link.js
var import_react67 = __toESM(require_react());
var import_prop_types67 = __toESM(require_prop_types());
function _extends67() {
  _extends67 = Object.assign || function(target) {
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
  return _extends67.apply(this, arguments);
}
function _objectWithoutProperties67(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose67(source, excluded);
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
function _objectWithoutPropertiesLoose67(source, excluded) {
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
var Link = (0, import_react67.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties67(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react67.default.createElement("svg", _extends67({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react67.default.createElement("path", {
    d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
  }), /* @__PURE__ */ import_react67.default.createElement("path", {
    d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
  }));
});
Link.propTypes = {
  color: import_prop_types67.default.string,
  size: import_prop_types67.default.oneOfType([import_prop_types67.default.string, import_prop_types67.default.number])
};
Link.displayName = "Link";
var link_default = Link;

// node_modules/react-feather/dist/icons/list.js
var import_react68 = __toESM(require_react());
var import_prop_types68 = __toESM(require_prop_types());
function _extends68() {
  _extends68 = Object.assign || function(target) {
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
  return _extends68.apply(this, arguments);
}
function _objectWithoutProperties68(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose68(source, excluded);
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
function _objectWithoutPropertiesLoose68(source, excluded) {
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
var List = (0, import_react68.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties68(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react68.default.createElement("svg", _extends68({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react68.default.createElement("line", {
    x1: "8",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /* @__PURE__ */ import_react68.default.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /* @__PURE__ */ import_react68.default.createElement("line", {
    x1: "8",
    y1: "18",
    x2: "21",
    y2: "18"
  }), /* @__PURE__ */ import_react68.default.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "3.01",
    y2: "6"
  }), /* @__PURE__ */ import_react68.default.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "3.01",
    y2: "12"
  }), /* @__PURE__ */ import_react68.default.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "3.01",
    y2: "18"
  }));
});
List.propTypes = {
  color: import_prop_types68.default.string,
  size: import_prop_types68.default.oneOfType([import_prop_types68.default.string, import_prop_types68.default.number])
};
List.displayName = "List";
var list_default = List;

// node_modules/react-feather/dist/icons/lock.js
var import_react69 = __toESM(require_react());
var import_prop_types69 = __toESM(require_prop_types());
function _extends69() {
  _extends69 = Object.assign || function(target) {
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
  return _extends69.apply(this, arguments);
}
function _objectWithoutProperties69(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose69(source, excluded);
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
function _objectWithoutPropertiesLoose69(source, excluded) {
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
var Lock = (0, import_react69.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties69(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react69.default.createElement("svg", _extends69({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react69.default.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ import_react69.default.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  }));
});
Lock.propTypes = {
  color: import_prop_types69.default.string,
  size: import_prop_types69.default.oneOfType([import_prop_types69.default.string, import_prop_types69.default.number])
};
Lock.displayName = "Lock";
var lock_default = Lock;

// node_modules/react-feather/dist/icons/mail.js
var import_react70 = __toESM(require_react());
var import_prop_types70 = __toESM(require_prop_types());
function _extends70() {
  _extends70 = Object.assign || function(target) {
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
  return _extends70.apply(this, arguments);
}
function _objectWithoutProperties70(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose70(source, excluded);
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
function _objectWithoutPropertiesLoose70(source, excluded) {
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
var Mail = (0, import_react70.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties70(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react70.default.createElement("svg", _extends70({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react70.default.createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /* @__PURE__ */ import_react70.default.createElement("polyline", {
    points: "22,6 12,13 2,6"
  }));
});
Mail.propTypes = {
  color: import_prop_types70.default.string,
  size: import_prop_types70.default.oneOfType([import_prop_types70.default.string, import_prop_types70.default.number])
};
Mail.displayName = "Mail";
var mail_default = Mail;

// node_modules/react-feather/dist/icons/map-pin.js
var import_react71 = __toESM(require_react());
var import_prop_types71 = __toESM(require_prop_types());
function _extends71() {
  _extends71 = Object.assign || function(target) {
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
  return _extends71.apply(this, arguments);
}
function _objectWithoutProperties71(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose71(source, excluded);
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
function _objectWithoutPropertiesLoose71(source, excluded) {
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
var MapPin = (0, import_react71.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties71(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react71.default.createElement("svg", _extends71({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react71.default.createElement("path", {
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
  }), /* @__PURE__ */ import_react71.default.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }));
});
MapPin.propTypes = {
  color: import_prop_types71.default.string,
  size: import_prop_types71.default.oneOfType([import_prop_types71.default.string, import_prop_types71.default.number])
};
MapPin.displayName = "MapPin";
var map_pin_default = MapPin;

// node_modules/react-feather/dist/icons/maximize-2.js
var import_react72 = __toESM(require_react());
var import_prop_types72 = __toESM(require_prop_types());
function _extends72() {
  _extends72 = Object.assign || function(target) {
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
  return _extends72.apply(this, arguments);
}
function _objectWithoutProperties72(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose72(source, excluded);
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
function _objectWithoutPropertiesLoose72(source, excluded) {
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
var Maximize2 = (0, import_react72.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties72(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react72.default.createElement("svg", _extends72({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react72.default.createElement("polyline", {
    points: "15 3 21 3 21 9"
  }), /* @__PURE__ */ import_react72.default.createElement("polyline", {
    points: "9 21 3 21 3 15"
  }), /* @__PURE__ */ import_react72.default.createElement("line", {
    x1: "21",
    y1: "3",
    x2: "14",
    y2: "10"
  }), /* @__PURE__ */ import_react72.default.createElement("line", {
    x1: "3",
    y1: "21",
    x2: "10",
    y2: "14"
  }));
});
Maximize2.propTypes = {
  color: import_prop_types72.default.string,
  size: import_prop_types72.default.oneOfType([import_prop_types72.default.string, import_prop_types72.default.number])
};
Maximize2.displayName = "Maximize2";
var maximize_2_default = Maximize2;

// node_modules/react-feather/dist/icons/maximize.js
var import_react73 = __toESM(require_react());
var import_prop_types73 = __toESM(require_prop_types());
function _extends73() {
  _extends73 = Object.assign || function(target) {
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
  return _extends73.apply(this, arguments);
}
function _objectWithoutProperties73(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose73(source, excluded);
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
function _objectWithoutPropertiesLoose73(source, excluded) {
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
var Maximize = (0, import_react73.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties73(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react73.default.createElement("svg", _extends73({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react73.default.createElement("path", {
    d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
  }));
});
Maximize.propTypes = {
  color: import_prop_types73.default.string,
  size: import_prop_types73.default.oneOfType([import_prop_types73.default.string, import_prop_types73.default.number])
};
Maximize.displayName = "Maximize";
var maximize_default = Maximize;

// node_modules/react-feather/dist/icons/menu.js
var import_react74 = __toESM(require_react());
var import_prop_types74 = __toESM(require_prop_types());
function _extends74() {
  _extends74 = Object.assign || function(target) {
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
  return _extends74.apply(this, arguments);
}
function _objectWithoutProperties74(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose74(source, excluded);
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
function _objectWithoutPropertiesLoose74(source, excluded) {
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
var Menu = (0, import_react74.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties74(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react74.default.createElement("svg", _extends74({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react74.default.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /* @__PURE__ */ import_react74.default.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /* @__PURE__ */ import_react74.default.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  }));
});
Menu.propTypes = {
  color: import_prop_types74.default.string,
  size: import_prop_types74.default.oneOfType([import_prop_types74.default.string, import_prop_types74.default.number])
};
Menu.displayName = "Menu";
var menu_default = Menu;

// node_modules/react-feather/dist/icons/message-square.js
var import_react75 = __toESM(require_react());
var import_prop_types75 = __toESM(require_prop_types());
function _extends75() {
  _extends75 = Object.assign || function(target) {
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
  return _extends75.apply(this, arguments);
}
function _objectWithoutProperties75(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose75(source, excluded);
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
function _objectWithoutPropertiesLoose75(source, excluded) {
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
var MessageSquare = (0, import_react75.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties75(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react75.default.createElement("svg", _extends75({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react75.default.createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  }));
});
MessageSquare.propTypes = {
  color: import_prop_types75.default.string,
  size: import_prop_types75.default.oneOfType([import_prop_types75.default.string, import_prop_types75.default.number])
};
MessageSquare.displayName = "MessageSquare";
var message_square_default = MessageSquare;

// node_modules/react-feather/dist/icons/mic.js
var import_react76 = __toESM(require_react());
var import_prop_types76 = __toESM(require_prop_types());
function _extends76() {
  _extends76 = Object.assign || function(target) {
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
  return _extends76.apply(this, arguments);
}
function _objectWithoutProperties76(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose76(source, excluded);
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
function _objectWithoutPropertiesLoose76(source, excluded) {
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
var Mic = (0, import_react76.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties76(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react76.default.createElement("svg", _extends76({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react76.default.createElement("path", {
    d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
  }), /* @__PURE__ */ import_react76.default.createElement("path", {
    d: "M19 10v2a7 7 0 0 1-14 0v-2"
  }), /* @__PURE__ */ import_react76.default.createElement("line", {
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "23"
  }), /* @__PURE__ */ import_react76.default.createElement("line", {
    x1: "8",
    y1: "23",
    x2: "16",
    y2: "23"
  }));
});
Mic.propTypes = {
  color: import_prop_types76.default.string,
  size: import_prop_types76.default.oneOfType([import_prop_types76.default.string, import_prop_types76.default.number])
};
Mic.displayName = "Mic";
var mic_default = Mic;

// node_modules/react-feather/dist/icons/minimize-2.js
var import_react77 = __toESM(require_react());
var import_prop_types77 = __toESM(require_prop_types());
function _extends77() {
  _extends77 = Object.assign || function(target) {
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
  return _extends77.apply(this, arguments);
}
function _objectWithoutProperties77(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose77(source, excluded);
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
function _objectWithoutPropertiesLoose77(source, excluded) {
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
var Minimize2 = (0, import_react77.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties77(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react77.default.createElement("svg", _extends77({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react77.default.createElement("polyline", {
    points: "4 14 10 14 10 20"
  }), /* @__PURE__ */ import_react77.default.createElement("polyline", {
    points: "20 10 14 10 14 4"
  }), /* @__PURE__ */ import_react77.default.createElement("line", {
    x1: "14",
    y1: "10",
    x2: "21",
    y2: "3"
  }), /* @__PURE__ */ import_react77.default.createElement("line", {
    x1: "3",
    y1: "21",
    x2: "10",
    y2: "14"
  }));
});
Minimize2.propTypes = {
  color: import_prop_types77.default.string,
  size: import_prop_types77.default.oneOfType([import_prop_types77.default.string, import_prop_types77.default.number])
};
Minimize2.displayName = "Minimize2";
var minimize_2_default = Minimize2;

// node_modules/react-feather/dist/icons/minus.js
var import_react78 = __toESM(require_react());
var import_prop_types78 = __toESM(require_prop_types());
function _extends78() {
  _extends78 = Object.assign || function(target) {
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
  return _extends78.apply(this, arguments);
}
function _objectWithoutProperties78(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose78(source, excluded);
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
function _objectWithoutPropertiesLoose78(source, excluded) {
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
var Minus = (0, import_react78.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties78(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react78.default.createElement("svg", _extends78({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react78.default.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }));
});
Minus.propTypes = {
  color: import_prop_types78.default.string,
  size: import_prop_types78.default.oneOfType([import_prop_types78.default.string, import_prop_types78.default.number])
};
Minus.displayName = "Minus";
var minus_default = Minus;

// node_modules/react-feather/dist/icons/monitor.js
var import_react79 = __toESM(require_react());
var import_prop_types79 = __toESM(require_prop_types());
function _extends79() {
  _extends79 = Object.assign || function(target) {
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
  return _extends79.apply(this, arguments);
}
function _objectWithoutProperties79(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose79(source, excluded);
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
function _objectWithoutPropertiesLoose79(source, excluded) {
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
var Monitor = (0, import_react79.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties79(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react79.default.createElement("svg", _extends79({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react79.default.createElement("rect", {
    x: "2",
    y: "3",
    width: "20",
    height: "14",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ import_react79.default.createElement("line", {
    x1: "8",
    y1: "21",
    x2: "16",
    y2: "21"
  }), /* @__PURE__ */ import_react79.default.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12",
    y2: "21"
  }));
});
Monitor.propTypes = {
  color: import_prop_types79.default.string,
  size: import_prop_types79.default.oneOfType([import_prop_types79.default.string, import_prop_types79.default.number])
};
Monitor.displayName = "Monitor";
var monitor_default = Monitor;

// node_modules/react-feather/dist/icons/more-vertical.js
var import_react80 = __toESM(require_react());
var import_prop_types80 = __toESM(require_prop_types());
function _extends80() {
  _extends80 = Object.assign || function(target) {
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
  return _extends80.apply(this, arguments);
}
function _objectWithoutProperties80(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose80(source, excluded);
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
function _objectWithoutPropertiesLoose80(source, excluded) {
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
var MoreVertical = (0, import_react80.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties80(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react80.default.createElement("svg", _extends80({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react80.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), /* @__PURE__ */ import_react80.default.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "1"
  }), /* @__PURE__ */ import_react80.default.createElement("circle", {
    cx: "12",
    cy: "19",
    r: "1"
  }));
});
MoreVertical.propTypes = {
  color: import_prop_types80.default.string,
  size: import_prop_types80.default.oneOfType([import_prop_types80.default.string, import_prop_types80.default.number])
};
MoreVertical.displayName = "MoreVertical";
var more_vertical_default = MoreVertical;

// node_modules/react-feather/dist/icons/paperclip.js
var import_react81 = __toESM(require_react());
var import_prop_types81 = __toESM(require_prop_types());
function _extends81() {
  _extends81 = Object.assign || function(target) {
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
  return _extends81.apply(this, arguments);
}
function _objectWithoutProperties81(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose81(source, excluded);
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
function _objectWithoutPropertiesLoose81(source, excluded) {
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
var Paperclip = (0, import_react81.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties81(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react81.default.createElement("svg", _extends81({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react81.default.createElement("path", {
    d: "M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"
  }));
});
Paperclip.propTypes = {
  color: import_prop_types81.default.string,
  size: import_prop_types81.default.oneOfType([import_prop_types81.default.string, import_prop_types81.default.number])
};
Paperclip.displayName = "Paperclip";
var paperclip_default = Paperclip;

// node_modules/react-feather/dist/icons/pen-tool.js
var import_react82 = __toESM(require_react());
var import_prop_types82 = __toESM(require_prop_types());
function _extends82() {
  _extends82 = Object.assign || function(target) {
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
  return _extends82.apply(this, arguments);
}
function _objectWithoutProperties82(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose82(source, excluded);
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
function _objectWithoutPropertiesLoose82(source, excluded) {
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
var PenTool = (0, import_react82.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties82(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react82.default.createElement("svg", _extends82({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react82.default.createElement("path", {
    d: "M12 19l7-7 3 3-7 7-3-3z"
  }), /* @__PURE__ */ import_react82.default.createElement("path", {
    d: "M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"
  }), /* @__PURE__ */ import_react82.default.createElement("path", {
    d: "M2 2l7.586 7.586"
  }), /* @__PURE__ */ import_react82.default.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "2"
  }));
});
PenTool.propTypes = {
  color: import_prop_types82.default.string,
  size: import_prop_types82.default.oneOfType([import_prop_types82.default.string, import_prop_types82.default.number])
};
PenTool.displayName = "PenTool";
var pen_tool_default = PenTool;

// node_modules/react-feather/dist/icons/phone-call.js
var import_react83 = __toESM(require_react());
var import_prop_types83 = __toESM(require_prop_types());
function _extends83() {
  _extends83 = Object.assign || function(target) {
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
  return _extends83.apply(this, arguments);
}
function _objectWithoutProperties83(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose83(source, excluded);
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
function _objectWithoutPropertiesLoose83(source, excluded) {
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
var PhoneCall = (0, import_react83.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties83(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react83.default.createElement("svg", _extends83({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react83.default.createElement("path", {
    d: "M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }));
});
PhoneCall.propTypes = {
  color: import_prop_types83.default.string,
  size: import_prop_types83.default.oneOfType([import_prop_types83.default.string, import_prop_types83.default.number])
};
PhoneCall.displayName = "PhoneCall";
var phone_call_default = PhoneCall;

// node_modules/react-feather/dist/icons/phone.js
var import_react84 = __toESM(require_react());
var import_prop_types84 = __toESM(require_prop_types());
function _extends84() {
  _extends84 = Object.assign || function(target) {
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
  return _extends84.apply(this, arguments);
}
function _objectWithoutProperties84(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose84(source, excluded);
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
function _objectWithoutPropertiesLoose84(source, excluded) {
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
var Phone = (0, import_react84.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties84(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react84.default.createElement("svg", _extends84({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react84.default.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
  }));
});
Phone.propTypes = {
  color: import_prop_types84.default.string,
  size: import_prop_types84.default.oneOfType([import_prop_types84.default.string, import_prop_types84.default.number])
};
Phone.displayName = "Phone";
var phone_default = Phone;

// node_modules/react-feather/dist/icons/play.js
var import_react85 = __toESM(require_react());
var import_prop_types85 = __toESM(require_prop_types());
function _extends85() {
  _extends85 = Object.assign || function(target) {
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
  return _extends85.apply(this, arguments);
}
function _objectWithoutProperties85(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose85(source, excluded);
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
function _objectWithoutPropertiesLoose85(source, excluded) {
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
var Play = (0, import_react85.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties85(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react85.default.createElement("svg", _extends85({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react85.default.createElement("polygon", {
    points: "5 3 19 12 5 21 5 3"
  }));
});
Play.propTypes = {
  color: import_prop_types85.default.string,
  size: import_prop_types85.default.oneOfType([import_prop_types85.default.string, import_prop_types85.default.number])
};
Play.displayName = "Play";
var play_default = Play;

// node_modules/react-feather/dist/icons/plus-square.js
var import_react86 = __toESM(require_react());
var import_prop_types86 = __toESM(require_prop_types());
function _extends86() {
  _extends86 = Object.assign || function(target) {
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
  return _extends86.apply(this, arguments);
}
function _objectWithoutProperties86(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose86(source, excluded);
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
function _objectWithoutPropertiesLoose86(source, excluded) {
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
var PlusSquare = (0, import_react86.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties86(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react86.default.createElement("svg", _extends86({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react86.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ import_react86.default.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "16"
  }), /* @__PURE__ */ import_react86.default.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "16",
    y2: "12"
  }));
});
PlusSquare.propTypes = {
  color: import_prop_types86.default.string,
  size: import_prop_types86.default.oneOfType([import_prop_types86.default.string, import_prop_types86.default.number])
};
PlusSquare.displayName = "PlusSquare";
var plus_square_default = PlusSquare;

// node_modules/react-feather/dist/icons/pocket.js
var import_react87 = __toESM(require_react());
var import_prop_types87 = __toESM(require_prop_types());
function _extends87() {
  _extends87 = Object.assign || function(target) {
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
  return _extends87.apply(this, arguments);
}
function _objectWithoutProperties87(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose87(source, excluded);
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
function _objectWithoutPropertiesLoose87(source, excluded) {
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
var Pocket = (0, import_react87.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties87(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react87.default.createElement("svg", _extends87({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react87.default.createElement("path", {
    d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
  }), /* @__PURE__ */ import_react87.default.createElement("polyline", {
    points: "8 10 12 14 16 10"
  }));
});
Pocket.propTypes = {
  color: import_prop_types87.default.string,
  size: import_prop_types87.default.oneOfType([import_prop_types87.default.string, import_prop_types87.default.number])
};
Pocket.displayName = "Pocket";
var pocket_default = Pocket;

// node_modules/react-feather/dist/icons/printer.js
var import_react88 = __toESM(require_react());
var import_prop_types88 = __toESM(require_prop_types());
function _extends88() {
  _extends88 = Object.assign || function(target) {
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
  return _extends88.apply(this, arguments);
}
function _objectWithoutProperties88(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose88(source, excluded);
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
function _objectWithoutPropertiesLoose88(source, excluded) {
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
var Printer = (0, import_react88.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties88(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react88.default.createElement("svg", _extends88({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react88.default.createElement("polyline", {
    points: "6 9 6 2 18 2 18 9"
  }), /* @__PURE__ */ import_react88.default.createElement("path", {
    d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
  }), /* @__PURE__ */ import_react88.default.createElement("rect", {
    x: "6",
    y: "14",
    width: "12",
    height: "8"
  }));
});
Printer.propTypes = {
  color: import_prop_types88.default.string,
  size: import_prop_types88.default.oneOfType([import_prop_types88.default.string, import_prop_types88.default.number])
};
Printer.displayName = "Printer";
var printer_default = Printer;

// node_modules/react-feather/dist/icons/refresh-cw.js
var import_react89 = __toESM(require_react());
var import_prop_types89 = __toESM(require_prop_types());
function _extends89() {
  _extends89 = Object.assign || function(target) {
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
  return _extends89.apply(this, arguments);
}
function _objectWithoutProperties89(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose89(source, excluded);
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
function _objectWithoutPropertiesLoose89(source, excluded) {
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
var RefreshCw = (0, import_react89.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties89(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react89.default.createElement("svg", _extends89({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react89.default.createElement("polyline", {
    points: "23 4 23 10 17 10"
  }), /* @__PURE__ */ import_react89.default.createElement("polyline", {
    points: "1 20 1 14 7 14"
  }), /* @__PURE__ */ import_react89.default.createElement("path", {
    d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"
  }));
});
RefreshCw.propTypes = {
  color: import_prop_types89.default.string,
  size: import_prop_types89.default.oneOfType([import_prop_types89.default.string, import_prop_types89.default.number])
};
RefreshCw.displayName = "RefreshCw";
var refresh_cw_default = RefreshCw;

// node_modules/react-feather/dist/icons/repeat.js
var import_react90 = __toESM(require_react());
var import_prop_types90 = __toESM(require_prop_types());
function _extends90() {
  _extends90 = Object.assign || function(target) {
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
  return _extends90.apply(this, arguments);
}
function _objectWithoutProperties90(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose90(source, excluded);
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
function _objectWithoutPropertiesLoose90(source, excluded) {
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
var Repeat = (0, import_react90.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties90(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react90.default.createElement("svg", _extends90({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react90.default.createElement("polyline", {
    points: "17 1 21 5 17 9"
  }), /* @__PURE__ */ import_react90.default.createElement("path", {
    d: "M3 11V9a4 4 0 0 1 4-4h14"
  }), /* @__PURE__ */ import_react90.default.createElement("polyline", {
    points: "7 23 3 19 7 15"
  }), /* @__PURE__ */ import_react90.default.createElement("path", {
    d: "M21 13v2a4 4 0 0 1-4 4H3"
  }));
});
Repeat.propTypes = {
  color: import_prop_types90.default.string,
  size: import_prop_types90.default.oneOfType([import_prop_types90.default.string, import_prop_types90.default.number])
};
Repeat.displayName = "Repeat";
var repeat_default = Repeat;

// node_modules/react-feather/dist/icons/save.js
var import_react91 = __toESM(require_react());
var import_prop_types91 = __toESM(require_prop_types());
function _extends91() {
  _extends91 = Object.assign || function(target) {
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
  return _extends91.apply(this, arguments);
}
function _objectWithoutProperties91(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose91(source, excluded);
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
function _objectWithoutPropertiesLoose91(source, excluded) {
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
var Save = (0, import_react91.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties91(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react91.default.createElement("svg", _extends91({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react91.default.createElement("path", {
    d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
  }), /* @__PURE__ */ import_react91.default.createElement("polyline", {
    points: "17 21 17 13 7 13 7 21"
  }), /* @__PURE__ */ import_react91.default.createElement("polyline", {
    points: "7 3 7 8 15 8"
  }));
});
Save.propTypes = {
  color: import_prop_types91.default.string,
  size: import_prop_types91.default.oneOfType([import_prop_types91.default.string, import_prop_types91.default.number])
};
Save.displayName = "Save";
var save_default = Save;

// node_modules/react-feather/dist/icons/search.js
var import_react92 = __toESM(require_react());
var import_prop_types92 = __toESM(require_prop_types());
function _extends92() {
  _extends92 = Object.assign || function(target) {
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
  return _extends92.apply(this, arguments);
}
function _objectWithoutProperties92(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose92(source, excluded);
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
function _objectWithoutPropertiesLoose92(source, excluded) {
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
var Search = (0, import_react92.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties92(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react92.default.createElement("svg", _extends92({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react92.default.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /* @__PURE__ */ import_react92.default.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }));
});
Search.propTypes = {
  color: import_prop_types92.default.string,
  size: import_prop_types92.default.oneOfType([import_prop_types92.default.string, import_prop_types92.default.number])
};
Search.displayName = "Search";
var search_default = Search;

// node_modules/react-feather/dist/icons/send.js
var import_react93 = __toESM(require_react());
var import_prop_types93 = __toESM(require_prop_types());
function _extends93() {
  _extends93 = Object.assign || function(target) {
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
  return _extends93.apply(this, arguments);
}
function _objectWithoutProperties93(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose93(source, excluded);
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
function _objectWithoutPropertiesLoose93(source, excluded) {
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
var Send = (0, import_react93.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties93(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react93.default.createElement("svg", _extends93({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react93.default.createElement("line", {
    x1: "22",
    y1: "2",
    x2: "11",
    y2: "13"
  }), /* @__PURE__ */ import_react93.default.createElement("polygon", {
    points: "22 2 15 22 11 13 2 9 22 2"
  }));
});
Send.propTypes = {
  color: import_prop_types93.default.string,
  size: import_prop_types93.default.oneOfType([import_prop_types93.default.string, import_prop_types93.default.number])
};
Send.displayName = "Send";
var send_default = Send;

// node_modules/react-feather/dist/icons/server.js
var import_react94 = __toESM(require_react());
var import_prop_types94 = __toESM(require_prop_types());
function _extends94() {
  _extends94 = Object.assign || function(target) {
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
  return _extends94.apply(this, arguments);
}
function _objectWithoutProperties94(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose94(source, excluded);
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
function _objectWithoutPropertiesLoose94(source, excluded) {
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
var Server = (0, import_react94.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties94(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react94.default.createElement("svg", _extends94({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react94.default.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "8",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ import_react94.default.createElement("rect", {
    x: "2",
    y: "14",
    width: "20",
    height: "8",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ import_react94.default.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "6.01",
    y2: "6"
  }), /* @__PURE__ */ import_react94.default.createElement("line", {
    x1: "6",
    y1: "18",
    x2: "6.01",
    y2: "18"
  }));
});
Server.propTypes = {
  color: import_prop_types94.default.string,
  size: import_prop_types94.default.oneOfType([import_prop_types94.default.string, import_prop_types94.default.number])
};
Server.displayName = "Server";
var server_default = Server;

// node_modules/react-feather/dist/icons/share.js
var import_react95 = __toESM(require_react());
var import_prop_types95 = __toESM(require_prop_types());
function _extends95() {
  _extends95 = Object.assign || function(target) {
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
  return _extends95.apply(this, arguments);
}
function _objectWithoutProperties95(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose95(source, excluded);
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
function _objectWithoutPropertiesLoose95(source, excluded) {
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
var Share = (0, import_react95.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties95(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react95.default.createElement("svg", _extends95({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react95.default.createElement("path", {
    d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
  }), /* @__PURE__ */ import_react95.default.createElement("polyline", {
    points: "16 6 12 2 8 6"
  }), /* @__PURE__ */ import_react95.default.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "15"
  }));
});
Share.propTypes = {
  color: import_prop_types95.default.string,
  size: import_prop_types95.default.oneOfType([import_prop_types95.default.string, import_prop_types95.default.number])
};
Share.displayName = "Share";
var share_default = Share;

// node_modules/react-feather/dist/icons/shield.js
var import_react96 = __toESM(require_react());
var import_prop_types96 = __toESM(require_prop_types());
function _extends96() {
  _extends96 = Object.assign || function(target) {
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
  return _extends96.apply(this, arguments);
}
function _objectWithoutProperties96(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose96(source, excluded);
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
function _objectWithoutPropertiesLoose96(source, excluded) {
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
var Shield = (0, import_react96.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties96(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react96.default.createElement("svg", _extends96({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react96.default.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  }));
});
Shield.propTypes = {
  color: import_prop_types96.default.string,
  size: import_prop_types96.default.oneOfType([import_prop_types96.default.string, import_prop_types96.default.number])
};
Shield.displayName = "Shield";
var shield_default = Shield;

// node_modules/react-feather/dist/icons/sidebar.js
var import_react97 = __toESM(require_react());
var import_prop_types97 = __toESM(require_prop_types());
function _extends97() {
  _extends97 = Object.assign || function(target) {
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
  return _extends97.apply(this, arguments);
}
function _objectWithoutProperties97(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose97(source, excluded);
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
function _objectWithoutPropertiesLoose97(source, excluded) {
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
var Sidebar = (0, import_react97.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties97(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react97.default.createElement("svg", _extends97({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react97.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ import_react97.default.createElement("line", {
    x1: "9",
    y1: "3",
    x2: "9",
    y2: "21"
  }));
});
Sidebar.propTypes = {
  color: import_prop_types97.default.string,
  size: import_prop_types97.default.oneOfType([import_prop_types97.default.string, import_prop_types97.default.number])
};
Sidebar.displayName = "Sidebar";
var sidebar_default = Sidebar;

// node_modules/react-feather/dist/icons/slash.js
var import_react98 = __toESM(require_react());
var import_prop_types98 = __toESM(require_prop_types());
function _extends98() {
  _extends98 = Object.assign || function(target) {
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
  return _extends98.apply(this, arguments);
}
function _objectWithoutProperties98(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose98(source, excluded);
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
function _objectWithoutPropertiesLoose98(source, excluded) {
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
var Slash = (0, import_react98.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties98(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react98.default.createElement("svg", _extends98({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react98.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ import_react98.default.createElement("line", {
    x1: "4.93",
    y1: "4.93",
    x2: "19.07",
    y2: "19.07"
  }));
});
Slash.propTypes = {
  color: import_prop_types98.default.string,
  size: import_prop_types98.default.oneOfType([import_prop_types98.default.string, import_prop_types98.default.number])
};
Slash.displayName = "Slash";
var slash_default = Slash;

// node_modules/react-feather/dist/icons/sliders.js
var import_react99 = __toESM(require_react());
var import_prop_types99 = __toESM(require_prop_types());
function _extends99() {
  _extends99 = Object.assign || function(target) {
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
  return _extends99.apply(this, arguments);
}
function _objectWithoutProperties99(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose99(source, excluded);
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
function _objectWithoutPropertiesLoose99(source, excluded) {
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
var Sliders = (0, import_react99.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties99(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react99.default.createElement("svg", _extends99({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react99.default.createElement("line", {
    x1: "4",
    y1: "21",
    x2: "4",
    y2: "14"
  }), /* @__PURE__ */ import_react99.default.createElement("line", {
    x1: "4",
    y1: "10",
    x2: "4",
    y2: "3"
  }), /* @__PURE__ */ import_react99.default.createElement("line", {
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "12"
  }), /* @__PURE__ */ import_react99.default.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "3"
  }), /* @__PURE__ */ import_react99.default.createElement("line", {
    x1: "20",
    y1: "21",
    x2: "20",
    y2: "16"
  }), /* @__PURE__ */ import_react99.default.createElement("line", {
    x1: "20",
    y1: "12",
    x2: "20",
    y2: "3"
  }), /* @__PURE__ */ import_react99.default.createElement("line", {
    x1: "1",
    y1: "14",
    x2: "7",
    y2: "14"
  }), /* @__PURE__ */ import_react99.default.createElement("line", {
    x1: "9",
    y1: "8",
    x2: "15",
    y2: "8"
  }), /* @__PURE__ */ import_react99.default.createElement("line", {
    x1: "17",
    y1: "16",
    x2: "23",
    y2: "16"
  }));
});
Sliders.propTypes = {
  color: import_prop_types99.default.string,
  size: import_prop_types99.default.oneOfType([import_prop_types99.default.string, import_prop_types99.default.number])
};
Sliders.displayName = "Sliders";
var sliders_default = Sliders;

// node_modules/react-feather/dist/icons/smile.js
var import_react100 = __toESM(require_react());
var import_prop_types100 = __toESM(require_prop_types());
function _extends100() {
  _extends100 = Object.assign || function(target) {
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
  return _extends100.apply(this, arguments);
}
function _objectWithoutProperties100(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose100(source, excluded);
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
function _objectWithoutPropertiesLoose100(source, excluded) {
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
var Smile = (0, import_react100.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties100(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react100.default.createElement("svg", _extends100({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react100.default.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /* @__PURE__ */ import_react100.default.createElement("path", {
    d: "M8 14s1.5 2 4 2 4-2 4-2"
  }), /* @__PURE__ */ import_react100.default.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "9.01",
    y2: "9"
  }), /* @__PURE__ */ import_react100.default.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "15.01",
    y2: "9"
  }));
});
Smile.propTypes = {
  color: import_prop_types100.default.string,
  size: import_prop_types100.default.oneOfType([import_prop_types100.default.string, import_prop_types100.default.number])
};
Smile.displayName = "Smile";
var smile_default = Smile;

// node_modules/react-feather/dist/icons/tag.js
var import_react101 = __toESM(require_react());
var import_prop_types101 = __toESM(require_prop_types());
function _extends101() {
  _extends101 = Object.assign || function(target) {
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
  return _extends101.apply(this, arguments);
}
function _objectWithoutProperties101(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose101(source, excluded);
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
function _objectWithoutPropertiesLoose101(source, excluded) {
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
var Tag = (0, import_react101.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties101(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react101.default.createElement("svg", _extends101({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react101.default.createElement("path", {
    d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
  }), /* @__PURE__ */ import_react101.default.createElement("line", {
    x1: "7",
    y1: "7",
    x2: "7.01",
    y2: "7"
  }));
});
Tag.propTypes = {
  color: import_prop_types101.default.string,
  size: import_prop_types101.default.oneOfType([import_prop_types101.default.string, import_prop_types101.default.number])
};
Tag.displayName = "Tag";
var tag_default = Tag;

// node_modules/react-feather/dist/icons/toggle-right.js
var import_react102 = __toESM(require_react());
var import_prop_types102 = __toESM(require_prop_types());
function _extends102() {
  _extends102 = Object.assign || function(target) {
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
  return _extends102.apply(this, arguments);
}
function _objectWithoutProperties102(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose102(source, excluded);
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
function _objectWithoutPropertiesLoose102(source, excluded) {
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
var ToggleRight = (0, import_react102.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties102(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react102.default.createElement("svg", _extends102({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react102.default.createElement("rect", {
    x: "1",
    y: "5",
    width: "22",
    height: "14",
    rx: "7",
    ry: "7"
  }), /* @__PURE__ */ import_react102.default.createElement("circle", {
    cx: "16",
    cy: "12",
    r: "3"
  }));
});
ToggleRight.propTypes = {
  color: import_prop_types102.default.string,
  size: import_prop_types102.default.oneOfType([import_prop_types102.default.string, import_prop_types102.default.number])
};
ToggleRight.displayName = "ToggleRight";
var toggle_right_default = ToggleRight;

// node_modules/react-feather/dist/icons/tool.js
var import_react103 = __toESM(require_react());
var import_prop_types103 = __toESM(require_prop_types());
function _extends103() {
  _extends103 = Object.assign || function(target) {
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
  return _extends103.apply(this, arguments);
}
function _objectWithoutProperties103(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose103(source, excluded);
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
function _objectWithoutPropertiesLoose103(source, excluded) {
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
var Tool = (0, import_react103.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties103(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react103.default.createElement("svg", _extends103({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react103.default.createElement("path", {
    d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
  }));
});
Tool.propTypes = {
  color: import_prop_types103.default.string,
  size: import_prop_types103.default.oneOfType([import_prop_types103.default.string, import_prop_types103.default.number])
};
Tool.displayName = "Tool";
var tool_default = Tool;

// node_modules/react-feather/dist/icons/trash.js
var import_react104 = __toESM(require_react());
var import_prop_types104 = __toESM(require_prop_types());
function _extends104() {
  _extends104 = Object.assign || function(target) {
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
  return _extends104.apply(this, arguments);
}
function _objectWithoutProperties104(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose104(source, excluded);
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
function _objectWithoutPropertiesLoose104(source, excluded) {
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
var Trash = (0, import_react104.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties104(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react104.default.createElement("svg", _extends104({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react104.default.createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), /* @__PURE__ */ import_react104.default.createElement("path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }));
});
Trash.propTypes = {
  color: import_prop_types104.default.string,
  size: import_prop_types104.default.oneOfType([import_prop_types104.default.string, import_prop_types104.default.number])
};
Trash.displayName = "Trash";
var trash_default = Trash;

// node_modules/react-feather/dist/icons/trello.js
var import_react105 = __toESM(require_react());
var import_prop_types105 = __toESM(require_prop_types());
function _extends105() {
  _extends105 = Object.assign || function(target) {
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
  return _extends105.apply(this, arguments);
}
function _objectWithoutProperties105(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose105(source, excluded);
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
function _objectWithoutPropertiesLoose105(source, excluded) {
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
var Trello = (0, import_react105.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties105(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react105.default.createElement("svg", _extends105({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react105.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ import_react105.default.createElement("rect", {
    x: "7",
    y: "7",
    width: "3",
    height: "9"
  }), /* @__PURE__ */ import_react105.default.createElement("rect", {
    x: "14",
    y: "7",
    width: "3",
    height: "5"
  }));
});
Trello.propTypes = {
  color: import_prop_types105.default.string,
  size: import_prop_types105.default.oneOfType([import_prop_types105.default.string, import_prop_types105.default.number])
};
Trello.displayName = "Trello";
var trello_default = Trello;

// node_modules/react-feather/dist/icons/upload-cloud.js
var import_react106 = __toESM(require_react());
var import_prop_types106 = __toESM(require_prop_types());
function _extends106() {
  _extends106 = Object.assign || function(target) {
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
  return _extends106.apply(this, arguments);
}
function _objectWithoutProperties106(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose106(source, excluded);
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
function _objectWithoutPropertiesLoose106(source, excluded) {
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
var UploadCloud = (0, import_react106.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties106(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react106.default.createElement("svg", _extends106({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react106.default.createElement("polyline", {
    points: "16 16 12 12 8 16"
  }), /* @__PURE__ */ import_react106.default.createElement("line", {
    x1: "12",
    y1: "12",
    x2: "12",
    y2: "21"
  }), /* @__PURE__ */ import_react106.default.createElement("path", {
    d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"
  }), /* @__PURE__ */ import_react106.default.createElement("polyline", {
    points: "16 16 12 12 8 16"
  }));
});
UploadCloud.propTypes = {
  color: import_prop_types106.default.string,
  size: import_prop_types106.default.oneOfType([import_prop_types106.default.string, import_prop_types106.default.number])
};
UploadCloud.displayName = "UploadCloud";
var upload_cloud_default = UploadCloud;

// node_modules/react-feather/dist/icons/upload.js
var import_react107 = __toESM(require_react());
var import_prop_types107 = __toESM(require_prop_types());
function _extends107() {
  _extends107 = Object.assign || function(target) {
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
  return _extends107.apply(this, arguments);
}
function _objectWithoutProperties107(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose107(source, excluded);
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
function _objectWithoutPropertiesLoose107(source, excluded) {
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
var Upload = (0, import_react107.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties107(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react107.default.createElement("svg", _extends107({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react107.default.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /* @__PURE__ */ import_react107.default.createElement("polyline", {
    points: "17 8 12 3 7 8"
  }), /* @__PURE__ */ import_react107.default.createElement("line", {
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "15"
  }));
});
Upload.propTypes = {
  color: import_prop_types107.default.string,
  size: import_prop_types107.default.oneOfType([import_prop_types107.default.string, import_prop_types107.default.number])
};
Upload.displayName = "Upload";
var upload_default = Upload;

// node_modules/react-feather/dist/icons/user-check.js
var import_react108 = __toESM(require_react());
var import_prop_types108 = __toESM(require_prop_types());
function _extends108() {
  _extends108 = Object.assign || function(target) {
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
  return _extends108.apply(this, arguments);
}
function _objectWithoutProperties108(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose108(source, excluded);
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
function _objectWithoutPropertiesLoose108(source, excluded) {
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
var UserCheck = (0, import_react108.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties108(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react108.default.createElement("svg", _extends108({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react108.default.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /* @__PURE__ */ import_react108.default.createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), /* @__PURE__ */ import_react108.default.createElement("polyline", {
    points: "17 11 19 13 23 9"
  }));
});
UserCheck.propTypes = {
  color: import_prop_types108.default.string,
  size: import_prop_types108.default.oneOfType([import_prop_types108.default.string, import_prop_types108.default.number])
};
UserCheck.displayName = "UserCheck";
var user_check_default = UserCheck;

// node_modules/react-feather/dist/icons/user.js
var import_react109 = __toESM(require_react());
var import_prop_types109 = __toESM(require_prop_types());
function _extends109() {
  _extends109 = Object.assign || function(target) {
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
  return _extends109.apply(this, arguments);
}
function _objectWithoutProperties109(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose109(source, excluded);
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
function _objectWithoutPropertiesLoose109(source, excluded) {
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
var User = (0, import_react109.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties109(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react109.default.createElement("svg", _extends109({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react109.default.createElement("path", {
    d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
  }), /* @__PURE__ */ import_react109.default.createElement("circle", {
    cx: "12",
    cy: "7",
    r: "4"
  }));
});
User.propTypes = {
  color: import_prop_types109.default.string,
  size: import_prop_types109.default.oneOfType([import_prop_types109.default.string, import_prop_types109.default.number])
};
User.displayName = "User";
var user_default = User;

// node_modules/react-feather/dist/icons/users.js
var import_react110 = __toESM(require_react());
var import_prop_types110 = __toESM(require_prop_types());
function _extends110() {
  _extends110 = Object.assign || function(target) {
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
  return _extends110.apply(this, arguments);
}
function _objectWithoutProperties110(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose110(source, excluded);
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
function _objectWithoutPropertiesLoose110(source, excluded) {
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
var Users = (0, import_react110.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties110(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react110.default.createElement("svg", _extends110({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react110.default.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /* @__PURE__ */ import_react110.default.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /* @__PURE__ */ import_react110.default.createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87"
  }), /* @__PURE__ */ import_react110.default.createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  }));
});
Users.propTypes = {
  color: import_prop_types110.default.string,
  size: import_prop_types110.default.oneOfType([import_prop_types110.default.string, import_prop_types110.default.number])
};
Users.displayName = "Users";
var users_default = Users;

// node_modules/react-feather/dist/icons/video.js
var import_react111 = __toESM(require_react());
var import_prop_types111 = __toESM(require_prop_types());
function _extends111() {
  _extends111 = Object.assign || function(target) {
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
  return _extends111.apply(this, arguments);
}
function _objectWithoutProperties111(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose111(source, excluded);
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
function _objectWithoutPropertiesLoose111(source, excluded) {
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
var Video = (0, import_react111.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties111(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react111.default.createElement("svg", _extends111({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react111.default.createElement("polygon", {
    points: "23 7 16 12 23 17 23 7"
  }), /* @__PURE__ */ import_react111.default.createElement("rect", {
    x: "1",
    y: "5",
    width: "15",
    height: "14",
    rx: "2",
    ry: "2"
  }));
});
Video.propTypes = {
  color: import_prop_types111.default.string,
  size: import_prop_types111.default.oneOfType([import_prop_types111.default.string, import_prop_types111.default.number])
};
Video.displayName = "Video";
var video_default = Video;

// node_modules/react-feather/dist/icons/x-square.js
var import_react112 = __toESM(require_react());
var import_prop_types112 = __toESM(require_prop_types());
function _extends112() {
  _extends112 = Object.assign || function(target) {
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
  return _extends112.apply(this, arguments);
}
function _objectWithoutProperties112(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose112(source, excluded);
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
function _objectWithoutPropertiesLoose112(source, excluded) {
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
var XSquare = (0, import_react112.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties112(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react112.default.createElement("svg", _extends112({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react112.default.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2",
    ry: "2"
  }), /* @__PURE__ */ import_react112.default.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15"
  }), /* @__PURE__ */ import_react112.default.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15"
  }));
});
XSquare.propTypes = {
  color: import_prop_types112.default.string,
  size: import_prop_types112.default.oneOfType([import_prop_types112.default.string, import_prop_types112.default.number])
};
XSquare.displayName = "XSquare";
var x_square_default = XSquare;

// node_modules/react-feather/dist/icons/x.js
var import_react113 = __toESM(require_react());
var import_prop_types113 = __toESM(require_prop_types());
function _extends113() {
  _extends113 = Object.assign || function(target) {
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
  return _extends113.apply(this, arguments);
}
function _objectWithoutProperties113(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose113(source, excluded);
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
function _objectWithoutPropertiesLoose113(source, excluded) {
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
var X = (0, import_react113.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties113(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react113.default.createElement("svg", _extends113({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react113.default.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /* @__PURE__ */ import_react113.default.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
});
X.propTypes = {
  color: import_prop_types113.default.string,
  size: import_prop_types113.default.oneOfType([import_prop_types113.default.string, import_prop_types113.default.number])
};
X.displayName = "X";
var x_default = X;

// node_modules/react-feather/dist/icons/zap-off.js
var import_react114 = __toESM(require_react());
var import_prop_types114 = __toESM(require_prop_types());
function _extends114() {
  _extends114 = Object.assign || function(target) {
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
  return _extends114.apply(this, arguments);
}
function _objectWithoutProperties114(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose114(source, excluded);
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
function _objectWithoutPropertiesLoose114(source, excluded) {
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
var ZapOff = (0, import_react114.forwardRef)(function(_ref, ref) {
  var _ref$color = _ref.color, color = _ref$color === void 0 ? "currentColor" : _ref$color, _ref$size = _ref.size, size = _ref$size === void 0 ? 24 : _ref$size, rest = _objectWithoutProperties114(_ref, ["color", "size"]);
  return /* @__PURE__ */ import_react114.default.createElement("svg", _extends114({
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /* @__PURE__ */ import_react114.default.createElement("polyline", {
    points: "12.41 6.75 13 2 10.57 4.92"
  }), /* @__PURE__ */ import_react114.default.createElement("polyline", {
    points: "18.57 12.91 21 10 15.66 10"
  }), /* @__PURE__ */ import_react114.default.createElement("polyline", {
    points: "8 8 3 14 12 14 11 22 16 16"
  }), /* @__PURE__ */ import_react114.default.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }));
});
ZapOff.propTypes = {
  color: import_prop_types114.default.string,
  size: import_prop_types114.default.oneOfType([import_prop_types114.default.string, import_prop_types114.default.number])
};
ZapOff.displayName = "ZapOff";
var zap_off_default = ZapOff;

export {
  activity_default,
  alert_triangle_default,
  align_center_default,
  align_left_default,
  archive_default,
  arrow_down_default,
  arrow_right_default,
  arrow_up_default,
  bell_default,
  book_default,
  bookmark_default,
  box_default,
  briefcase_default,
  calendar_default,
  check_square_default,
  check_default,
  chevron_down_default,
  chevron_left_default,
  chevron_right_default,
  chevron_up_default,
  clock_default,
  code_default,
  columns_default,
  copy_default,
  corner_up_left_default,
  corner_up_right_default,
  cpu_default,
  credit_card_default,
  download_default,
  droplet_default,
  edit_2_default,
  edit_3_default,
  edit_default,
  external_link_default,
  eye_off_default,
  eye_default,
  file_plus_default,
  file_text_default,
  file_default,
  flag_default,
  folder_plus_default,
  folder_default,
  git_branch_default,
  git_pull_request_default,
  github_default,
  globe_default,
  grid_default,
  hard_drive_default,
  heart_default,
  help_circle_default,
  image_default,
  inbox_default,
  info_default,
  layers_default,
  layout_default,
  link_2_default,
  link_default,
  list_default,
  lock_default,
  mail_default,
  map_pin_default,
  maximize_2_default,
  maximize_default,
  menu_default,
  message_circle_default,
  message_square_default,
  mic_default,
  minimize_2_default,
  minimize_default,
  minus_default,
  monitor_default,
  more_horizontal_default,
  more_vertical_default,
  paperclip_default,
  pen_tool_default,
  phone_call_default,
  phone_default,
  play_default,
  plus_square_default,
  plus_default,
  pocket_default,
  printer_default,
  refresh_cw_default,
  repeat_default,
  save_default,
  search_default,
  send_default,
  server_default,
  settings_default,
  share_default,
  shield_default,
  sidebar_default,
  skip_forward_default,
  slash_default,
  sliders_default,
  smile_default,
  star_default,
  tag_default,
  toggle_right_default,
  tool_default,
  trash_2_default,
  trash_default,
  trello_default,
  upload_cloud_default,
  upload_default,
  user_check_default,
  user_plus_default,
  user_default,
  users_default,
  video_default,
  x_square_default,
  x_default,
  zap_off_default,
  zap_default
};
//# sourceMappingURL=/build/_shared/chunk-YNF3EGPD.js.map
