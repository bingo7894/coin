import { _ as __nuxt_component_0, a as _sfc_main$1 } from './CoinNavButton-gZeKZusF.mjs';
import { k as __nuxt_component_1$1, a as __nuxt_component_0$3 } from './server.mjs';
import { defineComponent, withAsyncContext, ref, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
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
    let __temp, __restore;
    const {
      data: historyList,
      pending,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/history", {
      lazy: true
    }, "$4opcnaxUir")), __temp = await __temp, __restore(), __temp);
    const selectedItems = ref([]);
    const totalSelectedValue = computed(() => {
      if (!historyList.value) {
        return 0;
      }
      return selectedItems.value.reduce((sum, id) => {
        const item = historyList.value.find((h) => h.id === id);
        return sum + ((item == null ? void 0 : item.totalValue) || 0);
      }, 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoinHeadBar = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1$1;
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_CoinNavButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CoinHeadBar, null, null, _parent));
      _push(`<main class="p-6"><div class="max-w-2xl mx-auto"><div class="flex items-center space-x-3 mb-6">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:history",
        class: "w-7 h-7 text-blue-600"
      }, null, _parent));
      _push(`<h1 class="text-2xl font-bold text-gray-800">\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E19\u0E31\u0E1A\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D</h1></div>`);
      if (unref(selectedItems).length > 0) {
        _push(`<div class="mb-6 p-4 bg-blue-50 rounded-lg flex justify-between items-center"><div><p class="text-lg font-semibold text-blue-800"> \u0E22\u0E2D\u0E14\u0E23\u0E27\u0E21\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01: ${ssrInterpolate(unref(totalSelectedValue))} \u0E1A\u0E32\u0E17 </p><p class="text-sm text-blue-700"> \u0E40\u0E25\u0E37\u0E2D\u0E01 ${ssrInterpolate(unref(selectedItems).length)} \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23 </p></div><button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"> \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(pending)) {
        _push(`<div class="text-center p-10"><p>\u0E01\u0E33\u0E25\u0E31\u0E07\u0E42\u0E2B\u0E25\u0E14\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34...</p></div>`);
      } else if (unref(error)) {
        _push(`<div class="bg-red-100 p-4 rounded-lg text-red-700"><p>\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E42\u0E2B\u0E25\u0E14\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E14\u0E49: ${ssrInterpolate(unref(error).message)}</p></div>`);
      } else if (!unref(historyList) || unref(historyList).length === 0) {
        _push(`<div class="text-center p-10 border-2 border-dashed rounded-xl">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "lucide:archive",
          class: "w-12 h-12 mx-auto text-gray-400"
        }, null, _parent));
        _push(`<h3 class="mt-4 text-lg font-medium text-gray-700"> \u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34 </h3><p class="mt-1 text-sm text-gray-500"> \u0E25\u0E2D\u0E07\u0E19\u0E31\u0E1A\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D\u0E04\u0E23\u0E31\u0E49\u0E07\u0E41\u0E23\u0E01\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E14\u0E39\u0E2A\u0E34! </p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u0E44\u0E1B\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E31\u0E1A\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D `);
            } else {
              return [
                createTextVNode(" \u0E44\u0E1B\u0E17\u0E35\u0E48\u0E2B\u0E19\u0E49\u0E32\u0E19\u0E31\u0E1A\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="space-y-4"><!--[-->`);
        ssrRenderList(unref(historyList), (item) => {
          _push(`<div class="block bg-white p-5 rounded-xl shadow-md transition-all duration-300 border flex items-center space-x-4"><input type="checkbox"${ssrRenderAttr("value", item.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(selectedItems)) ? ssrLooseContain(unref(selectedItems), item.id) : unref(selectedItems)) ? " checked" : ""} class="form-checkbox h-5 w-5 text-blue-600 rounded-md border-gray-300 focus:ring-blue-500"><div class="flex-grow flex items-center justify-between cursor-pointer"><div><p class="font-semibold text-gray-800"> \u0E15\u0E23\u0E27\u0E08\u0E1E\u0E1A ${ssrInterpolate(item.totalCount)} \u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D </p><p class="text-sm text-gray-500 mt-1">${ssrInterpolate(new Date(item.createdAt).toLocaleString("th-TH"))}</p></div><div class="text-right"><p class="text-lg font-bold text-green-600">${ssrInterpolate(item.totalValue)} \u0E1A\u0E32\u0E17 </p>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "lucide:chevron-right",
            class: "w-5 h-5 text-gray-400 inline-block"
          }, null, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/history/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-E1Q_0-IV.mjs.map
