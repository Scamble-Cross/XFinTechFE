import {
  avatar6_default
} from "/build/_shared/chunk-CWUICKJG.js";
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
  archive_default,
  chevron_down_default,
  chevron_left_default,
  chevron_up_default,
  external_link_default,
  help_circle_default,
  info_default,
  maximize_default,
  mic_default,
  minimize_default,
  more_vertical_default,
  phone_default,
  slash_default,
  star_default,
  user_plus_default,
  video_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  Button_default,
  Dropdown_default,
  Form_default,
  Modal_default
} from "/build/_shared/chunk-KBRVI47E.js";
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
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  Link,
  useLocation
} from "/build/_shared/chunk-OQSN7HAE.js";
import {
  createHotContext
} from "/build/_shared/chunk-7UABGPEU.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/apps/chat/InvitePeopleModal.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/InvitePeopleModal.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/InvitePeopleModal.jsx"
  );
  import.meta.hot.lastModified = "1732600247901.37";
}
var InvitePeopleModal = ({
  show,
  onClose
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { show, onHide: onClose, centered: true, dialogClassName: "mw-400p", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Header, { className: "header-wth-bg-inv", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Title, { as: "h5", children: "Invite People" }, void 0, false, {
        fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
        lineNumber: 36,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { bsPrefix: "btn-close", className: "text-white", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
        fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
        lineNumber: 38,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
        lineNumber: 37,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
      lineNumber: 35,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Body, { className: "p-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { className: "m-3", role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { type: "text", className: "rounded-input user-search", placeholder: "Search People" }, void 0, false, {
        fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
        lineNumber: 43,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-350p", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBar, { style: {
        height: "100%"
      }, className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "invite-user-list", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 54,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 53,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 52,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Morgan Freeman" }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 58,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 57,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 51,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck2" }, void 0, false, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 62,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 61,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
          lineNumber: 50,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar7_default, alt: "user", className: "avatar-img" }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 69,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 68,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 67,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Huma Therman" }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 73,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 72,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 66,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck3" }, void 0, false, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 77,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 76,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
          lineNumber: 65,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar3_default, alt: "user", className: "avatar-img" }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 84,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 83,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 82,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Charlie Chaplin" }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 88,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 87,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 81,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck4" }, void 0, false, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 92,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 91,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
          lineNumber: 80,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "W" }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 99,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 98,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 97,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Winston Churchil" }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 103,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 102,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 96,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck5" }, void 0, false, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 107,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 106,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
          lineNumber: 95,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar1_default, alt: "user", className: "avatar-img" }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 115,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 114,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 113,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Office Board" }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 119,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 118,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 112,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck6" }, void 0, false, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 123,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 122,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
          lineNumber: 111,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar6_default, alt: "user", className: "avatar-img" }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 131,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 130,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 129,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Boss Baby" }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 135,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 134,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 128,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck7" }, void 0, false, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 139,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 138,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
          lineNumber: 127,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media d-flex align-items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: avatar5_default, alt: "user", className: "avatar-img" }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 147,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 146,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 145,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-name", children: "Jaquiline Joker" }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 151,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
              lineNumber: 150,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 144,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Check, { type: "checkbox", id: "customCheck8" }, void 0, false, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 155,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
            lineNumber: 154,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
          lineNumber: 143,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
        lineNumber: 49,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
        lineNumber: 46,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
        lineNumber: 45,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Footer, { className: "justify-content-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "light", className: "flex-fill flex-1", onClick: onClose, children: "Cancel" }, void 0, false, {
        fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
        lineNumber: 164,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", className: "flex-fill flex-1", children: "Invite for chat" }, void 0, false, {
        fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
        lineNumber: 165,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
      lineNumber: 163,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/InvitePeopleModal.jsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_c = InvitePeopleModal;
var InvitePeopleModal_default = InvitePeopleModal;
var _c;
$RefreshReg$(_c, "InvitePeopleModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat/ChatHeader.jsx
var import_react4 = __toESM(require_react(), 1);
var import_classnames = __toESM(require_classnames(), 1);

// app/routes/apps/chat/AudioCallModal.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/AudioCallModal.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/AudioCallModal.jsx"
  );
  import.meta.hot.lastModified = "1732600247900.275";
}
var AudioCallModal = ({
  show,
  hide
}) => {
  _s();
  const [fullScreen, setFullScreen] = (0, import_react.useState)(false);
  const {
    states
  } = useGlobalStateContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default, { show, onHide: hide, fullscreen: fullScreen, centered: true, size: "xl", dialogClassName: "chatapp-call-window", className: "ps-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Header, { className: "header-wth-bg", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Title, { as: "h6", className: "text-muted", children: "Jampack Audio Call" }, void 0, false, {
        fileName: "app/routes/apps/chat/AudioCallModal.jsx",
        lineNumber: 40,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "modal-action", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover modal-fullscreen-togglable", onClick: () => setFullScreen(!fullScreen), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: fullScreen ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(minimize_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 45,
          columnNumber: 47
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(maximize_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 45,
          columnNumber: 68
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 44,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 43,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 42,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "flush-dark", size: "xs", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(help_circle_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 52,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 51,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 50,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 49,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/AudioCallModal.jsx",
        lineNumber: 41,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/AudioCallModal.jsx",
      lineNumber: 39,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Body, { children: [
      states.chatState.avatar.type === "img" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xxxl avatar-rounded d-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: states.chatState.avatar.src, alt: "user", className: "avatar-img" }, void 0, false, {
        fileName: "app/routes/apps/chat/AudioCallModal.jsx",
        lineNumber: 60,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/AudioCallModal.jsx",
        lineNumber: 59,
        columnNumber: 60
      }, this),
      states.chatState.avatar.type === "init" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `avatar avatar-${states.chatState.avatar.variant} avatar-rounded avatar-xxl`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: states.chatState.avatar.title }, void 0, false, {
        fileName: "app/routes/apps/chat/AudioCallModal.jsx",
        lineNumber: 63,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/AudioCallModal.jsx",
        lineNumber: 62,
        columnNumber: 61
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "mt-3", children: states.chatState.userName }, void 0, false, {
        fileName: "app/routes/apps/chat/AudioCallModal.jsx",
        lineNumber: 65,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        "Audio Calling",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "one", children: "." }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 66,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "two", children: "." }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 66,
          columnNumber: 63
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "three", children: "." }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 66,
          columnNumber: 93
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/AudioCallModal.jsx",
        lineNumber: 66,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/AudioCallModal.jsx",
      lineNumber: 58,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Modal_default.Footer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "chatapp-call-action hk-list", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "soft-light", className: "btn-icon btn-lg btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(mic_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 74,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 73,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 72,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 71,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 70,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "soft-light", className: "btn-icon btn-lg btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(video_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 83,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 82,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 81,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 80,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 79,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "danger", className: "btn-icon btn-lg btn-rounded", onClick: hide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(phone_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 92,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 91,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 90,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 89,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 88,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "soft-light", className: "btn-icon btn-lg btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(user_plus_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 101,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 100,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 99,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 98,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 97,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { variant: "soft-light", className: "btn-icon btn-lg btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(more_vertical_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 110,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 109,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 108,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 107,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/AudioCallModal.jsx",
          lineNumber: 106,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/AudioCallModal.jsx",
        lineNumber: 69,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-lg avatar-rounded chatapp-caller-img", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
        fileName: "app/routes/apps/chat/AudioCallModal.jsx",
        lineNumber: 117,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/AudioCallModal.jsx",
        lineNumber: 116,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/AudioCallModal.jsx",
      lineNumber: 68,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/AudioCallModal.jsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
};
_s(AudioCallModal, "dHj2vv40HDa//F9p+5dAX1QjKrc=", false, function() {
  return [useGlobalStateContext];
});
_c2 = AudioCallModal;
var AudioCallModal_default = AudioCallModal;
var _c2;
$RefreshReg$(_c2, "AudioCallModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat/VideoCallModal.jsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/VideoCallModal.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/VideoCallModal.jsx"
  );
  import.meta.hot.lastModified = "1732600247901.738";
}
var VideoCallModal = ({
  show,
  hide
}) => {
  _s2();
  const [fullScreen, setFullScreen] = (0, import_react2.useState)(false);
  const {
    states
  } = useGlobalStateContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal_default, { show, onHide: hide, fullscreen: fullScreen, size: "xl", centered: true, dialogClassName: "chatapp-call-window", className: "ps-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "modal-content bg-primary-dark-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal_default.Header, { className: "header-wth-bg bg-primary-dark-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal_default.Title, { as: "h6", className: "text-muted", children: "Jampack  Video Call" }, void 0, false, {
        fileName: "app/routes/apps/chat/VideoCallModal.jsx",
        lineNumber: 42,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "modal-action", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { href: "#", className: "btn btn-xs btn-icon btn-rounded btn-link link-secondary modal-fullscreen-togglable", onClick: () => setFullScreen(!fullScreen), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: fullScreen ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(minimize_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 47,
          columnNumber: 51
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(maximize_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 47,
          columnNumber: 72
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 46,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 45,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 44,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { href: "#", className: "btn btn-xs btn-icon btn-rounded btn-link link-secondary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(help_circle_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 54,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 53,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 52,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 51,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/VideoCallModal.jsx",
        lineNumber: 43,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/VideoCallModal.jsx",
      lineNumber: 41,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal_default.Body, { children: [
      states.chatState.avatar.type === "img" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xxxl avatar-rounded d-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: states.chatState.avatar.src, alt: "user", className: "avatar-img" }, void 0, false, {
        fileName: "app/routes/apps/chat/VideoCallModal.jsx",
        lineNumber: 62,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/VideoCallModal.jsx",
        lineNumber: 61,
        columnNumber: 64
      }, this),
      states.chatState.avatar.type === "init" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `avatar avatar-${states.chatState.avatar.variant} avatar-rounded avatar-xxl`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: states.chatState.avatar.title }, void 0, false, {
        fileName: "app/routes/apps/chat/VideoCallModal.jsx",
        lineNumber: 65,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/VideoCallModal.jsx",
        lineNumber: 64,
        columnNumber: 65
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-white mt-3", children: states.chatState.userName }, void 0, false, {
        fileName: "app/routes/apps/chat/VideoCallModal.jsx",
        lineNumber: 67,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-white", children: [
        "Video Calling",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "one", children: "." }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 68,
          columnNumber: 60
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "two", children: "." }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 68,
          columnNumber: 90
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "three", children: "." }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 68,
          columnNumber: 120
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/VideoCallModal.jsx",
        lineNumber: 68,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/VideoCallModal.jsx",
      lineNumber: 60,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Modal_default.Footer, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "chatapp-call-action hk-list", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "dark", className: "btn-icon btn-lg btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(mic_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 76,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 75,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 74,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 73,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 72,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "dark", className: "btn-icon btn-lg btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(video_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 85,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 84,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 83,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 82,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 81,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "danger", className: "btn-icon btn-lg btn-rounded", onClick: hide, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(phone_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 94,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 93,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 92,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 91,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 90,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "dark", className: "btn-icon btn-lg btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(user_plus_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 103,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 102,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 101,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 100,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 99,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "dark", className: "btn-icon btn-lg btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_vertical_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 112,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 111,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 110,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 109,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/VideoCallModal.jsx",
          lineNumber: 108,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/VideoCallModal.jsx",
        lineNumber: 71,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-lg avatar-rounded chatapp-caller-img", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: avatar13_default, alt: "user", className: "avatar-img" }, void 0, false, {
        fileName: "app/routes/apps/chat/VideoCallModal.jsx",
        lineNumber: 119,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/VideoCallModal.jsx",
        lineNumber: 118,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/VideoCallModal.jsx",
      lineNumber: 70,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/VideoCallModal.jsx",
    lineNumber: 40,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/chat/VideoCallModal.jsx",
    lineNumber: 39,
    columnNumber: 10
  }, this);
};
_s2(VideoCallModal, "dHj2vv40HDa//F9p+5dAX1QjKrc=", false, function() {
  return [useGlobalStateContext];
});
_c3 = VideoCallModal;
var VideoCallModal_default = VideoCallModal;
var _c3;
$RefreshReg$(_c3, "VideoCallModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat/ChatHeader.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/ChatHeader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/ChatHeader.jsx"
  );
  import.meta.hot.lastModified = "1732600247901.025";
}
var ChatHeader = ({
  infoState,
  infoToggle,
  invitePeople
}) => {
  _s3();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  const [audioCall, setAudioCall] = (0, import_react4.useState)(false);
  const [videoCall, setVideoCall] = (0, import_react4.useState)(false);
  const {
    pathname
  } = useLocation();
  const chatsRoute = pathname.match("/apps/chat/chats");
  const groupRoutes = pathname.match("/apps/chat/group");
  const contactsRoute = pathname.match("/apps/chat/contact");
  const BackToContactList = () => {
    dispatch({
      type: "start_chat"
    });
    dispatch({
      type: "top_nav_toggle"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { className: "chat-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { as: "a", href: "#", variant: "flush-dark", size: "sm", className: "btn-icon btn-rounded flush-soft-hover back-user-list", onClick: BackToContactList, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(chevron_left_default, {}, void 0, false, {
        fileName: "app/routes/apps/chat/ChatHeader.jsx",
        lineNumber: 66,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/ChatHeader.jsx",
        lineNumber: 65,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/ChatHeader.jsx",
        lineNumber: 64,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/ChatHeader.jsx",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      chatsRoute && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
          states.chatState.avatar.type === "img" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: states.chatState.avatar.src, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 73,
            columnNumber: 76
          }, this),
          states.chatState.avatar.type === "init" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `avatar avatar-sm avatar-${states.chatState.avatar.variant} avatar-rounded`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: states.chatState.avatar.title }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 75,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 74,
            columnNumber: 77
          }, this),
          (states.chatState.status === "Online" || states.chatState.status === "Typing") && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_badge_default, { bg: "success", indicator: true, className: "badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 77,
            columnNumber: 116
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 72,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 71,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "user-name", children: states.chatState.userName }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 81,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "user-status", children: [
            states.chatState.status,
            states.chatState.status === "Typing" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "one", children: "." }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 84,
                columnNumber: 76
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "two", children: "." }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 84,
                columnNumber: 106
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "three", children: "." }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 84,
                columnNumber: 136
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/ChatHeader.jsx",
              lineNumber: 84,
              columnNumber: 74
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 82,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 80,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/ChatHeader.jsx",
        lineNumber: 70,
        columnNumber: 32
      }, this),
      groupRoutes && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: states.chatState.grpAvatar.type === "img" ? "avatar avatar-sm position-relative avatar-rounded avatar-primary" : `avatar avatar-sm position-relative avatar-rounded avatar-${states.chatState.grpAvatar.variant}`, children: [
          states.chatState.grpAvatar.type === "img" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: states.chatState.grpAvatar.src, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 92,
            columnNumber: 75
          }, this),
          states.chatState.grpAvatar.type === "init" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: states.chatState.grpAvatar.title }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 93,
            columnNumber: 76
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "badge-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-group-fill text-light" }, void 0, false, {
              fileName: "app/routes/apps/chat/ChatHeader.jsx",
              lineNumber: 96,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/ChatHeader.jsx",
              lineNumber: 95,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141 141", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("g", { transform: "translate(-79 -975)", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M70.5,0A70.5,70.5,0,1,1,0,70.5,70.5,70.5,0,0,1,70.5,0Z", transform: "translate(79 975)", fill: "#fff" }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 100,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M55.5,0A55.5,55.5,0,1,1,0,55.5,55.5,55.5,0,0,1,55.5,0Z", transform: "translate(94 990)", fill: "#fff" }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 101,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/ChatHeader.jsx",
              lineNumber: 99,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/ChatHeader.jsx",
              lineNumber: 98,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 94,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 91,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 90,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "user-name", children: states.chatState.groupName }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 108,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "user-status", children: states.chatState.grpStatus }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 109,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 107,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/ChatHeader.jsx",
        lineNumber: 89,
        columnNumber: 33
      }, this),
      contactsRoute && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar2_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 116,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_badge_default, { bg: "success", indicator: true, className: "badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 117,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 115,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 114,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "user-name", children: "Alan Rickman" }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 121,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "user-status", children: "Online" }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 122,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 120,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/ChatHeader.jsx",
        lineNumber: 113,
        columnNumber: 35
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "chat-options-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover d-none d-xl-block", onClick: invitePeople, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Invite people", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(user_plus_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 130,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 129,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 128,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 127,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover d-none d-xl-block", onClick: () => setAudioCall(!audioCall), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Audio Call", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(phone_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 138,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 137,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 136,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 135,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 134,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover d-none d-xl-block", onClick: () => setVideoCall(!videoCall), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Video Call", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(video_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 146,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 145,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 144,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 143,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: (0, import_classnames.default)("btn-icon btn-rounded flush-soft-hover chatapp-info-toggle", {
          "active": infoState
        }), onClick: infoToggle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(info_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 156,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 155,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 154,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 153,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 150,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { className: "inline-block ms-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { as: "a", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "More", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 165,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 164,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 163,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 162,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "d-xl-none", onClick: invitePeople, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(user_plus_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 172,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 171,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Invite People" }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 174,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/ChatHeader.jsx",
              lineNumber: 170,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "d-xl-none", onClick: () => setAudioCall(!audioCall), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(phone_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 178,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 177,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Audio Call" }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 180,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/ChatHeader.jsx",
              lineNumber: 176,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "d-xl-none", onClick: () => setVideoCall(!videoCall), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(video_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 184,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 183,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Video Call" }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 186,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/ChatHeader.jsx",
              lineNumber: 182,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Divider, { className: "d-xl-none" }, void 0, false, {
              fileName: "app/routes/apps/chat/ChatHeader.jsx",
              lineNumber: 188,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(star_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 191,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 190,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Stared Messages" }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 193,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/ChatHeader.jsx",
              lineNumber: 189,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(archive_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 196,
                columnNumber: 33
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 195,
                columnNumber: 44
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Archive Messages" }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 198,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/ChatHeader.jsx",
              lineNumber: 195,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
              fileName: "app/routes/apps/chat/ChatHeader.jsx",
              lineNumber: 200,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(slash_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 202,
                columnNumber: 33
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 201,
                columnNumber: 44
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Block Content" }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 204,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/ChatHeader.jsx",
              lineNumber: 201,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(external_link_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 207,
                columnNumber: 33
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 206,
                columnNumber: 44
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: "Feedback" }, void 0, false, {
                fileName: "app/routes/apps/chat/ChatHeader.jsx",
                lineNumber: 209,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/ChatHeader.jsx",
              lineNumber: 206,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/ChatHeader.jsx",
            lineNumber: 169,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 161,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { as: "a", variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover hk-navbar-togglable d-none d-lg-block", onClick: () => dispatch({
          type: "top_nav_toggle"
        }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HkTooltip_default, { placement: states.layoutState.topNavCollapse ? "bottom" : "top", title: "Collapse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: states.layoutState.topNavCollapse ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(chevron_down_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 219,
          columnNumber: 74
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(chevron_up_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 219,
          columnNumber: 92
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 218,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 217,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 216,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatHeader.jsx",
          lineNumber: 213,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/ChatHeader.jsx",
        lineNumber: 126,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/ChatHeader.jsx",
      lineNumber: 62,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AudioCallModal_default, { show: audioCall, hide: () => setAudioCall(!audioCall) }, void 0, false, {
      fileName: "app/routes/apps/chat/ChatHeader.jsx",
      lineNumber: 228,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(VideoCallModal_default, { show: videoCall, hide: () => setVideoCall(!videoCall) }, void 0, false, {
      fileName: "app/routes/apps/chat/ChatHeader.jsx",
      lineNumber: 230,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/ChatHeader.jsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
};
_s3(ChatHeader, "ZVIHCcloN2ciqQ383kpLuzvlypY=", false, function() {
  return [useGlobalStateContext, useLocation];
});
_c4 = ChatHeader;
var ChatHeader_default = ChatHeader;
var _c4;
$RefreshReg$(_c4, "ChatHeader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  InvitePeopleModal_default,
  ChatHeader_default
};
//# sourceMappingURL=/build/_shared/chunk-HYPZDSHF.js.map
