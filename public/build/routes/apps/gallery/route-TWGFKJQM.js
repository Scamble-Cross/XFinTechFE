import {
  mock11_default,
  mock12_default,
  mock13_default,
  mock14_default
} from "/build/_shared/chunk-BXDL3264.js";
import {
  mock1_default,
  mock3_default,
  mock4_default,
  mock6_default
} from "/build/_shared/chunk-ZEXMGVEJ.js";
import {
  mock2_default
} from "/build/_shared/chunk-MCO2KVL7.js";
import {
  mock8_default
} from "/build/_shared/chunk-YZ44NKFR.js";
import {
  mock5_default
} from "/build/_shared/chunk-EABAFHXI.js";
import {
  mock7_default
} from "/build/_shared/chunk-MZZNQIWN.js";
import {
  hk_collapse_default
} from "/build/_shared/chunk-OT26VHP7.js";
import {
  HkTooltip_default
} from "/build/_shared/chunk-5BLZWIUZ.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  archive_default,
  book_default,
  chevron_down_default,
  chevron_up_default,
  download_default,
  folder_default,
  folder_plus_default,
  grid_default,
  hard_drive_default,
  list_default,
  plus_default,
  server_default,
  settings_default,
  star_default,
  trash_2_default,
  upload_cloud_default,
  upload_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  Button_default,
  Card_default,
  Col_default,
  Dropdown_default,
  Form_default,
  Modal_default,
  Nav_default,
  Row_default
} from "/build/_shared/chunk-KBRVI47E.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-HFWHD4VB.js";
import {
  require_classnames
} from "/build/_shared/chunk-CQ7UJNRQ.js";
import {
  useGlobalStateContext
} from "/build/_shared/chunk-DIOLN5GK.js";
import "/build/_shared/chunk-B57YWHU6.js";
import "/build/_shared/chunk-WUHA5P4Y.js";
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

// node_modules/lightgallery/react/Lightgallery.umd.js
var require_Lightgallery_umd = __commonJS({
  "node_modules/lightgallery/react/Lightgallery.umd.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require_react()) : typeof define === "function" && define.amd ? define(["react"], factory) : (global = global || self, global.Lightgallery = factory(global.React));
    })(exports, function(React) {
      "use strict";
      function __rest(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      }
      var __assign = function() {
        __assign = Object.assign || function __assign2(t) {
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
      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      }
      var lGEvents = {
        afterAppendSlide: "lgAfterAppendSlide",
        init: "lgInit",
        hasVideo: "lgHasVideo",
        containerResize: "lgContainerResize",
        updateSlides: "lgUpdateSlides",
        afterAppendSubHtml: "lgAfterAppendSubHtml",
        beforeOpen: "lgBeforeOpen",
        afterOpen: "lgAfterOpen",
        slideItemLoad: "lgSlideItemLoad",
        beforeSlide: "lgBeforeSlide",
        afterSlide: "lgAfterSlide",
        posterClick: "lgPosterClick",
        dragStart: "lgDragStart",
        dragMove: "lgDragMove",
        dragEnd: "lgDragEnd",
        beforeNextSlide: "lgBeforeNextSlide",
        beforePrevSlide: "lgBeforePrevSlide",
        beforeClose: "lgBeforeClose",
        afterClose: "lgAfterClose",
        rotateLeft: "lgRotateLeft",
        rotateRight: "lgRotateRight",
        flipHorizontal: "lgFlipHorizontal",
        flipVertical: "lgFlipVertical",
        autoplay: "lgAutoplay",
        autoplayStart: "lgAutoplayStart",
        autoplayStop: "lgAutoplayStop"
      };
      var lightGalleryCoreSettings = {
        mode: "lg-slide",
        easing: "ease",
        speed: 400,
        licenseKey: "0000-0000-000-0000",
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 300,
        container: "",
        startAnimationDuration: 400,
        zoomFromOrigin: true,
        hideBarsDelay: 0,
        showBarsAfter: 1e4,
        slideDelay: 0,
        supportLegacyBrowser: true,
        allowMediaOverlap: false,
        videoMaxSize: "1280-720",
        loadYouTubePoster: true,
        defaultCaptionHeight: 0,
        ariaLabelledby: "",
        ariaDescribedby: "",
        resetScrollPosition: true,
        hideScrollbar: false,
        closable: true,
        swipeToClose: true,
        closeOnTap: true,
        showCloseIcon: true,
        showMaximizeIcon: false,
        loop: true,
        escKey: true,
        keyPress: true,
        trapFocus: true,
        controls: true,
        slideEndAnimation: true,
        hideControlOnEnd: false,
        mousewheel: false,
        getCaptionFromTitleOrAlt: true,
        appendSubHtmlTo: ".lg-sub-html",
        subHtmlSelectorRelative: false,
        preload: 2,
        numberOfSlideItemsInDom: 10,
        selector: "",
        selectWithin: "",
        nextHtml: "",
        prevHtml: "",
        index: 0,
        iframeWidth: "100%",
        iframeHeight: "100%",
        iframeMaxWidth: "100%",
        iframeMaxHeight: "100%",
        download: true,
        counter: true,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: true,
        enableDrag: true,
        dynamic: false,
        dynamicEl: [],
        extraProps: [],
        exThumbImage: "",
        isMobile: void 0,
        mobileSettings: {
          controls: false,
          showCloseIcon: false,
          download: false
        },
        plugins: [],
        strings: {
          closeGallery: "Close gallery",
          toggleMaximize: "Toggle maximize",
          previousSlide: "Previous slide",
          nextSlide: "Next slide",
          download: "Download",
          playVideo: "Play video",
          mediaLoadingFailed: "Oops... Failed to load content..."
        }
      };
      function initLgPolyfills() {
        (function() {
          if (typeof window.CustomEvent === "function")
            return false;
          function CustomEvent2(event, params) {
            params = params || {
              bubbles: false,
              cancelable: false,
              detail: null
            };
            var evt = document.createEvent("CustomEvent");
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
          }
          window.CustomEvent = CustomEvent2;
        })();
        (function() {
          if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
          }
        })();
      }
      var lgQuery = (
        /** @class */
        function() {
          function lgQuery2(selector) {
            this.cssVenderPrefixes = [
              "TransitionDuration",
              "TransitionTimingFunction",
              "Transform",
              "Transition"
            ];
            this.selector = this._getSelector(selector);
            this.firstElement = this._getFirstEl();
            return this;
          }
          lgQuery2.generateUUID = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
              var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
              return v.toString(16);
            });
          };
          lgQuery2.prototype._getSelector = function(selector, context) {
            if (context === void 0) {
              context = document;
            }
            if (typeof selector !== "string") {
              return selector;
            }
            context = context || document;
            var fl = selector.substring(0, 1);
            if (fl === "#") {
              return context.querySelector(selector);
            } else {
              return context.querySelectorAll(selector);
            }
          };
          lgQuery2.prototype._each = function(func) {
            if (!this.selector) {
              return this;
            }
            if (this.selector.length !== void 0) {
              [].forEach.call(this.selector, func);
            } else {
              func(this.selector, 0);
            }
            return this;
          };
          lgQuery2.prototype._setCssVendorPrefix = function(el, cssProperty, value) {
            var property = cssProperty.replace(/-([a-z])/gi, function(s, group1) {
              return group1.toUpperCase();
            });
            if (this.cssVenderPrefixes.indexOf(property) !== -1) {
              el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
              el.style["webkit" + property] = value;
              el.style["moz" + property] = value;
              el.style["ms" + property] = value;
              el.style["o" + property] = value;
            } else {
              el.style[property] = value;
            }
          };
          lgQuery2.prototype._getFirstEl = function() {
            if (this.selector && this.selector.length !== void 0) {
              return this.selector[0];
            } else {
              return this.selector;
            }
          };
          lgQuery2.prototype.isEventMatched = function(event, eventName) {
            var eventNamespace = eventName.split(".");
            return event.split(".").filter(function(e) {
              return e;
            }).every(function(e) {
              return eventNamespace.indexOf(e) !== -1;
            });
          };
          lgQuery2.prototype.attr = function(attr, value) {
            if (value === void 0) {
              if (!this.firstElement) {
                return "";
              }
              return this.firstElement.getAttribute(attr);
            }
            this._each(function(el) {
              el.setAttribute(attr, value);
            });
            return this;
          };
          lgQuery2.prototype.find = function(selector) {
            return $LG(this._getSelector(selector, this.selector));
          };
          lgQuery2.prototype.first = function() {
            if (this.selector && this.selector.length !== void 0) {
              return $LG(this.selector[0]);
            } else {
              return $LG(this.selector);
            }
          };
          lgQuery2.prototype.eq = function(index) {
            return $LG(this.selector[index]);
          };
          lgQuery2.prototype.parent = function() {
            return $LG(this.selector.parentElement);
          };
          lgQuery2.prototype.get = function() {
            return this._getFirstEl();
          };
          lgQuery2.prototype.removeAttr = function(attributes) {
            var attrs = attributes.split(" ");
            this._each(function(el) {
              attrs.forEach(function(attr) {
                return el.removeAttribute(attr);
              });
            });
            return this;
          };
          lgQuery2.prototype.wrap = function(className) {
            if (!this.firstElement) {
              return this;
            }
            var wrapper = document.createElement("div");
            wrapper.className = className;
            this.firstElement.parentNode.insertBefore(wrapper, this.firstElement);
            this.firstElement.parentNode.removeChild(this.firstElement);
            wrapper.appendChild(this.firstElement);
            return this;
          };
          lgQuery2.prototype.addClass = function(classNames4) {
            if (classNames4 === void 0) {
              classNames4 = "";
            }
            this._each(function(el) {
              classNames4.split(" ").forEach(function(className) {
                if (className) {
                  el.classList.add(className);
                }
              });
            });
            return this;
          };
          lgQuery2.prototype.removeClass = function(classNames4) {
            this._each(function(el) {
              classNames4.split(" ").forEach(function(className) {
                if (className) {
                  el.classList.remove(className);
                }
              });
            });
            return this;
          };
          lgQuery2.prototype.hasClass = function(className) {
            if (!this.firstElement) {
              return false;
            }
            return this.firstElement.classList.contains(className);
          };
          lgQuery2.prototype.hasAttribute = function(attribute) {
            if (!this.firstElement) {
              return false;
            }
            return this.firstElement.hasAttribute(attribute);
          };
          lgQuery2.prototype.toggleClass = function(className) {
            if (!this.firstElement) {
              return this;
            }
            if (this.hasClass(className)) {
              this.removeClass(className);
            } else {
              this.addClass(className);
            }
            return this;
          };
          lgQuery2.prototype.css = function(property, value) {
            var _this = this;
            this._each(function(el) {
              _this._setCssVendorPrefix(el, property, value);
            });
            return this;
          };
          lgQuery2.prototype.on = function(events, listener) {
            var _this = this;
            if (!this.selector) {
              return this;
            }
            events.split(" ").forEach(function(event) {
              if (!Array.isArray(lgQuery2.eventListeners[event])) {
                lgQuery2.eventListeners[event] = [];
              }
              lgQuery2.eventListeners[event].push(listener);
              _this.selector.addEventListener(event.split(".")[0], listener);
            });
            return this;
          };
          lgQuery2.prototype.once = function(event, listener) {
            var _this = this;
            this.on(event, function() {
              _this.off(event);
              listener(event);
            });
            return this;
          };
          lgQuery2.prototype.off = function(event) {
            var _this = this;
            if (!this.selector) {
              return this;
            }
            Object.keys(lgQuery2.eventListeners).forEach(function(eventName) {
              if (_this.isEventMatched(event, eventName)) {
                lgQuery2.eventListeners[eventName].forEach(function(listener) {
                  _this.selector.removeEventListener(eventName.split(".")[0], listener);
                });
                lgQuery2.eventListeners[eventName] = [];
              }
            });
            return this;
          };
          lgQuery2.prototype.trigger = function(event, detail) {
            if (!this.firstElement) {
              return this;
            }
            var customEvent = new CustomEvent(event.split(".")[0], {
              detail: detail || null
            });
            this.firstElement.dispatchEvent(customEvent);
            return this;
          };
          lgQuery2.prototype.load = function(url) {
            var _this = this;
            fetch(url).then(function(res) {
              return res.text();
            }).then(function(html) {
              _this.selector.innerHTML = html;
            });
            return this;
          };
          lgQuery2.prototype.html = function(html) {
            if (html === void 0) {
              if (!this.firstElement) {
                return "";
              }
              return this.firstElement.innerHTML;
            }
            this._each(function(el) {
              el.innerHTML = html;
            });
            return this;
          };
          lgQuery2.prototype.append = function(html) {
            this._each(function(el) {
              if (typeof html === "string") {
                el.insertAdjacentHTML("beforeend", html);
              } else {
                el.appendChild(html);
              }
            });
            return this;
          };
          lgQuery2.prototype.prepend = function(html) {
            this._each(function(el) {
              if (typeof html === "string") {
                el.insertAdjacentHTML("afterbegin", html);
              } else if (html instanceof HTMLElement) {
                el.insertBefore(html.cloneNode(true), el.firstChild);
              }
            });
            return this;
          };
          lgQuery2.prototype.remove = function() {
            this._each(function(el) {
              el.parentNode.removeChild(el);
            });
            return this;
          };
          lgQuery2.prototype.empty = function() {
            this._each(function(el) {
              el.innerHTML = "";
            });
            return this;
          };
          lgQuery2.prototype.scrollTop = function(scrollTop) {
            if (scrollTop !== void 0) {
              document.body.scrollTop = scrollTop;
              document.documentElement.scrollTop = scrollTop;
              return this;
            } else {
              return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            }
          };
          lgQuery2.prototype.scrollLeft = function(scrollLeft) {
            if (scrollLeft !== void 0) {
              document.body.scrollLeft = scrollLeft;
              document.documentElement.scrollLeft = scrollLeft;
              return this;
            } else {
              return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
            }
          };
          lgQuery2.prototype.offset = function() {
            if (!this.firstElement) {
              return {
                left: 0,
                top: 0
              };
            }
            var rect = this.firstElement.getBoundingClientRect();
            var bodyMarginLeft = $LG("body").style().marginLeft;
            return {
              left: rect.left - parseFloat(bodyMarginLeft) + this.scrollLeft(),
              top: rect.top + this.scrollTop()
            };
          };
          lgQuery2.prototype.style = function() {
            if (!this.firstElement) {
              return {};
            }
            return this.firstElement.currentStyle || window.getComputedStyle(this.firstElement);
          };
          lgQuery2.prototype.width = function() {
            var style = this.style();
            return this.firstElement.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
          };
          lgQuery2.prototype.height = function() {
            var style = this.style();
            return this.firstElement.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
          };
          lgQuery2.eventListeners = {};
          return lgQuery2;
        }()
      );
      function $LG(selector) {
        initLgPolyfills();
        return new lgQuery(selector);
      }
      var defaultDynamicOptions = [
        "src",
        "sources",
        "subHtml",
        "subHtmlUrl",
        "html",
        "video",
        "poster",
        "slideName",
        "responsive",
        "srcset",
        "sizes",
        "iframe",
        "downloadUrl",
        "download",
        "width",
        "facebookShareUrl",
        "tweetText",
        "iframeTitle",
        "twitterShareUrl",
        "pinterestShareUrl",
        "pinterestText",
        "fbHtml",
        "disqusIdentifier",
        "disqusUrl"
      ];
      function convertToData(attr) {
        if (attr === "href") {
          return "src";
        }
        attr = attr.replace("data-", "");
        attr = attr.charAt(0).toLowerCase() + attr.slice(1);
        attr = attr.replace(/-([a-z])/g, function(g) {
          return g[1].toUpperCase();
        });
        return attr;
      }
      var utils = {
        /**
         * Fetches HTML content from a given URL and inserts it into a specified element.
         *
         * @param url - The URL to fetch the HTML content from.
         * @param element - The DOM element (jQuery object) to insert the HTML content into.
         * @param insertMethod - The method to insert the HTML ('append' or 'replace').
         */
        fetchCaptionFromUrl: function(url, element, insertMethod) {
          fetch(url).then(function(response) {
            return response.text();
          }).then(function(htmlContent) {
            if (insertMethod === "append") {
              var contentDiv = '<div class="lg-sub-html">' + htmlContent + "</div>";
              element.append(contentDiv);
            } else {
              element.html(htmlContent);
            }
          });
        },
        /**
         * get possible width and height from the lgSize attribute. Used for ZoomFromOrigin option
         */
        getSize: function(el, container, spacing, defaultLgSize) {
          if (spacing === void 0) {
            spacing = 0;
          }
          var LGel = $LG(el);
          var lgSize = LGel.attr("data-lg-size") || defaultLgSize;
          if (!lgSize) {
            return;
          }
          var isResponsiveSizes = lgSize.split(",");
          if (isResponsiveSizes[1]) {
            var wWidth = window.innerWidth;
            for (var i = 0; i < isResponsiveSizes.length; i++) {
              var size_1 = isResponsiveSizes[i];
              var responsiveWidth = parseInt(size_1.split("-")[2], 10);
              if (responsiveWidth > wWidth) {
                lgSize = size_1;
                break;
              }
              if (i === isResponsiveSizes.length - 1) {
                lgSize = size_1;
              }
            }
          }
          var size = lgSize.split("-");
          var width = parseInt(size[0], 10);
          var height = parseInt(size[1], 10);
          var cWidth = container.width();
          var cHeight = container.height() - spacing;
          var maxWidth = Math.min(cWidth, width);
          var maxHeight = Math.min(cHeight, height);
          var ratio = Math.min(maxWidth / width, maxHeight / height);
          return { width: width * ratio, height: height * ratio };
        },
        /**
         * @desc Get transform value based on the imageSize. Used for ZoomFromOrigin option
         * @param {jQuery Element}
         * @returns {String} Transform CSS string
         */
        getTransform: function(el, container, top, bottom, imageSize) {
          if (!imageSize) {
            return;
          }
          var LGel = $LG(el).find("img").first();
          if (!LGel.get()) {
            return;
          }
          var containerRect = container.get().getBoundingClientRect();
          var wWidth = containerRect.width;
          var wHeight = container.height() - (top + bottom);
          var elWidth = LGel.width();
          var elHeight = LGel.height();
          var elStyle = LGel.style();
          var x = (wWidth - elWidth) / 2 - LGel.offset().left + (parseFloat(elStyle.paddingLeft) || 0) + (parseFloat(elStyle.borderLeft) || 0) + $LG(window).scrollLeft() + containerRect.left;
          var y = (wHeight - elHeight) / 2 - LGel.offset().top + (parseFloat(elStyle.paddingTop) || 0) + (parseFloat(elStyle.borderTop) || 0) + $LG(window).scrollTop() + top;
          var scX = elWidth / imageSize.width;
          var scY = elHeight / imageSize.height;
          var transform = "translate3d(" + (x *= -1) + "px, " + (y *= -1) + "px, 0) scale3d(" + scX + ", " + scY + ", 1)";
          return transform;
        },
        getIframeMarkup: function(iframeWidth, iframeHeight, iframeMaxWidth, iframeMaxHeight, src, iframeTitle) {
          var title = iframeTitle ? 'title="' + iframeTitle + '"' : "";
          return '<div class="lg-media-cont lg-has-iframe" style="width:' + iframeWidth + "; max-width:" + iframeMaxWidth + "; height: " + iframeHeight + "; max-height:" + iframeMaxHeight + '">\n                    <iframe class="lg-object" frameborder="0" ' + title + ' src="' + src + '"  allowfullscreen="true"></iframe>\n                </div>';
        },
        getImgMarkup: function(index, src, altAttr, srcset, sizes, sources) {
          var srcsetAttr = srcset ? 'srcset="' + srcset + '"' : "";
          var sizesAttr = sizes ? 'sizes="' + sizes + '"' : "";
          var imgMarkup = "<img " + altAttr + " " + srcsetAttr + "  " + sizesAttr + ' class="lg-object lg-image" data-index="' + index + '" src="' + src + '" />';
          var sourceTag = "";
          if (sources) {
            var sourceObj = typeof sources === "string" ? JSON.parse(sources) : sources;
            sourceTag = sourceObj.map(function(source) {
              var attrs = "";
              Object.keys(source).forEach(function(key) {
                attrs += " " + key + '="' + source[key] + '"';
              });
              return "<source " + attrs + "></source>";
            });
          }
          return "" + sourceTag + imgMarkup;
        },
        // Get src from responsive src
        getResponsiveSrc: function(srcItms) {
          var rsWidth = [];
          var rsSrc = [];
          var src = "";
          for (var i = 0; i < srcItms.length; i++) {
            var _src = srcItms[i].split(" ");
            if (_src[0] === "") {
              _src.splice(0, 1);
            }
            rsSrc.push(_src[0]);
            rsWidth.push(_src[1]);
          }
          var wWidth = window.innerWidth;
          for (var j = 0; j < rsWidth.length; j++) {
            if (parseInt(rsWidth[j], 10) > wWidth) {
              src = rsSrc[j];
              break;
            }
          }
          return src;
        },
        isImageLoaded: function(img) {
          if (!img)
            return false;
          if (!img.complete) {
            return false;
          }
          if (img.naturalWidth === 0) {
            return false;
          }
          return true;
        },
        getVideoPosterMarkup: function(_poster, dummyImg, videoContStyle, playVideoString, _isVideo) {
          var videoClass = "";
          if (_isVideo && _isVideo.youtube) {
            videoClass = "lg-has-youtube";
          } else if (_isVideo && _isVideo.vimeo) {
            videoClass = "lg-has-vimeo";
          } else {
            videoClass = "lg-has-html5";
          }
          var _dummy = dummyImg;
          if (typeof dummyImg !== "string") {
            _dummy = dummyImg.outerHTML;
          }
          return '<div class="lg-video-cont ' + videoClass + '" style="' + videoContStyle + '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' + playVideoString + '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' + playVideoString + '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' + _dummy + '\n            <img class="lg-object lg-video-poster" src="' + _poster + '" />\n        </div>';
        },
        getFocusableElements: function(container) {
          var elements = container.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
          var visibleElements = [].filter.call(elements, function(element) {
            var style = window.getComputedStyle(element);
            return style.display !== "none" && style.visibility !== "hidden";
          });
          return visibleElements;
        },
        /**
         * @desc Create dynamic elements array from gallery items when dynamic option is false
         * It helps to avoid frequent DOM interaction
         * and avoid multiple checks for dynamic elments
         *
         * @returns {Array} dynamicEl
         */
        getDynamicOptions: function(items, extraProps, getCaptionFromTitleOrAlt, exThumbImage) {
          var dynamicElements = [];
          var availableDynamicOptions = __spreadArrays(defaultDynamicOptions, extraProps);
          [].forEach.call(items, function(item) {
            var dynamicEl = {};
            for (var i = 0; i < item.attributes.length; i++) {
              var attr = item.attributes[i];
              if (attr.specified) {
                var dynamicAttr = convertToData(attr.name);
                var label = "";
                if (availableDynamicOptions.indexOf(dynamicAttr) > -1) {
                  label = dynamicAttr;
                }
                if (label) {
                  dynamicEl[label] = attr.value;
                }
              }
            }
            var currentItem = $LG(item);
            var alt = currentItem.find("img").first().attr("alt");
            var title = currentItem.attr("title");
            var thumb = exThumbImage ? currentItem.attr(exThumbImage) : currentItem.find("img").first().attr("src");
            dynamicEl.thumb = thumb;
            if (getCaptionFromTitleOrAlt && !dynamicEl.subHtml) {
              dynamicEl.subHtml = title || alt || "";
            }
            dynamicEl.alt = alt || title || "";
            dynamicElements.push(dynamicEl);
          });
          return dynamicElements;
        },
        isMobile: function() {
          return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        },
        /**
         * @desc Check the given src is video
         * @param {String} src
         * @return {Object} video type
         * Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
         *
         * @todo - this information can be moved to dynamicEl to avoid frequent calls
         */
        isVideo: function(src, isHTML5VIdeo, index) {
          if (!src) {
            if (isHTML5VIdeo) {
              return {
                html5: true
              };
            } else {
              console.error("lightGallery :- data-src is not provided on slide item " + (index + 1) + ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");
              return;
            }
          }
          var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i);
          var vimeo = src.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i);
          var wistia = src.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
          if (youtube) {
            return {
              youtube
            };
          } else if (vimeo) {
            return {
              vimeo
            };
          } else if (wistia) {
            return {
              wistia
            };
          }
        }
      };
      var lgId = 0;
      var LightGallery2 = (
        /** @class */
        function() {
          function LightGallery3(element, options) {
            this.lgOpened = false;
            this.index = 0;
            this.plugins = [];
            this.lGalleryOn = false;
            this.lgBusy = false;
            this.currentItemsInDom = [];
            this.prevScrollTop = 0;
            this.bodyPaddingRight = 0;
            this.isDummyImageRemoved = false;
            this.dragOrSwipeEnabled = false;
            this.mediaContainerPosition = {
              top: 0,
              bottom: 0
            };
            if (!element) {
              return this;
            }
            lgId++;
            this.lgId = lgId;
            this.el = element;
            this.LGel = $LG(element);
            this.generateSettings(options);
            this.buildModules();
            if (this.settings.dynamic && this.settings.dynamicEl !== void 0 && !Array.isArray(this.settings.dynamicEl)) {
              throw "When using dynamic mode, you must also define dynamicEl as an Array.";
            }
            this.galleryItems = this.getItems();
            this.normalizeSettings();
            this.init();
            this.validateLicense();
            return this;
          }
          LightGallery3.prototype.generateSettings = function(options) {
            this.settings = __assign(__assign({}, lightGalleryCoreSettings), options);
            if (this.settings.isMobile && typeof this.settings.isMobile === "function" ? this.settings.isMobile() : utils.isMobile()) {
              var mobileSettings = __assign(__assign({}, this.settings.mobileSettings), this.settings.mobileSettings);
              this.settings = __assign(__assign({}, this.settings), mobileSettings);
            }
          };
          LightGallery3.prototype.normalizeSettings = function() {
            if (this.settings.slideEndAnimation) {
              this.settings.hideControlOnEnd = false;
            }
            if (!this.settings.closable) {
              this.settings.swipeToClose = false;
            }
            this.zoomFromOrigin = this.settings.zoomFromOrigin;
            if (this.settings.dynamic) {
              this.zoomFromOrigin = false;
            }
            if (this.settings.container) {
              var container = this.settings.container;
              if (typeof container === "function") {
                this.settings.container = container();
              } else if (typeof container === "string") {
                var el = document.querySelector(container);
                this.settings.container = el !== null && el !== void 0 ? el : document.body;
              }
            } else {
              this.settings.container = document.body;
            }
            this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length);
          };
          LightGallery3.prototype.init = function() {
            var _this = this;
            this.addSlideVideoInfo(this.galleryItems);
            this.buildStructure();
            this.LGel.trigger(lGEvents.init, {
              instance: this
            });
            if (this.settings.keyPress) {
              this.keyPress();
            }
            setTimeout(function() {
              _this.enableDrag();
              _this.enableSwipe();
              _this.triggerPosterClick();
            }, 50);
            this.arrow();
            if (this.settings.mousewheel) {
              this.mousewheel();
            }
            if (!this.settings.dynamic) {
              this.openGalleryOnItemClick();
            }
          };
          LightGallery3.prototype.openGalleryOnItemClick = function() {
            var _this = this;
            var _loop_1 = function(index2) {
              var element = this_1.items[index2];
              var $element = $LG(element);
              var uuid = lgQuery.generateUUID();
              $element.attr("data-lg-id", uuid).on("click.lgcustom-item-" + uuid, function(e) {
                e.preventDefault();
                var currentItemIndex = _this.settings.index || index2;
                _this.openGallery(currentItemIndex, element);
              });
            };
            var this_1 = this;
            for (var index = 0; index < this.items.length; index++) {
              _loop_1(index);
            }
          };
          LightGallery3.prototype.buildModules = function() {
            var _this = this;
            this.settings.plugins.forEach(function(plugin) {
              _this.plugins.push(new plugin(_this, $LG));
            });
          };
          LightGallery3.prototype.validateLicense = function() {
            if (!this.settings.licenseKey) {
              console.error("Please provide a valid license key");
            } else if (this.settings.licenseKey === "0000-0000-000-0000") {
              console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use");
            }
          };
          LightGallery3.prototype.getSlideItem = function(index) {
            return $LG(this.getSlideItemId(index));
          };
          LightGallery3.prototype.getSlideItemId = function(index) {
            return "#lg-item-" + this.lgId + "-" + index;
          };
          LightGallery3.prototype.getIdName = function(id) {
            return id + "-" + this.lgId;
          };
          LightGallery3.prototype.getElementById = function(id) {
            return $LG("#" + this.getIdName(id));
          };
          LightGallery3.prototype.manageSingleSlideClassName = function() {
            if (this.galleryItems.length < 2) {
              this.outer.addClass("lg-single-item");
            } else {
              this.outer.removeClass("lg-single-item");
            }
          };
          LightGallery3.prototype.buildStructure = function() {
            var _this = this;
            var container = this.$container && this.$container.get();
            if (container) {
              return;
            }
            var controls = "";
            var subHtmlCont = "";
            if (this.settings.controls) {
              controls = '<button type="button" id="' + this.getIdName("lg-prev") + '" aria-label="' + this.settings.strings["previousSlide"] + '" class="lg-prev lg-icon"> ' + this.settings.prevHtml + ' </button>\n                <button type="button" id="' + this.getIdName("lg-next") + '" aria-label="' + this.settings.strings["nextSlide"] + '" class="lg-next lg-icon"> ' + this.settings.nextHtml + " </button>";
            }
            if (this.settings.appendSubHtmlTo !== ".lg-item") {
              subHtmlCont = '<div class="lg-sub-html" role="status" aria-live="polite"></div>';
            }
            var addClasses = "";
            if (this.settings.allowMediaOverlap) {
              addClasses += "lg-media-overlap ";
            }
            var ariaLabelledby = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : "";
            var ariaDescribedby = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : "";
            var containerClassName = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? "lg-inline" : "");
            var closeIcon = this.settings.closable && this.settings.showCloseIcon ? '<button type="button" aria-label="' + this.settings.strings["closeGallery"] + '" id="' + this.getIdName("lg-close") + '" class="lg-close lg-icon"></button>' : "";
            var maximizeIcon = this.settings.showMaximizeIcon ? '<button type="button" aria-label="' + this.settings.strings["toggleMaximize"] + '" id="' + this.getIdName("lg-maximize") + '" class="lg-maximize lg-icon"></button>' : "";
            var template = '\n        <div class="' + containerClassName + '" id="' + this.getIdName("lg-container") + '" tabindex="-1" aria-modal="true" ' + ariaLabelledby + " " + ariaDescribedby + ' role="dialog"\n        >\n            <div id="' + this.getIdName("lg-backdrop") + '" class="lg-backdrop"></div>\n\n            <div id="' + this.getIdName("lg-outer") + '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' + addClasses + ' ">\n\n              <div id="' + this.getIdName("lg-content") + '" class="lg-content">\n                <div id="' + this.getIdName("lg-inner") + '" class="lg-inner">\n                </div>\n                ' + controls + '\n              </div>\n                <div id="' + this.getIdName("lg-toolbar") + '" class="lg-toolbar lg-group">\n                    ' + maximizeIcon + "\n                    " + closeIcon + "\n                    </div>\n                    " + (this.settings.appendSubHtmlTo === ".lg-outer" ? subHtmlCont : "") + '\n                <div id="' + this.getIdName("lg-components") + '" class="lg-components">\n                    ' + (this.settings.appendSubHtmlTo === ".lg-sub-html" ? subHtmlCont : "") + "\n                </div>\n            </div>\n        </div>\n        ";
            $LG(this.settings.container).append(template);
            if (document.body !== this.settings.container) {
              $LG(this.settings.container).css("position", "relative");
            }
            this.outer = this.getElementById("lg-outer");
            this.$lgComponents = this.getElementById("lg-components");
            this.$backdrop = this.getElementById("lg-backdrop");
            this.$container = this.getElementById("lg-container");
            this.$inner = this.getElementById("lg-inner");
            this.$content = this.getElementById("lg-content");
            this.$toolbar = this.getElementById("lg-toolbar");
            this.$backdrop.css("transition-duration", this.settings.backdropDuration + "ms");
            var outerClassNames = this.settings.mode + " ";
            this.manageSingleSlideClassName();
            if (this.settings.enableDrag) {
              outerClassNames += "lg-grab ";
            }
            this.outer.addClass(outerClassNames);
            this.$inner.css("transition-timing-function", this.settings.easing);
            this.$inner.css("transition-duration", this.settings.speed + "ms");
            if (this.settings.download) {
              this.$toolbar.append('<a id="' + this.getIdName("lg-download") + '" target="_blank" rel="noopener" aria-label="' + this.settings.strings["download"] + '" download class="lg-download lg-icon"></a>');
            }
            this.counter();
            $LG(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, function() {
              _this.refreshOnResize();
            });
            this.hideBars();
            this.manageCloseGallery();
            this.toggleMaximize();
            this.initModules();
          };
          LightGallery3.prototype.refreshOnResize = function() {
            if (this.lgOpened) {
              var currentGalleryItem = this.galleryItems[this.index];
              var __slideVideoInfo = currentGalleryItem.__slideVideoInfo;
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var _a = this.mediaContainerPosition, top_1 = _a.top, bottom = _a.bottom;
              this.currentImageSize = utils.getSize(this.items[this.index], this.outer, top_1 + bottom, __slideVideoInfo && this.settings.videoMaxSize);
              if (__slideVideoInfo) {
                this.resizeVideoSlide(this.index, this.currentImageSize);
              }
              if (this.zoomFromOrigin && !this.isDummyImageRemoved) {
                var imgStyle = this.getDummyImgStyles(this.currentImageSize);
                this.outer.find(".lg-current .lg-dummy-img").first().attr("style", imgStyle);
              }
              this.LGel.trigger(lGEvents.containerResize);
            }
          };
          LightGallery3.prototype.resizeVideoSlide = function(index, imageSize) {
            var lgVideoStyle = this.getVideoContStyle(imageSize);
            var currentSlide = this.getSlideItem(index);
            currentSlide.find(".lg-video-cont").attr("style", lgVideoStyle);
          };
          LightGallery3.prototype.updateSlides = function(items, index) {
            if (this.index > items.length - 1) {
              this.index = items.length - 1;
            }
            if (items.length === 1) {
              this.index = 0;
            }
            if (!items.length) {
              this.closeGallery();
              return;
            }
            var currentSrc = this.galleryItems[index].src;
            this.galleryItems = items;
            this.updateControls();
            this.$inner.empty();
            this.currentItemsInDom = [];
            var _index = 0;
            this.galleryItems.some(function(galleryItem, itemIndex) {
              if (galleryItem.src === currentSrc) {
                _index = itemIndex;
                return true;
              }
              return false;
            });
            this.currentItemsInDom = this.organizeSlideItems(_index, -1);
            this.loadContent(_index, true);
            this.getSlideItem(_index).addClass("lg-current");
            this.index = _index;
            this.updateCurrentCounter(_index);
            this.LGel.trigger(lGEvents.updateSlides);
          };
          LightGallery3.prototype.getItems = function() {
            this.items = [];
            if (!this.settings.dynamic) {
              if (this.settings.selector === "this") {
                this.items.push(this.el);
              } else if (this.settings.selector) {
                if (typeof this.settings.selector === "string") {
                  if (this.settings.selectWithin) {
                    var selectWithin = $LG(this.settings.selectWithin);
                    this.items = selectWithin.find(this.settings.selector).get();
                  } else {
                    this.items = this.el.querySelectorAll(this.settings.selector);
                  }
                } else {
                  this.items = this.settings.selector;
                }
              } else {
                this.items = this.el.children;
              }
              return utils.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage);
            } else {
              return this.settings.dynamicEl || [];
            }
          };
          LightGallery3.prototype.shouldHideScrollbar = function() {
            return this.settings.hideScrollbar && document.body === this.settings.container;
          };
          LightGallery3.prototype.hideScrollbar = function() {
            if (!this.shouldHideScrollbar()) {
              return;
            }
            this.bodyPaddingRight = parseFloat($LG("body").style().paddingRight);
            var bodyRect = document.documentElement.getBoundingClientRect();
            var scrollbarWidth = window.innerWidth - bodyRect.width;
            $LG(document.body).css("padding-right", scrollbarWidth + this.bodyPaddingRight + "px");
            $LG(document.body).addClass("lg-overlay-open");
          };
          LightGallery3.prototype.resetScrollBar = function() {
            if (!this.shouldHideScrollbar()) {
              return;
            }
            $LG(document.body).css("padding-right", this.bodyPaddingRight + "px");
            $LG(document.body).removeClass("lg-overlay-open");
          };
          LightGallery3.prototype.openGallery = function(index, element) {
            var _this = this;
            if (index === void 0) {
              index = this.settings.index;
            }
            if (this.lgOpened)
              return;
            this.lgOpened = true;
            this.outer.removeClass("lg-hide-items");
            this.hideScrollbar();
            this.$container.addClass("lg-show");
            var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, index);
            this.currentItemsInDom = itemsToBeInsertedToDom;
            var items = "";
            itemsToBeInsertedToDom.forEach(function(item) {
              items = items + ('<div id="' + item + '" class="lg-item"></div>');
            });
            this.$inner.append(items);
            this.addHtml(index);
            var transform = "";
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var _a = this.mediaContainerPosition, top = _a.top, bottom = _a.bottom;
            if (!this.settings.allowMediaOverlap) {
              this.setMediaContainerPosition(top, bottom);
            }
            var __slideVideoInfo = this.galleryItems[index].__slideVideoInfo;
            if (this.zoomFromOrigin && element) {
              this.currentImageSize = utils.getSize(element, this.outer, top + bottom, __slideVideoInfo && this.settings.videoMaxSize);
              transform = utils.getTransform(element, this.outer, top, bottom, this.currentImageSize);
            }
            if (!this.zoomFromOrigin || !transform) {
              this.outer.addClass(this.settings.startClass);
              this.getSlideItem(index).removeClass("lg-complete");
            }
            var timeout = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration;
            setTimeout(function() {
              _this.outer.addClass("lg-components-open");
            }, timeout);
            this.index = index;
            this.LGel.trigger(lGEvents.beforeOpen);
            this.getSlideItem(index).addClass("lg-current");
            this.lGalleryOn = false;
            this.prevScrollTop = $LG(window).scrollTop();
            setTimeout(function() {
              if (_this.zoomFromOrigin && transform) {
                var currentSlide_1 = _this.getSlideItem(index);
                currentSlide_1.css("transform", transform);
                setTimeout(function() {
                  currentSlide_1.addClass("lg-start-progress lg-start-end-progress").css("transition-duration", _this.settings.startAnimationDuration + "ms");
                  _this.outer.addClass("lg-zoom-from-image");
                });
                setTimeout(function() {
                  currentSlide_1.css("transform", "translate3d(0, 0, 0)");
                }, 100);
              }
              setTimeout(function() {
                _this.$backdrop.addClass("in");
                _this.$container.addClass("lg-show-in");
              }, 10);
              setTimeout(function() {
                if (_this.settings.trapFocus && document.body === _this.settings.container) {
                  _this.trapFocus();
                }
              }, _this.settings.backdropDuration + 50);
              if (!_this.zoomFromOrigin || !transform) {
                setTimeout(function() {
                  _this.outer.addClass("lg-visible");
                }, _this.settings.backdropDuration);
              }
              _this.slide(index, false, false, false);
              _this.LGel.trigger(lGEvents.afterOpen);
            });
            if (document.body === this.settings.container) {
              $LG("html").addClass("lg-on");
            }
          };
          LightGallery3.prototype.getMediaContainerPosition = function() {
            if (this.settings.allowMediaOverlap) {
              return {
                top: 0,
                bottom: 0
              };
            }
            var top = this.$toolbar.get().clientHeight || 0;
            var subHtml = this.outer.find(".lg-components .lg-sub-html").get();
            var captionHeight = this.settings.defaultCaptionHeight || subHtml && subHtml.clientHeight || 0;
            var thumbContainer = this.outer.find(".lg-thumb-outer").get();
            var thumbHeight = thumbContainer ? thumbContainer.clientHeight : 0;
            var bottom = thumbHeight + captionHeight;
            return {
              top,
              bottom
            };
          };
          LightGallery3.prototype.setMediaContainerPosition = function(top, bottom) {
            if (top === void 0) {
              top = 0;
            }
            if (bottom === void 0) {
              bottom = 0;
            }
            this.$content.css("top", top + "px").css("bottom", bottom + "px");
          };
          LightGallery3.prototype.hideBars = function() {
            var _this = this;
            setTimeout(function() {
              _this.outer.removeClass("lg-hide-items");
              if (_this.settings.hideBarsDelay > 0) {
                _this.outer.on("mousemove.lg click.lg touchstart.lg", function() {
                  _this.outer.removeClass("lg-hide-items");
                  clearTimeout(_this.hideBarTimeout);
                  _this.hideBarTimeout = setTimeout(function() {
                    _this.outer.addClass("lg-hide-items");
                  }, _this.settings.hideBarsDelay);
                });
                _this.outer.trigger("mousemove.lg");
              }
            }, this.settings.showBarsAfter);
          };
          LightGallery3.prototype.initPictureFill = function($img) {
            if (this.settings.supportLegacyBrowser) {
              try {
                picturefill({
                  elements: [$img.get()]
                });
              } catch (e) {
                console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.");
              }
            }
          };
          LightGallery3.prototype.counter = function() {
            if (this.settings.counter) {
              var counterHtml = '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' + this.getIdName("lg-counter-current") + '" class="lg-counter-current">' + (this.index + 1) + ' </span> /\n                <span id="' + this.getIdName("lg-counter-all") + '" class="lg-counter-all">' + this.galleryItems.length + " </span></div>";
              this.outer.find(this.settings.appendCounterTo).append(counterHtml);
            }
          };
          LightGallery3.prototype.addHtml = function(index) {
            var subHtml;
            var subHtmlUrl;
            if (this.galleryItems[index].subHtmlUrl) {
              subHtmlUrl = this.galleryItems[index].subHtmlUrl;
            } else {
              subHtml = this.galleryItems[index].subHtml;
            }
            if (!subHtmlUrl) {
              if (subHtml) {
                var fL = subHtml.substring(0, 1);
                if (fL === "." || fL === "#") {
                  if (this.settings.subHtmlSelectorRelative && !this.settings.dynamic) {
                    subHtml = $LG(this.items).eq(index).find(subHtml).first().html();
                  } else {
                    subHtml = $LG(subHtml).first().html();
                  }
                }
              } else {
                subHtml = "";
              }
            }
            if (this.settings.appendSubHtmlTo !== ".lg-item") {
              if (subHtmlUrl) {
                utils.fetchCaptionFromUrl(subHtmlUrl, this.outer.find(".lg-sub-html"), "replace");
              } else {
                this.outer.find(".lg-sub-html").html(subHtml);
              }
            } else {
              var currentSlide = $LG(this.getSlideItemId(index));
              if (subHtmlUrl) {
                utils.fetchCaptionFromUrl(subHtmlUrl, currentSlide, "append");
              } else {
                currentSlide.append('<div class="lg-sub-html">' + subHtml + "</div>");
              }
            }
            if (typeof subHtml !== "undefined" && subHtml !== null) {
              if (subHtml === "") {
                this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html");
              } else {
                this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html");
              }
            }
            this.LGel.trigger(lGEvents.afterAppendSubHtml, {
              index
            });
          };
          LightGallery3.prototype.preload = function(index) {
            for (var i = 1; i <= this.settings.preload; i++) {
              if (i >= this.galleryItems.length - index) {
                break;
              }
              this.loadContent(index + i, false);
            }
            for (var j = 1; j <= this.settings.preload; j++) {
              if (index - j < 0) {
                break;
              }
              this.loadContent(index - j, false);
            }
          };
          LightGallery3.prototype.getDummyImgStyles = function(imageSize) {
            if (!imageSize)
              return "";
            return "width:" + imageSize.width + "px;\n                margin-left: -" + imageSize.width / 2 + "px;\n                margin-top: -" + imageSize.height / 2 + "px;\n                height:" + imageSize.height + "px";
          };
          LightGallery3.prototype.getVideoContStyle = function(imageSize) {
            if (!imageSize)
              return "";
            return "width:" + imageSize.width + "px;\n                height:" + imageSize.height + "px";
          };
          LightGallery3.prototype.getDummyImageContent = function($currentSlide, index, alt) {
            var $currentItem;
            if (!this.settings.dynamic) {
              $currentItem = $LG(this.items).eq(index);
            }
            if ($currentItem) {
              var _dummyImgSrc = void 0;
              if (!this.settings.exThumbImage) {
                _dummyImgSrc = $currentItem.find("img").first().attr("src");
              } else {
                _dummyImgSrc = $currentItem.attr(this.settings.exThumbImage);
              }
              if (!_dummyImgSrc)
                return "";
              var imgStyle = this.getDummyImgStyles(this.currentImageSize);
              var dummyImgContentImg = document.createElement("img");
              dummyImgContentImg.alt = alt || "";
              dummyImgContentImg.src = _dummyImgSrc;
              dummyImgContentImg.className = "lg-dummy-img";
              dummyImgContentImg.style.cssText = imgStyle;
              $currentSlide.addClass("lg-first-slide");
              this.outer.addClass("lg-first-slide-loading");
              return dummyImgContentImg;
            }
            return "";
          };
          LightGallery3.prototype.setImgMarkup = function(src, $currentSlide, index) {
            var currentGalleryItem = this.galleryItems[index];
            var alt = currentGalleryItem.alt, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
            var imgContent = "";
            var altAttr = alt ? 'alt="' + alt + '"' : "";
            if (this.isFirstSlideWithZoomAnimation()) {
              imgContent = this.getDummyImageContent($currentSlide, index, altAttr);
            } else {
              imgContent = utils.getImgMarkup(index, src, altAttr, srcset, sizes, sources);
            }
            var picture = document.createElement("picture");
            picture.className = "lg-img-wrap";
            $LG(picture).append(imgContent);
            $currentSlide.prepend(picture);
          };
          LightGallery3.prototype.onSlideObjectLoad = function($slide, isHTML5VideoWithoutPoster, onLoad, onError) {
            var mediaObject = $slide.find(".lg-object").first();
            if (utils.isImageLoaded(mediaObject.get()) || isHTML5VideoWithoutPoster) {
              onLoad();
            } else {
              mediaObject.on("load.lg error.lg", function() {
                onLoad && onLoad();
              });
              mediaObject.on("error.lg", function() {
                onError && onError();
              });
            }
          };
          LightGallery3.prototype.onLgObjectLoad = function(currentSlide, index, delay, speed, isFirstSlide, isHTML5VideoWithoutPoster) {
            var _this = this;
            this.onSlideObjectLoad(currentSlide, isHTML5VideoWithoutPoster, function() {
              _this.triggerSlideItemLoad(currentSlide, index, delay, speed, isFirstSlide);
            }, function() {
              currentSlide.addClass("lg-complete lg-complete_");
              currentSlide.html('<span class="lg-error-msg">' + _this.settings.strings["mediaLoadingFailed"] + "</span>");
            });
          };
          LightGallery3.prototype.triggerSlideItemLoad = function($currentSlide, index, delay, speed, isFirstSlide) {
            var _this = this;
            var currentGalleryItem = this.galleryItems[index];
            var _speed = isFirstSlide && this.getSlideType(currentGalleryItem) === "video" && !currentGalleryItem.poster ? speed : 0;
            setTimeout(function() {
              $currentSlide.addClass("lg-complete lg-complete_");
              _this.LGel.trigger(lGEvents.slideItemLoad, {
                index,
                delay: delay || 0,
                isFirstSlide
              });
            }, _speed);
          };
          LightGallery3.prototype.isFirstSlideWithZoomAnimation = function() {
            return !!(!this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize);
          };
          LightGallery3.prototype.addSlideVideoInfo = function(items) {
            var _this = this;
            items.forEach(function(element, index) {
              element.__slideVideoInfo = utils.isVideo(element.src, !!element.video, index);
              if (element.__slideVideoInfo && _this.settings.loadYouTubePoster && !element.poster && element.__slideVideoInfo.youtube) {
                element.poster = "//img.youtube.com/vi/" + element.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg";
              }
            });
          };
          LightGallery3.prototype.loadContent = function(index, rec) {
            var _this = this;
            var currentGalleryItem = this.galleryItems[index];
            var $currentSlide = $LG(this.getSlideItemId(index));
            var poster = currentGalleryItem.poster, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
            var src = currentGalleryItem.src;
            var video = currentGalleryItem.video;
            var _html5Video = video && typeof video === "string" ? JSON.parse(video) : video;
            if (currentGalleryItem.responsive) {
              var srcDyItms = currentGalleryItem.responsive.split(",");
              src = utils.getResponsiveSrc(srcDyItms) || src;
            }
            var videoInfo = currentGalleryItem.__slideVideoInfo;
            var lgVideoStyle = "";
            var iframe = !!currentGalleryItem.iframe;
            var isFirstSlide = !this.lGalleryOn;
            var delay = 0;
            if (isFirstSlide) {
              if (this.zoomFromOrigin && this.currentImageSize) {
                delay = this.settings.startAnimationDuration + 10;
              } else {
                delay = this.settings.backdropDuration + 10;
              }
            }
            if (!$currentSlide.hasClass("lg-loaded")) {
              if (videoInfo) {
                var _a = this.mediaContainerPosition, top_2 = _a.top, bottom = _a.bottom;
                var videoSize = utils.getSize(this.items[index], this.outer, top_2 + bottom, videoInfo && this.settings.videoMaxSize);
                lgVideoStyle = this.getVideoContStyle(videoSize);
              }
              if (iframe) {
                var markup = utils.getIframeMarkup(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, src, currentGalleryItem.iframeTitle);
                $currentSlide.prepend(markup);
              } else if (poster) {
                var dummyImg = "";
                var hasStartAnimation = isFirstSlide && this.zoomFromOrigin && this.currentImageSize;
                if (hasStartAnimation) {
                  dummyImg = this.getDummyImageContent($currentSlide, index, "");
                }
                var markup = utils.getVideoPosterMarkup(poster, dummyImg || "", lgVideoStyle, this.settings.strings["playVideo"], videoInfo);
                $currentSlide.prepend(markup);
              } else if (videoInfo) {
                var markup = '<div class="lg-video-cont " style="' + lgVideoStyle + '"></div>';
                $currentSlide.prepend(markup);
              } else {
                this.setImgMarkup(src, $currentSlide, index);
                if (srcset || sources) {
                  var $img = $currentSlide.find(".lg-object");
                  this.initPictureFill($img);
                }
              }
              if (poster || videoInfo) {
                this.LGel.trigger(lGEvents.hasVideo, {
                  index,
                  src,
                  html5Video: _html5Video,
                  hasPoster: !!poster
                });
              }
              this.LGel.trigger(lGEvents.afterAppendSlide, { index });
              if (this.lGalleryOn && this.settings.appendSubHtmlTo === ".lg-item") {
                this.addHtml(index);
              }
            }
            var _speed = 0;
            if (delay && !$LG(document.body).hasClass("lg-from-hash")) {
              _speed = delay;
            }
            if (this.isFirstSlideWithZoomAnimation()) {
              setTimeout(function() {
                $currentSlide.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style");
              }, this.settings.startAnimationDuration + 100);
              if (!$currentSlide.hasClass("lg-loaded")) {
                setTimeout(function() {
                  if (_this.getSlideType(currentGalleryItem) === "image") {
                    var alt = currentGalleryItem.alt;
                    var altAttr = alt ? 'alt="' + alt + '"' : "";
                    $currentSlide.find(".lg-img-wrap").append(utils.getImgMarkup(index, src, altAttr, srcset, sizes, currentGalleryItem.sources));
                    if (srcset || sources) {
                      var $img2 = $currentSlide.find(".lg-object");
                      _this.initPictureFill($img2);
                    }
                  }
                  if (_this.getSlideType(currentGalleryItem) === "image" || _this.getSlideType(currentGalleryItem) === "video" && poster) {
                    _this.onLgObjectLoad($currentSlide, index, delay, _speed, true, false);
                    _this.onSlideObjectLoad($currentSlide, !!(videoInfo && videoInfo.html5 && !poster), function() {
                      _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                    }, function() {
                      _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                    });
                  }
                }, this.settings.startAnimationDuration + 100);
              }
            }
            $currentSlide.addClass("lg-loaded");
            if (!this.isFirstSlideWithZoomAnimation() || this.getSlideType(currentGalleryItem) === "video" && !poster) {
              this.onLgObjectLoad($currentSlide, index, delay, _speed, isFirstSlide, !!(videoInfo && videoInfo.html5 && !poster));
            }
            if ((!this.zoomFromOrigin || !this.currentImageSize) && $currentSlide.hasClass("lg-complete_") && !this.lGalleryOn) {
              setTimeout(function() {
                $currentSlide.addClass("lg-complete");
              }, this.settings.backdropDuration);
            }
            this.lGalleryOn = true;
            if (rec === true) {
              if (!$currentSlide.hasClass("lg-complete_")) {
                $currentSlide.find(".lg-object").first().on("load.lg error.lg", function() {
                  _this.preload(index);
                });
              } else {
                this.preload(index);
              }
            }
          };
          LightGallery3.prototype.loadContentOnFirstSlideLoad = function(index, $currentSlide, speed) {
            var _this = this;
            setTimeout(function() {
              $currentSlide.find(".lg-dummy-img").remove();
              $currentSlide.removeClass("lg-first-slide");
              _this.outer.removeClass("lg-first-slide-loading");
              _this.isDummyImageRemoved = true;
              _this.preload(index);
            }, speed + 300);
          };
          LightGallery3.prototype.getItemsToBeInsertedToDom = function(index, prevIndex, numberOfItems) {
            var _this = this;
            if (numberOfItems === void 0) {
              numberOfItems = 0;
            }
            var itemsToBeInsertedToDom = [];
            var possibleNumberOfItems = Math.max(numberOfItems, 3);
            possibleNumberOfItems = Math.min(possibleNumberOfItems, this.galleryItems.length);
            var prevIndexItem = "lg-item-" + this.lgId + "-" + prevIndex;
            if (this.galleryItems.length <= 3) {
              this.galleryItems.forEach(function(_element, index2) {
                itemsToBeInsertedToDom.push("lg-item-" + _this.lgId + "-" + index2);
              });
              return itemsToBeInsertedToDom;
            }
            if (index < (this.galleryItems.length - 1) / 2) {
              for (var idx = index; idx > index - possibleNumberOfItems / 2 && idx >= 0; idx--) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
              }
              var numberOfExistingItems = itemsToBeInsertedToDom.length;
              for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index + idx + 1));
              }
            } else {
              for (var idx = index; idx <= this.galleryItems.length - 1 && idx < index + possibleNumberOfItems / 2; idx++) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
              }
              var numberOfExistingItems = itemsToBeInsertedToDom.length;
              for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index - idx - 1));
              }
            }
            if (this.settings.loop) {
              if (index === this.galleryItems.length - 1) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-0");
              } else if (index === 0) {
                itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1));
              }
            }
            if (itemsToBeInsertedToDom.indexOf(prevIndexItem) === -1) {
              itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + prevIndex);
            }
            return itemsToBeInsertedToDom;
          };
          LightGallery3.prototype.organizeSlideItems = function(index, prevIndex) {
            var _this = this;
            var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, prevIndex, this.settings.numberOfSlideItemsInDom);
            itemsToBeInsertedToDom.forEach(function(item) {
              if (_this.currentItemsInDom.indexOf(item) === -1) {
                _this.$inner.append('<div id="' + item + '" class="lg-item"></div>');
              }
            });
            this.currentItemsInDom.forEach(function(item) {
              if (itemsToBeInsertedToDom.indexOf(item) === -1) {
                $LG("#" + item).remove();
              }
            });
            return itemsToBeInsertedToDom;
          };
          LightGallery3.prototype.getPreviousSlideIndex = function() {
            var prevIndex = 0;
            try {
              var currentItemId = this.outer.find(".lg-current").first().attr("id");
              prevIndex = parseInt(currentItemId.split("-")[3]) || 0;
            } catch (error) {
              prevIndex = 0;
            }
            return prevIndex;
          };
          LightGallery3.prototype.setDownloadValue = function(index) {
            if (this.settings.download) {
              var currentGalleryItem = this.galleryItems[index];
              var hideDownloadBtn = currentGalleryItem.downloadUrl === false || currentGalleryItem.downloadUrl === "false";
              if (hideDownloadBtn) {
                this.outer.addClass("lg-hide-download");
              } else {
                var $download = this.getElementById("lg-download");
                this.outer.removeClass("lg-hide-download");
                $download.attr("href", currentGalleryItem.downloadUrl || currentGalleryItem.src);
                if (currentGalleryItem.download) {
                  $download.attr("download", currentGalleryItem.download);
                }
              }
            }
          };
          LightGallery3.prototype.makeSlideAnimation = function(direction, currentSlideItem, previousSlideItem) {
            var _this = this;
            if (this.lGalleryOn) {
              previousSlideItem.addClass("lg-slide-progress");
            }
            setTimeout(function() {
              _this.outer.addClass("lg-no-trans");
              _this.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide");
              if (direction === "prev") {
                currentSlideItem.addClass("lg-prev-slide");
                previousSlideItem.addClass("lg-next-slide");
              } else {
                currentSlideItem.addClass("lg-next-slide");
                previousSlideItem.addClass("lg-prev-slide");
              }
              setTimeout(function() {
                _this.outer.find(".lg-item").removeClass("lg-current");
                currentSlideItem.addClass("lg-current");
                _this.outer.removeClass("lg-no-trans");
              }, 50);
            }, this.lGalleryOn ? this.settings.slideDelay : 0);
          };
          LightGallery3.prototype.slide = function(index, fromTouch, fromThumb, direction) {
            var _this = this;
            var prevIndex = this.getPreviousSlideIndex();
            this.currentItemsInDom = this.organizeSlideItems(index, prevIndex);
            if (this.lGalleryOn && prevIndex === index) {
              return;
            }
            var numberOfGalleryItems = this.galleryItems.length;
            if (!this.lgBusy) {
              if (this.settings.counter) {
                this.updateCurrentCounter(index);
              }
              var currentSlideItem = this.getSlideItem(index);
              var previousSlideItem_1 = this.getSlideItem(prevIndex);
              var currentGalleryItem = this.galleryItems[index];
              var videoInfo = currentGalleryItem.__slideVideoInfo;
              this.outer.attr("data-lg-slide-type", this.getSlideType(currentGalleryItem));
              this.setDownloadValue(index);
              if (videoInfo) {
                var _a = this.mediaContainerPosition, top_3 = _a.top, bottom = _a.bottom;
                var videoSize = utils.getSize(this.items[index], this.outer, top_3 + bottom, videoInfo && this.settings.videoMaxSize);
                this.resizeVideoSlide(index, videoSize);
              }
              this.LGel.trigger(lGEvents.beforeSlide, {
                prevIndex,
                index,
                fromTouch: !!fromTouch,
                fromThumb: !!fromThumb
              });
              this.lgBusy = true;
              clearTimeout(this.hideBarTimeout);
              this.arrowDisable(index);
              if (!direction) {
                if (index < prevIndex) {
                  direction = "prev";
                } else if (index > prevIndex) {
                  direction = "next";
                }
              }
              if (!fromTouch) {
                this.makeSlideAnimation(direction, currentSlideItem, previousSlideItem_1);
              } else {
                this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");
                var touchPrev = void 0;
                var touchNext = void 0;
                if (numberOfGalleryItems > 2) {
                  touchPrev = index - 1;
                  touchNext = index + 1;
                  if (index === 0 && prevIndex === numberOfGalleryItems - 1) {
                    touchNext = 0;
                    touchPrev = numberOfGalleryItems - 1;
                  } else if (index === numberOfGalleryItems - 1 && prevIndex === 0) {
                    touchNext = 0;
                    touchPrev = numberOfGalleryItems - 1;
                  }
                } else {
                  touchPrev = 0;
                  touchNext = 1;
                }
                if (direction === "prev") {
                  this.getSlideItem(touchNext).addClass("lg-next-slide");
                } else {
                  this.getSlideItem(touchPrev).addClass("lg-prev-slide");
                }
                currentSlideItem.addClass("lg-current");
              }
              if (!this.lGalleryOn) {
                this.loadContent(index, true);
              } else {
                setTimeout(function() {
                  _this.loadContent(index, true);
                  if (_this.settings.appendSubHtmlTo !== ".lg-item") {
                    _this.addHtml(index);
                  }
                }, this.settings.speed + 50 + (fromTouch ? 0 : this.settings.slideDelay));
              }
              setTimeout(function() {
                _this.lgBusy = false;
                previousSlideItem_1.removeClass("lg-slide-progress");
                _this.LGel.trigger(lGEvents.afterSlide, {
                  prevIndex,
                  index,
                  fromTouch,
                  fromThumb
                });
              }, (this.lGalleryOn ? this.settings.speed + 100 : 100) + (fromTouch ? 0 : this.settings.slideDelay));
            }
            this.index = index;
          };
          LightGallery3.prototype.updateCurrentCounter = function(index) {
            this.getElementById("lg-counter-current").html(index + 1 + "");
          };
          LightGallery3.prototype.updateCounterTotal = function() {
            this.getElementById("lg-counter-all").html(this.galleryItems.length + "");
          };
          LightGallery3.prototype.getSlideType = function(item) {
            if (item.__slideVideoInfo) {
              return "video";
            } else if (item.iframe) {
              return "iframe";
            } else {
              return "image";
            }
          };
          LightGallery3.prototype.touchMove = function(startCoords, endCoords, e) {
            var distanceX = endCoords.pageX - startCoords.pageX;
            var distanceY = endCoords.pageY - startCoords.pageY;
            var allowSwipe = false;
            if (this.swipeDirection) {
              allowSwipe = true;
            } else {
              if (Math.abs(distanceX) > 15) {
                this.swipeDirection = "horizontal";
                allowSwipe = true;
              } else if (Math.abs(distanceY) > 15) {
                this.swipeDirection = "vertical";
                allowSwipe = true;
              }
            }
            if (!allowSwipe) {
              return;
            }
            var $currentSlide = this.getSlideItem(this.index);
            if (this.swipeDirection === "horizontal") {
              e === null || e === void 0 ? void 0 : e.preventDefault();
              this.outer.addClass("lg-dragging");
              this.setTranslate($currentSlide, distanceX, 0);
              var width = $currentSlide.get().offsetWidth;
              var slideWidthAmount = width * 15 / 100;
              var gutter = slideWidthAmount - Math.abs(distanceX * 10 / 100);
              this.setTranslate(this.outer.find(".lg-prev-slide").first(), -width + distanceX - gutter, 0);
              this.setTranslate(this.outer.find(".lg-next-slide").first(), width + distanceX + gutter, 0);
            } else if (this.swipeDirection === "vertical") {
              if (this.settings.swipeToClose) {
                e === null || e === void 0 ? void 0 : e.preventDefault();
                this.$container.addClass("lg-dragging-vertical");
                var opacity = 1 - Math.abs(distanceY) / window.innerHeight;
                this.$backdrop.css("opacity", opacity);
                var scale = 1 - Math.abs(distanceY) / (window.innerWidth * 2);
                this.setTranslate($currentSlide, 0, distanceY, scale, scale);
                if (Math.abs(distanceY) > 100) {
                  this.outer.addClass("lg-hide-items").removeClass("lg-components-open");
                }
              }
            }
          };
          LightGallery3.prototype.touchEnd = function(endCoords, startCoords, event) {
            var _this = this;
            var distance;
            if (this.settings.mode !== "lg-slide") {
              this.outer.addClass("lg-slide");
            }
            setTimeout(function() {
              _this.$container.removeClass("lg-dragging-vertical");
              _this.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");
              var triggerClick = true;
              if (_this.swipeDirection === "horizontal") {
                distance = endCoords.pageX - startCoords.pageX;
                var distanceAbs = Math.abs(endCoords.pageX - startCoords.pageX);
                if (distance < 0 && distanceAbs > _this.settings.swipeThreshold) {
                  _this.goToNextSlide(true);
                  triggerClick = false;
                } else if (distance > 0 && distanceAbs > _this.settings.swipeThreshold) {
                  _this.goToPrevSlide(true);
                  triggerClick = false;
                }
              } else if (_this.swipeDirection === "vertical") {
                distance = Math.abs(endCoords.pageY - startCoords.pageY);
                if (_this.settings.closable && _this.settings.swipeToClose && distance > 100) {
                  _this.closeGallery();
                  return;
                } else {
                  _this.$backdrop.css("opacity", 1);
                }
              }
              _this.outer.find(".lg-item").removeAttr("style");
              if (triggerClick && Math.abs(endCoords.pageX - startCoords.pageX) < 5) {
                var target = $LG(event.target);
                if (_this.isPosterElement(target)) {
                  _this.LGel.trigger(lGEvents.posterClick);
                }
              }
              _this.swipeDirection = void 0;
            });
            setTimeout(function() {
              if (!_this.outer.hasClass("lg-dragging") && _this.settings.mode !== "lg-slide") {
                _this.outer.removeClass("lg-slide");
              }
            }, this.settings.speed + 100);
          };
          LightGallery3.prototype.enableSwipe = function() {
            var _this = this;
            var startCoords = {};
            var endCoords = {};
            var isMoved = false;
            var isSwiping = false;
            if (this.settings.enableSwipe) {
              this.$inner.on("touchstart.lg", function(e) {
                _this.dragOrSwipeEnabled = true;
                var $item = _this.getSlideItem(_this.index);
                if (($LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) && !_this.outer.hasClass("lg-zoomed") && !_this.lgBusy && e.touches.length === 1) {
                  isSwiping = true;
                  _this.touchAction = "swipe";
                  _this.manageSwipeClass();
                  startCoords = {
                    pageX: e.touches[0].pageX,
                    pageY: e.touches[0].pageY
                  };
                }
              });
              this.$inner.on("touchmove.lg", function(e) {
                if (isSwiping && _this.touchAction === "swipe" && e.touches.length === 1) {
                  endCoords = {
                    pageX: e.touches[0].pageX,
                    pageY: e.touches[0].pageY
                  };
                  _this.touchMove(startCoords, endCoords, e);
                  isMoved = true;
                }
              });
              this.$inner.on("touchend.lg", function(event) {
                if (_this.touchAction === "swipe") {
                  if (isMoved) {
                    isMoved = false;
                    _this.touchEnd(endCoords, startCoords, event);
                  } else if (isSwiping) {
                    var target = $LG(event.target);
                    if (_this.isPosterElement(target)) {
                      _this.LGel.trigger(lGEvents.posterClick);
                    }
                  }
                  _this.touchAction = void 0;
                  isSwiping = false;
                }
              });
            }
          };
          LightGallery3.prototype.enableDrag = function() {
            var _this = this;
            var startCoords = {};
            var endCoords = {};
            var isDraging = false;
            var isMoved = false;
            if (this.settings.enableDrag) {
              this.outer.on("mousedown.lg", function(e) {
                _this.dragOrSwipeEnabled = true;
                var $item = _this.getSlideItem(_this.index);
                if ($LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) {
                  if (!_this.outer.hasClass("lg-zoomed") && !_this.lgBusy) {
                    e.preventDefault();
                    if (!_this.lgBusy) {
                      _this.manageSwipeClass();
                      startCoords = {
                        pageX: e.pageX,
                        pageY: e.pageY
                      };
                      isDraging = true;
                      _this.outer.get().scrollLeft += 1;
                      _this.outer.get().scrollLeft -= 1;
                      _this.outer.removeClass("lg-grab").addClass("lg-grabbing");
                      _this.LGel.trigger(lGEvents.dragStart);
                    }
                  }
                }
              });
              $LG(window).on("mousemove.lg.global" + this.lgId, function(e) {
                if (isDraging && _this.lgOpened) {
                  isMoved = true;
                  endCoords = {
                    pageX: e.pageX,
                    pageY: e.pageY
                  };
                  _this.touchMove(startCoords, endCoords);
                  _this.LGel.trigger(lGEvents.dragMove);
                }
              });
              $LG(window).on("mouseup.lg.global" + this.lgId, function(event) {
                if (!_this.lgOpened) {
                  return;
                }
                var target = $LG(event.target);
                if (isMoved) {
                  isMoved = false;
                  _this.touchEnd(endCoords, startCoords, event);
                  _this.LGel.trigger(lGEvents.dragEnd);
                } else if (_this.isPosterElement(target)) {
                  _this.LGel.trigger(lGEvents.posterClick);
                }
                if (isDraging) {
                  isDraging = false;
                  _this.outer.removeClass("lg-grabbing").addClass("lg-grab");
                }
              });
            }
          };
          LightGallery3.prototype.triggerPosterClick = function() {
            var _this = this;
            this.$inner.on("click.lg", function(event) {
              if (!_this.dragOrSwipeEnabled && _this.isPosterElement($LG(event.target))) {
                _this.LGel.trigger(lGEvents.posterClick);
              }
            });
          };
          LightGallery3.prototype.manageSwipeClass = function() {
            var _touchNext = this.index + 1;
            var _touchPrev = this.index - 1;
            if (this.settings.loop && this.galleryItems.length > 2) {
              if (this.index === 0) {
                _touchPrev = this.galleryItems.length - 1;
              } else if (this.index === this.galleryItems.length - 1) {
                _touchNext = 0;
              }
            }
            this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide");
            if (_touchPrev > -1) {
              this.getSlideItem(_touchPrev).addClass("lg-prev-slide");
            }
            this.getSlideItem(_touchNext).addClass("lg-next-slide");
          };
          LightGallery3.prototype.goToNextSlide = function(fromTouch) {
            var _this = this;
            var _loop = this.settings.loop;
            if (fromTouch && this.galleryItems.length < 3) {
              _loop = false;
            }
            if (!this.lgBusy) {
              if (this.index + 1 < this.galleryItems.length) {
                this.index++;
                this.LGel.trigger(lGEvents.beforeNextSlide, {
                  index: this.index
                });
                this.slide(this.index, !!fromTouch, false, "next");
              } else {
                if (_loop) {
                  this.index = 0;
                  this.LGel.trigger(lGEvents.beforeNextSlide, {
                    index: this.index
                  });
                  this.slide(this.index, !!fromTouch, false, "next");
                } else if (this.settings.slideEndAnimation && !fromTouch) {
                  this.outer.addClass("lg-right-end");
                  setTimeout(function() {
                    _this.outer.removeClass("lg-right-end");
                  }, 400);
                }
              }
            }
          };
          LightGallery3.prototype.goToPrevSlide = function(fromTouch) {
            var _this = this;
            var _loop = this.settings.loop;
            if (fromTouch && this.galleryItems.length < 3) {
              _loop = false;
            }
            if (!this.lgBusy) {
              if (this.index > 0) {
                this.index--;
                this.LGel.trigger(lGEvents.beforePrevSlide, {
                  index: this.index,
                  fromTouch
                });
                this.slide(this.index, !!fromTouch, false, "prev");
              } else {
                if (_loop) {
                  this.index = this.galleryItems.length - 1;
                  this.LGel.trigger(lGEvents.beforePrevSlide, {
                    index: this.index,
                    fromTouch
                  });
                  this.slide(this.index, !!fromTouch, false, "prev");
                } else if (this.settings.slideEndAnimation && !fromTouch) {
                  this.outer.addClass("lg-left-end");
                  setTimeout(function() {
                    _this.outer.removeClass("lg-left-end");
                  }, 400);
                }
              }
            }
          };
          LightGallery3.prototype.keyPress = function() {
            var _this = this;
            $LG(window).on("keydown.lg.global" + this.lgId, function(e) {
              if (_this.lgOpened && _this.settings.escKey === true && e.keyCode === 27) {
                e.preventDefault();
                if (_this.settings.allowMediaOverlap && _this.outer.hasClass("lg-can-toggle") && _this.outer.hasClass("lg-components-open")) {
                  _this.outer.removeClass("lg-components-open");
                } else {
                  _this.closeGallery();
                }
              }
              if (_this.lgOpened && _this.galleryItems.length > 1) {
                if (e.keyCode === 37) {
                  e.preventDefault();
                  _this.goToPrevSlide();
                }
                if (e.keyCode === 39) {
                  e.preventDefault();
                  _this.goToNextSlide();
                }
              }
            });
          };
          LightGallery3.prototype.arrow = function() {
            var _this = this;
            this.getElementById("lg-prev").on("click.lg", function() {
              _this.goToPrevSlide();
            });
            this.getElementById("lg-next").on("click.lg", function() {
              _this.goToNextSlide();
            });
          };
          LightGallery3.prototype.arrowDisable = function(index) {
            if (!this.settings.loop && this.settings.hideControlOnEnd) {
              var $prev = this.getElementById("lg-prev");
              var $next = this.getElementById("lg-next");
              if (index + 1 === this.galleryItems.length) {
                $next.attr("disabled", "disabled").addClass("disabled");
              } else {
                $next.removeAttr("disabled").removeClass("disabled");
              }
              if (index === 0) {
                $prev.attr("disabled", "disabled").addClass("disabled");
              } else {
                $prev.removeAttr("disabled").removeClass("disabled");
              }
            }
          };
          LightGallery3.prototype.setTranslate = function($el, xValue, yValue, scaleX, scaleY) {
            if (scaleX === void 0) {
              scaleX = 1;
            }
            if (scaleY === void 0) {
              scaleY = 1;
            }
            $el.css("transform", "translate3d(" + xValue + "px, " + yValue + "px, 0px) scale3d(" + scaleX + ", " + scaleY + ", 1)");
          };
          LightGallery3.prototype.mousewheel = function() {
            var _this = this;
            var lastCall = 0;
            this.outer.on("wheel.lg", function(e) {
              if (!e.deltaY || _this.galleryItems.length < 2) {
                return;
              }
              e.preventDefault();
              var now = (/* @__PURE__ */ new Date()).getTime();
              if (now - lastCall < 1e3) {
                return;
              }
              lastCall = now;
              if (e.deltaY > 0) {
                _this.goToNextSlide();
              } else if (e.deltaY < 0) {
                _this.goToPrevSlide();
              }
            });
          };
          LightGallery3.prototype.isSlideElement = function(target) {
            return target.hasClass("lg-outer") || target.hasClass("lg-item") || target.hasClass("lg-img-wrap") || target.hasClass("lg-img-rotate");
          };
          LightGallery3.prototype.isPosterElement = function(target) {
            var playButton = this.getSlideItem(this.index).find(".lg-video-play-button").get();
            return target.hasClass("lg-video-poster") || target.hasClass("lg-video-play-button") || playButton && playButton.contains(target.get());
          };
          LightGallery3.prototype.toggleMaximize = function() {
            var _this = this;
            this.getElementById("lg-maximize").on("click.lg", function() {
              _this.$container.toggleClass("lg-inline");
              _this.refreshOnResize();
            });
          };
          LightGallery3.prototype.invalidateItems = function() {
            for (var index = 0; index < this.items.length; index++) {
              var element = this.items[index];
              var $element = $LG(element);
              $element.off("click.lgcustom-item-" + $element.attr("data-lg-id"));
            }
          };
          LightGallery3.prototype.trapFocus = function() {
            var _this = this;
            this.$container.get().focus({
              preventScroll: true
            });
            $LG(window).on("keydown.lg.global" + this.lgId, function(e) {
              if (!_this.lgOpened) {
                return;
              }
              var isTabPressed = e.key === "Tab" || e.keyCode === 9;
              if (!isTabPressed) {
                return;
              }
              var focusableEls = utils.getFocusableElements(_this.$container.get());
              var firstFocusableEl = focusableEls[0];
              var lastFocusableEl = focusableEls[focusableEls.length - 1];
              if (e.shiftKey) {
                if (document.activeElement === firstFocusableEl) {
                  lastFocusableEl.focus();
                  e.preventDefault();
                }
              } else {
                if (document.activeElement === lastFocusableEl) {
                  firstFocusableEl.focus();
                  e.preventDefault();
                }
              }
            });
          };
          LightGallery3.prototype.manageCloseGallery = function() {
            var _this = this;
            if (!this.settings.closable)
              return;
            var mousedown = false;
            this.getElementById("lg-close").on("click.lg", function() {
              _this.closeGallery();
            });
            if (this.settings.closeOnTap) {
              this.outer.on("mousedown.lg", function(e) {
                var target = $LG(e.target);
                if (_this.isSlideElement(target)) {
                  mousedown = true;
                } else {
                  mousedown = false;
                }
              });
              this.outer.on("mousemove.lg", function() {
                mousedown = false;
              });
              this.outer.on("mouseup.lg", function(e) {
                var target = $LG(e.target);
                if (_this.isSlideElement(target) && mousedown) {
                  if (!_this.outer.hasClass("lg-dragging")) {
                    _this.closeGallery();
                  }
                }
              });
            }
          };
          LightGallery3.prototype.closeGallery = function(force) {
            var _this = this;
            if (!this.lgOpened || !this.settings.closable && !force) {
              return 0;
            }
            this.LGel.trigger(lGEvents.beforeClose);
            if (this.settings.resetScrollPosition && !this.settings.hideScrollbar) {
              $LG(window).scrollTop(this.prevScrollTop);
            }
            var currentItem = this.items[this.index];
            var transform;
            if (this.zoomFromOrigin && currentItem) {
              var _a = this.mediaContainerPosition, top_4 = _a.top, bottom = _a.bottom;
              var _b = this.galleryItems[this.index], __slideVideoInfo = _b.__slideVideoInfo, poster = _b.poster;
              var imageSize = utils.getSize(currentItem, this.outer, top_4 + bottom, __slideVideoInfo && poster && this.settings.videoMaxSize);
              transform = utils.getTransform(currentItem, this.outer, top_4, bottom, imageSize);
            }
            if (this.zoomFromOrigin && transform) {
              this.outer.addClass("lg-closing lg-zoom-from-image");
              this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration", this.settings.startAnimationDuration + "ms").css("transform", transform);
            } else {
              this.outer.addClass("lg-hide-items");
              this.outer.removeClass("lg-zoom-from-image");
            }
            this.destroyModules();
            this.lGalleryOn = false;
            this.isDummyImageRemoved = false;
            this.zoomFromOrigin = this.settings.zoomFromOrigin;
            clearTimeout(this.hideBarTimeout);
            this.hideBarTimeout = false;
            $LG("html").removeClass("lg-on");
            this.outer.removeClass("lg-visible lg-components-open");
            this.$backdrop.removeClass("in").css("opacity", 0);
            var removeTimeout = this.zoomFromOrigin && transform ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
            this.$container.removeClass("lg-show-in");
            setTimeout(function() {
              if (_this.zoomFromOrigin && transform) {
                _this.outer.removeClass("lg-zoom-from-image");
              }
              _this.$container.removeClass("lg-show");
              _this.resetScrollBar();
              _this.$backdrop.removeAttr("style").css("transition-duration", _this.settings.backdropDuration + "ms");
              _this.outer.removeClass("lg-closing " + _this.settings.startClass);
              _this.getSlideItem(_this.index).removeClass("lg-start-end-progress");
              _this.$inner.empty();
              if (_this.lgOpened) {
                _this.LGel.trigger(lGEvents.afterClose, {
                  instance: _this
                });
              }
              if (_this.$container.get()) {
                _this.$container.get().blur();
              }
              _this.lgOpened = false;
            }, removeTimeout + 100);
            return removeTimeout + 100;
          };
          LightGallery3.prototype.initModules = function() {
            this.plugins.forEach(function(module2) {
              try {
                module2.init();
              } catch (err) {
                console.warn("lightGallery:- make sure lightGallery module is properly initiated");
              }
            });
          };
          LightGallery3.prototype.destroyModules = function(destroy) {
            this.plugins.forEach(function(module2) {
              try {
                if (destroy) {
                  module2.destroy();
                } else {
                  module2.closeGallery && module2.closeGallery();
                }
              } catch (err) {
                console.warn("lightGallery:- make sure lightGallery module is properly destroyed");
              }
            });
          };
          LightGallery3.prototype.refresh = function(galleryItems) {
            if (!this.settings.dynamic) {
              this.invalidateItems();
            }
            if (galleryItems) {
              this.galleryItems = galleryItems;
            } else {
              this.galleryItems = this.getItems();
            }
            this.updateControls();
            this.openGalleryOnItemClick();
            this.LGel.trigger(lGEvents.updateSlides);
          };
          LightGallery3.prototype.updateControls = function() {
            this.addSlideVideoInfo(this.galleryItems);
            this.updateCounterTotal();
            this.manageSingleSlideClassName();
          };
          LightGallery3.prototype.destroyGallery = function() {
            this.destroyModules(true);
            if (!this.settings.dynamic) {
              this.invalidateItems();
            }
            $LG(window).off(".lg.global" + this.lgId);
            this.LGel.off(".lg");
            this.$container.remove();
          };
          LightGallery3.prototype.destroy = function() {
            var closeTimeout = this.closeGallery(true);
            if (closeTimeout) {
              setTimeout(this.destroyGallery.bind(this), closeTimeout);
            } else {
              this.destroyGallery();
            }
            return closeTimeout;
          };
          return LightGallery3;
        }()
      );
      function lightGallery(el, options) {
        return new LightGallery2(el, options);
      }
      var LgMethods = {
        onAfterAppendSlide: "lgAfterAppendSlide",
        onInit: "lgInit",
        onHasVideo: "lgHasVideo",
        onContainerResize: "lgContainerResize",
        onUpdateSlides: "lgUpdateSlides",
        onAfterAppendSubHtml: "lgAfterAppendSubHtml",
        onBeforeOpen: "lgBeforeOpen",
        onAfterOpen: "lgAfterOpen",
        onSlideItemLoad: "lgSlideItemLoad",
        onBeforeSlide: "lgBeforeSlide",
        onAfterSlide: "lgAfterSlide",
        onPosterClick: "lgPosterClick",
        onDragStart: "lgDragStart",
        onDragMove: "lgDragMove",
        onDragEnd: "lgDragEnd",
        onBeforeNextSlide: "lgBeforeNextSlide",
        onBeforePrevSlide: "lgBeforePrevSlide",
        onBeforeClose: "lgBeforeClose",
        onAfterClose: "lgAfterClose",
        onRotateLeft: "lgRotateLeft",
        onRotateRight: "lgRotateRight",
        onFlipHorizontal: "lgFlipHorizontal",
        onFlipVertical: "lgFlipVertical"
      };
      var LG = function(_a) {
        var children = _a.children, elementClassNames = _a.elementClassNames, onAfterAppendSlide = _a.onAfterAppendSlide, onInit = _a.onInit, onHasVideo = _a.onHasVideo, onContainerResize = _a.onContainerResize, onAfterAppendSubHtml = _a.onAfterAppendSubHtml, onBeforeOpen = _a.onBeforeOpen, onAfterOpen = _a.onAfterOpen, onSlideItemLoad = _a.onSlideItemLoad, onBeforeSlide = _a.onBeforeSlide, onAfterSlide = _a.onAfterSlide, onPosterClick = _a.onPosterClick, onDragStart = _a.onDragStart, onDragMove = _a.onDragMove, onDragEnd = _a.onDragEnd, onBeforeNextSlide = _a.onBeforeNextSlide, onBeforePrevSlide = _a.onBeforePrevSlide, onBeforeClose = _a.onBeforeClose, onAfterClose = _a.onAfterClose, onRotateLeft = _a.onRotateLeft, onRotateRight = _a.onRotateRight, onFlipHorizontal = _a.onFlipHorizontal, onFlipVertical = _a.onFlipVertical, restProps = __rest(_a, ["children", "elementClassNames", "onAfterAppendSlide", "onInit", "onHasVideo", "onContainerResize", "onAfterAppendSubHtml", "onBeforeOpen", "onAfterOpen", "onSlideItemLoad", "onBeforeSlide", "onAfterSlide", "onPosterClick", "onDragStart", "onDragMove", "onDragEnd", "onBeforeNextSlide", "onBeforePrevSlide", "onBeforeClose", "onAfterClose", "onRotateLeft", "onRotateRight", "onFlipHorizontal", "onFlipVertical"]);
        var $lg = React.useRef(null);
        var registerEvents = React.useCallback(
          function() {
            if (onAfterAppendSlide && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onAfterAppendSlide, function(event) {
                onAfterAppendSlide(event.detail);
              });
            }
            if (onInit && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onInit, function(event) {
                onInit(event.detail);
              });
            }
            if (onHasVideo && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onHasVideo, function(event) {
                onHasVideo(event.detail);
              });
            }
            if (onContainerResize && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onContainerResize, function(event) {
                onContainerResize(event.detail);
              });
            }
            if (onAfterAppendSubHtml && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onAfterAppendSubHtml, function(event) {
                onAfterAppendSubHtml(event.detail);
              });
            }
            if (onBeforeOpen && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onBeforeOpen, function(event) {
                onBeforeOpen(event.detail);
              });
            }
            if (onAfterOpen && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onAfterOpen, function(event) {
                onAfterOpen(event.detail);
              });
            }
            if (onSlideItemLoad && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onSlideItemLoad, function(event) {
                onSlideItemLoad(event.detail);
              });
            }
            if (onBeforeSlide && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onBeforeSlide, function(event) {
                onBeforeSlide(event.detail);
              });
            }
            if (onAfterSlide && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onAfterSlide, function(event) {
                onAfterSlide(event.detail);
              });
            }
            if (onPosterClick && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onPosterClick, function(event) {
                onPosterClick(event.detail);
              });
            }
            if (onDragStart && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onDragStart, function(event) {
                onDragStart(event.detail);
              });
            }
            if (onDragMove && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onDragMove, function(event) {
                onDragMove(event.detail);
              });
            }
            if (onDragEnd && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onDragEnd, function(event) {
                onDragEnd(event.detail);
              });
            }
            if (onBeforeNextSlide && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onBeforeNextSlide, function(event) {
                onBeforeNextSlide(event.detail);
              });
            }
            if (onBeforePrevSlide && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onBeforePrevSlide, function(event) {
                onBeforePrevSlide(event.detail);
              });
            }
            if (onBeforeClose && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onBeforeClose, function(event) {
                onBeforeClose(event.detail);
              });
            }
            if (onAfterClose && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onAfterClose, function(event) {
                onAfterClose(event.detail);
              });
            }
            if (onRotateLeft && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onRotateLeft, function(event) {
                onRotateLeft(event.detail);
              });
            }
            if (onRotateRight && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onRotateRight, function(event) {
                onRotateRight(event.detail);
              });
            }
            if (onFlipHorizontal && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onFlipHorizontal, function(event) {
                onFlipHorizontal(event.detail);
              });
            }
            if (onFlipVertical && $lg && $lg.current) {
              $lg.current.addEventListener(LgMethods.onFlipVertical, function(event) {
                onFlipVertical(event.detail);
              });
            }
          },
          [
            onAfterAppendSlide,
            onAfterAppendSubHtml,
            onAfterClose,
            onRotateLeft,
            onRotateRight,
            onFlipHorizontal,
            onFlipVertical,
            onAfterOpen,
            onAfterSlide,
            onBeforeClose,
            onBeforeNextSlide,
            onBeforeOpen,
            onBeforePrevSlide,
            onBeforeSlide,
            onContainerResize,
            onDragEnd,
            onDragMove,
            onDragStart,
            onHasVideo,
            onInit,
            onPosterClick,
            onSlideItemLoad
          ]
        );
        React.useEffect(function() {
          registerEvents();
          var lightGallery$1 = lightGallery($lg.current, restProps);
          return function cleanup() {
            lightGallery$1.destroy();
          };
        }, [registerEvents, restProps]);
        return React.createElement("div", { className: "lg-react-element " + (elementClassNames ? elementClassNames : ""), ref: $lg }, children);
      };
      return LG;
    });
  }
});

// node_modules/lightgallery/plugins/fullscreen/lg-fullscreen.min.js
var require_lg_fullscreen_min = __commonJS({
  "node_modules/lightgallery/plugins/fullscreen/lg-fullscreen.min.js"(exports, module) {
    !function(e, l) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = l() : "function" == typeof define && define.amd ? define(l) : (e = "undefined" != typeof globalThis ? globalThis : e || self).lgFullscreen = l();
    }(exports, function() {
      "use strict";
      var e = function() {
        return (e = Object.assign || function(e2) {
          for (var l2, n = 1, t = arguments.length; n < t; n++)
            for (var c in l2 = arguments[n])
              Object.prototype.hasOwnProperty.call(l2, c) && (e2[c] = l2[c]);
          return e2;
        }).apply(this, arguments);
      }, l = { fullScreen: true, fullscreenPluginStrings: { toggleFullscreen: "Toggle Fullscreen" } };
      return function() {
        function n(n2, t) {
          return this.core = n2, this.$LG = t, this.settings = e(e({}, l), this.core.settings), this;
        }
        return n.prototype.init = function() {
          var e2 = "";
          if (this.settings.fullScreen) {
            if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled))
              return;
            e2 = '<button type="button" aria-label="' + this.settings.fullscreenPluginStrings.toggleFullscreen + '" class="lg-fullscreen lg-icon"></button>', this.core.$toolbar.append(e2), this.fullScreen();
          }
        }, n.prototype.isFullScreen = function() {
          return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
        }, n.prototype.requestFullscreen = function() {
          var e2 = document.documentElement;
          e2.requestFullscreen ? e2.requestFullscreen() : e2.msRequestFullscreen ? e2.msRequestFullscreen() : e2.mozRequestFullScreen ? e2.mozRequestFullScreen() : e2.webkitRequestFullscreen && e2.webkitRequestFullscreen();
        }, n.prototype.exitFullscreen = function() {
          document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
        }, n.prototype.fullScreen = function() {
          var e2 = this;
          this.$LG(document).on("fullscreenchange.lg.global" + this.core.lgId + " \n            webkitfullscreenchange.lg.global" + this.core.lgId + " \n            mozfullscreenchange.lg.global" + this.core.lgId + " \n            MSFullscreenChange.lg.global" + this.core.lgId, function() {
            e2.core.lgOpened && e2.core.outer.toggleClass("lg-fullscreen-on");
          }), this.core.outer.find(".lg-fullscreen").first().on("click.lg", function() {
            e2.isFullScreen() ? e2.exitFullscreen() : e2.requestFullscreen();
          });
        }, n.prototype.closeGallery = function() {
          this.isFullScreen() && this.exitFullscreen();
        }, n.prototype.destroy = function() {
          this.$LG(document).off("fullscreenchange.lg.global" + this.core.lgId + " \n            webkitfullscreenchange.lg.global" + this.core.lgId + " \n            mozfullscreenchange.lg.global" + this.core.lgId + " \n            MSFullscreenChange.lg.global" + this.core.lgId);
        }, n;
      }();
    });
  }
});

// node_modules/lightgallery/plugins/autoplay/lg-autoplay.min.js
var require_lg_autoplay_min = __commonJS({
  "node_modules/lightgallery/plugins/autoplay/lg-autoplay.min.js"(exports, module) {
    !function(t, o) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : (t = "undefined" != typeof globalThis ? globalThis : t || self).lgAutoplay = o();
    }(exports, function() {
      "use strict";
      var t = function() {
        return (t = Object.assign || function(t2) {
          for (var o2, e2 = 1, s2 = arguments.length; e2 < s2; e2++)
            for (var r2 in o2 = arguments[e2])
              Object.prototype.hasOwnProperty.call(o2, r2) && (t2[r2] = o2[r2]);
          return t2;
        }).apply(this, arguments);
      }, o = "lgSlideItemLoad", e = "lgBeforeSlide", s = "lgAfterSlide", r = "lgDragStart", i = "lgDragEnd", a = "lgAutoplay", l = "lgAutoplayStart", n = "lgAutoplayStop", u = { autoplay: true, slideShowAutoplay: false, slideShowInterval: 5e3, progressBar: true, forceSlideShowAutoplay: false, autoplayControls: true, appendAutoplayControlsTo: ".lg-toolbar", autoplayPluginStrings: { toggleAutoplay: "Toggle Autoplay" } };
      return function() {
        function p(o2) {
          return this.core = o2, this.settings = t(t({}, u), this.core.settings), this;
        }
        return p.prototype.init = function() {
          var t2 = this;
          this.settings.autoplay && (this.interval = false, this.fromAuto = true, this.pausedOnTouchDrag = false, this.pausedOnSlideChange = false, this.settings.autoplayControls && this.controls(), this.settings.progressBar && this.core.outer.append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'), this.settings.slideShowAutoplay && this.core.LGel.once(o + ".autoplay", function() {
            t2.startAutoPlay();
          }), this.core.LGel.on(r + ".autoplay touchstart.lg.autoplay", function() {
            t2.interval && (t2.stopAutoPlay(), t2.pausedOnTouchDrag = true);
          }), this.core.LGel.on(i + ".autoplay touchend.lg.autoplay", function() {
            !t2.interval && t2.pausedOnTouchDrag && (t2.startAutoPlay(), t2.pausedOnTouchDrag = false);
          }), this.core.LGel.on(e + ".autoplay", function() {
            t2.showProgressBar(), !t2.fromAuto && t2.interval ? (t2.stopAutoPlay(), t2.pausedOnSlideChange = true) : t2.pausedOnSlideChange = false, t2.fromAuto = false;
          }), this.core.LGel.on(s + ".autoplay", function() {
            t2.pausedOnSlideChange && !t2.interval && t2.settings.forceSlideShowAutoplay && (t2.startAutoPlay(), t2.pausedOnSlideChange = false);
          }), this.showProgressBar());
        }, p.prototype.showProgressBar = function() {
          var t2 = this;
          if (this.settings.progressBar && this.fromAuto) {
            var o2 = this.core.outer.find(".lg-progress-bar"), e2 = this.core.outer.find(".lg-progress");
            this.interval && (e2.removeAttr("style"), o2.removeClass("lg-start"), setTimeout(function() {
              e2.css("transition", "width " + (t2.core.settings.speed + t2.settings.slideShowInterval) + "ms ease 0s"), o2.addClass("lg-start");
            }, 20));
          }
        }, p.prototype.controls = function() {
          var t2 = this, o2 = '<button aria-label="' + this.settings.autoplayPluginStrings.toggleAutoplay + '" type="button" class="lg-autoplay-button lg-icon"></button>';
          this.core.outer.find(this.settings.appendAutoplayControlsTo).append(o2), this.core.outer.find(".lg-autoplay-button").first().on("click.lg.autoplay", function() {
            t2.core.outer.hasClass("lg-show-autoplay") ? t2.stopAutoPlay() : t2.interval || t2.startAutoPlay();
          });
        }, p.prototype.startAutoPlay = function() {
          var t2 = this;
          this.core.outer.find(".lg-progress").css("transition", "width " + (this.core.settings.speed + this.settings.slideShowInterval) + "ms ease 0s"), this.core.outer.addClass("lg-show-autoplay"), this.core.outer.find(".lg-progress-bar").addClass("lg-start"), this.core.LGel.trigger(l, { index: this.core.index }), this.interval = setInterval(function() {
            t2.core.index + 1 < t2.core.galleryItems.length ? t2.core.index++ : t2.core.index = 0, t2.core.LGel.trigger(a, { index: t2.core.index }), t2.fromAuto = true, t2.core.slide(t2.core.index, false, false, "next");
          }, this.core.settings.speed + this.settings.slideShowInterval);
        }, p.prototype.stopAutoPlay = function() {
          this.interval && (this.core.LGel.trigger(n, { index: this.core.index }), this.core.outer.find(".lg-progress").removeAttr("style"), this.core.outer.removeClass("lg-show-autoplay"), this.core.outer.find(".lg-progress-bar").removeClass("lg-start")), clearInterval(this.interval), this.interval = false;
        }, p.prototype.closeGallery = function() {
          this.stopAutoPlay();
        }, p.prototype.destroy = function() {
          this.settings.autoplay && this.core.outer.find(".lg-progress-bar").remove(), this.core.LGel.off(".lg.autoplay"), this.core.LGel.off(".autoplay");
        }, p;
      }();
    });
  }
});

// node_modules/lightgallery/plugins/zoom/lg-zoom.min.js
var require_lg_zoom_min = __commonJS({
  "node_modules/lightgallery/plugins/zoom/lg-zoom.min.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).lgZoom = t();
    }(exports, function() {
      "use strict";
      var e = function() {
        return (e = Object.assign || function(e2) {
          for (var t2, o2 = 1, i2 = arguments.length; o2 < i2; o2++)
            for (var s2 in t2 = arguments[o2])
              Object.prototype.hasOwnProperty.call(t2, s2) && (e2[s2] = t2[s2]);
          return e2;
        }).apply(this, arguments);
      }, t = { scale: 1, zoom: true, infiniteZoom: true, actualSize: true, showZoomInOutIcons: false, actualSizeIcons: { zoomIn: "lg-zoom-in", zoomOut: "lg-zoom-out" }, enableZoomAfter: 300, zoomPluginStrings: { zoomIn: "Zoom in", zoomOut: "Zoom out", viewActualSize: "View actual size" } }, o = "lgContainerResize", i = "lgBeforeOpen", s = "lgAfterOpen", a = "lgSlideItemLoad", n = "lgAfterSlide", r = "lgRotateLeft", l = "lgRotateRight", c = "lgFlipHorizontal", g = "lgFlipVertical";
      return function() {
        function h(o2, i2) {
          return this.core = o2, this.$LG = i2, this.settings = e(e({}, t), this.core.settings), this;
        }
        return h.prototype.buildTemplates = function() {
          var e2 = this.settings.showZoomInOutIcons ? '<button id="' + this.core.getIdName("lg-zoom-in") + '" type="button" aria-label="' + this.settings.zoomPluginStrings.zoomIn + '" class="lg-zoom-in lg-icon"></button><button id="' + this.core.getIdName("lg-zoom-out") + '" type="button" aria-label="' + this.settings.zoomPluginStrings.zoomOut + '" class="lg-zoom-out lg-icon"></button>' : "";
          this.settings.actualSize && (e2 += '<button id="' + this.core.getIdName("lg-actual-size") + '" type="button" aria-label="' + this.settings.zoomPluginStrings.viewActualSize + '" class="' + this.settings.actualSizeIcons.zoomIn + ' lg-icon"></button>'), this.core.outer.addClass("lg-use-transition-for-zoom"), this.core.$toolbar.first().append(e2);
        }, h.prototype.enableZoom = function(e2) {
          var t2 = this, o2 = this.settings.enableZoomAfter + e2.detail.delay;
          this.$LG("body").first().hasClass("lg-from-hash") && e2.detail.delay ? o2 = 0 : this.$LG("body").first().removeClass("lg-from-hash"), this.zoomableTimeout = setTimeout(function() {
            t2.isImageSlide(t2.core.index) && (t2.core.getSlideItem(e2.detail.index).addClass("lg-zoomable"), e2.detail.index === t2.core.index && t2.setZoomEssentials());
          }, o2 + 30);
        }, h.prototype.enableZoomOnSlideItemLoad = function() {
          this.core.LGel.on(a + ".zoom", this.enableZoom.bind(this));
        }, h.prototype.getDragCords = function(e2) {
          return { x: e2.pageX, y: e2.pageY };
        }, h.prototype.getSwipeCords = function(e2) {
          return { x: e2.touches[0].pageX, y: e2.touches[0].pageY };
        }, h.prototype.getDragAllowedAxises = function(e2, t2) {
          if (!this.containerRect)
            return { allowX: false, allowY: false };
          var o2 = this.core.getSlideItem(this.core.index).find(".lg-image").first().get(), i2 = 0, s2 = 0, a2 = o2.getBoundingClientRect();
          e2 ? (i2 = o2.offsetHeight * e2, s2 = o2.offsetWidth * e2) : t2 ? (i2 = a2.height + t2 * a2.height, s2 = a2.width + t2 * a2.width) : (i2 = a2.height, s2 = a2.width);
          var n2 = i2 > this.containerRect.height;
          return { allowX: s2 > this.containerRect.width, allowY: n2 };
        }, h.prototype.setZoomEssentials = function() {
          this.containerRect = this.core.$content.get().getBoundingClientRect();
        }, h.prototype.zoomImage = function(e2, t2, o2, i2) {
          if (!(Math.abs(t2) <= 0)) {
            var s2, a2, n2 = this.containerRect.width / 2 + this.containerRect.left, r2 = this.containerRect.height / 2 + this.containerRect.top + this.scrollTop;
            1 === e2 && (this.positionChanged = false);
            var l2 = this.getDragAllowedAxises(0, t2), c2 = l2.allowY, g2 = l2.allowX;
            this.positionChanged && (s2 = this.left / (this.scale - t2), a2 = this.top / (this.scale - t2), this.pageX = n2 - s2, this.pageY = r2 - a2, this.positionChanged = false);
            var h2, m, u = this.getPossibleSwipeDragCords(t2), d = n2 - this.pageX, f = r2 - this.pageY;
            if (e2 - t2 > 1) {
              var p = (e2 - t2) / Math.abs(t2);
              h2 = (d = (t2 < 0 ? -d : d) + this.left * (p + (t2 < 0 ? -1 : 1))) / p, m = (f = (t2 < 0 ? -f : f) + this.top * (p + (t2 < 0 ? -1 : 1))) / p;
            } else {
              h2 = d * (p = (e2 - t2) * t2), m = f * p;
            }
            o2 && (g2 ? this.isBeyondPossibleLeft(h2, u.minX) ? h2 = u.minX : this.isBeyondPossibleRight(h2, u.maxX) && (h2 = u.maxX) : e2 > 1 && (h2 < u.minX ? h2 = u.minX : h2 > u.maxX && (h2 = u.maxX)), c2 ? this.isBeyondPossibleTop(m, u.minY) ? m = u.minY : this.isBeyondPossibleBottom(m, u.maxY) && (m = u.maxY) : e2 > 1 && (m < u.minY ? m = u.minY : m > u.maxY && (m = u.maxY))), this.setZoomStyles({ x: h2, y: m, scale: e2 }), this.left = h2, this.top = m, i2 && this.setZoomImageSize();
          }
        }, h.prototype.resetImageTranslate = function(e2) {
          if (this.isImageSlide(e2)) {
            var t2 = this.core.getSlideItem(e2).find(".lg-image").first();
            this.imageReset = false, t2.removeClass("reset-transition reset-transition-y reset-transition-x"), this.core.outer.removeClass("lg-actual-size"), t2.css("width", "auto").css("height", "auto"), setTimeout(function() {
              t2.removeClass("no-transition");
            }, 10);
          }
        }, h.prototype.setZoomImageSize = function() {
          var e2 = this, t2 = this.core.getSlideItem(this.core.index).find(".lg-image").first();
          setTimeout(function() {
            var o2 = e2.getCurrentImageActualSizeScale();
            e2.scale >= o2 && (t2.addClass("no-transition"), e2.imageReset = true);
          }, 500), setTimeout(function() {
            var o2 = e2.getCurrentImageActualSizeScale();
            if (e2.scale >= o2) {
              var i2 = e2.getDragAllowedAxises(e2.scale);
              t2.css("width", t2.get().naturalWidth + "px").css("height", t2.get().naturalHeight + "px"), e2.core.outer.addClass("lg-actual-size"), i2.allowX && i2.allowY ? t2.addClass("reset-transition") : i2.allowX && !i2.allowY ? t2.addClass("reset-transition-x") : !i2.allowX && i2.allowY && t2.addClass("reset-transition-y");
            }
          }, 550);
        }, h.prototype.setZoomStyles = function(e2) {
          var t2 = this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(), o2 = this.core.getSlideItem(this.core.index).find(".lg-image").first(), i2 = this.core.outer.find(".lg-current .lg-dummy-img").first();
          this.scale = e2.scale, o2.css("transform", "scale3d(" + e2.scale + ", " + e2.scale + ", 1)"), i2.css("transform", "scale3d(" + e2.scale + ", " + e2.scale + ", 1)");
          var s2 = "translate3d(" + e2.x + "px, " + e2.y + "px, 0)";
          t2.css("transform", s2);
        }, h.prototype.setActualSize = function(e2, t2) {
          var o2 = this;
          if (!this.zoomInProgress) {
            this.zoomInProgress = true;
            var i2 = this.core.galleryItems[this.core.index];
            this.resetImageTranslate(e2), setTimeout(function() {
              if (i2.src && !o2.core.outer.hasClass("lg-first-slide-loading")) {
                var e3 = o2.getCurrentImageActualSizeScale(), s2 = o2.scale;
                o2.core.outer.hasClass("lg-zoomed") ? o2.scale = 1 : o2.scale = o2.getScale(e3), o2.setPageCords(t2), o2.beginZoom(o2.scale), o2.zoomImage(o2.scale, o2.scale - s2, true, true);
              }
            }, 50), setTimeout(function() {
              o2.core.outer.removeClass("lg-grabbing").addClass("lg-grab");
            }, 60), setTimeout(function() {
              o2.zoomInProgress = false;
            }, 610);
          }
        }, h.prototype.getNaturalWidth = function(e2) {
          var t2 = this.core.getSlideItem(e2).find(".lg-image").first(), o2 = this.core.galleryItems[e2].width;
          return o2 ? parseFloat(o2) : t2.get().naturalWidth;
        }, h.prototype.getActualSizeScale = function(e2, t2) {
          return e2 >= t2 ? e2 / t2 || 2 : 1;
        }, h.prototype.getCurrentImageActualSizeScale = function() {
          var e2 = this.core.getSlideItem(this.core.index).find(".lg-image").first().get().offsetWidth, t2 = this.getNaturalWidth(this.core.index) || e2;
          return this.getActualSizeScale(t2, e2);
        }, h.prototype.getPageCords = function(e2) {
          var t2 = {};
          if (e2)
            t2.x = e2.pageX || e2.touches[0].pageX, t2.y = e2.pageY || e2.touches[0].pageY;
          else {
            var o2 = this.core.$content.get().getBoundingClientRect();
            t2.x = o2.width / 2 + o2.left, t2.y = o2.height / 2 + this.scrollTop + o2.top;
          }
          return t2;
        }, h.prototype.setPageCords = function(e2) {
          var t2 = this.getPageCords(e2);
          this.pageX = t2.x, this.pageY = t2.y;
        }, h.prototype.manageActualPixelClassNames = function() {
          this.core.getElementById("lg-actual-size").removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut);
        }, h.prototype.beginZoom = function(e2) {
          return this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"), e2 > 1 ? (this.core.outer.addClass("lg-zoomed"), this.manageActualPixelClassNames()) : this.resetZoom(), e2 > 1;
        }, h.prototype.getScale = function(e2) {
          var t2 = this.getCurrentImageActualSizeScale();
          return e2 < 1 ? e2 = 1 : e2 > t2 && (e2 = t2), e2;
        }, h.prototype.init = function() {
          var e2 = this;
          if (this.settings.zoom) {
            this.buildTemplates(), this.enableZoomOnSlideItemLoad();
            var t2 = null;
            this.core.outer.on("dblclick.lg", function(t3) {
              e2.$LG(t3.target).hasClass("lg-image") && e2.setActualSize(e2.core.index, t3);
            }), this.core.outer.on("touchstart.lg", function(o2) {
              var i2 = e2.$LG(o2.target);
              1 === o2.touches.length && i2.hasClass("lg-image") && (t2 ? (clearTimeout(t2), t2 = null, o2.preventDefault(), e2.setActualSize(e2.core.index, o2)) : t2 = setTimeout(function() {
                t2 = null;
              }, 300));
            }), this.core.LGel.on(o + ".zoom " + l + ".zoom " + r + ".zoom " + c + ".zoom " + g + ".zoom", function() {
              if (e2.core.lgOpened && e2.isImageSlide(e2.core.index) && !e2.core.touchAction) {
                var t3 = e2.core.getSlideItem(e2.core.index).find(".lg-img-wrap").first();
                e2.top = 0, e2.left = 0, e2.setZoomEssentials(), e2.setZoomSwipeStyles(t3, { x: 0, y: 0 }), e2.positionChanged = true;
              }
            }), this.$LG(window).on("scroll.lg.zoom.global" + this.core.lgId, function() {
              e2.core.lgOpened && (e2.scrollTop = e2.$LG(window).scrollTop());
            }), this.core.getElementById("lg-zoom-out").on("click.lg", function() {
              if (e2.isImageSlide(e2.core.index)) {
                var t3 = 0;
                e2.imageReset && (e2.resetImageTranslate(e2.core.index), t3 = 50), setTimeout(function() {
                  var t4 = e2.scale - e2.settings.scale;
                  t4 < 1 && (t4 = 1), e2.beginZoom(t4), e2.zoomImage(t4, -e2.settings.scale, true, !e2.settings.infiniteZoom);
                }, t3);
              }
            }), this.core.getElementById("lg-zoom-in").on("click.lg", function() {
              e2.zoomIn();
            }), this.core.getElementById("lg-actual-size").on("click.lg", function() {
              e2.setActualSize(e2.core.index);
            }), this.core.LGel.on(i + ".zoom", function() {
              e2.core.outer.find(".lg-item").removeClass("lg-zoomable");
            }), this.core.LGel.on(s + ".zoom", function() {
              e2.scrollTop = e2.$LG(window).scrollTop(), e2.pageX = e2.core.outer.width() / 2, e2.pageY = e2.core.outer.height() / 2 + e2.scrollTop, e2.scale = 1;
            }), this.core.LGel.on(n + ".zoom", function(t3) {
              var o2 = t3.detail.prevIndex;
              e2.scale = 1, e2.positionChanged = false, e2.zoomInProgress = false, e2.resetZoom(o2), e2.resetImageTranslate(o2), e2.isImageSlide(e2.core.index) && e2.setZoomEssentials();
            }), this.zoomDrag(), this.pinchZoom(), this.zoomSwipe(), this.zoomableTimeout = false, this.positionChanged = false, this.zoomInProgress = false;
          }
        }, h.prototype.zoomIn = function() {
          if (this.isImageSlide(this.core.index)) {
            var e2 = this.scale + this.settings.scale;
            this.settings.infiniteZoom || (e2 = this.getScale(e2)), this.beginZoom(e2), this.zoomImage(e2, Math.min(this.settings.scale, e2 - this.scale), true, !this.settings.infiniteZoom);
          }
        }, h.prototype.resetZoom = function(e2) {
          this.core.outer.removeClass("lg-zoomed lg-zoom-drag-transition");
          var t2 = this.core.getElementById("lg-actual-size"), o2 = this.core.getSlideItem(void 0 !== e2 ? e2 : this.core.index);
          t2.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn), o2.find(".lg-img-wrap").first().removeAttr("style"), o2.find(".lg-image").first().removeAttr("style"), this.scale = 1, this.left = 0, this.top = 0, this.setPageCords();
        }, h.prototype.getTouchDistance = function(e2) {
          return Math.sqrt((e2.touches[0].pageX - e2.touches[1].pageX) * (e2.touches[0].pageX - e2.touches[1].pageX) + (e2.touches[0].pageY - e2.touches[1].pageY) * (e2.touches[0].pageY - e2.touches[1].pageY));
        }, h.prototype.pinchZoom = function() {
          var e2 = this, t2 = 0, o2 = false, i2 = 1, s2 = 0, a2 = this.core.getSlideItem(this.core.index);
          this.core.outer.on("touchstart.lg", function(o3) {
            if (a2 = e2.core.getSlideItem(e2.core.index), e2.isImageSlide(e2.core.index) && 2 === o3.touches.length) {
              if (o3.preventDefault(), e2.core.outer.hasClass("lg-first-slide-loading"))
                return;
              i2 = e2.scale || 1, e2.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"), e2.setPageCords(o3), e2.resetImageTranslate(e2.core.index), e2.core.touchAction = "pinch", t2 = e2.getTouchDistance(o3);
            }
          }), this.core.$inner.on("touchmove.lg", function(n2) {
            if (2 === n2.touches.length && "pinch" === e2.core.touchAction && (e2.$LG(n2.target).hasClass("lg-item") || a2.get().contains(n2.target))) {
              n2.preventDefault();
              var r2 = e2.getTouchDistance(n2), l2 = t2 - r2;
              if (!o2 && Math.abs(l2) > 5 && (o2 = true), o2) {
                s2 = e2.scale;
                var c2 = Math.max(1, i2 + 0.02 * -l2);
                e2.scale = Math.round(100 * (c2 + Number.EPSILON)) / 100;
                var g2 = e2.scale - s2;
                e2.zoomImage(e2.scale, Math.round(100 * (g2 + Number.EPSILON)) / 100, false, false);
              }
            }
          }), this.core.$inner.on("touchend.lg", function(i3) {
            if ("pinch" === e2.core.touchAction && (e2.$LG(i3.target).hasClass("lg-item") || a2.get().contains(i3.target))) {
              if (o2 = false, t2 = 0, e2.scale <= 1)
                e2.resetZoom();
              else {
                var s3 = e2.getCurrentImageActualSizeScale();
                if (e2.scale >= s3) {
                  var n2 = s3 - e2.scale;
                  0 === n2 && (n2 = 0.01), e2.zoomImage(s3, n2, false, true);
                }
                e2.manageActualPixelClassNames(), e2.core.outer.addClass("lg-zoomed");
              }
              e2.core.touchAction = void 0;
            }
          });
        }, h.prototype.touchendZoom = function(e2, t2, o2, i2, s2) {
          var a2 = t2.x - e2.x, n2 = t2.y - e2.y, r2 = Math.abs(a2) / s2 + 1, l2 = Math.abs(n2) / s2 + 1;
          r2 > 2 && (r2 += 1), l2 > 2 && (l2 += 1), a2 *= r2, n2 *= l2;
          var c2 = this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(), g2 = {};
          g2.x = this.left + a2, g2.y = this.top + n2;
          var h2 = this.getPossibleSwipeDragCords();
          (Math.abs(a2) > 15 || Math.abs(n2) > 15) && (i2 && (this.isBeyondPossibleTop(g2.y, h2.minY) ? g2.y = h2.minY : this.isBeyondPossibleBottom(g2.y, h2.maxY) && (g2.y = h2.maxY)), o2 && (this.isBeyondPossibleLeft(g2.x, h2.minX) ? g2.x = h2.minX : this.isBeyondPossibleRight(g2.x, h2.maxX) && (g2.x = h2.maxX)), i2 ? this.top = g2.y : g2.y = this.top, o2 ? this.left = g2.x : g2.x = this.left, this.setZoomSwipeStyles(c2, g2), this.positionChanged = true);
        }, h.prototype.getZoomSwipeCords = function(e2, t2, o2, i2, s2) {
          var a2 = {};
          if (i2) {
            if (a2.y = this.top + (t2.y - e2.y), this.isBeyondPossibleTop(a2.y, s2.minY)) {
              var n2 = s2.minY - a2.y;
              a2.y = s2.minY - n2 / 6;
            } else if (this.isBeyondPossibleBottom(a2.y, s2.maxY)) {
              var r2 = a2.y - s2.maxY;
              a2.y = s2.maxY + r2 / 6;
            }
          } else
            a2.y = this.top;
          if (o2) {
            if (a2.x = this.left + (t2.x - e2.x), this.isBeyondPossibleLeft(a2.x, s2.minX)) {
              var l2 = s2.minX - a2.x;
              a2.x = s2.minX - l2 / 6;
            } else if (this.isBeyondPossibleRight(a2.x, s2.maxX)) {
              var c2 = a2.x - s2.maxX;
              a2.x = s2.maxX + c2 / 6;
            }
          } else
            a2.x = this.left;
          return a2;
        }, h.prototype.isBeyondPossibleLeft = function(e2, t2) {
          return e2 >= t2;
        }, h.prototype.isBeyondPossibleRight = function(e2, t2) {
          return e2 <= t2;
        }, h.prototype.isBeyondPossibleTop = function(e2, t2) {
          return e2 >= t2;
        }, h.prototype.isBeyondPossibleBottom = function(e2, t2) {
          return e2 <= t2;
        }, h.prototype.isImageSlide = function(e2) {
          var t2 = this.core.galleryItems[e2];
          return "image" === this.core.getSlideType(t2);
        }, h.prototype.getPossibleSwipeDragCords = function(e2) {
          var t2 = this.core.getSlideItem(this.core.index).find(".lg-image").first(), o2 = this.core.mediaContainerPosition.bottom, i2 = t2.get().getBoundingClientRect(), s2 = i2.height, a2 = i2.width;
          return e2 && (s2 += e2 * s2, a2 += e2 * a2), { minY: (s2 - this.containerRect.height) / 2, maxY: (this.containerRect.height - s2) / 2 + o2, minX: (a2 - this.containerRect.width) / 2, maxX: (this.containerRect.width - a2) / 2 };
        }, h.prototype.setZoomSwipeStyles = function(e2, t2) {
          e2.css("transform", "translate3d(" + t2.x + "px, " + t2.y + "px, 0)");
        }, h.prototype.zoomSwipe = function() {
          var e2, t2, o2 = this, i2 = {}, s2 = {}, a2 = false, n2 = false, r2 = false, l2 = /* @__PURE__ */ new Date(), c2 = (/* @__PURE__ */ new Date(), this.core.getSlideItem(this.core.index));
          this.core.$inner.on("touchstart.lg", function(s3) {
            if (o2.isImageSlide(o2.core.index) && (c2 = o2.core.getSlideItem(o2.core.index), (o2.$LG(s3.target).hasClass("lg-item") || c2.get().contains(s3.target)) && 1 === s3.touches.length && o2.core.outer.hasClass("lg-zoomed"))) {
              s3.preventDefault(), l2 = /* @__PURE__ */ new Date(), o2.core.touchAction = "zoomSwipe", t2 = o2.core.getSlideItem(o2.core.index).find(".lg-img-wrap").first();
              var a3 = o2.getDragAllowedAxises(0);
              r2 = a3.allowY, ((n2 = a3.allowX) || r2) && (i2 = o2.getSwipeCords(s3)), e2 = o2.getPossibleSwipeDragCords(), o2.core.outer.addClass("lg-zoom-dragging lg-zoom-drag-transition");
            }
          }), this.core.$inner.on("touchmove.lg", function(l3) {
            if (1 === l3.touches.length && "zoomSwipe" === o2.core.touchAction && (o2.$LG(l3.target).hasClass("lg-item") || c2.get().contains(l3.target))) {
              l3.preventDefault(), o2.core.touchAction = "zoomSwipe", s2 = o2.getSwipeCords(l3);
              var g2 = o2.getZoomSwipeCords(i2, s2, n2, r2, e2);
              (Math.abs(s2.x - i2.x) > 15 || Math.abs(s2.y - i2.y) > 15) && (a2 = true, o2.setZoomSwipeStyles(t2, g2));
            }
          }), this.core.$inner.on("touchend.lg", function(e3) {
            if ("zoomSwipe" === o2.core.touchAction && (o2.$LG(e3.target).hasClass("lg-item") || c2.get().contains(e3.target))) {
              if (e3.preventDefault(), o2.core.touchAction = void 0, o2.core.outer.removeClass("lg-zoom-dragging"), !a2)
                return;
              a2 = false;
              var t3 = (/* @__PURE__ */ new Date()).valueOf() - l2.valueOf();
              o2.touchendZoom(i2, s2, n2, r2, t3);
            }
          });
        }, h.prototype.zoomDrag = function() {
          var e2, t2, o2, i2, s2 = this, a2 = {}, n2 = {}, r2 = false, l2 = false, c2 = false, g2 = false;
          this.core.outer.on("mousedown.lg.zoom", function(t3) {
            if (s2.isImageSlide(s2.core.index)) {
              var n3 = s2.core.getSlideItem(s2.core.index);
              if (s2.$LG(t3.target).hasClass("lg-item") || n3.get().contains(t3.target)) {
                e2 = /* @__PURE__ */ new Date(), i2 = s2.core.getSlideItem(s2.core.index).find(".lg-img-wrap").first();
                var l3 = s2.getDragAllowedAxises(0);
                g2 = l3.allowY, c2 = l3.allowX, s2.core.outer.hasClass("lg-zoomed") && s2.$LG(t3.target).hasClass("lg-object") && (c2 || g2) && (t3.preventDefault(), a2 = s2.getDragCords(t3), o2 = s2.getPossibleSwipeDragCords(), r2 = true, s2.core.outer.removeClass("lg-grab").addClass("lg-grabbing lg-zoom-drag-transition lg-zoom-dragging"));
              }
            }
          }), this.$LG(window).on("mousemove.lg.zoom.global" + this.core.lgId, function(e3) {
            if (r2) {
              l2 = true, n2 = s2.getDragCords(e3);
              var t3 = s2.getZoomSwipeCords(a2, n2, c2, g2, o2);
              s2.setZoomSwipeStyles(i2, t3);
            }
          }), this.$LG(window).on("mouseup.lg.zoom.global" + this.core.lgId, function(o3) {
            if (r2) {
              if (t2 = /* @__PURE__ */ new Date(), r2 = false, s2.core.outer.removeClass("lg-zoom-dragging"), l2 && (a2.x !== n2.x || a2.y !== n2.y)) {
                n2 = s2.getDragCords(o3);
                var i3 = t2.valueOf() - e2.valueOf();
                s2.touchendZoom(a2, n2, c2, g2, i3);
              }
              l2 = false;
            }
            s2.core.outer.removeClass("lg-grabbing").addClass("lg-grab");
          });
        }, h.prototype.closeGallery = function() {
          this.resetZoom(), this.zoomInProgress = false;
        }, h.prototype.destroy = function() {
          this.$LG(window).off(".lg.zoom.global" + this.core.lgId), this.core.LGel.off(".lg.zoom"), this.core.LGel.off(".zoom"), clearTimeout(this.zoomableTimeout), this.zoomableTimeout = false;
        }, h;
      }();
    });
  }
});

// node_modules/lightgallery/plugins/share/lg-share.min.js
var require_lg_share_min = __commonJS({
  "node_modules/lightgallery/plugins/share/lg-share.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).lgShare = e();
    }(exports, function() {
      "use strict";
      var t = function() {
        return (t = Object.assign || function(t2) {
          for (var e2, r2 = 1, o2 = arguments.length; r2 < o2; r2++)
            for (var n2 in e2 = arguments[r2])
              Object.prototype.hasOwnProperty.call(e2, n2) && (t2[n2] = e2[n2]);
          return t2;
        }).apply(this, arguments);
      };
      function e() {
        for (var t2 = 0, e2 = 0, r2 = arguments.length; e2 < r2; e2++)
          t2 += arguments[e2].length;
        var o2 = Array(t2), n2 = 0;
        for (e2 = 0; e2 < r2; e2++)
          for (var i2 = arguments[e2], s2 = 0, a = i2.length; s2 < a; s2++, n2++)
            o2[n2] = i2[s2];
        return o2;
      }
      var r = { share: true, facebook: true, facebookDropdownText: "Facebook", twitter: true, twitterDropdownText: "Twitter", pinterest: true, pinterestDropdownText: "Pinterest", additionalShareOptions: [], sharePluginStrings: { share: "Share" } };
      function o(t2) {
        return "//www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(t2.facebookShareUrl || window.location.href);
      }
      function n(t2) {
        var e2 = encodeURIComponent(t2.twitterShareUrl || window.location.href);
        return "//twitter.com/intent/tweet?text=" + t2.tweetText + "&url=" + e2;
      }
      function i(t2) {
        var e2 = t2.pinterestText, r2 = encodeURIComponent(t2.src);
        return "http://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(t2.pinterestShareUrl || window.location.href) + "&media=" + r2 + "&description=" + e2;
      }
      var s = "lgAfterSlide";
      return function() {
        function a(e2) {
          return this.shareOptions = [], this.core = e2, this.settings = t(t({}, r), this.core.settings), this;
        }
        return a.prototype.init = function() {
          this.settings.share && (this.shareOptions = e(this.getDefaultShareOptions(), this.settings.additionalShareOptions), this.setLgShareMarkup(), this.core.outer.find(".lg-share .lg-dropdown").append(this.getShareListHtml()), this.core.LGel.on(s + ".share", this.onAfterSlide.bind(this)));
        }, a.prototype.getShareListHtml = function() {
          var t2 = "";
          return this.shareOptions.forEach(function(e2) {
            t2 += e2.dropdownHTML;
          }), t2;
        }, a.prototype.setLgShareMarkup = function() {
          var t2 = this;
          this.core.$toolbar.append('<button type="button" aria-label="' + this.settings.sharePluginStrings.share + '" aria-haspopup="true" aria-expanded="false" class="lg-share lg-icon">\n                <ul class="lg-dropdown" style="position: absolute;"></ul></button>'), this.core.outer.append('<div class="lg-dropdown-overlay"></div>'), this.core.outer.find(".lg-share").first().on("click.lg", function() {
            t2.core.outer.toggleClass("lg-dropdown-active"), t2.core.outer.hasClass("lg-dropdown-active") ? t2.core.outer.attr("aria-expanded", true) : t2.core.outer.attr("aria-expanded", false);
          }), this.core.outer.find(".lg-dropdown-overlay").first().on("click.lg", function() {
            t2.core.outer.removeClass("lg-dropdown-active"), t2.core.outer.attr("aria-expanded", false);
          });
        }, a.prototype.onAfterSlide = function(t2) {
          var e2 = this, r2 = t2.detail.index, o2 = this.core.galleryItems[r2];
          setTimeout(function() {
            e2.shareOptions.forEach(function(t3) {
              var r3 = t3.selector;
              e2.core.outer.find(r3).attr("href", t3.generateLink(o2));
            });
          }, 100);
        }, a.prototype.getShareListItemHTML = function(t2, e2) {
          return '<li><a class="lg-share-' + t2 + '" rel="noopener" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + e2 + "</span></a></li>";
        }, a.prototype.getDefaultShareOptions = function() {
          return e(this.settings.facebook ? [{ type: "facebook", generateLink: o, dropdownHTML: this.getShareListItemHTML("facebook", this.settings.facebookDropdownText), selector: ".lg-share-facebook" }] : [], this.settings.twitter ? [{ type: "twitter", generateLink: n, dropdownHTML: this.getShareListItemHTML("twitter", this.settings.twitterDropdownText), selector: ".lg-share-twitter" }] : [], this.settings.pinterest ? [{ type: "pinterest", generateLink: i, dropdownHTML: this.getShareListItemHTML("pinterest", this.settings.pinterestDropdownText), selector: ".lg-share-pinterest" }] : []);
        }, a.prototype.destroy = function() {
          this.core.outer.find(".lg-dropdown-overlay").remove(), this.core.outer.find(".lg-share").remove(), this.core.LGel.off(".lg.share"), this.core.LGel.off(".share");
        }, a;
      }();
    });
  }
});

// node_modules/lightgallery/plugins/comment/lg-comment.min.js
var require_lg_comment_min = __commonJS({
  "node_modules/lightgallery/plugins/comment/lg-comment.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).lgComment = e();
    }(exports, function() {
      "use strict";
      var t = function() {
        return (t = Object.assign || function(t2) {
          for (var e2, o2 = 1, n2 = arguments.length; o2 < n2; o2++)
            for (var i in e2 = arguments[o2])
              Object.prototype.hasOwnProperty.call(e2, i) && (t2[i] = e2[i]);
          return t2;
        }).apply(this, arguments);
      }, e = "lgBeforeSlide", o = "lgAfterSlide", n = { commentBox: false, fbComments: false, disqusComments: false, disqusConfig: { title: void 0, language: "en" }, commentsMarkup: '<div id="lg-comment-box" class="lg-comment-box lg-fb-comment-box"><div class="lg-comment-header"><h3 class="lg-comment-title">Leave a comment.</h3><span class="lg-comment-close lg-icon"></span></div><div class="lg-comment-body"></div></div>', commentPluginStrings: { toggleComments: "Toggle Comments" } };
      return function() {
        function i(e2, o2) {
          return this.core = e2, this.$LG = o2, this.settings = t(t({}, n), this.core.settings), this;
        }
        return i.prototype.init = function() {
          this.settings.commentBox && (this.setMarkup(), this.toggleCommentBox(), this.settings.fbComments ? this.addFbComments() : this.settings.disqusComments && this.addDisqusComments());
        }, i.prototype.setMarkup = function() {
          this.core.outer.append(this.settings.commentsMarkup + '<div class="lg-comment-overlay"></div>');
          var t2 = '<button type="button" aria-label="' + this.settings.commentPluginStrings.toggleComments + '" class="lg-comment-toggle lg-icon"></button>';
          this.core.$toolbar.append(t2);
        }, i.prototype.toggleCommentBox = function() {
          var t2 = this;
          this.core.outer.find(".lg-comment-toggle").first().on("click.lg.comment", function() {
            t2.core.outer.toggleClass("lg-comment-active");
          }), this.core.outer.find(".lg-comment-overlay").first().on("click.lg.comment", function() {
            t2.core.outer.removeClass("lg-comment-active");
          }), this.core.outer.find(".lg-comment-close").first().on("click.lg.comment", function() {
            t2.core.outer.removeClass("lg-comment-active");
          });
        }, i.prototype.addFbComments = function() {
          var t2 = this, n2 = this;
          this.core.LGel.on(e + ".comment", function(e2) {
            var o2 = t2.core.galleryItems[e2.detail.index].fbHtml;
            t2.core.outer.find(".lg-comment-body").html(o2);
          }), this.core.LGel.on(o + ".comment", function() {
            try {
              FB.XFBML.parse();
            } catch (t3) {
              n2.$LG(window).on("fbAsyncInit", function() {
                FB.XFBML.parse();
              });
            }
          });
        }, i.prototype.addDisqusComments = function() {
          var t2 = this, n2 = this.$LG("#disqus_thread");
          n2.remove(), this.core.outer.find(".lg-comment-body").append('<div id="disqus_thread"></div>'), this.core.LGel.on(e + ".comment", function() {
            n2.html("");
          }), this.core.LGel.on(o + ".comment", function(e2) {
            var o2 = e2.detail.index, n3 = t2;
            setTimeout(function() {
              try {
                DISQUS.reset({ reload: true, config: function() {
                  this.page.identifier = n3.core.galleryItems[o2].disqusIdentifier, this.page.url = n3.core.galleryItems[o2].disqusURL, this.page.title = n3.settings.disqusConfig.title, this.language = n3.settings.disqusConfig.language;
                } });
              } catch (t3) {
                console.error("Make sure you have included disqus JavaScript code in your document. Ex - https://lg-disqus.disqus.com/admin/install/platforms/universalcode/");
              }
            }, n3.core.lGalleryOn ? 0 : 1e3);
          });
        }, i.prototype.destroy = function() {
          this.core.LGel.off(".lg.comment"), this.core.LGel.off(".comment");
        }, i;
      }();
    });
  }
});

// node_modules/lightgallery/plugins/video/lg-video.min.js
var require_lg_video_min = __commonJS({
  "node_modules/lightgallery/plugins/video/lg-video.min.js"(exports, module) {
    !function(e, o) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : (e = "undefined" != typeof globalThis ? globalThis : e || self).lgVideo = o();
    }(exports, function() {
      "use strict";
      var e = function() {
        return (e = Object.assign || function(e2) {
          for (var o2, i2 = 1, t2 = arguments.length; i2 < t2; i2++)
            for (var s2 in o2 = arguments[i2])
              Object.prototype.hasOwnProperty.call(o2, s2) && (e2[s2] = o2[s2]);
          return e2;
        }).apply(this, arguments);
      }, o = { autoplayFirstVideo: true, youTubePlayerParams: false, vimeoPlayerParams: false, wistiaPlayerParams: false, gotoNextSlideOnVideoEnd: true, autoplayVideoOnSlide: false, videojs: false, videojsTheme: "", videojsOptions: {} }, i = "lgHasVideo", t = "lgSlideItemLoad", s = "lgBeforeSlide", n = "lgAfterSlide", l = "lgPosterClick", r = function(e2) {
        return Object.keys(e2).map(function(o2) {
          return encodeURIComponent(o2) + "=" + encodeURIComponent(e2[o2]);
        }).join("&");
      }, d = function(o2, i2) {
        if (!o2.youtube)
          return "";
        var t2 = o2.youtube[2] ? o2.youtube[2].slice(1).split("&").map(function(e2) {
          return e2.split("=");
        }).reduce(function(e2, o3) {
          var i3 = o3.map(decodeURIComponent), t3 = i3[0], s3 = i3[1];
          return e2[t3] = s3, e2;
        }, {}) : "", s2 = i2 || {}, n2 = e(e(e({}, { wmode: "opaque", autoplay: 0, mute: 1, enablejsapi: 1 }), s2), t2);
        return "?" + r(n2);
      };
      return function() {
        function a(i2) {
          return this.core = i2, this.settings = e(e({}, o), this.core.settings), this;
        }
        return a.prototype.init = function() {
          var e2 = this;
          this.core.LGel.on(i + ".video", this.onHasVideo.bind(this)), this.core.LGel.on(l + ".video", function() {
            var o2 = e2.core.getSlideItem(e2.core.index);
            e2.loadVideoOnPosterClick(o2);
          }), this.core.LGel.on(t + ".video", this.onSlideItemLoad.bind(this)), this.core.LGel.on(s + ".video", this.onBeforeSlide.bind(this)), this.core.LGel.on(n + ".video", this.onAfterSlide.bind(this));
        }, a.prototype.onSlideItemLoad = function(e2) {
          var o2 = this, i2 = e2.detail, t2 = i2.isFirstSlide, s2 = i2.index;
          this.settings.autoplayFirstVideo && t2 && s2 === this.core.index && setTimeout(function() {
            o2.loadAndPlayVideo(s2);
          }, 200), !t2 && this.settings.autoplayVideoOnSlide && s2 === this.core.index && this.loadAndPlayVideo(s2);
        }, a.prototype.onHasVideo = function(e2) {
          var o2 = e2.detail, i2 = o2.index, t2 = o2.src, s2 = o2.html5Video;
          o2.hasPoster || (this.appendVideos(this.core.getSlideItem(i2), { src: t2, addClass: "lg-object", index: i2, html5Video: s2 }), this.gotoNextSlideOnVideoEnd(t2, i2));
        }, a.prototype.onBeforeSlide = function(e2) {
          if (this.core.lGalleryOn) {
            var o2 = e2.detail.prevIndex;
            this.pauseVideo(o2);
          }
        }, a.prototype.onAfterSlide = function(e2) {
          var o2 = this, i2 = e2.detail, t2 = i2.index, s2 = i2.prevIndex, n2 = this.core.getSlideItem(t2);
          this.settings.autoplayVideoOnSlide && t2 !== s2 && n2.hasClass("lg-complete") && setTimeout(function() {
            o2.loadAndPlayVideo(t2);
          }, 100);
        }, a.prototype.loadAndPlayVideo = function(e2) {
          var o2 = this.core.getSlideItem(e2);
          this.core.galleryItems[e2].poster ? this.loadVideoOnPosterClick(o2, true) : this.playVideo(e2);
        }, a.prototype.playVideo = function(e2) {
          this.controlVideo(e2, "play");
        }, a.prototype.pauseVideo = function(e2) {
          this.controlVideo(e2, "pause");
        }, a.prototype.getVideoHtml = function(e2, o2, i2, t2) {
          var s2 = "", n2 = this.core.galleryItems[i2].__slideVideoInfo || {}, l2 = this.core.galleryItems[i2], a2 = l2.title || l2.alt;
          a2 = a2 ? 'title="' + a2 + '"' : "";
          var c = 'allowtransparency="true"\n            frameborder="0"\n            scrolling="no"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen';
          if (n2.youtube) {
            var u = "lg-youtube" + i2, f = d(n2, this.settings.youTubePlayerParams);
            s2 = '<iframe allow="autoplay" id=' + u + ' class="lg-video-object lg-youtube ' + o2 + '" ' + a2 + ' src="' + (e2.includes("youtube-nocookie.com") ? "//www.youtube-nocookie.com/" : "//www.youtube.com/") + "embed/" + (n2.youtube[1] + f) + '" ' + c + "></iframe>";
          } else if (n2.vimeo) {
            u = "lg-vimeo" + i2;
            var h = function(e3, o3) {
              if (!o3 || !o3.vimeo)
                return "";
              var i3 = o3.vimeo[2] || "", t3 = Object.assign({}, { autoplay: 0, muted: 1 }, e3), s3 = t3 && 0 !== Object.keys(t3).length ? r(t3) : "", n3 = ((o3.vimeo[0].split("/").pop() || "").split("?")[0] || "").split("#")[0], l3 = o3.vimeo[1] !== n3;
              l3 && (i3 = i3.replace("/" + n3, ""));
              var d2 = l3 ? "h=" + n3 : "";
              return "?" + d2 + (s3 = d2 ? "&" + s3 : s3) + ("?" == i3[0] ? "&" + i3.slice(1) : i3 || "");
            }(this.settings.vimeoPlayerParams, n2);
            s2 = '<iframe allow="autoplay" id=' + u + ' class="lg-video-object lg-vimeo ' + o2 + '" ' + a2 + ' src="//player.vimeo.com/video/' + (n2.vimeo[1] + h) + '" ' + c + "></iframe>";
          } else if (n2.wistia) {
            var g = "lg-wistia" + i2;
            h = (h = r(this.settings.wistiaPlayerParams)) ? "?" + h : "", s2 = '<iframe allow="autoplay" id="' + g + '" src="//fast.wistia.net/embed/iframe/' + (n2.wistia[4] + h) + '" ' + a2 + ' class="wistia_embed lg-video-object lg-wistia ' + o2 + '" name="wistia_embed" ' + c + "></iframe>";
          } else if (n2.html5) {
            for (var p = "", y = 0; y < t2.source.length; y++) {
              var v = t2.source[y].type, m = v ? 'type="' + v + '"' : "";
              p += '<source src="' + t2.source[y].src + '" ' + m + ">";
            }
            if (t2.tracks) {
              var w = function(e3) {
                var o3 = "", i3 = t2.tracks[e3];
                Object.keys(i3 || {}).forEach(function(e4) {
                  o3 += e4 + '="' + i3[e4] + '" ';
                }), p += "<track " + o3 + ">";
              };
              for (y = 0; y < t2.tracks.length; y++)
                w(y);
            }
            var V = "", b = t2.attributes || {};
            Object.keys(b || {}).forEach(function(e3) {
              V += e3 + '="' + b[e3] + '" ';
            }), s2 = '<video class="lg-video-object lg-html5 ' + (this.settings.videojs && this.settings.videojsTheme ? this.settings.videojsTheme + " " : "") + " " + (this.settings.videojs ? " video-js" : "") + '" ' + V + ">\n                " + p + "\n                Your browser does not support HTML5 video.\n            </video>";
          }
          return s2;
        }, a.prototype.appendVideos = function(e2, o2) {
          var i2, t2 = this.getVideoHtml(o2.src, o2.addClass, o2.index, o2.html5Video);
          e2.find(".lg-video-cont").append(t2);
          var s2 = e2.find(".lg-video-object").first();
          if (o2.html5Video && s2.on("mousedown.lg.video", function(e3) {
            e3.stopPropagation();
          }), this.settings.videojs && (null === (i2 = this.core.galleryItems[o2.index].__slideVideoInfo) || void 0 === i2 ? void 0 : i2.html5))
            try {
              return videojs(s2.get(), this.settings.videojsOptions);
            } catch (e3) {
              console.error("lightGallery:- Make sure you have included videojs");
            }
        }, a.prototype.gotoNextSlideOnVideoEnd = function(e2, o2) {
          var i2 = this, t2 = this.core.getSlideItem(o2).find(".lg-video-object").first(), s2 = this.core.galleryItems[o2].__slideVideoInfo || {};
          if (this.settings.gotoNextSlideOnVideoEnd) {
            if (s2.html5)
              t2.on("ended", function() {
                i2.core.goToNextSlide();
              });
            else if (s2.vimeo)
              try {
                new Vimeo.Player(t2.get()).on("ended", function() {
                  i2.core.goToNextSlide();
                });
              } catch (e3) {
                console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js");
              }
            else if (s2.wistia)
              try {
                window._wq = window._wq || [], window._wq.push({ id: t2.attr("id"), onReady: function(e3) {
                  e3.bind("end", function() {
                    i2.core.goToNextSlide();
                  });
                } });
              } catch (e3) {
                console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js");
              }
          }
        }, a.prototype.controlVideo = function(e2, o2) {
          var i2 = this.core.getSlideItem(e2).find(".lg-video-object").first(), t2 = this.core.galleryItems[e2].__slideVideoInfo || {};
          if (i2.get()) {
            if (t2.youtube)
              try {
                i2.get().contentWindow.postMessage('{"event":"command","func":"' + o2 + 'Video","args":""}', "*");
              } catch (e3) {
                console.error("lightGallery:- " + e3);
              }
            else if (t2.vimeo)
              try {
                new Vimeo.Player(i2.get())[o2]();
              } catch (e3) {
                console.error("lightGallery:- Make sure you have included //github.com/vimeo/player.js");
              }
            else if (t2.html5)
              if (this.settings.videojs)
                try {
                  videojs(i2.get())[o2]();
                } catch (e3) {
                  console.error("lightGallery:- Make sure you have included videojs");
                }
              else
                i2.get()[o2]();
            else if (t2.wistia)
              try {
                window._wq = window._wq || [], window._wq.push({ id: i2.attr("id"), onReady: function(e3) {
                  e3[o2]();
                } });
              } catch (e3) {
                console.error("lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js");
              }
          }
        }, a.prototype.loadVideoOnPosterClick = function(e2, o2) {
          var i2 = this;
          if (e2.hasClass("lg-video-loaded"))
            o2 && this.playVideo(this.core.index);
          else if (e2.hasClass("lg-has-video"))
            this.playVideo(this.core.index);
          else {
            e2.addClass("lg-has-video");
            var t2 = void 0, s2 = this.core.galleryItems[this.core.index].src, n2 = this.core.galleryItems[this.core.index].video;
            n2 && (t2 = "string" == typeof n2 ? JSON.parse(n2) : n2);
            var l2 = this.appendVideos(e2, { src: s2, addClass: "", index: this.core.index, html5Video: t2 });
            this.gotoNextSlideOnVideoEnd(s2, this.core.index);
            var r2 = e2.find(".lg-object").first().get();
            e2.find(".lg-video-cont").first().append(r2), e2.addClass("lg-video-loading"), l2 && l2.ready(function() {
              l2.on("loadedmetadata", function() {
                i2.onVideoLoadAfterPosterClick(e2, i2.core.index);
              });
            }), e2.find(".lg-video-object").first().on("load.lg error.lg loadedmetadata.lg", function() {
              setTimeout(function() {
                i2.onVideoLoadAfterPosterClick(e2, i2.core.index);
              }, 50);
            });
          }
        }, a.prototype.onVideoLoadAfterPosterClick = function(e2, o2) {
          e2.addClass("lg-video-loaded"), this.playVideo(o2);
        }, a.prototype.destroy = function() {
          this.core.LGel.off(".lg.video"), this.core.LGel.off(".video");
        }, a;
      }();
    });
  }
});

// app/routes/apps/gallery/route.jsx
var import_classnames3 = __toESM(require_classnames(), 1);
var import_react3 = __toESM(require_react(), 1);

// app/routes/apps/gallery/GalleryBody.jsx
var import_Lightgallery_umd = __toESM(require_Lightgallery_umd(), 1);
var import_classnames = __toESM(require_classnames(), 1);
var import_lg_fullscreen_min = __toESM(require_lg_fullscreen_min(), 1);
var import_lg_autoplay_min = __toESM(require_lg_autoplay_min(), 1);
var import_lg_zoom_min = __toESM(require_lg_zoom_min(), 1);
var import_lg_share_min = __toESM(require_lg_share_min(), 1);
var import_lg_comment_min = __toESM(require_lg_comment_min(), 1);
var import_lg_video_min = __toESM(require_lg_video_min(), 1);

// app/assets/img/gallery/mock9.jpg
var mock9_default = "/build/_assets/mock9-TAKJWL5M.jpg";

// app/assets/img/gallery/mock10.jpg
var mock10_default = "/build/_assets/mock10-TAKJWL5M.jpg";

// app/assets/img/gallery/mock15.jpg
var mock15_default = "/build/_assets/mock15-IRXGSJPN.jpg";

// app/routes/apps/gallery/GalleryBody.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/gallery/GalleryBody.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/gallery/GalleryBody.jsx"
  );
  import.meta.hot.lastModified = "1732600247935.234";
}
var GalleryBody = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("gallery-body"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collapse-simple", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", wrapperClass: "card-border", targetId: "gal_collapse_1", title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "mb-0", children: "Recently Assigned" }, void 0, false, {
      fileName: "app/routes/apps/gallery/GalleryBody.jsx",
      lineNumber: 56,
      columnNumber: 115
    }, this), collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Lightgallery_umd.default, { elementClassNames: "row gx-3 row-cols-xxl-6 row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-1 hk-gallery", speed: 500, mode: "lg-fade", plugins: [import_lg_fullscreen_min.default, import_lg_autoplay_min.default, import_lg_zoom_min.default, import_lg_share_min.default, import_lg_comment_min.default, import_lg_video_min.default], thumbnail: false, subHtmlSelectorRelative: true, defaultCaptionHeight: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": mock1_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img", style: {
          backgroundImage: `url(${mock1_default})`
        } }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 60,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "gallery-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 66,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 65,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 64,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 59,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 58,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": mock2_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img", style: {
          backgroundImage: `url(${mock2_default})`
        } }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 73,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "gallery-star", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 79,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 78,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 77,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 72,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 71,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": mock3_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img", style: {
          backgroundImage: `url(${mock3_default})`
        } }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 86,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "gallery-star", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 92,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 91,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 90,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 85,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 84,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": mock4_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img", style: {
          backgroundImage: `url(${mock4_default})`
        } }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 99,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "gallery-star", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 105,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 104,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 103,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 98,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 97,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": mock5_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img", style: {
          backgroundImage: `url(${mock5_default})`
        } }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 112,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "gallery-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 118,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 117,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 116,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 111,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 110,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": "https://www.youtube.com/watch?v=BvXR97eR1QE", "data-poster": mock6_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img gallery-video", style: {
          backgroundImage: `url(${mock6_default})`
        } }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 125,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "gallery-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 131,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 130,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 129,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 124,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 123,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/gallery/GalleryBody.jsx",
      lineNumber: 57,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/gallery/GalleryBody.jsx",
      lineNumber: 56,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/gallery/GalleryBody.jsx",
      lineNumber: 55,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collapse-simple", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", wrapperClass: "card-border", targetId: "gal_collapse_2", title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "mb-0", children: "November 20" }, void 0, false, {
      fileName: "app/routes/apps/gallery/GalleryBody.jsx",
      lineNumber: 140,
      columnNumber: 115
    }, this), collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Lightgallery_umd.default, { elementClassNames: "row gx-3 row-cols-xxl-6 row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-1 hk-gallery", speed: 500, mode: "lg-fade", plugins: [import_lg_fullscreen_min.default, import_lg_autoplay_min.default, import_lg_zoom_min.default, import_lg_share_min.default, import_lg_comment_min.default, import_lg_video_min.default], thumbnail: false, subHtmlSelectorRelative: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": mock6_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img", style: {
          backgroundImage: `url(${mock6_default})`
        } }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 144,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "gallery-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 150,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 149,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 148,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 143,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 142,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": mock7_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img", style: {
        backgroundImage: `url(${mock7_default})`
      } }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 157,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 156,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 155,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": mock8_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img", style: {
        backgroundImage: `url(${mock8_default})`
      } }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 165,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 164,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 163,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": mock9_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img", style: {
        backgroundImage: `url(${mock9_default})`
      } }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 173,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 172,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 171,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": mock10_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img", style: {
          backgroundImage: `url(${mock10_default})`
        } }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 181,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "gallery-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 187,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 186,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 185,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 180,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 179,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": "https://www.youtube.com/watch?v=BvXR97eR1QE", "data-poster": mock1_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img gallery-video", style: {
          backgroundImage: `url(${mock1_default})`
        } }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 194,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "gallery-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 200,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 199,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 198,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 193,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 192,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/gallery/GalleryBody.jsx",
      lineNumber: 141,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/gallery/GalleryBody.jsx",
      lineNumber: 140,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/gallery/GalleryBody.jsx",
      lineNumber: 139,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "collapse-simple", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", wrapperClass: "card-border", targetId: "gal_collapse_3", title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "mb-0", children: "October 20" }, void 0, false, {
      fileName: "app/routes/apps/gallery/GalleryBody.jsx",
      lineNumber: 209,
      columnNumber: 115
    }, this), collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_Lightgallery_umd.default, { elementClassNames: "row gx-3 row-cols-xxl-6 row-cols-xl-5 row-cols-lg-3 row-cols-md-2 row-cols-1 hk-gallery", speed: 500, mode: "lg-fade", plugins: [import_lg_fullscreen_min.default, import_lg_autoplay_min.default, import_lg_zoom_min.default, import_lg_share_min.default, import_lg_comment_min.default, import_lg_video_min.default], thumbnail: false, subHtmlSelectorRelative: true, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": mock11_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img", style: {
          backgroundImage: `url(${mock11_default})`
        } }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 213,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "gallery-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 219,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 218,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 217,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 212,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 211,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": mock12_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img", style: {
        backgroundImage: `url(${mock12_default})`
      } }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 226,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 225,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 224,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": mock13_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img", style: {
        backgroundImage: `url(${mock13_default})`
      } }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 234,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 233,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 232,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": mock14_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img", style: {
        backgroundImage: `url(${mock14_default})`
      } }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 242,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 241,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 240,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": mock15_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img", style: {
          backgroundImage: `url(${mock15_default})`
        } }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 250,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "gallery-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 256,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 255,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 254,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 249,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 248,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { "data-src": "https://www.youtube.com/watch?v=BvXR97eR1QE", "data-poster": mock12_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border gallery-img gallery-video", style: {
          backgroundImage: `url(${mock12_default})`
        } }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 263,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "gallery-star marked", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 269,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 268,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryBody.jsx",
          lineNumber: 267,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 262,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryBody.jsx",
        lineNumber: 261,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/gallery/GalleryBody.jsx",
      lineNumber: 210,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/gallery/GalleryBody.jsx",
      lineNumber: 209,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/gallery/GalleryBody.jsx",
      lineNumber: 208,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/gallery/GalleryBody.jsx",
    lineNumber: 54,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/gallery/GalleryBody.jsx",
    lineNumber: 53,
    columnNumber: 10
  }, this);
};
_c = GalleryBody;
var GalleryBody_default = GalleryBody;
var _c;
$RefreshReg$(_c, "GalleryBody");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/gallery/GalleryHeader.jsx
var import_classnames2 = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/gallery/GalleryHeader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/gallery/GalleryHeader.jsx"
  );
  import.meta.hot.lastModified = "1732600247935.601";
}
var GalleryHeader = ({
  toggleSidebar,
  showSidebar,
  toggleInfo
}) => {
  _s();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "gallery-header", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex align-items-center flex-grow-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", variant: "link-dark", className: "galleryapp-title link-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Media Gallery" }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
          lineNumber: 42,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
          lineNumber: 41,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Menu, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(hard_drive_default, {}, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 47,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 46,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Gallery" }, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 49,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
            lineNumber: 45,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(folder_default, {}, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 53,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 52,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Collections" }, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 55,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
            lineNumber: 51,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(upload_default, {}, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 59,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 58,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Shared with me" }, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 61,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
            lineNumber: 57,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(star_default, {}, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 65,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 64,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Favorite" }, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 67,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
            lineNumber: 63,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
          lineNumber: 44,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default, { className: "mx-3 flex-grow-1 mw-400p", role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "text", placeholder: "Search media by Name" }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 72,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 71,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "gallery-options-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover btn-file-download disabled d-xl-inline-block d-none", href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(download_default, {}, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 79,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 78,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 77,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 76,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "v-separator d-xl-inline-block d-none" }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 83,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover ms-0 d-xl-inline-block d-none", href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Add New Folder", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(folder_plus_default, {}, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 88,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 87,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 86,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 85,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 84,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded btn-file flush-soft-hover  d-md-inline-block d-none", href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Upload", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(upload_cloud_default, {}, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 97,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 96,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 95,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 94,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 93,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "v-separator d-lg-inline-block d-none" }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 102,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Toggle, { as: "a", variant: "flush-dark", className: " btn btn-icon btn-flush-dark flush-soft-hover dropdown-toggle no-caret active ms-lg-0 d-sm-inline-block d-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(list_default, {}, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
          lineNumber: 107,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
          lineNumber: 106,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
          lineNumber: 105,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
          lineNumber: 104,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(list_default, {}, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 114,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 113,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "List View" }, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 116,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
            lineNumber: 112,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(grid_default, {}, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 120,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 119,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Grid View" }, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 122,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
            lineNumber: 118,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(server_default, {}, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 126,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 125,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Compact View" }, void 0, false, {
              fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
              lineNumber: 128,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
            lineNumber: 124,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
          lineNumber: 111,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 103,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover hk-navbar-togglable", onClick: () => dispatch({
        type: "top_nav_toggle"
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: states.layoutState.topNavCollapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(chevron_down_default, {}, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 138,
        columnNumber: 70
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(chevron_up_default, {}, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 138,
        columnNumber: 88
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 137,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 136,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 135,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
        lineNumber: 132,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
      lineNumber: 75,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: (0, import_classnames2.default)("hk-sidebar-togglable", {
      "active": !showSidebar
    }), onClick: toggleSidebar }, void 0, false, {
      fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
      lineNumber: 144,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/gallery/GalleryHeader.jsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
};
_s(GalleryHeader, "OVdtiISsix2HOQFhIOw6MKqd+SU=", false, function() {
  return [useGlobalStateContext];
});
_c2 = GalleryHeader;
var GalleryHeader_default = GalleryHeader;
var _c2;
$RefreshReg$(_c2, "GalleryHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/gallery/GallerySidebar.jsx
var import_react2 = __toESM(require_react(), 1);

// app/routes/apps/gallery/AddCategory.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/gallery/AddCategory.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/gallery/AddCategory.jsx"
  );
  import.meta.hot.lastModified = "1732600247934.675";
}
var AddCategory = ({
  show,
  hide
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal_default, { show, onHide: hide, size: "sm", centered: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "modal-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal_default.Body, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { bsPrefix: "btn-close", onClick: hide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
      fileName: "app/routes/apps/gallery/AddCategory.jsx",
      lineNumber: 30,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/gallery/AddCategory.jsx",
      lineNumber: 29,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { className: "text-uppercase fw-bold mb-3", children: "Add Category" }, void 0, false, {
      fileName: "app/routes/apps/gallery/AddCategory.jsx",
      lineNumber: 32,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Row_default, { className: "gx-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Col_default, { sm: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Group, { className: "mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Control, { type: "text", placeholder: "Category Name" }, void 0, false, {
        fileName: "app/routes/apps/gallery/AddCategory.jsx",
        lineNumber: 37,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/AddCategory.jsx",
        lineNumber: 36,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/AddCategory.jsx",
        lineNumber: 35,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/AddCategory.jsx",
        lineNumber: 34,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "primary", className: "float-end", onClick: hide, children: "Add" }, void 0, false, {
        fileName: "app/routes/apps/gallery/AddCategory.jsx",
        lineNumber: 41,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/gallery/AddCategory.jsx",
      lineNumber: 33,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/gallery/AddCategory.jsx",
    lineNumber: 28,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/gallery/AddCategory.jsx",
    lineNumber: 27,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/gallery/AddCategory.jsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_c3 = AddCategory;
var AddCategory_default = AddCategory;
var _c3;
$RefreshReg$(_c3, "AddCategory");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/gallery/GalleryReducer.js
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/gallery/GalleryReducer.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/gallery/GalleryReducer.js"
  );
  import.meta.hot.lastModified = "1732600247935.91";
}
var GalleryReducer = (state, action) => {
  switch (action.type) {
    case "addCat":
      return {
        ...state,
        addCat: !state.addCat
      };
    case "sidebar":
      return {
        ...state,
        sidebar: !state.sidebar
      };
    default:
      return state;
  }
};
_c4 = GalleryReducer;
var _c4;
$RefreshReg$(_c4, "GalleryReducer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/gallery/GallerySidebar.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/gallery/GallerySidebar.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/gallery/GallerySidebar.jsx"
  );
  import.meta.hot.lastModified = "1732600247936.567";
}
var GallerySidebar = () => {
  _s2();
  const initial = false;
  const [state, dispatch] = (0, import_react2.useReducer)(GalleryReducer, initial);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default, { className: "galleryapp-sidebar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "menu-content-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "primary", className: "btn-rounded btn-block btn-file mb-4", children: [
          "Upload Images",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Control, { type: "file", className: "upload" }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 39,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 37,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default, { className: "nav-light navbar-nav flex-column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { active: true, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hard_drive_default, {}, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 47,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 46,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 45,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Gallery" }, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 50,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 44,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 43,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(folder_default, {}, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 57,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 56,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 55,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Collections" }, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 60,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 54,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 53,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(upload_default, {}, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 67,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 66,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 65,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Shared with me" }, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 70,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 64,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 63,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(star_default, {}, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 77,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 76,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 75,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Favorite" }, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 80,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 74,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 73,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(trash_2_default, {}, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 87,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 86,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 85,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Trash" }, void 0, false, {
              fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
              lineNumber: 90,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 84,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 83,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 42,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 41,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "separator separator-light" }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 95,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between mb-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "title-sm text-primary mb-0", children: "Categories" }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 97,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "light", size: "xs", className: "btn-icon btn-rounded", onClick: () => dispatch({
            type: "addCat"
          }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: "top", title: "Add Category", className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(plus_default, {}, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 103,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 102,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 101,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 98,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 96,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "menu-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "nav nav-light navbar-nav flex-column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "nav-link", href: "#some", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Images" }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 112,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 111,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 110,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "nav-link", href: "#some", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Videos" }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 117,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 116,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 115,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "nav-link", href: "#some", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Audio" }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 122,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 121,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
            lineNumber: 120,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 109,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 108,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
        lineNumber: 36,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
        lineNumber: 35,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "galleryapp-fixednav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hk-toolbar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default, { className: "nav-light", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { id: "tooltip2", placement: "top", title: "Settings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(settings_default, {}, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 138,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 137,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 136,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 135,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 134,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 133,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { id: "tooltip3", placement: "top", title: "Archive", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(archive_default, {}, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 149,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 148,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 147,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 146,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 145,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 144,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { className: "nav-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { id: "tooltip2", placement: "top", title: "Help", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(book_default, {}, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 160,
          columnNumber: 49
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 159,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 158,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 157,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 156,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
          lineNumber: 155,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
        lineNumber: 132,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
        lineNumber: 131,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
        lineNumber: 130,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AddCategory_default, { show: state.addCat, hide: () => dispatch({
      type: "addCat"
    }) }, void 0, false, {
      fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
      lineNumber: 172,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/gallery/GallerySidebar.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_s2(GallerySidebar, "iJvqRY6UsN7NSEFUnbV16lZUV7Y=");
_c5 = GallerySidebar;
var GallerySidebar_default = GallerySidebar;
var _c5;
$RefreshReg$(_c5, "GallerySidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/gallery/route.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/gallery/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/gallery/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247936.956";
}
var Gallery = () => {
  _s3();
  const [showSidebar, setShowSidebar] = (0, import_react3.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: (0, import_classnames3.default)("galleryapp-wrap", {
    "galleryapp-sidebar-toggle": !showSidebar
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(GallerySidebar_default, {}, void 0, false, {
      fileName: "app/routes/apps/gallery/route.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "galleryapp-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "galleryapp-detail-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(GalleryHeader_default, { toggleSidebar: () => setShowSidebar(!showSidebar), showSidebar }, void 0, false, {
        fileName: "app/routes/apps/gallery/route.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(GalleryBody_default, {}, void 0, false, {
        fileName: "app/routes/apps/gallery/route.jsx",
        lineNumber: 38,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/gallery/route.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/gallery/route.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/gallery/route.jsx",
    lineNumber: 31,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/gallery/route.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s3(Gallery, "O0tqdxfw1ryb5O1kO6vD3OVdeTk=");
_c6 = Gallery;
var route_default = Gallery;
var _c6;
$RefreshReg$(_c6, "Gallery");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
/*! Bundled license information:

lightgallery/react/Lightgallery.umd.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
    Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
  (*!
   * lightgallery | 2.8.3 | March 1st 2025
   * http://www.lightgalleryjs.com/
   * Copyright (c) 2020 Sachin Neravath;
   * @license GPLv3
   *)

lightgallery/plugins/fullscreen/lg-fullscreen.min.js:
  (**
   * lightgallery | 2.8.3 | March 1st 2025
   * http://www.lightgalleryjs.com/
   * Copyright (c) 2020 Sachin Neravath;
   * @license GPLv3
   *)

lightgallery/plugins/autoplay/lg-autoplay.min.js:
  (**
   * lightgallery | 2.8.3 | March 1st 2025
   * http://www.lightgalleryjs.com/
   * Copyright (c) 2020 Sachin Neravath;
   * @license GPLv3
   *)

lightgallery/plugins/zoom/lg-zoom.min.js:
  (**
   * lightgallery | 2.8.3 | March 1st 2025
   * http://www.lightgalleryjs.com/
   * Copyright (c) 2020 Sachin Neravath;
   * @license GPLv3
   *)

lightgallery/plugins/share/lg-share.min.js:
  (**
   * lightgallery | 2.8.3 | March 1st 2025
   * http://www.lightgalleryjs.com/
   * Copyright (c) 2020 Sachin Neravath;
   * @license GPLv3
   *)

lightgallery/plugins/comment/lg-comment.min.js:
  (**
   * lightgallery | 2.8.3 | March 1st 2025
   * http://www.lightgalleryjs.com/
   * Copyright (c) 2020 Sachin Neravath;
   * @license GPLv3
   *)

lightgallery/plugins/video/lg-video.min.js:
  (**
   * lightgallery | 2.8.3 | March 1st 2025
   * http://www.lightgalleryjs.com/
   * Copyright (c) 2020 Sachin Neravath;
   * @license GPLv3
   *)
*/
//# sourceMappingURL=/build/routes/apps/gallery/route-TWGFKJQM.js.map
