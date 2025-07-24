import _sfc_main$1 from './CldUploadWidget-BqzuRh5n.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import './server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../_/nitro.mjs';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:crypto';
import 'node:events';
import '@iconify/utils';
import 'consola';
import 'vue-router';
import '@vueuse/core';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './index-7Bv37o6Z.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CldUploadButton",
  __ssrInlineRender: true,
  props: {
    options: {},
    signatureEndpoint: {},
    uploadPreset: {},
    config: {},
    tags: {},
    onOpen: { type: Function },
    onUpload: { type: Function },
    onAbort: { type: Function },
    onBatchCancelled: { type: Function },
    onClose: { type: Function },
    onDisplayChanged: { type: Function },
    onPublicId: { type: Function },
    onQueuesEnd: { type: Function },
    onQueuesStart: { type: Function },
    onRetry: { type: Function },
    onShowCompleted: { type: Function },
    onSourceChanged: { type: Function },
    onSuccess: { type: Function },
    onTags: { type: Function },
    onUploadAdded: { type: Function },
    onError: { type: Function },
    onResult: { type: Function }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CldUploadWidget = _sfc_main$1;
      _push(ssrRenderComponent(_component_CldUploadWidget, mergeProps({
        "upload-preset": _ctx.uploadPreset,
        "on-error": _ctx.onError,
        "on-result": _ctx.onResult
      }, _attrs), {
        default: withCtx(({ open, isLoading }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${ssrRenderAttrs(mergeProps({ type: "button" }, _ctx.$attrs, { disabled: isLoading }))}${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", mergeProps({ type: "button" }, _ctx.$attrs, {
                disabled: isLoading,
                onClick: (e) => {
                  e.preventDefault();
                  open();
                }
              }), [
                renderSlot(_ctx.$slots, "default")
              ], 16, ["disabled", "onClick"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+cloudinary@4.0.0_magicast@0.3.5_typescript@5.8.3/node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CldUploadButton-By2_APTJ.mjs.map
