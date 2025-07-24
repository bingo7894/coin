import { _ as _export_sfc, g as __nuxt_component_0$1, h as useToast, n as navigateTo, b as __nuxt_component_0$4, c as useUI, m as mergeConfig, t as twMerge, e as twJoin, f as useInjectButtonGroup, d as appConfig, i as input, l as looseToNumber } from './server.mjs';
import * as e from 'vue';
import { defineComponent, reactive, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, toRefs, resolveComponent, renderSlot, createBlock, createCommentVNode, openBlock, Fragment, renderList, toRef, ref, watch, nextTick, resolveDynamicComponent, computed, useId, provide, readonly, inject, onMounted, onUnmounted, h as h$1, watchEffect, cloneVNode, useSSRContext } from 'vue';
import { useResizeObserver, useEventBus, useDebounceFn } from '@vueuse/core';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrRenderSlot, ssrRenderVNode, ssrRenderAttrs } from 'vue/server-renderer';
import { x as defu } from '../_/nitro.mjs';
import { z } from 'zod';
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
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'node:crypto';
import 'node:events';
import '@iconify/utils';
import 'consola';

const formGroup = {
  wrapper: "",
  inner: "",
  label: {
    wrapper: "flex content-center items-center justify-between",
    base: "block font-medium text-gray-700 dark:text-gray-200",
    required: `after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400`
  },
  size: {
    "2xs": "text-xs",
    "xs": "text-xs",
    "sm": "text-sm",
    "md": "text-sm",
    "lg": "text-sm",
    "xl": "text-base"
  },
  container: "mt-1 relative",
  description: "text-gray-500 dark:text-gray-400",
  hint: "text-gray-500 dark:text-gray-400",
  help: "mt-2 text-gray-500 dark:text-gray-400",
  error: "mt-2 text-red-500 dark:text-red-400",
  default: {
    size: "sm"
  }
};
const card = {
  base: "",
  background: "bg-white dark:bg-gray-900",
  divide: "divide-y divide-gray-200 dark:divide-gray-800",
  ring: "ring-1 ring-gray-200 dark:ring-gray-800",
  rounded: "rounded-lg",
  shadow: "shadow",
  body: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:p-6"
  },
  header: {
    base: "",
    background: "",
    padding: "px-4 py-5 sm:px-6"
  },
  footer: {
    base: "",
    background: "",
    padding: "px-4 py-4 sm:px-6"
  }
};
const tabs = {
  wrapper: "relative space-y-2",
  container: "relative w-full",
  base: "focus:outline-none",
  list: {
    base: "relative",
    background: "bg-gray-100 dark:bg-gray-800",
    rounded: "rounded-lg",
    shadow: "",
    padding: "p-1",
    height: "h-10",
    width: "w-full",
    marker: {
      wrapper: "absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none",
      base: "w-full h-full",
      background: "bg-white dark:bg-gray-900",
      rounded: "rounded-md",
      shadow: "shadow-sm"
    },
    tab: {
      base: "relative inline-flex items-center justify-center flex-shrink-0 w-full ui-focus-visible:outline-0 ui-focus-visible:ring-2 ui-focus-visible:ring-primary-500 dark:ui-focus-visible:ring-primary-400 ui-not-focus-visible:outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out",
      background: "",
      active: "text-gray-900 dark:text-white",
      inactive: "text-gray-500 dark:text-gray-400",
      height: "h-8",
      padding: "px-3",
      size: "text-sm",
      font: "font-medium",
      rounded: "rounded-md",
      shadow: "",
      icon: "w-4 h-4 flex-shrink-0 me-2"
    }
  }
};
function t(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}
var r$1;
let n$1 = Symbol("headlessui.useid"), o$2 = 0;
const i$2 = (r$1 = e.useId) != null ? r$1 : function() {
  return e.inject(n$1, () => `${++o$2}`)();
};
function s$2(t2) {
  e.provide(n$1, t2);
}
function o$1(e2) {
  var l;
  if (e2 == null || e2.value == null) return null;
  let n2 = (l = e2.value.$el) != null ? l : e2.value;
  return n2 instanceof Node ? n2 : null;
}
function u$1(r2, n2, ...a) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$1), t2;
}
var i$1 = Object.defineProperty;
var d$1 = (t2, e2, r2) => e2 in t2 ? i$1(t2, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t2[e2] = r2;
var n = (t2, e2, r2) => (d$1(t2, typeof e2 != "symbol" ? e2 + "" : e2, r2), r2);
let s$1 = class s {
  constructor() {
    n(this, "current", this.detect());
    n(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return "server";
  }
};
let c$1 = new s$1();
function i(r2) {
  if (c$1.isServer) return null;
  if (r2 instanceof Node) return r2.ownerDocument;
  if (r2 != null && r2.hasOwnProperty("value")) {
    let n2 = o$1(r2);
    if (n2) return n2.ownerDocument;
  }
  return void 0;
}
let c = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var N$1 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(N$1 || {}), T$1 = ((o2) => (o2[o2.Error = 0] = "Error", o2[o2.Overflow = 1] = "Overflow", o2[o2.Success = 2] = "Success", o2[o2.Underflow = 3] = "Underflow", o2))(T$1 || {}), F = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F || {});
function E(e2 = (void 0).body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(h || {});
var y$1 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(y$1 || {});
let H = ["textarea", "input"].join(",");
function I(e2) {
  var r2, t2;
  return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, H)) != null ? t2 : false;
}
function O(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l) => {
    let o2 = r2(t2), i2 = r2(l);
    if (o2 === null || i2 === null) return 0;
    let n2 = o2.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function P(e2, r2, { sorted: t2 = true, relativeTo: l = null, skipElements: o2 = [] } = {}) {
  var m;
  let i2 = (m = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : void 0 : e2 == null ? void 0 : e2.ownerDocument) != null ? m : void 0, n2 = Array.isArray(e2) ? t2 ? O(e2) : e2 : E(e2);
  o2.length > 0 && n2.length > 1 && (n2 = n2.filter((s3) => !o2.includes(s3))), l = l != null ? l : i2.activeElement;
  let x = (() => {
    if (r2 & 5) return 1;
    if (r2 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = (() => {
    if (r2 & 1) return 0;
    if (r2 & 2) return Math.max(0, n2.indexOf(l)) - 1;
    if (r2 & 4) return Math.max(0, n2.indexOf(l)) + 1;
    if (r2 & 8) return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), L = r2 & 32 ? { preventScroll: true } : {}, a = 0, d2 = n2.length, u2;
  do {
    if (a >= d2 || a + d2 <= 0) return 0;
    let s3 = p + a;
    if (r2 & 16) s3 = (s3 + d2) % d2;
    else {
      if (s3 < 0) return 3;
      if (s3 >= d2) return 1;
    }
    u2 = n2[s3], u2 == null || u2.focus(L), a += x;
  } while (u2 !== i2.activeElement);
  return r2 & 6 && I(u2) && u2.select(), 2;
}
function r(t2, e2) {
  if (t2) return t2;
  let n2 = e2 != null ? e2 : "button";
  if (typeof n2 == "string" && n2.toLowerCase() === "button") return "button";
}
function s2(t2, e2) {
  let n2 = ref(r(t2.value.type, t2.value.as));
  return onMounted(() => {
    n2.value = r(t2.value.type, t2.value.as);
  }), watchEffect(() => {
    var u2;
    n2.value || o$1(e2) && o$1(e2) instanceof HTMLButtonElement && !((u2 = o$1(e2)) != null && u2.hasAttribute("type")) && (n2.value = "button");
  }), n2;
}
var N = ((o2) => (o2[o2.None = 0] = "None", o2[o2.RenderStrategy = 1] = "RenderStrategy", o2[o2.Static = 2] = "Static", o2))(N || {}), S = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(S || {});
function A({ visible: r2 = true, features: t2 = 0, ourProps: e2, theirProps: o2, ...i2 }) {
  var a;
  let n2 = j(o2, e2), l = Object.assign(i2, { props: n2 });
  if (r2 || t2 & 2 && n2.static) return y(l);
  if (t2 & 1) {
    let d2 = (a = n2.unmount) == null || a ? 0 : 1;
    return u$1(d2, { [0]() {
      return null;
    }, [1]() {
      return y({ ...i2, props: { ...n2, hidden: true, style: { display: "none" } } });
    } });
  }
  return y(l);
}
function y({ props: r2, attrs: t2, slots: e2, slot: o2, name: i2 }) {
  var m, h2;
  let { as: n2, ...l } = T(r2, ["unmount", "static"]), a = (m = e2.default) == null ? void 0 : m.call(e2, o2), d2 = {};
  if (o2) {
    let u2 = false, c2 = [];
    for (let [p, f2] of Object.entries(o2)) typeof f2 == "boolean" && (u2 = true), f2 === true && c2.push(p);
    u2 && (d2["data-headlessui-state"] = c2.join(" "));
  }
  if (n2 === "template") {
    if (a = b(a != null ? a : []), Object.keys(l).length > 0 || Object.keys(t2).length > 0) {
      let [u2, ...c2] = a != null ? a : [];
      if (!v(u2) || c2.length > 0) throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l).concat(Object.keys(t2)).map((s3) => s3.trim()).filter((s3, g, R) => R.indexOf(s3) === g).sort((s3, g) => s3.localeCompare(g)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
      let p = j((h2 = u2.props) != null ? h2 : {}, l, d2), f2 = cloneVNode(u2, p, true);
      for (let s3 in p) s3.startsWith("on") && (f2.props || (f2.props = {}), f2.props[s3] = p[s3]);
      return f2;
    }
    return Array.isArray(a) && a.length === 1 ? a[0] : a;
  }
  return h$1(n2, Object.assign({}, l, d2), { default: () => a });
}
function b(r2) {
  return r2.flatMap((t2) => t2.type === Fragment ? b(t2.children) : [t2]);
}
function j(...r2) {
  if (r2.length === 0) return {};
  if (r2.length === 1) return r2[0];
  let t2 = {}, e2 = {};
  for (let i2 of r2) for (let n2 in i2) n2.startsWith("on") && typeof i2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(i2[n2])) : t2[n2] = i2[n2];
  if (t2.disabled || t2["aria-disabled"]) return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((i2) => [i2, void 0])));
  for (let i2 in e2) Object.assign(t2, { [i2](n2, ...l) {
    let a = e2[i2];
    for (let d2 of a) {
      if (n2 instanceof Event && n2.defaultPrevented) return;
      d2(n2, ...l);
    }
  } });
  return t2;
}
function T(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let o2 of t2) o2 in e2 && delete e2[o2];
  return e2;
}
function v(r2) {
  return r2 == null ? false : typeof r2.type == "string" || typeof r2.type == "object" || typeof r2.type == "function";
}
var u = ((e2) => (e2[e2.None = 1] = "None", e2[e2.Focusable = 2] = "Focusable", e2[e2.Hidden = 4] = "Hidden", e2))(u || {});
let f = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(t2, { slots: n2, attrs: i2 }) {
  return () => {
    var r2;
    let { features: e2, ...d2 } = t2, o2 = { "aria-hidden": (e2 & 2) === 2 ? true : (r2 = d2["aria-hidden"]) != null ? r2 : void 0, hidden: (e2 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e2 & 4) === 4 && (e2 & 2) !== 2 && { display: "none" } } };
    return A({ ourProps: o2, theirProps: d2, slot: {}, attrs: i2, slots: n2, name: "Hidden" });
  };
} });
var o = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o || {});
let d = defineComponent({ props: { onFocus: { type: Function, required: true } }, setup(t2) {
  let n2 = ref(true);
  return () => n2.value ? h$1(f, { as: "button", type: "button", features: u.Focusable, onFocus(o2) {
    o2.preventDefault();
    let e2, a = 50;
    function r2() {
      var u2;
      if (a-- <= 0) {
        e2 && cancelAnimationFrame(e2);
        return;
      }
      if ((u2 = t2.onFocus) != null && u2.call(t2)) {
        n2.value = false, cancelAnimationFrame(e2);
        return;
      }
      e2 = requestAnimationFrame(r2);
    }
    e2 = requestAnimationFrame(r2);
  } }) : null;
} });
var te = ((s3) => (s3[s3.Forwards = 0] = "Forwards", s3[s3.Backwards = 1] = "Backwards", s3))(te || {}), le = ((d2) => (d2[d2.Less = -1] = "Less", d2[d2.Equal = 0] = "Equal", d2[d2.Greater = 1] = "Greater", d2))(le || {});
let U = Symbol("TabsContext");
function C(a) {
  let b2 = inject(U, null);
  if (b2 === null) {
    let s3 = new Error(`<${a} /> is missing a parent <TabGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s3, C), s3;
  }
  return b2;
}
let G = Symbol("TabsSSRContext"), me = defineComponent({ name: "TabGroup", emits: { change: (a) => true }, props: { as: { type: [Object, String], default: "template" }, selectedIndex: { type: [Number], default: null }, defaultIndex: { type: [Number], default: 0 }, vertical: { type: [Boolean], default: false }, manual: { type: [Boolean], default: false } }, inheritAttrs: false, setup(a, { slots: b2, attrs: s3, emit: d$12 }) {
  var E2;
  let i2 = ref((E2 = a.selectedIndex) != null ? E2 : a.defaultIndex), l = ref([]), r2 = ref([]), p = computed(() => a.selectedIndex !== null), R = computed(() => p.value ? a.selectedIndex : i2.value);
  function y2(t2) {
    var c2;
    let n2 = O(u2.tabs.value, o$1), o2 = O(u2.panels.value, o$1), e2 = n2.filter((I2) => {
      var m;
      return !((m = o$1(I2)) != null && m.hasAttribute("disabled"));
    });
    if (t2 < 0 || t2 > n2.length - 1) {
      let I2 = u$1(i2.value === null ? 0 : Math.sign(t2 - i2.value), { [-1]: () => 1, [0]: () => u$1(Math.sign(t2), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 }), m = u$1(I2, { [0]: () => n2.indexOf(e2[0]), [1]: () => n2.indexOf(e2[e2.length - 1]) });
      m !== -1 && (i2.value = m), u2.tabs.value = n2, u2.panels.value = o2;
    } else {
      let I2 = n2.slice(0, t2), h2 = [...n2.slice(t2), ...I2].find((W) => e2.includes(W));
      if (!h2) return;
      let O2 = (c2 = n2.indexOf(h2)) != null ? c2 : u2.selectedIndex.value;
      O2 === -1 && (O2 = u2.selectedIndex.value), i2.value = O2, u2.tabs.value = n2, u2.panels.value = o2;
    }
  }
  let u2 = { selectedIndex: computed(() => {
    var t2, n2;
    return (n2 = (t2 = i2.value) != null ? t2 : a.defaultIndex) != null ? n2 : null;
  }), orientation: computed(() => a.vertical ? "vertical" : "horizontal"), activation: computed(() => a.manual ? "manual" : "auto"), tabs: l, panels: r2, setSelectedIndex(t2) {
    R.value !== t2 && d$12("change", t2), p.value || y2(t2);
  }, registerTab(t2) {
    var o2;
    if (l.value.includes(t2)) return;
    let n2 = l.value[i2.value];
    if (l.value.push(t2), l.value = O(l.value, o$1), !p.value) {
      let e2 = (o2 = l.value.indexOf(n2)) != null ? o2 : i2.value;
      e2 !== -1 && (i2.value = e2);
    }
  }, unregisterTab(t2) {
    let n2 = l.value.indexOf(t2);
    n2 !== -1 && l.value.splice(n2, 1);
  }, registerPanel(t2) {
    r2.value.includes(t2) || (r2.value.push(t2), r2.value = O(r2.value, o$1));
  }, unregisterPanel(t2) {
    let n2 = r2.value.indexOf(t2);
    n2 !== -1 && r2.value.splice(n2, 1);
  } };
  provide(U, u2);
  let T$12 = ref({ tabs: [], panels: [] }), x = ref(false);
  onMounted(() => {
    x.value = true;
  }), provide(G, computed(() => x.value ? null : T$12.value));
  let w = computed(() => a.selectedIndex);
  return onMounted(() => {
    watch([w], () => {
      var t2;
      return y2((t2 = a.selectedIndex) != null ? t2 : a.defaultIndex);
    }, { immediate: true });
  }), watchEffect(() => {
    if (!p.value || R.value == null || u2.tabs.value.length <= 0) return;
    let t2 = O(u2.tabs.value, o$1);
    t2.some((o2, e2) => o$1(u2.tabs.value[e2]) !== o$1(o2)) && u2.setSelectedIndex(t2.findIndex((o2) => o$1(o2) === o$1(u2.tabs.value[R.value])));
  }), () => {
    let t2 = { selectedIndex: i2.value };
    return h$1(Fragment, [l.value.length <= 0 && h$1(d, { onFocus: () => {
      for (let n2 of l.value) {
        let o2 = o$1(n2);
        if ((o2 == null ? void 0 : o2.tabIndex) === 0) return o2.focus(), true;
      }
      return false;
    } }), A({ theirProps: { ...s3, ...T(a, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"]) }, ourProps: {}, slot: t2, slots: b2, attrs: s3, name: "TabGroup" })]);
  };
} }), pe = defineComponent({ name: "TabList", props: { as: { type: [Object, String], default: "div" } }, setup(a, { attrs: b2, slots: s3 }) {
  let d2 = C("TabList");
  return () => {
    let i2 = { selectedIndex: d2.selectedIndex.value }, l = { role: "tablist", "aria-orientation": d2.orientation.value };
    return A({ ourProps: l, theirProps: a, slot: i2, attrs: b2, slots: s3, name: "TabList" });
  };
} }), xe = defineComponent({ name: "Tab", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: null } }, setup(a, { attrs: b2, slots: s$12, expose: d2 }) {
  var o$22;
  let i$12 = (o$22 = a.id) != null ? o$22 : `headlessui-tabs-tab-${i$2()}`, l = C("Tab"), r2 = ref(null);
  d2({ el: r2, $el: r2 }), onMounted(() => l.registerTab(r2)), onUnmounted(() => l.unregisterTab(r2));
  let p = inject(G), R = computed(() => {
    if (p.value) {
      let e2 = p.value.tabs.indexOf(i$12);
      return e2 === -1 ? p.value.tabs.push(i$12) - 1 : e2;
    }
    return -1;
  }), y2 = computed(() => {
    let e2 = l.tabs.value.indexOf(r2);
    return e2 === -1 ? R.value : e2;
  }), u2 = computed(() => y2.value === l.selectedIndex.value);
  function T2(e2) {
    var I2;
    let c2 = e2();
    if (c2 === T$1.Success && l.activation.value === "auto") {
      let m = (I2 = i(r2)) == null ? void 0 : I2.activeElement, h2 = l.tabs.value.findIndex((O2) => o$1(O2) === m);
      h2 !== -1 && l.setSelectedIndex(h2);
    }
    return c2;
  }
  function x(e2) {
    let c2 = l.tabs.value.map((m) => o$1(m)).filter(Boolean);
    if (e2.key === o.Space || e2.key === o.Enter) {
      e2.preventDefault(), e2.stopPropagation(), l.setSelectedIndex(y2.value);
      return;
    }
    switch (e2.key) {
      case o.Home:
      case o.PageUp:
        return e2.preventDefault(), e2.stopPropagation(), T2(() => P(c2, N$1.First));
      case o.End:
      case o.PageDown:
        return e2.preventDefault(), e2.stopPropagation(), T2(() => P(c2, N$1.Last));
    }
    if (T2(() => u$1(l.orientation.value, { vertical() {
      return e2.key === o.ArrowUp ? P(c2, N$1.Previous | N$1.WrapAround) : e2.key === o.ArrowDown ? P(c2, N$1.Next | N$1.WrapAround) : T$1.Error;
    }, horizontal() {
      return e2.key === o.ArrowLeft ? P(c2, N$1.Previous | N$1.WrapAround) : e2.key === o.ArrowRight ? P(c2, N$1.Next | N$1.WrapAround) : T$1.Error;
    } })) === T$1.Success) return e2.preventDefault();
  }
  let w = ref(false);
  function E2() {
    var e2;
    w.value || (w.value = true, !a.disabled && ((e2 = o$1(r2)) == null || e2.focus({ preventScroll: true }), l.setSelectedIndex(y2.value), t(() => {
      w.value = false;
    })));
  }
  function t$1(e2) {
    e2.preventDefault();
  }
  let n2 = s2(computed(() => ({ as: a.as, type: b2.type })), r2);
  return () => {
    var m, h2;
    let e2 = { selected: u2.value, disabled: (m = a.disabled) != null ? m : false }, { ...c2 } = a, I2 = { ref: r2, onKeydown: x, onMousedown: t$1, onClick: E2, id: i$12, role: "tab", type: n2.value, "aria-controls": (h2 = o$1(l.panels.value[y2.value])) == null ? void 0 : h2.id, "aria-selected": u2.value, tabIndex: u2.value ? 0 : -1, disabled: a.disabled ? true : void 0 };
    return A({ ourProps: I2, theirProps: c2, slot: e2, attrs: b2, slots: s$12, name: "Tab" });
  };
} }), Ie = defineComponent({ name: "TabPanels", props: { as: { type: [Object, String], default: "div" } }, setup(a, { slots: b2, attrs: s3 }) {
  let d2 = C("TabPanels");
  return () => {
    let i2 = { selectedIndex: d2.selectedIndex.value };
    return A({ theirProps: a, ourProps: {}, slot: i2, attrs: s3, slots: b2, name: "TabPanels" });
  };
} }), ye = defineComponent({ name: "TabPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: null }, tabIndex: { type: Number, default: 0 } }, setup(a, { attrs: b2, slots: s3, expose: d2 }) {
  var T2;
  let i2 = (T2 = a.id) != null ? T2 : `headlessui-tabs-panel-${i$2()}`, l = C("TabPanel"), r2 = ref(null);
  d2({ el: r2, $el: r2 }), onMounted(() => l.registerPanel(r2)), onUnmounted(() => l.unregisterPanel(r2));
  let p = inject(G), R = computed(() => {
    if (p.value) {
      let x = p.value.panels.indexOf(i2);
      return x === -1 ? p.value.panels.push(i2) - 1 : x;
    }
    return -1;
  }), y2 = computed(() => {
    let x = l.panels.value.indexOf(r2);
    return x === -1 ? R.value : x;
  }), u2 = computed(() => y2.value === l.selectedIndex.value);
  return () => {
    var n2;
    let x = { selected: u2.value }, { tabIndex: w, ...E2 } = a, t2 = { ref: r2, id: i2, role: "tabpanel", "aria-labelledby": (n2 = o$1(l.tabs.value[y2.value])) == null ? void 0 : n2.id, tabIndex: u2.value ? w : -1 };
    return !u2.value && a.unmount && !a.static ? h$1(f, { as: "span", "aria-hidden": true, ...t2 }) : A({ ourProps: t2, theirProps: E2, slot: x, attrs: b2, slots: s3, features: N.Static | N.RenderStrategy, visible: u2.value, name: "TabPanel" });
  };
} });
const config$3 = mergeConfig(appConfig.ui.strategy, appConfig.ui.tabs, tabs);
const _sfc_main$6 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$4,
    HTabGroup: me,
    HTabList: pe,
    HTab: xe,
    HTabPanels: Ie,
    HTabPanel: ye
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      default: void 0
    },
    orientation: {
      type: String,
      default: "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value)
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default: () => []
    },
    unmount: {
      type: Boolean,
      default: false
    },
    content: {
      type: Boolean,
      default: true
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("tabs", toRef(props, "ui"), config$3, toRef(props, "class"));
    const listRef = ref();
    const itemRefs = ref([]);
    const markerRef = ref();
    const selectedIndex = ref(props.modelValue || props.defaultIndex);
    function calcMarkerSize(index) {
      var _a;
      const tab = (_a = itemRefs.value[index]) == null ? void 0 : _a.$el;
      if (!tab) {
        return;
      }
      if (!markerRef.value) {
        return;
      }
      markerRef.value.style.top = `${tab.offsetTop}px`;
      markerRef.value.style.left = `${tab.offsetLeft}px`;
      markerRef.value.style.width = `${tab.offsetWidth}px`;
      markerRef.value.style.height = `${tab.offsetHeight}px`;
    }
    function onChange(index) {
      selectedIndex.value = index;
      emit("change", index);
      if (props.modelValue !== void 0) {
        emit("update:modelValue", selectedIndex.value);
      }
      calcMarkerSize(selectedIndex.value);
    }
    useResizeObserver(listRef, () => {
      calcMarkerSize(selectedIndex.value);
    });
    watch(() => props.modelValue, (value) => {
      selectedIndex.value = value;
      calcMarkerSize(selectedIndex.value);
    });
    watch(() => props.items, async () => {
      await nextTick();
      calcMarkerSize(selectedIndex.value);
    }, { deep: true });
    s$2(() => useId());
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      listRef,
      itemRefs,
      markerRef,
      selectedIndex,
      onChange
    };
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HTabGroup = resolveComponent("HTabGroup");
  const _component_HTabList = resolveComponent("HTabList");
  const _component_HTab = resolveComponent("HTab");
  const _component_UIcon = __nuxt_component_0$4;
  const _component_HTabPanels = resolveComponent("HTabPanels");
  const _component_HTabPanel = resolveComponent("HTabPanel");
  _push(ssrRenderComponent(_component_HTabGroup, mergeProps({
    vertical: _ctx.orientation === "vertical",
    "selected-index": _ctx.selectedIndex,
    as: "div",
    class: _ctx.ui.wrapper
  }, _ctx.attrs, { onChange: _ctx.onChange }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HTabList, {
          ref: "listRef",
          class: [_ctx.ui.list.base, _ctx.ui.list.background, _ctx.ui.list.rounded, _ctx.ui.list.shadow, _ctx.ui.list.padding, _ctx.ui.list.width, _ctx.orientation === "horizontal" && _ctx.ui.list.height, _ctx.orientation === "horizontal" && "inline-grid items-center"],
          style: [_ctx.orientation === "horizontal" && `grid-template-columns: repeat(${_ctx.items.length}, minmax(0, 1fr))`]
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="${ssrRenderClass(_ctx.ui.list.marker.wrapper)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow])}"${_scopeId2}></div></div><!--[-->`);
              ssrRenderList(_ctx.items, (item, index) => {
                _push3(ssrRenderComponent(_component_HTab, {
                  key: index,
                  ref_for: true,
                  ref: "itemRefs",
                  disabled: item.disabled,
                  as: "template"
                }, {
                  default: withCtx(({ selected, disabled }, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<button${ssrRenderAttr("aria-label", item.ariaLabel)} class="${ssrRenderClass([_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive])}"${_scopeId3}>`);
                      ssrRenderSlot(_ctx.$slots, "icon", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => {
                        if (item.icon) {
                          _push4(ssrRenderComponent(_component_UIcon, {
                            name: item.icon,
                            class: _ctx.ui.list.tab.icon
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      }, _push4, _parent4, _scopeId3);
                      ssrRenderSlot(_ctx.$slots, "default", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => {
                        _push4(`<span class="truncate"${_scopeId3}>${ssrInterpolate(item.label)}</span>`);
                      }, _push4, _parent4, _scopeId3);
                      _push4(`</button>`);
                    } else {
                      return [
                        createVNode("button", {
                          "aria-label": item.ariaLabel,
                          class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                        }, [
                          renderSlot(_ctx.$slots, "icon", {
                            item,
                            index,
                            selected,
                            disabled
                          }, () => [
                            item.icon ? (openBlock(), createBlock(_component_UIcon, {
                              key: 0,
                              name: item.icon,
                              class: _ctx.ui.list.tab.icon
                            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                          ]),
                          renderSlot(_ctx.$slots, "default", {
                            item,
                            index,
                            selected,
                            disabled
                          }, () => [
                            createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1)
                          ])
                        ], 10, ["aria-label"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                createVNode("div", {
                  ref: "markerRef",
                  class: _ctx.ui.list.marker.wrapper
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow]
                  }, null, 2)
                ], 2),
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                  return openBlock(), createBlock(_component_HTab, {
                    key: index,
                    ref_for: true,
                    ref: "itemRefs",
                    disabled: item.disabled,
                    as: "template"
                  }, {
                    default: withCtx(({ selected, disabled }) => [
                      createVNode("button", {
                        "aria-label": item.ariaLabel,
                        class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                      }, [
                        renderSlot(_ctx.$slots, "icon", {
                          item,
                          index,
                          selected,
                          disabled
                        }, () => [
                          item.icon ? (openBlock(), createBlock(_component_UIcon, {
                            key: 0,
                            name: item.icon,
                            class: _ctx.ui.list.tab.icon
                          }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                        ]),
                        renderSlot(_ctx.$slots, "default", {
                          item,
                          index,
                          selected,
                          disabled
                        }, () => [
                          createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1)
                        ])
                      ], 10, ["aria-label"])
                    ]),
                    _: 2
                  }, 1032, ["disabled"]);
                }), 128))
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
        if (_ctx.content) {
          _push2(ssrRenderComponent(_component_HTabPanels, {
            class: _ctx.ui.container
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.items, (item, index) => {
                  _push3(ssrRenderComponent(_component_HTabPanel, {
                    key: index,
                    class: _ctx.ui.base,
                    unmount: _ctx.unmount
                  }, {
                    default: withCtx(({ selected }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, item.slot || "item", {
                          item,
                          index,
                          selected
                        }, () => {
                          _push4(`${ssrInterpolate(item.content)}`);
                        }, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, item.slot || "item", {
                            item,
                            index,
                            selected
                          }, () => [
                            createTextVNode(toDisplayString(item.content), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                    return openBlock(), createBlock(_component_HTabPanel, {
                      key: index,
                      class: _ctx.ui.base,
                      unmount: _ctx.unmount
                    }, {
                      default: withCtx(({ selected }) => [
                        renderSlot(_ctx.$slots, item.slot || "item", {
                          item,
                          index,
                          selected
                        }, () => [
                          createTextVNode(toDisplayString(item.content), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class", "unmount"]);
                  }), 128))
                ];
              }
            }),
            _: 3
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode(_component_HTabList, {
            ref: "listRef",
            class: [_ctx.ui.list.base, _ctx.ui.list.background, _ctx.ui.list.rounded, _ctx.ui.list.shadow, _ctx.ui.list.padding, _ctx.ui.list.width, _ctx.orientation === "horizontal" && _ctx.ui.list.height, _ctx.orientation === "horizontal" && "inline-grid items-center"],
            style: [_ctx.orientation === "horizontal" && `grid-template-columns: repeat(${_ctx.items.length}, minmax(0, 1fr))`]
          }, {
            default: withCtx(() => [
              createVNode("div", {
                ref: "markerRef",
                class: _ctx.ui.list.marker.wrapper
              }, [
                createVNode("div", {
                  class: [_ctx.ui.list.marker.base, _ctx.ui.list.marker.background, _ctx.ui.list.marker.rounded, _ctx.ui.list.marker.shadow]
                }, null, 2)
              ], 2),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                return openBlock(), createBlock(_component_HTab, {
                  key: index,
                  ref_for: true,
                  ref: "itemRefs",
                  disabled: item.disabled,
                  as: "template"
                }, {
                  default: withCtx(({ selected, disabled }) => [
                    createVNode("button", {
                      "aria-label": item.ariaLabel,
                      class: [_ctx.ui.list.tab.base, _ctx.ui.list.tab.background, _ctx.ui.list.tab.height, _ctx.ui.list.tab.padding, _ctx.ui.list.tab.size, _ctx.ui.list.tab.font, _ctx.ui.list.tab.rounded, _ctx.ui.list.tab.shadow, selected ? _ctx.ui.list.tab.active : _ctx.ui.list.tab.inactive]
                    }, [
                      renderSlot(_ctx.$slots, "icon", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => [
                        item.icon ? (openBlock(), createBlock(_component_UIcon, {
                          key: 0,
                          name: item.icon,
                          class: _ctx.ui.list.tab.icon
                        }, null, 8, ["name", "class"])) : createCommentVNode("", true)
                      ]),
                      renderSlot(_ctx.$slots, "default", {
                        item,
                        index,
                        selected,
                        disabled
                      }, () => [
                        createVNode("span", { class: "truncate" }, toDisplayString(item.label), 1)
                      ])
                    ], 10, ["aria-label"])
                  ]),
                  _: 2
                }, 1032, ["disabled"]);
              }), 128))
            ]),
            _: 3
          }, 8, ["class", "style"]),
          _ctx.content ? (openBlock(), createBlock(_component_HTabPanels, {
            key: 0,
            class: _ctx.ui.container
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                return openBlock(), createBlock(_component_HTabPanel, {
                  key: index,
                  class: _ctx.ui.base,
                  unmount: _ctx.unmount
                }, {
                  default: withCtx(({ selected }) => [
                    renderSlot(_ctx.$slots, item.slot || "item", {
                      item,
                      index,
                      selected
                    }, () => [
                      createTextVNode(toDisplayString(item.content), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["class", "unmount"]);
              }), 128))
            ]),
            _: 3
          }, 8, ["class"])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.22.1_jwt-decode@_6d2fd8d95267b69060ed0b1199bfd9c5/node_modules/@nuxt/ui/dist/runtime/components/navigation/Tabs.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.card, card);
const _sfc_main$5 = defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: "div"
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("card", toRef(props, "ui"), config$2);
    const cardClass = computed(() => {
      return twMerge(twJoin(
        ui.value.base,
        ui.value.rounded,
        ui.value.divide,
        ui.value.ring,
        ui.value.shadow,
        ui.value.background
      ), props.class);
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      cardClass
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.$attrs.onSubmit ? "form" : _ctx.as), mergeProps({ class: _ctx.cardClass }, _ctx.attrs, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$slots.header) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.default) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.$slots.footer) {
          _push2(`<div class="${ssrRenderClass([_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background])}"${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          _ctx.$slots.header ? (openBlock(), createBlock("div", {
            key: 0,
            class: [_ctx.ui.header.base, _ctx.ui.header.padding, _ctx.ui.header.background]
          }, [
            renderSlot(_ctx.$slots, "header")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.default ? (openBlock(), createBlock("div", {
            key: 1,
            class: [_ctx.ui.body.base, _ctx.ui.body.padding, _ctx.ui.body.background]
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)) : createCommentVNode("", true),
          _ctx.$slots.footer ? (openBlock(), createBlock("div", {
            key: 2,
            class: [_ctx.ui.footer.base, _ctx.ui.footer.padding, _ctx.ui.footer.background]
          }, [
            renderSlot(_ctx.$slots, "footer")
          ], 2)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 3
  }), _parent);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.22.1_jwt-decode@_6d2fd8d95267b69060ed0b1199bfd9c5/node_modules/@nuxt/ui/dist/runtime/components/layout/Card.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
class FormException extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    Object.setPrototypeOf(this, FormException.prototype);
  }
}
const _sfc_main$4 = defineComponent({
  props: {
    schema: {
      type: [Object, Function],
      default: void 0
    },
    state: {
      type: Object,
      required: true
    },
    validate: {
      type: Function,
      default: () => []
    },
    validateOn: {
      type: Array,
      default: () => ["blur", "input", "change", "submit"]
    }
  },
  emits: ["submit", "error"],
  setup(props, { expose, emit }) {
    const formId = useId();
    const bus = useEventBus(`form-${formId}`);
    const parsedValue = ref(null);
    const errors = ref([]);
    provide("form-errors", errors);
    provide("form-events", bus);
    const inputs = ref({});
    provide("form-inputs", inputs);
    async function getErrors() {
      let errs = await props.validate(props.state);
      if (props.schema) {
        const { errors: errors2, result } = await parseSchema(props.state, props.schema);
        if (errors2) {
          errs = errs.concat(errors2);
        } else {
          parsedValue.value = result;
        }
      }
      return errs;
    }
    async function validate(path, opts = { silent: false }) {
      let paths = path;
      if (path && !Array.isArray(path)) {
        paths = [path];
      }
      if (paths) {
        const otherErrors = errors.value.filter(
          (error) => !paths.includes(error.path)
        );
        const pathErrors = (await getErrors()).filter(
          (error) => paths.includes(error.path)
        );
        errors.value = otherErrors.concat(pathErrors);
      } else {
        errors.value = await getErrors();
      }
      if (errors.value.length > 0) {
        if (opts.silent) return false;
        throw new FormException(
          `Form validation failed: ${JSON.stringify(errors.value, null, 2)}`
        );
      }
      return props.state;
    }
    async function onSubmit(payload) {
      var _a;
      const event = payload;
      try {
        if ((_a = props.validateOn) == null ? void 0 : _a.includes("submit")) {
          await validate();
        }
        event.data = props.schema ? parsedValue.value : props.state;
        emit("submit", event);
      } catch (error) {
        if (!(error instanceof FormException)) {
          throw error;
        }
        const errorEvent = {
          ...event,
          errors: errors.value.map((err) => ({
            ...err,
            id: inputs.value[err.path]
          }))
        };
        emit("error", errorEvent);
      }
    }
    expose({
      validate,
      errors,
      setErrors(errs, path) {
        if (path) {
          errors.value = errors.value.filter(
            (error) => error.path !== path
          ).concat(errs);
        } else {
          errors.value = errs;
        }
      },
      async submit() {
        await onSubmit(new Event("submit"));
      },
      getErrors(path) {
        if (path) {
          return errors.value.filter((err) => err.path === path);
        }
        return errors.value;
      },
      clear(path) {
        if (path) {
          errors.value = errors.value.filter((err) => err.path !== path);
        } else {
          errors.value = [];
        }
      }
    });
    return {
      onSubmit,
      errors: readonly(errors)
    };
  }
});
function isYupSchema(schema) {
  return schema.validate && schema.__isYupSchema__;
}
function isYupError(error) {
  return error.inner !== void 0;
}
function isSuperStructSchema(schema) {
  return "schema" in schema && typeof schema.coercer === "function" && typeof schema.validator === "function" && typeof schema.refiner === "function";
}
function isJoiSchema(schema) {
  return schema.validateAsync !== void 0 && schema.id !== void 0;
}
function isJoiError(error) {
  return error.isJoi === true;
}
function isStandardSchema(schema) {
  return "~standard" in schema;
}
async function validateStandardSchema(state2, schema) {
  const result = await schema["~standard"].validate(state2);
  if (!result.issues || result.issues.length === 0) {
    const output = "value" in result ? result.value : null;
    return {
      errors: null,
      result: output
    };
  }
  const errors = result.issues.map((issue) => {
    var _a;
    return {
      path: ((_a = issue.path) == null ? void 0 : _a.map((item) => typeof item === "object" ? item.key : item).join(".")) || "",
      message: issue.message
    };
  });
  return {
    errors,
    result: null
  };
}
async function validateJoiSchema(state2, schema) {
  try {
    const result = await schema.validateAsync(state2, { abortEarly: false });
    return {
      errors: null,
      result
    };
  } catch (error) {
    if (isJoiError(error)) {
      const errors = error.details.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message
      }));
      return {
        errors,
        result: null
      };
    } else {
      throw error;
    }
  }
}
async function validateSuperstructSchema(state2, schema) {
  const [err, result] = schema.validate(state2);
  if (err) {
    const errors = err.failures().map((error) => ({
      message: error.message,
      path: error.path.join(".")
    }));
    return {
      errors,
      result: null
    };
  }
  return {
    errors: null,
    result
  };
}
async function validateYupSchema(state2, schema) {
  try {
    const result = await schema.validate(state2, { abortEarly: false });
    return {
      errors: null,
      result
    };
  } catch (error) {
    if (isYupError(error)) {
      const errors = error.inner.map((issue) => {
        var _a;
        return {
          path: (_a = issue.path) != null ? _a : "",
          message: issue.message
        };
      });
      return {
        errors,
        result: null
      };
    } else {
      throw error;
    }
  }
}
function parseSchema(state2, schema) {
  if (isStandardSchema(schema)) {
    return validateStandardSchema(state2, schema);
  } else if (isJoiSchema(schema)) {
    return validateJoiSchema(state2, schema);
  } else if (isYupSchema(schema)) {
    return validateYupSchema(state2, schema);
  } else if (isSuperStructSchema(schema)) {
    return validateSuperstructSchema(state2, schema);
  } else {
    throw new Error("Form validation failed: Unsupported form schema");
  }
}
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", { errors: _ctx.errors }, null, _push, _parent);
  _push(`</form>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.22.1_jwt-decode@_6d2fd8d95267b69060ed0b1199bfd9c5/node_modules/@nuxt/ui/dist/runtime/components/forms/Form.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.formGroup, formGroup);
const _sfc_main$3 = defineComponent({
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config$1.size).includes(value);
      }
    },
    label: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    help: {
      type: String,
      default: null
    },
    error: {
      type: [String, Boolean],
      default: null
    },
    hint: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    eagerValidation: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { ui, attrs } = useUI("formGroup", toRef(props, "ui"), config$1, toRef(props, "class"));
    const formErrors = inject("form-errors", null);
    const error = computed(() => {
      var _a, _b;
      return props.error && typeof props.error === "string" || typeof props.error === "boolean" ? props.error : (_b = (_a = formErrors == null ? void 0 : formErrors.value) == null ? void 0 : _a.find((error2) => error2.path === props.name)) == null ? void 0 : _b.message;
    });
    const size = computed(() => {
      var _a;
      return ui.value.size[(_a = props.size) != null ? _a : config$1.default.size];
    });
    const inputId = ref(useId());
    provide("form-group", {
      error,
      inputId,
      name: computed(() => props.name),
      size: computed(() => props.size),
      eagerValidation: computed(() => props.eagerValidation)
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      inputId,
      // eslint-disable-next-line vue/no-dupe-keys
      size,
      // eslint-disable-next-line vue/no-dupe-keys
      error
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}><div class="${ssrRenderClass(_ctx.ui.inner)}">`);
  if (_ctx.label || _ctx.$slots.label) {
    _push(`<div class="${ssrRenderClass([_ctx.ui.label.wrapper, _ctx.size])}"><label${ssrRenderAttr("for", _ctx.inputId)} class="${ssrRenderClass([_ctx.ui.label.base, _ctx.required ? _ctx.ui.label.required : ""])}">`);
    if (_ctx.$slots.label) {
      ssrRenderSlot(_ctx.$slots, "label", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.label)}<!--]-->`);
    }
    _push(`</label>`);
    if (_ctx.hint || _ctx.$slots.hint) {
      _push(`<span class="${ssrRenderClass([_ctx.ui.hint])}">`);
      if (_ctx.$slots.hint) {
        ssrRenderSlot(_ctx.$slots, "hint", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
      } else {
        _push(`<!--[-->${ssrInterpolate(_ctx.hint)}<!--]-->`);
      }
      _push(`</span>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.description || _ctx.$slots.description) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.description, _ctx.size])}">`);
    if (_ctx.$slots.description) {
      ssrRenderSlot(_ctx.$slots, "description", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.description)}<!--]-->`);
    }
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([_ctx.label ? _ctx.ui.container : ""])}">`);
  ssrRenderSlot(_ctx.$slots, "default", { error: _ctx.error }, null, _push, _parent);
  if (typeof _ctx.error === "string" && _ctx.error) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.error, _ctx.size])}">`);
    if (_ctx.$slots.error) {
      ssrRenderSlot(_ctx.$slots, "error", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.error)}<!--]-->`);
    }
    _push(`</p>`);
  } else if (_ctx.help || _ctx.$slots.help) {
    _push(`<p class="${ssrRenderClass([_ctx.ui.help, _ctx.size])}">`);
    if (_ctx.$slots.help) {
      ssrRenderSlot(_ctx.$slots, "help", { error: _ctx.error, label: _ctx.label, name: _ctx.name, hint: _ctx.hint, description: _ctx.description, help: _ctx.help }, null, _push, _parent);
    } else {
      _push(`<!--[-->${ssrInterpolate(_ctx.help)}<!--]-->`);
    }
    _push(`</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.22.1_jwt-decode@_6d2fd8d95267b69060ed0b1199bfd9c5/node_modules/@nuxt/ui/dist/runtime/components/forms/FormGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const useFormGroup = (inputProps, config2, bind = true) => {
  const formBus = inject("form-events", void 0);
  const formGroup2 = inject("form-group", void 0);
  const formInputs = inject("form-inputs", void 0);
  if (formGroup2) {
    if (!bind || (inputProps == null ? void 0 : inputProps.legend)) {
      formGroup2.inputId.value = void 0;
    } else if (inputProps == null ? void 0 : inputProps.id) {
      formGroup2.inputId.value = inputProps == null ? void 0 : inputProps.id;
    }
    if (formInputs) {
      formInputs.value[formGroup2.name.value] = formGroup2.inputId.value;
    }
  }
  const blurred = ref(false);
  function emitFormEvent(type, path) {
    if (formBus) {
      formBus.emit({ type, path });
    }
  }
  function emitFormBlur() {
    emitFormEvent("blur", formGroup2 == null ? void 0 : formGroup2.name.value);
    blurred.value = true;
  }
  function emitFormChange() {
    emitFormEvent("change", formGroup2 == null ? void 0 : formGroup2.name.value);
  }
  const emitFormInput = useDebounceFn(() => {
    if (blurred.value || (formGroup2 == null ? void 0 : formGroup2.eagerValidation.value)) {
      emitFormEvent("input", formGroup2 == null ? void 0 : formGroup2.name.value);
    }
  }, 300);
  return {
    inputId: computed(() => {
      var _a;
      return (_a = inputProps == null ? void 0 : inputProps.id) != null ? _a : formGroup2 == null ? void 0 : formGroup2.inputId.value;
    }),
    name: computed(() => {
      var _a;
      return (_a = inputProps == null ? void 0 : inputProps.name) != null ? _a : formGroup2 == null ? void 0 : formGroup2.name.value;
    }),
    size: computed(() => {
      var _a2, _b;
      var _a;
      const formGroupSize = config2.size[formGroup2 == null ? void 0 : formGroup2.size.value] ? formGroup2 == null ? void 0 : formGroup2.size.value : null;
      return (_b = (_a2 = inputProps == null ? void 0 : inputProps.size) != null ? _a2 : formGroupSize) != null ? _b : (_a = config2.default) == null ? void 0 : _a.size;
    }),
    color: computed(() => {
      var _a;
      return ((_a = formGroup2 == null ? void 0 : formGroup2.error) == null ? void 0 : _a.value) ? "red" : inputProps == null ? void 0 : inputProps.color;
    }),
    emitFormBlur,
    emitFormInput,
    emitFormChange
  };
};
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.input, input);
const _sfc_main$2 = defineComponent({
  components: {
    UIcon: __nuxt_component_0$4
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autofocusDelay: {
      type: Number,
      default: 100
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return Object.keys(config.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config.default.variant,
      validator(value) {
        return [
          ...Object.keys(config.variant),
          ...Object.values(config.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    inputClass: {
      type: String,
      default: null
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    },
    modelModifiers: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "blur", "change"],
  setup(props, { emit, slots }) {
    const { ui, attrs } = useUI("input", toRef(props, "ui"), config, toRef(props, "class"));
    const { size: sizeButtonGroup, rounded } = useInjectButtonGroup({ ui, props });
    const { emitFormBlur, emitFormInput, size: sizeFormGroup, color, inputId, name } = useFormGroup(props, config);
    const size = computed(() => {
      var _a;
      return (_a = sizeButtonGroup.value) != null ? _a : sizeFormGroup.value;
    });
    const modelModifiers = ref(defu({}, props.modelModifiers, { trim: false, lazy: false, number: false, nullify: false }));
    const input2 = ref(null);
    const updateInput = (value) => {
      if (modelModifiers.value.trim) {
        value = value.trim();
      }
      if (modelModifiers.value.number || props.type === "number") {
        value = looseToNumber(value);
      }
      if (modelModifiers.value.nullify) {
        value || (value = null);
      }
      emit("update:modelValue", value);
      emitFormInput();
    };
    const onInput = (event) => {
      if (!modelModifiers.value.lazy) {
        updateInput(event.target.value);
      }
    };
    const onChange = (event) => {
      if (props.type === "file") {
        const value = event.target.files;
        emit("change", value);
      } else {
        const value = event.target.value;
        emit("change", value);
        if (modelModifiers.value.lazy) {
          updateInput(value);
        }
        if (modelModifiers.value.trim) {
          event.target.value = value.trim();
        }
      }
    };
    const onBlur = (event) => {
      emitFormBlur();
      emit("blur", event);
    };
    const inputClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[color.value]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.form,
        rounded.value,
        ui.value.placeholder,
        props.type === "file" && ui.value.file.base,
        ui.value.size[size.value],
        props.padded ? ui.value.padding[size.value] : "p-0",
        variant == null ? void 0 : variant.replaceAll("{color}", color.value),
        (isLeading.value || slots.leading) && ui.value.leading.padding[size.value],
        (isTrailing.value || slots.trailing) && ui.value.trailing.padding[size.value]
      ), props.inputClass);
    });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        ui.value.icon.leading.padding[size.value]
      );
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingWrapperIconClass = computed(() => {
      return twJoin(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        ui.value.icon.trailing.padding[size.value]
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        color.value && appConfig.ui.colors.includes(color.value) && ui.value.icon.color.replaceAll("{color}", color.value),
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      // eslint-disable-next-line vue/no-dupe-keys
      name,
      inputId,
      input: input2,
      isLeading,
      isTrailing,
      // eslint-disable-next-line vue/no-dupe-keys
      inputClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      onInput,
      onChange,
      onBlur
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UIcon = __nuxt_component_0$4;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.type === "hidden" ? "hidden" : _ctx.ui.wrapper
  }, _attrs))}><input${ssrRenderAttrs(mergeProps({
    id: _ctx.inputId,
    ref: "input",
    name: _ctx.name,
    type: _ctx.type,
    required: _ctx.required,
    placeholder: _ctx.placeholder,
    disabled: _ctx.disabled,
    class: _ctx.inputClass
  }, _ctx.type === "file" ? _ctx.attrs : { ..._ctx.attrs, value: _ctx.modelValue }))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if (_ctx.isLeading && _ctx.leadingIconName || _ctx.$slots.leading) {
    _push(`<span class="${ssrRenderClass(_ctx.leadingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "leading", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.leadingIconName,
        class: _ctx.leadingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.isTrailing && _ctx.trailingIconName || _ctx.$slots.trailing) {
    _push(`<span class="${ssrRenderClass(_ctx.trailingWrapperIconClass)}">`);
    ssrRenderSlot(_ctx.$slots, "trailing", {
      disabled: _ctx.disabled,
      loading: _ctx.loading
    }, () => {
      _push(ssrRenderComponent(_component_UIcon, {
        name: _ctx.trailingIconName,
        class: _ctx.trailingIconClass
      }, null, _parent));
    }, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui@2.22.1_jwt-decode@_6d2fd8d95267b69060ed0b1199bfd9c5/node_modules/@nuxt/ui/dist/runtime/components/forms/Input.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const authSchema = z.object({
  email: z.string().email({ message: "Email is not valid field" }),
  password: z.string().min(8, { message: "Password is required and must be 8 character" })
});
const loginSchema = authSchema;
const registerSchema = authSchema.extend({
  name: z.string().min(1).max(255).default("")
});
const handleError = (error) => {
  const generalMessage = "An unexpected error occurred";
  let statusCode = 500;
  let statusMessage = "unexpected error";
  let message = generalMessage;
  let data = void 0;
  console.log(error.response);
  if (error.response) {
    statusCode = error.response.status;
    statusMessage = error.response.statusText;
    if (error.response._data) {
      data = error.response._data && error.response.errors ? error.response.errors : void 0;
      message = error.response._data && error.response._data.message ? error.response._data.message : generalMessage;
    }
  }
  return {
    statusCode,
    statusMessage,
    message,
    data
  };
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_UButton = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><div class="flex items-center justify-center w-full"><div class="flex-1 h-0.5 bg-gray-900 dark:bg-gray-400"></div><span class="px-3 text-sm font-medium text-gray-700 dark:text-gray-200">or</span><div class="flex-1 h-0.5 bg-gray-900 dark:bg-gray-400"></div></div><a href="/api/auth/github" class="block">`);
  _push(ssrRenderComponent(_component_UButton, {
    icon: "i-lucide-github",
    square: "",
    block: "",
    color: "gray"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Continue with Github `);
      } else {
        return [
          createTextVNode(" Continue with Github ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</a></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Auth/AuthButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AuthButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const state = reactive({
  isLoading: false,
  appError: null,
  isConfirmModalVisible: false
});
const useStore = () => {
  const { isLoading, appError, isConfirmModalVisible } = toRefs(state);
  const toast = useToast();
  const toggleLoading = (v2) => {
    state.isLoading = v2;
  };
  const toggleAlertModal = (v2) => {
    state.isConfirmModalVisible = v2;
  };
  const toggleError = (error) => {
    state.appError = error;
  };
  const showMessage = (content) => {
    toast.add({
      title: content.title,
      description: content.description,
      color: "primary"
    });
  };
  const showError = (error) => {
    toast.add({
      title: error.statusCode + "",
      description: error.message ? error.message : error.statusMessage,
      color: "red"
    });
  };
  const baseUrl = process.env.NUXT_PUBLIC_API_BASE_URL;
  async function fetchApi(endpoint, options) {
    toggleLoading(true);
    toggleError(null);
    try {
      const res = await fetch(`${baseUrl}${endpoint}`, options);
      if (!res.ok) {
        const errorBody = await res.json();
        const apiError = {
          statusCode: res.status,
          message: errorBody.message || res.statusText,
          statusMessage: res.statusText
        };
        toggleError(apiError);
        showError(apiError);
        throw new Error(apiError.message);
      }
      const data = await res.json();
      toggleLoading(false);
      return data;
    } catch (error) {
      toggleLoading(false);
      showError({
        statusCode: 0,
        message: error.message,
        statusMessage: "Network error"
      });
      throw error;
    }
  }
  return {
    isLoading,
    appError,
    isConfirmModalVisible,
    showError,
    toggleLoading,
    toggleAlertModal,
    toggleError,
    showMessage,
    fetchApi
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "auth",
  __ssrInlineRender: true,
  setup(__props) {
    const items = [
      { slot: "login", label: "Login", description: "Enter your account to login" },
      {
        slot: "register",
        label: "Register",
        description: "Enter your crentials to create your account"
      }
    ];
    const loginForm = reactive({
      email: "",
      password: ""
    });
    const registerForm = reactive({
      email: "",
      password: "",
      name: ""
    });
    const { isLoading, toggleLoading, showMessage, showError } = useStore();
    async function login(event) {
      try {
        toggleLoading(true);
        const response = await $fetch("/api/auth/login", {
          method: "POST",
          body: event.data
        });
        console.log("Login response:", response);
        showMessage({
          title: "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
          description: "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E19\u0E33\u0E04\u0E38\u0E13\u0E44\u0E1B\u0E22\u0E31\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E2B\u0E25\u0E31\u0E01..."
        });
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        await navigateTo("/", { replace: true });
      } catch (error) {
        console.error("Login error:", error);
        const err = handleError(error);
        showError(err);
      } finally {
        toggleLoading(false);
      }
    }
    async function register(event) {
      try {
        toggleLoading(true);
        const response = await $fetch("/api/auth/register", {
          method: "POST",
          body: event.data
        });
        console.log("Register response:", response);
        showMessage({
          title: "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08",
          description: "\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13\u0E16\u0E39\u0E01\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E23\u0E35\u0E22\u0E1A\u0E23\u0E49\u0E2D\u0E22\u0E41\u0E25\u0E30\u0E44\u0E14\u0E49\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E41\u0E25\u0E49\u0E27"
        });
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        await navigateTo("/", { replace: true });
      } catch (error) {
        console.error("Register error:", error);
        const err = handleError(error);
        showError(err);
      } finally {
        toggleLoading(false);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UTabs = __nuxt_component_0;
      const _component_UCard = __nuxt_component_1;
      const _component_UForm = __nuxt_component_2;
      const _component_UFormGroup = __nuxt_component_3;
      const _component_UInput = __nuxt_component_4;
      const _component_UButton = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_UTabs, mergeProps({
        items,
        class: "w-full max-w-md"
      }, _attrs), {
        login: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(item.label)}</p><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(item.description)}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, toDisplayString(item.label), 1),
                    createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(item.description), 1)
                  ];
                }
              }),
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    schema: "loginSchema" in _ctx ? _ctx.loginSchema : unref(loginSchema),
                    class: "space-y-4",
                    onSubmit: login,
                    state: loginForm
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          label: "Email",
                          name: "email"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: loginForm.email,
                                "onUpdate:modelValue": ($event) => loginForm.email = $event,
                                type: "email",
                                placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
                                disabled: unref(isLoading)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: loginForm.email,
                                  "onUpdate:modelValue": ($event) => loginForm.email = $event,
                                  type: "email",
                                  placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
                                  disabled: unref(isLoading)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          label: "Password",
                          name: "password"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: loginForm.password,
                                "onUpdate:modelValue": ($event) => loginForm.password = $event,
                                type: "password",
                                placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                                disabled: unref(isLoading)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: loginForm.password,
                                  "onUpdate:modelValue": ($event) => loginForm.password = $event,
                                  type: "password",
                                  placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                                  disabled: unref(isLoading)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`<div class="space-y-5 mt-5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UButton, {
                          block: "",
                          type: "submit",
                          loading: unref(isLoading),
                          disabled: unref(isLoading)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(isLoading) ? "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A..." : "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(isLoading) ? "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A..." : "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(AuthButton, { disabled: unref(isLoading) }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(_component_UFormGroup, {
                            label: "Email",
                            name: "email"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: loginForm.email,
                                "onUpdate:modelValue": ($event) => loginForm.email = $event,
                                type: "email",
                                placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
                                disabled: unref(isLoading)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            label: "Password",
                            name: "password"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: loginForm.password,
                                "onUpdate:modelValue": ($event) => loginForm.password = $event,
                                type: "password",
                                placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                                disabled: unref(isLoading)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "space-y-5 mt-5" }, [
                            createVNode(_component_UButton, {
                              block: "",
                              type: "submit",
                              loading: unref(isLoading),
                              disabled: unref(isLoading)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(isLoading) ? "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A..." : "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"), 1)
                              ]),
                              _: 1
                            }, 8, ["loading", "disabled"]),
                            createVNode(AuthButton, { disabled: unref(isLoading) }, null, 8, ["disabled"])
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      schema: "loginSchema" in _ctx ? _ctx.loginSchema : unref(loginSchema),
                      class: "space-y-4",
                      onSubmit: login,
                      state: loginForm
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, {
                          label: "Email",
                          name: "email"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: loginForm.email,
                              "onUpdate:modelValue": ($event) => loginForm.email = $event,
                              type: "email",
                              placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
                              disabled: unref(isLoading)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          label: "Password",
                          name: "password"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: loginForm.password,
                              "onUpdate:modelValue": ($event) => loginForm.password = $event,
                              type: "password",
                              placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                              disabled: unref(isLoading)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "space-y-5 mt-5" }, [
                          createVNode(_component_UButton, {
                            block: "",
                            type: "submit",
                            loading: unref(isLoading),
                            disabled: unref(isLoading)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(isLoading) ? "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A..." : "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"), 1)
                            ]),
                            _: 1
                          }, 8, ["loading", "disabled"]),
                          createVNode(AuthButton, { disabled: unref(isLoading) }, null, 8, ["disabled"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["schema", "state"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, null, {
                header: withCtx(() => [
                  createVNode("p", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, toDisplayString(item.label), 1),
                  createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(item.description), 1)
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    schema: "loginSchema" in _ctx ? _ctx.loginSchema : unref(loginSchema),
                    class: "space-y-4",
                    onSubmit: login,
                    state: loginForm
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, {
                        label: "Email",
                        name: "email"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: loginForm.email,
                            "onUpdate:modelValue": ($event) => loginForm.email = $event,
                            type: "email",
                            placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
                            disabled: unref(isLoading)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        label: "Password",
                        name: "password"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: loginForm.password,
                            "onUpdate:modelValue": ($event) => loginForm.password = $event,
                            type: "password",
                            placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                            disabled: unref(isLoading)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "space-y-5 mt-5" }, [
                        createVNode(_component_UButton, {
                          block: "",
                          type: "submit",
                          loading: unref(isLoading),
                          disabled: unref(isLoading)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(isLoading) ? "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A..." : "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"), 1)
                          ]),
                          _: 1
                        }, 8, ["loading", "disabled"]),
                        createVNode(AuthButton, { disabled: unref(isLoading) }, null, 8, ["disabled"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["schema", "state"])
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        register: withCtx(({ item }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UCard, null, {
              header: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-base font-semibold leading-6 text-gray-900 dark:text-white"${_scopeId2}>${ssrInterpolate(item.label)}</p><p class="mt-1 text-sm text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(item.description)}</p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, toDisplayString(item.label), 1),
                    createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(item.description), 1)
                  ];
                }
              }),
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UForm, {
                    schema: "registerSchema" in _ctx ? _ctx.registerSchema : unref(registerSchema),
                    class: "space-y-4",
                    onSubmit: register,
                    state: registerForm
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          label: "Name",
                          name: "name"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: registerForm.name,
                                "onUpdate:modelValue": ($event) => registerForm.name = $event,
                                placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
                                disabled: unref(isLoading)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: registerForm.name,
                                  "onUpdate:modelValue": ($event) => registerForm.name = $event,
                                  placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
                                  disabled: unref(isLoading)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          label: "Email",
                          name: "email"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: registerForm.email,
                                "onUpdate:modelValue": ($event) => registerForm.email = $event,
                                type: "email",
                                placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
                                disabled: unref(isLoading)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: registerForm.email,
                                  "onUpdate:modelValue": ($event) => registerForm.email = $event,
                                  type: "email",
                                  placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
                                  disabled: unref(isLoading)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UFormGroup, {
                          label: "Password",
                          name: "password"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UInput, {
                                modelValue: registerForm.password,
                                "onUpdate:modelValue": ($event) => registerForm.password = $event,
                                type: "password",
                                placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                                disabled: unref(isLoading)
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UInput, {
                                  modelValue: registerForm.password,
                                  "onUpdate:modelValue": ($event) => registerForm.password = $event,
                                  type: "password",
                                  placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                                  disabled: unref(isLoading)
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`<div class="space-y-5 mt-5"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UButton, {
                          block: "",
                          type: "submit",
                          loading: unref(isLoading),
                          disabled: unref(isLoading)
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(isLoading) ? "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01..." : "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(isLoading) ? "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01..." : "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01"), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(AuthButton, { disabled: unref(isLoading) }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(_component_UFormGroup, {
                            label: "Name",
                            name: "name"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: registerForm.name,
                                "onUpdate:modelValue": ($event) => registerForm.name = $event,
                                placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
                                disabled: unref(isLoading)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            label: "Email",
                            name: "email"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: registerForm.email,
                                "onUpdate:modelValue": ($event) => registerForm.email = $event,
                                type: "email",
                                placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
                                disabled: unref(isLoading)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UFormGroup, {
                            label: "Password",
                            name: "password"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UInput, {
                                modelValue: registerForm.password,
                                "onUpdate:modelValue": ($event) => registerForm.password = $event,
                                type: "password",
                                placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                                disabled: unref(isLoading)
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "space-y-5 mt-5" }, [
                            createVNode(_component_UButton, {
                              block: "",
                              type: "submit",
                              loading: unref(isLoading),
                              disabled: unref(isLoading)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(isLoading) ? "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01..." : "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01"), 1)
                              ]),
                              _: 1
                            }, 8, ["loading", "disabled"]),
                            createVNode(AuthButton, { disabled: unref(isLoading) }, null, 8, ["disabled"])
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UForm, {
                      schema: "registerSchema" in _ctx ? _ctx.registerSchema : unref(registerSchema),
                      class: "space-y-4",
                      onSubmit: register,
                      state: registerForm
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UFormGroup, {
                          label: "Name",
                          name: "name"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: registerForm.name,
                              "onUpdate:modelValue": ($event) => registerForm.name = $event,
                              placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
                              disabled: unref(isLoading)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          label: "Email",
                          name: "email"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: registerForm.email,
                              "onUpdate:modelValue": ($event) => registerForm.email = $event,
                              type: "email",
                              placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
                              disabled: unref(isLoading)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UFormGroup, {
                          label: "Password",
                          name: "password"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UInput, {
                              modelValue: registerForm.password,
                              "onUpdate:modelValue": ($event) => registerForm.password = $event,
                              type: "password",
                              placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                              disabled: unref(isLoading)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "space-y-5 mt-5" }, [
                          createVNode(_component_UButton, {
                            block: "",
                            type: "submit",
                            loading: unref(isLoading),
                            disabled: unref(isLoading)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(isLoading) ? "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01..." : "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01"), 1)
                            ]),
                            _: 1
                          }, 8, ["loading", "disabled"]),
                          createVNode(AuthButton, { disabled: unref(isLoading) }, null, 8, ["disabled"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["schema", "state"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UCard, null, {
                header: withCtx(() => [
                  createVNode("p", { class: "text-base font-semibold leading-6 text-gray-900 dark:text-white" }, toDisplayString(item.label), 1),
                  createVNode("p", { class: "mt-1 text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(item.description), 1)
                ]),
                default: withCtx(() => [
                  createVNode(_component_UForm, {
                    schema: "registerSchema" in _ctx ? _ctx.registerSchema : unref(registerSchema),
                    class: "space-y-4",
                    onSubmit: register,
                    state: registerForm
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UFormGroup, {
                        label: "Name",
                        name: "name"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: registerForm.name,
                            "onUpdate:modelValue": ($event) => registerForm.name = $event,
                            placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
                            disabled: unref(isLoading)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        label: "Email",
                        name: "email"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: registerForm.email,
                            "onUpdate:modelValue": ($event) => registerForm.email = $event,
                            type: "email",
                            placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13",
                            disabled: unref(isLoading)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UFormGroup, {
                        label: "Password",
                        name: "password"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UInput, {
                            modelValue: registerForm.password,
                            "onUpdate:modelValue": ($event) => registerForm.password = $event,
                            type: "password",
                            placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
                            disabled: unref(isLoading)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "space-y-5 mt-5" }, [
                        createVNode(_component_UButton, {
                          block: "",
                          type: "submit",
                          loading: unref(isLoading),
                          disabled: unref(isLoading)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(isLoading) ? "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01..." : "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01"), 1)
                          ]),
                          _: 1
                        }, 8, ["loading", "disabled"]),
                        createVNode(AuthButton, { disabled: unref(isLoading) }, null, 8, ["disabled"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["schema", "state"])
                ]),
                _: 2
              }, 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=auth-CP_RT_LP.mjs.map
