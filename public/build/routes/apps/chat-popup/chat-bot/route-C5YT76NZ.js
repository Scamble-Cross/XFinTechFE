import {
  logo_light_default
} from "/build/_shared/chunk-3HVHQP7I.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  cpu_default,
  credit_card_default,
  eye_default,
  message_circle_default,
  minus_default,
  more_horizontal_default,
  share_default,
  smile_default,
  zap_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import {
  useGlobalStateContext
} from "/build/_shared/chunk-3LFZEH5W.js";
import "/build/_shared/chunk-B57YWHU6.js";
import "/build/_shared/chunk-WUHA5P4Y.js";
import {
  Button_default,
  Card_default,
  Dropdown_default,
  Form_default,
  InputGroup_default
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

// app/components/chat-bot-interface/ChatBotInterface.jsx
var import_react = __toESM(require_react(), 1);
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/chat-bot-interface/ChatBotInterface.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/chat-bot-interface/ChatBotInterface.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var ChatBotInterface = ({
  show
}) => {
  _s();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  const [showChatbot, setShowChatbot] = (0, import_react.useState)(show);
  const [showPopup, setshowPopup] = (0, import_react.useState)(true);
  const [startConversation, setStartConversation] = (0, import_react.useState)(false);
  const [typing, setTyping] = (0, import_react.useState)(true);
  const [messages, setMessages] = (0, import_react.useState)([]);
  const sendMessage = () => {
    if (messages.length > 0) {
      dispatch({
        type: "send_popup_msg",
        popupMsgs: {
          text: messages,
          types: "sent"
        }
      });
      setTimeout(() => {
        dispatch({
          type: "send_popup_msg",
          popupMsgs: {
            text: "What are you saying?",
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
      setTyping(false);
    }
  };
  const bottomRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [states.chatPopupState, startConversation]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("hk-chatbot-popup", {
      "d-md-block d-flex": showChatbot
    }), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: (0, import_classnames.default)({
        "pb-2": startConversation
      }), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "chatbot-head-top", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "dark", size: "sm", className: "btn-icon btn-rounded no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 95,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 94,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 93,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 92,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "dropdown-icon zmdi zmdi-notifications-active" }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 101,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Send push notifications" }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 102,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 100,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "dropdown-icon zmdi zmdi-volume-off" }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 105,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Mute Chat" }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 106,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 104,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 99,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 91,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-white", children: "Chat with Us" }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 110,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "dark", size: "sm", className: "btn-icon btn-rounded", onClick: () => setShowChatbot(!showChatbot), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(minus_default, {}, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 114,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 113,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 112,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 111,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
          lineNumber: 90,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "separator-full separator-light mt-0 opacity-10" }, void 0, false, {
          fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
          lineNumber: 119,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-primary avatar-icon avatar-rounded position-relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-customer-service-2-line" }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 125,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 124,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "badge badge-success badge-indicator badge-indicator-lg badge-indicator-nobdr position-bottom-end-overflow-1" }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 127,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 123,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 122,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Chat Robot" }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 131,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-status", children: "Online" }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 132,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 130,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
          lineNumber: 121,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
          lineNumber: 120,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
        lineNumber: 87,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("chatbot-popup-body"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBar, { className: (0, import_classnames.default)("nicescroll-bar", {
        "mt-0": startConversation
      }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("init-content-wrap", {
          "d-none": startConversation
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Text, { children: [
              "Hey I am chat robot \u{1F608}",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 147,
                columnNumber: 74
              }, this),
              "Do yo have any question regarding our tools?",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 147,
                columnNumber: 124
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 147,
                columnNumber: 130
              }, this),
              "Select the topic or start chatting."
            ] }, void 0, true, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 147,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", className: "btn-block text-nonecase start-conversation", onClick: () => setStartConversation(!startConversation), children: "Start a conversation" }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 148,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 146,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 145,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "btn-wrap", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "soft-primary", className: "text-nonecase btn-rounded start-conversation", onClick: () => setStartConversation(!startConversation), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(eye_default, {}, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 156,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 155,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 154,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "btn-text", children: "Just browsing" }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 159,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 153,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 152,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "soft-danger", className: "text-nonecase btn-rounded start-conversation", onClick: () => setStartConversation(!startConversation), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(credit_card_default, {}, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 166,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 165,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 164,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "btn-text", children: "I have a question regarding pricing" }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 169,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 163,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 162,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "soft-warning", className: "text-nonecase btn-rounded start-conversation", onClick: () => setStartConversation(!startConversation), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(cpu_default, {}, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 176,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 175,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 174,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "btn-text", children: "Need help for technical query" }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 179,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 173,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 172,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "soft-success", className: "text-nonecase btn-rounded start-conversation", onClick: () => setStartConversation(!startConversation), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(zap_default, {}, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 186,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 185,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 184,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "btn-text", children: "I have a pre purchase question" }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 189,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 183,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 182,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 151,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
          lineNumber: 142,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: (0, import_classnames.default)("list-unstyled", {
          "d-none": !startConversation
        }), children: [
          states.chatPopupState.popupMsgs.map((elem, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: (0, import_classnames.default)("media", elem.types), children: [
            elem.types === "received" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-soft-primary avatar-icon avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-customer-service-2-line" }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 200,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 199,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 198,
              columnNumber: 75
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: elem.text }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 206,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 205,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 204,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 203,
              columnNumber: 45
            }, this)
          ] }, index, true, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 197,
            columnNumber: 87
          }, this)),
          typing && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "media received", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-soft-primary avatar-icon avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-customer-service-2-line" }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 214,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 213,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 212,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-box typing-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "typing", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dot" }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 221,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dot" }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 222,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dot" }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 223,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 220,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 219,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 218,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 217,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 211,
            columnNumber: 44
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
          lineNumber: 194,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: bottomRef }, void 0, false, {
          fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
          lineNumber: 230,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
        lineNumber: 141,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
        lineNumber: 138,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
        lineNumber: 137,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("chatbot-intro-text fs-7", {
          "d-none": startConversation
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "separator-full separator-light" }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 238,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2", children: "This is jampack's beta version please sign up now to get early access to our full version" }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 239,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "d-block mb-2", href: "#some", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("u", { children: "Give Feedback" }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 240,
            columnNumber: 66
          }, this) }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 240,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
          lineNumber: 235,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputGroup_default, { className: (0, import_classnames.default)({
          "d-none": !startConversation
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-group-text overflow-show border-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon flush-soft-hover btn-rounded no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(share_default, {}, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 250,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 249,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 248,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 247,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-primary avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-image-line" }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 259,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 258,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 257,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h6 mb-0", children: "Photo or Video Library" }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 263,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 262,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 256,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 255,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-info avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-file-4-line" }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 271,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 270,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 269,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h6 mb-0", children: "Documents" }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 275,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 274,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 268,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 267,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-success avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-map-pin-line" }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 283,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 282,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 281,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h6 mb-0", children: "Location" }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 287,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 286,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 280,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 279,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-blue avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-contacts-line" }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 295,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 294,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 293,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h6 mb-0", children: "Contact" }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 299,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                  lineNumber: 298,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 292,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
                lineNumber: 291,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
              lineNumber: 254,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 246,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 245,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", id: "input_msg_chat_popup_2", name: "send-msg", className: "input-msg-send border-0 shadow-none", placeholder: "Type something...", value: messages, onChange: (e) => setMessages(e.target.value), onKeyDown }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 306,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "input-group-text overflow-show border-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon flush-soft-hover btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(smile_default, {}, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 311,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 310,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 309,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 308,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 307,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
          lineNumber: 242,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "footer-copy-text", children: [
          "Powered by ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "brand-link", href: "#some", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: logo_light_default, alt: "logo-brand", height: 16 }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 317,
            columnNumber: 105
          }, this) }, void 0, false, {
            fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
            lineNumber: 317,
            columnNumber: 66
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
          lineNumber: 317,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
        lineNumber: 234,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
      lineNumber: 84,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", size: "lg", className: "btn-icon btn-floating btn-rounded btn-popup-open", onClick: () => {
      setShowChatbot(!showChatbot);
      setshowPopup(false);
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(message_circle_default, {}, void 0, false, {
      fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
      lineNumber: 326,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
      lineNumber: 325,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
      lineNumber: 324,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
      lineNumber: 320,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: (0, import_classnames.default)("chat-popover shadow-xl", {
      "d-flex": showPopup
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Try Jampack Chat for free and connect with your customers now!" }, void 0, false, {
      fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
      lineNumber: 332,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
      lineNumber: 330,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/chat-bot-interface/ChatBotInterface.jsx",
    lineNumber: 83,
    columnNumber: 10
  }, this);
};
_s(ChatBotInterface, "KBQ59ZtA7PCToY6qTm0VwQY1fTM=", false, function() {
  return [useGlobalStateContext];
});
_c = ChatBotInterface;
var ChatBotInterface_default = ChatBotInterface;
var _c;
$RefreshReg$(_c, "ChatBotInterface");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat-popup/chat-bot/route.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat-popup/chat-bot/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat-popup/chat-bot/route.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var ChatBot = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChatBotInterface_default, { show: true }, void 0, false, {
      fileName: "app/routes/apps/chat-popup/chat-bot/route.jsx",
      lineNumber: 24,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hk-pg-body py-0" }, void 0, false, {
      fileName: "app/routes/apps/chat-popup/chat-bot/route.jsx",
      lineNumber: 25,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat-popup/chat-bot/route.jsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c2 = ChatBot;
var route_default = ChatBot;
var _c2;
$RefreshReg$(_c2, "ChatBot");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/chat-popup/chat-bot/route-C5YT76NZ.js.map
