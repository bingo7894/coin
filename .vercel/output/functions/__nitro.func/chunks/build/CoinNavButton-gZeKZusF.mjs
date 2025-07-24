import { _ as _export_sfc, a as __nuxt_component_0$3, k as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, createBlock, openBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { Home, History, Tag, BarChart, User } from 'lucide-vue-next';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Icon = __nuxt_component_1$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between p-4 bg-white shadow-lg backdrop-blur-sm bg-white/95" }, _attrs))}><div class="flex items-center space-x-3"><div class="relative"><div class="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">`);
  _push(ssrRenderComponent(_component_Icon, {
    name: "lucide:calculator",
    class: "w-4 h-4 text-white"
  }, null, _parent));
  _push(`</div><div class="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div></div><span class="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> CountCoin </span></div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Coin/HeadBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CoinNavButton",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const navItems = [
      { name: "home", label: "\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01", to: "/coin", icon: Home },
      { name: "history", label: "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34", to: "/history", icon: History },
      { name: "tag", label: "\u0E41\u0E17\u0E47\u0E01", to: "/tag", icon: Tag },
      { name: "report", label: "\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19", to: "/report", icon: BarChart },
      { name: "account", label: "\u0E1A\u0E31\u0E0D\u0E0A\u0E35", to: "/account", icon: User }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "fixed bottom-0 w-full bg-white border-t shadow grid grid-cols-5 text-center text-sm z-50" }, _attrs))}><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.name,
          to: item.to,
          class: [
            "flex flex-col items-center py-2 transition-all rounded-t-lg",
            unref(route).path === item.to ? "bg-yellow-100 text-yellow-600 font-semibold" : "text-gray-500 hover:bg-gray-100"
          ]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.icon), { class: "w-5 h-5 mb-1" }, null), _parent2, _scopeId);
              _push2(`<span${_scopeId}>${ssrInterpolate(item.label)}</span>`);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "w-5 h-5 mb-1" })),
                createVNode("span", null, toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Coin/CoinNavButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_0 as _, _sfc_main as a };
//# sourceMappingURL=CoinNavButton-gZeKZusF.mjs.map
