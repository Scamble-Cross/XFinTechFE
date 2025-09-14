import {
  ContactAppHeader_default
} from "/build/_shared/chunk-Z3JIM3C6.js";
import {
  hk_avatar_uploader_default
} from "/build/_shared/chunk-35NP6KP5.js";
import {
  require_dist
} from "/build/_shared/chunk-RF2NSX3W.js";
import {
  ContactAppSidebar_default
} from "/build/_shared/chunk-LXYVPAND.js";
import "/build/_shared/chunk-EGIWPWVU.js";
import "/build/_shared/chunk-CXWPXLC3.js";
import {
  avatar14_default
} from "/build/_shared/chunk-F6BSWV7B.js";
import {
  faBehance,
  faDropbox,
  faGithub,
  faGoogleDrive
} from "/build/_shared/chunk-GJLLTWNM.js";
import {
  avatar5_default
} from "/build/_shared/chunk-JQFY4KQJ.js";
import {
  avatar15_default
} from "/build/_shared/chunk-ZGGRJ3QC.js";
import {
  FontAwesomeIcon
} from "/build/_shared/chunk-JPGC5R3S.js";
import "/build/_shared/chunk-YWRMJW47.js";
import {
  avatar10_default
} from "/build/_shared/chunk-LDADEV53.js";
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
import {
  HkTooltip_default
} from "/build/_shared/chunk-NYEYMOIV.js";
import {
  avatar11_default
} from "/build/_shared/chunk-VQO4YLKZ.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  activity_default,
  archive_default,
  check_square_default,
  chevron_left_default,
  chevron_right_default,
  clock_default,
  edit_2_default,
  edit_3_default,
  heart_default,
  inbox_default,
  mail_default,
  more_vertical_default,
  phone_default,
  plus_default,
  shield_default,
  slash_default,
  star_default,
  trash_default,
  upload_default,
  user_check_default,
  video_default,
  x_square_default,
  zap_default
} from "/build/_shared/chunk-PBHDBNLJ.js";
import "/build/_shared/chunk-3LFZEH5W.js";
import "/build/_shared/chunk-B57YWHU6.js";
import {
  avatar8_default
} from "/build/_shared/chunk-WUHA5P4Y.js";
import {
  Link
} from "/build/_shared/chunk-DKEEJ4HZ.js";
import "/build/_shared/chunk-BVOHG2V5.js";
import {
  Badge_default,
  Button_default,
  Card_default,
  Col_default,
  Dropdown_default,
  Form_default,
  Modal_default,
  Nav_default,
  Row_default,
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

// app/routes/apps/contact/contact-cards/route.jsx
var import_react3 = __toESM(require_react(), 1);
var import_classnames2 = __toESM(require_classnames(), 1);

// app/routes/apps/contact/contact-cards/ContactCardsBody.jsx
var import_react2 = __toESM(require_react(), 1);
var import_classnames = __toESM(require_classnames(), 1);

// app/routes/apps/contact/contact-cards/ContactDetails.jsx
var import_react_simple_star_rating = __toESM(require_dist(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/contact/contact-cards/ContactDetails.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/contact/contact-cards/ContactDetails.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var ContactDetails = ({
  show,
  onHide
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default, { show, onHide, centered: true, size: "xl", dialogClassName: "contact-detail-modal", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Modal_default.Body, { className: "p-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "contact-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "me-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(hk_avatar_uploader_default, { defaultImg: avatar2_default }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 42,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 41,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "cp-name text-truncate", children: "Mendaline Shane" }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 45,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No phone calls Always busy" }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 46,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_simple_star_rating.Rating, { initialValue: 3, readonly: true, size: "20" }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 47,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 44,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
        lineNumber: 40,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contact-options-wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "hk-list hk-list-sm justify-content-center d-xl-flex d-none", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "btn btn-icon btn-soft-primary btn-rounded", href: "#some", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "btn-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(mail_default, {}, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 56,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 55,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 54,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 53,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 52,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "btn btn-icon btn-soft-success btn-rounded", href: "#some", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "btn-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(phone_default, {}, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 65,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 64,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 63,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 62,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 61,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "btn btn-icon btn-soft-danger btn-rounded", href: "#some", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "btn-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(video_default, {}, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 74,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 73,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 72,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 71,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 70,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 51,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "mx-3  d-xl-block d-none", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { variant: "light", type: "button", children: "Action" }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 81,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Action" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 83,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Another action" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 84,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Something else here" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 85,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "dropdown-divider" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 86,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Separated link" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 87,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 82,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 80,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "align-items-center d-xl-flex d-none", children: "1 - 10 of 30" }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 90,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover contactapp-info-toggle  d-xl-inline-block d-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: "top", title: "Previous", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "btn-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_left_default, {}, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 95,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 94,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 93,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 92,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 91,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover contactapp-info-toggle  d-xl-inline-block d-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: "top", title: "Previous", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "btn-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(chevron_right_default, {}, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 104,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 103,
          columnNumber: 37
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 102,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 101,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 100,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { as: "a", href: "#some", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { className: "btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret  d-xl-inline-block d-nonet", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "btn-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(more_vertical_default, {}, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 113,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 112,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 111,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 110,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(star_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 120,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 119,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Stared Messages" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 122,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 118,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(archive_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 126,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 125,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Archive Messages" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 128,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 124,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 130,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(slash_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 133,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 132,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Block Content" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 135,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 131,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { as: Link, to: "/apps/email", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon dropdown-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(x_square_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 139,
                columnNumber: 41
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 138,
                columnNumber: 37
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Close" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 141,
                columnNumber: 37
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 137,
              columnNumber: 33
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 117,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 109,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
        lineNumber: 50,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
      lineNumber: 39,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contact-body contact-detail-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex flex-xl-nowrap flex-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contact-info w-xl-35 w-100", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default, { className: "action-btn", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Toggle, { className: "btn btn-light dropdown-toggle ", type: "button", children: "Action" }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 152,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Menu, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Action" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 154,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Another action" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 155,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Something else here" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 156,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Divider, { as: "div" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 157,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dropdown_default.Item, { children: "Separated link" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 158,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 153,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 151,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Header, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", children: "Profile Information" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 163,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { size: "xs", variant: "light", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: "top", title: "Edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(edit_2_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 168,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 167,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 166,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 165,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 164,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 162,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "cp-info", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "First name" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 177,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Morgan" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 178,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 176,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Last name" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 181,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Freeman" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 182,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 180,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Email" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 185,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "morgan@flights.com" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 186,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 184,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Phone" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 189,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "+912-4532-1234" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 190,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 188,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Location" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 193,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Newyork" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 194,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 192,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 175,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 174,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 161,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "separator-full" }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 199,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Header, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", children: "More Info" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 202,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { size: "xs", variant: "light", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: "top", title: "Edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(edit_2_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 207,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 206,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 205,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 204,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 203,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 201,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "cp-info", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Designation" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 216,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Morgan" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 217,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 215,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Company" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 220,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Freeman" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 221,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 219,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Language" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 224,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "morgan@flights.com" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 225,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 223,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Birthday" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 228,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "-" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 229,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 227,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Location" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 232,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Newyork" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 233,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 231,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 214,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 213,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 200,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "separator-full" }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 238,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Header, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", children: "Tags" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 241,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "light", size: "xs", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: "top", title: "Add Tags", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(plus_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 246,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 245,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 244,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 243,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 242,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 240,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "badge badge-soft-violet", children: "Collaboration" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 253,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "badge badge-soft-danger", children: "React Developer" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 254,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 252,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 239,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "separator-full" }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 257,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", children: "Social Profile" }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 260,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 259,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "hk-list hk-list-sm", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "primary", className: "btn-icon btn-rounded btn-primary", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faBehance }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 267,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 266,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 265,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 264,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "warning", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faGoogleDrive }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 274,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 273,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 272,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 271,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "info", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faDropbox }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 281,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 280,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 279,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 278,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "dark", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FontAwesomeIcon, { icon: faGithub }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 288,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 287,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 286,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 285,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 263,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 262,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 258,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "separator-full" }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 295,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Header, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", children: "Biography" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 298,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { size: "xs", variant: "light", className: "btn-icon btn-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkTooltip_default, { placement: "top", title: "Edit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(edit_2_default, {}, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 303,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 302,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 301,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 300,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 299,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 297,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Hello there, Morgan Freeman is a full-stack frontend developer working under pressure is his quality." }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 310,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 309,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 296,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "separator-full" }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 313,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Header, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#some", children: "Settings" }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 316,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 315,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "cp-action", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "cp-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(upload_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 324,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 323,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 322,
                columnNumber: 53
              }, this),
              "Share Contact"
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 321,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 320,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "cp-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(heart_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 334,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 333,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 332,
                columnNumber: 53
              }, this),
              "Add to Favourites"
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 331,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 330,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", className: "link-danger", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "cp-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(trash_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 344,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 343,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 342,
                columnNumber: 53
              }, this),
              "Delete Contact"
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 341,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 340,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 319,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 318,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 314,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
        lineNumber: 150,
        columnNumber: 29
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "contact-more-info", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Container, { defaultActiveKey: "tab_summery", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { variant: "tabs", className: "nav-line nav-icon nav-light", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { eventKey: "tab_summery", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(zap_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 361,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 360,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 359,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Summery" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 364,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 358,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 357,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(activity_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 371,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 370,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 369,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Activity" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 374,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 368,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 367,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(edit_3_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 381,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 380,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 379,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Notes" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 384,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 378,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 377,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(mail_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 391,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 390,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 389,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Email" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 394,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 388,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 387,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(phone_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 401,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 400,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 399,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Calls" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 404,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 398,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 397,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(check_square_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 411,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 410,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 409,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Tasks" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 414,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 408,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 407,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(clock_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 421,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 420,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 419,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Schedule" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 424,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 418,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 417,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(shield_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 431,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 430,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 429,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Sales" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 434,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 428,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 427,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 356,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Content, { className: "mt-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Pane, { eventKey: "tab_summery", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { md: 12, as: Form_default.Group, className: "mb-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-label-group", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Write a Note" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                  lineNumber: 444,
                  columnNumber: 61
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("small", { className: "text-muted", children: "1200" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                  lineNumber: 445,
                  columnNumber: 61
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 443,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { as: "textarea", rows: 8, placeholder: "Write an internal note" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 447,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 442,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 441,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button_default, { variant: "outline-light", children: "Add Note" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 450,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 440,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 439,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 438,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 355,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pipeline-status-wrap mt-7", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title-lg mb-3", children: "Lead Pipeline Status" }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 456,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "pipeline-stutus", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "completed", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "In Pipeline" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 458,
              columnNumber: 67
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 458,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Follow Up" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 459,
              columnNumber: 64
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 459,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Scheduled Service" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 460,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 460,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Conversation" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 461,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 461,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Win/Lost" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 462,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 462,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 457,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "clearfix" }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 464,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 455,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "activity-wrap mt-7", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "d-flex align-items-center justify-content-between mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title-lg mb-0", children: "Activity" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 468,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Select, { className: "mw-150p", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 0, children: "All Activity" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 470,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 1, children: "One" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 471,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 2, children: "Two" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 472,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: 3, children: "Three" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 473,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 469,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 467,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title-sm text-primary mb-3", children: "June 24" }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 476,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "activity-thread", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-icon avatar-sm avatar-primary avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(mail_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 483,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 482,
                columnNumber: 88
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 482,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 481,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 480,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "activity-text", children: [
                  "You sent ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-dark text-capitalize", children: "1 message" }, void 0, false, {
                    fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                    lineNumber: 490,
                    columnNumber: 97
                  }, this),
                  " to the contact."
                ] }, void 0, true, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                  lineNumber: 490,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "activity-time", children: "10.00 pm" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                  lineNumber: 491,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 489,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 488,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 479,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 478,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "M" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 500,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 499,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 498,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "activity-text", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-dark text-capitalize", children: "Morgan Freeman" }, void 0, false, {
                    fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                    lineNumber: 505,
                    columnNumber: 88
                  }, this),
                  " as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled."
                ] }, void 0, true, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                  lineNumber: 505,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "activity-time", children: "10.00 pm" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                  lineNumber: 506,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 504,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 503,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 497,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 496,
              columnNumber: 41
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar  avatar-icon avatar-sm avatar-info avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(shield_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 516,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 515,
                columnNumber: 88
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 515,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 514,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 513,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "activity-text", children: [
                  "Your deal value ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-dark", children: "$208.15" }, void 0, false, {
                    fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                    lineNumber: 523,
                    columnNumber: 104
                  }, this),
                  " is paid through PayU Money online on ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-dark", children: "02.12.18" }, void 0, false, {
                    fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                    lineNumber: 523,
                    columnNumber: 184
                  }, this),
                  " at ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-dark", children: "15:30, Monday" }, void 0, false, {
                    fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                    lineNumber: 523,
                    columnNumber: 231
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                  lineNumber: 523,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "activity-time", children: "10.00 pm" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                  lineNumber: 524,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 522,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 521,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 512,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 511,
              columnNumber: 41
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 477,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "title-sm text-primary mt-5 mb-3", children: "June 25" }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 530,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "activity-thread", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-head", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avatar avatar-sm avatar-soft-danger avatar-rounded", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "initial-wrap", children: "M" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 536,
              columnNumber: 57
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 535,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 534,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "media-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "activity-text", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-dark", children: "Morgan Freeman" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                  lineNumber: 541,
                  columnNumber: 88
                }, this),
                " responded to your appointment schedule question. "
              ] }, void 0, true, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 541,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "activity-time", children: "10.00 pm" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
                lineNumber: 542,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 540,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
              lineNumber: 539,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 533,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 532,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
            lineNumber: 531,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
          lineNumber: 466,
          columnNumber: 33
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
        lineNumber: 354,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
      lineNumber: 149,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
      lineNumber: 148,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
      lineNumber: 147,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
    lineNumber: 38,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/contact/contact-cards/ContactDetails.jsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
};
_c = ContactDetails;
var ContactDetails_default = ContactDetails;
var _c;
$RefreshReg$(_c, "ContactDetails");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/data/contact/contact-card-data.js
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/data/contact/contact-card-data.js"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var contactCards = [
  {
    id: 1,
    name: "Morgan Freeman",
    mail: "morgan@jampack.com",
    phone: "+145 52 5689",
    position: "Design",
    badge: "primary",
    avatar: avatar2_default,
    checked: false,
    stared: false
  },
  {
    id: 2,
    name: "Huma Therman",
    mail: "huma@clariesup.au",
    phone: "+234 48 2365",
    position: "Developer",
    badge: "primary",
    avatar: avatar9_default,
    checked: false,
    stared: false
  },
  {
    id: 3,
    name: "Charlie Chaplin",
    mail: "charlie@leernoca.monster",
    phone: "+741 56 1916",
    position: "Inventory",
    badge: "danger",
    initAvatar: [{ name: "C", variant: "avatar-soft-primary" }],
    checked: false,
    stared: true
  },
  {
    id: 4,
    name: "Winston Churchil",
    mail: "winston@worthniza.ga",
    phone: "+145 52 5463",
    position: "Human Resource",
    badge: "danger",
    avatar: avatar10_default,
    checked: false,
    stared: false
  },
  {
    id: 5,
    name: "Jaquiline Joker",
    mail: "contact@hencework.com",
    phone: "+91-34-2636-1916",
    position: "Design",
    badge: "primary",
    avatar: avatar3_default,
    checked: false,
    stared: true
  },
  {
    id: 6,
    name: "Tom Cruz",
    mail: "tomcz@jampack.com",
    phone: "+456 52 4862",
    position: "Developer",
    badge: "primary",
    avatar: avatar7_default,
    checked: false,
    stared: false
  },
  {
    id: 7,
    name: "Daniel Craig",
    mail: "danialc@jampack.com",
    phone: "+145 52 1916",
    position: "Design",
    badge: "success",
    initAvatar: [{ name: "D", variant: "avatar-soft-danger" }],
    checked: false,
    stared: true
  },
  {
    id: 8,
    name: "Katharine Jones",
    mail: "joneskath@jampack.com",
    phone: "+741 56 1916",
    position: " Inventory",
    badge: "danger",
    avatar: avatar8_default,
    checked: false,
    stared: true
  },
  {
    id: 9,
    name: "Hencework",
    mail: "contact@hencework.com",
    phone: "+145 52 5478",
    position: "Design",
    badge: "primary",
    initAvatar: [{ name: "H", variant: "avatar-primary" }],
    checked: false,
    stared: false
  },
  {
    id: 10,
    name: "Daniel Raynolds",
    mail: "danialraynolds@hencework.com",
    phone: "+145 36 1916",
    position: "Design",
    badge: "primary",
    avatar: avatar13_default,
    checked: false,
    stared: false
  },
  {
    id: 11,
    name: "John Brother",
    mail: "john@cryodrakan.info",
    phone: "+456 52 1916",
    position: "Human Resource",
    badge: "danger",
    initAvatar: [{ name: "J", variant: "avatar-light" }],
    checked: false,
    stared: false
  },
  {
    id: 12,
    name: "Dean Shaw",
    mail: "dean-shaw@pown.me",
    phone: "+234 48 1916",
    position: "Design",
    badge: "primary",
    avatar: avatar15_default,
    checked: false,
    stared: true
  },
  {
    id: 13,
    name: "Cavin Spancy",
    mail: "cavins11@budgequot.press",
    phone: "+234 48 1916",
    position: "Design",
    badge: "primary",
    avatar: avatar11_default,
    checked: false,
    stared: true
  },
  {
    id: 14,
    name: "Justin Bieber",
    mail: "justin@tulberga.ga",
    phone: "+745 56 1916",
    position: "Inventory",
    badge: "danger",
    avatar: avatar14_default,
    checked: false,
    stared: false
  },
  {
    id: 15,
    name: "Auston Kutcher",
    mail: "auston@cutcher.com",
    phone: "+145 52 1916",
    position: "Human Resource",
    badge: "warning",
    avatar: avatar5_default,
    checked: false,
    stared: false
  }
];

// app/routes/apps/contact/contact-cards/ContactCardsBody.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/contact/contact-cards/ContactCardsBody.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var ContactCardsBody = () => {
  _s();
  const [contacts, setContacts] = (0, import_react2.useState)(contactCards);
  const [showDetails, setShowDetails] = (0, import_react2.useState)(false);
  const [multipleSelection, setMultipleSelection] = (0, import_react2.useState)(false);
  const toggleCheck = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts[index].checked = !updatedContacts[index].checked;
    setContacts(updatedContacts);
  };
  (0, import_react2.useEffect)(() => {
    const anyChecked = contacts.some((contact) => contact.checked);
    setMultipleSelection(anyChecked);
  }, [contacts]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "contact-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "collapse", id: "collapseQuick", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "quick-access-form-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default, { className: "quick-access-form border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { className: "gx-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 10, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "position-relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dropify-square", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "file", className: "dropify-1" }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 54,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 53,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { md: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { className: "gx-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { lg: 4, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { placeholder: "First name*", defaultValue: true, type: "text" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 60,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 59,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { placeholder: "Last name*", defaultValue: true, type: "text" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 63,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 62,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 58,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { lg: 4, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { placeholder: "Email Id*", defaultValue: true, type: "text" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 68,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 67,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { placeholder: "Phone", defaultValue: true, type: "text" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 71,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 70,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 66,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { lg: 4, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { placeholder: "Department", defaultValue: true, type: "text" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 76,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 75,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Select, { id: "input_tags", multiple: true, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { children: "Collaborator" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                  lineNumber: 80,
                  columnNumber: 65
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { children: "Designer" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                  lineNumber: 81,
                  columnNumber: 65
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { children: "Developer" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                  lineNumber: 82,
                  columnNumber: 65
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 79,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 78,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 74,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 57,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 56,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
          lineNumber: 52,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
          lineNumber: 51,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xxl: 2, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { "data-bs-toggle": "collapse", "data-bs-target": "#collapseExample", "aria-expanded": "false", className: "btn btn-block btn-primary ", children: "Create New" }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 92,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 91,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { "data-bs-toggle": "collapse", disabled: true, "data-bs-target": "#collapseExample", "aria-expanded": "false", className: "btn btn-block btn-secondary", children: "Discard" }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 96,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 95,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
          lineNumber: 90,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
        lineNumber: 50,
        columnNumber: 33
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
        lineNumber: 49,
        columnNumber: 29
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
        lineNumber: 48,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
        lineNumber: 47,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: (0, import_classnames.default)("contact-card-view", {
        "select-multiple": multipleSelection
      }), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { className: "mb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xs: 7, mb: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "contact-toolbar-left", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "d-xxl-flex d-none align-items-center mb-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Select, { size: "sm", className: "w-120p", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 1, children: "Bulk actions" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                  lineNumber: 112,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 2, children: "Edit" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                  lineNumber: 113,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 3, children: "Move to trash" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                  lineNumber: 114,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 111,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button_default, { size: "sm", variant: "light", className: "ms-2", children: "Apply" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 116,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 110,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Group, { className: "d-xxl-flex d-none align-items-center mb-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "flex-shrink-0 mb-0 me-2", children: "Sort by:" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 119,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Select, { size: "sm", className: "w-130p", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 1, children: "Date Created" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                  lineNumber: 121,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 2, children: "Date Edited" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                  lineNumber: 122,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 3, children: "Frequent Contacts" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                  lineNumber: 123,
                  columnNumber: 45
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 4, children: "Recently Added" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                  lineNumber: 124,
                  columnNumber: 45
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 120,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 118,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Select, { size: "sm", className: "d-flex align-items-center w-130p", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 1, children: "Export to CSV" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 128,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 2, children: "Export to PDF" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 129,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 3, children: "Send Message" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 130,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 4, children: "Delegate Access" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 131,
                columnNumber: 41
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 127,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 109,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 108,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { xs: 5, mb: 3, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "contact-toolbar-right", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { id: "datable_1_filter", className: "dataTables_filter", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Control, { size: "sm", type: "search", placeholder: "Search" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 139,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 138,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 137,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dataTables_length", id: "datable_1_length", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { children: [
              "View",
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Select, { size: "sm", name: "datable_1_length", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 10, children: "10" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                  lineNumber: 146,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 25, children: "25" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                  lineNumber: 147,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 50, children: "50" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                  lineNumber: 148,
                  columnNumber: 49
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: 100, children: "100" }, void 0, false, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                  lineNumber: 149,
                  columnNumber: 49
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 145,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 143,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 142,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dataTables_info", id: "datable_1_info", role: "status", "aria-live": "polite", children: "1 - 10 of 11" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 153,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dataTables_paginate paging_simple_numbers", id: "datable_1_paginate", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "pagination custom-pagination pagination-simple m-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "paginate_button page-item previous disabled", id: "datable_1_previous", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#some", "data-dt-idx": 0, tabIndex: 0, className: "page-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-arrow-left-s-line" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 158,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 157,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 156,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "paginate_button page-item active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#some", "data-dt-idx": 1, tabIndex: 0, className: "page-link", children: "1" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 162,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 161,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "paginate_button page-item ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#some", "data-dt-idx": 2, tabIndex: 0, className: "page-link", children: "2" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 165,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 164,
                columnNumber: 45
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "paginate_button page-item next", id: "datable_1_next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#some", "data-dt-idx": 3, tabIndex: 0, className: "page-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-arrow-right-s-line" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 169,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 168,
                columnNumber: 49
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 167,
                columnNumber: 45
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 155,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 154,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 136,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 135,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
          lineNumber: 107,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { className: "row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 mb-5 gx-3", children: contacts.map((contact, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default, { className: "card-border contact-card", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Body, { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check, { type: "checkbox", className: "form-check-lg", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check.Input, { type: "checkbox", className: "check-select", checked: contact.checked, onChange: () => toggleCheck(index) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 182,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form_default.Check.Label, { htmlFor: "chk_sel_0" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 183,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 181,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "card-action-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Toggle, { variant: "flush-dark", className: "btn-icon btn-rounded flush-soft-hover no-caret ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "btn-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(more_vertical_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 190,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 189,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 188,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 187,
                columnNumber: 53
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Menu, { align: "end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "icon wb-reply", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                    lineNumber: 195,
                    columnNumber: 72
                  }, this),
                  "Reply"
                ] }, void 0, true, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                  lineNumber: 195,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "icon wb-share", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                    lineNumber: 196,
                    columnNumber: 72
                  }, this),
                  "Forward"
                ] }, void 0, true, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                  lineNumber: 196,
                  columnNumber: 57
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Dropdown_default.Item, { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "icon wb-trash", "aria-hidden": "true" }, void 0, false, {
                    fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                    lineNumber: 197,
                    columnNumber: 72
                  }, this),
                  "Delete"
                ] }, void 0, true, {
                  fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                  lineNumber: 197,
                  columnNumber: 57
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 194,
                columnNumber: 53
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 186,
              columnNumber: 49
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 185,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "avatar avatar-xl avatar-rounded", children: contact.avatar ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: contact.avatar, alt: "user", className: "avatar-img" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 202,
              columnNumber: 67
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: contact.initAvatar.map((initAvt, indx) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: `avatar avatar-xl avatar-rounded ${initAvt.variant}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "initial-wrap", children: initAvt.name }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 204,
              columnNumber: 69
            }, this) }, indx, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 203,
              columnNumber: 100
            }, this)) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 202,
              columnNumber: 132
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 201,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "user-name", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: (0, import_classnames.default)("contact-star", {
                "marked": contact.stared
              }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(star_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 215,
                columnNumber: 57
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 214,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 211,
                columnNumber: 49
              }, this),
              contact.name
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 210,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "user-email", children: contact.mail }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 220,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "user-contact", children: contact.phone }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 221,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "user-desg", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Badge_default, { bg: contact.badge, className: "badge-indicator me-2" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 224,
                columnNumber: 49
              }, this),
              contact.position
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 222,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 180,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card_default.Footer, { className: "text-muted position-relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "d-flex align-items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(inbox_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 231,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 230,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "fs-7 lh-1", children: "Message" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 233,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 229,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "v-separator-full m-0" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 235,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#", className: "d-flex align-items-center", onClick: () => setShowDetails(!showDetails), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "feather-icon me-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(user_check_default, {}, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 238,
                columnNumber: 53
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 237,
                columnNumber: 49
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "fs-7 lh-1", children: "Profile" }, void 0, false, {
                fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
                lineNumber: 240,
                columnNumber: 49
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 236,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 228,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
          lineNumber: 179,
          columnNumber: 37
        }, this) }, contact.id, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
          lineNumber: 178,
          columnNumber: 63
        }, this)) }, void 0, false, {
          fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
          lineNumber: 177,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Row_default, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { sm: 12, md: 5, className: "d-flex align-items-center justify-content-center justify-content-md-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "dataTables_info", children: "1 - 10 of 30" }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 249,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 248,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Col_default, { sm: 12, md: 7, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "pagination custom-pagination pagination-simple mb-0 justify-content-center justify-content-md-end", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "paginate_button page-item previous disabled", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#some", "data-dt-idx": 0, tabIndex: 0, className: "page-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-arrow-left-s-line" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 255,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 254,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 253,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "paginate_button page-item active", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#some", "data-dt-idx": 1, tabIndex: 0, className: "page-link", children: "1" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 259,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 258,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "paginate_button page-item ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#some", "data-dt-idx": 2, tabIndex: 0, className: "page-link", children: "2" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 262,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 261,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "paginate_button page-item next", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "#some", "data-dt-idx": 4, tabIndex: 0, className: "page-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("i", { className: "ri-arrow-right-s-line" }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 266,
              columnNumber: 45
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 265,
              columnNumber: 41
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
              lineNumber: 264,
              columnNumber: 37
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 252,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
            lineNumber: 251,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
          lineNumber: 247,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
        lineNumber: 104,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
      lineNumber: 46,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
      lineNumber: 45,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ContactDetails_default, { show: showDetails, onHide: () => setShowDetails(!showDetails) }, void 0, false, {
      fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
      lineNumber: 276,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/contact/contact-cards/ContactCardsBody.jsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
};
_s(ContactCardsBody, "Ywh05aRYV8adt9VRpiJRHVfVHrs=");
_c2 = ContactCardsBody;
var ContactCardsBody_default = ContactCardsBody;
var _c2;
$RefreshReg$(_c2, "ContactCardsBody");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/apps/contact/contact-cards/route.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/contact/contact-cards/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/contact/contact-cards/route.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var ContactCards = () => {
  _s2();
  const [showSidebar, setShowSidebar] = (0, import_react3.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hk-pg-body py-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: (0, import_classnames2.default)("contactapp-wrap", {
    "contactapp-sidebar-toggle": showSidebar
  }), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ContactAppSidebar_default, {}, void 0, false, {
      fileName: "app/routes/apps/contact/contact-cards/route.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "contactapp-content", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "contactapp-detail-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ContactAppHeader_default, { toggleSidebar: () => setShowSidebar(!showSidebar), show: showSidebar }, void 0, false, {
        fileName: "app/routes/apps/contact/contact-cards/route.jsx",
        lineNumber: 37,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ContactCardsBody_default, {}, void 0, false, {
        fileName: "app/routes/apps/contact/contact-cards/route.jsx",
        lineNumber: 38,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/contact/contact-cards/route.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/contact/contact-cards/route.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/contact/contact-cards/route.jsx",
    lineNumber: 31,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/contact/contact-cards/route.jsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s2(ContactCards, "Jn+Blp4AInVy8bzFY0VrkhtmHTg=");
_c3 = ContactCards;
var route_default = ContactCards;
var _c3;
$RefreshReg$(_c3, "ContactCards");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/contact/contact-cards/route-4MY7MCIB.js.map
