import {
  avatar10_default
} from "/build/_shared/chunk-LDADEV53.js";
import {
  img_thumb1_default
} from "/build/_shared/chunk-PZUTWR2K.js";
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
import {
  avatar5_default
} from "/build/_shared/chunk-JQFY4KQJ.js";
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
  useWindowWidth
} from "/build/_shared/chunk-RBFUKTHB.js";
import "/build/_shared/chunk-MVEBKFJK.js";
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
  archive_default,
  arrow_down_default,
  arrow_right_default,
  book_default,
  briefcase_default,
  corner_up_right_default,
  message_square_default,
  more_horizontal_default,
  more_vertical_default,
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
  InputGroup_default,
  ListGroup_default,
  Nav_default,
  Tab_default
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

// app/routes/apps/chat/group/route.jsx
var import_react6 = __toESM(require_react(), 1);
var import_classnames3 = __toESM(require_classnames(), 1);

// app/routes/apps/chat/group/Footer.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/group/Footer.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/group/Footer.jsx"
  );
  import.meta.hot.lastModified = "1732600247907.655";
}
var Footer = () => {
  _s();
  const [message, setMessage] = (0, import_react.useState)([]);
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
    if (message.length > 0) {
      dispatch({
        type: "grp_msg",
        grpMsg: {
          text: message,
          time: msgTitme,
          types: "sent"
        }
      });
      setTimeout(() => {
        dispatch({
          type: "grp_msg",
          grpMsg: {
            avatar: states.chatState.grpAvatar,
            text: "What are you saying?",
            time: msgTitme,
            types: "received"
          }
        });
      }, 800);
    } else {
      alert("Please type something!");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", { className: "chat-footer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(share_default, {}, void 0, false, {
        fileName: "app/routes/apps/chat/group/Footer.jsx",
        lineNumber: 83,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/group/Footer.jsx",
        lineNumber: 82,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/group/Footer.jsx",
        lineNumber: 81,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/group/Footer.jsx",
        lineNumber: 80,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-primary avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-image-line" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 92,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 91,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 90,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h6 mb-0", children: "Photo or Video Library" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 96,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 95,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/Footer.jsx",
          lineNumber: 89,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/group/Footer.jsx",
          lineNumber: 88,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-info avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-file-4-line" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 104,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 103,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 102,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h6 mb-0", children: "Documents" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 108,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 107,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/Footer.jsx",
          lineNumber: 101,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/group/Footer.jsx",
          lineNumber: 100,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-success avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-map-pin-line" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 116,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 115,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 114,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h6 mb-0", children: "Location" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 120,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 119,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/Footer.jsx",
          lineNumber: 113,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/group/Footer.jsx",
          lineNumber: 112,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-blue avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { className: "ri-contacts-line" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 128,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 127,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 126,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h6 mb-0", children: "Contact" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 132,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Footer.jsx",
            lineNumber: 131,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/Footer.jsx",
          lineNumber: 125,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/group/Footer.jsx",
          lineNumber: 124,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/group/Footer.jsx",
        lineNumber: 87,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/group/Footer.jsx",
      lineNumber: 79,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputGroup_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "input-affix-wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "input_msg_send_chatapp", name: "send-msg", className: "input-msg-send form-control rounded-input", placeholder: "Type your message...", value: message, onChange: (e) => setMessage(e.target.value), onKeyDown }, void 0, false, {
        fileName: "app/routes/apps/chat/group/Footer.jsx",
        lineNumber: 140,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "input-suffix", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-primary", className: "btn-icon btn-rounded btn-send", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", onClick: handleClick, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(arrow_right_default, {}, void 0, false, {
        fileName: "app/routes/apps/chat/group/Footer.jsx",
        lineNumber: 145,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/group/Footer.jsx",
        lineNumber: 144,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/group/Footer.jsx",
        lineNumber: 143,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/group/Footer.jsx",
        lineNumber: 142,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/group/Footer.jsx",
        lineNumber: 141,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/group/Footer.jsx",
      lineNumber: 139,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat/group/Footer.jsx",
      lineNumber: 138,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(smile_default, {}, void 0, false, {
      fileName: "app/routes/apps/chat/group/Footer.jsx",
      lineNumber: 155,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat/group/Footer.jsx",
      lineNumber: 154,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat/group/Footer.jsx",
      lineNumber: 153,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat/group/Footer.jsx",
      lineNumber: 152,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/group/Footer.jsx",
    lineNumber: 78,
    columnNumber: 10
  }, this);
};
_s(Footer, "G3kiDrFbt/8Q4pYzV2zvfemBgUU=", false, function() {
  return [useGlobalStateContext];
});
_c = Footer;
var Footer_default = Footer;
var _c;
$RefreshReg$(_c, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat/group/GroupChatBody.jsx
var import_react2 = __toESM(require_react(), 1);
var import_classnames = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/group/GroupChatBody.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/group/GroupChatBody.jsx"
  );
  import.meta.hot.lastModified = "1732600247908.361";
}
var GroupChatBody = () => {
  _s2();
  const {
    states
  } = useGlobalStateContext();
  const [messages, setMessages] = (0, import_react2.useState)(states.chatState.grpMsg);
  (0, import_react2.useEffect)(() => {
    setMessages(states.chatState.grpMsg);
  }, [states.chatState, messages]);
  const scrollRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SimpleBar, { id: "chat_body", className: "chat-body", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "list-unstyled chat-single-list", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "media received", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 56,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 55,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "msg-box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Cool, lets talk about it tomorrow" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 61,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "chat-time", children: "10:52 PM" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 62,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 60,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "msg-action", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(corner_up_right_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 68,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 67,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 66,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 65,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Toggle, { className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 76,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 75,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 74,
                  columnNumber: 41
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 73,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: "Forward" }, void 0, false, {
                    fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                    lineNumber: 81,
                    columnNumber: 41
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: "Copy" }, void 0, false, {
                    fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                    lineNumber: 82,
                    columnNumber: 41
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 80,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 72,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 64,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 59,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "msg-box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Images for new marketing pages have been sent" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 89,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "chat-time", children: "10:53 PM" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 90,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 88,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "msg-action", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(corner_up_right_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 96,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 95,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 94,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 93,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Toggle, { className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 104,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 103,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 102,
                  columnNumber: 41
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 101,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: "Forward" }, void 0, false, {
                    fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                    lineNumber: 109,
                    columnNumber: 41
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: "Copy" }, void 0, false, {
                    fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                    lineNumber: 110,
                    columnNumber: 41
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 108,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 100,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 92,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 87,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 58,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "media media-attachment received", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: avatar9_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 119,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 118,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body msg-docs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "msg-box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-file-zip-fill" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 127,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 126,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 125,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "file-name", children: "themeforest-pack.zip" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 131,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "file-size", children: "2.45 GB" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 132,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 130,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 124,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "file-overlay", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "btn btn-sm btn-icon btn-rounded btn-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(arrow_down_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 138,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 137,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 136,
              columnNumber: 101
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 136,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 135,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 123,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "msg-action", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(corner_up_right_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 147,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 146,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 145,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 144,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Toggle, { className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 155,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 154,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 153,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 152,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: "Forward" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 160,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: "Copy" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 161,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 159,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 151,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 143,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 122,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 121,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
        lineNumber: 117,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "day-sep", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Today" }, void 0, false, {
        fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
        lineNumber: 169,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
        lineNumber: 168,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "media sent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "msg-box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "I need you help in it." }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 175,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "chat-time", children: "11:52 PM" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 176,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 174,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "msg-action", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(corner_up_right_default, {}, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 182,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 181,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 180,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 179,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Toggle, { className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 190,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 189,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 188,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 187,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: "Forward" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 195,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: "Copy" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 196,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 194,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 186,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 178,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
        lineNumber: 173,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
        lineNumber: 172,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
        lineNumber: 171,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "media sent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "msg-box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Haha, this joke is hilarious. Is it what your heart feel about the salary? \u{1F60D}" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 207,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "chat-time", children: "10:52 PM" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 208,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 206,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "msg-action", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(corner_up_right_default, {}, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 214,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 213,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 212,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 211,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Toggle, { className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 222,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 221,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 220,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 219,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: "Forward" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 227,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: "Copy" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 228,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 226,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 218,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 210,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
        lineNumber: 205,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
        lineNumber: 204,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
        lineNumber: 203,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "media received", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: avatar10_default, alt: "user", className: "avatar-img" }, void 0, false, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 237,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 236,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "msg-box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Hey Ben, just a reminder that you are coming for the meeting today in the conference. We are proposing a change in the client briefing." }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 242,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "chat-time", children: "9:20 AM" }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 243,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 241,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "msg-action", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(corner_up_right_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 249,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 248,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 247,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 246,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Toggle, { className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 257,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 256,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 255,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 254,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: "Forward" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 262,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: "Copy" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 263,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 261,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 253,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 245,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 240,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 239,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
        lineNumber: 235,
        columnNumber: 17
      }, this),
      messages.map((elem, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: (0, import_classnames.default)("media", elem.types), children: [
        elem.types === "received" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: [
          elem.avatar.type === "img" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: elem.avatar.src, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 272,
            columnNumber: 64
          }, this),
          elem.avatar.type === "init" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `avatar avatar-xs avatar-${elem.avatar.variant} avatar-rounded`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: elem.avatar.title }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 274,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 273,
            columnNumber: 65
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 271,
          columnNumber: 59
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "msg-box", id: "msg-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: elem.text }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 280,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "chat-time", children: elem.time }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 281,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 279,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "msg-action", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(corner_up_right_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 287,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 286,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 285,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 284,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 295,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 294,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 293,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 292,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: "Forward" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 300,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: "Copy" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                  lineNumber: 301,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
                lineNumber: 299,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
              lineNumber: 291,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
            lineNumber: 283,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 278,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
          lineNumber: 277,
          columnNumber: 29
        }, this)
      ] }, index, true, {
        fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
        lineNumber: 270,
        columnNumber: 48
      }, this))
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { ref: scrollRef }, void 0, false, {
      fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
      lineNumber: 309,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/group/GroupChatBody.jsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
};
_s2(GroupChatBody, "cVNVUFABHtus1y2lW74ypBWPcsY=", false, function() {
  return [useGlobalStateContext];
});
_c2 = GroupChatBody;
var GroupChatBody_default = GroupChatBody;
var _c2;
$RefreshReg$(_c2, "GroupChatBody");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat/group/GroupList.jsx
var import_react4 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// app/data/chat/group-list.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/chat/group-list.js"
  );
  import.meta.hot.lastModified = "1732600247876.562";
}
var groupList = [
  {
    id: 12,
    group: "Developers Stage",
    avatar: { type: "img", src: avatar1_default },
    lastChat: "Code builders & reviewers stage",
    status: "Active 5min ago"
  },
  {
    id: 13,
    group: "Designer'ss",
    avatar: { type: "img", src: avatar8_default },
    lastChat: "Don't know how  I did it? \u{1F60D}",
    status: "Active 7min ago"
  },
  {
    id: 14,
    group: "Hencework",
    initAvatar: { type: "init", title: "H", variant: "primary" },
    lastChat: "Hi There, I am using Jampack",
    status: "Active 8min ago"
  },
  {
    id: 15,
    group: "Support Team",
    avatar: { type: "img", src: avatar5_default },
    lastChat: "contact@hencework.com",
    status: "Active 5min ago"
  },
  {
    id: 16,
    group: "Jampack Team",
    avatar: { type: "img", src: avatar7_default },
    lastChat: "Working on wonders :)",
    status: "Active 1min ago"
  },
  {
    id: 17,
    group: "Management",
    initAvatar: { type: "init", title: "M", variant: "soft-danger" },
    lastChat: "No calls, telepathy only",
    status: "Active 5min ago"
  }
];
var group_list_default = groupList;

// app/routes/apps/chat/group/GroupList.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/group/GroupList.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/group/GroupList.jsx"
  );
  import.meta.hot.lastModified = "1732600247908.895";
}
var GroupList = () => {
  _s3();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  const [list, setList] = (0, import_react4.useState)(group_list_default);
  const [searchTerm, setSearchTerm] = (0, import_react4.useState)("");
  const [showInviteModal, setShowInviteModal] = (0, import_react4.useState)(false);
  const width = useWindowWidth();
  const Conversation = (index) => {
    list[index].avatar ? dispatch({
      type: "select_group",
      grpId: list[index].id,
      grpAvatar: list[index].avatar,
      groupName: list[index].group,
      grpStatus: list[index].status
    }) : dispatch({
      type: "select_group",
      grpId: list[index].id,
      grpAvatar: list[index].initAvatar,
      groupName: list[index].group,
      grpStatus: list[index].status
    });
    if (width <= 991) {
      dispatch({
        type: "start_chat"
      });
      dispatch({
        type: "top_nav_toggle"
      });
    }
  };
  const searchFilter = (event) => {
    setSearchTerm(event.target.value);
    var updatedList = [...group_list_default];
    updatedList = updatedList.filter((item) => searchTerm.length > 1 ? item.group.toString().toLowerCase().includes(searchTerm.toLocaleLowerCase()) : item);
    setList(updatedList);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InvitePeopleModal_default, { show: showInviteModal, onClose: () => setShowInviteModal(!showInviteModal) }, void 0, false, {
      fileName: "app/routes/apps/chat/group/GroupList.jsx",
      lineNumber: 75,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "chatapp-aside", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("header", { className: "aside-header", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { as: Link, to: "#", className: "chatapp-title link-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Groups" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 80,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 79,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { as: Link, to: "/apps/chat/chats", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(message_square_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 85,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 84,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Chats" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 87,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupList.jsx",
              lineNumber: 83,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { as: Link, to: "/apps/chat/contact", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(book_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 91,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 90,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Contacts" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 93,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupList.jsx",
              lineNumber: 89,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { as: Link, to: "/apps/chat/group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(user_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 97,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 96,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Groups" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 99,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupList.jsx",
              lineNumber: 95,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(archive_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 103,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 102,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Archived" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 105,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupList.jsx",
              lineNumber: 101,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(star_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 109,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 108,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Favorites" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 111,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupList.jsx",
              lineNumber: 107,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 82,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/GroupList.jsx",
          lineNumber: 78,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "d-flex", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { as: Link, to: "#", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret me-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(settings_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupList.jsx",
              lineNumber: 120,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupList.jsx",
              lineNumber: 119,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupList.jsx",
              lineNumber: 118,
              columnNumber: 33
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupList.jsx",
              lineNumber: 117,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(user_check_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 127,
                  columnNumber: 41
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 126,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Active Contacts" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 129,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 125,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(message_square_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 133,
                  columnNumber: 41
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 132,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Chat Requests" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 135,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 131,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(archive_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 139,
                  columnNumber: 41
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 138,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Archived Chats" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 141,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 137,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(toggle_right_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 145,
                  columnNumber: 41
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 144,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Unread Chats" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 147,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 143,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 149,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#", children: "Settings" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 150,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#", children: "Help" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 151,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#", children: "Report a problem	" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 152,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupList.jsx",
              lineNumber: 124,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 116,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "primary", className: "btn-icon btn-rounded", onClick: () => setShowInviteModal(!showInviteModal), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(plus_default, {}, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 158,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 157,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 156,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 155,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/GroupList.jsx",
          lineNumber: 115,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/group/GroupList.jsx",
        lineNumber: 77,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SimpleBar, { style: {
        height: "100%"
      }, className: "aside-body", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default, { className: "aside-search", role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form_default.Control, { type: "text", placeholder: "Search Contacts", value: searchTerm, onChange: searchFilter }, void 0, false, {
          fileName: "app/routes/apps/chat/group/GroupList.jsx",
          lineNumber: 168,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/group/GroupList.jsx",
          lineNumber: 167,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default, { as: "ul", variant: "flush", className: "chat-contacts-list", children: list.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListGroup_default.Item, { as: "li", onClick: () => Conversation(index), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: (0, import_classnames2.default)("media", {
          "active-user read-chat": item.id === states.chatState.grpId
        }), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: item.avatar ? "avatar avatar-sm position-relative avatar-rounded avatar-primary" : `avatar avatar-sm position-relative avatar-rounded avatar-${item.initAvatar.variant}`, children: [
            item.avatar && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: item.avatar.src, alt: "user", className: "avatar-img" }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupList.jsx",
              lineNumber: 177,
              columnNumber: 61
            }, this),
            item.initAvatar && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: item.initAvatar.title }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupList.jsx",
              lineNumber: 178,
              columnNumber: 65
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "badge-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-group-fill text-light" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 181,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 180,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 127 127", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("g", { "data-name": "Ellipse 302", transform: "translate(8 8)", strokeWidth: 3, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("circle", { cx: "55.5", cy: "55.5", r: "55.5", stroke: "currentColor" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 185,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("circle", { cx: "55.5", cy: "55.5", r: "59.5", fill: "currentColor" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 186,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 184,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 183,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupList.jsx",
              lineNumber: 179,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 176,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 175,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-name", children: item.group }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 194,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "user-last-chat", children: item.lastChat }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 195,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupList.jsx",
              lineNumber: 193,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { className: "action-drp", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { href: "#", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "btn-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 202,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 201,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 200,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 199,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#exit", children: "Exit Group" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 207,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#delete", children: "Delete Group" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 208,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#mute", children: "Mute Group" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 209,
                  columnNumber: 53
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { className: "link-danger", href: "#block", children: "Block" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/GroupList.jsx",
                  lineNumber: 210,
                  columnNumber: 53
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/GroupList.jsx",
                lineNumber: 206,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/GroupList.jsx",
              lineNumber: 198,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/GroupList.jsx",
              lineNumber: 197,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 192,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/GroupList.jsx",
          lineNumber: 172,
          columnNumber: 33
        }, this) }, index, false, {
          fileName: "app/routes/apps/chat/group/GroupList.jsx",
          lineNumber: 171,
          columnNumber: 52
        }, this)) }, void 0, false, {
          fileName: "app/routes/apps/chat/group/GroupList.jsx",
          lineNumber: 170,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "title-xs text-uppercase text-primary mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Channels" }, void 0, false, {
          fileName: "app/routes/apps/chat/group/GroupList.jsx",
          lineNumber: 218,
          columnNumber: 80
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/group/GroupList.jsx",
          lineNumber: 218,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default, { variant: "light", className: "channels-list flex-column", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { className: "link-dark", children: "#Developer" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 221,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 220,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { className: "link-dark", children: "#Designer'ss" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 224,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 223,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { className: "link-dark", children: "#HRManagement" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 227,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 226,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { className: "link-dark", children: "#Team_goals" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 230,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 229,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Nav_default.Link, { className: "link-dark", children: "#Support_Themeforest" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 233,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/GroupList.jsx",
            lineNumber: 232,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/GroupList.jsx",
          lineNumber: 219,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/group/GroupList.jsx",
        lineNumber: 164,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/group/GroupList.jsx",
      lineNumber: 76,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/group/GroupList.jsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
};
_s3(GroupList, "8zpXUrN7WBnXx2XEFKQqlBvExeQ=", false, function() {
  return [useGlobalStateContext, useWindowWidth];
});
_c3 = GroupList;
var GroupList_default = GroupList;
var _c3;
$RefreshReg$(_c3, "GroupList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat/group/Info.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/group/Info.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/group/Info.jsx"
  );
  import.meta.hot.lastModified = "1732600247909.733";
}
var Info = ({
  toggleInfo,
  invitePeople
}) => {
  _s4();
  const {
    states
  } = useGlobalStateContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "chat-info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { bsPrefix: "btn-close", className: "info-close", onClick: toggleInfo, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
      fileName: "app/routes/apps/chat/group/Info.jsx",
      lineNumber: 51,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat/group/Info.jsx",
      lineNumber: 50,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-center", children: [
      states.chatState.grpAvatar.type === "img" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-xxl avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: states.chatState.grpAvatar.src, alt: "user", className: "avatar-img" }, void 0, false, {
        fileName: "app/routes/apps/chat/group/Info.jsx",
        lineNumber: 55,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/group/Info.jsx",
        lineNumber: 54,
        columnNumber: 67
      }, this),
      states.chatState.grpAvatar.type === "init" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `avatar avatar-${states.chatState.grpAvatar.variant} avatar-rounded avatar-xxl`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: states.chatState.grpAvatar.title }, void 0, false, {
        fileName: "app/routes/apps/chat/group/Info.jsx",
        lineNumber: 58,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/group/Info.jsx",
        lineNumber: 57,
        columnNumber: 68
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "cp-name text-truncate mt-2", children: states.chatState.groupName }, void 0, false, {
        fileName: "app/routes/apps/chat/group/Info.jsx",
        lineNumber: 60,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-truncate", children: "Code builders & reviewers stage" }, void 0, false, {
        fileName: "app/routes/apps/chat/group/Info.jsx",
        lineNumber: 61,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/group/Info.jsx",
      lineNumber: 53,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tab_default.Container, { defaultActiveKey: "info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default, { justify: true, className: "nav-light nav-tabs nav-segmented-tabs active-theme mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { eventKey: "info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Info" }, void 0, false, {
          fileName: "app/routes/apps/chat/group/Info.jsx",
          lineNumber: 67,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/group/Info.jsx",
          lineNumber: 66,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/group/Info.jsx",
          lineNumber: 65,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { eventKey: "files", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Files" }, void 0, false, {
          fileName: "app/routes/apps/chat/group/Info.jsx",
          lineNumber: 72,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/group/Info.jsx",
          lineNumber: 71,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/group/Info.jsx",
          lineNumber: 70,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/group/Info.jsx",
        lineNumber: 64,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tab_default.Content, { className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tab_default.Pane, { eventKey: "info", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default, { role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Control, { type: "text", placeholder: "Search in conversation" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Info.jsx",
            lineNumber: 79,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Info.jsx",
            lineNumber: 78,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "collapse-simple mt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "grp_members", title: "Members", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "hk-list", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: "top", title: "Hencework", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 87,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 86,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 85,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 84,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: "top", title: "Morgan", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 94,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 93,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 92,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 91,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: "top", title: "Charlie", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 101,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 100,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 99,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 98,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: "top", title: "Morgan", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar7_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 108,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 107,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_badge_default, { bg: "success", indicator: true, className: "badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 110,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 106,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 105,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: "top", title: "Katherine", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar9_default, alt: "user", className: "avatar-img" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 116,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 115,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 114,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 113,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: "top", title: "Danial", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar10_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 123,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 122,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_badge_default, { bg: "success", indicator: true, className: "badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 125,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 121,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 120,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: "top", title: "Boss", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar15_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 131,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 130,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_badge_default, { bg: "success", indicator: true, className: "badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 133,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 129,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 128,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: "top", title: "Winston", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: "W" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 139,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 138,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 137,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 136,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { href: "#", className: "avatar avatar-sm avatar-icon avatar-soft-light avatar-rounded", onClick: invitePeople, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: "top", title: "Add New", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(plus_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 148,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 147,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 146,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 145,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 144,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 143,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/Info.jsx",
              lineNumber: 83,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/Info.jsx",
              lineNumber: 82,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "grp_general_info", title: "General Info", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "cp-info", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { href: "#", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "cp-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(briefcase_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 163,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 162,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 161,
                  columnNumber: 49
                }, this),
                "Managed by Morgan Freeman"
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 160,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 159,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "cp-icon-wrap", children: "#Developer" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 171,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 170,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 169,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/Info.jsx",
              lineNumber: 158,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/Info.jsx",
              lineNumber: 157,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "grp_settings", title: "Settings", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "cp-action", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { href: "#", children: "Clear Chat" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 180,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 179,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-danger", children: "Block Contact" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 186,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 185,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 184,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { href: "#", children: "Somthing's Wrong" }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 190,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 189,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/Info.jsx",
              lineNumber: 178,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/Info.jsx",
              lineNumber: 177,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/group/Info.jsx",
            lineNumber: 81,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/Info.jsx",
          lineNumber: 77,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tab_default.Pane, { eventKey: "files", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default, { role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Control, { type: "text", className: "search-files", placeholder: "Search files" }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Info.jsx",
            lineNumber: 200,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/group/Info.jsx",
            lineNumber: 199,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "collapse-simple mt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "grp_files_collapse", title: "Yesterday", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "cp-files", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-blue", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-file-excel-2-fill" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 210,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 209,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 208,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 207,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "website_content.exl" }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 216,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "2,635 KB" }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 217,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 215,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 224,
                      columnNumber: 73
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 223,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 222,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 221,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Download" }, void 0, false, {
                        fileName: "app/routes/apps/chat/group/Info.jsx",
                        lineNumber: 229,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Delete" }, void 0, false, {
                        fileName: "app/routes/apps/chat/group/Info.jsx",
                        lineNumber: 230,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 228,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 220,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 219,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 214,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 206,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 205,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-file-text-fill" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 242,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 241,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 240,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 239,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "jampack.pdf" }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 248,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "1.3 GB" }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 249,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 247,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 256,
                      columnNumber: 73
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 255,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 254,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 253,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Download" }, void 0, false, {
                        fileName: "app/routes/apps/chat/group/Info.jsx",
                        lineNumber: 261,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Delete" }, void 0, false, {
                        fileName: "app/routes/apps/chat/group/Info.jsx",
                        lineNumber: 262,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 260,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 252,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 251,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 246,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 238,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 237,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-file-zip-fill" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 274,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 273,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 272,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 271,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "themeforest-pack.zip" }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 280,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "2.45 GB" }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 281,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 279,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 288,
                      columnNumber: 73
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 287,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 286,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 285,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Download" }, void 0, false, {
                        fileName: "app/routes/apps/chat/group/Info.jsx",
                        lineNumber: 293,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Delete" }, void 0, false, {
                        fileName: "app/routes/apps/chat/group/Info.jsx",
                        lineNumber: 294,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 292,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 284,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 283,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 278,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 270,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 269,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-logo avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar1_default, alt: "user" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 306,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 305,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 304,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 303,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "bruce-mars-fiEG-Pk6ZASFPk6ZASF" }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 312,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "4,178 KB" }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 313,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 311,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 320,
                      columnNumber: 73
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 319,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 318,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 317,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Download" }, void 0, false, {
                        fileName: "app/routes/apps/chat/group/Info.jsx",
                        lineNumber: 325,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Delete" }, void 0, false, {
                        fileName: "app/routes/apps/chat/group/Info.jsx",
                        lineNumber: 326,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 324,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 316,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 315,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 310,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 302,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 301,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-logo avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar2_default, alt: "user" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 338,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 337,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 336,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 335,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "jonas-kakaroto-KIPqvvTKIPqvvT" }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 344,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "951 KB" }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 345,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 343,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 352,
                      columnNumber: 73
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 351,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 350,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 349,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Download" }, void 0, false, {
                        fileName: "app/routes/apps/chat/group/Info.jsx",
                        lineNumber: 357,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Delete" }, void 0, false, {
                        fileName: "app/routes/apps/chat/group/Info.jsx",
                        lineNumber: 358,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 356,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 348,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 347,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 342,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 334,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 333,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/Info.jsx",
              lineNumber: 204,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/Info.jsx",
              lineNumber: 203,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "grp_files_collapse_1", title: "23 April", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "cp-files", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-keynote-fill" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 374,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 373,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 372,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 371,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "presentation.keynote" }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 380,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "20 KB" }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 381,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 379,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 388,
                      columnNumber: 73
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 387,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 386,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 385,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Download" }, void 0, false, {
                        fileName: "app/routes/apps/chat/group/Info.jsx",
                        lineNumber: 393,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Delete" }, void 0, false, {
                        fileName: "app/routes/apps/chat/group/Info.jsx",
                        lineNumber: 394,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 392,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 384,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 383,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 378,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 370,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 369,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-file-zip-fill" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 406,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 405,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 404,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 403,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "PACK-TRIAL.zip" }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 412,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "2.45 GB" }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 413,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 411,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 420,
                      columnNumber: 73
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 419,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 418,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 417,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Download" }, void 0, false, {
                        fileName: "app/routes/apps/chat/group/Info.jsx",
                        lineNumber: 425,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Delete" }, void 0, false, {
                        fileName: "app/routes/apps/chat/group/Info.jsx",
                        lineNumber: 426,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 424,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 416,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 415,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 410,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 402,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 401,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: img_thumb1_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 437,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 436,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 435,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "joel-mott-LaK153ghdigaghdi" }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 442,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "3,028 KB" }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 443,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 441,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 450,
                      columnNumber: 73
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 449,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 448,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 447,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Download" }, void 0, false, {
                        fileName: "app/routes/apps/chat/group/Info.jsx",
                        lineNumber: 455,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Delete" }, void 0, false, {
                        fileName: "app/routes/apps/chat/group/Info.jsx",
                        lineNumber: 456,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/chat/group/Info.jsx",
                      lineNumber: 454,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 446,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/chat/group/Info.jsx",
                    lineNumber: 445,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/group/Info.jsx",
                  lineNumber: 440,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 434,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/group/Info.jsx",
                lineNumber: 433,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/group/Info.jsx",
              lineNumber: 368,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/group/Info.jsx",
              lineNumber: 367,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/group/Info.jsx",
            lineNumber: 202,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/group/Info.jsx",
          lineNumber: 198,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/group/Info.jsx",
        lineNumber: 76,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/group/Info.jsx",
      lineNumber: 63,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/group/Info.jsx",
    lineNumber: 49,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/chat/group/Info.jsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
};
_s4(Info, "oY54iNWwa1au3l43YGO9iqatCoY=", false, function() {
  return [useGlobalStateContext];
});
_c4 = Info;
var Info_default = Info;
var _c4;
$RefreshReg$(_c4, "Info");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat/group/route.jsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/group/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/group/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247910.247";
}
var ChatGroups = () => {
  _s5();
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: (0, import_classnames3.default)("chatapp-wrap", {
    "chatapp-info-active": showInfo
  }, {
    "chatapp-slide": states.chatState.startChat
  }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "chatapp-content", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(GroupList_default, {}, void 0, false, {
      fileName: "app/routes/apps/chat/group/route.jsx",
      lineNumber: 54,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "chatapp-single-chat", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ChatHeader_default, { infoState: showInfo, infoToggle: () => setShowInfo(!showInfo), invitePeople: () => setInvitePeople(!invitePeople) }, void 0, false, {
        fileName: "app/routes/apps/chat/group/route.jsx",
        lineNumber: 56,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(GroupChatBody_default, {}, void 0, false, {
        fileName: "app/routes/apps/chat/group/route.jsx",
        lineNumber: 57,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Footer_default, {}, void 0, false, {
        fileName: "app/routes/apps/chat/group/route.jsx",
        lineNumber: 59,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Info_default, { toggleInfo: () => setShowInfo(!showInfo), invitePeople: () => setInvitePeople(!invitePeople) }, void 0, false, {
        fileName: "app/routes/apps/chat/group/route.jsx",
        lineNumber: 60,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/group/route.jsx",
      lineNumber: 55,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(InvitePeopleModal_default, { show: invitePeople, onClose: () => setInvitePeople(!invitePeople) }, void 0, false, {
      fileName: "app/routes/apps/chat/group/route.jsx",
      lineNumber: 63,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/group/route.jsx",
    lineNumber: 53,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/chat/group/route.jsx",
    lineNumber: 48,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/chat/group/route.jsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
};
_s5(ChatGroups, "W6nacLUVs7NaumYv0B+lvNkgWV8=", false, function() {
  return [useGlobalStateContext, useWindowWidth];
});
_c5 = ChatGroups;
var route_default = ChatGroups;
var _c5;
$RefreshReg$(_c5, "ChatGroups");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/chat/group/route-6VHIJJUQ.js.map
