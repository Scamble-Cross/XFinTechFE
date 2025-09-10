import {
  BlogAside_default,
  TinymceEditor_default
} from "/build/_shared/chunk-AF6LNL6Z.js";
import "/build/_shared/chunk-KLXQ4KPF.js";
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
  mock5_default
} from "/build/_shared/chunk-EABAFHXI.js";
import {
  HkDropZone_default
} from "/build/_shared/chunk-OVUIRAHX.js";
import "/build/_shared/chunk-BRHXWRHF.js";
import "/build/_shared/chunk-OT26VHP7.js";
import "/build/_shared/chunk-5BLZWIUZ.js";
import {
  SimpleBar
} from "/build/_shared/chunk-2BVXKCE4.js";
import {
  edit_default,
  settings_default,
  zap_default
} from "/build/_shared/chunk-YNF3EGPD.js";
import {
  Card_default,
  Col_default,
  Container_default,
  Form_default,
  Nav_default,
  Row_default,
  Tab_default
} from "/build/_shared/chunk-KBRVI47E.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-HFWHD4VB.js";
import "/build/_shared/chunk-CQ7UJNRQ.js";
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
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/apps/blog/post-detail/route.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/apps/blog/post-detail/route.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/apps/blog/post-detail/route.jsx"
  );
  import.meta.hot.lastModified = "1732600247892.489";
}
var PostDetails = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "blog-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SimpleBar, { className: "nicescroll-bar", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container_default, { fluid: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { xxl: 9, lg: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default, { className: "edit-post-form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Post Title" }, void 0, false, {
          fileName: "app/routes/apps/blog/post-detail/route.jsx",
          lineNumber: 44,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { defaultValue: "Building an effective Dashboard User Interface Design", placeholder: "Post Title" }, void 0, false, {
          fileName: "app/routes/apps/blog/post-detail/route.jsx",
          lineNumber: 45,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/post-detail/route.jsx",
        lineNumber: 43,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Group, { className: "mb-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Label, { children: "Permalink" }, void 0, false, {
          fileName: "app/routes/apps/blog/post-detail/route.jsx",
          lineNumber: 48,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form_default.Control, { defaultValue: "https://hencework.com/theme/jampack", placeholder: "Post Title" }, void 0, false, {
          fileName: "app/routes/apps/blog/post-detail/route.jsx",
          lineNumber: 49,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/post-detail/route.jsx",
        lineNumber: 47,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Container, { defaultActiveKey: "tabClassic", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { variant: "tabs", className: "nav-light border-bottom-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { eventKey: "tabClassic", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Classic" }, void 0, false, {
            fileName: "app/routes/apps/blog/post-detail/route.jsx",
            lineNumber: 55,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/post-detail/route.jsx",
            lineNumber: 54,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/post-detail/route.jsx",
            lineNumber: 53,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { eventKey: "tabCode", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Code" }, void 0, false, {
            fileName: "app/routes/apps/blog/post-detail/route.jsx",
            lineNumber: 60,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/post-detail/route.jsx",
            lineNumber: 59,
            columnNumber: 45
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/post-detail/route.jsx",
            lineNumber: 58,
            columnNumber: 41
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/post-detail/route.jsx",
          lineNumber: 52,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border rounded-top-start-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Content, { className: "mt-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Pane, { eventKey: "tabClassic", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "tinymce-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TinymceEditor_default, { initialvalue: `																			<p style="text-align: center;"><span style="color: #bdc3c7;" data-mce-style="color: #bdc3c7;">\u2192 This is a full-featured editor demo. Please explore! \u2190</span></p>
																			<p style="text-align: center;"><br></p>
																			<h2 style="text-align: center; color:#298DFF">TinyMCE is the world's most customizable, and flexible, rich text editor.</h2>
																			<p style="text-align: center;"><strong> <span style="font-size: 14px;" data-mce-style="font-size: 14px;"> <span> A featherweight download, TinyMCE can handle any challenge you throw at it. </span> </span> </strong></p>
																			<p style="text-align: center;"><br></p>
																			<table style="border-collapse: collapse; width: 85%; margin-left: auto; margin-right: auto; border: 0;" data-mce-style="border-collapse: collapse; width: 85%; margin-left: auto; margin-right: auto; border: 0;" class="mce-item-table">
																				<tbody>
																					<tr>
																						<td style="width: 25%; text-align: center; padding: 7px;" ><span>\u{1F6E0} 50+ <span class="mce-spellchecker-annotation mce-spellchecker-word mce-cram_68622596921598605361436" aria-invalid="spelling" data-mce-highlight-id="mce-cram_68622596921598605361436" data-mce-bogus="1" data-mce-annotation="Plugins" data-mce-lingo="en_us">Plugins</span></span></td>
																						<td style="width: 25%; text-align: center; padding: 7px;" ><span>\u{1F4A1} Premium Support</span></td>
																						<td style="width: 25%; text-align: center; padding: 7px;" ><span>\u{1F58D} Custom Skins</span></td>
																						<td style="width: 25%; text-align: center; padding: 7px;" ><span>\u2699 Full API Access</span></td>
																					</tr>
																				</tbody>
																			</table>
																		` }, void 0, false, {
            fileName: "app/routes/apps/blog/post-detail/route.jsx",
            lineNumber: 69,
            columnNumber: 57
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/post-detail/route.jsx",
            lineNumber: 68,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/post-detail/route.jsx",
            lineNumber: 67,
            columnNumber: 49
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Pane, { eventKey: "tabCode", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { contentEditable: "true", suppressContentEditableWarning: true, children: `<div class="col"> <a href="#some"> <div class="card card-border" style="background-image:url('dist/img/gallery/mock5.jpg');"> </div> </a> </div>` }, void 0, false, {
            fileName: "app/routes/apps/blog/post-detail/route.jsx",
            lineNumber: 73,
            columnNumber: 53
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/post-detail/route.jsx",
            lineNumber: 72,
            columnNumber: 49
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/post-detail/route.jsx",
          lineNumber: 66,
          columnNumber: 45
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/post-detail/route.jsx",
          lineNumber: 65,
          columnNumber: 41
        }, this) }, void 0, false, {
          fileName: "app/routes/apps/blog/post-detail/route.jsx",
          lineNumber: 64,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/post-detail/route.jsx",
        lineNumber: 51,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border advance-option-post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Body, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default.Title, { children: "Advance Option" }, void 0, false, {
          fileName: "app/routes/apps/blog/post-detail/route.jsx",
          lineNumber: 88,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Container, { defaultActiveKey: "summery", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default, { variant: "tabs", className: "nav-line nav-icon nav-light border-bottom", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { eventKey: "summery", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(zap_default, {}, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 95,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 94,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 93,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Post Slider Images" }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 98,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/blog/post-detail/route.jsx",
              lineNumber: 92,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/post-detail/route.jsx",
              lineNumber: 91,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(settings_default, {}, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 105,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 104,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 103,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Post Settings" }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 108,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/blog/post-detail/route.jsx",
              lineNumber: 102,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/post-detail/route.jsx",
              lineNumber: 101,
              columnNumber: 49
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav_default.Link, { disabled: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-icon-wrap", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "feather-icon", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(edit_default, {}, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 115,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 114,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 113,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "nav-link-text", children: "Version History" }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 118,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/blog/post-detail/route.jsx",
              lineNumber: 112,
              columnNumber: 53
            }, this) }, void 0, false, {
              fileName: "app/routes/apps/blog/post-detail/route.jsx",
              lineNumber: 111,
              columnNumber: 49
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/post-detail/route.jsx",
            lineNumber: 90,
            columnNumber: 45
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Content, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tab_default.Pane, { eventKey: "summery", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HkDropZone_default, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "main-text", children: "Upload a high quality image to" }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 125,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fw-light text-muted", children: " Make your blog post inviting" }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 125,
                columnNumber: 122
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/blog/post-detail/route.jsx",
              lineNumber: 124,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Row_default, { sm: true, className: "row-cols-xl-6 row-cols-lg-3 row-cols-sm-2 row-cols-1 uploaded-img-prev", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", style: {
                backgroundImage: `url(${mock1_default})`
              } }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 130,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 129,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 128,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", style: {
                backgroundImage: `url(${mock2_default})`
              } }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 138,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 137,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 136,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", style: {
                backgroundImage: `url(${mock3_default})`
              } }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 146,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 145,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 144,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", style: {
                backgroundImage: `url(${mock4_default})`
              } }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 154,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 153,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 152,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", style: {
                backgroundImage: `url(${mock5_default})`
              } }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 162,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 161,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 160,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "#", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card_default, { className: "card-border", style: {
                backgroundImage: `url(${mock6_default})`
              } }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 170,
                columnNumber: 65
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 169,
                columnNumber: 61
              }, this) }, void 0, false, {
                fileName: "app/routes/apps/blog/post-detail/route.jsx",
                lineNumber: 168,
                columnNumber: 57
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/apps/blog/post-detail/route.jsx",
              lineNumber: 127,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/apps/blog/post-detail/route.jsx",
            lineNumber: 123,
            columnNumber: 49
          }, this) }, void 0, false, {
            fileName: "app/routes/apps/blog/post-detail/route.jsx",
            lineNumber: 122,
            columnNumber: 45
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/apps/blog/post-detail/route.jsx",
          lineNumber: 89,
          columnNumber: 41
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/apps/blog/post-detail/route.jsx",
        lineNumber: 87,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "app/routes/apps/blog/post-detail/route.jsx",
        lineNumber: 86,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/apps/blog/post-detail/route.jsx",
      lineNumber: 42,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/blog/post-detail/route.jsx",
      lineNumber: 41,
      columnNumber: 25
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Col_default, { xxl: 3, lg: 4, className: "col-xxl-3 col-lg-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlogAside_default, {}, void 0, false, {
      fileName: "app/routes/apps/blog/post-detail/route.jsx",
      lineNumber: 185,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "app/routes/apps/blog/post-detail/route.jsx",
      lineNumber: 184,
      columnNumber: 25
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/apps/blog/post-detail/route.jsx",
    lineNumber: 40,
    columnNumber: 21
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/blog/post-detail/route.jsx",
    lineNumber: 39,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/blog/post-detail/route.jsx",
    lineNumber: 38,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/apps/blog/post-detail/route.jsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
};
_c = PostDetails;
var route_default = PostDetails;
var _c;
$RefreshReg$(_c, "PostDetails");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  route_default as default
};
//# sourceMappingURL=/build/routes/apps/blog/post-detail/route-SPAE76IW.js.map
