import { _ as __nuxt_component_0, a as _sfc_main$1 } from './CoinNavButton-gZeKZusF.mjs';
import { p as useRoute, a as __nuxt_component_0$3, k as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, withAsyncContext, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useFetch } from './fetch-DtnuwKoX.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const historyId = route.params.id;
    const {
      data: historyDetail,
      pending,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/api/history/${historyId}`, {
      lazy: true
    }, "$KudfHyr8g5")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoinHeadBar = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_1$1;
      const _component_CoinNavButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CoinHeadBar, null, null, _parent));
      _push(`<main class="p-6"><div class="max-w-lg mx-auto space-y-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/history",
        class: "flex items-center space-x-2 text-blue-600 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-left",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:arrow-left",
                class: "w-5 h-5"
              }),
              createVNode("span", null, "\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(pending)) {
        _push(`<div class="text-center p-10"><p>\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14...</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="bg-red-100 p-4 rounded-lg text-red-700"><p>\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34 \u0E2B\u0E23\u0E37\u0E2D\u0E40\u0E01\u0E34\u0E14\u0E02\u0E49\u0E2D\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14</p></div>`);
      } else if (unref(historyDetail)) {
        _push(`<div class="space-y-8"><section class="bg-white p-6 rounded-2xl shadow-xl"><h3 class="font-semibold text-gray-800 mb-4">\u0E20\u0E32\u0E1E\u0E17\u0E35\u0E48\u0E15\u0E23\u0E27\u0E08\u0E08\u0E31\u0E1A</h3><div class="rounded-xl overflow-hidden border"><img${ssrRenderAttr("src", unref(historyDetail).labeledImage)} alt="Labeled Image" class="w-full h-auto object-contain"></div></section><section class="bg-white p-6 rounded-2xl shadow-xl"><h2 class="font-semibold text-gray-800 mb-4">\u0E1C\u0E25\u0E25\u0E31\u0E1E\u0E18\u0E4C</h2><div class="bg-green-50 p-6 rounded-xl border border-green-200 text-center"><div class="text-4xl font-bold text-green-600">${ssrInterpolate(unref(historyDetail).totalCount)}</div><div class="text-lg text-green-700">\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E17\u0E35\u0E48\u0E1E\u0E1A</div><div class="text-2xl font-semibold text-green-800 mt-4">${ssrInterpolate(unref(historyDetail).totalValue)} \u0E1A\u0E32\u0E17 </div></div>`);
        if (unref(historyDetail).details.length > 0) {
          _push(`<div class="mt-6"><h3 class="font-semibold text-gray-800 mb-4"> \u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D: </h3><div class="grid grid-cols-2 gap-3"><!--[-->`);
          ssrRenderList(unref(historyDetail).details, (detail) => {
            _push(`<div class="bg-gray-50 p-4 rounded-xl"><div class="flex items-center justify-between"><span class="text-gray-700">${ssrInterpolate(detail.type)} \u0E1A\u0E32\u0E17</span><span class="font-semibold text-gray-900">${ssrInterpolate(detail.count)} \u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D</span></div></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</section></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="p-6 rounded-2xl shadow-xl border border-gray-100"></div></div></main>`);
      _push(ssrRenderComponent(_component_CoinNavButton, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/history/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-B3l9YARs.mjs.map
