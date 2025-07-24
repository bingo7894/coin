import { u as useHead, w as useRuntimeConfig } from './server.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CldMediaLibrary",
  __ssrInlineRender: true,
  props: {
    cloudName: {},
    apiKey: {},
    username: {},
    useSaml: { type: Boolean },
    buttonId: {},
    params: {}
  },
  emits: ["onInsert"],
  setup(__props, { emit: __emit }) {
    const cloudinaryRef = ref();
    const props = __props;
    const emit = __emit;
    const handleOnLoad = () => {
      if ("cloudinary" in void 0) {
        cloudinaryRef.value = (void 0).cloudinary;
        const options = Object.fromEntries(
          Object.entries(props).filter((elem) => Boolean(elem[1]))
        );
        cloudinaryRef.value.createMediaLibrary(
          {
            inline_container: "#widget_container",
            cloud_name: props.cloudName || useRuntimeConfig().public.cloudinary.cloudName,
            api_key: props.apiKey || useRuntimeConfig().public.cloudinary.apiKey,
            ...options,
            ...props.params
          },
          {
            insertHandler: function(data) {
              emit("onInsert", data);
            }
          },
          (void 0).getElementById(props.buttonId)
        );
      }
    };
    useHead({
      script: [
        {
          id: "cloudinary-media-library",
          src: `https://media-library.cloudinary.com/global/all.js`,
          onload: handleOnLoad,
          onerror: (e) => console.error(
            `Failed to load Cloudinary Media Library: ${e.message}`
          )
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "widget_container" }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+cloudinary@4.0.0_magicast@0.3.5_typescript@5.8.3/node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldMediaLibrary.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CldMediaLibrary-B04ffb6R.mjs.map
