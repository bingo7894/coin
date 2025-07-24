import { _ as __nuxt_component_0, a as _sfc_main$1 } from './CoinNavButton-gZeKZusF.mjs';
import { p as useRoute, a as __nuxt_component_0$3, k as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, withCtx, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const route = useRoute();
    const ids = ((_a = route.query.ids) == null ? void 0 : _a.split(",")) || [];
    const getCoinValue = (type) => {
      switch (type) {
        case "050":
          return 0.5;
        case "025":
          return 0.25;
        case "1":
          return 1;
        case "2":
          return 2;
        case "5":
          return 5;
        case "10":
          return 10;
        default:
          return Number(type);
      }
    };
    const getDisplayValue = (type) => {
      switch (type) {
        case "050":
          return "0.5";
        case "025":
          return "0.25";
        default:
          return type;
      }
    };
    const {
      data: reportData,
      pending,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/report", {
      method: "POST",
      body: { ids },
      lazy: false
    }, "$mh-9UM5KMi")), __temp = await __temp, __restore(), __temp);
    const summary = computed(() => {
      if (!reportData.value || reportData.value.length === 0) {
        return null;
      }
      const totalValue = reportData.value.reduce((sum, record) => {
        const recordValue = record.details.reduce((detailSum, detail) => {
          return detailSum + detail.count * getCoinValue(detail.type.toString());
        }, 0);
        return sum + recordValue;
      }, 0);
      const totalCoins = reportData.value.reduce(
        (sum, record) => sum + record.totalCount,
        0
      );
      const coinCounts = {};
      reportData.value.forEach((record) => {
        record.details.forEach((detail) => {
          const type = detail.type.toString();
          if (!coinCounts[type]) {
            coinCounts[type] = 0;
          }
          coinCounts[type] += detail.count;
        });
      });
      const aggregatedDetails = Object.entries(coinCounts).map(([type, count]) => ({
        type,
        count,
        value: getCoinValue(type),
        displayValue: getDisplayValue(type)
      })).sort((a, b) => b.value - a.value);
      return {
        totalValue,
        totalCoins,
        aggregatedDetails
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoinHeadBar = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_1$1;
      const _component_CoinNavButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CoinHeadBar, null, null, _parent));
      _push(`<main class="p-6"><div class="max-w-2xl mx-auto space-y-8"><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/history",
        class: "flex items-center space-x-2 text-blue-600 hover:text-blue-800 hover:underline transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, {
              name: "lucide:arrow-left",
              class: "w-5 h-5"
            }, null, _parent2, _scopeId));
            _push2(`<span class="font-medium"${_scopeId}>\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34</span>`);
          } else {
            return [
              createVNode(_component_Icon, {
                name: "lucide:arrow-left",
                class: "w-5 h-5"
              }),
              createVNode("span", { class: "font-medium" }, "\u0E01\u0E25\u0E31\u0E1A\u0E44\u0E1B\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="text-sm text-gray-500">\u0E23\u0E27\u0E21 ${ssrInterpolate(unref(ids).length)} \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23</div></div>`);
      if (unref(pending)) {
        _push(`<div class="text-center p-12"><div class="inline-flex items-center space-x-3"><div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div><p class="text-gray-600 font-medium">\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E2A\u0E23\u0E38\u0E1B...</p></div></div>`);
      } else if (unref(error)) {
        _push(`<div class="bg-red-50 border border-red-200 p-6 rounded-2xl"><div class="flex items-center space-x-3">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:alert-circle",
          class: "w-6 h-6 text-red-500"
        }, null, _parent));
        _push(`<div><h3 class="font-semibold text-red-800">\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19</h3><p class="text-red-700">\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E17\u0E33\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19</p></div></div></div>`);
      } else if (unref(summary)) {
        _push(`<div class="space-y-8"><section class="bg-white p-8 rounded-3xl shadow-lg border border-gray-200"><div class="text-center mb-6"><h2 class="text-2xl font-bold text-gray-800 mb-2">\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E2A\u0E23\u0E38\u0E1B</h2><p class="text-gray-600">\u0E2A\u0E23\u0E38\u0E1B\u0E21\u0E39\u0E25\u0E04\u0E48\u0E32\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14</p></div><div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200 text-center"><div class="space-y-4"><div><div class="text-5xl font-bold text-blue-600 mb-2">${ssrInterpolate(unref(summary).totalValue.toLocaleString())}</div><div class="text-xl text-blue-700 font-medium">\u0E1A\u0E32\u0E17</div></div><div class="border-t border-blue-200 pt-4"><div class="text-3xl font-semibold text-blue-800">${ssrInterpolate(unref(summary).totalCoins.toLocaleString())}</div><div class="text-lg text-blue-700">\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14</div></div></div></div></section>`);
        if (unref(summary).aggregatedDetails.length > 0) {
          _push(`<section class="bg-white p-8 rounded-3xl shadow-lg border border-gray-200"><h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:coins",
            class: "w-6 h-6 mr-2 text-yellow-500"
          }, null, _parent));
          _push(` \u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E41\u0E15\u0E48\u0E25\u0E30\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17 </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!--[-->`);
          ssrRenderList(unref(summary).aggregatedDetails, (detail) => {
            _push(`<div class="group hover:shadow-md transition-shadow bg-gray-50 hover:bg-gray-100 p-6 rounded-xl border border-gray-200"><div class="flex items-center justify-between"><div class="flex items-center space-x-3"><div class="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center"><span class="text-yellow-600 font-bold text-sm">${ssrInterpolate(detail.displayValue)}</span></div><div><div class="font-semibold text-gray-800">${ssrInterpolate(detail.displayValue)} \u0E1A\u0E32\u0E17 </div><div class="text-sm text-gray-600"> \u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D ${ssrInterpolate(detail.displayValue)} \u0E1A\u0E32\u0E17 </div></div></div><div class="text-right"><div class="text-2xl font-bold text-gray-900">${ssrInterpolate(detail.count.toLocaleString())}</div><div class="text-sm text-gray-600">\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D</div></div></div><div class="mt-4 pt-4 border-t border-gray-200"><div class="flex justify-between items-center"><span class="text-sm text-gray-600">\u0E21\u0E39\u0E25\u0E04\u0E48\u0E32\u0E23\u0E27\u0E21</span><span class="font-semibold text-green-600">${ssrInterpolate((detail.count * detail.value).toLocaleString())} \u0E1A\u0E32\u0E17 </span></div></div></div>`);
          });
          _push(`<!--]--></div></section>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<section class="bg-white p-8 rounded-3xl shadow-lg border border-gray-200"><h3 class="text-xl font-bold text-gray-800 mb-6 flex items-center">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:bar-chart-3",
          class: "w-6 h-6 mr-2 text-green-500"
        }, null, _parent));
        _push(` \u0E2A\u0E16\u0E34\u0E15\u0E34\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E34\u0E21 </h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="text-center p-4 bg-green-50 rounded-xl"><div class="text-2xl font-bold text-green-600">${ssrInterpolate(unref(summary).aggregatedDetails.length)}</div><div class="text-sm text-green-700">\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D</div></div><div class="text-center p-4 bg-orange-50 rounded-xl"><div class="text-2xl font-bold text-orange-600">${ssrInterpolate(unref(ids).length)}</div><div class="text-sm text-orange-700">\u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48\u0E19\u0E31\u0E1A</div></div></div></section><section class="flex flex-col sm:flex-row gap-4"><button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:download",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`<span>\u0E2A\u0E48\u0E07\u0E2D\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19</span></button><button class="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center space-x-2">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:share-2",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`<span>\u0E41\u0E0A\u0E23\u0E4C\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19</span></button></section></div>`);
      } else {
        _push(`<div class="text-center p-12">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:file-x",
          class: "w-16 h-16 text-gray-400 mx-auto mb-4"
        }, null, _parent));
        _push(`<h3 class="text-lg font-semibold text-gray-600 mb-2">\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25</h3><p class="text-gray-500">\u0E44\u0E21\u0E48\u0E1E\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19</p></div>`);
      }
      _push(`</div><div class="p-12"></div></main>`);
      _push(ssrRenderComponent(_component_CoinNavButton, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/report/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CcV5sgau.mjs.map
