import {
  img_thumb1_default
} from "/build/_shared/chunk-PZUTWR2K.js";
import {
  faDropbox,
  faFacebook,
  faGithub,
  faGoogle,
  faGoogleDrive
} from "/build/_shared/chunk-GJLLTWNM.js";
import {
  ChatHeader_default,
  InvitePeopleModal_default
} from "/build/_shared/chunk-MGKAKPQR.js";
import {
  hk_collapse_default
} from "/build/_shared/chunk-4E2L3NE2.js";
import "/build/_shared/chunk-CWUICKJG.js";
import "/build/_shared/chunk-JQFY4KQJ.js";
import {
  giphy_default
} from "/build/_shared/chunk-DPNIC2CZ.js";
import {
  avatar15_default
} from "/build/_shared/chunk-ZGGRJ3QC.js";
import {
  FontAwesomeIcon
} from "/build/_shared/chunk-JPGC5R3S.js";
import "/build/_shared/chunk-YWRMJW47.js";
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
  avatar13_default
} from "/build/_shared/chunk-WWUYITJG.js";
import "/build/_shared/chunk-NYEYMOIV.js";
import {
  useWindowWidth
} from "/build/_shared/chunk-RBFUKTHB.js";
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
  mail_default,
  map_pin_default,
  message_square_default,
  more_horizontal_default,
  more_vertical_default,
  phone_call_default,
  phone_default,
  plus_default,
  settings_default,
  share_default,
  smile_default,
  star_default,
  toggle_right_default,
  user_check_default,
  user_default
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
  Link
} from "/build/_shared/chunk-DKEEJ4HZ.js";
import {
  Button_default,
  Dropdown_default,
  Form_default,
  InputGroup_default,
  ListGroup_default,
  Nav_default,
  Tab_default
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

// app/routes/apps/chat/chats/route.jsx
var import_react6 = __toESM(require_react(), 1);

// app/routes/apps/chat/chats/ContactList.jsx
var import_react = __toESM(require_react(), 1);
var import_classnames = __toESM(require_classnames(), 1);

// app/data/chat/contact-list.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/chat/contact-list.js"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var contacts = [
  {
    id: 1,
    name: "Morgan Freeman",
    avatar: { type: "img", src: avatar2_default },
    time: "Yesterday",
    lastChat: "Please send some insights of presentation",
    status: "Online",
    unread: 15
  },
  {
    id: 2,
    name: "Huma Therman",
    avatar: { type: "img", src: avatar8_default },
    time: "10:25PM",
    lastChat: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      "Typing",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "one", children: "." }, void 0, false, {
        fileName: "app/data/chat/contact-list.js",
        lineNumber: 38,
        columnNumber: 27
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "two", children: "." }, void 0, false, {
        fileName: "app/data/chat/contact-list.js",
        lineNumber: 38,
        columnNumber: 57
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "three", children: "." }, void 0, false, {
        fileName: "app/data/chat/contact-list.js",
        lineNumber: 38,
        columnNumber: 87
      }, this)
    ] }, void 0, true, {
      fileName: "app/data/chat/contact-list.js",
      lineNumber: 38,
      columnNumber: 19
    }, this),
    status: "Typing",
    unread: 0
  },
  {
    id: 3,
    name: "Charlie Chaplin",
    avatar: { type: "img", src: avatar13_default },
    time: "5 min",
    lastChat: "Hello mike, thank you for inviting",
    status: "Active 6min ago",
    unread: 2
  },
  {
    id: 4,
    name: "Winston Churchil",
    initAvatar: { type: "init", title: "W", variant: "soft-danger" },
    time: "3:15 PM",
    lastChat: "Show me what reports you have left",
    status: "Active 8min ago",
    unread: 0
  },
  {
    id: 5,
    name: "\u{1F610} Office Board",
    avatar: { type: "img", src: avatar1_default },
    time: "Yesterday",
    lastChat: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      "Huma: great work ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-primary", children: "@jaquiline" }, void 0, false, {
        fileName: "app/data/chat/contact-list.js",
        lineNumber: 65,
        columnNumber: 38
      }, this),
      " you have done a great job"
    ] }, void 0, true, {
      fileName: "app/data/chat/contact-list.js",
      lineNumber: 65,
      columnNumber: 19
    }, this),
    status: "Active 7min ago",
    unread: 0
  },
  {
    id: 6,
    name: "Boss Baby",
    avatar: { type: "img", src: avatar15_default },
    time: "5:23 AM",
    lastChat: "Meeting in the morning",
    status: "Online",
    unread: 0
  },
  {
    id: 7,
    name: "Hencework",
    initAvatar: { type: "init", title: "H", variant: "primary" },
    time: "24 Jan",
    lastChat: "give me the last copy of jampack",
    status: "Active 1min ago",
    unread: 0
  },
  {
    id: 8,
    name: "Jaquiline Joker",
    avatar: { type: "img", src: avatar3_default },
    time: "4:05 AM",
    lastChat: "This is my test chat msg last one",
    status: "Online",
    unread: 37
  },
  {
    id: 9,
    name: "Tom Cruz",
    avatar: { type: "img", src: avatar7_default },
    time: "7:40 PM",
    lastChat: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-danger", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon fe-x me-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(phone_call_default, {}, void 0, false, {
          fileName: "app/data/chat/contact-list.js",
          lineNumber: 101,
          columnNumber: 90
        }, this),
        " "
      ] }, void 0, true, {
        fileName: "app/data/chat/contact-list.js",
        lineNumber: 101,
        columnNumber: 49
      }, this),
      "Missed call"
    ] }, void 0, true, {
      fileName: "app/data/chat/contact-list.js",
      lineNumber: 101,
      columnNumber: 19
    }, this),
    status: "Online",
    unread: 0
  },
  {
    id: 10,
    name: "Katherine Jones",
    avatar: { type: "img", src: avatar9_default },
    time: "Yesterday",
    lastChat: "Hi!!! I was wondering if you are free",
    status: "Active 2min ago",
    unread: 0
  },
  {
    id: 11,
    name: "Danial Craig",
    initAvatar: { type: "init", title: "D", variant: "soft-info" },
    time: "3:15PM",
    lastChat: "Boss is looking for you in the office",
    status: "Active 4min ago",
    unread: 0
  }
];
var contact_list_default = contacts;

// app/routes/apps/chat/chats/ContactList.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/chats/ContactList.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/chats/ContactList.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var ContactList = ({
  invitePeople
}) => {
  _s();
  const {
    states,
    dispatch
  } = useGlobalStateContext();
  const [list, setList] = (0, import_react.useState)(contact_list_default);
  const [searchValue, setSearchValue] = (0, import_react.useState)("");
  const width = useWindowWidth();
  const Conversation = (index, id) => {
    list[index].avatar ? dispatch({
      type: "set_user",
      userId: list[index].id,
      avatar: list[index].avatar,
      userName: list[index].name,
      status: list[index].status
    }) : dispatch({
      type: "set_user",
      userId: list[index].id,
      avatar: list[index].initAvatar,
      userName: list[index].name,
      status: list[index].status
    });
    const updatedContacts = contact_list_default.map((contactList) => contactList.id === id ? {
      ...contactList,
      unread: 0
    } : contactList);
    setList(updatedContacts);
    if (width <= 991) {
      dispatch({
        type: "start_chat"
      });
      dispatch({
        type: "top_nav_toggle"
      });
    }
  };
  const searchOnChange = (event) => {
    setSearchValue(event.target.value);
    var updatedList = [...contact_list_default];
    updatedList = updatedList.filter((item) => searchValue.length > 1 ? item.name.toString().toLowerCase().includes(searchValue.toLocaleLowerCase()) : item);
    setList(updatedList);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "chatapp-aside", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "aside-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Toggle, { as: Link, to: "#", className: "chatapp-title link-dark", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Chat" }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/ContactList.jsx",
          lineNumber: 89,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/ContactList.jsx",
          lineNumber: 88,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Menu, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { as: Link, to: "/apps/chat/chats", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(message_square_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 94,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 93,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Chats" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 96,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 92,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { as: Link, to: "/apps/chat/contact", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(book_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 100,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 99,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Contacts" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 102,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 98,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { as: Link, to: "/apps/chat/group", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(user_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 106,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 105,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Groups" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 108,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 104,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { href: "#", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(archive_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 112,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 111,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Archived" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 114,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 110,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { href: "#", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(star_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 118,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 117,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Favorites" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 120,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 116,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ContactList.jsx",
          lineNumber: 91,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/chats/ContactList.jsx",
        lineNumber: 87,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "d-flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Toggle, { as: "a", href: "#", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret me-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(settings_default, {}, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 129,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 128,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 127,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 126,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { href: "#", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(user_check_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 136,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 135,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Active Contacts" }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 138,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 134,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { href: "#", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(message_square_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 142,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 141,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Chat Requests" }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 144,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 140,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { href: "#", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(archive_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 148,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 147,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Archived Chats" }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 150,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 146,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { href: "#", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(toggle_right_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 154,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 153,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Unread Chats" }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 156,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 152,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 158,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { href: "#", children: "Settings" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 159,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { href: "#", children: "Help" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 160,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { href: "#", children: "Report a problem	" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 161,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 133,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ContactList.jsx",
          lineNumber: 125,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "btn btn-icon btn-rounded btn-primary", onClick: invitePeople, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(plus_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/chats/ContactList.jsx",
          lineNumber: 167,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/ContactList.jsx",
          lineNumber: 166,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/ContactList.jsx",
          lineNumber: 165,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/ContactList.jsx",
          lineNumber: 164,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/chats/ContactList.jsx",
        lineNumber: 124,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/chats/ContactList.jsx",
      lineNumber: 86,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SimpleBar, { style: {
      height: "100%"
    }, className: "aside-body", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default, { className: "aside-search", role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { type: "text", placeholder: "Search Chats", value: searchValue, onChange: searchOnChange }, void 0, false, {
        fileName: "app/routes/apps/chat/chats/ContactList.jsx",
        lineNumber: 177,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/chats/ContactList.jsx",
        lineNumber: 176,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "frequent-contact", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "title-sm text-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { children: "Frequent contact" }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/ContactList.jsx",
          lineNumber: 180,
          columnNumber: 64
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/ContactList.jsx",
          lineNumber: 180,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "hk-list", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-primary position-relative avatar-rounded", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "H" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 184,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "badge-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-group-fill text-light" }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 187,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 186,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 127 127", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("g", { "data-name": "Ellipse 302", transform: "translate(8 8)", strokeWidth: 3, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("circle", { cx: "55.5", cy: "55.5", r: "55.5", stroke: "currentColor" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                  lineNumber: 191,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("circle", { cx: "55.5", cy: "55.5", r: "59.5", fill: "currentColor" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                  lineNumber: 192,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 190,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 189,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 185,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 183,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 182,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-primary position-relative avatar-rounded", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: avatar1_default, alt: "user", className: "avatar-img" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 200,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "badge-icon badge-circle badge-icon-xxs text-white position-bottom-end-overflow-1", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "badge-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-group-fill text-light" }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 203,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 202,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 127 127", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("g", { "data-name": "Ellipse 302", transform: "translate(8 8)", strokeWidth: 3, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("circle", { cx: "55.5", cy: "55.5", r: "55.5", stroke: "currentColor" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                  lineNumber: 207,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("circle", { cx: "55.5", cy: "55.5", r: "59.5", fill: "currentColor" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                  lineNumber: 208,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 206,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 205,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 201,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 199,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 198,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded position-relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: "W" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 216,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 217,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 215,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 214,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: avatar8_default, alt: "user", className: "avatar-img" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 222,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 223,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 221,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 220,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: avatar15_default, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 228,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 227,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 226,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ContactList.jsx",
          lineNumber: 181,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/chats/ContactList.jsx",
        lineNumber: 179,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ListGroup_default, { variant: "flush", className: "chat-contacts-list", children: list.map((elem, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ListGroup_default.Item, { onClick: () => Conversation(index, elem.id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: (0, import_classnames.default)("media", {
        "active-user": elem.id === states.chatState.userId
      }, {
        "read-chat": !elem.unread
      }), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-head", children: [
          elem.avatar && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-sm avatar-rounded position-relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: elem.avatar.src, alt: "user", className: "avatar-img" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 242,
              columnNumber: 49
            }, this),
            elem.status === "online" && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 243,
              columnNumber: 78
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 241,
            columnNumber: 61
          }, this),
          elem.initAvatar && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `avatar avatar-sm avatar-${elem.initAvatar.variant} avatar-rounded`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: elem.initAvatar.title }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 246,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 245,
            columnNumber: 65
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ContactList.jsx",
          lineNumber: 240,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "user-name", children: elem.name }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 251,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "user-last-chat", children: elem.lastChat }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 252,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 250,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "last-chat-time", children: elem.time }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 255,
              columnNumber: 49
            }, this),
            elem.unread > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "badge badge-primary badge-sm badge-pill", children: elem.unread }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 256,
              columnNumber: 69
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown action-drp", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { href: "#", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret", "data-bs-toggle": "dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { "data-feather": "more-horizontal" }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 258,
                columnNumber: 242
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 258,
                columnNumber: 211
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 258,
                columnNumber: 188
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 258,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropdown-menu dropdown-menu-end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "dropdown-item", href: "#", children: "Mute Chat" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                  lineNumber: 260,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "dropdown-item", href: "#", children: "Archive Chat" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                  lineNumber: 261,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "dropdown-item", href: "#", children: "Delete Chat" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                  lineNumber: 262,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { className: "dropdown-item link-danger", href: "#", children: "Block" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                  lineNumber: 263,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ContactList.jsx",
                lineNumber: 259,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ContactList.jsx",
              lineNumber: 257,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ContactList.jsx",
            lineNumber: 254,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ContactList.jsx",
          lineNumber: 249,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/chats/ContactList.jsx",
        lineNumber: 235,
        columnNumber: 37
      }, this) }, index, false, {
        fileName: "app/routes/apps/chat/chats/ContactList.jsx",
        lineNumber: 234,
        columnNumber: 52
      }, this)) }, void 0, false, {
        fileName: "app/routes/apps/chat/chats/ContactList.jsx",
        lineNumber: 233,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/chats/ContactList.jsx",
      lineNumber: 173,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/chats/ContactList.jsx",
    lineNumber: 85,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/chat/chats/ContactList.jsx",
    lineNumber: 84,
    columnNumber: 10
  }, this);
};
_s(ContactList, "LoPfq5CHY4tCBDZVJCSWfNU3Vmc=", false, function() {
  return [useGlobalStateContext, useWindowWidth];
});
_c = ContactList;
var ContactList_default = ContactList;
var _c;
$RefreshReg$(_c, "ContactList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat/chats/ChatBody.jsx
var import_react3 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/chats/ChatBody.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/chats/ChatBody.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var ChatBody = () => {
  _s2();
  const {
    states
  } = useGlobalStateContext();
  const [messages, setMessages] = (0, import_react3.useState)([]);
  (0, import_react3.useEffect)(() => {
    setMessages(states.chatState.msg);
  }, [states.chatState, messages]);
  const bottomRef = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SimpleBar, { style: {
    height: "100%"
  }, id: "chat_body", className: "chat-body", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { id: "dummy_avatar", className: "list-unstyled chat-single-list", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "media received", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: [
          states.chatState.avatar.type === "img" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: states.chatState.avatar.src, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 56,
            columnNumber: 68
          }, this),
          states.chatState.avatar.type === "init" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `avatar avatar-xs avatar-${states.chatState.avatar.variant} avatar-rounded`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: states.chatState.avatar.title }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 58,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 57,
            columnNumber: 69
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
          lineNumber: 55,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "msg-box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Cool, lets talk about it tomorrow" }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 64,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "chat-time", children: "10:52 PM" }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 65,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 63,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "msg-action", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(corner_up_right_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 71,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 70,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 69,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 68,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 79,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 78,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 77,
                  columnNumber: 41
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 76,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#forward", children: "Forward" }, void 0, false, {
                    fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                    lineNumber: 84,
                    columnNumber: 41
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#copy", children: "Copy" }, void 0, false, {
                    fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                    lineNumber: 85,
                    columnNumber: 41
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 83,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 75,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 67,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 62,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "msg-box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Images for new marketing pages have been sent" }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 92,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "chat-time", children: "10:53 PM" }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 93,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 91,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "msg-action", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(corner_up_right_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 99,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 98,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 97,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 96,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 107,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 106,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 105,
                  columnNumber: 41
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 104,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#forward", children: "Forward" }, void 0, false, {
                    fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                    lineNumber: 112,
                    columnNumber: 41
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#copy", children: "Copy" }, void 0, false, {
                    fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                    lineNumber: 113,
                    columnNumber: 41
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 111,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 103,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 95,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 90,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
          lineNumber: 61,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "media media-attachment received", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: [
          states.chatState.avatar.type === "img" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: states.chatState.avatar.src, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 122,
            columnNumber: 68
          }, this),
          states.chatState.avatar.type === "init" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `avatar avatar-xs avatar-${states.chatState.avatar.variant} avatar-rounded`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: states.chatState.avatar.title }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 124,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 123,
            columnNumber: 69
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
          lineNumber: 121,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body msg-docs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "msg-box", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-blue", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-file-excel-2-fill" }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 133,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 132,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 131,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "file-name", children: "Website_content.xls" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 137,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "file-size", children: "2,635 KB" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 138,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 136,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 130,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "file-overlay", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "primary", size: "sm", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(arrow_down_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 145,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 144,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 143,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 142,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 141,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 129,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 128,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "msg-box", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("i", { className: "ri-file-zip-fill" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 157,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 156,
                  columnNumber: 41
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 155,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "file-name", children: "themeforest-pack.zip" }, void 0, false, {
                    fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                    lineNumber: 161,
                    columnNumber: 41
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "file-size", children: "2.45 GB" }, void 0, false, {
                    fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                    lineNumber: 162,
                    columnNumber: 41
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 160,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 154,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "file-overlay", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { variant: "primary", size: "sm", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(arrow_down_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 169,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 168,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 167,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 166,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 165,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 153,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "msg-action", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(corner_up_right_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 179,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 178,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 177,
                columnNumber: 37
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 176,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 187,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 186,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 185,
                  columnNumber: 41
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 184,
                  columnNumber: 37
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#forward", children: "Forward" }, void 0, false, {
                    fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                    lineNumber: 192,
                    columnNumber: 41
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#copy", children: "Copy" }, void 0, false, {
                    fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                    lineNumber: 193,
                    columnNumber: 41
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 191,
                  columnNumber: 37
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 183,
                columnNumber: 33
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 175,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 152,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
          lineNumber: 127,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
        lineNumber: 120,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "day-sep", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "Today" }, void 0, false, {
        fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
        lineNumber: 201,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
        lineNumber: 200,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "media sent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "msg-box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Anyways, I am working on something that you would like to know. This project is based on angular js and you are the keeda in it. I need you help in it." }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 207,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "chat-time", children: "11:52 PM" }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 208,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
          lineNumber: 206,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "msg-action", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(corner_up_right_default, {}, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 214,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 213,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 212,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 211,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 222,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 221,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 220,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 219,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#forward", children: "Forward" }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 227,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#copy", children: "Copy" }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 228,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 226,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 218,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
          lineNumber: 210,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
        lineNumber: 205,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
        lineNumber: 204,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
        lineNumber: 203,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "media media-attachment received", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: [
          states.chatState.avatar.type === "img" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: states.chatState.avatar.src, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 237,
            columnNumber: 68
          }, this),
          states.chatState.avatar.type === "init" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `avatar avatar-xs avatar-${states.chatState.avatar.variant} avatar-rounded`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: states.chatState.avatar.title }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 239,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 238,
            columnNumber: 69
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
          lineNumber: 236,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body msg-imgs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "msg-box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { className: "d-block img-fluid", src: giphy_default, alt: "gif" }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 245,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 244,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "msg-action", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(corner_up_right_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 251,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 250,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 249,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 248,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 259,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 258,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 257,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 256,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#forward", children: "Forward" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 264,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#copy", children: "Copy" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 265,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 263,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 255,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 247,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
          lineNumber: 243,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
          lineNumber: 242,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
        lineNumber: 235,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "media sent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "msg-box", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Haha, this joke is hilarious. Is it what your heart feel about the salary? \u{1F60D}" }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 276,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "chat-time", children: "10:52 PM" }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 277,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
          lineNumber: 275,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "msg-action", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(corner_up_right_default, {}, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 283,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 282,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 281,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 280,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 291,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 290,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 289,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 288,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#forward", children: "Forward" }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 296,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#copy", children: "Copy" }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 297,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 295,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 287,
            columnNumber: 33
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
          lineNumber: 279,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
        lineNumber: 274,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
        lineNumber: 273,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
        lineNumber: 272,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "media received", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: [
          states.chatState.avatar.type === "img" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: states.chatState.avatar.src, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 306,
            columnNumber: 68
          }, this),
          states.chatState.avatar.type === "init" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `avatar avatar-xs avatar-${states.chatState.avatar.variant} avatar-rounded`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: states.chatState.avatar.title }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 308,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 307,
            columnNumber: 69
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
          lineNumber: 305,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "msg-box", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Hey Ben, just a reminder that you are coming for the meeting today in the conference. We are proposing a change in the client briefing." }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 314,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "chat-time", children: "9:20 AM" }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 315,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 313,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "msg-action", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(corner_up_right_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 321,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 320,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 319,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 318,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 329,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 328,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 327,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 326,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#forward", children: "Forward" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 334,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#copy", children: "Copy" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 335,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 333,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 325,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 317,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
          lineNumber: 312,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
          lineNumber: 311,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
        lineNumber: 304,
        columnNumber: 17
      }, this),
      messages.map((elem, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: (0, import_classnames2.default)("media", elem.types), children: [
        elem.types === "received" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "avatar avatar-xs avatar-rounded", children: [
          states.chatState.avatar.type === "img" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: states.chatState.avatar.src, alt: "user", className: "avatar-img" }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 344,
            columnNumber: 76
          }, this),
          states.chatState.avatar.type === "init" && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: `avatar avatar-xs avatar-${states.chatState.avatar.variant} avatar-rounded`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "initial-wrap", children: states.chatState.avatar.title }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 346,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 345,
            columnNumber: 77
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
          lineNumber: 343,
          columnNumber: 59
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "msg-box", id: "msg-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: elem.text }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 352,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "chat-time", children: elem.time }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 353,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 351,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "msg-action", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button_default, { className: "btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(corner_up_right_default, {}, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 359,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 358,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 357,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 356,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(more_horizontal_default, {}, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 367,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 366,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 365,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 364,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#forward", children: "Forward" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 372,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Dropdown_default.Item, { href: "#copy", children: "Copy" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                  lineNumber: 373,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
                lineNumber: 371,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
              lineNumber: 363,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
            lineNumber: 355,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
          lineNumber: 350,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
          lineNumber: 349,
          columnNumber: 29
        }, this)
      ] }, index, true, {
        fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
        lineNumber: 342,
        columnNumber: 48
      }, this))
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { ref: bottomRef }, void 0, false, {
      fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
      lineNumber: 381,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/chats/ChatBody.jsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
};
_s2(ChatBody, "cTbJjMska2dQSjgmuYpj9Q8G8as=", false, function() {
  return [useGlobalStateContext];
});
_c2 = ChatBody;
var ChatBody_default = ChatBody;
var _c2;
$RefreshReg$(_c2, "ChatBody");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat/chats/ChatInfo.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/chats/ChatInfo.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/chats/ChatInfo.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var ChatInfo = ({
  infoToggle
}) => {
  _s3();
  const {
    states
  } = useGlobalStateContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "chat-info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SimpleBar, { style: {
    height: "100%"
  }, className: "nicescroll-bar", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { bsPrefix: "btn-close", className: "info-close", onClick: infoToggle, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { "aria-hidden": "true", children: "\xD7" }, void 0, false, {
      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
      lineNumber: 47,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
      lineNumber: 46,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-center", children: [
      states.chatState.avatar.type === "img" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-xxl avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: states.chatState.avatar.src, alt: "user", className: "avatar-img" }, void 0, false, {
        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
        lineNumber: 51,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
        lineNumber: 50,
        columnNumber: 64
      }, this),
      states.chatState.avatar.type === "init" && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `avatar avatar-${states.chatState.avatar.variant} avatar-rounded avatar-xxl`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: states.chatState.avatar.title }, void 0, false, {
        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
        lineNumber: 54,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
        lineNumber: 53,
        columnNumber: 65
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "cp-name text-truncate mt-2", children: states.chatState.userName }, void 0, false, {
        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
        lineNumber: 56,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-truncate", children: "No phone calls Always busy" }, void 0, false, {
        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
        lineNumber: 57,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
      lineNumber: 49,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tab_default.Container, { defaultActiveKey: "info", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default, { justify: true, className: "nav-light nav-tabs nav-segmented-tabs active-theme mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { eventKey: "info", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Info" }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
          lineNumber: 63,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
          lineNumber: 62,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
          lineNumber: 61,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Nav_default.Link, { eventKey: "files", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "nav-link-text", children: "Files" }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
          lineNumber: 68,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
          lineNumber: 67,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
          lineNumber: 66,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
        lineNumber: 60,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tab_default.Content, { className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tab_default.Pane, { eventKey: "info", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default, { role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Control, { type: "text", placeholder: "Search in conversation" }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
            lineNumber: 75,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
            lineNumber: 74,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "collapse-simple mt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "gn_info", title: "General Info", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "cp-info", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { href: "#", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "cp-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(briefcase_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 83,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 82,
                  columnNumber: 80
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 82,
                  columnNumber: 49
                }, this),
                "Co-Founder"
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 81,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 80,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { href: "#", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "cp-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(mail_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 91,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 90,
                  columnNumber: 80
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 90,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-primary", children: "contact@hencework.com" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 93,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 89,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 88,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { href: "#", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "cp-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(phone_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 99,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 98,
                  columnNumber: 80
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 98,
                  columnNumber: 49
                }, this),
                "+91-25-4125-2365"
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 97,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 96,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { href: "#", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "cp-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(map_pin_default, {}, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 107,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 106,
                  columnNumber: 80
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 106,
                  columnNumber: 49
                }, this),
                "Oslo, Canada"
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 105,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 104,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
              lineNumber: 79,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
              lineNumber: 78,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "social_profile", title: "Social Profile", collapsed: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "hk-list hk-list-sm", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "primary", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FontAwesomeIcon, { icon: faFacebook }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 118,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 117,
                columnNumber: 104
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 117,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 116,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "warning", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FontAwesomeIcon, { icon: faGoogleDrive }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 123,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 122,
                columnNumber: 104
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 122,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 121,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "info", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FontAwesomeIcon, { icon: faDropbox }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 128,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 127,
                columnNumber: 101
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 127,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 126,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "dark", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FontAwesomeIcon, { icon: faGithub }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 133,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 132,
                columnNumber: 101
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 132,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 131,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button_default, { variant: "danger", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(FontAwesomeIcon, { icon: faGoogle }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 138,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 137,
                columnNumber: 103
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 137,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 136,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
              lineNumber: 115,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
              lineNumber: 114,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "biography", title: "Biography", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Hello there, Huma Therman is a brilliant co-founder and a copy writer working for almost a decade for fortune 500 companies. I am well verse with multiple foreign languages and I love to produce good quality stuff. " }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
              lineNumber: 145,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
              lineNumber: 144,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
              lineNumber: 143,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "settings", title: "Settings", collapsed: false, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "cp-action", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { href: "#", children: "Clear Chat" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 151,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 150,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { href: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-danger", children: "Block Contact" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 157,
                  columnNumber: 49
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 156,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 155,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { href: "#", children: "Somthing's Wrong" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 161,
                  columnNumber: 45
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 160,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 149,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { href: "#", className: "d-block text-dark fs-7 mb-10", children: "Give feedback and report conversation" }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 166,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
              lineNumber: 148,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
            lineNumber: 77,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
          lineNumber: 73,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Tab_default.Pane, { eventKey: "files", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default, { role: "search", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Form_default.Control, { type: "text", className: "search-files", placeholder: "Search files" }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
            lineNumber: 172,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
            lineNumber: 171,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "collapse-simple mt-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "files_collapse", title: "Yesterday", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "cp-files", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-blue", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-file-excel-2-fill" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 182,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 181,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 180,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 179,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "website_content.exl" }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 188,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "2,635 KB" }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 189,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 187,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 196,
                      columnNumber: 73
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 195,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 194,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 193,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Download" }, void 0, false, {
                        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                        lineNumber: 201,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Delete" }, void 0, false, {
                        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                        lineNumber: 202,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 200,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 192,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 191,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 186,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 178,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 177,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-file-text-fill" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 214,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 213,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 212,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 211,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "jampack.pdf" }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 220,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "1.3 GB" }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 221,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 219,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 228,
                      columnNumber: 73
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 227,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 226,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 225,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Download" }, void 0, false, {
                        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                        lineNumber: 233,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Delete" }, void 0, false, {
                        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                        lineNumber: 234,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 232,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 224,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 223,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 218,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 210,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 209,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-file-zip-fill" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 246,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 245,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 244,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 243,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "themeforest-pack.zip" }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 252,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "2.45 GB" }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 253,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 251,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 260,
                      columnNumber: 73
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 259,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 258,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 257,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Download" }, void 0, false, {
                        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                        lineNumber: 265,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Delete" }, void 0, false, {
                        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                        lineNumber: 266,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 264,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 256,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 255,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 250,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 242,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 241,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-logo avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar1_default, alt: "user" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 278,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 277,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 276,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 275,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "bruce-mars-fiEG-Pk6ZASFPk6ZASF" }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 284,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "4,178 KB" }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 285,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 283,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 292,
                      columnNumber: 73
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 291,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 290,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 289,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Download" }, void 0, false, {
                        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                        lineNumber: 297,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Delete" }, void 0, false, {
                        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                        lineNumber: 298,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 296,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 288,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 287,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 282,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 274,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 273,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-logo avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: avatar2_default, alt: "user" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 310,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 309,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 308,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 307,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "jonas-kakaroto-KIPqvvTKIPqvvT" }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 316,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "951 KB" }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 317,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 315,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 324,
                      columnNumber: 73
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 323,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 322,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 321,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Download" }, void 0, false, {
                        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                        lineNumber: 329,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Delete" }, void 0, false, {
                        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                        lineNumber: 330,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 328,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 320,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 319,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 314,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 306,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 305,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
              lineNumber: 176,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
              lineNumber: 175,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(hk_collapse_default, { bsPrefix: "a", href: "#", targetId: "files_collapse_1", title: "23 April", collapsed: false, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "cp-files", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-light", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-keynote-fill" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 346,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 345,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 344,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 343,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "presentation.keynote" }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 352,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "20 KB" }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 353,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 351,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 360,
                      columnNumber: 73
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 359,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 358,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 357,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Download" }, void 0, false, {
                        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                        lineNumber: 365,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Delete" }, void 0, false, {
                        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                        lineNumber: 366,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 364,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 356,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 355,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 350,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 342,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 341,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-soft-warning", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "initial-wrap fs-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-file-zip-fill" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 378,
                  columnNumber: 61
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 377,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 376,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 375,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "PACK-TRIAL.zip" }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 384,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "2.45 GB" }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 385,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 383,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 392,
                      columnNumber: 73
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 391,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 390,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 389,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Download" }, void 0, false, {
                        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                        lineNumber: 397,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Delete" }, void 0, false, {
                        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                        lineNumber: 398,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 396,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 388,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 387,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 382,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 374,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 373,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "avatar avatar-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: img_thumb1_default, alt: "user", className: "avatar-img" }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 409,
                  columnNumber: 57
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 408,
                  columnNumber: 53
                }, this) }, void 0, false, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 407,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "media-body", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-name", children: "joel-mott-LaK153ghdigaghdi" }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 414,
                      columnNumber: 57
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "file-size", children: "3,028 KB" }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 415,
                      columnNumber: 57
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 413,
                    columnNumber: 53
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default, { children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", size: "sm", className: "btn-icon btn-rounded flush-soft-hover dropdown-toggle no-caret", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(more_vertical_default, {}, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 422,
                      columnNumber: 73
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 421,
                      columnNumber: 69
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 420,
                      columnNumber: 65
                    }, this) }, void 0, false, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 419,
                      columnNumber: 61
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Menu, { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { children: "Download" }, void 0, false, {
                        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                        lineNumber: 427,
                        columnNumber: 65
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Dropdown_default.Item, { className: "link-danger", children: "Delete" }, void 0, false, {
                        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                        lineNumber: 428,
                        columnNumber: 65
                      }, this)
                    ] }, void 0, true, {
                      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                      lineNumber: 426,
                      columnNumber: 61
                    }, this)
                  ] }, void 0, true, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 418,
                    columnNumber: 57
                  }, this) }, void 0, false, {
                    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                    lineNumber: 417,
                    columnNumber: 53
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                  lineNumber: 412,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 406,
                columnNumber: 45
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
                lineNumber: 405,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
              lineNumber: 340,
              columnNumber: 37
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
              lineNumber: 339,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
            lineNumber: 174,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
          lineNumber: 170,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
        lineNumber: 72,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
      lineNumber: 59,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
    lineNumber: 43,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/chat/chats/ChatInfo.jsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
};
_s3(ChatInfo, "oY54iNWwa1au3l43YGO9iqatCoY=", false, function() {
  return [useGlobalStateContext];
});
_c3 = ChatInfo;
var ChatInfo_default = ChatInfo;
var _c3;
$RefreshReg$(_c3, "ChatInfo");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat/chats/route.jsx
var import_classnames3 = __toESM(require_classnames(), 1);

// app/routes/apps/chat/ChatFooter.jsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/ChatFooter.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/ChatFooter.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var ChatFooter = () => {
  _s4();
  const [message, setMessage] = (0, import_react5.useState)([]);
  const {
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
        type: "send_msg",
        msg: {
          text: message,
          time: msgTitme,
          types: "sent"
        }
      });
      setTimeout(() => {
        dispatch({
          type: "send_msg",
          msg: {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("footer", { className: "chat-footer", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(share_default, {}, void 0, false, {
        fileName: "app/routes/apps/chat/ChatFooter.jsx",
        lineNumber: 82,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/ChatFooter.jsx",
        lineNumber: 81,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/ChatFooter.jsx",
        lineNumber: 80,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/ChatFooter.jsx",
        lineNumber: 79,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Menu, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-primary avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-image-line" }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 91,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 90,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 89,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "h6 mb-0", children: "Photo or Video Library" }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 95,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 94,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/ChatFooter.jsx",
          lineNumber: 88,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatFooter.jsx",
          lineNumber: 87,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-info avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-file-4-line" }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 103,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 102,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 101,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "h6 mb-0", children: "Documents" }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 107,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 106,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/ChatFooter.jsx",
          lineNumber: 100,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatFooter.jsx",
          lineNumber: 99,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-success avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-map-pin-line" }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 115,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 114,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 113,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "h6 mb-0", children: "Location" }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 119,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 118,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/ChatFooter.jsx",
          lineNumber: 112,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatFooter.jsx",
          lineNumber: 111,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Dropdown_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "d-flex align-items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "avatar avatar-icon avatar-xs avatar-soft-blue avatar-rounded me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-contacts-line" }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 127,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 126,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 125,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "h6 mb-0", children: "Contact" }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 131,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/chat/ChatFooter.jsx",
            lineNumber: 130,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/chat/ChatFooter.jsx",
          lineNumber: 124,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatFooter.jsx",
          lineNumber: 123,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/ChatFooter.jsx",
        lineNumber: 86,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/ChatFooter.jsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(InputGroup_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "input-affix-wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Form_default.Control, { type: "text", id: "input_msg_send_chatapp", name: "send-msg", className: "input-msg-send rounded-input", placeholder: "Type your message...", value: message, onChange: (e) => setMessage(e.target.value), onKeyDown }, void 0, false, {
        fileName: "app/routes/apps/chat/ChatFooter.jsx",
        lineNumber: 139,
        columnNumber: 21
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "input-suffix", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { variant: "flush-primary", className: "btn-icon btn-rounded btn-send", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "icon", onClick: handleClick, children: [
        "  ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(arrow_right_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/ChatFooter.jsx",
          lineNumber: 144,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/chat/ChatFooter.jsx",
          lineNumber: 143,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/ChatFooter.jsx",
        lineNumber: 142,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/ChatFooter.jsx",
        lineNumber: 141,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/chat/ChatFooter.jsx",
        lineNumber: 140,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/ChatFooter.jsx",
      lineNumber: 138,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat/ChatFooter.jsx",
      lineNumber: 137,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button_default, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(smile_default, {}, void 0, false, {
      fileName: "app/routes/apps/chat/ChatFooter.jsx",
      lineNumber: 154,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat/ChatFooter.jsx",
      lineNumber: 153,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat/ChatFooter.jsx",
      lineNumber: 152,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/chat/ChatFooter.jsx",
      lineNumber: 151,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/ChatFooter.jsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
};
_s4(ChatFooter, "ihM3NOpxWGCG/W/Vgn5/hsy187o=", false, function() {
  return [useGlobalStateContext];
});
_c4 = ChatFooter;
var ChatFooter_default = ChatFooter;
var _c4;
$RefreshReg$(_c4, "ChatFooter");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/chat/chats/route.jsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/chat/chats/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/chat/chats/route.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var Chats = () => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: (0, import_classnames3.default)("chatapp-wrap", {
    "chatapp-info-active": showInfo
  }, {
    "chatapp-slide": states.chatState.startChat
  }), children: [
    "  ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "chatapp-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ContactList_default, { invitePeople: () => setInvitePeople(!invitePeople) }, void 0, false, {
        fileName: "app/routes/apps/chat/chats/route.jsx",
        lineNumber: 54,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "chatapp-single-chat", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ChatHeader_default, { infoState: showInfo, infoToggle: () => setShowInfo(!showInfo), invitePeople: () => setInvitePeople(!invitePeople) }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/route.jsx",
          lineNumber: 56,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ChatBody_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/chats/route.jsx",
          lineNumber: 57,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ChatFooter_default, {}, void 0, false, {
          fileName: "app/routes/apps/chat/chats/route.jsx",
          lineNumber: 58,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ChatInfo_default, { infoToggle: () => setShowInfo(!showInfo) }, void 0, false, {
          fileName: "app/routes/apps/chat/chats/route.jsx",
          lineNumber: 59,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/chat/chats/route.jsx",
        lineNumber: 55,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(InvitePeopleModal_default, { show: invitePeople, onClose: () => setInvitePeople(!invitePeople) }, void 0, false, {
        fileName: "app/routes/apps/chat/chats/route.jsx",
        lineNumber: 62,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/chat/chats/route.jsx",
      lineNumber: 53,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/chat/chats/route.jsx",
    lineNumber: 48,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/chat/chats/route.jsx",
    lineNumber: 47,
    columnNumber: 10
  }, this);
};
_s5(Chats, "W6nacLUVs7NaumYv0B+lvNkgWV8=", false, function() {
  return [useGlobalStateContext, useWindowWidth];
});
_c5 = Chats;
var route_default = Chats;
var _c5;
$RefreshReg$(_c5, "Chats");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/chat/chats/route-IA7ADDWN.js.map
