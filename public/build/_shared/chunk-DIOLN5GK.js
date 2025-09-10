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
  createHotContext
} from "/build/_shared/chunk-7UABGPEU.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/context/GolobalStateProvider.js
var import_react = __toESM(require_react(), 1);

// app/context/reducer/chatPopupReducer.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/context/reducer/chatPopupReducer.js"
  );
  import.meta.hot.lastModified = "1732600247873.161";
}
var chatPopupinitStates = {
  popupMsgs: [
    { text: "I have a plan regarding pricing", types: "sent" },
    { text: "Welcome back! Are you looking to upgrade your existing plan?", types: "received" }
  ],
  directMsgs: []
};
var chatPopupReducer = (state = chatPopupinitStates, action) => {
  switch (action.type) {
    case "send_popup_msg":
      return {
        ...state,
        popupMsgs: [...state.popupMsgs, action.popupMsgs]
      };
    case "send_direct_msg":
      return {
        ...state,
        directMsgs: [...state.directMsgs, action.directMsgs]
      };
    default:
      return state;
  }
};
var chatPopupReducer_default = chatPopupReducer;

// app/context/reducer/chatReducer.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/context/reducer/chatReducer.js"
  );
  import.meta.hot.lastModified = "1732600247873.502";
}
var chatInitialStates = {
  startChat: false,
  avatar: { type: "img", src: avatar8_default },
  userId: 2,
  userName: "Huma Therman",
  msg: [],
  contactMsg: [],
  rplyMsg: [],
  status: "Typing",
  //Group states
  grpId: 12,
  grpAvatar: { type: "img", src: avatar1_default },
  groupName: "Developers Stage",
  grpStatus: "Active 5min ago",
  grpMsg: []
};
var chatReducer = (state = chatInitialStates, action) => {
  switch (action.type) {
    case "start_chat":
      return {
        ...state,
        startChat: !state.startChat
      };
    case "send_msg":
      return {
        ...state,
        msg: [...state.msg, action.msg]
      };
    case "set_user":
      return {
        ...state,
        userId: action.userId,
        avatar: action.avatar,
        userName: action.userName,
        status: action.status
      };
    case "contact_msg":
      return {
        ...state,
        contactMsg: [...state.contactMsg, action.contactMsg]
      };
    case "reply_msg":
      return {
        ...state,
        rplyMsg: [...state.rplyMsg, action.rplyMsg]
      };
    case "grp_msg":
      return {
        ...state,
        grpMsg: [...state.grpMsg, action.grpMsg]
      };
    case "select_group":
      return {
        ...state,
        grpId: action.grpId,
        grpAvatar: action.grpAvatar,
        groupName: action.groupName,
        grpStatus: action.grpStatus
      };
    default:
      return state;
  }
};
var chatReducer_default = chatReducer;

// app/context/reducer/emailReducer.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/context/reducer/emailReducer.js"
  );
  import.meta.hot.lastModified = "1732600247873.798";
}
var emailInitialStates = {
  openEmail: false,
  composeEmail: false,
  maximize: false,
  minimize: false
};
var emailReducer = (state = emailInitialStates, action) => {
  switch (action.type) {
    case "open_email":
      return {
        ...state,
        openEmail: !state.openEmail
      };
    case "compose_email":
      return {
        ...state,
        composeEmail: action.composeEmail
      };
    case "maximize_modal":
      return {
        ...state,
        maximize: action.maximize
      };
    case "minimize_modal":
      return {
        ...state,
        minimize: action.minimize
      };
    default:
      return state;
  }
};
var emailReducer_default = emailReducer;

// app/context/reducer/fmReducer.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/context/reducer/fmReducer.js"
  );
  import.meta.hot.lastModified = "1732600247874.044";
}
var fmlInitialStates = {
  showInfo: false
};
var fmReducer = (state = fmlInitialStates, action) => {
  switch (action.type) {
    case "show_fmInfo":
      return {
        ...state,
        showInfo: action.showInfo
      };
    default:
      return state;
  }
};
var fmReducer_default = fmReducer;

// app/context/reducer/layoutReducer.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/context/reducer/layoutReducer.js"
  );
  import.meta.hot.lastModified = "1732600247874.369";
}
var layoutInitialStates = {
  isSidebarCollapsed: false,
  topNavCollapse: false,
  dataHover: false
};
var layoutReducer = (state = layoutInitialStates, action) => {
  switch (action.type) {
    case "sidebar_toggle":
      {
        return {
          ...state,
          isSidebarCollapsed: !state.isSidebarCollapsed
        };
      }
      ;
    case "collapse_sidebar":
      return {
        ...state,
        isSidebarCollapsed: true
      };
    case "expand_sidebar":
      return {
        ...state,
        isSidebarCollapsed: false
      };
    case "top_nav_toggle":
      return {
        ...state,
        topNavCollapse: !state.topNavCollapse
      };
    case "data_hover":
      return {
        ...state,
        dataHover: action.dataHover
      };
    default:
      return state;
  }
};
var layoutReducer_default = layoutReducer;

// app/context/reducer/todoReducer.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/context/reducer/todoReducer.js"
  );
  import.meta.hot.lastModified = "1732600247874.915";
}
var todoInitialState = {
  vm: "Week"
};
var todoReducer = (state = todoInitialState, action) => {
  switch (action.type) {
    case "change_vm":
      return {
        ...state,
        vm: action.vm
      };
    default:
      return state;
  }
};
var todoReducer_default = todoReducer;

// app/context/reducer/rootReducer.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/context/reducer/rootReducer.js"
  );
  import.meta.hot.lastModified = "1732600247874.664";
}
var initialStates = {
  layoutState: layoutInitialStates,
  chatState: chatInitialStates,
  chatPopupState: chatPopupinitStates,
  emailState: emailInitialStates,
  fmState: fmlInitialStates,
  todoState: todoInitialState
};
var rootReducer = (state, action) => {
  return {
    layoutState: layoutReducer_default(state.layoutState, action),
    chatState: chatReducer_default(state.chatState, action),
    chatPopupState: chatPopupReducer_default(state.chatPopupState, action),
    emailState: emailReducer_default(state.emailState, action),
    fmState: fmReducer_default(state.fmState, action),
    todoState: todoReducer_default(state.todoState, action)
  };
};

// app/context/GolobalStateProvider.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/context/GolobalStateProvider.js"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/context/GolobalStateProvider.js"
  );
  import.meta.hot.lastModified = "1732600247872.645";
}
var GlobalStateContext = (0, import_react.createContext)();
var GlobalStateProvider = ({
  children
}) => {
  _s();
  const [states, dispatch] = (0, import_react.useReducer)(rootReducer, initialStates);
  const ContextValue = (0, import_react.useMemo)(() => {
    return {
      states,
      dispatch
    };
  }, [states, dispatch]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GlobalStateContext.Provider, { value: ContextValue, children }, void 0, false, {
    fileName: "app/context/GolobalStateProvider.js",
    lineNumber: 39,
    columnNumber: 10
  }, this);
};
_s(GlobalStateProvider, "LKfIoRTE+nFEGyRkNwp+UhTXpZ4=");
_c = GlobalStateProvider;
var useGlobalStateContext = () => {
  _s2();
  return (0, import_react.useContext)(GlobalStateContext);
};
_s2(useGlobalStateContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
$RefreshReg$(_c, "GlobalStateProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  GlobalStateProvider,
  useGlobalStateContext
};
//# sourceMappingURL=/build/_shared/chunk-DIOLN5GK.js.map
