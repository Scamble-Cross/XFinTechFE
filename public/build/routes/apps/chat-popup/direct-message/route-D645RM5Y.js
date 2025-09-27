import {
  giphy_default
} from "/build/_shared/chunk-DPNIC2CZ.js";
import {
  avatar4_default
} from "/build/_shared/chunk-54CGHQVE.js";
import {
  avatar15_default
} from "/build/_shared/chunk-ZGGRJ3QC.js";
import {
  hk_badge_default
} from "/build/_shared/chunk-YWRMJW47.js";
import {
  avatar3_default
} from "/build/_shared/chunk-MVEBKFJK.js";
import {
  avatar7_default
} from "/build/_shared/chunk-7XF6XEF7.js";
import {
  avatar9_default
} from "/build/_shared/chunk-VFRPT2WG.js";
import {
  avatar2_default
} from "/build/_shared/chunk-LLX7VWLD.js";
import {
  avatar11_default
} from "/build/_shared/chunk-VQO4YLKZ.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  arrow_down_default,
  more_horizontal_default,
  more_vertical_default,
  share_default,
  smile_default,
  users_default,
  x_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import {
  useGlobalStateContext
} from "/build/_shared/chunk-3LFZEH5W.js";
import {
  avatar1_default
} from "/build/_shared/chunk-B57YWHU6.js";
import {
  avatar8_default
} from "/build/_shared/chunk-WUHA5P4Y.js";
import {
  Button_default,
  Dropdown_default,
  Form_default,
  InputGroup_default,
  ListGroup_default
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
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/apps/chat-popup/direct-message/route.jsx
var import_react3 = __toESM(require_react(), 1);
var import_classnames3 = __toESM(require_classnames(), 1);

// app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx
var import_react = __toESM(require_react(), 1);
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var ChatPopupBody = ({
  showContactList
}) => {
  _s();
  const {
    states
  } = useGlobalStateContext();
  const [messages, setMessages] = (0, import_react.useState)(states.chatPopupState.directMsgs);
  const [isTyping, setIsTyping] = (0, import_react.useState)(true);
  (0, import_react.useEffect)(() => {
    setMessages(states.chatPopupState.directMsgs);
    if (messages.length > 0) {
      setIsTyping(false);
    }
  }, [states, messages]);
  const bottomRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "chat-popup-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("contact-list-wrap", {
      "d-none": !showContactList
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default, { as: "ul", variant: "flush", className: "chat-contacts-list", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-wth-divider text-primary my-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "A" }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 74,
        columnNumber: 92
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 74,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 73,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 80,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_badge_default, { bg: "success", indicator: true, className: "badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 81,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 79,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 78,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Alan Rickman" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 86,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-status", children: "Today I don't feel like doing anything" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 87,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 85,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "action-drp", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 94,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 93,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 92,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 91,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Delete Chat" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 99,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Block" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 100,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 98,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 90,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 89,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 84,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 77,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 76,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 111,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_badge_default, { bg: "success", indicator: true, className: "badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 112,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 110,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 109,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Ashley Jude" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 117,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-status", children: "Ma life ma rules\u{1F60D}" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 118,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 116,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "action-drp", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 125,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 124,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 123,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 122,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Delete Chat" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 130,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Block" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 131,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 129,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 121,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 120,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 115,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 108,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 107,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar11_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 142,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_badge_default, { bg: "success", indicator: true, className: "badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 143,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 141,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 140,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Adam Sandler" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 148,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-status", children: "Hi There, I am using Jampack" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 149,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 147,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "action-drp", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 156,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 155,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 154,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 153,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Delete Chat" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 161,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Block" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 162,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 160,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 152,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 151,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 146,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 139,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 138,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-wth-divider text-primary my-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "B" }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 170,
        columnNumber: 92
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 170,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 169,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar4_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 176,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_badge_default, { bg: "success", indicator: true, className: "badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 177,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 175,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 174,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Billy Zen" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 182,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-status", children: "\u{1F47F}Take me to the places!!" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 183,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 181,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "action-drp", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 190,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 189,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 188,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 187,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Delete Chat" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 195,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Block" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 196,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 194,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 186,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 185,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 180,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 173,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 172,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar1_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 207,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_badge_default, { bg: "success", indicator: true, className: "badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 208,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 206,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 205,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Bradley Cooper" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 213,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-status", children: "Always Busy" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 214,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 212,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "action-drp", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 221,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 220,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 219,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 218,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Delete Chat" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 226,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Block" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 227,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 225,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 217,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 216,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 211,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 204,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 203,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar15_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 238,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_badge_default, { bg: "success", indicator: true, className: "badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 239,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 237,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 236,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Brad Pitt" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 244,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-status", children: "No calls, telepathy only" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 245,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 243,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "action-drp", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 252,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 251,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 250,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 249,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Delete Chat" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 257,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Block" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 258,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 256,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 248,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 247,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 242,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 235,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 234,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded position-relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "B" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 269,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_badge_default, { bg: "success", indicator: true, className: "badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 270,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 268,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 267,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Ben Afflex" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 275,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-status", children: "\xAC\xAC\xAC on vacation" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 276,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 274,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "action-drp", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 283,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 282,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 281,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 280,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Delete Chat" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 288,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Block" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 289,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 287,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 279,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 278,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 273,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 266,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 265,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar3_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 300,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_badge_default, { bg: "success", indicator: true, className: "badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 301,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 299,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 298,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Barbara Harshey" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 306,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-status", children: "Dead like a python" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 307,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 305,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "action-drp", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 314,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 313,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 312,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 311,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Delete Chat" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 319,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Block" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 320,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 318,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 310,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 309,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 304,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 297,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 296,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title title-wth-divider text-primary my-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "C" }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 328,
        columnNumber: 92
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 328,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 327,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar7_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 334,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_badge_default, { bg: "success", indicator: true, className: "badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 335,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 333,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 332,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Colin Hanks" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 340,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-status", children: "No calls. Always Busy" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 341,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 339,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "action-drp", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 348,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 347,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 346,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 345,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Delete Chat" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 353,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Block" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 354,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 352,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 344,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 343,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 338,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 331,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 330,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar9_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 365,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 364,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 363,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Chuck Norris" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 370,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-status", children: "Hi There, I am using Jampack" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 371,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 369,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "action-drp", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 378,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 377,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 376,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 375,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Delete Chat" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 383,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Block" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 384,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 382,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 374,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 373,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 368,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 362,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 361,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListGroup_default.Item, { as: "li", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-info avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "C" }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 395,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 394,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 393,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Christian Bale" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 400,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-status", children: "No status to show" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 401,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 399,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "action-drp", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "btn-icon btn-rounded btn-flush-dark flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 408,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 407,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 406,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 405,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Delete Chat" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 413,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Block" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 414,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 412,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 404,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 403,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 398,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 392,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 391,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
      lineNumber: 72,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
      lineNumber: 69,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: (0, import_classnames.default)("list-unstyled", {
      "d-none": showContactList
    }), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "media received", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 428,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 427,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Cool, lets talk about it tomorrow" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 433,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "chat-time", children: "10:52 PM" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 434,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-action", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", href: "#some", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 440,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 439,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 438,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 437,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Reply" }, void 0, false, {
                  fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                  lineNumber: 445,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Forward" }, void 0, false, {
                  fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                  lineNumber: 446,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Copy" }, void 0, false, {
                  fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                  lineNumber: 447,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 444,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 436,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 435,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 432,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 431,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Images for new marketing pages have been sent" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 455,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "chat-time", children: "10:53 PM" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 456,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-action", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", href: "#some", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 462,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 461,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 460,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 459,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Reply" }, void 0, false, {
                  fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                  lineNumber: 467,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Forward" }, void 0, false, {
                  fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                  lineNumber: 468,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Copy" }, void 0, false, {
                  fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                  lineNumber: 469,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 466,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 458,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 457,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 454,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 453,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 430,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 426,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "day-sep", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Today" }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 478,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 477,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "media media-attachment received", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 482,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 481,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body msg-docs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-blue", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-file-excel-2-fill" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 490,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 489,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 488,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-name", children: "Website_content.xls" }, void 0, false, {
                  fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                  lineNumber: 494,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-size", children: "2,635 KB" }, void 0, false, {
                  fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                  lineNumber: 495,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 493,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 487,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-overlay", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", size: "sm", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(arrow_down_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 502,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 501,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 500,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 499,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 498,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-action", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", href: "#some", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 512,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 511,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 510,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 509,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Reply" }, void 0, false, {
                  fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                  lineNumber: 517,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Forward" }, void 0, false, {
                  fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                  lineNumber: 518,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Copy" }, void 0, false, {
                  fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                  lineNumber: 519,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 516,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 508,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 507,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 486,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 485,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-file-zip-fill" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 530,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 529,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 528,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-name", children: "themeforest-pack.zip" }, void 0, false, {
                  fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                  lineNumber: 534,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "file-size", children: "2.45 GB" }, void 0, false, {
                  fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                  lineNumber: 535,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 533,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 527,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "file-overlay", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", size: "sm", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(arrow_down_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 542,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 541,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 540,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 539,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 538,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-action", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", href: "#some", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 552,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 551,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 550,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 549,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Reply" }, void 0, false, {
                  fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                  lineNumber: 557,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Forward" }, void 0, false, {
                  fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                  lineNumber: 558,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Copy" }, void 0, false, {
                  fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                  lineNumber: 559,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 556,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 548,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 547,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 526,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 525,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 484,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 480,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "media sent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Anyways, I am working on something that you would like to know." }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 571,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "chat-time", children: "11:52 PM" }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 572,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-action", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", href: "#some", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 578,
            columnNumber: 61
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 577,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 576,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 575,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Reply" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 583,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Forward" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 584,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Copy" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 585,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 582,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 574,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 573,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 570,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 569,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 568,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 567,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "media media-attachment received", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 595,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 594,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body msg-imgs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "d-block img-fluid", src: giphy_default, alt: "gif" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 600,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-action", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", href: "#some", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 606,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 605,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 604,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 603,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Reply" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 611,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Forward" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 612,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Copy" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 613,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 610,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 602,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 601,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 599,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 598,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 597,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 593,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "media sent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Haha, this is joke \u{1F60D}" }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 625,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "chat-time", children: "10:52 PM" }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 626,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-action", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", href: "#some", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 632,
            columnNumber: 61
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 631,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 630,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 629,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Reply" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 637,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Forward" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 638,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Copy" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 639,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 636,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 628,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 627,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 624,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 623,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 622,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 621,
        columnNumber: 25
      }, this),
      messages.map((elem, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: (0, import_classnames.default)("media", elem.types), children: [
        elem.types === "received" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 650,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 649,
          columnNumber: 67
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: elem.text }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 655,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "chat-time", children: elem.time }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 656,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-action", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", href: "#some", className: "btn-icon btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 662,
              columnNumber: 69
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 661,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 660,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 659,
              columnNumber: 57
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Reply" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 667,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Forward" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 668,
                columnNumber: 61
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Copy" }, void 0, false, {
                fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
                lineNumber: 669,
                columnNumber: 61
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
              lineNumber: 666,
              columnNumber: 57
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 658,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 657,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 654,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 653,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 652,
          columnNumber: 37
        }, this)
      ] }, index, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 648,
        columnNumber: 56
      }, this)),
      isTyping && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "media received typing-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 679,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 678,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "typing", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dot" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 685,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dot" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 686,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dot" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
            lineNumber: 687,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 684,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 683,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 682,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
          lineNumber: 681,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
        lineNumber: 677,
        columnNumber: 38
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
      lineNumber: 423,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: bottomRef }, void 0, false, {
      fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
      lineNumber: 694,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
    lineNumber: 68,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
    lineNumber: 67,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/chat-popup/direct-message/ChatPopupBody.jsx",
    lineNumber: 66,
    columnNumber: 10
  }, this);
};
_s(ChatPopupBody, "JbOjmEcmB9wE1B6Dmf/O19c26IE=", false, function() {
  return [useGlobalStateContext];
});
_c = ChatPopupBody;
var ChatPopupBody_default = ChatPopupBody;
var _c;
$RefreshReg$(_c, "ChatPopupBody");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat-popup/direct-message/Footer.jsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat-popup/direct-message/Footer.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat-popup/direct-message/Footer.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var ChatPopupFooter = ({
  directMsgs,
  DirectMsg
}) => {
  _s2();
  const [messages, setMessages] = (0, import_react2.useState)([]);
  const {
    dispatch
  } = useGlobalStateContext();
  const current = /* @__PURE__ */ new Date();
  const currentTime = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });
  const sendMessage = () => {
    if (messages.length > 0) {
      dispatch({
        type: "send_direct_msg",
        directMsgs: {
          text: messages,
          time: currentTime,
          types: "sent"
        }
      });
      setTimeout(() => {
        dispatch({
          type: "send_direct_msg",
          directMsgs: {
            text: "What are you saying?",
            time: currentTime,
            types: "received"
          }
        });
      }, 800);
    } else {
      alert("Please type something!");
    }
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      sendMessage();
      setMessages("");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(InputGroup_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "input-group-text overflow-show border-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon flush-soft-hover btn-rounded no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(share_default, {}, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
        lineNumber: 81,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
        lineNumber: 80,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
        lineNumber: 79,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
        lineNumber: 78,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Menu, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-primary avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-image-line" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 90,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 89,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 88,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "h6 mb-0", children: "Photo or Video Library" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 94,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 93,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
          lineNumber: 87,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
          lineNumber: 86,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-info avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-file-4-line" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 102,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 101,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 100,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "h6 mb-0", children: "Documents" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 106,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 105,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
          lineNumber: 99,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
          lineNumber: 98,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-success avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-map-pin-line" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 114,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 113,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 112,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "h6 mb-0", children: "Location" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 118,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 117,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
          lineNumber: 111,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
          lineNumber: 110,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-blue avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-contacts-line" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 126,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 125,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 124,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "h6 mb-0", children: "Contact" }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 130,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
            lineNumber: 129,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
          lineNumber: 123,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
          lineNumber: 122,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
        lineNumber: 85,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
      lineNumber: 77,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
      lineNumber: 76,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "text", id: "input_msg_chat_popup_3", name: "send-msg", className: "input-msg-send border-0 shadow-none", placeholder: "Type something...", value: messages, onChange: (e) => setMessages(e.target.value), onKeyDown }, void 0, false, {
      fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
      lineNumber: 137,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "input-group-text overflow-show border-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon flush-soft-hover btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(smile_default, {}, void 0, false, {
      fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
      lineNumber: 142,
      columnNumber: 33
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
      lineNumber: 141,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
      lineNumber: 140,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
      lineNumber: 139,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
      lineNumber: 138,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
    lineNumber: 75,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/chat-popup/direct-message/Footer.jsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
};
_s2(ChatPopupFooter, "/Cnp5BeeyPeUJEVDgMNMY/vMFtU=", false, function() {
  return [useGlobalStateContext];
});
_c2 = ChatPopupFooter;
var Footer_default = ChatPopupFooter;
var _c2;
$RefreshReg$(_c2, "ChatPopupFooter");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat-popup/direct-message/Header.jsx
var import_classnames2 = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat-popup/direct-message/Header.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat-popup/direct-message/Header.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var ChatPopupHeader = ({
  show,
  onClose,
  showContact,
  onHideContact
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InputGroup_default, { className: (0, import_classnames2.default)("contact-search-wrap", {
      "d-none": !showContact
    }), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Control, { type: "text", className: "contact-search shadow-none", placeholder: "Search contact" }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "dark", size: "sm", id: "contact_list_close", className: "btn-icon btn-rounded", onClick: onHideContact, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(x_default, {}, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
        lineNumber: 41,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
        lineNumber: 40,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
        lineNumber: 39,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
        lineNumber: 38,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: (0, import_classnames2.default)("media-wrap", {
      "d-none": showContact
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
          lineNumber: 52,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "badge badge-success badge-indicator badge-indicator-lg badge-indicator-nobdr position-bottom-end-overflow-1" }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
          lineNumber: 53,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
        lineNumber: 51,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-name", children: "Evie Ono" }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
          lineNumber: 57,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-status", children: "assistant manager" }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
          lineNumber: 58,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
        lineNumber: 56,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
      lineNumber: 49,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
      lineNumber: 46,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: (0, import_classnames2.default)("chat-popup-action d-flex", {
      "d-none": showContact
    }), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "dark", size: "sm", className: "btn-icon btn-rounded no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_vertical_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
          lineNumber: 69,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
          lineNumber: 68,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
          lineNumber: 67,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
          lineNumber: 66,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "dropdown-icon zmdi zmdi-notifications-active" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
              lineNumber: 75,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Send push notifications" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
              lineNumber: 76,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
            lineNumber: 74,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "dropdown-icon zmdi zmdi-volume-off" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
              lineNumber: 79,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Mute Chat" }, void 0, false, {
              fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
              lineNumber: 80,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
            lineNumber: 78,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
          lineNumber: 73,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
        lineNumber: 65,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "dark", size: "sm", id: "user_list", className: "btn-icon btn-rounded", onClick: onHideContact, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(users_default, {}, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
        lineNumber: 87,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
        lineNumber: 86,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
        lineNumber: 85,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
        lineNumber: 84,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "dark", size: "sm", id: "close_popup", className: "btn-icon btn-rounded", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(x_default, {}, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
        lineNumber: 94,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
        lineNumber: 93,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
        lineNumber: 92,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
        lineNumber: 91,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
      lineNumber: 62,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat-popup/direct-message/Header.jsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
};
_c3 = ChatPopupHeader;
var Header_default = ChatPopupHeader;
var _c3;
$RefreshReg$(_c3, "ChatPopupHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat-popup/direct-message/route.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat-popup/direct-message/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat-popup/direct-message/route.jsx"
  );
  import.meta.hot.lastModified = "1758792175530.7734";
}
var ChatPopup = () => {
  _s3();
  const [showChatPopup, setShowChatPopup] = (0, import_react3.useState)(true);
  const [showContacts, setShowContacts] = (0, import_react3.useState)(false);
  const handleChatPopup = () => {
    setShowChatPopup(!showChatPopup);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: (0, import_classnames3.default)("hk-chat-popup", {
      "d-flex": showChatPopup
    }), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Header_default, { show: showChatPopup, onClose: () => setShowChatPopup(!showChatPopup), showContact: showContacts, onHideContact: () => setShowContacts(!showContacts) }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/route.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ChatPopupBody_default, { showContactList: showContacts }, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/route.jsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      !showContacts && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Footer_default, {}, void 0, false, {
        fileName: "app/routes/apps/chat-popup/direct-message/route.jsx",
        lineNumber: 51,
        columnNumber: 27
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat-popup/direct-message/route.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hk-pg-body py-0" }, void 0, false, {
      fileName: "app/routes/apps/chat-popup/direct-message/route.jsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat-popup/direct-message/route.jsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
};
_s3(ChatPopup, "iSXNSJqagHP1vY52e1lik3CWsAM=");
_c4 = ChatPopup;
var route_default = ChatPopup;
var _c4;
$RefreshReg$(_c4, "ChatPopup");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/chat-popup/direct-message/route-D645RM5Y.js.map
