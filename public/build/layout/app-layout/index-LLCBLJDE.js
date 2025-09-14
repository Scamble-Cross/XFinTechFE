import {
  PageFooter_default
} from "/build/_shared/chunk-CIKTYXJT.js";
import {
  ArrowBarToLeft,
  Template
} from "/build/_shared/chunk-T44O2CY6.js";
import {
  avatar12_default
} from "/build/_shared/chunk-TDK3BLMN.js";
import {
  useWindowWidth
} from "/build/_shared/chunk-RBFUKTHB.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  align_left_default,
  check_square_default,
  credit_card_default,
  plus_default,
  settings_default,
  tag_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import {
  useGlobalStateContext
} from "/build/_shared/chunk-3LFZEH5W.js";
import "/build/_shared/chunk-B57YWHU6.js";
import "/build/_shared/chunk-WUHA5P4Y.js";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useNavigation
} from "/build/_shared/chunk-DKEEJ4HZ.js";
import {
  Button_default,
  Container_default,
  Dropdown_default,
  Nav_default,
  Navbar_default
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

// node_modules/bootstrap/js/dist/dom/data.js
var require_data = __commonJS({
  "node_modules/bootstrap/js/dist/dom/data.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Data = factory());
    })(exports, function() {
      "use strict";
      const elementMap = /* @__PURE__ */ new Map();
      const data = {
        set(element, key, instance) {
          if (!elementMap.has(element)) {
            elementMap.set(element, /* @__PURE__ */ new Map());
          }
          const instanceMap = elementMap.get(element);
          if (!instanceMap.has(key) && instanceMap.size !== 0) {
            console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
            return;
          }
          instanceMap.set(key, instance);
        },
        get(element, key) {
          if (elementMap.has(element)) {
            return elementMap.get(element).get(key) || null;
          }
          return null;
        },
        remove(element, key) {
          if (!elementMap.has(element)) {
            return;
          }
          const instanceMap = elementMap.get(element);
          instanceMap.delete(key);
          if (instanceMap.size === 0) {
            elementMap.delete(element);
          }
        }
      };
      return data;
    });
  }
});

// node_modules/bootstrap/js/dist/util/index.js
var require_util = __commonJS({
  "node_modules/bootstrap/js/dist/util/index.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.Index = {}));
    })(exports, function(exports2) {
      "use strict";
      const MAX_UID = 1e6;
      const MILLISECONDS_MULTIPLIER = 1e3;
      const TRANSITION_END = "transitionend";
      const parseSelector = (selector) => {
        if (selector && window.CSS && window.CSS.escape) {
          selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
        }
        return selector;
      };
      const toType = (object) => {
        if (object === null || object === void 0) {
          return `${object}`;
        }
        return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
      };
      const getUID = (prefix) => {
        do {
          prefix += Math.floor(Math.random() * MAX_UID);
        } while (document.getElementById(prefix));
        return prefix;
      };
      const getTransitionDurationFromElement = (element) => {
        if (!element) {
          return 0;
        }
        let {
          transitionDuration,
          transitionDelay
        } = window.getComputedStyle(element);
        const floatTransitionDuration = Number.parseFloat(transitionDuration);
        const floatTransitionDelay = Number.parseFloat(transitionDelay);
        if (!floatTransitionDuration && !floatTransitionDelay) {
          return 0;
        }
        transitionDuration = transitionDuration.split(",")[0];
        transitionDelay = transitionDelay.split(",")[0];
        return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
      };
      const triggerTransitionEnd = (element) => {
        element.dispatchEvent(new Event(TRANSITION_END));
      };
      const isElement = (object) => {
        if (!object || typeof object !== "object") {
          return false;
        }
        if (typeof object.jquery !== "undefined") {
          object = object[0];
        }
        return typeof object.nodeType !== "undefined";
      };
      const getElement = (object) => {
        if (isElement(object)) {
          return object.jquery ? object[0] : object;
        }
        if (typeof object === "string" && object.length > 0) {
          return document.querySelector(parseSelector(object));
        }
        return null;
      };
      const isVisible = (element) => {
        if (!isElement(element) || element.getClientRects().length === 0) {
          return false;
        }
        const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
        const closedDetails = element.closest("details:not([open])");
        if (!closedDetails) {
          return elementIsVisible;
        }
        if (closedDetails !== element) {
          const summary = element.closest("summary");
          if (summary && summary.parentNode !== closedDetails) {
            return false;
          }
          if (summary === null) {
            return false;
          }
        }
        return elementIsVisible;
      };
      const isDisabled = (element) => {
        if (!element || element.nodeType !== Node.ELEMENT_NODE) {
          return true;
        }
        if (element.classList.contains("disabled")) {
          return true;
        }
        if (typeof element.disabled !== "undefined") {
          return element.disabled;
        }
        return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
      };
      const findShadowRoot = (element) => {
        if (!document.documentElement.attachShadow) {
          return null;
        }
        if (typeof element.getRootNode === "function") {
          const root = element.getRootNode();
          return root instanceof ShadowRoot ? root : null;
        }
        if (element instanceof ShadowRoot) {
          return element;
        }
        if (!element.parentNode) {
          return null;
        }
        return findShadowRoot(element.parentNode);
      };
      const noop = () => {
      };
      const reflow = (element) => {
        element.offsetHeight;
      };
      const getjQuery = () => {
        if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
          return window.jQuery;
        }
        return null;
      };
      const DOMContentLoadedCallbacks = [];
      const onDOMContentLoaded = (callback) => {
        if (document.readyState === "loading") {
          if (!DOMContentLoadedCallbacks.length) {
            document.addEventListener("DOMContentLoaded", () => {
              for (const callback2 of DOMContentLoadedCallbacks) {
                callback2();
              }
            });
          }
          DOMContentLoadedCallbacks.push(callback);
        } else {
          callback();
        }
      };
      const isRTL = () => document.documentElement.dir === "rtl";
      const defineJQueryPlugin = (plugin) => {
        onDOMContentLoaded(() => {
          const $ = getjQuery();
          if ($) {
            const name = plugin.NAME;
            const JQUERY_NO_CONFLICT = $.fn[name];
            $.fn[name] = plugin.jQueryInterface;
            $.fn[name].Constructor = plugin;
            $.fn[name].noConflict = () => {
              $.fn[name] = JQUERY_NO_CONFLICT;
              return plugin.jQueryInterface;
            };
          }
        });
      };
      const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
        return typeof possibleCallback === "function" ? possibleCallback.call(...args) : defaultValue;
      };
      const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
        if (!waitForTransition) {
          execute(callback);
          return;
        }
        const durationPadding = 5;
        const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
        let called = false;
        const handler = ({
          target
        }) => {
          if (target !== transitionElement) {
            return;
          }
          called = true;
          transitionElement.removeEventListener(TRANSITION_END, handler);
          execute(callback);
        };
        transitionElement.addEventListener(TRANSITION_END, handler);
        setTimeout(() => {
          if (!called) {
            triggerTransitionEnd(transitionElement);
          }
        }, emulatedDuration);
      };
      const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
        const listLength = list.length;
        let index = list.indexOf(activeElement);
        if (index === -1) {
          return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
        }
        index += shouldGetNext ? 1 : -1;
        if (isCycleAllowed) {
          index = (index + listLength) % listLength;
        }
        return list[Math.max(0, Math.min(index, listLength - 1))];
      };
      exports2.defineJQueryPlugin = defineJQueryPlugin;
      exports2.execute = execute;
      exports2.executeAfterTransition = executeAfterTransition;
      exports2.findShadowRoot = findShadowRoot;
      exports2.getElement = getElement;
      exports2.getNextActiveElement = getNextActiveElement;
      exports2.getTransitionDurationFromElement = getTransitionDurationFromElement;
      exports2.getUID = getUID;
      exports2.getjQuery = getjQuery;
      exports2.isDisabled = isDisabled;
      exports2.isElement = isElement;
      exports2.isRTL = isRTL;
      exports2.isVisible = isVisible;
      exports2.noop = noop;
      exports2.onDOMContentLoaded = onDOMContentLoaded;
      exports2.parseSelector = parseSelector;
      exports2.reflow = reflow;
      exports2.toType = toType;
      exports2.triggerTransitionEnd = triggerTransitionEnd;
      Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
    });
  }
});

// node_modules/bootstrap/js/dist/dom/event-handler.js
var require_event_handler = __commonJS({
  "node_modules/bootstrap/js/dist/dom/event-handler.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_util()) : typeof define === "function" && define.amd ? define(["../util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.EventHandler = factory(global.Index));
    })(exports, function(index_js) {
      "use strict";
      const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
      const stripNameRegex = /\..*/;
      const stripUidRegex = /::\d+$/;
      const eventRegistry = {};
      let uidEvent = 1;
      const customEvents = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
      };
      const nativeEvents = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
      function makeEventUid(element, uid) {
        return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
      }
      function getElementEvents(element) {
        const uid = makeEventUid(element);
        element.uidEvent = uid;
        eventRegistry[uid] = eventRegistry[uid] || {};
        return eventRegistry[uid];
      }
      function bootstrapHandler(element, fn) {
        return function handler(event) {
          hydrateObj(event, {
            delegateTarget: element
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, fn);
          }
          return fn.apply(element, [event]);
        };
      }
      function bootstrapDelegationHandler(element, selector, fn) {
        return function handler(event) {
          const domElements = element.querySelectorAll(selector);
          for (let {
            target
          } = event; target && target !== this; target = target.parentNode) {
            for (const domElement of domElements) {
              if (domElement !== target) {
                continue;
              }
              hydrateObj(event, {
                delegateTarget: target
              });
              if (handler.oneOff) {
                EventHandler.off(element, event.type, selector, fn);
              }
              return fn.apply(target, [event]);
            }
          }
        };
      }
      function findHandler(events, callable, delegationSelector = null) {
        return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
      }
      function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
        const isDelegated = typeof handler === "string";
        const callable = isDelegated ? delegationFunction : handler || delegationFunction;
        let typeEvent = getTypeEvent(originalTypeEvent);
        if (!nativeEvents.has(typeEvent)) {
          typeEvent = originalTypeEvent;
        }
        return [isDelegated, callable, typeEvent];
      }
      function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
        if (typeof originalTypeEvent !== "string" || !element) {
          return;
        }
        let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
        if (originalTypeEvent in customEvents) {
          const wrapFunction = (fn2) => {
            return function(event) {
              if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
                return fn2.call(this, event);
              }
            };
          };
          callable = wrapFunction(callable);
        }
        const events = getElementEvents(element);
        const handlers = events[typeEvent] || (events[typeEvent] = {});
        const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
        if (previousFunction) {
          previousFunction.oneOff = previousFunction.oneOff && oneOff;
          return;
        }
        const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
        const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
        fn.delegationSelector = isDelegated ? handler : null;
        fn.callable = callable;
        fn.oneOff = oneOff;
        fn.uidEvent = uid;
        handlers[uid] = fn;
        element.addEventListener(typeEvent, fn, isDelegated);
      }
      function removeHandler(element, events, typeEvent, handler, delegationSelector) {
        const fn = findHandler(events[typeEvent], handler, delegationSelector);
        if (!fn) {
          return;
        }
        element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
        delete events[typeEvent][fn.uidEvent];
      }
      function removeNamespacedHandlers(element, events, typeEvent, namespace) {
        const storeElementEvent = events[typeEvent] || {};
        for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
          if (handlerKey.includes(namespace)) {
            removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
          }
        }
      }
      function getTypeEvent(event) {
        event = event.replace(stripNameRegex, "");
        return customEvents[event] || event;
      }
      const EventHandler = {
        on(element, event, handler, delegationFunction) {
          addHandler(element, event, handler, delegationFunction, false);
        },
        one(element, event, handler, delegationFunction) {
          addHandler(element, event, handler, delegationFunction, true);
        },
        off(element, originalTypeEvent, handler, delegationFunction) {
          if (typeof originalTypeEvent !== "string" || !element) {
            return;
          }
          const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
          const inNamespace = typeEvent !== originalTypeEvent;
          const events = getElementEvents(element);
          const storeElementEvent = events[typeEvent] || {};
          const isNamespace = originalTypeEvent.startsWith(".");
          if (typeof callable !== "undefined") {
            if (!Object.keys(storeElementEvent).length) {
              return;
            }
            removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
            return;
          }
          if (isNamespace) {
            for (const elementEvent of Object.keys(events)) {
              removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
            }
          }
          for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
            const handlerKey = keyHandlers.replace(stripUidRegex, "");
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
              removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
            }
          }
        },
        trigger(element, event, args) {
          if (typeof event !== "string" || !element) {
            return null;
          }
          const $ = index_js.getjQuery();
          const typeEvent = getTypeEvent(event);
          const inNamespace = event !== typeEvent;
          let jQueryEvent = null;
          let bubbles = true;
          let nativeDispatch = true;
          let defaultPrevented = false;
          if (inNamespace && $) {
            jQueryEvent = $.Event(event, args);
            $(element).trigger(jQueryEvent);
            bubbles = !jQueryEvent.isPropagationStopped();
            nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
            defaultPrevented = jQueryEvent.isDefaultPrevented();
          }
          const evt = hydrateObj(new Event(event, {
            bubbles,
            cancelable: true
          }), args);
          if (defaultPrevented) {
            evt.preventDefault();
          }
          if (nativeDispatch) {
            element.dispatchEvent(evt);
          }
          if (evt.defaultPrevented && jQueryEvent) {
            jQueryEvent.preventDefault();
          }
          return evt;
        }
      };
      function hydrateObj(obj, meta = {}) {
        for (const [key, value] of Object.entries(meta)) {
          try {
            obj[key] = value;
          } catch (_unused) {
            Object.defineProperty(obj, key, {
              configurable: true,
              get() {
                return value;
              }
            });
          }
        }
        return obj;
      }
      return EventHandler;
    });
  }
});

// node_modules/bootstrap/js/dist/dom/manipulator.js
var require_manipulator = __commonJS({
  "node_modules/bootstrap/js/dist/dom/manipulator.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Manipulator = factory());
    })(exports, function() {
      "use strict";
      function normalizeData(value) {
        if (value === "true") {
          return true;
        }
        if (value === "false") {
          return false;
        }
        if (value === Number(value).toString()) {
          return Number(value);
        }
        if (value === "" || value === "null") {
          return null;
        }
        if (typeof value !== "string") {
          return value;
        }
        try {
          return JSON.parse(decodeURIComponent(value));
        } catch (_unused) {
          return value;
        }
      }
      function normalizeDataKey(key) {
        return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
      }
      const Manipulator = {
        setDataAttribute(element, key, value) {
          element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
        },
        removeDataAttribute(element, key) {
          element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
        },
        getDataAttributes(element) {
          if (!element) {
            return {};
          }
          const attributes = {};
          const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
          for (const key of bsKeys) {
            let pureKey = key.replace(/^bs/, "");
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1);
            attributes[pureKey] = normalizeData(element.dataset[key]);
          }
          return attributes;
        },
        getDataAttribute(element, key) {
          return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
        }
      };
      return Manipulator;
    });
  }
});

// node_modules/bootstrap/js/dist/util/config.js
var require_config = __commonJS({
  "node_modules/bootstrap/js/dist/util/config.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_manipulator(), require_util()) : typeof define === "function" && define.amd ? define(["../dom/manipulator", "./index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Config = factory(global.Manipulator, global.Index));
    })(exports, function(Manipulator, index_js) {
      "use strict";
      class Config {
        // Getters
        static get Default() {
          return {};
        }
        static get DefaultType() {
          return {};
        }
        static get NAME() {
          throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(config) {
          config = this._mergeConfigObj(config);
          config = this._configAfterMerge(config);
          this._typeCheckConfig(config);
          return config;
        }
        _configAfterMerge(config) {
          return config;
        }
        _mergeConfigObj(config, element) {
          const jsonConfig = index_js.isElement(element) ? Manipulator.getDataAttribute(element, "config") : {};
          return {
            ...this.constructor.Default,
            ...typeof jsonConfig === "object" ? jsonConfig : {},
            ...index_js.isElement(element) ? Manipulator.getDataAttributes(element) : {},
            ...typeof config === "object" ? config : {}
          };
        }
        _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
          for (const [property, expectedTypes] of Object.entries(configTypes)) {
            const value = config[property];
            const valueType = index_js.isElement(value) ? "element" : index_js.toType(value);
            if (!new RegExp(expectedTypes).test(valueType)) {
              throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
            }
          }
        }
      }
      return Config;
    });
  }
});

// node_modules/bootstrap/js/dist/base-component.js
var require_base_component = __commonJS({
  "node_modules/bootstrap/js/dist/base-component.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_data(), require_event_handler(), require_config(), require_util()) : typeof define === "function" && define.amd ? define(["./dom/data", "./dom/event-handler", "./util/config", "./util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.BaseComponent = factory(global.Data, global.EventHandler, global.Config, global.Index));
    })(exports, function(Data, EventHandler, Config, index_js) {
      "use strict";
      const VERSION = "5.3.8";
      class BaseComponent extends Config {
        constructor(element, config) {
          super();
          element = index_js.getElement(element);
          if (!element) {
            return;
          }
          this._element = element;
          this._config = this._getConfig(config);
          Data.set(this._element, this.constructor.DATA_KEY, this);
        }
        // Public
        dispose() {
          Data.remove(this._element, this.constructor.DATA_KEY);
          EventHandler.off(this._element, this.constructor.EVENT_KEY);
          for (const propertyName of Object.getOwnPropertyNames(this)) {
            this[propertyName] = null;
          }
        }
        // Private
        _queueCallback(callback, element, isAnimated = true) {
          index_js.executeAfterTransition(callback, element, isAnimated);
        }
        _getConfig(config) {
          config = this._mergeConfigObj(config, this._element);
          config = this._configAfterMerge(config);
          this._typeCheckConfig(config);
          return config;
        }
        // Static
        static getInstance(element) {
          return Data.get(index_js.getElement(element), this.DATA_KEY);
        }
        static getOrCreateInstance(element, config = {}) {
          return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
        }
        static get VERSION() {
          return VERSION;
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`;
        }
        static eventName(name) {
          return `${name}${this.EVENT_KEY}`;
        }
      }
      return BaseComponent;
    });
  }
});

// node_modules/bootstrap/js/dist/dom/selector-engine.js
var require_selector_engine = __commonJS({
  "node_modules/bootstrap/js/dist/dom/selector-engine.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_util()) : typeof define === "function" && define.amd ? define(["../util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.SelectorEngine = factory(global.Index));
    })(exports, function(index_js) {
      "use strict";
      const getSelector = (element) => {
        let selector = element.getAttribute("data-bs-target");
        if (!selector || selector === "#") {
          let hrefAttribute = element.getAttribute("href");
          if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
            return null;
          }
          if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
            hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
          }
          selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
        }
        return selector ? selector.split(",").map((sel) => index_js.parseSelector(sel)).join(",") : null;
      };
      const SelectorEngine = {
        find(selector, element = document.documentElement) {
          return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
        },
        findOne(selector, element = document.documentElement) {
          return Element.prototype.querySelector.call(element, selector);
        },
        children(element, selector) {
          return [].concat(...element.children).filter((child) => child.matches(selector));
        },
        parents(element, selector) {
          const parents = [];
          let ancestor = element.parentNode.closest(selector);
          while (ancestor) {
            parents.push(ancestor);
            ancestor = ancestor.parentNode.closest(selector);
          }
          return parents;
        },
        prev(element, selector) {
          let previous = element.previousElementSibling;
          while (previous) {
            if (previous.matches(selector)) {
              return [previous];
            }
            previous = previous.previousElementSibling;
          }
          return [];
        },
        // TODO: this is now unused; remove later along with prev()
        next(element, selector) {
          let next = element.nextElementSibling;
          while (next) {
            if (next.matches(selector)) {
              return [next];
            }
            next = next.nextElementSibling;
          }
          return [];
        },
        focusableChildren(element) {
          const focusables = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
          return this.find(focusables, element).filter((el) => !index_js.isDisabled(el) && index_js.isVisible(el));
        },
        getSelectorFromElement(element) {
          const selector = getSelector(element);
          if (selector) {
            return SelectorEngine.findOne(selector) ? selector : null;
          }
          return null;
        },
        getElementFromSelector(element) {
          const selector = getSelector(element);
          return selector ? SelectorEngine.findOne(selector) : null;
        },
        getMultipleElementsFromSelector(element) {
          const selector = getSelector(element);
          return selector ? SelectorEngine.find(selector) : [];
        }
      };
      return SelectorEngine;
    });
  }
});

// node_modules/bootstrap/js/dist/collapse.js
var require_collapse = __commonJS({
  "node_modules/bootstrap/js/dist/collapse.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_base_component(), require_event_handler(), require_selector_engine(), require_util()) : typeof define === "function" && define.amd ? define(["./base-component", "./dom/event-handler", "./dom/selector-engine", "./util/index"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Collapse = factory(global.BaseComponent, global.EventHandler, global.SelectorEngine, global.Index));
    })(exports, function(BaseComponent, EventHandler, SelectorEngine, index_js) {
      "use strict";
      const NAME = "collapse";
      const DATA_KEY = "bs.collapse";
      const EVENT_KEY = `.${DATA_KEY}`;
      const DATA_API_KEY = ".data-api";
      const EVENT_SHOW = `show${EVENT_KEY}`;
      const EVENT_SHOWN = `shown${EVENT_KEY}`;
      const EVENT_HIDE = `hide${EVENT_KEY}`;
      const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
      const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
      const CLASS_NAME_SHOW = "show";
      const CLASS_NAME_COLLAPSE = "collapse";
      const CLASS_NAME_COLLAPSING = "collapsing";
      const CLASS_NAME_COLLAPSED = "collapsed";
      const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
      const CLASS_NAME_HORIZONTAL = "collapse-horizontal";
      const WIDTH = "width";
      const HEIGHT = "height";
      const SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
      const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]';
      const Default = {
        parent: null,
        toggle: true
      };
      const DefaultType = {
        parent: "(null|element)",
        toggle: "boolean"
      };
      class Collapse extends BaseComponent {
        constructor(element, config) {
          super(element, config);
          this._isTransitioning = false;
          this._triggerArray = [];
          const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE);
          for (const elem of toggleList) {
            const selector = SelectorEngine.getSelectorFromElement(elem);
            const filterElement = SelectorEngine.find(selector).filter((foundElement) => foundElement === this._element);
            if (selector !== null && filterElement.length) {
              this._triggerArray.push(elem);
            }
          }
          this._initializeChildren();
          if (!this._config.parent) {
            this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
          }
          if (this._config.toggle) {
            this.toggle();
          }
        }
        // Getters
        static get Default() {
          return Default;
        }
        static get DefaultType() {
          return DefaultType;
        }
        static get NAME() {
          return NAME;
        }
        // Public
        toggle() {
          if (this._isShown()) {
            this.hide();
          } else {
            this.show();
          }
        }
        show() {
          if (this._isTransitioning || this._isShown()) {
            return;
          }
          let activeChildren = [];
          if (this._config.parent) {
            activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => Collapse.getOrCreateInstance(element, {
              toggle: false
            }));
          }
          if (activeChildren.length && activeChildren[0]._isTransitioning) {
            return;
          }
          const startEvent = EventHandler.trigger(this._element, EVENT_SHOW);
          if (startEvent.defaultPrevented) {
            return;
          }
          for (const activeInstance of activeChildren) {
            activeInstance.hide();
          }
          const dimension = this._getDimension();
          this._element.classList.remove(CLASS_NAME_COLLAPSE);
          this._element.classList.add(CLASS_NAME_COLLAPSING);
          this._element.style[dimension] = 0;
          this._addAriaAndCollapsedClass(this._triggerArray, true);
          this._isTransitioning = true;
          const complete = () => {
            this._isTransitioning = false;
            this._element.classList.remove(CLASS_NAME_COLLAPSING);
            this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
            this._element.style[dimension] = "";
            EventHandler.trigger(this._element, EVENT_SHOWN);
          };
          const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
          const scrollSize = `scroll${capitalizedDimension}`;
          this._queueCallback(complete, this._element, true);
          this._element.style[dimension] = `${this._element[scrollSize]}px`;
        }
        hide() {
          if (this._isTransitioning || !this._isShown()) {
            return;
          }
          const startEvent = EventHandler.trigger(this._element, EVENT_HIDE);
          if (startEvent.defaultPrevented) {
            return;
          }
          const dimension = this._getDimension();
          this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
          index_js.reflow(this._element);
          this._element.classList.add(CLASS_NAME_COLLAPSING);
          this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW);
          for (const trigger of this._triggerArray) {
            const element = SelectorEngine.getElementFromSelector(trigger);
            if (element && !this._isShown(element)) {
              this._addAriaAndCollapsedClass([trigger], false);
            }
          }
          this._isTransitioning = true;
          const complete = () => {
            this._isTransitioning = false;
            this._element.classList.remove(CLASS_NAME_COLLAPSING);
            this._element.classList.add(CLASS_NAME_COLLAPSE);
            EventHandler.trigger(this._element, EVENT_HIDDEN);
          };
          this._element.style[dimension] = "";
          this._queueCallback(complete, this._element, true);
        }
        // Private
        _isShown(element = this._element) {
          return element.classList.contains(CLASS_NAME_SHOW);
        }
        _configAfterMerge(config) {
          config.toggle = Boolean(config.toggle);
          config.parent = index_js.getElement(config.parent);
          return config;
        }
        _getDimension() {
          return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
        }
        _initializeChildren() {
          if (!this._config.parent) {
            return;
          }
          const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE);
          for (const element of children) {
            const selected = SelectorEngine.getElementFromSelector(element);
            if (selected) {
              this._addAriaAndCollapsedClass([element], this._isShown(selected));
            }
          }
        }
        _getFirstLevelChildren(selector) {
          const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
          return SelectorEngine.find(selector, this._config.parent).filter((element) => !children.includes(element));
        }
        _addAriaAndCollapsedClass(triggerArray, isOpen) {
          if (!triggerArray.length) {
            return;
          }
          for (const element of triggerArray) {
            element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
            element.setAttribute("aria-expanded", isOpen);
          }
        }
        // Static
        static jQueryInterface(config) {
          const _config = {};
          if (typeof config === "string" && /show|hide/.test(config)) {
            _config.toggle = false;
          }
          return this.each(function() {
            const data = Collapse.getOrCreateInstance(this, _config);
            if (typeof config === "string") {
              if (typeof data[config] === "undefined") {
                throw new TypeError(`No method named "${config}"`);
              }
              data[config]();
            }
          });
        }
      }
      EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
        if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
          event.preventDefault();
        }
        for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) {
          Collapse.getOrCreateInstance(element, {
            toggle: false
          }).toggle();
        }
      });
      index_js.defineJQueryPlugin(Collapse);
      return Collapse;
    });
  }
});

// app/layout/app-layout/index.jsx
var import_classnames2 = __toESM(require_classnames(), 1);

// app/layout/Navbar/CompactMenu.jsx
var import_react2 = __toESM(require_react(), 1);

// app/assets/img/brand-sm.svg
var brand_sm_default = "/build/_assets/brand-sm-UJQMLUAN.svg";

// app/assets/img/Jampack.svg
var Jampack_default = "/build/_assets/Jampack-IJXK5JS3.svg";

// app/layout/Navbar/NavHeader.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/layout/Navbar/NavHeader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/layout/Navbar/NavHeader.jsx"
  );
  import.meta.hot.lastModified = "1757576009820.4795";
}
var NavHeader = () => {
  _s();
  const {
    dispatch
  } = useGlobalStateContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-header d-xl-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "navbar-brand", to: "/dashboard", prefetch: "intent", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "brand-img img-fluid", src: brand_sm_default, alt: "brand" }, void 0, false, {
        fileName: "app/layout/Navbar/NavHeader.jsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "brand-img img-fluid", src: Jampack_default, alt: "brand" }, void 0, false, {
        fileName: "app/layout/Navbar/NavHeader.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/layout/Navbar/NavHeader.jsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { id: "tggl-btn", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover navbar-toggle", onClick: () => dispatch({
      type: "sidebar_toggle"
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "svg-icon fs-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowBarToLeft, {}, void 0, false, {
      fileName: "app/layout/Navbar/NavHeader.jsx",
      lineNumber: 46,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/layout/Navbar/NavHeader.jsx",
      lineNumber: 45,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/layout/Navbar/NavHeader.jsx",
      lineNumber: 44,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/layout/Navbar/NavHeader.jsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/layout/Navbar/NavHeader.jsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/layout/Navbar/NavHeader.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_s(NavHeader, "XJzbkUw8PwFr4WEPuknUorYYQ9M=", false, function() {
  return [useGlobalStateContext];
});
_c = NavHeader;
var NavHeader_default = NavHeader;
var _c;
$RefreshReg$(_c, "NavHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/layout/Navbar/NavMenu.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/layout/Navbar/NavMenu.jsx"
  );
  import.meta.hot.lastModified = "1757823857478.9773";
}
var NavMenu = [
  {
    group: "",
    contents: [
      {
        name: "Trang ch\u1EE7",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Template, {}, void 0, false, {
          fileName: "app/layout/Navbar/NavMenu.jsx",
          lineNumber: 20,
          columnNumber: 15
        }, this),
        path: "/dashboard"
      }
    ]
  },
  {
    group: "",
    contents: [
      {
        name: "Ph\xE2n t\xEDch c\xF4ng ty",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Template, {}, void 0, false, {
          fileName: "app/layout/Navbar/NavMenu.jsx",
          lineNumber: 30,
          columnNumber: 15
        }, this),
        path: "/analysis/company"
      }
    ]
  },
  {
    group: "",
    contents: [
      {
        name: "Ph\xE2n t\xEDch ng\xE0nh",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Template, {}, void 0, false, {
          fileName: "app/layout/Navbar/NavMenu.jsx",
          lineNumber: 40,
          columnNumber: 15
        }, this),
        path: "/analysis/major"
      }
    ]
  },
  {
    group: "",
    contents: [
      {
        name: "V\xE0ng v\xE0 ngo\u1EA1i t\u1EC7",
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Template, {}, void 0, false, {
          fileName: "app/layout/Navbar/NavMenu.jsx",
          lineNumber: 50,
          columnNumber: 15
        }, this),
        path: "/analysis/gold"
      }
    ]
  }
  // {
  //   group: "Apps",
  //   contents: [
  //     {
  //       id: "dash_chat",
  //       name: "Chat",
  //       icon: <Icons.MessageDots />,
  //       path: "/apps/chat/",
  //       childrens: [
  //         {
  //           name: "Chats",
  //           path: "/apps/chat/chats",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "Groups",
  //           path: "/apps/chat/group",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "Contacts",
  //           path: "/apps/chat/contact",
  //           grp_name: "apps",
  //         },
  //       ],
  //     },
  //     {
  //       id: "dash_chatpop",
  //       name: "Chat Popup",
  //       icon: <Icons.MessageCircle />,
  //       path: "/apps/chat-popup/",
  //       childrens: [
  //         {
  //           name: "Direct Message",
  //           path: "/apps/chat-popup/direct-message",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "Chatbot",
  //           path: "/apps/chat-popup/chat-bot",
  //           grp_name: "apps",
  //         },
  //       ],
  //     },
  //     {
  //       id: "dash_chatpop",
  //       name: "Calendar",
  //       icon: <Icons.CalendarTime />,
  //       path: "/apps/calendar",
  //       grp_name: "apps",
  //     },
  //     {
  //       name: "Email",
  //       icon: <Icons.Inbox />,
  //       path: "/apps/email",
  //       grp_name: "apps",
  //     },
  //     {
  //       id: "dash_scrumboard",
  //       name: "Scrumboard",
  //       icon: <Icons.LayoutKanban />,
  //       path: "/apps/scrumboard/",
  //       iconBadge: (
  //         <HkBadge
  //           bg="primary"
  //           size="sm"
  //           pill
  //           className="position-top-end-overflow"
  //         >
  //           3
  //         </HkBadge>
  //       ),
  //       childrens: [
  //         {
  //           name: "All Boards",
  //           path: "/apps/scrumboard/project-board",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "Project Kanban",
  //           path: "/apps/scrumboard/kanban-board",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "Pipeline Kanban",
  //           path: "/apps/scrumboard/pipeline",
  //           grp_name: "apps",
  //         },
  //       ],
  //     },
  //     {
  //       id: "dash_contact",
  //       name: "Contact",
  //       icon: <Icons.Notebook />,
  //       path: "/apps/contact/",
  //       childrens: [
  //         {
  //           name: "Contact List",
  //           path: "/apps/contact/contact-list",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "Contact Cards",
  //           path: "/apps/contact/contact-cards",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "Edit Contact",
  //           path: "/apps/contact/edit-contact",
  //           grp_name: "apps",
  //         },
  //       ],
  //     },
  //     {
  //       id: "dash_file",
  //       name: "File Manager",
  //       icon: <Icons.FileCheck />,
  //       path: "/apps/file-manager/",
  //       childrens: [
  //         {
  //           name: "List View",
  //           path: "/apps/file-manager/list-view",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "Grid View",
  //           path: "/apps/file-manager/grid-view",
  //           grp_name: "apps",
  //         },
  //       ],
  //     },
  //     {
  //       name: "Gallery",
  //       icon: <Icons.Photo />,
  //       path: "/apps/gallery",
  //       grp_name: "apps",
  //     },
  //     {
  //       id: "dash_task",
  //       name: "Todo",
  //       icon: <Icons.ListDetails />,
  //       path: "/apps/todo/",
  //       badge: (
  //         <HkBadge bg="success" soft className="ms-2">
  //           2
  //         </HkBadge>
  //       ),
  //       childrens: [
  //         {
  //           name: "Tasklist",
  //           path: "/apps/todo/task-list",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "Gantt",
  //           path: "/apps/todo/gantt",
  //           grp_name: "apps",
  //         },
  //       ],
  //     },
  //     {
  //       id: "dash_blog",
  //       name: "Blog",
  //       icon: <Icons.Browser />,
  //       path: "/apps/blog/",
  //       childrens: [
  //         {
  //           name: "Posts",
  //           path: "/apps/blog/posts",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "Add New Post",
  //           path: "/apps/blog/add-new-post",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "Post Detail",
  //           path: "/apps/blog/post-detail",
  //           grp_name: "apps",
  //         },
  //       ],
  //     },
  //     {
  //       id: "dash_invoice",
  //       name: "Invoices",
  //       icon: <Icons.FileDigit />,
  //       path: "/apps/invoices/",
  //       childrens: [
  //         {
  //           name: "Invoice List",
  //           path: "/apps/invoices/invoice-list",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "Invoice Templates",
  //           path: "/apps/invoices/invoice-templates",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "Create Invoice",
  //           path: "/apps/invoices/create-invoice",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "Invoice Preview",
  //           path: "/apps/invoices/invoice-preview",
  //           grp_name: "apps",
  //         },
  //       ],
  //     },
  //     {
  //       id: "dash_integ",
  //       name: "Integrations",
  //       icon: <Icons.Code />,
  //       path: "/apps/integrations/",
  //       childrens: [
  //         {
  //           name: "All Apps",
  //           path: "/apps/integrations/all-apps",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "App Detail",
  //           path: "/apps/integrations/app-detail",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "Integrations",
  //           path: "/apps/integrations/integration",
  //           grp_name: "apps",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // //Pages group
  // {
  //   group: "Pages",
  //   contents: [
  //     {
  //       id: "dash_pages",
  //       name: "Authentication",
  //       icon: <Icons.UserPlus />,
  //       path: "/auth/",
  //       childrens: [
  //         {
  //           id: "dash_log",
  //           name: "Log In",
  //           path: "/auth/login/",
  //           childrens: [
  //             {
  //               name: "Login",
  //               path: "/auth/login",
  //             },
  //             {
  //               name: "Login Simple",
  //               path: "/auth/login-simple",
  //             },
  //             {
  //               name: "Login Classic",
  //               path: "/auth/login-classic",
  //             },
  //           ],
  //         },
  //         {
  //           id: "dash_sign",
  //           name: "Sign Up",
  //           path: "/auth/signup/",
  //           childrens: [
  //             {
  //               name: "Signup",
  //               path: "/auth/signup",
  //             },
  //             {
  //               name: "Signup Simple",
  //               path: "/auth/signup-simple",
  //             },
  //             {
  //               name: "Signup Classic",
  //               path: "/auth/signup-classic",
  //             },
  //           ],
  //         },
  //         {
  //           name: "Lock Screen",
  //           path: "/auth/lock-screen",
  //         },
  //         {
  //           name: "Reset Password",
  //           path: "/auth/reset-password",
  //         },
  //         {
  //           name: "Error 404",
  //           path: "/error-404",
  //         },
  //         {
  //           name: "Error 503",
  //           path: "auth/error-503",
  //         },
  //       ],
  //     },
  //     {
  //       id: "dash_profile",
  //       name: "Profile",
  //       icon: <Icons.UserSearch />,
  //       path: "/profile",
  //       badgeIndicator: (
  //         <HkBadge
  //           bg="danger"
  //           indicator
  //           className="position-absolute top-0 start-100"
  //         />
  //       ),
  //       childrens: [
  //         {
  //           name: "Profile",
  //           path: "/profile",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "Edit Profile",
  //           path: "/profile/edit-profile",
  //           grp_name: "apps",
  //         },
  //         {
  //           name: "Account",
  //           path: "/profile/account",
  //           grp_name: "apps",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   group: "Documentation",
  //   contents: [
  //     {
  //       name: "Documentation",
  //       icon: <Icons.FileCode2 />,
  //       path: "https://remix-nubra-ui.vercel.app/introduction",
  //     },
  //     {
  //       name: "Components",
  //       icon: <Icons.Layout />,
  //       path: "https://remix-nubra-ui.vercel.app/avatar",
  //     },
  //   ],
  // },
];

// app/layout/Navbar/CompactMenu.jsx
var import_classnames = __toESM(require_classnames(), 1);

// app/utils/CompactNavInit.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/CompactNavInit.js"
  );
  import.meta.hot.lastModified = "1732594848000";
}
var compactMenu = function() {
  var horMenu = document.querySelector('[data-layout="navbar"] .hk-menu .menu-group');
  if (horMenu) {
    var horMenuRect = horMenu.getBoundingClientRect(), liTotalWidth = 0, liCount = 0, extraLiHide = 0;
    document.querySelectorAll(".more-nav-item").forEach(function(a) {
      a.remove();
    });
    var liElements = horMenu.firstChild.childNodes;
    for (var i = 0; i < liElements.length; i++) {
      liElements[i].removeAttribute("style");
      liTotalWidth += liElements[i].offsetWidth;
      liCount++;
    }
    if (window.innerWidth > 1199) {
      var visibleLi = parseInt(horMenuRect.width / (liTotalWidth / liCount)) - 2;
      visibleLi -= extraLiHide;
      if (visibleLi < liCount) {
        var horWrapper = document.createElement("li");
        horWrapper.className = "nav-item more-nav-item";
        horWrapper.id = "more_nav_item";
        horWrapper.innerHTML = "<a class='nav-link' href='#' data-bs-toggle='collapse' data-bs-target='#dash_more'><span class='nav-icon-wrap'><span class='svg-icon'><svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-dots' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'> <path stroke='none' d='M0 0h24v24H0z' fill='none'></path> <circle cx='5' cy='12' r='1'></circle> <circle cx='12' cy='12' r='1'></circle> <circle cx='19' cy='12' r='1'></circle></svg></span></span></a><ul id='dash_more' class='nav flex-column collapse nav-children'></ul>";
        var ulElement = horMenu.querySelector("ul");
        for (i = visibleLi; i < liCount; i++) {
          var currentLi = liElements[i], clone = currentLi.cloneNode(true);
          horWrapper.querySelector("ul").appendChild(clone);
          currentLi.style.display = "none";
        }
        ulElement.appendChild(horWrapper);
      }
    }
  }
  var targetElementsHor = document.querySelectorAll('[data-layout="navbar"] .hk-menu .menu-content-wrap .navbar-nav li');
  for (i = 0; i < targetElementsHor.length; i++) {
    targetElementsHor[i].addEventListener(
      "mouseenter",
      function() {
        var ulElement2 = this.querySelector("ul");
        if (ulElement2) {
          var ulOff = ulElement2.getBoundingClientRect();
          var ulLeft = ulOff.left;
          var ulWidth = ulElement2.offsetWidth;
          var isEntirelyVisible = ulLeft + ulWidth <= window.innerWidth;
          if (!isEntirelyVisible) {
            this.classList.add("edge");
          }
        }
      }
    );
    targetElementsHor[i].addEventListener("mouseleave", function() {
      this.classList.remove("edge");
    });
  }
};

// app/layout/Navbar/CompactMenu.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/layout/Navbar/CompactMenu.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/layout/Navbar/CompactMenu.jsx"
  );
  import.meta.hot.lastModified = "1757576121076.2822";
}
var CompactMenu = () => {
  _s2();
  const {
    dispatch
  } = useGlobalStateContext();
  const [activeMenu, setActiveMenu] = (0, import_react2.useState)();
  const [activeSubMenu, setActiveSubMenu] = (0, import_react2.useState)();
  const width = useWindowWidth();
  const {
    pathname
  } = useLocation();
  (0, import_react2.useEffect)(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);
  (0, import_react2.useEffect)(() => {
    setTimeout(() => {
      compactMenu();
    }, 300);
  });
  (0, import_react2.useEffect)(() => {
    if (width) {
      compactMenu();
    }
  }, [width]);
  const navigate = useNavigate();
  (0, import_react2.useEffect)(() => {
    require_collapse();
    document.addEventListener("click", function(e) {
      const target = e.target.closest(".more-nav-item");
      const extra = e.target.closest(".extra-link");
      if (target && !extra) {
        e.preventDefault();
        const newTarget = e.target.closest(".nav-link");
        navigate(newTarget.getAttribute("href"));
      }
    });
  }, [navigate]);
  const handleClick = (menuName) => {
    setActiveMenu(menuName);
    if (width < 1199) {
      dispatch({
        type: "sidebar_toggle"
      });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hk-menu", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavHeader_default, {}, void 0, false, {
      fileName: "app/layout/Navbar/CompactMenu.jsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "menu-content-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Container_default, { fluid: true, className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { as: "ul", className: "navbar-nav flex-column", children: NavMenu.map((routes, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react2.default.Fragment, { children: routes.contents.map((menus, ind) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { as: "li", className: (0, import_classnames.default)({
      active: pathname.startsWith(menus.path)
    }), children: menus.childrens ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { "data-bs-toggle": "collapse", "data-bs-target": `#${menus.id}`, "aria-expanded": activeMenu === menus.name ? "true" : "false", onClick: () => setActiveMenu(menus.name), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: (0, import_classnames.default)("nav-link-text", {
          "position-relative": menus.badgeIndicator
        }), children: [
          menus.name,
          menus.badgeIndicator && menus.badgeIndicator
        ] }, void 0, true, {
          fileName: "app/layout/Navbar/CompactMenu.jsx",
          lineNumber: 94,
          columnNumber: 29
        }, this),
        menus.badge && menus.badge
      ] }, void 0, true, {
        fileName: "app/layout/Navbar/CompactMenu.jsx",
        lineNumber: 93,
        columnNumber: 27
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { as: "ul", id: menus.id, className: (0, import_classnames.default)("nav flex-column nav-children", {
        collapse: activeMenu !== menus.name
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "nav flex-column", children: menus.childrens.map((subMenu, indx) => subMenu.childrens ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { as: "li", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { to: subMenu.path, end: true, className: "nav-link", "data-bs-toggle": "collapse", "data-bs-target": `#${subMenu.id}`, "aria-expanded": activeSubMenu === subMenu.name ? "true" : "false", onClick: () => setActiveSubMenu(subMenu.name), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: subMenu.name }, void 0, false, {
          fileName: "app/layout/Navbar/CompactMenu.jsx",
          lineNumber: 110,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/layout/Navbar/CompactMenu.jsx",
          lineNumber: 109,
          columnNumber: 39
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { as: "ul", id: subMenu.id, className: (0, import_classnames.default)("nav flex-column nav-children", {
          collapse: activeSubMenu !== subMenu.name
        }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "nav flex-column", children: subMenu.childrens.map((childrenPath, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "nav-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { to: childrenPath.path, end: true, onClick: handleClick, className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: childrenPath.name }, void 0, false, {
          fileName: "app/layout/Navbar/CompactMenu.jsx",
          lineNumber: 122,
          columnNumber: 53
        }, this) }, void 0, false, {
          fileName: "app/layout/Navbar/CompactMenu.jsx",
          lineNumber: 121,
          columnNumber: 51
        }, this) }, i, false, {
          fileName: "app/layout/Navbar/CompactMenu.jsx",
          lineNumber: 120,
          columnNumber: 89
        }, this)) }, void 0, false, {
          fileName: "app/layout/Navbar/CompactMenu.jsx",
          lineNumber: 119,
          columnNumber: 43
        }, this) }, void 0, false, {
          fileName: "app/layout/Navbar/CompactMenu.jsx",
          lineNumber: 118,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/layout/Navbar/CompactMenu.jsx",
          lineNumber: 115,
          columnNumber: 39
        }, this)
      ] }, indx, true, {
        fileName: "app/layout/Navbar/CompactMenu.jsx",
        lineNumber: 108,
        columnNumber: 93
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { to: subMenu.path, end: true, onClick: handleClick, className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: subMenu.name }, void 0, false, {
        fileName: "app/layout/Navbar/CompactMenu.jsx",
        lineNumber: 132,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/layout/Navbar/CompactMenu.jsx",
        lineNumber: 131,
        columnNumber: 39
      }, this) }, indx, false, {
        fileName: "app/layout/Navbar/CompactMenu.jsx",
        lineNumber: 130,
        columnNumber: 51
      }, this)) }, void 0, false, {
        fileName: "app/layout/Navbar/CompactMenu.jsx",
        lineNumber: 107,
        columnNumber: 31
      }, this) }, void 0, false, {
        fileName: "app/layout/Navbar/CompactMenu.jsx",
        lineNumber: 106,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/layout/Navbar/CompactMenu.jsx",
        lineNumber: 103,
        columnNumber: 27
      }, this)
    ] }, void 0, true, {
      fileName: "app/layout/Navbar/CompactMenu.jsx",
      lineNumber: 92,
      columnNumber: 42
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: routes.group === "Documentation" ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { href: menus.path, target: "_blank", className: "extra-link", rel: "noreferrer", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: menus.name }, void 0, false, {
        fileName: "app/layout/Navbar/CompactMenu.jsx",
        lineNumber: 142,
        columnNumber: 31
      }, this),
      menus.badge && menus.badge
    ] }, void 0, true, {
      fileName: "app/layout/Navbar/CompactMenu.jsx",
      lineNumber: 141,
      columnNumber: 63
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { to: menus.path, end: true, onClick: () => handleClick(menus.name), className: "nav-link", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "nav-link-text", children: menus.name }, void 0, false, {
        fileName: "app/layout/Navbar/CompactMenu.jsx",
        lineNumber: 147,
        columnNumber: 31
      }, this),
      menus.badge && menus.badge
    ] }, void 0, true, {
      fileName: "app/layout/Navbar/CompactMenu.jsx",
      lineNumber: 146,
      columnNumber: 43
    }, this) }, void 0, false, {
      fileName: "app/layout/Navbar/CompactMenu.jsx",
      lineNumber: 140,
      columnNumber: 31
    }, this) }, ind, false, {
      fileName: "app/layout/Navbar/CompactMenu.jsx",
      lineNumber: 89,
      columnNumber: 56
    }, this)) }, index, false, {
      fileName: "app/layout/Navbar/CompactMenu.jsx",
      lineNumber: 88,
      columnNumber: 47
    }, this)) }, void 0, false, {
      fileName: "app/layout/Navbar/CompactMenu.jsx",
      lineNumber: 87,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/layout/Navbar/CompactMenu.jsx",
      lineNumber: 86,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/layout/Navbar/CompactMenu.jsx",
      lineNumber: 85,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/layout/Navbar/CompactMenu.jsx",
      lineNumber: 84,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/layout/Navbar/CompactMenu.jsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
};
_s2(CompactMenu, "w1pD680kkOSG2rZwV2IFivIY7o4=", false, function() {
  return [useGlobalStateContext, useWindowWidth, useLocation, useNavigate];
});
_c2 = CompactMenu;
var CompactMenu_default = CompactMenu;
var _c2;
$RefreshReg$(_c2, "CompactMenu");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/layout/Navbar/index.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/layout/Navbar/index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/layout/Navbar/index.jsx"
  );
  import.meta.hot.lastModified = "1757670733543.0837";
}
var CompactNav = () => {
  _s3();
  const {
    dispatch
  } = useGlobalStateContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Navbar_default, { expand: "xl", className: "hk-navbar navbar-light fixed-top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Container_default, { fluid: true, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "nav-start-wrap flex-fill", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/dashboard", prefetch: "intent", className: "navbar-brand d-xl-flex d-none", children: [
        "VSMI",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Vietnam Stock Market Insight" }, void 0, false, {
          fileName: "app/layout/Navbar/index.jsx",
          lineNumber: 42,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/Navbar/index.jsx",
        lineNumber: 40,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { onClick: () => dispatch({
        type: "sidebar_toggle"
      }), className: "btn-icon btn-rounded btn-flush-dark flush-soft-hover navbar-toggle d-xl-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(align_left_default, {}, void 0, false, {
        fileName: "app/layout/Navbar/index.jsx",
        lineNumber: 53,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/layout/Navbar/index.jsx",
        lineNumber: 52,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/layout/Navbar/index.jsx",
        lineNumber: 51,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/layout/Navbar/index.jsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CompactMenu_default, {}, void 0, false, {
        fileName: "app/layout/Navbar/index.jsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { onClick: () => dispatch({
        type: "sidebar_toggle"
      }), className: "hk-menu-backdrop" }, void 0, false, {
        fileName: "app/layout/Navbar/index.jsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/layout/Navbar/index.jsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "nav-end-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default, { className: "navbar-nav flex-row", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { className: "ps-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-rounded avatar-xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar12_default, alt: "user", className: "avatar-img" }, void 0, false, {
        fileName: "app/layout/Navbar/index.jsx",
        lineNumber: 302,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/layout/Navbar/index.jsx",
        lineNumber: 301,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/layout/Navbar/index.jsx",
        lineNumber: 300,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-primary avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: "Hk" }, void 0, false, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 310,
            columnNumber: 27
          }, this) }, void 0, false, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 309,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 308,
            columnNumber: 23
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "d-block fw-medium text-dark", children: "Hencework" }, void 0, false, {
                fileName: "app/layout/Navbar/index.jsx",
                lineNumber: 315,
                columnNumber: 27
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { align: "end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media align-items-center active-user mb-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-primary avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: "Hk" }, void 0, false, {
                    fileName: "app/layout/Navbar/index.jsx",
                    lineNumber: 323,
                    columnNumber: 37
                  }, this) }, void 0, false, {
                    fileName: "app/layout/Navbar/index.jsx",
                    lineNumber: 322,
                    columnNumber: 35
                  }, this) }, void 0, false, {
                    fileName: "app/layout/Navbar/index.jsx",
                    lineNumber: 321,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "#", className: "d-flex link-dark", children: [
                      "Hencework",
                      " ",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-checkbox-circle-fill fs-7 text-primary ms-1" }, void 0, false, {
                        fileName: "app/layout/Navbar/index.jsx",
                        lineNumber: 329,
                        columnNumber: 37
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/layout/Navbar/index.jsx",
                      lineNumber: 327,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "#", className: "d-block fs-8 link-secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("u", { children: "Manage your account" }, void 0, false, {
                      fileName: "app/layout/Navbar/index.jsx",
                      lineNumber: 332,
                      columnNumber: 37
                    }, this) }, void 0, false, {
                      fileName: "app/layout/Navbar/index.jsx",
                      lineNumber: 331,
                      columnNumber: 35
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/layout/Navbar/index.jsx",
                    lineNumber: 326,
                    columnNumber: 33
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/layout/Navbar/index.jsx",
                  lineNumber: 320,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media align-items-center mb-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar12_default, alt: "user", className: "avatar-img" }, void 0, false, {
                    fileName: "app/layout/Navbar/index.jsx",
                    lineNumber: 339,
                    columnNumber: 37
                  }, this) }, void 0, false, {
                    fileName: "app/layout/Navbar/index.jsx",
                    lineNumber: 338,
                    columnNumber: 35
                  }, this) }, void 0, false, {
                    fileName: "app/layout/Navbar/index.jsx",
                    lineNumber: 337,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "#", className: "d-block link-dark", children: "Jampack Team" }, void 0, false, {
                      fileName: "app/layout/Navbar/index.jsx",
                      lineNumber: 343,
                      columnNumber: 35
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "#", className: "d-block fs-8 link-secondary", children: "contact@hencework.com" }, void 0, false, {
                      fileName: "app/layout/Navbar/index.jsx",
                      lineNumber: 346,
                      columnNumber: 35
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/layout/Navbar/index.jsx",
                    lineNumber: 342,
                    columnNumber: 33
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/layout/Navbar/index.jsx",
                  lineNumber: 336,
                  columnNumber: 31
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "outline-light", size: "sm", className: "btn-block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(plus_default, {}, void 0, false, {
                    fileName: "app/layout/Navbar/index.jsx",
                    lineNumber: 355,
                    columnNumber: 39
                  }, this) }, void 0, false, {
                    fileName: "app/layout/Navbar/index.jsx",
                    lineNumber: 354,
                    columnNumber: 37
                  }, this) }, void 0, false, {
                    fileName: "app/layout/Navbar/index.jsx",
                    lineNumber: 353,
                    columnNumber: 35
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Add Account" }, void 0, false, {
                    fileName: "app/layout/Navbar/index.jsx",
                    lineNumber: 358,
                    columnNumber: 35
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/layout/Navbar/index.jsx",
                  lineNumber: 352,
                  columnNumber: 33
                }, this) }, void 0, false, {
                  fileName: "app/layout/Navbar/index.jsx",
                  lineNumber: 351,
                  columnNumber: 31
                }, this)
              ] }, void 0, true, {
                fileName: "app/layout/Navbar/index.jsx",
                lineNumber: 319,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/layout/Navbar/index.jsx",
                lineNumber: 318,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/layout/Navbar/index.jsx",
              lineNumber: 314,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "fs-7", children: "contact@hencework.com" }, void 0, false, {
              fileName: "app/layout/Navbar/index.jsx",
              lineNumber: 364,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "#", className: "d-block fs-8 link-secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("u", { children: "Sign Out" }, void 0, false, {
              fileName: "app/layout/Navbar/index.jsx",
              lineNumber: 366,
              columnNumber: 27
            }, this) }, void 0, false, {
              fileName: "app/layout/Navbar/index.jsx",
              lineNumber: 365,
              columnNumber: 25
            }, this)
          ] }, void 0, true, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 313,
            columnNumber: 23
          }, this)
        ] }, void 0, true, {
          fileName: "app/layout/Navbar/index.jsx",
          lineNumber: 307,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/layout/Navbar/index.jsx",
          lineNumber: 306,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
          fileName: "app/layout/Navbar/index.jsx",
          lineNumber: 371,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { as: Link, to: "/profile", children: "Profile" }, void 0, false, {
          fileName: "app/layout/Navbar/index.jsx",
          lineNumber: 372,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "me-2", children: "Offers" }, void 0, false, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 376,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "badge badge-sm badge-soft-pink", children: "2" }, void 0, false, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 377,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/layout/Navbar/index.jsx",
          lineNumber: 375,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
          fileName: "app/layout/Navbar/index.jsx",
          lineNumber: 379,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h6", { className: "dropdown-header", children: "Manage Account" }, void 0, false, {
          fileName: "app/layout/Navbar/index.jsx",
          lineNumber: 380,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "dropdown-icon feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(credit_card_default, {}, void 0, false, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 383,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 382,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Payment methods" }, void 0, false, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 385,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/layout/Navbar/index.jsx",
          lineNumber: 381,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "dropdown-icon feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(check_square_default, {}, void 0, false, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 389,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 388,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Subscriptions" }, void 0, false, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 391,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/layout/Navbar/index.jsx",
          lineNumber: 387,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "dropdown-icon feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(settings_default, {}, void 0, false, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 395,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 394,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Settings" }, void 0, false, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 397,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/layout/Navbar/index.jsx",
          lineNumber: 393,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
          fileName: "app/layout/Navbar/index.jsx",
          lineNumber: 399,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "dropdown-icon feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(tag_default, {}, void 0, false, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 402,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 401,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Raise a ticket" }, void 0, false, {
            fileName: "app/layout/Navbar/index.jsx",
            lineNumber: 404,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/layout/Navbar/index.jsx",
          lineNumber: 400,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
          fileName: "app/layout/Navbar/index.jsx",
          lineNumber: 406,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Terms & Conditions" }, void 0, false, {
          fileName: "app/layout/Navbar/index.jsx",
          lineNumber: 407,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Help & Support" }, void 0, false, {
          fileName: "app/layout/Navbar/index.jsx",
          lineNumber: 408,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/layout/Navbar/index.jsx",
        lineNumber: 305,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/layout/Navbar/index.jsx",
      lineNumber: 299,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/layout/Navbar/index.jsx",
      lineNumber: 298,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/layout/Navbar/index.jsx",
      lineNumber: 67,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/layout/Navbar/index.jsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/layout/Navbar/index.jsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/layout/Navbar/index.jsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
};
_s3(CompactNav, "XJzbkUw8PwFr4WEPuknUorYYQ9M=", false, function() {
  return [useGlobalStateContext];
});
_c3 = CompactNav;
var Navbar_default2 = CompactNav;
var _c3;
$RefreshReg$(_c3, "CompactNav");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/@hk-components/@hk-loader/@HkLoader.jsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/@hk-components/@hk-loader/@HkLoader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-loader/@HkLoader.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var HkLoader = ({
  loadingState
}) => {
  _s4();
  const [progress, setProgress] = (0, import_react5.useState)(0);
  (0, import_react5.useEffect)(() => {
    if (loadingState === "loading") {
      const interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress >= 100 ? 0 : prevProgress + 10);
      }, 10);
      return () => {
        clearInterval(interval);
      };
    } else {
      setProgress(100);
    }
  }, [loadingState]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "hk-loading-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "loading-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "loading-bar", style: {
    width: `${progress}%`
  } }, void 0, false, {
    fileName: "app/@hk-components/@hk-loader/@HkLoader.jsx",
    lineNumber: 42,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/@hk-components/@hk-loader/@HkLoader.jsx",
    lineNumber: 41,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/@hk-components/@hk-loader/@HkLoader.jsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_s4(HkLoader, "ZVQpwjU6Dz5R8VBOzPsnxGRmMVo=");
_c4 = HkLoader;
var HkLoader_default = HkLoader;
var _c4;
$RefreshReg$(_c4, "HkLoader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/layout/app-layout/index.jsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/layout/app-layout/index.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/layout/app-layout/index.jsx"
  );
  import.meta.hot.lastModified = "1757575967234.9731";
}
var MainLayout = () => {
  _s5();
  const {
    states
  } = useGlobalStateContext();
  const {
    pathname
  } = useLocation();
  const appRoutes = pathname.match("/apps/");
  const navigation = useNavigation();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: (0, import_classnames2.default)("hk-wrapper", {
    hk__email__backdrop: states.emailState.maximize
  }, {
    "hk-pg-auth": pathname === "/error-404"
  }), "data-layout": "navbar", "data-navbar-style": states.layoutState.topNavCollapse ? "collapsed" : "", "data-layout-style": states.layoutState.isSidebarCollapsed ? "collapsed" : "default", "data-menu": "light", "data-footer": "simple", children: [
    navigation.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(HkLoader_default, { loadingState: navigation.state }, void 0, false, {
      fileName: "app/layout/app-layout/index.jsx",
      lineNumber: 45,
      columnNumber: 40
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Navbar_default2, {}, void 0, false, {
      fileName: "app/layout/app-layout/index.jsx",
      lineNumber: 46,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: (0, import_classnames2.default)("hk-pg-wrapper", {
      "pb-0": appRoutes
    }), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/layout/app-layout/index.jsx",
        lineNumber: 50,
        columnNumber: 11
      }, this),
      !appRoutes && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(PageFooter_default, {}, void 0, false, {
        fileName: "app/layout/app-layout/index.jsx",
        lineNumber: 51,
        columnNumber: 26
      }, this)
    ] }, void 0, true, {
      fileName: "app/layout/app-layout/index.jsx",
      lineNumber: 47,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/layout/app-layout/index.jsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/layout/app-layout/index.jsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
};
_s5(MainLayout, "sHC5Lc240YEBR59jCQa5O+dt4PA=", false, function() {
  return [useGlobalStateContext, useLocation, useNavigation];
});
_c5 = MainLayout;
var app_layout_default = MainLayout;
var _c5;
$RefreshReg$(_c5, "MainLayout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  app_layout_default as default
};
/*! Bundled license information:

bootstrap/js/dist/dom/data.js:
  (*!
    * Bootstrap data.js v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/index.js:
  (*!
    * Bootstrap index.js v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/event-handler.js:
  (*!
    * Bootstrap event-handler.js v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/manipulator.js:
  (*!
    * Bootstrap manipulator.js v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/util/config.js:
  (*!
    * Bootstrap config.js v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/base-component.js:
  (*!
    * Bootstrap base-component.js v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/dom/selector-engine.js:
  (*!
    * Bootstrap selector-engine.js v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)

bootstrap/js/dist/collapse.js:
  (*!
    * Bootstrap collapse.js v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
*/
//# sourceMappingURL=/build/layout/app-layout/index-LLCBLJDE.js.map
