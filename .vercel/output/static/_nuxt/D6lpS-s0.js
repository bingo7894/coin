import{_ as y,c as d,o as i,a as s,b as m,a4 as b,R as u,h as w,an as f,F as k,V as v,e as C,n as A,a1 as B,w as M,N as $,O as L,t as N}from"./Dj3teEM2.js";const H={},I={class:"flex items-center justify-between p-4 bg-white shadow-lg backdrop-blur-sm bg-white/95"},j={class:"flex items-center space-x-3"},z={class:"relative"},q={class:"w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg"};function U(t,e){const o=b;return i(),d("header",I,[s("div",j,[s("div",z,[s("div",q,[m(o,{name:"lucide:calculator",class:"w-4 h-4 text-white"})]),e[0]||(e[0]=s("div",{class:"absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"},null,-1))]),e[1]||(e[1]=s("span",{class:"font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"}," CountCoin ",-1))])])}const G=y(H,[["render",U]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),V=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,o,a)=>a?a.toUpperCase():o.toLowerCase()),D=t=>{const e=V(t);return e.charAt(0).toUpperCase()+e.slice(1)},F=(...t)=>t.filter((e,o,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===o).join(" ").trim();/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=({size:t,strokeWidth:e=2,absoluteStrokeWidth:o,color:a,iconNode:h,name:r,class:n,...g},{slots:p})=>u("svg",{...c,width:t||c.width,height:t||c.height,stroke:a||c.stroke,"stroke-width":o?Number(e)*24/Number(t):e,class:F("lucide",...r?[`lucide-${_(D(r))}-icon`,`lucide-${_(r)}`]:["lucide-icon"]),...g},[...h.map(x=>u(...x)),...p.default?[p.default()]:[]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=(t,e)=>(o,{slots:a})=>u(O,{...o,iconNode:e,name:t},a);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=l("chart-no-axes-column-increasing",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=l("history",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=l("house",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=l("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-vue-next v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=l("user",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]),S={class:"fixed bottom-0 w-full bg-white border-t shadow grid grid-cols-5 text-center text-sm z-50"},J=w({__name:"CoinNavButton",setup(t){const e=f(),o=[{name:"home",label:"หน้าหลัก",to:"/coin",icon:E},{name:"history",label:"ประวัติ",to:"/history",icon:Z},{name:"tag",label:"แท็ก",to:"/tag",icon:K},{name:"report",label:"รายงาน",to:"/report",icon:R},{name:"account",label:"บัญชี",to:"/account",icon:P}];return(a,h)=>{const r=C;return i(),d("nav",S,[(i(),d(k,null,v(o,n=>m(r,{key:n.name,to:n.to,class:A(["flex flex-col items-center py-2 transition-all rounded-t-lg",B(e).path===n.to?"bg-yellow-100 text-yellow-600 font-semibold":"text-gray-500 hover:bg-gray-100"])},{default:M(()=>[(i(),$(L(n.icon),{class:"w-5 h-5 mb-1"})),s("span",null,N(n.label),1)]),_:2},1032,["to","class"])),64))])}}});export{G as _,J as a};
