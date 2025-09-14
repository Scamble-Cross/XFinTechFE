import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  createHotContext
} from "/build/_shared/chunk-KTLBVDTS.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/@hk-components/@hk-avatar-uploader/@hk-avatar-uploader.jsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/@hk-components/@hk-avatar-uploader/@hk-avatar-uploader.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/@hk-components/@hk-avatar-uploader/@hk-avatar-uploader.jsx"
  );
  import.meta.hot.lastModified = "1732594846000";
}
var HkAvatarUploader = ({
  defaultImg
}) => {
  _s();
  const [imageSrc, setImageSrc] = (0, import_react.useState)(defaultImg);
  const onUpload = (e) => {
    e.preventDefault();
    setImageSrc(URL.createObjectURL(e.target.files[0]));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "photo-upload", className: "avtuploder-circle", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "avtuploder-wrapper", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imageSrc, alt: "demo Img", className: "avtuploder-preview", width: 115, height: 115 }, void 0, false, {
      fileName: "app/@hk-components/@hk-avatar-uploader/@hk-avatar-uploader.jsx",
      lineNumber: 35,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/@hk-components/@hk-avatar-uploader/@hk-avatar-uploader.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "photo-upload", type: "file", onChange: onUpload, className: "d-none" }, void 0, false, {
      fileName: "app/@hk-components/@hk-avatar-uploader/@hk-avatar-uploader.jsx",
      lineNumber: 37,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/@hk-components/@hk-avatar-uploader/@hk-avatar-uploader.jsx",
    lineNumber: 33,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/@hk-components/@hk-avatar-uploader/@hk-avatar-uploader.jsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_s(HkAvatarUploader, "0aoc3fxeJQdICzMSapLxjVHxbNY=");
_c = HkAvatarUploader;
var hk_avatar_uploader_default = HkAvatarUploader;
var _c;
$RefreshReg$(_c, "HkAvatarUploader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  hk_avatar_uploader_default
};
//# sourceMappingURL=/build/_shared/chunk-35NP6KP5.js.map
