import {
  slide1_default,
  slide2_default
} from "/build/_shared/chunk-IMTDG7PG.js";
import {
  slide3_default,
  slide4_default
} from "/build/_shared/chunk-74HVBW36.js";
import {
  AppsSidebar_default
} from "/build/_shared/chunk-JWFIAL5V.js";
import {
  symbol_avatar_16_default
} from "/build/_shared/chunk-IDVLJD6P.js";
import {
  require_dist
} from "/build/_shared/chunk-RF2NSX3W.js";
import {
  logo_avatar_10_default,
  symbol_avatar_15_default,
  symbol_avatar_1_default,
  symbol_avatar_4_default
} from "/build/_shared/chunk-RXWNQY2C.js";
import {
  symbol_avatar_12_default
} from "/build/_shared/chunk-RIGWRGCS.js";
import {
  symbol_avatar_14_default
} from "/build/_shared/chunk-4NF7SRHQ.js";
import {
  avatar4_default
} from "/build/_shared/chunk-54CGHQVE.js";
import {
  logo_avatar_2_default
} from "/build/_shared/chunk-WZGBR62Z.js";
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
  bookmark_default,
  chevron_down_default,
  chevron_left_default,
  chevron_up_default,
  external_link_default,
  share_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  Breadcrumb_default,
  Button_default,
  Card_default,
  Col_default,
  Container_default,
  Form_default,
  ListGroup_default,
  Modal_default,
  Nav_default,
  Row_default,
  Tab_default
} from "/build/_shared/chunk-KBRVI47E.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_prop_types
} from "/build/_shared/chunk-HFWHD4VB.js";
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
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/react-easy-swipe/lib/react-swipe.js
var require_react_swipe = __commonJS({
  "node_modules/react-easy-swipe/lib/react-swipe.js"(exports) {
    (function(global, factory) {
      if (typeof define === "function" && define.amd) {
        define(["exports", "react", "prop-types"], factory);
      } else if (typeof exports !== "undefined") {
        factory(exports, require_react(), require_prop_types());
      } else {
        var mod = {
          exports: {}
        };
        factory(mod.exports, global.react, global.propTypes);
        global.reactSwipe = mod.exports;
      }
    })(exports, function(exports2, _react, _propTypes) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      exports2.setHasSupportToCaptureOption = setHasSupportToCaptureOption;
      var _react2 = _interopRequireDefault(_react);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var _extends = Object.assign || function(target) {
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
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
          if (keys.indexOf(i) >= 0)
            continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i))
            continue;
          target[i] = obj[i];
        }
        return target;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var supportsCaptureOption = false;
      function setHasSupportToCaptureOption(hasSupport) {
        supportsCaptureOption = hasSupport;
      }
      try {
        addEventListener("test", null, Object.defineProperty({}, "capture", { get: function get() {
          setHasSupportToCaptureOption(true);
        } }));
      } catch (e) {
      }
      function getSafeEventHandlerOpts() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { capture: true };
        return supportsCaptureOption ? options : options.capture;
      }
      function getPosition(event) {
        if ("touches" in event) {
          var _event$touches$ = event.touches[0], pageX = _event$touches$.pageX, pageY = _event$touches$.pageY;
          return { x: pageX, y: pageY };
        }
        var screenX = event.screenX, screenY = event.screenY;
        return { x: screenX, y: screenY };
      }
      var ReactSwipe = function(_Component) {
        _inherits(ReactSwipe2, _Component);
        function ReactSwipe2() {
          var _ref;
          _classCallCheck(this, ReactSwipe2);
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _this = _possibleConstructorReturn(this, (_ref = ReactSwipe2.__proto__ || Object.getPrototypeOf(ReactSwipe2)).call.apply(_ref, [this].concat(args)));
          _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
          _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
          _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);
          _this._onMouseDown = _this._onMouseDown.bind(_this);
          _this._onMouseMove = _this._onMouseMove.bind(_this);
          _this._onMouseUp = _this._onMouseUp.bind(_this);
          _this._setSwiperRef = _this._setSwiperRef.bind(_this);
          return _this;
        }
        _createClass(ReactSwipe2, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            if (this.swiper) {
              this.swiper.addEventListener("touchmove", this._handleSwipeMove, getSafeEventHandlerOpts({
                capture: true,
                passive: false
              }));
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            if (this.swiper) {
              this.swiper.removeEventListener("touchmove", this._handleSwipeMove, getSafeEventHandlerOpts({
                capture: true,
                passive: false
              }));
            }
          }
        }, {
          key: "_onMouseDown",
          value: function _onMouseDown(event) {
            if (!this.props.allowMouseEvents) {
              return;
            }
            this.mouseDown = true;
            document.addEventListener("mouseup", this._onMouseUp);
            document.addEventListener("mousemove", this._onMouseMove);
            this._handleSwipeStart(event);
          }
        }, {
          key: "_onMouseMove",
          value: function _onMouseMove(event) {
            if (!this.mouseDown) {
              return;
            }
            this._handleSwipeMove(event);
          }
        }, {
          key: "_onMouseUp",
          value: function _onMouseUp(event) {
            this.mouseDown = false;
            document.removeEventListener("mouseup", this._onMouseUp);
            document.removeEventListener("mousemove", this._onMouseMove);
            this._handleSwipeEnd(event);
          }
        }, {
          key: "_handleSwipeStart",
          value: function _handleSwipeStart(event) {
            var _getPosition = getPosition(event), x = _getPosition.x, y = _getPosition.y;
            this.moveStart = { x, y };
            this.props.onSwipeStart(event);
          }
        }, {
          key: "_handleSwipeMove",
          value: function _handleSwipeMove(event) {
            if (!this.moveStart) {
              return;
            }
            var _getPosition2 = getPosition(event), x = _getPosition2.x, y = _getPosition2.y;
            var deltaX = x - this.moveStart.x;
            var deltaY = y - this.moveStart.y;
            this.moving = true;
            var shouldPreventDefault = this.props.onSwipeMove({
              x: deltaX,
              y: deltaY
            }, event);
            if (shouldPreventDefault && event.cancelable) {
              event.preventDefault();
            }
            this.movePosition = { deltaX, deltaY };
          }
        }, {
          key: "_handleSwipeEnd",
          value: function _handleSwipeEnd(event) {
            this.props.onSwipeEnd(event);
            var tolerance = this.props.tolerance;
            if (this.moving && this.movePosition) {
              if (this.movePosition.deltaX < -tolerance) {
                this.props.onSwipeLeft(1, event);
              } else if (this.movePosition.deltaX > tolerance) {
                this.props.onSwipeRight(1, event);
              }
              if (this.movePosition.deltaY < -tolerance) {
                this.props.onSwipeUp(1, event);
              } else if (this.movePosition.deltaY > tolerance) {
                this.props.onSwipeDown(1, event);
              }
            }
            this.moveStart = null;
            this.moving = false;
            this.movePosition = null;
          }
        }, {
          key: "_setSwiperRef",
          value: function _setSwiperRef(node) {
            this.swiper = node;
            this.props.innerRef(node);
          }
        }, {
          key: "render",
          value: function render() {
            var _props = this.props, tagName = _props.tagName, className = _props.className, style = _props.style, children = _props.children, allowMouseEvents = _props.allowMouseEvents, onSwipeUp = _props.onSwipeUp, onSwipeDown = _props.onSwipeDown, onSwipeLeft = _props.onSwipeLeft, onSwipeRight = _props.onSwipeRight, onSwipeStart = _props.onSwipeStart, onSwipeMove = _props.onSwipeMove, onSwipeEnd = _props.onSwipeEnd, innerRef = _props.innerRef, tolerance = _props.tolerance, props = _objectWithoutProperties(_props, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]);
            return _react2.default.createElement(
              this.props.tagName,
              _extends({
                ref: this._setSwiperRef,
                onMouseDown: this._onMouseDown,
                onTouchStart: this._handleSwipeStart,
                onTouchEnd: this._handleSwipeEnd,
                className,
                style
              }, props),
              children
            );
          }
        }]);
        return ReactSwipe2;
      }(_react.Component);
      ReactSwipe.displayName = "ReactSwipe";
      ReactSwipe.propTypes = {
        tagName: _propTypes2.default.string,
        className: _propTypes2.default.string,
        style: _propTypes2.default.object,
        children: _propTypes2.default.node,
        allowMouseEvents: _propTypes2.default.bool,
        onSwipeUp: _propTypes2.default.func,
        onSwipeDown: _propTypes2.default.func,
        onSwipeLeft: _propTypes2.default.func,
        onSwipeRight: _propTypes2.default.func,
        onSwipeStart: _propTypes2.default.func,
        onSwipeMove: _propTypes2.default.func,
        onSwipeEnd: _propTypes2.default.func,
        innerRef: _propTypes2.default.func,
        tolerance: _propTypes2.default.number.isRequired
      };
      ReactSwipe.defaultProps = {
        tagName: "div",
        allowMouseEvents: false,
        onSwipeUp: function onSwipeUp() {
        },
        onSwipeDown: function onSwipeDown() {
        },
        onSwipeLeft: function onSwipeLeft() {
        },
        onSwipeRight: function onSwipeRight() {
        },
        onSwipeStart: function onSwipeStart() {
        },
        onSwipeMove: function onSwipeMove() {
        },
        onSwipeEnd: function onSwipeEnd() {
        },
        innerRef: function innerRef() {
        },
        tolerance: 0
      };
      exports2.default = ReactSwipe;
    });
  }
});

// node_modules/react-easy-swipe/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-easy-swipe/lib/index.js"(exports) {
    (function(global, factory) {
      if (typeof define === "function" && define.amd) {
        define(["exports", "./react-swipe"], factory);
      } else if (typeof exports !== "undefined") {
        factory(exports, require_react_swipe());
      } else {
        var mod = {
          exports: {}
        };
        factory(mod.exports, global.reactSwipe);
        global.index = mod.exports;
      }
    })(exports, function(exports2, _reactSwipe) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      var _reactSwipe2 = _interopRequireDefault(_reactSwipe);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports2.default = _reactSwipe2.default;
    });
  }
});

// node_modules/react-responsive-carousel/lib/js/cssClasses.js
var require_cssClasses = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/cssClasses.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _classnames = _interopRequireDefault(require_classnames());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var _default = {
      ROOT: function ROOT(customClassName) {
        return (0, _classnames.default)(_defineProperty({
          "carousel-root": true
        }, customClassName || "", !!customClassName));
      },
      CAROUSEL: function CAROUSEL(isSlider) {
        return (0, _classnames.default)({
          carousel: true,
          "carousel-slider": isSlider
        });
      },
      WRAPPER: function WRAPPER(isSlider, axis) {
        return (0, _classnames.default)({
          "thumbs-wrapper": !isSlider,
          "slider-wrapper": isSlider,
          "axis-horizontal": axis === "horizontal",
          "axis-vertical": axis !== "horizontal"
        });
      },
      SLIDER: function SLIDER(isSlider, isSwiping) {
        return (0, _classnames.default)({
          thumbs: !isSlider,
          slider: isSlider,
          animated: !isSwiping
        });
      },
      ITEM: function ITEM(isSlider, selected, previous) {
        return (0, _classnames.default)({
          thumb: !isSlider,
          slide: isSlider,
          selected,
          previous
        });
      },
      ARROW_PREV: function ARROW_PREV(disabled) {
        return (0, _classnames.default)({
          "control-arrow control-prev": true,
          "control-disabled": disabled
        });
      },
      ARROW_NEXT: function ARROW_NEXT(disabled) {
        return (0, _classnames.default)({
          "control-arrow control-next": true,
          "control-disabled": disabled
        });
      },
      DOT: function DOT(selected) {
        return (0, _classnames.default)({
          dot: true,
          selected
        });
      }
    };
    exports.default = _default;
  }
});

// node_modules/react-responsive-carousel/lib/js/dimensions.js
var require_dimensions = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/dimensions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.outerWidth = void 0;
    var outerWidth = function outerWidth2(el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width += parseInt(style.marginLeft) + parseInt(style.marginRight);
      return width;
    };
    exports.outerWidth = outerWidth;
  }
});

// node_modules/react-responsive-carousel/lib/js/CSSTranslate.js
var require_CSSTranslate = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/CSSTranslate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = function _default2(position, metric, axis) {
      var positionPercent = position === 0 ? position : position + metric;
      var positionCss = axis === "horizontal" ? [positionPercent, 0, 0] : [0, positionPercent, 0];
      var transitionProp = "translate3d";
      var translatedPosition = "(" + positionCss.join(",") + ")";
      return transitionProp + translatedPosition;
    };
    exports.default = _default;
  }
});

// node_modules/react-responsive-carousel/lib/js/shims/window.js
var require_window = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/shims/window.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = function _default2() {
      return window;
    };
    exports.default = _default;
  }
});

// node_modules/react-responsive-carousel/lib/js/components/Thumbs.js
var require_Thumbs = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/components/Thumbs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _cssClasses = _interopRequireDefault(require_cssClasses());
    var _dimensions = require_dimensions();
    var _CSSTranslate = _interopRequireDefault(require_CSSTranslate());
    var _reactEasySwipe = _interopRequireDefault(require_lib());
    var _window = _interopRequireDefault(require_window());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
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
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var isKeyboardEvent = function isKeyboardEvent2(e) {
      return e.hasOwnProperty("key");
    };
    var Thumbs = /* @__PURE__ */ function(_Component) {
      _inherits(Thumbs2, _Component);
      var _super = _createSuper(Thumbs2);
      function Thumbs2(_props) {
        var _this;
        _classCallCheck(this, Thumbs2);
        _this = _super.call(this, _props);
        _defineProperty(_assertThisInitialized(_this), "itemsWrapperRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "itemsListRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "thumbsRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "setItemsWrapperRef", function(node) {
          _this.itemsWrapperRef = node;
        });
        _defineProperty(_assertThisInitialized(_this), "setItemsListRef", function(node) {
          _this.itemsListRef = node;
        });
        _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function(node, index) {
          if (!_this.thumbsRef) {
            _this.thumbsRef = [];
          }
          _this.thumbsRef[index] = node;
        });
        _defineProperty(_assertThisInitialized(_this), "updateSizes", function() {
          if (!_this.props.children || !_this.itemsWrapperRef || !_this.thumbsRef) {
            return;
          }
          var total = _react.Children.count(_this.props.children);
          var wrapperSize = _this.itemsWrapperRef.clientWidth;
          var itemSize = _this.props.thumbWidth ? _this.props.thumbWidth : (0, _dimensions.outerWidth)(_this.thumbsRef[0]);
          var visibleItems = Math.floor(wrapperSize / itemSize);
          var showArrows = visibleItems < total;
          var lastPosition = showArrows ? total - visibleItems : 0;
          _this.setState(function(_state, props) {
            return {
              itemSize,
              visibleItems,
              firstItem: showArrows ? _this.getFirstItem(props.selectedItem) : 0,
              lastPosition,
              showArrows
            };
          });
        });
        _defineProperty(_assertThisInitialized(_this), "handleClickItem", function(index, item, e) {
          if (!isKeyboardEvent(e) || e.key === "Enter") {
            var handler = _this.props.onSelectItem;
            if (typeof handler === "function") {
              handler(index, item);
            }
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function() {
          _this.setState({
            swiping: true
          });
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function() {
          _this.setState({
            swiping: false
          });
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function(delta) {
          var deltaX = delta.x;
          if (!_this.state.itemSize || !_this.itemsWrapperRef || !_this.state.visibleItems) {
            return false;
          }
          var leftBoundary = 0;
          var childrenLength = _react.Children.count(_this.props.children);
          var currentPosition = -(_this.state.firstItem * 100) / _this.state.visibleItems;
          var lastLeftItem = Math.max(childrenLength - _this.state.visibleItems, 0);
          var lastLeftBoundary = -lastLeftItem * 100 / _this.state.visibleItems;
          if (currentPosition === leftBoundary && deltaX > 0) {
            deltaX = 0;
          }
          if (currentPosition === lastLeftBoundary && deltaX < 0) {
            deltaX = 0;
          }
          var wrapperSize = _this.itemsWrapperRef.clientWidth;
          var position = currentPosition + 100 / (wrapperSize / deltaX);
          if (_this.itemsListRef) {
            ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(prop) {
              _this.itemsListRef.style[prop] = (0, _CSSTranslate.default)(position, "%", _this.props.axis);
            });
          }
          return true;
        });
        _defineProperty(_assertThisInitialized(_this), "slideRight", function(positions) {
          _this.moveTo(_this.state.firstItem - (typeof positions === "number" ? positions : 1));
        });
        _defineProperty(_assertThisInitialized(_this), "slideLeft", function(positions) {
          _this.moveTo(_this.state.firstItem + (typeof positions === "number" ? positions : 1));
        });
        _defineProperty(_assertThisInitialized(_this), "moveTo", function(position) {
          position = position < 0 ? 0 : position;
          position = position >= _this.state.lastPosition ? _this.state.lastPosition : position;
          _this.setState({
            firstItem: position
          });
        });
        _this.state = {
          selectedItem: _props.selectedItem,
          swiping: false,
          showArrows: false,
          firstItem: 0,
          visibleItems: 0,
          lastPosition: 0
        };
        return _this;
      }
      _createClass(Thumbs2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.setupThumbs();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (this.props.selectedItem !== this.state.selectedItem) {
            this.setState({
              selectedItem: this.props.selectedItem,
              firstItem: this.getFirstItem(this.props.selectedItem)
            });
          }
          if (this.props.children === prevProps.children) {
            return;
          }
          this.updateSizes();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.destroyThumbs();
        }
      }, {
        key: "setupThumbs",
        value: function setupThumbs() {
          (0, _window.default)().addEventListener("resize", this.updateSizes);
          (0, _window.default)().addEventListener("DOMContentLoaded", this.updateSizes);
          this.updateSizes();
        }
      }, {
        key: "destroyThumbs",
        value: function destroyThumbs() {
          (0, _window.default)().removeEventListener("resize", this.updateSizes);
          (0, _window.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
        }
      }, {
        key: "getFirstItem",
        value: function getFirstItem(selectedItem) {
          var firstItem = selectedItem;
          if (selectedItem >= this.state.lastPosition) {
            firstItem = this.state.lastPosition;
          }
          if (selectedItem < this.state.firstItem + this.state.visibleItems) {
            firstItem = this.state.firstItem;
          }
          if (selectedItem < this.state.firstItem) {
            firstItem = selectedItem;
          }
          return firstItem;
        }
      }, {
        key: "renderItems",
        value: function renderItems() {
          var _this2 = this;
          return this.props.children.map(function(img, index) {
            var itemClass = _cssClasses.default.ITEM(false, index === _this2.state.selectedItem);
            var thumbProps = {
              key: index,
              ref: function ref(e) {
                return _this2.setThumbsRef(e, index);
              },
              className: itemClass,
              onClick: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
              onKeyDown: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
              "aria-label": "".concat(_this2.props.labels.item, " ").concat(index + 1),
              style: {
                width: _this2.props.thumbWidth
              }
            };
            return /* @__PURE__ */ _react.default.createElement("li", _extends({}, thumbProps, {
              role: "button",
              tabIndex: 0
            }), img);
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;
          if (!this.props.children) {
            return null;
          }
          var isSwipeable = _react.Children.count(this.props.children) > 1;
          var hasPrev = this.state.showArrows && this.state.firstItem > 0;
          var hasNext = this.state.showArrows && this.state.firstItem < this.state.lastPosition;
          var itemListStyles = {};
          var currentPosition = -this.state.firstItem * (this.state.itemSize || 0);
          var transformProp = (0, _CSSTranslate.default)(currentPosition, "px", this.props.axis);
          var transitionTime = this.props.transitionTime + "ms";
          itemListStyles = {
            WebkitTransform: transformProp,
            MozTransform: transformProp,
            MsTransform: transformProp,
            OTransform: transformProp,
            transform: transformProp,
            msTransform: transformProp,
            WebkitTransitionDuration: transitionTime,
            MozTransitionDuration: transitionTime,
            MsTransitionDuration: transitionTime,
            OTransitionDuration: transitionTime,
            transitionDuration: transitionTime,
            msTransitionDuration: transitionTime
          };
          return /* @__PURE__ */ _react.default.createElement("div", {
            className: _cssClasses.default.CAROUSEL(false)
          }, /* @__PURE__ */ _react.default.createElement("div", {
            className: _cssClasses.default.WRAPPER(false),
            ref: this.setItemsWrapperRef
          }, /* @__PURE__ */ _react.default.createElement("button", {
            type: "button",
            className: _cssClasses.default.ARROW_PREV(!hasPrev),
            onClick: function onClick() {
              return _this3.slideRight();
            },
            "aria-label": this.props.labels.leftArrow
          }), isSwipeable ? /* @__PURE__ */ _react.default.createElement(_reactEasySwipe.default, {
            tagName: "ul",
            className: _cssClasses.default.SLIDER(false, this.state.swiping),
            onSwipeLeft: this.slideLeft,
            onSwipeRight: this.slideRight,
            onSwipeMove: this.onSwipeMove,
            onSwipeStart: this.onSwipeStart,
            onSwipeEnd: this.onSwipeEnd,
            style: itemListStyles,
            innerRef: this.setItemsListRef,
            allowMouseEvents: this.props.emulateTouch
          }, this.renderItems()) : /* @__PURE__ */ _react.default.createElement("ul", {
            className: _cssClasses.default.SLIDER(false, this.state.swiping),
            ref: function ref(node) {
              return _this3.setItemsListRef(node);
            },
            style: itemListStyles
          }, this.renderItems()), /* @__PURE__ */ _react.default.createElement("button", {
            type: "button",
            className: _cssClasses.default.ARROW_NEXT(!hasNext),
            onClick: function onClick() {
              return _this3.slideLeft();
            },
            "aria-label": this.props.labels.rightArrow
          })));
        }
      }]);
      return Thumbs2;
    }(_react.Component);
    exports.default = Thumbs;
    _defineProperty(Thumbs, "displayName", "Thumbs");
    _defineProperty(Thumbs, "defaultProps", {
      axis: "horizontal",
      labels: {
        leftArrow: "previous slide / item",
        rightArrow: "next slide / item",
        item: "slide item"
      },
      selectedItem: 0,
      thumbWidth: 80,
      transitionTime: 350
    });
  }
});

// node_modules/react-responsive-carousel/lib/js/shims/document.js
var require_document = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/shims/document.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = function _default2() {
      return document;
    };
    exports.default = _default;
  }
});

// node_modules/react-responsive-carousel/lib/js/components/Carousel/utils.js
var require_utils = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/components/Carousel/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.setPosition = exports.getPosition = exports.isKeyboardEvent = exports.defaultStatusFormatter = exports.noop = void 0;
    var _react = require_react();
    var _CSSTranslate = _interopRequireDefault(require_CSSTranslate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var noop = function noop2() {
    };
    exports.noop = noop;
    var defaultStatusFormatter = function defaultStatusFormatter2(current, total) {
      return "".concat(current, " of ").concat(total);
    };
    exports.defaultStatusFormatter = defaultStatusFormatter;
    var isKeyboardEvent = function isKeyboardEvent2(e) {
      return e ? e.hasOwnProperty("key") : false;
    };
    exports.isKeyboardEvent = isKeyboardEvent;
    var getPosition = function getPosition2(index, props) {
      if (props.infiniteLoop) {
        ++index;
      }
      if (index === 0) {
        return 0;
      }
      var childrenLength = _react.Children.count(props.children);
      if (props.centerMode && props.axis === "horizontal") {
        var currentPosition = -index * props.centerSlidePercentage;
        var lastPosition = childrenLength - 1;
        if (index && (index !== lastPosition || props.infiniteLoop)) {
          currentPosition += (100 - props.centerSlidePercentage) / 2;
        } else if (index === lastPosition) {
          currentPosition += 100 - props.centerSlidePercentage;
        }
        return currentPosition;
      }
      return -index * 100;
    };
    exports.getPosition = getPosition;
    var setPosition = function setPosition2(position, axis) {
      var style = {};
      ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(prop) {
        style[prop] = (0, _CSSTranslate.default)(position, "%", axis);
      });
      return style;
    };
    exports.setPosition = setPosition;
  }
});

// node_modules/react-responsive-carousel/lib/js/components/Carousel/animations.js
var require_animations = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/components/Carousel/animations.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.fadeAnimationHandler = exports.slideStopSwipingHandler = exports.slideSwipeAnimationHandler = exports.slideAnimationHandler = void 0;
    var _react = require_react();
    var _CSSTranslate = _interopRequireDefault(require_CSSTranslate());
    var _utils = require_utils();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var slideAnimationHandler = function slideAnimationHandler2(props, state) {
      var returnStyles = {};
      var selectedItem = state.selectedItem;
      var previousItem = selectedItem;
      var lastPosition = _react.Children.count(props.children) - 1;
      var needClonedSlide = props.infiniteLoop && (selectedItem < 0 || selectedItem > lastPosition);
      if (needClonedSlide) {
        if (previousItem < 0) {
          if (props.centerMode && props.centerSlidePercentage && props.axis === "horizontal") {
            returnStyles.itemListStyle = (0, _utils.setPosition)(-(lastPosition + 2) * props.centerSlidePercentage - (100 - props.centerSlidePercentage) / 2, props.axis);
          } else {
            returnStyles.itemListStyle = (0, _utils.setPosition)(-(lastPosition + 2) * 100, props.axis);
          }
        } else if (previousItem > lastPosition) {
          returnStyles.itemListStyle = (0, _utils.setPosition)(0, props.axis);
        }
        return returnStyles;
      }
      var currentPosition = (0, _utils.getPosition)(selectedItem, props);
      var transformProp = (0, _CSSTranslate.default)(currentPosition, "%", props.axis);
      var transitionTime = props.transitionTime + "ms";
      returnStyles.itemListStyle = {
        WebkitTransform: transformProp,
        msTransform: transformProp,
        OTransform: transformProp,
        transform: transformProp
      };
      if (!state.swiping) {
        returnStyles.itemListStyle = _objectSpread(_objectSpread({}, returnStyles.itemListStyle), {}, {
          WebkitTransitionDuration: transitionTime,
          MozTransitionDuration: transitionTime,
          OTransitionDuration: transitionTime,
          transitionDuration: transitionTime,
          msTransitionDuration: transitionTime
        });
      }
      return returnStyles;
    };
    exports.slideAnimationHandler = slideAnimationHandler;
    var slideSwipeAnimationHandler = function slideSwipeAnimationHandler2(delta, props, state, setState) {
      var returnStyles = {};
      var isHorizontal = props.axis === "horizontal";
      var childrenLength = _react.Children.count(props.children);
      var initialBoundry = 0;
      var currentPosition = (0, _utils.getPosition)(state.selectedItem, props);
      var finalBoundry = props.infiniteLoop ? (0, _utils.getPosition)(childrenLength - 1, props) - 100 : (0, _utils.getPosition)(childrenLength - 1, props);
      var axisDelta = isHorizontal ? delta.x : delta.y;
      var handledDelta = axisDelta;
      if (currentPosition === initialBoundry && axisDelta > 0) {
        handledDelta = 0;
      }
      if (currentPosition === finalBoundry && axisDelta < 0) {
        handledDelta = 0;
      }
      var position = currentPosition + 100 / (state.itemSize / handledDelta);
      var hasMoved = Math.abs(axisDelta) > props.swipeScrollTolerance;
      if (props.infiniteLoop && hasMoved) {
        if (state.selectedItem === 0 && position > -100) {
          position -= childrenLength * 100;
        } else if (state.selectedItem === childrenLength - 1 && position < -childrenLength * 100) {
          position += childrenLength * 100;
        }
      }
      if (!props.preventMovementUntilSwipeScrollTolerance || hasMoved || state.swipeMovementStarted) {
        if (!state.swipeMovementStarted) {
          setState({
            swipeMovementStarted: true
          });
        }
        returnStyles.itemListStyle = (0, _utils.setPosition)(position, props.axis);
      }
      if (hasMoved && !state.cancelClick) {
        setState({
          cancelClick: true
        });
      }
      return returnStyles;
    };
    exports.slideSwipeAnimationHandler = slideSwipeAnimationHandler;
    var slideStopSwipingHandler = function slideStopSwipingHandler2(props, state) {
      var currentPosition = (0, _utils.getPosition)(state.selectedItem, props);
      var itemListStyle = (0, _utils.setPosition)(currentPosition, props.axis);
      return {
        itemListStyle
      };
    };
    exports.slideStopSwipingHandler = slideStopSwipingHandler;
    var fadeAnimationHandler = function fadeAnimationHandler2(props, state) {
      var transitionTime = props.transitionTime + "ms";
      var transitionTimingFunction = "ease-in-out";
      var slideStyle = {
        position: "absolute",
        display: "block",
        zIndex: -2,
        minHeight: "100%",
        opacity: 0,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        transitionTimingFunction,
        msTransitionTimingFunction: transitionTimingFunction,
        MozTransitionTimingFunction: transitionTimingFunction,
        WebkitTransitionTimingFunction: transitionTimingFunction,
        OTransitionTimingFunction: transitionTimingFunction
      };
      if (!state.swiping) {
        slideStyle = _objectSpread(_objectSpread({}, slideStyle), {}, {
          WebkitTransitionDuration: transitionTime,
          MozTransitionDuration: transitionTime,
          OTransitionDuration: transitionTime,
          transitionDuration: transitionTime,
          msTransitionDuration: transitionTime
        });
      }
      return {
        slideStyle,
        selectedStyle: _objectSpread(_objectSpread({}, slideStyle), {}, {
          opacity: 1,
          position: "relative"
        }),
        prevStyle: _objectSpread({}, slideStyle)
      };
    };
    exports.fadeAnimationHandler = fadeAnimationHandler;
  }
});

// node_modules/react-responsive-carousel/lib/js/components/Carousel/index.js
var require_Carousel = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/components/Carousel/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _reactEasySwipe = _interopRequireDefault(require_lib());
    var _cssClasses = _interopRequireDefault(require_cssClasses());
    var _Thumbs = _interopRequireDefault(require_Thumbs());
    var _document = _interopRequireDefault(require_document());
    var _window = _interopRequireDefault(require_window());
    var _utils = require_utils();
    var _animations = require_animations();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
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
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var Carousel2 = /* @__PURE__ */ function(_React$Component) {
      _inherits(Carousel3, _React$Component);
      var _super = _createSuper(Carousel3);
      function Carousel3(props) {
        var _this;
        _classCallCheck(this, Carousel3);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized(_this), "thumbsRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "carouselWrapperRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "listRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "itemsRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "timer", void 0);
        _defineProperty(_assertThisInitialized(_this), "animationHandler", void 0);
        _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function(node) {
          _this.thumbsRef = node;
        });
        _defineProperty(_assertThisInitialized(_this), "setCarouselWrapperRef", function(node) {
          _this.carouselWrapperRef = node;
        });
        _defineProperty(_assertThisInitialized(_this), "setListRef", function(node) {
          _this.listRef = node;
        });
        _defineProperty(_assertThisInitialized(_this), "setItemsRef", function(node, index) {
          if (!_this.itemsRef) {
            _this.itemsRef = [];
          }
          _this.itemsRef[index] = node;
        });
        _defineProperty(_assertThisInitialized(_this), "autoPlay", function() {
          if (_react.Children.count(_this.props.children) <= 1) {
            return;
          }
          _this.clearAutoPlay();
          if (!_this.props.autoPlay) {
            return;
          }
          _this.timer = setTimeout(function() {
            _this.increment();
          }, _this.props.interval);
        });
        _defineProperty(_assertThisInitialized(_this), "clearAutoPlay", function() {
          if (_this.timer)
            clearTimeout(_this.timer);
        });
        _defineProperty(_assertThisInitialized(_this), "resetAutoPlay", function() {
          _this.clearAutoPlay();
          _this.autoPlay();
        });
        _defineProperty(_assertThisInitialized(_this), "stopOnHover", function() {
          _this.setState({
            isMouseEntered: true
          }, _this.clearAutoPlay);
        });
        _defineProperty(_assertThisInitialized(_this), "startOnLeave", function() {
          _this.setState({
            isMouseEntered: false
          }, _this.autoPlay);
        });
        _defineProperty(_assertThisInitialized(_this), "isFocusWithinTheCarousel", function() {
          if (!_this.carouselWrapperRef) {
            return false;
          }
          if ((0, _document.default)().activeElement === _this.carouselWrapperRef || _this.carouselWrapperRef.contains((0, _document.default)().activeElement)) {
            return true;
          }
          return false;
        });
        _defineProperty(_assertThisInitialized(_this), "navigateWithKeyboard", function(e) {
          if (!_this.isFocusWithinTheCarousel()) {
            return;
          }
          var axis = _this.props.axis;
          var isHorizontal = axis === "horizontal";
          var keyNames = {
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            ArrowLeft: 37
          };
          var nextKey = isHorizontal ? keyNames.ArrowRight : keyNames.ArrowDown;
          var prevKey = isHorizontal ? keyNames.ArrowLeft : keyNames.ArrowUp;
          if (nextKey === e.keyCode) {
            _this.increment();
          } else if (prevKey === e.keyCode) {
            _this.decrement();
          }
        });
        _defineProperty(_assertThisInitialized(_this), "updateSizes", function() {
          if (!_this.state.initialized || !_this.itemsRef || _this.itemsRef.length === 0) {
            return;
          }
          var isHorizontal = _this.props.axis === "horizontal";
          var firstItem = _this.itemsRef[0];
          if (!firstItem) {
            return;
          }
          var itemSize = isHorizontal ? firstItem.clientWidth : firstItem.clientHeight;
          _this.setState({
            itemSize
          });
          if (_this.thumbsRef) {
            _this.thumbsRef.updateSizes();
          }
        });
        _defineProperty(_assertThisInitialized(_this), "setMountState", function() {
          _this.setState({
            hasMount: true
          });
          _this.updateSizes();
        });
        _defineProperty(_assertThisInitialized(_this), "handleClickItem", function(index, item) {
          if (_react.Children.count(_this.props.children) === 0) {
            return;
          }
          if (_this.state.cancelClick) {
            _this.setState({
              cancelClick: false
            });
            return;
          }
          _this.props.onClickItem(index, item);
          if (index !== _this.state.selectedItem) {
            _this.setState({
              selectedItem: index
            });
          }
        });
        _defineProperty(_assertThisInitialized(_this), "handleOnChange", function(index, item) {
          if (_react.Children.count(_this.props.children) <= 1) {
            return;
          }
          _this.props.onChange(index, item);
        });
        _defineProperty(_assertThisInitialized(_this), "handleClickThumb", function(index, item) {
          _this.props.onClickThumb(index, item);
          _this.moveTo(index);
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function(event) {
          _this.setState({
            swiping: true
          });
          _this.props.onSwipeStart(event);
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function(event) {
          _this.setState({
            swiping: false,
            cancelClick: false,
            swipeMovementStarted: false
          });
          _this.props.onSwipeEnd(event);
          _this.clearAutoPlay();
          if (_this.state.autoPlay) {
            _this.autoPlay();
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function(delta, event) {
          _this.props.onSwipeMove(event);
          var animationHandlerResponse = _this.props.swipeAnimationHandler(delta, _this.props, _this.state, _this.setState.bind(_assertThisInitialized(_this)));
          _this.setState(_objectSpread({}, animationHandlerResponse));
          return !!Object.keys(animationHandlerResponse).length;
        });
        _defineProperty(_assertThisInitialized(_this), "decrement", function() {
          var positions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
          _this.moveTo(_this.state.selectedItem - (typeof positions === "number" ? positions : 1));
        });
        _defineProperty(_assertThisInitialized(_this), "increment", function() {
          var positions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
          _this.moveTo(_this.state.selectedItem + (typeof positions === "number" ? positions : 1));
        });
        _defineProperty(_assertThisInitialized(_this), "moveTo", function(position) {
          if (typeof position !== "number") {
            return;
          }
          var lastPosition = _react.Children.count(_this.props.children) - 1;
          if (position < 0) {
            position = _this.props.infiniteLoop ? lastPosition : 0;
          }
          if (position > lastPosition) {
            position = _this.props.infiniteLoop ? 0 : lastPosition;
          }
          _this.selectItem({
            // if it's not a slider, we don't need to set position here
            selectedItem: position
          });
          if (_this.state.autoPlay && _this.state.isMouseEntered === false) {
            _this.resetAutoPlay();
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onClickNext", function() {
          _this.increment(1);
        });
        _defineProperty(_assertThisInitialized(_this), "onClickPrev", function() {
          _this.decrement(1);
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeForward", function() {
          _this.increment(1);
          if (_this.props.emulateTouch) {
            _this.setState({
              cancelClick: true
            });
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeBackwards", function() {
          _this.decrement(1);
          if (_this.props.emulateTouch) {
            _this.setState({
              cancelClick: true
            });
          }
        });
        _defineProperty(_assertThisInitialized(_this), "changeItem", function(newIndex) {
          return function(e) {
            if (!(0, _utils.isKeyboardEvent)(e) || e.key === "Enter") {
              _this.moveTo(newIndex);
            }
          };
        });
        _defineProperty(_assertThisInitialized(_this), "selectItem", function(state) {
          _this.setState(_objectSpread({
            previousItem: _this.state.selectedItem
          }, state), function() {
            _this.setState(_this.animationHandler(_this.props, _this.state));
          });
          _this.handleOnChange(state.selectedItem, _react.Children.toArray(_this.props.children)[state.selectedItem]);
        });
        _defineProperty(_assertThisInitialized(_this), "getInitialImage", function() {
          var selectedItem = _this.props.selectedItem;
          var item = _this.itemsRef && _this.itemsRef[selectedItem];
          var images = item && item.getElementsByTagName("img") || [];
          return images[0];
        });
        _defineProperty(_assertThisInitialized(_this), "getVariableItemHeight", function(position) {
          var item = _this.itemsRef && _this.itemsRef[position];
          if (_this.state.hasMount && item && item.children.length) {
            var slideImages = item.children[0].getElementsByTagName("img") || [];
            if (slideImages.length > 0) {
              var image = slideImages[0];
              if (!image.complete) {
                var onImageLoad = function onImageLoad2() {
                  _this.forceUpdate();
                  image.removeEventListener("load", onImageLoad2);
                };
                image.addEventListener("load", onImageLoad);
              }
            }
            var displayItem = slideImages[0] || item.children[0];
            var height = displayItem.clientHeight;
            return height > 0 ? height : null;
          }
          return null;
        });
        var initState = {
          initialized: false,
          previousItem: props.selectedItem,
          selectedItem: props.selectedItem,
          hasMount: false,
          isMouseEntered: false,
          autoPlay: props.autoPlay,
          swiping: false,
          swipeMovementStarted: false,
          cancelClick: false,
          itemSize: 1,
          itemListStyle: {},
          slideStyle: {},
          selectedStyle: {},
          prevStyle: {}
        };
        _this.animationHandler = typeof props.animationHandler === "function" && props.animationHandler || props.animationHandler === "fade" && _animations.fadeAnimationHandler || _animations.slideAnimationHandler;
        _this.state = _objectSpread(_objectSpread({}, initState), _this.animationHandler(props, initState));
        return _this;
      }
      _createClass(Carousel3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (!this.props.children) {
            return;
          }
          this.setupCarousel();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          if (!prevProps.children && this.props.children && !this.state.initialized) {
            this.setupCarousel();
          }
          if (!prevProps.autoFocus && this.props.autoFocus) {
            this.forceFocus();
          }
          if (prevState.swiping && !this.state.swiping) {
            this.setState(_objectSpread({}, this.props.stopSwipingHandler(this.props, this.state)));
          }
          if (prevProps.selectedItem !== this.props.selectedItem || prevProps.centerMode !== this.props.centerMode) {
            this.updateSizes();
            this.moveTo(this.props.selectedItem);
          }
          if (prevProps.autoPlay !== this.props.autoPlay) {
            if (this.props.autoPlay) {
              this.setupAutoPlay();
            } else {
              this.destroyAutoPlay();
            }
            this.setState({
              autoPlay: this.props.autoPlay
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.destroyCarousel();
        }
      }, {
        key: "setupCarousel",
        value: function setupCarousel() {
          var _this2 = this;
          this.bindEvents();
          if (this.state.autoPlay && _react.Children.count(this.props.children) > 1) {
            this.setupAutoPlay();
          }
          if (this.props.autoFocus) {
            this.forceFocus();
          }
          this.setState({
            initialized: true
          }, function() {
            var initialImage = _this2.getInitialImage();
            if (initialImage && !initialImage.complete) {
              initialImage.addEventListener("load", _this2.setMountState);
            } else {
              _this2.setMountState();
            }
          });
        }
      }, {
        key: "destroyCarousel",
        value: function destroyCarousel() {
          if (this.state.initialized) {
            this.unbindEvents();
            this.destroyAutoPlay();
          }
        }
      }, {
        key: "setupAutoPlay",
        value: function setupAutoPlay() {
          this.autoPlay();
          var carouselWrapper = this.carouselWrapperRef;
          if (this.props.stopOnHover && carouselWrapper) {
            carouselWrapper.addEventListener("mouseenter", this.stopOnHover);
            carouselWrapper.addEventListener("mouseleave", this.startOnLeave);
          }
        }
      }, {
        key: "destroyAutoPlay",
        value: function destroyAutoPlay() {
          this.clearAutoPlay();
          var carouselWrapper = this.carouselWrapperRef;
          if (this.props.stopOnHover && carouselWrapper) {
            carouselWrapper.removeEventListener("mouseenter", this.stopOnHover);
            carouselWrapper.removeEventListener("mouseleave", this.startOnLeave);
          }
        }
      }, {
        key: "bindEvents",
        value: function bindEvents() {
          (0, _window.default)().addEventListener("resize", this.updateSizes);
          (0, _window.default)().addEventListener("DOMContentLoaded", this.updateSizes);
          if (this.props.useKeyboardArrows) {
            (0, _document.default)().addEventListener("keydown", this.navigateWithKeyboard);
          }
        }
      }, {
        key: "unbindEvents",
        value: function unbindEvents() {
          (0, _window.default)().removeEventListener("resize", this.updateSizes);
          (0, _window.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
          var initialImage = this.getInitialImage();
          if (initialImage) {
            initialImage.removeEventListener("load", this.setMountState);
          }
          if (this.props.useKeyboardArrows) {
            (0, _document.default)().removeEventListener("keydown", this.navigateWithKeyboard);
          }
        }
      }, {
        key: "forceFocus",
        value: function forceFocus() {
          var _this$carouselWrapper;
          (_this$carouselWrapper = this.carouselWrapperRef) === null || _this$carouselWrapper === void 0 ? void 0 : _this$carouselWrapper.focus();
        }
      }, {
        key: "renderItems",
        value: function renderItems(isClone) {
          var _this3 = this;
          if (!this.props.children) {
            return [];
          }
          return _react.Children.map(this.props.children, function(item, index) {
            var isSelected = index === _this3.state.selectedItem;
            var isPrevious = index === _this3.state.previousItem;
            var style = isSelected && _this3.state.selectedStyle || isPrevious && _this3.state.prevStyle || _this3.state.slideStyle || {};
            if (_this3.props.centerMode && _this3.props.axis === "horizontal") {
              style = _objectSpread(_objectSpread({}, style), {}, {
                minWidth: _this3.props.centerSlidePercentage + "%"
              });
            }
            if (_this3.state.swiping && _this3.state.swipeMovementStarted) {
              style = _objectSpread(_objectSpread({}, style), {}, {
                pointerEvents: "none"
              });
            }
            var slideProps = {
              ref: function ref(e) {
                return _this3.setItemsRef(e, index);
              },
              key: "itemKey" + index + (isClone ? "clone" : ""),
              className: _cssClasses.default.ITEM(true, index === _this3.state.selectedItem, index === _this3.state.previousItem),
              onClick: _this3.handleClickItem.bind(_this3, index, item),
              style
            };
            return /* @__PURE__ */ _react.default.createElement("li", slideProps, _this3.props.renderItem(item, {
              isSelected: index === _this3.state.selectedItem,
              isPrevious: index === _this3.state.previousItem
            }));
          });
        }
      }, {
        key: "renderControls",
        value: function renderControls() {
          var _this4 = this;
          var _this$props = this.props, showIndicators = _this$props.showIndicators, labels = _this$props.labels, renderIndicator = _this$props.renderIndicator, children = _this$props.children;
          if (!showIndicators) {
            return null;
          }
          return /* @__PURE__ */ _react.default.createElement("ul", {
            className: "control-dots"
          }, _react.Children.map(children, function(_, index) {
            return renderIndicator && renderIndicator(_this4.changeItem(index), index === _this4.state.selectedItem, index, labels.item);
          }));
        }
      }, {
        key: "renderStatus",
        value: function renderStatus() {
          if (!this.props.showStatus) {
            return null;
          }
          return /* @__PURE__ */ _react.default.createElement("p", {
            className: "carousel-status"
          }, this.props.statusFormatter(this.state.selectedItem + 1, _react.Children.count(this.props.children)));
        }
      }, {
        key: "renderThumbs",
        value: function renderThumbs() {
          if (!this.props.showThumbs || !this.props.children || _react.Children.count(this.props.children) === 0) {
            return null;
          }
          return /* @__PURE__ */ _react.default.createElement(_Thumbs.default, {
            ref: this.setThumbsRef,
            onSelectItem: this.handleClickThumb,
            selectedItem: this.state.selectedItem,
            transitionTime: this.props.transitionTime,
            thumbWidth: this.props.thumbWidth,
            labels: this.props.labels,
            emulateTouch: this.props.emulateTouch
          }, this.props.renderThumbs(this.props.children));
        }
      }, {
        key: "render",
        value: function render() {
          var _this5 = this;
          if (!this.props.children || _react.Children.count(this.props.children) === 0) {
            return null;
          }
          var isSwipeable = this.props.swipeable && _react.Children.count(this.props.children) > 1;
          var isHorizontal = this.props.axis === "horizontal";
          var canShowArrows = this.props.showArrows && _react.Children.count(this.props.children) > 1;
          var hasPrev = canShowArrows && (this.state.selectedItem > 0 || this.props.infiniteLoop) || false;
          var hasNext = canShowArrows && (this.state.selectedItem < _react.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || false;
          var itemsClone = this.renderItems(true);
          var firstClone = itemsClone.shift();
          var lastClone = itemsClone.pop();
          var swiperProps = {
            className: _cssClasses.default.SLIDER(true, this.state.swiping),
            onSwipeMove: this.onSwipeMove,
            onSwipeStart: this.onSwipeStart,
            onSwipeEnd: this.onSwipeEnd,
            style: this.state.itemListStyle,
            tolerance: this.props.swipeScrollTolerance
          };
          var containerStyles = {};
          if (isHorizontal) {
            swiperProps.onSwipeLeft = this.onSwipeForward;
            swiperProps.onSwipeRight = this.onSwipeBackwards;
            if (this.props.dynamicHeight) {
              var itemHeight = this.getVariableItemHeight(this.state.selectedItem);
              containerStyles.height = itemHeight || "auto";
            }
          } else {
            swiperProps.onSwipeUp = this.props.verticalSwipe === "natural" ? this.onSwipeBackwards : this.onSwipeForward;
            swiperProps.onSwipeDown = this.props.verticalSwipe === "natural" ? this.onSwipeForward : this.onSwipeBackwards;
            swiperProps.style = _objectSpread(_objectSpread({}, swiperProps.style), {}, {
              height: this.state.itemSize
            });
            containerStyles.height = this.state.itemSize;
          }
          return /* @__PURE__ */ _react.default.createElement("div", {
            "aria-label": this.props.ariaLabel,
            className: _cssClasses.default.ROOT(this.props.className),
            ref: this.setCarouselWrapperRef,
            tabIndex: this.props.useKeyboardArrows ? 0 : void 0
          }, /* @__PURE__ */ _react.default.createElement("div", {
            className: _cssClasses.default.CAROUSEL(true),
            style: {
              width: this.props.width
            }
          }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, hasPrev, this.props.labels.leftArrow), /* @__PURE__ */ _react.default.createElement("div", {
            className: _cssClasses.default.WRAPPER(true, this.props.axis),
            style: containerStyles
          }, isSwipeable ? /* @__PURE__ */ _react.default.createElement(_reactEasySwipe.default, _extends({
            tagName: "ul",
            innerRef: this.setListRef
          }, swiperProps, {
            allowMouseEvents: this.props.emulateTouch
          }), this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone) : /* @__PURE__ */ _react.default.createElement("ul", {
            className: _cssClasses.default.SLIDER(true, this.state.swiping),
            ref: function ref(node) {
              return _this5.setListRef(node);
            },
            style: this.state.itemListStyle || {}
          }, this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone)), this.props.renderArrowNext(this.onClickNext, hasNext, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
        }
      }]);
      return Carousel3;
    }(_react.default.Component);
    exports.default = Carousel2;
    _defineProperty(Carousel2, "displayName", "Carousel");
    _defineProperty(Carousel2, "defaultProps", {
      ariaLabel: void 0,
      axis: "horizontal",
      centerSlidePercentage: 80,
      interval: 3e3,
      labels: {
        leftArrow: "previous slide / item",
        rightArrow: "next slide / item",
        item: "slide item"
      },
      onClickItem: _utils.noop,
      onClickThumb: _utils.noop,
      onChange: _utils.noop,
      onSwipeStart: function onSwipeStart() {
      },
      onSwipeEnd: function onSwipeEnd() {
      },
      onSwipeMove: function onSwipeMove() {
        return false;
      },
      preventMovementUntilSwipeScrollTolerance: false,
      renderArrowPrev: function renderArrowPrev(onClickHandler, hasPrev, label) {
        return /* @__PURE__ */ _react.default.createElement("button", {
          type: "button",
          "aria-label": label,
          className: _cssClasses.default.ARROW_PREV(!hasPrev),
          onClick: onClickHandler
        });
      },
      renderArrowNext: function renderArrowNext(onClickHandler, hasNext, label) {
        return /* @__PURE__ */ _react.default.createElement("button", {
          type: "button",
          "aria-label": label,
          className: _cssClasses.default.ARROW_NEXT(!hasNext),
          onClick: onClickHandler
        });
      },
      renderIndicator: function renderIndicator(onClickHandler, isSelected, index, label) {
        return /* @__PURE__ */ _react.default.createElement("li", {
          className: _cssClasses.default.DOT(isSelected),
          onClick: onClickHandler,
          onKeyDown: onClickHandler,
          value: index,
          key: index,
          role: "button",
          tabIndex: 0,
          "aria-label": "".concat(label, " ").concat(index + 1)
        });
      },
      renderItem: function renderItem(item) {
        return item;
      },
      renderThumbs: function renderThumbs(children) {
        var images = _react.Children.map(children, function(item) {
          var img = item;
          if (item.type !== "img") {
            img = _react.Children.toArray(item.props.children).find(function(children2) {
              return children2.type === "img";
            });
          }
          if (!img) {
            return void 0;
          }
          return img;
        });
        if (images.filter(function(image) {
          return image;
        }).length === 0) {
          console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md");
          return [];
        }
        return images;
      },
      statusFormatter: _utils.defaultStatusFormatter,
      selectedItem: 0,
      showArrows: true,
      showIndicators: true,
      showStatus: true,
      showThumbs: true,
      stopOnHover: true,
      swipeScrollTolerance: 5,
      swipeable: true,
      transitionTime: 350,
      verticalSwipe: "standard",
      width: "100%",
      animationHandler: "slide",
      swipeAnimationHandler: _animations.slideSwipeAnimationHandler,
      stopSwipingHandler: _animations.slideStopSwipingHandler
    });
  }
});

// node_modules/react-responsive-carousel/lib/js/components/Carousel/types.js
var require_types = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/components/Carousel/types.js"() {
    "use strict";
  }
});

// node_modules/react-responsive-carousel/lib/js/index.js
var require_js = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Carousel", {
      enumerable: true,
      get: function get() {
        return _Carousel.default;
      }
    });
    Object.defineProperty(exports, "CarouselProps", {
      enumerable: true,
      get: function get() {
        return _types.CarouselProps;
      }
    });
    Object.defineProperty(exports, "Thumbs", {
      enumerable: true,
      get: function get() {
        return _Thumbs.default;
      }
    });
    var _Carousel = _interopRequireDefault(require_Carousel());
    var _types = require_types();
    var _Thumbs = _interopRequireDefault(require_Thumbs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// app/routes/apps/integrations/app-detail/route.jsx
var import_react3 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// app/routes/apps/integrations/app-detail/Header.jsx
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/integrations/app-detail/Header.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/integrations/app-detail/Header.jsx"
  );
  import.meta.hot.lastModified = "1732600247943.995";
}
var Header = ({
  toggleSidebar,
  show
}) => {
  _s();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "integrations-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "btn-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_left_default, {}, void 0, false, {
        fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
        lineNumber: 41,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
        lineNumber: 40,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
        lineNumber: 39,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "v-separator d-sm-inline-block d-none" }, void 0, false, {
        fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { className: "ms-1 ms-sm-0", "aria-label": "breadcrumb", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Breadcrumb_default, { className: "mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Breadcrumb_default.Item, { href: "#", children: "All Apps" }, void 0, false, {
          fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
          lineNumber: 48,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Breadcrumb_default.Item, { children: "Popular" }, void 0, false, {
          fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
          lineNumber: 49,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Breadcrumb_default.Item, { active: true, children: "Kickstarter" }, void 0, false, {
          fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
          lineNumber: 50,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
        lineNumber: 47,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
        lineNumber: 46,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "integrations-options-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none", onClick: () => dispatch({
      type: "top_nav_toggle"
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: states.layoutState.topNavCollapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_down_default, {}, void 0, false, {
      fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
      lineNumber: 61,
      columnNumber: 70
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_up_default, {}, void 0, false, {
      fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
      lineNumber: 61,
      columnNumber: 88
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
      lineNumber: 60,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
      lineNumber: 59,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
      lineNumber: 58,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
      lineNumber: 55,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("hk-sidebar-togglable", {
      "active": !show
    }), onClick: toggleSidebar }, void 0, false, {
      fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
      lineNumber: 67,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/integrations/app-detail/Header.jsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
};
_s(Header, "OVdtiISsix2HOQFhIOw6MKqd+SU=", false, function() {
  return [useGlobalStateContext];
});
_c = Header;
var Header_default = Header;
var _c;
$RefreshReg$(_c, "Header");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/integrations/app-detail/Body.jsx
var import_react = __toESM(require_react(), 1);
var import_react_simple_star_rating2 = __toESM(require_dist(), 1);

// app/routes/apps/integrations/app-detail/ReviewModal.jsx
var import_react_simple_star_rating = __toESM(require_dist(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/integrations/app-detail/ReviewModal.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/integrations/app-detail/ReviewModal.jsx"
  );
  import.meta.hot.lastModified = "1732600247944.425";
}
var ReviewModal = ({
  show,
  closeModal
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default, { centered: true, show, id: "add_new_review", onHide: closeModal, className: "add-new-task", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Body, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: closeModal, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
        fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
        lineNumber: 30,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
        lineNumber: 29,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h5", { className: "mb-4", children: "Write a review" }, void 0, false, {
        fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
        lineNumber: 32,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { sm: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { md: 12, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: "Your rating" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
            lineNumber: 37,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react_simple_star_rating.Rating, { initialValue: 1, allowFraction: true, size: "20", className: "d-flex align-items-center me-2" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
            lineNumber: 39,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
            lineNumber: 38,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
          lineNumber: 36,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: "Reason Line" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
            lineNumber: 43,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Select, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 1, children: "Design Quality" }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
              lineNumber: 45,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 2, children: "Customer Support" }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
              lineNumber: 46,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
            lineNumber: 44,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
          lineNumber: 42,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "form-label-group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: "Comments" }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
              lineNumber: 51,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("small", { className: "text-muted", children: "2000" }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
              lineNumber: 52,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
            lineNumber: 50,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { as: "textarea", rows: 3, placeholder: "Please describe the reason for your rating" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
            lineNumber: 54,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
          lineNumber: 49,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
        lineNumber: 35,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
        lineNumber: 34,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
        lineNumber: 33,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
      lineNumber: 28,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Footer, { className: "align-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "secondary", onClick: closeModal, children: "Discard" }, void 0, false, {
        fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "primary", children: "Send Review" }, void 0, false, {
        fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
        lineNumber: 62,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
      lineNumber: 60,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/integrations/app-detail/ReviewModal.jsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
};
_c2 = ReviewModal;
var ReviewModal_default = ReviewModal;
var _c2;
$RefreshReg$(_c2, "ReviewModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/integrations/app-detail/Body.jsx
var import_react_responsive_carousel = __toESM(require_js(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/integrations/app-detail/Body.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/integrations/app-detail/Body.jsx"
  );
  import.meta.hot.lastModified = "1732600247943.474";
}
var Body = () => {
  _s2();
  const [showReviewModal, setShowReviewModal] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "integrations-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container_default, { className: "container mt-md-7 mt-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Row_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xxl: 8, lg: 7, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap bg-success-light-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: symbol_avatar_15_default, alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 64,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 63,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 62,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 61,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "hd-bold mb-0", children: "Kickstarter" }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 69,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "by Hencework" }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 70,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center mt-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_simple_star_rating2.Rating, { initialValue: 3, readonly: true, size: "20", className: "d-flex align-items-center me-2" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 74,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "3,123" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 75,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 72,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-sm-flex align-items-center d-none", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "opacity-15 mx-2", children: "\u25CF" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 80,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "d-flex align-items-center fs-8", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-1 text-primary" }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 81,
                    columnNumber: 98
                  }, this),
                  "15M Downloads"
                ] }, void 0, true, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 81,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 79,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 71,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 68,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 60,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 59,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xxl: 4, lg: 5, className: "mt-lg-0 mt-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "primary", className: "btn-block", children: "Install" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 88,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex mt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "light", size: "sm", className: "btn-block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(share_default, {}, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 93,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 92,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 91,
                columnNumber: 47
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Share" }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 96,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 91,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 90,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "light", size: "sm", className: "btn-block ms-2 mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(bookmark_default, {}, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 102,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 101,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 100,
                columnNumber: 47
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Bookmark" }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 105,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 100,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 99,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 89,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 87,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
        lineNumber: 58,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "col-xxl-8 col-lg-7", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "product-detail-slider", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_responsive_carousel.Carousel, { showArrows: false, showIndicators: false, showStatus: false, emulateTouch: true, showThumbs: true, className: "mt-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { alt: "slide1", src: slide1_default }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 117,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 116,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { alt: "slide2", src: slide2_default }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 120,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 119,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { alt: "slide3", src: slide3_default }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 123,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 122,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { alt: "slide4", src: slide4_default }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 126,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 125,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 115,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 113,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "separator" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 131,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tab_default.Container, { defaultActiveKey: "tabit1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { variant: "pills", className: "nav nav-light nav-pills-rounded justify-content-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { eventKey: "tabit1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Overview" }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 136,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 135,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 134,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { eventKey: "tabit2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Comments" }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 141,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 140,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 139,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { eventKey: "tabit3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: "Reviews" }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 146,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 145,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 144,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 133,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tab_default.Content, { className: "py-7", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tab_default.Pane, { eventKey: "tabit1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h5", { children: "Overview and Features" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 152,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Think classic lorem ipsum is pass\xE9? Give your next project a bit more edge with these funny and unique text generators. The classic latin passage that just never gets old, enjoy as much (or as little) lorem ipsum as you can handle with our easy to use filler text generator. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An \u2018extremely credible source\u2019 has called my office and told me that Barack Obama\u2019s placeholder text is a fraud." }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 153,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Row_default, { className: "my-7", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xxl: 6, children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { children: "Kaster Shots" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 156,
                      columnNumber: 53
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator." }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 157,
                      columnNumber: 53
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 155,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xxl: 6, className: "mt-xxl-0 mt-3", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { children: "Kaster Brilliant" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 160,
                      columnNumber: 53
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "If you haven't seen Game of Thrones, go watch it right now. If you have then you'll totally get why this Hodor themed lorem ipsum generator is just brilliant." }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 161,
                      columnNumber: 53
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 159,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 154,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { children: "More Interesting Features" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 164,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "list-ul ps-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Kickstarter is an American public benefit corporation based in Brooklyn." }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 166,
                    columnNumber: 70
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 166,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "New York, that maintains a global crowdfunding." }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 167,
                    columnNumber: 70
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 167,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "platform focused on creativity. The company's stated mission." }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 168,
                    columnNumber: 70
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 168,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Help bring creative projects to life." }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 169,
                    columnNumber: 70
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 169,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Kaster try this Trump lorem ipsum generator on for size." }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 170,
                    columnNumber: 53
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 170,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 165,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 151,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tab_default.Pane, { eventKey: "tabit2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "title title-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "3 Responses" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 174,
                  columnNumber: 77
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 174,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "comment-block", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default, { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Group, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar4_default, alt: "user", className: "avatar-img" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 181,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 180,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 179,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "form-inline", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Control, { className: "me-3" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 186,
                        columnNumber: 69
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "primary", children: "Post" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 187,
                        columnNumber: 69
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 185,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 184,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 178,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 177,
                    columnNumber: 53
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 176,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar4_default, alt: "user", className: "avatar-img" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 196,
                      columnNumber: 61
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 195,
                      columnNumber: 57
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 194,
                      columnNumber: 53
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "cm-name", children: "Martin Luther" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 201,
                        columnNumber: 61
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 200,
                        columnNumber: 57
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "From there, you can run truffle compile, truffle migrate and truffle test to compile your contracts, deploy those contracts to the network, and run their associated unit tests." }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 203,
                        columnNumber: 57
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "comment-action-wrap mt-3", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "3 hours ago" }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 205,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 206,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: "Reply" }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 207,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 208,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: "Like" }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 209,
                          columnNumber: 61
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 204,
                        columnNumber: 57
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 199,
                      columnNumber: 53
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 193,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 213,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 217,
                      columnNumber: 61
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 216,
                      columnNumber: 57
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 215,
                      columnNumber: 53
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "cm-name", children: "Katherine Jones" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 222,
                        columnNumber: 61
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 221,
                        columnNumber: 57
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Dynamically beautiful work done by Ashton Kutcher" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 224,
                        columnNumber: 57
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "comment-action-wrap mt-3", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "3 hours ago" }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 226,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 227,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: "Reply" }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 228,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 229,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: "Like" }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 230,
                          columnNumber: 61
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 225,
                        columnNumber: 57
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar3_default, alt: "user", className: "avatar-img" }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 235,
                          columnNumber: 69
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 234,
                          columnNumber: 65
                        }, this) }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 233,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "cm-name", children: "Ashton Kutche" }, void 0, false, {
                            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                            lineNumber: 240,
                            columnNumber: 69
                          }, this) }, void 0, false, {
                            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                            lineNumber: 239,
                            columnNumber: 65
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Thank you :)" }, void 0, false, {
                            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                            lineNumber: 242,
                            columnNumber: 65
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "comment-action-wrap mt-3", children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "3 hours ago" }, void 0, false, {
                              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                              lineNumber: 244,
                              columnNumber: 69
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                              lineNumber: 245,
                              columnNumber: 69
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: "Reply" }, void 0, false, {
                              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                              lineNumber: 246,
                              columnNumber: 69
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                              lineNumber: 247,
                              columnNumber: 69
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: "Like" }, void 0, false, {
                              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                              lineNumber: 248,
                              columnNumber: 69
                            }, this)
                          ] }, void 0, true, {
                            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                            lineNumber: 243,
                            columnNumber: 65
                          }, this)
                        ] }, void 0, true, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 238,
                          columnNumber: 61
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 232,
                        columnNumber: 57
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 220,
                      columnNumber: 53
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 214,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 254,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar4_default, alt: "user", className: "avatar-img" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 258,
                      columnNumber: 61
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 257,
                      columnNumber: 57
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 256,
                      columnNumber: 53
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "cm-name", children: "Pheebee Fry" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 263,
                        columnNumber: 61
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 262,
                        columnNumber: 57
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Like your lorem ipsum extra crispy? Then Bacon Ipsum is the placeholder text generator for you. Side of eggs and hashbrowns is optional, but recommended." }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 265,
                        columnNumber: 57
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "comment-action-wrap mt-3", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "8 Feb, 2020" }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 267,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 268,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: "Reply" }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 269,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "comment-dot-sep", children: "\u25CF" }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 270,
                          columnNumber: 61
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: "Like" }, void 0, false, {
                          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                          lineNumber: 271,
                          columnNumber: 61
                        }, this)
                      ] }, void 0, true, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 266,
                        columnNumber: 57
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 261,
                      columnNumber: 53
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 255,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 175,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 173,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Tab_default.Pane, { eventKey: "tabit3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "review-block", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "title title-lg mb-0 me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "User Reviews" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 282,
                      columnNumber: 61
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 281,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "soft-primary", onClick: () => setShowReviewModal(!showReviewModal), children: "Write a review" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 284,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 280,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Select, { className: "d-md-flex d-none", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: 0, children: "Helpful Reviews" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 288,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: 1, children: "Most Rated" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 289,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: 2, children: "Less Rated" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 290,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: 3, children: "Popular Reviews" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 291,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 287,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 286,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 279,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "separator mt-4" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 295,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "review", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar7_default, alt: "user", className: "avatar-img" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 300,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 299,
                      columnNumber: 61
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 298,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "cr-name", children: "Martin Luther" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 304,
                      columnNumber: 61
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 303,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 297,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex flex-sm-nowrap flex-wrap mt-2 mb-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_simple_star_rating2.Rating, { initialValue: 4, readonly: true, size: "20", className: "d-flex align-items-center me-2 mb-sm-0 mb-2" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 308,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                      "for ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-dark mx-1", children: "Design Quality" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 309,
                        columnNumber: 66
                      }, this),
                      " ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "fs-8", children: "12 Jan, 2020" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 309,
                        columnNumber: 121
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 309,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 307,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "A handcrafted, small-batch, artisinal pour-over version of the classic lorem ipsum generator, Hipster Ipsum will give your mocks that blue collar touch." }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 311,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "review-action-wrap mt-3", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "me-1", children: "Was this review helpful?" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 313,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "outline-light me-1", size: "xs", children: "Yes" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 314,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "outline-light me-1", size: "xs", children: "No" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 315,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "review-dot-sep", children: "\u25CF" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 316,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: "Reply" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 317,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "review-dot-sep", children: "\u25CF" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 318,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: "Report abuse" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 319,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 312,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 296,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 322,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "review", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img rounded-circle" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 327,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 326,
                      columnNumber: 61
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 325,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "cr-name", children: "Katherine Jones" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 331,
                      columnNumber: 61
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 330,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 324,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex flex-sm-nowrap flex-wrap mt-2 mb-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_simple_star_rating2.Rating, { initialValue: 3, readonly: true, size: "20", className: "d-flex align-items-center me-2 mb-sm-0 mb-2" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 335,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                      "for ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-dark mx-1", children: "Customer Support" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 336,
                        columnNumber: 66
                      }, this),
                      " ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "fs-8", children: "10 Jan, 2020" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 336,
                        columnNumber: 123
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 336,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 334,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Like your lorem ipsum extra crispy? Then Bacon Ipsum is the placeholder text generator for you. Side of eggs and hashbrowns is optional, but recommended. Sugary sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marshmallows, carrot cake, and perhaps even a cherry on top." }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 338,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "review-action-wrap mt-3", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "me-1", children: "Was this review helpful?" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 340,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "outline-light me-1", size: "xs", children: "Yes" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 341,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "outline-light me-1", size: "xs", children: "No" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 342,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "review-dot-sep", children: "\u25CF" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 343,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: "Reply" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 344,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "review-dot-sep", children: "\u25CF" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 345,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: "Report abuse" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 346,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 339,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 323,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 349,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "review", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar3_default, alt: "user", className: "avatar-img rounded-circle" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 354,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 353,
                      columnNumber: 61
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 352,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "cr-name", children: "Pheebee Fry" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 358,
                      columnNumber: 61
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 357,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 351,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex flex-sm-nowrap flex-wrap mt-2 mb-1", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_simple_star_rating2.Rating, { initialValue: 2, readonly: true, size: "20", className: "d-flex align-items-center me-2 mb-sm-0 mb-2" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 362,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                      "for ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-dark mx-1", children: "Design Quality" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 363,
                        columnNumber: 66
                      }, this),
                      " ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "fs-8", children: "31 Dec, 2020" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 363,
                        columnNumber: 121
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 363,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 361,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "A web generator and jQuery plugin, Delorean Ipsum uses the script from Back to the Future to generate quotable lorem ipsum text for every project, past or present." }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 365,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "review-action-wrap mt-3", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "me-1", children: "Was this review helpful?" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 367,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "outline-light me-1", size: "xs", children: "Yes" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 368,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "outline-light me-1", size: "xs", children: "No" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 369,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "review-dot-sep", children: "\u25CF" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 370,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: "Reply" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 371,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "review-dot-sep", children: "\u25CF" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 372,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: "Report abuse" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 373,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 366,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "review", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img rounded-circle" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 379,
                        columnNumber: 69
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 378,
                        columnNumber: 65
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 377,
                        columnNumber: 61
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "cr-name", children: "Ashton Kutcher" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 383,
                        columnNumber: 65
                      }, this) }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 382,
                        columnNumber: 61
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 376,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex flex-sm-nowrap flex-wrap mt-2 mb-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "fs-8", children: "1 Jan, 2020" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 387,
                      columnNumber: 66
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 387,
                      columnNumber: 61
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 386,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Space, the final frontier. These are the voyages of the Starship Enterprise." }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 389,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "review-action-wrap mt-3", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "me-1", children: "Was this review helpful?" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 391,
                        columnNumber: 61
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "outline-light me-1", size: "xs", children: "Yes" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 392,
                        columnNumber: 61
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "outline-light me-1", size: "xs", children: "No" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 393,
                        columnNumber: 61
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "review-dot-sep", children: "\u25CF" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 394,
                        columnNumber: 61
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: "Reply" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 395,
                        columnNumber: 61
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "review-dot-sep", children: "\u25CF" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 396,
                        columnNumber: 61
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: "Report abuse" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 397,
                        columnNumber: 61
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 390,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 375,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 350,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 278,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 277,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 150,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 132,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 112,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xxl: 4, lg: 5, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "content-aside", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "card-border mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { className: "mb-4", children: "Categories" }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 410,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "tag-cloud", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_badge_default, { as: "a", href: "#", bg: "primary", soft: true, className: "me-1", children: "Jampack" }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 412,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_badge_default, { as: "a", href: "#", bg: "primary", soft: true, className: "me-1", children: "Bootstrap 5" }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 413,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_badge_default, { as: "a", href: "#", bg: "primary", soft: true, className: "me-1", children: "Admin Template" }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 414,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 411,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 409,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 408,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-icon avatar-soft-success avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(external_link_default, {}, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 425,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 424,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 423,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 422,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 421,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { className: "mb-0", children: "Website" }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 431,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", className: "link-muted", children: "kickstarter.com" }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 432,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 430,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 420,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 419,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 418,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { className: "mb-4", children: "Additional Info" }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 439,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "list-unstyled", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fs-7", children: "Version" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 442,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-dark fw-medium", children: "A3.45-4.0" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 443,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 441,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fs-7", children: "Updated" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 446,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-dark fw-medium", children: "May 20, 2020" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 447,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 445,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fs-7", children: "Size" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 450,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-dark fw-medium", children: "4.35 MB" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 451,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 449,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fs-7", children: "Languages" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 454,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-dark fw-medium", children: "English, Spanish, French" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 455,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 453,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fs-7", children: "Developed by" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 458,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-dark fw-medium d-flex align-items-center", children: [
                  "Hencework",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-information-fill fs-7 ms-1 lh-1" }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 459,
                    columnNumber: 125
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 459,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 457,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "mb-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fs-7", children: "Resources" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 462,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-dark fw-medium d-flex align-items-center", children: [
                  "Product Documentation",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "d-flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-external-link-line fs-7 ms-1 lh-1" }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 463,
                    columnNumber: 172
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 463,
                    columnNumber: 137
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 463,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 461,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "d-flex align-items-center link-danger", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "d-flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-information-line fs-7 me-1 lh-1" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 466,
                  columnNumber: 144
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 466,
                  columnNumber: 119
                }, this),
                "Report abuse"
              ] }, void 0, true, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 466,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 465,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 440,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 438,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 437,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { className: "mb-4", children: "Related" }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 473,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default, { as: "ul", variant: "flush", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { as: "li", className: "border-0 px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap bg-success-light-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: symbol_avatar_14_default, alt: "logo" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 481,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 480,
                  columnNumber: 69
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 479,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 478,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body d-flex justify-content-between align-items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { className: "mb-0", children: "Intercom" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 487,
                      columnNumber: 69
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fs-7 text-muted", children: "Chat Application" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 488,
                      columnNumber: 69
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center fs-8 text-muted", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-1 text-primary" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 489,
                        columnNumber: 128
                      }, this),
                      "15M Downloads"
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 489,
                      columnNumber: 69
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 486,
                    columnNumber: 65
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_badge_default, { size: "sm", bg: "primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-star-s-fill" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 492,
                      columnNumber: 98
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 492,
                      columnNumber: 75
                    }, this),
                    "4.5"
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 492,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 491,
                    columnNumber: 65
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 485,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 477,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 476,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 475,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { as: "li", className: "border-0 px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "avatar-img", src: logo_avatar_2_default, alt: "logo" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 503,
                  columnNumber: 69
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 502,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 501,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body d-flex justify-content-between align-items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { className: "mb-0", children: "Swiggy" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 508,
                      columnNumber: 69
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fs-7 text-muted", children: "Food Delivery" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 509,
                      columnNumber: 69
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center fs-8 text-muted", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-1 text-primary" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 510,
                        columnNumber: 128
                      }, this),
                      "15M Downloads"
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 510,
                      columnNumber: 69
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 507,
                    columnNumber: 65
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_badge_default, { size: "sm", bg: "warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-star-s-fill" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 513,
                      columnNumber: 98
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 513,
                      columnNumber: 75
                    }, this),
                    "3.5"
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 513,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 512,
                    columnNumber: 65
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 506,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 500,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 499,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 498,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { as: "li", className: "border-0 px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "avatar-img", src: logo_avatar_10_default, alt: "logo" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 524,
                  columnNumber: 69
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 523,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 522,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body d-flex justify-content-between align-items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { className: "mb-0", children: "Medium" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 529,
                      columnNumber: 69
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fs-7 text-muted", children: "Blog" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 530,
                      columnNumber: 69
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center fs-8 text-muted", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-1 text-primary" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 531,
                        columnNumber: 128
                      }, this),
                      "15M Downloads"
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 531,
                      columnNumber: 69
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 528,
                    columnNumber: 65
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_badge_default, { size: "sm", bg: "danger", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-star-s-fill" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 534,
                      columnNumber: 98
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 534,
                      columnNumber: 75
                    }, this),
                    "2.0"
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 534,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 533,
                    columnNumber: 65
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 527,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 521,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 520,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 519,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { as: "li", className: "border-0 px-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap bg-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: symbol_avatar_12_default, alt: "logo" }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 546,
                  columnNumber: 73
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 545,
                  columnNumber: 69
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 544,
                  columnNumber: 65
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 543,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body d-flex justify-content-between align-items-center", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { className: "mb-0", children: "Figma" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 552,
                      columnNumber: 69
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "fs-7 text-muted", children: "Design Tool" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 553,
                      columnNumber: 69
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center fs-8 text-muted", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-download-cloud-2-line fs-7 me-1 text-primary" }, void 0, false, {
                        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                        lineNumber: 554,
                        columnNumber: 128
                      }, this),
                      "15M Downloads"
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 554,
                      columnNumber: 69
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 551,
                    columnNumber: 65
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(hk_badge_default, { size: "sm", bg: "primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-star-s-fill" }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 557,
                      columnNumber: 98
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                      lineNumber: 557,
                      columnNumber: 75
                    }, this),
                    "4.5"
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 557,
                    columnNumber: 69
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                    lineNumber: 556,
                    columnNumber: 65
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                  lineNumber: 550,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 542,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 541,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
                lineNumber: 540,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 474,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 472,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 471,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 407,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 406,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
        lineNumber: 111,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { className: "text-center mt-10 mb-4", children: "Similar Apps like this" }, void 0, false, {
        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
        lineNumber: 569,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Row_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xl: 3, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "card-border text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-violet mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 575,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 574,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "app-name", children: "Hencework" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 577,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "app-cat", children: "Chat Application" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 578,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center justify-content-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_simple_star_rating2.Rating, { initialValue: 3, readonly: true, size: "20", className: "d-flex align-items-center me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 580,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "fs-8", children: "3,672" }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 581,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 579,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 573,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 572,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 571,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xl: 3, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "card-border text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: symbol_avatar_4_default, alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 591,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 590,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 589,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "app-name", children: "Jampack" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 594,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "app-cat", children: "Dashboard Template" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 595,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center justify-content-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_simple_star_rating2.Rating, { initialValue: 3, readonly: true, size: "20", className: "d-flex align-items-center me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 597,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "fs-8", children: "3,672" }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 598,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 596,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 588,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 587,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 586,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xl: 3, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "card-border text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: symbol_avatar_1_default, alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 608,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 607,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 606,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "app-name", children: "Tinder" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 611,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "app-cat", children: "Dating App" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 612,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center justify-content-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_simple_star_rating2.Rating, { initialValue: 4, readonly: true, size: "20", className: "d-flex align-items-center me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 614,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "fs-8", children: "3,672" }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 615,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 613,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 605,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 604,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 603,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { xl: 3, md: 6, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default, { className: "card-border text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Card_default.Body, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-logo mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: symbol_avatar_16_default, alt: "logo" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 625,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 624,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 623,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "app-name", children: "Github" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 628,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "app-cat", children: "Developer Geek" }, void 0, false, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 629,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex align-items-center justify-content-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_simple_star_rating2.Rating, { initialValue: 3.5, allowFraction: true, readonly: true, size: "20", className: "d-flex align-items-center me-2" }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 631,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "fs-8", children: "3,672" }, void 0, false, {
              fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
              lineNumber: 632,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
            lineNumber: 630,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 622,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 621,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
          lineNumber: 620,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
        lineNumber: 570,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
      lineNumber: 57,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
      lineNumber: 56,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
      lineNumber: 55,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ReviewModal_default, { show: showReviewModal, closeModal: () => setShowReviewModal(!showReviewModal) }, void 0, false, {
      fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
      lineNumber: 642,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/integrations/app-detail/Body.jsx",
    lineNumber: 54,
    columnNumber: 10
  }, this);
};
_s2(Body, "B42sRJZycSUQCh4i8IX0TCv+0fY=");
_c3 = Body;
var Body_default = Body;
var _c3;
$RefreshReg$(_c3, "Body");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/integrations/app-detail/route.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/integrations/app-detail/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/integrations/app-detail/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247944.825";
}
var IntegrationsDetail = () => {
  _s3();
  const [showSidebar, setShowSidebar] = (0, import_react3.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: (0, import_classnames2.default)("integrationsapp-wrap", {
    "integrationsapp-sidebar-toggle": !showSidebar
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AppsSidebar_default, {}, void 0, false, {
      fileName: "app/routes/apps/integrations/app-detail/route.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "integrationsapp-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "integrationsapp-detail-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Header_default, { toggleSidebar: () => setShowSidebar(!showSidebar), show: showSidebar }, void 0, false, {
        fileName: "app/routes/apps/integrations/app-detail/route.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Body_default, {}, void 0, false, {
        fileName: "app/routes/apps/integrations/app-detail/route.jsx",
        lineNumber: 38,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/integrations/app-detail/route.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/integrations/app-detail/route.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/integrations/app-detail/route.jsx",
    lineNumber: 31,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/integrations/app-detail/route.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s3(IntegrationsDetail, "O0tqdxfw1ryb5O1kO6vD3OVdeTk=");
_c4 = IntegrationsDetail;
var route_default = IntegrationsDetail;
var _c4;
$RefreshReg$(_c4, "IntegrationsDetail");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/integrations/app-detail/route-HJRHQYOS.js.map
