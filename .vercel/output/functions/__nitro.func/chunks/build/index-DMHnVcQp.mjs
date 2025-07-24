import { _ as __nuxt_component_0, a as _sfc_main$2 } from './CoinNavButton-gZeKZusF.mjs';
import { o as useRouter, k as __nuxt_component_1$1, _ as _export_sfc } from './server.mjs';
import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import 'vue-router';
import 'lucide-vue-next';
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
import '@vueuse/core';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_1$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl shadow-xl border border-yellow-200" }, _attrs))}><div class="flex items-center space-x-2 mb-4">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "lucide:lightbulb",
    class: "w-5 h-5 text-yellow-600"
  }, null, _parent));
  _push(`<h2 class="font-semibold text-yellow-800">\u0E40\u0E04\u0E25\u0E47\u0E14\u0E25\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E16\u0E48\u0E32\u0E22\u0E20\u0E32\u0E1E</h2></div><ul class="space-y-2 text-sm text-yellow-700"><li class="flex items-start space-x-2">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "lucide:check",
    class: "w-4 h-4 mt-0.5 text-yellow-600"
  }, null, _parent));
  _push(`<span>\u0E27\u0E32\u0E07\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E1A\u0E19\u0E1E\u0E37\u0E49\u0E19\u0E1C\u0E34\u0E27\u0E40\u0E23\u0E35\u0E22\u0E1A \u0E2A\u0E35\u0E02\u0E32\u0E27\u0E2B\u0E23\u0E37\u0E2D\u0E2A\u0E35\u0E2D\u0E48\u0E2D\u0E19</span></li><li class="flex items-start space-x-2">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "lucide:check",
    class: "w-4 h-4 mt-0.5 text-yellow-600"
  }, null, _parent));
  _push(`<span>\u0E43\u0E0A\u0E49\u0E41\u0E2A\u0E07\u0E18\u0E23\u0E23\u0E21\u0E0A\u0E32\u0E15\u0E34\u0E2B\u0E23\u0E37\u0E2D\u0E41\u0E2A\u0E07\u0E17\u0E35\u0E48\u0E40\u0E1E\u0E35\u0E22\u0E07\u0E1E\u0E2D</span></li><li class="flex items-start space-x-2">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "lucide:check",
    class: "w-4 h-4 mt-0.5 text-yellow-600"
  }, null, _parent));
  _push(`<span>\u0E16\u0E48\u0E32\u0E22\u0E08\u0E32\u0E01\u0E14\u0E49\u0E32\u0E19\u0E1A\u0E19\u0E43\u0E19\u0E23\u0E30\u0E22\u0E30\u0E43\u0E01\u0E25\u0E49\u0E1E\u0E2D\u0E2A\u0E21\u0E04\u0E27\u0E23</span></li><li class="flex items-start space-x-2">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "lucide:check",
    class: "w-4 h-4 mt-0.5 text-yellow-600"
  }, null, _parent));
  _push(`<span>\u0E2B\u0E25\u0E35\u0E01\u0E40\u0E25\u0E35\u0E48\u0E22\u0E07\u0E40\u0E07\u0E32\u0E41\u0E25\u0E30\u0E41\u0E2A\u0E07\u0E2A\u0E30\u0E17\u0E49\u0E2D\u0E19</span></li></ul></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Coin/TipsSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    ref(null);
    ref(null);
    const selectedImage = ref(null);
    ref(null);
    const processing = ref(false);
    const result = ref(null);
    const currentSlide = ref(0);
    const slides = ref([
      {
        image: "/images/coinEx1.jpg",
        title: "\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D 1",
        description: "\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E16\u0E48\u0E32\u0E22\u0E20\u0E32\u0E1E\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07"
      },
      {
        image: "/images/coinEx2.jpg",
        title: "\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D 2",
        description: "\u0E21\u0E38\u0E21\u0E21\u0E2D\u0E07\u0E41\u0E25\u0E30\u0E41\u0E2A\u0E07\u0E17\u0E35\u0E48\u0E40\u0E2B\u0E21\u0E32\u0E30\u0E2A\u0E21"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoinHeadBar = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1$1;
      const _component_CoinTipsSection = __nuxt_component_2;
      const _component_CoinNavButton = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CoinHeadBar, null, null, _parent));
      _push(`<main class="flex-1 p-6"><div class="max-w-lg w-full mx-auto space-y-8"><section class="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300"><div class="flex items-center space-x-2 mb-6">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:image-plus",
        class: "w-5 h-5 text-blue-600"
      }, null, _parent));
      _push(`<h2 class="font-semibold text-gray-800">\u0E43\u0E0A\u0E49\u0E20\u0E32\u0E1E\u0E08\u0E32\u0E01\u0E44\u0E2B\u0E19\u0E14\u0E35 ?</h2></div><div class="grid grid-cols-2 gap-4"><button class="group flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:scale-105"><div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:camera",
        class: "w-6 h-6 text-white"
      }, null, _parent));
      _push(`</div><span class="font-medium text-blue-700">\u0E01\u0E25\u0E49\u0E2D\u0E07</span><span class="text-sm text-blue-500 mt-1">\u0E16\u0E48\u0E32\u0E22\u0E20\u0E32\u0E1E\u0E43\u0E2B\u0E21\u0E48</span></button><button class="group flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:from-purple-100 hover:to-purple-200 transition-all duration-300 transform hover:scale-105"><div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-3 group-hover:bg-purple-600 transition-colors">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:folder-open",
        class: "w-6 h-6 text-white"
      }, null, _parent));
      _push(`</div><span class="font-medium text-purple-700">\u0E41\u0E01\u0E25\u0E40\u0E25\u0E2D\u0E23\u0E35</span><span class="text-sm text-purple-500 mt-1">\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E2D\u0E31\u0E25\u0E1A\u0E31\u0E49\u0E21</span></button></div></section><input type="file" accept="image/*" capture="environment" class="hidden"><input type="file" accept="image/*" class="hidden">`);
      if (selectedImage.value) {
        _push(`<section class="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"><div class="flex items-center justify-between mb-6"><div class="flex items-center space-x-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:image",
          class: "w-5 h-5 text-green-600"
        }, null, _parent));
        _push(`<h2 class="font-semibold text-gray-800">\u0E20\u0E32\u0E1E\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01</h2></div><button class="text-red-500 hover:text-red-700 transition-colors">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:x",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</button></div><div class="relative rounded-xl overflow-hidden"><img${ssrRenderAttr("src", selectedImage.value)} alt="Selected image" class="w-full h-64 object-cover"><div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div></div><div class="mt-6 flex gap-4"><button${ssrIncludeBooleanAttr(processing.value) ? " disabled" : ""} class="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">`);
        if (processing.value) {
          _push(`<span class="flex items-center justify-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:loader-2",
            class: "w-5 h-5 mr-2 animate-spin"
          }, null, _parent));
          _push(` \u0E01\u0E33\u0E25\u0E31\u0E07\u0E1B\u0E23\u0E30\u0E21\u0E27\u0E25\u0E1C\u0E25... </span>`);
        } else {
          _push(`<span class="flex items-center justify-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:search",
            class: "w-5 h-5 mr-2"
          }, null, _parent));
          _push(` \u0E19\u0E31\u0E1A\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D </span>`);
        }
        _push(`</button></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (result.value && result.value.labeledImage) {
        _push(`<section class="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"><div class="flex items-center space-x-2 mb-4">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:scan",
          class: "w-5 h-5 text-blue-600"
        }, null, _parent));
        _push(`<h3 class="font-semibold text-gray-800">\u0E20\u0E32\u0E1E\u0E17\u0E35\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E08\u0E31\u0E1A</h3></div><div class="rounded-xl overflow-hidden"><img${ssrRenderAttr("src", result.value.labeledImage)} alt="Labeled Image" class="w-full h-auto object-contain"></div></section>`);
      } else {
        _push(`<!---->`);
      }
      if (result.value) {
        _push(`<section class="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"><div class="flex items-center space-x-2 mb-6">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:trophy",
          class: "w-5 h-5 text-yellow-600"
        }, null, _parent));
        _push(`<h2 class="font-semibold text-gray-800">\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C</h2></div><div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200"><div class="text-center"><div class="text-4xl font-bold text-green-600 mb-2">${ssrInterpolate(result.value.count)}</div><div class="text-lg text-green-700">\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E17\u0E35\u0E48\u0E1E\u0E1A</div><div class="text-2xl font-semibold text-green-800 mt-4">${ssrInterpolate(result.value.totalValue)} \u0E1A\u0E32\u0E17 </div></div></div>`);
        if (result.value.details && result.value.details.length > 0) {
          _push(`<div class="mt-6"><h3 class="font-semibold text-gray-800 mb-4">\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D:</h3><div class="grid grid-cols-2 gap-3"><!--[-->`);
          ssrRenderList(result.value.details, (detail) => {
            _push(`<div class="bg-gray-50 p-4 rounded-xl"><div class="flex items-center justify-between"><span class="text-gray-700">${ssrInterpolate(detail.type)}</span><span class="font-semibold text-gray-900">${ssrInterpolate(detail.count)}</span></div><div class="text-sm text-gray-500 mt-1">${ssrInterpolate(detail.value)} \u0E1A\u0E32\u0E17 </div></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"><div class="flex items-center justify-between mb-6"><div class="flex items-center space-x-2">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:image",
        class: "w-5 h-5 text-green-600"
      }, null, _parent));
      _push(`<h2 class="font-semibold text-gray-800">\u0E20\u0E32\u0E1E\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07</h2></div></div><section><div class="relative"><div class="relative overflow-hidden rounded-xl bg-gray-100 aspect-video"><div class="flex transition-transform duration-500 ease-in-out h-full" style="${ssrRenderStyle({ transform: `translateX(-${currentSlide.value * 100}%)` })}"><!--[-->`);
      ssrRenderList(slides.value, (slide, index) => {
        _push(`<div class="w-full flex-shrink-0 relative"><img${ssrRenderAttr("src", slide.image)}${ssrRenderAttr("alt", slide.title)} class="w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div><div class="absolute bottom-4 left-4 text-white"><h3 class="font-semibold">${ssrInterpolate(slide.title)}</h3><p class="text-sm opacity-90">${ssrInterpolate(slide.description)}</p></div></div>`);
      });
      _push(`<!--]--></div><button class="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"><span class="text-gray-700 text-xl">&lt;</span></button><button class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"><span class="text-gray-700 text-xl">&gt;</span></button><div class="absolute bottom-4 right-4 flex space-x-2"><!--[-->`);
      ssrRenderList(slides.value, (slide, index) => {
        _push(`<button class="${ssrRenderClass([currentSlide.value === index ? "bg-white" : "bg-white/50", "w-2 h-2 rounded-full transition-all duration-200"])}"></button>`);
      });
      _push(`<!--]--></div><div class="absolute top-4 right-4 flex items-center space-x-2 bg-black/20 rounded-full px-3 py-1"><span class="text-white text-xs">Auto</span></div></div><div class="mt-4 text-center"><p class="text-sm text-gray-600">${ssrInterpolate(currentSlide.value + 1)} / ${ssrInterpolate(slides.value.length)} - <span class="text-blue-600">${ssrInterpolate(slides.value[currentSlide.value].title)}</span></p></div></div></section></section>`);
      _push(ssrRenderComponent(_component_CoinTipsSection, null, null, _parent));
      _push(`<div class="p-6 rounded-2xl shadow-xl border border-gray-100"></div></div></main>`);
      _push(ssrRenderComponent(_component_CoinNavButton, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/coin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DMHnVcQp.mjs.map
