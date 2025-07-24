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
  __name: "CldProductGallery",
  __ssrInlineRender: true,
  props: {
    cloudName: {},
    mediaAssets: {},
    displayProps: {},
    aspectRatio: {},
    imageBreakpoint: {},
    carouselStyle: {},
    indicatorProps: {},
    carouselLocation: {},
    borderColor: {},
    borderWidth: {},
    transition: {},
    zoom: { type: Boolean },
    params: {}
  },
  setup(__props) {
    const cloudinaryRef = ref();
    const props = __props;
    const handleOnLoad = () => {
      if ("cloudinary" in void 0) {
        cloudinaryRef.value = (void 0).cloudinary;
        const options = Object.fromEntries(
          Object.entries(props).filter((elem) => {
            if (typeof elem[1] === "object") {
              return Object.keys(elem[1]).length ? elem : false;
            }
            return Boolean(elem[1]);
          })
        );
        const myGallery = cloudinaryRef.value.galleryWidget({
          container: "#product-gallery",
          cloudName: props.cloudName || useRuntimeConfig().public.cloudinary.cloudName,
          ...options,
          ...props.params
        });
        myGallery.render();
      }
    };
    useHead({
      script: [
        {
          id: `cloudinary-product-gallery-${Math.floor(Math.random() * 100)}`,
          src: `https://product-gallery.cloudinary.com/all.js`,
          onload: handleOnLoad,
          onerror: (e) => console.error(
            `Failed to load Cloudinary Product Gallery: ${e.message}`
          )
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "product-gallery" }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+cloudinary@4.0.0_magicast@0.3.5_typescript@5.8.3/node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldProductGallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CldProductGallery-Bv4oTg6w.mjs.map
