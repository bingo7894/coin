import { w as useRuntimeConfig, u as useHead } from './server.mjs';
import { defineComponent, ref, watch, useSSRContext } from 'vue';
import { ssrRenderSlot } from 'vue/server-renderer';
import { g as getUploadWidgetOptions, a as generateUploadWidgetResultCallback, b as generateSignatureCallback, U as UPLOAD_WIDGET_EVENTS } from './index-7Bv37o6Z.mjs';
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

function triggerOnIdle(callback) {
  return setTimeout(() => callback(), 1);
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CldUploadWidget",
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
    var _a;
    const props = __props;
    const {
      onClose,
      onError,
      onOpen,
      onUpload,
      options,
      signatureEndpoint,
      uploadPreset,
      onAbort,
      onBatchCancelled,
      onDisplayChanged,
      onPublicId,
      onQueuesEnd,
      onQueuesStart,
      onRetry,
      onShowCompleted,
      onSourceChanged,
      onSuccess,
      onTags,
      onUploadAdded,
      config
    } = props;
    const cloudinary = ref();
    const widget = ref();
    const error = ref();
    const results = ref();
    const isScriptLoading = ref(true);
    const instanceMethods = {
      close,
      destroy,
      hide,
      isDestroyed,
      isMinimized,
      isShowing,
      minimize,
      open,
      show,
      update,
      "abort": onAbort,
      "batch-cancelled": onBatchCancelled,
      "display-changed": onDisplayChanged,
      "publicid": onPublicId,
      "queues-end": onQueuesEnd,
      "queues-start": onQueuesStart,
      "retry": onRetry,
      "show-completed": onShowCompleted,
      "source-changed": onSourceChanged,
      "success": onSuccess,
      "tags": onTags,
      "upload-added": onUploadAdded
    };
    const uploadSignature = signatureEndpoint && generateSignatureCallback({
      signatureEndpoint: String(signatureEndpoint),
      fetch
    });
    const uploadOptions = getUploadWidgetOptions(
      {
        uploadPreset: uploadPreset || useRuntimeConfig().public.cloudinary.uploadPreset,
        apiKey: useRuntimeConfig().public.cloudinary.apiKey,
        uploadSignature,
        ...options
      },
      {
        cloud: {
          cloudName: useRuntimeConfig().public.cloudinary.cloudName,
          apiKey: useRuntimeConfig().public.cloudinary.apiKey
        },
        ...options,
        ...instanceMethods,
        ...config
      }
    );
    const resultsCallback = generateUploadWidgetResultCallback({
      onError: (uploadError) => {
        error.value = uploadError;
        if (typeof onError === "function" && results.value) {
          onError(uploadError, results.value);
        }
      },
      onResult: (uploadResult) => {
        if (typeof (uploadResult == null ? void 0 : uploadResult.event) !== "string") return;
        results.value = uploadResult;
        const widgetEvent = UPLOAD_WIDGET_EVENTS[uploadResult.event];
        if (typeof widgetEvent === "string" && typeof props[widgetEvent] === "function") {
          const callback = props[widgetEvent];
          callback(uploadResult, {
            widget: widget.value.current,
            ...instanceMethods
          });
        }
        const widgetEventAction = `${widgetEvent}Action`;
        if (widgetEventAction && typeof props[widgetEventAction] === "function") {
          const action = props[widgetEventAction];
          action(uploadResult);
        }
      }
    });
    if ((_a = props.tags) == null ? void 0 : _a.length) {
      uploadOptions.showAdvancedOptions = true;
      uploadOptions.getTags = (cb, prefix) => {
        var _a2;
        return cb(prefix ? (_a2 = props.tags) == null ? void 0 : _a2.filter((t) => !t.indexOf(prefix)) : props.tags);
      };
    }
    watch(results, () => {
      var _a2, _b;
      if (typeof results.value === "undefined") return;
      const isSuccess = ((_a2 = results.value) == null ? void 0 : _a2.event) === "success";
      const isClosed = ((_b = results.value) == null ? void 0 : _b.event) === "display-changed" && results.value.info === "hidden";
      if (isSuccess && typeof onUpload === "function") {
        onUpload(results.value);
      }
      if (isClosed && typeof onClose === "function") {
        onClose(widget.value);
      }
    });
    watch(error, () => {
      if (error.value && typeof onError === "function") {
        onError(error.value, widget.value);
      }
    });
    function handleOnLoad() {
      isScriptLoading.value = false;
      if (!cloudinary.value) {
        if ("cloudinary" in void 0) {
          cloudinary.value = (void 0).cloudinary;
        }
      }
      triggerOnIdle(() => {
        if (!widget.value) {
          widget.value = createWidget();
        }
      });
    }
    function createWidget() {
      return cloudinary.value.createUploadWidget(uploadOptions, resultsCallback);
    }
    function invokeInstanceMethod(method) {
      if (!widget.value) {
        widget.value = createWidget();
      }
      if (typeof (widget == null ? void 0 : widget.value[method]) === "function") {
        widget.value[method]();
      }
    }
    function close() {
      invokeInstanceMethod("close");
    }
    function destroy() {
      invokeInstanceMethod("destroy");
    }
    function hide() {
      invokeInstanceMethod("hide");
    }
    function isDestroyed() {
      invokeInstanceMethod("isDestroyed");
    }
    function isMinimized() {
      invokeInstanceMethod("isMinimized");
    }
    function isShowing() {
      invokeInstanceMethod("isShowing");
    }
    function minimize() {
      invokeInstanceMethod("minimize");
    }
    function show() {
      invokeInstanceMethod("show");
    }
    function update() {
      invokeInstanceMethod("update");
    }
    function open() {
      invokeInstanceMethod("open");
      if (typeof onOpen === "function") {
        onOpen(widget.value);
      }
    }
    useHead({
      script: [
        {
          id: `cloudinary-uploadwidget-${Math.floor(Math.random() * 100)}`,
          src: "https://widget.cloudinary.com/v2.0/global/all.js",
          onload: handleOnLoad,
          onerror: (e) => console.error(
            `Failed to load Cloudinary Upload Widget: ${e.message}`
          )
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSlot(_ctx.$slots, "default", {
        cloudinary: cloudinary.value,
        widget: widget.value,
        open,
        update,
        show,
        isShowing,
        isMinimized,
        isDestroyed,
        destroy,
        close,
        hide,
        minimize,
        results: results.value,
        error: error.value,
        isLoading: isScriptLoading.value
      }, null, _push, _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+cloudinary@4.0.0_magicast@0.3.5_typescript@5.8.3/node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldUploadWidget.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CldUploadWidget-BqzuRh5n.mjs.map
