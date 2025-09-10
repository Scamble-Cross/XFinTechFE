import {
  avatar11_default
} from "/build/_shared/chunk-VQO4YLKZ.js";
import {
  avatar4_default
} from "/build/_shared/chunk-54CGHQVE.js";
import {
  faDropbox,
  faFacebook,
  faGithub,
  faGoogle,
  faGoogleDrive
} from "/build/_shared/chunk-GJLLTWNM.js";
import {
  FontAwesomeIcon
} from "/build/_shared/chunk-JPGC5R3S.js";
import {
  ChatHeader_default,
  InvitePeopleModal_default
} from "/build/_shared/chunk-HYPZDSHF.js";
import {
  hk_collapse_default
} from "/build/_shared/chunk-OT26VHP7.js";
import {
  avatar15_default
} from "/build/_shared/chunk-ZGGRJ3QC.js";
import "/build/_shared/chunk-CWUICKJG.js";
import {
  avatar9_default
} from "/build/_shared/chunk-VFRPT2WG.js";
import "/build/_shared/chunk-JQFY4KQJ.js";
import {
  avatar7_default
} from "/build/_shared/chunk-7XF6XEF7.js";
import "/build/_shared/chunk-WWUYITJG.js";
import "/build/_shared/chunk-5BLZWIUZ.js";
import {
  useWindowWidth
} from "/build/_shared/chunk-RBFUKTHB.js";
import {
  avatar3_default
} from "/build/_shared/chunk-MVEBKFJK.js";
import {
  avatar2_default
} from "/build/_shared/chunk-LLX7VWLD.js";
import "/build/_shared/chunk-DSN3JJ3U.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  archive_default,
  arrow_right_default,
  book_default,
  briefcase_default,
  corner_up_right_default,
  mail_default,
  map_pin_default,
  message_square_default,
  more_horizontal_default,
  phone_default,
  plus_default,
  settings_default,
  share_default,
  smile_default,
  star_default,
  toggle_right_default,
  user_check_default,
  user_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  Button_default,
  Dropdown_default,
  Form_default,
  ListGroup_default
} from "/build/_shared/chunk-KBRVI47E.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-HFWHD4VB.js";
import {
  require_classnames
} from "/build/_shared/chunk-CQ7UJNRQ.js";
import {
  useGlobalStateContext
} from "/build/_shared/chunk-DIOLN5GK.js";
import {
  avatar1_default
} from "/build/_shared/chunk-B57YWHU6.js";
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
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/apps/chat/contact/route.jsx
var import_react6 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// app/routes/apps/chat/contact/ChatBody.jsx
var import_react = __toESM(require_react(), 1);
var import_classnames = __toESM(require_classnames(), 1);

// app/assets/img/start-conversation.png
var start_conversation_default = "/build/_assets/start-conversation-NJSBGRRV.png";

// app/routes/apps/chat/contact/ChatBody.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/contact/ChatBody.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/contact/ChatBody.jsx"
  );
  import.meta.hot.lastModified = "1732600247904.588";
}
var ChatBody = ({
  contactMsg
}) => {
  _s();
  const {
    states
  } = useGlobalStateContext();
  const [messages, setMessages] = (0, import_react.useState)(states.chatState.contactMsg);
  const [startConversation, setStartConversation] = (0, import_react.useState)(false);
  const handleConversation = () => {
    setStartConversation(true);
    if (startConversation) {
      document.getElementById("input_contact_chat").focus();
    }
  };
  (0, import_react.useEffect)(() => {
    setMessages(states.chatState.contactMsg);
  }, [states.chatState, messages]);
  const scrollRefs = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    scrollRefs.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBar, { id: "chat_body", className: "chat-body", children: [
    messages.length > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "list-unstyled chat-single-list", children: messages.map((elem, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: (0, import_classnames.default)("media", elem.types), children: [
      elem.types === "received" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
        lineNumber: 64,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
        lineNumber: 63,
        columnNumber: 67
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-box", id: "msg-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: elem.text }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
            lineNumber: 69,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "chat-time", children: elem.time }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
            lineNumber: 70,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
          lineNumber: 68,
          columnNumber: 45
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "msg-action", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(corner_up_right_default, {}, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
            lineNumber: 76,
            columnNumber: 61
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
            lineNumber: 75,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
            lineNumber: 74,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
            lineNumber: 73,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
              lineNumber: 84,
              columnNumber: 65
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
              lineNumber: 83,
              columnNumber: 61
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
              lineNumber: 82,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
              lineNumber: 81,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { href: "#forward", children: "Forward" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
                lineNumber: 89,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { href: "#copy", children: "Copy" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
                lineNumber: 90,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
              lineNumber: 88,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
            lineNumber: 80,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
          lineNumber: 72,
          columnNumber: 45
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
        lineNumber: 67,
        columnNumber: 41
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
        lineNumber: 66,
        columnNumber: 37
      }, this)
    ] }, index, true, {
      fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
      lineNumber: 62,
      columnNumber: 56
    }, this)) }, void 0, false, {
      fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
      lineNumber: 61,
      columnNumber: 36
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "start-conversation", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { className: "d-block img-fluid", src: start_conversation_default, alt: "empty-chat" }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
        lineNumber: 98,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "soft-primary", size: "lg", className: "mt-3", onClick: handleConversation, children: "Start Conversation" }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
        lineNumber: 99,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
      lineNumber: 97,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: scrollRefs }, void 0, false, {
      fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
      lineNumber: 101,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/contact/ChatBody.jsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
};
_s(ChatBody, "nOw44xQV6o0uXXsuqShXi0g6P9E=", false, function() {
  return [useGlobalStateContext];
});
_c = ChatBody;
var ChatBody_default = ChatBody;
var _c;
$RefreshReg$(_c, "ChatBody");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat/contact/ChatInfo.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/contact/ChatInfo.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/contact/ChatInfo.jsx"
  );
  import.meta.hot.lastModified = "1732600247905.082";
}
var ChatInfo = ({
  infoToggle
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "chat-info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { bsPrefix: " btn-close", className: "info-close", onClick: infoToggle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
      fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
      lineNumber: 37,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
      lineNumber: 36,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xxl avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
        lineNumber: 41,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
        lineNumber: 40,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "cp-name text-truncate mt-2", children: "Alan Rickman" }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
        lineNumber: 43,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-truncate", children: "Today I don't feel like doing anything.. I just wanna laying in my bed" }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
        lineNumber: 44,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
      lineNumber: 39,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default, { role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "text", placeholder: "Search in conversation" }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
        lineNumber: 48,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
        lineNumber: 47,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "collapse-simple mt-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "contact_gn_info", title: "General Info", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "cp-info", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "#", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "cp-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(briefcase_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
              lineNumber: 56,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
              lineNumber: 55,
              columnNumber: 72
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
              lineNumber: 55,
              columnNumber: 41
            }, this),
            "Co-Founder"
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 54,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 53,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "#", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "cp-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(mail_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
              lineNumber: 64,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
              lineNumber: 63,
              columnNumber: 72
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
              lineNumber: 63,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-primary", children: "contact@hencework.com" }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
              lineNumber: 66,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 62,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 61,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "#", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "cp-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(phone_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
              lineNumber: 72,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
              lineNumber: 71,
              columnNumber: 72
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
              lineNumber: 71,
              columnNumber: 41
            }, this),
            "+91-25-4125-2365"
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 70,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 69,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "#", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "cp-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(map_pin_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
              lineNumber: 80,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
              lineNumber: 79,
              columnNumber: 72
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
              lineNumber: 79,
              columnNumber: 41
            }, this),
            "Oslo, Canada"
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 78,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 77,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
          lineNumber: 52,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
          lineNumber: 51,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "contact_social_profile", title: "Social Profile", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "hk-list hk-list-sm", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "primary", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: faFacebook }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 92,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 91,
            columnNumber: 96
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 91,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 90,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "warning", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: faGoogleDrive }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 97,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 96,
            columnNumber: 96
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 96,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 95,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "info", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: faDropbox }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 102,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 101,
            columnNumber: 93
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 101,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 100,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "dark", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: faGithub }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 107,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 106,
            columnNumber: 93
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 106,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 105,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "danger", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FontAwesomeIcon, { icon: faGoogle }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 112,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 111,
            columnNumber: 95
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 111,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 110,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
          lineNumber: 89,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
          lineNumber: 88,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "contact_biography", title: "Biography", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Hello there, Alan Rickman is a brilliant co-founder and a copy writer working for almost a decade for fortune 500 companies. I am well verse with multiple foreign languages and I love to produce good quality stuff. " }, void 0, false, {
          fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
          lineNumber: 120,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
          lineNumber: 119,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
          lineNumber: 118,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "contact_settings", title: "Settings", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "cp-action", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "#", children: "Clear Chat" }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 127,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 126,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-danger", children: "Block Contact" }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 133,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 132,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 131,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "#", children: "Somthing's Wrong" }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 137,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
            lineNumber: 136,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
          lineNumber: 125,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
          lineNumber: 124,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
        lineNumber: 50,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
      lineNumber: 46,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
    lineNumber: 35,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/chat/contact/ChatInfo.jsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_c2 = ChatInfo;
var ChatInfo_default = ChatInfo;
var _c2;
$RefreshReg$(_c2, "ChatInfo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat/contact/ContactList.jsx
var import_react4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/contact/ContactList.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/contact/ContactList.jsx"
  );
  import.meta.hot.lastModified = "1732600247905.677";
}
var ContactList = () => {
  _s2();
  const {
    dispatch
  } = useGlobalStateContext();
  const [showInviteModal, setShowInviteModal] = (0, import_react4.useState)(false);
  const width = useWindowWidth();
  const Conversation = () => {
    if (width <= 991) {
      dispatch({
        type: "start_chat"
      });
      dispatch({
        type: "top_nav_toggle"
      });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InvitePeopleModal_default, { show: showInviteModal, onClose: () => setShowInviteModal(!showInviteModal) }, void 0, false, {
      fileName: "app/routes/apps/chat/contact/ContactList.jsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "chatapp-aside", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "aside-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { as: Link, to: "#", className: "chatapp-title link-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Contact" }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 64,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 63,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { as: Link, to: "/apps/chat/chats", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(message_square_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 69,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 68,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Chats" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 71,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 67,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { as: Link, to: "/apps/chat/contact", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(book_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 75,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 74,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Contacts" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 77,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 73,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { as: Link, to: "/apps/chat/group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(user_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 81,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 80,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Groups" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 83,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 79,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(archive_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 87,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 86,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Archived" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 89,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 85,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(star_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 93,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 92,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Favorites" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 95,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 91,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 66,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/contact/ContactList.jsx",
          lineNumber: 62,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret me-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(settings_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 104,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 103,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 102,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 101,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#some", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(user_check_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 111,
                  columnNumber: 41
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 110,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Active Contacts" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 113,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 109,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#some", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(message_square_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 117,
                  columnNumber: 41
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 116,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Chat Requests" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 119,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 115,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#some", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(archive_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 123,
                  columnNumber: 41
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 122,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Archived Chats" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 125,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 121,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#some", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(toggle_right_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 129,
                  columnNumber: 41
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 128,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Unread Chats" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 131,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 127,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 133,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#some", children: "Settings" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 134,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#some", children: "Help" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 135,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#some", children: "Report a problem	" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 136,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 108,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 100,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "primary", className: "btn-icon btn-rounded", onClick: () => setShowInviteModal(!showInviteModal), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(plus_default, {}, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 142,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 141,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 140,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 139,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/contact/ContactList.jsx",
          lineNumber: 99,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/contact/ContactList.jsx",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SimpleBar, { className: "aside-body", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default, { className: "aside-search", role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "text", className: "form-control", placeholder: "Search Contacts" }, void 0, false, {
          fileName: "app/routes/apps/chat/contact/ContactList.jsx",
          lineNumber: 150,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/contact/ContactList.jsx",
          lineNumber: 149,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default, { as: "ul", variant: "flush", className: "chat-contacts-list", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "title title-wth-divider text-primary my-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "A" }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 154,
            columnNumber: 88
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 154,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 153,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { as: "li", onClick: Conversation, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media read-chat active-user", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 160,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 161,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 159,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 158,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-name", children: "Alan Rickman" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 166,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-status", children: "Today I don't feel like doing anything" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 167,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 165,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown action-drp", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { "data-feather": "more-horizontal" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 171,
                  columnNumber: 235
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 171,
                  columnNumber: 204
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 171,
                  columnNumber: 181
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 171,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown-menu dropdown-menu-end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Delete Chat" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 173,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item link-danger", href: "#some", children: "Block" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 174,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 172,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 170,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 169,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 164,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 157,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 156,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { as: "li", onClick: Conversation, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 185,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 186,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 184,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 183,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-name", children: "Ashley Jude" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 191,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-status", children: "Ma life ma rules\u{1F60D}" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 192,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 190,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown action-drp", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { "data-feather": "more-horizontal" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 196,
                  columnNumber: 235
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 196,
                  columnNumber: 204
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 196,
                  columnNumber: 181
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 196,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown-menu dropdown-menu-end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Delete Chat" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 198,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item link-danger", href: "#some", children: "Block" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 199,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 197,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 195,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 194,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 189,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 182,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 181,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { as: "li", onClick: Conversation, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar11_default, alt: "user", className: "avatar-img" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 210,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 211,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 209,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 208,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-name", children: "Adam Sandler" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 216,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-status", children: "Hi There, I am using Jampack" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 217,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 215,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown action-drp", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { "data-feather": "more-horizontal" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 221,
                  columnNumber: 235
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 221,
                  columnNumber: 204
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 221,
                  columnNumber: 181
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 221,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown-menu dropdown-menu-end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Delete Chat" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 223,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item link-danger", href: "#some", children: "Block" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 224,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 222,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 220,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 219,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 214,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 207,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 206,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "title title-wth-divider text-primary my-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "B" }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 232,
            columnNumber: 88
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 232,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 231,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { as: "li", onClick: Conversation, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar4_default, alt: "user", className: "avatar-img" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 238,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 239,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 237,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 236,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-name", children: "Billy Zen" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 244,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-status", children: "\u{1F47F}Take me to the places!!" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 245,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 243,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown action-drp", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { "data-feather": "more-horizontal" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 249,
                  columnNumber: 235
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 249,
                  columnNumber: 204
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 249,
                  columnNumber: 181
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 249,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown-menu dropdown-menu-end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Delete Chat" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 251,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item link-danger", href: "#some", children: "Block" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 252,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 250,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 248,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 247,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 242,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 235,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 234,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { as: "li", onClick: Conversation, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar1_default, alt: "user", className: "avatar-img" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 263,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 264,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 262,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 261,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-name", children: "Bradley Cooper" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 269,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-status", children: "Always Busy" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 270,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 268,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown action-drp", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { "data-feather": "more-horizontal" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 274,
                  columnNumber: 235
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 274,
                  columnNumber: 204
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 274,
                  columnNumber: 181
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 274,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown-menu dropdown-menu-end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Delete Chat" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 276,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item link-danger", href: "#some", children: "Block" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 277,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 275,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 273,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 272,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 267,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 260,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 259,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { as: "li", onClick: Conversation, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar15_default, alt: "user", className: "avatar-img" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 288,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 289,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 287,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 286,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-name", children: "Brad Pitt" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 294,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-status", children: "No calls, telepathy only" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 295,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 293,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown action-drp", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { "data-feather": "more-horizontal" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 299,
                  columnNumber: 235
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 299,
                  columnNumber: 204
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 299,
                  columnNumber: 181
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 299,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown-menu dropdown-menu-end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Delete Chat" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 301,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item link-danger", href: "#some", children: "Block" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 302,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 300,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 298,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 297,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 292,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 285,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 284,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { as: "li", onClick: Conversation, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded position-relative", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "B" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 313,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 314,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 312,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 311,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-name", children: "Ben Afflex" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 319,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-status", children: "\xAC\xAC\xAC on vacation" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 320,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 318,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown action-drp", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { "data-feather": "more-horizontal" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 324,
                  columnNumber: 235
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 324,
                  columnNumber: 204
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 324,
                  columnNumber: 181
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 324,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown-menu dropdown-menu-end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Delete Chat" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 326,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item link-danger", href: "#some", children: "Block" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 327,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 325,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 323,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 322,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 317,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 310,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 309,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { as: "li", onClick: Conversation, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar3_default, alt: "user", className: "avatar-img" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 338,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 339,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 337,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 336,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-name", children: "Barbara Harshey" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 344,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-status", children: "Dead like a python" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 345,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 343,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown action-drp", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { "data-feather": "more-horizontal" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 349,
                  columnNumber: 235
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 349,
                  columnNumber: 204
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 349,
                  columnNumber: 181
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 349,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown-menu dropdown-menu-end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Delete Chat" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 351,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item link-danger", href: "#some", children: "Block" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 352,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 350,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 348,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 347,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 342,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 335,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 334,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "title title-wth-divider text-primary my-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "C" }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 360,
            columnNumber: 88
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 360,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 359,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { as: "li", onClick: Conversation, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar7_default, alt: "user", className: "avatar-img" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 366,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 367,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 365,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 364,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-name", children: "Colin Hanks" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 372,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-status", children: "No calls. Always Busy" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 373,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 371,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown action-drp", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { "data-feather": "more-horizontal" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 377,
                  columnNumber: 235
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 377,
                  columnNumber: 204
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 377,
                  columnNumber: 181
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 377,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown-menu dropdown-menu-end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Delete Chat" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 379,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item link-danger", href: "#some", children: "Block" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 380,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 378,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 376,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 375,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 370,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 363,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 362,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { as: "li", onClick: Conversation, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar9_default, alt: "user", className: "avatar-img" }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 391,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 390,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 389,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-name", children: "Chuck Norris" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 396,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-status", children: "Hi There, I am using Jampack" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 397,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 395,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown action-drp", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { "data-feather": "more-horizontal" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 401,
                  columnNumber: 235
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 401,
                  columnNumber: 204
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 401,
                  columnNumber: 181
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 401,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown-menu dropdown-menu-end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Delete Chat" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 403,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item link-danger", href: "#some", children: "Block" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 404,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 402,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 400,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 399,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 394,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 388,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 387,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { as: "li", onClick: Conversation, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-info avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: "C" }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 415,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 414,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 413,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-name", children: "Christian Bale" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 420,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-status", children: "No status to show" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 421,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 419,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown action-drp", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "#some", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { "data-feather": "more-horizontal" }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 425,
                  columnNumber: 235
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 425,
                  columnNumber: 204
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 425,
                  columnNumber: 181
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 425,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "dropdown-menu dropdown-menu-end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item", href: "#some", children: "Delete Chat" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 427,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { className: "dropdown-item link-danger", href: "#some", children: "Block" }, void 0, false, {
                    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                    lineNumber: 428,
                    columnNumber: 49
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                  lineNumber: 426,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 424,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/contact/ContactList.jsx",
                lineNumber: 423,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/contact/ContactList.jsx",
              lineNumber: 418,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 412,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/ContactList.jsx",
            lineNumber: 411,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/contact/ContactList.jsx",
          lineNumber: 152,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/contact/ContactList.jsx",
        lineNumber: 148,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/contact/ContactList.jsx",
      lineNumber: 60,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/contact/ContactList.jsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
};
_s2(ContactList, "bQWQTC4XC6Os/cjaal2pbpWTClU=", false, function() {
  return [useGlobalStateContext, useWindowWidth];
});
_c3 = ContactList;
var ContactList_default = ContactList;
var _c3;
$RefreshReg$(_c3, "ContactList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat/contact/Footer.jsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/contact/Footer.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/contact/Footer.jsx"
  );
  import.meta.hot.lastModified = "1732600247906.09";
}
var Footer = () => {
  _s3();
  const [message, setMessage] = (0, import_react5.useState)([]);
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  const current = /* @__PURE__ */ new Date();
  const msgTitme = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });
  const sendMessage = () => {
    dispatch({
      type: "contact_msg",
      contactMsg: {
        text: message,
        time: msgTitme,
        types: "sent"
      }
    });
    if (states.chatState.contactMsg) {
      setTimeout(() => {
        dispatch({
          type: "contact_msg",
          contactMsg: {
            text: "What are you saying?",
            time: msgTitme,
            types: "received"
          }
        });
      }, 800);
    }
  };
  const handleClick = () => {
    sendMessage();
    setMessage("");
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      sendMessage();
      setMessage("");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("footer", { className: "chat-footer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(share_default, {}, void 0, false, {
        fileName: "app/routes/apps/chat/contact/Footer.jsx",
        lineNumber: 79,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/Footer.jsx",
        lineNumber: 78,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/Footer.jsx",
        lineNumber: 77,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/Footer.jsx",
        lineNumber: 76,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-primary avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-image-line" }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 88,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 87,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 86,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "h6 mb-0", children: "Photo or Video Library" }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 92,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 91,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/contact/Footer.jsx",
          lineNumber: 85,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/contact/Footer.jsx",
          lineNumber: 84,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-info avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-file-4-line" }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 100,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 99,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 98,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "h6 mb-0", children: "Documents" }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 104,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 103,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/contact/Footer.jsx",
          lineNumber: 97,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/contact/Footer.jsx",
          lineNumber: 96,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-success avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-map-pin-line" }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 112,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 111,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 110,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "h6 mb-0", children: "Location" }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 116,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 115,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/contact/Footer.jsx",
          lineNumber: 109,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/contact/Footer.jsx",
          lineNumber: 108,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-blue avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-contacts-line" }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 124,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 123,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 122,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "h6 mb-0", children: "Contact" }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 128,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/contact/Footer.jsx",
            lineNumber: 127,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/contact/Footer.jsx",
          lineNumber: 121,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/contact/Footer.jsx",
          lineNumber: 120,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/contact/Footer.jsx",
        lineNumber: 83,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/contact/Footer.jsx",
      lineNumber: 75,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "input-group", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "input-affix-wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", id: "input_contact_chat", name: "send-msg", className: "input-msg-send form-control rounded-input", placeholder: "Type your message...", value: message, onChange: (e) => setMessage(e.target.value), onKeyDown }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/Footer.jsx",
        lineNumber: 136,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "input-suffix", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "flush-primary", className: "btn-icon btn-rounded btn-send", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", onClick: handleClick, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(arrow_right_default, {}, void 0, false, {
        fileName: "app/routes/apps/chat/contact/Footer.jsx",
        lineNumber: 141,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/Footer.jsx",
        lineNumber: 140,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/Footer.jsx",
        lineNumber: 139,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/Footer.jsx",
        lineNumber: 138,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/Footer.jsx",
        lineNumber: 137,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/contact/Footer.jsx",
      lineNumber: 135,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat/contact/Footer.jsx",
      lineNumber: 134,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(smile_default, {}, void 0, false, {
      fileName: "app/routes/apps/chat/contact/Footer.jsx",
      lineNumber: 151,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat/contact/Footer.jsx",
      lineNumber: 150,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat/contact/Footer.jsx",
      lineNumber: 149,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat/contact/Footer.jsx",
      lineNumber: 148,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/contact/Footer.jsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
};
_s3(Footer, "G3kiDrFbt/8Q4pYzV2zvfemBgUU=", false, function() {
  return [useGlobalStateContext];
});
_c4 = Footer;
var Footer_default = Footer;
var _c4;
$RefreshReg$(_c4, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat/contact/route.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/contact/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/contact/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247906.788";
}
var ChatContacts = () => {
  _s4();
  const {
    states
  } = useGlobalStateContext();
  const [showInfo, setShowInfo] = (0, import_react6.useState)(true);
  const [invitePeople, setInvitePeople] = (0, import_react6.useState)(false);
  const windowWidth = useWindowWidth();
  (0, import_react6.useEffect)(() => {
    if (windowWidth <= 1199) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  }, [windowWidth]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: (0, import_classnames2.default)("chatapp-wrap", {
    "chatapp-info-active": showInfo
  }, {
    "chatapp-slide": states.chatState.startChat
  }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "chatapp-content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ContactList_default, {}, void 0, false, {
      fileName: "app/routes/apps/chat/contact/route.jsx",
      lineNumber: 54,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "chatapp-single-chat", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ChatHeader_default, { infoState: showInfo, infoToggle: () => setShowInfo(!showInfo), invitePeople: () => setInvitePeople(!invitePeople) }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/route.jsx",
        lineNumber: 56,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ChatBody_default, {}, void 0, false, {
        fileName: "app/routes/apps/chat/contact/route.jsx",
        lineNumber: 57,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Footer_default, {}, void 0, false, {
        fileName: "app/routes/apps/chat/contact/route.jsx",
        lineNumber: 59,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ChatInfo_default, { infoToggle: () => setShowInfo(!showInfo) }, void 0, false, {
        fileName: "app/routes/apps/chat/contact/route.jsx",
        lineNumber: 60,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/contact/route.jsx",
      lineNumber: 55,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(InvitePeopleModal_default, { show: invitePeople, onClose: () => setInvitePeople(!invitePeople) }, void 0, false, {
      fileName: "app/routes/apps/chat/contact/route.jsx",
      lineNumber: 63,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/contact/route.jsx",
    lineNumber: 53,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/chat/contact/route.jsx",
    lineNumber: 48,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/chat/contact/route.jsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
};
_s4(ChatContacts, "W6nacLUVs7NaumYv0B+lvNkgWV8=", false, function() {
  return [useGlobalStateContext, useWindowWidth];
});
_c5 = ChatContacts;
var route_default = ChatContacts;
var _c5;
$RefreshReg$(_c5, "ChatContacts");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/chat/contact/route-6Q42DGY3.js.map
