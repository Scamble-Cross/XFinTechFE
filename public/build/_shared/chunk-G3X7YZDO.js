import {
  hk_tags_default
} from "/build/_shared/chunk-QVKKGQ72.js";
import {
  HkDropZone_default
} from "/build/_shared/chunk-CXWPXLC3.js";
import {
  hk_collapse_default
} from "/build/_shared/chunk-4E2L3NE2.js";
import {
  DateRangePicker
} from "/build/_shared/chunk-XROUZ3B7.js";
import {
  HkTooltip_default
} from "/build/_shared/chunk-NYEYMOIV.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  plus_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import {
  Button_default,
  Card_default,
  Form_default,
  Nav_default,
  Tab_default
} from "/build/_shared/chunk-VRR24KJX.js";
import {
  require_prop_types
} from "/build/_shared/chunk-HFWHD4VB.js";
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

// node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js
var React = __toESM(require_react());

// node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js
var PropTypes = __toESM(require_prop_types());
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var eventPropTypes = {
  onActivate: PropTypes.func,
  onAddUndo: PropTypes.func,
  onBeforeAddUndo: PropTypes.func,
  onBeforeExecCommand: PropTypes.func,
  onBeforeGetContent: PropTypes.func,
  onBeforeRenderUI: PropTypes.func,
  onBeforeSetContent: PropTypes.func,
  onBeforePaste: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClearUndos: PropTypes.func,
  onClick: PropTypes.func,
  onContextMenu: PropTypes.func,
  onCommentChange: PropTypes.func,
  onCompositionEnd: PropTypes.func,
  onCompositionStart: PropTypes.func,
  onCompositionUpdate: PropTypes.func,
  onCopy: PropTypes.func,
  onCut: PropTypes.func,
  onDblclick: PropTypes.func,
  onDeactivate: PropTypes.func,
  onDirty: PropTypes.func,
  onDrag: PropTypes.func,
  onDragDrop: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragGesture: PropTypes.func,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func,
  onExecCommand: PropTypes.func,
  onFocus: PropTypes.func,
  onFocusIn: PropTypes.func,
  onFocusOut: PropTypes.func,
  onGetContent: PropTypes.func,
  onHide: PropTypes.func,
  onInit: PropTypes.func,
  onInput: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onLoadContent: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseUp: PropTypes.func,
  onNodeChange: PropTypes.func,
  onObjectResizeStart: PropTypes.func,
  onObjectResized: PropTypes.func,
  onObjectSelected: PropTypes.func,
  onPaste: PropTypes.func,
  onPostProcess: PropTypes.func,
  onPostRender: PropTypes.func,
  onPreProcess: PropTypes.func,
  onProgressState: PropTypes.func,
  onRedo: PropTypes.func,
  onRemove: PropTypes.func,
  onReset: PropTypes.func,
  onSaveContent: PropTypes.func,
  onSelectionChange: PropTypes.func,
  onSetAttrib: PropTypes.func,
  onSetContent: PropTypes.func,
  onShow: PropTypes.func,
  onSubmit: PropTypes.func,
  onUndo: PropTypes.func,
  onVisualAid: PropTypes.func,
  onSkinLoadError: PropTypes.func,
  onThemeLoadError: PropTypes.func,
  onModelLoadError: PropTypes.func,
  onPluginLoadError: PropTypes.func,
  onIconsLoadError: PropTypes.func,
  onLanguageLoadError: PropTypes.func,
  onScriptsLoad: PropTypes.func,
  onScriptsLoadError: PropTypes.func
};
var EditorPropTypes = __assign({ apiKey: PropTypes.string, licenseKey: PropTypes.string, id: PropTypes.string, inline: PropTypes.bool, init: PropTypes.object, initialValue: PropTypes.string, onEditorChange: PropTypes.func, value: PropTypes.string, tagName: PropTypes.string, tabIndex: PropTypes.number, cloudChannel: PropTypes.string, plugins: PropTypes.oneOfType([PropTypes.string, PropTypes.array]), toolbar: PropTypes.oneOfType([PropTypes.string, PropTypes.array]), disabled: PropTypes.bool, readonly: PropTypes.bool, textareaName: PropTypes.string, tinymceScriptSrc: PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    async: PropTypes.bool,
    defer: PropTypes.bool
  }))
]), rollback: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([false])]), scriptLoading: PropTypes.shape({
  async: PropTypes.bool,
  defer: PropTypes.bool,
  delay: PropTypes.number
}) }, eventPropTypes);

// node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/TinyMCE.js
var getTinymce = function(view) {
  var global = view;
  return global && global.tinymce ? global.tinymce : null;
};

// node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js
var isFunction = function(x) {
  return typeof x === "function";
};
var isEventProp = function(name) {
  return name in eventPropTypes;
};
var eventAttrToEventName = function(attrName) {
  return attrName.substr(2);
};
var configHandlers2 = function(handlerLookup, on, off, adapter, prevProps, props, boundHandlers) {
  var prevEventKeys = Object.keys(prevProps).filter(isEventProp);
  var currEventKeys = Object.keys(props).filter(isEventProp);
  var removedKeys = prevEventKeys.filter(function(key) {
    return props[key] === void 0;
  });
  var addedKeys = currEventKeys.filter(function(key) {
    return prevProps[key] === void 0;
  });
  removedKeys.forEach(function(key) {
    var eventName = eventAttrToEventName(key);
    var wrappedHandler = boundHandlers[eventName];
    off(eventName, wrappedHandler);
    delete boundHandlers[eventName];
  });
  addedKeys.forEach(function(key) {
    var wrappedHandler = adapter(handlerLookup, key);
    var eventName = eventAttrToEventName(key);
    boundHandlers[eventName] = wrappedHandler;
    on(eventName, wrappedHandler);
  });
};
var configHandlers = function(editor, prevProps, props, boundHandlers, lookup) {
  return configHandlers2(
    lookup,
    editor.on.bind(editor),
    editor.off.bind(editor),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    function(handlerLookup, key) {
      return function(e) {
        var _a;
        return (_a = handlerLookup(key)) === null || _a === void 0 ? void 0 : _a(e, editor);
      };
    },
    prevProps,
    props,
    boundHandlers
  );
};
var unique = 0;
var uuid = function(prefix) {
  var time = Date.now();
  var random = Math.floor(Math.random() * 1e9);
  unique++;
  return prefix + "_" + random + unique + String(time);
};
var isTextareaOrInput = function(element) {
  return element !== null && (element.tagName.toLowerCase() === "textarea" || element.tagName.toLowerCase() === "input");
};
var normalizePluginArray = function(plugins) {
  if (typeof plugins === "undefined" || plugins === "") {
    return [];
  }
  return Array.isArray(plugins) ? plugins : plugins.split(" ");
};
var mergePlugins = function(initPlugins, inputPlugins) {
  return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
};
var isBeforeInputEventAvailable = function() {
  return window.InputEvent && typeof InputEvent.prototype.getTargetRanges === "function";
};
var isInDoc = function(elem) {
  if (!("isConnected" in Node.prototype)) {
    var current = elem;
    var parent_1 = elem.parentNode;
    while (parent_1 != null) {
      current = parent_1;
      parent_1 = current.parentNode;
    }
    return current === elem.ownerDocument;
  }
  return elem.isConnected;
};
var setMode = function(editor, mode) {
  if (editor !== void 0) {
    if (editor.mode != null && typeof editor.mode === "object" && typeof editor.mode.set === "function") {
      editor.mode.set(mode);
    } else {
      editor.setMode(mode);
    }
  }
};
var getTinymceOrError = function(view) {
  var tinymce = getTinymce(view);
  if (!tinymce) {
    throw new Error("tinymce should have been loaded into global scope");
  }
  return tinymce;
};
var isDisabledOptionSupported = function(editor) {
  return editor.options && editor.options.isRegistered("disabled");
};

// node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/ScriptLoader2.js
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var injectScriptTag = function(doc, item, handler) {
  var _a, _b;
  var scriptTag = doc.createElement("script");
  scriptTag.referrerPolicy = "origin";
  scriptTag.type = "application/javascript";
  scriptTag.id = item.id;
  scriptTag.src = item.src;
  scriptTag.async = (_a = item.async) !== null && _a !== void 0 ? _a : false;
  scriptTag.defer = (_b = item.defer) !== null && _b !== void 0 ? _b : false;
  var loadHandler = function() {
    scriptTag.removeEventListener("load", loadHandler);
    scriptTag.removeEventListener("error", errorHandler);
    handler(item.src);
  };
  var errorHandler = function(err) {
    scriptTag.removeEventListener("load", loadHandler);
    scriptTag.removeEventListener("error", errorHandler);
    handler(item.src, err);
  };
  scriptTag.addEventListener("load", loadHandler);
  scriptTag.addEventListener("error", errorHandler);
  if (doc.head) {
    doc.head.appendChild(scriptTag);
  }
};
var createDocumentScriptLoader = function(doc) {
  var lookup = {};
  var scriptLoadOrErrorHandler = function(src, err) {
    var item = lookup[src];
    item.done = true;
    item.error = err;
    for (var _i = 0, _a = item.handlers; _i < _a.length; _i++) {
      var h = _a[_i];
      h(src, err);
    }
    item.handlers = [];
  };
  var loadScripts = function(items, success, failure) {
    var failureOrLog = function(err) {
      return failure !== void 0 ? failure(err) : console.error(err);
    };
    if (items.length === 0) {
      failureOrLog(new Error("At least one script must be provided"));
      return;
    }
    var successCount = 0;
    var failed = false;
    var loaded = function(_src, err) {
      if (failed) {
        return;
      }
      if (err) {
        failed = true;
        failureOrLog(err);
      } else if (++successCount === items.length) {
        success();
      }
    };
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
      var item = items_1[_i];
      var existing = lookup[item.src];
      if (existing) {
        if (existing.done) {
          loaded(item.src, existing.error);
        } else {
          existing.handlers.push(loaded);
        }
      } else {
        var id = uuid("tiny-");
        lookup[item.src] = {
          id,
          src: item.src,
          done: false,
          error: null,
          handlers: [loaded]
        };
        injectScriptTag(doc, __assign2({ id }, item), scriptLoadOrErrorHandler);
      }
    }
  };
  var deleteScripts = function() {
    var _a;
    for (var _i = 0, _b = Object.values(lookup); _i < _b.length; _i++) {
      var item = _b[_i];
      var scriptTag = doc.getElementById(item.id);
      if (scriptTag != null && scriptTag.tagName === "SCRIPT") {
        (_a = scriptTag.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(scriptTag);
      }
    }
    lookup = {};
  };
  var getDocument = function() {
    return doc;
  };
  return {
    loadScripts,
    deleteScripts,
    getDocument
  };
};
var createScriptLoader = function() {
  var cache = [];
  var getDocumentScriptLoader = function(doc) {
    var loader = cache.find(function(l) {
      return l.getDocument() === doc;
    });
    if (loader === void 0) {
      loader = createDocumentScriptLoader(doc);
      cache.push(loader);
    }
    return loader;
  };
  var loadList = function(doc, items, delay, success, failure) {
    var doLoad = function() {
      return getDocumentScriptLoader(doc).loadScripts(items, success, failure);
    };
    if (delay > 0) {
      setTimeout(doLoad, delay);
    } else {
      doLoad();
    }
  };
  var reinitialize = function() {
    for (var loader = cache.pop(); loader != null; loader = cache.pop()) {
      loader.deleteScripts();
    }
  };
  return {
    loadList,
    reinitialize
  };
};
var ScriptLoader = createScriptLoader();

// node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js
var __extends = function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign3 = function() {
  __assign3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
};
var changeEvents = "change keyup compositionend setcontent CommentChange";
var Editor = (
  /** @class */
  function(_super) {
    __extends(Editor2, _super);
    function Editor2(props) {
      var _a, _b, _c3;
      var _this = _super.call(this, props) || this;
      _this.rollbackTimer = void 0;
      _this.valueCursor = void 0;
      _this.rollbackChange = function() {
        var editor = _this.editor;
        var value = _this.props.value;
        if (editor && value && value !== _this.currentContent) {
          editor.undoManager.ignore(function() {
            editor.setContent(value);
            if (_this.valueCursor && (!_this.inline || editor.hasFocus())) {
              try {
                editor.selection.moveToBookmark(_this.valueCursor);
              } catch (_e) {
              }
            }
          });
        }
        _this.rollbackTimer = void 0;
      };
      _this.handleBeforeInput = function(_evt) {
        if (_this.props.value !== void 0 && _this.props.value === _this.currentContent && _this.editor) {
          if (!_this.inline || _this.editor.hasFocus()) {
            try {
              _this.valueCursor = _this.editor.selection.getBookmark(3);
            } catch (_e) {
            }
          }
        }
      };
      _this.handleBeforeInputSpecial = function(evt) {
        if (evt.key === "Enter" || evt.key === "Backspace" || evt.key === "Delete") {
          _this.handleBeforeInput(evt);
        }
      };
      _this.handleEditorChange = function(_evt) {
        var editor = _this.editor;
        if (editor && editor.initialized) {
          var newContent = editor.getContent();
          if (_this.props.value !== void 0 && _this.props.value !== newContent && _this.props.rollback !== false) {
            if (!_this.rollbackTimer) {
              _this.rollbackTimer = window.setTimeout(_this.rollbackChange, typeof _this.props.rollback === "number" ? _this.props.rollback : 200);
            }
          }
          if (newContent !== _this.currentContent) {
            _this.currentContent = newContent;
            if (isFunction(_this.props.onEditorChange)) {
              _this.props.onEditorChange(newContent, editor);
            }
          }
        }
      };
      _this.handleEditorChangeSpecial = function(evt) {
        if (evt.key === "Backspace" || evt.key === "Delete") {
          _this.handleEditorChange(evt);
        }
      };
      _this.initialise = function(attempts) {
        var _a2, _b2, _c4;
        if (attempts === void 0) {
          attempts = 0;
        }
        var target = _this.elementRef.current;
        if (!target) {
          return;
        }
        if (!isInDoc(target)) {
          if (attempts === 0) {
            setTimeout(function() {
              return _this.initialise(1);
            }, 1);
          } else if (attempts < 100) {
            setTimeout(function() {
              return _this.initialise(attempts + 1);
            }, 100);
          } else {
            throw new Error("tinymce can only be initialised when in a document");
          }
          return;
        }
        var tinymce = getTinymceOrError(_this.view);
        var finalInit = __assign3(__assign3(__assign3(__assign3({}, _this.props.init), { selector: void 0, target, disabled: _this.props.disabled, readonly: _this.props.readonly, inline: _this.inline, plugins: mergePlugins((_a2 = _this.props.init) === null || _a2 === void 0 ? void 0 : _a2.plugins, _this.props.plugins), toolbar: (_b2 = _this.props.toolbar) !== null && _b2 !== void 0 ? _b2 : (_c4 = _this.props.init) === null || _c4 === void 0 ? void 0 : _c4.toolbar }), _this.props.licenseKey ? { license_key: _this.props.licenseKey } : {}), { setup: function(editor) {
          _this.editor = editor;
          _this.bindHandlers({});
          if (_this.inline && !isTextareaOrInput(target)) {
            editor.once("PostRender", function(_evt) {
              editor.setContent(_this.getInitialValue(), { no_events: true });
            });
          }
          if (_this.props.init && isFunction(_this.props.init.setup)) {
            _this.props.init.setup(editor);
          }
          if (_this.props.disabled) {
            if (isDisabledOptionSupported(_this.editor)) {
              _this.editor.options.set("disabled", _this.props.disabled);
            } else {
              _this.editor.mode.set("readonly");
            }
          }
        }, init_instance_callback: function(editor) {
          var _a3;
          var initialValue = _this.getInitialValue();
          _this.currentContent = (_a3 = _this.currentContent) !== null && _a3 !== void 0 ? _a3 : editor.getContent();
          if (_this.currentContent !== initialValue) {
            _this.currentContent = initialValue;
            editor.setContent(initialValue);
            editor.undoManager.clear();
            editor.undoManager.add();
            editor.setDirty(false);
          }
          if (_this.props.init && isFunction(_this.props.init.init_instance_callback)) {
            _this.props.init.init_instance_callback(editor);
          }
        } });
        if (!_this.inline) {
          target.style.visibility = "";
        }
        if (isTextareaOrInput(target)) {
          target.value = _this.getInitialValue();
        }
        tinymce.init(finalInit);
      };
      _this.id = _this.props.id || uuid("tiny-react");
      _this.elementRef = React.createRef();
      _this.inline = (_c3 = (_a = _this.props.inline) !== null && _a !== void 0 ? _a : (_b = _this.props.init) === null || _b === void 0 ? void 0 : _b.inline) !== null && _c3 !== void 0 ? _c3 : false;
      _this.boundHandlers = {};
      return _this;
    }
    Object.defineProperty(Editor2.prototype, "view", {
      get: function() {
        var _a, _b;
        return (_b = (_a = this.elementRef.current) === null || _a === void 0 ? void 0 : _a.ownerDocument.defaultView) !== null && _b !== void 0 ? _b : window;
      },
      enumerable: false,
      configurable: true
    });
    Editor2.prototype.componentDidUpdate = function(prevProps) {
      var _this = this;
      var _a, _b;
      if (this.rollbackTimer) {
        clearTimeout(this.rollbackTimer);
        this.rollbackTimer = void 0;
      }
      if (this.editor) {
        this.bindHandlers(prevProps);
        if (this.editor.initialized) {
          this.currentContent = (_a = this.currentContent) !== null && _a !== void 0 ? _a : this.editor.getContent();
          if (typeof this.props.initialValue === "string" && this.props.initialValue !== prevProps.initialValue) {
            this.editor.setContent(this.props.initialValue);
            this.editor.undoManager.clear();
            this.editor.undoManager.add();
            this.editor.setDirty(false);
          } else if (typeof this.props.value === "string" && this.props.value !== this.currentContent) {
            var localEditor_1 = this.editor;
            localEditor_1.undoManager.transact(function() {
              var cursor;
              if (!_this.inline || localEditor_1.hasFocus()) {
                try {
                  cursor = localEditor_1.selection.getBookmark(3);
                } catch (_e) {
                }
              }
              var valueCursor = _this.valueCursor;
              localEditor_1.setContent(_this.props.value);
              if (!_this.inline || localEditor_1.hasFocus()) {
                for (var _i = 0, _a2 = [cursor, valueCursor]; _i < _a2.length; _i++) {
                  var bookmark = _a2[_i];
                  if (bookmark) {
                    try {
                      localEditor_1.selection.moveToBookmark(bookmark);
                      _this.valueCursor = bookmark;
                      break;
                    } catch (_e) {
                    }
                  }
                }
              }
            });
          }
          if (this.props.readonly !== prevProps.readonly) {
            var readonly = (_b = this.props.readonly) !== null && _b !== void 0 ? _b : false;
            setMode(this.editor, readonly ? "readonly" : "design");
          }
          if (this.props.disabled !== prevProps.disabled) {
            if (isDisabledOptionSupported(this.editor)) {
              this.editor.options.set("disabled", this.props.disabled);
            } else {
              setMode(this.editor, this.props.disabled ? "readonly" : "design");
            }
          }
        }
      }
    };
    Editor2.prototype.componentDidMount = function() {
      var _this = this;
      var _a, _b, _c3, _d, _f;
      if (getTinymce(this.view) !== null) {
        this.initialise();
      } else if (Array.isArray(this.props.tinymceScriptSrc) && this.props.tinymceScriptSrc.length === 0) {
        (_b = (_a = this.props).onScriptsLoadError) === null || _b === void 0 ? void 0 : _b.call(_a, new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));
      } else if ((_c3 = this.elementRef.current) === null || _c3 === void 0 ? void 0 : _c3.ownerDocument) {
        var successHandler = function() {
          var _a2, _b2;
          (_b2 = (_a2 = _this.props).onScriptsLoad) === null || _b2 === void 0 ? void 0 : _b2.call(_a2);
          _this.initialise();
        };
        var errorHandler = function(err) {
          var _a2, _b2;
          (_b2 = (_a2 = _this.props).onScriptsLoadError) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, err);
        };
        ScriptLoader.loadList(this.elementRef.current.ownerDocument, this.getScriptSources(), (_f = (_d = this.props.scriptLoading) === null || _d === void 0 ? void 0 : _d.delay) !== null && _f !== void 0 ? _f : 0, successHandler, errorHandler);
      }
    };
    Editor2.prototype.componentWillUnmount = function() {
      var _this = this;
      var editor = this.editor;
      if (editor) {
        editor.off(changeEvents, this.handleEditorChange);
        editor.off(this.beforeInputEvent(), this.handleBeforeInput);
        editor.off("keypress", this.handleEditorChangeSpecial);
        editor.off("keydown", this.handleBeforeInputSpecial);
        editor.off("NewBlock", this.handleEditorChange);
        Object.keys(this.boundHandlers).forEach(function(eventName) {
          editor.off(eventName, _this.boundHandlers[eventName]);
        });
        this.boundHandlers = {};
        editor.remove();
        this.editor = void 0;
      }
    };
    Editor2.prototype.render = function() {
      return this.inline ? this.renderInline() : this.renderIframe();
    };
    Editor2.prototype.beforeInputEvent = function() {
      return isBeforeInputEventAvailable() ? "beforeinput SelectionChange" : "SelectionChange";
    };
    Editor2.prototype.renderInline = function() {
      var _a = this.props.tagName, tagName = _a === void 0 ? "div" : _a;
      return React.createElement(tagName, {
        ref: this.elementRef,
        id: this.id,
        tabIndex: this.props.tabIndex
      });
    };
    Editor2.prototype.renderIframe = function() {
      return React.createElement("textarea", {
        ref: this.elementRef,
        style: { visibility: "hidden" },
        name: this.props.textareaName,
        id: this.id,
        tabIndex: this.props.tabIndex
      });
    };
    Editor2.prototype.getScriptSources = function() {
      var _a, _b;
      var async = (_a = this.props.scriptLoading) === null || _a === void 0 ? void 0 : _a.async;
      var defer = (_b = this.props.scriptLoading) === null || _b === void 0 ? void 0 : _b.defer;
      if (this.props.tinymceScriptSrc !== void 0) {
        if (typeof this.props.tinymceScriptSrc === "string") {
          return [{ src: this.props.tinymceScriptSrc, async, defer }];
        }
        return this.props.tinymceScriptSrc.map(function(item) {
          if (typeof item === "string") {
            return { src: item, async, defer };
          } else {
            return item;
          }
        });
      }
      var channel = this.props.cloudChannel;
      var apiKey = this.props.apiKey ? this.props.apiKey : "no-api-key";
      var cloudTinyJs = "https://cdn.tiny.cloud/1/".concat(apiKey, "/tinymce/").concat(channel, "/tinymce.min.js");
      return [{ src: cloudTinyJs, async, defer }];
    };
    Editor2.prototype.getInitialValue = function() {
      if (typeof this.props.initialValue === "string") {
        return this.props.initialValue;
      } else if (typeof this.props.value === "string") {
        return this.props.value;
      } else {
        return "";
      }
    };
    Editor2.prototype.bindHandlers = function(prevProps) {
      var _this = this;
      if (this.editor !== void 0) {
        configHandlers(this.editor, prevProps, this.props, this.boundHandlers, function(key) {
          return _this.props[key];
        });
        var isValueControlled = function(p) {
          return p.onEditorChange !== void 0 || p.value !== void 0;
        };
        var wasControlled = isValueControlled(prevProps);
        var nowControlled = isValueControlled(this.props);
        if (!wasControlled && nowControlled) {
          this.editor.on(changeEvents, this.handleEditorChange);
          this.editor.on(this.beforeInputEvent(), this.handleBeforeInput);
          this.editor.on("keydown", this.handleBeforeInputSpecial);
          this.editor.on("keyup", this.handleEditorChangeSpecial);
          this.editor.on("NewBlock", this.handleEditorChange);
        } else if (wasControlled && !nowControlled) {
          this.editor.off(changeEvents, this.handleEditorChange);
          this.editor.off(this.beforeInputEvent(), this.handleBeforeInput);
          this.editor.off("keydown", this.handleBeforeInputSpecial);
          this.editor.off("keyup", this.handleEditorChangeSpecial);
          this.editor.off("NewBlock", this.handleEditorChange);
        }
      }
    };
    Editor2.propTypes = EditorPropTypes;
    Editor2.defaultProps = {
      cloudChannel: "8"
    };
    return Editor2;
  }(React.Component)
);

// app/@hk-components/TinymceEditor/TinymceEditor.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/@hk-components/TinymceEditor/TinymceEditor.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/TinymceEditor/TinymceEditor.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var TinymceEditor = ({
  initialvalue
}) => {
  _s();
  const editorRef = (0, import_react.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Editor, { apiKey: "59tfa9du2nj9f2vknfej0bmxhctmfjh34keva1mouvizl8af", onInit: (evt, editor) => editorRef.current = editor, initialValue: initialvalue, init: {
    height: 500,
    plugins: ["advlist autolink lists link image charmap print preview anchor", "searchreplace visualblocks code fullscreen", "insertdatetime media table paste code help wordcount"],
    menu: {
      tc: {
        title: "Comments",
        items: "addcomment showcomments deleteallconversations"
      }
    },
    menubar: "file edit view insert format tools table tc help",
    toolbar: "undo redo | bold italic underline strikethrough backcolor | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
    autosave_ask_before_unload: true,
    autosave_interval: "30s",
    autosave_prefix: "{path}{query}-{id}-",
    autosave_restore_when_empty: false,
    autosave_retention: "2m",
    image_advtab: true,
    link_list: [{
      title: "My page 1",
      value: "https://www.tiny.cloud"
    }, {
      title: "My page 2",
      value: "http://www.moxiecode.com"
    }],
    image_list: [{
      title: "My page 1",
      value: "https://www.tiny.cloud"
    }, {
      title: "My page 2",
      value: "http://www.moxiecode.com"
    }],
    image_class_list: [{
      title: "None",
      value: ""
    }, {
      title: "Some class",
      value: "class-name"
    }],
    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
    templates: [{
      title: "New Table",
      description: "creates a new table",
      content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
    }, {
      title: "Starting my story",
      description: "A cure for writers block",
      content: "Once upon a time..."
    }, {
      title: "New list with dates",
      description: "New List with dates",
      content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>'
    }],
    template_cdate_format: "[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]",
    template_mdate_format: "[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]",
    image_caption: true,
    quickbars_selection_toolbar: "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
    noneditable_noneditable_class: "mceNonEditable",
    toolbar_mode: "sliding",
    spellchecker_ignore_list: ["Ephox", "Moxiecode"],
    tinycomments_mode: "embedded"
  } }, void 0, false, {
    fileName: "app/@hk-components/TinymceEditor/TinymceEditor.jsx",
    lineNumber: 30,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/@hk-components/TinymceEditor/TinymceEditor.jsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_s(TinymceEditor, "U23Mj2fZUVBkuOSyNtK9IkK2H0s=");
_c = TinymceEditor;
var TinymceEditor_default = TinymceEditor;
var _c;
$RefreshReg$(_c, "TinymceEditor");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/blog/BlogAside.jsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/blog/BlogAside.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/blog/BlogAside.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var BlogAside = () => {
  _s2();
  const [startDate, setStartDate] = (0, import_react2.useState)(/* @__PURE__ */ new Date());
  const multiSelectOpt = [{
    value: "collaborator",
    label: "Collaborator"
  }, {
    value: "designer",
    label: "Designer"
  }, {
    value: "react-developer",
    label: "React Developer"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "content-aside", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "outline-secondary", className: "btn-block", disabled: true, children: "Preview Changes" }, void 0, false, {
      fileName: "app/routes/apps/blog/BlogAside.jsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "primary", className: "btn-block mb-3", children: "Publish" }, void 0, false, {
      fileName: "app/routes/apps/blog/BlogAside.jsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default, { className: "edit-post-form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: "Published Date" }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 51,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DateRangePicker, { initialSettings: {
          singleDatePicker: true,
          timePicker: true,
          showDropdowns: true,
          startDate,
          locale: {
            format: "M/DD/YYYY hh:mm A"
          }
        }, onApply: (event, picker) => {
          setStartDate(new Date(picker.startDate));
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "text", name: "single-date" }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 63,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 52,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 50,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: "Visibility" }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 67,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Select, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 1, children: "Public" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAside.jsx",
            lineNumber: 69,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 2, children: "Private" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAside.jsx",
            lineNumber: 70,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 68,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 66,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Label, { children: "Status" }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 74,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Select, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 1, children: "--" }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 76,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 75,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 73,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/blog/BlogAside.jsx",
      lineNumber: 49,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/blog/BlogAside.jsx",
      lineNumber: 48,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/blog/BlogAside.jsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "categories_1", wrapperClass: "card-border overflow-hidden", headerClass: "card-header-action", title: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex align-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "me-2 mb-0", children: "Categories" }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 83,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "btn btn-xs btn-icon btn-rounded btn-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HkTooltip_default, { title: "Add Category", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(plus_default, {}, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 88,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 87,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 86,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 85,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 84,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/blog/BlogAside.jsx",
      lineNumber: 82,
      columnNumber: 154
    }, this), collapsed: false, collapseIcon: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tab_default.Container, { defaultActiveKey: "tabCat", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav_default, { justify: true, className: "nav-light nav-tabs nav-segmented-tabs segmented-tabs-soft", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav_default.Link, { eventKey: "tabCat", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-link-text", children: "All Categories" }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 98,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 97,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 96,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Nav_default.Link, { eventKey: "tabFreq", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "nav-link-text badge-on-text", children: "Frequent" }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 103,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 102,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 101,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 95,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tab_default.Content, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tab_default.Pane, { eventKey: "tabCat", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-180p", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SimpleBar, { className: "nicescroll-bar p-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", label: "Design", id: "catchk1" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAside.jsx",
            lineNumber: 111,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", label: "Development", id: "catchk2" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAside.jsx",
            lineNumber: 112,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", label: "Technology", id: "catchk3" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAside.jsx",
            lineNumber: 113,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", label: "Business", id: "catchk4" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAside.jsx",
            lineNumber: 114,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", label: "Social Media", id: "catchk5" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAside.jsx",
            lineNumber: 115,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", label: "Sports", id: "catchk6" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAside.jsx",
            lineNumber: 116,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", label: "Writing", id: "catchk7" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAside.jsx",
            lineNumber: 117,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 110,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 109,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 108,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tab_default.Pane, { eventKey: "tabFreq", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "h-180p", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SimpleBar, { className: "nicescroll-bar p-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", label: "Design", id: "catchk8" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAside.jsx",
            lineNumber: 124,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", label: "Development", id: "catchk9" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAside.jsx",
            lineNumber: 125,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", label: "Technology", id: "catchk10" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAside.jsx",
            lineNumber: 126,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", label: "Business", id: "catchk11" }, void 0, false, {
            fileName: "app/routes/apps/blog/BlogAside.jsx",
            lineNumber: 127,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 123,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 122,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/BlogAside.jsx",
          lineNumber: 121,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 107,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/blog/BlogAside.jsx",
      lineNumber: 94,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/blog/BlogAside.jsx",
      lineNumber: 82,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "tags_1", wrapperClass: "card-border overflow-hidden", headerClass: "card-header-action", title: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "mb-0", children: "Add Tags(Upto 5)" }, void 0, false, {
      fileName: "app/routes/apps/blog/BlogAside.jsx",
      lineNumber: 134,
      columnNumber: 148
    }, this), collapsed: false, collapseIcon: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(hk_tags_default, { options: multiSelectOpt, defaultValue: [multiSelectOpt[0], multiSelectOpt[1], multiSelectOpt[2], multiSelectOpt[3]] }, void 0, false, {
      fileName: "app/routes/apps/blog/BlogAside.jsx",
      lineNumber: 135,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/blog/BlogAside.jsx",
      lineNumber: 134,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "post_1", wrapperClass: "card-border overflow-hidden", headerClass: "card-header-action", title: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex align-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "me-2 mb-0", children: "Post type" }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 138,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "btn btn-xs btn-icon btn-rounded btn-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HkTooltip_default, { title: "Add Category", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(plus_default, {}, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 143,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 142,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 141,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 140,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 139,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/blog/BlogAside.jsx",
      lineNumber: 137,
      columnNumber: 148
    }, this), collapsed: false, collapseIcon: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "radio", className: "mb-1", label: "Image Post", id: "customRadio1", defaultChecked: true }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 149,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "radio", className: "mb-1", label: "Video Post", id: "customRadio2" }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 150,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "radio", className: "mb-1", label: "Quote Post", id: "customRadio3" }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 151,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "radio", label: "Gallery Post", id: "customRadio4" }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 152,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/blog/BlogAside.jsx",
      lineNumber: 137,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "prev_1", wrapperClass: "card-border overflow-hidden", headerClass: "card-header-action", title: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex align-items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h6", { className: "me-2 mb-0", children: "Preview Image" }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 155,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "btn btn-xs btn-icon btn-rounded btn-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HkTooltip_default, { title: "Add Category", placement: "top", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(plus_default, {}, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 160,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 159,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 158,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 157,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 156,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/blog/BlogAside.jsx",
      lineNumber: 154,
      columnNumber: 148
    }, this), collapsed: false, collapseIcon: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HkDropZone_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "main-text", children: "Upload a high quality image to" }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 167,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "fw-light text-muted", children: " Make your blog post inviting" }, void 0, false, {
        fileName: "app/routes/apps/blog/BlogAside.jsx",
        lineNumber: 167,
        columnNumber: 86
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/blog/BlogAside.jsx",
      lineNumber: 166,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/blog/BlogAside.jsx",
      lineNumber: 154,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/blog/BlogAside.jsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
};
_s2(BlogAside, "7VgZ1AaRN4UkTWnNfs7/CGxziHc=");
_c2 = BlogAside;
var BlogAside_default = BlogAside;
var _c2;
$RefreshReg$(_c2, "BlogAside");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  TinymceEditor_default,
  BlogAside_default
};
//# sourceMappingURL=/build/_shared/chunk-G3X7YZDO.js.map
