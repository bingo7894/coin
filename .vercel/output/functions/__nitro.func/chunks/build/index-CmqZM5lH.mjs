import { _ as __nuxt_component_0, a as _sfc_main$1 } from './CoinNavButton-gZeKZusF.mjs';
import { j as useUserSession, k as __nuxt_component_1$1 } from './server.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
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
  setup(__props) {
    const { user } = useUserSession();
    const contactMethods = [
      {
        name: "\u0E2D\u0E35\u0E40\u0E21\u0E25",
        value: "pokpong.padjunreed@gmail.com",
        icon: "lucide:mail",
        href: "mailto:pokpong.padjunreed@gmail.com"
      },
      {
        name: "\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C",
        value: "081-512-7051",
        icon: "lucide:phone",
        href: "tel:0815127051"
      },
      {
        name: "Line",
        value: "@0832003612",
        icon: "lucide:message-circle",
        href: "https://line.me/ti/p/@0832003612"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoinHeadBar = __nuxt_component_0;
      const _component_Icon = __nuxt_component_1$1;
      const _component_CoinNavButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CoinHeadBar, null, null, _parent));
      _push(`<main class="p-6"><div class="max-w-md mx-auto space-y-8">`);
      if (unref(user)) {
        _push(`<section class="bg-white p-8 rounded-2xl shadow-lg text-center"><img${ssrRenderAttr("src", unref(user).avatarUrl || "/img/default-avatar.png")} alt="User Avatar" class="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-200"><h1 class="text-2xl font-bold text-gray-800">${ssrInterpolate(unref(user).name)}</h1><p class="text-gray-500">${ssrInterpolate(unref(user).email)}</p></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="bg-white p-6 rounded-2xl shadow-lg"><h2 class="text-xl font-bold text-gray-800 mb-4 flex items-center">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:headphones",
        class: "w-5 h-5 mr-2 text-blue-500"
      }, null, _parent));
      _push(` \u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32 </h2><div class="space-y-3"><!--[-->`);
      ssrRenderList(contactMethods, (contact) => {
        _push(`<div class="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: contact.icon,
          class: "w-5 h-5 text-gray-600 mr-3"
        }, null, _parent));
        _push(`<div class="flex-1"><p class="text-sm text-gray-500">${ssrInterpolate(contact.name)}</p><a${ssrRenderAttr("href", contact.href)} class="text-blue-600 font-medium hover:text-blue-700 transition-colors">${ssrInterpolate(contact.value)}</a></div></div>`);
      });
      _push(`<!--]--></div></section><section><button class="w-full bg-red-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-red-600 flex items-center justify-center transition-colors">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:log-out",
        class: "w-5 h-5 mr-2"
      }, null, _parent));
      _push(`<span>\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A</span></button></section></div></main>`);
      _push(ssrRenderComponent(_component_CoinNavButton, null, null, _parent));
      _push(`<div class="p-12 rounded-2xl shadow-xl border border-gray-100"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CmqZM5lH.mjs.map
