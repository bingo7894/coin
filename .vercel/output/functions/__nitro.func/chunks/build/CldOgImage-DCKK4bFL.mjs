import { defineComponent, computed, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, inject, reactive, provide, useSSRContext } from 'vue';
import { o as useRouter, u as useHead } from './server.mjs';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useCldImageUrl } from './useCldImageUrl-B_WU-GYP.mjs';
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

const HeadComponentCtxSymbol = Symbol("head-component");
const TagPositionProps = {
  /**
   * @deprecated Use tagPosition
   */
  body: { type: Boolean, default: void 0 },
  tagPosition: { type: String }
};
const normalizeProps = (_props) => {
  const props = Object.fromEntries(
    Object.entries(_props).filter(([_, value]) => value !== void 0)
  );
  if (typeof props.body !== "undefined") {
    props.tagPosition = props.body ? "bodyClose" : "head";
  }
  if (typeof props.renderPriority !== "undefined") {
    props.tagPriority = props.renderPriority;
  }
  return props;
};
function useHeadComponentCtx() {
  return inject(HeadComponentCtxSymbol, createHeadComponentCtx, true);
}
function createHeadComponentCtx() {
  const prev = inject(HeadComponentCtxSymbol, null);
  if (prev) {
    return prev;
  }
  const input = reactive({});
  const entry = useHead(input);
  const ctx = { input, entry };
  provide(HeadComponentCtxSymbol, ctx);
  return ctx;
}
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: { type: [String, Object, Array], default: void 0 },
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: { type: [String, Object, Array], default: void 0 },
  tabindex: String,
  title: String,
  translate: String,
  /**
   * @deprecated Use tagPriority
   */
  renderPriority: [String, Number],
  /**
   * Unhead prop to modify the priority of the tag.
   */
  tagPriority: { type: [String, Number] }
};
defineComponent({
  name: "NoScript",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    title: String
  },
  setup(props, { slots }) {
    const { input } = useHeadComponentCtx();
    input.noscript || (input.noscript = []);
    const idx = input.noscript.push({}) - 1;
    return () => {
      var _a;
      const noscript = normalizeProps(props);
      const slotVnodes = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const textContent = slotVnodes ? slotVnodes.filter(({ children }) => children).map(({ children }) => children).join("") : "";
      if (textContent) {
        noscript.innerHTML = textContent;
      }
      input.noscript[idx] = noscript;
      return null;
    };
  }
});
defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    input.link || (input.link = []);
    const idx = input.link.push({}) - 1;
    return () => {
      input.link[idx] = normalizeProps(props);
      return null;
    };
  }
});
defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    return () => {
      input.base = normalizeProps(props);
      return null;
    };
  }
});
defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup(_, { slots }) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b, _c;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      input.title = ((_b = defaultSlot == null ? void 0 : defaultSlot[0]) == null ? void 0 : _b.children) ? String((_c = defaultSlot == null ? void 0 : defaultSlot[0]) == null ? void 0 : _c.children) : void 0;
      return null;
    };
  }
});
const Meta = defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    property: String
  },
  setup(props) {
    const { input } = useHeadComponentCtx();
    input.meta || (input.meta = []);
    const idx = input.meta.push({}) - 1;
    return () => {
      const meta = { "http-equiv": props.httpEquiv, ...normalizeProps(props) };
      if ("httpEquiv" in meta) {
        delete meta.httpEquiv;
      }
      input.meta[idx] = meta;
      return null;
    };
  }
});
defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    ...TagPositionProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    /** @deprecated **/
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props, { slots }) {
    const { input } = useHeadComponentCtx();
    input.style || (input.style = []);
    const idx = input.style.push({}) - 1;
    return () => {
      var _a, _b, _c;
      const style = normalizeProps(props);
      const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
      if (textContent) {
        input.style[idx] = style;
        style.textContent = textContent;
      }
      return null;
    };
  }
});
const Head = defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => {
    createHeadComponentCtx();
    return () => {
      var _a, _b;
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup(_props, ctx) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b;
      input.htmlAttrs = { ..._props, ...ctx.attrs };
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup(_props, ctx) {
    const { input } = useHeadComponentCtx();
    return () => {
      var _a, _b;
      input.bodyAttrs = { ..._props, ...ctx.attrs };
      return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
    };
  }
});
const TWITTER_CARD = "summary_large_image";
const OG_IMAGE_WIDTH = 2400;
const OG_IMAGE_WIDTH_RESIZE = 1200;
const OG_IMAGE_HEIGHT = 1254;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CldOgImage",
  __ssrInlineRender: true,
  props: {
    loading: {},
    fetchPriority: {},
    alt: {},
    width: {},
    height: {},
    config: {},
    layout: {},
    priority: { type: Boolean },
    background: {},
    src: {},
    assetType: {},
    deliveryType: {},
    dpr: {},
    format: {},
    quality: {},
    strictTransformations: { type: Boolean },
    aspectRatio: {},
    crop: {},
    gravity: {},
    zoom: {},
    effects: {},
    angle: {},
    art: {},
    autoBrightness: { type: [Boolean, String] },
    autoColor: { type: [Boolean, String] },
    autoContrast: { type: [Boolean, String] },
    assistColorblind: { type: [Boolean, String] },
    blackwhite: { type: [Boolean, String] },
    blur: { type: [Boolean, String] },
    blurFaces: { type: [Boolean, String] },
    blurRegion: { type: [Boolean, String] },
    border: {},
    brightness: { type: [Boolean, String] },
    brightnessHSB: { type: [Boolean, String] },
    cartoonify: { type: [Boolean, String] },
    color: {},
    colorize: {},
    contrast: { type: [Boolean, String] },
    displace: {},
    distort: {},
    fillLight: { type: [Boolean, String] },
    gamma: { type: [Boolean, String] },
    gradientFade: { type: [Boolean, String] },
    grayscale: { type: Boolean },
    hue: { type: [Boolean, String] },
    improve: { type: [Boolean, String] },
    loop: { type: [Boolean, Number, String] },
    multiply: { type: Boolean },
    negate: { type: [String, Boolean] },
    noise: { type: Boolean },
    oilPaint: { type: [String, Boolean] },
    opacity: {},
    outline: { type: [Boolean, String] },
    pixelate: { type: [Boolean, String] },
    pixelateFaces: { type: [Boolean, String] },
    pixelateRegion: { type: [Boolean, String] },
    radius: {},
    redeye: { type: [Boolean, String] },
    replaceColor: {},
    saturation: { type: [Boolean, String] },
    screen: { type: Boolean },
    sepia: { type: [Boolean, String] },
    shadow: { type: [Boolean, String] },
    sharpen: { type: [Boolean, String] },
    shear: {},
    simulateColorblind: { type: [Boolean, String] },
    tint: { type: [Boolean, String] },
    trim: { type: [Boolean, String] },
    unsharpMask: { type: [Boolean, String] },
    vectorize: { type: [Boolean, String] },
    vibrance: { type: [Boolean, String] },
    vignette: { type: [Boolean, String] },
    flags: {},
    namedTransformations: {},
    transformations: {},
    overlays: {},
    text: {},
    preserveTransformations: { type: Boolean },
    rawTransformations: {},
    removeBackground: { type: Boolean },
    sanitize: { type: Boolean },
    seoSuffix: {},
    underlay: {},
    underlays: {},
    version: {},
    zoompan: { type: [String, Boolean, Object] },
    defaultImage: {},
    enhance: { type: Boolean },
    extract: {},
    fillBackground: { type: [Boolean, Object] },
    recolor: {},
    remove: {},
    replace: {},
    replaceBackground: { type: [Object, String, Boolean] },
    restore: { type: Boolean },
    excludeTags: {},
    twitterTitle: {}
  },
  setup(__props) {
    const { currentRoute } = useRouter();
    const props = __props;
    const options = {
      ...props,
      crop: props.crop || "fill",
      gravity: props.gravity || "center",
      height: props.height || OG_IMAGE_HEIGHT,
      src: props.src,
      width: props.width || OG_IMAGE_WIDTH,
      widthResize: props.width || OG_IMAGE_WIDTH_RESIZE
    };
    let imageWidth = typeof options.width === "string" ? Number.parseInt(options.width) : options.width;
    let imageHeight = typeof options.height === "string" ? Number.parseInt(options.height) : options.height;
    if (typeof imageHeight === "number" && typeof imageWidth === "number") {
      imageHeight = OG_IMAGE_WIDTH_RESIZE / imageWidth * imageHeight;
    }
    imageWidth = OG_IMAGE_WIDTH_RESIZE;
    const { url: ogImageUrl } = useCldImageUrl({
      options: {
        ...options,
        format: props.format || "jpg"
      }
    });
    const { url: twitterImageUrl } = useCldImageUrl({
      options: {
        ...options,
        format: props.format || "webp"
      }
    });
    const computedTwitterTitle = computed(
      () => {
        var _a;
        return props.twitterTitle || ((_a = currentRoute.value.meta) == null ? void 0 : _a.title) || "Learn More";
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_Meta = Meta;
      _push(ssrRenderComponent(_component_Head, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_Meta, {
              key: "og-image",
              property: "og:image",
              content: unref(ogImageUrl)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              key: "og-image-secureurl",
              property: "og:image:secure_url",
              content: unref(ogImageUrl)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              key: "og-image-width",
              property: "og:image:width",
              content: unref(imageWidth).toString()
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              key: "og-image-height",
              property: "og:image:height",
              content: unref(imageHeight).toString()
            }, null, _parent2, _scopeId));
            if (_ctx.alt) {
              _push2(ssrRenderComponent(_component_Meta, {
                key: "og-image-alt",
                property: "og:image:alt",
                content: _ctx.alt
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (!((_a = _ctx.excludeTags) == null ? void 0 : _a.includes("twitter:title"))) {
              _push2(ssrRenderComponent(_component_Meta, {
                key: "twitter-title",
                property: "twitter:title",
                content: computedTwitterTitle.value
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_Meta, {
              key: "twitter-card",
              property: "twitter:card",
              content: TWITTER_CARD
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Meta, {
              key: "twitter-image",
              property: "twitter:image",
              content: unref(twitterImageUrl)
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Meta, {
                key: "og-image",
                property: "og:image",
                content: unref(ogImageUrl)
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                key: "og-image-secureurl",
                property: "og:image:secure_url",
                content: unref(ogImageUrl)
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                key: "og-image-width",
                property: "og:image:width",
                content: unref(imageWidth).toString()
              }, null, 8, ["content"]),
              createVNode(_component_Meta, {
                key: "og-image-height",
                property: "og:image:height",
                content: unref(imageHeight).toString()
              }, null, 8, ["content"]),
              _ctx.alt ? (openBlock(), createBlock(_component_Meta, {
                key: "og-image-alt",
                property: "og:image:alt",
                content: _ctx.alt
              }, null, 8, ["content"])) : createCommentVNode("", true),
              !((_b = _ctx.excludeTags) == null ? void 0 : _b.includes("twitter:title")) ? (openBlock(), createBlock(_component_Meta, {
                key: "twitter-title",
                property: "twitter:title",
                content: computedTwitterTitle.value
              }, null, 8, ["content"])) : createCommentVNode("", true),
              createVNode(_component_Meta, {
                key: "twitter-card",
                property: "twitter:card",
                content: TWITTER_CARD
              }),
              createVNode(_component_Meta, {
                key: "twitter-image",
                property: "twitter:image",
                content: unref(twitterImageUrl)
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxtjs+cloudinary@4.0.0_magicast@0.3.5_typescript@5.8.3/node_modules/@nuxtjs/cloudinary/dist/runtime/components/CldOgImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CldOgImage-DCKK4bFL.mjs.map
